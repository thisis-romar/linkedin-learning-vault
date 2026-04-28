---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-logical-query-processing-part-1
url: "https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1"
duration_minutes: 102
duration: 1h 42m
level: Advanced
updated: 12/6/2024
learners: 73284
skills:
  - Database Queries
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG28KHopi6kWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619735443478?e=2147483647&amp;v=beta&amp;t=U5fUSj6XbdM7tR_q9ix_WGa_Pig5SqY8AUCIGx1QaWA"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Top Five Things To Know In Advanced Sql]]'
next_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 2]]'
path_nav: '[{"path":"Master SQL Development","position":2,"total":8,"prev":"Top Five Things To Know In Advanced Sql","next":"Advanced SQL- Logical Query Processing, Part 2"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-queries
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL-%20Logical%20Query%20Processing%2C%20Part%201.md)

![Advanced SQL: Logical Query Processing, Part 1](https://media.licdn.com/dms/image/v2/C4E0DAQG28KHopi6kWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619735443478?e=2147483647&amp;v=beta&amp;t=U5fUSj6XbdM7tR_q9ix_WGa_Pig5SqY8AUCIGx1QaWA)

# Advanced SQL: Logical Query Processing, Part 1

> SQL has been the dominant data processing language for the past five decades. This course takes you beyond the syntax fundamentals, and into a new world of understanding how relational database management systems process SQL queries, and how that impacts your coding practices. Learn about logical query processing, and avoid most common pitfalls and processing limitations. Discover advanced JOIN te

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1) | 1h 42m | Advanced | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (5 videos)
- **2. 1. Constructing Query Source Data Sets** (5 videos)
- **3. 2. Row Filters** (3 videos)
- **4. 3. Grouping** (5 videos)
- **5. 4. Ordering and Paging** (3 videos)
- **6. Conclusion** (2 videos)

### 1. Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=0)** - [Ami] You're an uprising or seasoned data practitioner.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=17)** You write SQL for work or for fun.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=20)** You taught yourself SQL or perhaps taken a few courses.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=25)** You feel you have a decent hold of the syntax and you manage to get stuff done in SQL reasonably well.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=32)** And yet, you often find yourself scratching your head, trying to wrap it around this extremely annoying query.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=40)** Why doesn't it work?
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=43)** Well, don't feel bad.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=45)** It is not your fault.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=47)** No one ever taught you how your queries are processed and why they work that way.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=54)** Query processing order is one of the most fundamental aspects of SQL.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=59)** In this course, I invite you to say goodbye to many hours of frustration, and hello to the beginning of a fresh, solid understanding.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=69)** For this course, I will assume that you're somewhat familiar and experienced using basic SQL, but even if you're just starting your SQL career and not fully confident yet, I suggest you don't go anywhere before you complete this course.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=85)** In the following two hours, we're going to explore the subatomic structure of a SQL query from a fresh new angle, which will bring with it radical new insights into SQL's beauty and its power.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=98)** We are not going to write two page long complex queries, that will come in the following courses.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=105)** This course is needed as a foundational back to basics so that the complexities that will follow will come effortlessly.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=115)** You will begin to see SQL queries through the eyes of the database, exactly as it processes them and unveiling the intricacies and logic behind every clause.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=127)** Layer by layer, chapter by chapter, we'll uncover how SQL queries are processed.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=134)** You will learn methodologies for analyzing and solving SQL challenges, and how to avoid the most common pitfalls.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=142)** You're about to take the most significant SQL course ever.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=147)** This is not your typical script kiddy course.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=150)** It's going to challenge you every step of the way, and much more so, on the topics that you think you know and take for granted.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=160)** Remember, "it ain't what you don't know "that gets you into trouble, it's what you know for sure "that just ain't so."

> [!info]- Semantic Content
>
> **Env Vars:** sql (12)
> **CLI Commands:** find (1)
> **Speakers:** - [ami] (1)
> **Non-Speech:** (upbeat music) (1)

#### Course agenda
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=1)** - [Instructor] In this chapter I'll briefly review our agenda and the tools I'll be using.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=6)** I'll introduce you to the demo database and show you how to use the code files.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=10)** Then we'll dive right into query processing, starting with the processing of the source data sets.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=17)** You will see how single and multiple sources are processed, in what order, and why it matters a lot.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=26)** Next, we'll see how row filters are applied and how to use both binary internally logic.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=32)** We'll focus on the common anomalies that often deceive even the most experienced developers.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=39)** In chapter four we will learn exactly what happens to the data set when it's grouped and the logical limitations that grouping brings with it for the rest of the query.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=49)** In chapter five we'll leave the relational world behind to deal with ordering and paging.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=55)** It is not as simple or innocent as it may seem.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=59)** And lastly, we will briefly review what we've learned, I'll give you some recommendations to go, and say proper farewell.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Tooling
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=0)** - [Instructor] The concepts you will learn are universal and apply to all relational database management systems.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=7)** I will be using SQL Server for most of the demos, occasionally switching to show you how other databases behave or misbehave.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=16)** For an ID, I will use SQL Server Management Studio and for the other databases, I'll use DBeaver Community Edition, which supports all mainstream databases.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=27)** I will not cover installation or configuration of any of these databases or tools.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=33)** In the code file for this video, you will find links to step-by-step installation articles for all databases I'll use in this course.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=42)** If you can't install any of these and don't have access to a network server or a cloud-hosted database, you still have the option of using an online query service.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=52)** An online query service requires no installation as everything is done inside your browser.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=59)** There are a few such online services, SQL Fiddle, DB Fiddle, Rextester, and others, but my favorite one by far is db&lt;&gt;fiddle UK.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=70)** It has proven to be highly reliable and free of commercial interest, qualities that most other services have not, let's say, excelled at.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=80)** You will find db&lt;&gt;fiddle UK links to copies of all code files, including the database creation script embedded and hidden.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Introducing the demo database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=1)** - [Instructor] I considered using existing sample databases, such as MySQL's Employees, SQL Server AdventureWorks, Worldwide Importers, or one of the many others that are out there.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=12)** It was very tempting to use a familiar off-the-shelf database, but I chose to create a new one from scratch for this series.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=21)** Honestly, I find most of the existing demo databases to be severely flawed in their design.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=27)** And I will use this opportunity to demonstrate some of my design choices using a topic that is near and dear to my heart, helping animals in need.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=38)** So hereby I proudly introduce the Animal Shelter demo database.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=44)** At first glance, you might find it somewhat odd.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=48)** First, I chose to use natural, intelligent keys for all tables.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=53)** There are no magical IDs, auto increment columns, sequences, identity GUIDs, or any other type of surrogate key.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=62)** This is a controversial topic with near religious opinion and heated debates.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=67)** And I'm aware that my opinion is in the minority.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=71)** I find that the abuse of surrogate keys for every table in the database to be one of the most destructive habits ever to plague the relational database world.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=81)** And surrogate keys have their place and can be useful, just not as a default one-size-fits-all solution for every single table in the database.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=91)** What's worse is that this practice got so deeply rooted and most database designer these days don't even consider the natural business keys and immediately opt for whatever table name underscore ID as the primary key.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=107)** And this has devastating results for data consistency, query convolution, workload performance, modularity, scalability, concurrency, and I can go on forever.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=119)** I plan to release a course dedicated to this topic.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=123)** For now, I ask that you just take it for what it is, and see for yourself how simple, elegant, and efficient SQL becomes when writing queries against tables that use natural keys.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=135)** To be able to fit this database in DB Fiddle, I used only a subset of the tables from the full animal shelter database project and with only a few hundred rows of data.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=146)** If you visit the GitHub project page for this database, you will see that I've included many more reference data tables.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=154)** These are a must-have for any external authority data.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=160)** States, cities, zip codes, calendar holidays, species, breeds, and color names are all standardized data sets that must be enforced for consistency.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=172)** For this course, I included just the colors and species tables as an example in the reference schema.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=179)** Both consist of a single column, which serves as the primary key.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=184)** Now, some of you may think it's redundant, and I say it is anything but.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=190)** Having a standardized reference set of colors and species that every other entity can reference and enforce, will guarantee we will never have misspelled, non-standard, or non-existent values.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=204)** I created all these tables in the dedicated reference schema, which typically should be in read only so that the application can't mess it up.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=213)** If reference data is added or modified, a DBA must set it to read write, make the change, and then set it back to read only.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=222)** We will cover the individual tables as we go along.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=225)** This project may evolve over time, but the version that is provided in the course materials is guaranteed to produce the same results as you will see in the videos and, as expected, for the challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), mysql (1), make (1)
> **Env Vars:** sql (2), dba (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using the code files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=1)** - [Instructor] Throughout this course I will demonstrate and reinforce the discussion topics using live queries.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=6)** You can just watch or follow along with me, but even better, pause the video occasionally and experiment for yourself by modifying these queries and coming up with your own to make sure you fully understand what's happening under the covers.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=22)** I've also included a few mini challenges where I will ask you explicitly to pause the video to answer a short puzzle.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=30)** Chapters two and five include a challenge video and my detailed suggested solution walkthrough.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=36)** All the code files can be downloaded from the Courses homepage and use SQL Server syntax unless otherwise noted.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=45)** These files will be hosted on GitHub as well and by now you know where you'll find the links.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=51)** So, that's about it for the introduction.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=54)** It's time to dive into the rabbit hole of SQL query logical processing from which there's no going back.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=61)** But before we dive in, let's quickly see where we're heading by following query processing order.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=69)** Every query begins with a FROM clause, which constructs the query's dataset.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=75)** This is the only data that will be available for the rest of the query.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=80)** After the FROM clause produces a single dataset, it is passed on to the WHERE clause as a virtual table and the WHERE clause uses binary and ternary logical predicates to filter out individual rows.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=94)** The filtered set is then passed on to the GROUP BY clause where it is grouped and from there to the HAVING clause where entire groups can be filtered.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=105)** The grouped and filtered set is then passed on to the SELECT clause, which evaluates every expression for each row.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=113)** Then, it is passed on to the ORDER BY clause to apply presentation ordering and finally, the OFFSET FETCH clause, also known as LIMIT OFFSET, determines which and how many rows will be returned.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=128)** So without further ado, let's head onto the first step, constructing the source dataset.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), where (2), offset (2), group (1), having (1)
> **SQL:** where (2), group by (1), having (1), select (1), order by (1)
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** coming up (1)
> **Tools:** github (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Constructing Query Source Data Sets

#### Single data source queries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=1)** - [Instructor] Our journey begins with the first step of every SQL query, establishing the source data set, the only data that will be used by all subsequent processing phases.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=11)** So welcome to the FROM Clause.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=14)** The FROM Clause results in the single data set in the form of a virtual table constructed from one or more sources, and then handed over to the following processing phase.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=25)** Some databases, including SQL Server, PostgreSQL, MySQL and others, also support a SELECT without a FROM clause.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=35)** You can think of a FROM-less SELECT as if it was using a hypothetical FROM clause that consists of a Dummy table containing one row, one column with some arbitrary value.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=48)** Other databases force us to include an explicit FROM clause, even when it's not really used except as syntactic sugar.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=56)** SAP HANA decided to literally call this table Dummy.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=60)** Oracle decided to call it DUAL, and Informix sysdual, but the name doesn't really matter.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=67)** They all serve the same purpose, to provide our query with a valid source data set to process.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=74)** What is important is query processing order.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=78)** First, the FROM clause is evaluated.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=81)** Only then the resulting data set is passed on to the next processing phase.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=86)** For this trivial query, it goes straight to the SELECT clause.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=90)** At this point, the FROM clause is forgotten and no longer used.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=95)** The SELECT clause evaluates each expression for each row of the data set that was handed over to it.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=104)** Our dummy set had only one row so the resulting set will consist of one row, a single column expression containing our string, and no alias.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=115)** The FROM clause accepts any source data set that fulfills the following requirements.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=121)** Source data sets must be uniquely aliased as the query must be able to reference each set unambiguously.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=129)** Each column within each source data set must uniquely aliased for the same reason, and the source data sets must not be ordered, and we will cover the reasons for that later.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=141)** Side note, there is no requirement in SQL for neither the source data nor the results to consist of unique rows.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=148)** This is one of the many aspects of SQL that doesn't agree with a relational model.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=155)** SQL is a composable language.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=157)** It allows the FROM clause to use data sets from any source as long as it complies with these rules.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=164)** We can use a table, a view, a function, or a subquery derived table.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=168)** The processing of a FROM with just one source is straightforward.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=173)** The entire source data set is evaluated.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=176)** The result is then gift wrapped as a virtual table and delivered to the next phase for further processing.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=184)** This fundamental process will be the same whether our source is a single table or a 500 rows long nightmare with 20-level deep nested tables, views, functions, and subqueries.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=198)** SELECT * FROM Staff returns all nine staff members.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=203)** Following execution order, the query begins by evaluating the entire Staff table, passing it on to the SELECT, which will in turn translates the star to all column names and evaluates each one for every row.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=218)** Now, I want you to try and guess the result of the following query.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=222)** SELECT 'SQL IS FUN' FROM Staff.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=228)** Side note, throughout this course, I will ask you to pause and answer puzzles and short questions.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=234)** So whenever you see this icon, it's time to pause and think.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=240)** Let's execute the query, and does it make sense?
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=245)** If it doesn't, let me add back the source columns for a minute and execute again.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=252)** I will say it again: Always follow processing order.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=257)** First the source data set gets evaluated in the FROM clause.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=261)** This means that the Staff table gets wrapped in a gift package and handed over to the SELECT clause.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=269)** The SELECT then evaluates all expressions for each and every row.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=274)** And this is true whether we use a source column, but it's also true for the string literal SQL IS FUN.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=284)** Both are evaluated per row of the Staff table.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=290)** Does it make more sense now?
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=292)** Frequently, our queries require data that spans multiple sources, thus requiring a JOIN.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=299)** Most of you have been using JOINs for a long time.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=301)** It's one of the most fundamental features of SQL.
>
> **[5:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=305)** In the next video, we will see how JOINs are processed under the covers.

