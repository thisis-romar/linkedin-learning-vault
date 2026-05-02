---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: querying-microsoft-sql-server-2022
url: "https://www.linkedin.com/learning/querying-microsoft-sql-server-2022"
duration_minutes: 298
duration: 4h 58m
level: Intermediate
updated: 12/13/2024
learners: 88385
skills:
  - Database Queries
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEscFM32sKdPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733774121568?e=2147483647&amp;v=beta&amp;t=TBC94501oOlSBQCoW1asTjxJITxEbslKKgk6iFDasAs"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[Microsoft SQL Server 2022 Essential Training]]'
next_courses:
  - '[[Automating SQL Server with dbatools]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":3,"total":9,"prev":"Microsoft SQL Server 2022 Essential Training","next":"Automating SQL Server with dbatools"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/database-queries
  - skill/microsoft-sql-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Querying%20Microsoft%20SQL%20Server%202022.md)

![Querying Microsoft SQL Server 2022](https://media.licdn.com/dms/image/v2/D560DAQEscFM32sKdPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1733774121568?e=2147483647&amp;v=beta&amp;t=TBC94501oOlSBQCoW1asTjxJITxEbslKKgk6iFDasAs)

# Querying Microsoft SQL Server 2022

> Want to learn more about how to query data from SQL Server tables? In this course, instructor Adam Wilbert covers how to retrieve information stored in a Microsoft SQL Server database using the Transact-SQL (T-SQL) language and the updated features of SQL Server 2022.Learn the fundamental structure of a successful query, from ideation to execution. Find out how to manipulate data through the use o

> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022) | 4h 58m | Intermediate | 88K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Turn data into information with queries](#turn-data-into-information-with-queries)
  - [What you should know](#what-you-should-know)
  - [Download the sample database](#download-the-sample-database)
  - [Exploring the code challenge environment](#exploring-the-code-challenge-environment)
- [**1. Introduction to T-SQL Queries**](#1-introduction-to-t-sql-queries) (10 videos)
  - [What is Transact SQL?](#what-is-transact-sql)
  - [The SQL querying environment](#the-sql-querying-environment)
  - [Return records with SELECT and FROM](#return-records-with-select-and-from)
  - [Filter records with WHERE](#filter-records-with-where)
  - [Sort records with ORDER BY](#sort-records-with-order-by)
  - [Column aliases](#column-aliases)
  - [Create values with constants and math](#create-values-with-constants-and-math)
  - [Challenge: Write a SELECT query](#challenge-write-a-select-query)
  - [Solution: Write a SELECT query](#solution-write-a-select-query)
  - [Solution: Query information from a database](#solution-query-information-from-a-database)
- [**2. Additional Filter Techniques**](#2-additional-filter-techniques) (8 videos)
  - [Limit results with TOP](#limit-results-with-top)
  - [Remove duplicates with DISTINCT](#remove-duplicates-with-distinct)
  - [Comparison operators](#comparison-operators)
  - [Understand NULL values](#understand-null-values)
  - [Match text with LIKE and wildcards](#match-text-with-like-and-wildcards)
  - [Challenge: Retrieve matching text strings](#challenge-retrieve-matching-text-strings)
  - [Solution: Retrieve matching text strings](#solution-retrieve-matching-text-strings)
  - [Solution: Filter results from a query result](#solution-filter-results-from-a-query-result)
- [**3. Retrieve Records from Multiple Tables**](#3-retrieve-records-from-multiple-tables) (7 videos)
  - [Table joins and relationships](#table-joins-and-relationships)
  - [Inner joins](#inner-joins)
  - [Left, right, and full outer joins](#left-right-and-full-outer-joins)
  - [Cross joins](#cross-joins)
  - [Challenge: Return data from multiple tables](#challenge-return-data-from-multiple-tables)
  - [Solution: Return data from multiple tables](#solution-return-data-from-multiple-tables)
  - [Solution: Join data in multiple tables](#solution-join-data-in-multiple-tables)
- [**4. Group Records**](#4-group-records) (8 videos)
  - [Understand record grouping](#understand-record-grouping)
  - [Use GROUP BY and COUNT](#use-group-by-and-count)
  - [Aggregate functions](#aggregate-functions)
  - [Explore data with SUM](#explore-data-with-sum)
  - [Filter groups with HAVING](#filter-groups-with-having)
  - [Challenge: Obtain order summaries](#challenge-obtain-order-summaries)
  - [Solution: Obtain order summaries](#solution-obtain-order-summaries)
  - [Solution: Group rows and aggregate data](#solution-group-rows-and-aggregate-data)
- [**5. Manipulate Data with Functions**](#5-manipulate-data-with-functions) (15 videos)
  - [Use functions in T-SQL](#use-functions-in-t-sql)
  - [String functions](#string-functions)
  - [Text concatenation](#text-concatenation)
  - [Round with mathematical functions](#round-with-mathematical-functions)
  - [Find the GREATEST or LEAST value](#find-the-greatest-or-least-value)
  - [Work with date functions](#work-with-date-functions)
  - [FORMAT date and times](#format-date-and-times)
  - [Group dates into buckets](#group-dates-into-buckets)
  - [Return random records with NEWID](#return-random-records-with-newid)
  - [Create a series of values](#create-a-series-of-values)
  - [The IIF logical function](#the-iif-logical-function)
  - [Write a CASE statement](#write-a-case-statement)
  - [Challenge: Use functions in a SQL query](#challenge-use-functions-in-a-sql-query)
  - [Solution: Use functions in a SQL query](#solution-use-functions-in-a-sql-query)
  - [Solution: Use functions in a query](#solution-use-functions-in-a-query)
- [**6. Writing SQL Scripts**](#6-writing-sql-scripts) (3 videos)
  - [Change database context with USE](#change-database-context-with-use)
  - [Add comments to a script](#add-comments-to-a-script)
  - [When to use square brackets](#when-to-use-square-brackets)
- [**7. SQL Subqueries**](#7-sql-subqueries) (7 videos)
  - [What is a subquery?](#what-is-a-subquery)
  - [Use a subquery in a HAVING clause](#use-a-subquery-in-a-having-clause)
  - [Correlated subqueries](#correlated-subqueries)
  - [PIVOT the result set](#pivot-the-result-set)
  - [Challenge: Write a query with a subquery](#challenge-write-a-query-with-a-subquery)
  - [Solution: Write a query with a subquery](#solution-write-a-query-with-a-subquery)
  - [Solution: Obtain information with a subquery](#solution-obtain-information-with-a-subquery)
- [**8. Work with Variables**](#8-work-with-variables) (4 videos)
  - [Create and use variables in a query](#create-and-use-variables-in-a-query)
  - [Create a counter for a looping statement](#create-a-counter-for-a-looping-statement)
  - [Challenge: Use variables in a query](#challenge-use-variables-in-a-query)
  - [Solution: Use variables in a query](#solution-use-variables-in-a-query)
- [**9. Result Set Operators**](#9-result-set-operators) (3 videos)
  - [Combine results with UNION](#combine-results-with-union)
  - [Return distinct rows with EXCEPT](#return-distinct-rows-with-except)
  - [Return common rows with INTERSECT](#return-common-rows-with-intersect)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Turn data into information with queries
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=0)** - There is little point in saving data in a SQL Server database if you never actually do anything with it.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=7)** The process of retrieving data is called querying, and learning how to write queries is an essential skill for any database user.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=15)** Hi, my name is Adam Wilbert, and I've been helping data scientists, government agencies, and businesses, large and small, get the most out of their data for well over a decade.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=26)** Writing queries is, by far, my favorite part of any database project.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=31)** It's when all of the time and hard work spent building a flexible database really pays off, and you can start to turn all of that raw data into useful, actionable information.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/turn-data-into-information-with-queries?u=76281980&t=41)** So join me in my LinkedIn Learning course on writing queries for SQL Server databases, and start to leverage this power for yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), database (4), [[Microsoft SQL Server|Sql server]] (2), [[LinkedIn]] (1), [[Databases]] (1)
> **Env Vars:** sql (2)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - there (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is going to focus on retrieving information from data tables stored in a SQL Server database.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=7)** Because we're starting from a point where a database has already been created and data has already been saved, this course really won't be a good introduction to SQL Server, if you're brand new to the platform.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=20)** You should come prepared with a little knowledge about SQL Server databases.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=24)** If you need to consider taking my SQL Server 2022 Essential Training course for a detailed overview or my short introductory course Learning Microsoft SQL Server 2022, either of these courses will give you a great starting point so that you can make the most of your time here.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=41)** Once you know how to install SQL Server, log into the server and create a simple database using Management Studio.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-you-should-know?u=76281980&t=48)** You'll be ready to learn more about retrieving information with queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (5), database (3), data (2), [[Databases]] (1), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (6)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Download the sample database
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=0)** - [Instructor] Querying a database is all about pulling useful information out of your tables.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=5)** In order to learn about queries and SQL Server, we need to have a database with some interesting data that we can review.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=12)** For this course, I'm going to use the sample database for a fictional company called AdventureWorks.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=18)** You can find a download link to the database from the Microsoft GitHub page.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=23)** I'm going to scroll down on this page here a little bit until I get to the downloadable backup files.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=28)** Now, there's different versions of AdventureWorks for different versions of SQL Server, but the data that all of these databases contain is exactly the same.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=36)** So, it really doesn't matter which of these you choose.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=39)** I'm just going to choose the most recent version for AdventureWorks2019 and this will download the bak or the database backup file.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=48)** Once it's done downloading, we need to move it into position on our file system.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=52)** I'll go ahead and minimize my web browser, and we'll go into the Downloads folder where I'll find the file that it just downloaded and I'm going to cut it to my clipboard.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=60)** Then we'll go into the C: Drive, program files, Microsoft SQL Server, the folder for the server instance that we're working with.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=68)** Mine is called MSSQL.16.MSSQLSERVER.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=72)** We'll go in there inside of the MSSSQL folder and finally we'll go into the backup folder.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=79)** Now, the first time you try and do this, you may get this message that tells you that you don't currently have permission to access the folder.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=84)** You should be able to press Continue though, to be let in.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=87)** Otherwise, you might have to right click on that folder and go to the folder's properties and then adjust these security settings in order to get into this backup folder.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=96)** Once you get in though, just right click and say Paste to paste in the backup file.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=101)** All right, now we can go into SSMS and restore this backup onto our server.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=107)** In the object explorer on the far left hand side, I'll right click the Databases folder underneath our server connection.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=113)** Then I'll choose the option to Restore a Database.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=118)** Next, we'll choose the source is the Device or the hard drive that we're pulling our information from.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=122)** So, I'll choose Device and then click the ellipsis button on the right.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=127)** Here, we'll choose to use a Backup media type of file and press Add.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=132)** That should bring up the backup folder that we were just in and there is the AdventureWorks2019 backup file.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=138)** I'll select it and say, OK.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=139)** Press OK on this screen.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=141)** And OK one more time to restore the database.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=144)** Once it's restored, I'll press OK and that dismisses the workflow.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=148)** And then over here in the Object Explorer you'll see the new AdventureWorks database.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=152)** If you're not seeing it, just right click and choose Refresh, and you should see it pop up there.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=157)** And now we can expand it and expand the tables to see all of the different data tables that this database contains.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/download-the-sample-database?u=76281980&t=163)** So, now we have lots of interesting information that we can use to explore how to leverage queries in SQL Server 2022.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[Microsoft SQL Server|Sql server]] (3), data (3), [[Databases]] (2), [[Microsoft]] (1)
> **Env Vars:** sql (4), mssql (1), mssqlserver (1), msssql (1), ssms (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Exploring the code challenge environment
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=7)** Each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=15)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=23)** We recommend using a desktop browser for the best experience with code challenges, but you can also use the LinkedIn Learning mobile app, if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=33)** The code challenge has three areas.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=35)** We have instructions in the top left, a Console for the output in the bottom left, and on the right, we have the code editor for your answer.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=45)** You can use the drag handles to reposition space on the screen however you'd like.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=50)** To get even more horizontal space for the code editor, you can also collapse the courses table of contents on the left.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=58)** Each challenge has instructions that include a description of the challenge and the desired output.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=65)** Your job is to create your answers in the code editor.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=69)** When you click on the Test my code button, you'll see a message indicating whether your code returned was correct or not.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=76)** You'll also see a text output of that query.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=80)** If you see Incorrect output, you need to come over here into the Answer section and update your answer until it meets the challenge.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=87)** For this one, I'll select MAX (price) AS Price FROM Dishes.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=93)** Then I'll test my code.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=95)** And this time, it returns a correct output for the challenge.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=98)** If there are any messages that are too long to fit into this Console, you can always scroll left and right with the scroll bar that'll appear down here at the bottom.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/exploring-the-code-challenge-environment?u=76281980&t=106)** When you've finished each code challenge, return to the course's table of contents, and click to the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), next (1)
> **UI Navigation:** click on (2)
> **Env Vars:** max (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to T-SQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### What is Transact SQL?
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=0)** - [Instructor] In the world of relational databases, you won't get very far before you run into a need to be able to read and write structured query language commands.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=9)** SQL, often pronounced as sequel, stands for Structured Query Language.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=14)** It's been around for several decades and it's become the defacto language for interacting with all relational database management systems.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=22)** But not all versions of the SQL language are exactly the same.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=25)** As companies added differentiating features to their database product to make them more enticing from those of their competitors, each company introduced unique features and capabilities to the RDBMS platform that they brought to market.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=39)** These unique differentiating features required small modifications to the language.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=44)** A specialized function here, a new command there, and eventually the common SQL syntax diverged into different implementations.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=53)** You can think of these as SQL dialects, like the difference between British English and American English.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=59)** For the most part, they're recognizably similar, but there are some words and phrases that are not quite the same.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=66)** For instance, in America, you would rent an apartment with an elevator, and in England, you would say you would rent a flat with a lift.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=74)** This is basically the same difference between SQL dialects.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=78)** First you have ANSI SQL, which is the standard format that's defined by the American National Standards Institute.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=85)** And then you have offshoots developed for Oracle databases or by Microsoft for SQL Server.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=91)** In this course, we're going to focus on the Microsoft SQL Server dialect that goes by the brand named Transact SQL, or simply T-SQL.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=100)** Transact SQL is used for performing all kinds of actions on a SQL server database, regardless of whether it's running on local hardware or in the Azure Cloud.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=110)** The components of the language can be broken down into three categories.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=114)** Data Definition Language, or DDL commands, are used to create new databases and table structures.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=121)** If you're adding new objects to the database, you do that with the DDL portion of the SQL language.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=128)** Modifying permissions granted to user accounts is done with a subset of the language called Data Control Language, or DCL.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=136)** The SQL language includes commands to perform all of these tasks and many more.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=141)** But the the most important thing that the SQL language can do, and what we're going to focus on in this course, is a set of commands that are collectively called Data Manipulation Language, or DML.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=153)** These commands allow you to literally ask questions about your data by writing database queries.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=159)** Querying a database is the process of retrieving data that's been stored, and these DML commands help users turn that raw data into useful information.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=169)** Learning about database queries is learning how to ask questions about the data.
>
> **[2:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=174)** So if you want to know how many customers do you have in California, or how much profit your store in Portland made in August, or simply what are the email addresses of your sales managers?
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=185)** You can execute a query against your database to find these answers.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-transact-sql?u=76281980&t=189)** In order to be able to retrieve useful and actionable information, we need to learn about these specific commands and the keywords that we have at our disposal when querying a database using the T-SQL language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (13), database (9), data (6), [[Databases]] (2), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (16), ddl (2), dml (2), rdbms (1), ansi (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### The SQL querying environment
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=0)** - One of the most common database queries is to retrieve a number of records from a data table.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=5)** In fact, this query is so common that the graphical interface here in Management Studio, provides this query as a menu item so that it can be executed without having to write any SQL code ourselves.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=17)** Let's go into the Adventure Works Database and I'll expand the Tables folder, and here we have all the different data tables in this database.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=24)** I'm going to find the one in the Human Resources schema called Department, then I'll right-click on it and choose Select Top 1000 Rows.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=34)** This runs a query that asks the basic question, what data is in this table?
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=39)** Since, some data tables can be very large, the results on the bottom half of the screen will only display up to 1000 records that are stored in the table, if your table has that many.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=49)** And these results are useful for getting a basic feel for the table's content.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=54)** In this results grid, the query returns all of the columns in the department table and we can see all the department names and what groups they belong to for each data row.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=63)** At the top of the screen is the actual SQL code that was executed on the server to get these results.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=69)** This query is useful, but it's not very flexible.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=74)** Every time I run this query using the right-click menu command, it's going to return the same type of information, unless the data is changed in the table.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=82)** We can modify this query in the upper portion of the window.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=86)** But before we get into writing our own queries so that we can ask our own questions about the data, I thought it'd be beneficial to take a tour around the screen to get our bearings in this new interface.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=98)** So at the top of the interface, we have the query itself.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=101)** This is the SQL code that was executed when we chose the select top 1000 rows from the pop-up menu.
>
> **[1:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=108)** Here is where we ask our question about the data and tell the system what information we'd like returned as well as any conditions or filters that we want applied to those results.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=118)** This is where we're going to spend the majority of our time in this course, learning to write these query statements.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=124)** Once you have written the query you'll press the execute button up here on the toolbar.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=128)** The shortcut key for this is F5 on your keyboard.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=132)** You're going to be executing a lot of queries if you follow along, so F5 is a good shortcut to commit to memory.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=140)** Executing the query tells the system to go out and fetch the requested data from the database.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=146)** This is when the data is read from the tables, compiled into the format that you specified and filters are applied so that you only get back the data that you requested to see.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=156)** Finally, we get the results window at the bottom of the screen to show you what came back from the database.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=162)** These results show you the current state of the data when you ran the query, but don't allow you to modify any of these data values.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=170)** The results are formatted like a data table grid by default but using these buttons up here on the toolbar you can change the output.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=179)** For instance, right now we can see that it's set to Results to Grid, but we have the option of changing it to Results to Text.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=185)** Let me go ahead and change that option there.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=188)** Then I'll re-execute the query by either pressing the execute button or tapping F5 on my keyboard.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=194)** Now you'll see the results are displayed as plain text.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=198)** The other option that we have up here is to export the results to a file.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=202)** Let me go ahead and activate that option.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=204)** I'll press the execute button again and this time I get a Save Results dialogue box.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=209)** I'm just going to save these results to my desktop and I'll call it Report and it gets the file type .rpt.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=217)** I'll press the save button, and that'll just tell me the message here that 16 rows were affected and I don't see any results here in the window.
>
> **[3:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=224)** Now if I go out to my desktop, we'll see this new file here and this is just a plain text file.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=229)** You can open it inside of Notepad and you can see the results right there.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=233)** So we can export our data from SQL Server into a plain text file with that export option.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=238)** All right, let me go ahead and close that and I'll just throw this file away.
>
> **[4:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=242)** All right, back into Management Studio and I'll change it back to Results to Grid and press the Execute button again to get back to our standard interface.
>
> **[4:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=251)** Next to this results tab, we have the tab for messages.
>
> **[4:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=255)** This will display any error messages if your query was unable to execute for any reason or it'll give you some basic statistics if the query ran without any problems.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=265)** In this case, I simply see that 16 records were returned from the department table and the time and date that the query was executed.
>
> **[4:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=273)** Now, the number of records returned by a query is often a very useful piece of information to have.
>
> **[4:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=278)** So in addition to finding it here on the messages screen, you'll also find it in the yellow information bar at the very bottom of the screen over here in the bottom right hand corner.
>
> **[4:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=289)** This is always visible here to show me that 16 rows were returned.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=293)** So if I switch back over to the results, I can still see quickly how many rows the query returned.
>
> **[4:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=299)** Anytime I run a query, this is the first place that I look just to get a very high level picture of what was returned from the database.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=307)** Now, this query is pretty basic and it didn't take the database engine anytime at all to return these results.
>
> **[5:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=313)** It's not always going to be the case that the results appear immediately.
>
> **[5:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=318)** Some queries that you might execute can involve complex calculations or joining information from very large data tables.
>
> **[5:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=325)** And it's not uncommon for queries to take minutes or even hours to complete.
>
> **[5:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=331)** Up on the toolbar, you can choose to cancel the operation by pressing this red square icon.
>
> **[5:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=337)** This will immediately stop the execution of your query so that it's not putting any more pressure on the database engine.
>
> **[5:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=345)** Now, the query itself up here at the top is just a basic text file and you can save a script of your query to your computer, if you'd like to.
>
> **[5:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=354)** You can do that by going to the file menu and choosing save.
>
> **[6:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=360)** This will give you a file name here.
>
> **[6:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=362)** In my case, it's called SQLQuery3.sql and you can see the keyboard shortcut is Control S.
>
> **[6:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=368)** When I click that, I can go ahead and place it somewhere on my file system.
>
> **[6:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=371)** I'll just save it to my desktop.
>
> **[6:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=373)** You can change the file name if you'd like, and press save.
>
> **[6:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=377)** Then if we go back out to our desktop again, we'll find that file.
>
> **[6:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=380)** Once again, this is just a plain text file so I can open it up in something like Notepad.
>
> **[6:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=385)** I'll choose the option, Open with and Notepad and you'll see the text of our SQL command right there.
>
> **[6:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=392)** So this can save you some typing if you've written complex analysis queries that you need to run on a regular basis.
>
> **[6:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=398)** Just save them to external files and you can either reload them in Notepad to edit them or reload them back into Management Studio to re-execute.
>
> **[6:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=407)** Let's go ahead and press the close button here to close out Notepad, we'll go back into SSMS.
>
> **[6:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=412)** Then if I were to close this tab, I could go to File, Open then I could choose the option to open a file or press Control O.
>
> **[7:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=422)** I'll browse out to my desktop, I'll choose the query that we just exported and press Open and it opens up right back in a new tab where I can execute it again.
>
> **[7:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=431)** So this process can save you some typing if you've written complex analysis queries that you need to run on a regular basis.
>
> **[7:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=438)** Now finally, there's one small change that I made to my interface that'll make it easier for you to follow along throughout this course and that's to add these line numbers to the left hand side of the screen.
>
> **[7:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=448)** They're not on by default, and if you want to turn them on as well, you can go up to the Tools menu, come down to Options, then we'll go into the options for the Text Editor.
>
> **[7:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=461)** I'll expand that option here to see all the details inside of it and choose Transact SQL.
>
> **[7:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=466)** Then here on this screen, we have a checkbox to turn on the line numbers.
>
> **[7:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=471)** As soon as you activate that and press okay you'll see the new line numbers appear on your screen.
>
> **[7:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-sql-querying-environment?u=76281980&t=476)** So with these line numbers activated I can help direct your attention to specific lines as we continue to learn about how to write custom queries for SQL Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (8), [[SQL]] (6), management (3), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (7), ssms (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** right-click (2), go to (1), checkbox (1)
> **Analogies:** for instance (1), picture (1)
> **File Paths:** sqlquery3.sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### Return records with SELECT and FROM
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=0)** - Whenever you want to retrieve data from a database, you'll need to write a SQL select statement.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=6)** Select statements are exceptionally powerful, and it can include a number of clauses, criteria, and conditions that'll help you retrieve exactly the information that you need from a database in exactly the format and arrangement that you need it.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=20)** Let's get started by writing a select statement to retrieve data from the Adventure Works database by pressing the new query button here in the toolbar.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=28)** If you have any tabs open from the previous movie, feel free to close them without saving any changes.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=34)** To start, simply type out the word select.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=39)** The SQL language is case insensitive which means that it doesn't matter if you use uppercase or lowercase letters.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=47)** However, the standard convention is to write all query command keywords in all uppercase letters.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=54)** Next, we need to specify what we want the database engine to return when we execute the query.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=60)** This could be as simple as a single static value.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=64)** I'll just type the number one.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=66)** I'll finish the line with the statement terminator character which is a semicolon.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=71)** This character isn't strictly required in SQL Server.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=74)** Your queries will execute just fine if you don't type this semicolon in.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=79)** But Microsoft recommends that you do include it as it might become a requirement in the future.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=84)** So, it's probably just best to get in the habit of including it right from the start.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=89)** So, that completes my select statement.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=91)** We'll just select one.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=93)** I'll press the execute button, and I get these results.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=96)** This result just has a single column, which is unnamed, and we have a single record.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=101)** The value one.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=103)** You can also return a simple text string.
>
> **[1:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=105)** Let me modify this query and I'll return the text, Adam.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=110)** As you start typing you might see this in (indistinct) popup window.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=113)** If you want to get rid of it, just press the escape key on your keyboard or click off of it.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=118)** This time, when I press the execute button, I get an error instead.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=122)** This tells me that the database engine doesn't about any columns named Adam.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=128)** Literal text in SQL Server needs to be wrapped in single quotation marks so that the database engine doesn't get confused and think that I'm trying to refer to a function named Adam or some other database command.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=141)** So, I'll come up here, it'll add single quotation marks on either side of my name.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=146)** Now, when I press the execute button, I get a single column with just the text, Adam.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=151)** Now, we can return multiple values by asking for them in a comma separated list.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=156)** This time I'll select Adam comma one.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=159)** I'll press the execute button, and I get two results here in the list.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=164)** I get two unnamed columns and one record with Adam and one.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=169)** It's important to recognize that I'm getting a grid with two columns and one row and not a grid with one column and two rows.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=178)** This query is effectively returning a single record with two attribute columns.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=183)** Now, it's also important to note that, this data isn't stored in the database.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=187)** At this point, I'm just returning values that I've specified up here in my select query.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=192)** So, that's kind of interesting.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=193)** But what you really want to query is to return data that's stored in your tables.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=198)** The Adventure Works database has a table called Department in the human resources schema.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=204)** Let me expand that over here inside of the Object Explorer window, and I'll expand the columns to see all of the columns that are in that department table.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=211)** Now, we can use these column names to retrieve information from the table.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=216)** To do that, we list out the attribute columns that, we want to retrieve in the select statement.
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=220)** I'll come up here and get rid of this text here that says Adam comma one, and we'll go back to just the keyword select.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=226)** Then I'll type in the columns that I want to see from the table.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=230)** Let's retrieve the name column as well as the group name column.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=238)** This time because I don't want to return the literal text, name, and group name, I'm not enclosing them in single quotation marks.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=246)** This way the database engine knows that I'm referring to actual database objects, the columns from the table.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=253)** But now we also need to tell the database engine what specific table we're referencing.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=257)** Since there might be a name and a group name column in any number of the tables in this database.
>
> **[4:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=263)** In this case, we're specifically focused on the department table.
>
> **[4:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=267)** We do that by adding a from clause to the end, and we'll type in the name of the table "department".
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=275)** Now, we could run this all together on a single line, but SQL queries are white space insensitive as well.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=281)** That means that you can add any extra spaces or line breaks that you want in order to make the command easier to read.
>
> **[4:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=289)** It's very common to see select queries that start each new clause on a new line.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=293)** So, I'll go ahead and do that here.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=295)** I'll take the from clause and I'll move it down to the second line.
>
> **[5:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=300)** This way, we have a list of all of the columns that we want to see on the first line and the table that, they're coming from on the second.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=307)** Now, before I execute this query, I want to verify the database that I'm executing it in.
>
> **[5:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=313)** This dropdown menu in the toolbar here will show you the target database.
>
> **[5:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=317)** You want to make sure that it's set to Adventure Works and not any of the other databases that might exist on your server.
>
> **[5:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=324)** Then go ahead and press the execute button.
>
> **[5:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=326)** And this time I get another error saying that, the table name is invalid.
>
> **[5:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=331)** I'm getting this because the department table is in the human resources schema, and that specific schema isn't the default schema for my user account.
>
> **[5:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=340)** So again, I need to be more specific here with my query.
>
> **[5:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=344)** I'll change the from clause to read from human resources that department.
>
> **[5:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=354)** Now, when I execute the query, it can correctly identify the correct table over here, and it returns the rows of data.
>
> **[6:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=361)** I'm seeing just the two columns that I requested, the name column and the group name column.
>
> **[6:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=366)** And if I look in the bottom right hand corner, I'll see that this query returned 16 rows of data.
>
> **[6:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=372)** Now, the column order that's returned is based on the order that I list in the names up here in the select statement.
>
> **[6:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=378)** So, this doesn't have to be in the same order that they appear in the table.
>
> **[6:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=382)** For instance, I can review this grid with the group name column first by making a small change to the select statement.
>
> **[6:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=388)** I'll just change it to select group name, comma name.
>
> **[6:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=393)** Now, when I execute it, the group name column comes first followed by the name column, or I can add in additional columns from the table just by adding them to the comma separated list here, online number one.
>
> **[6:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=405)** I'll finish this by typing in comma modified date and comma department ID.
>
> **[6:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=414)** These are the other columns that exist over here in the department table.
>
> **[6:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=417)** You can see them here in the Object Explorer panel.
>
> **[7:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=420)** Now, when I press execute, I'll see all four columns in the results.
>
> **[7:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=424)** So, now I'm retrieving all of the columns and all of the records from the department table.
>
> **[7:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=429)** There's a shortcut to get to the same information in SQL queries, and that's to substitute the asterisks wild card character for the full list of all the attribute columns in the select clause.
>
> **[7:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=440)** I can get rid of all of this and replace it with the asterisk character which is shift eight on your keyboard.
>
> **[7:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=446)** Now, this query basically says, show me every column from the department table.
>
> **[7:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=451)** I'll press execute and I'll see these same results.
>
> **[7:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=455)** So, this asterisk is a very useful shortcut that can save a bunch of typing, and it's also convenient when you're not exactly sure what columns in the table are named.
>
> **[7:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=464)** For instance, if you're connected to your database server through a text only terminal application and don't have the benefit of the Graphical Object Explorer window like we have over here in Management Studio.
>
> **[7:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=475)** However, be aware that select star should never be used in a stored procedure or application code.
>
> **[8:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=482)** Since it can unintentionally expose columns from the table, that should stay private.
>
> **[8:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=488)** Especially, if additional columns are added to the table after your query is written.
>
> **[8:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=494)** When saving a select query for use in an application, it's always best to be very specific about exactly what columns you want returned and the order you want to see them.
>
> **[8:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=504)** But for ad-hoc, on the fly queries that you're writing against your database, select star is a fine shortcut to use.
>
> **[8:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=511)** So, that's the very basic starting point for all queries in SQL Server.
>
> **[8:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-records-with-select-and-from?u=76281980&t=515)** The select statement outlines the attribute columns that you're interested in retrieving, and the from clause specifies the table to find them in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (17), data (6), [[SQL]] (4), [[Microsoft SQL Server|Sql server]] (3), [[Human Resources (HR)|Human resources]] (3)
> **Env Vars:** sql (7)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** in the toolbar (2), dropdown (1)
> **Analogies:** for instance (2)
> **Warnings:** note that (1), be aware (1)
> **Cross-References:** go back to (1)

