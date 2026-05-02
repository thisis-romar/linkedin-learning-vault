---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-for-finance-professionals
url: "https://www.linkedin.com/learning/sql-for-finance-professionals"
duration_minutes: 66
duration: 1h 6m
level: Beginner
updated: 8/22/2024
learners: 102153
skills:
  - Financial Analysis
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH2Xr3RiZsbFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723482637801?e=2147483647&amp;v=beta&amp;t=6rckm7_wlJKFvNFTD22RCl0a2eSaMO4Ycd1xjPDKSE8"
linkedin_topic: Data Science
learning_paths:
  - '[[CFI Financial Analysis and Modeling Professional Certificate]]'
  - '[[SQL for Data Professionals in Finance]]'
prev_courses:
  - '[[Financial Forecasting with Analytics Essential Training]]'
  - '[[The Data Science Of Economics Banking And Finance]]'
next_courses:
  - '[[Getting Started with Python for Finance]]'
  - '[[From Excel to SQL]]'
path_nav: '[{"path":"CFI Financial Analysis and Modeling Professional Certificate","position":4,"total":7,"prev":"Financial Forecasting with Analytics Essential Training","next":"Getting Started with Python for Finance"},{"path":"SQL for Data Professionals in Finance","position":2,"total":4,"prev":"The Data Science Of Economics Banking And Finance","next":"From Excel to SQL"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/financial-analysis
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20for%20Finance%20Professionals.md)

