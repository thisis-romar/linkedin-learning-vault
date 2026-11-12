#!/usr/bin/env node
// github-slugger 2.0.0 is vendored under its MIT license in scripts/vendor/.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import GithubSlugger from './vendor/github-slugger/index.js';

const root = resolve(process.argv[2] || '.');
const notes = new Map(), names = new Map();
async function walk(directory) {
  for (const entry of await readdir(directory, {withFileTypes:true})) {
    if (entry.name.startsWith('.') || ['node_modules', 'scripts'].includes(entry.name)) continue;
    const file = join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (extname(entry.name) === '.md') {
      const path = relative(root, file).replaceAll('\\', '/');
      const text = await readFile(file, 'utf8');
      const slugger = new GithubSlugger(), blocks = new Map(), headings = new Map();
      let fence = false, nearest = '';
      for (const line of text.split('\n')) {
        if (/^\s*(?:```|~~~)/.test(line)) { fence = !fence; continue; }
        if (fence) continue;
        const heading = line.match(/^#{1,6}\s+(.+)$/);
        if (heading) {
          const plain = heading[1].replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_,t,d)=>d||t).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '');
          nearest = slugger.slug(plain);
          if (!headings.has(plain.toLowerCase())) headings.set(plain.toLowerCase(), nearest);
        }
        const block = line.match(/(?:^|\s)\^([a-zA-Z0-9-]+)\s*$/);
        if (block) { if (!nearest || blocks.has(block[1])) throw new Error('Invalid native target in '+path); blocks.set(block[1], nearest); }
      }
      notes.set(path, {text, blocks, headings});
      const name = basename(path, '.md').toLowerCase();
      names.set(name, [...(names.get(name)||[]), path]);
    }
  }
}
await walk(root);

function resolveNote(target, current) {
  if (!target) return current;
  const full = target.replace(/\.md$/, '')+'.md';
  if (notes.has(full)) return full;
  const candidates = names.get(target.replace(/\.md$/, '').toLowerCase())||[];
  if (candidates.length !== 1) throw new Error('Unresolved or ambiguous link in '+current);
  return candidates[0];
}
function fragmentFor(path, fragment) {
  if (!fragment) return '';
  const note = notes.get(path);
  const slug = fragment.startsWith('^') ? note.blocks.get(fragment.slice(1)) : note.headings.get(fragment.toLowerCase());
  if (!slug) throw new Error('Unresolved heading target in '+path);
  return '#'+slug;
}
const encodedRelative = (from, target) => relative(dirname(from), target).split(/[\\/]/).map(encodeURIComponent).join('/');
let converted = 0;
for (const [path, note] of notes) {
  let text = note.text.replace(/```lle-transcript\n[^\n]+\n```/g, '> Private transcript and semantic callouts are available locally in Obsidian with your verified cache.');
  let fence = false;
  text = text.split('\n').map(line => {
    if (/^\s*(?:```|~~~)/.test(line)) { fence = !fence; return line; }
    if (fence) return line;
    return line.split(/(`[^`]*`)/g).map(part => {
      if (part.startsWith('`')) return part;
      return part.replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (_, target, display) => {
        const [name, fragment] = target.split('#'), destination = resolveNote(name, path);
        converted++;
        return `[${display||name||fragment}](${encodedRelative(path,destination)}${fragmentFor(destination,fragment)})`;
      }).replace(/(?<!!)\[([^\]]*)\]\(#\^([a-zA-Z0-9-]+)\)/g, (_, label, id) => `[${label}](${fragmentFor(path,'^'+id)})`);
    }).join('').replace(/(?:^|\s)\^[a-zA-Z0-9-]+\s*$/, '');
  }).join('\n');
  if (path === 'README.md') text = text.replace(/<!-- vault-mode -->[\s\S]*?<!-- \/vault-mode -->/, '<!-- vault-mode -->\nYou are viewing the **GitHub navigation mirror**. Internal links work in GitHub. For graph view, local transcript display/search, styling, and progress tracking, clone the [blender-only source branch](https://github.com/thisis-romar/linkedin-learning-vault/tree/blender-only) and open it in Obsidian.\n<!-- /vault-mode -->');
  await writeFile(join(root,path),text);
}
let sourceRevision = null;
try { sourceRevision = execFileSync('git',['-C',root,'rev-parse','HEAD'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim(); } catch { /* A standalone preview need not be a Git worktree. */ }
await writeFile(join(root,'BROWSE-SOURCE.json'),JSON.stringify({schema_version:1,source_branch:'blender-only',source_revision:sourceRevision,transcript_text_included:false,converter:'scripts/convert-wikilinks.mjs'},null,2)+'\n');
console.log(JSON.stringify({notes:notes.size,convertedWikilinks:converted,privateContentRead:false}));