#### Filter records with WHERE
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=0)** - [Narrator] The select and from clauses in a query will allow you to specify which columns from which table to return, and the display the values for every record in the table.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=10)** To limit which records are returned, you'll need to add a WHERE clause to the statement.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=16)** Let's continue working on the department table in the Adventure Works Database.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=19)** I currently have a select statement that simply reads, select star from Human Resources dot Department.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=25)** The results display everything that the table contains all 16 rows. Now, if I'm only interested in departments in a specific group name, I can add a WHERE clause to filter the results.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=38)** Let's do that by moving the terminator character down to line number four, and I'll start my WHERE clause on line three.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=45)** Then, I just need to add the condition that I want to filter by.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=48)** How about we filter to just the departments in the Research and Development Group.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=54)** I'll type in the group name column, (computer typing) I'll say equals two, and in single quotation marks Research and Development.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=63)** (computer typing) Now the query is going to go through and evaluate every row by the column name, group name.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=73)** Anywhere we have a row that has a group name equal to this specific text, and I can see that there's a couple of rows right here.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=79)** It'll filter it to just show these rows.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=82)** Let's press the execute button, and I'll see I have a total of three departments that are in that group.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=88)** These filtering conditions in the WHERE clause are called Predicates.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=92)** Predicates need to be a statement that will either evaluate to true or false for any individual record, and I'll usually involve a comparison operator such as this equal sign.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=104)** So, these results are only showing me the records where the predicate is true, and any records where the predicate is false, where the group name is not equal to Research and Development, well, those are removed from the result.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=117)** If instead, I was interested in every department except for the ones in Research and Development, you could use the not equal sign here instead of the equal sign. We typed that in with a less than and a greater than caret, right after each other.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=131)** I'll press execute, this time, it returns 13 rows.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=134)** This is the 16 original rows minus the three in the Research and Development Group.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=140)** In the WHERE clause, you can also use multiple predicates.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=144)** This will allow you to be even more specific about the records that you want filtered out.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=148)** You'll join multiple predicates with the and, or, or not logical keywords.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=155)** For instance, if I want to see the departments that are not Research and Development, and also have a department ID that's less than 10, I could simply add that onto the WHERE clause.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=165)** I'll say, and department ID is less than 10.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=169)** This time, when I press execute, I only get six rows.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=173)** It's just the departments that are not in Research and Development, and have an ID less than 10.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=178)** So, multiple predicates can be specified using the and, or, or not logical operators, and each predicate will usually include a comparison operator such as the equal to, not equal to, less than or greater than symbols.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=193)** There is a built-in function that you can use when listing multiple WHERE criteria in your queries, and that's the N Function.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=200)** For instance, one way to retrieve departments in multiple groups would be something like this, where the group name is equal to Research and Development, or the group name is equal to Quality Assurance.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=214)** (computer typing) Now, this is getting a little bit long, so let me go ahead and place the second predicate here with the or statement on line number four.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=226)** This allows me to easily see the first predicate here; group name is equal to Research and Development on line three, and the second predicate or the group name is equal to Quality Assurance on line four.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=238)** If I execute the query, I'll see I get a total of five rows, and you can see that the departments in either of these two groups.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=246)** Now, I can simplify this query by using the N Function instead.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=250)** I can say where the group name is in Research and Development, comma, quality assurance.
>
> **[4:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=263)** The N Function gets placed inside of a set of parenthesis, so I'll close the parenthesis here at the very end and press execute.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-records-with-where?u=76281980&t=269)** This returns the exact same five rows that we just saw a moment ago, so that's a few examples of how you would filter the records that are returned in a select statement to just the ones of interest using a WHERE clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Quality Assurance]] (3), database (1), [[Human Resources (HR)|Human resources]] (1)
> **SQL:** where (8)
> **Env Vars:** where (8)
> **Analogies:** for instance (2), such as (1)
> **Non-Speech:** (computer typing) (3)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Sort records with ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=0)** - [Instructor] The next clause that we can add to a select statement will help you sort records into an order that's the most useful for your needs.
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=8)** When I execute the query SELECT * from HumanResources.Department, the records come back in the order that they're saved in the table.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=16)** This is most commonly in an ascending order based on the primary key column.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=21)** In this case, that's the DepartmentID.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=23)** But what if you wanted to see the records clustered together based on the group name values instead?
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=29)** That way all of the research and development departments appear next to each other and so on down the list.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=34)** To do that, we'll add in ORDER BY clause into the query.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=37)** I'll do that on line number three.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=40)** We'll ORDER the records by the GroupNameData.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=45)** If your query also has a where clause to filter the records, make sure that ORDER BY comes after it.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=52)** So you would have SELECT FROM WHERE and then ORDER BY.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=57)** Now I can press the execute button and I'll see the same data for the same 16 rows that we had previously.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=63)** They're just displayed in a different sequence.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=66)** Here at the top, we have all of the different departments in the Executive General and Administration group.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=71)** There they are here.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=72)** Then we have two different departments in Inventory Management and a couple in Manufacturing.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=78)** So each department's record now is grouped visually with the other departments that they belong with.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=83)** The default is to sort the records in an ascending or alphabetical order, but we can reverse this by adding the DESC keyword to the end of our ORDER BY clause.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=94)** This is just an abbreviation for descending.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=97)** When I press Execute, you'll see that the group names are now in a reverse order or they're descending alphabetically starting with Sales and Marketing at the top, followed by Research and Development.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=107)** You can also use this statement to sort on multiple columns.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=111)** So once all of the records are sorted based on the group name in a reverse alphabetical sequence, all of the records that have the same group name might get put into numerical order based on the DepartmentID.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=123)** Most of these look like they just happen to be in the sequential order but if I scroll down and take a look at the bottom in the Executive General, you'll see that these numbers are in kind of a randomized sequence.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=134)** We can fix this by coming up here into our ORDER BY clause.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=137)** I'll type a comma at the end and I'll order them by DepartmentID as well.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=143)** So now we're providing two levels to the sort.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=146)** First, we're sorting all the records descending on the group name value, then for all the records that have the same group name, we'll sort them numerically by DepartmentID.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=159)** I'll press the execute button, and we get these results.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=161)** Let me scroll down to the bottom again back to the Executive General section and here I can see that these numbers are now in a more logical sequence.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/sort-records-with-order-by?u=76281980&t=169)** So that's how you use the ORDER BY clause in a select query and it'll help you ensure that your records are always returned in a predictable sequence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), data (1), management (1)
> **Env Vars:** order (7), select (2), where (1), desc (1)
> **SQL:** order by (6), select (2), where (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Column aliases
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=0)** - [Instructor] Table and column names in the database's design are not always user-friendly.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=5)** You can have a different name displayed in the results of a SELECT query using the optional keyword AS.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=11)** This will allow you to display an alias for the column name rather than the original name that the data table uses that you can see displayed in the Object Explorer panel.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=20)** Let's start a new query here, and we'll write a query against the Department table once again.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=26)** We'll start with the keyword SELECT.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=28)** I'm going to pull the Name column out of the table.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=31)** However, I want to be more clear that the values displayed are the department names and not perhaps the name of the head employee for the department or the name of the building that the department is in.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=42)** I can do that by typing in SELECT Name.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=45)** Then I'll use the AS keyword followed by the text that I'd like the column to be labeled in my results.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=52)** Again, this is literal text, not a command, so we need to include the single quotation marks around our text.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=59)** I'll return this as a column named Department Name.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=63)** I'll finish the closing single quotation mark.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=66)** I'll type in a comma, and we can come down to line number 2.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=70)** Here you can continue adding additional columns as a comma-separated list.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=74)** Let's also add in the GroupName column.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=78)** But once again, I'll use an alias with the AS keyword, and we'll call this Management Group instead.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=89)** Then, when we're done listing out the columns, we add in our FROM clause, and we specify the table, HumanResources.Department.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=98)** When I execute the query, the results are still pulled from the original data table.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=103)** But you'll notice that the names of each column have been modified to the custom names that we specified in the query syntax.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=109)** So instead of just the Name column, we're seeing Department Name.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=112)** And instead of the GroupName column, we're seeing Management Group.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=116)** This allows us to give better, clearer, and more understandable names here in the results.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=121)** This could be beneficial when feeding data to a report to clarify exactly what values mean, or when the data table uses an obscure acronym as a column name that you'd like to expand so the end users of the information don't get confused.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/column-aliases?u=76281980&t=135)** By using column aliases with the AS keyword, you can display a clear human-readable column header in your results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), management (2), database (1)
> **SQL:** select (3)
> **Env Vars:** select (3)
> **Speakers:** - [instructor] (1)

#### Create values with constants and math
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=0)** - Sometimes it's beneficial to return a column of values in your results that don't actually exist in the original table.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=7)** For instance, if you're building a report and you need each record to be associated with the same company or the same tax rate to show alongside each order.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=15)** Let's explore some data from a different table now.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=18)** Let me go ahead and minimize the human resources dot department table and I'll scroll down to the production schema.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=24)** We'll find a table called production dot product.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=28)** There's a lot of different columns in here but we're only going to pull out a few of 'em.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=32)** I'll write a simple query that returns a couple of these columns.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=35)** We'll start by pressing the new query button.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=37)** Then I'll type in select, name, comma, and online number two, the second column, product number.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=46)** I don't need a column after this one because it's going to be the last column that we're typing up.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=51)** So I'll come down to line number three.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=52)** I'll say from production dot product.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=58)** Now I can press the execute button to see all of the data that those two columns contain.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=63)** We can see we have a total of 504 rows.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=66)** So this is the data exactly as it's stored in the table.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=70)** Now lets suppose that I also want to use this data in a product catalog but I want to make sure that our company name is attached to each product so that there's no confusion on where these items can be ordered from.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=81)** I can create a new column out of thin air by adding it into the list in the select clause.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=87)** After the product number column, I'll type in a comma and come down to line three.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=93)** Then I'll specify the text adventure works in single quotation marks. Since this is literal text and not the name of a column, when I press the execute button, I get that text added as a third column in the results. This gets added for every record that's coming out of the product table.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=111)** Now you might notice that the column has no name so this is a good opportunity to use an alias in the query.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=117)** I'll come back up here onto line number three and we'll specify AS manufacturer.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=123)** This time when I execute the query, we'll see these same data but we get a better hitter here at the very top.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=129)** This gives us a clear understanding of the information that's presented.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=133)** So that's one way that you can create a column of values with a select query.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=137)** There's one more common use for this technique and that involves using mathematical operations.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=142)** In this table, we also have a column for the list price of the item, so let's add that into our query, type in the comma, come down to line four, and we'll add in the column list price.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=153)** When I press execute, we can see that column gets listed over here on the right.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=158)** Now I can see we have a lot of products that don't actually have any price, so let's exclude these from the results.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=164)** I can do that by adding a where clause after the from clause. Let's move the Terminator character to the line number six.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=172)** We'll type in where. List price is greater than zero.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=178)** Let me re-execute it, and this brings us down to 304 products that actually have a list price above $0.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=186)** Okay, so this is better.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=187)** Now, let's say that we're having a company-wide anniversary sale. I'd like to create a column that displays the price of each product with a 15% discount applied to it.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=198)** We can add that into our select statement.
>
> **[3:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=201)** After the list price column, we'll add one more column.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=204)** This is going to be the original list price value multiplied by 0.85.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=214)** Then we'll also return this with an alias, I'll call it AS sale price.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=221)** This will take the original value from the list price column, multiply it by 0.85 to get a 15% discount, and you'll return that data in a new column called sales price.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=233)** I'll press execute and we can see the result.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=236)** Here's the original price and here's the price after a 15% discount.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=241)** So now these results are much more useful.
>
> **[4:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=244)** We've started with values that are stored in the database and we expanded on them by creating a column to display the manufacturer name as well as the sale price.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-values-with-constants-and-math?u=76281980&t=253)** Neither of those two columns exist in the database and they're being calculated just for the display, here in the query results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (8), data (6), [[Microsoft Products|Products]] (2), database (2), [[Human Resources (HR)|Human resources]] (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.85 (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - sometimes (1)

#### Challenge: Write a SELECT query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=0)** (upbeat funky music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=6)** - [Tutor] Now that you've seen a few of the clauses that make up a SQL select query, it's time to put that knowledge to the test with our first challenge.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=14)** In the AdventureWorks database there's a table called production.WorkOrder.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=19)** This table stores information about the production of the items that AdventureWorks manufacturers.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=25)** Now unfortunately, sometimes the manufacturing process encounters a problem, and products need to be discarded or scrapped.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=33)** I want you to find all of the work orders from the month of December, 2013 that had a scrapped quantity above zero units.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=42)** Then, sort the results descending, so that the work orders that had the highest number of scrapped items, appear at the top of the results.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=50)** I will give you one hint here.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=51)** In SQL server, dates are treated like text strings, so you'll want to write them out in single quotation marks in your query predicates.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=59)** And use the year, month, day format that's shown here.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=64)** This challenge should take about five minutes to complete, and I'll give you bonus points if you use column aliases to make the header row a little bit more legible by adding spaces.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-select-query?u=76281980&t=73)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), database (1), [[Microsoft Products|Products]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** sql (2)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat funky music) (1)

#### Solution: Write a SELECT query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=0)** - I hope you were able to locate all of the requested work orders.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=9)** Let's go ahead and work through the solution.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=12)** I'm going to go into my AdventureWorks database and find the table that we want to work with.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=16)** And that was the production.workorder table.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=19)** Let me just scroll down here and we'll find it right there.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=23)** All right, I'll go ahead and expand that open and find our columns.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=26)** So these are all the columns that we can work with.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=28)** I actually like to run a simple select query just to pull everything out of the table so I can see what I'm starting with.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=33)** So we'll just say select * from production.workorder.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=40)** And we'll go ahead and execute that.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=41)** So these are the columns and all the data that we can work with.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=44)** Now for this question or for this challenge I asked to identify the work order.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=49)** So we want to pull this work order ID column in our final solution.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=53)** We also wanted to find just the work orders that had items that were scrapped.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=57)** So we're going to use the scrapped quantity column and we need to do a filter on this.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=60)** So we filter out all of the rows that have a zero quantity here.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=64)** And finally, I was also interested in just the work orders that took place in December 2013.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=70)** So we're going to need the start date and the end date column as well in order to determine the work orders that were produced in December.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=78)** So those are the three columns, or the three columns that we'll need to apply filtering criteria to.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=83)** But we also want to pull the work order ID in our final solution.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=86)** Okay, so let's go ahead and get started here.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=88)** Let's replace this select * with work order ID.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=91)** I'll go ahead and select that from the IntelliSense menu and just press enter, type in a comma and come down to the next line.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=96)** Then I want the scrapped quantity.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=99)** Go ahead and select that and type in a comma and press enter.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=102)** Start date and end date.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=109)** All right, so those are the four columns.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=110)** And I like to just run my queries as I write them out just to make sure that I'm not making any mistakes.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=115)** So, so far we're looking good.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=116)** I'm getting data on the four columns, so that's good.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=119)** Now we can go ahead and start doing our filtering criteria and that's going to use a where clause.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=125)** So where the scrapped quantity is greater than zero that'll find everything that has actual scrapped items.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=133)** Let me go ahead and just execute it again.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=134)** Okay, that takes us down to a total of 729 rows.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=138)** And I also want to find the ones that occurred within our specific date range.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=142)** So I'm going add an and, I want to have the start date is greater than or equal to the 1st of December.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=153)** So we need to put that in single quotation marks because it's a date.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=156)** So the date I asked for was 2013-12-01 and also the end date less than or equal to the 31st of December.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=170)** So 2013-12-31.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=173)** So that'll give us the date range.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=175)** So any dates that are starting on the first or later and ending on the 31st or earlier will be in our final solution.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=184)** Go ahead and say execute to that.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=185)** And that brings us down to a total of 26 rows that have a scrapped quantity more than zero and fall within that date range.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=193)** So you can see all their work order IDs there.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=195)** So that's basically the answer.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=196)** I'm going to go ahead and add in a couple of aliases here just to give my column names some better spacing so they're easier to read.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=203)** So I'll say work order ID, and we'll call this as and we'll call this work order ID with spaces.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=211)** We'll do the same thing for scrapped quantity.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=213)** I'll actually spell that out.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=218)** We'll do the same thing with start date as start date with a space and the end date as end date with a space.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=229)** All right, so those are all in.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=230)** We'll go ahead and execute one more time.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=232)** And there's slightly better column headers with the spaces in there.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=234)** Makes it just a little bit easier to read.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=236)** And that is my solution to the challenge.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=239)** I'll go ahead and save all of this text inside of the exercise files as challengeonecomplete.sql and you can compare your solution against mine.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-select-query?u=76281980&t=247)** And just know that there's lots of different ways you can get to a similar answer, just depending on how you interpreted the question.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), database (1), next (1), [[SQL]] (1)
> **CLI Commands:** find (6), make (1)
> **File Paths:** challengeonecomplete.sql (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - i (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Query information from a database
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=0)** - [Presenter] In this challenge, we are given a table of some maintenance requests for a residential repair company, and we need to retrieve some of the information.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=14)** So we're going to just start by selecting everything from the table, just so I can see what we have to work with.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=19)** So we'll SELECT * FROM MaintenanceRequests, and I'll test my code to see what we have.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=24)** So here are the different columns of data and all the rows from the table that we can work with.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=29)** So we have all of these different columns.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=30)** Now, the challenge is asking us for a specific subset of columns, so I don't want to return everything.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=36)** I just want to retrieve the TenantName column, (keys typing) and I'll just put these in here one at a time on each line.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=43)** The next one was IssueDescription.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=46)** (keys typing) We wanted the CompletionDate, (keys typing) the CostEstimate, (keys typing) and the BillingStatus columns, (keys typing) So fill in all of those in the SELECT statement, we'll run it again, and this time we're getting the five columns that we are asked for, so this is the data that we're asked for.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=69)** Now we need to supply some better aliases.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=72)** We're asked to clean up the column names and make them a little simpler by adding one-word column names here, so I'll go through and add in all of my aliases with the AS keyword.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=81)** So TenantName, we'll rename as Tenant.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=83)** (keys typing) The IssueDescription, I'll return that as simply Description.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=89)** (keys typing) The CompletionDate, we'll return that information as Completed.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=93)** (keys typing) The CostEstimate is simply Price, (keys typing) and the BillingStatus, I'll rename that to Status.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=103)** Right, so that's all of my aliases.
>
> **[1:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=105)** I can test my code again, and that returns the columns that we're asked for, so Tenant, Description, Completed, Price, and Status.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=112)** So now we need to turn our attention to the rows, and filter out some specific data out of the table.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=118)** So we're asked for all of the data where the maintenance request is not paid.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=123)** So if we look over here in the STATUS column, we have some that are paid and some that are either unpaid or unbilled.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=129)** And we want all of the ones that are not paid here, so we can add in a where clause to the end of this to filter the data.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=135)** So we'll say WHERE, and a couple of different ways we can do this, I'll just start with BillingStatus.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=141)** (keys typing) And I can say not equal to 'Paid' in single quotation marks.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=148)** And we do need to put in a capital P here because that's the way the data is here inside of this challenge.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=154)** And this only applies to the CoderPad environment where it is case-sensitive.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=158)** If you were running this inside of SQL server, it is not case-sensitive in an actual SQL server instance, so you could put paid here with a lowercase P and that would still match.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=167)** But here in the challenge, I do need to say capital P Paid.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=172)** All right, so that's going to filter down to just the rows that are not paid.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=176)** So I can see Unpaid and Unbilled, so I don't have any more paid records there.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=180)** So that gives me that, and then we also need to find where the cost estimate is above 200.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=187)** So I can say we've renamed that to the PRICE column now, but I only want the ones that are above $200.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=193)** So for that, we need another AND here inside of the where, so I can say AND CostEstimate (keys typing) is greater than 200.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=203)** I'm going to test my code, and that filters it down again.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=206)** I'm still not getting a correct output, though, because we haven't sorted the data yet, but it does filter down to just show me the rows that are above $200.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=214)** And so finally, we're asked to order the data, so I'll say ORDER BY the CompletionDate, (keys typing) and that'll put it in a chronological order.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=223)** Right, test my code again, and this time we get a correct output.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=227)** So this is my SELECT statement that solves the challenge.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=230)** We have the information, all the different rows here, it is in a chronological sequence, and it is the price above 200 and the status is not paid.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=241)** So that's one way we can do it.
>
> **[4:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=242)** There is another way we can put the WHERE clause here to find the records that are not paid.
>
> **[4:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=248)** I could say BillingStatus =, and put in the ones that we want instead.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=254)** So I could say WHERE the BillingStatus = 'Unpaid" or the BillingStatus = 'Unbilled'.
>
> **[4:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=262)** (keys typing) Now, the challenge with doing it this way is that if I test my code, we're going to get more rows, and the reason for that is because it's looking for where the billing status is unpaid as one set of records, or where the billing status is unbilled and the cost estimate is greater than 200.
>
> **[4:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=285)** So this cost estimate is not currently being applied to this particular portion of the WHERE clause.
>
> **[4:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=292)** So in order to get it to apply correctly, we need to put a set of parentheses around this first portion of the WHERE clause.
>
> **[4:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=299)** So I can say WHERE the (BillingStatus is 'Unpaid') OR the (BillingStatus is 'Unbilled').
>
> **[5:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=304)** So that's all one predicate there, and we want the cost estimate greater than 200.
>
> **[5:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=311)** So if I test the code again, this time with that set of parentheses in, it gives us a correct output again.
>
> **[5:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=317)** So if you're splitting out the billing status onto these two different statements rather than saying not paid, then you just need to make sure you enclose it inside of the parentheses so that it filters correctly.
>
> **[5:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-query-information-from-a-database?u=76281980&t=329)** And so that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Microsoft SQL Server|Sql server]] (2), next (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** where (6), select (3), sql (2), status (1), price (1)
> **Non-Speech:** (keys typing) (13), (upbeat music) (1)
> **SQL:** where (6), select (3), order by (1)
> **CLI Commands:** make (2), find (2)
> **Speakers:** - [presenter] (1)


### 2. Additional Filter Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### Limit results with TOP
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=0)** - [Instructor] Normally when you run a select query, all of the records that match your filtering criteria are returned from the database.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=7)** There is a way to limit how many records are returned using the top clause.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=12)** Let's go ahead and start up a new query and take a look at how this works.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=16)** In the AdventureWorks database, there's a table in the sales schema called Sales Tax Rate.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=22)** I'm going to write a query that just pulls out the tax rate and the name columns from that table.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=32)** When I press the execute button that'll return a total of 29 rows.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=37)** These are all the tax rates that we have stored in the table.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=40)** The first three are for Alberta, Ontario and Quebec in Canada.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=46)** Any select statement I can return just those three records by adding top three right after the keyword select.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=53)** Some people like to add the number inside of parentheses, you can do that or you can leave them omitted.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=58)** It doesn't really matter.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=59)** The query will run just fine either way.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=62)** Now, when I press the execute button it only returns the first three records from the list.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=68)** But what does this represent?
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=70)** These three records just happen to be the first three found in the table and that's pretty arbitrary.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=75)** There's no guarantee that I'd get the same information back if I were to run the same query tomorrow.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=81)** The top clause really needs to be paired with an order by clause in order to return predictable and meaningful results.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=89)** So let's find the highest three tax rates by adding an order by clause to the end of the query.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=96)** We'll say order by tax rate descending.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=103)** Now, it'll put the records in a descending order with the highest values at the top, and then the top clause will limit the results to just the first three records in that sorting order.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=114)** Now we get results that actually mean something.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=117)** We can see that France, the UK, and Germany have the highest sales tax rates in the database or I can remove the descending keyword from the query and re execute it.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=127)** And this will return the three lowest tax rates.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=130)** Those correspond to the state of Utah, Minnesota and the Canadian GST.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=135)** The top clause works with a fixed number of records to return.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=138)** Here, we're just using the number three, but you can put whatever number you'd like.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=143)** In fact, when you right click on a table in the Object Explorer panel, and then you'll have the option to select top 1000 rows, you'll see that it's just using top 1000 here in parentheses at the top of the query in order to limit those results.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=157)** So you can put whatever number you prefer in that list.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=161)** Okay, let's go ahead and close this tab and return back to our tax rate query.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=164)** Alternatively, you can specify a percentage of the records to return.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=169)** So instead of select top three, if I say select top 50% then if I execute the query, you'll see that we get a total of 15 rows returned.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=181)** This is approximately half of the original 29 that we started with.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=186)** Note that you need to use the full word percent, you can't use the percent symbol.
>
> **[3:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=191)** If you try and use the percent symbol here it'll cause the query to fail with an error message.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=196)** Finally, I want to point out one more trick with the top clause.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=199)** Notice that I have a number of tax rates that are all 7%.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=204)** However, if I change the query back to select top five and press the execute button again I just get a couple of those.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=213)** I only have three at 7%, and I know that there's many more.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=217)** These three that are shown are just arbitrarily chosen from all of the rows with the same 7% value.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=223)** We can change the behavior of the top clause by adding the with ties keywords after it.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=231)** This causes the query to return more than five rows if there are multiple records that have the same value in the last position.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=238)** That way you're not arbitrarily cutting off records that otherwise have qualifying data.
>
> **[4:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=243)** So even though we're only asking for a five here because I put in the with ties keyword it's ending it here at 7%, but then also showing me all of the other records that are also 7%.
>
> **[4:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=255)** So that's a number of ways that you can use the top clause to limit the number of rows returned by a query.
>
> **[4:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=261)** You can either use a fixed number with or without ties or specify the percentage of records that you'd like returned from the full data set.
>
> **[4:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/limit-results-with-top?u=76281980&t=270)** And remember to use an order by clause in the query to make sure that the results are sorted in a meaningful way first before selecting the top records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** gst (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)

#### Remove duplicates with DISTINCT
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=0)** - [Instructor] One useful piece of information that you can pull from a database is to find out how many times a specific value appears in a table.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=7)** For instance, if we start a new query and I say SELECT * FROM Person.Address, you'll see that this contains a total of over 19,000 rows of individual address data for our customers.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=22)** Now, one of these columns in this table is the City column.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=25)** And as you'd expect, there's lots of people that live in the same city represented in this dataset.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=30)** One question that you might ask is, "Well, how many cities are there?"
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=35)** You might be tempted to get the answer just by selecting the City column from the table.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=38)** Let's go ahead and change our query to just SELECT City.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=42)** Now, when I re-execute it, you'll see we get a column of just our cities.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=46)** However, if you take a look at the number, it's still returning 19,614 rows.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=52)** They're displaying in a different order, but you can already see here that there's some duplication going on with these two records right there.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=60)** We're just getting the full city column from the data table.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=63)** It's not actually doing any filtering at this point.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=65)** So one way to get the information that we want is to ask the database for just the distinct cities from this table.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=72)** To do that, you simply add the distinct keyword to the SELECT clause.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=76)** So we'll say SELECT DISTINCT City.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=80)** When I re-execute it, we'll see that we only get 575 rows now and every unique city name is only represented in the result a single time.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=89)** Now, you might want to return our cities in alphabetical order, so I'll come back up here to the top and I'll add in an ORDER BY clause to the query.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=99)** This will return everything in alphabetical order.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=102)** Now, we do need to be careful here because it's not uncommon for two different cities to have the same name and right now, these results are simply returning distinct city names.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=112)** The query has no knowledge of geography, and it can't tell the difference between Portland, Oregon or Portland, Maine or Portland, New Zealand.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=121)** So we might want to include another column in this query to better separate distinct cities.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=127)** We can add an additional column to the SELECT statement that'll help separate different cities with the same name.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=133)** In the original table, there's a column that stores the state/province ID.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=138)** I think we can safely assume that it's very uncommon for there to be two cities with the same name in the same state or province.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=145)** So I'll go ahead and add that up into my query.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=150)** This time when I execute, it brings us back up to a total of 613 rows.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=155)** This represents all of the distinct pairings of a city name and a state/province ID that are found in the address table.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/remove-duplicates-with-distinct?u=76281980&t=162)** So using the distinct keyword in your SELECT statements can help you filter your data to just the rows that are unique across all of the columns that you've asked to be returned by the query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), database (2)
> **Env Vars:** select (6), distinct (1), order (1)
> **SQL:** select (6), order by (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Comparison operators
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=0)** - [Instructor] The mathematical comparison operators are extremely important in the design of useful queries.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=6)** You might not know them by that name though, but I'm sure you'll recognize them once you see them.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=11)** They're the equals less than and greater than symbols and by combining two symbols with no space between them, you can get less than or equal to, greater than or equal to, and not equal to, which is literally the less than and greater than symbols put together.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=28)** There are also a few that use the exclamation point that you can use, but they're not standard.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=33)** They're not equal to, not less than, and not greater than.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=38)** This format is not common to see though but you might run across them when exploring queries in databases that other people have made.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=45)** So it's a good idea to be familiar with what they are.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=48)** I'd recommend sticking with the standard format when writing queries in SQL Server.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=53)** So let's see these in action in a couple of queries.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=57)** I'll start a new select statement and I'll select the name and tax rate columns from the Sales.SalesTaxRate table.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=67)** Executing the query shows me I have a total of 29 rows of data in the database.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=73)** In order to return just the records that are equal to a specific value, you can add in a where clause to the end.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=79)** For instance, I can find all the records where the tax rate is equal to 7.25.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=87)** Executing the query again shows me that I just have two rows that exactly match that value.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=93)** You can find the records that are above or equal to 7.25 by changing the comparison operator.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=100)** I'll change it to greater than or equal to 7.25.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=104)** Executing again shows me I have 14 rows where they have a tax rate at or above 7.25.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=112)** Now, if you wanted to find the records in a range you can string two predicates together with the and logical operator.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=120)** For instance, if you wanted to find the tax rates between 7 and 10%.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=124)** One common tripping point though is that each predicate needs to be a complete logical statement by itself.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=131)** So for instance, if I were to come up and type where the tax rate is greater than 7 and less than 10.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=143)** This statement is how I might think about the range that I want when I'm thinking about it in my head.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=149)** But if you were trying to run this, you're going to get an error message.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=153)** If you were to focus on each predicate individually, maybe put parentheses around each one.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=158)** For instance, the first predicate is the tax rate is greater than 7, and our second predicate just reads less than 10.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=167)** You can see that that's not a complete logical statement by itself.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=170)** So what we need to do here is put a second instance of the tax rate reference.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=177)** Now we have two separate but complete predicates where the tax rate is greater than 7 and the tax rate is less than 10.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=186)** Now when I execute the query, we'll get these 7 rows that match.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=190)** Keep in mind here that this statement is not inclusive, so you won't find any rows that are exactly 7 or exactly 10, just the ones in between.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=199)** If you wanted an inclusive query range, you would need to use the greater than and equal to and less than and equal to operators.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=207)** I'll go ahead and change that up here.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=212)** This time executing the query shows me I have 21 rows that are between 7 and 10 inclusive.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/comparison-operators?u=76281980&t=218)** And that's how you use the mathematical comparison operators in your queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Microsoft SQL Server|Sql server]] (1), data (1), database (1)
> **CLI Commands:** find (5)
> **Versions:** 7.25 (4)
> **Analogies:** for instance (4)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Understand NULL values
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=0)** - {Speaker} Null values in a table represent data that's not available or unknown.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=5)** Since Null literally means nothing, you can't use the same comparison operators to filter records in a select statements WHERE clause like you would when comparing numbers or text strings.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=17)** It just does not make any sense to ask for records where a Null is equal to something or not equal or greater than some other value.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=26)** That's why SQL Server gives us two alternate ways to work with records that contain Null values.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=32)** Let's take a look by creating a query that retrieves data from the WorkOrder table.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=51)** We'll ask for the WorkOrderID, ScrappedQty, and ScrapReasonID columns from production.WorkOrder.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=59)** This pulls information of over 72,000 individual work orders.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=64)** We can see in the results that many of these work orders were completed without any issues.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=68)** They didn't have any items that needed to be scrapped so the corresponding ScrapReasonID code is Null or blank but if you scroll through the list you might find a WorkOrder that had some items that weren't produced to the company's standards.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=82)** For instance, this one right here where we had to scrap four items.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=86)** For these WorkOrders, you'll find a scrap order ID code that describes what the issue was.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=92)** Now, if you only wanted to see the work orders that have an actual ScrapReasonID value you might try and add a WHERE clause to the query that reads something like this,
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=110)** where the ScrapReasonID is not equal to Null.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=114)** When you press the execute button, you might be surprised at the result.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=118)** It doesn't come up with an error, but it actually doesn't even come up with any data either.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=123)** That's because Null doesn't behave the same way with comparison operators like the not equal too symbol that we're using here.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=130)** Instead, what we need to do is say where the ScrapReasonID is not Null.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=137)** This time pressing execute gives me the data that I expected.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=140)** We get a total of 729 rows where we had some items that were scrapped and a corresponding ScrapReason.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=147)** And you might have guessed this already, but you can find the opposite set of records by looking for the ones where the ScrapReasonID is Null.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=155)** Executing this shows me the other 71,862 rows.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=161)** Now, there is one other way that we can work with Null values in a query and asked to substitute a value using a function in the SELECT clause.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=169)** To do this, let's first get rid of this WHERE clause.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=173)** Then instead of displaying just the data that's in the ScrapReasonID column from the table, I want to modify those values with a function called ISNULL.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=184)** The function name does not have a space in between the word is and null like we do when we're using it in a WHERE clause.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=190)** We'll talk more about modifying data with functions later on in the course, but for now all you need to know is that you use a function you just type in a name and then inside a parenthesis you'll list out the parameters that the function requires as a comma separated list.
>
> **[3:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=205)** So, after ISNULL open up a parenthesis, the ISNULL function takes two parameters.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=211)** The first is the name of the column of values that we want to look at.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=215)** In this case, that's the ScrapReasonID column.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=218)** I'll come here to the end and type a comma.
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=220)** The second parameter is the value that will be returned if the value in the table is Null.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=226)** We do still need to be consistent with the data types here, so we can't substitute text.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=231)** So, how about we return to code 99, that finishes the function so I'll close the parentheses.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=238)** We should also give this column an alias so I'll call it AS ScrapReason.
>
> **[4:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=245)** Now, we can execute the query again.
>
> **[4:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=248)** This time all of the records that normally would display a Null for the ScrapReason now return the code 99 and if you scroll through and find a WorkOrder that did have problems, for instance, we have one right here it returns the original ScrapReasonID.
>
> **[4:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=264)** So, those are two techniques for working with Null values in your queries.
>
> **[4:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-null-values?u=76281980&t=268)** You can either use them to filter by with the ISNULL and ISNOTNULL keywords in a WHERE clause, or use the ISNULL function in your select statement to process them and return a different value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** where (5), isnull (5), sql (1), select (1), isnotnull (1)
> **SQL:** where (5), select (1)
> **CLI Commands:** find (4), make (1)
> **Analogies:** for instance (2)

