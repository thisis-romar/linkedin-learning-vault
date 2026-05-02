---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-data-reporting-and-analysis-18082247
url: "https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247"
duration_minutes: 155
duration: 2h 35m
level: Intermediate
updated: 6/20/2025
learners: 65707
skills:
  - Data Analysis
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQErQCI8JKTS1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1657907586123?e=2147483647&amp;v=beta&amp;t=h2eQek84NuKGD3zxsesp7WahjOHn6pPOPUzykC5wHko"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]'
  - '[[Become a Data Analyst]]'
  - '[[Master SQL for Data Science]]'
prev_courses:
  - '[[Predictive Analytics Essential Training- Data Mining]]'
  - '[[Tableau 2024.1- Essential Training]]'
  - null
next_courses:
  - '[[Power BI Data Methods]]'
  - '[[Complete Guide To R Wrangling Visualizing And Modeling Data]]'
  - '[[Intermediate SQL- Data Reporting and Analysis]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation","position":7,"total":9,"prev":"Predictive Analytics Essential Training- Data Mining","next":"Power BI Data Methods"},{"path":"Become a Data Analyst","position":10,"total":12,"prev":"Tableau 2024.1- Essential Training","next":"Complete Guide To R Wrangling Visualizing And Modeling Data"},{"path":"Master SQL for Data Science","position":1,"total":6,"prev":null,"next":"Intermediate SQL- Data Reporting and Analysis"}]'
path_count: 3
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL-%20Data%20Reporting%20and%20Analysis.md)

![SQL: Data Reporting and Analysis](https://media.licdn.com/dms/image/v2/C4D0DAQErQCI8JKTS1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1657907586123?e=2147483647&amp;v=beta&amp;t=h2eQek84NuKGD3zxsesp7WahjOHn6pPOPUzykC5wHko)

# SQL: Data Reporting and Analysis

> Do you rely on IT to get the data you need? Are you often stuck waiting in line for data, and wish you could just retrieve it yourself? In this course, learn how to get the data you want by writing a bit of SQL code. You won't just be able to pull data out of the database, you'll be able to manipulate it—merging it, grouping it, and relabeling it to get just the report you want. Join Emma Saunders

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247) | 2h 35m | Intermediate | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Don't let your reporting system hold you back](#dont-let-your-reporting-system-hold-you-back)
  - [Who this course is for](#who-this-course-is-for)
  - [What is SQL?](#what-is-sql)
- [**1. Prepare to Code in SQL**](#1-prepare-to-code-in-sql) (3 videos)
  - [Get familiar with phpMyAdmin](#get-familiar-with-phpmyadmin)
  - [Understand the demo database](#understand-the-demo-database)
  - [Using ChatGPT to check SQL code](#using-chatgpt-to-check-sql-code)
- [**2. Use SQL to Report Data**](#2-use-sql-to-report-data) (12 videos)
  - [Retrieve data with SELECT](#retrieve-data-with-select)
  - [Filter results with the WHERE clause](#filter-results-with-the-where-clause)
  - [Use LIKE, IN, and wildcards with WHERE](#use-like-in-and-wildcards-with-where)
  - [Sort SQL results with ORDER BY](#sort-sql-results-with-order-by)
  - [Use string functions on your data](#use-string-functions-on-your-data)
  - [More advanced string functions](#more-advanced-string-functions)
  - [Change report headings with an alias](#change-report-headings-with-an-alias)
  - [Use date functions with WHERE](#use-date-functions-with-where)
  - [Challenge: Query a table](#challenge-query-a-table)
  - [Solution: Query a table](#solution-query-a-table)
  - [Challenge: Convert case](#challenge-convert-case)
  - [Solution: Convert case](#solution-convert-case)
- [**3. Group Your SQL Results**](#3-group-your-sql-results) (6 videos)
  - [Use GROUP BY with count](#use-group-by-with-count)
  - [Filter grouped results with HAVING](#filter-grouped-results-with-having)
  - [Deduplicate with SELECT DISTINCT](#deduplicate-with-select-distinct)
  - [Merge rows with GROUP BY](#merge-rows-with-group-by)
  - [Challenge: Cost analysis](#challenge-cost-analysis)
  - [Solution: Cost analysis](#solution-cost-analysis)
- [**4. Merge Data from Multiple Tables**](#4-merge-data-from-multiple-tables) (10 videos)
  - [Make your queries faster](#make-your-queries-faster)
  - [Understand SQL indexes and keys](#understand-sql-indexes-and-keys)
  - [EDIT: Visualize your database](#edit-visualize-your-database)
  - [Merge data across tables with JOIN](#merge-data-across-tables-with-join)
  - [Understand SQL JOINS](#understand-sql-joins)
  - [Combine rows with SQL UNION](#combine-rows-with-sql-union)
  - [Merge data across tables with IN](#merge-data-across-tables-with-in)
  - [Select from a selection with subqueries](#select-from-a-selection-with-subqueries)
  - [Challenge: Join tables](#challenge-join-tables)
  - [Solution: Join tables](#solution-join-tables)
- [**5. More Advanced SQL**](#5-more-advanced-sql) (4 videos)
  - [Save your queries using a VIEW](#save-your-queries-using-a-view)
  - [Use variables](#use-variables)
  - [Use functions](#use-functions)
  - [Use procedures](#use-procedures)
- [**Continuing Your SQL Learning Journey**](#continuing-your-sql-learning-journey) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Don't let your reporting system hold you back](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=0)** - [Emma] If your reporting system is holding you back [[SQL]] could help.
>
> **[0:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=4)** This course will teach you to access data directly from your database, merging tables and reporting exactly the data you want.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=11)** It's much quicker than downloading it and then manipulating in [[Microsoft Excel|Excel]] or Access.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=17)** SQL can also be used in the advanced settings of many reporting systems.
>
> **[0:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=21)** Luckily it's intuitive even for non-programmers.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=25)** My name is Emma Saunders, and I've worked with data and [[Databases]] for more than 20 years.
>
> **[0:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=30)** I'm going to teach you the SQL you need to build reports including grouping, filtering, and analyzing.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/don-t-let-your-reporting-system-hold-you-back?u=76281980&t=37)** So let's get reporting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Excel|Excel]] (1), [[Databases]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - [emma] (1)

#### [Who this course is for](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/who-this-course-is-for?u=76281980&t=0)** - [Narrator] This course is aimed at technically able business people rather than IT staff.
>
> **[0:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/who-this-course-is-for?u=76281980&t=5)** You don't need previous programming experience to follow along.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/who-this-course-is-for?u=76281980&t=9)** You don't need to know how a database works, and you don't need any special software or machinery.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/who-this-course-is-for?u=76281980&t=14)** You just need an interest in data and analysis, and an internet connection, which I'm guessing you already have.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [What is SQL?](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=0)** - [Instructor] [[SQL]] stands for Structured Query Language and it's used to retrieve data from [[Databases]].
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=6)** You'll often hear people refer to SQL as sequel.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=9)** When we talk about databases, in this course, we mean [[Relational Databases]].
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=13)** They can be thought of like a spreadsheet, in that they have tables and columns.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=18)** Relational databases are the most popular kind and they've been around since 1970.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=23)** Now, there's some good news and some bad news.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=25)** The bad news is that there are lots of versions of SQL.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=28)** In fact, each company that makes database software, such as Oracle or [[Microsoft]], uses a slightly different version of SQL.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=36)** The good news is that they're all similar at a basic level and this course covers all the main ones, Oracle, Microsoft, [[PostgreSQL]], and [[MySQL]].
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=45)** There is an ISO standard that acts as a template for these vendors.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=48)** In fact, there's nine, I think, and this blog post is a good place to start if you're interested in that.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=55)** Within each type of SQL, there are some different versions, as the language has changed over the decades.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=61)** For Microsoft, I've tested my queries against [[Microsoft SQL Server|SQL server]] 2017.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=66)** For Postgre I've used 9.6.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=68)** for Oracle I've used 11g Release 2.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=71)** And if you are using the demo MySQL database, then I'm using version 8.03.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=77)** If you're using a slightly different version, it's possible that there will be differences with this course, but those should be small.
>
> **[1:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=83)** We're going to be using an online demo database for this course and I'm going to show you how to find it.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=89)** There's a reason I'm doing this rather than giving you a permanent link.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=92)** And there it is, sakila try phpMyAdmin.
>
> **[1:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=95)** That's the name of the software, web-based software that we're going to use.
>
> **[1:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=100)** So a [[Microsoft Word|word]] of warning here.
>
> **[1:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=102)** Anyone across the whole world can access and alter this database, including deleting the entire thing.
>
> **[1:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=108)** They can also move it.
>
> **[1:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=110)** I believe that the database is recreated each day so it's possible one day that you try and find a database or a table within it, and you can no longer see it.
>
> **[2:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=120)** If this happens, try a few hours later or the next day.
>
> **[2:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=124)** Don't consider this link to be a permanent link.
>
> **[2:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=127)** It's best that you [[Google]] for yourself in case the link address changes.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=131)** If the entire database is unavailable, come up here where it says Current server, top left, and change to MariaDB.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=140)** And that should work just as well.
>
> **[2:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=142)** You don't need to use the demo database.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=144)** You can follow along with your own company database.
>
> **[2:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=147)** You'll have to adapt the queries and listen out when I tell you that the keywords or syntax differs between different versions.
>
> **[2:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=154)** If this is you, it will be useful for you to know which version or which type of SQL you're using or which vendor has made the database.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=161)** You can't always tell by looking at the reporting system.
>
> **[2:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=164)** You could be using a Microsoft reporting system that's connected to an Oracle database.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=169)** We can find out typically using code, but unbelievably, there is no simple command that works across all types of SQL, so we have to do some detective work.
>
> **[2:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=179)** First of all, work out where to run your queries.
>
> **[3:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=182)** In phpMyAdmin, that is under the SQL tab here.
>
> **[3:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=187)** Then you can try select version
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=195)** and click go, and you can see the version is returned here as 8.03.
>
> **[3:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=201)** Now, if select version works, you'll be using MySQL or Postgre, because those commands only work in those types.
>
> **[3:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=209)** And if you get a number of around 12, you're using Postgre, and a number around eight you're using MySQL.
>
> **[3:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=216)** If that doesn't work, try select @@version.
>
> **[3:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=220)** And if that works, you're using Microsoft.
>
> **[3:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=222)** And if that still doesn't work, try select star from the dollar version.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=227)** And if that works, you're using Oracle.
>
> **[3:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=230)** If none of these has worked, you could be using a database from another vendor.
>
> **[3:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=235)** And there's quite a handy list of relational [[Database Management]] systems here on Wikipedia.
>
> **[4:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=242)** As you can see, there's an awful lot of them.
>
> **[4:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/what-is-sql?u=76281980&t=245)** If you can, try asking your IT department which system is yours, or follow along using the demo site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Microsoft]] (5), [[MySQL]] (4), [[Databases]] (2), [[Relational Databases]] (2)
> **Env Vars:** sql (9), iso (1)
> **CLI Commands:** mysql (4), find (3)
> **Versions:** 9.6 (1), version 8 (1), 8.03 (1)
> **Definitions:** stands for (1), is an  (1), is a  (1)
> **Code Identifiers:** phpmyadmin (2)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)


### 1. Prepare to Code in SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Get familiar with phpMyAdmin](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=0)** - [Instructor] You already know that we are going to use a demo database online, and to find that we can [[Google]] demo Sakila database in any order, and there it is.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=12)** The reason I'm asking you to Google, instead of giving you a permanent link is because sometimes the link changes.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=18)** This is a free resource to help people learn and use [[SQL]].
>
> **[0:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=22)** So, here, is the demo that we are going to be using.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=25)** Let's have a look around the screen.
>
> **[0:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=26)** In the top left, we have a logo for phpMyAdmin.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=31)** This is the name of the software that we're going to use.
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=34)** I'm not sure who named it.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=35)** It doesn't trip off the tongue, but it is an open source database software that you can actually download and use on any database that you like.
>
> **[0:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=43)** If we look at the top left, where it says current server, underneath there's a dropdown.
>
> **[0:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=49)** Dropdown gives us two options.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=51)** They're both demo [[Databases]].
>
> **[0:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=53)** One says Maria DB, and the other one says [[MySQL]], and I just want to show you something in Maria DB.
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=60)** On the left here, are a list of all of the databases available.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=65)** And you can see that the Sakila database is available in Maria DB.
>
> **[1:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=69)** Now, we're not going to use that one.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=71)** We're going to use the Sakila database in the MySQL server, but if you were to turn up one day and not be able to find the Sakila database in MySQL, you could change the current server to be Maria DB, and your queries ought to work exactly the same.
>
> **[1:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=88)** Maria DB and MySQL are virtually identical.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=91)** This database list on the left will change all the time because remember that anyone in the whole world can edit this database.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=99)** We want the Sakila database, which I've clicked, and you can tell I've clicked it because there's a breadcrumb bar at the top, and it says server, demo MySQL, within which database equals Sakila.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=111)** So, we have now selected the Sakila database.
>
> **[1:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=115)** Along the top, underneath the breadcrumb bar, we can see a number of tabs, structure, SQL, search query, et cetera.
>
> **[2:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=121)** The main ones we are going to be using are the structure and SQL tabs and a third tab called browse, which we shall see in a minute.
>
> **[2:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=129)** The structure tab is really important.
>
> **[2:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=132)** At the moment, it's listing all of the tables and views that occur within the Sakila database, but it's context dependent.
>
> **[2:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=141)** So, if we click on the actor table, we are then taken to a browse tab, but if we go back to the structure tab you can see it's changed substantially.
>
> **[2:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=151)** And now, instead of listing all the tables in the database, it lists all the fields in the table.
>
> **[2:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=156)** So, it's drilled down for us, and the breadcrumb bar reflects that too.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=161)** Within the Sakila database it tells us we have now selected the actor table.
>
> **[2:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=165)** So, this breadcrumb bar is really helpful to stop you getting lost.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=169)** Now, in the structure tab, we can see that we have four fields in the actor table, actor ID, first name, last name, and last update.
>
> **[2:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=178)** If we go back to the browse tab, you can see these field names shown again.
>
> **[3:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=183)** This time they're shown horizontally instead of vertically, actor ID, first name, last name, last update.
>
> **[3:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=189)** The purpose of the browse tab is to let you see the actual data inside of the table.
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=195)** So, under these field names, we can see names, IDs, and dates in the respective columns.
>
> **[3:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=203)** The final tab to look at is the SQL tab, which is where we enter our queries and run them by clicking go.
>
> **[3:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=210)** So, that's a really quick tour of phpMyAdmin, which is the interface we're going to use in this course.
>
> **[3:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/get-familiar-with-phpmyadmin?u=76281980&t=216)** Coming up we take a quick look at the Sakila database, which is populated with fake data, and I'll explain to you what that fake data is meant to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[SQL]] (4), [[Google]] (2), [[Databases]] (2)
> **CLI Commands:** mysql (5), find (2)
> **Env Vars:** sql (4)
> **Cross-References:** go back to (2), coming up (1)
> **UI Navigation:** dropdown (2), click on (1)
> **Code Identifiers:** phpmyadmin (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Understand the demo database](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=0)** - [Instructor] Sukila database contains fake data for a DVD rental store.
>
> **[0:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=5)** So this was created in 2006, back in the day when you would physically go to a shop, look at a selection of DVDs on a shelf, and take one home and watch it.
>
> **[0:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=16)** Some of the tables that are in here we would entirely expect of a sort of retail business model.
>
> **[0:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=22)** So there's a table on stores or shops data.
>
> **[0:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=27)** There's a list of staff, and we have a customer table, which contains obviously customer name, whether that customer is still active, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=38)** Then we have a series of more frequently updating tables.
>
> **[0:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=41)** We have the infantry table, which is a stock check effectively, payment table for transactions, and a rental table, which ties lots of these other data points together.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=52)** So this one will tell you which customer rented which film on which date.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=57)** So far so ordinary, but the Sukila database is quite a lot more powerful than that.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=61)** It contains a lot of extra data about the movies themselves.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=66)** We can tell from this database, which actors played a part in which film, what type of film the film is.
>
> **[1:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=74)** So is it a comedy or horror?
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=76)** Even what language the film was originally recorded in.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=81)** So the Sukila database would let you identify which customers had ever rented a comedy in Japanese containing a particular actor.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=89)** Altogether, pretty powerful.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-the-demo-database?u=76281980&t=91)** So let's get running some queries on it.

> [!info]- Semantic Content
>
> **Env Vars:** dvd (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using ChatGPT to check SQL code](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=0)** - [Instructor] The days of posting questions into a forum and waiting hopefully and hopelessly for a response are gone, you'll be pleased to know.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=9)** If you haven't got into [[ChatGPT]] yet or any other Large Language Model, it can really help you on your learning journey.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=17)** It is the ultimate patient teacher; it never gets crossed with you, never gets frustrated.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=23)** It's not 100% right all of the time, but if you enter into a conversation with ChatGPT, it will get you to the right answer, I would say about 95% of the time, and it can write code.
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=34)** So what's not to like?
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=36)** I'm going to demonstrate a couple of these things for you.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=38)** Now, let's say that we have a join query.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=73)** And don't worry if this looks hopelessly complicated, the course will cover this.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=77)** So this is what we call a join and it's something people often get their table aliases, that's these things, a bit confused.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=85)** So we say select the person name from table A, left join to table B, and then we give it the thing to join on.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=96)** Now, I've introduced as deliberate mistake.
>
> **[1:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=103)** The mistake that I introduced is on the join, it should say A.personID=B.personID.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=111)** This is how we are linking the two tables together.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=113)** You don't need to understand DSQL for the purpose of this video, okay?
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=118)** But I just want you to see that ChatGPT has identified that issue straight away.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=122)** It's given you a good explanation of why this couldn't work, because, of course, this will always hold true just like one equals one and two equals two, and then it's even giving you a probable fix, even though it hasn't seen the table and it doesn't know the structure, it has inferred the table structure from your query and given you something super useful to work with.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=144)** Okay, I'm going to try one more, which I'm going to copy-paste, 'cause I couldn't be sure of remembering it in the correctly wrong way, if you see what I mean.
>
> **[2:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=159)** I tend to be polite with ChatGPT just in case the robot revolution comes.
>
> **[2:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=162)** But you can be very direct.
>
> **[2:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=165)** The query here has a mismatch between the alias in the subquery and what you're trying to select in the outer query.
>
> **[2:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=171)** Okay, you've renamed first name to FN, and you either need to do this or this.
>
> **[2:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=178)** I mean, how helpful is that?
>
> **[3:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/using-chatgpt-to-check-sql-code?u=76281980&t=180)** Not to say you don't need this course, you still definitely need this course to understand the basics of [[SQL]] and why the language is structured the way it is, but this is your number one super helpful learning companion, and I urge you to get on board with ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[SQL]] (1)
> **Code Identifiers:** personid (2)
> **Env Vars:** dsql (1), sql (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Use SQL to Report Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Retrieve data with SELECT](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=0)** - [Instructor] When you ask a database to give you some data, you write a piece of code called a query and that's the queue in [[SQL]].
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=7)** To retrieve data from a database, we use what's called the SELECT query.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=11)** So if I click on the actor table there, you can see that the database has run its own query for us.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=18)** SELECT * FROM actor.
>
> **[0:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=21)** SELECT queries always take the basic form, SELECT field name FROM table name.
>
> **[0:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=27)** And the asterisk there just means all.
>
> **[0:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=30)** So this means SELECT ALL FIELDS FROM actor.
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=34)** And we know from what we've seen previously that the four fields we can see here horizontally are indeed all of the fields available in the actor table.
>
> **[0:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=43)** So our query has worked.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=45)** Although, we can see all four fields, we can only see 25 rows.
>
> **[0:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=50)** You see it says 25, KEVIN BLOOM.
>
> **[0:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=54)** And if we go up in the yellow bar with a little tick, it says showing rows 0 to 24 of 200 total.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=62)** So there's 200 rows in this table, but the database is only showing us the first 25.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=68)** Notice that it says here 0 to 24, and not 1 to 25.
>
> **[1:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=74)** This is called zero indexing.
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=76)** And it means that the database starts counting at 0 instead of 1.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=81)** So even though the data in the table, the actor ID data says 1, 2, 3, and so forth, up to 25, the database itself counts these rows in a way that isn't shown here on the screen, from 0.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=97)** Let's change this query.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=99)** So click Edit in line, if you haven't already, and replace the * with first name.
>
> **[1:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=105)** So you have SELECT first_name FROM actor.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=111)** And I'm going to just pop the FROM section of this query onto another line.
>
> **[1:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=117)** You can keep it all on the same line, if you like.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=119)** I just think it's easier to see the query, the parts of the query that way.
>
> **[2:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=124)** So our screen changes when we click Go.
>
> **[2:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=126)** Because instead of seeing all four rows now, all four fields, sorry, we can only see one, which is the first name column.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=134)** Now, we can click Edit in line again and say SELECT first_name, last_name.
>
> **[2:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=141)** And can you see it's offering us field names that we might want to use, and I've just pressed Tab to take advantage of that.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=148)** So we've now got SELECT first_name, last_name FROM actor.
>
> **[2:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=152)** Then we click Go.
>
> **[2:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=154)** And unsurprisingly, perhaps, we now have two fields showing.
>
> **[2:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=158)** And you can see how the fake data works here, by the way, because we have PENELOPE GUINESS here, which, I think, the real actor would probably be Alec Guinness.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=167)** So they've scrambled the first and last names of different actors in this database.
>
> **[2:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=172)** We can select or retrieve as many fields as we want to, by the way, just by listing all the fields with commas in between them, as we've done here.
>
> **[3:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=180)** Now notice that the actor table is enclosed in back ticks.
>
> **[3:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=185)** This is an oddity of [[MySQL]].
>
> **[3:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=189)** Back ticks aren't the same as single quotation marks or apostrophes, by the way.
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=195)** On a Mac, you find the back tick, bottom left, just below the tilde sign of your keyboard.
>
> **[3:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=202)** They are optional here.
>
> **[3:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=205)** And I want to try and quote the queries in this course without back ticks in them, because that way, the queries will work across [[Microsoft]] Oracle, MySQL, and [[PostgreSQL]].
>
> **[3:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=219)** Back ticks should be used in MySQL, where the table name has a special character or a space or a carriage return, or uses a reserved [[Microsoft Word|word]] such as date in the table name, because those things would confuse the database.
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=233)** So if we had say an @ sign there, and the database maybe would get confused.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=237)** In MySQL, you would use back ticks to quote your system identifier, that's the proper name for it, your table name.
>
> **[4:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=246)** And that tells that MySQL database that anything inside the back ticks is the table name.
>
> **[4:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=252)** And we don't want to do anything special with our query.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=254)** It's just a table name that we're using.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=256)** If you're using Microsoft, you quote your system identifies using square brackets.
>
> **[4:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=263)** And if you're using PostgreSQL, you quote them using double quotation marks.
>
> **[4:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=270)** This is compliant with the standard, actually, the way that Postgre does it.
>
> **[4:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=273)** Now, from what I've read, Oracle also uses double quotation marks.
>
> **[4:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=278)** But when I have tried to make that work in my own testing, it hasn't worked properly.
>
> **[4:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=284)** So in this course, we're going to try avoiding using any system identifiers.
>
> **[4:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=290)** And we're just going to use the table names like that.
>
> **[4:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=293)** Where possible, if you are creating a database, don't use any special characters, whitespace symbols, or reserve names when naming your tables because it makes the whole thing really complicated.
>
> **[5:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=304)** But if you didn't create the database that you are using, you'll have no choice.
>
> **[5:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=308)** And then it's good to know how to quote system identifies for your version of SQL.
>
> **[5:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=314)** Notice also that I've capitalized the keywords here, SELECT and FROM, and it's just to show the structure of the query more clearly.
>
> **[5:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=323)** They can all be lowercase, and it works perfectly well.
>
> **[5:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/retrieve-data-with-select?u=76281980&t=326)** So coming up, we're going to look at how to filter our new query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[SQL]] (2), [[Microsoft]] (2), [[PostgreSQL]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** select (9), sql (2), fields (1), kevin (1), bloom (1)
> **SQL:** select (9)
> **CLI Commands:** mysql (5), find (1), make (1)
> **Code Identifiers:** first_name (3), last_name (2)
> **Definitions:** is called (1), means that (1), is an  (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** click on (1)

#### [Filter results with the WHERE clause](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=0)** - [Instructor] So far, we've changed the number of fields in our query, but we've always returned all 200 rows, but what if we only wanted to see particular actors, such as those whose name starts with Penelope, then we would place a filter on the data using the WHERE keyword.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=17)** Going to say WHERE first name equals Penelope and hit Go, and we see we have four rows this time, instead of 200, and it's still showing the two fields or columns that are in the SELECT part of our query, and now what if we wanted all actors except those called Penelope.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=38)** For that, we need a not operator, which can be a less than, followed by a greater than sign.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=45)** Let's hit Go.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=46)** So now we've got 196 rows, which sounds about right and in all versions of [[SQL]] that this course covers, you could also use an exclamation mark, followed by an equals sign.
>
> **[0:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=56)** That is also a not operator.
>
> **[0:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=59)** Now let's have a look at this query.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=61)** Notice that the [[Microsoft Word|word]] Penelope is within single quotation marks.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=65)** Single quotes are needed to enclose text, and they're not the same as the back ticks that we saw earlier, and they're not the same as double quotation marks either.
>
> **[1:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=75)** These things all have different meanings in the world of [[Databases]].
>
> **[1:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=79)** Back ticks were optional earlier around the table name actor but leaving out the single quotation marks on the word Penelope is not an option.
>
> **[1:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=88)** Without quotation marks, your database will think that Penelope is a command like SELECT or FROM, or it might think that it's a field name, and then it will throw an error.
>
> **[1:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=98)** So if we take them out and click Go, hey, Presto.
>
> **[1:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=104)** There's that error. So let's pop 'em back in.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=109)** Some types of SQL can accept single or double quotes here, and other types will only accept single quotes, and I believe the standard says only to use single quotes.
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=118)** So that is good practice, to get into the habit of just using that.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=122)** Now, what if we want to filter on something other than a string or text.
>
> **[2:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=126)** Perhaps, we want to see all actors with an ID of less than five, and we would write that like that.
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=135)** Now, there's lots of new operators you can use with numeric data types.
>
> **[2:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=139)** So we've just used less than.
>
> **[2:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=141)** We could have less than or equal to, like so, and greater than or equal to is similarly a greater than sign, followed by an equals sign.
>
> **[2:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=150)** If we wanted a range of numbers here.
>
> **[2:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=152)** Let's just add actor ID into our field list, so we can see what we're getting.
>
> **[2:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=158)** If we wanted a range of numbers here, we could do that in two different ways.
>
> **[2:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=163)** The first way would be to say, we have an actor ID of, say, greater than three, AND, an actor ID of less than five.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=173)** Now, notice we've had to repeat the field name in each section of our WHERE clause there, and we hit Go, and we just get the one row back with the ID of 4.
>
> **[3:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=184)** Now, the other way of doing this, which I personally never use, is to say WHERE, actor ID, BETWEEN 3 AND 5, and you might think that would give us the same result set that we already have down here, but actually it doesn't.
>
> **[3:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=200)** So when we use BETWEEN and AND, the numbers are inclusive.
>
> **[3:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=204)** We get IDs 3, 4 and 5 back, and that ambiguity is why I avoid using BETWEEN and AND because I feel it's more precise just to use the operators and the AND.
>
> **[3:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=215)** Now, notice that we've not needed any quotation marks or indeed, anything at all around the numbers, and numeric values never need anything around them, in any form of SQL.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=227)** We can also make up our filters using the OR statement as well as the AND statement.
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=233)** So if we go back to first name is Penelope, we can say OR actor ID is less than five, and you can tack on as many AND and OR statements as you like, or first name equals Nick.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=256)** Now, we had seven rows returned previously, and we're adding an OR.
>
> **[4:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=260)** So we'd expect that number to go up, and we found indeed two Nicks there.
>
> **[4:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=265)** We've added two Nicks, I should say, 'cause we've now got nine rows back.
>
> **[4:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=270)** Do be careful when combining ANDs and ORs because you can get yourself in a muddle pretty quickly, and the way to get around this is to use brackets around part of your code, and what this does is it separates your query into sections which run independently of each other.
>
> **[4:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=290)** This query is using an OR and an OR.
>
> **[4:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-results-with-the-where-clause?u=76281980&t=292)** Putting the brackets here, actually, makes no logical difference at all, but once we start mixing ORs with ANDs, it makes the world of difference, and we'll see more on this later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Word|Word]] (2), [[Databases]] (1)
> **Env Vars:** where (4), sql (3), between (3), select (2)
> **SQL:** where (4), select (2)
> **Cross-References:** go back to (1), later in (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)

