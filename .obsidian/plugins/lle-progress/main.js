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

// src/obsidian-plugins/lle-progress/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LleProgressPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var LL_VIDEO_URL_RE = /^https?:\/\/(?:www\.)?linkedin\.com\/learning\/([^/?#]+)(?:\/([^/?#]+))?/i;
var DEBOUNCE_MS = 250;
var LleProgressPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "index", { courses: {}, generated: "" });
    __publicField(this, "currentCourseSlug", null);
    __publicField(this, "writeQueue", Promise.resolve());
    __publicField(this, "lastFileOpenAt", 0);
  }
  async onload() {
    await this.loadIndex();
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => this.handleFileOpen(file))
    );
    this.registerDomEvent(document, "click", (ev) => this.handleClick(ev));
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile) {
      queueMicrotask(() => this.handleFileOpen(activeFile));
    }
  }
  async loadIndex() {
    const indexPath = (0, import_obsidian.normalizePath)(
      `.obsidian/plugins/lle-progress/index.json`
    );
    try {
      const raw = await this.app.vault.adapter.read(indexPath);
      this.index = JSON.parse(raw);
    } catch (err) {
      console.warn(
        "[lle-progress] index.json missing or unreadable; progress tracking will no-op until vault is regenerated.",
        err
      );
      new import_obsidian.Notice(
        "lle-progress: index.json not found \u2014 regenerate the vault (npm run obsidian) to populate it.",
        6e3
      );
    }
  }
  async handleFileOpen(file) {
    if (!file) {
      this.currentCourseSlug = null;
      return;
    }
    const now = Date.now();
    if (now - this.lastFileOpenAt < DEBOUNCE_MS) return;
    this.lastFileOpenAt = now;
    const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
    const slug = this.courseSlugFromFrontmatter(fm);
    if (!slug) {
      this.currentCourseSlug = null;
      return;
    }
    this.currentCourseSlug = slug;
    await this.enqueueWrite(() => this.recordCourseOpen(slug));
  }
  async handleClick(ev) {
    const target = ev.target;
    if (!target) return;
    const anchor = target.closest(
      "a.external-link, a[href^='http']"
    );
    if (!anchor) return;
    const href = anchor.getAttribute("href") ?? anchor.href;
    const parsed = this.parseVideoUrl(href);
    if (!parsed) return;
    const courseSlug = parsed.courseSlug;
    const videoSlug = parsed.videoSlug;
    if (!videoSlug) return;
    await this.enqueueWrite(() => this.recordVideoClick(courseSlug, videoSlug));
  }
  parseVideoUrl(href) {
    const m = LL_VIDEO_URL_RE.exec(href);
    if (!m) return null;
    return { courseSlug: m[1], videoSlug: m[2] ?? null };
  }
  courseSlugFromFrontmatter(fm) {
    if (!fm) return null;
    if (typeof fm["slug"] !== "string") return null;
    if (fm["type"] !== "course") return null;
    return fm["slug"];
  }
  async enqueueWrite(task) {
    const run = this.writeQueue.then(
      () => task().catch((err) => {
        console.error("[lle-progress] write failed:", err);
      })
    );
    this.writeQueue = run;
    return run;
  }
  pathsForCourse(courseSlug) {
    return this.index.courses[courseSlug] ?? [];
  }
  async recordCourseOpen(courseSlug) {
    const paths = this.pathsForCourse(courseSlug);
    if (paths.length === 0) return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    for (const pathRel of paths) {
      const file = this.app.vault.getAbstractFileByPath(pathRel);
      if (!(file instanceof import_obsidian.TFile)) continue;
      await this.app.fileManager.processFrontMatter(
        file,
        (fm) => {
          const activity = this.ensureCourseActivity(fm, courseSlug);
          activity.open_count = (activity.open_count ?? 0) + 1;
          activity.last_opened = now;
          this.recomputeDerived(fm, now);
        }
      );
    }
  }
  async recordVideoClick(courseSlug, videoSlug) {
    const paths = this.pathsForCourse(courseSlug);
    if (paths.length === 0) return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    for (const pathRel of paths) {
      const file = this.app.vault.getAbstractFileByPath(pathRel);
      if (!(file instanceof import_obsidian.TFile)) continue;
      await this.app.fileManager.processFrontMatter(
        file,
        (fm) => {
          const activity = this.ensureCourseActivity(fm, courseSlug);
          const video = this.ensureVideoActivity(activity, videoSlug);
          video.click_count = (video.click_count ?? 0) + 1;
          video.last_clicked = now;
          this.recomputeDerived(fm, now);
        }
      );
    }
  }
  ensureCourseActivity(fm, courseSlug) {
    if (!Array.isArray(fm.course_activity)) fm.course_activity = [];
    let entry = fm.course_activity.find(
      (c) => this.slugMatches(c.course, courseSlug)
    );
    if (!entry) {
      entry = {
        course: courseSlug,
        last_opened: null,
        open_count: 0,
        videos: []
      };
      fm.course_activity.push(entry);
    }
    if (!Array.isArray(entry.videos)) entry.videos = [];
    return entry;
  }
  ensureVideoActivity(activity, videoSlug) {
    let entry = activity.videos.find((v) => v.video === videoSlug);
    if (!entry) {
      entry = { video: videoSlug, last_clicked: null, click_count: 0 };
      activity.videos.push(entry);
    }
    return entry;
  }
  /** Matches either bare slug or a "[[Title]]" wikilink value by substring. */
  slugMatches(stored, slug) {
    if (!stored) return false;
    if (stored === slug) return true;
    return stored.toLowerCase().includes(slug.toLowerCase());
  }
  recomputeDerived(fm, now) {
    const activity = Array.isArray(fm.course_activity) ? fm.course_activity : [];
    let totalOpens = 0;
    let coursesVisited = 0;
    let videosVisited = 0;
    let allVideosClicked = activity.length > 0;
    for (const c of activity) {
      totalOpens += c.open_count ?? 0;
      if ((c.open_count ?? 0) > 0) coursesVisited++;
      const videos = Array.isArray(c.videos) ? c.videos : [];
      for (const v of videos) {
        if ((v.click_count ?? 0) > 0) videosVisited++;
        if ((v.click_count ?? 0) === 0) allVideosClicked = false;
      }
      if (videos.length === 0) allVideosClicked = false;
    }
    fm.activity_total = totalOpens;
    fm.courses_visited = coursesVisited;
    fm.videos_visited = videosVisited;
    fm.last_activity = now;
    const status = totalOpens === 0 ? "fresh" : allVideosClicked ? "completed" : "in-progress";
    fm.progress_status = status;
    const existingTags = Array.isArray(fm.tags) ? fm.tags.filter((t) => typeof t === "string" && !t.startsWith("status/")) : typeof fm.tags === "string" ? [fm.tags] : [];
    existingTags.push(`status/${status}`);
    fm.tags = existingTags;
  }
  onunload() {
  }
};