#### Match text with LIKE and wildcards
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=0)** - [Instructor] When filtering the results of a query based on text values, you can use the equals to comparison operator to find text that exactly matches your criteria.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=11)** But when you need to find approximate text matches that match a pattern, you'll need to use the like operator.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=17)** Let's take a look at people names from the database, with a new query that selects the first name column from the Person.Person table.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=32)** Executing the query shows me over 19,000 first names that are stored in the database.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=39)** Now if I just wanted to get the list of names that start with the letter A, you can add a where clause that reads where the first name... is like, and in single quotation marks, A percent.
>
> **[0:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=56)** The like operator and the percent symbol create a text pattern, and the query returns just the records of all the names that start with a letter A.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=66)** The percent symbol is called a wildcard, and it acts as a placeholder for any other characters.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=73)** So with this query, we're asking for any names that start with the letter A, and then have anything else after that.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=80)** The results show 2,014 first names that all start with the letter A.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=84)** You can move the percent sign to the beginning if you wanted to find all of the people with a name that ends with the letter A.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=91)** Executing the query in this configuration shows me I have 3,412 people that all have a name that ends with the letter A.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=100)** Or you could do a search for percent, A, percent.
>
> **[1:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=105)** This'll find anyone with an A anywhere in their name.
>
> **[1:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=108)** It looks like we have almost 14,000 people out of the 19,000 names, that have a letter A either at the beginning, at the end, or anywhere in the middle of their name.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=119)** So the percent symbol will create a pattern that matches any string of 0 or more characters.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=125)** If you want to create a pattern that matches a single character only, you'll use the underscore symbol.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=131)** For instance, if I specify where the first name is like A, underscore, underscore, underscore, SQL server will return all of the names that have a first name that starts with the letter A, and then has three additional letters.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=147)** You can also be more specific about what letters you want to search for by providing a list of characters in square brackets.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=154)** I'll change this to square bracket, A, B, C, close the bracket, and then our three underscores.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=162)** This query will find all of the people with a name that starts with either letter A, B, or C, and then has three letters after it.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=171)** Scrolling through the list, we see a couple of people with a first letter that starts with A, and four letters total.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=176)** Then we have B for Beth, with additional three letters, and we have Carl with C and additional three letters.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=183)** Let me change this up again.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=185)** This time I'll match the pattern A, and then in brackets, L, M, N, then three underscore characters.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=195)** This query will match any names that start with a letter A, then have a letter L, M, or N as the second character, followed by any three additional characters.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=206)** This returns names like Amber, Angel, and Alvin.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=210)** If you wanted to specify a number of characters in sequence, you can use these same square brackets but define a range using a hyphen.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=218)** For instance, L to N would return the exact same results.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=223)** This includes all the letters in the range between L and N, which includes L, M and N.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=230)** So to recap, the wildcard characters that you can use with the like operator include the percent symbol, which matches to zero or more characters, the underscore is used to represent any single character, or you can use square brackets to define specific characters in a set or in a range if you include a hyphen.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=250)** Finally, you can also use the same square brackets to exclude letters from a pattern by adding the up caret symbol inside of those brackets.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/match-text-with-like-and-wildcards?u=76281980&t=258)** Using these character-matching techniques and the like operator can be useful anytime you want to look through your data and find records that share common patterns, such as finding all of the product serial numbers that have the same prefix or suffix, or finding people based on their initials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), [[Search]] (2), [[Microsoft SQL Server|Sql server]] (1), data (1), product (1)
> **CLI Commands:** find (6)
> **Analogies:** for instance (2), such as (1)
> **Env Vars:** sql (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Retrieve matching text strings
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=0)** - [Instructor] It's time for the second challenge of the course, and this time I want you to focus on matching text strings within the data.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=12)** We'll start with the Purchasing.Vendor table.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=15)** There you'll find a list of all of the vendor names that do business with AdventureWorks.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=20)** I'd like you to locate all of the vendors that start with a letter C, then filter those results further by finding just the names that also include the word bike or bicycle.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=32)** Depending on how you write the query, you may need to pay special attention to the use of parentheses to ensure that your predicates match, and the query is actually returning the results that you intend.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=43)** This challenge should take about five minutes to complete, and I'll share my solution in the next movie.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-retrieve-matching-text-strings?u=76281980&t=48)** Have fun!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), business (1), [[Microsoft Word|Word]] (1), next (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Retrieve matching text strings
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=0)** - [Instructor] Were you able to locate the vendors that match my requirements?
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=9)** Let's take a look at how I would solve the challenge.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=11)** I'm going to go into the AdventureWorks database and we'll expand tables.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=15)** We'll take a quick look at the table that we're working with.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=18)** That is the Purchasing.Vendor table.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=20)** So here's all the columns that we can use.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=23)** And for this challenge, I think we only need the values that are stored in the Name column.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=27)** We really don't need any of these other ones.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=29)** So let's just start up a new query and we'll select that column name from Purchasing.Vendor.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=38)** And I'm going to execute the query just to see what our starting place is.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=41)** So it looks like we have a total of 104 rows of data that we have to work with.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=45)** Now the first part of the challenge was to find all the vendors that started with the letter C.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=50)** So we'll add in a where clause.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=53)** And we're going to search on the name field.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=55)** And I want to find all the names that are like the pattern that starts with the letter C, and then has any characters after that.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=63)** So that's what we use the percent simple for.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=66)** So where the name is like C and then any characters after that.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=69)** When I press execute, it shows me a total of 15 rows.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=72)** So these are the 15 vendors that all start with the letter C.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=76)** Now I want to filter these further and find just the vendors that also include the word bike or bicycle.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=84)** So let's go ahead and continue adding onto our where clause for that.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=87)** So where the name is like C and where the name is also like and has the word bicycle or bike anywhere in it.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=97)** And because we're looking anywhere, either at the beginning or the end, or anywhere in the middle, we'll use the percent symbol at the beginning and the end after the word bike.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=107)** So I could say percent bike percent, or the name is like percent bicycle percent.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=120)** Now for to run this right now, it's got three predicates.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=123)** In fact, let me go ahead and put parenthesis around the predicates here.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=126)** So where the name is like C and we also have the name is like bike, or the name is like bicycle.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=139)** Let me go ahead and actually minimize this a little bit so we can see everything on a single line there.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=143)** So we have three predicates right now.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=144)** And if I were to execute it right now, it's going to give me results that aren't quite exactly what I'm looking for.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=150)** It's looking for where the name is like C, so it starts with a C, and includes the word bike, or it has the name bicycle.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=160)** And you can see here that we have this first one here.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=161)** It's Advanced Bicycles and it does include the word bicycle, but it doesn't start with a letter C.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=166)** The one here, this one also includes bicycle, starts with letter G.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=169)** So we have a bunch that just include bicycles, but don't have a C.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=173)** Then we should also have some that start with a letter C and include the word bike, like this one here, Competition Bike.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=180)** So our predicates are a little bit mixed up here because we're not grouping them together like we really intend.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=185)** So what I want is where all of them start with C and then all of this as a second predicate.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=192)** So in order to do this, what I can do is just put a parenthesis set around all of this.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=197)** So it'll find all the vendors that have the letter C at the beginning and also include this predicate.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=204)** Either they have the word bike or the word bicycle.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=207)** Press execute and it returns three rows.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=210)** They all start with C, and they either include the word bike or bicycles.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=214)** So that's one way that we can do that.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=216)** Let me go ahead and copy this and I'm going to write this out again just as a slightly different version.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=223)** In fact, I'm going to put these onto multiple lines now.
>
> **[3:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=228)** So you could also say it like this, where the name is like C and the name includes the bicycle or the word bike.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=237)** Go ahead and put that up here.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=240)** And the name like bike.
>
> **[4:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=245)** Or we can repeat the name like C portion of this.
>
> **[4:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=256)** And name like bicycle.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=258)** We'll get rid of all these parentheses then.
>
> **[4:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=260)** So this is another way that we could type this out.
>
> **[4:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=262)** So where the name includes the letter C and it includes the word bike, or the name includes the letter C and the name also includes the word bicycle.
>
> **[4:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=272)** And if I execute just this query on lines five through eight now, I'll get the exact same results.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=277)** So it's two different ways to write the exact same query.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=280)** Doesn't really matter which way you go, you'll get the same results.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=284)** So this is my solution to the challenge.
>
> **[4:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-retrieve-matching-text-strings?u=76281980&t=285)** I'll go ahead and save it as Challenge Two Complete.SQL and you can compare my solutions against yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), database (1), data (1), [[Search]] (1), [[SQL]] (1)
> **CLI Commands:** find (4)
> **File Paths:** complete.sql (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Filter results from a query result
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=5)** - [Instructor] In this challenge we have a table of movie reviews that we need to use to jog our memory about a specific film.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=12)** We have a couple of facts that'll help point us to the specific movie, and we just need to write a query that'll get us that information.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=19)** I'm going to start by selecting everything out of the MovieReviews table.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=27)** I'll test the code.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=28)** So, that shows me the three columns that we have to work with and all the different movies that we need to sort through.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=34)** So, I'm going to actually just change this from SELECT * to the actual column names.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=40)** So, I'll say SELECT ReviewID, MovieTitle, and ReviewText.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=47)** Now, it's not going to make a difference for this challenge because we're grabbing all of the columns from the table in the same sequence.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=53)** In fact, when I test my code you won't see it change at all, but it might just make it a little clearer to see what exactly is happening here in the solution to list those out.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=62)** So, we'll SELECT everything out of that table there.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=64)** Now we just need to filter the rows to find the movie that we're looking for.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=68)** The first criteria is that it is a mystery, and we'll find that information somewhere inside of the ReviewText column.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=76)** So, for instance, here's one that's a mystery.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=78)** Now, I can't just say WHERE ReviewText is equal to mystery because that's going to look for exactly that text.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=89)** And you can see these all have sentences, so none of 'em are exactly going to match the word mystery.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=93)** What we need to do is use text pattern matching to find all of the rows that contain the word mystery somewhere inside of their text.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=102)** And so, using pattern matching we can say we want any characters, then the word mystery, followed by any characters here at the end.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=111)** And so, instead of ReviewText = mystery, we need to change this to the LIKE operator instead of equals.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=118)** And then inside of the single quotation marks we'll just put in our percent symbol, which is the wild card for any characters.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=124)** And I'll put that at the beginning and the end.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=127)** So, we'll find all the rows WHERE the ReviewText is LIKE this pattern.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=132)** And when I test my code that limits it down to just these four movies that all have the word mystery somewhere inside of the ReviewText.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=142)** So, we're getting close.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=143)** The next criteria is that the movie contains the word diamond or jewel in the title.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=150)** And so, we'll add that as another condition here inside of the WHERE statement.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=154)** So, I'll use the keyword AND, and I just need to do the same thing.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=158)** We're looking for the word diamond or jewel inside of the MovieTitle column.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=164)** So, we can say MovieTitle LIKE inside single quotation marks, and then a percent symbol again, Diamond.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=172)** Now, inside of this challenge we do need to be careful and make sure we're using capital letters.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=177)** So, all of our movie titles are in title case, so we're going to search for Diamond with a capital D or Jewel with a capital J.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=186)** There is a little challenge here though because if I just say WHERE the MovieTitle is LIKE Diamond OR MovieTitle LIKE Jewel with the percent symbols on either side, what it's going to do is look for all of the records where the ReviewTitle, or the ReviewText, is mystery and the MovieTitle is Diamond.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=212)** So, we have this one, well, we have, none of them actually match that.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=217)** OR the MovieTitle is like Jewel, and you can see we have two movies that have the word Jewel in the title.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=223)** One of them is a mystery, and one of them is not a mystery.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=227)** So, you can see this ReviewText LIKE is not being applied to this portion of the WHERE statement.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=234)** So, in order to get it to apply to both we just need to put this portion inside a set of parentheses.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=239)** So, we want all the ones where the ReviewText is mystery AND, actually it's going to go here after the keyword AND, AND this statement here, MovieTitle LIKE Diamond OR MovieTitle LIKE Jewel.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=254)** And now when I test my code that gets us to the single record.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=258)** So, the movie we're looking for is "Curse of the Jewel," and it is a clever mystery.
>
> **[4:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-filter-results-from-a-query-result?u=76281980&t=263)** So, this is my solution to this challenge that returns a correct output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), next (1), [[Search]] (1)
> **SQL:** where (5), select (3)
> **Env Vars:** where (5), select (3)
> **CLI Commands:** find (4), make (3)
> **Definitions:** is a  (4)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 3. Retrieve Records from Multiple Tables

[↑ Back to Table of Contents](#table-of-contents)

#### Table joins and relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=0)** - [Instructor] Relational databases are efficient for storing data because they minimize redundancy.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=6)** They do this by splitting information up and storing it in multiple related tables.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=11)** This allows the database to compartmentalize data but it does require users to join records back together again when they want to review information that's been spread out across several tables.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=24)** There are four different types of joins that you can make between two related tables in your SQL queries.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=30)** They're an inner join, a left outer join, a right outer join, and a full outer join.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=38)** Let's talk about each one in order.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=40)** The first, and by far the most common, join that you can create between two related tables is called an inner join.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=47)** In fact, this is the default join type in SQL Server.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=51)** So, if you're not specific about what kind of join you're asking for, the query engine will assume that it's an inner join.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=58)** This is how it works.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=60)** Assume that we have one table of records, and it has a column of data that relates to a second table.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=67)** Each of these circles represents all of the records in each table and the overlapping area represents the records that share a relationship across both tables.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=77)** When you create an inner join in a query, the results will only display rows where the information can be found in both tables.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=85)** Any records from table A that doesn't relate to a record in table B are excluded, and any record in table B that doesn't relate to a record in table A is also excluded.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=96)** Within inner join, you only get the data if there's a matching value found in both tables.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=103)** The second most common join is called a left outer join, or sometimes it's simply called a left join.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=110)** Like with the inner join, we have two tables with an overlapping set of records that share a common value.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=116)** When you create a left join, the results will display every record from the table A, regardless of whether they have matching values in table B or not.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=126)** Then for the records that do have matching values, you'll also get that data from the second table.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=132)** If there's a record in table A that doesn't have a match in table B, the results will display null values in the columns from Table B.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=140)** The right outer join, or simply a right join, is the opposite of a left joint.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=145)** Again, we have the same two tables with an overlapping set of records.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=149)** A query that uses a right join will return all of the records from table B, regardless of whether they have matching records in table A or not.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=158)** Then, the results will display the matching values from table A for all of the records that have a match and no values for all of the records that do not.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=168)** And finally, that brings us to the full outer join.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=171)** This join takes the same two tables with overlapping values, and it returns every record from both tables, regardless of any matching.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=180)** Any row in one table that doesn't have a match in the other will show no values for those columns.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=186)** Essentially, table joins are used to filter records out of the results based on the presence or absence of matching data.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=195)** The inner join discards unmatched rows.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=198)** Left joins discards rows from the right table that don't have a match in the left.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=203)** Right joins, discard rows from the left table that don't have a match in the right.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=208)** And full joins return everything, regardless of whether there's a match or not.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/table-joins-and-relationships?u=76281980&t=212)** So let's put all of this into practice and explore some of the related data in the AdventureWorks database by joining tables together and looking at the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (2), [[Relational Databases]] (1), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (2)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Inner joins
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=0)** - [Narrator] The inner join is the most common table join type that you can make in SQL Server.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=5)** It returns records that have matching data on both sides of the pair of tables.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=10)** Let's take a look by first exploring the data that can be found in the person table and the person phone table by writing out two separate queries.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=36)** From the person.person table, we'll pull out the business entity ID, first name and last name columns.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=42)** And from the person.person phone table, we'll also grab the business entity ID and phone number columns.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=49)** If I execute both of these queries at once, I'm going to get two different windows down here at the bottom.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=54)** I can scroll through, here the first records correspond to the first query against the person table.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=60)** We can see the first names of all the people there.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=62)** Then if I scroll down on the window, I'll see the second instance of the results.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=66)** And these are the results coming from the person phone table including all of our phone numbers.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=71)** Now, these two tables have a relationship between them that allows you to find a person's name and their phone number based on a common value found in the business entity ID columns in each table.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=83)** For instance, if I scroll back up here and take a look at all of my people, the first person that I have here is Syed.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=89)** His business entity ID is 285.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=92)** We can either scroll through the records in the second results window to find his phone number, or we can use this ID in a wear clause to help us locate it.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=101)** I'll modify thIS second query to add that in, where the business entity ID is equal to 285.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=111)** I'll execute both queries again.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=112)** So again, here's all of my people here at the top.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=114)** I'll scroll down to the second results window below, and there is Syed's phone number.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=119)** This allows us to find phone numbers pretty easily.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=122)** If we were interested in somebody else, for instance, this person, Catherine, with the ID number of 293.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=128)** We can simply change it up here in the wear clause for the second query, re-execute, and I'll scroll back down, and there is Catherine's phone number listed.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=138)** But rather than running two different queries and modifying it each time, we can have the database engine do all of that work for matching records for us, and it'll return a single results window with everyone's phone number and name in a single grid.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=152)** So let's start writing out a third query.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=154)** I'll start it on line number eight.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=159)** I want the same three columns from the person table plus the phone number column from the person phone table.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=165)** I'll write all of their names out in a single select statement.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=175)** Now, before I add the from clause, I need to think through these columns that I'm asking for.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=180)** Both tables that I'm about to ask data for include a business entity ID column.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=185)** So SQL Server is going to get confused about what table I'm referencing here.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=190)** I need to be more specific about which one I want.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=193)** So instead of just putting business entity ID, I need to use the two part name that includes the table name.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=200)** I'll change this to person.business entity ID.
>
> **[3:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=205)** This clarifies that I'm looking for this column specifically from the person table.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=210)** Now, if this line gets a little bit too long, remember that queries are white-space insensitive.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=215)** So you can add additional line breaks if it helps you make the statement more legible.
>
> **[3:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=219)** One good technique is to break the line right before the commas instead of after.
>
> **[3:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=225)** This still creates a comma separated list, but it places the comma at the beginning of the line instead of at the end.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=231)** Now I can quickly scan through this query, and I can make sure that I'm not missing any of the commas.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=237)** Now technically, these other three columns will work without the two part names, since only one table has a column named first name, and only one table has a column named phone number.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=247)** It's always the best practice to be overly specific about what you're asking for though.
>
> **[4:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=251)** So I'm going to add the table names to all of these columns as well.
>
> **[4:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=255)** The first name and last name columns are also coming from the person table, and the phone number column is coming from the person phone table.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=269)** Okay, so that takes care of the select clause.
>
> **[4:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=273)** Next, we need our from clause.
>
> **[4:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=276)** The first table we want to pull data from is the person table, that's in the person schema.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=284)** Then we need to say what kind of join we'd like to make.
>
> **[4:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=288)** I want to only see people with phone numbers.
>
> **[4:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=290)** If the person does not have a phone number, I want them excluded from the results.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=295)** And if a phone number doesn't have a person for some reason, I want that excluded as well.
>
> **[5:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=300)** So when I only want rows returned where there's a match in both tables, that's an inner join.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=307)** You can either type join here, and SQL Server will create an inner join.
>
> **[5:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=311)** Or like always, it's better to be just more specific about your intent.
>
> **[5:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=315)** So I'm going to type out inner join instead.
>
> **[5:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=318)** I always like to be very clear about what's being requested.
>
> **[5:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=322)** Next, we need the name of the second table.
>
> **[5:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=325)** It's also in the person schema, and it's the person phone table.
>
> **[5:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=331)** Finally, we need to say which columns from each table have the matching values, or in other words, which columns define the relationship.
>
> **[5:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=339)** We do that with the on keyword followed by the column names that are equal to each other in the relationship.
>
> **[5:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=345)** I'm going to place this on a next line down, and I'll indent it a little bit just to make sure that it's clear that it is part of the from clause still.
>
> **[5:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=353)** So I'll say on person.business entity ID is equal to the person phone table, and also the business entity ID column in that table.
>
> **[6:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=369)** Now let's run just this one select statement.
>
> **[6:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=371)** I'll highlight lines eight down to 13.
>
> **[6:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=375)** This way, SQL Server will only execute this select statement and not the two that I have listed up above.
>
> **[6:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=380)** I'll press the execute button, and we'll see the results.
>
> **[6:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=384)** So now I have a single result window that has all of the information pieced together.
>
> **[6:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=388)** I have the first and last names of each person, as well as their matching phone number from the person phone table.
>
> **[6:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=395)** That makes it much easier to find Syed's number, Catherine's number, and any of the other numbers of our 19,000 people.
>
> **[6:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=403)** And that's how the inner join matches records across two tables.
>
> **[6:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=406)** Now, there's one additional trick that you'll see pretty often when reviewing queries written by other people, and that's to simplify the table names with an alias.
>
> **[6:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=415)** Just like you can create an alias for the column names using the as keyword, you can do the same with tables in a from clause.
>
> **[7:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=423)** The technique will usually look something like this.
>
> **[7:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=426)** The first time you name the table in the from clause, you give it an alias.
>
> **[7:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=430)** For instance, I'll call the person.person table as A.
>
> **[7:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=435)** Then anywhere else in the query that I make reference to that specific table, I'll replace it with the letter A.
>
> **[7:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=441)** So I'll go through here the query, and I'll type in the letter A here.
>
> **[7:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=444)** So A.business entity ID, A.first name, and A.last name.
>
> **[7:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=451)** Then in the on clause, we'll put A.business entity ID.
>
> **[7:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=456)** Then we do the same thing for the second table, person.person phone, we'll rename that as B.
>
> **[7:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=463)** Then I'll go through and I'll replace the instance of person phone here with the letter B, and the second instance of person phone down here also with the letter B.
>
> **[7:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=472)** Now if I execute the query again, you'll get the exact same results.
>
> **[7:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=476)** The query now is much shorter.
>
> **[7:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/inner-joins?u=76281980&t=478)** So that's a shortcut technique that you can use to reduce the amount of typing that you need to do when writing select queries, once you start including multiple tables and a join clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (12), [[Microsoft SQL Server|Sql server]] (4), data (4), next (3), [[Windows]] (1)
> **CLI Commands:** make (6), find (4)
> **Env Vars:** sql (4)
> **Analogies:** for instance (3), just like (1)
> **UI Navigation:** scroll down (2)
> **Code Identifiers:** this (1)
> **Definitions:** in other words (1)
> **Best Practices:** best practice (1)

#### Left, right, and full outer joins
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=0)** - [Instructor] The three outer join types all retrieve these same rows as an inner join, plus some additional rows that an inner join excludes.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=9)** If I run a select statement against the person table we can find out how many people there are.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=13)** I'll grab the business entity ID, person type, first name and last name columns from the person table.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=21)** This returns total of 19,972 rows.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=25)** This corresponds to a single row for every person in the table.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=30)** The person type includes a code that defines the kind of person each one is.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=35)** So we have a number of employees with the EM code and if I scroll through here we'll see some additional people that are not employees.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=42)** For instance, we have some independent contractors and some subcontractors and so on.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=46)** Scrolling through the list, you'll see the different types.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=49)** Now we can execute another query against the human resources, that employees table.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=54)** To find information about specifically just the employees, we'll grab their entity ID as well as their job title.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=61)** I'll run lines five and six and press execute and we'll get a total of 290 rows.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=67)** These are just the people that are employees of Adventure Works.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=71)** Now we can merge all of this information together with a table join.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=75)** I have that query listed starting on line number 9 down to 15.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=79)** This will join the person table to the employee table based on the employee ID values.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=85)** Notice that I'm just using the keyword join here.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=88)** So SQL Server is going to use an inner join for this at first, let me highlight all of this on lines 9 to 15 and press execute, so we can see the result.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=96)** This returns 290 rows, so we're only seeing information now about our employees.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=102)** We're not seeing the majority of the other 19,000 other people.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=106)** If I wanted information about all of the people plus the job titles of those people that are employees, I can change this to a left join instead.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=116)** We'll make that change in line 14.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=119)** The terms left and right join simply refer to the order that the tables are identified in your from clause.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=125)** In this query, the person table is the left table and the employee table is the right table, simply because it's named second.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=134)** You can also add the optional keyword outer if you'd like.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=137)** Since technically this is a left outer join.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=142)** This keyword is optional though and it's not required.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=144)** So you'll see it both ways.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=146)** Either left join or left outer join, they're exactly the same thing, so that's the only change I'm going to make to this query.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=152)** Go ahead and highlight all of these lines again and press execute and you'll see the difference.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=157)** Now we get all 19,972 rows again.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=161)** At the top we have the people that are employees so they have their corresponding job title, but if I stroll through here, you'll eventually run out of employees and you'll see just the regular standard people.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=172)** In this case, our subcontractors, they do not have a job title in the employee table, so they get a null value in this column instead.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=180)** So the inner joint is by far the most common type of join that you'll use and the left outer joint is used occasionally.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=187)** The other two outer joints, right and full, are less common.
>
> **[3:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=191)** But here and there you might have a reason to use them.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=194)** If I change this to a right outer join instead.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=197)** and re-execute the query you'll see the results and we're back to 290 rows.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=202)** This is giving us all of the employees plus any additional information that's found in the person table.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=208)** This tells me that we simply don't have anyone in the employee table that is also not represented in the people table.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=214)** If there were, you'd be able to find rows with no values in the business entity ID, person type and first name and last name columns.
>
> **[3:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=222)** Finally, there is a full outer join.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=226)** Again, since there's no records in the employee table that are not related to the person table, this query is going to return exactly the same results as the left join.
>
> **[3:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=235)** Let me highlight this and press execute.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=237)** And we're back to the 19,972 rows.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=241)** In a well normalized database and especially when integrity constraints have been placed on the tables, you might not have a situation where there are unmatched records in both tables.
>
> **[4:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=251)** So that's why a full outer join is not common to see.
>
> **[4:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=255)** So those are the three outer joint.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=257)** Use a left join when you want all of the available information from the first table plus matching details where available from the second.
>
> **[4:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/left-right-and-full-outer-joins?u=76281980&t=264)** A right join will return everything from the second table and matching details from the first and a full outer join will return all records from both tables regardless of matching values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (2), [[Human Resources (HR)|Human resources]] (1), [[Microsoft SQL Server|Sql server]] (1), database (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Cross joins
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=0)** - [Instructor] Most of the time you want to join data tables based on common values to find the information that relates together.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=7)** But you can also join data tables that have no relationship to each other in something called a cross join.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=13)** Cross joins are literally the cross product that you get from combining every record in one table with every record from the other.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=21)** To see how this works, we'll take a look at two SELECT queries.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=24)** One that pulls the Name column from the HumanResources.Department table and the other one that pulls the Name column from the Person.AddressType table.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=33)** Let me highlight both of these and press Execute to see the results.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=36)** At the top, we have these 16 names of our departments.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=40)** Then below that we have the six names of our AddressTypes.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=44)** A cross product would multiply the tables together.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=47)** So you'd have Document Control and Archive, Document Control and Billing, Document Control and Home, and so on.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=55)** You get a single row that paired every version of the department name with every version of the AddressType.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=62)** To create that result, we'll go ahead and write a new query starting on line number seven.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=73)** We'll pull the same two columns, Department.Name and AddressType.Name.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=78)** Since both columns are named Name, let's give them aliases to keep them stray.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=83)** I'll call the first one as DepartmentName and the second one as AddressName.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=94)** Then we'll add our FROM clause.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=95)** The first column is coming from the HumanResources.Department table, and we're creating this as a cross join to the other table.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=107)** That's the Person.AddressType table.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=111)** Because there's no related field in a cross join, you don't need to use an on keyword.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=116)** This is actually the end of the statement.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=118)** Let me execute these three lines now and we'll see the result.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=121)** I get a total of 96 rows.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=124)** That's the 16 rows of the department table multiplied by these six rows in the address type table and you can see we have a pairing of Archive with all of our departments.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=134)** Then I'll scroll down here and I'll see Billing against all of our departments and so on.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=139)** So a cross join is a quick way to get to this kind of multiplied output result.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=144)** This is one of those interesting query tricks, but is it useful?
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=148)** I'd say no.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=149)** This is probably not something that you're likely to need very often, unless of course you're in charge of figuring out a company-wide softball tournament.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=158)** Maybe each department has their own softball team and you want to make sure that every department plays against every other department, and you want to find out how many games will need to be played.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=168)** You can create a cross join to figure out the matchups.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=171)** Because we need to refer to the same table on either side of the cross join, we'll need to use aliases.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=177)** So let's start that on line number 11.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=180)** I'll select the name column from the HumanResources.Department table, but I need to refer to it twice, so I'll use column aliases.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=188)** I'll call the first one A.Name and the second one B.Name.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=196)** Then we'll pull it from the HumanResources.Department table, and we'll call the first instance as A.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=206)** We'll do a cross join to the same table.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=211)** This second instance we'll call as B.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=215)** That finishes the statement.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=216)** I'll go ahead and put a terminating character here at the very end.
>
> **[3:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=219)** Then just to be sure that we're clear with which column is which, we'll rename our two columns up here at the top with their own aliases.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=227)** We'll call the first one as Home Team and the second one as Away Team.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=236)** Now I'll execute the query.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=238)** This returns a total of 256 rows, and this is a cross join between the department name and itself.
>
> **[4:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=245)** But we also don't want any department to play against themselves so I also need a WHERE clause in my statement.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=253)** I'll say WHERE A.Name is not equal to B.Name.
>
> **[4:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=260)** I'll execute the query again and we'll see we're down to 240 rows.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=265)** This result shows every department against every other department throughout the company.
>
> **[4:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/cross-joins?u=76281980&t=270)** So you'll need to play a total of 240 softball games to make sure that everyone gets paired against each other, counting for home games and away games.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), product (2)
> **CLI Commands:** find (2), make (2)
> **SQL:** where (2), select (1)
> **Env Vars:** where (2), select (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Return data from multiple tables
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=6)** - [Instructor] For the third challenge, I'd like you to get some experience joining data from multiple tables to get a fuller understanding of the information stored in the AdventureWorks database.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=16)** In the AdventureWorks database, address information is spread out across three related tables in the person schema.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=22)** The address table stores street and city level information.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=26)** The state province table stores the name of the state or province.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=30)** And the country or region name can be found in its own table.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=34)** I'd like you to combine data from these three tables into a single related row, so that you can easily see the city, state, and region names for each address.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=44)** This will require two INNER JOINs in the same FROM clause.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=48)** This challenge may take a little bit longer than the previous ones, because you'll have to work out how the tables are related, and which columns to include in your query.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=57)** Take your time and remember to execute your query multiple times as you work through the solution, to ensure that you're getting the expected results at each stage.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-return-data-from-multiple-tables?u=76281980&t=65)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), database (2)
> **Env Vars:** inner (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Return data from multiple tables
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=6)** - I hope you are able to write a query that successfully pieced all of the address information together again.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=11)** Let's start up a new query, and I'll work through how I would solve this challenge.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=16)** Now, like always, I like to start by taking a look at the raw data that we have available to work with.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=21)** So I'm going to pull everything from the Person.Address table to get started.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=27)** And I'll just execute the query.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=29)** So this is the raw data that we have.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=30)** And for my final solution, I'm going to use the AddressID column.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=34)** So give me the unique identifier for each address.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=37)** AddressLine1 gives us the street level data.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=40)** AddressLine2 is mostly null here, but if I scroll through, there's apartment numbers and other things like that that might be useful for the address.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=47)** So, I'll include that as well.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=49)** And then we also have the name of this city.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=51)** in the city column there.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=53)** For the StateProvinceId name though we need to go to a different table.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=57)** We only have identifying numbers here.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=59)** So, this column is not going to be useful in the final solutions results simply because I just need the name instead of this ID number.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=67)** So, I'm actually going to get started writing my query using these first four columns.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=72)** Let's come down couple of lines here, and we'll get started on that.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=75)** So, we'll select, from the address table, the AddressID and then the AddressLine1,
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=87)** the AddressLine2 column, as well as the City column.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=96)** And I'm actually going to move down and put my From clause down here, and we'll just get started with this as well.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=100)** So, FROM Person.Address,.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=104)** Now at this point we have a complete SELECT statement.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=106)** I can actually just run all of these lines here and execute 'em to make sure that I'm on track.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=110)** So yep, I'm indeed getting the first four columns for my final solution.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=115)** Okay, let's go ahead and take a look at the next table now that we need to work with.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=118)** And that's going to be the StateProvince table.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=123)** - And I'll run this first line here, just to take a look at how that's stored in the database.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=127)** So, in the StateProvince table, we have the StateProvinceID column, and this is the column that's joined back to the address table.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=135)** And if I take a look here, we have the Name column over here.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=137)** This will give us the name of the state or the province that the address is in.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=141)** So, that's going to how we link these two data tables together again.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=145)** Let me go ahead and add that into our query.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=148)** So, from the StateProvince table we're going to use the Name column.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=156)** And I'm actually going to give this an alias.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=157)** I'll call this As 'State or Province Name'.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=164)** Then we need to append our FROM clause here to add in the join.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=167)** So we're going to join the Person.Address table to the StateProvince table with an INNER JOIN.
>
> **[2:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=174)** So we're going to INNER JOIN Person.StateProvince.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=180)** And that's going to be on the related field is the StateProvinceID field in both tables.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=186)** So Address.StateProvinceID is equal to StateProvince.StateProvinceID.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=200)** And again, we have a complete statement here, so I can run it here just to make sure that I'm getting proper information from across both of those tables.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=206)** Execute that.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=208)** And we're looking good.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=209)** We've got our state or province name appended onto our address information.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=213)** So next up, we need to add in the country or region.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=216)** So let me take a look at that table here from Person.CountryRegion, and I'll select just the information out of that table by itself.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=227)** So this gives us the country region codes, and that matches it to the actual name or the country or region that our addresses are from.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=234)** So this is going to be the column that we're going to append into our query.
>
> **[3:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=238)** Let go ahead and add that one in now.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=241)** So from the CountryRegion table and the Name column there, let me also give this an alias while I'm here.
>
> **[4:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=249)** We'll call it AS 'Country or Region Name'.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=257)** And then we're going to add that into our FROM clause here.
>
> **[4:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=260)** So it'll come down and we'll put another INNER JOIN.
>
> **[4:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=264)** And this time we're inner joining to the Person.CountryRegion table.
>
> **[4:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=271)** And we need another ON clause.
>
> **[4:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=273)** So we'll say ON, and this time they're related based on the CountryRegion code in both of the tables.
>
> **[4:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=279)** So it's going to link the StateProvince table .CountryRegion code is equal to the CountryRegion table.CountryRegion code.
>
> **[4:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=298)** And now I should be able to run all of this, and oh, looks like I have a typo here.
>
> **[5:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=304)** CountryRegion, CountryRegion, countryRegion.
>
> **[5:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=309)** It says I have a typo here with "Retion" with a t, and I just need to find out where that is.
>
> **[5:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=315)** Oh, it's right up here in my SELECT statement.
>
> **[5:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=317)** There it is.
>
> **[5:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=318)** Took me a moment to find it.
>
> **[5:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=319)** Okay, CountryRegion.Name.
>
> **[5:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=322)** All right, let me go ahead and highlight that and press execute.
>
> **[5:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=324)** All right, and now we're getting results again.
>
> **[5:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=326)** So I have my AddressID number, Line1, Line2, the City name, the state or Province Name, and the Country name.
>
> **[5:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=334)** So the last thing I might want to do here is just add an ORDER BY here at the end.
>
> **[5:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=338)** We'll just order everything by the AdressID that way everything is in a nice logical sequence.
>
> **[5:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=347)** And let me go ahead and highlight all of this now and press execute.
>
> **[5:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=351)** And there's my final results.
>
> **[5:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=352)** So I have a AddressID in a logical sequence, AddressLine1 and Line2, City, State, and Country for every address in the entire database.
>
> **[6:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=360)** So that is my solution to the challenge.
>
> **[6:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-return-data-from-multiple-tables?u=76281980&t=363)** I'll go ahead and save this as challenge three complete complete.sql, and you can compare how I got to my solution against the solution that you developed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (2), database (2), [[SQL]] (1)
> **Env Vars:** inner (3), join (3), select (2), order (1)
> **SQL:** inner join (3), select (2), order by (1)
> **CLI Commands:** make (2), find (2)
> **Speakers:** - i (1), - and (1)
> **File Paths:** complete.sql (1)
> **Code Identifiers:** countryregion (1)