#### [Use LIKE, IN, and wildcards with WHERE](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=0)** - [Instructor] Here we have a query, select star, select all fields, from the actor table where the first name is Penelope or Nick or Ed.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=9)** And as you know, we have to repeat the column name which is a bit tedious for each of our filter conditions.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=15)** And this query returns us 10 rows as you can see up here.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=18)** There is a quicker way of doing this and that's to use the in keyword.
>
> **[0:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=22)** So where first name in, and then Penelope, Nick, Ed and that's a lot quicker to type it out.
>
> **[0:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=32)** And you can see it returns us the same 10 values there.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=36)** Note from this query that we have single quotation marks around each of these names because they're all text items.
>
> **[0:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=43)** So they all need their single quotes.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=46)** So in means matches any of the following and you could also have, or alternatively have not in which gives us 190 rows, which makes sense, doesn't it?
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=57)** That 190 and 10 adds up to the 200 rows that we know are in that actor table.
>
> **[1:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=63)** You can put as many values as you like in these parentheses, by the way, as long as they're separated by commas.
>
> **[1:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=69)** [[SQL]] will also let you use wild cards to match part of a text.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=73)** So let's say we wanted any actor whose name begins J O H N.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=81)** Then we could say like [[John the Ripper|John]], and then use the percent sign.
>
> **[1:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=87)** Now that's returned us three rows, a John and two Johnny's.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=92)** So you can see at once that the percent sign is quite a flexible operator.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=96)** It will match there being nothing at all after the N, and also, it will match two letters or indeed, an almost infinite number of letters after the N.
>
> **[1:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=105)** So the percent sign will match anything.
>
> **[1:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=108)** There's another wild card character for matching just a single letter and that's the underscore.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=114)** So if we change this to Jane, so J, spelled like that, so the underscore is in the middle between the A and the N.
>
> **[2:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=123)** And you can see that's returned us three Jaynes with a Y.
>
> **[2:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=128)** The underscore is a bit more restrictive.
>
> **[2:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=130)** It will match any kind of character, but there has to be one there.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=134)** It won't match a blank.
>
> **[2:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=136)** So if I were to change that to like Jane without a wild card, which is the same as saying equals, by the way.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=143)** I'll prove it to you by running it.
>
> **[2:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=145)** You can see there is a Jane, Jane Jackman without a Y in the database and that was not returned when we used the underscore.
>
> **[2:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=153)** If we had used the percent sign there instead, it would've returned us all four Janes with, or without Y's.
>
> **[2:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=162)** One thing to note is that you can't combine like with in and it really feels like you should be able to.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=169)** It feels quite tempting to write where first name in, and then Penelope percent, or let's use the ones we know now, John percent or Jane.
>
> **[3:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=187)** We need some single quotes there.
>
> **[3:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=191)** That feels like we ought to be able to do that.
>
> **[3:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=194)** And it doesn't throw us an error but neither does it give us any useful results.
>
> **[3:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=198)** Because we haven't used the like keyword, the database has actually searched for a string that is Penelope percent and of course, it hasn't found one.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=207)** If you're using Oracle or [[Microsoft]], there is a function called contains that achieves this effect, combining like with in, but sadly, that's not part of [[MySQL]].
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=217)** Now let's look at combining and's and or's.
>
> **[3:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=220)** We're going to run this query on the address table rather than the actor table but we don't need to click on the table name to run it.
>
> **[3:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=232)** Here, we returned three rows.
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=233)** Let's just have a look at that query.
>
> **[3:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=236)** Select everything from the address table where the district is Buenos Aires and the address is either like EL with anything on the either side or like AL with anything on either side.
>
> **[4:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=249)** So we're filtering on the address column and that's this one here.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=254)** And we can see in the first row, we have El Alto Avenue.
>
> **[4:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=257)** In fact, that one would match on both criteria, wouldn't it?
>
> **[4:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=261)** 'Cause it's got an el and an al.
>
> **[4:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=263)** This one's got an al and another al and Dallas Manor has an al in there, which is lowercase, incidentally but still matches this setting.
>
> **[4:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=273)** So these sorts of inquiries are case insensitive but I have come across situations where they're not case insensitive, particularly with [[PostgreSQL]] and I'm not sure whether that's a setting of the database or a feature of the language, but take care.
>
> **[4:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=285)** If you're not using MySQL, the case might matter.
>
> **[4:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=289)** Notice that we've used brackets or parentheses around our or condition.
>
> **[4:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=293)** Without brackets, the database will read and apply the filters in the order they appear.
>
> **[4:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=297)** So let's take them off.
>
> **[5:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=300)** Remember that we've returned three rows here.
>
> **[5:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=303)** And now we've returned 73 rows.
>
> **[5:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=307)** And if we look at the district, you can see lots of the districts are not Buenos Aires.
>
> **[5:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=312)** We're all over the world here, aren't we?
>
> **[5:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=314)** Khartum, Missouri, Uttar Pradesh.
>
> **[5:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=318)** The database has lumped the where and the and together.
>
> **[5:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=323)** So it's returned any row that has a district of Buenos Aires and an address like el, then the database has applied the or.
>
> **[5:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-like-in-and-wildcards-with-where?u=76281980&t=332)** So a row is returned if the address contains AL, regardless of whether the district is Buenos Aires.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (3), [[MySQL]] (2), [[SQL]] (1), [[Microsoft]] (1), [[PostgreSQL]] (1)
> **Definitions:** is a  (5)
> **CLI Commands:** mysql (2)
> **Env Vars:** sql (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Sort SQL results with ORDER BY](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=0)** - [Instructor] Earlier we ran this query.
>
> **[0:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=2)** Select first name, last name from actor, where first name is Penelope.
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=6)** And we have our four results there.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=9)** Now, if you look at the last name shown, they appear to be in a random order.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=14)** In fact, they're given to us in the same order that they appear in the table.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=18)** And to make that a bit more obvious, let's add in actor ID and you can see the actor ID is in order.
>
> **[0:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=27)** Rows in the database are typically in the order they were entered.
>
> **[0:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=30)** So data that's entered later is lower down in the table, but that's no good to us.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=35)** We don't care when the name was added to the database.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=38)** We want to sort our results alphabetically on last name.
>
> **[0:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=42)** And to do that, we use the order by keyword.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=45)** I'll say order by last name and then ask for ascending, and press go.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=51)** And there we have, that's better CGMP.
>
> **[0:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=53)** So that's worked.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=55)** Note that we put the filtering clause where before the order by clause.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=62)** [[SQL]] requires you to write your queries in a particular order.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=65)** It doesn't mind if you have random spaces between words like this, or you can have extra carriage returns.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=71)** It's not fussy about any of that, but it does mind that the query is written in the right order.
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=76)** So from now on, in this course, we will be using this standard setup for select statement, select fields, from table, where any filter, which might include some ands and some ors, and then order by followed by ask or desk, by the way, if you wanted it to be descending.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/sort-sql-results-with-order-by?u=76281980&t=97)** Every select statement we look at now will be a variation on this theme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** cgmp (1), sql (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Use string functions on your data](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=0)** - In this section we're going to look at string functions.
>
> **[0:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=3)** A function is just a formula, and string just means text.
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=6)** So a string function is a formula that you can use on text.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=11)** [[SQL]] provides lots of functions to manipulate your data, which saves you having to download it and then manipulate your data in [[Microsoft Excel|Excel]] or some other package.
>
> **[0:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=21)** But it's really important to know which data type you're dealing with because some of the functions will only work on numbers or dates or strings.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=29)** And we are focusing ourselves on strings here.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=31)** So the first one we're looking at is length, and like most functions or formulas, you use the function name, which can be in upper or lower case, then parenthesis, and the thing you're trying to measure, typically a field name, goes inside the brackets.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=46)** So if we click go, we can see Penelope has eight characters, Nick has four, Ed has two, et cetera.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=52)** Notice that if you're using [[Microsoft]] the function is LEN and not LENGTH.
>
> **[0:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=58)** So using this function has created us a whole new column.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=62)** We have the original column, which is a field, first_name, and then we have this second column which processes information from the first one.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=71)** It's kind of synthetic data.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=73)** And it's quite normal for SQL queries and reports indeed that you may wish to run to return only synthetic data.
>
> **[1:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=80)** Data that describes other data that's in the tables.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=85)** Another common string function is CONCAT.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=89)** And CONCAT joins together two bits of text.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=92)** So if we can concatenated rain and bow, we would get rainbow.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=96)** So here we can say CONCAT first_name, and then we'll put a space in using single quotes, and then last name.
>
> **[1:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=106)** So we're going to return the full name from actor. There we go.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=109)** Penelope Guinness, Nick Wahlberg, et cetera.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=113)** Notice that with Oracle, you can only put two parameters, two arguments into the brackets.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=119)** So this wouldn't work in Oracle because we have three parameters here, even though one of our parameters is only a space and not even a field.
>
> **[2:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=127)** That would fall over in Oracle.
>
> **[2:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=129)** But all is not lost because Oracle, Postgre and Microsoft all offer a shortcut for CONCAT.
>
> **[2:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=136)** Instead of using the [[Microsoft Word|word]] CONCAT, you can use special symbols to indicate that you want to join the text together.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=143)** So in Oracle and Postgre it's a double pipe, and in Microsoft it's a plus sign, like so.
>
> **[2:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=154)** And then you can put as many parameters in as you want.
>
> **[2:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=158)** We can also combine string functions by placing one inside the other.
>
> **[2:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=162)** So let's combine the two we've already seen.
>
> **[2:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=165)** SELECT CONCAT, and I'm copying that expression and pasting it to save a bit of time and the inevitable typos.
>
> **[2:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=174)** Okay, so we've got select full name basically, and length of full name.
>
> **[2:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=179)** So Penelope Guinness has 16, et cetera.
>
> **[3:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=184)** We can still use order by on this query by the way.
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=188)** Order by will work on numeric or text or date.
>
> **[3:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=191)** It works out which data type it's dealing with and orders accordingly.
>
> **[3:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=196)** Now when we ordered last time we just did it on a field name.
>
> **[3:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=199)** Something like order by first_name, which we could still do here.
>
> **[3:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=204)** But it might be more interesting to order by the number of characters, for example.
>
> **[3:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=209)** And there we could just copy and paste this expression down here and then put, say, descending, which is a quick way of finding out what's the longest name in the database.
>
> **[3:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=221)** Michelle McConaughey, with 20 characters.
>
> **[3:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=224)** There are quicker ways of doing this by the way, with slightly more advanced SQL which we will come onto.
>
> **[3:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=230)** The different types of SQL have different string functions available by the way.
>
> **[3:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=234)** And they can vary quite wildly so if you're not using [[MySQL]], or even if you are in fact it's a good job to [[Google]] string functions followed by your database vendor name, Oracle, Microsoft, et cetera.
>
> **[4:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=248)** So let's have a look at some more common string functions UPPER and LOWER, which change the case of our strings.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=256)** You might have noticed in the actor table that all the actor names were given in upper case.
>
> **[4:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=262)** So let's say LOWER first_name.
>
> **[4:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=267)** And there we can see Penelope in lower case.
>
> **[4:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=271)** It's more likely though that you'd want to return proper case where the first letter of each word is capitalized.
>
> **[4:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=277)** In Oracle and Postgre you could do INITCAP, but sadly that's not available in the other two.
>
> **[4:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=283)** So for those, we would have to use LEFT and RIGHT.
>
> **[4:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=288)** So we could go LEFT first_name, one character.
>
> **[4:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=292)** So we're saying return me the first character from the left of the first_name field.
>
> **[4:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=299)** So with Penelope, that would be a P and indeed we can see a P.
>
> **[5:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=303)** And an N for Nick, and an E for Ed, and so on.
>
> **[5:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=307)** Similarly, we could say, RIGHT first_name, seven and then we get ENELOPE.
>
> **[5:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=315)** So if we wanted to create a proper name we would concatenate part of our LEFT
>
> **[5:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=326)** and part of our RIGHTS.
>
> **[5:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=331)** And then we would have that in lower case to create proper case overall.
>
> **[5:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=336)** And we can see we've got Penelope there.
>
> **[5:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=340)** Now, if we look at the next line down we can see a shortcoming of this approach.
>
> **[5:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=345)** We have hard coded in the length of the string effectively because we've said we want one from the left and seven from the right, which is great if we have an eight character word.
>
> **[5:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=357)** But here we have a four character or a two character words, and they look pretty awful.
>
> **[6:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=362)** To make this statement work irrespective of the length we need to use LENGTH itself, or a more advanced function called SUBSTRING which we will come onto.
>
> **[6:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=373)** But let's just finish this query off first.
>
> **[6:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=376)** We're always going to want the first character from the left to be an upper case.
>
> **[6:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=381)** But then it's this number that's going to vary.
>
> **[6:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=385)** And what we want is the length, minus one of that, which then gives us proper case for Penelope, Nick and Ed, and all the others.
>
> **[6:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-string-functions-on-your-data?u=76281980&t=397)** Coming up, we will see some quicker ways to achieve the same effect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft]] (4), [[Microsoft Word|Word]] (3), [[Microsoft Excel|Excel]] (1), [[MySQL]] (1)
> **Env Vars:** concat (6), sql (4), left (3), length (2), lower (2)
> **Code Identifiers:** first_name (7)
> **Definitions:** is a  (3)
> **CLI Commands:** mysql (1), make (1)
> **SQL:** select (1)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)

