---
type: moc
cssclasses:
  - lle-moc
tags:
  - moc
  - graph-queries
created: 2026-11-12
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/blender-only-browse/010%20Graph%20Queries.md)

# Graph Queries — Copy/Paste Cheatsheet

Paste any line below into the graph view search box (top-left of the graph panel) to filter nodes. Leading `-` excludes; no prefix includes.

## Syntax

- `path:"Folder/Subfolder"` — match files under a path (quote for spaces)
- `-path:"Folder/"` — exclude files under a path
- `tag:#name` / `-tag:#name` — include/exclude a tag
- `file:"Title"` — match a specific file
- `line:"text"` — match a line in file content
- Combine with space (implicit AND) or `OR`
- Use `()` to group alternatives

## Focus by folder

```
path:"Paths/"
path:"Courses/"
path:"Instructors/"
path:"Topics/"
path:"Skills/"
```

## Focus by software group (1 available)

```
path:"Courses/Blender"
path:"Courses/Other"
```

Use `path:"Collections/"` for local course collections and `path:"Instructors/"` for authors.

## Exclude common noise

```
-path:"Skills/"
-path:"Instructors/"
-path:"Skills/" -path:"Instructors/"
```

## Focus by type via tag

```
tag:#course
tag:#course-collection
tag:#instructor
tag:#software/blender
tag:#skill
```

## Focus by level

```
tag:#level/beginner
tag:#level/intermediate
tag:#level/advanced
```

## Focus by progress status

```
tag:#status/fresh
tag:#status/in-progress
tag:#status/completed
```

_Status tags are maintained by the local lle-progress plugin. Opening a course records activity; clicking a lesson link records engagement. Both update each containing collection or path. Completed means every expected lesson link was clicked, not proof of watching or learning._

## Combinations

```
path:"Courses/Blender" -tag:#status/completed
path:"Collections/" OR path:"Topics/"
path:"Courses/Blender" tag:#level/beginner
```

## Reset

Clear the search box to restore the default filter (`-path:"Skills/"`).
