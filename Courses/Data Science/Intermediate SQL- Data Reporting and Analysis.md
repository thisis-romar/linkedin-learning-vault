---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: intermediate-sql-data-reporting-and-analysis
url: "https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis"
duration_minutes: 134
duration: 2h 14m
level: Intermediate
updated: 6/26/2025
learners: 25354
skills:
  - Data Analysis
  - Data Reporting
  - SQL
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQH-GFM4TA8EeQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668022144494?e=2147483647&amp;v=beta&amp;t=6CW3tD-EHMEL8osicm6ttuKrPyT_rqpAKUDLlIg515Q"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL for Data Science]]'
prev_courses:
  - '[[SQL- Data Reporting and Analysis]]'
next_courses:
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
path_nav: '[{"path":"Master SQL for Data Science","position":2,"total":6,"prev":"SQL- Data Reporting and Analysis","next":"SQL Hands-On Practice- Solve Business Problems"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/data-reporting
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md)

![Intermediate SQL: Data Reporting and Analysis](https://media.licdn.com/dms/image/v2/C560DAQH-GFM4TA8EeQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668022144494?e=2147483647&amp;v=beta&amp;t=6CW3tD-EHMEL8osicm6ttuKrPyT_rqpAKUDLlIg515Q)

# Intermediate SQL: Data Reporting and Analysis

> If you’re already familiar with the fundamentals of SQL covered in our introductory course on SQL: Data Reporting and Analysis, you may be interested in taking your skills to the next level and learning a few more new tricks of the trade. Join data consultant Emma Saunders in this hands-on, practical follow-up, designed specifically to help you grow beyond the basics so you can start writing more 

> [LinkedIn Learning](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis) | 2h 14m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn hands-on to extract, manipulate, edit, and delete real data](#learn-hands-on-to-extract-manipulate-edit-and-delete-real-data)
  - [Who this course is for](#who-this-course-is-for)
  - [What can you do with intermediate SQL?](#what-can-you-do-with-intermediate-sql)
- [**1. Prepare to Code in SQL**](#1-prepare-to-code-in-sql) (3 videos)
  - [Get familiar with phpMyAdmin](#get-familiar-with-phpmyadmin)
  - [Understand the demo database](#understand-the-demo-database)
  - [Using ChatGPT to check SQL code](#using-chatgpt-to-check-sql-code)
- [**2. Reporting Data with SQL**](#2-reporting-data-with-sql) (9 videos)
  - [The basic SELECT query](#the-basic-select-query)
  - [Aggregated results with GROUP BY](#aggregated-results-with-group-by)
  - [Wildcards and aliases](#wildcards-and-aliases)
  - [Merging tables with JOIN](#merging-tables-with-join)
  - [Use string functions](#use-string-functions)
  - [Use number functions with grouped data](#use-number-functions-with-grouped-data)
  - [Use date functions](#use-date-functions)
  - [Challenge: Report average cost by staff](#challenge-report-average-cost-by-staff)
  - [Solution: Report average cost by staff](#solution-report-average-cost-by-staff)
- [**3. Editing Data**](#3-editing-data) (7 videos)
  - [UPDATE fields in a table](#update-fields-in-a-table)
  - [Common issues with the UPDATE command](#common-issues-with-the-update-command)
  - [Automating your query creation](#automating-your-query-creation)
  - [Updating a field using JOIN](#updating-a-field-using-join)
  - [Updating dynamically](#updating-dynamically)
  - [Challenge: Update the film table using JOIN](#challenge-update-the-film-table-using-join)
  - [Solution: Update the film table using JOIN](#solution-update-the-film-table-using-join)
- [**4. Inserting Data**](#4-inserting-data) (6 videos)
  - [INSERT rows into a table](#insert-rows-into-a-table)
  - [Common issues with the INSERT command](#common-issues-with-the-insert-command)
  - [Using MERGE instead of UPDATE/INSERT](#using-merge-instead-of-updateinsert)
  - [Duplicate table with SELECT](#duplicate-table-with-select)
  - [Challenge: Insert a row into the film table](#challenge-insert-a-row-into-the-film-table)
  - [Solution: Insert a row into the film table](#solution-insert-a-row-into-the-film-table)
- [**5. Deleting Data**](#5-deleting-data) (6 videos)
  - [DELETE rows from a table](#delete-rows-from-a-table)
  - [DROP an entire table](#drop-an-entire-table)
  - [ALTER TABLE for modifying fields](#alter-table-for-modifying-fields)
  - [Problems with foreign key constraints](#problems-with-foreign-key-constraints)
  - [Challenge: Delete from the country table](#challenge-delete-from-the-country-table)
  - [Solution: Delete from the country table](#solution-delete-from-the-country-table)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn hands-on to extract, manipulate, edit, and delete real data](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=0)** - [Emma] Do you need to edit data in a database?
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=3)** Do you need to know how to insert new data, delete rows, and update what already exists?
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=9)** Then this course on Intermediate [[SQL]] is for you.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=12)** Using Sakila practice database, we will extract, manipulate, edit, and delete real data.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=18)** My name is Emma Saunders and I'm a data consultant specializing in data visualization.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=24)** I've used SQL for nearly 20 years through different jobs and industries and now use it to drive my data visualizations.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/learn-hands-on-to-extract-manipulate-edit-and-delete-real-data?u=76281980&t=32)** I want to help you demystify [[Databases]] and SQL with this course, so let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Databases]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - [emma] (1)

#### [Who this course is for](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=0)** - [Instructor] [[SQL]] Intermediate [[Data Manipulation]] will suit anyone who has an interest in learning how to edit data in an SQL database.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=7)** We will cover all types of data manipulation from reporting it to changing it or deleting it.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=13)** You will need a basic understanding of [[Relational Databases]], and select queries to follow this course.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=19)** It's intended as a follow-on from my SQL Reporting and Analysis course, but this is not a prerequisite.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=25)** If you've done a bit of SQL before, and are keen for more, you should fit right in.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=30)** You do not need to work in IT.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=32)** SQL is a useful language for lots of business people, such as data analysts, as well as people who need to set up their own [[Databases]] for small businesses or hobbies.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/who-this-course-is-for?u=76281980&t=41)** So if this sounds like you, let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Manipulation]] (2), [[Relational Databases]] (1), [[Databases]] (1)
> **Env Vars:** sql (5)
> **Prerequisites:** prerequisite (1), set up (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What can you do with intermediate SQL?](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=0)** - [Instructor] [[SQL]] stands for Structured Query Language.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=3)** We will focus on Intermediate SQL, which for our purposes means the ability to manipulate data in a database.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=10)** That includes inserting, deleting, editing, and retrieving data within tables.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=16)** There are many varieties of SQL depending on the vendor.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=19)** We will focus on [[MySQL]], but I'll point out differences to Oracle, [[Microsoft]], and [[PostgreSQL]], too.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=26)** In this course, we will be focusing on tables and data.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=31)** SQL commands can be grouped by their function.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=34)** DDL on the left here is Data Definition Language, which deals with creating and changing database structures such as tables, views, functions, and triggers.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=46)** We will touch upon drop, truncate, and alter, but most DDL commands are out of scope.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=53)** Next up, we have DML, [[Data Manipulation]] Language.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=57)** DML lets you add, delete, and edit the data in a database and this is our main focus.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=62)** The final three commands there, less so.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=65)** These first two columns cover most of our learning goals, so most of the third and fourth columns are out of scope.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=72)** For completeness, DCL is Data Control Language and is mostly concerned with permissions and other controls.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=78)** And TCL is Transaction Control Language, which deals with multiple commands and how to revoke some of them if needed.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=86)** So we will look at merge, drop, and truncate, as well as the standard commands, and we will also touch on create and lock table.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/what-can-you-do-with-intermediate-sql?u=76281980&t=95)** So let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[MySQL]] (1), [[Microsoft]] (1), [[PostgreSQL]] (1), [[Data Manipulation]] (1)
> **Env Vars:** sql (4), ddl (2), dml (2), dcl (1), tcl (1)
> **CLI Commands:** mysql (1)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Prepare to Code in SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Get familiar with phpMyAdmin](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=0)** - [Instructor] Let's get ready to code in [[SQL]] by getting familiar with phpMyAdmin, an open source database software with a very long name.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=8)** phpMyAdmin is particularly well suited for creating [[Databases]] to power websites, and it's the software used by the Sakila demo database, which we're going to use in this course.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=19)** phpMyAdmin uses [[MySQL]], we will also cover Oracle SQL, [[Microsoft]]'s [[Transact-SQL (T-SQL)|Transact-SQL]], and [[PostgreSQL]], but we cannot run these commands in phpMyAdmin because they won't work.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=32)** I'll point out where commands differ between these main types of SQL.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=36)** We're going to be using the phpMyAdmin demo site called Sakila.
>
> **[0:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=43)** Now normally we would be using the MySQL demo site, and you can see in the top left, I just changed the server between MySQL and MariaDB.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=54)** These two things are largely equivalent, I'll come onto that in a second.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=58)** So to access the Sakila database, if you look down the left hand side of your screen, you can see on the left hand side below all that, it says Sakila.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=65)** Now as you follow this course, you are going to find that this environment is extremely unstable, anybody can delete anything globally within this setup, so occasionally you're going to come along here and the Sakila database simply won't be present, and you'll see me struggling with the same thing in the course.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=82)** Now when this happens, the first thing to try is to come over to the top left and change server, so switch between MariaDB and MySQL.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=93)** If we scroll down, you can see there's a Sakila database under MariaDB as well.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=98)** Your commands should work pretty much identically.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=102)** MariaDB was set up by the same guy who invented MySQL.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=107)** MySQL was created by Finn, Michael Widenius, which I've probably mispronounced and apologies for that.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=113)** It was named after his elder daughter My.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=116)** After MySQL was acquired by Sun and then Oracle, Michael Widenius developed Maria DB, named after his younger daughter, and deliberately made it compatible with MySQL.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=127)** I always think we should shout out these modern day heroes, so there's my tribute to him.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=132)** Okay, back to phpMyAdmin.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=134)** Across the top, you can see that there are tabs, it says databases, SQL, status, et cetera.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=141)** These are contexts dependent, meaning that some of them will disappear, depending where you are in the database.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=146)** We're currently sitting at the very top, server route level, and I can tell that by looking at this screen because in the very top of the screen, there is a breadcrumb bar, and at the moment it just says server phpMyAdmin demo MariaDB, and as we go down into the Sakila database, for example you can see the breadcrumb bar has expanded and those tabs have renamed, different ones have popped up, so now they say structure, SQL, search, query, et cetera.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/get-familiar-with-phpmyadmin?u=76281980&t=175)** We're going to be using the Sakila database, so let's take a look now at what data it contains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), [[SQL]] (5), [[Databases]] (2), [[Microsoft]] (1), [[Transact-SQL (T-SQL)|Transact-sql]] (1)
> **CLI Commands:** mysql (8), find (1)
> **Code Identifiers:** phpmyadmin (7)
> **Env Vars:** sql (6)
> **Prerequisites:** setup (1), set up (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Understand the demo database](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=0)** - [Instructor] The sakila demo database was created for a fictional and old fashioned movie rental business where you went into a real physical shop and left with a real physical movie on a DVD or a VHS.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=13)** If you look on the left hand side, you can see Tables and Views listed under the [[Microsoft Word|word]] sakila.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=19)** And normally we would have functions and procedures listed there as well but they have disappeared.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=25)** And that's because as I said before, this is an unstable environment, so people just come along and delete things at will.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=30)** We're mostly going to be looking at tables which is contains all of this data.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=37)** I want to build a database diagram now to show you briefly how all of these tables link together.
>
> **[0:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=43)** You can see that we have the rental and inventory tables represented by these two blue boxes here.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=50)** Each blue box is a table, and I have shown the primary and foreign key fields only 'cause they're the ones that do the work of linking tables together.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=58)** So there's lots more fields than these in these tables that we are not showing.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=63)** The rental table tracks which customer has borrowed which DVD on which date.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=68)** And the inventory table keeps a track of what stock the store would have if all DVDs were returned at once.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=75)** The red line connects the same field, in this case inventory_id, which is serving a different purpose in different tables.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=83)** So inventory_id is the primary key of the inventory table but a foreign key within the rental table.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=89)** Now we add the customer and staff tables and the red lines show the linkages between the tables.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=95)** So we can see that the rental table uses staff and customer_ids to track which member of staff interacted with which customer.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=104)** Our next cluster of tables is geographic, country, city, and address all work together.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=111)** The city and country tables are glorified lists.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=114)** The data is structured this way to preserve [[Data Integrity]] so system users will be able to pick city or country from a dropdown list, which prevents typos.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=123)** The last of the three core tables is payment.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=127)** Payment would hold things like whether the customer paid by card or cash.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=131)** The store table assigns an address and a manager to each store and links to the inventory table.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=138)** So users can see what stock is available in each store.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=142)** The remaining tables describe the movies themselves.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=145)** First, we have film and language, and then film category for example, horror and comedy.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=152)** And then actors are linked to films on a one-to-many basis so many actors can be saved against each film.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=160)** We continue to link all of these on the basis of primary and foreign keys.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=165)** Now let's color code them.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=168)** We look at the green static tables of data.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=171)** The purpose of these tables is to preserve data integrity.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=175)** Users will pick options from a dropdown which is quicker the user and prevents typos and that is represented here by these green tables.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=184)** Second, we have what we might call semitic tables, the red ones.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=188)** These change every time there's a new customer, a new member of staff, or a new store.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=193)** And finally, the blue tables are more frequently updated.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=197)** Every time there's a new film released or a new transaction at the movie rental store, you should now understand how the different parts of the sakila database work together.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/understand-the-demo-database?u=76281980&t=206)** So when we start running queries, you have a sense of what the tables do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** inventory_id (2), customer_ids (1)
> **Env Vars:** dvd (2), vhs (1)
> **UI Navigation:** dropdown (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using ChatGPT to check SQL code](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=0)** - The days of posting questions into a forum and waiting hopefully and hopelessly for a response are gone, you'll be pleased to know.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=9)** If you haven't got into [[ChatGPT]] yet or any other large language model, it can really help you on your learning journey.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=17)** It is the ultimate patient teacher.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=20)** It never gets cross with you, never gets frustrated.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=23)** It's not 100% right all of the time, but if you enter into a conversation with ChatGPT, it will get you to the right answer, I would say about 95% of the time, and it can write code.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=34)** So what's not to like?
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=36)** I'm going to demonstrate a couple of these things for you now.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=40)** Let's say that we have a join query.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=73)** And don't worry if this looks hopelessly complicated, the course will cover this.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=77)** So this is what we call a join, and it's something people often get their table aliases, that's these things a bit confused.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=85)** So we say select the person name from table A, left join to table B, and then we give it the thing to join on.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=96)** Now I've introduced a deliberate mistake.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=103)** The mistake that I introduced is on the join, it should say A.personID equals B.personID.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=111)** This is how we are linking the two tables together.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=113)** You don't need to understand DSQL for the purpose of this video, okay?
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=118)** But I just want you to see that ChatGPT has identified that issue straight away.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=123)** It's given you a good explanation of why this couldn't work because of course this will always hold true just like one equals one and two equals two and then it's even given you a probable fix, even though it hasn't seen the table and it doesn't know the structure, it has inferred the table structure from your query and given you something super useful to work with.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=145)** Okay, I'm going to try one more, which I'm going to copy paste 'cause I couldn't be sure of remembering it in the correctly wrong way, if you see what I mean.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=158)** I tend to be polite with ChatGPT just in case the robot revolution comes.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=162)** But you can be very direct.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=164)** The query here has a mismatch between the alias in the sub query and what you're trying to select in the outer query.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=171)** Okay, you've renamed First Name to FN and you either need to do this or this.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=177)** I mean, how helpful is that?
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=179)** Not to say you don't need this course.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=181)** You still definitely need this course to understand the basics of [[SQL]] and why the language is structured the way it is.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-chatgpt-to-check-sql-code?u=76281980&t=186)** But this is your number one super helpful learning companion, and I urge you to get on board with ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[SQL]] (1)
> **Code Identifiers:** personid (2)
> **Env Vars:** dsql (1), sql (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - the (1)


### 2. Reporting Data with SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [The basic SELECT query](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=0)** - [Instructor] Students should already be familiar with the SELECT query, including filtering and sorting.
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=5)** In this chapter, we cover these concepts briefly as a refresher, as well as covering some functions we didn't see in the Reporting and Analysis course.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=13)** In this video, we look at the structure of the SELECT query.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=16)** The basic SELECT query looks like SELECT fields FROM table, WHERE filter, ORDER BY field ascending or descending.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=26)** Let's have a look at the payment table.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=31)** It has 16,049 rows.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=34)** You can see that in the green bar towards the top of the screen.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=38)** If we click Edit inline and run SELECT amount FROM payment WHERE payment date is less than
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=58)** 15th of June, you see that we return 1,173 rows.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=66)** Note that I've used hyphens between the date parts here and double quotes around the date.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=72)** So we have returned a single field and filtered for a reduced number of rows.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=77)** We could also sort the results here with ORDER BY.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=81)** If we just wanted to know the different amounts that have been charged without looking at every single transaction, we could run SELECT DISTINCT.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=93)** And you can see now that we have just 12 rows returned, one for each of the different amounts in the database.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=101)** Note that the WHERE filter can use and, or, and not to make the filter more complex.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=107)** You may need to use parentheses to tell the database clearly what you're trying to achieve.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/the-basic-select-query?u=76281980&t=112)** So hopefully this SELECT statement is feeling familiar to you as we move on to more complex reporting.