#### [More advanced string functions](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=0)** - [Instructor] Recently, we've used left and right to return parts of string from the beginning or end, respectively.
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=6)** But what if you wanted to return a partial string from the middle?
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=11)** Here we could use substring unless you're using Oracle, in which case you need substra.
>
> **[0:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=19)** Substra works in all of the four versions except [[Microsoft]].
>
> **[0:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=22)** So none of them work across the board.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=25)** Anyway, we're going to use substring.
>
> **[0:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=26)** Select substring, first name, and this one takes three arguments.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=31)** 1,1, like that.
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=34)** To get the first letter of the first name, we give the field name then the starting character one, not zero.
>
> **[0:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=42)** And then the length, the number of characters we want to return.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=45)** So this should return us the same as left, 1 returns us, and you can see it does 'cause there's our P.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=52)** Now let's play around with this a little bit.
>
> **[0:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=54)** What if we tried 1,2, then we'd have PE for Penelope instead of P because we've said that we still want to start at the first character, but now we want to return two characters.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=71)** And if we tried 2,1, we'd have E instead of P 'cause we're saying start at the second character and go on for just one character.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=85)** Now let's try select substring first name,2 and get rid of our third parameter all together.
>
> **[1:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=93)** It should look a bit odd, really.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=96)** We're using substring, but we've passed in fewer arguments.
>
> **[1:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=100)** In fact, substring can accept commands in a number of ways in most versions of [[SQL]], but not Microsoft, from what I've found.
>
> **[1:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=108)** Again, we've told the database that we want part of first name returned and the two says we want to start at position two.
>
> **[1:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=117)** The lack of a third parameter, the length, tells phpMyAdmin we want the [[Representational State Transfer (REST)|rest]] of the [[Microsoft Word|word]], however long it may be.
>
> **[2:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=124)** So substring has an advantage over left and right in that it doesn't need to know how long the word is.
>
> **[2:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=130)** So you don't need to couple it with the length function and you can see that's worked, 'cause it's returned us enelope and ick and d and ennifer.
>
> **[2:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=141)** For [[MySQL]] and Oracle, you could also use a negative number here,
>
> **[2:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=146)** - 4, to return characters from the end of the string rather than the start.
>
> **[2:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=153)** So you can see it's given us the last four characters, lope from Penelope.
>
> **[2:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=159)** Now back to our original statement, which was first name, 1, 1, which gave us the P.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=169)** So now we can concatenate our P with a lowercase version of enelope
>
> **[3:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=186)** and there we have it.
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=188)** This query works in MySQL and Postgre.
>
> **[3:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=191)** If you are using a different version, try to spot why it might fail.
>
> **[3:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=196)** For Microsoft, the substring function must always have three parameters.
>
> **[3:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=200)** It's not as flexible as the example that we've seen here.
>
> **[3:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=204)** And for Oracle, substring is not a function.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=207)** Can you remember what it is?
>
> **[3:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=209)** For Oracle, it's substra.
>
> **[3:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=213)** The final two string functions in this section are trim and locate.
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=217)** Used in its simple form, trim removes spaces from a word, if they're there, and returns the word unmodified, if they're not.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=227)** Let's just have a look, select star from actor where first name is Grace.
>
> **[3:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=234)** Now I know there is an actor in the database called Grace.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=237)** However, this query has returned us an empty result set and that's because I have gone in and modified this word and added some spaces before and some spaces after.
>
> **[4:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=249)** Spaces before are called leading spaces, by the way.
>
> **[4:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=251)** And those after are called trailing.
>
> **[4:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=255)** So if we change the query and say where trim first name equals Grace, we're saying if you take off all the spaces, can we find a match?
>
> **[4:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=265)** And there, there we have it.
>
> **[4:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=267)** Grace has popped up.
>
> **[4:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=270)** Notice that I'm using capitals here, by the way, for my actor name and MySQL doesn't really mind but Oracle and Postgre can be more picky.
>
> **[4:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=279)** Trim can be really useful for removing unwanted spaces where your [[Data Quality]] isn't great, but it's much more advanced than just shifting spaces.
>
> **[4:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=288)** Click on the film text table and look at the description column.
>
> **[4:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=296)** And can you see that they all start with A, A Epic Drama, A Astounding Epistle, and so on.
>
> **[5:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=304)** Every description starts with a capital A and a space, even when the next word begins with a vowel.
>
> **[5:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=309)** And therefore that should be an An Epic Drama, An Astounding Epistle.
>
> **[5:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=315)** In fact, I checked and every single row begins this way.
>
> **[5:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=319)** So we could use trim to remove the A and the space.
>
> **[5:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=324)** Let's get rid of those bothersome back ticks.
>
> **[5:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=329)** And let's say select description as original and trim leading a space from description
>
> **[5:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=347)** as modified and hit go.
>
> **[5:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=351)** So we've returned two columns, original and modified.
>
> **[5:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=355)** The first one has got all those As with spaces.
>
> **[5:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=358)** And the second one has stripped them out.
>
> **[6:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=362)** Let's have a look at the query.
>
> **[6:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=363)** The leading keyword tells the database only to look at the start of the text string.
>
> **[6:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=371)** Then we have an A and a space within single quotes and we use single quotes because we're supplying text.
>
> **[6:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=377)** It's just the same as if we were to be filtering on a string.
>
> **[6:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=381)** And you could specify any set of characters that you wanted here.
>
> **[6:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=384)** So you could use trim on strings, numbers, or dates.
>
> **[6:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=388)** If your database was storing a unique ID with leading zeros, for example, you could remove all of those to return the actual number.
>
> **[6:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=396)** This leading or trailing syntax works in MySQL, Oracle, and Postgre.
>
> **[6:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=404)** Microsoft wanted to be a little bit different.
>
> **[6:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=408)** In Microsoft, you don't use these keywords at all.
>
> **[6:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=411)** In fact, you use different functions.
>
> **[6:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=413)** You use Ltrim to trim from the left and Rtrim to trim from the right.
>
> **[7:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=421)** There is a trim function now in Microsoft as of 2017.
>
> **[7:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=424)** And that trims from both ends at the same time.
>
> **[7:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=429)** The final string function we're going to look at in this section is locate.
>
> **[7:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=434)** So let's say select locate lope, and I'm doing that in lowercase which might not work in Postgre.
>
> **[7:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=442)** And then first name from actor,
>
> **[7:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=450)** which means we don't need that bit anymore.
>
> **[7:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=454)** And click go.
>
> **[7:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=456)** In MySQL this would return five for Penelope because the L of lope occurs at position five and it's returned zero for the others 'cause it's looked for lope within Nick and unsurprisingly, it hasn't found it.
>
> **[7:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=471)** Unfortunately, this useful function is different for each different type of SQL.
>
> **[7:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=478)** In Postgre, it's select position.
>
> **[8:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=482)** And then you would say lope in first name and then the table name.
>
> **[8:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=491)** In Microsoft, it would be select charindex and then it would be lope, first name.
>
> **[8:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=503)** And in Oracle it's select instra.
>
> **[8:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/more-advanced-string-functions?u=76281980&t=507)** And it's the other way around just to be awkward, first name and then lope like that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (7), [[Microsoft Word|Word]] (6), [[MySQL]] (5), [[SQL]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** mysql (5), find (1)
> **Env Vars:** sql (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1), - 4 (1)
> **Code Identifiers:** phpmyadmin (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)

#### [Change report headings with an alias](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=0)** - [Instructor] Let's revisit a query from a previous section because we're going to update it and make it easier to read.
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=6)** So we've got select full name basically, and then length of full name and order alphabetically, descending.
>
> **[0:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=16)** So if we look down here, we've got Zero Cage, with nine characters, and that's at the top, because alphabetically, it comes last.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=24)** Remember that length would be len in [[Microsoft]], and that concat in Oracle would only accept two parameters.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=31)** You'd have to use the shorthand, which is the double pipe, for Oracle.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=35)** Now this query looks a bit long, and worst of all, bearing in mind, that this table down here is our results, and therefore our report, these column headings are awful.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=45)** They're unreadable, really, to most people.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=48)** You'd be pleased to know though, that there's a way of making this better, and it makes our query shorter and more efficient, and it's called an alias.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=57)** So we can say, select concat first name, last name, as name.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=62)** That might be a reserved [[Microsoft Word|word]] outside of [[MySQL]], so if it doesn't work for you, think of a different name.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=71)** As name, as len, and those aliases then pop up as our column headings, which is extremely useful, if you're trying to build a report.
>
> **[1:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=78)** So now we've got name and len, which is much better, and there's one other benefit, which is instead of repeating this long formula here, we can say order by len descending, and you can see there, we've got Michelle McConaughey with 20 characters.
>
> **[1:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=95)** Now, what if we wanted to return only actors who had more than 17 characters in their name?
>
> **[1:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=101)** You might think that we would be able to go, where len greater than 17, but we can't do that.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=109)** We get an error.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=111)** Click to get rid of that, and it says "unknown column len in where clause."
>
> **[1:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=117)** And the problem basically is, that this part of the query all sort of runs together, and the database hasn't necessarily worked out what len means by the time it gets to the where clause, which doesn't mean we give up, we just have to approach it longhand, is one solution.
>
> **[2:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=133)** So we could say where, and I'm just copy pasting the len, length, sorry, greater than 17.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/change-report-headings-with-an-alias?u=76281980&t=143)** And there we have just three results, so that one has worked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Word|Word]] (1), [[MySQL]] (1)
> **CLI Commands:** make (1), mysql (1)
> **Code Identifiers:** mysql (1)
> **Speakers:** - [instructor] (1)

