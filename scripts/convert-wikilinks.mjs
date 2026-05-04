#!/usr/bin/env node
/**
 * Convert Obsidian [[wikilinks]] to standard [markdown](links) with relative paths.
 * Builds a lookup index of all .md files, then rewrites every wikilink in-place.
 *
 * Usage: node scripts/convert-wikilinks.mjs [vault-root]
 *        Defaults to current working directory.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, dirname, extname } from 'node:path';

const ROOT = process.argv[2] || '.';

// ── Build note index: title → relative path from ROOT ───────────────
/** @type {Map<string, string>} lowercase title → path relative to ROOT */
const noteIndex = new Map();

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'scripts') continue;
      await walk(full);
    } else if (extname(e.name) === '.md') {
      const title = e.name.slice(0, -3); // strip .md
      const rel = relative(ROOT, full);   // e.g. Courses/Python Basics.md
      noteIndex.set(title.toLowerCase(), rel);
    }
  }
}

await walk(ROOT);
console.log(`Indexed ${noteIndex.size} notes`);

// ── Convert wikilinks in all .md files ──────────────────────────────
const WIKILINK_RE = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

let filesProcessed = 0;
let linksConverted = 0;

async function convert(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'scripts') continue;
      await convert(full);
    } else if (extname(e.name) === '.md') {
      const content = await readFile(full, 'utf-8');
      const fileDir = dirname(full);

      const converted = content.replace(WIKILINK_RE, (match, target, display) => {
        const key = target.toLowerCase();
        const targetPath = noteIndex.get(key);
        if (!targetPath) return match; // leave unresolved links as-is

        // Compute relative path from this file's directory to the target
        const rel = relative(fileDir, join(ROOT, targetPath));
        // Use forward slashes and encode spaces/special chars for URLs
        const encoded = rel.split(/[\\/]/).map(s => encodeURIComponent(s)).join('/');
        const label = display || target;
        linksConverted++;
        return `[${label}](${encoded})`;
      });

      if (converted !== content) {
        await writeFile(full, converted);
        filesProcessed++;
      }
    }
  }
}

await convert(ROOT);
console.log(`Converted ${linksConverted} links across ${filesProcessed} files`);

// ── README context-swap for github-browse ───────────────────────────
// This script always runs in the github-browse generation pipeline
// (see .github/workflows/convert-links.yml). Rewrite the "How to Access"
// section to reflect that the reader is already on the github-browse branch.
const readmePath = join(ROOT, 'README.md');
try {
  const original = await readFile(readmePath, 'utf-8');
  const githubBrowseBlock =
    '> **You are viewing the GitHub-browseable mirror of the LinkedIn Learning Vault.**\n' +
    '> All `[[wikilinks]]` have been auto-converted to relative `.md` links so you can\n' +
    '> navigate directly in the GitHub web UI.\n' +
    '>\n' +
    '> Start at [000 Map of Content.md](000%20Map%20of%20Content.md).\n' +
    '>\n' +
    '> For the full Obsidian experience (graph view, backlinks, tag colors, live wikilinks),\n' +
    '> switch to the **[main](../../tree/main)** branch and clone locally.\n';

  const rewritten = original.replace(
    /> \*\*You are on `main`[\s\S]*?(?=## How to Access)/,
    githubBrowseBlock + '\n',
  );
  if (rewritten !== original) {
    await writeFile(readmePath, rewritten);
    console.log('Rewrote README.md for github-browse context');
  } else {
    console.warn('README context-swap: pattern not found — README.md left unchanged');
  }
} catch (err) {
  console.error('README context-swap failed:', err.message);
}