> [!info]- Semantic Content
>
> **Env Vars:** select (9), sql (8), fun (2), sap (1), hana (1)
> **SQL:** select (9), join (1)
> **Code Keywords:** let (2), function (1), require (1)
> **CLI Commands:** make (2), mysql (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Dual source query processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=1)** - [Instructor] Every join no matter type, color, gender or race always begins with a Cartesian product.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=8)** In a Cartesian product, each row from one set is paired with each row from the other.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=15)** The result set consists of all columns from both sources.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=20)** If the specified join type is a cross join, processing stops at this point and the Cartesian product is passed on to the next clause.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=29)** For all other join types, processing continues to the next step qualification.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=36)** Inner and outer join are called qualified joins.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=40)** The qualification predicate is specified using the on keyword.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=45)** The qualification process evaluates each row from the Cartesian product using the predicate.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=52)** Only rows for which the predicate evaluates to true will live to see another clause.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=58)** All other rows are eliminated from the set.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=62)** If the requested join type is an inner join, join processing stops at this point and only the qualified rows are passed on to the next clause.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=72)** If the requested join type is an outer join, the qualified rows move on to the next step, reservation.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=80)** Outer joins designate one or both source sets as reserved.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=85)** Reserved sets get to have all of the rows added to the join results even those that did in past qualification in the previous step.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=94)** A left outer join reserves the set on the left side of the join.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=98)** Here it is set a so all its rows that failed to qualify are reintroduced back into the join result.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=106)** Since these rows had no match in set B, there is no value to show for it and in no indicator is used for this inapplicable data.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=115)** A right outer join reserved the set on the right instead of the one on the left.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=120)** Here rows from set B that failed qualification will get reintroduced back into the join result.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=127)** A full outer join simply reserves both sets.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=131)** Most databases support join syntax shortcuts by omitting the inner and outer keywords.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=137)** I prefer to use the full syntax in my code for improved readability but there's really no harm in omitting them.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=145)** Some databases support the using keyword instead of specifying the full qualification predicate when the predicate expressions of both sets have the same exposed alias.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=156)** So, instead of ON A.X = B.X, we can specify using X.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=164)** Here too, I prefer to spell out the full predicate but there is no real harm in using using but that is not the case with the next shortcut.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=176)** A natural join allows us to omit the qualification predicates altogether.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=181)** It assumes the predicate consists of all columns that have the same exposed aliases in both sets and it will construct an equality qualification predicate including each and every one.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=196)** Avoid using natural join like the plague.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=201)** It makes the query less readable and less portable but that's not the issue.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=206)** I have witnessed applications failing miserably with devastating consequences when additional columns were added to the underlying tables and some happened to have the same name.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=218)** The most common cases had to do with tracking attributes such as modified on, modified by and various Boolean flags such as is deleted, is active, et cetera.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=230)** These columns were added to the natural join predicate and you can imagine what that did to the query result.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=238)** So, consider yourself warned.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=242)** We need to write a query that generates all possible combinations of roles for each staff member.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=249)** Select star from staff cross join staff roles will return a Cartesian product with every possible combination of each staff member and role.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=259)** We rarely use explicit Cartesian products, although logically, they are the first processing step for all types of joints.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=269)** Quiz time, what do you think will happen if we replace the cross join with an inner join but use the qualification predicate one equals one.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=280)** Stop the video for a minute and try to see if you can guess the result.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=286)** If you followed joint processing order, you got it right.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=290)** So, let me hammer it in one more time.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=293)** The first step of every join is a Cartesian product.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=298)** Then every row from the Cartesian product is evaluated using the qualification predicate.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=304)** Only rows for which the predicate evaluates to true get to see another clause.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=310)** In here, all rows from the Cartesian product evaluated to true as the predicate is always true.
>
> **[5:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=318)** Therefore, this innocent-looking inner join is in fact a well disguised cross join.
>
> **[5:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=325)** While this is not something we would normally do, it demonstrates the processing order nicely.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=332)** In most cases, we need to match rows based on some common attribute, the qualification.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=338)** We need to write a query for the animal adoption report including the animals breed and implant chip ID.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=346)** Side note, the animals table uses name and species as its primary key to uniquely identify each animal.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=354)** I've already mentioned that I'm an avid advocate of using natural keys wherever possible and avoid the all too ubiquitous and abused surrogate keys such as animal ID.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=366)** Now, name and species may seem like an odd choice.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=369)** The reason I chose them as I tried to find the most intuitive and familiar way to identify animals if I was working at that shelter.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=379)** This means I've decided that this is the business key.
>
> **[6:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=383)** This is how staff communicate when trying to reference a specific animal.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=388)** Back to the adoption report.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=391)** Looking at the schema, we can see that a joint is required between adoptions and animals to retrieve breed and implant chip ID, the non-key animal attributes.
>
> **[6:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=401)** Most of you have written many joins before but this time we're going to follow processing order.
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=408)** And I'll say it once again, every join begins with a Cartesian product.
>
> **[6:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=414)** To visualize it, let's write this cross join first where every adoption gets matched with every animal.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=421)** Now, let's change it to an inner join and provide the qualification predicate.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=427)** Side note, composite natural keys are somewhat of an inconvenience as we must type multiple predicates instead of just one.
>
> **[7:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=435)** I don't find this extra typing to be a really big deal and it makes the query clearer as it is obvious what identifies an animal in our shelter just by looking at the query text.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=446)** Some query editors will auto complete the predicate so we don't even have to type the whole thing.
>
> **[7:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=453)** So, where were we?
>
> **[7:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=454)** Inner join, yes.
>
> **[7:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=456)** Every row of the Cartesian product gets evaluated using the qualification predicate.
>
> **[7:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=461)** Only rows were the predicate evaluates to true will be kept and all others will be discarded.
>
> **[7:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=467)** This means that animal rows will be matched with their respective adoption rows based on the animal's identifying attribute, name and species.
>
> **[7:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=479)** Animals that were not adopted were eliminated from the set because they had no matching adoptions.
>
> **[8:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=485)** If we want to get these animals back, a third step is needed in which we reserve the animals table.
>
> **[8:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=492)** Since animals is on the left side, we must replace the inner join with a left outer join.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=498)** Now, all rows from the reserved table that failed to qualify meaning the animals that were not adopted will be added to the intermediate set of the rows that did qualify with null indicators for all attributes of the non reserved table.
>
> **[8:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=516)** Quiz time again.
>
> **[8:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=518)** Let's execute this query and something seems odd.
>
> **[8:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=524)** How come we have rows with no animal species and name?
>
> **[8:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=529)** Pause the video for a minute and see if you can figure it out.
>
> **[8:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=534)** With the inner join query, we retrieved all columns from the adoption table including the animals identifying attributes.
>
> **[9:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=543)** For an inner join, it didn't matter where we got these attributes from as only matching rows were returned anyway.
>
> **[9:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=550)** These rows had the same value for name and species in both tables.
>
> **[9:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=556)** The animals that were reintroduced by the outer join had no match in adoptions and all their adoption attributes are now including the animals name and species.
>
> **[9:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=569)** So, to fix this issue, all we need to do is retrieve the common attribute from the reserved table.
>
> **[9:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=577)** And now we can see that Angel, April and many others were not adopted.
>
> **[9:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=582)** Well, not adopted yet, that is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **Analogies:** such as (3), imagine (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### Joining multiple source data sets
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=0)** - [Instructor] So far, we've looked at from clauses with one and two source data sets.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=5)** But often we need to join more than two sources.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=8)** The easiest way to visualize multi source processing is to look at two sources at a time and work our way down.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=16)** Think about the result of the join between A and B, as new set, which in turn is joined to C, forming a new intermediate set, which in turn is joined to D and so on.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=30)** When dealing exclusively with inner joins, the order in which the source data sets are joined does not affect the result.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=37)** Some databases will process multiple inner joins in the same order they are spelled out in the query.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=44)** Other databases that have smarter cost based query optimizers such as Oracle and SQL Server, will estimate and execute these joins in the most efficient order that they see fit, regardless of the order in which they are spelled out in the query.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=61)** For outer joins, the processing order is critical as it will affect the result and for those we do have an option to explicitly control join order.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=73)** This is best explained with an example.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=77)** We need to write a SQL query for animal adoptions and include information about their adopters.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=82)** Looking at the schema, we can see that we need to join animals, adoptions, and persons.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=88)** Since all our joins are inner joins, the join execution order doesn't affect the result.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=94)** It doesn't matter if animals is joined to adoptions first and the result then to persons or if adoptions is joined to persons and only then joined back to animals.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=105)** The total number of rows will be 70, which is the total number of adoptions we have in our shelter database.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=112)** But, be very careful as that is not the case with outer joins.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=119)** Let's say we also need to return animals that were never adopted.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=123)** We might be tempted to change the first join to a left outer join and designate her majesty, the animals table as the reserve table and this query should return more rows than before as we do have animals that were never adopted.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=140)** Pause the video for a minute and see if you can guess how many rows are going to be returned.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=145)** Hint, there are 100 rows in the animals table.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=150)** Let's execute this query and surprise, only 70 rows again, which means we still don't see animals that were never adopted.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=161)** Let's break it down following join processing order.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=165)** The animals table was first outer joined to adoption and at that point it did include all 100 animal rows.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=174)** We can verify it by omitting the last join and executing again.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=180)** The problem is that the following join to persons, relies on these attributes for qualification so all the rows with a null for adopter email didn't qualify and were eliminated.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=194)** And I often see developers overcome this by changing all subsequent joins to outer joins.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=202)** And it is not uncommon to see a from clause with numerous outer joins which we added just to avoid this unwanted elimination of rows due to the subsequent joins.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=214)** So, let's try it, execute, and indeed we get 100 rows but while this solution works, I find it to be suboptimal.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=225)** It makes the query harder to understand and it may also have a nasty performance penalty.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=232)** Much better is to keep the joins logically correct and to force the join order explicitly to match our requirements.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=242)** What we need here is for the adopters table to be inner joined to persons first and only then, outer joined to animals.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=251)** And the way to do that is by encapsulating the inner join between adoptions and persons in parentheses.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=259)** If we just blindly place the parentheses we will get an error.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=264)** Pause the video for a minute and see if you can figure out why we get this error.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=272)** Since the table expressions inside the parentheses will be evaluated first, this forces us to move the join predicate from inside the parentheses to the end.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=285)** And interestingly, it is not the parentheses that did the trick, it's actually the moving of the on clause.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=293)** We can safely remove the parentheses and the correct join order will still be maintained.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=301)** This order of the joins and their respective on clause is called chiastic order.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=306)** And even though the parentheses are not required to force the order I highly recommend that you keep them and indent the forced join order for clarity.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=316)** Here is an idea for formatting and indenting a forced join order which I often use.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=323)** Trivia fact, chiastic order is often used in rhetoric by reversing grammatical structure of successive phrases.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=331)** Chiasm is frequently used in the Hebrew bible, the New Testament, the Koran, Book of Mormons and many other scriptures.
>
> **[5:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=339)** Shakespeare and other classical poets were very fond of it as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** sql (2)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Hybrid multi-table join
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=0)** - [Instructor] You need to write a query to report all animals and their vaccinations.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=5)** Animals that have not been vaccinated should be included.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=9)** The report should include the following attributes, the animal's name, species, breed, and primary color, the vaccination time and the vaccine name, the staff member's first name, last name, and role.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=22)** The guidelines are to use the minimal number of tables that are required and to use the correct logical join types and force join order as needed.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=33)** Good luck!

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Solution: Hybrid multi-table join
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=0)** - [Instructor] Let's see which tables are required.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=3)** First, animals and vaccinations are obvious, we also need persons for the address, and staff assignments for the role of the staff member.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=11)** Because the database uses the same identifier for a person throughout, we don't need any data from staff, which just saved us a whole join.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=23)** If we were to use the surrogate key, staff ID, which in turn would point to a person ID, we would have no choice but to join staff as well.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=33)** In my solutions, I always start from the from clause and list tables with inner joins first.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=39)** Provide aliases, specify the qualification predicate, and now I can list all the select expressions and do a quick sanity test by executing this intermediate query.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=50)** I also like to add an order by, so I can have immediate visual reference, even though it's not required by the challenge.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=58)** Let's execute the query, and we're almost there.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=62)** The only thing missing is to return animals that were never vaccinated.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=66)** And to do that, we need to reserve the animals table.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=71)** If I change the inner join to a left outer join, the non-vaccinated animals still don't show up, because the subsequent join to staff assignment is using email, and it will fail, as the vaccinate attribute are all null for the reserved rows.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=88)** Therefore, I need to force the order so that the outer join will be performed last.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=93)** And to do that, all I have to do is add parentheses around the other joins, which in turn forces me to move the qualifying predicate outside the parentheses.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=104)** Let's execute it now, and that's about it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Speakers:** - [instructor] (1)