#### Solution: Join data in multiple tables
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=0)** - [Instructor] For this challenge, we need to review some employee training records and locate employees that have not yet taken any additional training courses.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=14)** So we're going to start by selecting everything.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=16)** We'll take a look at the two tables that we have to work with.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=20)** So the first table is Employees.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=22)** I'll just select all the columns out of that.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=25)** This table has the EMPLOYEEID column, which is the primary key, as well as the employees name.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=31)** You see here we have lots of different employees to work with.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=34)** Let's take a look at that other table called TrainingSessions, and I'll test the code again.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=42)** So this shows me that the TrainingSessions table has the primary key here, SESSIONID.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=47)** We also have the foreign key column EMPLOYEEID that links back to the Employees table.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=53)** We have the specific course or the SESSIONNAME and the COMPLETIONDATE when the employee finished that course.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=59)** So that's all the data that we have to work with.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=61)** And so now we just need to start piecing the records together and relating them across the related fields.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=68)** So we're going to select the EmployeeID column from the Employees table.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=77)** Also from the Employees table, we'll grab the EmployeeName.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=84)** And then from the TrainingSessions table, we'll get the SessionID.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=93)** Now we need to put in our JOIN here, so we'll say FROM TrainingSessions, and I'm just going to start with a standard join.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=99)** So I'll say FROM, and actually we'll change this to, FROM Employees, JOIN TrainingSessions, ON Employees.EmployeeID = TrainingSession.EmployeeID.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=121)** And I just broke it on this equal side just so it stays on the screen.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=124)** Otherwise, if I put it all on one row, it goes off the screen, you can't see it all.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=129)** So I'll just move that down a row so it's easier to see.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=132)** Okay, so let me test my code now.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=134)** And, oh, it looks like I have a typo there, TrainingSessions.EmployeeID.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=141)** Okay, so here's the data that's all joined together, and we can see each of our employees, and the sessions that they have completed by their ID number.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=151)** The problem with this is that it's not showing me any information about employees that have not taken any additional training sessions, and that's because this JOIN is the same as an INNER JOIN.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=164)** So an INNER JOIN is going to only show me records that have related fields in both tables.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=170)** So it's only showing me employees that actually have records inside of this TrainingSessions table.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=176)** So what we need to do is change this from an INNER JOIN to a LEFT JOIN, and that's going to show me all of the employees, regardless of whether they've taken any additional training or not.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=187)** And so this time when I run the query, we can see all the people that have related information in the Sessions table.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=194)** And then we also have some people that have not taken any sessions.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=198)** And so those are represented here with nulls inside of this SESSIONID column.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=204)** So now that we have that information, we can filter the table out to only show me those rows.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=210)** So, we'll come down here after the FROM clause, and we can type in WHERE, the SessionID IS NULL.
>
> **[3:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=219)** And now if I test my code again, it shows me just those records of the people that don't have any additional training sessions.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=226)** And so that is my solution to the challenge.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=229)** It requires a LEFT JOIN so that we see all the employees, and then we use a WHERE clause to filter that column to only show me the employees that don't have any sessions by saying IS NULL here.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-join-data-in-multiple-tables?u=76281980&t=241)** So this is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Env Vars:** join (8), inner (3), employeeid (2), sessionid (2), left (2)
> **SQL:** join (3), inner join (3), left join (2), where (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Group Records

[↑ Back to Table of Contents](#table-of-contents)

#### Understand record grouping
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=0)** - [Instructor] The queries that we've explored so far have all returned a number of rows from the database.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=5)** We can take a different look at the data by grouping those rows together based on common attributes in order to get summary details and other useful kinds of information out of the database.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=15)** My favorite way to think about grouping records in a query is to imagine a standard deck of 52 playing cards.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=22)** Each card in the deck will represent one row in a query's result.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=27)** You can then take that deck of cards and separate them out by color.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=30)** Make one pile for black cards and another pile for red cards.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=35)** You've just created two groups from the original deck of cards based on their color.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=41)** Or you could group the cards into four groups, one for each suit.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=45)** That would give you a pile of club cards, spade cards, hearts, and diamond cards.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=51)** Or you could group the cards based on their value.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=54)** That would leave you with 13 groups with four cards each.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=58)** You'd have four aces, four kings, four queens, and so on through the rest of the deck.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=63)** That's three different ways that you could group the cards in a standard deck of playing cards and each one can give you a different insight into the makeup of the deck.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=72)** Applying groups to the rows returned by a database query can do the same thing for understanding your data from different perspectives.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=79)** In order to create groups in a query, you'll add a new clause to the select statement, the GROUP BY clause.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=85)** The GROUP BY clause follows the FROM clause, and in it, you simply list the columns that you'd like to use for consolidating records.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=93)** This will lump all of the rows that the query would have returned into buckets, like our individual piles of playing cards.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=100)** Once that happens, you can then use aggregate functions to perform some calculations on the rows that are contained in each bucket.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=107)** For instance, you can count up how many rows are in each group, or calculate the sum total, or find the minimum, maximum, or average value of all of the rows in each group.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=119)** In the playing card example, we might have a query output that looks something like this.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=123)** If we were to group the cards based on color and count the cards in each group with an aggregate function, the results grid would show a single row for each color and display the count of cards in each group.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=135)** Or if we grouped by suit, the results would show four rows, one for each suit, and the counts would update.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=143)** And if we group the query results by card value, then we wind up with 13 rows to the results like this.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=149)** And that's how the GROUP BY clause works in a select query.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=152)** It takes the standard query output and then consolidates rows based on a common value.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/understand-record-grouping?u=76281980&t=158)** Then, it provides aggregates, or summary statistics, across those groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2), [[Representational State Transfer (REST)|Rest]] (1), [[Statistics]] (1)
> **SQL:** group by (3)
> **Env Vars:** group (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** imagine (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Use GROUP BY and COUNT
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=0)** - [Instructor] In the AdventureWorks database, there's a table called Person.Address.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=5)** Let's go ahead and take a quick look at the data that it contains by running a simple SELECT statement against it.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=13)** When I execute the query, you'll see that this table stores over 19,000 individual street addresses.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=19)** One of the columns here is the City column, and this is the name of the city that the address is in.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=25)** Here at the top, we have a whole bunch of addresses in the city of Bothell.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=29)** There are potentially many addresses for each city, but if you scroll through the grid, you'll quickly see that the rows aren't in an order that makes it easy to view.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=37)** We can add an ORDER BY clause into the query to help you visualize the number of addresses in each city.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=44)** I'll add that onto line number three.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=47)** We'll ORDER BY the city name.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=49)** Now, when I execute the query again, the cities will be alphabetized so it makes it easier to see how many addresses you have in each city.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=57)** But to have the database do this work for us and return the answer to the question, how many addresses are in each city, we can add a GROUP BY clause to the query.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=66)** I'll do that online number three by moving the ORDER BY clause down.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=70)** You want to make sure that your GROUP BY clauses immediately follow the FROM clause.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=76)** So we'll group our data by city and then order it by city, alphabetized.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=81)** If I execute the query again, well, this time we get an error.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=85)** The error reads that they call 'em Person.Address.AddressID is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=96)** When you run a query that includes a GROUP BY clause, every column that you ask for in the SELECT clause needs to either be included in the GROUP BY clause or used in an aggregate function.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=107)** Since our GROUP BY clause only includes the City column and the asterisks character in the SELECT clause is a placeholder for every column in the table, there are a lot of columns that aren't being used.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=119)** So we need to clean this up a bit and be more specific about what columns we want returned.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=124)** I'll just select the City column and we'll leave everything else as is.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=128)** This time we get results back.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=131)** It shows a total of 575 rows which are all of the unique city names, but we do need to be careful here.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=138)** This is simply grouping each city by the name, and we ran into this issue earlier in the course where multiple cities around the globe can have the same name.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=146)** So let's also add in the state/province ID column to the query to separate cities that might have the same name but are in different states or provinces.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=157)** I add that into the SELECT statement, and once again, I get the same error.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=160)** We need to also include this in the GROUP BY clause.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=163)** so we'll group by state/province ID as well.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=168)** Now when I execute it, we're up to 613 rows.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=172)** This is one row for each unique city in the database.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=176)** Now at this point you might be thinking, "I could have gotten to this exact same information using a SELECT DISTINCT query," and you'd be absolutely correct.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=184)** But what we're not seeing in this result using the GROUP BY clause is that each of the rows represents a bucket of records.
>
> **[3:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=191)** All of the original 19,000 rows are still inside of this result, but we're only seeing the group containers in this grid.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=200)** We can dig into the buckets to start to work with all of the rows inside using an aggregate function.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=206)** The easiest thing to do here would be to count up how many records are in each bucket.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=211)** To do that we'll add another column to the SELECT statement.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=216)** I'll say Count, and then in parentheses, the asterisks character.
>
> **[3:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=222)** This'll add a third column to my results that'll count up the number of rows in each bucket.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=227)** Let's press the execute button and you'll see that gets added over here.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=231)** This count represents the number of addresses in each city.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=234)** It might be interesting to sort the results based on this value so that we can see which cities had the most addresses.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=240)** While we're at it, let's also give this column a proper alias so it doesn't say No column name here at the top.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=246)** I'll turn this to say Count * AS CountofAddresses.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=254)** Then in the ORDER BY clause, we'll change it from ORDER BY City to ORDER BY CountofAddresses Descending.
>
> **[4:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=267)** This will place these cities with the highest counts at the top of the list.
>
> **[4:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=272)** Now we're getting to some interesting statistics.
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=275)** I can see that the city with the most addresses is London with 434 addresses.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=281)** Paris is the second with 398.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=284)** And I thought this was interesting, the city of Bellingham.
>
> **[4:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=286)** The city that I live in is actually fifth on the list with a total of 213 addresses.
>
> **[4:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=292)** So there's our first aggregate query that uses a GROUP BY clause to group all of the rows by a common value, in this case, the city name and state/province ID.
>
> **[5:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-group-by-and-count?u=76281980&t=301)** Then we're counting up the number of rows that appear in each group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2), [[Statistics]] (1)
> **Env Vars:** group (9), select (6), order (6), distinct (1)
> **SQL:** group by (9), select (6), order by (6)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Aggregate functions
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=0)** - [Instructor] Once you've bundled several rows together with a group by clause in a query, you can perform aggregate calculations against all of the rows that are in each group.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=9)** Aggregate functions are most commonly used in the select statement of a query to create additional columns that will appear in the results.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=17)** To use them, you write the name of the function and inside of parenthesis, the data table column that you want to process.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=24)** You'll also almost always want to add an alias with the AS keyword so that the results clearly identify what the values represent.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=32)** So what are the aggregate functions that are available in SQL Server?
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=36)** The most common is COUNT.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=38)** COUNT will return the number of items in a group and since it doesn't matter what column you count, you'll use the asterisk in parenthesis.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=46)** By default, count will count everything even duplicate values and null values.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=52)** If you want to remove these from the total, you can use the DISTINCT keyword and the column name that you want to evaluate and it'll return the count of unique non-null values found in that specific column.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=63)** COUNT returns and integer.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=65)** But if you need to count something that might exceed 2 billion items, use COUNT_BIG instead.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=71)** The second most common aggregate function is SUM.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=75)** SUM will add up the total value of numeric columns in a group.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=79)** Because you need to identify which column you want to SUM, you can't use the asterisk like you can with the counting function.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=86)** You need to specify the column name in parenthesis.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=89)** SUM will add up all of the values ignoring nulls by default and you can also add the DISTINCT keyword if you'd only like to sum the unique value.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=98)** The AVG function will calculate the average value of all items in a group.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=103)** MIN and MAX don't calculate anything, but they do identify the lowest and highest numerical value found in a column.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=111)** Interestingly, both of these will also work with text data and it'll return the first and last alphabetical value as well according to the correlation settings of the database.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=121)** There are also aggregate functions for statistical calculations of standard deviation, variance, and the variance for a population.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=129)** Finally, there's a new class of aggregate functions that were introduced with SQL Server 2019 and extended in 2022.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=137)** These aggregate functions will find approximate values and are targeted for use in big data applications where you need to get a rough idea of the measurement when the data set contains millions of rows or more.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=150)** In this situation, you may be more concerned with getting an answer very quickly that is close enough to be actionable rather than spending all day to get an exact value.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=160)** The first aggregate function that falls in this category is APPROX_COUNT_DISTINCT.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=166)** This will give you a quick count of approximately how many rows fall into each group.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=171)** The other two approximate aggregate functions deal with calculating rank percentile across large data sets.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=177)** One function will calculate the approximate continuous percentile, and the other one will calculate the approximate discrete percentile.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=185)** Both of these functions are useful for identifying the median value in a group or the first and third quartile, or other breakpoint values that are useful in a statistical analysis.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=196)** Again, these functions return a number that is reasonably accurate, but may not be exact.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/aggregate-functions?u=76281980&t=202)** So they're best used in very large data sets that you need to process quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft SQL Server|Sql server]] (2), database (1), [[Big Data]] (1), [[Statistical Analysis]] (1)
> **Env Vars:** sum (4), count (3), sql (2), distinct (2), count_big (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Explore data with SUM
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=0)** - [Instructor] Aggregate functions are ideal for getting high-level summaries of financial data.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=5)** That's because in a typical relational database, sales numbers are often recorded individually.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=11)** You might have the total profit for each store recorded on a daily basis.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=15)** Using aggregate functions, you can find the total profit for the week, or for the month, or for all of the stores within each sales region.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=24)** To do that, you only need to group your data into different kinds of buckets.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=28)** Let's take a look at the information stored in the AdventureWorks database, and then we'll find it inside of the sales order detail table in the sales schema.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=39)** Executing the query will show me a single row for every line item from each sales order.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=45)** The first 12 rows that we have in this data set, all correspond to the same sales order.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=50)** It's number 43659.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=53)** This order had 12 lines.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=55)** It was for 12 different products that we can see listed over here in the Product ID column.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=60)** Then we have the number of items ordered for each product, and that's the Order Quantity column.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=65)** And scrolling over here to the right, we have the line total for each line.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=70)** Now we can use a GROUP BY clause in the query to group all of the records in this table together based on the common sales order IDs.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=78)** Then for all of the rows that correspond to the sales order, we can summarize all of this information to give us a sum total of the amount of the order, or give us the total number of items that the order contained, or count up the number of unique items that were ordered.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=94)** To do that, we'll modify our SELECT query up here at the top.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=98)** First, I need to be more specific about what columns I want returned.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=103)** I want to see the original sales order ID column.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=109)** Then I want to see the total value for the order, so I'll use the SUM aggregate function applied to the Line Total column.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=118)** I'll give this new column an alias, I'll call it as Order Total.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=126)** Next, I also want to see how many items the order contained.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=130)** We'll use another SUM function applied to the Order Quantity.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=136)** I'll name this column as Number of Items.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=142)** And finally, I want to see how many unique items were in each order.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=146)** For this, I'll use the COUNT function.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=149)** We'll count up the distinct product IDs.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=157)** I'll name this column as Unique Items.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=164)** That finishes the SELECT clause.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=165)** Now, we need to remember to group all of the rows together by the sales order ID.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=170)** I'll add the GROUP BY clause after FROM.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=176)** And I'll type out the name of the column, Sales Order ID.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=179)** All right, let's execute the query, and take a look at the results.
>
> **[3:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=182)** Now I have a good summary about every unique order in the database.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=186)** I have the total for each order, and how many total and unique items the order contained.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=192)** If you wanted to see which order was the most valuable, you can add in an ORDER BY clause to the query.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=198)** We'll do that after GROUP BY.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=202)** Let's ORDER BY the Order Total descending.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=207)** Executing the query one more time reveals that order number 51131 was the most valuable order at a little bit over $163,000.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=218)** So that's one way to get some insight into the data by grouping all of the records into buckets based on order IDs.
>
> **[3:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=225)** We can now apply different groupings in aggregate functions, and take an entirely different look at exactly the same data.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=232)** Let's return to the original full data set.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=234)** I'll start a new query online number 10.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=237)** Running a SELECT statement against all of the columns from the table shows us all of those columns again.
>
> **[4:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=243)** Part of that is the product that was ordered as well as the number of items ordered.
>
> **[4:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=248)** We can use this data to find some information about the popularity of each of the products that AdventureWorks sells.
>
> **[4:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=255)** Let's change this SELECT statement to include the product ID column.
>
> **[4:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=261)** And I'll also SUM the order quantity.
>
> **[4:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=267)** I'll name this column, Total Quantity Sold.
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=275)** Then I'll add my GROUP BY clause after FROM.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=280)** And we'll group everything by the Product ID.
>
> **[4:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=283)** Finally, I'll choose to order everything by the Total Quantity Sold descending.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=293)** Executing lines 10 through 14 will give me the summary details.
>
> **[4:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=298)** It tells me that product ID number 712 is our most popular product with 8,311 units sold.
>
> **[5:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=305)** If we wanted to find out more information about exactly what this product was, we would need to add in information from the related table, Production.Product.
>
> **[5:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=315)** That'll require joining the data tables together.
>
> **[5:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=318)** To start that modification, we need to be more specific about our column names, so not just the product ID column, but this is specifically coming from the Sales Order Detail table.
>
> **[5:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=333)** Then I'll add in the Product table and the Name column from that table.
>
> **[5:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=338)** And we also need to modify our SUM calculation, so we're not just summing the order quantity column, but we're summing the sales order detail tables order quantity column.
>
> **[5:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=348)** That finishes the modifications to our SELECT statement.
>
> **[5:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=351)** Now, we need to add in our Inner Join.
>
> **[5:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=353)** We'll do that in the FROM clause.
>
> **[5:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=357)** We're going to Inner Join to the table called Production.Product.
>
> **[6:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=363)** And that's going to be on a field called Product ID in both tables.
>
> **[6:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=380)** Finally, we need to update the column names in the GROUP BY clause.
>
> **[6:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=383)** So this is the SalesOrderDetail.ProductID column.
>
> **[6:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=391)** And I need to add in the Product.Name column.
>
> **[6:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=397)** So that finishes our modified SELECT statement, and we did add a bit more complexity to the query, but hopefully by stepping through the changes, it made it a little bit easier to follow along.
>
> **[6:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=406)** Now, let's execute lines 10 down through 17, and take a look at the results.
>
> **[6:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=411)** Now we can see the product name alongside the product ID number, and can easily see that the AdventureWorks Corporate Logo Cap is the best selling product.
>
> **[7:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/explore-data-with-sum?u=76281980&t=421)** So that's a couple of different ways that you can get to multiple perspectives on the story that your data is telling by simply applying different groupings and aggregation functions to the same set of input records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (18), data (8), database (3), [[Microsoft Products|Products]] (2), [[Financial Data]] (1)
> **Env Vars:** select (6), group (5), sum (4), order (2), count (1)
> **SQL:** select (6), group by (5), order by (2)
> **CLI Commands:** find (4)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Filter groups with HAVING
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=0)** - [Instructor] When you want to filter out rows from a query, you use a WHERE clause.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=5)** But when you want to filter out entire groups from a GROUP BY query's result, you'll use the HAVING clause.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=12)** Let's see how this works by taking a look at the Production.Product table.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=22)** This table lists out every product, and one of the columns describes each product's Color.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=28)** To find out how many products that we have in each Color, we can write a query that uses a GROUP BY clause and an aggregate function.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=37)** I'll modify my SELECT query to include the Color column, and I'll use a counting function to count up all the rows.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=48)** I'll name this new column NumberOfProducts.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=54)** Then after the FROM clause, we'll GROUP BY Color.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=59)** Executing the query shows me how many products we have in each Color.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=64)** Now, we have a number of products that don't have a Color specified.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=68)** They're listed here with the Color NULL, and we can see that there's a total of 248 of these items.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=73)** To filter out all of these records, we can use a WHERE clause.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=77)** The WHERE clause needs to go above the GROUP BY clause, so I'll move that down and put the new WHERE clause on line 4.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=85)** I'll say WHERE the Color IS NOT NULL.
>
> **[1:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=90)** Executing the query again removes that row from the result.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=94)** Now, since all the rows where the Color was NULL have been filtered out, there are no rows in that group, so the group is removed.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=101)** But what if I wanted to filter these results and only see the Colors that have more than 25 products?
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=107)** I can't use a WHERE clause for that since the WHERE clause only evaluates each row within the group.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=114)** The count of rows is only an attribute of the entire group.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=118)** It's not an attribute of each individual record.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=122)** So this is when you would turn to the HAVING clause.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=125)** The HAVING clause is placed after GROUP BY.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=129)** In it, you supply predicates that can be evaluated as true or false for each of the groups.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=135)** And then groups that don't meet the criteria are filtered out of the final result.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=140)** However, there's a bit of a catch.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=142)** If we wanted to filter these results to just see the Colors that have more than 25 products, you might write it out like this, HAVING NumberOfProducts greater than 25.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=157)** This query makes reference to the alias that was created for the second column of the list, and we see it in the results here.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=163)** However, if we try and execute the query, we're going to get an error.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=166)** It says that there's an invalid column name, NumberOfProducts.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=170)** This is because the query engine actually processes the HAVING clause before it gets to the SELECT clause.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=177)** And since the alias isn't defined until the SELECT clause is processed, the query engine doesn't recognize the alias as a valid name yet.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=186)** So instead of saying HAVING NumberOfProducts greater than 25, we simply need to perform the aggregate calculation again.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=193)** I'll change this to HAVING COUNT of star greater than 25.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=198)** And with that change made to the query, we get back to the final result, showing the five Colors that are used by more than 25 products.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=206)** So remember, when grouping records together to get summary statistics with aggregate functions, use the WHERE clause to filter out individual rows from the group.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/filter-groups-with-having?u=76281980&t=216)** And you'll use the HAVING clause to filter entire groups from the final result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6), product (3), [[Statistics]] (1)
> **Env Vars:** where (8), having (8), group (5), select (3), null (3)
> **SQL:** where (8), having (8), group by (5), select (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Obtain order summaries
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=8)** And this time we're going to use aggregate functions to get summary calculations.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=13)** The Sales.SalesOrderHeader table contains information about every order that's been made.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=19)** This includes the customer ID that placed the order and the total amount due.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=25)** Since many customers have placed multiple orders, I want you to summarize this data to find the customers that have spent the most money at AdventureWorks.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=33)** I'd also like to know their lowest, highest, and average purchase amount.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=38)** You'll need to use what you've seen with the SUM function and apply it to the MIN, MAX, and AVG functions to find these values.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=46)** Finally, include the actual first and last name of each customer.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=50)** You'll need to create a join to the Person.Person table, but the related columns have different names in both tables.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=57)** So here's a hint.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=59)** The related field is Sales.OrderHeader.CustomerID is equal to Person.BusinessEntityID.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=67)** This challenge should take about 5 to 10 minutes to complete, depending on how deep a dive you want to take into the sales history of each customer.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=75)** I encourage you to dig around and see if you can come up with any additional insights.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-obtain-order-summaries?u=76281980&t=80)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Env Vars:** sum (1), min (1), max (1), avg (1)
> **CLI Commands:** find (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Obtain order summaries
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=0)** - [Instructor] I hope you are able to obtain the sales summary statistics for each of the Adventure Works customers.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=11)** Let's take a look at the solution.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=13)** I'm going to first select everything out of the table that we're working with.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=17)** So let's start from Sales dot SalesOrderHeader.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=22)** And I'll just execute that, take a look at the raw data.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=25)** So looking down here, I see that we have 31,465 orders that we have information on.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=31)** We have the individual order ID, the date that the order was placed, the due date and ship date.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=37)** Let's scroll cross over here and see what else we got on this table.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=40)** We've got the sales order number, purchase order numbers.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=42)** Not going to need those.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=43)** But we also have the CustomerID.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=45)** So there's the customer that placed the order.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=47)** We'll need to know that, so we can aggregate all of our customers together to find out their total orders history.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=53)** Let's scroll across and see what else we've got in here.
>
> **[0:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=56)** Some address information, credit card.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=58)** We're not going to need any of that.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=59)** But there we have some totals.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=61)** So we have the subtotal for the order, the tax amount, the amount spent for freight or shipping.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=67)** And finally, the TotalDue for the order.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=70)** So this is the other column that we're going to be making a use of inside of our final solution.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=75)** Okay, so now we know what columns we're going to be using.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=77)** Let's go ahead and get started.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=78)** So I'm going to select the CustomerID column.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=84)** And I also want the TotalDue.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=88)** Now I want to SUM up the totals for each customer for all of the orders that they've spent.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=92)** So I'm going to apply the SUM function to that.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=95)** So I'll SUM up the TotalDue.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=99)** And let's give this an alias.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=101)** I'll call this as TotalPurchaseAmount.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=106)** And I also asked for the average MIN and MAX of their orders.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=111)** So we can use the AVG, MIN and MAX functions to get all of that.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=115)** And these get applied exactly like the SUM function.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=117)** So AVG will give us the average TotalDue.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=122)** And I'll name this AveragePurchaseAmount.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=128)** And then I'm also going to use the MIN and the MAX function.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=132)** And in fact, these are all almost identical, so I'll just go ahead and type them in, TotalDue as minimum.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=140)** Actually, let's call this LowestPurchaseAmount.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=145)** And then I'll use the MAX function to get the HighestPurchaseAmount.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=154)** There we go.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=155)** Okay, so that is the four columns that I need to get me the aggregate calculations to get the total, average, lowest and highest purchase amount across all of each customer's orders.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=166)** Now we just need to specify where these are coming from.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=168)** So this is all coming from the Sales dot SalesOrderHeader table.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=173)** Oh, not SalesOrderDetail, SalesOrderHeader.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=176)** And we need to GROUP BY.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=181)** We're going to group all of the orders by the customer ID.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=186)** Let's also apply an order here.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=189)** So order everything by the.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=192)** Now I don't want to order it by the customer ID, 'cause I don't want to see them in numerical sequence by customer.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=197)** I want to see the customers that had the highest total purchase amount.
>
> **[3:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=201)** So I need to order it by this calculation right there.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=204)** So I'll just copy that and paste it in there.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=207)** So we're going to order by the SUM TotalDue.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=209)** If I just leave it like this though, it's going to go lowest to highest.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=212)** I want to see the people that have spent the most, so I will sort it descending.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=217)** So I'll type in the DESC keyword there.
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=220)** And I think this is enough to get started.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=221)** Let's go ahead and highlight three down to 10 and press Execute.
>
> **[3:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=224)** And there we go. We're getting some good data here.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=226)** So we've got our customer ID the total purchase amount, average purchase amount, lowest and the highest purchase amount for each of the orders placed by each customer.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=236)** So this gives us lots of statistical information about each customer.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=239)** And now I ask to get also the name of our customer, so we can see that alongside their customer ID.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=246)** And that information is going to come out of the Person dot Person table.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=250)** And I'm just going to go into our Tables folder over here and take a look at that real quick.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=254)** So I do Person dot Person and expand Columns.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=258)** Now, if you remember, I gave you a hint that the CustomerID that's in the SalesOrderHeader table matches to the BusinessEntityID column in the Person table.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=269)** So that's the field that we're going to be making our join on as we join our two tables together.
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=275)** So let's go ahead and add in those additional columns up here into our SELECT statement.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=280)** I want to pull out the person's FirstName field as well as their LastName.
>
> **[4:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=285)** You can grab any other columns that you'd like, but I'll just use those two.
>
> **[4:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=288)** So I'll pull the FirstName column as well as the LastName column.
>
> **[4:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=296)** And because there's no FirstName and LastName column inside of the SalesOrderHeader table, I don't technically need to use the table name here.
>
> **[5:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=305)** I'll just leave it off to begin with.
>
> **[5:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=306)** Then we'll see what happens.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=307)** It is kind of a best practice though to very specifically denote which tables your columns are coming from.
>
> **[5:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=313)** But I'll just leave those off for now, and we'll see what happens.
>
> **[5:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=316)** So it's like the FirstName column and the LastName column.
>
> **[5:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=319)** And these are going to be coming out of the Person table.
>
> **[5:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=321)** So we need to do a join in our FROM clause.
>
> **[5:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=323)** We're going to INNER JOIN Person dot Person.
>
> **[5:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=329)** And then below that, we'll say how they're related.
>
> **[5:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=331)** So ON SalesOrderHeader dot CustomerID is equal to Person dot BusinessEntityID.
>
> **[5:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=345)** And that'll link those two tables together.
>
> **[5:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=348)** And I think we're good.
>
> **[5:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=349)** Now the only thing we need to do here, if I were to run it right now, I would get an error.
>
> **[5:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=353)** In fact, I'll just demonstrate that.
>
> **[5:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=355)** Let me move this down, so we can the full set of queries right there.
>
> **[5:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=359)** So if I were to run this query right now and press Execute, we'll get an error, because I have a comma that's missing.
>
> **[6:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=365)** I have a double comma right there.
>
> **[6:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=367)** Let me get rid of that one.
>
> **[6:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=368)** That was not the error that I expected though.
>
> **[6:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=369)** Let me execute it again.
>
> **[6:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=371)** This time, this is the error I expected.
>
> **[6:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=373)** The column Person dot FirstName is invalid in the select list, because it's not contained in either the aggregate function or the GROUP BY clause.
>
> **[6:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=381)** What that means is that we added in these two additional columns into our query.
>
> **[6:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=385)** They are not part of an aggregate function like these four columns are.
>
> **[6:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=389)** So they need to be listed in the GROUP BY clause as well.
>
> **[6:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=392)** So we'll come down here and say CustomerID comma FirstName, comma LastName.
>
> **[6:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=398)** We'll just fill that in there.
>
> **[6:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=400)** All right, let's go ahead and highlight all of that again and Press Execute.
>
> **[6:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=402)** And there's our results. We got our customer ID, the first and last name as well as their total purchase history.
>
> **[6:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=408)** And so since we're sorting it descending by the TotalDue, we can see that Hannah Clark is the customer that spent the most money at $14,691.
>
> **[6:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=418)** And it looks like she is just edging out Taylor Jones that spent about a dollar less.
>
> **[7:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=423)** So that is a good solution.
>
> **[7:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=425)** We also asked for some other interesting information.
>
> **[7:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=428)** Let's go back into the original SalesOrderHeader table and just take a look at that again and see what else we can find in here.
>
> **[7:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=435)** We've got a couple of columns.
>
> **[7:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=437)** We've got, in fact, over here on the left, we have the order dates.
>
> **[7:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=440)** So one thing that might be interesting to know is what date the first order was placed or the last order was placed.
>
> **[7:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=445)** We can pull that information out of the OrderDate column.
>
> **[7:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=449)** And then over here on the far right, we also have information about how much people have spent on freight.
>
> **[7:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=454)** So we might want to add that into our query as well.
>
> **[7:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=457)** And we can just do that by adding in additional columns to the query.
>
> **[7:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=460)** So for instance, I could say MIN of OrderDate.
>
> **[7:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=464)** And we'll call that as FirstOrder.
>
> **[7:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=467)** And we can get the SUM of the Freight.
>
> **[7:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=472)** And this is going to be the TotalFreightCharges.
>
> **[7:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=478)** And if I press the Execute button again, it'll append those onto our final results.
>
> **[8:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=483)** So let me go ahead and bring this back up here, so we can see it here.
>
> **[8:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=487)** So then we have, oh, I ran the wrong query.
>
> **[8:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=490)** Let me go ahead and select three down to, we're all the way down to, looks like 16 now.
>
> **[8:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=500)** So let me highlight lines three down to 16.
>
> **[8:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=507)** All right, there we go.
>
> **[8:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=508)** So customer, first and last name, total purchase amount, average, lowest, highest purchase amount.
>
> **[8:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=513)** We can see the first date that each order was placed or each customer placed their first order on this specific date and how much money they spent on freight.
>
> **[8:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=521)** So it's easy ways we can add in additional details into our query though.
>
> **[8:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=525)** And then one more thing we might want to do is be real specific about where these columns are coming from.
>
> **[8:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=530)** And we could do that by using aliases on our table names.
>
> **[8:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=533)** So I could say Sales dot SalesOrderHeader AS, and I'll just call this column SOH for SalesOrderHeader.
>
> **[9:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=541)** And we can INNER JOIN that to the Person dot Person table.
>
> **[9:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=543)** And we'll call that as P.
>
> **[9:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=545)** And then we'll just go through each of our columns, and we'll give it the table name or the table alias that we just defined here.
>
> **[9:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=552)** So the CustomerID is coming out of the SalesOrderHeader table.
>
> **[9:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=555)** The First and LastName are both coming out of the Person table.
>
> **[9:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=558)** We'll give that abbreviation.
>
> **[9:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=561)** The SUM of the TotalDue.
>
> **[9:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=563)** Those are all coming out of the SalesOrderHeader.
>
> **[9:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=565)** So we can put SOH for each of these.
>
> **[9:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=568)** And we'll do the same thing for all.
>
> **[9:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=570)** In fact, I'm just going to copy this to my clipboard to make the typing a little bit easier.
>
> **[9:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=573)** Go ahead and paste that in for each of these.
>
> **[9:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=578)** And then we've got the Sales dot SalesOrderHeader join there.
>
> **[9:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=581)** And we're going to be joining it to the CustomerID and the BusinessEntityID columns.
>
> **[9:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=587)** Grouping by SOH dot CustomerID, P dot FirstName and P dot LasName.
>
> **[9:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=595)** And then we're going to SUM based on the SOH dot TotalDue.
>
> **[10:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=600)** All right, I think that looks good.
>
> **[10:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=601)** Let's go ahead and highlight all of this again and press Execute.
>
> **[10:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=603)** Oh, and I've got a error here.
>
> **[10:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=606)** I need to actually put those abbreviations in the ON clause as well.
>
> **[10:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=609)** So SOH, CustomerID and P dot BusinessEntityID.
>
> **[10:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=615)** All right, one more time, highlight.
>
> **[10:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=617)** Let's execute that.
>
> **[10:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=619)** And there is my final solution with lots of interesting information about each of our customers and all of the orders that they've ever placed.
>
> **[10:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=626)** So that's my solution. I will go ahead and save that as challenge four complete dot sql.
>
> **[10:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-order-summaries?u=76281980&t=631)** And you can take a look at it and run it on your own system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Statistics]] (1), [[SQL]] (1)
> **Env Vars:** sum (8), soh (5), min (4), max (4), group (3)
> **SQL:** group by (3), inner join (2), select (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** it's like (1), for instance (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)

#### Solution: Group rows and aggregate data
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=0)** - [Instructor] In this challenge, we're given a table of exam scores, and we need to obtain some summary calculations.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=11)** The table that we have is called student scores, so we'll just start by running that.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=15)** Select star from it, we can see all the data that it contains.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=19)** This table contains a student ID and student name and class column, so we can see each of our individual students and the classes that they're enrolled in as well as their midterm and final exam scores listed out there.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=32)** So now we need to summarize this information by class so we can see what the average midterm and the average final is for each class, and then compare those together.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=42)** So we can start by selecting just the class column out of the data table.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=48)** Now when I do that though, it's still going to return each individual row for all of my students, so I can see physics is repeated over and over again, calculus below that, and history there.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=58)** In order to get these to show me just a single row for each unique class, we need to start grouping these individual rows together.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=67)** And we do that by adding in a group by clause after from, so group by and we'll group by the class data.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=74)** And now, when I test my code again, it's going to return a single row for each unique class.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=80)** Now, these are groups, so all of the individual student records are still represented inside of these groups, and we can start to perform some summary calculations across the data in that group.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=91)** So we can find the average midterm score as a new column by using the AVG function.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=98)** So I'll find the average midterm score, and I'll return this as a column called midterm average.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=107)** When I test my code here, that should drop in the column there, so it's giving me the average for the midterm exams for each of my classes.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=113)** We'll do the same thing to get the average of the final exam, so AVG final exam score.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=121)** And I'll name this final average.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=127)** And so there is the final exam average for each of my classes, and now we just need to compare these to each other to see whether students have increased their performance from the midterm to the final exam.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=138)** And we can do that with a basic subtraction.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=141)** So we'll add in a 4th column here, and inside a set of parentheses, we'll just take the AVG of the final exam, and I'll subtract from it the average of the midterm score.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=156)** And I'll call this score difference.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=161)** Now, it's getting a little long, I'm just going to break this alias here and put that on the next slide below so you can see it there.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=166)** So that's going to give me that 4th column that calculates the difference.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=170)** And there we go, so I can see the difference.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=172)** So it looks like everybody has improved from the midterm to the final.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=176)** Calculus improved 2.8 points on average, history improved 1.7 points on average, and physics improved 1.8 points on average.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=186)** So that is the calculation that we need.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=189)** The final step of this challenge was to sort the data so that the class with the most improved score's up here at the top.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=196)** And so that we just need to add in an order by clause to the end of this, so we'll say order by the score difference column.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=206)** And I want to sort it descending, that way the highest value appears at the top.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=212)** All right, test my code again.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=213)** It resorts the data, so the most improved course is calculus, then physics, followed by history, and that gives me a correct output.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-group-rows-and-aggregate-data?u=76281980&t=221)** So this is my select statement that solves this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Calculus]] (3), next (1)
> **Env Vars:** avg (3)
> **Versions:** 2.8 (1), 1.7 (1), 1.8 (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Manipulate Data with Functions

[↑ Back to Table of Contents](#table-of-contents)

#### Use functions in T-SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=1)** - [Instructor] SQL Server ships with a large number of built-in functions that you can leverage to manipulate the data that's stored in your database tables.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=10)** In this chapter, I'm going to introduce you to some of my favorites, but I thought it'd be helpful to get an overview first.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=17)** The built-in functions fall into a number of categories.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=20)** We've already talked about the aggregate functions that are typically paired with the GROUP BY clause.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=26)** These will help you find the sum total or count or average of a number of values within a group.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=32)** String functions manipulate text strings by extracting and replacing characters or joining text together.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=41)** Mathematical functions can be useful for rounding values, finding logarithms and exponents, or working with geometry, such as calculating sine, cosine, and tangents.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=52)** There are also math... Rephrase.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=54)** There are also mathematical functions for converting between radians and degrees or accurately referencing the constant value of pi for working with circles and arc geometry.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=67)** Date and time functions will help you calculate the amount of time that's elapsed between two dates, or by adding time intervals together.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=76)** Functions that extract portions of a date, for instance, getting the name of the month from a date field, also fall into the date and time function category.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=86)** And there are logical functions which can be used to evaluate conditions and return values based on whether a condition is true or false.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=95)** These allow you to easily build in some basic automation into your queries.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=99)** That's useful for having the query evaluate and make decisions based on your data.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=107)** To use a function, you simply type its name.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=109)** The usual convention is to use all capital letters for function names in your scripts.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=115)** Then inside of parentheses, you'll include arguments that the function requires to know as a comma-separated list.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=122)** These arguments are the parameters that you use to customize the function's output.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=127)** Some functions will have several arguments that you need to provide, and other functions are self-sufficient and don't require any additional arguments.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=137)** So for instance, there is a string function called LEFT that'll return the specific number of characters from a beginning of a text string.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=145)** In order to apply it to the data in the FirstName column of a table, you supply the name of the column as the first argument, and the number of characters that you want to pull out as the second argument.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=156)** If you use this function to process the name Adam, it'll just return the letter A.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=164)** Now, there are a lot of built-in functions that are included with SQL Server, and there's way more than I can cover in this course.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=170)** Some of them are useful in everyday activities and some are highly specialized.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=176)** I'd recommend bookmarking this URL so that you'll have an easy reference to all of the functions that you can use in SQL Server 2022.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-functions-in-t-sql?u=76281980&t=184)** At the top, we have headers that describe the basic categories, so there's aggregate functions, analytic functions, and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), data (3), database (1), [[Automation]] (1)
> **Env Vars:** sql (3), group (1), left (1), url (1)
> **Analogies:** for instance (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **SQL:** group by (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### String functions
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=0)** - [Instructor] String functions are used to manipulate text values stored in a data table.
>
> **[0:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=4)** Let's take a look at a couple by first writing out a simple query that pulls out the First and Last Name columns from the Person.Person table.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=13)** This query will just return the names from the table and we can see that we have over 19,000 records to work with.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=19)** Now let's process all of these names to convert their case.
>
> **[0:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=23)** The UPPER function will return text converted into all uppercase characters.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=28)** To use it, I'll open a parenthesis after the name UPPER, and supply the column that I want to process.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=35)** Let's process the first name values.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=38)** Then I'll give this column an alias and I'll call it as uppercase.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=43)** There's also a built in LOWER function that does the same thing, but it converts everything to lowercase letters.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=50)** I'll use it to process the last name data.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=58)** If you execute the query, you'll see we have four columns now, and the first two are the original data exactly as it's saved in the database, and the second two are being processed by our functions.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=69)** We have the uppercase version of all of our first names, and a lowercase version of all of our last names.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=75)** Next, let's take a look at a function called LEN.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=78)** The LEN function will count up the number of characters in a string and return and integer number.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=83)** Let's use that against our first name values.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=87)** I'll name this column as Length of First Name.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=95)** There's also functions for extracting characters.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=98)** Let's take a look at the left function.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=100)** I'm going to apply this to the last name data, and the left function will extract a number of characters from the left side of the string.
>
> **[1:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=108)** Let's extract the first three characters from the last names.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=111)** I'll name this column as first three letters.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=116)** There's also a write function that does the same thing, but extracts letters from the right side of the string.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=122)** Let's also process the last name values, and I'll also extract the last three characters.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=129)** I'll execute the query again and we can see the additional columns have been added.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=134)** Here we have a calculation that simply counts up how many characters are in each first name, then we have the first three characters of the last name, and the last three characters of the last name.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=145)** These two functions can be useful when processing serial numbers or other identifiers that share common prefixes or suffixes.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=152)** Sometimes when you import data from other sources, you might have values with extra spaces at the beginning or the end of a text string.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=160)** You can use the L trim and R trim functions to remove extra spaces from the left or right respectively.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=168)** Or we can simply use a function called TRIM.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=171)** The TRIM function will get rid of all extra space characters.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=175)** Let's apply this to our last name values.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=178)** This one only has a single argument, just the name of the column we want to process, and I'll call this as TrimmedName.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=187)** I'll execute the query again, and we'll see that added into the results over here on the far right now.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=192)** I don't think any of our data in the AdventureWorks database actually has extra space characters, but this function can be very useful in data cleansing procedures.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=202)** So that's a number of text manipulation functions that you can use in your SQL queries.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=208)** They're useful anytime you have text strings in one format and you need to manipulate them.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/string-functions?u=76281980&t=213)** This can be useful for extracting product IDs and timestamps from manufacturing codes, or making sure that all of your text is returned to a report in a consistent format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (2), next (1), [[SQL]] (1), product (1)
> **Env Vars:** upper (2), len (2), trim (2), lower (1), sql (1)
> **Speakers:** - [instructor] (1)