#### [Use date functions with WHERE](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=0)** - [Instructor] In this section, we're going to look at date functions and a little bit more about the data type of date as well.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=7)** Date functions just mean a formula that can be run on fields that have a data type of a date kind.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=14)** I've switched to the address table here from the actor table and that's because the actor table has just disappeared which is one of the problems of dealing with an online demo that anybody can use and something you may come across yourself as you follow the course.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=28)** So the address table has an ID column, address as in street address, a district, a city ID, postcode and phone which appeared to be optional and then a last update column, which is a date.
>
> **[0:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=42)** So it's got year, then month, then day.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=45)** And then it has a time as well, hours, minutes, and seconds.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=51)** Now it may seem obvious to you and I whether something is a number, text, or a date, but a database has to be told explicitly and in far more detail than those three categories would suggest.
>
> **[1:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=63)** So let's have a look at the data type which is in the type column of the structure tab if you're using phpMyAdmin.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=71)** So the address ID you'll remember looked numeric but the type given is smallint(5) and that means small integer with a maximum number of characters of five.
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=82)** So you could have 99,999, but you couldn't have a hundred thousand stored in this field, the database wouldn't let you do that because you'd gone over the maximum.
>
> **[1:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=93)** Underneath we have what appear to be text fields and we can see these are varchars, variable characters with a maximum character limit of 50 or 20 here.
>
> **[1:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=106)** Then we have another smallint, a couple more varchars, and last but not least we have our date column, which is a timestamp.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=114)** Now, timestamp is a date typically generated by the database itself.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=119)** So it's stored in a kind of database language even though it's presented to you and I in the front end looking very much like a date, behind the scenes that is stored in kind of database sort of speak.
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=135)** And we know that this one is specifically generated by the database because it has a special behavior attached to it on update CURRENT_TIMESTAMP.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=144)** So if somebody comes in and edits a row in this table, this last update column will change.
>
> **[2:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=153)** So it's worth just dwelling for a second on this date once again, we could describe this as European date format couldn't we, because it's it's year and then month and then day, which is the European way of doing things.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=167)** In most [[Forms]] of [[SQL]] you can store timezone data as well, along with your date and time, and that's a different data type.
>
> **[2:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=175)** So it would be clear in the structure tab that you had a data type that supported timezones down here, it would have a special name.
>
> **[3:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=183)** You'd also be able to tell whether you had a timezone by looking in the browse tab.
>
> **[3:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=187)** There's normally a plus sign at the end and then a number of hours or a minus sign indeed, and a number of hours.
>
> **[3:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=194)** So just look at this date, which is the 15th of February, 2006, and let's try running a query on it where last_update = notice I'm using single quotation
>
> **[3:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=211)** marks here, 2006-02-15.
>
> **[3:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=214)** So we're saying where the date is the 15th of February and we've got zero rows.
>
> **[3:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=221)** The problem is that this field in the database contains time as well as date and we've not specified the time, with no time supplied the database will assume we mean midnight entering the 15th, which of course fails to match.
>
> **[3:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=236)** So if we were to try greater than because four o'clock in the morning is greater than midnight, we see that we get all 603 rows there, but it's not terribly precise is it, because any update since 2006 would be captured by this query.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=254)** So to get an exact match, we would have to actually type in the time, 04:34:33
>
> **[4:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=267)** and sometimes by the way, you get a partial second as well, which is point and then some numbers, and obviously doing it like this is rather tedious.
>
> **[4:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=278)** So at the risk of repeating myself, the parts of a date are separated by hyphens, according to the SQL standard and the parts of time are separated by colons.
>
> **[4:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=289)** Now we are dealing with a timestamp here, just a note if you're using [[Microsoft]] that the [[Microsoft Word|word]] timestamp refers to a completely different data type, and it's now been deprecated possibly because Microsoft realized it was confusing.
>
> **[5:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=300)** So the nearest data type in Microsoft now is called date time.
>
> **[5:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=304)** So we can provide an exact match like this for dates and times, but as I said, pretty tedious, just as left and upper are string functions, so we have some date functions which are going to help us out.
>
> **[5:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=316)** For instance, in my SQL we could say WHERE YEAR of last update is 2006,
>
> **[5:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=328)** and we get 603 rows back and notice that we didn't need any single quotes there because the database has evaluated a number from our date column for us, year doesn't work in Postgre SQL by the way, where you would use extract, so you'd say WHERE EXTRACT and then I think it's YEAR FROM, like that.
>
> **[5:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=351)** In Postgre and Microsoft, you could also use date part, date_, or one of them has an underscore and one of them doesn't actually but you can use date part to extract the year out of a field.
>
> **[6:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=366)** Along with year, you can use month, week, day, hour, minute, and second in a similar way across all these languages.
>
> **[6:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=373)** And in some of them you can extract data down to the nanosecond.
>
> **[6:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=376)** You can also return day of the week, Monday to Sunday, day of the month, one to 31, the quarter or the week of the year, but the most likely requirement and the one that can take the longest because it can be really fiddly to do is just to extract the date out of a field which contains both date and time.
>
> **[6:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=395)** In my SQL, you can simply use date, which is brilliant and I wish it existed in all of them.
>
> **[6:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=401)** So we say WHERE DATE = and here we do need single quotes again, '2006-02-15' like so, and there we've got 603, with Microsoft 2008 and later you would need to use the convert function and in Oracle you would need to use TO_DATE, in Postgre you'd use date, part, or extract.
>
> **[7:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=427)** Another key date function you should know about is date format which show your data in a different format and this can save you hours in [[Microsoft Excel|Excel]].
>
> **[7:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=437)** So you, for instance, if your dates are stored in a European date format and you're in the states and you want to report them in an American style date format this is how you would do this.
>
> **[7:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=447)** So we would say SELECTED DATE_FORMAT, field name which is last_update and then we use a sort of mini language which may differ between types of SQL and we are saying %m-%d-%Y
>
> **[7:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=470)** and the capitals in the lowercase matter here, by the way.
>
> **[7:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=474)** And you can see that that has returned us month and then day and then year separated with hyphens.
>
> **[8:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=481)** You can do all sorts of weird and wonderful things with this mini language by the way, we could say %D, get rid of the hyphen, %M, get rid of the hyphen and we could put a comma in there maybe, and click go, and then it's given us, sort of long form there which is really helpful if you're working in an international group and people are used to seeing dates in different formats.
>
> **[8:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=506)** The bad news is of course that different types of SQL use different keywords and different formatting conventions.
>
> **[8:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=512)** So for Oracle and Postgre you would use TO_CHAR, just write that down so you can see what I mean, TO_CHAR, like that.
>
> **[8:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-date-functions-with-where?u=76281980&t=522)** And the formatting inside might be rather different, and in Microsoft, as long as you're using [[Microsoft SQL Server|SQL server]] 2012 or later, you can use FORMAT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft]] (6), [[Forms]] (1), [[Microsoft Word|Word]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sql (8), where (3), year (2), to_char (2), current_timestamp (1)
> **Definitions:** is a  (4), is called (1)
> **Code Identifiers:** last_update (2), phpmyadmin (1)
> **SQL:** where (3)
> **Ports:** :34 (1), :33 (1)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Query a table](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=0)** - As you already know, the Sakila Demo Database is for a movie rental store.
>
> **[0:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=10)** That's an old-fashioned shop that you go into and you hire a DVD from.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=15)** For our first challenge, I want you to imagine you work at such a store and a customer has asked for your advice to find a film that's either rated, PG parental guidance, or G, generally suitable for all.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=28)** The only description they give is that they are looking for a drama.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=31)** And for this challenge, I want you to confine your search to the film table.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=36)** Next, I'm going to give you the same challenge in more query-like terms.
>
> **[0:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=40)** If you like, you can pause the video now and try to build the query, or you can wait for a few more clues.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=47)** So in other words, to help your customer, I want you to return all the records from the film table where the rating is either G or PG and the description field contains the [[Microsoft Word|word]] drama.
>
> **[0:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=59)** There's more than one correct solution here.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=61)** And building a work inquiry should take you no more than five minutes.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-query-a-table?u=76281980&t=65)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** dvd (1)
> **Definitions:** in other words (1)
> **Analogies:** imagine (1)
> **Speakers:** - as (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Query a table](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=0)** - [Instructor] For this query, we can interpret each line of our objective into a line of code so we can build the query up line by line.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=14)** The first part was to return all records from the film table.
>
> **[0:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=19)** And that's what happens when we click on the film table anyway, select star from film.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=23)** So we run that and we have a thousand rows returned.
>
> **[0:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=27)** Next, we need to place a filter using the where claws.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=31)** We can either use rating in brackets with the in key [[Microsoft Word|word]] or we could use the or statement, which I'm not going to show you.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=38)** Either of these is fine, but if you use the or statement you might need parentheses around part of your where clause.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=45)** So select star from film where rating in G, PG,
>
> **[0:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=56)** and we can run that.
>
> **[0:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=59)** Finally, for the second filter, we use the and keyword and a wild card, which is the percent sign in this case.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=66)** So we're going to say and description like percent drama percent.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=77)** And let's run that as well.
>
> **[1:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-query-a-table?u=76281980&t=80)** So we have 36 records returned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Convert case](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=6)** - [Narrator] For our next challenge, you're still working at the Movie Rental Empire, but this time you are building a report for senior management.
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=13)** This challenge is only going to return the very first bit of data for that report, and that is the title field from the film table.
>
> **[0:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=20)** You're going to report all the titles from the field table, the thing is you want them in proper case.
>
> **[0:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=26)** That means you need to capitalize the first letter and make the remaining letters of the title field lowercase.
>
> **[0:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=33)** Let's have a look at an example here.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=35)** So the objective is to convert the title field of the film table to proper case, and underneath you can see a table where we start with everything in uppercase, and it's been converted to proper case.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-convert-case?u=76281980&t=47)** This should take you about five minutes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Convert case](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=0)** - [Instructor] As a quick recap, the challenge here is to return the title field of the film table in proper case.
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=13)** For this challenge you're going to need to use SUBSTR and or a combination of left and right, these are all string functions that return part of a text field.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=23)** Let's start by returning the part of the string that we want capitalized.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=28)** We can say SELECT LEFT(title,1) and that's saying the left most character of the title field.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=38)** And I dunno if you remember, but this top row was academy dinosaur and it's returned A, which is correct.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=46)** Now these are already an uppercase.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=48)** So just in case somebody comes along and changes it, we can put up around here, but strictly that shouldn't be necessary.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=57)** Okay, so we have the first character, now we need the [[Representational State Transfer (REST)|rest]].
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=60)** Now, if we were to use the string function called right here we would also need to use the length of function to work out how long the title field is in each case.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=71)** And it becomes a bit unwieldy.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=73)** It's absolutely fine if you did that by the way but we are going to use SUBSTR.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=77)** This is short for substring and it turns part of a string.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=85)** Now there is an optional third argument that we could put here, which is for the length of the string that we want to return.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=92)** But happily, if we leave that out, it will just take all of the rest of the string and that is what we want.
>
> **[1:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=98)** So at the moment we're going to return two fields as an intermediate step, and we can see that we have returned the first letter and then the rest of the title, like so.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=109)** Currently still in upper case.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=111)** So we need to make that lower case.
>
> **[1:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=115)** If you're not using [[MySQL]] by the way, some other versions of [[SQL]] have a proper function which of course makes this far easier.
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=125)** So now all that's left is to put these together and we can do that using CONCAT.
>
> **[2:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=136)** And purist among you might want to rename your field as well because that's rather unwieldy if you're building a report.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=144)** So I'm going to say, "as title," like so.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-convert-case?u=76281980&t=148)** And there we have it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[MySQL]] (1), [[SQL]] (1)
> **Env Vars:** substr (2), select (1), left (1), sql (1), concat (1)
> **CLI Commands:** make (1), mysql (1)
> **Definitions:** short for (1), is an  (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Group Your SQL Results

[↑ Back to Table of Contents](#table-of-contents)

#### [Use GROUP BY with count](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=0)** - [Instructor] Sometimes you want to return information about a table rather than just returning a subset of information from within the table.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=7)** So for instance, you might want to know how many times something occurs or how many rows you've got.
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=13)** Let's have a look at the address table.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=15)** If all you want is a count of rows, you can do that with count star, like so.
>
> **[0:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=21)** We hit go and it gives us the number 603, which means there's 603 rows in our table.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=29)** Now, just a quick note on the asterisk, where we have seen that until now it's been like this, hasn't it?
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=34)** Select star from address, and that has meant select all fields.
>
> **[0:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=40)** But when we use it with select count, it can be read really as select the count of all rows, in a way.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=48)** We can limit our count to just one field.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=52)** So if we take the address field which is the street address, generally it gives the same result and this is 603.
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=60)** But I don't know if you noticed, there was a field called address two which is less populated.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=65)** And when we count that field, we get an answer of 599, which is obviously four short.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=72)** The reason for that is that there are four null values.
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=76)** So we say select from address, where address two is null.
>
> **[1:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=84)** Not an equal sign, but an is.
>
> **[1:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=86)** And let's just select everything there.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=89)** And there we have four rows and you can see the nulls in this column are written in and italicized.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=97)** Null in a database means absence of data.
>
> **[1:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=100)** It doesn't mean zero or blank or a space.
>
> **[1:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=104)** It means nothing here.
>
> **[1:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=106)** There may be times when you want to exclude null values from your count, in which case counting a specific field as we did with count address two.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=114)** That's the way to go for you.
>
> **[1:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=115)** But if you just want a straightforward count of the rows, stick with count star.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=119)** Now, what if we try to retrieve a field and a count at the same time?
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=125)** Let's try select district comma count star.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=131)** And that gives us an error and rightly so.
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=135)** I don't know if you can read the text in the warning message, but it says we're trying to pull both grouped and ungrouped data at the same time.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=143)** Earlier versions of [[MySQL]] actually let us do this but it was very misleading.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=148)** So just click that to get rid of it.
>
> **[2:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=151)** So what you would see was the first district which was Alberta in the database that listed against the number 603.
>
> **[2:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=160)** And it would look as though those two results were connected, but of course they weren't.
>
> **[2:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=165)** It was grossly misleading.
>
> **[2:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=166)** So this is much better, better to get an error.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=169)** So let's say we want to see the district against the number of rows that district has in the database.
>
> **[2:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=175)** To do this, we need to group our data on district and do that, we use the group by command followed by the field name, like so.
>
> **[3:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=186)** And there we have 378 rows.
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=188)** We can see Alberta pops up twice, QLD once, California nine times, and so on.
>
> **[3:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=196)** So aggregating functions such as count, should be used with group by unless you want to return information about the entire table as we did to begin with.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=207)** So which district has the most rows against it?
>
> **[3:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=210)** We can still use order by in our query.
>
> **[3:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=214)** Let's give an alias to the count there and say group by district.
>
> **[3:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=220)** Order by ct desc, descending count.
>
> **[3:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=226)** So we can see that the most common district is in fact Buenos Aires in the database.
>
> **[3:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=232)** So a little [[Microsoft Word|word]] on that alias here.
>
> **[3:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=234)** Note, we used an alias for count which was given the as keyword and then we referred to that further down.
>
> **[4:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=241)** Now the as keyword in MySQL actually is optional, but in some languages, you need it.
>
> **[4:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=249)** We can still use a where clause to filter our statement and it would go here.
>
> **[4:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=253)** So select from and where sort of stick together and then your group by comes next.
>
> **[4:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=258)** So we say where address ID is less than 10, and now we've returned seven rows and we can see that Alberta and QLD are the most frequent.
>
> **[4:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=272)** Our [[SQL]] statements from now on in need to follow this basic structure.
>
> **[4:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=278)** SQL is quite forgiving about things like random spaces or carriage returns but they do require things to be in sequence.
>
> **[4:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=286)** So we have select fields from table and any other tables you wanted to join in, more on which later, and then where and any filters, so you might have some ands and some ors, then group by, and then order by.
>
> **[5:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=301)** We can't use the where keyword on our grouped field though, only on an original field like address ID which actually occurs in the database.
>
> **[5:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=313)** So let's just try if we'd said where count is less than two, this query should fail.
>
> **[5:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=323)** It says unknown column ct in the where clause and that's because the database hasn't, by the time it gets to this line, the database hasn't quite assembled all the information yet.
>
> **[5:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=336)** So it doesn't know what ct is when it gets to here.
>
> **[5:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=339)** That doesn't mean that you can't filter on this column.
>
> **[5:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-group-by-with-count?u=76281980&t=341)** We just have to use a new keyword called having and we'll be looking at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** qld (2), sql (2)
> **CLI Commands:** mysql (2)
> **Analogies:** for instance (1), such as (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Filter grouped results with HAVING](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=0)** - [Instructor] In this section, we're going to look at how we would filter on an aggregated column, such as count.
>
> **[0:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=8)** And to do this, we need to use a keyword called HAVING.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=12)** You should really read GROUP BY statements in sections.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=15)** So we have SELECT, FROM, and WHERE altogether.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=18)** Let's say SELECT district count *, ct from address.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=24)** And then we'll say WHERE district LIKE.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=31)** So the district needs to have a B in it, basically.
>
> **[0:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=34)** So that's one section.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=36)** And then we would say GROUP BY the district HAVING a ct account more than 8.
>
> **[0:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=44)** So we want to see the most frequent districts only.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=48)** And then we can keep our ORDER BY statement there as well.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=52)** So there we go.
>
> **[0:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=53)** The only district that container B and have more than eight rows in the sakila database in the address table are Buenos Aires and West Bengali.
>
> **[1:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=63)** So GROUP BY has its own special filter, basically called HAVING.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=68)** Now, let's leave count behind, and try some more mathematical aggregate functions.
>
> **[1:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=74)** Let's go to the film table now, which contains a fair bit of numeric data.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=81)** Have a look here, scroll across.
>
> **[1:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=83)** It's got release here, got some ID columns, and we've got rental duration, which appears to have different numbers in it, which is quite helpful.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=92)** 'Cause if you take an average of a field and it's only got the same number in, it's a pretty boring calculation.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=97)** So let's start using MIN rental_duration FROM film.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=107)** So the MIN rental duration is 3, which I'm guessing is in days, and the MAX is 7.
>
> **[1:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=116)** So this should work just great.
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=118)** We've seen MIN and MAX. So now let's try AVG.
>
> **[2:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=123)** So the average of those values, which is between 3 and 7, 4.985 there.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=131)** Now, I have run an average or a standard deviation calculation once in [[Microsoft]], and it rounded this number up, which was quite misleading.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=140)** So watch out for that, that could be down to data types or database settings, or just a peculiarity of the language.
>
> **[2:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=146)** But if you get a suspicious average or a suspicious standard deviation that's a whole number or appears rounded, then do investigate.
>
> **[2:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=155)** We could also run SELECT rating, and then we could SUM the rental_duration.
>
> **[2:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=163)** I know this is a bit spurious.
>
> **[2:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=164)** Why would you sum a rental duration?
>
> **[2:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=166)** But it's a numeric column. So it will work.
>
> **[2:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=168)** And then GROUP BY the rating field.
>
> **[2:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=171)** So we are grouping and summing.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=173)** So we can see that, all in all in our database, the rating of PG-13 has had the most sort of days rental, if you like.
>
> **[3:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=183)** Many numeric functions aggregate or group our data.
>
> **[3:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=186)** They work best like that.
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=188)** If we are using a string or date function, we typically input a row, perform a function, and output a row.
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=195)** So if we've got 603 rows in the table, our output will also have 603 rows.
>
> **[3:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=202)** So they tend to work on one data point at a time.
>
> **[3:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=205)** Numeric functions tend to work on a whole set of data points and then return a sort of, a calculation, basically.
>
> **[3:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=214)** Now, we can use numeric functions in conjunction with string or date functions.
>
> **[3:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=219)** So for example, we could, from the actor table, do you remember that we can extract the year from a date column?
>
> **[3:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=232)** And when we do that, that is giving us a numeric result.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=237)** So we can then run a numeric function, like so.
>
> **[4:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=244)** And the average is 2006.
>
> **[4:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=246)** Then you might think that's suspiciously rounded, but actually it's because the last update column only contains the 15th of February, 2006, in every single row.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=256)** Remember that there are differences across different types of [[SQL]], unfortunately here.
>
> **[4:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=260)** So for example, in Postgre, you would need to use EXTRACT instead of YEAR.
>
> **[4:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/filter-grouped-results-with-having?u=76281980&t=265)** So it would be EXTRACT, and then it would be YEAR FROM, like so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[SQL]] (1)
> **Env Vars:** group (4), having (3), select (3), min (3), where (2)
> **SQL:** group by (4), having (3), select (3), where (2), order by (1)
> **Analogies:** for example (2), such as (1)
> **Code Identifiers:** rental_duration (2)
> **Versions:** 4.985 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Deduplicate with SELECT DISTINCT](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=0)** - [Instructor] Previously, we were introduced to group by and used this with count star to see which values were the most popular in a field.
>
> **[0:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=8)** So, this query returned us 378 rows with a sort of frequency value against them.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=17)** Now we know that there were 603 rows altogether in the table, so what this tells us is, that there are 378 unique values, and sometimes all you need is a list of those unique values.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=29)** You don't actually need any counting or clever stuff.
>
> **[0:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=33)** And for that, we can use select distinct district, and you can see that gives us 378 rows, just unique values there.
>
> **[0:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=43)** You can use select distinct on as many fields as you like, actually.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=47)** If you wrote select distinct, and then every field in the table, for example, then you would simply have a list of all the fields and all the data in the table.
>
> **[0:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=56)** So let's say select distinct district and address, and because address is broadly, well, probably unique, we have now 603 rows returned, which is the number of rows in the table.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=72)** Now let's click onto the rental table.
>
> **[1:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=78)** You can see it's got a lot more rows than previous tables.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=81)** It has 16,000 odd rows.
>
> **[1:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=86)** Now let's see among all of those rows, how many staff we have, and there are only two.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=96)** There's two staff IDs there.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=99)** We could look up those staff IDs in the staff table to find out the names of the staff members, and more on that in later sections in this course.
>
> **[1:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=108)** But there's just two staff.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=111)** Now how many customers are there?
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=118)** 599.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=122)** What if we wanted to know which customers had been served by which staff?
>
> **[2:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=127)** Then we could combine the fields after the distinct keyword.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=134)** Select distinct staff ID, customer ID, and we see we have 1,198, which is double 599.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=144)** So what this is telling us is, that every customer has been served by both members of staff, at some point.
>
> **[2:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=152)** It seems a bit unlikely to me, but then this is a sample database.
>
> **[2:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=156)** So select distinct is used to remove duplicate values.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=161)** Now let's see if any customer has ever rented the same DVD twice.
>
> **[2:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=166)** Now remember, there are 16,044 rows in the database.
>
> **[2:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=171)** Select distinct customer ID, inventory ID this time, which is a unique reference for the DVD itself, and that gives us 16,044.
>
> **[3:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=192)** And what that tells us is that no customer has ever rented the same DVD twice.
>
> **[3:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=198)** We can combine select distinct with functions as well.
>
> **[3:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=202)** So we could, for instance use concat customer ID inventory ID, and here we're creating a unique ID from a combination of two other IDs.
>
> **[3:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=213)** And this really ought to return us much the same as our previous query.
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=217)** We're saying select a distinct unique ID list, but when we run it, it gives us 16,040, rather than 16,044.
>
> **[3:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=229)** So we are four down.
>
> **[3:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=232)** Let's investigate.
>
> **[3:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=234)** Let's look at which four combinations of customer and inventory were duplicated.
>
> **[3:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=239)** So we'll take out the distinct, select concat customer ID, inventory ID, as, and we'll call that conc, count star as ct from rental, and we want to group by our unique ID, and then order by the count descending, 'cause there's a lot of rows here, and if we don't do that, we'll be here all day clicking through them.
>
> **[4:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=277)** So here's our unique ID that we've created, for example 462706, and here's our count, and here are our mystery four rows that have a count of two, which we weren't expecting, because select distinct had told us that the combination of these fields was unique in every case.
>
> **[4:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=297)** And can you see what's happened?
>
> **[4:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=299)** Is this unique ID 462 matched with 706, or could it be perhaps 46 matched with 2706?
>
> **[5:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=309)** We haven't separated our IDs out sufficiently to be sure of the answer to that question.
>
> **[5:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=317)** So we can add an underscore, like that, and that means we can see both parts of our unique ID clearly, and then we get the 16,044 rows that we were expecting.
>
> **[5:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=331)** We can also use date functions with select distinct.
>
> **[5:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=342)** We could say select distinct year, last update,
>
> **[5:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=352)** and there we go.
>
> **[5:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=352)** We have a unique value of 2006.
>
> **[5:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=356)** It's much quicker than checking this manually or having to download all of those rows to perform the the check in a different software.
>
> **[6:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=365)** And if you just need a quick count of unique values in a column, by the way, you can also combine count with distinct.
>
> **[6:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=373)** So we could say count distinct, let's say district, bit more interesting than getting an answer of one, distinct district from address, which gives us 378.
>
> **[6:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/deduplicate-with-select-distinct?u=76281980&t=385)** Coming up, we're going to look at how to merge rows together using group by.