> [!info]- Semantic Content
>
> **Env Vars:** select (7), where (3), order (2), distinct (1)
> **SQL:** select (7), where (3), order by (2)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Aggregated results with GROUP BY](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=0)** - [INSTRUCTOR] Still looking at the select statement, here we look at grouping our results with group by using having rather than where to filter our data.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=9)** Let's group our query now.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=12)** So the same query that we had before but now with group by amount.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=25)** And you can see that that's returned us 12 rows.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=27)** So it's the same number of rows we had with the select distinct query before.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=33)** There are 12 different values for the field amount.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=37)** Now, we could've just used a select distinct to get exactly this result.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=41)** The point of grouping really is to perform some sort of function on the data as we group it, account, for example.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=48)** So let's try that now.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=51)** Let's put these on different lines.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=55)** We'll take a count of payment_id.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=61)** And now we can see how many payments occur at different price points.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=67)** We can also filter on our calculated column, which in this case is count.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=73)** And we can do this using having.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=75)** So we can say having a count of payment_id greater than 100.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=86)** And you can see that's only returned three rows instead of the 12 that we had before.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=93)** Let's just look at that query again.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=95)** Notice that this query is using two types of filter.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=99)** It's using where for filters that apply to original rows of the table and having for the aggregated data.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/aggregated-results-with-group-by?u=76281980&t=108)** So hopefully grouping is feeling familiar to you now.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing) (4)
> **Code Identifiers:** payment_id (2)
> **Env Vars:** instructor (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Wildcards and aliases](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=0)** - [Instructor] Now we start to make our queries more flexible.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=3)** Wild cards let you place filters that are similar to but not exactly the same as your filter term.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=10)** And table or column aliases can help to simplify more complex queries.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=14)** Let's compare two queries.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=18)** Select star from film where description is drama.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=30)** Now we get zero results, an empty results set.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=33)** Let's just have a quick look if we go back and look at all of the results.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=40)** Here is an example of the description field.
>
> **[0:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=43)** A epic drama of a feminist.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=46)** Okay, so it's compared that to the [[Microsoft Word|word]] film and found nothing.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=51)** Now, what if we say select star from film where description like drama?
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=67)** Now, it's found 106 results.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=69)** The percent sign here is a wild card.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=72)** It's like a joker in a pack of cards.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=74)** It can stand for any number of other characters.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=77)** [[SQL]] uses two wild cards; the percent sign and the underscore.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=82)** The percent sign is more accommodating than the underscore.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=85)** Let's just go to this SQL screen instead.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=89)** Select star from actor where first name like [[John the Ripper|John]] percent.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=105)** This will return a match for John as we'd expect, and for Johnny.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=110)** So the percent sign can represent zero characters or one or multiple characters.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=115)** The percent sign does not insist that there be a character present.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=120)** If we were to run John with a percent sign in the middle, you can see it's returned an additional result there, John Chase.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=130)** Okay, so the H can be present or not present.
>
> **[2:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=133)** Now, if we substitute for the underscore, (keyboard typing) we see that the J-O-N has been excluded.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=144)** The underscore insists that there be a character in this position.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=149)** This means that we can use the underscore and percent sign in combination to build up a pattern of almost any string.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=155)** This could be useful for email addresses, for example.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=158)** Let's turn now to the customer table.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=164)** You can see that all these fake email addresses share a pattern.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=167)** They end in [sakilacustomer.org](https://sakilacustomer.org).
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=171)** So we could say select star from customer where email, like.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=182)** (keyboard typing) Let's say that we wanted to find email addresses where the first name has four characters and the last name has any number of characters.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=193)** I've used four underscores before the dot or period and a percent sign before the @ sign and after the period to represent this.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=203)** So I'm insisting that there be four letter first name, any current number of characters in the last name, and that the email address end in [sakilacustomer.org](https://sakilacustomer.org).
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=214)** And we found 93.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=216)** And at a rough glance, they appear to conform to those rules.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=222)** These wild cards can also work on seemingly numeric fields such as postal code.
>
> **[3:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=229)** (keyboard tapping) So you can see postal code on the right hand side of the screen.
>
> **[3:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=234)** At the moment you can see 35200, 36490, et cetera.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=239)** Those are conforming to starting with a three, ending with a zero, and having three digits in between.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=246)** So that might seem odd that wildcards are working on an apparently numeric field.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=253)** But if we go into the structure tab and look at postal code, you can see there that it's actually a varchar, variable character, and therefore we are still treating it as a string.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=264)** And that's why we are using single quotes around the criterion.
>
> **[4:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=272)** Now, let's recap aliases.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=275)** An alias can be used to rename a field or a table.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=279)** They can help to make your queries more readable and your reports as well since they replace the column headings.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=285)** They're particularly useful when joining tables together on which more soon.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=290)** But for now, we'll just look at column or field aliases.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=295)** Select email as customer from a customer.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=303)** And these back ticks, by the way, around the table name are not necessary.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=308)** They're a peculiarity really of my SQL, and other versions of SQL do not require them or in fact don't like them at all.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=317)** You can see that the email field has been returned to us with a new name.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=323)** That table is headed up with the word customer because we've used the word customer as an alias with the keyword as.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=331)** Typically, we wouldn't do that.
>
> **[5:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=332)** We would use an alias that's shorter than the field name.
>
> **[5:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=335)** For example, select email as E because half the point is to make it more efficient to write the query.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=343)** In some versions of SQL, the as keyword is optional.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=347)** So why not try it both ways in your database?
>
> **[5:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/wildcards-and-aliases?u=76281980&t=351)** Now, we've made our queries a bit more flexible and bespoke with wildcards and aliases, which is going to be helpful as we make our queries more complex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[John the Ripper|John]] (4), [[Microsoft Word|Word]] (3)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** sql (5)
> **Analogies:** for example (2), similar to (1), it's like (1), such as (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **URLs:** [sakilacustomer.org](https://sakilacustomer.org) (2)
> **Non-Speech:** (keyboard typing) (2)
> **Cross-References:** in the last (1)