#### Text concatenation
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=0)** - [Instructor] Text Concatenation is the process of joining two text strings together.
>
> **[0:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=4)** SQL Server has two concatenation functions that we can use to do that in our query results.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=10)** I'm going to start with the same first and last name data that's coming out of the person table that we used in the prior movie.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=21)** I'll execute the query so we can see the results below.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=25)** Now, in order to return both the first and the last names together in a single column, you can use the concat function.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=32)** I'll add one onto line number three.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=35)** Concat takes at least two arguments and as many as 254 but they're all just the strings that you want to put together end to end.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=44)** In our case, I want to join the values in the first name column to the values in the last name column.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=53)** I'll name this new column in our query as full name.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=58)** The results return exactly what I've asked for, all of the characters from the first name joined immediately to all of the characters in the last name.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=66)** If you want a space between the two names, you need to create that as a parameter in the function.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=72)** I'll come up here back to line number three and I'll insert a literal space character as the second parameter.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=78)** Now we'll join the first name to a space and then join the last name text.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=83)** Press execute and you'll see the results update.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=85)** It's a slight difference right there.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=87)** We can also make this function even longer by adding in the middle name field from the table.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=93)** I'll add that here as the new third parameter.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=97)** And then I'll also add in another literal space.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=101)** Executing again and we'll see that it pulls in the middle name fields for the people that have middle name values.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=107)** Now, if you're adding lots of fields together, it might get cumbersome to type in these spaces between each and every field.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=115)** That's where the other concatenation function comes in.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=117)** It's called Concat_WS.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=123)** The WS stands for with separator.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=126)** It takes a slightly different format.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=128)** With this function, you list the separator the character that you want to use first and you list it one time as the very first argument.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=136)** I'll put in my literal space character and a comma.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=139)** Then you can list out all of the other fields you want to concatenate together.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=144)** We'll add in the first name, middle name, and last name fields.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=151)** I'll name this column as with separator.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=155)** Press the execute button and we'll see that gets added into our results and it looks really similar.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=161)** I think the concat_WS function is a lot easier to read in the script though.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=166)** Now there is one slight difference between these two functions.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=170)** If you take a look at somebody that does not have a middle name value, for instance, Kim Abercrombie here, in the version of the function that uses the separators, it has a single space between the first name and the last name.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=183)** However, in the Concat function, it actually inserts two space characters.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=188)** What this function is doing is putting in the first name and a space, then the middle name, which there isn't any for Kim Abercrombie, then it inserts another space and finally the last name.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=199)** So it's a slight difference in the output between the concat function and the concat_WS function in how it deals with fields that don't have any values.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=208)** So that's just a slight difference between the two functions, and it's good to keep it in mind when you apply these into your database.
>
> **[3:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/text-concatenation?u=76281980&t=214)** So that's how you can join text strings together with the two concatenation functions in SQL Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), data (1), database (1)
> **Env Vars:** sql (2)
> **Cross-References:** in the last (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Round with mathematical functions
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=0)** - [Instructor] Mathematical functions, process, input values and they return a single numeric value.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=6)** I'm going to write a quick query that pulls the business entity ID and sales YTD columns from the sales.salesperson table.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=22)** This will give us some numerical data to play with.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=24)** Each row represents a salesperson from the database and then we also have their total sales for the year.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=30)** Now, there's a couple of mathematical functions that'll round these values in different ways that I want to demonstrate.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=36)** The first one is simply called round.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=39)** The basic round function takes two arguments.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=42)** The first is the data that you want to round.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=45)** I'm going to process the sales YTD column here.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=50)** The second argument specifies the length or the precision of the rounding.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=55)** Positive integers represent the number of decimal positions that you'll keep and negative integers will represent the number of digits to the left of the decimal.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=65)** I'll write this out both ways so that you can see the difference.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=68)** The first one we'll round with a positive two.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=71)** I'll name this as Round2.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=75)** The second one, we'll use a negative two.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=82)** This will round to the hundreds position.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=84)** I'll name this as RoundHundreds.
>
> **[1:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=90)** When I execute the query, you'll see the difference.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=93)** So here is the original input data.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=95)** The Round2 with a positive two rounds it to the hundredth positions, we have two decimal places here.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=101)** The negative two will round to the hundreds position and you'll see that it's rounded to the nearest hundred.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=107)** The round function uses standard rounding, so values five and above will get rounded to the next highest value, and four and below will get rounded down to the next lowest value.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=119)** If you always want it to round a number up to the next highest integer, you can use the ceiling function.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=126)** Ceiling only works with integers, so there's only one argument to define the data that you want to process.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=132)** I'll give this column an alias called RoundCeiling.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=136)** There's also a floor function that we can use and this one will always round down to the next lowest integer.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=145)** Let's take a look at this processing these sales YTD column as well.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=152)** When I execute the query, those two new columns get added over here on the far right.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=156)** So round ceiling you'll see is rounding up to the next highest integer, and round floor is rounding down to the next lowest integer.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=165)** So those are the three builtin functions that you can use to round numbers found in your database or derived through calculations.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=172)** Use round when you want to control the precision or use ceiling or floor when you want to force the rounding to the next integer, either up or down.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/round-with-mathematical-functions?u=76281980&t=181)** These are very useful to apply when statistical analyses result in more significant digits than the original data supports or when formatting precise financial data for a report.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), data (5), database (2), business (1), [[Financial Data]] (1)
> **Env Vars:** ytd (3)
> **Speakers:** - [instructor] (1)

#### Find the GREATEST or LEAST value
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=0)** - [Instructor] There are two new functions that have been added to SQL Server 2022 that'll help you compare numbers and text strings across multiple columns in the same row, they're called greatest and least.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=12)** Let's see how they work by selecting all of the first and last names of all of the people in the person's table.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=21)** I'll also sort these names by the business entity ID so that they're not in an alphabetical order in the results.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=28)** Let me execute the query so we can see the raw data that we're about to work with.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=32)** Okay, now we can compare each person's first name to their last name and find out which one comes first alphabetically.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=40)** To do that, we'll use the new greatest function.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=44)** The greatest function takes multiple arguments and these are the columns that hold the values that you want to compare.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=50)** In our case, I'm going to compare the first name values to the last name values.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=58)** I'll name the results of this greatest function as highest alphabetical.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=63)** Because I'm including a space in this new column name, make sure you wrap the name with single quotation marks.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=70)** We can also take a look at the other new function, least.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=74)** This function takes the same format but it'll return the lowest alphabetical value.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=84)** With these two functions added into my query, I'll execute it and we'll take a look at the two new columns.
>
> **[1:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=90)** So the greatest function is going to return the highest alphabetical word from the first two columns.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=97)** In the case of Ken Sanchez, his last name Sanchez is higher alphabetically.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=102)** In the case of Gail Erickson on line number five, her first name is higher alphabetically, so we see that.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=109)** The least function returns the opposite result.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=111)** For Ken Sanchez, his first name Ken is lower alphabetically, and for Gail Erickson, her last name Erickson, is lowest alphabetically.
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=121)** Now the greatest and least functions also work with numeric data.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=125)** Let's take a look inside of the AdventureWorks database for a second and I'm going to find the HumanResources.Employee table and look at the columns.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=132)** Here at the bottom we have two columns that contain the number of vacation hours or sick leave hours that each employee has accrued.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=141)** We can find out whether they have more vacation or sick hours with these two new functions.
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=146)** Let me start that on line number eight.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=148)** In fact, I'm just going to scroll down so I can see that higher on the screen.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=151)** Let's select the business entity ID and the number of vacation hours and sick leave hours for each employee.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=162)** We'll start with these three columns and I'll just highlight lines eight down through 11 and execute it so we can see the numbers that we're going to start with.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=170)** So for each employee, we have their number of vacation hours and sick leave hours.
>
> **[2:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=174)** Now we can find out which of these two is higher and which of these two columns is lower.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=179)** For that, we'll use the greatest and the least functions again.
>
> **[3:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=182)** We'll compare the number of vacation hours to sick leave hours in the function's parameters and I'll simply name this column greatest.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=193)** I'll do the same thing with the least function.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=203)** Now it can execute this entire statement and we'll see the number that's higher and the number that's lower from each of these two columns.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=210)** So for the person with the business entity id number one with the vacation hours 99 and sick leave hours of 69, the higher number is 99 and the least number is 69.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=221)** Person number two has the opposite situation.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=223)** They only have one vacation hour and 20 sick leave hours.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=227)** So here the higher number is 20 and the lower number is one.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=231)** Now, if you wanted to know which column was higher, you could combine these results with another function called IIF.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=237)** I'll put that onto line number 13.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=240)** This is a logical function that we'll look at in more depth in an upcoming movie, but for now, just know that this function acts as an if then else statement.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=250)** It'll look like this.
>
> **[4:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=263)** This basically says if the number of vacation hours is higher than the sick leave hours, it'll return the text vacation, otherwise it'll return the text sick.
>
> **[4:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=274)** Let me highlight this query and press execute to see that last column.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=277)** So now we can easily see which of these two columns is higher.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=281)** In the case of the first person, they have more vacation hours, and in the case of the second person, they have more sick hours.
>
> **[4:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=288)** So that's a couple of examples of the new greatest and least functions.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/find-the-greatest-or-least-value?u=76281980&t=293)** Unlike the max and min functions, which operate on a group of values from the same column, the greatest and least functions will compare values from multiple columns in the same row.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (3), data (2), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft Word|Word]] (1), database (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** sql (1), iif (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Work with date functions
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=0)** - [Instructor] When working with dates and times, there's a number of functions that you should be familiar with.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=5)** Let's take a look at them by pulling the business entity ID and the hire date columns for all of the employees found in the humanresources.employeetable.
>
> **[0:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=21)** We'll execute this simple query and we'll see the data that we'll work with.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=25)** Now, first, there's a number of functions that will extract and separate portions of the date.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=30)** Let's take a look at the first one called year.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=34)** The year function will just return the year from a given date.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=37)** We'll apply this to the hire date data.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=41)** I'll name this new column as hire year.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=46)** The next function is called month and it does the same thing, it just extracts the month from a date.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=58)** And finally, there's a day function that does essentially the same thing.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=62)** It returns the day from a date.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=68)** I'll execute this updated query to see the three new rows and we can see all the portions of the date have been extracted to their own columns.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=76)** We have the individual year, the month as well as the day of each employee's hire date.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=82)** Now, these functions are great for breaking down your data so that it can be used for grouping.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=87)** For instance, I could write a group by query that counts up the number of employees that were hired in each year.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=94)** Let's start that on line number eight, we'll select the year function apply it to the hire date data and I'll also count up all the records in each group.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=112)** We'll pull the data from the humanresources.employeetable
>
> **[2:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=121)** and we'll group all the values by the year of the hire date.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=128)** Now I can execute the query online eight down to 11 to get those values.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=133)** Now, I can easily see each year that we had hires and we can see how many new people were added to the company's roster.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=140)** It looks like 2009 was a really busy year for new hires.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=144)** Now, when you want to calculate how much time has passed between a date in your database and now, you need to first know the current date and time.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=153)** There's a couple of functions that we can use for that.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=155)** Let me type them out onto line number 13 and 14.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=158)** The first is simply called get date.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=162)** This function doesn't have any arguments, but you still need to use the open and closed parenthesis.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=168)** Get date simply returns the current date and time of the computer that SQL Server is running on.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=175)** If you need this date and time in coordinated universal time, you can use the get UTC date function instead.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=184)** Let me run both of these queries and we'll see those results.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=188)** So here is the result of the get date function and here is the same function using the UTC format.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=195)** This tells you exactly the time and day that I'm running these queries.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=199)** So now that we know how to get the current date, we can use that to calculate elapsed time.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=204)** Let's go back up to the first query.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=206)** Now we can see how long each employee has worked at Adventure Works.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=211)** We'll add that as a new column on line number six, this will use the date diff function.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=218)** Date diff requires three arguments.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=221)** The first is the unit of time that you want to count, either day, month, or year.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=226)** Let's see how many days have elapsed since each person's hire date.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=230)** The other two arguments are the starting date and the ending date that we want to count days between.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=236)** The starting date will be the day that they are hired and the ending date will be today, which we'll use to be get date function.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=246)** That finishes the date diff function, so I need another closing parenthesis here and I'll call this column as days since hire.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=253)** Now, let me execute lines one down through seven and we'll see we have a new column over here that counts up exactly how many days have elapsed since the hire date or we can easily change this function to return just the number of full years that the employee has been with Adventure Works.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=269)** Let me add in another column with that calculation.
>
> **[4:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=274)** This time we'll count up the number of years, but the starting date and the current date will be exactly the same.
>
> **[4:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=282)** We'll execute the query again, and this time we could see exactly how many years have elapsed since each person's hire date.
>
> **[4:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=289)** Finally, there's the date add function which will add units of time to a date.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=295)** This function uses the same format as date diff, and I'll put that onto line number eight.
>
> **[5:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=302)** If I wanted to find out the date of an employee's 10 year anniversary, I'll add years.
>
> **[5:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=309)** Then the number of units that I want to add, 10 and finally the date that I want to add them to, that'll be the employee's hire date.
>
> **[5:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=319)** I'll name this new column as anniversary.
>
> **[5:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=324)** We'll execute this query one more time and we'll take a look at the last column way over here on the right this will tell me the date of the 10 year anniversary so we can see the exact date that's 10 years from the original hire date.
>
> **[5:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=336)** So that's a couple of the more useful date and time functions in SQL Server.
>
> **[5:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/work-with-date-functions?u=76281980&t=341)** They allow you to take a date and pull out the useful units for grouping, find the current date and time and calculate the elapsed time between two dates or find a date, a certain number of units away from a starting date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft SQL Server|Sql server]] (2), business (1), next (1), database (1)
> **Env Vars:** sql (2), utc (2)
> **CLI Commands:** find (3)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### FORMAT date and times
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=0)** - [Instructor] Most databases will store date and time data in a numeric date and time data type, and that makes logical sense, right?
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=8)** But it's not uncommon to need to present those dates and times as text in reports or interactive forms.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=15)** This makes them easier to read and understand for end users of the data, for instance, I think it's much easier to understand the month when I read the name August instead of the month number 8.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=27)** To convert your dates into text you can use the SQL server format function.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=32)** Let's take a look by working with the employee hire dates again.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=48)** I'll pull out these two columns and execute the query so we can see the data that we're working with.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=53)** Then on line number three, we'll start with the format function.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=58)** The format function takes two arguments, the first is the data that you want to process, in our case, those values are coming out of the hire date column.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=69)** The second argument is a format string, there are a number of standard format strings that you can use and you can find those by searching for the .net programming language format strings.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=79)** But I actually prefer creating my own custom strings, to do that, you'll use the letter codes, lowercase D to represent days, a capital M for months, and a lowercase Y for years.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=93)** The reason M is capitalized is because lowercase M is used to denote minutes.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=99)** The format strings will go inside of single quotation marks, so for instance, if I type out four lowercase D's, that'll represent the full name of the day of the week.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=109)** Let me finish the format function with a closing parenthesis and I'll press execute, and you'll see each of our dates have been processed.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=116)** This shows me the full name of the day of the week for each of our days.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=120)** If I change this letter code to three lowercase D's instead and press execute, this time we get back in abbreviation for the day of the week.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=129)** Changing it again to two lowercase D's returns this result, we get a two digit day of the month, and finally, one lowercase D and press execute again, returns the date in this format, a month, a slash, the day, a slash, and then the year.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=147)** Now you can add as many format characters as you want to the string, and use other characters that you want to appear, so for instance, we can make our dates very verbose by typing it in something like this, four D's, a comma, four capital M's, two more lowercase D's, another comma, and four lowercase Y's.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=171)** Pressing execute will translate that formatted string like this.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=175)** We get the full name of the day of the week, the full name of the month, the two digit number of the day of the month, as well as a four digit year, or we can make our strings a little bit more simplified, I can say one D, dash three capital M's, press execute, and you'll get this result, a one or two digit day of the month, a hyphen, and a three letter abbreviation for the name of the month.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/format-date-and-times?u=76281980&t=200)** So as you can see, the format function has a lot of flexibility in how you present your date based data and is perfect for incorporating into reports or otherwise translating numeric dates into something that's a little bit more user friendly and easier to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Databases]] (1), [[Forms]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Programming]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for instance (3)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Group dates into buckets
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=0)** - [Instructor] Another function that's new for SQL Server 2022 will allow you to identify the first day of the week, month, or year that a given date occurred in.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=10)** It's called Date_Bucket.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=13)** Let's take a look by pulling out employee hire dates again.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=20)** I'll also add in the format function so that we can see the day of the week that each employee was hired.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=33)** Finally, we'll pull all of this from the HumanResources.Employee table.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=40)** When I execute the query, we'll see that we have employees that were hired on different days of the week.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=46)** If you need to find out the date of the Monday that started the week that the hiring took place in, you can use the new Date_Bucket function.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=54)** I'll add one onto line four.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=59)** The Date_Bucket function in SQL Server is a little bit unusual in that it has two different words that are separated by an underscore character.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=67)** This function will essentially normalize the data.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=70)** And everyone that was hired in the same week, regardless of whether it was on the Monday, or Wednesday, or Saturday of that week, everyone will get put into the same Date_Bucket.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=80)** The first argument we need to put in is called the date part.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=83)** Here we can use day, week, month, year, quarter, hour, minute, second or millisecond, depending on the granularity of the buckets that you want to create.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=95)** For this example, we want the first day of the week.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=97)** So, I'll type in week.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=99)** Next, we can specify the size of the bucket.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=102)** For buckets that are a single week in size, just type in a one.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=107)** If you type the number two here, you would create buckets that are two weeks in length, which will return every alternating Monday's date.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=114)** So the first Monday of the month, the third Monday, and the Monday two weeks after that.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=119)** The third argument is the date that you want to put into the bucket.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=123)** In our case, that's the hire date data from the table.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=127)** That finishes the function and I'll name this new column as WeekBucketDate.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=135)** Now we can execute the query to see the result.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=137)** For somebody that was hired on Wednesday the 14th of January, that corresponds to a week that started on Monday the 12th of January.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=145)** You can see that each date returned is a couple of days before the actual hire date.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=150)** To clarify exactly what's going on, we can format these new dates.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=154)** I'll add another column on line number five that uses the format function.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=170)** We'll format the same Date_Bucket function, and I'll call it as a new column, WeekBucketDay.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=177)** I'll execute statement.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=178)** And I have an error here.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=180)** Let's go ahead and find where that is.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=181)** Looks like I had it doubled up on my commas here.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=183)** Let me get rid of this comma at the end of line number four and re-execute.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=187)** All right, there's the result I expected.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=189)** And we can see that each of these days corresponds to a Monday.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=192)** Now it's a bit clearer that all the dates returned fall on the prior Monday.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=197)** By changing the granularity with the first argument in the function, we can also find the first day of the month that each person was hired.
>
> **[3:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=205)** Let me add that onto line number six.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=211)** We'll use the Date_Bucket function again, but this time use the month date part.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=218)** We'll also count by single months, and we'll process the hire date data.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=227)** I'll call this MonthBucketDate.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=229)** Let's do the same thing and process by the first of the year.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=241)** I'll name this new column YearBucketDate.
>
> **[4:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=244)** I'll press the execute button and we'll take a look at these results.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=247)** This tells me that somebody that was hired on the 14th of January corresponds to the 1st of the month of January.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=254)** It also corresponds to the 1st of January in 2009.
>
> **[4:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=259)** So this column here is telling me the first day of the month that the person was hired in, and this column over here is telling me the first day of the year that they were hired in.
>
> **[4:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=268)** Finally, it's important to note that the Date_Bucket function works by creating buckets that start on the 1st of January in the year 1900, which just happens to have been a Monday.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=280)** And that's why all of our buckets start on a Monday.
>
> **[4:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=283)** You can optionally specify your own starting date that'll define where the buckets start.
>
> **[4:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=287)** For instance, we can start building the buckets with the January 2nd, 2000 date instead, which was a Sunday.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=295)** To do this, we first need to declare a variable to hold the new origin date.
>
> **[4:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=299)** I'll move that down and start it on line number one.
>
> **[5:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=303)** I'll declare a variable called @origin.
>
> **[5:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=308)** It'll be a date data type.
>
> **[5:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=310)** And we'll set it to the value of 2000, January 2nd.
>
> **[5:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=315)** Type a semicolon at the end to finish our declaration.
>
> **[5:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=319)** Then we can use this origin as an optional fourth component of the Date_Bucket function.
>
> **[5:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=325)** I'll do it here on line number five.
>
> **[5:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=327)** I'll type in a comma after the hire date reference, and we'll make a reference to our @origin variable.
>
> **[5:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=334)** And I'll also do it on line number six.
>
> **[5:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=340)** Now, when I execute the query, you'll see a slightly different result.
>
> **[5:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=344)** Now we're saying to start our weeks on Sunday instead of Monday.
>
> **[5:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=348)** And it creates the buckets with this new origin definition.
>
> **[5:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=351)** If you compare the original query with this new version, you'll find that all of the buckets start dates have shifted back by one day.
>
> **[5:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=359)** And that's the new Date_Bucket function.
>
> **[6:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/group-dates-into-buckets?u=76281980&t=361)** It can help normalize your data, grouping dates into defined ranges so that you can standardize them on specific intervals on the calendar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft SQL Server|Sql server]] (2), next (1)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** sql (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Return random records with NEWID
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=0)** - [Instructor] Many statistical analyses operate on a significant subset of records, rather than the entire data set.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=7)** And when you need to perform verification audits, you want to make sure that the records that are chosen for review represent an unbiased, random selection.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=17)** You can use the SQL Server function called New ID to help you pull random records out of a data table for these kinds of analysis projects and audits.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=27)** Let's start with a query that pulls out the ID numbers of all of the records in the Work Order table.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=35)** Press the execute button and you'll see just a single column of our Work Order IDs.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=41)** Now I can add in a new column to the query using the New ID function.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=48)** This function doesn't have any arguments, so just type an opening and a closing parenthesis at the end.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=54)** It simply generates a unique identifier for every row in the result.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=58)** I'll name this new column, New ID.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=62)** When I press execute, you'll see a random number associated with each work order.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=68)** If you run the query multiple times, you'll see that every time it refreshes we get a new unique identifier and they're different every time you execute the statement.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=78)** Now, we can use this fact to help us pull random records out of the database.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=83)** First, I'll sort the data based on the New ID column.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=91)** Now when we execute the query, you'll notice that we get a different work order every time we execute the query.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=98)** At this point, we can convert this into a top query to return however many random records we want to view.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=104)** If I want 10 random records, I can select top 10.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=110)** Executing the statement or return 10 work orders randomly chosen from the database.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=115)** Let me pull this up a little bit and you'll see we're only getting the top 10 records.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=119)** Pressing the execute button again will reveal a different list of 10 work order IDs.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=124)** These 10 work orders are being randomly chosen from the database, and I can use them in a manual verification process or a statistical analysis.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-random-records-with-newid?u=76281980&t=133)** By selecting random rows from a data table, you could ensure that your selected rows don't contain a selection bias that could invalidate the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), database (3), [[Microsoft SQL Server|Sql server]] (1), [[Statistical Analysis]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Create a series of values
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=0)** - [Instructor] There is one more function that's brand new in SQL Server 2022 that I want to share with you.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=6)** This is something that a lot of database professionals have been asking for for a very long time and that's the ability to generate a series of numbers.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=15)** It may not seem like a big deal but previous solutions to get to this type of generated list has always been a hassle and it required a cumbersome set of functions and workarounds so it's really nice to bring that capability into a native function that's accessible to everyone.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=31)** There is one catch though.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=33)** In order to use this function, the database itself needs to be at a compatibility level of 160.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=40)** This corresponds to the new SQL Server 2022 compatibility level.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=45)** So if you have an older database, even if it's on a SQL Server 2022 server, it may not have been brought forward to fully support the current set of features.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=55)** I've got the Generate series Start SQL file opened up on my screen, which includes the code at the top that you'll need to check your database.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=64)** Assuming you're using the same AdventureWorks 2019 database that I'm using, you can run this query to see the current compatibility level that you have on your database.
>
> **[1:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=73)** I'll go ahead and execute lines two through six.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=75)** Now I've already updated mine, so I get a result of 160 which is what you're looking for.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=81)** Yours is probably 140.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=84)** If so, go ahead and run lines nine through 11 in order to update the database to the new compatibility level of 160.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=92)** Once that's done, you're ready to take advantage of the new generate series function.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=97)** Let me go ahead and scroll down in the script.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=99)** Generate series is different from the other functions that we've seen in one key aspect, instead of returning a single value, it returns a full set of values, so you can't use it in the select portion of your queries.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=113)** Instead, we treat it like a table.
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=115)** The function returns a single column called value.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=119)** I'll go ahead and select that column.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=122)** In the from clause, we use the generate series function and configure it with a couple of parameters.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=128)** The first is the starting number for the list and the second is the ending number.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=132)** There's also an optional third parameter, that's the increment or step value that you want to use.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=138)** So let's start with a simple one that generates a list of integers between one and 10.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=142)** I'll execute lines 15 and 16 and you'll see the output value column.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=147)** We get the numbers one down through 10.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=149)** The next example uses all three parameters.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=152)** This time we're going to generate a series that starts at zero, goes up to 50, and only gives me every fifth number.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=159)** Let me highlight lines 19 through 20 and execute that and you'll see that's exactly what we get.
>
> **[2:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=164)** 0, 5, 10, 15, 20, all the way up to 50 at the end.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=168)** Now, we can also use the function with variables to create a series that includes decimal values.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=175)** I have that listed out starting on line 23.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=178)** I'll create three variables.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=180)** The start variable gets the value of 0.0.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=183)** Stop will be 1.0 and the increment value is 0.1.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=189)** These are all stored as a decimal data type.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=192)** Then we'll select the value column from the function from the generate series function and supply the start variable, the stop variable, and the increment variable.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=203)** When I execute lines 23 down through 27, you'll see that we get these values, 0.0, 0.1, 0.2 and so on all the way up to 1.0.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=213)** Okay, so now we can create a sequential series of numbers to our specifications.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=218)** How can we use that in the database?
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=220)** Well, let's suppose that you wanted to pull out every third person from the AdventureWorks database.
>
> **[3:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=225)** We can use the generate series function in a where clause to match ID numbers that we want to select.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=231)** I have that query started on line number 30.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=234)** We'll start with the usual column selections and the from clause.
>
> **[3:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=237)** We'll pull out the business entity ID, first name and last name columns from Person.Person.
>
> **[4:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=243)** Then in the where clause, we can say that we only want records where the business entity ID can be found in the list generated by the function.
>
> **[4:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=252)** To do this, we use something called a sequel subquery inside of the in function.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=257)** The portion that reads select value from generate series 3 comma 100 comma 3 will create a list of every third number starting at three and going up to 100.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=269)** In fact, you can highlight just that portion and execute it by itself since it's a completely valid select statement.
>
> **[4:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=276)** Let me highlight all of that and press execute and there is the generated list.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=281)** Then for every value in this list we're selecting the matching business entity id.
>
> **[4:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=287)** We do that in the filtering where clause.
>
> **[4:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=289)** Let me highlight this entire query now and execute it and you'll see these results.
>
> **[4:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=294)** We get person number three, person six, person nine, person 12, all the way up to person 99.
>
> **[5:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-series-of-values?u=76281980&t=301)** To get this kind of output previously, would've required a looping subroutine or some other complex bit of code but with the new generate series function, it's relatively simple to obtain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[Microsoft SQL Server|Sql server]] (3), business (3), [[SQL]] (1), next (1)
> **Versions:** 0.0 (2), 1.0 (2), 0.1 (2), 0.2 (1)
> **Env Vars:** sql (4)
> **UI Navigation:** scroll down (1), select the (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Speakers:** - [instructor] (1)

#### The IIF logical function
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=0)** - [Instructor] The logical function IIF will evaluate a condition and return one value if the condition is true and a different value if the condition is false.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=10)** Using this function, you can have SQL Server make decisions about your data for you or help you place records into groups.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=18)** To see how this works, I want to take a look at the year-to-date sales history of the employees at AdventureWorks.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=27)** We'll select the BusinessEntityID and SalesYTD columns from the Sales.SalesPerson table.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=34)** This shows me each employee's ID number and their current sales year-to-date.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=39)** Let's suppose that we have a sales goal of $2 million, and I'd like to find out which employees have met that target goal and which ones have not.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=47)** You could sort the rows or create a WHERE clause that pulls out just the people with a value over 2 million.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=53)** But instead, I'd like to create a new column that reveals this information right here in these results.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=59)** To do that, we'll use the IIF function.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=64)** The logical IIF function can be thought of as an if-then-else statement.
>
> **[1:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=69)** There are three arguments that need to be provided.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=72)** The first is the logical condition to test.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=75)** This is a simple statement that needs to be either true or false for each row in the query results.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=81)** For example, I want to find all of the rows where the SalesYTD value is greater than 2 million.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=88)** We can write that in with the Greater Than logical operator.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=91)** So there is my first condition.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=94)** When this is true, I'm going to return the text, "Met Sales Goal."
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=98)** That's going to be my second parameter.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=103)** Type in a comma, and then we'll type in the third parameter.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=106)** This is the text that'll get returned if the condition is false.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=109)** I'll say, "Has not met goal."
>
> **[1:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=115)** That finishes the IIF logical statement.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=118)** We'll give this an alias.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=119)** I'll call it AS Status.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=123)** So there's my finished IIF statement.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=124)** Let's go ahead and press the Execute button, and we'll see that column gets added here into the results.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=129)** For any employee that has a sales value over 2 million, it returns the text that they met the sales goal.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=136)** Anybody that is below 2 million returns the text that they have not met the goal.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=140)** We can now easily see who has met the target and who hasn't.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=144)** Now that we have this information, we can take it a step further and group records together to get an overview of the sales performance.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=151)** Let's create another SELECT statement to do that.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=155)** This time, I will select the IIF function.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=157)** In fact, I'm just going to copy it from up above and paste it down into my new query.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=163)** Then the second column will be a counting function.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=168)** We'll count up all the rows.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=170)** We'll pull everything from the same table, and I'll use a GROUP BY statement.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=178)** I'm going to group everybody by the two columns or the two statuses, so I'll paste in another copy of that IIF function.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=185)** We do need to get rid of the alias here at the end, though.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=188)** Let me go ahead and backspace off of that.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=190)** This is going to create two groups, one group that says, "Met Sales Goal," and the other group says, "Has not met goal."
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=198)** Then it's going to count up all the salespeople in each of those groups.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=202)** Let me highlight line 6 down through 9, and we'll execute it to see the result.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=206)** This tells me I have 9 people that have not met the goal and 8 people that have.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=212)** And that's the IIF function.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/the-iif-logical-function?u=76281980&t=213)** You can use it to help evaluate your data to determine if a row belongs in one bucket or another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** iif (8), sql (1), where (1), select (1), group (1)
> **CLI Commands:** find (2), make (1)
> **SQL:** where (1), select (1), group by (1)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Write a CASE statement
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=0)** - [Presenter] The case statement is not technically a function, but I wanted to discuss it here since it can serve a similar purpose to the Iif function in that it's used to evaluate inputs and return values based on your specified conditions.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=14)** Let's take a look at a couple of tables first.
>
> **[0:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=16)** First one I want to see is the Production.ProductModelProductDescriptionCulture table, this is really long.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=22)** Let's go ahead and highlight line number one and execute it and we'll take a look at the contents.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=26)** This table is used to localize product descriptions into different languages.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=32)** The first six records describe product number one and we have a number of product descriptions that are stored in the Product.ProductDescription table.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=40)** These ID numbers in the second column point to those text descriptions.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=45)** The third column here defines the language that the description is in.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=49)** These are language abbreviations, and to see exactly what they mean we can look in the Production.Culture table.
>
> **[0:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=56)** I'll highlight the query on line number three and execute that.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=60)** This will translate those letter codes in the CultureID column to the full name of the culture.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=66)** Now we know that we can piece all of this together using a join statement and pull columns from both tables to get the full name of the language along with the IDs of the product descriptions.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=77)** But we can also get to that information with a case statement.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=81)** I have that listed out starting on line number six.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=85)** I'm going to go ahead and move these results down so we can see the full script.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=89)** I'll start with the standard Select clause with the columns that I want from the original table we'll pull the ProductModelID, ProductDescriptionID and the CultureID columns.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=100)** Then I include a case statement.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=103)** The case statement will evaluate the values in the CultureID column.
>
> **[1:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=107)** Below that, we list out the different possibilities and what we want returned in each case.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=112)** So if the CultureID column contains the text ar, then we'll output the text Arabic.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=119)** When it contains en, then we'll output the text English.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=124)** By listing out all of the possibilities and the output we want in each case, we can translate each language code into the full name, and we're doing that completely within the code of the select query.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=135)** We're not creating a join to the other table.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=138)** In the From clause, you can see we're only pulling data from the one table.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=142)** At the end of the case statement, if there are any other language codes that we haven't accounted for, then we'll output the text undefined.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=150)** Once all of the when, then and else statements are complete, we enter the case statement and name the column with an alias as usual.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=159)** I'm giving this as name CultureName.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=163)** All right, let's go ahead and highlight line six down through 19 and execute the query.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=169)** This returns the ProductModelID, the ProductDescriptionID and the CultureID columns straight out of the table.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=175)** Then, using the case statement we're translating those culture ID abbreviations into the full name.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=181)** Once again, we're doing this all inside of the case statement and we're not using a table join to get that data.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=187)** Now there's one more example of a case statement written down below starting on line 22.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=192)** This one looks at the employee data.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=195)** Let me just go ahead and execute this query and then we'll talk about the results and the code.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=199)** The employee table contains columns for the BusinessEntityID and the MaritalStatus.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=204)** This just contains a single letter code, either S or M.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=209)** With the case statement on lines 24 down through 27, we can expand on the letter code to output the full definition.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=217)** Where the marital status is stored as the letter S, we'll output the text Single.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=221)** And when it's an M, we'll output the text Married.
>
> **[3:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=225)** You're seeing that column right here.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=227)** This creates a new column that's much easier to understand.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=231)** Next up, we have a column that contains the SalariedFlag.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=234)** This is stored as a bit data type so it returns either a one or a zero.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=240)** Again, using a case statement we can translate that in the queries results.
>
> **[4:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=244)** A code of zero means the employee is paid an hourly wage and a code of one means that they're paid an annual salary.
>
> **[4:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=252)** These text translations are put over here in the final column.
>
> **[4:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=256)** Now, the bit data type that's used in the SalariedFlag column is very efficient in terms of space and how quickly the database engine can store and retrieve that data.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/write-a-case-statement?u=76281980&t=265)** And using a case statement, we can translate what that actually means when it comes time for a human to make sense of this information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), product (5), next (1), database (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [presenter] (1)