![SQL for Finance Professionals](https://media.licdn.com/dms/image/v2/D560DAQH2Xr3RiZsbFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723482637801?e=2147483647&amp;v=beta&amp;t=6rckm7_wlJKFvNFTD22RCl0a2eSaMO4Ycd1xjPDKSE8)

# SQL for Finance Professionals

> If you work in the financial sector, one tool that may not come to mind when thinking about the day-to-day work in finance is SQL—structured query language. But SQL is the programming language used to query data, so it’s extremely useful for anyone who works with vast stores of information, including financial professionals. As more and more data gets produced from the proliferation of modern tool

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-finance-professionals) | 1h 6m | Beginner | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Become the Ultimate Financial Analyst Using SQL](#become-the-ultimate-financial-analyst-using-sql)
  - [What you should know](#what-you-should-know)
  - [Using CoderPad](#using-coderpad)
- [**1. What is SQL?**](#1-what-is-sql) (8 videos)
  - [Background and use cases of SQL](#background-and-use-cases-of-sql)
  - [Types of SQL commands](#types-of-sql-commands)
  - [SQL data types](#sql-data-types)
  - [Queries: The basic building blocks of SQL](#queries-the-basic-building-blocks-of-sql)
  - [How to use functions to perform calculations](#how-to-use-functions-to-perform-calculations)
  - [Joins using table relationships](#joins-using-table-relationships)
  - [Setting up sample data and files](#setting-up-sample-data-and-files)
  - [Solution: Creating your first query](#solution-creating-your-first-query)
- [**2. SQL in Finance**](#2-sql-in-finance) (5 videos)
  - [SQL in the finance field](#sql-in-the-finance-field)
  - [How data is used in finance](#how-data-is-used-in-finance)
  - [Data in fintech vs finance](#data-in-fintech-vs-finance)
  - [Excel vs SQL in finance](#excel-vs-sql-in-finance)
  - [Solution: Creating your second SQL query](#solution-creating-your-second-sql-query)
- [**3. Financial analysis in SQL**](#3-financial-analysis-in-sql) (5 videos)
  - [What is financial analysis?](#what-is-financial-analysis)
  - [Analyzing financial statements](#analyzing-financial-statements)
  - [Analyzing tabular data](#analyzing-tabular-data)
  - [Calculating financial metrics: WACC, NPV, IRR](#calculating-financial-metrics-wacc-npv-irr)
  - [Solution: Creating basic reports using SQL](#solution-creating-basic-reports-using-sql)
- [**4. Predictive modeling in finance**](#4-predictive-modeling-in-finance) (5 videos)
  - [What is predictive modeling?](#what-is-predictive-modeling)
  - [How predictive modeling is used in finance](#how-predictive-modeling-is-used-in-finance)
  - [Forecasting revenue trends](#forecasting-revenue-trends)
  - [Developing predictive models using SQL and Python/R](#developing-predictive-models-using-sql-and-pythonr)
  - [Case study: Detecting fraud](#case-study-detecting-fraud)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Become the Ultimate Financial Analyst Using SQL](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=0)** - I'm guessing [[SQL]] may not be the first tool that comes to mind when thinking about the day-to-day of working in finance.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=6)** Almost every industry is grappling with how to handle and make sense of vast stores of information or data, and finance is no different.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=14)** This makes SQL, the programming language used to query data, increasingly essential for finance professionals to know, especially as more and more data gets produced from the proliferation of modern tools and technologies.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=27)** My name is Megan Lieu, a financial analyst turned data scientist.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=31)** I love working with SQL to derive insights and tell stories from large volumes of [[Financial Data]].
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-professionals/become-the-ultimate-financial-analyst-using-sql-23442774?u=76281980&t=38)** If you want to learn about how SQL is an essential tool in your finance toolkit, join me on [[LinkedIn]] Learning for SQL for Finance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Financial Data]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (5)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)

#### [What you should know](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=0)** - Let's briefly cover the general concepts and skills you should have before we begin, and if you don't have them yet, no worries.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=7)** Feel free to pause and quickly brush up on them before moving on.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=11)** First, you should have basic financial literacy which is the ability to understand and use financial skills including personal financial management, budgeting, and investing.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=23)** This course is intended for current or aspiring finance professionals, so these basic finance skills are assumed.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=30)** Next, you should know the basic definition of data.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=33)** For the purposes of this course, data is information that has been translated into a form that can be easily processed or moved by modern computing.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=42)** Then, you should be familiar with the fact that data can be stored in and queried from a database, but of course it can also be stored and manipulated in a spreadsheet.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=51)** In both of these formats, data is stored in a tabular format where information is presented in the form of rows and columns.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=59)** We call both of these formats, structured data.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=62)** Last, you should have a basic understanding of what the process of [[Financial Data]] analysis generally involves.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=69)** Data analysis is the process of inspecting, cleaning and analyzing data for the purpose of discovering and understanding information.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-finance-professionals/what-you-should-know-23451296?u=76281980&t=78)** If you're comfortable with the concepts above, then let's proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (1)
> **Speakers:** - let (1)

#### [Using CoderPad](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=0)** - [Instructor] This course offers automated code challenges that are accessible to the challenge links in the course's table of contents.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=6)** Each challenge consists of instructions and a code editor where you can create and test your own solutions.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=11)** These challenges are conveniently located on the same page as the course videos.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=16)** For the best experience with code challenges, we recommend using a desktop browser.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=21)** However, if you prefer, you can also use the [[LinkedIn]] Learning mobile app.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=25)** The code environment is divided into three areas.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=28)** Instructions on the top left, a console for output on the bottom left, and a code editor on the right.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=34)** You have the flexibility to adjust the space allocation by using the drag handles.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=45)** To maximize horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=50)** Each technical interview question comes with clear instructions, including a description and the desired result of the question.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=56)** You can then proceed to create your answer in the code editor.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=60)** Once you have written your code, you can click on the Test my code button, located in the bottom right corner of the code editor.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=66)** After running your code, you'll receive a message indicating whether your code returned the correct result.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=72)** Additionally, you'll see a text-based version of the returned data.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=81)** If your code does not produce the expected result, you'll be notified with a message stating that your code is incorrect, accompanied by the returned data.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=90)** In case any messages exceed the console's width, you can simply scroll sideways to view the entire text.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=102)** Once you have completed each code challenge, you can return to the course's table of contents.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=107)** From there, click on the next video to access a walkthrough of the solution.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-professionals/using-coderpad?u=76281980&t=111)** This will provide you with further guidance and explanation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (2)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. What is SQL?

[↑ Back to Table of Contents](#table-of-contents)

#### [Background and use cases of SQL](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=0)** - A powerful tool that finance professionals use to make [[Financial Data]] analysis more efficient is [[SQL]], or S-Q-L, or Structured Query Language.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=9)** SQL is the standard language used to access relational [[Database Management]] systems, which are programs that allow users to create and manage [[Relational Databases]].
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=19)** These are types of [[Databases]] that are structured in a way where data can be identified and accessed in relation to another piece of data in the database.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=28)** Some common relational database management systems you may hear about or work with are [[Microsoft SQL Server]], Oracle DB, [[MySQL]], and [[PostgreSQL]].
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=37)** All of these systems use their own flavor or dialect of the SQL language.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=42)** Common SQL dialects include T-SQL, PL/SQL, MySQL, and PL/pgSQL, respectively.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-professionals/background-and-use-cases-of-sql-23448343?u=76281980&t=49)** However, all of these languages share the core features of standard SQL, which we'll learn about in the [[Representational State Transfer (REST)|rest]] of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Database Management]] (2), [[MySQL]] (2), [[Financial Data]] (1), [[Relational Databases]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** mysql (2), make (1)
> **Code Identifiers:** pgsql (1)
> **Speakers:** - a (1)

#### [Types of SQL commands](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=0)** - [Instructor] Now that we've been introduced to [[SQL]], it's time to learn about how to use it, and that's where commands come in.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=7)** Since SQL is a declarative query language, this means users tell the system what data to retrieve, and that is done using commands.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=15)** There are four types of SQL commands: Data definition language, or DDL, data query language, or DQL, [[Data Manipulation]] language, DML, and data control language, or DCL.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=31)** Another type you might encounter is transaction control language.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=35)** Data definition language, or DDL, are commands used to create, modify or delete tables or groups of tables, also called a schema, in your database, rather than the actual data within the tables.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=48)** Example commands are CREATE, DROP, ALTER, TRUNCATE, and RENAME.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=54)** The most common type of command you'll work with is data query language, or DQL, which deals with querying data within schemas of the database; essentially getting the data from the database.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=67)** The most important DQL command is the SELECT statement, which we will talk about in depth in the following videos.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=74)** Data control language, or DCL for short, deals with permissions and general control of the database system.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=81)** GRANT and REVOKE are the two DCL commands you'll commonly encounter.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=85)** Data manipulation language, or DML commands, allow you to manipulate existing data in a database, and deal with control of who can actually access the data.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=95)** DML commands include INSERT, UPDATE, DELETE, and LOCK.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=101)** And the fifth category, transaction control language, or TCL, are commands that give the user the ability to manage changes made to the data by DML commands.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=111)** TCL commands include COMMIT, ROLLBACK, and SAVEPOINT.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=117)** These five command types cover most of the actions you can use when working with data and [[Databases]] through the power of SQL.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-professionals/types-of-sql-commands-23451291?u=76281980&t=124)** Next, we'll learn about the data types you can use these commands on, followed by a deeper look into data query language specifically, as promised.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Data Manipulation]] (2), [[Databases]] (1)
> **Env Vars:** sql (4), dml (4), dql (3), dcl (3), ddl (2)
> **SQL:** select (1), update (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [SQL data types](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=0)** - [Instructor] An understanding of data types in [[SQL]] will provide the foundation for understanding the analyses you'll be performing.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=7)** A data type is an object characteristic that tells you the type of data.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=12)** The most important categories of data types you'll be working with are: String, numeric, date/time, and binary types.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=20)** The string data type includes char, varchar, varchar max, and text.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=26)** These different string types have different maximum numbers of characters you can have in a field, but they all must contain non-Unicode data.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=34)** The Unicode version of these types are called nchar, nvarchar, nvarchar max, and ntext.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=42)** Unicode is simply a system of coding that supports almost any language you can think of, but as a result, will take up more space to store in a database.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=50)** Within numeric data types you will often see exact numeric types, which include bigint, smallint, int, decimal, numeric, and money.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=61)** Approximate numeric types include real and float types, which are approximate because rounding is done on the field depending on the format specified by the user.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=70)** You will encounter datetime, smalldatetime, date, and time fields within the date/time data type, and these differ by the amount of time granularity you want to see, whether it is down to the day, hour, second, or millisecond.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=85)** Finally, binary data types include binary, varbinary, varbinary max, and image types.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=93)** These fields are equivalent to the char and varchar types we just mentioned, but instead store binary byte strings.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=100)** You should be familiar with these data types, because it will allow you to recognize the types of calculations and analyses you can and cannot perform given the data at hand.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=109)** Certain functions will only work on specific data types.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=112)** For example, you can perform a sum on numeric data types, but not on string data types.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=118)** Whereas the opposite is true for the concatenate function, which combines two strings in a specific order.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=124)** We will explore these functions and many others soon.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=128)** Next, we'll be getting to the meat of using SQL, which is how to query and use functions to perform your calculations and analyses.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-data-types-23451297?u=76281980&t=136)** So let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Queries: The basic building blocks of SQL](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=0)** - [Instructor] A query is how you retrieve information from your data and is therefore essential to using [[SQL]] effectively.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=7)** Think of it as how you communicate with your database to ask it a question and in return, the result of returns is the database's answer to your question.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=17)** The most common clauses or keywords you need to use in a SQL query are SELECT, FROM and optionally, WHERE.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=25)** SELECT is used to pull out the specific data or columns that you are looking for in a table and FROM is how you tell the system which table those columns should come from.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=35)** Lastly, WHERE is how you filter down those columns to certain rows or records that satisfy a condition.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=42)** To apply what we've just learned about clauses to a simple example, we'll use SQL as a calculator.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=48)** If we want to calculate two plus two, we use SQL's SELECT clause to retrieve some piece of information.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=55)** So to tell SQL to retrieve the answer to two plus two, we say select two plus two, and running this very basic query will return four.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=65)** Now let's look at another example using an actual table.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=68)** Let's say we're working with a restaurant's orders table where every row will be an order a customer placed and there will be columns containing information about one, the ID of an order, two, ID of a customer, and three, the date of that order placed.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=86)** All of these details will be in the form of columns in your orders table for each row, which represents one order.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=92)** Let's say we're working with a restaurant's orders table where every row will be an order a customer placed and there will be columns containing information about the ID of an order, ID of the customer, and date of the order placed.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=106)** All of these details will be in the form of columns in your orders table for each row, which represents one order.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=113)** Applying what we've just learned about the necessary building blocks of a query, SELECT, FROM and WHERE, let's talk about what the following query will return.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=122)** SELECT OrderID and OrderDate
>
> **[2:12](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=132)** FROM the Orders table WHERE the CustomerID is equal to seven.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=145)** What we are asking from the Orders table is to give us the OrderID and date of the order that the customer with an ID of seven has placed.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=153)** The result is as follows.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=156)** Next, what if we want to see all the columns in the table to get a bigger picture of these same orders?
>
> **[2:41](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=161)** Then instead of selecting specific columns in the SELECT clause, you can just use SELECT *, which will return the [[Representational State Transfer (REST)|rest]] of the details about this person's orders available to us in the orders table.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=175)** The result is as follows.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-professionals/queries-the-basic-building-blocks-of-sql-23451293?u=76281980&t=177)** Now that we know how to use the basic building blocks of SQL, we can move on to functions, which will allow us to ask more advanced questions about our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** select (7), sql (6), where (4)
> **SQL:** select (7), where (4)
> **Analogies:** think of it as (1), picture (1)
> **Speakers:** - [instructor] (1)