#### [Merging tables with JOIN](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=0)** - [Narrator] Sometimes you need to report data across tables.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=3)** For this, you need to tell the database how to knit those tables together with the keyword JOIN.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=9)** This can be an inner, outer, left, or right JOIN.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=13)** In this example, the customer table has five rows and the address table has six.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=19)** If we simply use the JOIN keyword to knit those tables together, our query will return four rows as shown at the bottom with the arrow.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=28)** That's because of the address ID column in each table.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=32)** This is the column that's used to knit together the rows.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=36)** In the customer table there's an ID of 18, shaded in gray, which does not exist in the address table.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=42)** And in the address table there are two IDs of four and five that don't exist in the customer table.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=49)** These three records are excluded in a joined statement.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=53)** That's because an unqualified joined statement is interpreted as an inner join.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=59)** And when I say unqualified join statement I mean if you haven't put inner, outer, left, or right in front of it, you just put the [[Microsoft Word|word]] join.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=67)** The top left Venn diagram here shows an inner join, so that's a join as well.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=72)** If you use the keyword JOIN with nothing else, it will be interpreted as an inner join.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=76)** The middle blue section is returned in this kind of query, namely those records that exist in both tables.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=84)** There is also an outer join here, which is rarely used, and this returns rows from both tables regardless of whether there is a match in the other table.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=93)** Records with no corresponding entry in the other table are returned with null values against them.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=99)** And then there are left and right joins.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=101)** These return all values from one table with records matched where possible.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=107)** The left and right keywords tell the database which table to prioritize.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=113)** For example, in the query shown here, this will return everything from the customer table and any matches from address table.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=124)** One way of remembering that is that if you format your query in the way I have done here, so that the join statement is in the middle of the two table names, then left or right tells you which table is going to get all of its values shown in your results.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=141)** So in this case, customer is going to have all of its values and then address have those that match.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=147)** So let's run this query.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=150)** And I'm going to format it as I just said, with all the table names on the same row.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=155)** Select star from customer, C left join address A
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=165)** and I use the escape key there to get rid of that window that popped up.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=169)** On C.address_id = a.address id.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=178)** So this should return everything from the customer table and any matches from address.
>
> **[3:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=183)** You see that there are 599 rows returned, which is the number of rows in the customer table.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=191)** Personally, I always use left joins when joining multiple tables and just reorder my table names.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=197)** I find it very confusing trying to mix left and right joins.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=202)** As a brief note, there is also the union keyword.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=206)** With join, two tables are returned as one data set with the same number of rows or thereabouts, but a greater number of fields.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=215)** With union two tables are returned with more rows but the same number of fields.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=221)** The two tables are returned one on top of the other.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=224)** This can be extremely misleading because the same field names are issued across both tables whether that's correct or not.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/merging-tables-with-join?u=76281980&t=232)** So care must be taken when using the union keyword.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **SQL:** join (4)
> **Env Vars:** join (4)
> **CLI Commands:** find (1)
> **Code Identifiers:** address_id (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Use string functions](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=0)** - [Instructor] String functions a little formally that turn one piece of text into another.
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=5)** They might capitalize the text, locate one string inside another, replace all the spaces with underscores, or act as a VLOOKUP and many, many other things.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=15)** Each version of [[SQL]] has different string functions but some are common across versions.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=19)** And luckily for us, these are the most useful.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=22)** The first we're going to look at is substr.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=26)** Let's look at the category table.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=29)** It's a simple table with the name field such as Action and Children and so on.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=38)** And we are going to say, SELECT SUBSTR name,1.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=45)** And there we get all the names.
>
> **[0:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=47)** Now notice that one there meant the start of the [[Microsoft Word|word]] so it's not zero indexed.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=53)** In some cases you need zero to indicate the start, in this case not.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=58)** So we've told the database to return part of the text of the name field starting at position one.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=64)** Now let's change that and take position two.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=70)** And you can see it's sliced off the first letter.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=73)** In post grade, the second argument of start position is optional.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=77)** Now let's try something slightly different.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=80)** I'm going to say, name,1,3.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=84)** So this is using an optional third argument of length.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=89)** In T-SQL, this third argument is mandatory by the way.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=94)** And you can see it's returned as the first three letters of the word.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=98)** So what this query said is please start to position one and return us three characters.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=104)** We could have started of course at position two instead just by changing that.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=109)** Now substr can also read backwards.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=114)** So let's try that.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=118)** SELEECT SUBSTR name,-3, and here we have the last three letters instead of the first.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=126)** Now we're going to look at trim.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=128)** The basic query is SELECT TRIM, and we're going to trim the description which is a long text field FROM the film table.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=148)** And here you can see all the descriptions shown.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=151)** Now by the default, this removes any spaces at the start or end of the description field.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=156)** And I already checked and there aren't very many of them here.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=159)** But there aren't quite a few errant As in the description field.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=163)** Can you see it says, A Epic Drama, A Astounding Epistle even when it's very poor grammar and it should say an.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=170)** And the whole thing would be better off if the As were removed entirely and that's what going to do.
>
> **[2:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=176)** So we'll say, SELECT TRIM leading A space, 'cause we want to take the space away as well, FROM description as trimmed FROM film.
>
> **[3:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=190)** And this should work in [[MySQL]], Oracle and Postgre.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=195)** And there you can see all of those As have gone.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=199)** You could use the word trailing instead of leading to strip characters from the end of the string.
>
> **[3:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=204)** Or you could use the word both to take characters from both ends.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=209)** In [[Microsoft]], that instead would be select trim A FROM description AS trimmed from film.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=217)** So if you're using the trim function, you are not using leading or trailing.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=221)** If you just wanted to take characters from the left or the right, you would use LTRIM or RTRIM respectively.
>
> **[3:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=229)** Now in most versions of SQL you can add characters as well.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=233)** So there are times when you want a string to be of a particular length which is called padding.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=239)** And typically here you'd use LPAD or RPAD to add specific characters to the left or right of a string.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=247)** Next up, we look at CONCAT.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=255)** So I will take first_name and last_name from customer.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=259)** And now let's say that we want to return the full name as a single field.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=264)** So we can say SELECT CONCAT first_name space last_name,
>
> **[4:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=277)** and there we have a single field containing the full name.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=282)** In MySQL, T-SQL, and Postgre there is also CONCAT_WS, where the WS stands for with separator.
>
> **[4:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=291)** So you can specify that you want a space between each word or a pipe.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=295)** And then you wouldn't need to specify the space in the brackets there.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=300)** Now for a slightly more complex function called replace which can be very useful for counting of all things.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=306)** It's not obvious, but sometimes I have found there is nothing else to replace it, ha-ha.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=313)** So SELECT REPLACE.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=316)** Let's look at the structure of it first.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=317)** ABC, ABC, ABC, a, c.
>
> **[5:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=325)** The basic function says within string, ABC, ABC, ABC find a lowercase a and replace it with a lowercase c.
>
> **[5:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=334)** And I've used lowercase here to show you that you need to mind what case you are using.
>
> **[5:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=341)** It depends on your version of SQL.
>
> **[5:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=344)** MySQL is sensitive to this, so the query appears to fail it's returned us the original string.
>
> **[5:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=350)** But if we change that now, we can see that it works.
>
> **[5:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=355)** So now all of the As now have been replaced with Cs.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=360)** In T-SQL, by the way, the original query would work.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=363)** Now let's say we want to know how many words are in the address field of the address table.
>
> **[6:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=368)** Let's take a look at that.
>
> **[6:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=370)** The address field, the first row says 47 MySakila Drive.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=375)** And we want to know how many words there are in that.
>
> **[6:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=378)** So in that example, there are three words, 47, MySakila, and Drive would all count separate words they have spaces between them.
>
> **[6:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=387)** So we can do this using the REPLACE function.
>
> **[6:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=393)** Now bear with me, it's not obvious.
>
> **[6:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=395)** The first time round we're going to say, LENGTH of the address field as original.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=404)** So that's what we've got now.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=406)** Then we're going to say, LENGTH when we REPLACE.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=413)** So when we replace a space with nothing, find out the length and we'll call that new.
>
> **[7:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=420)** And then we put it all together, LENGTH address plus one minus LENGTH REPLACE address
>
> **[7:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=436)** And there's a double bracket there, which means alerts me to the fact I missed one earlier and we'll call that number of words.
>
> **[7:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=445)** And let's hope I've got this right after all that typing FROM address.
>
> **[7:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=453)** And so you can see that first row again.
>
> **[7:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=455)** It tells us that we have three words and it's worked that out by saying the original number of characters were 17.
>
> **[7:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=462)** When it stripped out the spaces, it had 15 characters.
>
> **[7:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=466)** And because there were two spaces that means there were three words.
>
> **[7:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=469)** That's how it works and that can be super useful.
>
> **[7:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=473)** So we've taken a brief tour of some common string functions at a slightly more advanced level than in the reporting and analysis course.
>
> **[8:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-string-functions?u=76281980&t=481)** I hope you've learned something new as well as refreshed old knowledge of string functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Microsoft Word|Word]] (5), [[MySQL]] (3), [[Microsoft]] (1)
> **Env Vars:** sql (6), abc (6), select (5), replace (4), length (4)
> **CLI Commands:** mysql (3), find (2)
> **SQL:** select (5)
> **Code Identifiers:** first_name (2), last_name (2)
> **Definitions:** is a  (1), is called (1), stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Use number functions with grouped data](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=0)** - [Instructor] Now we move on to number functions, which are little formulae that perform a calculation, typically on a set of numbers.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=7)** You can save a lot of time by running formulae in your database instead of downloading.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=11)** You can do all sorts of analysis in the database.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=14)** You can do natural or base 10 logarithms, cosine and tan, convert radians to degrees and back again, square and square root, or raise a number to any power.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=23)** There is all sorts of things you can do without needing to download to a spreadsheet.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=27)** Let's start with a payment table, and look at the amount column.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=31)** So this is the amount that customers have paid in this fictional movie rental store for their movies.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=37)** You can see 2.99, 0.99, and so on.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=42)** There are 16,000 rows in the database, and the amount column ranges from zero to 11.99.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=50)** So one of the most obvious numeric functions is average.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=53)** Select average amount from payment.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=58)** And you can see that the average is about 4.2.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=60)** Now, you could do a standard deviation, or various other similar functions there, but let's task ourselves now with some analysis.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=69)** Let's ask, have movie rentals become cheaper over time?
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=74)** So what we're going to do is we're going to group by year and month using some string functions, in fact, to do that.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=81)** And we're going to look at the average of amount.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=84)** So let's take that down there.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=85)** Select concatenate with separator using underscore,
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=94)** and we'll take the year and the month,
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=103)** and we'll call that yr_mth.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=108)** And then we're going to take the average, and we need a group by statement at the end.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=115)** We're going to group by yr_mth that we've created.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=120)** So there, you can see our yr_mth on the left, 2005_5, meaning May of 2005.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=128)** So we can see we have a period of less than a year, May, 2005 until February, 2006.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=134)** And February, 2006 looks a lot cheaper than the other consecutive months.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=138)** They're all around about 4.2, but February, 2006 is more like 2.8.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=146)** So we wonder what's happening here in our analysis.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=148)** So we should be wondering a little bit.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=150)** So we're going to add another column, say average amount, and a count column to see what's going on.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=159)** And what I'm doing here really is making sure that this is a fair comparison.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=163)** This is just an analysis thing, rather than an [[SQL]] thing.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=167)** It doesn't appear to be a fair comparison.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=169)** So there's 182 payments in February of 2006, compared to thousands in the other months.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=178)** As with any analysis, it's always worth checking your assumptions before drawing any conclusions, but you can do all of this analysis anyway in the database.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=187)** Now, SQL offers a number of rounding functions.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=191)** Round ceil and floor.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=197)** So when we say amount comma zero, we're saying we want zero decimal places.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=202)** So round to the nearest integer.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=205)** And to show you what it's done, let's take the original column too.
>
> **[3:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=210)** So 2.99 has been rounded to three, and so on.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=215)** Now ceil, as in ceiling, will always round up, and it has to be spelled out as ceiling in T-SQL by the way.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=222)** And floor will always round down.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=224)** And if you don't want to be rounding at all, you just want to truncate the number of decimal places, you can use the keyword truncate.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=232)** Now, one fairly complex function I wanted to show you was interval.
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=235)** Say select interval amount, and then you provide a set of numbers that you want to compare the amount field to.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=252)** So I'm going to compare them to a set of six numbers, 1, 2, 3, 5, 6, 7, and I'll return the amount field as well.
>
> **[4:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=261)** So what this function does is it takes each row of the amount column, and it tells you where in your number set that amount first exceeds the number.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=274)** So 2.99 is at position two.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=276)** The first number that it exceeds is two.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=279)** And if you look at the second row, we have 0.99.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=282)** Well, that doesn't even manage to exceed the first number in the data set, which is one.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=286)** And so that's returned with a position of zero.
>
> **[4:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=289)** It's not something you would often use, but imagine how long that would take in [[Microsoft Excel|Excel]].
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=296)** Another function I use a great deal is mod, short for modifier.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=300)** It returns the remainder of one expression divided by another.
>
> **[5:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=305)** So here I'm going to divide payment_id by five, and I've used a column that doesn't exist there.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=318)** So you can see if you look at the fourth row down with payment_id of six, mod has divided that by five and says there's a remainder of one, and the same if you look where payment_id is 11.
>
> **[5:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=329)** This is very useful for sampling and many other things.
>
> **[5:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=333)** Let's say that you are only interested in every fifth row.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=336)** You can use mod to identify the fifth row or even filter on it, or you can group by it, making histogram buckets quick and easy.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=345)** Now let's put some of our learning together.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=347)** What if we want to spot correlations between rental cost and film category?
>
> **[6:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=364)** So here, we are trying to compare whether the different categories of films tend to have different hiring out amounts.
>
> **[6:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=372)** So are some categories worth more than others?
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=375)** And we can see there is a difference.
>
> **[6:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=380)** Family movies appear to be the cheapest, for example, with new releases and comedies being the most expensive.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=389)** By the way, any functions you want to create that do not exist in your version of SQL can be created and saved to your database using a stored procedure.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-number-functions-with-grouped-data?u=76281980&t=398)** There are many more number functions than we have covered here, but I hope this has given you a sense of what analysis can be achieved directly in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Excel|Excel]] (1)
> **Versions:** 2.99 (3), 0.99 (2), 4.2 (2), 11.99 (1), 2.8 (1)
> **Code Identifiers:** yr_mth (3), payment_id (3)
> **Env Vars:** sql (4)
> **Definitions:** is a  (2), short for (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Use date functions](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=0)** - [Instructor] Dates are tricky, there's no getting around it.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=3)** Part of the problem is that [[SQL]] date handling differs widely between versions of SQL.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=8)** I can't give you a definitive guide because many settings such as currency or thousand separators are set at the database level with your local settings.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=18)** This means two students with the same database and software version could handle dates differently.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=23)** Let's learn some tricks to reduce this pain.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=27)** We're going to look at some common issues with dates, different ways of storing date time information, transforming the date format and time zones.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=36)** It's important for you to understand that date type information can generally be stored in three different data types behind the scenes.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=44)** It can be stored as a date, date time or a time stamp.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=49)** Time stamps are not generally human readable but they take up less space in the database and are indexed faster, so [[Databases]] love them.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=57)** The actual number of a time stamp is the number of seconds since midnight on the 1st of January, 1970, which is also called the Unix epoch.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=66)** So if you need to store dates earlier than 1970 or while we're on the subject, years past 2038 do not use time stamp.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=75)** In [[MySQL]], dates are stored in the format, like that.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=84)** You can display the date in other ways but you cannot change the default for how it is stored.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=89)** To report your dates the way you want in MySQL, you can reformat the date rather than actually changing how it's stored so it can appear to be different, which is often enough.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=100)** 'SELECT DATE_FORMAT' and then we use 'CURDATE' for current date.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=110)** And I'm going to say '%d/%m/%Y'
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=119)** and this little notation here with the upper and lowercase and the forward slashes, in this way, you are telling the database how you want the date formatted and there are lots of options.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=130)** The percent notation can be seen here.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=138)** So there we go, you can see the database has reformatted the current date in the way that I asked which was a two digit day and month and a four digit year.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=149)** The only way in MySQL in which the default date display is changed is if you are using a numeric context.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=158)** For example, if we select 'CURTIME' which is current time in MySQL, it gives you 15:28:06.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=172)** But if I make that numeric by adding even just zero you can see it gives me a different kind of notation now.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=181)** Just adding a zero has changed the way that time is formatted.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=187)** In [[Transact-SQL (T-SQL)|Transact-SQL]], you would use 'GETDATE' and 'CURRENT_TIMESTAMP' to get the current date and time.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=195)** To see the date format that's setting the one that you're currently using in T-SQL run 'DBCC USEROPTIONS' semicolon.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=203)** This will give you the format that the database will expect to receive dates in and the format in which it will display dates.
>
> **[3:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=210)** This site has a better summary of the [[Microsoft]] of the kind of date formats that you can use.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=215)** It shows how you can work out your database settings.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=220)** You can change your date settings directly or you can also change your culture settings which affect your date formats.
>
> **[3:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=229)** The site also explains how to use 'FORMAT', one of the most powerful and varied functions in any version of SQL.
>
> **[3:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=236)** [[PostgreSQL]] uses yyyy/mm/dd format for inserting and retrieving date values, but lets you insert and retrieve in various alternative formats.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=249)** As with the other versions of SQL, you can set up a date format preference for the database to remember or you can convert the format ad hoc as you pull data out.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=258)** 'SET datestyle' lets you set either DMY, MDY, or YMD, they're your three options in Postgre.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=266)** You can set those in a number of ways.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=268)** So instead of using 'SET datestyle' you could always set them in a [postgre.com](https://postgre.com) file or an environment variable on the server or client.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=279)** Oracle is a little different cuz they're all different when it comes to dates.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=282)** The standard date format is a string month name and two year digits.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=288)** For example 01-Jan-22.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=292)** This is controlled by the 'NLS_DATE_FORMAT' parameter which you can check using the query shown here.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=300)** You can change the value as well using this alter session notation.
>
> **[5:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=304)** Or like Postgre, you can use 'TO_CHAR' to change the format of the date as you retrieve it.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=311)** One of the final big hurdles with dates is time zones.
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=315)** Changing your database time zone can affect your dates depending on whether they are stored as date time or time stamp, so beware.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=324)** Data times are typically stored without time zone information and remain unchanged but time stamps will change.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=331)** There are lots of functions to help you convert one time zone to another or to convert to UTC, coordinated universal time.
>
> **[5:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=339)** So you should get familiar, if you're going to be having to do this, you should get familiar with the functions that are offered in your version of SQL, cuz it will save you weeks of work, literally.
>
> **[5:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=349)** There are also functions to help you add or subtract days to a date or conversely to work out the interval between two dates.
>
> **[5:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=357)** It's as well to use these functions where they exist.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/use-date-functions?u=76281980&t=360)** For example, 'DATE_PART' or 'EXTRACT' as they can save a great deal of time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[MySQL]] (4), [[Databases]] (1), [[Transact-SQL (T-SQL)|Transact-sql]] (1), [[Microsoft]] (1)
> **Env Vars:** sql (7), set (2), select (1), date_format (1), curdate (1)
> **CLI Commands:** mysql (4), make (1)
> **Analogies:** for example (3), such as (1)
> **Ports:** :28 (1), :06 (1)
> **Definitions:** is a  (2)
> **URLs:** [postgre.com](https://postgre.com) (1)
> **SQL:** select (1)

#### [Challenge: Report average cost by staff](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=0)** - [Instructor] Imagine you work in the movie rental head [[Microsoft Office|office]] doing payment analysis and you want to know if there is any difference between staff members in the average cost of the movies they've rented out in 2006.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=18)** You're going to look at the payment and staff tables and compare the average cost of the amount column by staff member.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=25)** You should limit yourself to 2006, reporting two columns, one containing the full name from the staff table and the other containing the average amount from the payment table.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=37)** You should only be reporting two rows because there are only two staff members.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=42)** You should be using a number function, date function, and a string function in this query.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=46)** You may find it easiest to use table aliases.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-report-average-cost-by-staff?u=76281980&t=50)** This should take you no more than five minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Report average cost by staff](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=0)** (upbeat intro music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=5)** - And how did that go?
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=6)** There's lots of different ways of approaching this but for me, I would start by joining the payment and staff tables together.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=21)** And there we have 16049 rows, which is the number of rows we have in the payment table.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=26)** Now we're going to filter for payment date.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=34)** And we can use MySQLs year function here, and we're going to return some staff details as well.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=49)** So, there we have staff details.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=53)** Now, as yet, we haven't grouped our data.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=55)** We're just returning all of the rows, 182 rows there, where the payment date is in 2006.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=63)** So, we're going to need to add a group function as well.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=68)** So, let's start by making a readable name.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=71)** I'm going to use the CONCAT function.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=72)** There's lots of ways of doing this.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=75)** Out of space.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=79)** So there, we've got the staff full name.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=83)** And we're going to return the average amount.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=89)** And to make all of that work, we need a group by function.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=100)** And there we go.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-report-average-cost-by-staff?u=76281980&t=101)** We can see that [[John the Ripper|John]] Stevens had, on average, a higher rental rate than his colleague, Mike.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** concat (1)
> **Speakers:** - and (1)
> **Non-Speech:** (upbeat intro music) (1)


