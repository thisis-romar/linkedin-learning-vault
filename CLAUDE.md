# CLAUDE.md

This is an Obsidian knowledge vault generated from the LinkedIn Learning Technology catalog.

## Structure
- Paths/ — Learning paths grouped by LinkedIn official topic (376 notes)
  - Artificial Intelligence (AI)/
  - Cloud Computing/
  - Cybersecurity/
  - Data Science/
  - Database Management/
  - DevOps/
  - Hardware/
  - IT Help Desk/
  - Mobile Development/
  - Network and System Administration/
  - Software Development/
  - Web Development/
  - Other/
- Courses/ — Individual courses grouped by primary topic (1719 notes)
  - Artificial Intelligence (AI)/
  - Cloud Computing/
  - Cybersecurity/
  - Data Science/
  - Database Management/
  - DevOps/
  - Hardware/
  - IT Help Desk/
  - Mobile Development/
  - Network and System Administration/
  - Software Development/
  - Web Development/
  - Other/
- Instructors/ — Course instructors grouped by primary topic (641 notes)
  - Artificial Intelligence (AI)/
  - Cloud Computing/
  - Cybersecurity/
  - Data Science/
  - Database Management/
  - DevOps/
  - Hardware/
  - IT Help Desk/
  - Mobile Development/
  - Network and System Administration/
  - Software Development/
  - Web Development/
  - Other/
- Skills/ — Skill MOC notes with course wikilinks (916 notes)
- Topics/ — LinkedIn official topic MOCs (12 notes)
- 000 Map of Content.md — Top-level index

## Conventions
- ALWAYS use [[wikilinks]] for internal links
- Transcripts in collapsible callouts: > [!transcript]- Transcript
- Timestamp links: [M:SS](url?t=ms) deep-link to LinkedIn Learning video position
- Course notes include path context navigation (prev/next) and jump links
- Path and Topic notes end with a `Part of [[000 Map of Content]]` hub backlink
- Do NOT create links to notes that don't exist unless asked

### Frontmatter fields
- **type**: course | learning-path | professional-certificate | instructor | topic | skill | moc
- **cssclasses**: applied to note body for styling (lle-course, lle-level-beginner, etc.)
- **tags**: topic/{slug} for LinkedIn categories, skill/{slug} for course skills, status/{fresh|in-progress|completed} on path notes (auto-managed)
- **linkedin_topic** (courses): primary topic string
- **linkedin_topics** (paths): array of all assigned topic names

### Course path-nav fields (index-aligned convention)
- **learning_paths**: array of wikilinks to every path this course belongs to
- **prev_courses**: array of wikilinks (or null) — prev course in each respective path
- **next_courses**: array of wikilinks (or null) — next course in each respective path
- **path_count**: number of paths containing this course
- **path_nav**: JSON-encoded string with the full per-path structure (parse via DataviewJS for advanced queries)

**Convention**: index N of `prev_courses` / `next_courses` matches index N of `learning_paths`. A null slot means the course is first (no prev) or last (no next) in that specific path.

### Path activity fields (auto-maintained by lle-progress plugin)
- **last_activity**: ISO timestamp of most recent course open or video click
- **activity_total**: sum of all open_count values across all courses
- **courses_visited**: distinct courses with open_count > 0
- **videos_visited**: distinct videos with click_count > 0
- **progress_status**: fresh | in-progress | completed (also mirrored as status/* tag)
- **course_activity**: nested array — per-course open_count, last_opened, and per-video click_count / last_clicked

## Color System
Graph view uses ~46 color groups (12 topics × 3 folder types + structural):
- **Topic colors** (override — applied to Paths/, Courses/, Instructors/ subfolders): AI=#4E79A7, Cloud=#F28E2B, Cyber=#E15759, DataSci=#76B7B2, DB=#59A14F, DevOps=#EDC948, HW=#B07AA1, HelpDesk=#FF9DA7, Mobile=#9C755F, NetAdmin=#BAB0AC, SoftDev=#86BCB6, WebDev=#8CD17D
- **Structural colors** (fallback): Courses=#6366F1, Instructors=#A855F7, Topics=#F59E0B, Skills=#0EA5E9, Certs=#EC4899, LPs=#22C55E, Other=#64748B, MOC=#F97316

CSS classes per note type (via cssclasses frontmatter):
- lle-course, lle-learning-path, lle-professional-certificate, lle-instructor, lle-topic, lle-skill, lle-moc
- Level variants: lle-level-beginner, lle-level-intermediate, lle-level-advanced
- Styled with: gradient type banner, colored left border, level right border, inline title accent
- See .obsidian/snippets/note-types.css

## Stats
- 376 learning paths + professional certificates
- 1719 unique courses with transcripts
- 641 instructors
- 916 skills
- 12 LinkedIn official topics
- 2481 path-to-course links
- CSS snippets: timestamps.css (timestamp styling), note-types.css (type banners + accents), graph-view.css (graph edge/node contrast)
- Custom plugin: lle-progress (automatic per-video engagement tracking in path notes)
