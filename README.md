# LinkedIn Learning Vault

An Obsidian vault of course, path, instructor, skill, and glossary notes from the LinkedIn Learning Technology catalog. The `audit/blender-all-courses` branch also contains sanitized Blender audit reports.

The companion [LinkedIn Learning Extractor](https://github.com/thisis-romar/linkedin-learning-extractor/tree/audit/blender-all-courses) generates the vault and contains the CLI, analytics tools, and technical audit notes. The existing generated note collection and the Blender audit have separate scopes: the audit did not add downloaded Blender assets or claim that the existing notes contain those assets.

## Blender audit — November 2026

The fixed catalog scope contains **33 software-filtered courses and 1,789 TOC lessons**. The search snapshot reconciles **1,790 result identities: 33 courses and 1,757 videos**; the TOCs supply 32 additional lesson identities. These denominators are recorded separately.

| Audit observation                                                        | Status                                                                                                        |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Provided caption, transcript-reference, rendition, and resource metadata | All 1,789 lesson identities checked; no unresolved requested-field errors                                     |
| Description-link metadata                                                | 1,756 fresh lesson checks plus 33 dated cached default-video observations                                     |
| Exercise archives                                                        | 37 offers across 30 courses; files remain `available_unverified`                                              |
| Detailed relationship source review                                      | Six pairs across six courses; all remain candidates, with named relationship declarations unresolved          |
| Provider course-language declarations                                    | Three `de` and three `en` values observed in public `Course.inLanguage` metadata for the six reviewed courses |
| Full asset verification                                                  | Incomplete; no standalone course assets were downloaded                                                       |

Provider language declarations do not verify original audio or translation families. Matching titles, TOCs, authors, or version labels do not establish a replacement, formal version family, or compatible files. The German Blender 3.5 page explicitly covers software changes from 2.8 to 3.5, while its introduction and description retain 2.8 wording; the reason for that wording remains unresolved.

### Reports and evidence boundaries

| Report                                                                             | Contents                                                                                            |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Audit report](Audits/Blender/2026-11-11.md)                                       | Scope, search reconciliation, findings, and remaining limits                                        |
| [Coverage](Audits/Blender/coverage.json)                                           | Denominators, completion flags, method scopes, and evidence hashes                                  |
| [Course inventory](Audits/Blender/inventory.json)                                  | All 33 primary course identities and three separate keyword candidates                              |
| [Lesson metadata](Audits/Blender/lesson-metadata.json)                             | Sanitized metadata observations for all 1,789 lessons                                               |
| [Relationships and resource metadata](Audits/Blender/relationships-resources.json) | Provided resource fields, description-link observations, and relationship candidates                |
| [Targeted source-review ledger](Audits/Blender/relationship-source-review.json)    | Six pair classifications, provider language declarations, public source URLs, and observation times |

The reports contain sanitized metadata only. They exclude session material, card/PIN values, signed resource URLs, raw HTML, DOM captures, screenshots, and description passages. Authenticated audit evidence is kept outside both Git worktrees, using private directories with mode `0700` and files with mode `0600`. No merges or deployments were performed as part of the audit. GitHub links reflect only committed and pushed versions; local changes are not automatically published.

### Remaining work

- Inspect public provider language declarations for the other 27 courses. Original audio remains unverified for all courses.
- Complete the additional scheme-less link scan. Its interim pass covered 1,124 fresh lesson descriptions; the remaining 632 fresh descriptions, 33 cached defaults, and 33 course descriptions can be checked from saved evidence. The completed main pass covered structured hyperlinks and literal HTTP(S) URLs.
- Review other relationship candidates, including the 50 cross-language-facet pairs. The six detailed version-pair reviews do not establish those relationships.
- Decide whether to extend the scope to the supplemental Unity course with corroborated Blender workflow relevance. The three keyword-only candidates expose 133 lessons outside the primary inventory; their relevance is not equivalent.
- Refresh the dated catalog snapshot and cached observations only if a uniformly current snapshot is required.
- Keep archive members, textures/dependencies, media and text fidelity, playback, compatibility, and asset-byte integrity unverified under the no-download constraint. The full asset denominator remains unknown.

Production CLI account validation, retry/session handling, debug-output permissions, reusable audit tooling, and Linux CI remain separate work in the [extractor technical report](https://github.com/thisis-romar/linkedin-learning-extractor/blob/audit/blender-all-courses/docs/audits/blender-2026-11-11/README.md).

## Open the vault

```bash
git clone --branch audit/blender-all-courses \
  https://github.com/thisis-romar/linkedin-learning-vault.git
```

1. In Obsidian, choose **Open folder as vault** and select the cloned folder.
2. Open [000 Map of Content.md](000%20Map%20of%20Content.md) to navigate the catalog, or [000 Glossary Index.md](000%20Glossary%20Index.md) for glossary notes.
3. The included appearance settings enable `timestamps`, `note-types`, `graph-view`, and `tag-colors`. Check **Settings → Appearance → CSS snippets** if they are not active.
4. Open Graph View with `Ctrl+G` / `Cmd+G`. The checked-in graph configuration contains 62 color groups.

Notes use Obsidian `[[wikilinks]]`. The report links in this README use ordinary Markdown links so they also work when browsing this branch on GitHub.

## Existing note inventory

These are tracked Markdown counts in this checkout, separate from the Blender audit inventory. Counts do not establish transcript completeness, source fidelity, or asset availability.

| Directory                                                      | Tracked Markdown files |
| -------------------------------------------------------------- | ---------------------: |
| [Courses](Courses/)                                            |                  1,719 |
| [Instructors](Instructors/)                                    |                    641 |
| [Skills](Skills/)                                              |                    916 |
| [Paths](Paths/) — learning paths and professional certificates |                    376 |
| [Glossary](Glossary/)                                          |                    799 |
| [Topics](Topics/)                                              |                     12 |
| Entire checkout, including indexes and documentation           |                  4,471 |

Course notes can include transcript callouts, timestamp links, semantic content callouts, path navigation, and skill tags. The extractor's `npm run obsidian` command generates the vault; regeneration is separate from reviewing or publishing the audit reports.

## Branches and web publishing

| Branch or destination                                                                                                 | Purpose                                                                                     |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`audit/blender-all-courses`](https://github.com/thisis-romar/linkedin-learning-vault/tree/audit/blender-all-courses) | Existing notes plus the sanitized Blender audit                                             |
| [`main`](https://github.com/thisis-romar/linkedin-learning-vault/tree/main)                                           | Source vault in Obsidian wikilink format                                                    |
| [`github-browse`](https://github.com/thisis-romar/linkedin-learning-vault/tree/github-browse)                         | Generated Markdown-link view of `main`; not the audit branch                                |
| [Quartz site](https://thisis-romar.github.io/linkedin-learning-vault)                                                 | A separately built GitHub Pages view; this audit did not verify or update its live contents |

The configured [link-conversion workflow](.github/workflows/convert-links.yml) runs on pushes to `main` and force-updates `github-browse`. The [Quartz workflow](.github/workflows/quartz.yml) runs on pushes to `main` or manual dispatch and deploys a Pages artifact; it does not maintain a `gh-pages` content branch.

The current Quartz build copies selected catalog directories, strips transcript callouts, and does not copy `Audits/` or `Glossary/`. It is therefore not the publication path for these audit reports. Neither workflow is triggered by a push to `audit/blender-all-courses`. This audit did not invoke either workflow.