### 3. Editing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [UPDATE fields in a table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=0)** - [Speaker] So far we've only really retrieved data from the database.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=4)** But how do you go about editing it?
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=6)** For this, you use the update command.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=9)** The syntax runs like this, update table, set value to be something or other where filter is something or other.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=16)** It's extremely important to use a where clause on the update statement.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=21)** If you forget, all rows will be updated in that table.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=25)** Because of this, it's generally a good idea to run a select statement with the same filters before you run the update statement, just so you can eyeball the rows that you're planning on changing.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=36)** So let's update the actor table.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=38)** We found out that Penelope Guiness really prefers being called Penny.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=42)** You see that that's the top row in the table at the bottom of your screen.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=46)** So we're going to start by filtering for the row that we want to update, still using select, and we're going to say where actor ID equals one.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=55)** And in this way we know that we're only going to be updating the rows that we want to update.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=60)** So then we modify our select statement to be an update query.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=66)** Say update the actor table, and those backs ticks again are in my sequel feature.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=72)** You might not need them or might not even be able to use them depending on which version of [[SQL]] you are using.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=78)** Update actors, set first name equal to Penny where the actor ID is equal to one.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=87)** And it tells us that one row has been affected.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=89)** It doesn't show us the row, phpMyAdmin, but if we click again on the actor table, you can see that top row of the table towards the bottom of your screen now says Penny Guiness.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=100)** So in the blink of an eye, you've made some changes applied globally.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=104)** Now sometimes we want to update based on a value in a different table and not just a hard coded value.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=110)** So when we use the [[Microsoft Word|word]] Penny, we were providing a hard coded value.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=114)** We typed a static value in.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=117)** So once again, we're going to start by selecting what we intend to edit so we don't accidentally update all the rows in the table.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=125)** And this time we're going to use the customer table.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=128)** Select star from customer where customer ID is one.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=136)** And there we have Mary Smith.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=139)** And you can see all of the rows there, all of the fields, sorry, that are in the customer table.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=148)** Now let's say that we want to update her create date to be the same as her last update date.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=154)** Her last update date is the 15th of February, and her create date is the 14th of February.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=160)** So this time, instead of updating using a hard coded field, we are going to update one field to be equal to another.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=167)** So we say update the customer table.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=170)** Set the create date to be last update where the customer ID equals one.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=177)** Tells us that it's done something, but we can't see what.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=181)** So now if we scroll along a bit, still that top row of the table, which is at the bottom of your screen, you can see that the create date is now the 15th of February, 2006.
>
> **[3:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=192)** And the last update has automatically updated with today's date.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=197)** Because this is an automatic field, there's a trigger on it in the background, which you can see if you look in the structure tab at top of your screen.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=205)** It's straightforward to update multiple rows.
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=208)** You just need to adjust your where clause, or emit it entirely and you can update the whole table.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=214)** Let's say that you want to suffix all film categories with the word category.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=221)** So film categories are things like action, comedy, children, family, et cetera.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=227)** And we are going to change them, so we're going to say, we're changing all of them.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=232)** So we say update the category table, set name to be the concatenation of the current name field, and the word category with a space as well.
>
> **[4:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=248)** So it's affected 16 rows.
>
> **[4:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=250)** And if we click back on the category table, you can see it now says action category, animation category, and so forth.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=257)** Another way to update multiple rows is to run multiple queries.
>
> **[4:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=260)** And sometimes that's the only way to do it.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=262)** So sometimes your update command, you are setting each row to something slightly different.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=268)** If you are faced with doing this for a significant number of rows, maybe more than about 20, it's often best to prepare these queries in a spreadsheet to save time.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=276)** And we'll look at that later.
>
> **[4:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=278)** Sometimes you want to update a lot of columns at once rather than a lot of rows.
>
> **[4:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=283)** And this is achieved by comma separation.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=286)** So let's just start once again with our select query.
>
> **[4:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=289)** This time we're selecting star from film.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=292)** Well, let's do that first so you can see what's in there.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=296)** So the first film is "Academy Dinosaur," and we are going to say where the film ID is one.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=303)** And then we have "Academy Dinosaur."
>
> **[5:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=305)** Now we're going to change multiple fields.
>
> **[5:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=307)** We're going to change title and description in the film table.
>
> **[5:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=314)** So we're going to say update the film table.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=318)** Set title to be equal to "Academy Dino Egg."
>
> **[5:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=326)** You can choose your own thing and description field is going to be a shortened version of the current description field.
>
> **[5:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=335)** So we're not hard coding this one, we're using the existing field and saying just slice off the first letter.
>
> **[5:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=341)** That's what SUBSTRing does, where film ID is one.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=343)** So one row has been affected.
>
> **[5:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=346)** Let's go back.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=348)** And here we have "Academy Dino Egg," which is now missing the A, but it still has the space.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=353)** So we probably should have done SUBSTR with a starting position of three rather than two.
>
> **[5:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=359)** But you get the idea.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=360)** So now you know how to edit data in a database, and know to put safety first.
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/update-fields-in-a-table?u=76281980&t=366)** Always check your where clause by running a select statement before you run your update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[SQL]] (1)
> **Env Vars:** sql (1), substr (1)
> **Code Identifiers:** phpmyadmin (1)
> **Definitions:** is an  (1)
> **Speakers:** - [speaker] (1)

#### [Common issues with the UPDATE command](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=0)** - Things can go wrong when you're editing you might find you've updated a million rows instead of one, or that you've updated five different tables, when you've only run a query on one table, true story.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=12)** So let's look at some update gotchas.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=14)** Let's try running an update on the address table.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=22)** Update address.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=25)** Set address is null.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=29)** Where address ID is one.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=33)** And if we look down here you can see there is an address field.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=35)** It's currently for the top row it says forty seven MySakila Drive, So it might appear confusing that we're using the same field name as table name, but that's down to whoever designed this database.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=46)** So let's try running that, we're going to try and set the address field to be null error, it says, and it won't let me scroll to the error, which is helpful, but here it says under [[MySQL]] said, it says hashtag 1 0 4 8 column address cannot be null.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=62)** So let's look at the structure tab and see what's going on, and the address field there, which is line two.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=68)** If you look over at the null column for line two it says null no.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=74)** If you look at the line below, that's address two and look over at the null column it says yes.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=79)** So in other words, the address column is not allowed to be null, whereas the address two column can be.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=85)** So, let's pop back to the browse tab and just try that again, update the address table, set this time address two to be null where address ID is 1.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=103)** Okay, and it says zero rows affected.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=108)** Which is never a good sign, maybe because the address two field was in fact already null, but it is what we would call a nullable field.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=118)** So, had that had a value in it we would've just made it null.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=123)** So what else can go wrong?
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=124)** Let's look now at data types.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=127)** The wrong data type can truncate the value you intend to save.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=130)** It can pad it out with spaces or zeros, or cause the entire update to fail, and your data types are hidden away in the structure tab.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=139)** Let's go now to the language table, and look at the structure tab.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=146)** Nice simple table, just three fields.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=149)** The name field has a data type of char twenty.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=155)** The number in brackets is the maximum length this character field can be for a char.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=161)** So, remember the number twenty and then we're going to say update the language table, set name
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=177)** I reckon that's more than twenty now, and we'll say where language ID is one, and we get an error.
>
> **[3:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=189)** Once again, can't see it but we can see MySQL said 1 4 0 6 data too long for column name at row one.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=197)** We're trying to set the field called name to a string that is longer than twenty and it throws an error and that's a good thing 'cause it's much much worse when the database does not give you an error, and it just goes ahead and makes the update without telling you, things can get very confusing very quickly when that happens.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=215)** So, let's try select statements.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=218)** Select name and the length of name, which is this char twenty field from the language table.
>
> **[3:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=231)** Okay, we've got English seven, Italian seven, Japanese eight, and so on.
>
> **[3:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=236)** Now this table is telling you that the length of the [[Microsoft Word|word]] English is seven.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=242)** And of course that sounds about right, but behind the scenes the database has gone off and stored each of these fields as a char of twenty.
>
> **[4:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=250)** So for the word English, thirteen spaces have been added.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=253)** This is not shown or proven to you in this table but there are times when setting a data type of char twenty or any length will actually affect what you pull out in unexpected ways.
>
> **[4:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=267)** MySQL's kind of clever enough to strip its own padding back out, but that is probably a database setting, and if there were a different database setting for this all of these length numbers here would be twenty.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=279)** So although we can't see these trailing spaces they are in the background and they can affect your queries.
>
> **[4:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=284)** It depends on the query and it depends on your settings.
>
> **[4:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=287)** Padding can also affect VA char and VA binary data types too.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=292)** So we've seen data types trip us up by padding or truncating values, but as I mentioned earlier update commands can fail altogether where you are unwittingly trying to convert data types.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=303)** Let's say you are looking at the customer table, and you try to run the following query:
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=315)** update customer, set active equals last update where customer ID equals one, error.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=324)** MySQL said 1 2 6 4 out of range value for column active at row one.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=331)** If we look at the structure table, structure tab, sorry the active field, which is row seven is a tiny int and last update is a timestamp.
>
> **[5:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=342)** The database does its best and tries to convert the date to a numeric value, but then it can't squeeze that value, which is quite a long value into tiny int, and so the query fails.
>
> **[5:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=355)** Moving on from data types, we're going to look at the effect of keys and constraints on an update query.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=361)** Your update command can easily violate a primary or foreign key or a unique constraint.
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=366)** So... let's just try this: update, customer... set address ID equals 7 0 7 where customer ID is one.
>
> **[6:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=388)** Now I looked up the address table earlier and I know that the maximum ID that exists currently is 6 0 5.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=398)** So we are updating the customer table, setting the address ID to be a higher number than exists in the address table.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=406)** That's what we are trying to do, and it fails, cannot add or update a child row.
>
> **[6:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=414)** A foreign key constraint fails and it tries its best, in database nerdy language, to give you some pointers on precisely what has gone wrong there.
>
> **[7:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=426)** Now if I try that query again with 6 0 5, it works okay because the 6 0 5 exists in the address table.
>
> **[7:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=438)** So finally your query might fail because someone else is running an update command at the same time, exactly the same time, I mean In this case, you can get an error even though your query appears completely valid.
>
> **[7:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=450)** So your query can fail or change your update in unexpected ways due to null values, data type mismatches, constraints, or other people locking your database.
>
> **[7:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=461)** As a result, it is always worth checking you've made the edit you intended.
>
> **[7:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-update-command?u=76281980&t=466)** So, once you've run your update command run a select command with the same filters, and have an eyeball of those rows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[Microsoft Word|Word]] (2)
> **CLI Commands:** mysql (4), find (1)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Speakers:** - things (1)

