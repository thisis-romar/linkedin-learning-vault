---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-window-functions
url: "https://www.linkedin.com/learning/advanced-sql-window-functions"
duration_minutes: 126
duration: 2h 6m
level: Advanced
updated: 9/17/2024
learners: 70428
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFmu57eVx6ZjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1590514876110?e=2147483647&amp;v=beta&amp;t=11fO-8Z6oGt2D_NpzeQYE_s-2GFh3vgdpDnJg3ursU4"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 2]]'
next_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
path_nav: '[{"path":"Master SQL Development","position":4,"total":8,"prev":"Advanced SQL- Logical Query Processing, Part 2","next":"Advanced SQL for Query Tuning and Performance Optimization"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20%E2%80%93%20Window%20Functions.md)

![Advanced  SQL – Window Functions](https://media.licdn.com/dms/image/v2/C4E0DAQFmu57eVx6ZjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1590514876110?e=2147483647&amp;v=beta&amp;t=11fO-8Z6oGt2D_NpzeQYE_s-2GFh3vgdpDnJg3ursU4)

# Advanced  SQL – Window Functions

> Window functions are one of the most radical, fundamental enhancements to modern SQL. They allow access to neighboring rows without using subqueries, thus enabling amazing opportunities for concise, elegant, high-performing solutions.This course teaches the foundations and intricacies of window function processing and how to use it to implement practical solutions to everyday challenges. You can l

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions) | 2h 6m | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Tools, Files, and Query Processing Review** (3 videos)
- **3. 2. Window Functions and the OVER Clause** (3 videos)
- **4. 3. Framing, Exclusions, and Shortcuts** (3 videos)
- **5. 4. Aggregate Window Functions** (5 videos)
- **6. 5. Rank and Distribution Window Functions** (6 videos)
- **7. 6. Offset Window Functions** (5 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=0)** (bright music)
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=9)** - [Ami] You're an experienced SQL developer.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=11)** You manage to get stuff done in time.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=14)** Your manager and colleagues are generally happy.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=17)** For the most part, you're happy with your SQL skills too.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=21)** And yet, you frequently encounter a SQL challenge that frustrates you to no end.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=27)** And eventually, you do come up with a solution.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=30)** You just know there must be a better way.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=33)** All these subqueries and complex logic just don't seem right.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=37)** Figuring out your own code, the one you wrote only one hour ago, seems like a futile exercise in a foreign language.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=45)** And you already know that when it gets to QA, they will scream to high Heaven because of the query's horrendous performance.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=54)** Window functions literally open new windows of processing logic and solution opportunities that once seen can't be unseen.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=64)** This course will save you hours of hair pulling, allow you to write queries that are clear, elegant and efficient.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=71)** Your QA team is going to send you flowers.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=75)** Like any fundamentally different feature, it may seem hard at first.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=80)** But don't worry.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=81)** We will tackle window functions from the ground up.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=84)** Layer by layer, you will realize just how powerful of a tool they are.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=89)** We will start with a quick review of query processing order and how window functions fit in the grand scheme of it.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=96)** You will learn all about the OVER clause, partitioning, ordering, filtering, framing, all using common-use cases for the various types of window functions.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=106)** This course is not about the syntax.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=109)** Yeah, sure, we will cover the syntax.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=112)** But our focus will be on the foundational understanding of how window functions are processed, how to use them effectively and how to avoid the most common pitfalls.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=123)** For this course, you will need a minimum of one year of SQL experience.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=127)** But more importantly, an analytical, inquisitive mindset.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=132)** It's not going to be an easy ride.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=134)** I do promise that it's going to be fun-packed, challenging and extremely rewarding.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Speakers:** - [ami] (1)
> **Non-Speech:** (bright music) (1)

#### Course agenda
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=1)** - [Instructor] We'll begin with a brief introduction of the tools I'm going to use an the demo database that I designed specifically for this series.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=10)** We will see the course materials, how they're organized and where to find them.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=14)** I recommend that you watch my Query Processing course before this one.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=19)** If not, don't worry.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=21)** I'll spend a few minutes reviewing query processing so that the context of window functions is clear.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=28)** Next, we will realize how window functions fit in this grand scheme of query processing.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=35)** We will cover the general syntax of the OVER clause and how partitioning works.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=40)** After establishing this baseline, we'll be ready to dive into the actual construct of window functions.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=47)** We'll see how to use the various types of frames.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=50)** We'll cover some convenient shortcuts, and I'm going to warn you of some of the riskier ones.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=56)** Then, you'll be ready to meet window functions in person.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=61)** We'll start with aggregates.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=63)** These are the most familiar and intuitive, as they are frequently used as group aggregates.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=69)** But this apparent familiarity is often a cause of confusion.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=75)** So I'll try to clarify the distinctions.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=78)** Rank and distribution functions are next.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=81)** These may become your favorite type, especially, the data analyst among you.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=87)** Lastly, we will learn about offset window functions.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=91)** These are going to become a vital tool in your arsenal no matter what you do with SQL.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=97)** To wrap things up, I'll spend a few minutes reviewing what we've learned, provide some advice on where to go next, solicit your feedback, give you some homework, and say proper goodbye.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** type, (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Tools, Files, and Query Processing Review

#### Tools and demo database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=1)** - [Instructor] I'll be using the PostgreSQL relational database management system for all demos and challenges.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=7)** To save my throat and your time, I'm going to use the term database instead of relational database management system, and Postgres instead of PostgreSQL.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=20)** Postgres offers one of the richest window function support among all mainstream databases.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=26)** And I reserve the right to mention other databases whose implementation differences may be a value or just to publicly shame them.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=35)** I'll be using Microsoft Azure data studio integrated development environment with a Postgres extension.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=43)** If you don't have access to an instance of Postgres, you can still use an online query service.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=50)** These services requires zero installation, they're 100% a web based, and even the server is hosted by the service providers.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=58)** You might be familiar with some of these like SQL Fiddle, DB Fiddle and Rextester to name a few.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=64)** My favorite one, however, is DB Fiddle UK.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=68)** DB Fiddle UK has proven to be highly reliable and free of commercial interests, qualities that some of the other services have.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=78)** How shall I put it nicely?
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=80)** Not always excelled at.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=83)** I consider using one of the existing sample databases that are out there.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=88)** And while it was very tempting to use an off-the-shelf database, I chose to create a new one specifically for this series.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=97)** I used this opportunity to demonstrate some of my design choices using a topic that is near and dear to my heart, helping animals in need.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=108)** So, I hereby proudly introduce the animal shelter demo database.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=113)** At first glance, you might find it somewhat odd.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=117)** First, I chose to use natural and intelligent keys for all tables.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=123)** This means you will find no magical IDs, identities, auto increment, sequences, or any type of surrogate key.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=132)** For example, the animal's table uses a composite key that consists of species and names.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=139)** This is what the shelter staff use to uniquely identify each animal.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=144)** This means we can have two animals of different species with the same name.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=148)** This also means that all other tables reference animals using their natural identifier thus saving numerous joints and simplifying queries.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=161)** Natural versus surrogate keys is a controversial topic with near religious opinions.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=168)** I find the abuse of surrogate keys for every table in every database to be one of the most destructive habits ever to plague relational database world.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=181)** I realized that surrogate keys have their place and can be useful, but they should never be used as a default, one size fits all solution for every single table.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=194)** Worse, is that this notion got so deeply rooted that I see most database designers these days don't even consider the business keys.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=205)** They just immediately opt for whatever, table name, underscore ID and there you go.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=210)** There's your primary key.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=212)** This has devastating results for data consistency, query convolution, workload performance, modularity, scalability, concurrency and I can go on and on.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=225)** I would love to release a course dedicated to this topic.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=228)** So please let me know in the Q&A section if you find this topic interesting and would like to see a course about it.
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=236)** For now, all that I ask is that you take it for what it is.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=241)** Just see for yourself how simple, elegant and efficient SQL becomes when you work against tables that use natural keys.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=251)** To fit this database in DB Fiddle, I use the subset of the tables from the full project with only a few hundred rows of data.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=259)** If you visit the Github project page, you'll see that I've included many more reference data tables.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=266)** These are a must have for any external authority data.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=271)** States, cities, zip codes, calendar holidays, species, breeds, and even color names, they're all standardized datasets that must be enforced through out your data model.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=285)** For this course, I've included only the colors and species tables.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=290)** And if you look closely, you'll see that they both consist of just a single column, that is, their primary key.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=297)** To some of you, it may seem redundant, but it's anything but.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=303)** Having a standardized reference set of external authority data that all our entities can reference, guarantees that we will never have misspells, nonstandard or non-existing attributes, values.
>
> **[5:17](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=317)** We're going to cover the individual tables as we go along.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** function (1), default, (1), let (1)
> **Env Vars:** sql (2)
> **Tools:** notion (1), github (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using the demo and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=1)** - [Instructor] Throughout the course, I will reinforce discussion topics with code demos.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=5)** You're welcome to just watch them.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=7)** It will be even better if you follow along, and much better if you pause the video occasionally and experiment by modifying these queries and coming up with your own examples.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=19)** I'm also going to include several mini challenges, where I'm going to ask you to pause the video for a minute and answer a question.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=27)** Chapters four, five, and six include challenge videos.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=31)** My detailed suggested solution walkthroughs will follow.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=36)** All code files can be downloaded from the course's page.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=39)** I'm going to host them on GitHub as well, and you'll find the links in the code files.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=45)** I invite you to provide feedback, either on GitHub or in the course's Q&A section.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Logical query processing review
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=1)** - [Instructor] For those of you who haven't yet watched my query processing course, this video is going to be a speed-of-light review of some of the main concepts.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=11)** Every query begins with the FROM clause, where the data set for the query is constructed.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=18)** The data sources may be anything from a single table and up to joins of 50 shades of various different sources.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=26)** All data sources, join qualifications, and reservations are evaluated and placed into a single data set that is then passed to the WHERE clause.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=38)** WHERE evaluates each row using logical predicates.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=43)** Rows for which the predicate evaluates to true will live to see another clause.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=48)** All others are discarded, never to be seen again by the query.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=54)** Then, this filtered set is passed to the GROUP BY clause.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=59)** GROUP BY changes the fundamental structure of the set, from individual rows into row groups based on the grouping expressions.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=71)** The group set is then shipped to the HAVING clause.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=75)** HAVING uses logical predicates, as well, to evaluate entire row groups.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=82)** Only groups for which these predicates evaluate to true, will get to see another clause.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=88)** The row filtered grouped and grouped filtered set is then passed to the SELECT clause.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=95)** SELECT evaluate each expression for every row or row group.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=102)** These are the expressions that will be returned to the client application.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=107)** Next, the set is passed to the ORDER BY clause.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=111)** ORDER BY sorts the data set and at this point, it ceases to be a set and becomes a cursor.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=118)** The cursor can be further processed by the query's final clause, the OFFSET FETCH, also known as LIMIT OFFSET, where it is sliced into manageable bite-sized pages for user consumption.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=133)** Let's review this process once again from a different angle.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=137)** Instead of looking at the syntax, let's follow the data set.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=142)** Here is the data set after the from clause has completed its work.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=146)** This set finds its way to the WHERE clause, where each row is evaluated with the predicates.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=153)** Rows for which the predicate does not evaluate to true are discarded.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=159)** The filtered set now moves on to the GROUP BY.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=162)** GROUP BY creates row groups based on the grouping expressions, x in this case.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=168)** Now we're no longer dealing with five individual rows.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=173)** Instead, we have three row groups.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=177)** This grouped set moves on to the HAVING filter The HAVING evaluates each row group with predicates.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=185)** The first row group for which x is not larger than one is eliminated.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=191)** And at this point the set has completed all its transformation and has taken its final form.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=198)** All the following clauses, SELECT, ORDER BY, and OFFSET FETCH, will not modify it.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=206)** The filtered and grouped set is passed to the SELECT.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=209)** The SELECT evaluates each expression for each row group.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=213)** The scope of each SELECT expression is limited to the same row or row group.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=220)** And remember this fact.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=222)** It's going to come in handy very soon.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=225)** I'm not going to bother with sorting and paging for now.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=229)** At this point, you might be wondering why you should even care about it, but oh, boy should you!
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=236)** Query processing order is one of the most fundamental aspects of SQL with far reaching implications, and window functions are no exception.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=247)** So now that we have a general idea of how query processing works, let's see how window functions fit in this grand-scheme.