### 3. 2. Row Filters

#### Filtering source rows
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=1)** - [Instructor] After the row set got evaluated and finalized in the from clause, it is passed on to the where clause.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=7)** The where clause evaluates every row using the logical predicates.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=12)** Only rows for which the predicate evaluates to true will live to see another clause.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=17)** Rows that do not evaluate to true are discarded.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=21)** The fact that the where clause is processed after the from clause is a very common cause for confusion regarding filtering with joint qualification predicate versus the where predicate.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=36)** Look at these two queries, and try to guess whether or not they are equivalent using the content of sets A and B as shown on the slide.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=46)** Pause the video for a minute, and guess.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=52)** Let's do it together following processing order.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=56)** First, a Cartesian product is created, and this is going to be true for both queries.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=62)** The query on the left uses a composite qualification predicate for matching X values, and A.X larger than one.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=71)** This composite predicate is evaluated for each row of the Cartesian product, and only the row with both twos evaluates to true.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=81)** This in turn gets passed on to the select, and returned to the client.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=87)** The right query's predicate only matches the X values between the sets.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=92)** So both rows with the ones and the twos qualify.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=98)** The result set will be passed on to the where clause, which evaluates each row for the second predicate, X larger than one.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=106)** Only at this point, the row with the ones will be eliminated by the where.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=112)** The remaining row with the twos is passed to the select clause, and returned to the client.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=118)** While the result of both queries is the same, their logical processing is different, and this distinction is critical.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=127)** As for outer joins, things get more interesting.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=132)** Here are the same two queries but this time using the left outer join instead of an inner join.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=139)** Like before, the first step is a Cartesian product.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=143)** The left query's composite qualification predicate is evaluated and only the matching rows are kept.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=150)** Due to the outer join, a reservation step is added in which the rows from A that didn't qualify are reintroduced with the null for the non-reserved column.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=162)** These two rows are passed to the select clause and returned to the client.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=168)** The right query's qualification predicate only matches the X values.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=173)** So here both rows with the ones and the twos qualify.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=178)** This means that the reservation step finds no unmatched rows to be reintroduced and both rows are passed on to the where clause.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=189)** The where evaluates each row for the second predicate, X larger than one.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=194)** The row with the ones gets eliminated as it evaluates to false.
>
> **[3:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=200)** The remaining row with both twos is passed through the select clause and returned to the client.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=208)** Many smart, experienced developers have fallen for this trap and I can't blame them, as unlike you, the importance of query processing order was never explained to them.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=220)** Processing of the where clause is simple, but things get more interesting when we need to deal with missing data, which is what the next video is about.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Missing information and ternary logic
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=0)** - [Instructor] In 1970, Dr. Edgar F. Codd published his seminal paper, "A Relational Model of Data for Large Shared Data Banks", in which he introduced his relational model.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=11)** It soon became apparent that in our less-than-ideal reality, missing data is a pain we must deal with.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=18)** And only five years later, Codd introduced NULL as an indicator for missing data.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=24)** In 1979, he further defined the semantics of NULL in his paper paper, "Transactions on Databases".
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=31)** NULL is one of the most controversial aspects of the relational model and of SQL.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=38)** It introduced numerous anomalies and complexities and has been criticized by scholars and data practitioners throughout history.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=47)** Trivia fact, Chris Date, one of the most highly regarded relational data model experts, a close collaborator of Dr. Codd and an author of key influential books on the relational model says, "NULLs undermine "the entire foundations of the relational model."
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=65)** Although Dr. Codd and others referred to NULL as NULL values, I highly recommend that until you reach Dr. Codd's level of expertise, that you should think of NULLs as being an indicator and not as a value.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=81)** This distinction will help you tackle its complexities much easier.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=85)** Zero is a concrete value.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=88)** An empty string is a valid value.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=91)** NULL is not a value, it is an indicator to the absence of one.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=98)** Codd made a clear distinction between two types of missing data.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=102)** A values and I values representing missing and applicable and missing but inapplicable, respectively.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=110)** For example, we may not know exactly when our puppy was born.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=116)** That doesn't mean he doesn't have a birth date.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=119)** Obviously he does, we just don't know it.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=122)** This is an applicable, but missing value.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=127)** Our second puppy is a mongrel.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=130)** For the mongrel, the breed attribute is inapplicable.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=135)** It won't ever change, we will never find out its breed.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=139)** Breed is an irrelevant attribute for this puppy.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=143)** It's not that we don't know it, it just doesn't exist.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=147)** Chamberlin and Boyce, the original developers of SQL, decided not to implement this distinction, and so we ended up with only one type of NULL to represent both.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=157)** With only one type of NULL, SQL implements three valued logic, also known as ternary logic.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=165)** If they were to implement both types of NULLs as Codd suggested, it would have required a four value or quaternary logic.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=175)** In our everyday lives, we deal with both binary and ternary logic.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=179)** If I ask you, are you at work now?
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=182)** Your answer is either yes or no.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=185)** This is the domain of binary logic where a predicate can evaluate to a logical state of either true or false.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=192)** Ternary logic adds a third state, an unknown.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=196)** Let's say you receive two packages, and before you open them, I ask you, is there a book in the small package?
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=205)** Your only honest answer is, I don't know.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=209)** Using a mathematical equality comparison operator, this question can be written as the predicate, content of small package equals book.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=218)** The data regarding the content of the package is not available yet.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=223)** There is something in the box, you hope, you just don't know what it is yet.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=228)** This is missing, but applicable information.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=233)** And comparing a known value, a book, to an unknown value, the content of the package is still unknown.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=242)** Next, I ask you, what's the gender of the large package?
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=247)** You still can't answer this question, but this time for a different reason.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=252)** The gender attribute is inapplicable to packages, at least to those that I am aware of.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=258)** This is the missing and inapplicable type of unknown.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=264)** Next, I ask you, is the content of both packages identical?
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=270)** The predicate is still in a quality comparison, which can be written as content of package one equals content of package two.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=279)** But the answer is still I don't know.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=282)** It doesn't matter if both packages are closed, or just one, as comparing two unknowns is still an unknown.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=291)** All the predicates we used so far were comparison predicates.
>
> **[4:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=296)** And it doesn't matter if the comparison is an equality, inequality, larger than, smaller than, or any other mathematical comparison.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=303)** The same logical principle applies to SQL, and it is enough that one of the operands is unknown for any such comparison to evaluate to an unknown.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=314)** To deal with this unknown, we obviously can't use comparison predicates, and instead we need to use state predicates.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=323)** So if I ask you, is it true that you don't know what's in the small package?
>
> **[5:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=330)** Now, I'm not using a comparison predicate.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=333)** I'm using a binary state predicate, which can only evaluate to either true or false.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=338)** You either know or don't know what's in it.
>
> **[5:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=342)** What you see on the slide is the logical evaluation tables for ternary logic.
>
> **[5:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=347)** I recommend that you print it out as a cheat sheet and hang it in your workspace for easy reference.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=353)** Pay special attention to the less intuitive evaluation of true and unknown versus false and unknown, and true, or unknown versus false or unknown.
>
> **[6:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=365)** And things get more interesting when we need to negate a condition involving a NULL.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=373)** We need to write a query that returns all dogs except bull mastiffs.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=379)** We may be tempted to write it literally as select start from animals where species equal dog and breed not equal bull mastiff.
>
> **[6:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=389)** And if I execute it, we don't get any non-breed dogs back.
>
> **[6:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=395)** And as far as I know, mongrel dogs without a breed are not bull mastiffs.
>
> **[6:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=401)** So, how come they don't show up?
>
> **[6:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=403)** Pause the video for a minute and see if you can figure it out.
>
> **[6:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=409)** The reason is that a NULL for breed represents a non-applicable attribute.
>
> **[6:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=415)** But the developers of SQL shows to treat NULLs for the most part as if they were of the applicable but missing type for which this behavior makes sense.
>
> **[7:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=428)** If we're looking for persons whose birth date is not January 1st, 2000, we probably don't want to include those with a NULL birthdate.
>
> **[7:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=438)** Why?
>
> **[7:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=439)** Because this is an applicable but missing value.
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=443)** It may be equal, it may not, we just don't know.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=446)** Here, it makes sense not to return the rows with NULL for birthdate.
>
> **[7:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=452)** But for breed, we know for sure that a dog with a NULL breed is not a bull mastiff.
>
> **[7:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=459)** Here, it would make sense for the rows with a NULL breed to be returned.
>
> **[7:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=464)** And now you can begin to understand why Dr. Codd wanted to implement two types of NULLs with different semantics.
>
> **[7:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=473)** We will see how SQL solves this anomaly in the next video.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=478)** Unfortunately, in most databases that I've seen, it was obvious that the designers had little or no concern for NULL constraints and missing data logic in general.
>
> **[8:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=488)** In most cases, it had devastating results for data consistency, performance, scalability and the mental wellbeing of those who had to deal with it.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=498)** An overabundance of NULLs is typically a clear indication of fundamental design flaws in the data model.
>
> **[8:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=506)** Okay, but enough with the rants.
>
> **[8:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=509)** We must deal with NULLs with what we have, and SQL is the best we have so let's see how to deal with this NULL mess.