#### [Automating your query creation](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=0)** - [Instructor] What if you need to run a hundred update queries, all with slightly different values or filters?
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=5)** If the thought of doing your task manually fills you with dread, consider automating your query creation.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=11)** I tend to use [[Microsoft Excel|Excel]] for this, and I'm going to show you how I do it.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=14)** Now, you can run multiple update queries by separating them with semicolons.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=19)** Let's just show you.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=21)** UPDATE film, SET title to be abc, WHERE the film_id is 1, semicolon.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=32)** And then we're going to copy that, pop it down, and say 2.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=37)** UPDATE, everything stays the same, but I want to update title to be def, WHERE film_id is 2.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=44)** Okay?
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=45)** So this is our target output, is to create these multiple scripts.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=50)** And it might seem obvious 'cause this is more about Excel than anything, but I wanted to show you because I do this regularly, and I think it's useful.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=58)** So here is our spreadsheet, and we just break the query up into static and variable parts.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=64)** So, first we have the "UPDATE film SET title =".
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=70)** Now, because we're going to make that variable a string, we need to surround the variable part that comes next with apostrophes.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=78)** I think it's easiest to keep those apostrophes as part of the original string.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=81)** So notice that there's an apostrophe on its own in column B, at the end of column B.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=88)** Then we have the title variable, where I've entered a few simple string values, and you'll recognize abc, def from the target output I just showed you.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=97)** Then we have another apostrophe, which is going to encapsulate the abc, that will come at the end of the abc.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=105)** And there we have "WHERE film_id =" So column D represents a static part of the query.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=113)** Now, just a note on how this works here.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=117)** Notice that there's an apostrophe at the beginning of column D as we just said.
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=121)** But when you click on cell D4, I don't know if you can see, this might be very tiny on your screen, there's actually two apostrophes in that cell, and if I get rid of one and we just have the one apostrophe, nothing shows up in D because Excel interprets a single apostrophe at the start as meaning "please understand what follows as text."
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=144)** So you can type something that looks like a date or looks like a number, and Excel will know to make it a string, basically.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=150)** So, if you want to see the apostrophe, which we do for our purposes, you need to do a double single apostrophe there in order for one to show.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=161)** There are times where I've had to use three apostrophes in a row to achieve what I want, doing this method.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=166)** So then we have the second variable, "id," which is a number and, therefore, doesn't need a string around it.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=172)** And at the end we have a semicolon, which tells the database we've reached the end of a single command.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=178)** And again, I find it easier to leave that bit of punctuation out of the cell containing the variable, because column C and E contain the things you're going to be updating.
>
> **[3:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=189)** And often, these spreadsheet documents can have quite a long life, as you run a series of commands.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=193)** And then you tweak this and that over time, and you run another series of commands.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=197)** So you may find that you need to update C and D fairly frequently.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=202)** Last, but not least, we bring all of these things together with a CONCAT command.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=206)** And again, that may look very small for you, but it just says "=CONCAT(B4, C4, D4, E4, F4).
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=213)** And we can eyeball that, and that looks about right.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=216)** To get all of these queries then into phpMyAdmin couldn't be simpler.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=220)** Just highlight the cells, control C or command C on a Mac, and control V or command V to get them into phpMyAdmin.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/automating-your-query-creation?u=76281980&t=230)** And then you would just click go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4)
> **Env Vars:** update (3), where (3), set (2), concat (2)
> **SQL:** update (3), where (3)
> **Code Identifiers:** film_id (3), phpmyadmin (2)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Updating a field using JOIN](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=0)** - [Instructor] Sometimes we want to update one table using a value from a different table.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=4)** The main use case for me for this is where I've needed to create a unique key.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=10)** So I've used fields across lots of different tables to make one reference that is unique in some new sense.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=17)** And that might be to create a whole new table, for example.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=20)** So in this section, we're going to look at how to run an update command combined with a join.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=25)** We're not going to create a unique key here because that would mean joining lots of different tables together.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=30)** We're going to take one of our earlier queries select star from payment P join rental R on P dot rental id equals R dot rental id.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=45)** There you go.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=46)** That's the select query which has returned us our data.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=55)** And now we're going to turn that into an update command.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=57)** Once you have a working select statement, the update command is straightforward.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=62)** Just remember to use your table aliases to remove any ambiguity on exactly which column you mean.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=69)** So now we say update payment P, join rental R.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=75)** So that entire statement becomes effectively the table name or the source name if you like.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=81)** And then you put your set underneath.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=83)** Set P dot payment date equals R dot return date where R dot rental id equals one.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=94)** Now this is a fairly spurious example just to show you the syntax really of this command.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=100)** And it says one row has been affected.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-a-field-using-join?u=76281980&t=102)** So if you can write a join you can write an update command based on a join.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Updating dynamically](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=0)** - [Instructor] Sometimes we don't know what value we want to set a field to when we start out building our query.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=6)** In this case, we don't want to hard code the values.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=8)** We want to use field names, what we might call updating dynamically.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=13)** There are lots of different approaches here and the first one to look at is called a subquery.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=17)** It's an alternative really to adjoin.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=21)** So instead of select star from, we're going to say update the customer table.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=26)** Set the create date to be equal to, and here starts the subquery, select last update from the payment table where payment ID is one.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=45)** And then we've got the where clause for the customer table where customer ID is one.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=52)** So update the customer table.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=53)** Set the create date to be equal to the last update date from the payment table where both of those filters are holding true.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=63)** Now in reality, that says zero rows affected by the way because this is not the first take of this movie.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=69)** So I have previously run that query, but normally it would say one row effected.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=73)** In reality, it's unlikely we would want to set the create date of customer one to the last update of payment one.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=79)** I have made a spurious query here deliberately to affect as few other users of this global demo database as possible to illustrate the subquery technique.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=89)** For the same reason I wouldn't want to run delete from star.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=93)** Okay, another way to update dynamically is to use some conditional logic.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=97)** Let's look at the specific case where you want to run an update only where a record exists or matches and this is a very common need.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=106)** So we're going to start with a select statement.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=108)** Select star from film, dear oh dear, film where film ID not in, select film ID from inventory.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=128)** So that's a long-winded way of saying give me all the films that exist but that we do not have in stock.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=134)** And there we go.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=135)** We have 42 of them.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=137)** Now let's say that we want to flag all of those in the film table.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=141)** So all of those that are not in stock, we want to flag them in the film table.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=145)** And we're going to do that as a bit of a hack.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=147)** We're going to use the release year column.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=150)** We're going to set it to 1970 by way of a flag because the alternative, the proper way of doing it is to create a whole new field and set it to one or zero really, but we've not got to that part yet.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=161)** So update the film table.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=167)** Set release year to the year of the Unix epoch, where film ID not in stock.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=177)** And 42 rows were affected.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=179)** Good.
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=180)** So we've checked whether a record exists and based an update conditionally upon that.
>
> **[3:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=185)** And you could write here in fact, where not exists.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=191)** That would also work.
>
> **[3:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=194)** An alternative way to make dynamic update statements is to use the if statement.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=199)** Ifs, as with most other languages, have an if then else structure.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=205)** So let's just go to the customer table.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=209)** Let's say we want to set customer emails to null where a customer is inactive.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=215)** So let's have a look at what we're planning to do here.
>
> **[3:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=219)** The customer's status is held in a field called active.
>
> **[3:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=225)** You can see it towards the bottom right of your screen, in between address ID and create date.
>
> **[3:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=229)** You have active and they're mostly ones and we are going to say set the email address to be null where active is zero.
>
> **[3:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=238)** But before we do that, we're going to check that there is a case in which active is zero.
>
> **[4:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=244)** Otherwise we're not going to do a lot with our queries.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=247)** So there we go.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=249)** And let me say active count star to boot.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=257)** No we won't.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=259)** Group by active.
>
> **[4:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=263)** There we go.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=264)** Okay, so there's 15, we're going to be affecting 15 emails here.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=269)** So we're going to say update customer, set email equals, and then we say if active is not null, otherwise email.
>
> **[4:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=287)** So we set it to itself in the case that active is one.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=292)** And we hit go and 15 rows are affected.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=295)** You can run updates on multiple fields with different if statements by comma separating them.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=300)** Or you can use a case statement.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=303)** Now I've done some prep work for what comes next so your database will look different to mine.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=311)** Let's go to the film table and check about the language.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=317)** We've got two fields here.
>
> **[5:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=319)** We have language ID and original language ID.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=323)** And I have updated this so we should have three different languages and I'm just going to check that because the Sakila database rebuilds itself quite often, and it may have already overwritten my changes.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=340)** Indeed it has.
>
> **[5:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=346)** And there by some TV magic, we have changed some data in the database and I am now going to run a query.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=353)** The query, using the case statement I should say.
>
> **[5:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=356)** What we're going to do is set the original language ID to three where the language ID is two and vice versa to use a case statement.
>
> **[6:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=365)** This will all become clear, hopefully.
>
> **[6:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=367)** Update the film, set original language ID is equal to and then begins your case.
>
> **[6:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=374)** Case when language ID is two.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=381)** Then set original language ID to three when language ID is three.
>
> **[6:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=388)** Then set the original language to two and I'm going to run that really quickly and that has affected a thousand rows which was more than I was expecting to be perfectly honest.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=400)** So let's just check the film table, and we can see there, language ID is two, original language ID is three.
>
> **[6:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=408)** So let's check using select distinct, exactly what's happened there.
>
> **[6:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=414)** Select distinct left.
>
> **[7:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=420)** The reason I'm taking the first character of the title field is that I based the update on that first character.
>
> **[7:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=427)** So if it was an A, I set the original language ID to be two and if it was a B, I set the language ID to be three.
>
> **[7:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=438)** And we can see that the case query has worked just fine.
>
> **[7:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=442)** But look what else has happened.
>
> **[7:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=445)** The original language ID for all other letters was six and it has been overwritten to null.
>
> **[7:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=452)** Can you see from the third row down?
>
> **[7:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=453)** Original language ID, null, null, null, null, null.
>
> **[7:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=457)** Now what's happened with our case statement is the database has said, well I haven't got a case for when language ID is one or four or five.
>
> **[7:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=468)** So I'll set it all to null.
>
> **[7:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=471)** So you can easily overwrite your entire column with something you did not intend and to get round it whenever you are using the case statement, always use an else statement at the end.
>
> **[8:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=481)** So update film, set the original language ID to be equal to case when language ID is two, then set original language ID to be three and when language ID is three, then set original language to be two, else, make it six.
>
> **[8:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/updating-dynamically?u=76281980&t=505)** Always stick an else in your case statements.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Update the film table using JOIN](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=0)** - [Instructor] Let's say that you've noticed the release year column in the film table is wrong.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=11)** It should contain the year from the last update column of the film category table.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=16)** To fix this mistake, you need to set the release year column from the film table to be the year of the last update column in the film category table.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=26)** This is your challenge and it will require two things.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=29)** You will need to join two tables together and you will need to use a function in your query because release year and last update have different data types.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=40)** Five minutes should be enough for this query.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-update-the-film-table-using-join?u=76281980&t=42)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Update the film table using JOIN](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=5)** - Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=6)** So how did you get on?
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=8)** I would start tackling this challenge myself with a bit of detective work.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=12)** We need to know of any data type conversions before we work out which functions to use and actually build the query.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=17)** So let's look at the structure tab of the film table and see that release year is a year data type.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=30)** And last update in the film category table is a time stamp.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=39)** So we're going to need to convert date to number and of course we need to extract the year from the date.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=46)** So they're the conversions that we're going to need to do.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=49)** Let's build up the join query using a select select star from film f join film category FC.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=61)** Put them all together.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=64)** On f dot film ID equals fc dot film id.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=71)** So there's our join and here's the film fields.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=75)** And to the right of your screen there you can see the film category fields, just three of them at the end there.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=82)** Now we can select the columns that we actually want to update and pop that on a different line as well.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=88)** And we'll say select f dot release year fc dot last update.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=99)** And there we have our two columns: release year and last update.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=103)** And just to remind you, the challenge is to set the release year column to be the year of the last update column.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=111)** So the next step is to get the year of last update.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=117)** And in my [[SQL]] there is a year date function that we can use which is handy.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=124)** And there we have extracted the year, which in most cases is already the same as the release year.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=130)** Now let's make that into an update statement.
>
> **[2:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=133)** So what I'm going to do is just put update there, update film f, join film category fc on blah blah blah, And I've not deleted the upper bit yet cause I want to remember which columns I'm using.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=147)** Set f release year equals that.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=155)** Then we can get rid of those keywords and any errors.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=158)** So update the film and the film category table.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-update-the-film-table-using-join?u=76281980&t=161)** Join those two together and set the release year to be the year of the last update column from the film category table and 42 rows are affected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Speakers:** - welcome (1)