#### [How to use functions to perform calculations](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=0)** - [Instructor] Let's talk about [[SQL]] functions.
>
> **[0:02](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=2)** Fortunately, SQL has a lot of built-in functions that allow you to perform the most common types of calculations on your data.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=10)** The two types of functions in SQL are aggregate functions, which return a single value calculated from multiple values in a column, and scalar functions, which return a one-to-one output for each input value.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=23)** Aggregate functions include functions to calculate the average, median, count, maximum, minimum, sum, first, and last of a set of data.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=33)** These return basic [[Statistics]] on a group of records when you specify a column name within the parentheses of the functions.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=40)** When you see these parentheses, you know you're dealing with a function.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=44)** And you can think of these parentheses as the [[Microsoft Word|word]] of.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=47)** For example, when you see average, open close parentheses, think of average of a given group of records.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=56)** Scalar functions, on the other hand, are used on single data points rather than a group of them.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=61)** These include length, upper, lower, cast, and round, and you can think of these functions as performing transformations on a single piece of data.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=70)** With a new dishes table, let's see an example of aggregate functions in action.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=76)** The columns in this table are as follows, the ID of each dish, name of the dish, the dish's description, its price, and its dish type.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=86)** What if we want to find the maximum order value of all dishes that are considered desserts?
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=100)** The following query would answer that question.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=103)** So we're going to select the maximum price from the table called Dishes where the type is equal to Dessert.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=112)** The result is as follows.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=114)** As we can see, the maximum price of desserts is $9.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=119)** In the previous example, we found the maximum price of all dishes in the dessert category.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=124)** But what if we want to see the maximum price for each different dish type?
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=129)** This is where a new clause, the GROUP BY clause, comes in.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=132)** Since the column type is the grouping by which we want to segment the data, we want to add GROUP BY type at the end of the query.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=140)** But the key here is that whatever column or columns you are grouping by, they must be explicitly listed in the SELECT clause before the aggregate function you're calculating.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=150)** So with this new GROUP BY clause, our query is going to look like the following.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=164)** We're going to select type, which is the column we are grouping by, max of the column price, we're calling this maximum_price, from our dishes table, and we are going to be grouping by the column type where the result will be one column listing the distinct product categories and the second column will be the maximum price for each type, which we have aliased as maximum_price.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=193)** Functions are a very common way of analyzing the data you're working with, and they do so by allowing you to either perform calculations on or transforming your data.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-finance-professionals/how-to-use-functions-to-perform-calculations-23451292?u=76281980&t=203)** Coming up last but not least in this chapter, we'll be exploring JOINs to be able to get data from multiple tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Statistics]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (3), group (3), select (1)
> **SQL:** group by (3), select (1)
> **Code Identifiers:** maximum_price (2)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)

#### [Joins using table relationships](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=0)** - [Instructor] When you need to answer a question that requires data coming from more than just one table, that's where joins come in.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=6)** Joins allow you to stitch together multiple tables.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=10)** However, the key is that a relationship has to exist between the tables for them to be linked to each other.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=15)** These relationships come in the form of common fields that exist across the tables being connected, and these fields are called foreign keys, which are basically columns or groups of columns that tell you how data is tied together or related to each other across tables in a relational database.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=32)** Now let's talk about the types of joins you'll encounter.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=36)** They are inner or regular joins, left join, right join, and outer or also called full outer joins.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=44)** Inner joins or just joins are used when you want to return only the matching values that exist in both tables you're joining together.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=52)** Left joins are for when you want to return all the records in the left or first specified table, and the matching records from the right or second specified table.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=61)** Records that only show up in the left table and not in the right will produce a null value on the right side because there was no match in the right table.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=69)** Right joins on the other hand are the opposite, where you are returning all the records in the right table and only the matching records from the left if the record exists in both.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=79)** In practice, right joins are rarely used because you can just use a left join and switch the order of the left and right tables in your query and it will produce the same result as a right join.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=89)** Finally, an outer join, also known as a full outer join returns all records when there's a match in either the left or right table.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=97)** If there are rows in the left table that don't match any record in the right table, or if there are rows in the right table that don't have a match in the left table, these rows will still be returned from an outer join.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=108)** Let's apply these concepts to our previous dishes table, but also to a new table called customers which contains details about each customer and their favorite dish.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=118)** The customer's table will contain columns telling us the customer's id, their first name, last name, email address, their physical address, the city they live in, state, their phone number, their birthday, and the ID of their favorite dish.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=134)** Notice that we have dish ID as the field that is common to both the dishes and customers tables.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=139)** This is what we will use to act as the foreign key to join together the two tables.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=144)** What if we want to pull all the distinct addresses of all people whose favorite dishes are considered high value dishes?
>
> **[2:31](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=151)** Let's say dishes are classified as high value if the price is equal to or exceeds $8.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=157)** A question like this could be asked by a business if they want to get an idea of which customers to target again.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=164)** We will select the distinct address from the customers table, which is specified with the letter c before the name of the field and we'll come back to that in a future line.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=179)** From the dishes table, which we will alias with the letter d, join to the customers table which we will alias with the letter c.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=200)** In this line we're specifying the foreign key relationship that joins together the dishes and the customers tables.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=212)** And in this where clause, we are specifying that we only want to see records where the price of the dish is more than $8.
>
> **[3:40](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=220)** The result is all the unique addresses for all customers who have a favorite dish that costs more than $8.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=227)** You might have noticed the new on clause which will list out how the foreign keys related to each other to link the customers and dishes tables.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=235)** You can also specify multiple conditions to match the two tables on by using the and keyword.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=241)** Also, we used an inner join or just a regular join here because we only wanted to return the favorite dishes for customers who have a match, and thus also have an address information in the customers table.
>
> **[4:14](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=254)** But what if a customer didn't provide their address to be filed in the customers table?
>
> **[4:19](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=259)** Well, then we'd want to use a left join instead so that we'll still be able to list out these records that only exist in the left dishes table but don't have a match in the right customers table.
>
> **[4:29](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=269)** And if we want to list them all out, whether there are any matches between the two tables or not, then we choose an outer join instead.
>
> **[4:37](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=277)** And that wraps up joins, the last important concept you should know about in this chapter.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-finance-professionals/joins-using-table-relationships-23451290?u=76281980&t=282)** We'll be referencing these concepts from this chapter often throughout this course, so feel free to come back to these videos as you progress.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Setting up sample data and files](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=0)** - [Instructor] Let's take what we've just learned about [[SQL]] and create our very first query.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=5)** But before we do that, we have to set up our SQL environment to begin querying the database exercise files provided in this course.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=12)** The software we'll be working with is called DB Browser, which is an open source tool used to work with database files through a spreadsheet-like interface and SQL commands.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=22)** You've already seen me use it in the past few videos.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=25)** Specifically the flavor of SQL it uses is called SQLite.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=30)** To get started with DB Browser, simply go to [sqlitebrowser.org/dl](https://sqlitebrowser.org/dl) and download the version that is compatible with your operating system.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=40)** Once that application is installed on your machine, you can open the database files that you've downloaded from this course by navigating to the open database button at the top left and selecting the files wherever you've saved them in your file system.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=52)** With the files from this course, they will be downloaded in a ZIP file called X_Files_SQL_Finance_Professionals.zip.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=59)** Once you've unzipped this folder, you'll find a restaurant database file and a sales_cogs_opex database file inside.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=67)** These are the files you're going to be opening one at a time when you select the Open Database button.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=73)** Once you do that, you'll arrive at the default database structure tab, which shows you how the selected database file is structured.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=81)** Specifically, you'll see the eight different tables that exist in the restaurant database and the three tables in the sales_cogs_opex database listed under the tables dropdown here.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=95)** Scrolling to the right, you'll see the schema for each table in the database.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=99)** In SQLite, a schema is a description of all objects that are contained within the database, but if you're used to browsing your data in the form of spreadsheets, the browse data tab will probably feel very intuitive for you to navigate.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=112)** Simply select the table within your database that you want to explore in the table dropdown at the top left.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=118)** Then you'll see the columns of the table displayed across the top and records down the left, like any normal spreadsheet.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=125)** Feel free to refer back to this browse data tab throughout the exercises to get a good mental model of the tables that you'll be querying in each subsequent challenge.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=134)** Where we'll be spending most of our time in these challenges though is in the execute SQL tab.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=139)** The top pane on the left here is where you'll be writing your actual SQL queries and the pane below that is where the results of your query will display.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=148)** To run the query I've written, I will simply press the blue play button above the query, but a handy shortcut you'll probably get used to is Control + Enter for PCs or Command + Enter for Macs to execute the command the same way.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=163)** A good reference doc to see a list of available keyboard commands that you can use in DB Browser is this [[GitHub]] page provided by SQLite Browser.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=172)** Great, now that you've had the chance to take a look around DB Browser, we can use it to start applying what we've learned from the past couple of videos in your first challenge of this course.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-finance-professionals/setting-up-sample-data-and-files?u=76281980&t=182)** I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[GitHub]] (1)
> **Env Vars:** sql (6), zip (1)
> **UI Navigation:** select the (2), dropdown (2), go to (1), open the (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **Exercise Files:** exercise files (1), download the (1), zip file (1)
> **Code Identifiers:** sales_cogs_opex (2)
> **CLI Commands:** find (1)
> **URLs:** [sqlitebrowser.org](https://sqlitebrowser.org) (1)

#### [Solution: Creating your first query](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=5)** - [Instructor] I hope you had fun with your very first challenge of this course.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=8)** Let's walk through how I would tackle the problem.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=11)** We'd first select all the distinct combinations of customer first name and last names, and again, these fields come from the customer table.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=19)** From the first table, which is the dishes table, we will alias that with the letter D and join it to the customer table, which we will alias with the letter C.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=27)** These two tables will be joined together by the dish ID field coming from the dishes table and the favorite dish column coming from the customer table.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=35)** We'll qualify the results of this query by specifying that the type of dish must be an appetizer, and also by the fact that the state of the customer must be in California, which will be specified by the letters CA.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=47)** Let's make sure that this query that we've written will give us the result we want.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-first-query-24464020?u=76281980&t=55)** As we can see here, there are four distinct customers who have ever favored a dish that is an appetizer, and they also live in the state of California.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. SQL in Finance

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL in the finance field](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=0)** - [[SQL]] can be a very powerful tool in a financial analyst's toolkit.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=4)** It's great for [[Business Intelligence (BI)|business intelligence]], [[Forecasting]], and [[Financial Modeling]].
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=9)** Let's talk about why SQL is such an effective tool to use in finance.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=13)** Knowing how to manipulate and analyze [[Financial Data]] and records is at the heart of [[Financial Analysis]].
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=20)** Financial analysts often deal with large volumes of data to be able to create their financial models.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=26)** Two common concepts used by financial analysts are [[Pivot Tables]] and V-lookups.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=31)** These are spreadsheet concepts we will learn more about later, but for now, be aware that they are widely used for building reporting that financial analysts are responsible for.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=40)** Both pivot tables and V-lookups have direct translations in the world of SQL and can make the analyst's job much easier and faster.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=49)** Another reason analysts in the field greatly benefit from using SQL in their day-to-day is that they often may need to get their own data rather than depending on engineers to extract it for them.
>
> **[0:59](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=59)** Often, being able to write simple queries in SQL is all they need to access data that may not be readily available to use for their analyses.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=68)** It's important to acknowledge that some finance professionals won't need to use SQL.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=72)** Many of the most common analyses, such as financial statement, ratio, and variance analyses just don't require very much or very complex data, and thus can be easily handled by spreadsheets or other reporting systems.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/sql-in-the-finance-field-23454232?u=76281980&t=85)** However, when the analyst needs to perform deep dive investigations or complex forecasts or they need to work with engineers to acquire the data, SQL is a huge asset, especially to the analysts who want a competitive edge in their field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Pivot Tables]] (2), [[Business Intelligence (BI)|Business intelligence]] (1), [[Forecasting]] (1), [[Financial Modeling]] (1)
> **Env Vars:** sql (7)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - sql (1)