> [!info]- Semantic Content
>
> **Env Vars:** select (6), group (4), having (4), where (3), order (3)
> **SQL:** select (6), group by (4), having (4), where (3), order by (3)
> **Code Keywords:** let (3), case. (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Window Functions and the OVER Clause

#### How window functions fit in query processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=1)** - [Instructor] As we just saw, evaluation scope of standard expressions is limited to their own rows.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=8)** We can create a new expression from existing ones but only from those that are on the same row.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=15)** If we need to use a value from another row, we have no choice but to use a subquery.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=22)** So to list the name of the second animal from the same species next to the current one, we must write this whole mess of a subquery.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=31)** We must handle NOWs and probably need an aspirin afterwards.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=36)** Well, had no choice is a more accurate term.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=40)** Because this is exactly the limitation that window functions overcome.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=46)** As their name suggests, window functions open a new window to other rows that can be accessed directly without a subquery.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=57)** For every row we can use a window function to peek at values from other rows.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=64)** But before we start coding window functions, we first need to understand their place.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=70)** Window functions are limited to the select and order by clauses.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=74)** Why, you ask.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=76)** Very good question.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=77)** Assume we have a hypothetical window function named previous that automagically retrieves the name of the animal with the closest previous admission date.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=88)** Don't worry about the implementation, it's completely hypothetical.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=92)** Our hypothetical function is used in the select list where it poses no logical challenges.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=98)** The reason is that our data set has taken its final form so there is no ambiguity as to which animal is previous.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=108)** But what if we try to use the function elsewhere in the query?
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=112)** Maybe in the WHERE clause?
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=114)** Let's see what happens.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=117)** The WHERE evaluates each row using predicates and only rows that evaluate to true will make it to the next clause.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=125)** In this trivial example, the logical issue may not be apparent.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=130)** Theoretically, we can evaluate the function for each row and only Pumpkin evaluates to true.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=137)** No problem, right?
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=138)** But, things get more interesting if we add additional predicates.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=145)** For example, end species is different than cat.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=149)** Pause the video for a minute, and see if you can guess the result.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=155)** Now, the fun starts.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=158)** If the predicate previous equals Abby is evaluated first, only Pumpkin evaluates to true like before.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=167)** For the second predicate, Pumpkin evaluates to a false.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=171)** The end logical operator causes Pumpkin to be eliminated from the result and no rows are returned.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=180)** Let's roll it back and start over.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=183)** This time, in a different order.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=187)** If we evaluate the predicate species different than cats first, Pumpkin evaluates to false and is eliminated.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=195)** When we evaluate the second predicate, it is now Peanut that evaluates to true.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=202)** So, as you can see, the order of predicate evaluation determined the result.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=209)** SQL does not allow for such ambiguities.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=212)** It doesn't make any sense, and in fact, there is no order to predicate evaluation no matter which one we spell first.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=222)** All predicates are evaluated at once as if they occur at the exact same point in time.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=230)** And that's the reason why window functions that rely on the dataset, the whole dataset, and nothing but the dataset are not allowed before it takes its final shape and form.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=243)** And this is true only in the select clause and the order by that follows, but not before.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2)
> **CLI Commands:** make (2), cat (1)
> **Env Vars:** where (2), sql (1)
> **SQL:** where (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Overview and filter clause
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=1)** - [Instructor] My favorite starting point is always right at the end.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=5)** This is the basic syntax of a window function in all its fame and glory.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=10)** Don't worry, we're not going to tackle it all at once.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=13)** I just want you to keep it in the back of your mind as a roadmap.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=17)** The function is, well, a function.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=22)** We will cover all three function categories in due time.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=25)** The function itself is less important for now, because we must first understand how it is processed.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=33)** The OVER clause defines the window over the dataset, and most of these constructs are filters that limit the scope of the window that our function will see through.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=44)** If we want the window to cover the whole set we can do without them by specifying a blank OVER clause.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=52)** This looks less intimidating, right?
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=54)** Examples will follow shortly.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=57)** FILTER is, well, a filter.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=61)** Like the WHERE clause, FILTER limits the scope of the window with logical predicates.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=66)** But unlike the WHERE that eliminated rows from the dataset and affected the rest of the query, FILTER limits the viewing scope only for the function where it lives.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=78)** It has no side effects whatsoever on any other aspect of the query.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=83)** WHERE species is not equal dog will exclude dogs from the window.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=89)** The dogs are still there, and will be seen by all other select expressions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=95)** Only the current window function ignores them.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=99)** Let's see a practical example.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=101)** Here are our animals as they made it to the select.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=105)** Like any expression, aggregate window functions are evaluated per row.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=111)** Let's use a MAX name function with an empty OVER clause.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=115)** The empty OVER clause causes the window to span the entire set.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=119)** MAX name looks for the name with the highest dictionary sort order and finds Winston.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=126)** This empty OVER clause is independent of any row value or its position, therefore it evaluates the same way for all rows within the set.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=141)** Here is a query that returns a few attributes for all animals sorted by admission date.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=148)** We need to add another column to this query to show how many animals we have in total.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=154)** Before window functions, the only way was to use a non-correlated subquery that performs a COUNT over a second instance of the table.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=164)** The window function equivalent is a COUNT star and an empty OVER clause.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=169)** So far, no big difference.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=172)** If we need to discard animals that were admitted prior to 2017, we should add a predicate.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=181)** When we have a subquery solution that references two instances of the table, we must be careful.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=188)** If only the subquery is filtered, it returns the 75 animals which were admitted in 2017 and later, but the parent isn't.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=199)** It returns all 100 animals.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=203)** And to eliminate these we must duplicate the predicate.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=208)** With window functions we can add a FILTER clause, and like with the original subquery solution, the window function counts 75 animals, but the query itself returns all 100.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=223)** Unlike the subquery, eliminating these does not require duplicate predicates.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=229)** It's enough to filter in the WHERE clause and this data is all that the window function sees, so there's no more use for the filter.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=238)** In terms of performance, window functions enable opportunities for the query optimizer by using a single instance of the table.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=247)** Whether the query optimizer seizes these opportunities is a different question.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=253)** On my PC, using PostgreSQL 12, the window function solution's total cost is around 6.5, versus nine for the subquery solution.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=263)** It may sound like a lot, but these queries are so cheap that I doubt it will be even noticeable.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=270)** Your mileage may vary.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (2), require (1)
> **Env Vars:** filter (4), where (4), max (2), count (2)
> **SQL:** where (4)
> **Definitions:** is a  (3)
> **Versions:** 6.5 (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### PARTITION BY and ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=1)** - [Instructor] The second filter we can place in front of our window is the partition by clause.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=6)** To partition something, means to divide it into parts and this is exactly what partition by does.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=13)** The partitioning expressions limit the function's visible window only to rows that share the same values as the current row.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=23)** Let's bring back the simplified animal set.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=26)** Partition by species limits the function visibility to animals of the same species.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=32)** For Buddy's row, the window is limited to his and Abby's.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=37)** And the same is true for Abby.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=39)** For Pumpkin, the window is limited to cats.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=43)** Only herself in this case, and similarly for Peanut.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=48)** Let's bring back the Max name function and add partition by species.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=53)** For the first row, the function won't see the entire set.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=57)** It will only see cats and Felix is the winner.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=62)** The following row happens to be a cat too, so the function picks Felix once again.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=69)** Next, is Prince.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=71)** Prince is a dog, so the function no longer sees cats.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=76)** It sees only dogs and this time Winston is the lucky winner.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=81)** The same is true for all dogs that share a partition.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=85)** Milly, our only rabbit's partition, consists of just her row, and the maximal name is the only name, our dear lonely Milly.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=98)** Here is the same animal's query that we used before.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=102)** This time, instead of a grand total, we need to add a column that shows the total number of animals of the same species as the current row.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=113)** Using a sub-query solution requires introducing a correlation between the parent query and the sub-query so that the count is limited only to animals of the same species.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=125)** This requires unique aliases to distinguish between the two instances of the table, A1 and A2.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=134)** When using table aliases, I highly recommend that you qualify all expressions to avoid confusion.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=142)** To solve this with a window function, all we need to do is add a partition by clause to limit the count of the animals to the same species.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=152)** It is equivalent to the correlation term we just used for the sub-query.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=157)** However, it is significantly clearer.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=161)** And performance-wise, the differences between these two queries is much more pronounced.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=168)** The cost of the window function solution on my PC is around 11 versus 340 for the sub-query one.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=178)** There is a more efficient solution that still uses a sub-query, one that doesn't require 100 aggregate iterations.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=187)** Pause the video for a minute and see if you can find it.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=192)** Query processing order to the rescue once again.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=197)** Pre-aggregating the animal species counts and joining it in the from clause avoids the need for the correlated sub-query to be executed 100 times, once per row.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=209)** This sub-query is non-correlated and will be executed only once.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=216)** This solution's cost is about the same as the one of the window function, but of course, your mileage may vary.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=224)** The order by clause is the most confusing part of the over clause.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=230)** It serves completely different purposes using the same syntax which is never a good idea.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=237)** I wish the ASCII SQL committee would've come up with a better syntax choice.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=242)** But unfortunately, that's water under the bridge.
>
> **[4:06](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=246)** Aggregate and frame offset window functions are inherently order agnostic.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=253)** For these, order by is used for defining frames that further limit the rows visible to the function.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=261)** For rank, row offset, and distribution window functions, order by defines how the function is evaluated.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=270)** Now I know, these terms probably don't make much sense yet, but don't worry, we're going to cover all of them in the following chapters.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=279)** I just wanted to include it here with the syntax overview.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=283)** And now, onto framing, exclusions, and shortcuts.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (2), case, (1), require (1)
> **CLI Commands:** cat (1), find (1), make (1)
> **Env Vars:** ascii (1), sql (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 4. 3. Framing, Exclusions, and Shortcuts

#### Framing rows and ranges
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=1)** - [Instructor] Here's a window over a dataset that consists of six rows with a pair of integer values in each, call them the green column and the brown column.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=11)** First, let's partition our window by the brown column.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=15)** Partition boundaries are fixed.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=18)** This means that for each row within a partition, a window function will always see all partition rows.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=27)** Sometimes we need to further limit the scope of a window within each partition so that not all rows use the same window, and this is what framing is all about.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=40)** To define a frame, we must introduce an order so that the terms first, last, next and previous make sense.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=48)** There is no such thing as first or next without an order.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=54)** So let's order our rows in both partitions by the green column, in ascending order and define frame boundaries.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=62)** For example, a frame that begins at the current row and ends at the following one.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=69)** For the first row, this frame covers one and two, The highlighted area that you see is what the window function sees instead of the whole partition.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=81)** For the second row, our frame covers two and four, for the third, four and seven, and for the last row the frame will shrink as there is no next row, and the process repeats for each partition.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=96)** Let's see the syntax and the options.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=99)** First, we define our sorting in the ORDER BY clause.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=104)** Let's use a set similar to the previous one and focus just on one partition.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=110)** And we're evaluating the third row, the one with a green four.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=116)** Next we specify one of three frame types, ROWS, RANGE or GROUPS.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=124)** ROWS is probably the most intuitive type, so let's start with it.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=129)** ROWS frame boundaries are specified using row position count.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=134)** one row, 20 row, a million rows or all the rows that either precede or follow the current one.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=143)** Row frames don't care what values are in these rows, they just count rows.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=151)** Next we specify where the frame begins.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=155)** UNBOUNDED PRECEDING points to the beginning of the partition.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=160)** N PRECEDING and N FOLLOWING, point to any number of rows before or after the current one.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=168)** N must be a none-null positive integer.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=171)** One PRECEDING and one FOLLOWING, point to the next and previous immediate neighbor rows.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=178)** CURRENT ROW, means, surprise, surprise, the current row, and I'm not joking when I say surprise, because as you'll soon see, CURRENT ROW, doesn't always mean what you think it means.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=195)** The frame end is specified similarly.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=198)** The difference is that UNBOUNDED PRECEDING is replaced with UNBOUNDED FOLLOWING.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=203)** It doesn't make sense for a frame to start at the end of the partition nor to end at the beginning of it.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=212)** Now, start and end are relative terms and depend on the sorting direction.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=217)** So if we use descending order instead of ascending, the frame boundaries will be reversed.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=224)** UNBOUNDED FOLLOWING and UNBOUNDED PRECEDING work the same way with all frame types, but that is not the case with N PRECEDING, N FOLLOWING and CURRENT ROW.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=237)** RANGE frames are specified using value ranges that either precede or follow the current row regardless of how many rows they cover, and RANGE frames are data type dependent.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=252)** So an integer range of 10 represents all rows that have a sorting value which is plus or minus 10 from the current rows value.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=266)** Value not position.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=270)** Unlike ROWS and GROUPS, that can use multiple sorting expressions, RANGE is limited to only one.
>
> **[4:38](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=278)** Date and time ranges require an interval data type.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=283)** For example, three seconds, 25 years or two months, five days and six milliseconds.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=290)** For this set a RANGE frame of one PRECEDING and CURRENT ROW, evaluated for the highlighted row, covers only the current row, as the closest preceding neighbor is two integer values away.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=308)** As long as our sorting expressions are unique within the partition, there is no confusion about what CURRENT ROW means because CURRENT ROW is also current value, but if the partition contains more than one row with the same sorting value, things get interesting.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=332)** CURRENT ROW for RANGE frames doesn't refer to the current row's position like it did with the ROWS frame.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=340)** For RANGE, it refers to the current row's value, and that includes all rows that share the same value.
>
> **[5:51](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=351)** GROUPS frames are defined using the number of peer groups following or preceding the current row's group.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=359)** A peer group is a set of rows that share the same sorting values.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=363)** So when evaluated for the second row in this partition, a group frame that begins with one PRECEDING and ends with one FOLLOWING, will cover all partition rows.
>
> **[6:17](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=377)** Sounds complex, right?
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=379)** Well, it is, but don't worry, it's going to make perfect sense as soon as we'll get some more practice.
>
> **[6:27](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=387)** Let's do a practical example using our MAX name, but this time we'll add a frame.
>
> **[6:34](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=394)** I sorted all rows in ascending name order within each species partition.
>
> **[6:40](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=400)** This will make the visualization clearer, but remember that sets have no order.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=407)** The partition is by species like before and the frame limits the function to see all rows that precede it, and up to the current row with name as our sorting expression.
>
> **[7:00](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=420)** Let's start with Calvin.
>
> **[7:03](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=423)** Calvin has the lowest sort order value name.
>
> **[7:06](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=426)** His frame is limited to his own row and the function picks the only value that's available.
>
> **[7:13](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=433)** For Felix, the frame extends to cover both him and Calvin.
>
> **[7:18](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=438)** Felix has a higher sorting value than Calvin and so the function MAX picks him.
>
> **[7:24](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=444)** Abby is next.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=446)** Now, we switch to a new partition and the process repeats.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=451)** The first frame covers one row, the second two and so on.
>
> **[7:37](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=457)** If you look closely, you may spot something odd with these results.
>
> **[7:43](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=463)** How come the results set exactly mirrors our source rows?
>
> **[7:49](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=469)** Pause the video for a minute and see if you can figure it out.
>
> **[7:55](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=475)** The reason is that I chose to use a MAX name function, together with a frame that is sorted also by name in ascending order.
>
> **[8:07](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=487)** Therefore, any new row which is extended into the frame is guaranteed to have a larger sorting value than the previous one and will be picked up by the MAX.
>
> **[8:19](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=499)** Now, this is not a very useful frame except as a visual example.
>
> **[8:25](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=505)** Typically, we sort by one expression and use the function over another.
>
> **[8:31](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=511)** Let's see some actual query fun.

