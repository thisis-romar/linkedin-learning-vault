> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/blender-only-browse/CLAUDE.md)

# Blender vault conventions

This vault contains the exact selected catalog: 19 courses, 4 instructor/author notes, 12 skill notes, 42 glossary notes, 1 software group and 1 local course collection. It asserts 0 provider learning paths.

## Navigation

Start at [[000 Map of Content]], [[000 Glossary Index]] or [[Blender course collection]]. Course notes contain the complete selected TOCs, unique native Obsidian lesson targets, public lesson links, related courses, glossary mentions, and collection prev/next navigation. The browse converter translates native targets to GitHub heading fragments, including duplicate titles.

## Private local content

Public course files contain lesson identity references only. The lle-transcripts plugin renders verified local caption records from the ignored .private/transcripts folder as collapsed transcript and semantic callouts. Use the Search private transcripts command for captions. Normal Obsidian search covers note metadata. Never copy raw captions, semantic excerpts, search snippets, authenticated pages or session material into tracked files.

Timestamp links use M:SS labels and a t parameter in seconds. Glossary links and public course mention counts come from literal vocabulary matching in the selected private text; these are lexical observations, not formal semantic or prerequisite claims. Definitions include references where available; an entry without a definition remains a named vocabulary entry.

## Relationships and progress

The Blender software group comes from the search software facet, not an official LinkedIn topic. The local collection supplies navigation order without inventing a provider path or certificate. Keep separate course/version identities; do not infer successors or translations from titles.

Course frontmatter includes collections, collection_count and collection_nav. Provider path fields stay null when unestablished. Collection activity is maintained by lle-progress: note opens and lesson-link clicks update course_activity, last_activity, courses_visited, videos_visited and progress_status. Completed requires a click for every expected lesson; it does not prove watching or learning. Preserve matching activity with the staged build's --activity-from option.

## Graph and styles

Graph configuration has 19 regenerated color groups. Four snippets are enabled: timestamps, note-types, graph-view and tag-colors. The graph defaults to hiding skill notes; clear its filter to include them. Public glossary backlinks preserve graph relationships without exposing caption text.

## Editing and publication

Use existing, unambiguous wikilink targets. Keep all generated indexes scoped to these 19 courses. Rebuild into a fresh stage and validate before replacing generated files. The public tree excludes the private cache and local plugin settings. Videos and archives are excluded. No merge or deployment is part of this delivery.