> [!info]- Semantic Content
>
> **Env Vars:** null (16), sql (7)
> **Definitions:** is an  (5), is a  (4), known as (1)
> **Code Keywords:** let (2), implements (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Dealing with ternary logic in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=0)** - Most SQL developers struggle at first with ternary logic.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=5)** To list all non-breed animals, we might be tempted to use a comparison predicate breed equals null.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=12)** By now we know that every comparison operation involving nulls always evaluates to a null, so now we understand why these queries return an empty set, regardless if you use equality, non-equality, or any other mathematical comparison.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=29)** Even a composite filter where a breed is equal to null or not equal to null returns an empty set.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=37)** And intuitively it should return all animals, right?
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=42)** Even more confusing is that a predicate looking for all animals, which are a bull mastiff or all those that are not a bull mastiff doesn't return non-breed animals.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=54)** All this is counter-intuitive for our humble, limited human brains.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=59)** We expect all animals to be returned if they either equal something or not equal the same thing.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=66)** But it doesn't work that way with ternary logic.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=70)** Most of you probably know that in order to filter for non-breed animals, we need to use the state predicate IS NULL, or it's negative form, IS NOT NULL.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=80)** This is a fundamentally different question than does this animal breed equal null.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=87)** The IS NULL predicate can be translated to English as is it true that this animal's breed is unknown or inapplicable?
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=97)** State predicates can evaluate to either true or false but never to a null.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=102)** Back to the bull mastiffs.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=104)** So, how do we go about filtering for animals that are not bull mastiffs without eliminating all the breed ones?
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=113)** Most often I see developers just add another predicate, or breed is null.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=118)** While it does give us the desired result, it is too verbose and maybe confusing to less experienced developers.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=126)** If you're using SQL Server, Oracle, MySQL, and most other databases, we're out of luck.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=133)** We have no choice but to add the additional predicate like this one or some other creative ideas, such as adding an ISNULL conditional function.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=143)** The ANSI SQL standard does offer elegant predicate operators that come to the rescue.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=150)** The first one is called a distinct predicate, and it is spelled is or is not distinct from.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=159)** The idea here is that different values are distinct from themselves and from nulls, but one null is not distinct from another null even though it's not equal.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=171)** Therefore, breed is distinct from bull mastiff will return all animals that are not bull mastiffs and will include those with a null breed.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=182)** Another very elegant feature of the SQL standard is called a truth test.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=188)** A truth test is a logical operator that tests the result of another predicate.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=193)** It is spelled is or is not true, false, or unknown.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=199)** Select star from animals where breed equals bull mastiff is not true will evaluate to true only if the predicate in parenthesis is either false or unknown, and it will evaluate to false when the predicate is true.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=217)** Mind blowing ternary logic.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=220)** Unfortunately, among the mainstream databases, both distinct predicates and truth tests are currently implemented by only post-square SQL.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=230)** Hopefully, others will follow soon.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=233)** These are extremely useful and cool feature which could make our code so much more readable and elegant.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=239)** And by the way, I opened the boxes from the previous slide, and this is what I found inside.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), null (3), isnull (1), ansi (1)
> **Definitions:** is a  (2), is called (2)
> **CLI Commands:** mysql (1), make (1)
> **Code Keywords:** function (1), from. (1)
> **Analogies:** such as (1)
> **Speakers:** - most (1)