> [!info]- Semantic Content
>
> **Env Vars:** preceding (8), range (7), current (7), row (7), following (6)
> **Code Keywords:** let (8), function (7), type, (1), require (1), type. (1)
> **CLI Commands:** make (4)
> **Definitions:** means that (1), refers to (1), is a  (1)
> **Analogies:** for example (2), similar to (1)
> **SQL:** order by (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Practical framing examples
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=0)** - [Instructor] Here are the two queries we used in the previous chapter to count the number of animals per species.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=6)** We need to modify the number of species animals, so that instead of counting the total number of animals for each species, it will count only those that were admitted prior to it.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=20)** This is the number of animals of the same species as we had in the shelter on the day before the current one.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=29)** With the subquery solution, we can try adding a second correlation predicate so that the count will see rows that have a lower admission date than the current one.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=40)** Using the Window function, let's attempt a frame sorted by admission date ascending with boundaries of unbounded preceding and current row.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=51)** Let's execute and oops, something is off.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=56)** Their results are different than those of the subquery solution.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=62)** Stop the video for a minute and see if you can figure out the difference.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=69)** The results are offset by one as the subquery solution does not include the current row's date due to the smaller than operator.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=79)** The Window functions frame is defined up to the current row, and therefore does include the current day.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=88)** For Tigger, the sub query returned a zero since no cats were admitted before it.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=94)** The Window functions current row frame does and returns a one.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=99)** If we want to include the current day, we can change the smaller than operator to a smaller than or equal to, and execute.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=109)** And now it seems to deliver the same results as the window function with a current row frame.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=115)** However, that's not what we want it.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=118)** Their requirement was, show the number of animals admitted prior to the current day.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=125)** Let's fix the Window function solution by changing the frame end to one preceding instead of current row, and execute.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=134)** Side note.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=135)** Rows one preceding, doesn't necessarily reference the calendar day before the current one.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=141)** Unfortunately, our shelter doesn't admit animals every day, and rows one preceding, will point to the previous admission.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=150)** However, for this query, it is irrelevant as the number of animals on the previous day is the same number of animals as it was since the last admission.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=162)** And now it seems more in line with the subquery solution and with a requirement.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=168)** However, unfortunately, things are rarely as they seem, and there's a nasty logical bug hiding here.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=178)** Can you see it?
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=179)** Pause the video for a minute, and see if you can spot the lurking bug.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=187)** To see this issue, we need to look for a day where two animals of the same species were admitted.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=195)** This is a simple group aggregate query with a having clause for the count.
>
> **[3:20](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=200)** Indeed, we have two dogs that were admitted on August 29, 2017.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=206)** And a select star for this date, reveals that these are King and Prince.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=211)** Let's limit our data to only dogs and only those that were admitted after August 1st, 2017, so we can focus on King and Prince without distractions.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=223)** For the subquery solution, remember that the predicates must be added to both the parent query and the subquery.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=231)** I find this duplicity ugly and error prone, and there's an easy way around it with a CTE.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=238)** So, let's do that, and execute much better.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=243)** Further Window functions solution, duplicity is not an issue.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=247)** The Window function sees the data after the Where filter had its way with it.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=252)** Let's compare the results.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=255)** The subquery solution shows that zero dogs were adopted prior to both King and Prince.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=263)** For Ranger, admitted about a month later, it returns a two.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=268)** This is the correct answer to their requirement.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=272)** Count the number of animals of the same species as it was on the previous day.
>
> **[4:38](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=278)** The Window function solution returns zero for King but a one for Prince, and this doesn't make sense as they were adopted on the same day.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=291)** Can you see why that is?
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=293)** Stop the video for a minute and see if you can figure it out.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=299)** The reason this time is the frame type.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=303)** For a rows frame, even though King and Prince have the same admission date, they are distinct animal rows.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=313)** So, the frame still counts each one.
>
> **[5:17](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=317)** And why did Prince get a one and not King?
>
> **[5:21](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=321)** Well, there is no reason.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=323)** This query is non-deterministic, meaning that the database may well return a one for King and zero for Prince, and it will still be a correct valid result.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=337)** What we need here is a range frame.
>
> **[5:41](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=341)** And once again, we should be careful as trying to change only the frame type, results in an error for a mismatch data type.
>
> **[5:50](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=350)** The hint in the error message is helpful.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=353)** It tells us that we can use an integer range offset for a date expression.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=358)** What we need is that to change the integer one to an interval of one day to get the desired result.
>
> **[6:07](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=367)** Now, look at these two queries and tell me which one is clearer and more elegant.
>
> **[6:14](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=374)** And the icing on the cake is that the Window function query performance is about 10 times better than the subquery one.
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=382)** And we're just starting to have fun.
>
> **[6:25](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=385)** Plenty more demos coming up soon.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (6), type. (2), type, (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous chapter (1), coming up (1)
> **Definitions:** is a  (2)
> **Env Vars:** cte (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Defaults, shortcuts, exclusions, and null handling
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=1)** - [Instructor] The ANSI SQL standard defines shortcuts for frame boundary definitions by omitting the between keyword and one of the boundaries.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=11)** So, instead of specifying between unbounded preceding and current row, we can just say unbounded preceding and current row will be assumed as the frame and vice versa for unbounded following.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=26)** Between current row and current row is a legitimate frame.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=31)** Can you see what is the difference between rows, range and groups current row?
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=39)** Pause the video for a minute and think about it.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=43)** Rows current row is not very useful.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=47)** The frame will consist of just the current row and to access expressions from the current row, we don't need window functions to begin with, we can access them directly.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=58)** Range and groups current row will include the current row and all peer rows that have the same sorting values.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=67)** These shortcuts may seem like a good idea at first, but I found that saving a few keystrokes may end up introducing confusion and bugs and it's just not worth it.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=80)** As a rule of thumb, I recommend avoiding most syntax shortcuts, your code will be more readable and more portable, as not all databases support all shortcuts.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=93)** While the frame boundary shortcuts that we see here aren't terribly bad, the next one is.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=100)** I've seen it inflict so much damage and grief that I decided it deserves its own shaming slide.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=109)** Window function syntax allows specifying ORDER BY without any explicit frame boundaries.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=117)** The frame will assume the default of, wait for it, range between unbounded preceeding and current row.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=128)** This is an unfortunate frame that is neither obvious nor intuitive.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=134)** I have seen developers fall for this trap over and over and over again.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=140)** There are window functions, ones that we haven't covered yet, where the ORDER BY isn't used for framing at all and they look the same and ORDER BY with no frame boundaries.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=154)** To distinguish framing ORDER BY from a functional ORDER BY, you will need to remember which window functions support framing.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=164)** Now you see why I recommend avoiding shortcuts.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=170)** Consider the possibility that your successors won't necessarily understand or appreciate it.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=176)** So always specify the full syntax.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=181)** In the long run, it will save you hours of frustration, precious air, and plenty of aspirin.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=189)** Window frames support an optional clause that excludes the current row or its peers from the frame.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=197)** Assume the frame is the entire partition and we're evaluating the highlighted third row.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=204)** When no frame exclusion is specified, the default is, exclude no others, where both the current row and its peers are included in the frame.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=216)** Exclude group excludes both the current row and its peers, exclude ties, excludes the peers but keeps the current row and exclude current row excludes the current row but keeps the peers.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=233)** There's nothing fancy or complicated about it, it's a simple useful feature and I wonder why most databases don't support it yet.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=244)** Window functions of different categories handle NULLs differently.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=249)** It wouldn't be interesting without it, right?
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=252)** Most aggregate functions ignore Nulls, rank and distribution functions respect NULLs, and so do frame boundaries.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=261)** We'll deal with each of them later.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=264)** The ANSI SQL standard defines an explicit no ordering clause that allows us to control whether NULLs are sorted first or last.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=275)** It does not determine whether NULLs have the highest or lowest sorting value, because first and last are respected regardless if we're sorting by ascending or descending order.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=290)** Be extra careful when migrating between platforms as not all databases support this clause, but even worse is that they don't all sort NULLs the same way.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=304)** For Offset functions, the ANSI SQL standard defines a NULL treatment clause.
>
> **[5:11](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=311)** It determines whether NULLs are respected or ignored for Offset purposes.
>
> **[5:17](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=317)** We're going to deal with Offset functions later in this course so let's leave it at that for now.
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=322)** Queries with window functions often require reusing an OVER clause.
>
> **[5:28](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=328)** For example, it is common to ask for both the minimal and the maximal value of an expression over the same window.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=337)** To make our lives easier, the ANSI SQL standard defines a window clause.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=343)** Instead of repeating an exceptionally long OVER clause, we can write it once, alias it and reuse the alias in the query.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=353)** This minimizes typing, reduces the chances for errors and makes the query more readable, a win, win, win.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=362)** We will use this very handy clause soon.
>
> **[6:05](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=365)** Now, let's move on to the next chapter in which we'll explore aggregate window functions in depth.

