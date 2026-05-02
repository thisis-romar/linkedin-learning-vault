---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: data-analysis-investigate-with-sql
url: "https://www.linkedin.com/learning/data-analysis-investigate-with-sql"
duration_minutes: 60
duration: 1h
level: Beginner
updated: 6/25/2025
learners: 300467
skills:
  - Data Analysis
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEW7lWItY5MAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682442844043?e=2147483647&amp;v=beta&amp;t=tN9bxL5mCKMSFV-uyBK2V-6bidoy53ohxPN0kiPVp70"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL Hands-On Practice]]'
  - '[[Advance Your Skills in SQL]]'
prev_courses:
  - '[[Hands-On SQL Challenges- Test Your Knowledge]]'
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
next_courses:
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
  - '[[Using SQL with Python]]'
path_nav: '[{"path":"SQL Hands-On Practice","position":7,"total":9,"prev":"Hands-On SQL Challenges- Test Your Knowledge","next":"SQL Hands-On Practice- Solve Business Problems"},{"path":"Advance Your Skills in SQL","position":3,"total":5,"prev":"SQL Hands-On Practice- Solve Business Problems","next":"Using SQL with Python"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Analysis-%20Investigate%20with%20SQL.md)

![Data Analysis: Investigate with SQL](https://media.licdn.com/dms/image/v2/D560DAQEW7lWItY5MAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682442844043?e=2147483647&amp;v=beta&amp;t=tN9bxL5mCKMSFV-uyBK2V-6bidoy53ohxPN0kiPVp70)

# Data Analysis: Investigate with SQL

> Are you looking to enhance your skills in data analysis and become a valuable asset in today's data-driven business world? Learning SQL, the widely used language for managing relational databases, can be a game changer for you.In this course, you will learn the fundamental skills needed to navigate and analyze data effectively. Discover the basic structure of relational databases, how they work, a

> [LinkedIn Learning](https://www.linkedin.com/learning/data-analysis-investigate-with-sql) | 1h | Beginner | 300K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why learn SQL today?](#why-learn-sql-today)
  - [What you should know](#what-you-should-know)
  - [Solve a crime with SQL](#solve-a-crime-with-sql)
- [**1. Starting the Investigation with SQL Query**](#1-starting-the-investigation-with-sql-query) (3 videos)
  - [Data analysis: First steps](#data-analysis-first-steps)
  - [SQL core concepts: Data types, tables, columns, and records](#sql-core-concepts-data-types-tables-columns-and-records)
  - [First query: Comments, aliases, and sorting](#first-query-comments-aliases-and-sorting)
- [**2. Filter Data for Refined Results**](#2-filter-data-for-refined-results) (4 videos)
  - [Adding criteria to SQL queries](#adding-criteria-to-sql-queries)
  - [Second query: WHERE clause, operators, date, and texts](#second-query-where-clause-operators-date-and-texts)
  - [Query composition: More operators for refining results](#query-composition-more-operators-for-refining-results)
  - [Third query: Operators and context understanding](#third-query-operators-and-context-understanding)
- [**3. Performing Manual Data Analysis**](#3-performing-manual-data-analysis) (2 videos)
  - [Logical deduction by observing results](#logical-deduction-by-observing-results)
  - [Crime-solving SQL analysis recap](#crime-solving-sql-analysis-recap)
- [**4. Exploring Related Table Data**](#4-exploring-related-table-data) (4 videos)
  - [Examining the evidence in related tables](#examining-the-evidence-in-related-tables)
  - [Fourth query breakdown: BETWEEN operator and date ranges](#fourth-query-breakdown-between-operator-and-date-ranges)
  - [Finding supporting evidence to align objectives](#finding-supporting-evidence-to-align-objectives)
  - [Fifth query breakdown: Using the IN and AND operators](#fifth-query-breakdown-using-the-in-and-and-operators)
- [**5. Conclusive Analysis for Data-Driven Action**](#5-conclusive-analysis-for-data-driven-action) (3 videos)
  - [Solving the case with data-driven insights](#solving-the-case-with-data-driven-insights)
  - [Project: The art of disguise](#project-the-art-of-disguise)
  - [Project: Solution walkthrough](#project-solution-walkthrough)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue enhancing your SQL data-driven skills](#continue-enhancing-your-sql-data-driven-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why learn SQL today?](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980&t=0)** - The ability to leverage and act on data has made a powerful difference in today's business world.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980&t=7)** In this course, we'll learn how to think strategically as data analysts by using [[SQL]] commands like SELECT, FROM, WHERE, ORDER BY, and LIMIT in order to solve the case of a stolen painting.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980&t=23)** Hi, I'm Walter Shields.
>
> **[0:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/delete-why-learn-sql-today?u=76281980&t=26)** Join me as we put on our detective hats to investigate the crime and crack the case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1), select (1), where (1), order (1), limit (1)
> **SQL:** select (1), where (1), order by (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=0)** - [Instructor] Before we dive in, let me walk you through exactly what you need to know to succeed in this course.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=7)** First, no background in coding, no database knowledge, not even a working definition of [[SQL]].
>
> **[0:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=15)** If you're curious, focused, and ready to learn by doing, you're exactly in the right place.
>
> **[0:22](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=22)** Second, this course is designed with one clear goal, to help you learn SQL by solving a case, the theft of a valuable painting.
>
> **[0:32](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=32)** Why a case?
>
> **[0:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=34)** Because learning with a story gives every lesson a purpose.
>
> **[0:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=38)** You're not just memorizing commands, you're investigating a mystery, and that's what real analysts do.
>
> **[0:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=45)** They ask focused questions like, who did it?
>
> **[0:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=49)** What happened?
>
> **[0:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=50)** Where's the proof?
>
> **[0:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=51)** Every SQL concept we cover is tied directly to that mission.
>
> **[0:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=56)** Here's how the course is structured.
>
> **[0:59](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=59)** In each lesson, I'll first show you a SQL query without explaining it yet.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=65)** That's your cue to pause the video, type it yourself, and run it in the editor.
>
> **[1:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=71)** Then, in the very next video, we'll go over that query line by line so you understand exactly how and why it works.
>
> **[1:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=80)** This method helps you build real fluency, not just by watching, but by writing and thinking in SQL.
>
> **[1:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=89)** You'll be using a tool called the WSDA SQL Editor, built specifically for this course.
>
> **[1:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=96)** It runs 100% in your browser.
>
> **[1:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=100)** There's nothing to install and no setup required.
>
> **[1:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=103)** It works on any device with an internet connection.
>
> **[1:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=107)** Now, inside the Editor, you'll see a screen like this, a left panel with all your database tables, a center workspace where you'll write and run your queries, and a right panel where the Walter AI provides real time feedback on your SQL queries.
>
> **[2:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=125)** Now, a quick heads up.
>
> **[2:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=128)** The editor you see in most of the videos is the original version recorded in 2023, but, you now have access to the updated WSDA SQL Editor, which includes this cleaner layout, improved speed, and a powerful AI assistant.
>
> **[2:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=147)** So even if the visuals look slightly different later, [[Representational State Transfer (REST)|rest]] assured you're using the latest and best version of the tool.
>
> **[2:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=155)** Now, a [[Microsoft Word|word]] on practice.
>
> **[2:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=157)** Yes, you'll have access to every query in the exercise files, but I strongly encourage you to type them out yourself.
>
> **[2:46](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=166)** That hands-on experience is what makes the learning stick.
>
> **[2:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=170)** You'll also be using a built-in course notebook to track clues, write notes, and organize your findings, just like an analyst working a real case.
>
> **[3:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=180)** And finally, don't go it alone.
>
> **[3:03](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=183)** If you have questions along the way, drop them in the Q and A section.
>
> **[3:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=187)** I respond personally and I'm here to help. That's it.
>
> **[3:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/what-you-should-know-25847497?u=76281980&t=192)** You are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (8), wsda (2)
> **Prerequisites:** install (1), setup (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### [Solve a crime with SQL](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=0)** - [Instructor] Before we jump into writing our first query, I want to introduce you to a tool I built specifically for this course, the WSDA [[SQL]] Editor.
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=12)** Think of this as your personal SQL lab.
>
> **[0:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=15)** It's a space where you can practice, experiment, and learn without needing to install anything or set anything up.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=23)** It works entirely on your browser, whether you're using a [[Windows]] PC, a Mac, a Chromebook, or [[Linux]].
>
> **[0:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=31)** All you need is an internet connection.
>
> **[0:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=34)** Let me walk you through what you'll see when you open it up at the following address.
>
> **[0:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=43)** Now, starting with the left, the database schema section here.
>
> **[0:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=48)** Now this panel shows you all the tables in our investigation database, like customer details, bank accounts, flight details, and more.
>
> **[0:57](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=57)** Every table is like a spreadsheet.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=60)** The name of the table is listed here, and when you click on the small arrow next to it, you'll see all the fields inside.
>
> **[1:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=71)** For bank transactions, which I have open here, you can see the account number FK, bank transaction PK, the trans date, and so forth.
>
> **[1:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=80)** Now, this is your reference guide.
>
> **[1:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=83)** It helps you know what kind of information is available to query.
>
> **[1:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=87)** You'll use this consistently as you write your SQL queries.
>
> **[1:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=91)** Now in the center, which is the query editor, this is where you'll be writing your SQL query.
>
> **[1:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=99)** You can type right into this space and you'll see that it's designed for clarity, just enough room to focus without distractions.
>
> **[1:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=111)** Right beneath the editor, you'll find the action buttons.
>
> **[1:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=115)** You have your run query button and clicking on it executes whatever SQL code you've written.
>
> **[2:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=122)** The results will show up right below in this area here.
>
> **[2:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=126)** Now the Review My Query button, this is where the magic happens.
>
> **[2:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=131)** When you click this button, your code is sent to Walter AI, your built-in SQL Assistant.
>
> **[2:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=137)** It'll review your query and offer helpful personalized feedback, kind of like having a tutor sitting right next to you.
>
> **[2:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=145)** You'll see that feedback appear to the panel on the right here.
>
> **[2:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=151)** Now, this is a space where your feedback from Walter AI appears after each review, it might highlight something you can improve, explain a part of your query, or confirm that everything looks great.
>
> **[2:42](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=162)** Now, this type of real time coaching helps reinforce what you're learning and builds your confidence as you go.
>
> **[2:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=169)** In the next video, we'll write your very first query and start piecing together the crime.
>
> **[2:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solve-a-crime-with-sql-25842466?u=76281980&t=175)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** sql (6), wsda (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Documentation:** reference guide (1)
> **UI Navigation:** click on (1)
> **Analogies:** kind of like (1)


### 1. Starting the Investigation with SQL Query

[↑ Back to Table of Contents](#table-of-contents)

#### [Data analysis: First steps](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=0)** - [Instructor] All right, now it's time to begin the investigation.
>
> **[0:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=5)** As with any case, we start simple.
>
> **[0:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=8)** We want to know, where did the crime take place?
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=12)** We've been told it took place in New York City, so let's look into our data to see who might be connected to that location.
>
> **[0:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=20)** Now this is your very first real [[SQL]] query.
>
> **[0:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=24)** Think of it as the opening move in a larger strategy, the first clue on the board.
>
> **[0:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=29)** From here on out, every line of SQL you write will bring us closer to solving the case.
>
> **[0:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=35)** So, go ahead and open up the WSDA SQL editor in your browser.
>
> **[0:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=41)** You can get to it by navigating to this address.
>
> **[0:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=45)** Once you get there, you'll see the same tables we'll be using throughout the course here.
>
> **[0:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=51)** Now, once you're in, you'll notice a table called customer details.
>
> **[0:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=56)** That's where we'll start.
>
> **[0:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=58)** And here's your task.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=60)** Let's ask the database to show us anyone whose city is listed as New York City.
>
> **[1:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=66)** It's a small query, but a powerful one, because in the real world, data analysis often begins with filtering down to just what matters.
>
> **[1:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=75)** Ready to give it a try?
>
> **[1:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=77)** Pause the video now and type the query exactly as I do.
>
> **[1:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=100)** Once you're done, click on Run Query to see the results.
>
> **[1:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=109)** Now let's walk through what just happened.
>
> **[1:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=112)** You ran your very first SQL query in response to a very specific question.
>
> **[1:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=118)** Who in our database lives in New York City?
>
> **[2:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=121)** Now let's take a moment to scroll through our results here, keeping our eye on the city column, which is now sorted in alphabetical order.
>
> **[2:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=131)** If I scroll down past the C's, D's, E's, and go down to where New York is, we can see that we have two records here.
>
> **[2:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=144)** And these two records identify folks that are residing in New York City.
>
> **[2:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=149)** And just like that, we've got two people who live in the city where the painting was stolen.
>
> **[2:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=155)** Now are they connected?
>
> **[2:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=157)** We don't know yet, but they just became persons of interest.
>
> **[2:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=161)** In the next video, you'll visit some core SQL concepts that will help you better understand this query and the results it produced.
>
> **[2:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/data-analysis-first-steps-25848460?u=76281980&t=170)** Let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5)
> **Env Vars:** sql (5), wsda (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Analogies:** think of it as (1), just like (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [SQL core concepts: Data types, tables, columns, and records](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=0)** - In the last video, we composed and ran our first query and we saw that we had two records with New York City displayed in the city column.
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=12)** Now, let's get some high level technical basics out of the way.
>
> **[0:18](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=18)** So first up, let's talk about data.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=23)** What is it?
>
> **[0:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=24)** Well, if I'm being technical a datum is defined as a piece of information, and data is just the plural of datum.
>
> **[0:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=34)** So first name, last name, city, and age values you see in our result here are all considered data.
>
> **[0:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=44)** A table is nothing more than a grid of rows and columns.
>
> **[0:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=48)** Think [[Microsoft Excel|Excel]] spreadsheet, with rows going left to right and columns up and down.
>
> **[0:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=56)** Starting with our table here, we can see that we have data or pieces of information housed in a table of rows and columns.
>
> **[1:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=66)** Columns are also called fields, and each row is called a record.
>
> **[1:13](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=73)** Looking closer at the columns of our table, we can see that there are different types of data.
>
> **[1:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=80)** For example, first name, last name, and city are all text data, and age is integer or numeric data, in other words, numbers.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=93)** So if data is housed in tables, then what houses the table you might ask.
>
> **[1:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=100)** Well, that's what's called a database, which is a collection of data arranged for easy and speedy searching by a computer.
>
> **[1:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=110)** Okay, now that we've gone through the technical basics, in the next video we'll revisit the query we've composed, break down each line, and understand exactly what it's doing.
>
> **[2:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=125)** We'll also take a look at the result our query produced and see if it has given us the answer to our question, which was, do we have anyone in our database who resides in New York City?
>
> **[2:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/sql-core-concepts-data-types-tables-columns-and-records-25849425?u=76281980&t=140)** See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Cross-References:** in the next (2), in the last (1)
> **Definitions:** is called (1), in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [First query: Comments, aliases, and sorting](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=0)** - In the last video, we took a look at some high level technical basics of data terms and types.
>
> **[0:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=8)** Let's now take a look at the query we composed earlier and step through each line.
>
> **[0:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=15)** First up, we've got comments, which are just a plain and simple way of describing what your query is doing.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=23)** They come in two [[Forms]], single line comments and comment blocks.
>
> **[0:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=29)** Single line comments are created when you place two dashes back to back and whatever follows these two dashes becomes a comment.
>
> **[0:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=41)** Comment blocks are created by typing a front slash followed by a star.
>
> **[0:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=47)** Hit Enter a couple times, then flip them around and type a star, followed by a front slash.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=55)** Whatever you type between the comment block becomes a comment.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=60)** In both cases, comments allow us to describe what our query is doing in plain language.
>
> **[1:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=68)** It's non [[SQL]] code and it's ignored by the editor whenever we hit Run.
>
> **[1:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=75)** Next, let's look at ours, SQL query and focus on the words that are capitalized.
>
> **[1:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=81)** These are SQL keywords called clauses.
>
> **[1:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=86)** Starting with the from clause, here we specify the table we're interested in querying.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=93)** It's like telling SQL, "Go to this table."
>
> **[1:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=98)** Now that we are at that table, we use the select clause, which comes above the from clause to specify the columns we want to display in our result.
>
> **[1:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=110)** To see what columns are available in the table we've specified, we can have a look in the database tables area over here, and click on the triangle icon to show the columns available in this table.
>
> **[2:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=125)** In our query, we've included the id, first name, last name, city, and age fields in our "SELECT" clause.
>
> **[2:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=136)** The ID field is referred to as a primary key and its purpose is to uniquely identify each row or record in our customer details table.
>
> **[2:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=149)** In other words, it gives each row a unique number, which is never repeated.
>
> **[2:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=155)** We've also renamed or aliased each column with the "AS" keyword.
>
> **[2:42](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=162)** This helps us format or better describe the names of each column.
>
> **[2:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=168)** Brackets are used for names with spaces and no brackets are needed if your alias has no spaces.
>
> **[2:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=176)** Each column is also separated by a comma.
>
> **[3:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=180)** Next, in order to sort our results, we included the "ORDER BY" clause, which is sorting our results in ascending order, which is the default sort order by the column we specify.
>
> **[3:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=197)** In our case, it's the city column.
>
> **[3:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=200)** Lastly is the "LIMIT" clause, which limits the number of records displayed by the number you specify.
>
> **[3:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=208)** We've limited our results to the first 100 records.
>
> **[3:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=213)** Now let's take a look at the results our query generated and scroll down our records that are sorted in ascending order by city.
>
> **[3:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=223)** We can observe the two records that have people who reside in New York City.
>
> **[3:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=229)** These people are Barry Allen and Opra Baker.
>
> **[3:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=234)** Be sure to make a note of these two records by typing them in the Notebook feature of this page to reference them later.
>
> **[4:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=242)** You can also click on the export results button which downloads the result of our query.
>
> **[4:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=250)** Now that we've figured out who resides in New York City, what might be another question we can ask that gets us closer to our goal of finding the thief?
>
> **[4:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=263)** Well, keeping this goal in mind, it's beneficial for us to know if there was anyone who flew to New York City before the day the painting was stolen.
>
> **[4:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/first-query-comments-aliases-and-sorting-25841480?u=76281980&t=275)** Let's find out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Forms]] (1)
> **Env Vars:** sql (4), select (1), order (1), limit (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **CLI Commands:** make (1), find (1)
> **SQL:** select (1), order by (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** in other words (1)
> **Analogies:** it's like (1)


### 2. Filter Data for Refined Results

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding criteria to SQL queries](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=1)** - Remember, our objective is performing an investigation through data analysis, and our approach is zooming in on a list of viable suspects from the total number of people on our digital evidence file.
>
> **[0:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=16)** So let's think about it.
>
> **[0:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=19)** If someone flew to New York City before the date of the crime, there's a possibility that they could have been involved in the theft.
>
> **[0:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=28)** In the previous video, we used the SELECT, FROM, ORDER BY, and LIMIT clauses to identify who resided in New York City.
>
> **[0:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=38)** Remember, we found two people: Barry Allen and Oprah Baker.
>
> **[0:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=45)** Let's now take a look and see if we could find out who flew to New York City before the date of the crime, October 23rd, 2021.
>
> **[0:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=56)** Navigate to the Walter Shields Data Academy [[SQL]] Editor at the following link.
>
> **[1:03](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=63)** Are you with me?
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=65)** Do you have the WSDA SQL Editor open in a new tab as I do?
>
> **[1:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=70)** Now let's take a look at our database tables.
>
> **[1:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=74)** We're now interested in people who flew to New York City.
>
> **[1:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=79)** Looking at our table names, we can make a logical assumption that the table that houses data about flight information is the flight_details table.
>
> **[1:32](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=92)** Let's expand this table and have a look at its columns.
>
> **[1:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=97)** We can see the following fields: id, customer_id, start_city, dest_city, flightDate, customer first name and customer last name.
>
> **[1:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=112)** Based on these field names, this table does indeed look like it contains flight data.
>
> **[1:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=118)** Now that we've done this preliminary check, let's target this table to build a new SQL query around to perform some more data analysis.
>
> **[2:09](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=129)** Just as I said before, we're in this thing together.
>
> **[2:13](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=133)** So follow along and let's start typing.
>
> **[2:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=137)** Pause the video if you need to.
>
> **[2:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=139)** Then hit Run to get your final query result, just as I do.
>
> **[2:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=144)** We'll then walk through the query we're about to write step by step and break down exactly what it's doing.
>
> **[2:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=160)** Hit the Run button once you've done composing your query.
>
> **[2:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=171)** Excellent work, if I do say so myself.
>
> **[2:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=176)** In the next video, let's take a closer look and break down exactly what query number two is doing to help us find out who flew to New York City before the date of the crime.
>
> **[3:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/adding-criteria-to-sql-queries-25843468?u=76281980&t=190)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Env Vars:** sql (3), select (1), order (1), limit (1), wsda (1)
> **Code Identifiers:** flight_details (1), customer_id (1), start_city (1), dest_city (1), flightdate (1)
> **CLI Commands:** find (2), make (1)
> **SQL:** select (1), order by (1)
> **Cross-References:** previous video (1), in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - remember (1)

#### [Second query: WHERE clause, operators, date, and texts](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=0)** - We just composed our second query, which was designed to help us find anyone who flew to New York City before the date of the crime.
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=12)** Are you with me? Okay.
>
> **[0:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=15)** Now, if we take a close look at our current query we can see some of the same items that we created in the very first query we composed, like comments, clauses, and aliases.
>
> **[0:32](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=32)** In addition, with this query, we've introduced a new clause called the WHERE clause.
>
> **[0:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=40)** This clause allows us to filter for specific data that's in our table.
>
> **[0:46](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=46)** The WHERE keyword is followed by a field name, an operator, and the value you're interested in.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=55)** This filter is also referred to as criteria, and it is possible to filter for one or multiple values from multiple fields.
>
> **[1:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=67)** If you look, we're doing just that, here, with this query.
>
> **[1:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=72)** With the syntax, Destination City = 'New York City', we're looking for values in the destination city field of our flight details table that are equal to New York City.
>
> **[1:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=88)** Notice, we surround New York City with single quotes.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=93)** This is the way we filter for text data.
>
> **[1:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=97)** We then added the AND keyword to add a second criteria to our WHERE clause.
>
> **[1:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=105)** This criteria, flightdate less than or equal to 2021-10-23
>
> **[1:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=115)** is looking at another column, the flight date column, and using the less than or equal to operators to look for values that are less than or equal to October 23rd, 2021.
>
> **[2:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=132)** In other words, dates that come before or are equal to this date.
>
> **[2:18](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=138)** Because of the AND keyword, only records that meet both conditions will be displayed in our results.
>
> **[2:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=146)** Now let's take a look at the results that our query generated.
>
> **[2:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=153)** We can see that we have three records that show the people who flew to New York City before the date of the crime.
>
> **[2:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=161)** These people are Bruce Fisher, Aleana Jordan, and Brenda Reynolds.
>
> **[2:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=169)** Be sure to make a note of these three records by typing them in the notebook feature of this page to reference them later.
>
> **[2:57](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=177)** You can also click on the export results button, which downloads the result of your query.
>
> **[3:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=185)** Now that we figured out who flew to New York City before the date of the crime, what might be another question we can ask that gets us even closer to our goal of finding the thief?
>
> **[3:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=201)** So, keeping this in mind, it might be beneficial for us to know if there was anyone who flew from New York City after the day that the painting was stolen.
>
> **[3:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=215)** These will also be people of interest or worth speaking to.
>
> **[3:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/second-query-where-clause-operators-date-and-texts-25842464?u=76281980&t=219)** So let's find out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **SQL:** where (3)
> **Env Vars:** where (3)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - we (1)

#### [Query composition: More operators for refining results](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=1)** - In the last video, we composed query number two, which allowed us to identify three people who flew to New York City before October 23rd, 2021.
>
> **[0:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=14)** These people were: Bruce Fisher, Aleana Jordan and Brenda Reynolds.
>
> **[0:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=21)** Now, let's identify if anyone flew from New York City after the day the painting was stolen.
>
> **[0:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=29)** Just as we've done before, let's dive in and start typing.
>
> **[0:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=34)** Pause the video if you need to.
>
> **[0:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=36)** Then hit run to execute the final query to get your result just as I do.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=55)** Nicely done.
>
> **[0:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=58)** In the next video, we'll walk through query number three step-by-step and explain these changes we've made.
>
> **[1:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/query-composition-more-operators-for-refining-results-25842465?u=76281980&t=66)** See you there.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - in (1)

#### [Third query: Operators and context understanding](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=1)** - [Instructor] So let's take a look at query number three, which we just composed in the last video.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=7)** This query gave us a list of people who flew from New York City after October 23rd, 2021.
>
> **[0:18](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=18)** On the surface, it looks almost identical to query number two, which gave us a list of people who flew to New York City before the crime.
>
> **[0:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=29)** We've made some field and operator changes to get the list of people who flew from New York City after the date of the crime.
>
> **[0:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=39)** The start city field is now used as we are interested in people who left New York City.
>
> **[0:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=47)** So the syntax, start city equal "New York City" is filtering these values in this field that meets this criteria.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=60)** We then use the and operator again to include a second field, flight date.
>
> **[1:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=68)** But this time, the operators have been changed to the greater than or equal to operators, which filters for flight dates on or later than the date of the crime, which is October 23rd, 2021.
>
> **[1:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=85)** This little change produced very different results.
>
> **[1:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=90)** Now let's take a closer look at the results that our query generated.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=95)** We can see that we have four records that show the people who flew from New York City after the date of the crime.
>
> **[1:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=104)** These people are Bruce Fisher, Aleana Jordan, Brenda Reynolds, and Hajrah Burns.
>
> **[1:53](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=113)** Be sure to make a note of these four records by typing them in the notebook feature of this page to reference them later.
>
> **[2:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=121)** You can also click on the export results button, which downloads the results of our query.
>
> **[2:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=128)** Now that we've figured out who flew from New York City after the date of the crime, now is a good time to take a look back and understand all the analysis we've performed through the queries we've composed thus far.
>
> **[2:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=144)** Let's see if we can put it all together to form a complete list of suspects.
>
> **[2:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/third-query-operators-and-context-understanding-25847498?u=76281980&t=150)** We'll take a look at how we can achieve this with manual analysis in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Performing Manual Data Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Logical deduction by observing results](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=1)** - Up to this point, we've composed three queries which allowed us to analyze the data in our database in a systematic way to get us closer to who committed the theft.
>
> **[0:13](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=13)** In this exercise, we're going to piece together the results of the queries we've written thus far with the goal of compiling a list of suspects we can pass to the authorities for questioning.
>
> **[0:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=26)** We'll be looking at the list of names reproduced from query number three and query number two.
>
> **[0:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=33)** Starting with query number three, pause the video and do the following.
>
> **[0:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=39)** Open a new browser and navigate to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor).
>
> **[0:46](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=46)** Next, go to your Exercise File folder and open the CSV file.
>
> **[0:53](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=53)** Copy query number three and paste it into the WSDA [[SQL]] Editor.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=60)** Finally, hit Run to execute your query.
>
> **[1:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=66)** Are you with me?
>
> **[1:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=67)** We [[Jetpack Compose|compose]] this query to find out who flew from New York City after the date of the crime, which was October 23rd, 2021.
>
> **[1:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=79)** When we referenced these results, we had the following people listed: Bruce Fisher, Aleana Jordan, Brenda Reynolds, and Hajrah Burns.
>
> **[1:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=90)** Next, let's take a look at query number two.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=95)** Pause the video and do the following.
>
> **[1:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=98)** Open a new tab and navigate to [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor).
>
> **[1:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=107)** Go to your Exercise File folder and open the CSV file.
>
> **[1:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=112)** Copy and paste query number two into the WSDA SQL editor.
>
> **[2:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=120)** Then hit Run to execute query number two.
>
> **[2:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=125)** Are you with me?
>
> **[2:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=127)** We composed this query to find out who flew to New York City before the date of the crime.
>
> **[2:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=135)** When we referenced these results, we had the following people listed: Bruce Fisher, Aleana Jordan, and Brenda Reynolds.
>
> **[2:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=145)** Now, let's compare these two results.
>
> **[2:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=149)** When we compare the names from both these results, we can see that some names appear on both.
>
> **[2:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=156)** These are Bruce Fisher, Aleana Jordan, and Brenda Reynolds.
>
> **[2:42](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=162)** Now, what does this tell us?
>
> **[2:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=165)** Well, it tells us that Bruce Fisher, Aleana Jordan and Brenda Reynolds all traveled to New York City before the date of the crime and they all left after the date of the crime.
>
> **[3:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=181)** This means that they were all physically present at the time and place that the crime took place.
>
> **[3:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=187)** Then, they all left shortly after.
>
> **[3:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=191)** Because of this, we're going to take note of these folks as persons of interest.
>
> **[3:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=196)** Go ahead and type them in the Notebook feature to reference them later.
>
> **[3:22](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=202)** Now, let's return to query number one.
>
> **[3:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=206)** Pause the video and do the following.
>
> **[3:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=209)** Open a new tab and navigate to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor).
>
> **[3:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=217)** Next, go to your Exercise File folder and open the CSV file.
>
> **[3:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=224)** Copy query number one and paste it in to the [wsdalearning.ai/sqleditor](https://wsdalearning.ai/sqleditor).
>
> **[3:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=234)** Next, hit Run to execute query number one.
>
> **[3:59](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=239)** Are you with me?
>
> **[4:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=242)** If you recall, we compose this query to find the folks that resided in New York City.
>
> **[4:09](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=249)** Let's scroll on down to New York City, looking at the City column.
>
> **[4:15](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=255)** If you recall, these folks were Barry Allen and Opra Baker.
>
> **[4:22](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=262)** Go ahead and add these two names to the list you started earlier in the notebook.
>
> **[4:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=268)** Because of their place of residence, New York City, these people were all physically present at the location that the crime took place.
>
> **[4:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=277)** Our manual analysis shows that these two groups of people all have something in common and these groups were, group number one, the results from our query number one, and if you recall, these were Barry Allen and Opra Baker.
>
> **[4:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=294)** Group number two were the names we identified when we compared the names from both query number two and query number three and these folks were Bruce Fisher, Aleana Jordan and Brenda Reynolds.
>
> **[5:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=308)** Both the folks identified in these two groups were present at the time and place that the crime took place.
>
> **[5:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=317)** Out of all the people that we have stored on our digital evidence file, the people we've identified here have the highest [[Probability]] to have committed the crime.
>
> **[5:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=327)** It would be worthwhile to have the authorities speak to them as our analysis has found that they are viable persons of interest.
>
> **[5:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=336)** Let's list them out and include each person's ID.
>
> **[5:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=341)** If you recall, this field is referred to as a primary key and its purpose is to uniquely identify each row or record in our customer details table.
>
> **[5:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=354)** We're including this field in our list of suspects so that we have a unique ID number of each person, just in case we need it for further analysis.
>
> **[6:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=365)** Through our manual analysis, critical thinking, and deductive reasoning, we now have a short list of suspects we can pass to the authorities.
>
> **[6:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/logical-deduction-by-observing-results-25843467?u=76281980&t=377)** Excellent work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Jetpack Compose|Compose]] (2), [[Probability]] (1)
> **Env Vars:** csv (3), wsda (2), sql (2)
> **UI Navigation:** go to (3), open the (3)
> **URLs:** [wsdalearning.ai](https://wsdalearning.ai) (4)
> **CLI Commands:** find (3)
> **Exercise Files:** exercise file (3)
> **Cross-References:** earlier in (1)
> **Definitions:** means that (1)

#### [Crime-solving SQL analysis recap](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=1)** - All right.
>
> **[0:03](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=3)** Let's take a moment to pause and review what we've done.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=7)** So far, we've gotten a short list of suspects that we've handed off to the authorities.
>
> **[0:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=14)** To get to this point, we analyzed data in two tables, the customer details table and the flight details table.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=23)** We first looked at the customer details table and strategically focused on the people who lived in New York City, the location that the crime took place.
>
> **[0:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=34)** We did this because the people stored on our file who live in New York City are already at the location that the crime took place and are worth identifying for questioning.
>
> **[0:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=48)** Our query gave us a list of all the people who were stored in the customer details table sorted by city in ascending order, which allowed us to simply scroll down the list and find the people who reside in New York City.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=65)** One thing to note, we now know that we could have refined this query and added a where clause to filter for the value New York City, which would've limited our results to the two records we found.
>
> **[1:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=80)** In other words, by including a where clause, we would not have had to scroll down the entire list of results to find that Barry Allen and Oprah Baker were the people who reside in New York City.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=95)** Secondly, we looked at the flight details table and wrote a query searching for people who flew to New York City before the date of the crime.
>
> **[1:47](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=107)** Why did we do this?
>
> **[1:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=109)** Well, anyone flying to New York City before the date of the crime would've been in the right location to steal the painting.
>
> **[1:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=118)** Next, we wrote a third query to search for people who flew from New York City after the date of the crime.
>
> **[2:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=127)** We did this because if someone left New York City after the crime took place, then there is a chance they may have been involved in the theft.
>
> **[2:18](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=138)** We then took a look at the results of the two queries we wrote against the flight details table and looked for people who appeared in both result sets.
>
> **[2:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=148)** This is where we found that Bruce Fisher, Aleana Jordan, and Brenda Reynolds all appeared in both result sets of these two queries.
>
> **[2:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=159)** We did this because if someone flew to New York City before the crime then left New York City shortly after, then there is a higher possibility that they may have been involved in the theft.
>
> **[2:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=174)** Finally, we added to this list the people we found who lived in New York City.
>
> **[3:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=181)** We did this because altogether this formed a complete list of people with the highest [[Probability]] of being involved in the theft.
>
> **[3:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=192)** In the next video, we'll start looking at the other tables we have access to in our digital evidence file.
>
> **[3:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=200)** We'll see if we can find any supporting evidence to compliment or add to the analysis we've done so far.
>
> **[3:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/crime-solving-sql-analysis-recap-25844465?u=76281980&t=208)** Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** scroll down (2)
> **Cross-References:** in the next (1)
> **Speakers:** - all (1)


### 4. Exploring Related Table Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Examining the evidence in related tables](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=0)** - As great data analyst, we know it's important to take a look at all the data that we have available to us in a logical and strategic way.
>
> **[0:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=11)** So let's explore some more tables in our digital evidence database.
>
> **[0:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=16)** Let's navigate back to the WSDA [[SQL]] Editor and take a look at the database tables available to us on our digital evidence file.
>
> **[0:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=27)** Are you with me?
>
> **[0:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=29)** Okay.
>
> **[0:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=30)** If we look at our database tables, we can see that we have other tables available to us.
>
> **[0:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=38)** Let's take a look at the table called text_messages.
>
> **[0:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=43)** If we expand the table by clicking on the triangle to the right of it, we can see the columns, also known as fields, that it houses.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=55)** Now, it would make sense for us to have a look at the conversations that were sent back and forth around the date of the crime.
>
> **[1:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=62)** Let's start by composing a query that will give us a view of how many messages were sent between October 20th and October 25th, which is a couple days before and after the date of our crime on October 23rd.
>
> **[1:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=79)** We're already here at the WSDA Editor and just as we did before, let's type in our query in the query writing area.
>
> **[1:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=89)** Pause the video if you need to.
>
> **[1:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=91)** Then hit Run to execute the final query to get your result, just as I do.
>
> **[1:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=112)** Very well done.
>
> **[1:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/examining-the-evidence-in-related-tables-25846440?u=76281980&t=115)** Meet me in the next video where we'll walk through each line and understand exactly what this query is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** wsda (2), sql (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** text_messages (1)
> **Cross-References:** in the next (1)
> **Speakers:** - as (1)

#### [Fourth query breakdown: BETWEEN operator and date ranges](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=1)** - So here we are back at the WSDA [[SQL]] Editor with query number four, which we composed in the last video.
>
> **[0:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=10)** Are you with me?
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=12)** All right.
>
> **[0:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=14)** Now let's zero in on our query.
>
> **[0:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=16)** We can see some more items that we should be getting a bit more familiar with at this point.
>
> **[0:22](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=22)** We have our clauses, select, from, where, and order by.
>
> **[0:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=28)** If we look at our where clause, we have a brand new operator called the between operator, which is being used in conjunction with the and operator.
>
> **[0:42](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=42)** Together, they allow us to filter for results that fall between the date range we've specified.
>
> **[0:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=51)** The dates we've specified are surrounded in single quotes and formatted as year, followed by month, followed by date.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=60)** Specifically, it's year dash month dash day.
>
> **[1:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=66)** So two points to note on this.
>
> **[1:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=68)** First, date data types need to be surrounded by single quotes, similar to text.
>
> **[1:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=76)** Secondly, we must pay attention to how the dates are stored within our table, so we can format them in the same way in our query.
>
> **[1:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=86)** From one database to another, dates can be stored in multiple formats.
>
> **[1:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=91)** For example, dates can be stored as month dash day dash year or day dash month dash year,
>
> **[1:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=104)** as it's done in European formatting, as well as other formats.
>
> **[1:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=108)** So it's important to format them in our query the same way they're stored in our table.
>
> **[1:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=115)** With this criteria in our where clause, we're able to get a sense of how many messages were sent during this timeframe, as well as take a high level look at the data that is contained in the fields of our text messages table.
>
> **[2:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=131)** We included the sent field in our order by clause, and this sorts our results in ascending order.
>
> **[2:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=140)** This allows us to see the messages in chronological order and makes reading the messages that appear much more understandable.
>
> **[2:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=150)** Now that we have a view of this, let's get a bit more specific and narrow down our results further.
>
> **[2:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=158)** In the next video, we'll filter our results down to only the text messages that were sent by the people on our short list of suspects.
>
> **[2:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fourth-query-breakdown-between-operator-and-date-ranges-25847496?u=76281980&t=168)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** wsda (1), sql (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - so (1)

#### [Finding supporting evidence to align objectives](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=1)** - Let's kick things off with a fresh copy of the WSDA [[SQL]] editor.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=7)** Open a new browser tab and navigate to the link.
>
> **[0:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=11)** In our last query, we got a list of the text messages that were sent and received within a few days before and after the date of the crime, October 23rd, 2021.
>
> **[0:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=25)** In this query, our goal is to further refine these results by seeing if any of these messages were sent by anyone we've identified as a person of interest from the analysis we performed earlier.
>
> **[0:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=41)** You probably know what I'm going to say at this point, but I'll say it again.
>
> **[0:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=45)** Just as we did before, let's start typing in our query writing area.
>
> **[0:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=50)** Pause the video if you need to.
>
> **[0:52](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=52)** Then hit Run to get the final result from our query just as I do.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/finding-supporting-evidence-to-align-objectives-25844464?u=76281980&t=65)** Fantastic. I'll see you in the next video where we'll cover the modification we've made to this query and explain exactly what it's doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** wsda (1), sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - let (1)

#### [Fifth query breakdown: Using the IN and AND operators](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=1)** - Let's take a closer look at query number five, which we composed in the last video, and focus on the where clause.
>
> **[0:09](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=9)** If you recall, this query gave us only the messages that were sent by the people we identified on our short list of suspects.
>
> **[0:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=20)** We're focused on the where clause because this is where we've made a modification in our criteria.
>
> **[0:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=27)** We included the AND operator, and introduced a brand new operator called the IN operator.
>
> **[0:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=36)** So, this area I've highlighted is saying, in addition to the messages that we sent between 10-20 and 10-25, I'm only interested in those sent by a specific set of people, the persons of interest we identified earlier.
>
> **[0:57](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=57)** We specified these people using the IN operator, which contains the primary key numbers of each person on our suspect list.
>
> **[1:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=67)** The sender ID field corresponds to the people who sent text messages, and by specifying the numbers, 32, 38, 100, 105, and 106,
>
> **[1:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=83)** we are limiting our results to only these people.
>
> **[1:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=88)** The IN operator allows us to filter for multiple values all at once.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=95)** Note, each value is separated by a comma and all values are surrounded by parenthesis.
>
> **[1:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=104)** So our criteria in the where clause filters for records that fall between this specified date range, 10-20 through 10-25, and were sent by the five people identified as persons of interest.
>
> **[2:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=120)** As we did in our last query, sorting our results in ascending order allows us to see the messages in a chronological order and makes reading the messages that appear much more understandable.
>
> **[2:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=136)** Let's keep the results of our query here.
>
> **[2:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=139)** In the next video, we'll step through these results and manually read each message to see if we can uncover any useful information.
>
> **[2:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/fifth-query-breakdown-using-the-in-and-and-operators-25841481?u=76281980&t=150)** See you there.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **Speakers:** - let (1)


### 5. Conclusive Analysis for Data-Driven Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving the case with data-driven insights](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=1)** - Welcome to the final step of our analytical journey.
>
> **[0:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=5)** In the last video, we refined our query results and zeroed in on the text messages sent by the people we identified on our short list of suspects.
>
> **[0:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=17)** What we're about to do in this video is called manual analysis, which will clue us in to any additional evidence that pinpoints who stole the painting.
>
> **[0:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=30)** If you recall, we did a bit of this earlier when we composed our list of suspects.
>
> **[0:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=36)** Now we're about to do it once again.
>
> **[0:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=40)** So if you're not already there, head on back to query number five in the WSDA [[SQL]] editor.
>
> **[0:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=49)** Are you with me?
>
> **[0:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=50)** Okay.
>
> **[0:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=51)** Our focus here is on the results that our query produced.
>
> **[0:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=56)** Let's shrink our query writing area so we can see more of the records.
>
> **[1:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=62)** Our results here are the text messages that were sent between October 25th by the people we have identified on our list of suspects.
>
> **[1:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=72)** So we're going to step through each record, keeping our eye on the text message field, the sender first name, the recipient first name, and the date sent fields.
>
> **[1:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=85)** These fields will tell us who sent the message, who received it, what was said, and when.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=93)** In the first record, we see that Bruce messaged Brenda on October 20th, two days before the date of the crime at 9:00, telling her that he just landed in JFK, which is New York's international airport.
>
> **[1:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=110)** Stepping down to the second record, Aleana messaged Leonardo on October 21st, saying she arrived in New York and was headed to her hotel room before meeting up with him.
>
> **[2:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=125)** Nothing unusual so far, but let's keep analyzing.
>
> **[2:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=130)** In the next record, Brenda replies to Bruce's message the next day on October 21st at 9:01, saying that she also arrived in New York and will meet him at the museum at 10:00 PM that night to quote unquote, run through the plan again.
>
> **[2:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=149)** Now this message seems a bit suspicious because Brenda and Bruce are meeting at the location of the crime to quote unquote, run through a plan.
>
> **[2:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=160)** Added to this, both Brenda and Bruce are on our lists of suspects we created from our previous analysis.
>
> **[2:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=168)** So let's take note of these two and keep on analyzing our records.
>
> **[2:54](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=174)** In the next record, Aleana messages Leonardo again on October 21st at 9:15, asking where to meet and mentions that her hotel is close to the museum.
>
> **[3:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=188)** Now, this may be of interest, seeing that her hotel is close to the museum.
>
> **[3:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=194)** It may also be completely unrelated to the crime we're investigating, so let's note it and keep on analyzing.
>
> **[3:22](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=202)** In the next record, Aleana messages Leonardo again at 9:30 to say that she's going to meet him there.
>
> **[3:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=210)** Now we're seeing Aleana's messages to Leonardo, but we don't seem to have Leonardo's messages to her, but the message itself isn't particularly unusual or telling with regard to the crime we're investigating.
>
> **[3:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=225)** Also neither of these two were on our suspect list.
>
> **[3:50](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=230)** Let's keep going.
>
> **[3:53](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=233)** The message in the next record is from Bruce to Brenda on October 21st at 9:40, where he's confirming to see Brenda at the museum.
>
> **[4:03](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=243)** Moving to the next record, we can see that we have a very suspicious message from Bruce to Brenda on October 21st at 9:41, confirming that he found a buyer for $1 million.
>
> **[4:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=260)** Now, this is a very telling message and somewhat confirms suspicions about both Bruce and Brenda.
>
> **[4:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=268)** Having a buyer for this large sum of money would be exactly what is needed to fence a stolen piece of art.
>
> **[4:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=275)** Brenda confirms that finding a buyer is great in her next message to Bruce on October 21st at 10:10.
>
> **[4:44](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=284)** The next message is a message from Bruce to Brenda again, on October 24th at 9:10, where he's boasting about a great score and even mentioning that he would've loved to keep the art.
>
> **[4:58](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=298)** This message was sent one day after the painting was stolen and is probably the most telling messages of all the messages we've analyzed.
>
> **[5:08](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=308)** It gives us some solid evidence that Bruce and Brenda are indeed our prime suspects and most likely responsible for stealing the painting.
>
> **[5:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=319)** In the last record, Brenda sends Bruce a message on October 24th at 9:12, wishing him a safe flight back.
>
> **[5:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=329)** This record again, gives us additional evidence that they took a flight leaving New York after the date of the crime.
>
> **[5:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=338)** We can now conclude based on our manual analysis, that Bruce and Brenda are indeed the thieves responsible for the theft of Mr. Kehinde Wiley's infamous painting.
>
> **[5:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=351)** We can now pass the conclusive results of our analysis to the police authorities who now have enough evidence to make an arrest.
>
> **[6:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=361)** What an amazing job.
>
> **[6:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=365)** You used your critical reasoning, problem solving, and analytical skills in SQL to gather evidence, find the thieves, and retrieve the stolen painting.
>
> **[6:18](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/solving-the-case-with-data-driven-insights-25845462?u=76281980&t=378)** Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Ports:** :00 (2), :10 (2), :01 (1), :15 (1), :30 (1)
> **Cross-References:** in the next (4), in the last (2)
> **Env Vars:** sql (2), wsda (1), jfk (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - welcome (1)

#### [Project: The art of disguise](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=0)** - [Instructor] Now that we've wrapped up our investigation, it's time for your final mission.
>
> **[0:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=6)** This project is called The Art of Disguise, and it challenges you to dig into the data one last time to figure out what happened to the stolen money.
>
> **[0:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=17)** You'll be analyzing a series of suspicious artwork transactions that took place after the theft.
>
> **[0:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=25)** Your job is to find out who made them, when they happened, and whether the pattern suggests something more, like money laundering or a hidden accomplice.
>
> **[0:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=36)** Now, everything you need is right here in the project file, displayed on the screen.
>
> **[0:41](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=41)** You can find a downloadable version in the Exercise Files folder located in the Related to This Course section.
>
> **[0:49](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-the-art-of-disguise-25843466?u=76281980&t=49)** Take your time, work through it carefully, and when you're ready, we'll go over the full solution together.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Project: Solution walkthrough](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=0)** - [Instructor] All right, you've made it to the final project.
>
> **[0:04](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=4)** Let's walk through the solution together step by step.
>
> **[0:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=7)** We were investigating what happened after the painting was stolen.
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=12)** Specifically, we wanted to know were there any suspicious transactions labeled as artwork shortly after the theft.
>
> **[0:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=20)** Now let's start with the select portion of this query here.
>
> **[0:24](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=24)** We're selecting the customer ID, first name and last name from the customer table.
>
> **[0:31](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=31)** Then we're grabbing the amount, date, and description of each transaction from the bank transactions table.
>
> **[0:39](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=39)** Now, each of these fields will help us understand who made a payment, what it was for and when it happened.
>
> **[0:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=48)** Now, let's zero in on this second portion of our [[SQL]] response.
>
> **[0:53](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=53)** Taking a look at the from clause here.
>
> **[0:57](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=57)** Now this is the core of the investigation.
>
> **[1:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=60)** We're starting from bank transactions, which is where the money movement happens.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=65)** Then we join bank accounts to connect each transaction to an account holder.
>
> **[1:11](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=71)** And finally, we join customer details to get the person behind that account, their name, their ID, and everything else.
>
> **[1:20](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=80)** I'm just going to scroll across so you see the full code of our from clause here.
>
> **[1:28](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=88)** Okay, now let's go down to our Where clause.
>
> **[1:33](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=93)** Just want to highlight only the Where clause.
>
> **[1:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=96)** Now these are your filters.
>
> **[1:38](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=98)** We only care about transactions labeled as artwork, and only if they happen on or after October 24th, 2021, the day after the painting was stolen.
>
> **[1:51](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=111)** Now this helps us zero in on what might be money laundering activity, suspicious art purchases shortly after the theft.
>
> **[2:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=120)** And finally, we end with our order by resorting the results by date so we can spot patterns whether the purchases were spread out or tightly grouped.
>
> **[2:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=132)** Now let's run our statement here and observe our results.
>
> **[2:16](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=136)** I'm going to click on Run Query.
>
> **[2:19](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=139)** I'm going to give ourselves some more real estate by dragging the screen up so we could take a closer look at our results.
>
> **[2:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=146)** Now, running this query, two names stand out, Brenda Reynolds and Pierre Henderson.
>
> **[2:34](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=154)** You'll notice that they each made multiple artwork purchases, and each one is exactly for $1,000.
>
> **[2:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=163)** They were made one after the other, often just minutes apart.
>
> **[2:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=168)** This is a classic sign of structuring when someone splits a large sum of money into smaller, repeatable transactions to avoid setting off alarms in the financial system.
>
> **[3:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=180)** And what's really interesting is Pierre Henderson, until now, he hadn't been on our radar.
>
> **[3:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=187)** These transactions connect him directly to suspicious spending right after the theft, possibly as a buyer, launderer or accomplice.
>
> **[3:17](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=197)** Now let's move on to the second part of our challenge here.
>
> **[3:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=206)** Now, if you took the challenge further and wrote this second query, it's one that groups the artwork purchases by customer and calculates how many transactions they made and how much they spent in total.
>
> **[3:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=220)** Now here's what it might look like.
>
> **[3:43](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=223)** We have our select statement.
>
> **[3:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=225)** Now, key in here is our count, which we're performing to calculate the number of transactions and the sum, which gives us our total amount for the transactions for each of these folks.
>
> **[3:57](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=237)** Down here, we have the group by, which is grouping by all of the non aggregated fields, and that's the first name, ID and last name.
>
> **[4:14](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=254)** So we could see that we have the ID, the first name and last name, columns not being aggregated, and that's why it ends up in our group by statement.
>
> **[4:25](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=265)** All right.
>
> **[4:26](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=266)** Now this query gives you a summary view.
>
> **[4:29](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=269)** You'll see that Brenda and Pierre each made multiple artwork purchases, totaling tens of thousands of dollars.
>
> **[4:36](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=276)** So let's go ahead and run our query now.
>
> **[4:40](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=280)** In our results set here, we can see that both Pierre and Brenda each made multiple artwork purchases.
>
> **[4:48](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=288)** Now, this is powerful because you're not just spotting individual transactions, you're identifying behavioral patterns.
>
> **[4:56](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=296)** Now this is how analysts work in fields like fraud detection, [[Cybersecurity]], and law enforcement.
>
> **[5:03](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=303)** It's about finding signals in the noise.
>
> **[5:06](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=306)** All right, now with this final project, you brought together everything you've learned from filtering data with the wear clause, joining related tables, sorting and grouping results, and interpreting patterns in the data.
>
> **[5:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=321)** You didn't just write queries, you followed the money and uncovered a deeper layer of the story.
>
> **[5:27](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=327)** And that's exactly what great analysts do.
>
> **[5:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/project-solution-walkthrough-25846439?u=76281980&t=330)** Nice work and case closed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Cybersecurity]] (1)
> **Env Vars:** sql (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue enhancing your SQL data-driven skills](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=0)** - [Instructor] What a journey!
>
> **[0:02](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=2)** You didn't just complete a course, you followed the data, uncovered the truth, and traced a financial trail most would've missed.
>
> **[0:12](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=12)** That's more than [[SQL]], that's data-driven thinking, and it's exactly what today's most impactful professionals do.
>
> **[0:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=21)** So here's what you learned.
>
> **[0:23](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=23)** How to ask focused, real-world questions, how to apply just the right SQL tools at the right time, and most importantly, how to think like an analyst, not just a coder.
>
> **[0:37](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=37)** From filtering with WHERE to joining tables and sorting results, you used SQL to investigate a real case layer by layer.
>
> **[0:46](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=46)** This is the kind of skill employers value, the ability to explore data, make sense of it, and act on what you find.
>
> **[0:55](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=55)** You now have access to the WSDA SQL Practice Editor, a browser-based playground built just for learners like you.
>
> **[1:05](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=65)** It works with any SQLite Database, not just the one from this course.
>
> **[1:10](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=70)** So you can practice on your own, on your own data projects, revisit lessons from this course, or explore real-world [[Databases]] all from your browser.
>
> **[1:21](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=81)** And don't forget, the built-in AI assistant gives instant feedback, just like having me as your personal SQL coach, right by your side.
>
> **[1:30](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=90)** If you're ready to level up, I've got more courses for you on [[LinkedIn]] Learning.
>
> **[1:35](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=95)** We go deeper into aggregations and subqueries, [[Windows]] functions, real-world [[Data Cleaning]] and transformation, and advanced analysis techniques.
>
> **[1:45](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=105)** These courses build right on the foundation you've built here, and they're just as hands-on and beginner-friendly.
>
> **[1:53](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=113)** Before you go, don't forget, download your certificate of completion and share it on LinkedIn.
>
> **[1:59](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=119)** Let others know you are leveling up.
>
> **[2:01](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=121)** Explore more tools on WSDA Learning and connect with me on LinkedIn.
>
> **[2:07](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=127)** It's been an honor being your guide.
>
> **[2:09](https://www.linkedin.com/learning/data-analysis-investigate-with-sql/continue-enhancing-your-sql-data-driven-skills-25841483?u=76281980&t=129)** Keep practicing, keep growing, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[LinkedIn]] (3), [[Databases]] (1), [[Windows]] (1), [[Data Cleaning]] (1)
> **Env Vars:** sql (5), wsda (2), where (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** don't forget (2)
> **SQL:** where (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Walter Shields]]

## Resources

- Exercise files available

## Skills Covered

- Data Analysis
- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[Hands-On SQL Challenges- Test Your Knowledge]] | **7 of 9** | [[SQL Hands-On Practice- Solve Business Problems]] →

### In [[Advance Your Skills in SQL]]
← [[SQL Hands-On Practice- Solve Business Problems]] | **3 of 5** | [[Using SQL with Python]] →

## Appears In

- [[SQL Hands-On Practice]]
- [[Advance Your Skills in SQL]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis
- [[SQL for Data Analysis]] — SQL, Data Analysis

---

[↑ Back to top](#)