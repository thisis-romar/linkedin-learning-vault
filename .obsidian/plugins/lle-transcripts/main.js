"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/obsidian-plugins/lle-transcripts/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PrivateTranscriptsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/obsidian-plugins/lle-transcripts/format.ts
function safeCacheDirectory(value) {
  if (typeof value !== "string" || !value.trim() || /^[\\/]/.test(value) || [...value].some((c) => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127) || /[:*?"<>|]/.test(value))
    return null;
  const parts = value.replaceAll("\\", "/").split("/");
  if (parts.some((part) => part === ".." || !part)) return null;
  return parts.join("/");
}
function validatePrivateRecord(value, lesson) {
  if (!value || typeof value !== "object") return false;
  const r = value;
  return r.courseSlug === lesson.courseSlug && r.videoSlug === lesson.videoSlug && r.contentId === lesson.contentId && Array.isArray(r.lines) && r.lines.length > 0 && r.lines.every(
    (l, i) => typeof (l == null ? void 0 : l.caption) === "string" && Number.isFinite(l.transcriptStartAt) && l.transcriptStartAt >= 0 && (i === 0 || l.transcriptStartAt >= r.lines[i - 1].transcriptStartAt)
  );
}
function timestamp(ms) {
  const seconds = Math.floor(ms / 1e3);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
function paragraphBlocks(lines) {
  const result = [];
  let start = 0, buffer = [];
  for (const [i, line] of lines.entries()) {
    const caption = line.caption.replace(/\s+/g, " ").replace(
      /\((?:upbeat |background )?(?:music|applause|laughter|laughing|silence|typing|clicking|chime|beep|buzzing)[^)]*\)/gi,
      ""
    ).trim();
    if (caption) {
      if (!buffer.length) start = line.transcriptStartAt;
      buffer.push(caption);
    }
    const next = lines[i + 1];
    if (buffer.length && (!next || next.transcriptStartAt - line.transcriptStartAt > 8e3 || line.transcriptStartAt - start >= 9e4 || /^- /.test(next.caption.trim()))) {
      result.push({ startMs: start, text: buffer.join(" ") });
      buffer = [];
    }
  }
  if (buffer.length) result.push({ startMs: start, text: buffer.join(" ") });
  return result;
}
function escapeMarkdown(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\\`*_{}[\]()!|$]/g, "\\$&");
}
function safeWikiTarget(target) {
  return !!target && !/[[\]|<>#\0]/.test(target) && !/^[\\/]/.test(target) && !target.split(/[\\/]/).includes("..");
}
function enrich(text, index, current, seen) {
  const targets = /* @__PURE__ */ new Map();
  for (const [alias, target] of Object.entries(index.glossary))
    if (safeWikiTarget(target)) targets.set(alias.toLowerCase(), target);
  for (const lesson of Object.values(index.lessons))
    if (lesson.courseSlug !== current.courseSlug && lesson.courseTitle.length >= 20) {
      targets.set(
        lesson.courseTitle.toLowerCase(),
        lesson.notePath.replace(/\.md$/, "")
      );
    }
  const terms = [...targets.keys()].sort((a, b) => b.length - a.length).map((v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(
    `https?:\\/\\/[^\\s<>"'\`]+${terms.length ? `|\\b(?:${terms.join("|")})\\b` : ""}`,
    "gi"
  );
  let result = "", position = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index, value = match[0];
    result += escapeMarkdown(text.slice(position, start));
    if (/^https?:\/\//i.test(value)) {
      let valid = false;
      try {
        const u = new URL(value);
        valid = !u.username && !u.password;
      } catch (e) {
      }
      result += valid ? `[${escapeMarkdown(value)}](<${value.replace(/</g, "%3C").replace(/>/g, "%3E")}>)` : escapeMarkdown(value);
    } else {
      const target = targets.get(value.toLowerCase());
      if (target && !seen.has(target) && safeWikiTarget(target) && !/[[\]|]/.test(value)) {
        result += `[[${target}|${value}]]`;
        seen.add(target);
      } else result += escapeMarkdown(value);
    }
    position = start + value.length;
  }
  return result + escapeMarkdown(text.slice(position));
}
function formatPrivateTranscript(record, lesson, index) {
  const seen = /* @__PURE__ */ new Set(), lines = ["> [!transcript]- Transcript", ">"];
  const videoURL = `https://www.linkedin.com/learning/${lesson.courseSlug}/${lesson.videoSlug}`;
  for (const block of paragraphBlocks(record.lines))
    lines.push(
      `> **[${timestamp(block.startMs)}](${videoURL}?t=${Math.floor(block.startMs / 1e3)})** ${enrich(block.text, index, lesson, seen)}`,
      ">"
    );
  if (Array.isArray(record.semanticSections) && record.semanticSections.length) {
    lines.push("", "> [!info]- Semantic Content", ">");
    for (const section of record.semanticSections.slice(0, 8))
      if (typeof section.label === "string" && Array.isArray(section.items)) {
        const items = section.items.slice(0, 5).filter(
          (v) => typeof v.value === "string" && Number.isFinite(v.count)
        ).map(
          (v) => `${enrich(v.value, index, lesson, /* @__PURE__ */ new Set())} (${v.count})`
        );
        lines.push(
          `> **${escapeMarkdown(section.label)}:** ${items.join(", ")}`
        );
      }
  }
  return lines.join("\n");
}

// src/obsidian-plugins/lle-transcripts/main.ts
var INDEX = ".obsidian/plugins/lle-transcripts/index.json";
var PrivateTranscriptsPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "cacheDirectory", ".private/transcripts");
    __publicField(this, "index", {
      schemaVersion: 1,
      lessons: {},
      glossary: {}
    });
    __publicField(this, "records", /* @__PURE__ */ new Map());
    __publicField(this, "searchRows", null);
  }
  async onload() {
    var _a;
    const saved = await this.loadData();
    if (saved && typeof saved === "object")
      this.cacheDirectory = (_a = safeCacheDirectory(
        saved.cacheDirectory
      )) != null ? _a : this.cacheDirectory;
    await this.reloadIndex();
    this.registerMarkdownCodeBlockProcessor(
      "lle-transcript",
      async (source, el, ctx) => {
        const key = source.trim(), lesson = Object.hasOwn(this.index.lessons, key) ? this.index.lessons[key] : void 0;
        if (!lesson || !/^[a-z0-9-]+::[a-z0-9-]+$/.test(key)) {
          el.textContent = "This lesson is not in the installed transcript index.";
          return;
        }
        try {
          const record = await this.loadRecord(key, lesson);
          el.textContent = "";
          await import_obsidian.MarkdownRenderer.render(
            this.app,
            formatPrivateTranscript(record, lesson, this.index),
            el,
            ctx.sourcePath,
            this
          );
        } catch (e) {
          el.textContent = "Private transcript is not installed or could not be verified. Install the local content cache described in the vault README.";
        }
      }
    );
    this.addCommand({
      id: "search-private-transcripts",
      name: "Search private transcripts",
      callback: () => new TranscriptSearch(this.app, this).open()
    });
    this.addSettingTab(new TranscriptSettings(this.app, this));
  }
  async reloadIndex() {
    this.records.clear();
    this.searchRows = null;
    try {
      const value = JSON.parse(
        await this.app.vault.adapter.read((0, import_obsidian.normalizePath)(INDEX))
      );
      if (value.schemaVersion !== 1 || !value.lessons || !value.glossary)
        throw new Error("Index schema");
      this.index = value;
    } catch (e) {
      this.index = { schemaVersion: 1, lessons: {}, glossary: {} };
    }
  }
  async loadRecord(key, lesson) {
    const cached = this.records.get(key);
    if (cached) return cached;
    if (!/^record-[0-9]+\.json$/.test(lesson.recordFile))
      throw new Error("Cache filename");
    const directory = safeCacheDirectory(this.cacheDirectory);
    if (!directory) throw new Error("Cache directory");
    const raw = await this.app.vault.adapter.read(
      (0, import_obsidian.normalizePath)(`${directory}/${lesson.recordFile}`)
    );
    if (lesson.sha256) {
      const digest = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(raw)
      );
      const actual = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
      if (actual !== lesson.sha256) throw new Error("Cache integrity");
    }
    const record = JSON.parse(raw);
    if (!validatePrivateRecord(record, lesson))
      throw new Error("Cache identity");
    this.records.set(key, record);
    return record;
  }
  async search(query) {
    if (!query.trim()) return [];
    if (!this.searchRows) {
      const directory = safeCacheDirectory(this.cacheDirectory);
      if (!directory) return [];
      try {
        const raw = await this.app.vault.adapter.read(
          (0, import_obsidian.normalizePath)(`${directory}/search-index.json`)
        );
        if (this.index.searchSha256) {
          const digest = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(raw)
          );
          const actual = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
          if (actual !== this.index.searchSha256) return [];
        }
        const value = JSON.parse(raw);
        if (value.selectionSha256 !== this.index.selectionSha256 || !Array.isArray(value.entries))
          return [];
        this.searchRows = value.entries.filter(
          (row) => row && typeof row.key === "string" && Object.hasOwn(this.index.lessons, row.key) && Array.isArray(row.lines)
        );
      } catch (e) {
        return [];
      }
    }
    const term = query.trim().toLocaleLowerCase(), hits = [];
    for (const row of this.searchRows) {
      const lesson = this.index.lessons[row.key];
      for (const line of row.lines)
        if (line && typeof line.caption === "string" && Number.isFinite(line.transcriptStartAt) && line.caption.toLocaleLowerCase().includes(term)) {
          hits.push({
            lesson,
            caption: line.caption,
            startMs: line.transcriptStartAt
          });
          if (hits.length >= 50) return hits;
        }
    }
    return hits;
  }
  async openLesson(lesson) {
    await this.app.workspace.openLinkText(`${lesson.notePath}#^lle-video-${lesson.videoSlug}`, "", false, {
      active: true
    });
  }
  async saveDirectory(value) {
    const safe = safeCacheDirectory(value);
    if (!safe) return false;
    this.cacheDirectory = safe;
    this.records.clear();
    this.searchRows = null;
    await this.saveData({ cacheDirectory: safe });
    return true;
  }
};
var TranscriptSearch = class extends import_obsidian.SuggestModal {
  constructor(app, owner) {
    super(app);
    __publicField(this, "owner", owner);
    this.setPlaceholder("Search private transcripts");
  }
  getSuggestions(query) {
    return this.owner.search(query);
  }
  renderSuggestion(hit, el) {
    el.createEl("div", {
      text: `${hit.lesson.courseTitle} \xB7 ${hit.lesson.title} \xB7 ${timestamp(hit.startMs)}`
    });
    el.createEl("small", { text: hit.caption });
  }
  onChooseSuggestion(hit) {
    void this.owner.openLesson(hit.lesson);
  }
};
var TranscriptSettings = class extends import_obsidian.PluginSettingTab {
  constructor(app, owner) {
    super(app, owner);
    __publicField(this, "owner", owner);
  }
  display() {
    this.containerEl.empty();
    new import_obsidian.Setting(this.containerEl).setName("Private content folder").setDesc(
      "Folder inside this vault containing your local transcript cache. The default .private folder is excluded from Git."
    ).addText(
      (text) => text.setValue(this.owner.cacheDirectory).onChange(async (value) => {
        if (!await this.owner.saveDirectory(value))
          new import_obsidian.Notice(
            "Use a relative folder inside this vault, without parent-directory segments."
          );
      })
    );
    new import_obsidian.Setting(this.containerEl).setName("Reload transcript index").addButton(
      (button) => button.setButtonText("Reload").onClick(async () => {
        await this.owner.reloadIndex();
        new import_obsidian.Notice("Local transcript index reloaded.");
      })
    );
  }
};