### 4. Inserting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [INSERT rows into a table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=0)** - [Instructor] Sometimes you need to put whole new rows into a database rather than just edit the existing ones.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=6)** Maybe a new film has been released or a new member of staff has started to work at our movie rental store.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=12)** In these cases, we would need to insert rows into our database.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=16)** There are two key ways of inserting data into an existing table.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=19)** We can list every single value in order or we can specify columns in any order and supply values to match.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=27)** Let's look at both of them.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=29)** The upper example here where it says, insert into table values, value one, value two is where you specify a value for every single column in the table.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=38)** And you must specify them in the right order.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=41)** In the second example, we say insert into table, and we specify the columns, and then we say values, and we specify values to match the columns.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=49)** So we could put there, insert into table column two, column one; values, value two, value one.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=56)** You can put them in any order you like.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=57)** And you don't have to specify every single field.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=60)** More on that later.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=62)** Let's try the list all method, the upper method in SQLA.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=67)** We're going to start with the country table.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=70)** And in order to insert a country, we're going to need to know the ID.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=75)** So we're going to start off by saying, select the maximum country ID from the country table.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=82)** And it tells us that that is 109.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=85)** So we're going to add one to that to make 110 for our new record.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=89)** And we're going to say, insert into the country table, values, and we're going to specify all of them 'cause that's the method we are using now.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=101)** 110 BrandNewCountry.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=105)** And then we're going to specify the date as well, 2022.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=112)** And it says, one row has been inserted.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=114)** Doesn't show us it.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=115)** So let's have a little look.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=117)** I'll click on the country ID, just sort on it.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=122)** And there we have the top row in our table, 1110, 110, sorry, BrandNewCountry. There it is.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=129)** So we know that on this method, which is no longer showing, let's just write that in again.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=134)** Insert into country, values, and we had 110 BrandNewCountry2 'cause we're going to create a different one.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=147)** And then we had a date, didn't we? 2022-08-13.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=152)** So that was our query of the two there.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=156)** Now, we could have used a null here instead of specifying the number.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=164)** And that would've saved us time, wouldn't it?
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=166)** Because we didn't need to look up at the maximum ID.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=173)** I'll just prove to you that that's worked.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=174)** There we go. 110 BrandNewCountry2.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=178)** That's pretty clever what it's done.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=179)** It's incremented the number for us.
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=180)** All we did was supply a null.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=184)** And that, if we look in the structure tab, is because under the extra heading there, it says comments, extra, and action.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=195)** And under extra, it says auto_increment.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=198)** So this is a special kind of field that will automatically work out what the maximum value is, add one to it, and stick that in if you don't specify it.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=209)** Now, can we do the same for timestamp, this last update column?
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=213)** Could we have gone insert null BrandNewCountry3 null?
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=220)** Not quite.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=221)** It won't assign a date in place of a null, but there is something we can do which will help us.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=227)** So insert into country values, and we'll say null again,
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=235)** BrandNewCountry3 this time.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=240)** And then instead of null, we're going to say current timestamp like so.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=249)** And that says, it's inserted one row.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=252)** It's not showing it to us.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=253)** So let's have a look.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=255)** Country. And there we go.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=258)** That's worked using a variable.
>
> **[4:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=261)** Now, the variable name will be different in different versions of [[SQL]] by the way, but all of them have a version.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=268)** So let's look now at the different method.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=270)** The specify columns method of inserting data instead of the list all method.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=275)** It's more complex, but actually, it's more commonly used.
>
> **[4:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=278)** This is the one where we specify the columns in any order with values to match.
>
> **[4:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=283)** So we did have insert into country, values, and then we specify the values, didn't we?
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=290)** Null BrandNewCountry4, and then we were using a variable, timestamp.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=300)** Actually, that's what we were doing before.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=303)** So let's just break that out.
>
> **[5:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=307)** Now, we're going to say, insert into country country.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=311)** And this second country is the name of the field, okay?
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=315)** I know that looks a little bit confusing.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=317)** So insert into the table called country, specifically into the field called country, values, and then we just specify the value that we want to go into that field, which is BrandNewCountry4.
>
> **[5:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=334)** And you see that that has inserted one row.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=337)** Let's have a quick check.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=340)** There you go. ID 113.
>
> **[5:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=342)** Now, we only specified one field, even though there are three fields.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=348)** And none of them are nullable.
>
> **[5:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=350)** So that should cause a little bit of head scratching maybe, or it certainly did for me the first time I came across it.
>
> **[5:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=355)** We didn't need to specify an ID because as we know there's an auto increment.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=360)** And we didn't need to specify a timestamp because the default is in fact current timestamp.
>
> **[6:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=367)** So how your table is set up will affect how you can write your insert queries.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=375)** Note that you wouldn't use a where clause or a join really with an insert.
>
> **[6:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=380)** They don't really make sense when you're supplying new data for a table.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/insert-rows-into-a-table?u=76281980&t=384)** So now, we have the basics of inserting new data under our belts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** sqla (1), sql (1)
> **UI Navigation:** select the (1), click on (1)
> **Code Identifiers:** auto_increment (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Common issues with the INSERT command](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=0)** - [Teacher] Let's look at some common errors that happen when you insert data.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=4)** As with the update command, the most common involve data types and violating constraints such as NOT NULL, UNIQUE, or key constraints.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=14)** We're going to start with violating primary key constraints.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=17)** Let's try inserting a row into the category table.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=22)** Insert into the category table, category ID and name, values, one.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=33)** New category.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=35)** Now we're trying to give it a category ID of one which already exists.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=39)** If you look in the table towards the right of your screen, the bottom rather, category ID one is assigned to action category currently.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=49)** And where we try to insert that, it says, my sequel said, 1062 duplicate entry one for key primary.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=55)** It's important to read and understand your errors.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=59)** Primary key fields automatically check for uniqueness in most versions of [[SQL]], and so the row was not inserted.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=65)** if we'd specified a new value for category ID there, such as 17, that would've worked.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=73)** Now how about violating a foreign key constraint?
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=75)** The IDs in the category table run from one to 16.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=81)** This ID field, this category ID, is used as a foreign key in the film category table.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=89)** So remember that those, the range of those values is from one to 16.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=94)** And you can see category ID in the table towards the bottom of your screen it says, 6, 11, 6, 11, 8, 9, et cetera.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=103)** So in this table category ID is a foreign key and we're going to violate this one this time.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=110)** Insert into film category.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=117)** Category ID values 17.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=122)** Go.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=124)** Now there's an interesting error.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=128)** We only specified category ID, but it turns out that film ID needs to be specified too.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=135)** It said, film ID doesn't have a default value.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=137)** Let's just checking the structure tab.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=139)** Film ID does not have a default value.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=143)** Quite right, well done database.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=144)** So both the film ID and the category ID, a primary keys of this table, but they are also primary keys of other tables.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=152)** There isn't a unique column here for film category and this is why it's important to read your errors.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=159)** I was expecting an error here but not this one.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=162)** So let's rebuild that query to specify both IDs and we're going to say, insert into film category.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=171)** And this time we say film ID and category ID values one and 17.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=182)** So for film one, we're going to insert category ID, if 17, which is out of range, remember.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=187)** And this time we see it's the foreign key constraint that's failed, cannot add or update a child row.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=193)** A foreign key constraint fails.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=196)** And there with a lot of nerdy language, the database is trying to help you pin down exactly what's gone wrong.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=202)** So let's try that again with a 16, which is in range and that one works.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=209)** The database then is running a series of checks when you insert data.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=213)** For a well specified database with foreign and primary keys all set up linking the tables, you can't just go around inserting what you like.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=220)** Let's look now at violating data types.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=224)** We're going to use the payment table.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=227)** And we're going to have a look at the structure tab.
>
> **[3:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=231)** See that amount, the type given for the amount field is decimal five comma two.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=239)** So that means the decimal can be up to five characters long and have two decimal places.
>
> **[4:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=244)** Now this time we're going to use the insert tab here.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=246)** We're going to specify the values to insert rather than writing in a query.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=251)** And this can be quicker when you want to see which values are available to you.
>
> **[4:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=256)** Cause phpMyAdmin offers you some drop downs, for example.
>
> **[4:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=260)** Bear in mind we are writing insertions here that we want to fail because I'm trying to show in the ways in which they do fail.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=266)** So for amount, which is there, let's enter 5.33333.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=275)** Now we are only allowed two decimal places, remember, this should fail, therefore, in some way.
>
> **[4:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=284)** Incorrect integer value for column customer ID.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=290)** So I'm going to make that screen slightly smaller so it all fits so we can see what we are doing.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=295)** So we're going to pick customer ID.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=299)** That one can be null.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=301)** I'm going to try again with the 5.33333, go, go.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=306)** Incorrect integer value for staff ID.
>
> **[5:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=309)** Now that was grayed out, so I thought we'd get away with that.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=312)** We'll have Jon, I think.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=316)** Data truncated for column amount at row one.
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=320)** One row was inserted.
>
> **[5:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=322)** It says at the top in the red banner but it's telling you that its truncated the values.
>
> **[5:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=327)** Okay, so 5.33333 was not allowed.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=331)** And if we go to payment table and we see the most recent entry, you can see that the amount has been truncated there to 5.33, which is exactly what we would expect.
>
> **[5:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=346)** Let's try another insertion and we'll say that Amy has once again been served by Jon and this time we're going to enter.
>
> **[5:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=358)** So this has more than the maximum five characters that we are allowed and it gives us an out of range value which is what we would expect.
>
> **[6:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=369)** But what I really want to know is, has it inserted an amount at all?
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=375)** Just make sure that we've got the latest version of that and I don't think it has.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=381)** And one more go on things that can go wrong.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=386)** Once again, we're going to enter Amy served by Jon and this time we're going to enter some text and it says that's an incorrect decimal value.
>
> **[6:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=399)** So these are the same errors by the way you'd get if you wrote a query in the SQL window.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=404)** It's just a slightly quicker way of producing the same results.
>
> **[6:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=408)** So sometimes perfectly plausible data can either fail to insert or worse, it can insert and be altered without you knowing because of all these invisible rules the database applies to its data.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=421)** They're all set up in the background and they're not always obvious.
>
> **[7:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/common-issues-with-the-insert-command?u=76281980&t=423)** So always check that what you have inserted looks as intended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2), null (1), unique (1)
> **Versions:** 5.33333 (3), 5.33 (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** phpmyadmin (1)
> **UI Navigation:** go to (1)

#### [Using MERGE instead of UPDATE/INSERT](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=0)** - [[SQL]] has been around since the seventies but the merge command was only entered into the SQL standard in 2008.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=7)** So it's a relative newcomer.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=10)** Merge does something quite special.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=12)** It checks whether a record is present, based on a field you specify such as ID.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=17)** If that record is present, it updates the fields to other fields that you specify.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=22)** And if the record is not present, it inserts a row.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=26)** So it's combining a two step process into one.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=29)** For years, programmers have been checking whether the record is present with select, and then either running an update or insert command on that basis or indeed a delete command, which the merge query can also include.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=42)** The problem with the two step process is that somebody else might come along and change your database in between the times it takes to execute those two statements.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=51)** Even if they are only separated by a semicolon and run in the same window, there is still the opportunity for someone else to come and run a transaction in the middle, which would upset things.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=62)** So the merge statement combines an update and an insert with some conditional logic.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=67)** Now the merge statement in its normal form is not available on my SQL.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=71)** And so we are going to look at the T SQL syntax for [[Microsoft SQL Server|SQL Server]], [[Microsoft SQL Server]] first.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=77)** There's a pretty good explanation at SQL Shack, which we are going to look at now.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=82)** So I've scrolled down a bit already on this site to the point where we see a create database statement and some insert statements that follow and some of this syntax we haven't covered but it's fairly self explanatory.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=95)** So this creates a database called SQL Shack Merge Demo.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=99)** It uses that database to create two tables, source and target product.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=106)** And I'm going to call them source and target, 'cause it's less of a mouthful.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=109)** And then it uses an insert statement to populate each of those tables.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=113)** So we have source and target, each of them has four rows and then at the end it says select star from source [[Microsoft Products|products]] and target products.
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=121)** And these two tables that you can see now are the source at the top and the target at the bottom.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=129)** I'll leave that visible so that we can remember which one's which.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=134)** So note that both tables have four rows but in the product ID column the first table has IDs 1, 2, 3, and four.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=142)** And the second had has IDs 1, 2, 5, and six.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=146)** Also note that ID number two, desk, has a different price in each table.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=152)** In the source table it has a price of 80 and in the desk table it has a price of 180, in the target table at the bottom.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=161)** Now depending on how we structure the merge command we could end up with a table where desk had a price of 180 or 80 or we could probably end up with a situation where that row was entirely updated or entirely removed.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=175)** So the merge command is very flexible and you have to be careful to end up with precisely what you intended.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=181)** When we run the merge command, we can insert records, update duplicate records, and even delete them.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=187)** So let's have a look at our first merge command.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=191)** The SQL says use SQL Shack Merge demo which is the name of the database.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=196)** And then there's three lines of code which is your sort of merge command.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=200)** It says Merge target products as target using source products as source on.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=206)** And then it gives the ID, product ID, to join those tables together or compare them together.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=213)** And this merge statement should look very much like a join statement.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=217)** That's how I think of it.
>
> **[3:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=219)** So notice also that we are using aliases here.
>
> **[3:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=223)** Merge target products as target using source products as source.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=228)** So there's your the beginning part of your merge statement and then underneath it says when not matched by target, then, insert the following.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=239)** So this merge command has an insert statement but not an update or a delete statement.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=246)** Okay? And that explains why we end up with a six row table on the right hand side.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=252)** There's nothing telling it to delete duplicate records.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=255)** There's nothing telling it to override or update.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=259)** There's just an insert command where there isn't a row found in the target table, insert the following.
>
> **[4:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=267)** So let's just go through again what's happened here.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=268)** If we look on the right hand side we have essentially the source table.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=274)** I'm just going to scroll up and check that I've got that right.
>
> **[4:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=277)** The source table is the one at the top.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=279)** Target table is the one at the bottom where desk is 180 and that has 1, 2, 5, and six.
>
> **[4:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=284)** So our output, the right hand table here, the one the arrows are pointing to, the first four rows of that is our target table completely unchanged.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=294)** And then the database has come along, compared it to the source table and found that IDs three and four are in the source table but not in the target table.
>
> **[5:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=304)** And so it's inserted those values, when not matched by target then insert.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=310)** Okay, so this page contains lots of different examples of merge statements to show you different outputs with the same two little tables to start with.
>
> **[5:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=319)** And I want to show you some of those other ones because they can include delete and update commands.
>
> **[5:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=326)** So let's scroll down a bit to one of the more complex statements and you can of course look at all of these in your own time if you think that the merge command is going to be useful to you.
>
> **[5:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=339)** Let's have a quick look at this one.
>
> **[5:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=341)** Use the same database, same merge statement as before, which is a bit like a joint statement.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=347)** It's telling the database how to compare the target and source tables by using product ID.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=353)** And then you've got three different sections, three comments limiting those three different sections.
>
> **[5:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=359)** You've got for inserts, when not matched by target, then insert the following.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=363)** For updates, when matched, then update.
>
> **[6:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=368)** Set the target product name to be the source product name and the target price to be the source price.
>
> **[6:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=373)** So where there is a duplicate record, it is instructing the database to use the source product name and price in preference to the target one.
>
> **[6:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=383)** And then at the end, deletes.
>
> **[6:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=385)** When not matched by the source table, delete the following records.
>
> **[6:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=391)** And then select everything from both of those tables one and two and there is your output.
>
> **[6:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=397)** Now my SQL does not support the merge command but instead they offer on duplicate key update.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=404)** So let's try it.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=406)** Let's look at the country table.
>
> **[6:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=414)** On duplicate key, which means if you find a match, update the country field to be equal to Andorra.
>
> **[7:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=427)** So let's look at the syntax.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=428)** The insert runs first, that's the top line.
>
> **[7:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=431)** And if it throws an error by duplicating the primary key or unique index, [[MySQL]] quashes the error and then runs the uptake, which is the second row.
>
> **[7:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=442)** So it works a little bit differently than the merge statement.
>
> **[7:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=446)** And you see it says one row has inserted.
>
> **[7:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=449)** And let's just check.
>
> **[7:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=453)** And there we can see a country idea of 110 and a country of Andora.
>
> **[7:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=459)** Now let's just check a bit further.
>
> **[7:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=462)** We're going to say select start from country where country like and using a wild card there like so on.
>
> **[7:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=471)** Okay. And we can see there, Andorra just as we could see it before.
>
> **[7:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=475)** It's not a great idea to use a text field as your duplicate key.
>
> **[8:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=480)** Your duplicate key ideally needs to be the primary key and it needs to have a unique constraint on it and preferably be numeric.
>
> **[8:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=490)** Country names are frequently spelt or punctuated differently.
>
> **[8:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=494)** So if Andorra could be spelt in more than one way or you'd forgotten to put a double R in or something your query would not run as you had intended.
>
> **[8:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=504)** Merge, or on duplicate key update, bit more of a mouthful with mySQL, are great ways to achieve a conditional update and insert at the same time without worrying about other people changing the data as you are working.
>
> **[8:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/using-merge-instead-of-update-insert?u=76281980&t=517)** But it does need to be used with care.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Microsoft Products|Products]] (6), [[MySQL]] (2), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (11)
> **CLI Commands:** mysql (2), find (1)
> **Warnings:** note that (2), be careful (1)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** mysql (1)
> **Analogies:** such as (1)