#### [How data is used in finance](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=0)** - [Instructor] Let's take a more detailed look into the kind of data financial analysts often work with.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=5)** This will help us understand what [[SQL]] can and cannot handle when it comes to [[Financial Analysis]].
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=11)** What is [[Financial Data]]?
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=13)** In the simplest definition, it is information that relates to the financial well-being of an organization.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=19)** The most common source of financial data is the business's [[Financial Statements]], which includes the balance sheet, income statement, and cash flow statement.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=28)** But other sources of financial data is what is called alternative data, which comes from outside the company.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=34)** Examples of this include consumer sentiment, credit card transactions, and geolocation information.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=41)** Both types of data, traditional and alternative, can be combined to paint a more holistic picture of a company's financial health.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=49)** Let's focus on traditional financial data.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=51)** The data coming from a company's financial statements falls into these most common types, assets, liabilities, equity, income, expenses, and cash flow.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=62)** Assets data is used to inform stakeholders about everything the company owns, whether that is real, personal, tangible, or intangible property, whereas liabilities tell us about what the company owes to others.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=76)** Income is used to show how much the company generates in wealth from doing business and from its investments.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=82)** On the other hand, expenses are the costs it has to incur to do that business.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=87)** Equity is what's left over of the company after all its assets are sold off and all its debts are paid off.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=93)** Lastly, cash flows tell us about the sources and uses of the company's cash, since at the end of the day, cash is king for most businesses.
>
> **[1:43](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=103)** All these various [[Forms]] of financial data play a crucial role in helping the company make decisions.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=108)** When managers, investors, and regulators have a well-rounded understanding of an organization's financial position, they're able to make more informed business decisions, such as whether or not to increase funding for a specific department, make investments in certain assets, and whether to reinvest or distribute its profits.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-professionals/how-data-is-used-in-finance-23450341?u=76281980&t=127)** Now that we have a better understanding of the types of data financial analysts work with, let's look at differences between data you'll encounter in finance versus fintech companies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (5), [[Financial Statements]] (2), [[SQL]] (1), [[Financial Analysis]] (1), [[Forms]] (1)
> **CLI Commands:** make (3)
> **Analogies:** picture (1), such as (1)
> **Env Vars:** sql (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Data in fintech vs finance](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=0)** - [Narrator] You've probably heard of the [[Microsoft Word|word]] Fintech and have wondered how it differs from finance.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=5)** Fintech companies are those that integrate technology in every step of its revenue generation and [[Decision-Making]] processes in order to improve the use and delivery of their [[Microsoft Products|products]] and services.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=16)** Examples of these companies include mobile [[Banking]] platforms, robo-advisors and peer-to-peer payment services.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=24)** Fintech companies have grown in popularity as a direct result of new technologies that have emerged, such as [[Blockchain]], AI, machine learning, and [[Big Data]].
>
> **[0:33](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=33)** All of these technologies have fundamentally changed how digital currencies can be stored, transferred and secured.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=40)** Traditional financial institutions, on the other hand, commonly include banks wealth management firms and insurance companies, and these organizations are regulated by a central bank or the national government in most countries.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=52)** The presence of this regulation, including data-sharing and [[Data Privacy]] laws, means the data that traditional financial organizations often deal with can be more limited in scope and volume.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=63)** Also, in these finance organizations, the core decision-making and revenue-generating parts of the company can be removed from the technology and [[Data Science]] teams.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=73)** In both finance and Fintech companies, data can come from internal sources, which we referred to as traditional data in the previous video, and also external sources, which we called alternative data.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=86)** What differentiates how much of each type of data these companies need to use for their daily operations is the various technologies that a Fintech company has embedded throughout its processes.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=97)** Fintech companies often rely on big data, machine learning and blockchain to power not only their products and services but also the valuable insights that inform decision-making across the company.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=108)** These kinds of technologies are built off vast amounts of data that likely can't be found only internally.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=114)** So Fintech firms more often than traditional finance ones rely on alternative data generated from people, business processes, and censors to get the volume they need to train their models.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=127)** Traditional finance data, for the most part, comes from [[Financial Statements]], filings with regulatory agencies and press releases.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-finance-professionals/data-in-fintech-vs-finance-23452275?u=76281980&t=135)** As we can see, the types of data an organization often works with, relies heavily on the types of technology it uses on a day-to-day basis and how embedded those technologies are throughout the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision-Making]] (3), [[Microsoft Products|Products]] (2), [[Blockchain]] (2), [[Big Data]] (2), [[Microsoft Word|Word]] (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Excel vs SQL in finance](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] is perhaps the main tool used by financial analysts in the field.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=4)** Much of the data these analysts have to work with come in the form of spreadsheets that are exported from various reporting systems.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=11)** This means that when they have to manipulate and analyze that data, doing so directly in those spreadsheets rather than going to outside tools is often easier.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=21)** Beyond its ease of use, spreadsheet tools like Excel are very widely used by finance professionals because of the formatting and calculation functions readily available in the tool.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=31)** The formatting functionality in Excel allows users to easily communicate findings and reports in [[Dashboards]], but in addition to that, conditional formatting is another extremely helpful tool that helps in reducing errors in the data.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=44)** The variety of financial functions available in Excel allow you to perform the most popular calculations that are required for building [[Financial Statements]], financial models, [[Forecasting]], budgeting, and account reconciliations.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=58)** [[SQL]], on the other hand, is a tool that is a lot less native in the field of finance.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=63)** This is because oftentimes, many finance teams just don't deal with large enough volumes of data to need to use [[Databases]] and thus SQL.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=71)** But where more complex, frequent, or cross-functional analyses are involved, these teams are more likely to need SQL so that they can readily access the data they need without relying on engineers to get it.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=83)** For example, if a global bank needs to pull data on the hundreds of thousands of transactions its customers have over the course of a fiscal year, a spreadsheet tool like Excel just would not have the capacity to store all of those data points and its features.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=98)** In reality, most finance professionals are not just using one or the other.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=102)** They're probably combining the two to achieve the most efficient workflow for their data needs.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=108)** For example, an analyst might retrieve daily stock prices for a target company by exporting publicly available financial reports and downloading them as Excel files.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=118)** These daily numbers need to be stored in a database if her team has been tracking the company's daily stock prices for a really long time.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=125)** Then if she wants to go back to pull up a certain stock price on a given day in the past, rather than digging through individual stock prices, she can instead query that table that has been keeping track of all the stock prices to date.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-professionals/excel-vs-sql-in-finance-23455225?u=76281980&t=138)** As a financial analyst, we often have a choice among many analysis tools available but Excel and SQL are perhaps the most powerful ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[SQL]] (4), [[Dashboards]] (1), [[Financial Statements]] (1), [[Forecasting]] (1)
> **Env Vars:** sql (4)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Creating your second SQL query](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=1)** (no audio)
>
> **[0:06](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=6)** - [Instructor] Let's go over a suggested solution to your second [[SQL]] challenge.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=10)** We will be selecting the amount from the sales table and aliasing it as sales_amount, the amount from the COGS table and calling it cogs_amount.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=18)** And lastly, the amount from the OPEX table and calling it, you guessed it, opex_amount.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=24)** And as the last field we're also selecting, we are choosing the transaction date of the product sold.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=30)** The first table we are querying is the sales table and we are aliasing that with a letter S.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=35)** We are then joining it to the COGS table and aliasing that with the letter C.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=39)** Those two tables are joined with the primary key of ID from the sales table and sales_id from the COGS table.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=46)** We are then joining a third table, OPEX, and aliasing that with the letter O through the relationship of ID from the sales table on the sales_id field of the OPEX table.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=57)** And lastly, we are specifying the two dates that the transaction date from the sales table should fall between.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=63)** And those would be the dates of January 1st, 2016 and February 1st, 2016.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-your-second-sql-query-24461122?u=76281980&t=75)** The result is a record for each product sold, showing the revenue, cost of goods sold, operating expense, and transaction dates for each product sold in the timeframe from January to February of 2016.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** cogs (3), opex (3), sql (1)
> **Code Identifiers:** sales_id (2), sales_amount (1), cogs_amount (1), opex_amount (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Financial analysis in SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [What is financial analysis?](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=0)** - [Instructor] [[Financial Analysis]] is the process of analyzing a company's [[Financial Data]] to be able to get an idea of the company's financial health and also to make recommendations for how to improve that financial health going forward.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=13)** There are several types of financial analyses that you may hear about, and the specific one you may work with often depends on the industry of your target company, the reason for your analysis, and even the current state of the financial market.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=27)** The types of financial analyses we'll be talking about today are vertical, horizontal, leverage, growth rates, profitability, liquidity, cash flow, valuation, and variance analyses.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=41)** Vertical analysis involves taking major line items of an income statement and dividing them by revenue, then expressing them as percentages.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=50)** These percentages are then to be compared to other companies' ratios in a process called benchmarking, so that you can see how your target stacks up to peer companies.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=60)** Horizontal analysis is when you take specific line items from your current year's [[Financial Statements]] and compare them to previous, as well as forecasted years' line items, which will show patterns and rates of growth for these items over time.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=74)** Leverage analysis is another way to assess company performance by comparing various debt metrics to equity ones.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=81)** The result is that you get a better picture of the company's capital structure than if you were to just look at debt or just equity figures alone.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=88)** Growth rate analyses involve looking at past and projected rates of growth, similar to horizontal analysis, but has broader applications, such as year-over-year, regression, and other [[Forecasting]] analyses, which we'll discuss further in a later video.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=104)** Profitability analysis uses common ratios of income statement line items to determine how attractive the economics of a target company are.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=113)** These ratios include gross margins, EBITDA, EBIT, and net profit margins, and again, these should be benchmarked against peer companies.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=123)** Liquidity analysis looks at a business's ability to satisfy short-term obligations, which are those due in less than a year.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=131)** This involves looking at ratios taken from line items on the balance sheet, including current ratio, networking capital, and the acid test.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=139)** Cash flow analyses are important in a financial analyst toolkit because cash is king, so it is critical to look at a business's ability to generate cash flow.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=150)** This entails looking at the operating cash flow, free cash flow to the firm, and free cash flow to equity.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=157)** Valuation analysis is the process of building financial models, often in [[Microsoft Excel|Excel]], to determine the value of a company.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=165)** This can be done via three major approaches, the cost approach, market approach, and a discounted cash flow analysis.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=173)** Analyses often use a weighted combination of these three to arrive at their final valuation number.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=179)** Lastly, variance analysis is when you compare actuals to budgeted or forecasted results.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=185)** This is important, especially for internal planning and budgeting processes that accounting and finance professionals are often responsible for.
>
> **[3:14](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-financial-analysis-23449328?u=76281980&t=194)** Keeping these analyses in mind, we'll later explore how to use [[SQL]] to create the reports that analysts often deliver to important stakeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Analysis]] (1), [[Financial Data]] (1), [[Financial Statements]] (1), [[Forecasting]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** ebitda (1), ebit (1), sql (1)
> **Analogies:** picture (1), similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing financial statements](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=0)** - [Lecturer] In the previous video, we mentioned specific analyses that are done using the income statement, balance sheet, and cash flow statement.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=8)** These three types of [[Financial Statements]] are going to be hands down the most important sources of data for your financial analyses.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=16)** Before we discuss how to analyze them, we need to understand what financial statements are and their purpose.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=22)** Financial statements are written documents that communicate a company's financial performance and also their business activities.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=30)** There are four major financial statements you need to know about the balance sheet, income statement, cash flow statement, and statement of retained earnings.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=39)** You can think of the balance sheet as a snapshot of a business's financial health at any given point in time.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=46)** That given point is usually the end of a quarter or year for the company.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=50)** The purpose of this statement is to provide an overview of its assets, liabilities, and equity as of that time.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=57)** You should also know that the total assets should equal the total liabilities plus equity.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=64)** The income statement shows you a company's revenues and expenses during a period of time, unlike a balance sheet which presents its figures as a point in time.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=74)** The net of expenses from revenues is a company's net income, which is arguably the most important figure because it shows you the profitability of the company's operations.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=85)** The statement of cash flows presents all the inflows and outflows of cash the company had during the reporting period.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=93)** The purpose of this document is to assess the company's ability to generate cash to meet its financial obligations and pay for its operations and investments.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=104)** Last but not least, the statement of retained earnings also known as the statement of changes in equity or just the equity statement, tells you how the company retains its profits to fund future growth or distribute to external stakeholders, and these profits are affected by profits or losses in the reporting period.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=122)** This statement is the least common one you'll use since companies usually only issue this in their audited financial statements at the end of the reporting year.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=131)** What ties all four of these statements together are financial statement disclosures and footnotes, which provide further context on calculations, write-offs, add-backs, et cetera.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-financial-statements-23451298?u=76281980&t=141)** Together with all of the statements, you as a financial analyst should have most of what you need to start analyzing your [[Financial Data]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Statements]] (5), [[Financial Data]] (1)
> **Cross-References:** previous video (1), we mentioned (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [lecturer] (1)

#### [Analyzing tabular data](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=0)** - [Instructor] Being able to analyze tabular data is going to be important not only to your work as a finance professional but also to any work you do involving data.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=9)** Tabular data is simply data that's organized in a table with rows and columns.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=15)** In that table, there are two dimensions, the features or attributes of the data and the actual observations.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=22)** Some tables have the names of features spelled out across the top so that each column represents a different feature and each row represents an observation.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=32)** This is the more common type of data organization and it is considered horizontal.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=37)** Other tables have the features name going down the first column so that each column represents an observation and each row represents a feature.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=45)** We call this vertically organized data.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=49)** Tabular data is extremely common in finance because much of the data from [[Financial Statements]], which we've discussed are major sources of financial analyses, are organized in tables.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=60)** Let's take a closer look at the tabular organization of balance sheets, income statements, and cash flow statements.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=67)** In a balance sheet, your major sections are your assets, liabilities, and shareholders equity.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=73)** But in all three of these sections you'll have the name of the line item such as inventory, accounts payable, or retained earnings on the left side followed by the amount of each balance on the right side.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=85)** At the bottom right of each section and subsection, you will see calculated totals.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=91)** In an income statement, the organization is the same where left hand columns will contain the name of the line items and the right hand side will contain the actual numbers with totals and subtotals.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=101)** In this case, the numbers are amounts that were actually received or spent by the company over a reporting period rather than remaining balances at the end of the period as in a balance sheet.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=114)** Lastly, in a cash flow statement, again, the vertical organization is the same, but the numbers on the right represent inflows and outflows of cash over the course of the reporting period.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=125)** [[SQL]] is an especially powerful tool when working with any tabular data because it is the language of [[Databases]], and databases are simply collections of data that are most commonly organized in tables.
>
> **[2:17](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=137)** However, you may remember from our first chapter that all the source tables we queried using SQL were vertically organized.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=144)** In the select clause, we are selecting the name of columns rather than rows and in the where clause, we are filtering rows on specified conditions rather than filtering columns.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=155)** Then the result is a subset of the source table where again records go down the table and its features go across.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=163)** This means that when we want to perform analyses in SQL on data that comes from financial statements, we'll have to pivot the financial statement's columns and rows.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=172)** Pivoting can be done with built-in SQL functions such as pivot and case when statements, both of which are outside the scope of this course.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-finance-professionals/analyzing-tabular-data-23453268?u=76281980&t=181)** Next, we'll look at how information from these statements can be used to calculate important financial metrics that companies use to make business decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Financial Statements]] (2), [[Databases]] (2)
> **Env Vars:** sql (4)
> **Definitions:** we call this (1), is an  (1), is a  (1), means that (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Calculating financial metrics: WACC, NPV, IRR](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=0)** - [Instructor] A lot of financial professionals' analyses are used to figure out whether an organization should invest in a certain asset, engage in a project, or take on some risk, or in general, make any kind of financing decision.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=13)** How do they measure whether a decision is worth taking on?
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=17)** The most popular ways to do so are by looking at the WACC, NPV, and/or the IRR.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=23)** These three financial metrics don't exist in isolation.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=26)** They're actually all tied together.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=28)** And to understand how, we must first talk about what a discount rate is.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=32)** A discount rate is a rate of return that is used to discount future cash flows of an investment or project back to a present value.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=39)** This process of discounting is formally called a discounted cash flow or a DCF for short.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=46)** How exactly do businesses decide what is the required rate to do that discounting?
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=52)** Often, this will be the company's weighted average cost of capital or WACC for short.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=57)** The WACC is a company's average cost of their capital which can be broken down broadly into equity and debt capital.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=65)** Both of these categories of capital are proportionately weighted by their percentages in the company's overall capital structure.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=72)** WACC is used to gauge how attractive a certain financial decision is, so it's often called a hurdle rate, and this is because the WACC represents the return that both bond holders and stockholders demand in exchange for providing the company with their capital.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=87)** Then the result of using WACC to discount expected future cash flows back to the present is called net present value or NPV for short.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=96)** Now, what if we want to find the minimum discount rate that causes the DCF to result in a positive return to the company?
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=102)** Well, this is exactly what the internal rate of return or IRR for short is for.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=107)** The IRR is necessarily the discount rate that yields an NPV of zero in a DCF.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=113)** So the higher the discount rate that causes NPV to be zero, in other words, the higher the IRR, the higher the expected return of the investment.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=123)** So how do WACC, NPV and IRR come together?
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=127)** WACC and IRR must be compared to ultimately assess whether the investment should be taken on or not.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=133)** If the IRR is higher than the WACC, this means the discounted cash flows at least cover the cost of financing the project and should be taken on, because NPV will be positive.
>
> **[2:23](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=143)** Vice versa means the project's cash flows will not cover the cost to finance it, and NPV is negative.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=149)** And if WACC and IRR are the same, this means the project provides just the minimum return required by investors and NPV is zero.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=159)** The key difference between WACC and IRR is that WACC is the company's expected average cost to finance future projects given how much stock and debt it's taken on from its investors whereas IRR is a metric that is independent of what investors want.
>
> **[2:54](https://www.linkedin.com/learning/sql-for-finance-professionals/calculating-financial-metrics-wacc-npv-irr-23452274?u=76281980&t=174)** It is solely dependent on the project being assessed.

> [!info]- Semantic Content
>
> **Env Vars:** wacc (12), irr (10), npv (8), dcf (3)
> **Definitions:** is a  (3), is called (1), in other words (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Creating basic reports using SQL](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=0)** - [Instructor] Let's take a look at how I would solve this third challenge.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=10)** The first item we would want to select is the year out of the transaction date field, and that is done using the format date time function and aliasing that as year.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=19)** Next, we'll use the same function to extract the month out of the transaction date field, and we will alias that as month.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=27)** Next, this is where the first aggregate function comes in where we want to find the sum of the sales amount, and we'll be aliasing that and calling it sales_amount.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=36)** Then, we want to find the aggregate sum of the COGS amount, and we'll alias that as cogs_amount, and last, we are finding the sum of OpEx amount and calling that opex_amount.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=49)** We are selecting these fields first from the sales table and aliasing that with the letter S, join to the COGS table, aliasing that with a letter C, and these two fields are joined together using the ID field from the sales table and the sales_ID field from the COGS table.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=68)** The sales and COGS tables will then be joined to the OpEx table, and we will alias that with the letter O.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=74)** This OpEx table is joined to the previous two tables using the same sales_ID field.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=81)** And last but not least, we would want to add in the group by clause, where we specify the columns that we want to segment our data by, and that would be by the month and year columns that we derived in the first two select statements in this query.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-professionals/solution-creating-basic-reports-using-sql-24460134?u=76281980&t=100)** The result is the sum of sales, COGS, and OpEx for each month and year that we've had data for.

