# Blender Learning Vault

A Blender-only Obsidian vault rebuilt from the exact [LinkedIn Learning Blender software search](https://www.linkedin.com/learning/search?isInternationalSearch=false&software=Blender), observed on November 12, 2026. It contains **19 courses and 1,196 lessons** in the observed English account context.

<!-- vault-mode -->
You are viewing the **GitHub navigation mirror**. Internal links work in GitHub. For graph view, local transcript display/search, styling, and progress tracking, clone the [blender-only source branch](https://github.com/thisis-romar/linkedin-learning-vault/tree/blender-only) and open it in Obsidian.
<!-- /vault-mode -->

Start at [000 Map of Content](000%20Map%20of%20Content.md), [000 Glossary Index](000%20Glossary%20Index.md), or [Blender course collection](Collections/Blender%20course%20collection.md).

## What is included

| Generated content | Count |
| --- | ---: |
| Courses | 19 |
| Lesson TOC entries and local transcript references | 1,196 |
| Instructor/author notes | 4 |
| Skill notes | 12 |
| Glossary notes | 42 |
| Software search group | 1 |
| Local course collection | 1 |
| Provider learning paths established by this query | 0 |
| Generated Markdown notes, including indexes/conventions | 83 |

The collection's title ordering supports navigation and engagement; it is not a LinkedIn learning path or a prerequisite sequence. The Blender software group is a search facet, not an asserted official provider topic. Similar course titles remain separate identities. The earlier all-language audit's 33 courses are a different scope and are preserved on [audit/blender-all-courses](https://github.com/thisis-romar/linkedin-learning-vault/tree/audit/blender-all-courses).

## Open in Obsidian

```bash
git clone --branch blender-only \
  https://github.com/thisis-romar/linkedin-learning-vault.git blender-vault
```

Use **Open folder as vault**, choose `blender-vault/`, and enable the included community plugins after reviewing their source. The plugins are built from the [extractor's dedicated branch](https://github.com/thisis-romar/linkedin-learning-extractor/tree/feat/blender-only-vault).

Course notes provide chapter/lesson jumps, public course links, related courses, glossary mentions, and collection prev/next links. The graph defaults to hiding skill notes; clear the graph filter to include them. Four CSS snippets are enabled: `timestamps`, `note-types`, `graph-view`, and `tag-colors`.

## Full transcripts stay private

**A fresh clone contains no full transcript text.** Public course notes hold lesson identity references and a public integrity index. The `lle-transcripts` plugin reads verified files from `.private/transcripts/` inside your local vault, renders collapsed transcript and semantic callouts, and provides **Search private transcripts** in the command palette.

The message “Private transcript is not installed or could not be verified” means a matching local record is missing or its identity/hash does not match the public index. Enabling the plugin alone does not install content. With the extractor installed, use:

```bash
npm run blender:install-cache -- --cache /path/to/your/private-cache --vault /path/to/blender-vault
```

The installer verifies the complete selected cache before copying. Directories use mode `700` and files `600` on supported filesystems. Keep `.private/` and local plugin settings ignored by Git, and exclude full transcripts from any public sharing. Your own authorized session and private retrieval/preparation commands are documented in the [extractor README](https://github.com/thisis-romar/linkedin-learning-extractor/blob/feat/blender-only-vault/README.md#private-transcript-setup).

Normal Obsidian search covers public note metadata. Use **Search private transcripts** for captions. Timestamp links open LinkedIn Learning with `t` measured in seconds and may require your own sign-in. Private caches are local content and are not bundled with the GitHub mirror or any public site.

## Progress and glossary

`lle-progress` records course-note opens and lesson-link clicks in the local collection note. Its 19-course index covers all 1,196 expected lesson identities. Completed means every expected lesson link was clicked; it does not certify watching or learning. Activity starts fresh in the published snapshot. Keep personal activity local when publishing changes; staged rebuilds can preserve it with `--activity-from`.

Glossary notes retain sources for available definitions and recomputed per-course mention counts. Counts come from literal, case-insensitive vocabulary/alias matches in the selected private transcript inputs. They are lexical observations and can overlap. A named entry without a definition remains explicitly undefined. No formal translation, successor, or compatibility relationship is inferred from wording.

## Build and validation

The vault is generated from sanitized metadata and the [selection manifest](Reports/selection.json), using the extractor's `blender:prepare`, `blender:build`, `blender:install-cache`, and `blender:validate` commands. The template comes from vault main revision `fa97a813fdfe41acfa24445c5abfac3da29cdd76`.

See [feature parity](Reports/features.md), [structural validation](Reports/validation.json), [transcript readiness](Reports/transcript-readiness.json), and [Obsidian runtime checks](Reports/obsidian-runtime.json). The reports contain metadata, counts, methods, and hashes; raw authenticated evidence and full captions remain private. Nineteen cached default-lesson observations retain their original dates; 1,177 transcript lessons were freshly retrieved. No uniform-freshness or transcript-fidelity claim is made.

The GitHub converter resolves qualified wikilinks and native lesson block targets to standard Markdown links with duplicate-aware heading fragments. Its optional workflow runs only when explicitly dispatched and updates the mirror without force-pushing. The former Quartz workflow is retained as an inactive reference under `docs/`; no website deployment is enabled on this branch.

Videos and exercise archives are excluded. Resource availability metadata does not verify archive bytes, playback, original audio, software compatibility, or provider version/translation families. No merge into main or website deployment is part of this delivery.