#### [Duplicate table with SELECT](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=0)** - [Instructor] Sometimes you want to duplicate a table.
>
> **[0:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=2)** For example, you want to test a set of queries on a table without any chance of affecting the original data.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=9)** There are several ways to do this, and perhaps, surprisingly, they all use select.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=14)** Let's make an empty table now using create table and populate it using select.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=21)** So we're going to say create table category two as select star from category.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=35)** Now, that's funny.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=36)** It told me it had a zero result set which made me feel it hadn't worked, but then when I run the query again, he said I can't do that 'cause category two already exists, but it's not showing me category two in the tables.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=50)** So let's just refresh our database.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=56)** And the sakila database has disappeared entirely, which could explain it.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=60)** So we're going to go and use MariaDB instead.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=64)** Oh, and there it is.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=66)** Okay, these funny moments happen all the time with this demo database and you just have to plug away at it and switch between the servers or you'll go mad, right.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=78)** So we can see this is created a new table and it's got the data and it's got the structure from the category table, but there aren't any links persisting between the two.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=90)** So you could delete the new table and you wouldn't affect the original one.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=95)** Notice though that there are no foreign key constraints or unique constraints.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=104)** Those have not been copied across.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=105)** Let's just check.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=107)** Pretty sure there are some in the category table if we go structure and then relation view.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=114)** And actually, there aren't any.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=117)** So that's a bad example but it doesn't copy across your triggers and your constraints and it copies across everything else.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=126)** One alternative to create table in Oracle or [[Microsoft SQL Server|SQL server]] anyway is select into, and the syntax goes like this.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=137)** Select star into category, say category three from category.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=146)** Okay, I can't press go 'cause it doesn't work in my [[SQL]].
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=149)** This will again, copy the data and the structure but not the constraints, keys, indexes, or triggers.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=155)** You can even duplicate the table in one database to a table in another database, which could be really handy.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=162)** For instance, select star into category archive.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=167)** How you spell archive?
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=168)** Archive in backup.mdb.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=177)** Where's my back tick?
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=180)** From category.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=181)** So there's some syntax that says take everything from the category table and pop it into a new table in a different database, which is perhaps full of archives in this example.
>
> **[3:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=194)** You can also create a new table from just a few columns instead of using the asterisk here.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=199)** So select column one, column two.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=205)** If you need to choose between the two methods I've just shown you so that select into or create table, the advice is to use create table.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=213)** This use of select into goes against the intention in the SQL standard and it's not supported in my SQL or post gray, but select into remains a favored option by many.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=224)** And one of the reasons is it does not lock the tables.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=228)** So if you're copying a big table across, other people can still be running transactions as that's happening.
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=235)** If your target table already exists with identical structures to the table you are trying to copy, you can just use insert to copy all the table from one data to another.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=247)** So let's take our newly created table, truncate category two, which that is category two there.
>
> **[4:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=256)** So it's got 16 rows and three fields.
>
> **[4:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=261)** Do you really want to do this?
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=262)** Yes, okay.
>
> **[4:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=265)** And then we'll just browse it again to make sure it's all gone, which it has.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=269)** But if we go to the structure tab, you can see that the structure of the table is still there.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=276)** The columns are all defined.
>
> **[4:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=278)** Now, we can insert everything into our truncated empty table.
>
> **[4:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=284)** Insert into category two, category id, name, and last update, specifying the columns there.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=295)** And then we say select star from category.
>
> **[5:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=302)** No, category, like so.
>
> **[5:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=304)** So insert into category two all of the items from the category table and it's inserted 16 rows.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=312)** That sounds promising.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=313)** So when we browse, there we go.
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=315)** They're all back again.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=316)** So we have a few tricks up our sleeve.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/duplicate-table-with-select?u=76281980&t=318)** If you need to create a copy of a table and they all use select, we've got create table select into, and insert into select.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), for instance (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Insert a row into the film table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=0)** (upbeat pop music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=5)** - [Instructor] Imagine you are responsible for keeping all the films up to date in the Sakila database, and a new film has just been released.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=14)** For this challenge, your objective is to create a new film in the film table.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=19)** This means you will insert one row into the film table.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=23)** I want you to create the shortest, most efficient insert query that you can for this table.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=29)** By which I mean, if you don't need to specify a value, don't.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=33)** Five minutes, should be enough for this query.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-insert-a-row-into-the-film-table?u=76281980&t=36)** Good luck.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat pop music) (1)

#### [Solution: Insert a row into the film table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=0)** - [Instructor] Welcome back, and how did you get on?
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=8)** Now, the way that I would tackle this query, which was, as a reminder, to insert a row into the film table, I'd start with the Structure tab and work out which columns must be included in our query.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=21)** We're going to be able to set ID to NULL, because it's what we call an Automagic field.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=29)** It's an automatic field with a dose of magic, so it auto increments for us.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=36)** We're going to need title, because it says NULL, No, and we're going to need language ID, which is also not nullable.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=45)** But look, the [[Representational State Transfer (REST)|rest]] are either nullable or they have a default value.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=50)** Scroll back up so you can see the column headings.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=53)** So it says Name, Type, Collation, Attributes, Null, Default.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=57)** So if Null is yes, we don't need the field, and if Default is specified as it is here for rental duration, has a default of three and rental rate has a default of 4.99, if those things are specified, you also do not need to specify a value, so this tiny query is actually going to suffice.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=80)** Insert into film, then we specify the columns, title, language ID, the values, new film, and we'll give it a language ID of one.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-insert-a-row-into-the-film-table?u=76281980&t=98)** And that then is the smallest query that allows us to insert a new film into the Sakila database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** null (2)
> **Versions:** 4.99 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Deleting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [DELETE rows from a table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=0)** - [Teacher] You could easily imagine running a database like Sakila, where a customer wants to close their account and you need to delete their information.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=7)** Here we look at how to delete data from a table and I introduce you to some of the perils of deleting.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=14)** The delete command is very straightforward but you should be daunted by just how easy it is to remove all the data or all the tables from your database in one go.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=24)** Delete from star, for example will remove everything from all tables.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=30)** Be afraid, be very afraid.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=33)** If you are not using a where clause with your delete statement ask yourself why.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=38)** It's best to run a select statement of the same structure before you run the delete so you can see what you are getting rid of.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=44)** Now, we recently created category two so let's delete from it.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=50)** There's category two, 16 rows and we're going to say, delete from category two where name is "action".
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=66)** Do you really want to do this?
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=67)** Yes we do.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=69)** And then we'll get category two again, an action which incidentally was the first row in the table, has gone.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=75)** [[Databases]] are like living organisms, parts of them grow, other parts die and you regularly need to change the very structure of the database to stay relevant to the outside world.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=86)** Imagine that you run an annual marathon and keep a table full of all the runners.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=91)** Every year you get new runners.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=93)** There's nothing wrong with the table.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=94)** It has all the right fields and it links to all the other tables but you just don't need that data anymore.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=100)** So each year you want to delete all the rows in the table but preserve the table itself.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=105)** Its structure, attributes and indexes.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=108)** For this, you use the delete statement without a where filter.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=112)** For us, we haven't got a database of marathon runners to hand so we're going to say, "delete from category two" like so and that would delete all of the rows in category two.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=123)** An alternative here is to use truncate.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=126)** Which does exactly the same thing, it removes all of the rows but keeps the table.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=132)** Please don't run this sort of query on the original tables of the Sakila database.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=136)** It appears to be rebuilt every few minutes but you could be upsetting thousands of other users globally and I'll be amazed if you've got this far in the course without yourself being upset by this Sakila database just disappearing on you.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=151)** Well, part of the reason it does that is people testing out the delete command.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=155)** Now what if you are trying to delete rows that have a dependency?
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=159)** This is the film category table and it pairs up films and categories.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=165)** So the top row says, film with an ID of number one belongs to category number six, which is documentary.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=174)** That may be too small for you to see but there's a little popup on the [[Cursor]] that says, documentary.
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=180)** So let's try deleting from the category table where ID is six.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=188)** Delete from category where
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=197)** and we throw an error and we should throw an error.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=200)** Let's be very glad that there are errors here to be thrown.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=203)** Let's see what it says.
>
> **[3:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=204)** [[MySQL]] said, "1451 cannot delete or update a parent row, foreign key constraint fails."
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=212)** So let's look now at the structure tab and relation view and see what constraints are there.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=221)** Now there aren't any for the category table.
>
> **[3:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=223)** Let's have a look at the film category table, which also uses category ID, there we go.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=232)** The rules are set here for what to do with dependence in the case of update or delete.
>
> **[3:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=238)** So the top row there says actions drop and then constraint properties and it says, F key, foreign key film category, category using the column category ID in the database Sakila, category, category id, I just scrolled over there.
>
> **[4:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=256)** Now in the constraint properties column it says, on delete restrict on update cascade and I'm pretty sure those are the defaults in phpMyAdmin.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=266)** If we deleted category ID six from the category table there would be films with category IDs that don't exist.
>
> **[4:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=277)** This would violate the rules of the database and that's why it's thrown an error and stopped us.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=282)** It said, on delete, restrict.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=285)** So if anything else is affected, don't do it.
>
> **[4:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=289)** On update, however, cascade those changes, let's just see what it says.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=296)** The options are cascade, restrict, set to be null or no action.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=299)** These things are your friends, it might seem and you might come across them and be annoyed by them sometimes but an error that stops you really is to be welcomed.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=306)** Without that, if the rule was set to cascade instead of restrict, deleting one row in one table could trigger the deletion of millions of rows elsewhere.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/delete-rows-from-a-table?u=76281980&t=317)** More on that later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[MySQL]] (1)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** phpmyadmin (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [teacher] (1)