> [!info]- Semantic Content
>
> **Env Vars:** order (5), ansi (4), sql (4), null (1)
> **SQL:** order by (5)
> **Code Keywords:** let (2), function (1), require (1)
> **Cross-References:** later in (1), next chapter (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)


### 5. 4. Aggregate Window Functions

#### Aggregate grouped functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=1)** - [Instructor] Up until now, I've used Aggregate window functions as my go-to examples.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=7)** That was deliberate.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=8)** As aggregates seemed to be the most intuitive and familiar for most developers.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=13)** However, this apparent familiarity is a double-edged sword that manages to confuse even the most experienced developers.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=24)** And yes, I know I covered it already and still I would like to spend two more minutes refreshing group by processing and emphasize the difference between group aggregate and Window aggregate functions.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=39)** First, the animal's table is evaluated by the FROM clause.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=44)** It is then passed to the GROUP BY clause.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=46)** GROUP BY marks all rows for grouping based on the grouping expression species in this case.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=54)** Our set is then transformed from its normal table like shape into a hybrid structure where each group of unique species rows will correspond to a single output row.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=69)** Instead of nine individual source rows we're now dealing with three-row groups.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=76)** This funny-looking set is delivered to the SELECT clause.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=81)** SELECT evaluates all expressions as usual.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=85)** Since this query has a GROUP BY clause, the expressions are evaluated per row group.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=92)** This returns three rows and their respective group counts.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=97)** Without the group identifiers they don't tell us much so let's add species to the SELECT.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=104)** And now we see species alongside their counts.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=108)** Much better.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=110)** Remember that species makes sense here only because it is the GROUP BY expression.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=118)** It is the group identifier and is therefore guaranteed to have the same value for all rows within the group.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=127)** What will happen if we add name to the SELECT?
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=130)** The query is no longer valid and will return an error.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=134)** As unlike species, name may have multiple values for a group.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=140)** The output still consist of one row per group so which cat should be returned?
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=146)** Felix or Calvin.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=149)** The only way to guarantee that non-grouping expressions return a single value for each group is to wrap them in an aggregate function and that is the definition of an aggregate function.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=164)** A function that takes in a set of elements, aggregates, and returns just one max name is a valid expression and this query will return Felix, Winston, and Milly.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=181)** To sum things up, Aggregate window functions are defined with the OVER clause.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=187)** They see all the rows or row groups as defined by their window specification.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=193)** They don't see individual rows within each row group.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=198)** Group aggregate functions are a different based.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=202)** They can be used in the having, select, and order by clauses.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=206)** They see individual rows within each group, but they can't see any row groups other than their own.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=216)** Keep this important distinction in mind.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=219)** You will thank me for it very soon.