> [!info]- Semantic Content
>
> **Env Vars:** dvd (3)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), for instance (1)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Merge rows with GROUP BY](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=0)** - [Instructor] So far, we've looked at numeric grouping functioned, but there is one string function that you can run on grouped data, and that's called group_concat.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=12)** Postgre has string agg.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=14)** [[Microsoft]] offers this function too now, as of [[Microsoft SQL Server|SQL server]] 2017, and Oracle has list agg.
>
> **[0:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=19)** So let's take a look at what this one does.
>
> **[0:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=21)** Select district, group concat, phone.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=28)** So, perhaps you want to call all of your customers, one city at a time.
>
> **[0:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=33)** This query would help you to return all of your phone numbers, grouped by city.
>
> **[0:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=40)** So there we have, where the district is blank, we have one number, you see that it's separated with a comma there, another number and so on.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=48)** And there may be more than three numbers, it may not be showing us everything there.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=52)** And some of them just have one value, and so on and so forth.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=57)** And that could be useful if, for instance, you need to prepend dialing codes, or something like that, to the numbers that you're ringing.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=65)** By default, this returns to phone numbers in the order they occur in the table.
>
> **[1:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=69)** So 99800, blah, blah, blah, came before 93435 in the table.
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=76)** This function can be really useful if you're trying to create a data array, for another language, such as [[JavaScript]].
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=82)** And you can usually change the separator, so instead of a comma, you could have a pipe, or a semicolon, or something.
>
> **[1:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=90)** In my [[SQL]] you could say, select district, group concat, phone, we could say order by phone ascending, separator.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=107)** And then because it's a string, we use single quotes, so we're asking it to separate the numbers with a semicolon instead of a comma, and order the results.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=119)** So it may be rather hard to spot, but I can tell you now that they're separated by semicolons, and where previously we began with 998, we now begin with 282, because we've organized our data.
>
> **[2:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-rows-with-group-by?u=76281980&t=132)** In Microsoft, [[PostgreSQL]], and Oracle, you would set the separator, or the limiter, as an optional second argument within the functions I told you previously, which were string agg, or list agg.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft SQL Server|Sql server]] (1), [[JavaScript]] (1), [[SQL]] (1), [[PostgreSQL]] (1)
> **Env Vars:** sql (2)
> **Analogies:** for instance (1), such as (1)
> **Code Identifiers:** group_concat (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Cost analysis](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=6)** - [Instructor] Imagine now that you work in a central administrative function for this movie rental empire that's represented by the Sakila database.
>
> **[0:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=14)** You are an analyst advising the finance and strategy departments on things like which movies are becoming obsolete and trends in which movies are becoming more or less popular, or trends in which movies are more or less cost-effective to buy.
>
> **[0:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=27)** And that one is the purpose of this challenge.
>
> **[0:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=30)** You've been asked to analyze your movie data by rating, such as G or PG, as we saw before.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=37)** You want to know whether certain ratings have a cheaper replacement cost than others.
>
> **[0:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=41)** But you are only interested in cheap movies, those with an average cost of less than 20, that are relatively short as well, 90 minutes or less.
>
> **[0:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=50)** And you want to know how many you have of each rating in this category.
>
> **[0:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=54)** Stop this movie now if you want to try this query with no further input and keep going for a few more clues.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=61)** In query terms then, we want to return the rating and row count from the film table where the length is less than 90 and the average replacement cost is less than 20.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-cost-analysis?u=76281980&t=72)** This is quite a complex query but it should be possible in five minutes.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1), such as (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### [Solution: Cost analysis](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=0)** - [Narrator] Let's start with the main part of the query which includes a group by.
>
> **[0:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=10)** So we'll say select star from film, change that to select rating and count of rows from film.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=24)** Group by rating.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=29)** And there we have the count of rows against each rating, and you can see that those numbers are about 200 in each case.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=37)** Next we're going to add a filter using the where clause for length is less than 90.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=48)** Now, length was a field in the table.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=51)** And this filter applies to every row in that table.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=55)** And that is why we use the where clause, and not the having.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=61)** So let's run that.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=62)** And you can see the numbers have reduced to about 60.
>
> **[1:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=67)** Now, we have one more filter.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=68)** And this uses an average function, which is an aggregate number function.
>
> **[1:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=74)** And that is a giveaway that this filter operates on the grouped data, not at the individual row level.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=81)** So we use having for that, having average replacement cost less than 20.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-cost-analysis?u=76281980&t=89)** And there we have our result.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Merge Data from Multiple Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Make your queries faster](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=0)** - [Instructor] If we click on the payment table, you can see that there are 16,000 odd results.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=7)** And this query took 0.0009 seconds.
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=13)** Now we're going to limit our query to 25 rows, and do that by limit 25 and click go.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=24)** Now you can see that the query took a little bit less time, 0.007 seconds to run.
>
> **[0:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=32)** But when we're dealing with millions of rows, this sort of thing can make a substantial difference.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=37)** The limit keyword works in [[MySQL]] and [[PostgreSQL]], but unfortunately the keywords differ in different versions.
>
> **[0:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=44)** So for [[Microsoft]], the keyword is top, and you use it like this.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=48)** You'd say select top 25, field name, whatever that field name may be from the payment table.
>
> **[0:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=59)** And obviously you don't need that bit.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=61)** And for Oracle, it would be select, I'll show you.
>
> **[1:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=64)** Star from the table.
>
> **[1:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=67)** And then it's used as a filter where ROWNUM is less than or equal to 25.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=73)** And ROWNUM isn't a field, it's Oracle's own way of counting the rows in the database.
>
> **[1:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=79)** It's like an automatically assigned ID.
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=82)** Now these queries are going to return rows in the same order they appear in the table.
>
> **[1:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=86)** We're going to move on to look at joining tables and merging data.
>
> **[1:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=90)** And when we do that, even in a sample database like this one, we can quickly produce millions of rows.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/make-your-queries-faster?u=76281980&t=96)** So your computer and your colleagues will both thank you for using this limit keyword, if you're using MySQL to limit the size of the reports you produce while you're testing out your queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[PostgreSQL]] (1), [[Microsoft]] (1)
> **CLI Commands:** mysql (2), make (1)
> **Env Vars:** rownum (2)
> **Versions:** 0.0009 (1), 0.007 (1)
> **UI Navigation:** click on (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Understand SQL indexes and keys](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=0)** - [Instructor] In the up and coming sections, we want to join data together for more than one table.
>
> **[0:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=5)** And for this, we need to understand a bit more about data types, keys, and indexes.
>
> **[0:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=10)** Data type is whether a field is numeric or date or text, but as we've seen, there are far more categories than that.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=17)** Keys and indexes are special kinds of field, and constraints are like rules that the database must enforce.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=24)** So let's look at the customer table, and you can see we're on the Browse tab, and we can see all of the fields laid out horizontally, and the data beneath them.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=35)** And then if we go to the Structure tab, we can see the same fields, but laid out vertically, and without the data showing underneath them.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=46)** We have three ID columns, customer_id, store_id, and address_id.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=51)** And these are all int type or integer type data, so these are all numeric.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=57)** And they are, smallint, tinyint, and another smallint.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=62)** And the number in the brackets here, indicates the number of characters, the length that that ID can be at maximum.
>
> **[1:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=70)** The difference between smallint and tinyint then is simply the number of characters that that value can have.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=77)** Active is a tinyint with a maximum length of one.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=81)** And in fact, it's probably just a binary field that contains a zero or a one to indicate the status of the customer.
>
> **[1:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=88)** Then we have first_name, last_name, and email, which are all varchar or variable character columns.
>
> **[1:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=95)** Again, with a character length in brackets after them.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=99)** And then we have two date type fields.
>
> **[1:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=101)** We have create_date, which is a datetime and last_update, which is a timestamp.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=107)** Datetime is for storing date and time together.
>
> **[1:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=111)** Timestamp does the same thing, but in a less human-readable form.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=114)** And timestamp is often automatically generated, in fact by the database, and that's the case here.
>
> **[2:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=120)** In very small font down here, it says, on update Current_Timestamp.
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=125)** So if anybody comes along and modifies, one of the rows in this table, the database would automatically log the time and date that they did that.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=134)** Some data types are better than others for joining tables together.
>
> **[2:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=139)** Almost always, we will join tables together using an integer or whole number field.
>
> **[2:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=145)** You see that as we've said all the ID fields here are integer types, and it is the ID fields that we will use.
>
> **[2:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=152)** You see that with the customer table we have a gold key against customer_id.
>
> **[2:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=157)** And if we hover, it says Primary, this is a primary key.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=161)** It tells the database that this field uniquely identifies the row for this table.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=167)** We typically use primary keys to join tables together.
>
> **[2:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=171)** Can you see if we scroll to the right, it says auto_increment.
>
> **[2:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=176)** So if we were to insert a new row into this table, the database would automatically populate this field with a number one higher than the current maximum value.
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=188)** And this preserves [[Data Integrity]], which is why primary keys are so good for joining tables together on.
>
> **[3:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=194)** Then we have store_id and address_id.
>
> **[3:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=197)** These are the primary keys of the store table and the address table respectively, but they're showing up in the customer table, and when this happens, it's called a foreign key.
>
> **[3:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=208)** Just deselect those.
>
> **[3:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=210)** If we scroll down now we see there is a box called Indexes, and it has four rows in it.
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=217)** The first one is primary, for our primary key.
>
> **[3:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=221)** Then we have two indexes with fk for foreign key in the name, and then we have another index idx meaning index, which is on last_name, and if we scroll back up, you can see indeed last_name does have an index applied to it.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=237)** An index tells the database to optimize this field for searching.
>
> **[4:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=242)** So search is performed on an indexed field will be quicker than those performed on a regular field.
>
> **[4:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=248)** But creating indexes takes memory, so we don't want to make every field an index.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=254)** In [[MySQL]], when you make a field into a primary key the database automatically creates an index for you, but that's not true of all types of [[SQL]].
>
> **[4:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=264)** So why do we have indexes on these three fields then?
>
> **[4:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=268)** Two of them are IDs, and when we join two tables together, as I've said, we tend to join them on IDs.
>
> **[4:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=276)** So the database then has to search through one table, finding a match for those IDs in the other table.
>
> **[4:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=282)** It's like a giant VLookup function.
>
> **[4:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=285)** So it's pretty smart that the primary and foreign keys would be indexed.
>
> **[4:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=289)** And for last_name, it's probable that searches are being performed manually by staff on the last name of customers, so that's why we would index that field.
>
> **[4:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=299)** Now, if we click on Relation View, we can see a bit more about the two foreign keys that we have.
>
> **[5:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=305)** The constraint names have fk at the front there, which stands for foreign key.
>
> **[5:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=310)** And this is just convention as the index box was as well.
>
> **[5:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=313)** It's a very useful convention, but you could call them what you like.
>
> **[5:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=316)** So on the left is the name, and the behaviors that should be triggered when a relevant row is deleted or updated.
>
> **[5:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=326)** So when deleting the master data, data in the foreign key data in other tables ought to be restricted.
>
> **[5:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=333)** And when the master data is updated, those changes should cascade throughout the database to different tables.
>
> **[5:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=340)** If we tried to update the store_id in the customer table to an ID that doesn't exist in the store table, the database would throw an error.
>
> **[5:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=349)** So it's crosschecking for us to preserve data integrity.
>
> **[5:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=352)** This section on the right, links the foreign keys in the customer table to the fields in their original table containing the master data.
>
> **[6:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=361)** So this says the address_id field from the customer table should match to the address_id field in the address table.
>
> **[6:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=370)** And similarly, the second row, the store_id field in the customer table should match data from the store_id field in the store table.
>
> **[6:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=383)** There are other types of constraint that you can place on your data.
>
> **[6:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=389)** Commonly now, if we were to create this database we would expect email to be a unique value.
>
> **[6:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=394)** And if you wanted to create a unique constraint on the email column, you could highlight, check the box next to email, and then click on Unique.
>
> **[6:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=405)** That would work, if all of the values are already unique.
>
> **[6:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=407)** You might come across some problems, if it turns out that they're not.
>
> **[6:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=413)** It's likely that they wouldn't be unique, in fact, because it says that the default value of the email field is null, which would be very unusual these days.
>
> **[7:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=423)** It's normally a mandatory field now, it's not optional.
>
> **[7:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-indexes-and-keys?u=76281980&t=428)** Coming up, we're going to look at how to visualize your database graphically, and then we'll move on to joining tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (2), [[MySQL]] (1), [[SQL]] (1)
> **Code Identifiers:** store_id (5), address_id (4), last_name (4), customer_id (2), first_name (1)
> **Definitions:** is a  (5), stands for (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **CLI Commands:** make (2), mysql (1)
> **Env Vars:** sql (1)
> **Cross-References:** coming up (1)
> **Analogies:** it's like (1)

#### [EDIT: Visualize your database](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=0)** - [Instructor] Now that we understand a bit more about keys, indexes, and constraints, we're going to move on to see how our tables link together.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=7)** We're going to look at a diagram that shows all of the tables and all of the links.
>
> **[0:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=13)** And we're going to do that using a common database diagram.
>
> **[0:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=16)** Here we are representing the rental table as a box, and in the shaded area at the top you can see the name of the table, it's rental, and then within the paler region underneath, we have rental_id, which is the primary key, P for primary, and three foreign keys listed with an F for foreign.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=36)** If we go and have a look at the rental table in the structure tab, we can see we have a rental_id, which is a primary key, inventory_id, customer_id, and staff_id, so three foreign keys, so that's where I've got that information from to draw that box.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=51)** I'm not listing any other indexes, such as rental date, in my diagram, because they are indexes and unique constraints are kind of internal to their table, they don't tell us anything about how the table's linked together.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=66)** Now we know that the rental table links to the inventory table, so let's take a look at that one next.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=72)** The inventory table has two foreign keys, film and store.
>
> **[1:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=76)** So let's show that one next.
>
> **[1:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=78)** Now we want to show how the rental table and the inventory table link together, and I've done that with a line here that points to the specific fields in each table to which it relates.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=91)** So it's not just linking the boxes together, it's linking specific fields.
>
> **[1:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=94)** And it's easy to spot which, 'cause they're both called inventory_id.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=99)** The inventory_id field in the rental table is a foreign key, of course, and a primary key of the inventory table.
>
> **[1:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=105)** Now we can see the rental table also has connections to the customer and staff fields, so let's take a quick look at those.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=113)** Customer, which has two foreign keys and a primary key, and that's store and address, and then the staff table also has associated store and address data.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=131)** So we can add the customer table and its connector, the customer and rental tables connect on customer_id.
>
> **[2:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=138)** Next, we can look at the staff table and they connect to the rental table on the staff_id.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=143)** We can see that both the customer and staff tables contain address_id, which is a foreign key from the table address.
>
> **[2:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=150)** So both customers and staff have their addresses stored in the same table.
>
> **[2:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=155)** We can also see that both customer and staff tables have an associated store.
>
> **[2:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=159)** And this tells us something about the business model of this DVD rental company, actually, because a customer is linked to a single store, it may just be a primary store, or it may be that customers can only borrow films from one store.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=173)** I've had gym memberships like that.
>
> **[2:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=176)** So a well designed database can imply certain things about the organization it's for.
>
> **[3:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=181)** Next up we can see the address related table of city.
>
> **[3:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=185)** The address table is going to be updated fairly frequently, every time a new customer is set up, but it relies upon a city_id field, which links to the city table, and the city table relies on a country_id field, which relates to the country tables.
>
> **[3:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=200)** So the city and country tables effectively contain lists.
>
> **[3:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=205)** And if we take a quick look at those, there's the city table, lots of different cities, and then corresponding country_id's.
>
> **[3:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=216)** And the country table has 109 countries in it there.
>
> **[3:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=219)** The city and country lists probably don't change very often.
>
> **[3:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=223)** So why bother having these two tables of city and country?
>
> **[3:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=228)** Why not just stick the city and the country_ids into the address table?
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=233)** Basically it's down to [[Data Integrity]], the way this would show this data, the city data would show up in the front end is probably in a dropdown.
>
> **[4:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=243)** So staff, when they're entering a customer_id, would select the city and the country from two different dropdowns, meaning that they haven't got to type the values in and potentially get them wrong, and it's also quicker for them.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=256)** The city and country table almost belong to the address table.
>
> **[4:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=260)** They don't really have any other purpose, they're like supporting reference tables.
>
> **[4:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=265)** Notice that the store table also has an address stored in the address table, so let's add that link in.
>
> **[4:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=273)** And notice too that we have a field called manager_staff_id in the store table, which links to the field called staff_id in the staff table.
>
> **[4:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=284)** Now how do I know that given that they have different names?
>
> **[4:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=287)** How do I know that those two are linked?
>
> **[4:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=290)** If we go to the store table, and look at the structure tab, and go to relation view, we can see here we have a column manager_staff_id, and if I scroll over to the right, this is telling us that it relates to master data saved in the staff_id column of the staff table.
>
> **[5:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=311)** So that's how I knew that there was genuinely a link, even though those two fields have different names.
>
> **[5:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=318)** Next up we have the payment table.
>
> **[5:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=321)** Between them, the rental payment and inventory tables are like the prime movers of this database.
>
> **[5:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=327)** These are the ones that update frequently, every time a movie is borrowed.
>
> **[5:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=332)** Now all of our remaining tables concern films, they come in three mini groups.
>
> **[5:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=337)** We have the film table itself, this is supported by the language table.
>
> **[5:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=342)** Language is a reference table containing a pretty static list of languages, such as English, French, Japanese.
>
> **[5:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=348)** Film uses this list to identify what language the film is in, but it also uses language_id to drive another field called original_language_id.
>
> **[5:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=358)** Presumably if a French film is dubbed to be in English, the language would be English and the original language would be French.
>
> **[6:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=366)** So that was the first of our three mini groups, the second one is film category, which is dependent on category.
>
> **[6:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=372)** And these categories are things like sci-fi, horror, romance and comedy.
>
> **[6:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=380)** And the final mini section we have there is film_actor, and actor.
>
> **[6:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=385)** Now the film table contains one row per film, and you might wonder why film category and film actor are needed, because couldn't this information go straight into the film table and save us a bit of bother?
>
> **[6:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=397)** I suspect that this was done to solve a common problem in [[Database Design]], what I think of as the one to many problem.
>
> **[6:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=404)** There will be multiple actors in each film, and there are probably multiple categories too.
>
> **[6:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=410)** So you could have a romance, which is also a comedy, for example.
>
> **[6:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=414)** To save this information in the film table, we'd have to have multiple values in one cell, or we'd have to repeat the film listing once for each actor or category, that would be quite poor database design.
>
> **[7:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=427)** So hopefully by now you can see that not all tables are created equal, logically they are, but they are used for really different purposes.
>
> **[7:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=437)** There are reference tables, which are rarely updated, and basically a glorified list.
>
> **[7:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=443)** These are used by other tables to help maintain data integrity.
>
> **[7:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=447)** There are semi-static tables, which update for a new customer, new staff member, or store.
>
> **[7:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=454)** And the remaining tables updates every time a rental is made or a new film is brought out, so they are updated much more frequently.
>
> **[7:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=462)** I have created this database diagram just by following the trail of foreign keys, and you can do the same with your database.
>
> **[7:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=470)** It's the fastest way to get well acquainted with the data that's in it.
>
> **[7:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/edit-visualize-your-database?u=76281980&t=474)** Now we're going to move on to joining tables together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (2), [[Database Design]] (2)
> **Code Identifiers:** staff_id (4), inventory_id (3), customer_id (3), rental_id (2), country_id (2)
> **UI Navigation:** go to (2), dropdown (1), select the (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** dvd (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Merge data across tables with JOIN](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=0)** - [Instructor] Sometimes you need data from more than one table.
>
> **[0:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=3)** What if we want a report that shows all customers and their addresses, where the district falls in Buenos Aires.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=11)** We can't do this from the customer table because if we have a look at all the fields in here, there's no address data.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=17)** All we've got is an ID of an address that exists in the address table.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=23)** To run this query, we have to merge or join data from two tables.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=29)** The basic structure of a join is straightforward.
>
> **[0:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=33)** Select star from customer, Join the address table on customer.address ID equals address, address ID, and hit go.
>
> **[0:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=49)** Now, if we look down here, these fields should look familiar, customer, blah, blah, blah, email, address ID, and active create date and last update.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=57)** So all of those fields are our customer table.
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=60)** And then from address ID, we start with our address fields that also go over to last update.
>
> **[1:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=67)** And if we compare the address ID field from the customer table and the address ID field from the address table, we see that they are always identical and they have to be because that's what we joined on.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=81)** We told the database to match these two fields.
>
> **[1:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=86)** So we need to read this query in two parts, select the fields, and then from table one, join table two on.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=97)** The from applies to the whole thing that follows.
>
> **[1:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=101)** Now notice that we haven't just typed address ID here in our on field.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=107)** We've put customer.address ID and address.address ID.
>
> **[1:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=112)** And what we're doing here is supplying the table name before the column name.
>
> **[1:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=116)** So we're saying join these two tables on the address ID in the customer table equaling the address ID in the address table.
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=125)** We couldn't leave those table names out because the column name is ambiguous.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=131)** [[MySQL]] would reach the first address ID, look it up, find two occurrences, and throw an error.
>
> **[2:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=136)** So we repeat the table name with a dot or a point.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=140)** We could use table aliases here to make this a bit neater and easier.
>
> **[2:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=146)** And then our on statement, similarly, can just have C and A and that gives us the same results.
>
> **[2:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=155)** In MySQL, you don't need to have the as keyword when declaring an alias.
>
> **[2:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=160)** You can have it, it's optional.
>
> **[2:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=164)** So let's look at the theory, the principles, of what we are doing.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=167)** Here we have two tables, the address table and the customer table, and I've put some fake ID in.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=173)** So the address table has six rows with IDs one to six and the customer table also has an address ID column and it has five rows.
>
> **[3:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=182)** When we make a join using our [[SQL]], we are returning every row that has a record in both tables.
>
> **[3:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=190)** This is a specific kind of join called an inner join.
>
> **[3:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=194)** There are other joins and we will be looking at that in forthcoming sections.
>
> **[3:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=198)** So when we join these two tables together, one of six rows and one of five, how many rows do you think we're going to get?
>
> **[3:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=205)** We just get four because there are only four records that exist in both tables.
>
> **[3:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=212)** In the customer table, we have an address ID of 18 which doesn't have a match in the address ID table, so that one's been left out.
>
> **[3:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=219)** And in the address table, we have an ID of four and five which don't have corresponding items in the customer table.
>
> **[3:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=226)** So those ones have been left out.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=227)** And that's how we find the four.
>
> **[3:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=229)** This principle of only returning records that exist in both tables can also be shown with a Venn diagram.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=237)** Only the dark shaded area in the middle is going to be returned by this query.
>
> **[4:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=243)** More Venn diagrams are going to pop up in coming sections with different kinds of join.
>
> **[4:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=249)** Now, going back to our query, we only wanted customers with an address of Buenos Aires.
>
> **[4:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=255)** So we need to filter with where.
>
> **[4:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=258)** But where does where go?
>
> **[4:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=260)** Join and on are all part of the from section of our query and where comes after from.
>
> **[4:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=267)** So it goes down here.
>
> **[4:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=269)** So we could say where district equals Buenos Aires.
>
> **[4:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=278)** And there we have our 10 results that we would expect.
>
> **[4:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=281)** If we wanted to just return particular fields, we could use those table aliases again.
>
> **[4:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=287)** Sometimes it's quicker to include the table aliases than to try and figure out which ones are ambiguous and which ones aren't.
>
> **[4:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=295)** So there's our report.
>
> **[4:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=296)** There's our customer name and their address.
>
> **[4:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-join?u=76281980&t=299)** Next up, more on different types of join.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (1)
> **CLI Commands:** mysql (2), find (2), make (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Understand SQL JOINS](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=0)** - [Instructor] Now we're going to look at different kinds of join: inner join, outer join, left join, and right join, using some fake data.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=7)** We've already seen that an inner join and a join means the same thing.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=11)** It's where rows are returned where they exist in both tables and it's like the middle of a Venn diagram.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=17)** Now, here we have table A and table B.
>
> **[0:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=20)** Table A contains days of the week with five rows named Monday to Friday.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=25)** And table B contains four people's names.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=28)** Let's say on each day one person is required to work at a shop.
>
> **[0:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=32)** You can see the query in the arrow.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=35)** How many rows do you think an inner join is going to give us from this?
>
> **[0:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=39)** It gives us four rows.
>
> **[0:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=41)** Friday has disappeared because there's no person ID of seven in table B.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=47)** And we don't see Fatima in the results because there's no person ID of four in table A.
>
> **[0:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=53)** But Fred is down for two days' work.
>
> **[0:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=56)** So while only IDs one, two, and three occur in both tables, we output four rows.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=62)** So that's an inner join. Now for an outer join.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=66)** An outer join returns all rows from table A and B matched together where possible.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=72)** It's probably the least useful of the joins and it's not supported in [[MySQL]].
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=77)** Outer joins are also called full joins and full outer joins.
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=82)** So how many rows are we going to get this time?
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=85)** We've got the same two tables that we had before.
>
> **[1:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=88)** The only difference is this keyword that we've changed.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=91)** This time we get six rows, all the matches that we had before plus Friday and Fatima shown against null values.
>
> **[1:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=100)** A left join is the same as a left outer join.
>
> **[1:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=104)** Here we see table A is on the left.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=107)** If we look at the query in the arrow, you can see table A is listed first and then we have the keywords left join and then we have table B.
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=118)** When you format your query in this way with the from and the join all on one line, it becomes easier to see what's what.
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=125)** A left join will give us everything from the table to the left of the join keyword.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=131)** Here, that is table A.
>
> **[2:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=133)** So how many records will we get?
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=135)** Table A has five rows.
>
> **[2:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=138)** We output five rows.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=140)** The database takes all the rows from table A whether or not there are corresponding records in table B.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=148)** A right join or right outer join does the same as a left join but from a different table.
>
> **[2:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=154)** Just a quick note here.
>
> **[2:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=156)** If you think about the Venn diagram, you can see that a right inner join isn't a thing.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=161)** It wouldn't make sense.
>
> **[2:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=163)** The inner part of the Venn diagram is neither right nor left.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=167)** I wouldn't generally use a right join.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=169)** I would rearrange my table names and use left joins because otherwise it can get really confusing when you're joining more than two tables.
>
> **[2:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=176)** Anyway, they do exist.
>
> **[2:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=178)** So to cover them briefly, the right join will return everything from table B because table B is to the right of the keyword join.
>
> **[3:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=185)** So how many rows this time?
>
> **[3:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=188)** Again, we have five rows even though table B has just four rows.
>
> **[3:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=193)** That's because poor old Fred is down to work two days.
>
> **[3:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=197)** And we see Fatima this time even though she has no corresponding record in table A.
>
> **[3:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=203)** We finish with a brief note on a useful technique.
>
> **[3:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=206)** It's not another kind of join but it can be useful to show all records where there isn't a match.
>
> **[3:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=212)** Generally, I would use this kind of query to spot errors.
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=217)** So I would hope to return a zero result set with this kind of query.
>
> **[3:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=222)** What we're saying is select the day and the person ID from our tables joined as they are joined normally where the person ID is null.
>
> **[3:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=231)** We would hope with [[Data Integrity]] being good that you wouldn't have any null values and therefore that you get a zero result set.
>
> **[3:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=238)** But we have one row returned here, which is Friday because there's one case in which the person ID is missing from table B.
>
> **[4:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=249)** Of course, you could do this as a right join as well.
>
> **[4:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/understand-sql-joins?u=76281980&t=251)** You'd have to change the where clause slightly and you'd get Fatima.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1), [[Data Integrity]] (1)
> **CLI Commands:** mysql (1), make (1)
> **UI Navigation:** select the (1)
> **Analogies:** it's like (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Combine rows with SQL UNION](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=0)** - [Instructor] In previous sections, we've learned how to merge tables with a join.
>
> **[0:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=5)** Joins allow us to merge columns from different tables.
>
> **[0:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=8)** It's like a sort of horizontal merge.
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=11)** So if we start off with two tables of three columns and six rows, as we show in the diagram and we use a join, we would expect to output one table of six columns and six rows, assuming that there was a perfect match in each table for records in the other table.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=29)** Unions are also a way of merging tables, but they work vertically instead of horizontally, and they don't care about matching records.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=37)** So in this case where we have the same two input tables which are three columns and six rows, a union would output three columns, but 12 rows.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=47)** So let's have a look at this query.
>
> **[0:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=49)** Here we have a query that says, select the text address which is there in single quotes, as column name table.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=57)** You can see the column name here, table.
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=60)** And then the date, extract the date from the last update column from address.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=66)** And we can see that's returned us 603 rows, and they all appear to be quite similar.
>
> **[1:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=72)** The text string address, and then the date, 15th of February, 2006.
>
> **[1:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=78)** Now let's just change that.
>
> **[1:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=79)** We're selecting the actor as the tbl.
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=82)** And we've got the same field, last update exists in the actor table.
>
> **[1:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=89)** We click go there.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=91)** So now the table is actor, and the date appears to be the same, 15th of February, 2006, and that's returned us 200 rows.
>
> **[1:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=101)** Now, if we wanted to join these two together, we simply copy, paste and use union.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=113)** We're going to start off using something called union all and I'll show you why in a minute.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=122)** So, how many columns are we going to get?
>
> **[2:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=126)** We're just going to get two when we do our union because this is a vertical merge.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=131)** So what we've got now is 803 rows.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=134)** The first 200 rows are from the actor table.
>
> **[2:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=138)** Let's see if we can find the address ones.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=140)** If we go to page nine, then we start to get the address results, also with the date next to them.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=148)** So union all is literally showing you 200 results from one and then 603 results from the other.
>
> **[2:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=156)** Now, if we change this to union and run that, we get just two rows back when we do that and that's because the union keyword effectively runs a select distinct by default.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=169)** And you might remember that that means it only returns us unique values.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=173)** So what this is telling us is that the last update column only contains the 15th of February, 2006 in either table.
>
> **[3:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=181)** Now, the query that we've run is pulling a very similar field, two very similar fields, into the same field heading, but you can in fact pull completely different data into the same column and it can be really misleading.
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=195)** So here, let's say select address as tbl and instead of pulling the date, let's pull in the city ID from address and that's still worked.
>
> **[3:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=208)** Let's just change that to union all so that we should get 803 rows.
>
> **[3:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=215)** There we go.
>
> **[3:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=217)** So we have the actor table with the date and then if we go to page nine, then we've got the address is showing this information is coming from the address table.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=227)** And now instead of a date, even though it's in a column called date last update, we now have a set of city IDs, which obviously are numeric.
>
> **[3:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=236)** This can be really risky.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=237)** You need to take a lot of care with union and union all.
>
> **[4:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=242)** It's absolutely fine, in fact, often necessary to combine two columns of different origins into one column.
>
> **[4:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=248)** But I find it's best to include an alias column to help describe them and stop you making errors.
>
> **[4:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=256)** You can still filter statements within union all because essentially, you have two completely separate [[SQL]] queries here with a keyword in between them.
>
> **[4:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=265)** So if you wanted to place a filter on the actor table, you would do it here.
>
> **[4:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=271)** And if you wanted a filter on the address table, you would do it here, like so.
>
> **[4:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=281)** And you can see, that's returned us just eight rows there.
>
> **[4:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/combine-rows-with-sql-union?u=76281980&t=284)** Coming up, we're going to look at how to merge tables using the in keyword.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **UI Navigation:** go to (2), select the (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Best Practices:** it's best to (1)