#### [DROP an entire table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=0)** - [Narrator] Imagine you are changing the payment system for your online store.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=4)** The new system needs its own table with different fields to the old one.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=9)** The new table will have different links to all the other tables.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=12)** In this case, you want to get rid of both the data and the structure that contains the data.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=17)** Introducing DROP.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=19)** You will need appropriate permissions to use this command.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=23)** In order to practice DROP responsibly, we're going to build a new table and then drop it.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=29)** This means we will not affect other users of the sakila database.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=33)** I've taken code from here.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=35)** Let's start by creating a table called insurances with five fields.
>
> **[0:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=47)** Now we're going to duplicate the insurance table twice.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=51)** So we have three identical tables.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=54)** So we're going to say, Create table if not exists So create the table if it doesn't exist.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=69)** Insurances is two.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=71)** And make that table like insurances.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=77)** Same, again, with three.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=79)** So we're going to make two new tables, like so.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=85)** There we have them on the left hand side.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=88)** Now we're going to drop the original table.
>
> **[1:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=92)** And to do that we can just say, DROP Insurances Like so.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=103)** And that didn't work.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=105)** It's 'cause we've missed a keyword, let's try that again.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=107)** DROP table.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=109)** Insurances.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=110)** That might be better.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=111)** Do you really want to do this?
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=112)** Yes, we do.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=114)** And now, if we look down the side, we've still got insurances two and three.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=119)** You can drop multiple tables by comma separating.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=122)** And you can also use conditional logic to check whether the table exists before deleting it, which can prevent error messages.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=131)** So we'll say, drop the table if exists.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=138)** Insurance is two.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=142)** Insurance is three.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=143)** Oops.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=149)** We'll click go.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=151)** You really want to do this?
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=152)** Yes.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=153)** And now you can see they've all gone.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=156)** So, if you want to delete an entire table including the indexes, the keys, and the structure.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=161)** Counterintuitively, you don't use delete.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/drop-an-entire-table?u=76281980&t=164)** Use DROP.

> [!info]- Semantic Content
>
> **Env Vars:** drop (5)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [ALTER TABLE for modifying fields](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=0)** - Sometimes you don't want to delete a table or a row, but rather you want to delete or add a column.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=7)** Delete and recreate is a rather nuclear option here, when you can be much more efficient using alter table.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=14)** There are three main ways to use alter table, add a column, remove a column and change the data type of a column.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=22)** Let's start by adding a column that lets us store age against customer.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=29)** So we're going to go to the customer table and we say alter the customer table, add date of birth as a date.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=45)** Now let's refresh the table.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=49)** Date of birth has been created at the end there, and since we didn't give any defaults it's populated it with null to start with.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=58)** Now let's say we want to drop the column that we just created.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=62)** Alter table customer drop date of birth.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=72)** So there we have deleted a field or a column.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=76)** If we scroll along, it's gone.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=78)** It can be tricky to alter the data type of a column that's already populated with data.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=83)** This is the third alter table command type to look at.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=87)** So if it's already got data in it and we're trying to turn it, for instance, from data into text or something, if the old data does not conform to the new data type, you're going to generate an error.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=99)** Let's just re-add that column that we had.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=102)** Alter table, customer, add date of birth date.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=117)** Here it is.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=118)** So we've added date of birth as a date type.
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=121)** Just show you that in the structure tab, date of birth is a date there.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=127)** Now let's say you get some complaints from customers that date of birth is a bit intrusive.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=132)** They don't want to give you all that information.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=134)** They think it should be quite sufficient just to store the year of their birth.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=138)** To make this change in the database we need to change the data type.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=142)** My Sequel has a data type called year not all versions of [[SQL]] do, but otherwise you could just use a numeric data type of length four.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=152)** But within My Sequel, we're going to say alter table customer, modify column, date of birth year.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=167)** Like so.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=170)** And then if we go back to the structure, date of birth at the end is a year which automatically has a length of four.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=178)** Now that statement worked just fine, but not all efforts to change the data type will work correctly if the column is already populated with data and the source and the target data types are incompatible.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=191)** So alter table is one way of deleting a field or column which means you don't need to delete and recreate the whole table.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/alter-table-for-modifying-fields?u=76281980&t=198)** And as we've seen alter table can also be used to add columns or change the data type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - sometimes (1)

#### [Problems with foreign key constraints](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=0)** - [Narrator] Deleting a single row in one table can trigger the unintended deletion of millions of rows across multiple other tables depending on your settings.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=10)** Here we look at how to work out what will happen and how to change it before you hit delete.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=16)** Usually when you try to delete data, you are prevented because of a constraint.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=21)** We saw earlier that we could not easily delete a row from the category table, for example.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=26)** Let's look at the film category table now and the structure tab.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=31)** Need to click relation view, top left, it's not obvious and these are your foreign key constraints, as it says, top left, we've seen them once before.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=42)** So film_id and category_id are both foreign keys within the film category table.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=49)** And this table shows the behaviors you can expect if you were to delete a row from the category table.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=56)** On each of these two rows, it says on delete restrict, on update cascade.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=62)** So let's work this out.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=64)** If we click the dropdown, we see all the options, restrict, set null, no action, and cascade.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=70)** And the same options are offered in the on update box.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=74)** Set null and no action I think are quite obvious.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=77)** So let's look at restrict.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=79)** If we try to delete a row from category which has an ID of three and there's an ID three in the film category table, the database will restrict or prevent us.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=90)** In other words, it will throw a big red error and no deletion will take place.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=94)** If we were to change this to cascade, rows with a film_id of three will be deleted in the film category table as well.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=104)** That's a pretty big action and should be used with care.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=108)** So if you see on delete cascade or if you're setting it to that, be absolutely sure that's what you intend.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=114)** You are triggering a cascade of deletions.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=118)** Now, it might be that you are using a database built by someone else and you have no idea what the on update and on delete setup is for each table in your database.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=128)** So you come along and delete one row from one table and suddenly you've triggered the deletion of millions of rows from multiple other tables instantly.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=136)** And this is just to serve as a reminder, be very careful using delete.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=141)** You can use [[SQL]] to modify the constraints set up or you can use this screen as I'm showing you now and do it manually.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=148)** The important takeaway point here is remember that these setups exist and could be triggered without you intending it.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/problems-with-foreign-key-constraints?u=76281980&t=155)** Always check them before you run a delete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Code Identifiers:** film_id (2), category_id (1)
> **Prerequisites:** setup (1), set up (1)
> **Env Vars:** sql (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Delete from the country table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=0)** - [Instructor] Let's take a few minutes now and test your knowledge with a challenge.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=9)** This one is going to be a bit trickier than previous challenges, so it will take some patience, but there is a reason for me making the challenge difficult.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=17)** I want you to delete a row from the country table.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=20)** You can pick any country you like.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=22)** You're going to be affecting the live Sakila database here and potentially affecting other users.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=28)** I've tried to minimize this in this course, but in this one example, I want you to understand how an apparently small deletion can have big consequences across the database.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=39)** A [[Microsoft Word|word]] of advice, read any error messages you come across carefully and find a way to change any tables you need in order to allow the deletion of the row that you've chosen from the country table.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=51)** This could easily take you 10 minutes.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/challenge-delete-from-the-country-table?u=76281980&t=53)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Delete from the country table](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=0)** - [Narrator] Our challenge was to delete a row from the country table.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=9)** And I've chosen to delete the first row which is Afghanistan.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=14)** So let's start off by writing our query.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=16)** Delete from country where country ID is equal to one.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=21)** Go.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=25)** And we get an error message and it's a pretty helpful one.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=29)** It says, "Cannot delete or update a parent row.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=32)** A foreign key constraint fails."
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=35)** And if you look at what's in the brackets there it says 'sakila'.'city' and it names the constraint 'fk_city_country' and tells us that it's a foreign key.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=46)** So let's look at the city table then and let's select all the rows from the city where the country ID is one.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=59)** That's Afghanistan.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=60)** We see there's just one.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=61)** There's one city called Kabul listed against Afghanistan.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=66)** So now we have two choices.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=68)** We can delete Kabul from our city list or we can alter the on delete restrict to on delete cascade.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=76)** And that's the option I'm going to change, choose rather, here.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=81)** So it says FK city country on delete cascade.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=86)** And that means when we delete Afghanistan from the country table, we will also be deleting Kabul from the city table.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=94)** That's what that means.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=96)** So we're going to save that.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=99)** And let's try again with our delete command.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=104)** So delete from the country table where the country ID is one
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=112)** and we get a different message, cannot delete or update parent row.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=116)** Foreign key constraint fails so far.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=118)** So similar 'sakila'.'address.'
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=121)** So this time it's the address table that's constraining us and not the city table.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=128)** So let's take a look at the address table.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=130)** Address, structure, relation view.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=135)** And here we have foreign key, address, city.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=139)** And before we go changing any of that what we really ought to do, is just check.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=153)** What is the city id?
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=155)** So 251 is the city ID for Kabul.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=159)** Now if we go to address, let's see.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=161)** So start from address where city ID is 251 and we've just got one address in there.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=172)** And I'm doing this because I don't want to completely limit the sakila database for other users.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=179)** So one was a good result there.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=181)** I didn't want to delete too many things.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=184)** So once again, we're going to change on delete restrict into on delete cascade.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=187)** We could alternatively have just deleted directly from the address table.
>
> **[3:12](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=192)** And then we're going to try again.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=196)** Delete from country where country ID is one.
>
> **[3:27](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=207)** Okay, this time we can't do it.
>
> **[3:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=210)** Ah, because we didn't save the change that we just made.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=215)** Hang on a minute.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=217)** On delete, restrict on the cascade.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=222)** Save.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=227)** Delete from country where country ID is one.
>
> **[3:57](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=237)** You really want to do this?
>
> **[3:58](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=238)** Yes, I think so.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=239)** And now it's the customer table.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=241)** So, let's go back to the address table and do what we ought to have done before.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=249)** Where address ID is 251, is there a customer in here?
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=255)** You're not actually sure where the customer issue has popped up.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=264)** It's not from that table.
>
> **[4:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=265)** Let's go and have a look in here.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=266)** Relation view.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=269)** It's from the address table.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=274)** So we're going to change customer address which also I guess has a dependency on city and country.
>
> **[4:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=283)** Going to save that and we're going to try again.
>
> **[4:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=287)** Delete from country where country ID is one.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=300)** And this time it's the payment table and there's a constraint called payment underscore customer.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=306)** So we're going to go to the payment table.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=310)** Structure, relation view.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=313)** There we have payment customer, there's our restrict, we're turning that into a cascade.
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=320)** And you can see also, oh, hang on, let's save that.
>
> **[5:28](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=328)** So let's try again.
>
> **[5:30](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=330)** Delete from country.
>
> **[5:33](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=333)** Where country ID is one.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=337)** You wouldn't think it would be so hard but this is kind of the point, right?
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=343)** So rental this time it's the rental table that has a dependency.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=347)** So all of these tables have a dependency on the country table and the database is giving you all the warnings it can to say, "Hang on, what you are doing is going to affect this table too, and this one and this one."
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=366)** So we're taking that, turning that into cascade.
>
> **[6:13](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=373)** And let's try again.
>
> **[6:16](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=376)** Delete from the country table.
>
> **[6:19](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=379)** Where the country ID is one.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=384)** Go.
>
> **[6:25](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=385)** Are you sure?
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=386)** Yes.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=386)** And it's worked.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=389)** So we have gone through about six tables now changing the settings to allow this deletion to take place.
>
> **[6:36](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=396)** This was a deliberately long and tortuous challenge.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=400)** I wanted to show you how one little deletion can have very significant knock on effects across the database.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=406)** And still right now, even though we've changed something at every table, I couldn't tell you exactly what we've deleted by changing the setting to cascade.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=416)** I still don't know exactly how many rows have gone.
>
> **[6:59](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/solution-delete-from-the-country-table?u=76281980&t=419)** So take very great care when deleting.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Code Identifiers:** fk_city_country (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/next-steps?u=76281980&t=0)** - [Emma] I really hope that you feel this course has taken you forward in your understanding of [[SQL]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/next-steps?u=76281980&t=5)** You should now feel confident to edit, insert, and delete data from your database.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/next-steps?u=76281980&t=10)** If you want to take your learning forward, I would suggest a course on database operations or one on views, processes, triggers, and functions.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-data-reporting-and-analysis/next-steps?u=76281980&t=18)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [emma] (1)


## Instructor

- [[Emma Saunders]]

## Skills Covered

- Data Analysis
- Data Reporting
- SQL

## Path Context

### In [[Master SQL for Data Science]]
← [[SQL- Data Reporting and Analysis]] | **2 of 6** | [[SQL Hands-On Practice- Solve Business Problems]] →

## Appears In

- [[Master SQL for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis
- [[SQL for Data Analysis]] — SQL, Data Analysis

---

[↑ Back to top](#)