#### Challenge: Use functions in a SQL query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=0)** - [Instructor] We've seen a lot of different functions that you can apply to your SQL Server databases.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=11)** Let's combine a few of them and apply what you've learned to a challenge.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=15)** Locate the file called ChallengeFive-Start.sql in the Chapter Five folder of the Exercise files.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=22)** Inside you'll find four different challenging scenarios.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=26)** Use some of the functions covered in this chapter to arrive at a solution for each one.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=31)** There may be more than one way to interpret the scenario, so be creative with what you've learned and write queries that you think best satisfies each requirement.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-functions-in-a-sql-query?u=76281980&t=40)** I think this challenge will take about 10 to 15 minutes to complete all four parts, and I'll walk through my solutions to each scenario in the next movie, have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[Databases]] (1), [[SQL]] (1), next (1)
> **File Paths:** challengefive-start.sql (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Use functions in a SQL query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=0)** (gentle music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=6)** - [Instructor] I hope you are able to flex a bit of your new SQL Server function muscles in answering the following questions.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=12)** Let's take a look and go over each one, one at a time.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=15)** Now I've got the ChallengeFive-Start file open up here on the screen, and we'll just start here with question number one.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=20)** It says, using the Production.ProductInventory table, combine the LocationID, Shelf, and Bin values into a single column with hyphens between each one.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=30)** All right, so let's go ahead and go into the tables folder for the database.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=34)** And we'll just find the table that we're going to work with, that is Production.ProductInventory.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=39)** And we can take a look at the columns inside of it.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=42)** So we have the ProductID column that we're going to use or the LocationID.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=46)** Then we also have the Shelf and the Bin columns.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=49)** And these are the ones that we want to combine together.
>
> **[0:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=51)** So let's go ahead and start a SELECT statement here.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=53)** We'll select the... Let's get the ProductID so we'd know what product we're talking about.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=59)** And then I'll also reveal the LocationID, the Shelf, and the Bin columns that were requested in the challenge there.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=72)** And we're going to say FROM Production.ProductInventory.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=80)** And we'll just start there.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=81)** I'm not going to combine anything first.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=82)** I'm just going to pull the data out of the database, make sure I'm getting good data.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=86)** Okay, so there's our individual ProductIDs and where they're located in our warehouse.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=91)** So now I need to combine the LocationID, the Shelf, and the Bin columns into a single column with hyphens between each of these values.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=99)** Now, I could use the CONCAT function, or I could use the CONCAT WS function.
>
> **[1:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=105)** If I use CONCAT, then I need to specify the hyphen for every single position here or between every one of these three columns.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=112)** So this is a good instance where we'll use CONCAT WS instead.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=117)** So I'll use CONCAT_WS, then I can define the hyphen as our separator character here as the first argument and then I'll just list out the other three columns that I want, so LocationID, Shelf, and Bin.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=133)** And let's go ahead and name this.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=134)** I'll call it as, how about Combined Location?
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=140)** All right.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=142)** Let's go ahead and highlight that query there.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=144)** Press Execute.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=145)** And there's our Combined Location that we have the LocationID, the Shelf, and the Bin in a single column with hyphens between each of those values.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=153)** So that is my solution to the first question.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=156)** Let's move onto number two.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=158)** Okay, this one says, using the HumanResources.Employee table, locate all of the people hired in February of any year, then identify the date that their 90-day new hire performance evaluation is due.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=172)** Okay, so we're going to go into the HumanResources.Employee table.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=177)** There it is right there.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=178)** Take a look at the columns.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=179)** All right, this table has a lot of columns, so which ones do we want to use.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=183)** Using the HumanResources.Employee table, locate all the people hired in February.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=187)** Okay, so I guess I just need the BusinessEntityID, that'll give me the employee ID number as well as their hired date.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=194)** I don't think I need anything else for this.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=197)** So we'll just start there.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=199)** BusinessEntityID and the HireDate column.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=206)** And let's pull this from HumanResources.Employee.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=215)** All right, let's highlight that.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=216)** Let's see where we're starting with.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=218)** Okay, so there's the employee ID number as well as their hire date.
>
> **[3:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=222)** Okay, now I need to locate all the people hired in February of any year.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=227)** Now we could do that in a couple of ways here.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=229)** We have the dates that they are hired.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=231)** So I'm only interested in the people that were hired in February.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=234)** It doesn't matter which year they are in.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=236)** So I'm going to actually use a WHERE clause for this.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=239)** So we can say WHERE, the, MONTH, use the MONTH function to extract the month number from the HireDate, where the month of the hire date is equal to two.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=250)** And if I highlight all of this and press Execute again, that should only return people that were hired in February, so the second month, and it doesn't matter what year they're in.
>
> **[4:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=259)** So if I scroll through here, we should see only people hired in the month of February, and that's looking pretty good.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=265)** Okay, so that answers the first couple of parts.
>
> **[4:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=268)** Then identify the date that their 90-day new hire performance evaluation is due.
>
> **[4:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=274)** So we're dealing with a mathematical addition to a date.
>
> **[4:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=278)** We're going to add 90 days to their hire date to figure out when their performance evaluation is due.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=284)** So for that, we'll use the DATEADD function.
>
> **[4:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=288)** And this has a couple of parameters here.
>
> **[4:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=290)** First, what are we going to add?
>
> **[4:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=292)** We're going to add days.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=293)** How many days are we going to add?
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=295)** 90.
>
> **[4:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=296)** And to what are we going to add it?
>
> **[4:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=298)** We're going to add those to the original hire date.
>
> **[5:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=301)** So that finishes the DATEADD function.
>
> **[5:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=303)** And let's call this as 90 Day Evaluation Due.
>
> **[5:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=313)** That's right, let's highlight 18 down to 22, and press Execute.
>
> **[5:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=317)** All right, so now I have only people hired in February and I have the date that's approximately three months after their original hire date.
>
> **[5:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=325)** Now there might be some variation because some months have more than 31 days in it.
>
> **[5:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=329)** You might have a slight variance.
>
> **[5:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=330)** So we have from February 8th, 90 days later would be May 9th.
>
> **[5:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=335)** All right, so that is my answer to question number two.
>
> **[5:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=339)** All right, number three.
>
> **[5:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=341)** Let's view the CreditRating information for each vendor in the Purchasing.Vendor table.
>
> **[5:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=346)** All right, let me just go ahead and find that right away.
>
> **[5:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=349)** We're going to go to Purchasing.Vendor.
>
> **[5:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=353)** We'll open that up.
>
> **[5:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=354)** Okay, so there's our columns.
>
> **[5:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=356)** So we need to find the credit rating information for each vendor.
>
> **[5:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=359)** So I need their BusinessEntityID.
>
> **[6:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=360)** We also have a vendor name.
>
> **[6:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=362)** We can take a look at that.
>
> **[6:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=363)** So let's pull out that as well.
>
> **[6:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=365)** Let's SELECT BusinessEntityID and the NAME.
>
> **[6:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=372)** Now, let's see, I also want the credit rating information and there is a column named CreditRating, so let's just go ahead and add that now.
>
> **[6:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=381)** Okay, and we're going to pull that from Purchasing.Vendor.
>
> **[6:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=387)** All right, let's highlight this and see what we're starting with.
>
> **[6:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=390)** Okay, there's the ID numbers, the name of each vendor, as well as their credit ratings.
>
> **[6:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=394)** So we have a 1, a 2, a 1, a 2.
>
> **[6:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=397)** Couple of people, lots of 1s.
>
> **[6:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=398)** There's a 4 right there, 3s, and Merit Bikes has a 5 credit rating.
>
> **[6:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=403)** Okay, so that's the first part.
>
> **[6:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=405)** View the CreditRating information for each vendor in the table then use a CASE statement to translate the 1 through 5 credit rating, that we saw here, into the text ratings of poor, below average, average, good, and excellent.
>
> **[6:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=418)** All right, so we're going to add another column into the query.
>
> **[7:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=421)** This is going to be used a CASE statement and we'll evaluate the credit rating data.
>
> **[7:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=429)** All right, so when the credit rating is a 1, then we will return the text poor; when the credit rating a 2, then return the text below average; when it's a 3, then that is average; and when it's a 4, then that is good; and when the credit rating is a 5, then that is excellent.
>
> **[7:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=463)** And when you were solving this, if you went in reverse order, if you said when 1 is excellent and 5 is poor, that's totally fine.
>
> **[7:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=469)** I actually don't know which way it's supposed to go anyway, so we're just making an assumption here on this database.
>
> **[7:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=475)** Okay, so credit ratings and the text ratings, converting them into those values, that finishes my CASE statement.
>
> **[8:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=481)** I'm going to move this down so we can see more of the screen.
>
> **[8:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=484)** So that finishes the CASE statement so we need the keyword END here.
>
> **[8:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=490)** And let's call this, hmm, CreditEvaluation.
>
> **[8:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=497)** All right, let's go ahead and highlight all of that, and press Execute.
>
> **[8:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=501)** All right, there is the original credit rating data that's stored in the database, and there is our new evaluation, translating that into a text equivalent, so poor, below average, poor, below average.
>
> **[8:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=512)** Looks like we got a lot of people that are poor credit.
>
> **[8:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=514)** There's an average.
>
> **[8:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=515)** Oh, there's somebody, there's our Merit Bikes at a 5 and they have excellent credit.
>
> **[8:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=520)** So that is my solution to the third problem.
>
> **[8:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=524)** All right, let's move on to number four.
>
> **[8:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=527)** So we're going to select three random people from Sales.Salesperson.
>
> **[8:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=531)** Okay, let's go into the Sales.Salesperson table.
>
> **[8:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=535)** There it is right there.
>
> **[8:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=537)** Take a look at our columns.
>
> **[8:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=538)** Okay, we need three random people.
>
> **[9:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=540)** So I guess we just need their BusinessEntityID.
>
> **[9:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=543)** There's nothing in here about names.
>
> **[9:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=544)** We could link it to the Person table, but that's not really asked for in the challenge.
>
> **[9:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=549)** So I'll go ahead and skip that.
>
> **[9:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=551)** So we'll just SELECT the BusinessEntityID and FROM Sales.Salesperson, we'll start there.
>
> **[9:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=562)** Okay, select three random people.
>
> **[9:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=565)** So how are we going to get three random people?
>
> **[9:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=566)** Well, we can use the NEWID function.
>
> **[9:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=568)** In fact, I can create a new column here with NEWID, and I'll just name this as newid.
>
> **[9:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=576)** And then we can do a WHERE clause on it, where the... Let's see, how about we say SELECT BusinessID, NEWID, FROM Sales.Salesperson.
>
> **[9:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=588)** We can ORDER BY the newid and then we'll select the top three.
>
> **[9:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=598)** So that's one way we can do it.
>
> **[9:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=599)** Let's go ahead and execute that.
>
> **[10:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=600)** Okay, so that's giving me three people and if I press Execute again, I get three different people every time I execute it.
>
> **[10:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=605)** So that's one way we can do it.
>
> **[10:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=607)** One of the issues that I have with this method though is that it puts the newid as its own column which, you know, may or may not be great.
>
> **[10:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=614)** Another way that we could do this is actually to not put this in as a column of data.
>
> **[10:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=619)** We could say SELECT TOP 3 BusinessEntityID FROM Sales.Salesperson.
>
> **[10:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=623)** And we can say something like... Well, we could just ORBER BY the NEWID function and put that in right here in the ORDER BY clause.
>
> **[10:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=633)** Put that function right there in ORDER BY, and this should run exactly the same.
>
> **[10:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=638)** So Execute.
>
> **[10:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=638)** Okay, that gives me three people, 282, 281, 287.
>
> **[10:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=642)** Execute again.
>
> **[10:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=643)** All right, it gives me three different people, 278, 285, and 289.
>
> **[10:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=647)** So that's a better way to do it.
>
> **[10:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=649)** It's a little bit cleaner, I think, just because it doesn't include that newid column with just a bunch of junk data that we're not using except to find three random people.
>
> **[10:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=658)** So this is the way I'm going to do it then.
>
> **[11:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=660)** Okay, so we've got that first part.
>
> **[11:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=661)** Select three random people from the table, then use an IF function, or an IIF function to compare their SalesYTD to the SalesLastYear and indicate whether their performance has increased or decreased.
>
> **[11:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=674)** Okay, so let's go ahead and just add in those columns so we can see what the data looks like.
>
> **[11:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=679)** So SalesYTD and SalesLastYear, and I can verify those two columns are over here.
>
> **[11:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=692)** So there's SalesYTD and SalesLastYear.
>
> **[11:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=694)** So those are columns from the original table.
>
> **[11:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=696)** All right, let's go ahead and execute that.
>
> **[11:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=698)** Okay, so I have three random people, their sales year to date and the sales last year.
>
> **[11:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=703)** So I want to use IIF function to compare those two values.
>
> **[11:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=707)** Come down here, IIF.
>
> **[11:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=709)** So I want to say if the sales last year... I want to see if their has increased or decreased.
>
> **[11:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=715)** So I'm going to compare the sales year to date and see if is it greater than sales last year?
>
> **[12:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=725)** So that's my condition.
>
> **[12:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=726)** So this is what I'm going to check.
>
> **[12:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=727)** If the sales year to date is greater than the sales last year.
>
> **[12:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=731)** And if that's true, then that means their performance has increased over last year.
>
> **[12:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=735)** So it'll say increased sales performance.
>
> **[12:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=742)** And then if that is false, that means that their performance has decreased.
>
> **[12:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=746)** In fact, let me just go ahead and put this on the next line so we can see it.
>
> **[12:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=751)** And this will be decreased sales performance.
>
> **[12:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=757)** So there is my condition.
>
> **[12:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=758)** So here's the condition we're evaluating.
>
> **[12:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=760)** Is the SalesYearToDate greater than the SalesLastYear?
>
> **[12:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=763)** If this is true, they increased sales performance and if that is false, their sales year to date is not greater than last year, then that means they have decreased sales performance.
>
> **[12:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=774)** All right, let's go ahead and run that and press Execute.
>
> **[12:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=776)** And oh, I have a error here, and that's because I forgot to close the parenthesis for the FROM or the IIF function.
>
> **[13:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=784)** So it has an open parenthesis here, need a close parenthesis there.
>
> **[13:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=788)** I might as well also name this column while I'm here.
>
> **[13:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=791)** So I'll say AS, and let's call it, Sales Evaluation.
>
> **[13:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=798)** Okay, that's probably better.
>
> **[13:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=801)** Execute.
>
> **[13:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=802)** All right, there we go.
>
> **[13:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=803)** There's our SalesYearToDate, SalesLastYear.
>
> **[13:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=805)** This person has increased sales performance so their sales year to date is higher than last year's.
>
> **[13:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=810)** This person here has decreased and we can see that their sales year to date are less than last year's sales.
>
> **[13:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=816)** And if I press Execute again, it gives me three different people, I can see their evaluation right over there.
>
> **[13:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=822)** All right, so that's my solution to the fourth problem and that completes the entire challenge.
>
> **[13:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-sql-query?u=76281980&t=827)** So I'll go ahead and save this as ChallengeFive-Complete.sql, and you can compare my solutions against the ones that you came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (4), [[Microsoft SQL Server|Sql server]] (1), product (1), next (1)
> **Env Vars:** select (5), concat (4), case (4), newid (4), iif (4)
> **SQL:** select (5), where (3), order by (3)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is a  (4), means that (1)
> **UI Navigation:** select the (3), go to (1)
> **File Paths:** challengefive-complete.sql (1)
> **Speakers:** - [instructor] (1)

#### Solution: Use functions in a query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=5)** - [Instructor] In this challenge, we're given some subscriber data and we need to return it in a way that's formatted for a report.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=12)** The table is called SubscriptionMembers, and I'll just select everything out of that table to start.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=17)** So we have the MemberID column.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=20)** We have the first and last name as two separate columns, and we have an ID number for the subscription plan.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=26)** It's either one, two, or three.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=28)** The challenge asks us to return the MemberID column just as it is.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=33)** We're going to format the names to give the first initial of the first name, a period and a space, and then the full last name data.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=43)** And we'll combine that all into a single column.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=45)** And then finally, we need to take this SubscriptionPlanID number and translate it into the text, Basic, Standard, or Premium.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=54)** So that's all the different formatting things that we need to do to this data, and we could do that with a bunch of different formulas.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=60)** So I'll start by grabbing the MemberID column.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=65)** The next one is going to calculate the name and it's going to format it.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=70)** And we're going to be joining two different columns together.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=72)** So for that, we can use a CONCAT function to concatenate pieces of text together.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=78)** The first element we want is the first initial.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=80)** So I can say the LEFT function of our FirstName, comma, 1.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=86)** And that's going to grab the first letter out of the FirstName column.
>
> **[1:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=90)** We're going to concatenate that to a period and a space.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=94)** So after a comma, I'll type in single quotation marks, period, Space, enclosing single quote.
>
> **[1:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=100)** So this is the second element that's going to be concatenated, and a comma there.
>
> **[1:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=105)** The third element that it'll concatenate is the LastName data.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=111)** And we'll give this an alias.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=113)** I'll call this column as FullName.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=116)** So that is our second column to return in this query.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=119)** And I'm just going to test my code now just to make sure that it's calculating correctly.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=123)** All right, so I've got my full names being calculated with the first initial, period, space, and the LastName there.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=131)** The third column that we're asked for is to translate the ID numbers for the plan into the text, Basic, Standard, or Premium.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=139)** And for that we can use a CASE statement.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=142)** So I can say CASE, when the SubscriptionPlanID is equal to 1, then we'll put in the text Basic, when the SubscriptionPlanID is equal to 2, then we'll put in the text Standard.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=166)** And when it's 3, then we'll put in the text Premium.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=175)** Now, just in case, there's any additional numbers in the database, we should always put in an ELSE statement here at the end just to capture any additional statements.
>
> **[3:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=182)** So if the number is not 1, 2, or 3, if there happens to be a 4, or a 5 in the table, we'll just return the text Unknown.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=192)** That finishes the CASE statement. So I'll say END.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=194)** And we'll give the column an alias called SubscriptionPlan.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=200)** And that should finish the CASE statement.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=202)** Let me test my code here. And there we go.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=204)** We're translating that ID number into the text, Basic, Standard, or Premium for each of our members.
>
> **[3:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=210)** So this is one way that we can solve this challenge with this SELECT statement here.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=215)** Now, because the CASE statement is evaluating the same column in each of these cases, we can simplify it a little bit.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=223)** I can say CASE SubscriptionPlanID, and then I don't need it here inside of the WHEN statements.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=232)** So I can just say WHEN 1 THEN 'Basic', WHEN 2 THEN 'Standard', and WHEN 3 THEN 'Premium'.
>
> **[4:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=243)** So we'll get rid of the name of the column as well as that equals sign.
>
> **[4:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=246)** And if I test my code again, you're not going to see a difference, it's identical.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=250)** So it's just an easier way to type it out when all of your cases are referring to the exact same column every time.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-functions-in-a-query?u=76281980&t=257)** So this is a slightly modified way, but the same solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (1), database (1)
> **Env Vars:** case (6), concat (1), left (1), else (1), end (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)


### 6. Writing SQL Scripts