#### [Merge data across tables with IN](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=0)** - [Instructor] I want to show you another way of using data from two tables.
>
> **[0:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=4)** It's not a join. It's not a union.
>
> **[0:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=6)** And it's a bit of a hack, to be honest.
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=7)** I wouldn't generally use it.
>
> **[0:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=8)** But if you are looking at queries that other people have written, you may have come across this.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=12)** So you need to know that it exists.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=15)** So we're looking at the customer table where the first name is Mary, and you can see we've got MARY SMITH down here, and she has a customer ID of 1.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=24)** And what we're going to do is we're going to use this query to filter another query.
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=31)** Now, let's say, we just returned the customer ID of Mary, which as we know is 1.
>
> **[0:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=39)** And then what we're going to say is SELECT everything FROM the rental table.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=45)** So we want to see all the transactions that have happened, WHERE the customer_id is IN.
>
> **[0:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=53)** We've seen the IN keyword before.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=57)** But last time, we supplied a set of text items in the bracket.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=62)** I think it was Penelope Nick and the Ed that we had inside the IN before.
>
> **[1:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=67)** So previously, we used IN to mean matches any of the following.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=71)** And it still means the same thing here.
>
> **[1:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=73)** Select everything from the rental table, where the customer ID matches any of the customer IDs returned by this query.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=81)** Now, as it happens, we know there's only one customer returned by this query, but it could return 58, that would be fine.
>
> **[1:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=88)** So here we have 32 records.
>
> **[1:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=90)** So Mary has clearly a film fanatic and has rented lots of DVDs in her time.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=96)** You could still add filters in here.
>
> **[1:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=99)** You could add further filters onto our rental query.
>
> **[1:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=103)** So say, WHERE field_name =, whatever, 5, I'm making this up, obviously.
>
> **[1:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=110)** AND, so there we've got two queries placed onto the rental table.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=114)** And you could place small queries, of course, on the customer table.
>
> **[1:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=118)** What you can't do with this method is display results from multiple tables.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/merge-data-across-tables-with-in?u=76281980&t=122)** We are using one query just to filter the other table, and we will be using this in the very last chapter of this course.

