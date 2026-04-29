---
type: moc
cssclasses:
  - lle-moc
tags:
  - moc
  - graph-queries
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/010%20Graph%20Queries.md)

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

## Focus by topic (swap the name — 12 topics exist)

```
path:"Courses/Artificial Intelligence (AI)"
path:"Courses/Cloud Computing"
path:"Courses/Cybersecurity"
path:"Courses/Data Science"
path:"Courses/Database Management"
path:"Courses/DevOps"
path:"Courses/Hardware"
path:"Courses/IT Help Desk"
path:"Courses/Mobile Development"
path:"Courses/Network and System Administration"
path:"Courses/Software Development"
path:"Courses/Web Development"
path:"Courses/Other"
```

Same pattern works for `Paths/` and `Instructors/` — e.g. `path:"Instructors/DevOps"`.

## Exclude common noise

```
-path:"Skills/"
-path:"Instructors/"
-path:"Skills/" -path:"Instructors/"
```

## Focus by type via tag

```
tag:#course
tag:#learning-path
tag:#professional-certificate
tag:#instructor
tag:#topic
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

_Status tags are maintained automatically by the `lle-progress` plugin (in `.obsidian/plugins/lle-progress/`). Opening a course note bumps its activity; clicking a video deep-link records the video click. Both update every learning path that contains the course._

## Combinations

```
path:"Courses/Cybersecurity" -tag:#status/completed
path:"Paths/" OR path:"Topics/"
path:"Courses/Data Science" tag:#level/beginner
```

## Reset

Clear the search box to restore the default filter (`-path:"Skills/"`).