[↑ Back to Table of Contents](#table-of-contents)

#### Change database context with USE
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=0)** - [Instructor] I think writing queries against a database can be a fun process of diving into the data tables and seeing what kinds of useful insights you can reveal.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=9)** Queries can get rather long, especially when you're joining multiple tables together, performing calculations, and grouping rows to get the final output.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=17)** So after you've spent a bunch of time crafting the perfect query, it would be a sensible thing to want to save the text of that query as a script.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=26)** That way you can easily run it again at a later date or share it with a colleague to allow them to benefit from all of your hard work.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=33)** Before you do that though, there are a couple of enhancements that you can add to your queries to make sure that anyone who runs it has a good experience.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=41)** Let's create a new query, and let's suppose that this simple select statement is a masterpiece of query design.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=52)** When you execute the query it goes out to the selected table and returns all of the columns that you've asked for.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=58)** So far, so good, but how does SQL Server know to query the Adventure Works database and not some other database that happens to be on the same server?
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=67)** Here in Management Studio we can adjust the context of the query using this dropdown menu in the toolbar.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=74)** But not everyone uses Management Studio for working with SQL Server.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=78)** Some people log in using a text-based console or another graphical front end that might have a different interface.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=85)** If we switch our context to a different database, for instance I'll select the master database, and try and execute the query again.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=91)** This time I get an error.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=93)** That's because there is no person table in the master database.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=97)** In order to make sure that the query executes in the intended database, you should add a use statement to the beginning of your script.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=106)** I'll come up here to line number one and I'll just type in use and the name of the database, Adventure Works 2019.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=113)** We can also include the go utility command on a line all by itself.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=118)** This is not a structured query language command so don't put a semicolon at the end of it.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=123)** Go simply tells SQL Server to execute the lines above as a separate batch of commands from the ones below.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=130)** The go command helps ensure that operations get executed in the proper sequence.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=134)** While go is not technically required after the use command, some commands such as create schema will only work if they're isolated as the only command in the batch.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=144)** For instance, if I come down a couple of lines and type create schema test, you'll see that you get a red underline, and if you hover your mouse over it, it says that the create schema command must be the only statement in the batch.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=159)** The solution here is to add go on either side of the create schema command.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=166)** When I do that, the error goes away.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=168)** If I were to execute the query now, the create schema test command will get isolated and run by itself before selecting information out of the person table.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=178)** I'll go ahead and remove this from the script though since I don't actually want to create any schemas right now.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=183)** So that's the use command and the go command.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=186)** Now, when you execute the query, even if you're inside of the master database still and press execute, you'll see it jumps over to the AdventureWorks database and executes properly.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/change-database-context-with-use?u=76281980&t=197)** The use statement will improve the experience of other users running your script by automatically ensuring that the query is pointed to the correct database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), [[Microsoft SQL Server|Sql server]] (3), management (2), data (1)
> **Env Vars:** sql (3)
> **UI Navigation:** dropdown (1), in the toolbar (1), select the (1)
> **Analogies:** for instance (2), such as (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add comments to a script
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=0)** - [Instructor] When sharing your scripts with other users, it's advisable that you include comments to describe exactly what your query does.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=7)** Transact-SQL supports two different methods for including comments in your queries.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=12)** Let's write a simple SELECT statement that pulls some information out of the tables.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=20)** The first type of comment I want to look at is called a line comment.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=24)** You can add one to your text by typing in two hyphen characters.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=28)** Let me add in a line comment up here on line number 1.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=33)** We'll say, "This query selects people's names from the AdventureWorks database."
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=37)** If your text is really long and you want to wrap it onto multiple lines, for instance, let's break it right here after the word from, make sure you put two hyphens before every single line of your comment.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=48)** Otherwise, SQL Server will interpret that text as commands that the server will try and execute.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=54)** Here in Management Studio, the text gets colored green to indicate commented lines.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=60)** Using the hyphen notation, you can also add comments to the end of the lines in your script.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=64)** For instance, I'll add comments to each line in the SELECT statement.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=68)** I'll put a couple of spaces in here to move that over to the right.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=72)** Then we'll add in a comment that this row stores the First Name data.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=78)** We can also add a comment for the Last Name data.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=85)** Comments are also useful for temporarily removing lines from your scripts so that they don't execute.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=91)** This is useful for bug testing and development.
>
> **[1:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=94)** For instance, if I comment out this line here that includes the Last Name column, you'll see that that entire line turns green.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=101)** Now, if I were to execute the script, the query will just skip right over that column and act as if I'm only asking for the First Name from the Person table.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=109)** As far as the execution goes, this query is just asking for the single column.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=114)** This is one of the benefits of spacing your queries out like I've done here, with the comma and each column name on their own row.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=120)** It makes them very easy to comment out lines that you don't want to include.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=125)** Then if I want to go back to the prior state, I'll just remove those two hyphens.
>
> **[2:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=129)** That uncomments this line.
>
> **[2:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=131)** I'll press Execute, and I get both columns again.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=134)** Now, you can even create comments with a shortcut key combination on your keyboard.
>
> **[2:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=138)** To do this, place your cursor on the line that you want to comment, and then press and hold the Control key on your keyboard, and then tap K and C.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=147)** That'll automatically add in the two hyphens on the line.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=150)** To uncomment a line, hold down the Control key and press K, then U.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=156)** That'll uncomment that line.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=158)** So those are line comments.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=160)** If you have a lot of texts that you want to comment, you can also create a block comment.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=165)** Block comments use the forward slash and asterisk characters.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=170)** For instance, if I wanted to comment out this entire SELECT statement, rather than putting two hyphens at the beginning of every line, I could go above the first line and type /*.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=181)** Then I come to the end and type */.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=188)** That will end the block comment, and I can continue on writing additional SELECT statements down below.
>
> **[3:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=198)** With the block comment, SQL Server will skip over all of that code and only execute the statements that aren't commented out.
>
> **[3:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=205)** But it leaves the code available for you in the script so that you can refer back to it or easily uncomment it again when you want to run it.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=213)** I'll go ahead and uncomment these by removing the block comment.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=216)** And it's right back to where it was.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/add-comments-to-a-script?u=76281980&t=218)** So those are two ways that you can incorporate comments into your SQL Server scripts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), data (2), [[Transact-SQL (T-SQL)|Transact-sql]] (1), database (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (4), select (4)
> **SQL:** select (4)
> **Analogies:** for instance (4)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### When to use square brackets
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=0)** - [Instructor] When you right-click on any table name in the Management Studio Object Explorer window, and select top 1,000 rows, you might have noticed that the query that's generated includes a lot of square brackets.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=12)** Those brackets are included so that SQL server can correctly interpret queries that reference tables or column names that includes spaces.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=20)** None of the tables or column names in this database actually do include spaces, but the automatically generated scripts include the square brackets anyway.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=30)** To see how a query might fail if you omit the brackets when they're needed, I'm going to create a simple query.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=36)** So far so good.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=37)** Our table and query names don't include space characters so the query runs without any issue.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=43)** However, if I try and add aliases that do include spaces, for instance, we'll call this first name column as, person first name, and we'll call the last name column as, person last name.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=59)** Now, when I try and execute the query, I'm going to get a syntax error.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=63)** SQL server reads this as, select the first name column as person, and then it doesn't really know what to do with the rest of this.
>
> **[1:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=71)** To fix this, we simply wrap the aliases in square brackets or we could also use quotation marks in this case.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=77)** I'll go ahead and just use the square bracket notation around both of our aliases.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=82)** Now the query will run without any issue, and we get back the full column names that we intended including the space characters.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/when-to-use-square-brackets?u=76281980&t=89)** The square brackets are SQL server's notation for keeping all of the words together as a single unit, and you'll need them anytime your queries reference object names that include spaces or other special characters that could confuse the system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), management (1), database (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (3)
> **UI Navigation:** right-click (1), select the (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 7. SQL Subqueries

[↑ Back to Table of Contents](#table-of-contents)

#### What is a subquery?
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=0)** - [Instructor] SELECT queries can be used inside of other queries.
>
> **[0:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=4)** When this occurs, they're called subqueries or inner queries.
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=8)** When the SQL Server Database Engine executes a query, the subquery will run first and returns values that can then be used by the outer portion of the query.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=17)** Let's see how this works by creating a subquery in the SELECT list of another query.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=22)** Let's first take a look at the data in the SalesPerson table.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=31)** This query will show me how much money each salesperson has contributed to the company's bottom line year-to-date.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=38)** The top moneymaker is currently this person here, BusinessID number 276.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=44)** Now, if I wanted to find out how far every other salesperson was away from the top position, I could find it by simply subtracting their current sales number from the sales number of the person in the first position.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=57)** You might remember that I can place a static value in the SELECT list and have it appear for every record.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=62)** For instance, I'll simply add in a new column that returns the number 5.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=66)** I'll press Execute, and we get that column right over here.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=70)** We're going to use this fact, but rather than hard code the current highest sales value, I'll use a subquery to calculate the highest sales value so that the query will always be correct as additional sales are made for each person.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=84)** First, let's work through the query that'll get us the highest sales figure separately.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=89)** I'll do that on line number 7.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=91)** Now, we could do it with a TOP query, something like this.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=104)** We'll select the SalesYTD column from the table, and we'll order it by SalesYTD descending.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=110)** That'll place the value with the highest number at the top.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=113)** Then I'll use a SELECT TOP 1 clause in order to select only the top value.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=119)** When I run these three lines and press Execute, you'll see it just returns the single highest number.
>
> **[2:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=124)** Another option that we can use is the MAX function.
>
> **[2:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=127)** Let me go ahead and write another query starting on line 11.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=139)** This one will just take a look at the SalesYTD column and find the maximum value.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=144)** Let me highlight lines 11 and 12 and press Execute, and you'll see we get the exact same number returned.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=150)** Either way, we're getting the same highest sales year-to-date value.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=153)** Doesn't really matter which of these two queries we use.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=156)** The version that uses the MAX function is a little bit more efficient since it doesn't require SQL Server to sort all of the rows first before it can find the top value.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=166)** So I'm going to use this version and copy it to my clipboard.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=170)** Now we can go back up to the main query.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=173)** I'll include this number as the third column of our query.
>
> **[2:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=176)** To do this, I'll replace the number 5 and I'll open up a parenthesis.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=180)** Paste in the SELECT statement that we just copied to the clipboard.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=183)** Now I also need to get rid of the semicolon here at the end, and I can close the parenthesis.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=189)** Let me tab this over just so we can be extra clear about what's happening.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=193)** So now this query is asking for three columns, the BusinessEntityID and the SalesYTD values coming straight out of the table, and we're also getting a static value that's being generated by this inner subquery there.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=207)** When I press Execute to execute just this first query, we'll see we get that column over here on the right.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=213)** The number appearing in the third column is the same all the way down, and it matches the number here at the very top for the first BusinessEntityID person.
>
> **[3:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=222)** Now that we have this value for every row, we can do some simple math to find out how far each person is from taking the top sales position in our ranking.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=232)** I'll add one more column into the table.
>
> **[3:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=235)** We'll use the same inner query, so I'll go ahead and just paste that in again and get rid of the extra semicolon and close the parenthesis.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=241)** Then I'll subtract the SalesYTD value.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=247)** I'll name this column AS SalesGap.
>
> **[4:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=252)** Once again, let me just tab this over to be extra clear about what's happening.
>
> **[4:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=256)** So here is the definition for the fourth column of our query.
>
> **[4:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=260)** We're taking the same maximum YTD sales value from the whole table, and we're subtracting from it the SalesYTD of each individual person.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=269)** That'll leave us with the distance to the top position.
>
> **[4:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=272)** All right, let me go ahead and highlight lines 1 down through 8 and press Execute.
>
> **[4:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=276)** And you can see the result.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=277)** The very first person has the sales value that's the highest, so they don't have a SalesGap, so it's 0.
>
> **[4:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=283)** The next person down is $134,000 away from attaining the top position.
>
> **[4:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=289)** The third person down is $488,000 away from the top position.
>
> **[4:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=294)** So the results allow us to easily see exactly how each salesperson is performing relative to each other.
>
> **[5:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/what-is-a-subquery?u=76281980&t=301)** The subquery incorporated in the SELECT list allows you to return a single static value for every row, or it can be used in a calculation that'll return a customized value for every record in the outer query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), database (1), data (1), next (1)
> **Env Vars:** select (6), sql (2), top (2), max (2), ytd (1)
> **SQL:** select (6)
> **CLI Commands:** find (5)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Use a subquery in a HAVING clause
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=0)** - [Instructor] Sequel subqueries can also be used in the wear or the having clause of a select statement.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=6)** This will allow you to filter your rows based on dynamic calculations that are kept up to date as the data in your database changes.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=13)** I want to start by reviewing the data that's stored in the sales order detail table.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=24)** You'll recall that this table is structured in a way that each sales order has a number of lines.
>
> **[0:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=30)** These first couple of results from line one all the way down to line number 12, all correspond to these same sales order ID.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=38)** That particular sales order was made up of 12 individual lines, they were ordered for 12 different products, we have their different quantities, and their total price over here on the far right for each line.
>
> **[0:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=50)** To get the total value of the sales order, we can add an aggregate function to get the sum total of the lines and group that rows by the sales order ID.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=59)** I'll come back up and make changes to my select query.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=63)** We'll select the sales order ID column, as well as the sum of the line total column.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=74)** I'll name this as order total.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=78)** We'll select it from the same table but now I also need to add in a group by clause.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=86)** We'll group everything by the common sales order ID.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=89)** Now when I execute the query, I get a single row for each sales order as well as the total for the entire order.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=96)** Now, if I wanted to find all of the orders above a certain value, I use a having clause.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=102)** We'll put that after the group by clause.
>
> **[1:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=112)** For instance, I can find all of the orders where the line total is greater than $20,000.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=117)** When I press execute, it shows me that I only have a total of 1,521 orders that we're above $20,000.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=126)** We're using a having clause here instead of a wear clause because I'm filtering the groups not the individual rows inside of each group.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=134)** Now, this query hard codes the value of 20,000 into it, and every time it runs it'll use the same constraint on these groups.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=143)** But what if I wanted a dynamic constraint?
>
> **[2:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=146)** I'd now like to see only the orders that are above the average price.
>
> **[2:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=150)** The average order total will change as new orders are placed and it'll go up or down over time.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=157)** I can use a subquery to calculate the average order price, and then use that value here in the outer query.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=165)** First, like before, it's easiest if we figure out the subquery syntax separately.
>
> **[2:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=170)** So I'll come down and we'll start that on line number seven.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=173)** The first part is to return the values that we want to average.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=179)** I'll sum up all the line totals and I'll create this as a column called my values.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=185)** We'll pull the information from the sales.salesorderdetail table, and we'll group by sales order ID.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=192)** This will just return a single column of our sales order values.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=196)** Now, I want the average from this list of results.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=200)** If you think of these results as their own data table, it might give you a hint on how to structure the statement.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=206)** I want the average of the column, my values, from this table of results.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=213)** To do that, I'll modify this query.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=215)** Let me add a line right above it, we'll select the AVG function applied to a table called, result table, and the column called, my values.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=227)** I'll name this as, average value.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=232)** Then we can say from and the table that we want to pull it from.
>
> **[3:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=235)** Well, that's this table right here in these results, that's being generated by the select statement that's now starting online number nine.
>
> **[4:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=242)** I'll go ahead and press the delete key on my keyboard to move that select statement up, and let me just tab everything else over so it's a little bit clear what's happening.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=250)** So we're saying from this table.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=253)** Now I'm going to go ahead and get rid of the semicolon at the end here and close the parenthesis.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=258)** I also need to give this table a name, we'll call it as, result table.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=265)** That way this select statement or the results from the select statement, are being treated as a table named, result table, then, or select a column named, my values, from that table here on the top.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=277)** Finally, we're finding the average of this column.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=280)** That'll return it as a single value called, average value.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=284)** Okay, let me go ahead and run line seven down through 10 and press execute, so you can see the result there.
>
> **[4:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=290)** So there is our single column called, average value, and this is the average for all of our orders.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=295)** Now that we're returning a single average value, we can use that in the having clause of the original query.
>
> **[5:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=302)** With it still highlighted, I'll copy it to my clipboard and then I'll scroll back up.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=307)** So instead of saying having a sum of the line total greater than 20,000, I now want to say having a sum of the line total greater than this average that's being calculated with this other select statement.
>
> **[5:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=320)** I'll go ahead and get rid of the number here 20,000, and I'm just going to come down and open up a parenthesis.
>
> **[5:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=326)** Then I'll paste in the select statement that we just copied at the clipboard and close the parenthesis at the very end.
>
> **[5:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=333)** Let me go ahead and minimize this results window so we can see the full text right there.
>
> **[5:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=338)** Finally, I'll just tab everything over again so it's a little bit clear what's going on.
>
> **[5:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=342)** We're selecting the average line total and we're comparing it against the result of this select statement right there.
>
> **[5:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=349)** Let me highlight everything from line one down through line nine, and we'll press execute.
>
> **[5:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=354)** And here is our final answer.
>
> **[5:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=356)** The result shows me that we have 4,007 sales orders that are above average.
>
> **[6:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=361)** This particular query required two nested subqueries.
>
> **[6:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=365)** One to group and some the line totals, then another to find the average value of those totals.
>
> **[6:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/use-a-subquery-in-a-having-clause?u=76281980&t=372)** Incorporating subqueries can get a little bit complex, but by working the problem from the inside out one step at a time, and reviewing your results at each stage, you can build some intricate queries that answer some complex questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), database (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** select the (2)
> **Env Vars:** avg (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Correlated subqueries
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=0)** - [Instructor] Subqueries can be used in place of JOIN statements in a query as an alternate way of reviewing related information that's spread across multiple tables.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=9)** For instance, I can write out two queries that looks at the people and employees in the AdventureWorks database.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=17)** (keyboard clicking)
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=33)** Executing both queries at the same time will give me these results, here at the bottom of the screen.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=38)** Now both of these tables are related on the BusinessEntityID column.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=43)** In the Person.Person table, here at the top, I can find the First and Last Names of all of our people, and in the HumanResources.Employee table here at the bottom, I can find the job titles for those people that actually are employees.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=58)** Now, if I wanted to view all of these details together I might use an INNER JOIN in the FROM clause of a query.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=64)** Let me go ahead and minimize this and we'll make that change here in the top.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=67)** First, we'll select a couple of columns from the Person table.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=70)** We'll do the Person.BusinessEntityID, Person.FirstName and Person.LastName I'll also add in the JobTitle from the Employee table.
>
> **[1:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=85)** Then we'll use the Person.Person table and we'll do an INNER JOIN to the HumanResources.Employee table.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=96)** This will be on the related field of the BusinessEntityID in both tables.
>
> **[1:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=108)** Let me go ahead and get rid of this second select statement, and then I'll Execute the query to see all of our First Names, and Last Names, and the Job Title for the 290 employees that we have.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=120)** Because this is an INNER JOIN, I'm only seeing results for the people that actually are employees.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=125)** Now, the other way to get to the same information is to use a subquery.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=130)** You do this by first writing a select statement for just one of the tables.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=134)** I'll start that on line number 9.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=140)** So, we'll start with the exact same query we had a moment ago.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=143)** Selecting the BusinessEntityID, FirstName and LastName from just the Person.Person table.
>
> **[2:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=149)** Then, we'll give these results a name.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=152)** I'll call this as MyPerson.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=156)** Now, we can add in the fourth column that'll show the employee's job title as a subquery.
>
> **[2:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=162)** Let me go ahead and scroll down so we can see the full thing on the screen all at once.
>
> **[2:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=166)** I'll add in the fourth column with a comma here in the select statement, open up a parenthesis and then we'll type in a new select statement to grab the JobTitle.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=179)** We'll select the JobTitle column from the HumanResources.Employee table.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=183)** In order to match the job title to the correct employee, we need to include a WHERE clause in this subquery.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=192)** This is called correlating the subquery to the outer query.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=196)** So, we want the job title where the BusinessEntityID is equal to the outer query.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=202)** We just named the outer query MyPerson so I can refer to that as if it were a table.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=209)** We'll say where the BusinessEntityID for this INNER query is equal to the MyPerson, which is the outer query, .BusinessEntityID column.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=218)** That finishes the subquery and defines the column.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=221)** I'll go ahead and close the parenthesis and now we just need an alias.
>
> **[3:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=224)** I'll call it as JobTitle.
>
> **[3:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=228)** When you Execute this query, we'll see the results here.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=231)** We have the BusinessEntityID, FirstName and LastName columns coming out of the Person table and we also have the JobTitle column coming from the Employee table.
>
> **[4:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=241)** But we're still getting everyone from the Person table regardless of whether they're an employee or not.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=247)** What we have now is an equivalent to a LEFT JOIN where all of the records from the Person table are returned plus the matching records from the Employee table where they exist.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=257)** So, our select statement needs one more element to make it exactly like the previous INNER JOIN statement.
>
> **[4:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=263)** I need to filter out some of the records with a WHERE clause.
>
> **[4:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=267)** You might try putting it here at the very end, like this, where the JobTitle IS NOT NULL.
>
> **[4:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=276)** The intent here is to remove all the rows that have a NULL in this column.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=281)** But when I press Execute, it returns a syntax error.
>
> **[4:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=286)** The query can't reference its own column alias that we have listed right over here.
>
> **[4:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=291)** So, what I need to do is substitute the full subquery again here in the WHERE clause.
>
> **[4:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=296)** Let me highlight all of this, the select statement including the parenthesis, all the way down to the end, and I'll copy that to the clipboard.
>
> **[5:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=303)** Then I'll replace the JobTitle keyword here with that query.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=307)** So, where the results of this select statement IS NOT NULL.
>
> **[5:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=312)** Highlighting this query now and pressing Execute returns us back to the original 290 rows of just our employees.
>
> **[5:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=320)** This is the exact same result that we got with the original INNER JOIN.
>
> **[5:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=324)** Another way of doing this is to remove the IS NOT NULL keyword here at the very end and just check for the existence of the subquery rows.
>
> **[5:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=333)** I can say WHERE EXISTS the results here in this select statement.
>
> **[5:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=339)** Now, it'll only retrieve people that are in the Person table where they also have an existing record in this select statement of the interior query.
>
> **[5:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=348)** Let me go ahead and highlight lines 9 down through 18 and press Execute and we'll see if we get the exact same 290 rows.
>
> **[5:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=355)** So, there's a number of ways to join data together either using a JOIN statement in a FROM clause or using a correlated subquery.
>
> **[6:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=364)** So, why would you choose one method over the other?
>
> **[6:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=367)** As with most answers in the world of queries, it depends on your database.
>
> **[6:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=372)** One method may perform significantly better than another depending on the way your database is structured, what kind of indexes exist, and the number of records that you're returning.
>
> **[6:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/correlated-subqueries?u=76281980&t=382)** The only way to really know which one is better is to run performance tests in your own environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (1)
> **Env Vars:** join (8), inner (6), where (4), null (4), left (1)
> **SQL:** inner join (5), where (4), join (2), left join (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is an  (2), is called (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### PIVOT the result set
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=0)** - [Instructor] The standard output of a queries result is to have the data presented as individual rows.
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=6)** Using the PIVOT operator, we can rotate those results, so that the data is displayed in a column format instead.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=13)** Which may be beneficial for adding to a spreadsheet or another analysis platform.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=18)** First, let's review the data stored in the product table.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=26)** We'll select the product line and list price columns out of the production.product table and filter the results to only see products where the product line is not nulled.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=36)** This gives us the product line and the list price for all 278 products in the database.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=42)** Now we can summarize this information to find the average list price per product line.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=48)** I'll modify the select statement to find the average list price and I'll name this column as average price.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=58)** Then I need a group by clause at the very end and we'll group everything by the product line.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=67)** Executing the query again shows us the four product lines that we have, M R S and T, and here is the average price for all of the products in each line.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=77)** Right now, the average price is displayed in a row with the product line that it corresponds to.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=83)** To rotate these results, so that the product lines are column headers instead.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=88)** We can write a different select query.
>
> **[1:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=90)** I'll start that online number seven.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=93)** We'll select the columns, M R S T.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=102)** Then we have the from clause, the source data will come from a sub query that selects the product line and list price from the product table.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=109)** This will be the same select statement that we started with a moment ago.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=119)** We'll select the product line and list price columns from production.product, now I need to name this as source data.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=128)** Notice that we're not calculating the average list price yet.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=132)** That's taken care of by the next clause, the pivot clause.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=136)** The pivot operator is used to transform the results and aggregate the values to find the average across the original source data.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=145)** We're going to pivot all of the data by the average list price.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=152)** And we'll do that for each of our product lines, M R S and T.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=156)** We can do that by saying four, product line and use the in function to specify the four lines, in M, comma R, comma S, and comma T.
>
> **[2:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=169)** That finishes the pivot statement so I need another closing parenthesis here at the end and I'll simply name this as pivot table.
>
> **[2:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=177)** And that finishes our query.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=179)** Now we have line 7 down through 11, I'll go ahead and execute those by themselves.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=183)** And you can see the result is exactly the same numbers that we had a moment ago.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=187)** They're just rotated to fall underneath columns that correspond to each product line.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=192)** We can add additional row headers to the display, which can clarify these results.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=197)** Now this might look a little bit strange but we do that by adding another column into the beginning of the select statement.
>
> **[3:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=202)** So let me go ahead and move this line down and we'll come back up onto line number seven.
>
> **[3:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=207)** We're going to select a row that's called average list price, and we'll name it as product line.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=218)** Now, when I execute line 7 down through 12, we'll see the result with our new row headers.
>
> **[3:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=224)** Oh, and this time I'm getting an error and that's because I needed another comma here at the very end of essentially what's its own column.
>
> **[3:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=231)** Okay, let me go ahead and put that in that comma there at the end of line seven.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=234)** I'll re-highlight this and press execute.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=236)** So now we have row headers that define what each of these rows are.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=240)** We have the product line row with the product lines, M R S and T.
>
> **[4:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=244)** And we have the row that says the average list price, And there's the value for each product line.
>
> **[4:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=249)** that makes it easier to understand what this table is all about.
>
> **[4:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/pivot-the-result-set?u=76281980&t=253)** The data is now in a cross tabular arrangement, just like you might find in a spreadsheet program like Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (21), data (8), [[Microsoft Products|Products]] (3), database (1), next (1)
> **CLI Commands:** find (4)
> **UI Navigation:** select the (3)
> **Env Vars:** pivot (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Write a query with a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=0)** (funky upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=6)** - [Instructor] It's time to test your knowledge with another challenge.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=9)** For the sixth challenge for the course, I'd like you to work with a subquery and the PIVOT command.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=15)** In the exercise files, find the ChallengeSix-Start.sql file.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=20)** In it, you'll find a query that counts up the number of products in each category at AdventureWorks.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=26)** I want you to write a new query that displays the exact same information, only pivoted into a column-oriented structure instead of a row-oriented structure.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=36)** This means that your column headers will be the names of each category, and the table row will display the count of products.
>
> **[0:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=44)** Pivot tables can bring a whole new perspective to your data, and give you additional options for reporting and sharing information with other applications.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=52)** So take your time and work out the pivot statement to reorient the results.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=58)** I estimate that this should take about 10 minutes to complete.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-write-a-query-with-a-subquery?u=76281980&t=61)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[SQL]] (1), [[Pivot Tables]] (1), data (1)
> **CLI Commands:** find (2)
> **File Paths:** challengesix-start.sql (1)
> **Env Vars:** pivot (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (funky upbeat music) (1)

#### Solution: Write a query with a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=0)** - [Instructor] I hope you were able to generate the pivot table results that summarize the number of products in each category.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=13)** Let's get going with the solution.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=14)** I currently have the challenge six-start SQL file here on the screen, and I'm just going to execute it right away so we can take a look at the results, and then we'll take a look at the query above.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=24)** So the results give me two columns.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=26)** The first one is Category Name and it has the four categories of products.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=31)** And then we have a count of the Number of Products in each of our categories.
>
> **[0:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=35)** Looking up here in the Select statement, we have the first column is the Category Name column and this is coming from the Name field in the Product Category table.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=45)** The second column is using a Counting function, and it's counting up the number of unique Product IDs from the product table, and it's now putting that as the Number of Products.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=55)** So that's where these two values are coming from in the results.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=58)** In the From clause, it looks like we have a couple of Inner Joins, so it looks like there isn't a direct connection between the Product Category table and the Product table.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=68)** We have to go from the Product Category table and join to the product subcategory table, and then from there we can join to the Product table.
>
> **[1:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=77)** So we've got three different tables involved here in order to get to the final result.
>
> **[1:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=82)** And we'll just have to take that into account in our final solution when we're generating the pivot table.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=87)** All right, so this is what we're looking for, except we want it rotated 90 degrees in the final pivot table.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=93)** And so that means we're going to have- these are going to be represented as columns instead of rows.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=99)** So the first column at the top will say Category Name, and then below that will be Number of Products.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=106)** And then the second column will say Accessories at the top, and have the number 29 below that.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=113)** The third column will be Bikes and 97 in the row below.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=117)** The fourth column will be Clothing with the number of products below.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=120)** And finally we'll have the fifth column, will say Components and it'll have, in the row below, the number 134.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=128)** So we just need to take this and rotate it 90 degrees with a Pivot statement.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=132)** Okay, so that's what our goal is.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=134)** And in fact, there's a line down here at number 12 that says, "Create a pivot table version of these results."
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=140)** So I'll go ahead and get started right below that.
>
> **[2:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=142)** So we're going to select a couple of things first.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=145)** Now, the first row that we want to convert into a column is these two values here that are the headers in this version.
>
> **[2:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=152)** Now, in order to do that we're just going to select the text and pretend that it's data.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=157)** So I want to select the Number of Products first because I want that to appear in the row below.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=163)** So, I'll say Select, and in single quotation marks, Number of Products, and we'll name that as Category Name.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=175)** And if I just run this right away we can make sure that we're on the right track.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=178)** I'll just press Execute.
>
> **[3:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=180)** And there we go.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=181)** There's the first column of the pivot table.
>
> **[3:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=182)** It's just our headers.
>
> **[3:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=183)** So we have Category Name with Number of Products written down below that.
>
> **[3:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=187)** All right, let me go ahead and run all of this again up here at the very top, I'll press Execute, and I'm going to move this down on the screen so we can see everything at once.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=195)** Okay, so that takes care of this first row, turned into a column there.
>
> **[3:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=201)** Next, we need row- or columns with these as headers.
>
> **[3:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=205)** So, I'm going to put in those as their own columns.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=208)** So, the next one will be comma Accessories, then below that, Bikes, below that, Clothing, and below that, Components.
>
> **[3:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=223)** So, that takes care of all of the columns that I want in the final result.
>
> **[3:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=229)** The next step, we have our From clause, and this is going to be where the data is coming from.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=233)** Okay, so where is the data coming from?
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=236)** For that, we need to go back up to the original query and we'll take a look at it.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=239)** And in fact, I'm going to just copy all of this to my clipboard and I'll come down and I'm going to place that down below the From clause, and that'll get us most of the way there.
>
> **[4:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=251)** So the data is going to come from these two, or these three tables that are all joined together.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=257)** Now remember, the pivot table or the pivot command is going to do the aggregation for us.
>
> **[4:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=262)** So we don't want any counting or grouping in the data source that we're feeding in.
>
> **[4:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=267)** So I'm going to get rid of this Group By clause and move that semicolon up.
>
> **[4:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=271)** Actually, I'm going to get rid of the semicolon at the very end there.
>
> **[4:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=274)** All right.
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=275)** And then I'm also going to get rid of this Counting function.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=277)** So we're just going to select the product ID and I no longer want to call this column as Number of Products.
>
> **[4:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=284)** We'll just call this, let's just call it Product IDs.
>
> **[4:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=290)** Okay, so this is going to return Category Name and the Product IDs, but we're still using the same Inner Joins between all three of those tables.
>
> **[4:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=298)** And if I just run this right now, let me run lines 20 down to 26, by itself and press Execute.
>
> **[5:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=305)** And so there's all the raw data; we have 295 rows.
>
> **[5:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=308)** It's the unique Product ID and the Category Name.
>
> **[5:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=311)** We can scroll through and see all of our product IDs and the category that they correspond to.
>
> **[5:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=316)** So that is the raw data that we want to get aggregated and pivoted, and then put into the column structure that we have started up here with our select statement.
>
> **[5:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=325)** So, I'm going to open up a parenthesis in our From clause and then I'll just space this out a little bit.
>
> **[5:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=330)** So I'll say all of this is in our From clause.
>
> **[5:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=335)** I'll put all of that in there.
>
> **[5:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=336)** So that's all of our From clause, We come down to line 26.
>
> **[5:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=343)** Let me scroll back over here and put in a closing parenthesis.
>
> **[5:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=347)** So this is all of our From clause.
>
> **[5:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=349)** And now I just need to name this, I'll just say, as Data Source.
>
> **[5:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=354)** And that finishes our From.
>
> **[5:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=355)** The next step, we need our Pivot clause.
>
> **[5:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=358)** So what are we going to do for the pivot?
>
> **[6:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=360)** Well, we want to count up the number of product IDs.
>
> **[6:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=363)** So we're going to use a Counting function, and the entire Pivot clause goes inside of its own set of parentheses.
>
> **[6:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=368)** So, open a parenthesis then we'll count, what are we going to count?
>
> **[6:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=372)** We're going to count up the Product IDs, and I can make reference to that alias that I put up here.
>
> **[6:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=378)** So I'll just copy that and paste that down there.
>
> **[6:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=381)** So we're going to count up all of the Product IDs, and then we're going to count them for each of the category names that we have established here.
>
> **[6:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=390)** So this is all of these categories that we're displaying there.
>
> **[6:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=393)** Going to count them up for all of the category names.
>
> **[6:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=396)** But we want all the category names that are in with these names, within Accessories, Bikes, Clothing, and Components.
>
> **[6:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=403)** So for Category Name In, open a parenthesis, and we'll just list out each of those.
>
> **[6:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=408)** So Accessories, Bikes, Clothing, and Components.
>
> **[6:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=417)** And we'll close the parenthesis there.
>
> **[6:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=419)** One more parenthesis to close the Pivot command.
>
> **[7:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=424)** And then I'll just call this as Pivot Table at the very end.
>
> **[7:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=430)** All right, let me space this out so we can see everything on the screen at once here.
>
> **[7:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=434)** So we're going to Pivot, Count, and then I'll move this In function down below.
>
> **[7:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=439)** And let's also move these down so we can see everything from the Joins as well.
>
> **[7:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=445)** Okay, let me move this down here and scoot that up.
>
> **[7:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=450)** So that, I think, is the full command.
>
> **[7:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=452)** So we're going to select the first column second column, third, fourth, and fifth columns, are all going to be these names.
>
> **[7:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=461)** This is the data source that they're coming from, and it's going to include two columns here; Category Name and the Product IDs.
>
> **[7:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=467)** And then we have the From clause, which is extra long just because we have three tables that we need to join together.
>
> **[7:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=473)** Then we're going to pivot the results by counting up the product IDs for each of our categories.
>
> **[7:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=479)** And then for each of the categories we have the In clause or the In function that gives us the different category names.
>
> **[8:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=486)** All right, let's go ahead and execute all of that.
>
> **[8:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=488)** Take a look at the results.
>
> **[8:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=490)** Let me move that back up here on the screen.
>
> **[8:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=492)** And there is our results.
>
> **[8:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=494)** We have the Category Name, Accessories, Bikes, Clothing, and Components.
>
> **[8:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=498)** And the Number of Products is 29, 97, 35, and 134, respectively.
>
> **[8:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=504)** So that is my solution.
>
> **[8:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=505)** Let me see if I can get it all on the screen again at the same time, move that down just, maybe a little bit more, and then we'll scroll back up and see if we can get all of that.
>
> **[8:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=513)** There we go. That fits nicely.
>
> **[8:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=515)** All right, so that is my solution to the challenge.
>
> **[8:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-write-a-query-with-a-subquery?u=76281980&t=518)** I'll go ahead and save this as Challenge Six Complete.SQL in the exercise files, then you can compare this solution that I came up with, with the solution that hopefully you came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (18), [[Microsoft Products|Products]] (11), data (9), next (4), [[SQL]] (2)
> **UI Navigation:** select the (4)
> **CLI Commands:** make (2)
> **Env Vars:** sql (2)
> **File Paths:** complete.sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Obtain information with a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=0)** - [Instructor] In this challenge, we are working on a farm, and we need to evaluate the production performance of each of the farm's chickens.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=13)** So we have a couple of tables.
>
> **[0:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=14)** One is called Chickens, and that gives me all of my individual chicken names.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=18)** And each one of those has their own ID number here as the primary key in this Chickens table.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=24)** The other table that we have to work with is called EggProduction.
>
> **[0:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=28)** Let's select everything out of that.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=31)** And this gives me the primary key for each row, the production ID number.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=36)** We have a foreign key reference to the Chickens table.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=39)** So it tells me which chicken we're looking at, the production month; and each chicken has production months one through five here.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=47)** And then each of those months, we have the number of eggs that that chicken has produced.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=52)** So in month 1, chicken 1 produced 35 eggs.
>
> **[0:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=56)** And so this is the data that we need to summarize here.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=58)** We want to find the total number of eggs that each chicken has produced.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=63)** And then we also want to find the average number of eggs that each chicken produces in each month.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=68)** And then we're going to compare the average number of eggs to the farm's overall average for all of the chickens.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=76)** So we'll get started here by selecting the chicken name.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=83)** And we'll start with the sum total of eggs produced.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=86)** So I can get the sum of eggs produced.
>
> **[1:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=91)** And we'll call it TotalEggsProduced.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=95)** And this will give us a total for each chicken.
>
> **[1:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=99)** We're going to join these tables together.
>
> **[1:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=101)** So we'll say FROM Chickens, and we'll INNER JOIN that to EggProduction.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=110)** And the related field is ChickenID in both tables.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=116)** So Chickens.ChickenID is equal to EggProduction.ChickenID.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=125)** Now, because I have a SUM function here, I do need to include the GROUP BY statement here.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=130)** So we'll say GROUP BY ChickenName.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=134)** And let me just test the code right now.
>
> **[2:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=136)** So that's going to give me a single row for each of my chickens.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=139)** And I can see the total eggs produced across the entire dataset for each chicken.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=145)** The challenge does ask me to sort that data, so I'll just add in the ORDER BY right now.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=151)** So we're going to order by the TotalEggsProduced.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=157)** And I want to see that descending.
>
> **[2:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=159)** So the chicken with the most number of eggs will appear here at the very top, and it'll descend down towards the bottom of the table.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=165)** Okay, so that's a good start.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=167)** The next column we need to add in here is to get the average number of eggs that each chicken produced in each month.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=173)** And so that's basically going to be the same as the row above, just using the AVG function.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=179)** So the average of eggs produced.
>
> **[3:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=182)** And I'll call this ChickenMonthlyAverage.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=189)** Alright, let's test my code again.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=190)** That adds in this next column.
>
> **[3:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=192)** And so we can see the average number of eggs that each chicken produced in the month.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=197)** Now I need to get to the average number of eggs produced from all of the chickens on the entire farm as the next column.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=206)** And for that we're going to need to use a subquery.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=209)** So we can do that by putting a set of parentheses here for the fourth column.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=213)** And we'll put another SELECT statement inside of that.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=215)** So SELECT AVG(EggsProduced) FROM the EggProduction table.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=226)** So this is going to find the average across all of the records in the EggProduction table.
>
> **[3:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=230)** It's not joining to the Chickens table at all.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=233)** So it's not going to be grouping them together.
>
> **[3:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=234)** It's just finding the average across that entire dataset in that production table.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=239)** And we'll name this column FarmMonthlyAverage.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=247)** Alright, let's test my code again.
>
> **[4:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=249)** And that adds this column over here.
>
> **[4:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=251)** So I can see the monthly average across the entire farm is 30 eggs.
>
> **[4:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=257)** And so now we want to find the chickens that are above average producers.
>
> **[4:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=262)** So if the farm monthly average is 30, any chicken that has an individual average above 30 is going to be in our top producers.
>
> **[4:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=270)** So I can see all of those records right here.
>
> **[4:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=272)** So these are all the ones that have an average that's above the farm's average.
>
> **[4:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=278)** And so these are the records that we need to filter down to.
>
> **[4:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=281)** And we can filter, since we're using groups here for each of these rows, we can filter that using a HAVING clause that goes after the GROUP BY clause.
>
> **[4:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=290)** So after GROUP BY, we'll say HAVING.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=293)** And we'll just put in the records that we want to filter by.
>
> **[4:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=295)** So we want to say we only want the rows where the average eggs produced is greater than the farm average,.
>
> **[5:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=306)** And the farm average we're getting with this inner SELECT statement there.
>
> **[5:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=309)** So I'm just going to copy it here.
>
> **[5:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=310)** Control + C, come down here and paste that in there.
>
> **[5:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=315)** Now, it's a little bit long, so let me put that on the next line down below.
>
> **[5:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=319)** So HAVING the average eggs produced for each individual chicken is greater than the farm's average, which is being calculated by this.
>
> **[5:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=329)** So I'll test my code again.
>
> **[5:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=330)** And that limits me down to just the rows where the chicken's average is greater than the farm's average.
>
> **[5:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=337)** And that gives me the seven chickens that have that production value.
>
> **[5:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-obtain-information-with-a-subquery?u=76281980&t=341)** So this is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), data (2)
> **Env Vars:** group (4), select (3), having (3), avg (2), inner (1)
> **SQL:** group by (4), select (3), having (3), inner join (1), order by (1)
> **CLI Commands:** find (4)
> **Definitions:** is called (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Work with Variables

[↑ Back to Table of Contents](#table-of-contents)

#### Create and use variables in a query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=0)** - [Narrator] The SQL language is primarily used for querying data out of a relational database.
>
> **[0:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=5)** But it can perform many other functions in the management of your database.
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=10)** Using SQL, you can create routines that function more like traditional programming languages, by using variables and looping statements.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=18)** Variables are placeholders.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=20)** They can be inserted into a query and assigned a value at a later point.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=25)** To use one, you first need to create it.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=29)** You do that with a declare statement.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=31)** And this'll initialize the variable.
>
> **[0:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=33)** Variables are named using the @ symbol as their first character.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=38)** Then, you can name it whatever you'd like.
>
> **[0:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=41)** I'll call this "My First Variable."
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=43)** Next, you need to specify what type of data, the variable will contain.
>
> **[0:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=47)** Your options are these same data types that are used when creating fields in a SQL Server table.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=52)** I'll set this variable to the INT data type.
>
> **[0:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=55)** That finishes the declare statement, so we'll end the line with a semicolon, and come down to line two.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=61)** Next, we can set the value of the variable.
>
> **[1:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=63)** To do that, you use the set keyword.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=66)** I'll set the value of the variable that I just created.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=70)** You'll assign a value using the = sign, followed by the new value that you want to insert.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=75)** I'll set my variable to the value of 5.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=78)** That finishes the set statement, so again, add another semicolon, and we'll come down a couple of lines.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=84)** And finally, we can use the value of the variable in a query.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=87)** For instance, I can use it in a couple of math equations by selecting it.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=93)** I'll select my first variable and I'll put it in a column called "My Value."
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=98)** For the second column of the query, I'll take my first variable and multiply it by 5.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=106)** And finally, we'll return a third column, that takes the variables value and adds 10 to it.
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=114)** Now I can execute the query, and I'll see the results.
>
> **[1:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=117)** I get a table with three columns.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=119)** Here's the value of my variable as I set it, multiplied by 5, and added 10 to it.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=125)** Now, if you want to change the output, you only need to change the variable's value assignment line.
>
> **[2:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=130)** I'll change it to 10, and then I'll re-execute my query, and you'll see all of the values update in the result.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=137)** The variables created in SQL Server, are what's known as a local variable.
>
> **[2:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=141)** That means the variable and its value only exists, as long as the single batch of operations is running.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=148)** If I try and run just the select statement again and press execute, you're going to get an error.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=153)** That's because the variable no longer exists in memory.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=157)** SQL Server completely forgets about the variable, as soon as the original batch of commands is complete.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=163)** So let's use this information to create a flexible query that's easy to update.
>
> **[2:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=168)** I'll start it on line number eight.
>
> **[2:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=172)** I want to find all of the products that are a specific color.
>
> **[2:55](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=175)** First, I'll declare my variable called Color.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=179)** It'll be a VARCHAR(20) data type.
>
> **[3:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=184)** I can also save a bit of typing, by setting an initial value right here, inside of the declare statement, rather than using a separate set statement.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=193)** We'll set its initial value to the color blue.
>
> **[3:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=196)** Since this is literal text, place it in single quotation marks, and that'll finish the line, so I'll type in a semicolon.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=203)** Now we can write out the select statement.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=206)** I'll select the product ID, name, product number, color, and list price columns, from the table called Production.Product.
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=220)** For the where clause, I want to filter the records to only those that match my variable's color value.
>
> **[3:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=226)** So I'll choose only records where the color field, is equal to my variable's value, @Color.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=233)** That finishes the select statement, so I'll end it with a semicolon.
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=236)** Now, when you highlight lines 8 down through 16, you can get a query back that shows you all of the blue products.
>
> **[4:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=243)** The variable's value blue, gets inserted into the where clause when the select statement executes.
>
> **[4:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=248)** If you want to change the query's output, simply change the variable value.
>
> **[4:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=252)** I'll change it to red instead.
>
> **[4:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=254)** Then we'll highlight these lines again, and press execute, and it shows me all of my red products.
>
> **[4:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=259)** By having the variable declaration at the top of your script, you can make it easier to customize, right on line number 1.
>
> **[4:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=266)** This is particularly useful on very long queries, that might use the same variable in a number of locations.
>
> **[4:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=272)** Or when you want a query to include several different variables.
>
> **[4:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-and-use-variables-in-a-query?u=76281980&t=276)** This way, users don't need to read through the entire script in order to find all of the places that they need to update, when they want to tailor the query, to meet their own needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft SQL Server|Sql server]] (3), [[Microsoft Products|Products]] (3), product (3), [[SQL]] (2)
> **Env Vars:** sql (5), int (1), varchar (1)
> **CLI Commands:** find (2), make (1)
> **SQL:** varchar (1)
> **UI Navigation:** select the (1)
> **Definitions:** known as (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Create a counter for a looping statement
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=0)** - [Instructor] SQL variables can be used as counters in a looping statement to control how many times a batch of commands will execute.
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=8)** First, we'll create a new variable called Counter.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=11)** It'll be an integer data type, and I'll set the initial value to 1.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=17)** Then we can create the commands that I want to repeat inside of something called a WHILE loop.
>
> **[0:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=22)** The following commands will repeat as long as the WHILE condition is true.
>
> **[0:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=27)** To have the commands execute 3 times, for instance, I can say WHILE @Counter is less than or equal to 3.
>
> **[0:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=34)** Every time the commands are executed, we'll increment the value of the Counter by 1.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=39)** When the Counter is at 4, the WHILE condition becomes false and the loop is complete.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=45)** After the WHILE condition is set, we need a BEGIN and END line.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=53)** Between these are the commands that will get executed multiple times.
>
> **[0:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=58)** Let's keep it simple, and simply select the value of the Counter.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=66)** We'll return it in a column called CurrentValue.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=70)** Then we'll set the Counter and we'll increment it by 1.
>
> **[1:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=76)** We can do that by saying SET @Counter equal to the Counter's current value +1.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=83)** Now, incrementing values is such a common thing to do that there's actually a shortcut way that we can do this.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=88)** Instead of saying SET @Counter = @Counter +1, we can simply say SET @Counter += 1.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=96)** This will do the same thing.
>
> **[1:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=98)** Whatever the current value of the Counter is, it'll increment it by 1.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=102)** That finishes the WHILE loop.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=104)** So we come down to END, and that finishes our statement.
>
> **[1:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=106)** I'll type a semicolon at the end of that.
>
> **[1:50](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=110)** Now, when you execute the batch of commands, the Counter variable is created and set to the value of 1.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=116)** Then the WHILE loop looks to see what the value of the Counter is.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=120)** It's less than 3 now, so it executes the commands inside of the BEGIN and END block.
>
> **[2:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=126)** That executes a query, which returns the Counter's value and then increments the Counter by 1.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=132)** That finishes the first loop.
>
> **[2:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=133)** So the WHILE condition is evaluated again up here on line 2.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=137)** This time the variable's value is 2.
>
> **[2:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=140)** It's still less than 3, so it executes the query and increments the value again.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=145)** The third time through the loop is the same.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=147)** At this point, the variable is set to the value of 4.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=151)** The WHILE condition is now false.
>
> **[2:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=153)** 4 is not less than three.
>
> **[2:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=155)** So the statement terminates.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=157)** Press the Execute button, and you'll see it get processed.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=161)** Here we can see that the query executed 3 times.
>
> **[2:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=163)** We get the current value of 1, 2, and 3.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=167)** So it executed 3 times exactly, no more and no less.
>
> **[2:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=171)** Now we can use this to construct a statement that'll execute multiple queries in the database and change the parameters each time.
>
> **[2:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=179)** We'll start this on line number 8.
>
> **[3:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=181)** I'll create a new Counter variable and set its value to 1.
>
> **[3:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=191)** I'll also declare another variable called Product.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=197)** This will also be an integer data type, and I'll set its initial value to 710.
>
> **[3:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=204)** Then we'll start our WHILE loop.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=208)** WHILE the Counter is less than or equal to 3.
>
> **[3:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=213)** Then I'll type in the BEGIN and END lines.
>
> **[3:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=218)** Inside of this will be our SELECT statement.
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=221)** I'm going to select the ProductID, Name, ProductNumber, Color, and ListPrice column
>
> **[3:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=236)** from the Production.Product table.
>
> **[4:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=240)** Then I'll insert a WHERE clause, and I only want to see the products where the ProductID is equal to the value of the Product variable that we established up above.
>
> **[4:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=250)** So I'll say WHERE the ProductID is equal to our variable.
>
> **[4:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=258)** That finishes these SELECT statements.
>
> **[4:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=259)** So I'll type in a semicolon and come down a line.
>
> **[4:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=261)** Then we need to increment our Counter.
>
> **[4:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=264)** I'll set the value of our Counter + 1.
>
> **[4:30](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=270)** I also want to increment our Product variable.
>
> **[4:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=274)** I'll increment this by 10.
>
> **[4:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=278)** That finishes the set of steps I want inside of my loop.
>
> **[4:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=280)** So I'll come down to the END line and type in the semicolon at the very end of all of that.
>
> **[4:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=285)** All right, so this query is going to execute 3 times, and each time the ProductID number is going to be 10 higher than the previous.
>
> **[4:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=292)** Let me scroll back up here so we can see the first declaration of our Counter, and I'll go ahead and highlight all of that and press Execute.
>
> **[4:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=299)** Then we can take a look at the results.
>
> **[5:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=301)** The first time through the loop, the ProductID is number 710, and it selects this item.
>
> **[5:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=307)** The next time through the loop, it's set to 720, and we get a different item.
>
> **[5:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=311)** And finally, the third time through the loop, it's set to 730, and we get this product.
>
> **[5:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=316)** So this is just one example of how a looping statement could work in a SQL query using a WHILE command.
>
> **[5:22](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=322)** And SQL Server also supports other kinds of programmatic statements that you can incorporate into your queries, such as if-else or try-catch.
>
> **[5:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/create-a-counter-for-a-looping-statement?u=76281980&t=332)** All of these can be combined to make your queries more flexible and efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (5), [[SQL]] (2), data (2), database (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** while (12), end (5), sql (3), begin (3), set (3)
> **SQL:** select (2), where (2)
> **UI Navigation:** select the (2)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Use variables in a query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=6)** - [Instructor] Variables can be very useful when developing efficient routines in SQL Server.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=11)** Let's get some additional practice by applying them to a challenge.
>
> **[0:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=15)** I'd like you to write a query that retrieves people's names from the Person.Person table.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=20)** The query should use a variable to control how many records are returned, as well as a second variable that defines the starting ID number for the results.
>
> **[0:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=29)** The results should be displayed in a single result set with the specified number of rows, so you won't be using a WHILE loop in this solution.
>
> **[0:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=38)** I estimate that this challenge should take about five minutes or less to complete.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/challenge-use-variables-in-a-query?u=76281980&t=42)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (1), while (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Use variables in a query
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=6)** - So were you able to incorporate variables into your SQL query?
>
> **[0:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=10)** Let's take a look at how I would approach this challenge.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=13)** As always, the very first thing I want to do is just take a look at the raw data that I have to work with.
>
> **[0:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=17)** So I'll select everything from Person.Person and I'll go ahead and execute that query.
>
> **[0:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=24)** So these are the columns that we have in the table that we can play with.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=26)** We have the BusinessEntityID, the type of person some first name, middle name, last name information.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=32)** And we have actually a lot of other columns over here but I only ask for the name information.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=37)** So I'm just going to use the first name and the last name column as well as the BusinessEntityID because I know we need to make selections based on this column.
>
> **[0:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=46)** I'm going to go ahead and start modifying this here.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=48)** We're going to SELECT the BusinessEntityID column the FirstName column and the LastName column from this table.
>
> **[1:04](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=64)** Alright, and I can go ahead and execute that to make sure we're on track.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=67)** Alright, we're getting results.
>
> **[1:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=68)** I haven't misspelled anything yet.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=70)** So these are the BusinessEntityIDs the first name and last names for all of our people.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=74)** So now we can start incorporating variables to control this output that we're getting at the bottom.
>
> **[1:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=80)** I'll go up here and we'll start.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=83)** So the first thing I asked for is to create a variable to control the number of rows to return the results.
>
> **[1:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=88)** So we'll declare a variable to hold that and let's call this variable NumberToReturn.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=97)** Now we need to put this as an integer data type because we actually want whole numbers of records.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=102)** We can't return a fraction of a record.
>
> **[1:44](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=104)** So this will just store an integer and we'll just give it an initial value of five to get started with.
>
> **[1:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=111)** So how are we going to select a number of records out of this?
>
> **[1:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=114)** Well, we could do a SELECT TOP clause here so we could SELECT TOP and then use the variable here.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=122)** So @NumberToReturn.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=125)** Now, anytime we use a TOP clause we actually also want to sort the data so that we're turning data in a logical sequence here.
>
> **[2:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=132)** So I'll have an ORDER BY clause to the bottom and we'll just order by the BusinessEntityID.
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=143)** Now I see again an error here.
>
> **[2:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=145)** It says that I have incorrect syntax near @NumberToReturn.
>
> **[2:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=148)** It's expecting a parenthesis, so normally in a SELECT TOP clause If you were just to replace this let me actually cut this to my clipboard for a second.
>
> **[2:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=156)** If you're just to put it in with a number that would be totally fine.
>
> **[2:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=160)** But it looks like when I'm using a variable here it's giving me this in syntax error and it's actually just telling me what the fix is.
>
> **[2:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=167)** It's expecting an open parenthesis so let's actually put this variable inside of parenthesis and we'll see if that error disappears and yep the underline disappears so it no longer has an error.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=178)** So it looks like using a variable here in the TOP clause requires the parenthesis whereas using just a standard integer or a number by itself does not require those parenthesis.
>
> **[3:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=188)** Okay, let's go ahead and just run this.
>
> **[3:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=189)** I actually need to run everything to declare the variable and run it.
>
> **[3:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=193)** So select it.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=194)** Alright.
>
> **[3:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=195)** It's giving me the first five people out of the table.
>
> **[3:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=197)** So we've satisfied the first part of the challenge.
>
> **[3:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=200)** The second part asked to allow us to specify a starting ID number so I'm going to need another variable for that.
>
> **[3:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=209)** So I'll say DECLARE a new variable.
>
> **[3:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=212)** I'll call this @StartID.
>
> **[3:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=215)** It'll also be an integer data type.
>
> **[3:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=217)** And let's just randomly pick a number.
>
> **[3:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=220)** How about 2648?
>
> **[3:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=221)** I don't know if there are people with that id, but we'll start there.
>
> **[3:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=225)** So that gives us a starting ID number.
>
> **[3:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=228)** So we need to incorporate that into our query and we could do that with a WHERE clause.
>
> **[3:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=232)** Remember that the WHERE clause needs to go between FROM and ORDER BY.
>
> **[3:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=239)** So I want BusinessEntityID, well, I don't want to say equal to StartID because that'll only return a single record if there is somebody with this ID.
>
> **[4:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=247)** So what I do want to do is say WHERE the BusinessEntityID is greater than or equal to the StartID.
>
> **[4:16](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=256)** That way it'll select everybody with this number or greater.
>
> **[4:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=261)** So let me go ahead and put a semicolon there semicolon at the end.
>
> **[4:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=264)** Alright, let's go ahead and execute it.
>
> **[4:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=265)** And then we go, We do have somebody at 2648.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=269)** So that starts it.
>
> **[4:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=269)** And then we have the next four people after that to give us a total of five rows returned.
>
> **[4:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=275)** So this allows us to customize our query.
>
> **[4:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=277)** Now I can say SELECT three people starting at let's start a different number, how about 260.
>
> **[4:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=285)** Press execute.
>
> **[4:46](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=286)** Alright, there's number 260 and I get two additional people to give me three rows returned.
>
> **[4:51](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=291)** So that is my solution to the challenge.
>
> **[4:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/solution-use-variables-in-a-query?u=76281980&t=293)** I'll go ahead and save this as challenge seven complete dot SQL, and you can compare what I came up with with whatever you came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[SQL]] (2), next (1)
> **Env Vars:** select (5), top (5), where (3), sql (2), order (2)
> **SQL:** select (5), where (3), order by (2)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Speakers:** - so (1)
> **Non-Speech:** (energetic music) (1)


