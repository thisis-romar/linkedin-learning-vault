# Blender vault feature validation

The target is a Blender-only branch with the supported vault functionality of main, rebuilt for the exact requested software query. The reference is vault main revision `fa97a813fdfe41acfa24445c5abfac3da29cdd76`. The user authorized transcript-text retrieval and private local display, while excluding video/archive acquisition, merges, and deployments.

## Selected catalog

The observed English context returned 19 course identities on two Courses pages (10 + 9). An independently requested terminal page was empty. All 19 identities match the audited source catalog, with 1,196 unique TOC lessons. The query retained `isInternationalSearch=false`; no additional languages or keyword candidates were selected. The older 33-course all-language audit is preserved separately.

| Main capability                            | Blender implementation and evidence                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Course notes, TOCs, lesson links           | 19 notes; all 1,196 TOC identities represented. Exact selection equality and no duplicate lesson references validated.                                                                                                                     |
| Chapter/lesson jumps                       | Unique native Obsidian block targets; duplicate lesson names remain distinguishable. The GitHub converter produces duplicate-aware heading fragments.                                                                                      |
| Transcripts and timestamp links            | All 1,196 private records verified. Local callouts and timestamp links tested in Obsidian 1.15.1. Full captions are absent from public Markdown.                                                                                           |
| Transcript search                          | Offline local search command reads a verified private search file, filters to selected identities, and opens the unique lesson target. It complements normal metadata file search.                                                         |
| Semantic callouts and inline links         | Existing semantic extraction categories are retained; local records contain the selected category excerpts. Private rendering supplies semantic callouts, safe HTTP links, glossary links, and selected course-title links.                |
| Glossary and backlinks                     | 42 positively matched vocabulary entries; definitions include references where available. Course mentions, first lesson/timestamp, ranked index, and public backlinks are rebuilt from private text. Matching is lexical and nonexclusive. |
| Instructor/author notes                    | Four selected author identities, including one organizational author; course backlinks and reach use the selected catalog.                                                                                                                 |
| Skills and related courses                 | Twelve provider skills; selected course memberships, levels, related skills, and shared-skill course suggestions are recomputed.                                                                                                           |
| Provider paths and certificates            | The exact query did not establish provider path membership. Zero provider paths are asserted.                                                                                                                                              |
| Ordered navigation and path-style progress | One explicitly local course collection provides course flow, previous/next links, a 19-course activity list, and engagement state. Its title ordering is not a prerequisite claim.                                                         |
| Topics and graph groups                    | One software-search group is labeled as such. No LinkedIn official topic relationship is invented. Graph configuration and color rules are rebuilt for the selected notes.                                                                 |
| Graph and styling                          | Graph rendering and selected relationships tested in Obsidian. Four main-compatible CSS snippets are enabled. Skill nodes are hidden by the default filter and can be shown.                                                               |
| Progress behavior                          | Runtime tests confirm note opens and timestamp-link clicks update the existing activity row. Completion requires all expected lesson identities to have click activity; this is not proof of watching or learning.                         |
| Safe regeneration                          | Selected catalog is built in memory; filtering does not mutate the full source database. A fresh stage is required, and matching activity can be retained with `--activity-from`.                                                          |
| GitHub navigation                          | Qualified wikilinks and native block targets are converted to standard links. The mirror contains public metadata only. Its optional workflow updates without force-pushing.                                                               |
| Website configuration                      | The prior Quartz workflow is retained as an inactive reference. No deployment is enabled or performed by this delivery.                                                                                                                    |

## Privacy and validation boundaries

The 1,177 freshly retrieved transcript lessons and 19 dated cached default observations total 1,196. Their original provenance remains separate. Retrieval requested transcript fields only, used a five-second minimum interval and persisted Retry-After policy, and followed no video/archive/resource URL. No uniform-freshness or caption-fidelity claim is made.

Public outputs are allowlisted metadata, identifiers, hashes, glossary definitions and lexical counts. Captions, semantic excerpts, private search data, authenticated pages, cookie material, and account context remain private. The cache installer verifies all expected identities and hashes before copying to an ignored local folder. Synthetic fixtures exercise rendering and interaction without exposing source captions in test output; the real Obsidian plugin separately verified all 1,196 local records.

Structural validation covers YAML parsing, selected course equality, lesson/reference/index coverage, internal links and native targets, progress scope, public signed/account URL scans, every private record hash, and exact exclusion of 9,150 source caption strings at least 60 characters long. This exact-string scan supplements the output separation; it is not a universal paraphrase detector.

Archive bytes, playback, original audio, content fidelity, software compatibility and formal translation/version-family research remain outside this delivery. The public branch has the selected versions as distinct courses, without invented successor or translation edges.

## Reproduction

Use the branch README's private retrieval/preparation and staged build commands. Run `npm run blender:validate -- --vault <stage> --private-cache <cache> --report <report.json>` alongside typechecks, lint, tests and build. Keep private account values supplied to the optional scanner out of committed command examples and reports. The selection manifest and derived metadata retain their canonical bytes and published hashes; Prettier excludes these snapshots.

See `validation.json`, `transcript-readiness.json`, `obsidian-runtime.json`, and `checks.json` in this directory for sanitized results.