> [!info]- Semantic Content
>
> **SQL:** group by (4), select (4)
> **Env Vars:** group (4), select (4)
> **Code Keywords:** function (3), case. (1), let (1)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Aggregate window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=1)** - [Narrator] These are the common categories for aggregate functions.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=4)** Most databases support most aggregate group functions as aggregate window functions too.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=12)** You've probably used a few of these before, most likely, the arithmetic ones.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=18)** Trivia fact, the word arithmetic comes from number art.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=23)** Arithmos is number and tic is art.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=27)** The NC SQL standard defines Boolean aggregate functions called every, any and some.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=34)** Array aggregations are often extended to support JSON and XML formats.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=39)** Statistical aggregates are plentiful and we're going to see a few later.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=44)** And some databases add their own proprietary functions such as, Bitwise aggregations and Approximate functions that can offer better performance when accuracy is not critical.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=57)** I can probably author a whole course just on aggregations.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=61)** Now that I say it out loud, it actually sounds like a decent idea.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=66)** Let me know in the Q and A section if you would like to see a course dedicated to aggregations.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=73)** Routine check up is our largest table with about 300 rows.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=78)** It stores results of monthly check ups for each animal.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=81)** I deleted most of the original monthly rows at random just to save space.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=87)** That's why not all animals have check ups.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=90)** And those that do aren't monthly.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=94)** We need to write a query that shows animal's species, name, check up time and heart rate.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=100)** It should also include the Boolean column that evaluates to true for animals which every one of their heart rate measurements was either equal to, or larger than the average heart rate for their species.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=117)** It's an interesting exercise that can be solved using sub queries derived, tables or window functions.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=124)** If you want to try and solve it yourself, pause the video for a minute and give it a shot.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=130)** Kudos to those of you who solved it no matter how.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=135)** Calculating the average heart rate for each species is straightforward average aggregate window function, partitioned by species.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=145)** Let's execute it first as is.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=148)** To evaluate the Boolean expression, we'll use the every Boolean aggregate function.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=154)** It will return true, only if all the elements are true.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=160)** We partition it by both species and name so that the partition is limited to the current animal.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=167)** If we inline the species average aggregate window function, as an argument within the every Boolean aggregate window functions, we will run into one of the limitations of window functions in general.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=182)** Window functions cannot be nested.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=185)** The NC SQL 2016 standard defines an exception with a feature called, nested window functions.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=193)** Unfortunately, we don't have time to cover it in this course and even if I really wanted to demonstrate it, I can't.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=201)** As I'm not aware of any database that has implemented this feature yet.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=206)** We can circumvent this limitation with a common table expression, CTE, referencing the alias for this species average heart rate in the following query.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=218)** If instead of showing this Boolean attribute, we need to use it as a filter and show only animals that are consistently at or above their species average, we might be tempted to try and copy it into the where clause.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=234)** Only to be promptly reminded that window functions cannot be used in the where clause.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=242)** And the way around it, is just to use another CTE and push the filter down one more level.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=250)** All other aggregate window functions behave similarly.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=254)** And we're going to cover plenty of them later.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=256)** So I think that's enough for now.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=259)** Let's see how we can use both window and group aggregate functions together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3)
> **Env Vars:** sql (2), cte (2), json (1), xml (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Combining grouped and window aggregate functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=0)** - [Presenter] Look at this query and try to see if you can guess it's results.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=5)** I took the liberty of providing the result of the group aggregate COUNT (*) but what is the result of the window COUNT (*) function?
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=14)** Pause the video for a minute and see if you can figure it out.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=20)** The COUNT(*) group aggregate function evaluated each row group.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=25)** It had access to the individual rows within the group and being an aggregate function, it did its magic and returned a single value, the number of rows in the group.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=36)** The COUNT (*) window function doesn't have that privilege.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=41)** It is not a group function and is treated like any other select expression.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=46)** It does have access to all three row groups and the empty over clause makes the entire set visible to the function.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=55)** So the count of all row groups is three and it's going to be true for every single group.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=63)** Let's push it one step further.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=66)** What will happen if I'll use COUNT (Name) instead of COUNT (*)?
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=71)** Pause the video for a minute and see if you can figure it out.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=77)** And the winner is, error.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=81)** This query is logically invalid, the database will complain that name is not a group by expression and it is not contained in an aggregate function.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=91)** The window aggregate count doesn't have access to the individual rows within each group and for name to make sense in this context, it must return a single value per group.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=104)** What function would you use to count how many non-null names we have in total for all species?
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=113)** Ignore the fact that there are no-null names as it's part of the key but assume there may be.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=120)** Once again, pause the video for a minute and see if you can figure it out.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=128)** We must use a group aggregate function to guarantee a single value per row group.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=135)** A window aggregate SUM over the grouped aggregate count of each group will do the trick.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=144)** Does it make sense now?
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=146)** This is another confusing aspect of window functions and I often see experienced smart developers struggle, it's all about processing order and scope.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=159)** We need to create a query to report monthly adoption fees revenue.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=165)** The query needs to show every month and every year with adoptions, the total monthly adoption fees and the percent of this month's revenue from the total annual revenue for the same year.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=179)** First thing we need is to group by year and month.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=183)** And at this point, we can no longer use select star, you know we can only reference the group by expressions and use group aggregate functions on all others.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=193)** To calculate the monthly totals, we'll use the sum group aggregate function, provide descriptive aliases and I'll add an order by just as a visual aid and we're halfway there.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=206)** We see each month of each year alongside the total monthly adoption fee.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=212)** Now for the annual percent.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=215)** The formula for calculating percentage is 100 multiplied by the monthly total and divided by the annual total, to get the annual totals we need to look beyond the current row by defining a window partition by year.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=233)** We can't reuse the alias, we just defined due to the all at once principle so we have to copy the entire expression.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=241)** Beware of the lurking pitfall.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=244)** I won't make you guess this time.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=247)** Using SUM adoption fee as a window function will be rewarded with the infamous error, adoption fee must appear in the group by clause or in an aggregate function.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=259)** There may be multiple adoption fees for each month so it doesn't make sense.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=264)** We need to tell the database which adoption fee we are after with a group aggregate function.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=271)** And to do that, we need to use a window SUM of the group SUM of adoption fees.
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=287)** This query is valid and returns the desired result.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=292)** However, this monstrous expression isn't the prettiest manifestation of SQL and if you find it confusing and hard to read, you're not alone.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=302)** Therefore, I recommend separating the grouped query from the window function with a common table expression to improve its readability.
>
> **[5:11](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=311)** First, define the group query in a CTE, then add the window function percent calculation using the aliases just defined in the CT.
>
> **[5:21](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=321)** This is slightly longer but much clearer for you and whoever needs to read your code in the future.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=329)** Now it's your turn to fly solo.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (1)
> **Env Vars:** count (6), sum (4), sql (1), cte (1)
> **CLI Commands:** make (4), find (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [presenter] (1)

#### Challenge: Aggregate window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=0)** - [Instructor] I created challenges for chapters four, five, and six of this course.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=6)** You will find the challenge requirements, guidelines, and the expected results in the code files for each chapter.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=12)** In the same folder, you will find a file with my suggested solution, which I'm going to walk you through in the following video.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=20)** I've contemplated the challenges' difficulty level for a while and it was not an easy decision.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=27)** On one hand, a challenge that is too difficult will require much effort and may discourage you.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=33)** On the other hand, a trivial one kind of misses the whole point of a challenge and for me, solving a tough challenge is one of the most rewarding experiences of SQL.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=45)** And the more time and effort I need to invest in it, the greater the reward.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=51)** This is an advanced SQL course, so I decided to lean slightly towards the more difficult side of the spectrum.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=59)** Please let me know your feedback in the Q and A section.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=63)** SQL is an amazing declarative language and enables multiple correct solutions using different approaches, features, and syntax.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=72)** Consider my suggested solution as one option and not necessarily the best one.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=79)** I choose solutions that demonstrate the concepts clearly and that are generic enough to be of value in different similar cases.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=88)** If you find another solution that you like, please share it in the Q and A section for everyone to enjoy.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=95)** I love seeing solutions that I learn from.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=98)** If you're using a database other than Postgres, you may need to use different syntax and find alternatives for unsupported features.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=107)** However, you may find even better solutions using features that Postgres doesn't support.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=113)** Now to get you started, this first challenge is a warm-up and is not hard.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=119)** The following ones will be more difficult, enjoy.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Code Keywords:** require (1), let (1), from. (1)
> **Env Vars:** sql (3)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Aggregate window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=1)** - [Instructor] First, I'll find the number of annual vaccinations.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=5)** This is a simple query grouped by year using a count star to aggregate the number of vaccinations.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=12)** I don't need anything else from the table.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=14)** Only the years that had vaccinations and their vaccination count.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=20)** I always like to have the results of the previous step in front of me as I'm working on the next one.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=26)** That's why after every CTE, I add a select star from it and comment it out as I go.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=33)** I often find that I need to go back to previous ones for debugging.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=38)** I'm now ready to calculate the average for the previous two years.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=42)** I'm going to break the solution to multiple steps, probably more than necessary, but just to make it easier to follow and to avoid needing to repeat long expressions.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=54)** I also use highly descriptive long aliases even if it makes the query longer.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=61)** Remember, you can always go back and compact it.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=65)** I'll use the previous CTE as my input and add an average aggregate window function over the number of vaccinations calculated above.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=74)** Be careful with a partition window and frame.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=77)** Here, I don't need to partition since we already have one row per year.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=83)** What I do need is a frame that covers the two proceeding years, order by year, range between two proceeding and one proceeding.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=93)** What do you think will happen if we use rows instead of a range frame?
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=99)** Pause the video for a minute and think about it.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=104)** For this dataset, there will be no difference.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=108)** It contains consecutive rows for each year, but if I add a filter just to check it and remove 2018, using a range frame shows the average of the two previous years for 2019 as 23.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=126)** This is the correct result.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=128)** 2018, no longer exists and the frame extends only two years back therefore, we get 2017.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=137)** With a rows frame, the average shows 17.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=141)** And this is the average of the years 2016 and 2017, the two rows, not the two years that proceed 2019.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=152)** And that of course is not the correct answer.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=155)** All that is left is to calculate the change in percent, 100 multiplied by the number of vaccinations of the current year divided by the average of the past two years.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=168)** The cast to decimal prevents the results from having way too many digits, in this case, it's just for a better presentation, but for some of the next challenges, it will have a more substantial impact so remember it.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=183)** And with that, our first solution is done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** function (1), extends (1), case, (1)
> **Env Vars:** cte (2)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Rank and Distribution Window Functions

#### The concept of rank
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=1)** - [Instructor] Ranks define a relationship between a set of elements.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=4)** So that's for any two elements, we can state that one is ranked higher, lower, or the same as any other.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=11)** In mathematics it is called a weak order or a total preorder of elements.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=17)** Reducing or simplifying a set of attributes to a numeric sequence or ratio is extremely useful for evaluating complex datasets.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=28)** The ANSI SQL standard defines two window functions in the Rank category, RANK and DENSE_RANK.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=35)** I've decided to include two more functions for this chapter, even though they're not considered by ANSI to be true Rank functions.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=44)** These are ROW_NUMBER and NTILE.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=47)** The ANSI standard defines each as a category in itself.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=52)** From now on when I'll use the term Rank functions, remember I refer to all four.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=60)** Partitioning is optional for Rank functions.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=63)** The first major difference between Rank window functions and Aggregate window functions is their use of the ORDER BY clause.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=71)** For Aggregate window functions, ORDER BY's sole purpose was for framing.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=78)** For Rank functions, ORDER BY determines the basis for the rank and is mandatory.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=85)** Framing doesn't make sense for Rank functions, as a rank of an expression is always relative to others within its partition.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=93)** We can rank products based on size, popularity, price, age, or any other set of attributes.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=100)** Let's start with the somewhat simpler ROW_NUMBER and NTILE.