> [!info]- Semantic Content
>
> **Env Vars:** cogs (5)
> **Code Identifiers:** sales_amount (1), cogs_amount (1), opex_amount (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Predictive modeling in finance

[↑ Back to Table of Contents](#table-of-contents)

#### [What is predictive modeling?](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=0)** - [Instructor] [[Predictive Modeling]] is the process of taking past data to develop, train, and validate a model to predict future events, behaviors, and risks.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=9)** Due to the rapid migration to and adoption of digital tools in the finance industry, vast amounts of real time data are produced that need predictive modeling tools and techniques to make sense of it all, specifically, by processing a large amount of historical data, analyzing it, and identifying trends and patterns, then providing users with the ability to not only query the historical data, but also assess the [[Probability]] of future events and behaviors occurring.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=36)** There are three specific predictive model types that are the most widely used in the field: classification, outlier, and time series models.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=45)** Classification models learn from historical data to be able to bucket future data into categories: most often, just two categories.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=54)** Some of the kinds of questions this model type answers are will this customer churn, or will this company's stock price go up or down?
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=62)** Because of how many common questions classification models can answer, and also how easily they can be trained on new data, they are the go to model for many different applications.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=74)** Outlier models are specifically used to identify anomalies in the data by detecting large deviations in the data set.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=81)** The most popular application of this model is in fraud detection, where the fraudulent transaction's purchase amount, the nature of the transaction, and the exact location and time of the purchase can be assessed, which makes it particularly used in the retail and finance sectors.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=98)** Lastly, the time series model is another common model used within finance that predicts how a continuous variable will change over time, while also taking into account seasonality.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=109)** This use of time as the main input parameter means this model is great for both explaining the past and predicting the future.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=116)** All three of these models, and several others that are used in the industry, have revolutionized how businesses can take action using insights from their data.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=125)** The six main use cases of predictive modeling in finance are reducing investment risks, cutting costs, identifying market risks, preventing fraud, managing credit card default risks, and optimizing customer experiences.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-finance-professionals/what-is-predictive-modeling-23448340?u=76281980&t=141)** Given these use cases and benefits, it's no wonder that predictive modeling has been rapidly adopted among [[Corporate Finance]], investment [[Banking]], hedge funds, and plenty of other sub-fields within finance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Modeling]] (4), [[Probability]] (1), [[Corporate Finance]] (1), [[Banking]] (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [How predictive modeling is used in finance](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=0)** - [Instructor] In this video, will go beyond the basic definition of classification, outlier, and time series models and dive into what they look like in practice, specifically with the application of predicting customer churn.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=14)** Classification models, if you'll remember, are models that learn from historical labeled data to be able to categorize unlabeled data into predetermined groups, most often to answer binary questions.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=27)** In the case of predicting customer churn, the specific classification model used is [[Logistic Regression]] which is used to estimate a relationship between a categorical dependent variable, such as whether the customer will churn or not, and one or more independent variables such as the customer's income level, customer usage over the last 30 days, and age.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=48)** Outlier models are those that identify the outliers by looking for data points that have a large deviation from the [[Representational State Transfer (REST)|rest]].
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=56)** In the case of customer churn, we can think of churn as an event that deviates from the norm or an anomaly.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=62)** So an outlier model using clustering as the primary technique to detect the rare occasion of churn is very effective.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=69)** Clustering is when data is sorted into groups based on similar characteristics.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=74)** This may sound similar to classifying data points into groups, but the difference is that in clustering the groups are not determined beforehand, but rather form as the characteristics of the data reveal themselves.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=87)** In the case of predicting customer churn, clustering will identify different groups of customers, some that are more likely to churn than others.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=95)** Time series models, again, are models that predict how a continuous variable changes over time.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=102)** While it may be less common to use time series to predict something like churn, in this case, let's say the number of times a customer uses our product which would be a very good indicator of whether or not they'll churn soon, is what we want to understand the patterns of over time.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=117)** By looking at trends in the number of times the customer logs in, we can use time series [[Forecasting]] to look at when downward trending usage is significant enough to count the customer as likely to churn.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=129)** In all of these models you'll notice that there were three common factors.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=133)** One, historical or sample data that has dependent and independent variables.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=138)** Two, the algorithm's learning of patterns in that data.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-finance-professionals/how-predictive-modeling-is-used-in-finance-23454233?u=76281980&t=142)** And three, creating a quantifiable relationship between, or a model of, the inputs and outputs to be able to predict future outputs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Forecasting]] (1)
> **Analogies:** such as (2), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Forecasting revenue trends](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=0)** - [Instructor] Revenue is the very first line item you'll see in a company's income statement and is understandably one of the most important metrics the company will want to keep tabs on because it answers the question, how much money are we making?
>
> **[0:13](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=13)** Given this, it makes sense that [[Forecasting]] revenue is a critical exercise for any business to be able to plan for strategic decisions in the future.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=22)** Forecasting revenue is just one specific application of the predictive models we just learned about.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=28)** There are four revenue projection methods we'll be covering in this video.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=32)** Straight line, moving average, [[Linear Regression]] and multiple regression.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=38)** In the straight line method, which is probably the most straightforward and thus most popularly used method in the industry, the analyst will look at historical revenue growth rates and determine a reasonable rate that will hold in perpetuity.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=52)** This rate is also informed by growth rates seen in the overall economy.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=56)** Let's say a reasonable rate to use is 4% then the previous year's revenue will be multiplied by one plus 4% or a factor of 1.04.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=67)** The result, this year's projected revenue will then be multiplied by the same factor to arrive at next year's projected revenue and so on.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=75)** Moving average projections take a much more granular look at previous patterns in revenue growth to predict future revenue.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=83)** The most common averages are three and five year averages.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=87)** To calculate the three year moving average, you take the average of the current and last two years and for a five year average, you calculate the average of the current and last four years revenue.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=99)** When you plot the result of this averaging process, you'll see much smoother lines when compared to the ups and downs of actual revenue.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=106)** This can give you more context to understand revenue growth patterns to be able to forecast revenue into the future.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=112)** Linear regression is used to analyze the relationship between two variables, a dependent variable, like stock price, and an independent variable that has some kind of influence on the dependent variable.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=124)** Graphically, linear regression is a straight line with a slope that represents how severely a change in the independent variable will affect the dependent variable.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=134)** The Y intercept represents the value of the dependent variable when the independent variable is equal to zero, a baseline, if you will.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=142)** Putting this together, you have the general equation of Y equals b0 plus b1 X, where b1 is the slope and b0 is the Y intercept.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=154)** Multiple regression, on the other hand, looks at two or more independent variables influence on the dependent variable to be able to better understand more complex relationships.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=165)** In order to use multiple regression though, two assumptions must hold.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=169)** One, that the independent variables are indeed independent from each other or at least don't have a strong relationship with each other.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=177)** And two, that each independent variable does have a relationship with the dependent variable.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=182)** The relationships between each independent variable and the dependent variable is weighted using respective coefficients, where more impactful variables have larger coefficients in absolute value.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=193)** The equation for multiple regression is y = b0 plus b1x1 plus b2x2 plus b3x3 and so on, which can be interpreted very similarly to that of a linear regression where each b after b0 has a different magnitude of impact on the dependent variable, but b0 still represents the baseline y intercept value when all other Bs are equal to zero.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=221)** Where [[SQL]] comes into play is storing the historical data needed for models within [[Databases]].
>
> **[3:47](https://www.linkedin.com/learning/sql-for-finance-professionals/forecasting-revenue-trends-23454231?u=76281980&t=227)** The larger the volume of data used as inputs to these models, the more robust they will be in being able to make accurate predictions of future revenue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (4), [[Forecasting]] (2), [[SQL]] (1), [[Databases]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Versions:** 1.04 (1)
> **Speakers:** - [instructor] (1)

#### [Developing predictive models using SQL and Python/R](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=0)** - [Instructor] How are these predictive models developed and deployed in the real world?
>
> **[0:04](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=4)** In finance and in other industries that use these models to maximize revenue, reduce expenses, and mitigate risks, [[SQL]] is not the only tool used.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=14)** SQL is often combined with other coding languages like [[Python (Programming Language)|Python]] and R to create these models.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=20)** While SQL is great for querying vast amounts of data that are needed to train the models, the actual cleaning and selecting of important features of the data, then training and testing a model can only be done outside of SQL.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=34)** This is because languages like Python and R vast libraries and functionalities specifically made for the purpose of data analysis and predictive programming.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=44)** Let's take a look at what the entire predictive model building process would look like from beginning to end in the context of SQL, Python, and/or R.
>
> **[0:52](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=52)** The process of building a predictive model generally is composed of five steps.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=57)** One, gathering and storing the data, two, [[Data Cleaning]], three, feature selection, four, building and evaluating the model, and five, deploying the model.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=68)** The first step of gathering and storing the raw data needed for the model starts with either [[Data Pipelines]] that data engineers have built to automatically extract and load information from data sources, or manual steps to scrape, download, or import that data.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=84)** Regardless of whether that data is gathered automatically or manually, it has to be stored in [[Databases]], especially if the volume of that data is significant.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=93)** The next step of data cleaning is critical to be able to prepare the raw data to be inputs into the model.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=99)** This is where SQL comes into play.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=101)** SQL is used at this step to perform basic aggregations and filtering using JOINs, GROUP BY, and WHERE clauses.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=109)** This pre-processing of the data results in a more narrowed-down dataset that is then brought into Python or R environments to perform some deeper cleaning.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=118)** Both languages have plenty of built-in functions that make removing nulls, correcting spellings, and imputing missing values very easy.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=127)** Once we have sufficiently processed and cleaned the dataset, we will have to perform feature selection.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=133)** This phase involves removing useless and highly correlated features through various mathematical and statistical methods, so that we arrive at the set of features that actually have an effect on the target variable.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=144)** The result would be a dataset with what we call reduced dimensionality, and this step is often done exclusively using Python or R.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=153)** Next, using this cleaned dataset with only useful and independent features, we build the predictive model by splitting the data into training and testing sets, again, using libraries and packages available in Python or R.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=167)** The first step in this phase is fitting a model to the training data.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=170)** That model is then applied to the test dataset, where its features are used as inputs and the output is the predictions that are measured against the actual target variables of the test data.
>
> **[3:00](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=180)** The difference between the model's predictions and the target variable is used to evaluate the accuracy of the model.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=187)** The purpose of this step is to ensure your model gets practice predicting as accurately as possible when it's presented with unfamiliar data in the future.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=196)** Lastly, the model that has been optimized over several rounds of iterative review is deployed so that the model's predictions are consumed by an application that directly affects business decisions.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=207)** This operationalization is often done using scalable [[Representational State Transfer (REST)|REST]] API endpoints for the model.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=213)** These endpoints store your model and its [[Metadata]] and allow you to exchange that information with developers who can use the model in mobile and web applications.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-finance-professionals/developing-predictive-models-using-sql-and-python-r?u=76281980&t=222)** Next, let's take a look at what we've learned about the role of SQL and [[Predictive Modeling]] to build our own fraud detection model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Python (Programming Language)|Python]] (6), [[Data Cleaning]] (2), [[Data Pipelines]] (1), [[Databases]] (1)
> **Env Vars:** sql (8), group (1), where (1), rest (1), api (1)
> **CLI Commands:** python (6), make (1)
> **SQL:** group by (1), where (1)
> **Speakers:** - [instructor] (1)