### 4. 3. Grouping

#### Grouping
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=1)** - [Instructor] In a properly designed relational database, every table represents a single relation or a thing in the real world, and every row represents an instance of that thing.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=13)** Animals, persons, staff and vaccines, all hold the granular attributes or facts about each one of these things.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=23)** The from clause processed one or more of these sources and passed them to the where clause.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=28)** The where clause evaluated each row using predicates.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=32)** In both clauses, processing was of the individual rows but sometimes it's not these details that we're after.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=41)** Instead we need to answer higher level questions for which grouping comes in handy.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=47)** Let's quickly revisit the basics.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=50)** Here is a group of animals.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=51)** Each animal is represented as a row in a table.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=55)** If I asked you for the name of all cats, you would need to evaluate each animal row using the predicate Species equal Cat.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=66)** Only Felix and Calvin's row evaluate to true so the answer to that question would be both their rows.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=73)** This is what I mean by the from and the where clauses processing individual rows.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=79)** Nothing new thus far.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=81)** But what if I asked, how many animals are in the photo?
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=86)** To answer this question, we can no longer treat each animal's row individually.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=92)** Instead we must treat all animal rows as a single group and a quick count comes up with the correct answer: nine.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=101)** Let's emphasize the fundamental difference between these two types of queries again.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=106)** The first one dealt with individual source rows and the result was made up of these individual source rows as well.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=115)** The second question dealt with a whole set as a single group.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=119)** Therefore, the answer was just a single value in a single row for the entire group.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=127)** Remember this logical distinction, it's going to come in very handy soon.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=132)** Select star from Adoptions returns all 70 adoption rows.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=137)** To count how many animals were adopted, we can replace the star with the grouped aggregate count star function, which this time returns a single answer row.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=149)** Processing order is the same.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=151)** The adoption table was evaluated in the from clause and then passed on to the select.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=156)** Since the second query treats the whole set as a single group, we can no longer refer to expressions from the individual source rows.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=166)** It doesn't make sense to retrieve both the details and the high level aggregates at the same time as there are multiple source rows but only one answer row.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=178)** Adding name to the select list results in an error.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=182)** The database is telling me that my query doesn't make sense.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=186)** We can't ask for the details on one hand and the higher level aggregate at the same time.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=193)** I'll dare say that anyone who ever wrote a SQL group by has encountered these types of errors, and many accept it at face value without understanding the fundamental reason for it.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=205)** And we are here to get to the bottom of it.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=211)** I'll say it again.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=212)** It is critical to understand and remember that whenever we leave the individual source rows behind and group them, we lose access to the original row details.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=222)** And this is true whether we treat the whole table as a single group, like in the previous query, or if we group rows by some common denominator using the group by clause.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=235)** So instead of counting how many animals we have in total, let's say we need to count how many animals we have of each species.
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=243)** To do that, we need to tell the database that we want to treat each species as a separate group by specifying group by species.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=253)** You've probably used group by many times before but this time we are going to follow query processing order.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=260)** First, the Animals table gets evaluated in the from clause.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=264)** It is then passed on to the next clause, the group by.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=269)** The group by looks at all rows and marks them for grouping based on the grouping expression, in this case species.
>
> **[4:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=278)** At this point, something interesting happens.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=282)** This set is transformed from its normal table-like shape into this hybrid grouped structure, where each group of unique specie values corresponds to a single output row.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=295)** The only value that is guaranteed to be the same for all rows within a group is the value of the group by expressions.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=304)** Instead of nine source rows we are now dealing with three row groups, and this funny-looking set is now passed on to the select clause.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=316)** All select expressions are evaluated like before but instead of being evaluated per row, now they are evaluated per group.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=327)** We got three rows with the correct counts but without the group identifier they won't make much sense.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=333)** So let's add it back to the select list, and now it makes more sense.
>
> **[5:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=339)** We can see the species, the group identifier alongside the animal count, the aggregate function of the group.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=348)** It only made sense because species is the group by expression.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=353)** It is the group identifier which is guaranteed to have the same value for all rows within the group.
>
> **[6:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=360)** And what do you think will happen if we add name to the select list?
>
> **[6:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=364)** Pause the video for a minute and see if you can figure it out.
>
> **[6:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=371)** You got it!
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=373)** The query doesn't make sense and will return an error.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=378)** Unlike species, which had only one value for each group, name can have many different values.
>
> **[6:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=385)** Since the output consists of just one row per group, which cat name should be returned, Felix or Calvin?
>
> **[6:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=393)** The only way to guarantee that non-grouping expressions will return a single value for each group is to encapsulate them in an aggregate function.
>
> **[6:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=402)** And in fact, this is the definition of an aggregate function.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=407)** It takes in a set of elements and aggregates them to return just one.
>
> **[6:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=414)** Max name is a valid expression and by default, the max function over a set of strings will pick the one with the highest dictionary sort order by most databases.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=425)** Here, these are Felix, Winston and Milly.
>
> **[7:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=430)** This is another aspect of SQL where I often see smart and experienced developers failing to realize why they get these types of errors.
>
> **[7:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=440)** Memorize this rule and save yourself many hours of frustration.
>
> **[7:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=445)** After the group by has had its way with the set, the only expressions that can be referenced directly are the grouping expressions which are guaranteed to have only one value for a group, or other expressions must be encapsulated in an aggregate function.
>
> **[7:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=463)** Let's see a code example.
>
> **[7:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=466)** The Vaccinations table stores all animal vaccinations.
>
> **[7:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=470)** To see how many vaccinations our shelter has performed for each species, we can't treat the entire table as a single set and instead we need to instruct the database to return a separate row for each species, and this is what the group by clause is for.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=486)** So all the rows that share the same value for species will be treated as a group.
>
> **[8:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=492)** To calculate how many vaccinations each animal has received, we need to treat the set of rows for each animal as a group, not just species.
>
> **[8:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=502)** The identifier of an animal are name and species so grouping by this set of attributes will group all rows for each animal and the count will return the number of vaccinations per animal.
>
> **[8:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=517)** And I will say it once again.
>
> **[8:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=519)** After the group by we can no longer reference any expression, which is not part of the group by expressions, without an aggregate function.
>
> **[8:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=529)** Adding Vaccine to the select list will naturally result in an error.
>
> **[8:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=534)** It doesn't make sense as it may have many values for each animal.
>
> **[8:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=539)** And after the group by, the set consists of just one row per group.
>
> **[9:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=545)** We're not going to cover all the different aggregate functions and their subtle flavors in this course.
>
> **[9:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=550)** There are far too many of those and this course is focused on the processing foundations rather than the syntax and details.
>
> **[9:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=557)** So check the documentation of your database of choice to see what functions are supported and how their syntax works.
>
> **[9:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=565)** I really hope you didn't think we're done with nulls yet because nothing could be further from the truth.
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=571)** Nulls have their special way of inspiring complexity for every aspect of SQL and grouping is no exception.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (5), default, (1), for. (1)
> **CLI Commands:** make (5), cat (2)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Dealing with NULLs and elimination duplicates
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=0)** - [Instructor] Grouping of nullable expressions treats all nulls as a single group.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=6)** And if you find this confusing you're in very good company.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=10)** Just in the previous chapter I told you that one null is never equal to another null.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=16)** So how come they are treated in a single group?
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=19)** Well, it wouldn't be very useful to create a group for each row with a null.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=24)** Therefore grouping is based on values that are distinct from each other, not ones that are mathematically equal.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=32)** Remember that even though nulls are not equal a null is not distinct from another.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=40)** With a few exceptions aggregate functions ignore nulls altogether.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=45)** And this makes sense as the aggregate can only rely on known values when reporting max, min, sum, and even count of an explicit expression.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=55)** Count star is a special aggregate function that counts the number of rows per group.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=59)** It doesn't reference or cares about any specific expression value.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=64)** Therefore nulls are irrelevant to it.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=67)** There are other expressions such as JSON array aggregate functions which need to maintain the null representation and each database has its own.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=76)** So again, check the documentation for your database of choice.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=82)** Let's see how many animals we have for each species and breed.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=86)** Imagine how useful this result would be.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=89)** Instead of having one group for all known breed cats we would get a row for each one with a count of one.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=97)** Now imagine a table with 68 million rows with a null.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=101)** To see how many people were born in the same year we need to group by their birth year.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=107)** Now constant expressions are exempt from aggregate functions as being constant they have the same value for all rows.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=116)** To show their age instead of their year born we can use the current timestamp function to calculate their age.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=124)** People who refused to disclose their age will be grouped together as expected.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=130)** In chapter two I mentioned that SQL allows for duplicate rows in a set which makes it a multi-set or a bag.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=138)** Returning duplicate rows isn't very useful as we can't tell them apart.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=143)** And group by is an obvious way to eliminate duplicates by grouping source rows on the unique set of attributes that we are interested in regardless of whether we need to use aggregate functions or not.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=157)** Another way most of you are familiar with is to add a distinct set quantifier to the select clause.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=164)** And this similarity between distinct and group by is not accidental.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=170)** And it has some implications which we are going to encounter later when we deal with row ordering.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=176)** But for now let's see another short demo.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=180)** We need to write a query that returns all animals that have been vaccinated.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=185)** There are a few options to do that and we might be tempted to try something like select species and name from vaccinations only to quickly realize that we get multiple duplicate rows for the same animal, one per vaccination.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=201)** Adding group by species and name will group all vaccinations of an animal into a single output row effectively returning every animal once, even if we don't want to use any aggregate functions.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=215)** The distinct set quantifier achieves a similar result.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=220)** The difference is that group by provides the benefit of using aggregate functions which is not possible with distinct.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=229)** Pause the video for a minute and try to figure out why we cannot use aggregate functions with distinct.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=239)** And yet again the reason is query processing order.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=245)** The distinct takes place after all select expressions have been evaluated.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=251)** And aggragations don't make sense if the source rows are not grouped beforehand.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=257)** So let's try to execute it and see.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=260)** Hmm, now this is interesting.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=263)** We get error 8120 again even though we don't have a group by clause.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=268)** So what's going on?
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=270)** Pause the video again and try to figure it out.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=276)** If you realized that due to the count star the database treats the entire set as a single group you are correct.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=284)** If the whole table is a single group which is the only way that the count star makes sense in this context, then species and name without an aggregate function are invalid expressions.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=298)** Let's go back to the group by query and remove name from the select list but not from the group by clause.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=306)** Now another interesting phenomenon occurs.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=309)** Let me just add an order by so it's easier to visualize what we're dealing with here and once again pause the video for a minute and try to see what's going on.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=324)** The group by still returns one row per unique animal but the select list without the name doesn't show this attribute which causes the set to have duplicate rows.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=337)** And what do you think will happen if we now go crazy and add distinct to this grouped query?
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=344)** Pause the video for a minute and see if you can figure it out.
>
> **[5:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=351)** So adding distinct to the mix got rid of some of these duplicates but only for animals of the same species that also happen to have the same number of vaccination.
>
> **[6:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=364)** The distinct is applied to all select list expressions including the count star.
>
> **[6:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=370)** And while this is not something we would normally do it demonstrates the implication of execution order quite nicely.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** imagine (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** json (1), sql (1)
> **Cross-References:** previous chapter (1), go back to (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Group filters
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=0)** - [Instructor] After the GROUP BY had its way, the group set is passed on to the HAVING clause.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=5)** HAVING is very similar to the WHERE clause in the sense that both consist of logical predicates, and both discard elements for which the predicate does not evaluate to true.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=16)** The difference between WHERE and HAVING is their location in query processing order.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=22)** When they take place, and consequently the type of elements they can filter.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=29)** The WHERE filter was applied right after the FROM clause, so is only had access to the source rows.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=35)** The HAVING clause is processed after the GROUP BY, so it can no longer refer to individual rows, only to row groups.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=45)** So HAVING can use aggregate functions for its predicate, something we couldn't do in the WHERE clause before the groups were formed.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=54)** A row group, for which the HAVING predicate does not evaluate to true, will be discarded.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=61)** A less known fact is that we can use non-aggregate expressions as predicates for HAVING, as long as we comply with the grouping rules we discussed earlier.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=73)** To find out how many potential hoarders our shelter serves, we can use the following query.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=80)** Email is a person's identifier, so a GROUP BY email and account gives us the answer.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=87)** Most people adopt just one animal.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=90)** Some have adopted more than one, such as Virginia and Wayne, who adopted four animals each.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=97)** To see all persons who adopted more than one animal, we need to filter for groups for which the row count is larger than one.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=104)** Trying to do so in the WHERE clause leads to the expected error, "An aggregate may not appear "in the where clause," and now you know exactly why that is.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=115)** Moving it to the HAVING clause works as expected, and returns our list of potential hoarders.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=121)** The HAVING clause is not limited to using just aggregate functions.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=126)** We can use any valid predicate with or without aggregates, but the emphasis is on valid.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=133)** Nothing prevents us from using a non-aggregate predicate, such as filtering out all adopters who have Gmail accounts.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=141)** Well, nothing other than common sense.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=144)** Pause the video for a minute, and see why this might not be a great idea, even if the query is valid.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=155)** Query processing order to the rescue once again.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=159)** It doesn't make sense to let the GROUP BY process all adopters, including those with a Gmail account, only to remove them immediately after.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=170)** Although the database's optimizer may identify this and perform the filter before the GROUP BY, why rely on it when we can explicitly filter out in the WHERE, and guarantee that the GROUP BY will have less work.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=185)** Remember that the HAVING clause takes place after the GROUP BY.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=189)** Therefore, the grouping rules we discussed earlier for the select apply here as well.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=196)** Trying to reference adoption date will result in the familiar error, "Column is invalid "in the HAVING clause because it is not contained "in an aggregate function," et cetera, et cetera.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=207)** Exactly like we saw previously with the select list and for the exact same reasons.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=216)** Processing order is king.