> [!info]- Semantic Content
>
> **Env Vars:** ansi (3), order (3), row_number (2), ntile (2), sql (1)
> **SQL:** order by (3)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### ROW_NUMBER and NTILE
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=1)** - [Instructor] Row number assigns each row in a partition and number out of a sequence of monotonically increasing integers, beginning with one and up to the number of partition rows.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=12)** Consider each row in this stadium as a partition and each seat as an element or a row ordered from left to right in ascending order.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=23)** One of the most common use cases for row numbers is the classic top N per group challenge.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=29)** Let's see how to solve it.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=32)** We need to write a query to show the top three and only three animals of each species who had the most checkups, including species for which we have less than three animals.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=45)** Let's start with a grouped query by species and name and a count star group aggregate function to get the number of checkups per animal.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=53)** Now I hope you didn't forget that we should include species that have less than three animals, and less than three also includes zero.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=63)** All species are in the reference species table, so let's incorporate that into our grouped query with the left outer join.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=72)** Count star no longer makes sense as for species with no checkups, it returns a one.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=78)** Either a name or checkup time will do.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=82)** Now we see that our shelter accepts both ferrets and raccoons, although currently we have none.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=90)** Next, we need to find a way to get the top three of each species.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=95)** First, let's try a sub query approach and see how that works.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=99)** Let's wrap the previous query in a CTE, calling it animal checkups.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=105)** Now let's add a correlated sub query from a second instance of the CTE that counts how many animals of the same species had more checkups than itself.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=115)** Those who had the fewest are the winners.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=119)** Let's execute it and see what we get.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=122)** The top three most checkup cats are Tigger in first place as there are no cats with more checkups than itself, and Ivy and Sadie are tied for second place.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=134)** The sharp-eyed among you may notice that there's another potential issue here, but let's ignore it for now and continue as if all is well.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=143)** Selecting from the CTE and filtering for animals, which there are fewer than three others with more checkups than themselves should give us the top three, right?
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=155)** Let's execute, and wrong.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=159)** There are three dogs that are tied for third place with 11 checkups each and three rabbits tied for second place with five checkups each and all are showing up.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=171)** The requirement was to return no more than three, so we're not done yet.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=176)** However, the requirement didn't mention which of the animals to return in case that there are ties, so we are free to pick any three.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=186)** The unique attributes per species is name, so let's use that as a tie breaker and count only animals whose name is smaller than the one from the outer query.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=197)** And to do that, we must write this long logical predicate with two evaluation paths.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=203)** If the number of checkups for the animal is larger than that of the one being evaluated, no problem.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=210)** If it's equal, only then compare their names and count only those with a lower value name.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=217)** Now we have an ugly, long, inefficient, unreadable but working solution onto the Window function.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=226)** Let's copy the group query with it's CTE, add a column with a row number, Window function, partitioned by species ordered by the number of checkups in descending order and name as a tiebreaker for consistency with a sub query.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=242)** By now, you know well that due to processing order, we can't use the row number result in the where clause so we must use another CTE.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=252)** Wrap the row number query in a CTE, select from it with a filter for rows where the row number is three or less.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=261)** The row number is one based, while the sub query count was zero for the first animal, so we need to use a smaller than or equal to operator.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=270)** And with that, we're done.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=273)** Not bad, right?
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=275)** Performance-wise, I think you can do the math yourself.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=288)** For the curious among you, at the bottom of the file, you'll find a third solution, which I think is even more elegant than both ones we just saw.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=298)** Check it out and let me know what you think in the Q and A section.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=303)** Ntile segments a partition into as equal as possible n or less segments.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=310)** Each segment is called a tile.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=313)** Ntile assigns each row an integer number out of a monotonically increasing sequence starting with one and ending either at N or the number of rows within the partition in case there are fewer of those.
>
> **[5:28](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=328)** Think section numbers in a stadium, where all seats within a section are assigned the same section number.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=337)** The stadium is the partition, the sections are the tiles, but unlike section numbers, ntile sections are as equal as possible in size and start with a one.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=349)** I can only recall a handful of cases where I actually used ntile for real world challenges.
>
> **[5:55](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=355)** But I will try to find an interesting use case for this chapter's challenge.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=362)** Back to the animals table, select species name and admission date for all animals.
>
> **[6:08](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=368)** Unpartitioned ntile 10 by admission date segments a 100 animals into 10 segments with exactly 10 rows each.
>
> **[6:17](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=377)** Ntile 30 results in uneven segments and the remainder is distributed among the first partitions.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=384)** That's why we see four rows in segment one, four rows in segment two, but all the following segments have three rows each.
>
> **[6:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=397)** Ntile 30 partition by species will result in one tile per cat as we happen to have exactly 30 cats.
>
> **[6:45](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=405)** Scrolling down to rabbits of which we have only 10, we see that there are only 10 segments with one row each.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (3), continue (1)
> **Env Vars:** cte (6)
> **CLI Commands:** find (3), cat (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### RANK and DENSE_RANK
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=0)** - [Man] Rank assigns each row a number between one and the number of distinct values in a partition.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=9)** If the values of the sorting expressions within the partition are all unique, the sequence will be monotonically increasing by one, which will be the equivalent of the row number.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=20)** However, unlike row number, when a partition has tied sorting value expression rows, they are all assigned the same rank.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=31)** The following value receives its rank disregarding the ties, hence introducing gaps in the sequence.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=38)** Dense_Rank does a very similar thing, but as his name suggests, it avoids the gaps.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=45)** These are best explained with an example.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=48)** Let's revisit the routine checkup report we used two demos ago simplified to exclude species for which there were no checkups.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=57)** Let's add columns for Rank and Dense_Rank, I will be reusing the over clause.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=63)** So a window clause is probably an order.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=67)** The row number generated a unique value for each row even though Ivy and Sadie had seven checkups each.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=75)** And you already know that it could have been the other way around and just as correct.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=81)** Rank assigns the same rank too to both Ivy and Sadie, and Charlie, the next cat in line with six checkups gets a rank of four.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=92)** The three was skipped due to the duplicate ranks assigned to Ivy an Sadie.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=98)** And similarly, we see larger gaps for Misty, Oscar and Simon with four checkups each and then Archie with three.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=107)** Like Rank, Dense_Rank, assign the same rank to Ivy an Sadie, but it avoided the gaps and assign Charlie a rank of three.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=117)** At this point, you may be asking yourself, well, what are all these nuances good for?
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=123)** I'll tell you that understanding these nuances is going to save you hours of frustration for slightly different requirements.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=133)** For the row number, the requirement was to show the top three animals who had the most checkups.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=139)** For that, we use the filter on the row number of three or less.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=144)** You may also recall that we have three dogs tied for third place and three rabbits tied for second.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=151)** What if we do need to include ties for third place, like the original sub-query solution did before we add a name to break the ties?
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=161)** This is a slightly different question.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=164)** Show me the top three animals per species with the most checkups and include any animals tied for third place.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=172)** And row number won't help us with that, but Rank is here to save our day.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=178)** Replacing the where predicate to rows where the rank is three or less is going to do just that.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=185)** For cats, it didn't change anything as they had no ties.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=189)** For dogs, we now get five back, including Jake and Shadow that were missing from the previous query.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=197)** And now I have a quiz for you.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=199)** And this time, we're going to do a reversed quiz.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=202)** I'm going to show you the query and you need to come up with a question.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=206)** What is the question that is answered by the query, where our filter is for rows whose dense_rank is smaller than or equal to three?
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=219)** Pause the video for a minute and see if you can find the question.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=224)** If you're not sure yet, let me execute it for you and give you another chance to figure it out.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=231)** Pause the video again and see if it makes more sense.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=235)** The question this query answers is not for the top three animals.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=241)** It is for the top three distinct number of checkups.
>
> **[4:06](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=246)** Show me all animals that have a number of checkups, which is one of the top three number of distinct checkups per species.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=257)** And now you know what all these rank functions can do for you.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=261)** And with that, I rest my case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1)
> **CLI Commands:** cat (1), find (1)
> **Code Identifiers:** dense_rank (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### Distribution window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=1)** - [Instructor] A cumulative distribution function, describes the probability that our random variable X evaluated at n, we'll take a value that is less than or equal to n.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=13)** As a highly simplified example, consider a standard six side playing dice.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=19)** Each side has a unique integer value between one and six and has a roll probability of 1/6.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=27)** The cumulative distribution for rolling a value that is equal to or smaller than one is 1/6.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=35)** The probability for rolling a value that is equal to or smaller than two is the sum of the previous and the current probabilities 2/6 or 1/3, similarly for a three, the permeability is 1/2 and so on up to one.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=54)** One represents the probability of rolling a value that is equal to or smaller than six and that is a certainty.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=64)** The NCC equal standard defines distribution window functions as functions that compute a relative rank over a row R, within a window partition of R, expressed as an approximate numeric ratio between 0.0 and 1.0.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=83)** SQL supports two variants of distribution window functions, percent rank and cumulative distribution.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=90)** Their syntax is similar to that of ranking dense rank, both functions take no arguments, have an optional partition by clause and the mandatory order by clause.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=103)** Let's use the same highly simplified dice example to see how each function is evaluated.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=110)** In a window partition, each side of the dice is a row R the window is sorted by the rows integer values in ascending order.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=120)** Cumulative distribution evaluate the relative rank over row, Rn as Np of N divided by NR.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=130)** Np of N is the number of rows proceeding or peer with Rn and NR is the total number of rows in the partition.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=140)** For example, row two has two rows that proceed, or peer it divided by the total number of rows, which is six evaluates to 1/3.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=151)** Percent rank evaluates the relative rank of a row Rn, as the rank value of Rn minus one, divided by NR minus one.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=164)** Present rank evaluates to relative ranks that much like cumulative distribution and with a one, but it begins with a zero.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=174)** For example, rows two rank is two, minus one is one divided by the total number of rows six minus one is 1/5.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=187)** Let's have some fun with statistical weight analysis of our animals.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=192)** An animal's weight may vary between measurements.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=195)** So first let's average it with a group aggregate query, an order by for both species and average weight in descending order will cause the rabbits to show up first with the heaviest ones on top.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=210)** Now, the reason I'm doing this is because there are fewer rabbits, which is going to make our visual reference a little easier.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=219)** Like before, let's wrap the group query in a CTE for convenience and select from the CTE, let's add both percent rank and cumulative distribution window functions, partitioned by species and ordered by the average wait and execute.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=237)** The order by for the window function is an opposite sort of direction to the one used for presentation order but of course it doesn't affect the results.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=247)** April is our chubbiest rabbit at nearly seven pounds, both percent track and cumulative distribution assigned her a perfect one as all other rabbits are lighter.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=260)** Peanut is our lightest rabbit at 3.13 pounds, and her name suits her very well.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=268)** Percent rank assigned peanut is zero as there are no lighter rabbits while the cumulative distribution assigned a value, which is slightly higher than zero.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=279)** If you're a statistician or a data analyst, you're probably find these extremely useful.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=285)** Unfortunately, I am neither so I'm going to leave it at that and proceed right onto this chapter's challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3)
> **Env Vars:** cte (2), ncc (1), sql (1)
> **Versions:** 0.0 (1), 1.0 (1), 3.13 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Rank window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=1)** - [Instructor] As I promised, I believe you will find this challenge more difficult than the previous warm up one.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=7)** Naturally, it will involve rank window functions.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=11)** It may also require aggregate window functions, or even group aggregate functions just to make thing more interesting.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=19)** This challenge is an example of a common category of challenges that I frequently encounter in the real world, analyzing time series data, for example stock prices or sensor readings over time.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=33)** I recommend that you use a similar approach to the one I demonstrated with a previous solution.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=39)** Break down your solution into small, digestible chunks using as many CTEs as you feel comfortable with.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=47)** After each one, execute a select star, preferably by an order by to keep row order consistent for visual reference, and once you're happy with it, proceed to the next step.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=59)** Remember that data type issues can hinder your progress, so make sure to cast expressions early to manageable easy to read types.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=69)** Enjoy.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** require (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Rank window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=0)** - [Instructor] First, let's figure out the species average temperatures and every measurement's difference from it.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=8)** I chose to use an aggregate window function partitioned by species and subtracted from the current temperature.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=16)** Well, I could've separated this into two CTEs to avoid repeating the function.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=21)** I believe that by now you should be comfortable enough with a bit more logic in each CTE.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=27)** A reasonable alternative is to first calculate all the averages per species with a grouped query, and join it to routine checkups.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=36)** It makes calculating the difference a bit more direct.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=40)** At the bottom of the solution code file you will find an alternative query that uses the same steps as I'm about to show you for this one using slightly different syntax and features.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=53)** The next step is calculating whether a measurement's difference from the average constitutes an exception or not.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=60)** I chose to use the integers one and zero to differentiate exceptions from non-exceptions, and you'll see in a minute why.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=69)** The absolute function is needed to account for both positive and negative differences.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=74)** I used the Boolean exception indicator for the alternative query with a count aggregate just for fun.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=81)** Check it out.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=83)** Now that I have all exceptions, I can count how many of these each animal experienced.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=89)** Grouped by species and name will group all checkups to one row, group, or animal.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=95)** A grouped sum aggregate will sum up all the ones and zeroes we just calculated for the total number of exceptions per animal.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=105)** The requirement is to sort by the latest checkup time for animals whose number of exceptions are the same.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=112)** Using a max checkup time we won't do, as it will include rows for which the checkup times are not necessarily exceptions.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=121)** And to work around it, I used the case conditional expression that returns checkup times only for exception rows.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=130)** Nearly done.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=131)** Now I have each animal's number of exceptions and its latest exception date.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=137)** Time to segment the results into four roughly equal segments per species.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=143)** NTILE 4, partition by species, ordered by the number of exceptions, and a tiebreaker of the latest exception time in descending order will do the trick.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=155)** All that's left is to filter for the first segment, the one that got assigned an NTILE value of one that represents the lowest number of exceptions sorted nicely, and that's about it.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=169)** For the alternative query at the bottom of the file I used percent rank instead of NTILE.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=175)** Make sure to check it out.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=176)** I also left a question for you there.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=179)** See if you can figure that one out, too.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=182)** And now we're off to offset window functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1)
> **Env Vars:** ntile (3), cte (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Offset Window Functions

#### Offset window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=0)** - [Instructor] Offset window functions enable access to individual partition rows, and they come in two flavors.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=7)** A pointer to another row can be either based on a current position or on an absolute position regardless of the current one.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=17)** If you're looking for the restrooms, I can help you get there based on your current location.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=22)** Move two doors eastward or 600 steps north from where you are.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=28)** Alternatively, I can direct you to the same restrooms based on a known location.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=34)** Two doors from the entrance or last door to the north, and this is regardless of your current position.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=42)** Offset window functions support both direction types.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=46)** Lead and lag are called row offset functions, as they use a positional offset from the current row.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=54)** This is the equivalent of move two doors eastward.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=59)** Partitioning is optional, and framing is irrelevant, as the offset is specified from the current row's position.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=66)** First, last, and nth value functions are called frame offset functions, as they use an offset from a frame boundary.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=76)** This pointer doesn't care about the current row's position and is the equivalent of last door to the north.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=84)** For these functions, partitioning is optional, but framing is mandatory.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Row offset window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=1)** - [Instructor] All Offset functions require a mandatory expression for what we want to fetch from the other row.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=9)** Row Offset functions have two additional optional parameters.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=13)** First is an Offset value and the second is a Default value replacement.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=19)** The Default is used in case the Offset points to outside the partition boundaries or to a row that doesn't exist.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=28)** If Offset is not specified, one is assumed.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=32)** If a default is not specified, NULL will be used.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=37)** IGNORE and RESPECT NULLS determine whether rows with NULL expressions are counted towards the Offset.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=43)** The Default is RESPECT NULLS.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=47)** Following are the optional PARTITION BY clause and the mandatory ORDER BY clause.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=52)** Remember the ORDER BY in this case does not imply framing.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=57)** And in fact, we can't specify a frame even if we really wanted to.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=63)** Here is a row set ordered by the green column in ascending order.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=67)** We're currently evaluating the highlighted third row.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=71)** A lead with an Offset of one points to the following row and a LAG with the same Offset points to the previous row.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=80)** Note that the Offset has nothing to do with the value gaps of the green values.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=86)** It refers to the relative position and nothing else.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=93)** The weight analysis was a lot of fun, so let's take it one step further.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=97)** We need to write a query that returns all animal weight measurements and how much they gained or lost since their last checkup.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=106)** This time we don't need the group by as we're looking for the individual measurements.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=112)** Here is the base query to get us started.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=115)** Let's add a column that subtracts current weight from the previous one using LAG weight, PARTITION BY species and name, ORDER BY checkup time ascending.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=127)** Note that the first checkup for each animal returns a NULL weight gain as there are no previous measurements.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=135)** I believe that this is purely a presentation issue that should be solved on the client side and not in the database.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=142)** Nevertheless, let's see what we can do about it.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=146)** First, a naive attempt to use a default string of not available will immediately run into reality check.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=154)** We can't use a string as a default for a numeric column, makes sense.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=160)** Even a COALESCE over the expression won't avoid this incompatibility.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=165)** I've witnessed cases where developers were tempted to cast the inner numeric expression to a string which unfortunately is going to bite much harder.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=175)** And to easily demonstrate this issue with this dataset, let's for a minute multiply weight gain by 100.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=182)** I'll also change the ORDER BY to weight gain so that the issue will be easily visible.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=188)** And looking at Charlie's row, everything seems to be okay.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=192)** However, scrolling down reveals that for Simon, a minus 20 gain is sorted as being smaller than a minus 41.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=202)** And this is the correct sorting for strengths but this is not what we are after.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=209)** A zero won't do either.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=211)** We can't use an integer literal as it is incompatible data type as well.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=217)** Side note, I guess that PostgreSQL could have been a little bit more lenient here and implicitly convert the integer literal to a numeric for us.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=227)** Other databases like SQL Server do that.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=231)** That said, and if you know me just a little by now, you know that I will never complain about a database being too strict.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=240)** The opposite is usually true.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=243)** Changing the zero to a 0.0 works.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=247)** But the result is not good either.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=251)** Current weight minus zero is the current weight, not the weight gain.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=255)** So using current weight as a default results in a zero gain for their first checkup, but that's no good either.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=265)** If this set requires further processing, for example, averaging the weight gains, this zero is going to skew the results.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=274)** The point I'm trying to make here is that we just don't know what the gain is for the first checkup and therefore it should remain a NULL.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=284)** With all its complexities and all its anomalies, NULL is still the best way to deal with missing data.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=293)** I guess that if the last three minutes end up saving you even four minutes sometime in the future, then it was well worth it.

> [!info]- Semantic Content
>
> **Env Vars:** null (5), order (4), respect (2), nulls (2), partition (2)
> **Code Keywords:** let (4), require (1), else. (1)
> **SQL:** order by (4)
> **Definitions:** is a  (2), is an  (1), refers to (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Versions:** 0.0 (1)
> **Analogies:** for example (1)

#### Frame offset window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=1)** - [Instructor] Like the row offset functions, frame offset functions require a mandatory value to fetch expression.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=8)** Nth value also requires an offset specification.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=13)** Nth value supports an optional from first or from last clause, which determines whether the offset is evaluated from the beginning or from the end of the frame.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=24)** The default is from first.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=27)** Ignore and respect nulls work the same way as they did for row offset functions.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=33)** Partitioning is optional, but framing is mandatory.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=37)** Note that the order by is used both for the frame definition and also for the offset evaluation of nth value.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=47)** Wouldn't it be nice if the frame and nth value could use different sort orders.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=53)** As for the frame definition, mandatory is a bit of a strong word as we can omit it and specify only the order by.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=62)** I highly recommend that you don't, as if you do, a frame will be assumed for you and it happens to be the same unfortunate one we saw for aggregate functions, range between, unbounded preceding and current row.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=80)** Here is the same row set as before with a frame of rows between unbounded preceding and one following.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=88)** First value points to the first frame row and for any frame that uses unbounded preceding, first value will always point to the same row for all partition rows.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=103)** Last value points to the last row in the frame, which is one following in this example.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=109)** The n boundary will keep advancing as the frame advances for each subsequent partition row.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=116)** Lastly, nth value using an offset of two and the default from start points to the second row in the frame.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=125)** Confused yet?
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=127)** Great.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=127)** If not, let's see a code demo and try to confuse you some more.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=134)** Here is the query we just used to calculate weight gains.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=138)** The lag function doesn't care how long ago the previous checkup was, as it is based solely on the row's position, and therefore, these results can be highly misleading for any medical evaluation.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=153)** A weight loss of half a pound in a week is much more alarming then a similar weight loss realized over a year.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=162)** And to fix that, we need to replace the weight gain since the previous checkup with a weight gain, let's say over the past three months.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=171)** This is slightly trickier and may not have a definite ultimate answer as we don't have data for every single month and yet let's give it a shot and see what we come up with.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=184)** If your database never had any missing data points, you're more than welcome to skip this demo.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=191)** Let's begin with a naive approach like before and work our way up.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=197)** First, I'll try a first value using a range frame that begins three months before and ends with the current row.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=206)** If I execute, I can immediately see that the results are very suspicious.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=212)** When I see so many zeros and not a single null, although I know we have plenty of missing data points, my alarm bells start ringing.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=222)** Do you see why that is?
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=224)** Pause the video for a minute and see if you can figure it out.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=230)** There are no nulls as for all rows, regardless of the number or frequency of checkups, the frame has at least one row, the current one, that's also the reason for the zeros galore.
>
> **[4:06](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=246)** First value for frame that consists of the current row is the current weight.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=254)** If we look at Charlie's checkups from March 20th, 2018, we can see that his weight gain of 0.3 pounds was realized from one month before, not three.
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=267)** Now, I already admitted that the requirements are not complete.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=271)** I said we needed to show the weight gain of the animal over the past three months, I didn't say what we should do if there are none or if there are only more recent measurements.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=285)** Trying to limit the frame to only three months ago by replacing current row with three months preceding is not very helpful either.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=294)** You may recall that range frames are data type dependent and checkup time is a timestamp.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=302)** Postgres timestamps include the time of day with a resolution up to a microsecond.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=309)** This means that the frame will catch a previous checkup only if it happened to take place precisely three months ago to the microsecond, and that's not very likely.
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=322)** Let's change that by explicitly casting checkup time to a date type instead.
>
> **[5:28](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=328)** The frame now covers checkups that happened on the same date three months before, but regardless of the time of day.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=337)** And these results are slightly more useful, although not much.
>
> **[5:42](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=342)** We do get a few non-null results such as Charlie's latest two, as he happened to have had checkups at on the same day, three months before.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=353)** Now, the purpose of this demo is not to come up with a definite ultimate answer, as I already said twice that the challenge is not well defined.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=362)** What I do want to show you is some of the challenges that you may encounter when dealing with offset and ranges.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=369)** But I can't leave you hanging without some sort of answer so here is what I would do if this was my application.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=379)** I would use a frame of three months preceding and one day preceding.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=384)** My reasoning is that if we're looking for abnormal weight differences over three months, these differences should be much more alarming if realized over shorter periods of time.
>
> **[6:37](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=397)** I would change the query to sort by the absolute weight gain, not by animal and checkup time and note that Postgres does not allow for functions on order by expressions, which use aliases from the same query.
>
> **[6:51](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=411)** And the error message is somewhat misleading.
>
> **[6:55](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=415)** Other databases have no problem with it, and the workaround is simple, just wrap it in a CTE and sort in the following query.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=425)** I would also add nulls last, so we don't have to scroll down to see our first real result.
>
> **[7:11](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=431)** Alternatively, we can eliminate null rows in the (talks) clause.
>
> **[7:16](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=436)** Even better is sorting by relative and not by absolute weight gain because a two-pound loss for a 50-pound dog is not as alarming as the same loss for a four-pound rabbit.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=451)** This requires yet another CTE to calculate the percent change, and here are the results.
>
> **[7:40](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=460)** And now if you'll excuse me, I really need to hurry, go check on Walter, it seems that something is very wrong with the poor guy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), require (1), function (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** cte (2)
> **Warnings:** note that (2)
> **Versions:** 0.3 (1)
> **Documentation:** specification (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)