#### [Case study: Detecting fraud](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=0)** - [Instructor] One of the most common applications of [[Predictive Modeling]] in finance is using anomaly detection to deduct fraudulent credit card transactions.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=9)** [[SQL]] comes in handy when finance professionals have vast amounts of transaction data to work with in creating their fraud detection models.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=17)** But in practice, SQL is not the only tool they use.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=21)** [[Python (Programming Language)|Python]] or R are two other coding languages that many consider essential in building predictive models.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=27)** This is because they come with built-in packages or libraries that are open-source and specifically designed for the purpose of machine learning.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=35)** In this case study, we'll walk through what building fraud detection models look like in the context of all these tools together.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=43)** SQL is likely the first tool you'll encounter in the process of building your fraud detection model.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=48)** The engineers who have built the [[Data Pipelines]] used to retrieve the transaction data most likely have the data being stored in SQL [[Databases]].
>
> **[0:56](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=56)** You as the analyst must retrieve the data you need for your financial analyses by writing SQL queries.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=62)** Once you've used SQL to retrieve the data you need and bring it into your local machine, often as a CSV file, you will then load the data into your Python or R environment.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=73)** The first step to be done in this environment is cleaning the data using various functions and methods that are either built in or from imported libraries.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=81)** Since the raw data from the real world is often quite messy.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=85)** Next, exploratory data analysis, or EDA for short, must be performed so that you have a general understanding of the data such as knowing the different features present, which values are most common for each feature and the size and basic [[Statistics]] of the data.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=100)** This can be done again using various Python or R functions to perform calculations, but also by visualizing the data using a variety of plots such as bar plots, line plots, histograms, and heat maps.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=113)** Once you have an understanding of all the variables in your data, the next step is to perform feature selection and splitting the data between training and testing groups.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=122)** Feature selection involves using various statistical methods to identify the features that have the highest impact on the target variable, but are also least correlated with each other.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=132)** Testing and training your data is important so that you can evaluate the effectiveness of your predictive model, which we are now ready to build in the next step.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=140)** There are a couple different types of anomaly detection models that can get the job of detecting fraud done.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=146)** Examples of specific models include linear outlier factor, isolation forest, and minimum covariance determinant methods.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=154)** While we won't go over the details and specific statistics concepts underlying them, you should be aware that they all work by identifying data points in the data that don't fit the normal patterns, or in this case, transactions that are most likely fraud because the amount, location, or type of purchase may not fit the pattern of someone's usual credit card expenditures.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=176)** Last, you'll have to evaluate the model so that you know if you need to tune your hyper parameters or choose a different model altogether.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=184)** The most common metrics you'll use in your evaluation are accuracy, precision, recall, F1-score or a confusion matrix.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-finance-professionals/case-study-detecting-fraud-23453265?u=76281980&t=193)** Now that you know the steps required from beginning to end of building an anomaly detection model for identifying potentially fraudulent transactions, hopefully you got a glimpse into how a finance professional builds predictive models on the job and also the role that SQL plays in this complex process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Python (Programming Language)|Python]] (3), [[Statistics]] (2), [[Predictive Modeling]] (1), [[Data Pipelines]] (1)
> **Env Vars:** sql (7), csv (1), eda (1)
> **CLI Commands:** python (3)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980&t=0)** - Congratulations, you've finished the course.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980&t=3)** We've covered a lot of ground from [[SQL]] to finance to [[Predictive Modeling]], and how they all tie together when you're working in the field of finance.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980&t=11)** If you enjoyed the concepts we've learned, you may want to check out some of the more advanced SQL courses we have available in the [[LinkedIn]] Learning Library, to take your technical skills to the next level, and that brings us to the end of our time together in this course.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980&t=24)** Great job on learning about the role of SQL in the field of finance and applying your knowledge throughout the videos.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-finance-professionals/next-steps-23451295?u=76281980&t=30)** Looking forward to seeing you in future courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Predictive Modeling]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - congratulations (1)


## Instructor

- [[Megan Lieu]]

## Resources

- Exercise files available

## Skills Covered

- Financial Analysis
- SQL

## Path Context

### In [[CFI Financial Analysis and Modeling Professional Certificate]]
← [[Financial Forecasting with Analytics Essential Training]] | **4 of 7** | [[Getting Started with Python for Finance]] →

### In [[SQL for Data Professionals in Finance]]
← [[The Data Science Of Economics Banking And Finance]] | **2 of 4** | [[From Excel to SQL]] →

## Part of

- [[CFI Financial Analysis and Modeling Professional Certificate]]

## Appears In

- [[CFI Financial Analysis and Modeling Professional Certificate]]
- [[SQL for Data Professionals in Finance]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)