> [!info]- Semantic Content
>
> **SQL:** having (11), group by (7), where (6)
> **Env Vars:** having (11), group (7), where (6)
> **Analogies:** such as (2), similar to (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1), function (1)
> **Cross-References:** we discussed (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Filtering and grouped query
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=1)** - [Narrator] You need to write a query to report animals and the number of vaccinations each has received.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=6)** You need to include animals that were never vaccinated but exclude all rabbits, all rabies vaccinations, and all animals that were last vaccinated on or later than October 1st, 2019.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=23)** The report should return the following attributes.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=26)** The animal's name, species, primary color and breed.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=29)** The number of vaccinations that the animal has received.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=33)** And obviously with zero for animals that were never vaccinated.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=38)** Your guidelines are to use the minimal number of tables that are required, use the correct logical join types and force order if needed, and use the correct logical group by expressions.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=50)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### Solution: Grouped query with Distinct
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=1)** - [Instructor] Like before, I always start with a from clause and first join all the tables I think I'll need with an inner join as a starting point, alias them, add the qualification predicate and execute a quick select star, just to make sure I didn't miss anything obvious and that the query executes.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=21)** Since I need to include animals that were never vaccinated, I'll change the join to a left outer and now I'll also add an order by for good measures and execute it again.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=33)** I know we have animals that were not vaccinated so it's a good idea to make sure I can see some rows with no for vaccination attributes and it looks good so far.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=45)** Now I can attend to the select expressions and start with the ones I already have available.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=51)** From the animals table, I can get name, species, primary color and breed.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=56)** And from the vaccination table, I can get vaccine.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=60)** Now we can move on to the grouping.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=63)** I know we need to return one row per animal so our group by expressions are the animals' identifying attributes, species and name.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=73)** Now I must go back and revisit the select to make sure these are the only attributes that are referenced directly and try to figure out what to do with the others.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=86)** Primary color and breed are functionally dependent on name and species.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=91)** This means that every animal is guaranteed to always have the same color and the same breed values for all rows that were generated from the join with vaccinations.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=104)** This is common sense but we still must follow grouping rules.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=109)** So now I have two options.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=111)** I can either add these attributes to the group by expression or use a dummy aggregate function such as min or max to make the query syntactically valid.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=122)** It doesn't matter which function I'll use since I know that both will return the same value, the only breed and color of that animal.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=133)** The challenge guidelines stated that I should use the correct logical grouping expressions, so I'll encapsulate both color and breed with the max function.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=142)** Remember to add an alias as the function eliminated it.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=147)** I also like to add a comment when I put dummy aggregates for the next person who will read the query.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=153)** As for vaccine, I need to count the number of vaccinations.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=157)** Here, I must be very careful which type of count function to use.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=162)** My options are either count star or count vaccine.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=166)** When I'm not sure about which function to use, I like to add both and see if there is a difference and what that difference is.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=174)** Often it will immediately clarify the issue and everything becomes obvious.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=180)** So let's try to add both an execute and I see that for rows where the count vaccine was larger than zero, the count star returned the exact same result.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=192)** However, for animals that were never vaccinated, the count star returned a one and the count vaccine returned the correct result, zero.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=201)** The reason is that we used the outer join to reserve animals that were never vaccinated and the count star counts the number of rows within each animal group regardless if their vaccine is a null resulting from the outer join or an actual vaccination event.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=218)** I can safely remove the wrong count star and move on.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=222)** We only have a few exclusions left to handle.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=226)** All rabbits, all rabies vaccinations, and all animals who were last vaccinated in October 2019.
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=234)** To exclude all rabbits, I will add a where clause with a predicate species different than rabbit.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=240)** There are no null concerns as species is part of the animal's identifier so it cannot be null.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=247)** To exclude rabies vaccinations, I need to be more careful.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=252)** Let's see what happens if I just add another predicate to the where.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=256)** And vaccine not equal rabies.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=259)** Instead of the expected, 87 animal rows except rabbits, I now get only 40 and none of them with zero vaccinations.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=269)** The reason is that all animals that were never vaccinated had a null for vaccine and the new predicate evaluated to unknown for all of them so they were eliminated from the result.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=282)** This is not what I need, so let's handle the null.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=286)** If I was using PostgreSQL, I would use is distinct from, but since I'm using SQL Server, I have no choice but to add another predicate to be able to keep the non-vaccinated animals.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=299)** Lastly, I need to exclude animals that were last vaccinated on or after October 1st, 2019.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=308)** I should be careful here too.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=310)** If I try to add a predicate to the where clause and vaccination time is smaller than October 1st, 2019, it will eliminate only individual vaccinations that happened after that date but not the animal itself if it had any vaccinations done before that.
>
> **[5:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=330)** The challenge requirements are to eliminate the animal altogether and for that, I must using the having clause, which takes place after the grouping.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=340)** Since the challenge requirements are to exclude animals that were last vaccinated on or after October 1st, 2019, I'll add the predicate, having max vaccination times smaller than 2019, October 1st.
>
> **[5:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=356)** Let's execute it but something is wrong again.
>
> **[6:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=360)** Once again, not a single animal with zero vaccination.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=366)** Nulls raise their ugly heads again.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=369)** Same as with the rabies predicate, the max vaccination time will be null for animals that were never vaccinated.
>
> **[6:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=377)** So I must handle it explicitly here too.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=381)** Adding or max vaccination time is null will take care of it.
>
> **[6:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=387)** And with that, the solution is complete.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (4), from, (1), raise (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** sql (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Ordering and Paging

#### Presentation ordering in multitier architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=0)** - [Instructor] The final processing phases of the query deal with presentation ordering and the ability to limit the size of the result set.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=8)** Before we dive into the specifics of order processing, I would like to spend a few minutes on why I believe that in most cases it doesn't make sense to perform ordering in the database at all.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=21)** In a multi-tier application the responsibilities of the entire application stack are physically and logically separated, with each tier having well defined responsibilities and boundaries.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=33)** Communication between tiers are performed over well defined APIs.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=38)** The data tier consists of the persistence mechanisms and the data access layer.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=44)** The application tier processes data to and from the presentation tier, perform logic transformations, and enforces business roles.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=53)** The presentation tier is what the users see and interact with.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=58)** This separation of duties is critical for avoiding evil dependencies which would prohibit replacing any single tier when a better suited technology becomes available.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=69)** In an ideal world, we could just pop in a completely new tier without changing a single line of code in any of the other tiers.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=79)** Yeah I know, wishful thinking.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=82)** The ordering of the data for presentation purposes is the sole responsibility of the presentation tier.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=90)** Would you consider formatting fonts, text boxes, colors, frames and pull down menu styles in the database?
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=98)** If this makes you shiver, as it should, then why should presentation ordering be handled by the database?
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=106)** The answer is that it shouldn't.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=109)** So, you might be wondering why this is such a ubiquitous practice?
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=114)** And, this is my own personal opinion and experience, but they have taught me that in many cases this is done only due to short term convenience.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=127)** Developers need to write the SQL queries anyway.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=130)** So, why bother with additional code for sorting in the presentation tier when SQL provides such an easy and convenient way of ordering.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=140)** Unfortunately long term consideration and holistic thinking are seldom the main driver for developers working on tight schedules and budgets.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=150)** Moreover, with a median tenure for workers in IT being somewhere around three years, the price for this temporary convenience is often paid by their successors.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=163)** And, this is true not only for presentation ordering.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=168)** SQL happens to be such convenient language that I often see developers enforce business rules in the database as well.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=177)** And this is a much worse practice with dire consequences but covering it would require a whole course.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=184)** So, I'll digress.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=186)** With that out of the way, and since SQL does provide sorting functionality and because it's so widely used, let's see how it's processed and when it may make sense to sort in the database.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **CLI Commands:** make (2)
> **Code Keywords:** require (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Ordering result sets
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=0)** - [Instructor] I'm sure that by now you've had enough of hearing me say this, but I'm going to say it again anyway.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=6)** Sets have no order.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=9)** In the relational model, neither the attributes nor the tuples have any order.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=14)** Their SQL counterparts, rows and columns, were not so lucky.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=20)** SQL supports ordering of both rows and of referencing expressions by their ordinal position.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=28)** First, let's get expression order out of the way.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=32)** Most databases support referencing select list expressions using their ordinal position as they are listed from left to right.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=41)** Theoretically the select clause is evaluated after the having clause, and no previous clauses should be aware of these positions.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=50)** And SQL server does follow this logical order, and allows referencing expressions by position only after they are evaluated, meaning it is only allowed in the order by clause, the only clause that follows the select.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=66)** Other databases include the MySQL and PostgreSQL allow us to reference expressions by position even in clauses that logically precede the select such as the group by clause.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=79)** But I really hope that none of you think that order by two comma five comma one has any advantage over specifying the attribute names, species, breed, and name.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=93)** The only thing we might save are a few keystrokes, and if we are using a reasonable IDE with auto-complete, then you're saving very little.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=102)** Specifying the explicit aliases is much clearer and readable and we can immediately tell what the sorting expressions are without starting to count and follow the relative positions in the list.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=116)** I hope you agree with me that it makes no sense so I'm going to leave it at that and trust that you will always specify the full alias.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=125)** Let's move on to row order.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=128)** Once an order has been applied to a set, it ceases to be a set and its new status deserves public shaming with the name cursor as we move into the realm of row by row operations also known as the dark side of SQL.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=146)** Once all select list expressions have been evaluated and the result set is formed, it is passed on to the order by clause where it is sorted according to the sorting expressions.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=157)** Most databases allow for sorting by expressions that are not part of the select list and SQL server is among them.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=167)** Here is a query that lists all adoptions sorted by an adoption date in descending order.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=173)** Removing adoption date from the select list doesn't prevent us from using it in the order by even though in most cases it doesn't make sense.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=185)** Remember that ordering is meant to improve readability by the application users.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=190)** And if the rows are ordered by an invisible expression, the order appears to be random.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=196)** Even if you do decide to do so, be aware that throwing in a distinct to the mix, has some interesting logical implications.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=207)** Look at the following query and guess what will happen when we execute it.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=213)** Pause the video for a minute and guess the result.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=218)** This query is not valid and attempting to execute it results in an error.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=225)** Order by items must appear in the select list if select distinct is specified.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=232)** Can you see why that is?
>
> **[3:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=234)** If not, review video two of the grouping chapter once again.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=239)** The one we discussed, group by verses distinct for eliminating duplicates.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=245)** Adding distinct effectively groups by all select expressions.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=252)** And duplicate rows will be grouped into one.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=255)** The grouping is done only for the select list expression, so any other expression may have multiple values for each group.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=265)** This is exactly the same logical reason that we couldn't reference any expression which was not part of the group by without an aggregate function.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=275)** In trying to order rows, which in fact are row groups because of the distinct, doesn't make any sense.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=283)** Each group of rows may have more than one adoption date for each animal if the animal was adopted, returned, and adopted again.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=292)** As long as our sorting expressions are unique, there is no ambiguity regarding the ordinal position of each row.
>
> **[4:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=299)** If these sorting expressions are not unique, we have to deal with sorting of tied row.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=306)** When two or more rows share the same sorting value, the database may return those in any order that it sees fit, and it would still count as a valid correct result.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=319)** To save yourself grief, always treat presentation order of tied rows as if it was completely random and indeterministic.
>
> **[5:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=328)** We may get a different result when we execute the same query again, even on the same exact underlying data.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=337)** Now usually it's not a big deal, just something to be aware of.
>
> **[5:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=341)** If we absolutely need to make sure that the query results are deterministic, we must add tiebreaker expressions to the order by clause.
>
> **[5:51](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=351)** A tiebreaker is an additional sorting expression which determines the sorting order of the rows for rows which all the other expressions are type.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=363)** Select star from animals, order by species, is guaranteed to return the cats first, followed by dogs and the rabbits last.
>
> **[6:12](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=372)** There is no guarantee which cat will be sorted first and this may change from execution to the next.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=380)** Adding name, which together with species is the identifier of an animal guarantees that the query will be deterministic and there can be no ambiguity to what the correct result is.
>
> **[6:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=394)** Same is true if we order just by implant chip ID, which is also a unique attribute, but this might make less sense for our users.
>
> **[6:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=404)** But what about queries without an order by?
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=407)** In what order will they return the results?
>
> **[6:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=410)** If you think there is one, you should think again.
>
> **[6:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=416)** There are many myths regarding ordering of queries without an order by by different databases that have been around since forever.
>
> **[7:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=423)** And I still see developers that believe that even without an order by clause their database of choice will return the rows in some sort of index order or physical storage order or whatever other creative idea.
>
> **[7:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=440)** And this is false.
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=443)** I've seen applications fail miserably because of such assumptions.
>
> **[7:28](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=448)** If we need rows sorted, we must use order by.
>
> **[7:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=454)** Now, no chapter in this course would be complete without them, and yet again nulls raise their heads for sorting as well.
>
> **[7:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=464)** Null, not being a value, doesn't make sense for sorting.
>
> **[7:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=468)** It can't be compared to a value, so we can't tell if it is higher or lower than any other value.
>
> **[7:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=476)** Unfortunately the ANSI SQL standard doesn't specify any rules regarding ordering of nulls.
>
> **[8:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=482)** So different databases chose to treat them differently.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=486)** SQL server and MySQL treat nulls as if they had the lowest sorting value, which means that nulls will appear first when sorting with ascending order and last when sorting with descending.
>
> **[8:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=501)** PostgreSQL and Oracle treat them the other way around.
>
> **[8:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=505)** However, the latter do support explicit null ordering using the nulls first and nulls last keywords.
>
> **[8:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=513)** First and last will be respected always regardless if we use descending or ascending sort order.
>
> **[8:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=521)** Check the documentation if you're interested in that sort of thing.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ide (1), ansi (1)
> **CLI Commands:** make (5), mysql (2), cat (1)
> **Code Keywords:** let (2), this, (1), public (1), function (1), type. (1)
> **Definitions:** known as (1), is a  (1), is an  (1), means that (1)
> **Warnings:** be aware (3)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)