#### Challenge: Offset window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=0)** - [Instructor] Like the previous challenge, the last challenge for this course involves more than just the chapter's topic.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=7)** So, of course, you will need to use offset window functions, but perhaps also aggregate functions or maybe even a RANK window function.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=17)** Basic knowledge of datetime function is necessary, so if you're not familiar with these, the documentation is your friend.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=25)** And please do read the requirements carefully.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=29)** I left an important tip for you there that is going to save you some misery.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=34)** Enjoy.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **Env Vars:** rank (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Solution: Offset window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=1)** - The first step is to identify each quarter.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=4)** And, I really hope you heeded my tip, and used quarter start dates as their identifiers, and were not tempted to extract quarter number and years from the dates.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=15)** If you did, I bet you quickly realized what a hassle they are when dealing with cross-year boundaries.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=23)** I chose to use MAKE_DATE with DATE_PART, but any other method is fine, as long as you end up with the date type to work with.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=32)** All I need are the species and the quarters.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=35)** At the bottom of the solution file, you will find an alternative query that uses extract.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=41)** Now, I can figure out quarterly adoptions and then some.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=45)** The first challenge is to find the right grouping expressions.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=50)** I need to calculate quarterly adoptions, both for each species, and for all species.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=58)** One option is to write two separate queries, one that groups by quarter and species, and another that groups only by quarter, and then union them.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=68)** And, there's nothing wrong with this approach, and in fact, I used it for the alternative query, which you know where to find.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=76)** What I did choose to use is a very powerful, but unfortunately less frequently used feature of SQL called grouping sets.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=86)** Grouping sets create multiple row groups in a single query.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=90)** Group by grouping sets, quarter and species, and only quarter, will add super-aggregate rows for all species for each quarter with a null for species.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=103)** Magically, we have a new row group, representing all species for each quarter, which is going to significantly simplify all upcoming calculations.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=115)** The COUNT(*) group aggregate function counts all adoptions for each quarter and species.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=122)** At this point, we're ready to calculate the difference from the previous quarter.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=127)** This is the current quarter's count, minus the previous quarter's count, which I get with FIRST_VALUE, partition by species, and a frame that starts and ends with an interval of three months preceding, a.k.a. previous quarter-start.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=146)** Now, you see why using the quarter start date as its identifier is such a good idea.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=155)** For quarters that follow quarters with no adoptions, the frame is going to be empty, and the function will return a null.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=163)** Subtracting a null from an integer results in a null.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=167)** So, I must use COALESCE, and replace them with zeroes.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=172)** I also identify the first quarter for each species with a CASE conditional expression, comparing the current quarter with the first one for its species, with another first value, partitioned by species and ordered by quarter start.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=189)** The frame's end boundary doesn't really matter, as we referenced the first value in the frame.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=194)** But, I chose to use what I consider to be logically correct, a frame that covers the whole partition.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=202)** If the current quarter is also the first quarter, this expression evaluates to a zero.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=209)** For all other quarters, a null.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=212)** And, you'll see why I do that in the next step.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=215)** Another valid option is to use a Boolean expression, which I did for the alternative query.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=222)** While you're checking out the alternative query, also notice the slightly different logic using LAG, it's pretty cool.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=230)** Now, that was the hard part.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=232)** All that's left is to rank each quarter for each species.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=237)** The COALESCE will return zero for the first quarter.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=240)** And, for all other quarters, where it is a null, the actual difference from the previous quarter is used for the rank, as per the requirements.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=250)** The quarter-start descending tiebreaker guarantees that the most recent quarter is used in case of ties.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=258)** And lastly, filter for rows with a rank of five or less, revert the quarter identifiers back to year and quarter number, and sorted per the requirements.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=270)** SQL and window functions are so mind-blowing amazing, aren't they?

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), coalesce (2), make_date (1), date_part (1), count (1)
> **CLI Commands:** find (3)
> **Code Keywords:** function (2), super (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)