### 9. Result Set Operators

[↑ Back to Table of Contents](#table-of-contents)

#### Combine results with UNION
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=0)** - [Instructor] When you have similar data in two different tables, you can add the rows from one SELECT statement to the rows returned by a second.
>
> **[0:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=8)** To do this, you'll use the UNION operator.
>
> **[0:11](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=11)** The basic workflow might look something like this.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=13)** I'm going to write two SELECT statements that look at the product category and product subcategory tables.
>
> **[0:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=26)** Executing these two queries at the same time, will show me two different result windows here at the bottom.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=31)** The first one gives me the four main categories, and the second one gives me the 37 subcategories of products that AdventureWorks sells.
>
> **[0:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=39)** Now, if I wanted to see these results in a single result set, I can UNION them together.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=45)** You do this by simply placing the UNION keyword in between your two queries.
>
> **[0:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=49)** Then you also need to make sure that you only have a single semicolon at the very end.
>
> **[0:54](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=54)** So I need to get rid of this one here at the end of line three.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=57)** This time I execute the query and I only get a single result set with 41 rows.
>
> **[1:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=62)** It's literally all of the rows from the first query, plus all of the rows from the second.
>
> **[1:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=67)** One issue is that the column names and the results are defined by the first query, and they don't really represent the data from the second query.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=75)** All of these numbers are under the heading of ProductCategoryID.
>
> **[1:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=79)** Even though some of these numbers represent the sub-category ID.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=84)** To fix this, we can add columns to each of our queries.
>
> **[1:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=86)** In order for the UNION query to work, the number of columns in both queries must be the same and the data types for those columns must be compatible.
>
> **[1:35](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=95)** I can create a second column in the first query that returns a null and is called ProductSubcategoryID.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=103)** Then we'll make a similar change in the second query so that it also returns three columns.
>
> **[1:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=108)** This time I'll pull the product category ID data that's actually stored in the subcategory table.
>
> **[1:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=113)** I'll put this as the first column of the SELECT statement.
>
> **[1:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=118)** Now, both queries have a ProductCategoryID column, they have a column called ProductSubcategoryID, and they have a third column called Name.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=128)** Executing the query now allows you to easily visualize which rows came from which table with the presence or the absence of the null here in the second column.
>
> **[2:17](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=137)** And all of the category names are listed in a single column regardless of whether they came out of the main table or the subcategory table.
>
> **[2:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=144)** So the UNION clause will add all of the rows from the first query to all of the rows from the second, but it'll exclude any duplicate rows that may have been in both queries.
>
> **[2:34](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=154)** This would be rows that have the exact same values for every column.
>
> **[2:38](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=158)** If you wanted your results to include any possible duplicates, then you would use the UNION ALL command instead of just UNION.
>
> **[2:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=165)** Finally, it should be noted that both queries on either side of the UNION, need to return the same number of columns in the same sequence.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=173)** And columns in the first query need to match up with columns in a compatible data type in the second query.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/combine-results-with-union?u=76281980&t=178)** So as long as your two queries meet these qualifications, you should have no problem viewing all of their records together in a single result set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), product (3), [[Windows]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** union (8), select (3)
> **SQL:** select (3)
> **CLI Commands:** make (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Return distinct rows with EXCEPT
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=0)** - [Instructor] Like union, the accept operator will merge two query result sets together, however, except only returns distinct rows from the first query that are not present in the second.
>
> **[0:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=12)** Let's use this to help us identify all of the people that don't have credit cards on file with Adventure Works.
>
> **[0:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=18)** First, I'll write a couple of queries to get a sense of the raw data that we can work with.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=25)** We'll just select everything out of the person table, and everything out of the person credit card table.
>
> **[0:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=31)** The person table lists everyone in the database, employees, customers, vendors, contractors.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=36)** Everyone.
>
> **[0:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=37)** employees are given the person type code of EM.
>
> **[0:40](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=40)** So we might want to filter out these employees from the final query.
>
> **[0:45](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=45)** In the person credit card table, we have the results here that give us the business entity ID that links back to the other person table.
>
> **[0:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=53)** Then we have the credit card ID that links to another table in the database.
>
> **[0:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=56)** That will be the sales.credit card table.
>
> **[0:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=59)** Now we can modify these two queries up here at the top to find all of the people that do not have a credit card.
>
> **[1:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=66)** From the person table, I'll just get the business entity ID column.
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=72)** Plus remember, we wanted to filter out those employees.
>
> **[1:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=74)** So I'll add a wear clause.
>
> **[1:18](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=78)** I'll say where the person type is not equal to EM.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=81)** Then we'll select the business entity ID column from the second query.
>
> **[1:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=87)** So our first query will return all of the IDs for everyone that's not an employee.
>
> **[1:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=92)** The second select statement will return all of the IDs for people that have credit cards.
>
> **[1:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=96)** We can remove any IDs that appear in both tables by joining them together with the accept keyword.
>
> **[1:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=103)** Since we're joining two queries together, we need to make sure we remove this semicolon here from the end of the first one, when I execute the query, that'll show me a total of 581 rows, and these represent all of the business entity IDs for the people that do not have credit card information.
>
> **[1:59](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=119)** Now, we can get to these exact same results by using a table join.
>
> **[2:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=123)** Let's take a look at what that query would look like.
>
> **[2:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=125)** I'll go ahead and start a new query online Number 10.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=128)** We'll select the person.business entity ID column.
>
> **[2:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=135)** And we'll pull this from the person.person table.
>
> **[2:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=139)** Then we'll do a left join to the sales.person credit card table.
>
> **[2:27](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=147)** The left join will include everyone whether they have a credit card or not, and then we'll also join the person credit card information to the people that do have credit cards.
>
> **[2:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=157)** Then we'll specify how these two tables are related and they're related based on the business entity ID column in both tables.
>
> **[2:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=173)** Next, we need a where statement to filter out some of these people.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=178)** We wanted filter out our employees, so we'll use the same where person.person type is not equal to EM.
>
> **[3:06](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=186)** And we also want to filter out all of the people that don't have the credit card information.
>
> **[3:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=190)** In this case, that would show up as a null value in the credit card ID column of the person credit card table.
>
> **[3:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=203)** So we'll filter out those rows as well.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=206)** All right, so there is my finished select statement.
>
> **[3:28](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=208)** Let me go ahead and execute it, and we'll take a look at the results.
>
> **[3:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=211)** We get back the exact same 581 rows.
>
> **[3:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=216)** So there's two different ways to get to the same information.
>
> **[3:39](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=219)** One, using a left join to join two tables together, and the other one joining two tables using an accept clause.
>
> **[3:47](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=227)** I'd argue that the first option is a little bit easier to read, but that's just a matter of preference.
>
> **[3:53](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=233)** Just like we saw earlier in the course, when using a sub query as an alternative to a joint, there are often multiple ways to get to the same answer when writing queries.
>
> **[4:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-distinct-rows-with-except?u=76281980&t=242)** The path that you choose can be left to personal taste or it can be guided by the results of performance testing to see if one method is actually better than the other on your own data and hardware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (6), data (2), database (2), next (1), [[Hardware]] (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** select the (2)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Return common rows with INTERSECT
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=0)** - [Instructor] When you want to find rows that are identical between two queries, you can use the INTERSECT operator.
>
> **[0:07](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=7)** Just like EXCEPT and UNION, the INTERSECT operator works between two complete SELECT queries.
>
> **[0:13](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=13)** Let's see how this might be useful by pulling some raw data out of the ProductPhoto and ProductReview tables.
>
> **[0:20](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=20)** I'll select everything from Production.ProductProductPhoto and everything from Production.ProductReview.
>
> **[0:25](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=25)** The ProductProductPhoto table is used to join the products that AdventureWorks carries to the photos used on the website and catalogs through the ProductID column.
>
> **[0:36](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=36)** The ProductReview table also uses the ProductID to join customer reviews to these specific products.
>
> **[0:43](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=43)** Now, in order to find out if there are any products that have both a photo and a review, we can quickly turn this into an INTERSECT query.
>
> **[0:52](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=52)** From the first query, I'll only select the ProductID column.
>
> **[0:57](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=57)** We'll make that same change to the second query.
>
> **[1:01](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=61)** Now the first query will display all of the ProductIDs that are attached to a photo.
>
> **[1:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=65)** The second query will return all of the ProductIDs that are referenced in a review.
>
> **[1:10](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=70)** The INTERSECT keyword between them will join the results together.
>
> **[1:15](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=75)** However, unlike UNION, INTERSECT will return just the unique ProductIDs that can be found in both of these queries.
>
> **[1:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=83)** Now, because we're joining two SELECT statements together, I need to make sure I only have a single semicolon at the very end.
>
> **[1:29](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=89)** So I'll go ahead and get rid of this one on line 2.
>
> **[1:33](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=93)** Then press the Execute statement, and you'll see we get three ProductIDs.
>
> **[1:37](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=97)** These three products have at least one photo and at least one review each.
>
> **[1:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=102)** Now, just like the other set operators that we've looked at in this chapter, there are ways of getting the same results using table joins.
>
> **[1:49](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=109)** In this case, we can use a SELECT DISTINCT query paired with an INNER JOIN, and that'll give us identical results.
>
> **[1:56](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=116)** Let's take a look at what that looks like, starting on line number 10.
>
> **[2:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=120)** Now, I will give you a bit of warning.
>
> **[2:02](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=122)** This query is very wordy, since the table names have a lot of repetition in the word production and product.
>
> **[2:08](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=128)** So we'll start with a SELECT DISTINCT statement.
>
> **[2:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=134)** We'll select the ProductProductPhoto.ProductID column
>
> **[2:23](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=143)** from the Production.ProductProductPhoto table.
>
> **[2:31](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=151)** Then we'll do an INNER JOIN to the Production.ProductReview table.
>
> **[2:41](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=161)** The JOIN will be on the common ProductID field in both tables.
>
> **[2:58](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=178)** That finishes the statement, so I'll go ahead and type in a semicolon here at the very end, and I'll scroll back up so we can see both statements together.
>
> **[3:05](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=185)** Now I'll just execute both statements together, the one that uses the two queries joined by INTERSECT and the second version that uses the INNER JOIN between the two tables.
>
> **[3:14](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=194)** This will return two different data sets here at the very bottom, but you can see that they're identical.
>
> **[3:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=199)** One gets the values using two queries and the INTERSECT operator, and the other one uses an INNER JOIN.
>
> **[3:26](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/return-common-rows-with-intersect?u=76281980&t=206)** Depending on the size of your tables and the presence of indexes on your data, one of these methods may perform significantly better than the other if you try and implement it in a similar query in your own databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), data (3), [[Microsoft Word|Word]] (1), product (1), [[Databases]] (1)
> **Env Vars:** intersect (7), join (5), select (4), inner (4), union (2)
> **SQL:** select (4), inner join (4), join (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** select the (2)
> **Analogies:** just like (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=0)** - [Adam] Congratulations on reaching the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=3)** I'd like to thank you for joining me as we got to know how to write queries for Microsoft SQL Server 2022.
>
> **[0:09](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=9)** Here's a couple of additional courses that I think you'd enjoy and will help you dig further into the capabilities of SQL Server and the world of Transact SQL.
>
> **[0:19](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=19)** First, we didn't talk at all about query performance, and that definitely becomes a big deal when you start writing queries against very large databases, or queries that need to run hundreds of thousands of times a day.
>
> **[0:32](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=32)** I'd recommend taking a look at the course, SQL Server Performance for Developers, and specifically chapter one for an introduction into Query Execution plans.
>
> **[0:42](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=42)** This can help you understand how SQL Server goes through the process of returning the results that you've asked for.
>
> **[0:48](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=48)** My course, SQL Server Database Triggers, will help you automate tasks in your database by setting up systems that monitor activity and automatically perform actions based on specific conditions.
>
> **[1:00](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=60)** And finally, if you want to learn how to create your own custom functions and store procedures that you can use to streamline your queries, take a look at my course, [[Program Databases with Transact-SQL]].
>
> **[1:12](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=72)** I encourage you to bookmark these courses now and add them to your Learning Watch list so that they're easy to find when you're ready to dig further into SQL queries.
>
> **[1:21](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=81)** Until next time, I've been Adam Wilbur.
>
> **[1:24](https://www.linkedin.com/learning/querying-microsoft-sql-server-2022/next-steps?u=76281980&t=84)** Thank you again for your time, and I hope you have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[SQL]] (2), [[Databases]] (2), database (2), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** find (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Database Queries
- Microsoft SQL Server

## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[Microsoft SQL Server 2022 Essential Training]] | **3 of 9** | [[Automating SQL Server with dbatools]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Fundamentals- Master Basic Query Techniques]] — Microsoft SQL Server
- [[SQL Practice- Intermediate Queries]] — Database Queries
- [[Level Up- Advanced SQL]] — Database Queries
- [[Advanced SQL- Logical Query Processing, Part 1]] — Database Queries
- [[SQL Server- Reporting Services]] — Microsoft SQL Server

---

[↑ Back to top](#)