#### Paging result sets
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=0)** - [Instructor] Paging, or pagination is the process of separating large row sets into smaller, disgestable chunks known as pages.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=9)** Now, theoretically, this task is also the sole responsibility of the presentation tier and not that of the database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=19)** But as Albert Einstein once said, "In theory, theory and practice are the same.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=26)** "In practice, they are not."
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=29)** Overloading the calling application or the middle tier with huge and potentially unused datasets may not always be the best course of action.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=40)** So for paging purposes, I will take off my purist hat for a minute and consent that it does make sense to perform this task much closer to the data, and SQL is as close as it gets.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=55)** Paging doesn't make sense without an order by, and in most databases, they are inseparable.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=63)** SQL Server and Sybase support a proprietary non-ANSI compliant operator called Top, which is not strongly tied to an order by.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=73)** So we can issue a query, such as select top three star from animals, even without an order by.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=81)** But except for sampling data for a quick reference, this is not very useful, as there is no guarantee which three rows will be returned.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=91)** Adding a non-unique order by expression, such as primary color, doesn't make things much better.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=98)** We will get three black animals, as B has the lowest dictionary sorting order of all colors, but there is no guarantee which ones.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=107)** SQL server is the only mainstream database that supports the verbose ANSI SQL standard syntax for paging.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=116)** Offset X rows, fetch next Y rows only.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=121)** Most other databases support a similar, though non-ANSI compliant, syntax of limit X, offset Y.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=129)** Both achieve the same result of limiting the size of the row set and allow for an offset value so we can retrieve the next or previous page.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=138)** There's nothing interesting or complex about paging in SQL, so I won't waste our valuable time.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=145)** What is important is that determinism may be critical for paging, as failing to guarantee it may cause rows to be completely missed or appear on more than one page if it so happens that a database decides to change the order of tied rows between retrieval of one page and the next.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=168)** A limitation of current paging in SQL is the fact that presentation ordering and the ordering which is used to determine paging are the same.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=177)** For example, we cannot page rows based on admission date, but order them from presentation by species and breed within each page.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=187)** It would've been nice if we could separate the two, something along the lines of fetch next three rows only using admission date descending, as an independent sorting clause.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=203)** And with that, we have completed our adventure of the most common query processing aspects of SQL.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=210)** In the next video, we will review the course and wrap up.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=214)** I suggest that you do not skip the next video, even if your brain is overloaded now.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=220)** I promise you, it's going to be very short.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ansi (3)
> **CLI Commands:** make (3)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 6. Conclusion