### 8. Conclusion

#### Review, conclusion, and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=0)** - [Instructor] And so here we are, at the end of our short but intense journey.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=6)** I can't believe we started it just two hours ago.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=10)** Our first step was an introduction to the general concepts of Window Functions and the OVER Clause.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=16)** We learned about partitioning, Framing subtleties, and frame Exclusions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=21)** Then, we covered the three types of Window Functions in-depth.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=25)** We saw how Aggregate Window Functions differ from group aggregate functions, the one you know and love, and how both can live together in harmony.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=36)** I bet that the Rank and Distribution Functions blew the minds of the analysts among you.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=42)** For you developers, I promise that you will learn to appreciate how useful they are for solving numerous types of challenges as you get comfortable with them, and the same is true for Offset Window Functions.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=56)** They too, have numerous use cases and will come in handy no matter what type of obligations you're working on.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=64)** If you haven't watched my query processing course yet, it's not too late.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=69)** After completing this course, it will be easier to follow, and will help put some of the more basic SQL constructs into an even tighter framework.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=79)** Window functions are your friends, and one of your most valuable tools no matter where you're heading with your SQL career.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=88)** If you like this course, please bookmark my author page, and check it occasionally to see when I publish new ones.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=95)** I promise to make good use of window functions to solve all kinds of nifty challenges, and there's no shortage of good challenges.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=105)** LinkedIn Learning is an endless resource of quality content.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=109)** With so many options, choosing the right course to spend your valuable time watching isn't a simple task.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=117)** I recommend that you choose courses that focus on foundational knowledge, theory, and understanding of the subject matter, rather than ones that focus on syntax and promise instant results.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=130)** Don't get me wrong, there's nothing immoral about learning how to get your hands dirty fast, but only as a starting point.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=139)** Unfortunately, I often see developers stuck at the Stack Overflow copy paste paradigm for the rest of their SQL careers.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=148)** Don't be tempted by instant solutions, not for SQL, and not in your life.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=154)** The instant culture has been thriving in recent decades, and that's really not a good thing.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=161)** If you're serious about your SQL career, I recommend that you bite the bullet, and spend whatever time and effort is needed to master the relational data model, SQL's forefather.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=174)** It is not an easy subject, and that's an understatement.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=179)** On the other hand, I can't overstate the importance of understanding the foundations on which SQL was built.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=187)** Do that, and you will stand out from the crowd of script kiddies.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=192)** You see, even in this Adobe stock image we purchased for this course, every single table has a table name underscore ID as its primary key.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=203)** You will know better than that once you learn what a key really represents in the relational model, and I promise you it will blow your mind once you get to know it.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=214)** Dr. Codd was a rare genius.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=217)** Make sure you read his book and his articles.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=221)** I'll provide links to some of my favorite resources in the code file for this chapter.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=227)** I really need your feedback to improve.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=231)** Did this course meet your expectations?
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=233)** Was there any part where you wished for more?
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=236)** Any topics you found boring or trivial?
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=240)** Were the challenges too hard or too easy?
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=243)** Do you disagree with something I said and feel the urge to correct me?
>
> **[4:08](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=248)** All feedback is fair game, and I invite you to rank this course honestly.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=254)** And even better, I will highly appreciate it if you could spend a few minutes and provide more detailed feedback than just a like or a like or a DENSE_RANK.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=265)** Use the Q and A section to leave feedback and ask questions.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=269)** You're also very welcome to look me up on LinkedIn and connect, but if you do, please add a personal message to your connection request.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=279)** Our human brains work in mysterious ways.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=282)** They're complex neural networks, and learning triggers new pathways and memories.
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=287)** These pathways are volatile, and without practice they will soon fade away.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=293)** Studies have shown that in one hour, you will forget about 50% of what you remember now, 70% will be gone tomorrow, and 90% in a week.
>
> **[5:05](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=305)** To make sure your effort and time were not in vain, you must do four things, practice, practice, practice, and keep learning more SQL.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=316)** So, to keep you busy with some more practice, I created one last challenge as homework.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=323)** It's an extra difficult one for triple bonus points.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=327)** You'll find the challenge and the solution files, as usual, in the folder for this chapter.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=333)** And I'm not going to review neither the requirements nor the solution.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=337)** I did leave detailed comments and descriptive aliases, and I really hope that's enough.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=343)** I will tell you that it took me over two and a half hours to solve it and weed out all my bugs.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=349)** So, be patient and careful.
>
> **[5:52](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=352)** I hope you'll enjoy it, and find a better solution than mine, and if you do, let me know in the Q and A section what you think and how you solved it.
>
> **[6:04](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=364)** And on that positive note, it is time to say goodbye.
>
> **[6:08](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=368)** Thank you, from the bottom of my heart, for your patients and making it all thew way to this point.
>
> **[6:15](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=375)** I couldn't have done it without you.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), dense_rank (1)
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** let (1)
> **Cross-References:** we covered (1)
> **Documentation:** stack overflow (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ami Levin]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL- Logical Query Processing, Part 2]] | **4 of 8** | [[Advanced SQL for Query Tuning and Performance Optimization]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)