> [!info]- Semantic Content
>
> **Env Vars:** where (2), mary (1), smith (1), select (1)
> **SQL:** where (2), select (1)
> **Code Identifiers:** customer_id (1), field_name (1)
> **Speakers:** - [instructor] (1)

#### [Select from a selection with subqueries](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=0)** - [Instructor] We've already seen a nested query or a subquery where we use a SELECT statement to place a filter on a broader SELECT statement.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=9)** And in this section we're going to do something slightly more complex where we use a SELECT statement to return results to another SELECT statement.
>
> **[0:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=19)** So here we have a familiar query, SELECT first_name FROM actor and we're going to call that result set f and then we say SELECT F.first_name FROM, like that.
>
> **[0:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=36)** And it's returned us the same first names that we had before, as you would expect.
>
> **[0:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=41)** So on its own, this query isn't useful but the syntax is useful.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=45)** And if you come across a query like this you should always try to make sense of it from the inside out.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=51)** So let's start with the middle part of the query, the bit in brackets, SELECT this column first_name FROM actor and call that result set f.
>
> **[1:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=63)** And then from the result set f, return me the first name.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=68)** If we didn't use an alias here, this result would fall over.
>
> **[1:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=75)** Even though this query looks as though it ought to work.
>
> **[1:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=79)** There we go.
>
> **[1:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=80)** Every derived table must have its own alias.
>
> **[1:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=83)** The field first_name that we are trying to ultimately select would appear to be ambiguous to the database in this query.
>
> **[1:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=90)** So alias or no go.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=92)** Obviously you could call the alias anything.
>
> **[1:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=94)** You don't need to call it f.
>
> **[1:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=96)** Now what happens if we gave the field name in the subquery an alias as well?
>
> **[1:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=102)** So SELECT first_name as fn for first name, and again you can call that anything.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=107)** So now we're using two different kinds of alias.
>
> **[1:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=110)** We're using f to refer to the results set or in [[MySQL]] terminology, a derived table, and we're using fn to return, to refer, sorry, to the field name, first_name.
>
> **[2:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=123)** If we run this, it throws an error and that's because f.first_name is no longer recognized.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=131)** That's 'cause we've renamed it, haven't we.
>
> **[2:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=134)** Our sub query returns a single column and it's now called fn.
>
> **[2:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=139)** So the outer query is looking for first_name and not finding it.
>
> **[2:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=143)** If we wanted to return the results set we would say f.fn.
>
> **[2:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=147)** So the column fn from the results set called f.
>
> **[2:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=152)** And there we go. We can see that's worked.
>
> **[2:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=154)** Now in practice, of course, nobody would use this sort of query because the same result can be achieved much more neatly and efficiently with the first statement.
>
> **[2:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=162)** The main time you would want to use this is when you want to return different calculations into different fields.
>
> **[2:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=168)** Particularly where the calculations are based on different tables.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/select-from-a-selection-with-subqueries?u=76281980&t=173)** And we see more on this in later sections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1)
> **Code Identifiers:** first_name (8)
> **SQL:** select (8)
> **Env Vars:** select (8)
> **CLI Commands:** make (1), mysql (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Join tables](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=0)** - [Instructor] Conceptually, this challenge is very simple.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=9)** You want to return all data from the film, film_category, and category tables, filtering for comedies.
>
> **[0:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=17)** Last time we filtered for a film type in a challenge, we used the like keyword and the description field from the film table to filter for drama types.
>
> **[0:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=26)** But that was a bit of a hack, really.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=29)** The category table is what stores actual film type.
>
> **[0:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=35)** You can see we have action, animation, and then number five there is comedy, and this is what we're going to filter on.
>
> **[0:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=42)** So this challenge is all about joining tables together in order to perform a proper filter.
>
> **[0:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=49)** In query terms, we want to return all records from the film, film_category and category tables, filtering on category.name = "comedy".
>
> **[1:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/challenge-join-tables?u=76281980&t=60)** You should be able to complete this in five minutes.

> [!info]- Semantic Content
>
> **Code Identifiers:** film_category (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Join tables](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=0)** - [Instructor] We can start by joining just two tables together.
>
> **[0:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=9)** This could be film and film_category or film_category and category because there isn't a shared field directly between the film and category tables.
>
> **[0:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=19)** So whichever way you do it is fine but I'm going to join SELECT * FROM film f JOIN film_category ON film_category fc.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=38)** I'll give them aliases to make life easier later on.
>
> **[0:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=41)** F.film_id equals fc.
>
> **[0:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=45)** So we're telling the database how to knit together the records that we're finding.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=51)** Now, notice here that there are 1,000 rows returned.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=55)** And notice also that we have this message up here, which doesn't grab the attention 'cause it's not in red.
>
> **[1:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=61)** But it does become very significant later.
>
> **[1:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=64)** The current selection does not contain a unique column.
>
> **[1:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=68)** So we've got two film_id columns returned, for example.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=71)** And they are not prefaced in the results table with f and fc.
>
> **[1:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=77)** So the database knows that it might get a bit confused later on and indeed, it will.
>
> **[1:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=84)** So for now, let's carry on building our query.
>
> **[1:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=87)** We're going to join the next table.
>
> **[1:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=90)** I'm going to say JOIN the category table, c, ON c.category_id equals fc.category_id.
>
> **[1:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=104)** And let's return that.
>
> **[1:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=106)** And once again, we have 1,000 rows and once again, we have this warning up here.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=113)** Now we're going to try and filter our results.
>
> **[1:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=116)** So we're going to say WHERE c.name is equal to comedy.
>
> **[2:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=127)** And it appears to have worked but we still have 1,000 rows.
>
> **[2:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=132)** And that should ring some alarm bells.
>
> **[2:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=133)** So I'm just going to copy that.
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=135)** I want to have a quick look in the category table.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=140)** So it's unlikely that all 1,000 films are down as comedies because you can see, there's 16 different categories and if we look in the film_category table, you can see it's about maybe 1 in 10 or even fewer that are actually comedies.
>
> **[2:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=158)** So we've got a problem with our query.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=161)** Let's run that again.
>
> **[2:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=165)** It shouldn't be returning us 1,000 rows.
>
> **[2:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=169)** And the problem with the query is what the database has flagged up here.
>
> **[2:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=173)** It's getting confused because there isn't a unique column.
>
> **[2:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=178)** So one way around this, instead of returning all of the rows, if we return the description field, which only exists in one table, and then return the category name.
>
> **[3:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=200)** Let's take this filter off for a second.
>
> **[3:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=208)** We can see we have a lot of actions to begin with, and I'm not going to scroll through all 1,000 but we can see we've got 1,000 in there now.
>
> **[3:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=220)** And then we're going to add that filter back in WHERE c.name is equal to comedy.
>
> **[3:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=229)** And this time, we have 58 rows returned, which is rather better.
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=233)** So this wasn't meant to be a trick query.
>
> **[3:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=237)** In fact, I only noticed the issue myself as I came to do the solution.
>
> **[4:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=242)** But it is a really good learning point to look at the messages that you are given and to understand the significance for the database on having a unique column.
>
> **[4:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=250)** And it's still telling us well, I don't have a unique column, so I'm upset about that.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=254)** So I'm going to give it one just to make the message go away.
>
> **[4:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/solution-join-tables?u=76281980&t=258)** And we'll say concat the film_id, underscore.