#### Course review and takeaway
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=1)** - [Instructor] We started our query processing adventure less than two hours ago, with me making some wild claims and promises about this course.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=10)** I hope you found our time together worthwhile.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=13)** We started at the same place the database engine begins processing of every query, the FROM clause.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=20)** We saw how to use single and multiple source datasets and how the different types of joins are processed.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=25)** We learned how SQL handles missing data and the intricacies of ternary logic.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=31)** We saw why the processing order of join qualification predicates versus the WHERE row filter is so critical.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=39)** That was a fun chapter.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=41)** Well, at least for me it was.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=44)** We followed the datasets path to the GROUP BY clause, where it was transformed beyond recognition.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=50)** We realized why it introduces limitation as to what can and can't be referenced from that point on, and to the role of aggregate functions.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=59)** You might have noticed that there was no dedicated chapter for the SELECT expressions, but we covered most of its processing aspects as we reviewed the examples for the other clauses.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=70)** From there, we stepped outside the relational model boundaries and into the dark side of SQL, where ordering and paging reign.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=79)** As I said at least once, this course was mandatory as it laid down the foundation you must have in order to further advance your SQL skills.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=89)** There are many more aspects of query processing.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=92)** Sub-query processing, lateral derived tables, cursors, ordered set functions, window functions, common table expressions, recursive common table expressions, the all-at-once principal, and even futuristic features such as row pattern recognition, polymorphic table functions, and much, much more.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=114)** LinkedIn is an amazing learning platform, and there are so many additional courses you can take here.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=121)** I recommend that you choose carefully, and look for the ones that focus on the foundational knowledge, theory, and understanding of the subject matter, rather than the ones that promise instant results.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=134)** Now, don't get me wrong, there's nothing bad with learning how to get your hands dirty quickly as a starting point.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=142)** But I see way too many SQL developers that simply stay stuck at that level for the rest of their SQL careers.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=150)** Don't be tempted by the quick solutions, not for SQL and not for life in general.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=156)** There's way too much of that going on.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=159)** If you're serious about your SQL career, I recommend that you bite the bullet and spend the time that is required to master the forefather of SQL, the relational data model.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=170)** It's not an easy subject, and that's an understatement, but on the other hand, I can't overstate the importance of understanding the foundations on which SQL is built.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=182)** Do that, and you will stand out from the crowd of script kiddies and stack overflow copy paste experts.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=190)** You see, even in this Adobe stock image, every single table has a table name underscore ID for its key.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=198)** And it's not just this one, it's every single database schema image that I could find.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=206)** You will know better than that once you really understand what a key represents in the relational model, and this is just one small example.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=214)** I promise you, the relational model will blow your mind once you get to know it intimately.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=221)** Dr. Codd was a true genius, make sure you read his book and his articles.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=228)** I can also recommend the works of Chris Day, to Joe Celco, David McGovern, Fabian Pascal, and Hugh Darwin, just to name a few.
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=236)** I will provide some links in the code files for this chapter.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), where (1), group (1), select (1)
> **SQL:** where (1), group by (1), select (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we covered (1)
> **Documentation:** stack overflow (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Feedback and additional resources
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=0)** - [Instructor] What is important is how do you feel about this course?
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=5)** Did it meet your expectations?
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=7)** Was there any part where you wished for some more?
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=10)** Any topics that you found boring or trivial?
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=13)** Do you have anything to add?
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=15)** Or maybe you even disagree with something I said?
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=18)** All feedback is fair game and I would love to hear from you.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=23)** It's the only way I can improve and get better for future students.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=27)** So, I invite you to rank this course honestly, and even better, I will highly appreciate it if you take a few minutes and provide more detailed feedback than just a score.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=39)** You can use the Q&A tab on the courses page to ask questions, provide feedback, or you can look me up here on LinkedIn and connect.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=47)** But when you do, please add a personal message to your connection request.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=52)** The human brain works in mysterious ways.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=55)** It's a complex neural network and learning triggers new neural pathways and memories.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=60)** But these pathways are very volatile, and without practice, they will soon fade away.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=67)** Studies show that in one hour, you will forget about 50% of what you now remember, 70% will be lost tomorrow, and 90% within a week.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=78)** To make sure your efforts are not in vain, you must do four things, practice, practice, practice, and keep learning more SQL.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=87)** And on that positive note, it is time to say farewell.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=92)** Thank you again for your patience and making it all the way to this point.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=95)** I couldn't have done it without you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


## Instructor

- [[Ami Levin]]

## Resources

- Exercise files available

## Skills Covered

- Database Queries
- SQL

## Path Context

### In [[Master SQL Development]]
← [[Top Five Things To Know In Advanced Sql]] | **2 of 8** | [[Advanced SQL- Logical Query Processing, Part 2]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[SQL Practice- Intermediate Queries]] — SQL, Database Queries
- [[Level Up- Advanced SQL]] — SQL, Database Queries
- [[SQL Queries Made Easy]] — SQL, Database Queries
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)