> [!info]- Semantic Content
>
> **Code Identifiers:** film_category (5), film_id (3), category_id (2)
> **SQL:** join (2), where (2), select (1)
> **Env Vars:** join (2), where (2), select (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 5. More Advanced SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Save your queries using a VIEW](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=0)** - [Instructor] In this section, we're going to look at views.
>
> **[0:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=3)** The [[Microsoft Word|word]] view has a really specific meaning in the world of [[Databases]].
>
> **[0:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=7)** A view is a stored query.
>
> **[0:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=10)** If you look at the breadcrumb bar, we are at the database level in our hierarchy.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=15)** And if you come to the navigation on the left and we close the table's hierarchy, you can see we have functions, procedures, and views as well as tables.
>
> **[0:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=24)** And I should say, in this chapter where we look at these three things as well as variables, what follows relates just to [[MySQL]].
>
> **[0:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=31)** Views, functions, procedures and variables are dealt with quite differently on the different types of [[SQL]], but the principles are the same.
>
> **[0:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=38)** So, for MySQL, we're going to expand the hierarchy for views, and you can see, we have seven views stored already for us.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=46)** You can create and save your own view, but we're going to look at the stored views that SeQuiLa offers us.
>
> **[0:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=52)** So, to run a view, you can click on it.
>
> **[0:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=54)** I've just clicked on actor underscore info, and it returns us some data.
>
> **[0:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=59)** If we scroll down, we can see we have tabular data returned to us.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=65)** It looks very much like a table.
>
> **[1:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=66)** We have actor ID, first name, last name, and then film info.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=71)** So, it looks as though we might be looking at a table, but don't be fooled.
>
> **[1:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=75)** With tables data is stored in fields and rows, but with a view it is just the query that is stored, and it runs when you click on it.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=85)** In this case, it runs to the actor table and the film table by the look of things, gathers data from both, joins them together and returns them to us in a table, and we're going to look at how it does that.
>
> **[1:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=98)** So, let's take a look inside the query and to do that, we can say, show, create view, click go.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=109)** It may be that you can only see a little bit of this query, which is in the create view column.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=114)** If that's the case, click options, and you've probably got partial texts, which is the default selected.
>
> **[2:01](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=121)** So, click full texts and then go, and you'll be able to see all of the query in one go, and we're most interested in the create, and then, from the word view, down.
>
> **[2:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=135)** So, what I've done is copy paste that into Atom, a text editor, to make it a bit bigger, and a bit easier for us to look at it.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=144)** The first thing to notice is that all of the tables have been given aliases, which is really important.
>
> **[2:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=150)** So, it says, create view, actor info, as select a.actor ID.
>
> **[2:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=156)** And then, there's an alias for that column name as well.
>
> **[2:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=159)** So, it's not select actor ID, it's select a.actor ID.
>
> **[2:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=164)** And if you scoot down to the bottom of the query, it says from bracket, bracket, bracket actor a.
>
> **[2:52](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=172)** Every single table here has an alias.
>
> **[2:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=175)** Without these aliases the field name would often be ambiguous.
>
> **[2:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=179)** The way to read this query is in three sections.
>
> **[3:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=182)** At the top, we have ordinary column names after the word select.
>
> **[3:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=187)** So, they are the columns that we want to return.
>
> **[3:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=190)** You will remember that there are four columns in our query when we clicked on it.
>
> **[3:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=195)** Then we have a middle section beginning with group, concat bracket, and ending with, as film info.
>
> **[3:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=203)** And that's probably the most important and complicated section of the query.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=207)** And all of this part of the query is dedicated to one column, which is the film underscore info column.
>
> **[3:34](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=214)** Just remind you of that.
>
> **[3:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=219)** Just run the query again.
>
> **[3:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=223)** And we have actor ID, first name, last name and film info.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=227)** Film info is clearly where the important stuff is happening.
>
> **[3:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=231)** So, the middle section is dedicated to that fourth column.
>
> **[3:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=235)** And then, the final section, we have the from and join statements, which list all the tables and how those are connected to each other.
>
> **[4:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=243)** So, let's have a look at the output of this again, which is kind of the target, so we know where our query is trying to get to.
>
> **[4:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=250)** And we're just interested in the film info column for the moment.
>
> **[4:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=254)** We've got an actor name, Penelope Guiness, and against that, we've got all the films that she appears in, in the world of SeQuiLa that is, and they are organized in a certain way.
>
> **[4:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=264)** So, the films are organized into film categories, animation, children, classics, comedy, et cetera, which are followed by a colon and separated by semicolons, and they are organized in ascending alphabetical order.
>
> **[4:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=278)** So we have A, and then some Cs and then a D and then an F and so forth.
>
> **[4:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=282)** Within each film category, we have film names in the world of SeQuiLa.
>
> **[4:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=286)** So, if you look at classics, we have Color Philadelphia, and then a comma, and then Westward Seabiscuit.
>
> **[4:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=293)** So, there's two films there separated by commas and they are also arranged alphabetically ascending.
>
> **[4:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=299)** So, this is an example of the one to many relationship I mentioned earlier, which often happens in databases.
>
> **[5:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=304)** For every one actor, there are multiple film categories and for every film category, there are multiple films.
>
> **[5:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=312)** This query has completely reorganized our tabular data.
>
> **[5:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=315)** It's taken two tables, one with 200 actors and another with a thousand films and joined them together in a new way.
>
> **[5:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=323)** This would take you a long time to do in [[Microsoft Excel|Excel]], if you just downloaded all the data and then tried to match them up.
>
> **[5:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=329)** So, let's look again at how the query achieves this.
>
> **[5:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=332)** The fourth column, remember, is obviously key.
>
> **[5:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=335)** All of this middle section is dedicated to returning values into the fourth column, and we can see it uses two group concat statements, one nested inside of the other.
>
> **[5:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=346)** You may remember that group concat merges the contents from multiple rows, and it's the text contents usually.
>
> **[5:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=354)** Now, with all complex queries, we start in the innermost part, the middle, and we work our way out.
>
> **[6:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=360)** So, if we look at the second group concat statement, it says select group concat F dot title, that's film title, order by film title ascending with a separator of comma.
>
> **[6:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=372)** So, where we saw classics and Westward Seabiscuit, and I think animation, Anaconda Confessions, I think, and they were separated by a comma.
>
> **[6:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=381)** That is what this part is returning.
>
> **[6:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=384)** It's saying merge all of our film titles together, all of them alphabetically ascending with just a comma.
>
> **[6:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=391)** Now, we can actually just run parts of this query on their own.
>
> **[6:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=396)** And then, you get to see which parts of the code are performing, which functions a bit more clearly.
>
> **[6:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=401)** So, I'm going to copy and paste that
>
> **[6:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=409)** and I'm going to select full text so I can see what's going on.
>
> **[6:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=415)** So, by doing this, we get a list of all films in alphabetical order, separated by commas.
>
> **[7:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=420)** At the moment, they're all in one cell and they're not grouped.
>
> **[7:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=423)** If you look at the bottom right of the cell, you can see Alamo.
>
> **[7:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=426)** So, we haven't even got past the As.
>
> **[7:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=428)** There's so much text in here it's got cut off, and you can see in the top left of the cell, Academy Dinosaur, probably 10 times, at least there.
>
> **[7:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=436)** So, it's repeated.
>
> **[7:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=438)** So, we take this mass of film names.
>
> **[7:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=440)** That's what this very middle section is doing.
>
> **[7:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=444)** And then, the distinct concat C dot name colon, is taking the unique values, that's the distinct, and it's adding in the film category name and a colon.
>
> **[7:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=456)** It's imposing a bit of order on this mass of films.
>
> **[7:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=459)** Once we've done that, we perform a final group concat, which organizes by film category name using a separator of a semicolon.
>
> **[7:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=468)** And this is how we get the reorientated and merged data that we see in the results page.
>
> **[7:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=474)** Now, if you had gone to the trouble of creating this query, you may well want to reward yourself by saving it.
>
> **[7:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=479)** And that way you can run it whenever you like, just by clicking on it.
>
> **[8:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=483)** You can also join views to tables or views to other views.
>
> **[8:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=487)** So, you can reference it in your queries.
>
> **[8:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=491)** To do that, you could just to create view and then you would put the view name as and this is MySQL.
>
> **[8:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=502)** Remember, this is different across the different types.
>
> **[8:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/save-your-queries-using-a-view?u=76281980&t=505)** And then, you would begin your query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[MySQL]] (3), [[Databases]] (2), [[SQL]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** mysql (3), make (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Tools:** atom (1), anaconda (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Use variables](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=0)** - [Instructor] Now we're going to look at variables.
>
> **[0:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=2)** A variable is a user defined keyword that's used to store data and that data might just be a number or a piece of text, a date, but it could also be a whole result set from a query.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=15)** So with variables there are two obvious ways that you could use them, one is as a filter which is what we're going to look at first.
>
> **[0:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=23)** And then the other way is to store results into a variable with select into, and the reason, looking first at the using a variable as a filter, the reason you would want to use a variable is if you've got a particularly long query and you are making reference to an ID say, which is liable to change and perhaps you're making reference to it multiple times then with a variable, you can just update the variable in one place at the top of your code, nice and neat, and you are done.
>
> **[0:51](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=51)** You don't have to go sifting through your code.
>
> **[0:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=54)** So in [[MySQL]], to declare a variable you use the SET keyword, SET, and you use the at sign, @variable1, and I've just made that up.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=65)** You could call it Fred or Mary, whatever you fancy, SET @variable1 = 5; and then we put a semicolon at the end because that is the end of one query and your database needs a semicolon to tell it to sort of execute that query before moving on to the next one.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=85)** Underneath we've got our familiar SELECT * FROM actor WHERE actor_id is less than five and now we want to change that to our variable name and hit go and you can see it's returned us the same result set and it split it into two queries for us as well.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=109)** Now, incidentally, if you can see here that we have #MySQL, hashtag in MySQL is a way of commenting out a line, so that isn't a piece of code and it won't run.
>
> **[1:59](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=119)** That was just to let you know and let me know that that was MySQL way of declaring a variable because of course they're all different.
>
> **[2:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=126)** So the [[Microsoft]] way of doing it, and this only works in what's called procedural [[SQL]], which is where you have different lines of SQL, different queries that run one after the other and are related to each other.
>
> **[2:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=140)** You have to use a sort of more complicated set of extensions to the language.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=144)** So in Microsoft, that's called Transact SQL.
>
> **[2:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=147)** Obviously I can't run this query, but the format is similar.
>
> **[2:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=151)** You would say DECLARE instead of SET, you'd use the at sign again, so @variable1, you give the data type, in this case varchar with a character length of 30 and that's the first query.
>
> **[2:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=166)** The second one is setting your variable to be, in this case, text 'PENELOPE' and then your familiar looking query SELECT * FROM actor WHERE first_name is @variable1;, which can have a semicolon too.
>
> **[3:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=180)** Now, the other thing that you could do with Microsoft is put this all on one line here.
>
> **[3:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=186)** So DECLARE your variable, data type, and what it's equal to all in one go.
>
> **[3:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=192)** That's how you do it in Microsoft.
>
> **[3:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=196)** In Postgre, again, you have to use the procedural extension PL/pgSQL, rolls off the tongue.
>
> **[3:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=202)** And here again you use the DECLARE keyword, DECLARE variable1 as text.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=207)** In this case, that's the data type in Postgre, and then you have a BEGIN and an END statement, SELECT * FROM employees WHERE the first_name is equal to and you would say variable1.
>
> **[3:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=221)** And then finally in Oracle, again we would say DECLARE variable1, there's no at sign this time, still need a data type, you've got your BEGIN and END again, SELECT * FROM my_table WHERE field_name &gt; variable1, for all of these queries it wouldn't be worth it because clearly it's easier just to modify your filter.
>
> **[4:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=240)** But if you think of the view statement that we had, how long that was, if that was the sort of statement that had a changeable ID field or name field in it, you could save yourself or your colleagues a lot of time by using a variable.
>
> **[4:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=255)** And we'll be seeing more on variables in the coming sections.
>
> **[4:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=259)** Now I said that we would look at two different cases for using variables.
>
> **[4:23](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=263)** So the first one was variables as filters and that's what we've just done.
>
> **[4:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=267)** And the second one was storing your results set into a variable and for that, we use SELECT INTO and SELECT INTO works across all the different [[Forms]] of SQL.
>
> **[4:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=279)** This example I'm showing you here is a MySQL version but you can use SELECT INTO across all the main versions.
>
> **[4:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=286)** So let's have a look here, SELECT column1, column2 or field one, field two, INTO @x, @y, these are your variables, FROM table1 LIMIT 1;.
>
> **[4:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=298)** Now it's important that your query, your SELECT part of your query returns just one row and that the number of variables you have is equal to the number of columns.
>
> **[5:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-variables?u=76281980&t=311)** Now in the later sections we will be building on this knowledge now of variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[Microsoft]] (4), [[SQL]] (4), [[Forms]] (1)
> **Env Vars:** select (9), declare (5), set (4), where (4), sql (4)
> **SQL:** select (9), where (4)
> **Code Identifiers:** first_name (2), actor_id (1), pgsql (1), my_table (1), field_name (1)
> **CLI Commands:** mysql (5)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Use functions](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=0)** - [Instructor] Now we're going to look at functions.
>
> **[0:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=2)** You may be familiar with functions already from Visual Basic or [[JavaScript]] but if you've never used a programming language, you've probably used a function in [[Microsoft Excel|Excel]].
>
> **[0:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=11)** So if you've typed in something like equals sum and then you've given a range of cells and you've hit enter, you've been using a function.
>
> **[0:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=20)** And Excel will go off and count up all the values in the range of cells and return you a value.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=25)** That's what functions do, typically.
>
> **[0:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=28)** You give them an input and they calculate some sort of output along rules that you specify and return you with usually a number or a text or a date.
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=37)** So what they don't do is they don't run off and edit data.
>
> **[0:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=40)** They don't delete rows of data.
>
> **[0:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=42)** You give them an input and they calculate an output for you.
>
> **[0:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=47)** You can see from the breadcrumb bar that we are at the top level of the sakila database and we have functions, procedures, tables, and views.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=55)** And this time we're looking at functions.
>
> **[0:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=57)** And the sakila database has three for us already defined.
>
> **[1:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=62)** We're going to look at inventory held by customer.
>
> **[1:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=65)** So I've just clicked on it there.
>
> **[1:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=67)** And if we scroll down, there's a definition there.
>
> **[1:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=71)** Now we could have returned this definition programmatically in [[MySQL]] by saying, show create function and then using the function name, but this is just as easy to do.
>
> **[1:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=81)** And just a reminder that what follows is specific to MySQL.
>
> **[1:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=85)** So I've just copied that and pasted it into atom so that we can look at it a bit more easily.
>
> **[1:32](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=92)** So, first of all, we have a login data root at local host which we can largely ignore.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=97)** And then we have function and the function name, inventory held by customer.
>
> **[1:42](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=102)** After inventory held by customer, we have brackets, P inventory ID, int and int means integer.
>
> **[1:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=109)** P inventory ID is a variable name.
>
> **[1:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=113)** So what does it mean to have that in brackets after the name of the function?
>
> **[1:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=117)** When we use this function in [[SQL]], we're going to use it much like this.
>
> **[2:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=122)** Select inventory help our customer.
>
> **[2:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=125)** And then we're going to supply a number in the brackets and that's the P inventory ID.
>
> **[2:09](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=129)** And the number needs to be an integer.
>
> **[2:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=132)** And then this line says returns int.
>
> **[2:16](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=136)** So this function is expecting an integer as an input and it's going to give us an integer as an output as well.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=144)** That's the whole purpose.
>
> **[2:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=147)** So let's get rid of that.
>
> **[2:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=149)** You can see that we have begin and end declarations to this function.
>
> **[2:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=155)** And after that, we have a variable declaration and then an exit handler at the top.
>
> **[2:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=161)** Now this might look a bit odd because we are declaring a variable using the declare statement.
>
> **[2:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=167)** And we've just seen that we can use the set statement with an @ sign to declare a variable, like so.
>
> **[2:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=176)** So why are these two things different?
>
> **[2:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=178)** They're both variables in MySQL but they're different kinds.
>
> **[3:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=183)** Where you see the set keyword followed by the @ sign, you're using a user defined variable and these are sort of longer lasting variables, if you like.
>
> **[3:14](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=194)** And let me tell you a bit more about that.
>
> **[3:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=197)** If you tried to reference the customer ID after the end keyword, MySQL wouldn't know what you were talking about.
>
> **[3:27](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=207)** Where you have a variable name and the declare keyword with no @ sign, you're using a local variable and these cease to exist after the end keyword.
>
> **[3:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=218)** If instead, we wanted to make reference down here to the user defined keyword, that would be fine.
>
> **[3:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=226)** They're longer lasting.
>
> **[3:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=227)** They exist outside of the begin and the end declarations.
>
> **[3:53](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=233)** But in a function like this, it's nice and tidy to have those variables disappear after the end statement.
>
> **[3:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=238)** So we don't need to use these larger user-defined ones, we can use local variables.
>
> **[4:05](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=245)** In our second declaration statement, it says declare exit handler for not found return null, which looks like really bad grammar.
>
> **[4:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=252)** And what it's saying is if the query finds no rows at all, then return a null.
>
> **[4:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=258)** So show on screen the [[Microsoft Word|word]] null.
>
> **[4:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=262)** After that we have what looks like a regular select statement except that this one has an into keyword.
>
> **[4:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=268)** And what it's saying is select the customer ID and pop it into a variable called V customer ID.
>
> **[4:35](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=275)** V Customer ID is what is going to be returned, as in shown on screen.
>
> **[4:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=279)** And you can see that further down the query next to the end declaration.
>
> **[4:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=283)** It says return V customer ID.
>
> **[4:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=285)** So that is what we're going to see on screen.
>
> **[4:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=287)** So what's this select statement doing?
>
> **[4:49](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=289)** It says select the customer ID from the rental table where the return date is null, that is to say the DVD is still on loan, and for the inventory ID matches the number that's been given in the parameters.
>
> **[5:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=302)** So let's run this and make a bit more sense of what's going on.
>
> **[5:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=306)** Now I haven't just made that number up.
>
> **[5:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=307)** I've had a look through the tables to try and work out a sensible inventory ID to use.
>
> **[5:13](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=313)** So select inventory held by customer 2047, returns us 155.
>
> **[5:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=318)** So have a quick look back at our query.
>
> **[5:21](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=321)** We have supplied an inventory ID, that is to say a piece of stock or DVD, with a number 2047 in the database.
>
> **[5:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=331)** And this query is returning us the customer ID of the person who still has that on loan.
>
> **[5:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=337)** What if we tried a different number?
>
> **[5:41](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=341)** And again, here's one I prepared earlier.
>
> **[5:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=343)** Going to try 367.
>
> **[5:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=344)** You can see we returned a null.
>
> **[5:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=346)** So now that could be a couple of different things.
>
> **[5:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=348)** It may be that there's no customer has ever hired DVD 367 or it may be that no customer has it currently on loan.
>
> **[5:57](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=357)** So let's have a quick look at what's going on.
>
> **[6:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=360)** Select everything from the rental table where the inventory ID is 367 and we get five rows.
>
> **[6:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=367)** So this DVD has been rented before, but if we loo, the return date is filled in in every case, which means all of those DVDs have been returned.
>
> **[6:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=377)** There's no outstanding item.
>
> **[6:19](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=379)** And that's why we got the null when we ran our function.
>
> **[6:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=382)** Our declare exit handler came into play.
>
> **[6:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=386)** Now on its own, this function is a little bit unhelpful.
>
> **[6:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=389)** Knowing that customer 155 has a movie that's still on loan is not really human readable but functions can be useful as part of a query.
>
> **[6:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=397)** And that's really how they're used.
>
> **[6:39](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=399)** So let's say you're chasing up on an item of stock and you want the email address for the customer who still has a movie on loan.
>
> **[6:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=408)** Then we could say select email from the customer table
>
> **[6:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=416)** where inventory held by customer 2047
>
> **[7:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=430)** is customer ID and inventory held by customer 2047
>
> **[7:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=444)** is not null.
>
> **[7:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=448)** So this time we're using our function in a query to get the email address of anybody who still has an item of stock on loan.
>
> **[7:36](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=456)** And we know that that was customer 155 and there we have the email of the offending customer, as it were.
>
> **[7:43](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=463)** This tells us two things at once then.
>
> **[7:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=465)** The customer does indeed have the movie still in her possession.
>
> **[7:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=468)** And there's the email address to contact her.
>
> **[7:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=470)** Using a function here is a substitute really for a subquery or joining tables together.
>
> **[7:56](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=476)** It can be a lot quicker.
>
> **[7:58](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-functions?u=76281980&t=478)** And for common queries, this is a way of storing them so that you and other people can use them easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[Microsoft Excel|Excel]] (2), [[JavaScript]] (1), [[SQL]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** mysql (4), make (2)
> **Env Vars:** dvd (4), sql (1)
> **Definitions:** is a  (4)
> **UI Navigation:** select the (2), scroll down (1)
> **Tools:** atom (1)
> **Speakers:** - [instructor] (1)

#### [Use procedures](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=0)** - [Instructor] Unlike functions, stored procedures tend to do something.
>
> **[0:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=4)** So typically, they perform an action, like edits in data or deletes some.
>
> **[0:08](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=8)** We're going to look at a very simple one that just returns a value.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=12)** We're going to look at the film not in stock stored procedure, and this is used to work out which copies of a film are on loan from a particular store.
>
> **[0:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=22)** Now, we've taken this definition from, stored procedures film not in stock, and to click on that.
>
> **[0:30](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=30)** And it has a definition section, just like the others.
>
> **[0:33](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=33)** And note that this what follows is specific to [[MySQL]].
>
> **[0:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=37)** There's also this section above called parameters, and you can see there are three parameters, two input parameters and one output parameter.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=46)** Now, unfortunately, you can't see the full title here.
>
> **[0:50](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=50)** It says, p film id, so that's the first input, p store id which is the second input, and then an output parameter which we've not seen before, p film count.
>
> **[1:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=63)** So let's see, we've got film id, store id, and count, and let's pop over and have a look at our query.
>
> **[1:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=70)** We're selecting an inventory id from the inventory table, where the film id is equal to the first parameter, the store id is equal to the second parameter, and the inventory is not in stock.
>
> **[1:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=82)** So that line there is using a function.
>
> **[1:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=86)** And it's worth noting, you can use functions in stored procedures in MySQL, but you can't do the reverse.
>
> **[1:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=91)** So we can't call a stored procedure from a function, but we can call a function from a stored procedure.
>
> **[1:37](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=97)** And then it says, select any rows that are found into our output parameter, p film count.
>
> **[1:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=105)** Let's try using it.
>
> **[1:47](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=107)** To make sense of all of that, we use the call keyword, call film not in stock.
>
> **[1:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=114)** And I'm going to look up film with an id of 39, a store of two, and then our output parameter, I'm providing a user defined variable at count, and you could use at Fred, or at anything, there, that's fine.
>
> **[2:11](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=131)** And the purpose of that is if you had a multi-line query, you could then say, select star save from the inventory table, where inventory.
>
> **[2:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=144)** You could write lots of queries here.
>
> **[2:26](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=146)** I'm just showing an example.
>
> **[2:28](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=148)** Equals at count, so you could use your var, your output parameter, your variable, you could use on a second line of [[SQL]] and subsequent lines.
>
> **[2:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=158)** So, that's there to help you out.
>
> **[2:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=160)** So, we want to know for film 39 and store two, are any of those currently on loan?
>
> **[2:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=168)** I click go, and we've got an inventory id of one seven seven.
>
> **[2:54](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=174)** So, I'm going to write some more normal queries to try and puzzle out how we've got to this one seven seven and make sense of it.
>
> **[3:02](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=182)** What we can do is say, select everything from the inventory table, where, film id is 39, and the store id is two.
>
> **[3:17](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=197)** So let's start with that.
>
> **[3:20](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=200)** Now we've got four rows.
>
> **[3:22](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=202)** Now the inventory table remember, is all about what stock the DVD rental store has, if it were full, if it had all of its DVDs.
>
> **[3:31](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=211)** So, there are four copies of this film, available to store two in general.
>
> **[3:38](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=218)** The rental table is the one that tell us, whether they're currently with a customer or in the shop.
>
> **[3:44](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=224)** And this function, inventory in stock, inventory id, is running off to the rental table, and checking in with each of those inventory ids, one seven seven, one seven eight, one seven nine, and one 80, is that currently in or out of stock according to the rental table?
>
> **[4:03](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=243)** So, here we have one seven seven to one 80.
>
> **[4:06](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=246)** Let's have a look.
>
> **[4:07](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=247)** So let's start now from the rental table, where, the inventory id, is in, one seven seven, seven eight, one seven nine, and one 80.
>
> **[4:24](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=264)** Now, we've got 12 rows there.
>
> **[4:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=269)** And if we look along, only one of them has a return date of null, and that tells us that only one of these copies is currently loaned out and not been given back.
>
> **[4:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=280)** And you can see that that's the one with an inventory id of one seven seven.
>
> **[4:45](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/use-procedures?u=76281980&t=285)** So that's how this stored procedure worked out the number, one seven seven to return it to us, and I think you'll agree, it's a lot quicker running that stored procedure, than running all of these separate queries through the different tables ourselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (1)
> **CLI Commands:** mysql (2), make (2)
> **Env Vars:** sql (1), dvd (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Continuing Your SQL Learning Journey

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and additional resources](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=0)** - [Emma Saunders] Thank you for participating in this course on [[SQL]].
>
> **[0:04](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=4)** I hope that you are now confident to design your own queries and run reports on your database directly.
>
> **[0:10](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=10)** You should experiment now.
>
> **[0:12](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=12)** That's what's really going to make the learning sink in.
>
> **[0:15](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=15)** And design your own queries and joins and views and functions.
>
> **[0:18](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=18)** A good way of doing this is to use the Sakila database and look at the functions and procedures and things that we haven't looked at yet.
>
> **[0:25](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=25)** Making sense of this more complex SQL could really help you.
>
> **[0:29](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=29)** If you're going to be using SQL at work, you should also work out which type of SQL it is such as [[Microsoft]] or Oracle and refine your learning now to that particular vendor.
>
> **[0:40](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=40)** Because once you move past the basics, the SQL language can become wildly different.
>
> **[0:46](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=46)** There is an awful lot more SQL to learn.
>
> **[0:48](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=48)** This course was just the beginning and it's focused on read-only SQL, the select statement.
>
> **[0:55](https://www.linkedin.com/learning/sql-data-reporting-and-analysis-18082247/next-steps-and-additional-resources?u=76281980&t=55)** The next steps for you would be to learn how to edit and update and delete data in a database, if you dare. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft]] (1)
> **Env Vars:** sql (7)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [emma (1)


## Instructor

- [[Emma Saunders]]

## Skills Covered

- Data Analysis
- SQL

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
← [[Predictive Analytics Essential Training- Data Mining]] | **7 of 9** | [[Power BI Data Methods]] →

### In [[Become a Data Analyst]]
← [[Tableau 2024.1- Essential Training]] | **10 of 12** | [[Complete Guide To R Wrangling Visualizing And Modeling Data]] →

### In [[Master SQL for Data Science]]
**1 of 6** | [[Intermediate SQL- Data Reporting and Analysis]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Analysis and Interpretation]]
- [[Become a Data Analyst]]
- [[Master SQL for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis

---

[↑ Back to top](#)