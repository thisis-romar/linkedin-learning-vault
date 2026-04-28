---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: sql-tips-and-tricks-for-data-science
url: "https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science"
duration_minutes: 59
duration: 59m
level: Intermediate
updated: 12/9/2021
learners: 81678
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF7y0hASXms9Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118065211?e=2147483647&amp;v=beta&amp;t=j7ruLHk-YyjTkzLkGXEwEqxYbOZN8nZ3HYwn-hA6WjI"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Data Analysis Skills]]'
prev_courses:
  - '[[Data Science Foundations- Data Mining in R]]'
next_courses:
  - '[[SQL Hands-On Practice- Solve Business Problems]]'
path_nav: '[{"path":"Develop Your Data Analysis Skills","position":7,"total":10,"prev":"Data Science Foundations- Data Mining in R","next":"SQL Hands-On Practice- Solve Business Problems"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/sql
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Tips%20and%20Tricks%20for%20Data%20Science.md)

![SQL Tips and Tricks for Data Science](https://media.licdn.com/dms/image/v2/C4E0DAQF7y0hASXms9Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118065211?e=2147483647&amp;v=beta&amp;t=j7ruLHk-YyjTkzLkGXEwEqxYbOZN8nZ3HYwn-hA6WjI)

# SQL Tips and Tricks for Data Science

> Get Ben Sullins's 12 must-have SQL techniques for data science pros—engineers, DevOps, data miners, programmers, and other systems specialists. Ben's tips focus on practical applications of SQL queries for data analysis. Learn how to retrieve data, join tables, calculate rolling averages and rankings, work with dates and times, use window functions, aggregate and filter data, and much more. Each t

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science) | 59m | Intermediate | 82K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. SQL Tips and Tricks** (12 videos)
- **3. Conclusion** (1 videos)

### 1. Introduction

#### Extract meaning from data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=0)** - [Ben] Hi, I'm Ben Sullins, and I've been a data geek for nearly 20 years now, working to extract meaning from data and help organizations improve their decision-making.
>
> **[0:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=9)** The most universal way I've experienced is with the database language SQL.
>
> **[0:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=15)** In this course, I'm going to share with you answers to the most common data science and analytics questions that you'll receive, such as how to find the top products per category, how to find active employee counts by month, how to calculate a six-week rolling average of sales.
>
> **[0:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=31)** I'll start by showing you how to retrieve data from a database using SQL Server and AdventureWorks 2014 Data Warehouse, then show you how to aggregate, join, and filter your results to create context for your analysis.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=46)** We'll see how to answer more complex questions with ranking, moving averages, and window functions.
>
> **[0:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=53)** If you find these SQL tips useful, I'd love to hear from you.
>
> **[0:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=56)** Let's keep the conversation going online, using the hashtag #datainsights.
>
> **[1:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/extract-meaning-from-data?u=76281980&t=61)** Thanks for watching and I'll see you back here soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Env Vars:** sql (3)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - [ben] (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=0)** - [Instructor] For this course, you're going to need SQL Server and you can use any version and you need 2014 or newer.
>
> **[0:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=7)** So have that installed either on your machine or a server that you can access, it all works, then AdventureWorks 2014 DW, which you can download from Microsoft's website, will need to be restored onto your system.
>
> **[0:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=19)** That's the database we're going to use to run our queries against and actually do our analysis.
>
> **[0:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=23)** And the tool for that, of course, is SQL Server Management Studio.
>
> **[0:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=26)** Those are the only three things you need.
>
> **[0:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=28)** They're all free and you don't need anything other than those pieces to get going.
>
> **[0:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=32)** In terms of skills, there aren't any real prerequisites for this course.
>
> **[0:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=35)** In the beginning, we're going to take a look at some things that if you're more seasoned, they're probably a bit beginner for you, but if you're newer, these are going to be great ways to skill up and actually develop this new talent in SQL.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/what-you-should-know-before-watching-this-course-14429281?u=76281980&t=46)** As we get further along in this series, things are going to become a little bit more complex and sophisticated, which is really where a lot of the value is going to come from answering those complex analytical questions.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/using-the-exercise-files-14428320?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/using-the-exercise-files-14428320?u=76281980&t=0)** - [Narrator] This course comes with a series of exercise files, and each exercise file is a SQL file that has all the code that we're actually going to go through.
>
> **[0:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/using-the-exercise-files-14428320?u=76281980&t=8)** The SQL files are commented, so whether or not you watch the full video or forget what happened, you can refer back to the file and have good commenting and understanding of what's happening and what we're trying to do.
>
> **[0:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/using-the-exercise-files-14428320?u=76281980&t=18)** Now, if you don't have the exercise files, don't worry because you can still follow along and you'll just have to either punch out the code yourself, or just follow along on the concepts and learn about these functions, and then take a look at the documentation online to actually how to use them.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (2), exercise file (1)
> **Env Vars:** sql (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. 1. SQL Tips and Tricks

#### Retrieve data using SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=0)** - [Instructor] So let's talk about retrieving data from a database now.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=3)** First, I want to introduce you to the concept of SQL, and we're going to go through what SQL is.
>
> **[0:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=9)** Then we'll try to understand why we would use SQL.
>
> **[0:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=11)** And lastly, I'll show you how to use it in actually retrieving data from a database.
>
> **[0:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=15)** A SQL stands for structured query language, and it's the most universal of all programming languages, and one of the few that has a standard syntax that all databases support.
>
> **[0:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=25)** This language was designed as if it were to be read as English.
>
> **[0:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=29)** And over the years, it has evolved into a complex, and expressive language that allows you to manipulate, transform, analyze, and even update or delete data in your database.
>
> **[0:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=40)** This language is supported by virtually all databases, even newer big data systems known as NoSQL databases.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=46)** NoSQL actually stands for not only SQL, which is a big misconception in the industry right now.
>
> **[0:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=51)** The name really defines what it is.
>
> **[0:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=53)** Now let's take a look at why we would use it?
>
> **[0:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=56)** SQL at its most basic is a way to retrieve data from databases, which is what we're going to to do here.
>
> **[1:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=61)** You enter some code, which we'll do in a second, and you get data back.
>
> **[1:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=65)** Databases have been around since computers were created.
>
> **[1:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=68)** In fact, you could argue that the main reason computers became popular was their ability to process data much faster than humans.
>
> **[1:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=75)** So as nearly as long as computers have existed, so have databases.
>
> **[1:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=79)** SQL also lets you manipulate data.
>
> **[1:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=81)** Let's say you want to normalize values in a column to all be the full state name instead of an abbreviation.
>
> **[1:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=87)** Or maybe you want to replace a blank or null value with a word like unknown, SQL allows you to actually change these values to better conform to the types of questions that you're seeking answers to.
>
> **[1:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=97)** Since its creation in the 1970s, SQL has evolved to allow analysts and scientists to get answers to questions that are incredibly complex and sophisticated.
>
> **[1:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=106)** One of the advantages of using SQL for these questions is that it runs the code on the database server itself making it more efficient in most cases, compared to running these analysis in a third-party tool, such as R or Tableau.
>
> **[1:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=118)** The biggest reason by far however, is that SQL was adopted as a standard across all databases.
>
> **[2:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=123)** This means that unlike any other technology platforms that have their own very specific syntax, if you know how do use SQL in one database, then you know how to use SQL on all databases.
>
> **[2:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=133)** This is unique, and it makes SQL one of the most valuable languages to know.
>
> **[2:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=137)** Now let's take a look at how to actually do this.
>
> **[2:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=140)** We're going to start with the select statement.
>
> **[2:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=141)** This is the most fundamental piece of SQL that you can write.
>
> **[2:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=145)** And then we're going to get into using column aliases to retrieve only a subset of the columns, and even rename them in the process.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=151)** And lastly, I'll show you how to limit your results.
>
> **[2:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=153)** So you don't retrieve the entire database worth of values.
>
> **[2:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=156)** You only retrieve those that you're looking for.
>
> **[2:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=159)** I'm going to switch over to my code editor now, and we'll get started.
>
> **[2:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=162)** So first let's just take a look at the most basic of select statements, select star from a table.
>
> **[2:48](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=168)** A table is like a sheet in Excel that contains the data.
>
> **[2:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=172)** If I execute this code here, you'll see that I get all of the results back.
>
> **[2:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=176)** I get every column, and all 60,000 plus rows of data.
>
> **[3:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=181)** If I wanted to limit that, I could simply add a top clause, select top 1,000 for example.
>
> **[3:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=187)** From that same table, and I would get only 1,000 results.
>
> **[3:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=192)** Other databases use a different syntax.
>
> **[3:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=194)** Instead of saying top 1,000 at the beginning, you use limit 1,000 at the end, and it achieves the same result.
>
> **[3:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=200)** It only retrieves the amount of data that you specify.
>
> **[3:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=204)** Now if I wanted to instead of retrieving all of the columns, specify exactly which columns I want, I can use the column names themselves in my select statement.
>
> **[3:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=212)** So instead of stating select star, I'll do select, and then the individual column names.
>
> **[3:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=218)** When I run this query, specifying the exact column names, you'll see the results are the same.
>
> **[3:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=223)** So it gives you the exact same effect.
>
> **[3:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=226)** Now what if instead I wanted to actually change some of those column names, and not retrieve all of them at the same time?
>
> **[3:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=231)** I can do so using column aliases.
>
> **[3:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=234)** Here I have a query which specifies only the top 1,000 rows before, and some individual columns that I want, and even different names for them.
>
> **[4:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=243)** So that way, instead of getting the full column name, I get the name I want to be retrieved as the column header.
>
> **[4:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=248)** When I run this piece of code, you can see that I have a limited results set.
>
> **[4:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/retrieve-data-using-sql-14426656?u=76281980&t=252)** The column names have been changed, and the results have been limited to a thousand rows that I specified.

> [!info]- Semantic Content
>
> **Env Vars:** sql (15)
> **Code Keywords:** let (5), delete (1), this. (1), for. (1), switch (1)
> **Definitions:** stands for (2), is a  (2), known as (1), means that (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Join tables
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=0)** - [Instructor] So let's talk about joining tables together.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=3)** Tables are isolated containers of data in a database.
>
> **[0:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=6)** Joining them together allows you to combine multiple data sets for more comprehensive results and analysis.
>
> **[0:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=12)** Now a database design, also known as data modeling, there are specific guidelines or rules when to separate data into their own tables.
>
> **[0:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=19)** At the most basic level, you can think of a table like a sheet in Excel.
>
> **[0:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=23)** Each tab or sheet would be a separate table containing separate, but related, e.g. relational data.
>
> **[0:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=30)** By joining these tables using SQL, we can create more complete results sets as well as perform look-ups and comparisons.
>
> **[0:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=36)** Joining tables is a fundamental concept in SQL.
>
> **[0:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=40)** Let's take a look deeper as to why we should do this.
>
> **[0:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=43)** The three basic use cases for why we would join tables is starting with the idea of combining related datasets.
>
> **[0:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=50)** In databases, relational or dimensional, often data elements are separated.
>
> **[0:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=55)** So for example, if you wanted to find the name of a product that was sold, you may have to start with the table containing the sales orders and then join out to another table containing the product information.
>
> **[1:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=65)** Another common reason to join tables is to perform comparisons.
>
> **[1:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=69)** It's common to partition large data by date, usually year so that when you're looking for a recent data, your queries aren't having to scan the entire sales history of a company.
>
> **[1:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=78)** This often leaves you in situations needing to join to previous partitions of similar data to perform comparisons such as year over year analysis.
>
> **[1:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=86)** Lastly, tables often are used as lookup resources.
>
> **[1:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=89)** Imagine if you have a status code for a shipping delivery type, it's much more efficient to store in a numerator like one or five than it is to store the text itself of each delivery type.
>
> **[1:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=100)** Now to a human, delivery type eight isn't as meaningful as air travel.
>
> **[1:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=104)** So many times you'll need to perform these lookups to get the text name of something.
>
> **[1:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=109)** Now let's take a look at how to join tables in SQL.
>
> **[1:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=112)** First, we'll take a look at the basic join syntax, then we'll take a look at an inner join and finally a left join.
>
> **[1:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=119)** All right, so here in my database, I have three different examples that we're going to go through.
>
> **[2:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=123)** But first I wanted just to explain the basic syntax of a join.
>
> **[2:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=126)** So I'm going to create some space here on top, and I'm going to start with a query that's pretty basic that we've done before.
>
> **[2:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=132)** Select top 1000 * and I'm going to say from FactInternetSales, which is my favorite table in this database.
>
> **[2:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=142)** And if I run this query here, you see I just get a thousand rows with every column from our database.
>
> **[2:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=149)** Now I can actually alias this by putting a space and then giving it a new letter there, S.
>
> **[2:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=155)** I could also call this sales or something else, but I'll just for brevity's sake use a single letter to alias this table.
>
> **[2:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=161)** Now to create a join, and let's say I wanted to add product information to my data set, I need to type the type of join clause, the table, and then my condition, which actually joins the two tables together.
>
> **[2:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=174)** So there's different ways and we'll look at them in a second, but first I just want to to do inner join.
>
> **[2:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=178)** Which means that when I join whatever table I'm going to add now to this one, the condition I specify must be true.
>
> **[3:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=185)** I only get results back when that condition is true.
>
> **[3:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=188)** So I'll add DimProduct, which has the product information that I'm looking for, and I'm going to again, add an alias here of P just to save me some typing later on.
>
> **[3:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=199)** Then I say on and my condition.
>
> **[3:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=201)** So the condition is going to be the field from the tables that joins them together, the commonality between them.
>
> **[3:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=208)** Here, I'm going to start with S and this is a nice database that has a field called product key, which happens to match perfectly with the p.ProductKey, which is the primary key from the Dim product table.
>
> **[3:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=222)** Now, if I were to run this query again, I still get a thousand results, but I actually have a lot more information about the product.
>
> **[3:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=230)** If you see, when I scroll over, I have the English product name, the Spanish product name, all the different stuff about the product, so I've just combined these data sets.
>
> **[3:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=239)** Now, as I mentioned before, there are a couple different join types.
>
> **[4:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=243)** This one we've just done here is called an inner join, and the example I have down below is in fact that there, where it explains only giving me results where the condition is true, where the s.ProductKey equals the p.ProductKey.
>
> **[4:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=257)** If that condition is not true, do not retrieve the results.
>
> **[4:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=260)** So only show me where that condition exists.
>
> **[4:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=263)** Now, another example would be to use a left join, and the reason you would do this is if I wanted to return everything from my Fact internet sales and the matching stuff from the dim product table, I simply change one piece of this code.
>
> **[4:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=278)** I changed from inner join to left join.
>
> **[4:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=281)** And the reason I would do that in this case is because I want the correct sales total.
>
> **[4:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=287)** I don't necessarily care if I don't have the matching name of the product, because the actual amount that I'm aggregating, the total sales that I'm presenting to my end users eventually, needs to be accurate, regardless of whether or not there is a product name that exists.
>
> **[5:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=303)** So the last case is when you want to add a condition to your join.
>
> **[5:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=308)** So in this last example here, I have the same query as before, the select * from FactInternetSales, I'm doing an inner join over to Dim product, just as I did before, and now I'm adding a condition of p.StartDate.
>
> **[5:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=321)** So that means that in Dim product, which is aliased with P I have a column called Start Date, which I know actually is when the product began sale, and I only want products that have existed since January 1st, 2013.
>
> **[5:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/join-tables-14432074?u=76281980&t=334)** So beyond just the ON clause, which actually joins the table together, I can add additional filters here to retrieve specific results that I'd said I'm interested in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), type, (1), type. (1), else, (1)
> **Definitions:** is a  (3), means that (2), known as (1), is called (1)
> **Env Vars:** sql (3)
> **Analogies:** for example (1), such as (1), imagine (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Filter data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=0)** - [Instructor] So, now we're going to talk about filtering results and primarily why we would do that.
>
> **[0:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=5)** Now, when you're looking to filter your data, the most common reason is to focus your analysis.
>
> **[0:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=10)** Think if you've wanted to look at some sales trends for a specific region, you want to narrow down your dataset to just that region.
>
> **[0:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=18)** Another reason to filter your results is to reduce the size.
>
> **[0:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=20)** Even rather small datasets when asking complex, analytical questions can really slow things down.
>
> **[0:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=27)** A good way to speed things up, especially when you're still formulating your hypothesis is to return a sample of the data rather than the entire population.
>
> **[0:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=35)** The last common reason to filter your results is to limit them for an aggregate condition.
>
> **[0:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=40)** For example, if you wanted to analyze the top quarterbacks of all time, you're going to use the QB rating system.
>
> **[0:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=47)** This sounds straightforward, but what you'll often find is cases where a person only played one game in their career and they're at the top of this list.
>
> **[0:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=54)** In this case, you may want to filter down to only players that have played X number of games or minutes.
>
> **[0:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=59)** So, you first aggregate then, filter.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=62)** We'll take a look at all of these in our example in our demo.
>
> **[1:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=66)** We're going to start here by looking at the basic way of filtering your data using the WHERE clause.
>
> **[1:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=71)** Then, I'll show you how to filter some date values.
>
> **[1:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=74)** Then, we'll get into filtering multiple results.
>
> **[1:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=76)** What if you want to, instead of just look at one product, look at a number of products?
>
> **[1:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=80)** And lastly, we'll look at the LIKE condition, a way to filter things that are similar to other things.
>
> **[1:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=86)** So, here in my database, I have all the examples we're going to walk through and, to keep things simple, I'm just going to go ahead and hide them first.
>
> **[1:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=92)** And then, we'll kind of go through them one by one.
>
> **[1:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=94)** The basic way we start is by using the WHERE clause.
>
> **[1:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=97)** So, we have a query just like we started with before, where we have fact internet sales, we're joining to the DimProduct table.
>
> **[1:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=103)** And in this case, we're actually filtering where the English product name equals Road-650 Black, 62.
>
> **[1:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=110)** This is a specific product from our database.
>
> **[1:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=113)** And if we run this query and take a look at the products that are returned, you can see that all of them match our condition.
>
> **[2:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=123)** So this is the most basic way to filter data, give a single condition that must equal true for the data to return.
>
> **[2:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=130)** If I were to change this, for example, 62a, and try to rerun it, I get no results.
>
> **[2:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=137)** That's because that condition is not true for any of our data.
>
> **[2:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=141)** Now let's take a look when we're not just using an equal sign to filter.
>
> **[2:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=146)** Here what I'm doing is I'm going to filter on date instead of a product name.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=151)** So here with the dates, I want to have a non-equal filter, a greater than or equal to, or a less than or equal to condition.
>
> **[2:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=159)** And I have multiple conditions.
>
> **[2:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=161)** So same query as before, except now I only want orders where the date is greater than or equal to January 1st, 2013 or equal to or before December 31st of that same year.
>
> **[2:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=172)** So let's run this query.
>
> **[2:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=175)** And if I take a look at my OrderDateKey you can see that they all start with January 1st of 2013.
>
> **[3:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=181)** And if I were to find the very last row here, you'd find that it is for December 31st of that same year.
>
> **[3:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=186)** So this is a simple way to use a non-equal condition and actually multiple conditions on a date value.
>
> **[3:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=192)** Now dates have a special characteristic and databases as they do in many analytical tools.
>
> **[3:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=198)** If you scroll down and you see the next condition, what I have here is that same query, but now I'm representing that filter by using a BETWEEN condition.
>
> **[3:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=206)** So with the BETWEEN condition is essentially the exact same thing as above.
>
> **[3:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=210)** I've just shortened my syntax.
>
> **[3:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=212)** And this is a special condition that you can use with dates.
>
> **[3:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=215)** If I run this query, you can see that the number of results, 52,801, is the exact same.
>
> **[3:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=222)** This format of dates, year-month-day is the standard database format that you'll see across all different database platforms.
>
> **[3:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=230)** What if we wanted to, this time, not just look at one product, but multiple products.
>
> **[3:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=235)** Well, we could have a lot of conditions there, or we also could use a new condition called in.
>
> **[4:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=240)** This is a different way of telling SQL that I want to filter my results set based on the English product name in this example, being equal to any one of my four results here.
>
> **[4:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=252)** So this would be the same as if I wrote that equal condition multiple times, but here I'm just writing it in one kind of shorthand syntax using the in clause.
>
> **[4:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=261)** If I were to highlight this and run this query and go over to take a look at my products, you'd see that I have lots of different results, the Silver, 40, the 42, and the 38.
>
> **[4:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=274)** The last way to filter your data I'm going to show you is using a LIKE condition.
>
> **[4:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=278)** Now, this is a very unique thing.
>
> **[4:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=280)** And this varies depending on the database that you use, but almost every database supports this type of filtering condition.
>
> **[4:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=287)** And here, what I have is essentially the same idea where I want the English product name, but I want anything that starts with Mountain and then ends with anything else.
>
> **[4:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=296)** In SQL server, we use a percent sign, in other databases, you use different wildcard conditions.
>
> **[5:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=301)** But in here, the idea is that let's say I have a query that returned all the different types of mountain bikes, but that list of types of mountain bikes may grow or change over time.
>
> **[5:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=310)** However, they always will start with the word Mountain.
>
> **[5:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=312)** I can use this example using a LIKE condition to always give me any results where the English product names starts with the word Mountain and ends with anything else.
>
> **[5:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=322)** If I were to run this here.
>
> **[5:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=324)** And I go take a look at my products again.
>
> **[5:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/filter-data-14425708?u=76281980&t=328)** You can see that there's lots of different examples here, and they all start with the word Mountain.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), else. (2), return. (1), this, (1)
> **Env Vars:** where (2), between (2), sql (2)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), similar to (1), just like (1)
> **CLI Commands:** find (3)
> **SQL:** where (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Aggregate data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=0)** - [Instructor] Now let's take a look at aggregating data.
>
> **[0:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=2)** So by aggregating data, we are using a collection of built-in functions in SQL that summarize or roll up our values.
>
> **[0:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=11)** The basic examples we have are min, max, average, sum and count.
>
> **[0:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=16)** And then there's some more analytical ones for standard deviation, variance, and rank.
>
> **[0:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=21)** Now the most common ones are supported by nearly every database platform.
>
> **[0:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=25)** And they're very simple and probably familiar, min and max find the minimum and the maximum value, average finds the average of your data.
>
> **[0:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=32)** Sum sums 'em up, it adds 'em all together and count provides a count of things and there are different ways to actually enhance it.
>
> **[0:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=39)** And let's say you wanted to see a count of distinct things.
>
> **[0:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=42)** You can add some other logic to these to actually make them more advanced.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=46)** On the analytical side, these are some statistical functions that are common there are, of course, many more.
>
> **[0:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=51)** And I only put these ones here because they're kind of common to all the different database platforms out there.
>
> **[0:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=56)** Now we would aggregate data and mostly we do this because we want to summarize our results.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=62)** Without aggregation, we'd potentially get millions of details that we couldn't ever possibly summarize in our heads.
>
> **[1:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=68)** So any insight hidden in the data would be totally lost on us.
>
> **[1:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=72)** Another reason is that aggregating data creates context.
>
> **[1:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=75)** By aggregating, we can see things like monthly totals or averages across sales orders by category.
>
> **[1:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=80)** This helps us gain a deeper understanding of our data and allows us to ask deeper questions.
>
> **[1:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=86)** And at a high level, we can also identify patterns and trends in our data where if all we had were the details, we wouldn't simply be able to do that.
>
> **[1:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=93)** This last one comes with a caveat that sometimes you may aggregate our way out of our insights.
>
> **[1:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=98)** So be careful and use aggregations appropriately for your analysis.
>
> **[1:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=102)** We're going to first take a look at some simple aggregations here, and then we'll get into filtering our aggregations.
>
> **[1:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=109)** So there's a lot of code on the page and I'm going to hide it up for now just to simplify things, but don't be intimidated.
>
> **[1:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=115)** It's going to start out simple and then understand as we go here.
>
> **[1:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=118)** The first thing I want to do is basically start with a simple query from our internet sales table.
>
> **[2:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=124)** So I'll do select star from fact internet sales.
>
> **[2:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=128)** And if I run this query, just like I have many times before, I'll get all the data from that.
>
> **[2:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=133)** Well, what if I wanted to see the actual total sales amount?
>
> **[2:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=137)** I can see over here that I have some other fields, unit price, extended amount, total product costs.
>
> **[2:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=143)** And I have sales amount here.
>
> **[2:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=144)** Well, if I wanted to see the actual total for this table, I would need to use an aggregation.
>
> **[2:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=150)** So let's do that.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=151)** I'll type in sum.
>
> **[2:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=152)** So I want to add 'em all up and I'll just type in the field that I'm interested in sales amount, highlight this guy and run it again.
>
> **[2:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=163)** And you can see now I have the total sales for our entire table.
>
> **[2:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=167)** Now that is at that point of aggregating your way out of insights.
>
> **[2:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=170)** This number probably doesn't mean much at this high, high level.
>
> **[2:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=173)** So if we wanted to add in another level of detail, we just need to add another field here.
>
> **[2:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=179)** So if we wanted to add, let's say order date and run this again.
>
> **[3:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=187)** You'll notice we got an error because what's happening is the database is saying, okay, I have sales amount and I'm going to summarize that for you.
>
> **[3:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=195)** I'm going to add 'em all up and just give you that number.
>
> **[3:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=197)** But what do I do with this one?
>
> **[3:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=198)** What do I do with order date?
>
> **[3:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=200)** I don't have a way to aggregate it and I don't know what to do.
>
> **[3:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=203)** Do I summarize by order date or do I summarize the whole thing and return all the order dates?
>
> **[3:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=207)** It just doesn't know how to handle it.
>
> **[3:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=209)** So this is where we need to add a group by clause.
>
> **[3:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=212)** We need to tell our database how to actually group this aggregation together.
>
> **[3:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=217)** So I'll add group by, and then order date, the field that we're going to actually group by.
>
> **[3:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=224)** Highlight it again, you can see there that I now have every order date on the left and the total sales amount for that date.
>
> **[3:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=233)** If I wanted to order these, I simply add another clause, order by, and I can type in the word order date and hit refresh.
>
> **[4:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=242)** And now I have them in sequence.
>
> **[4:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=244)** Let's take a look at a more thorough example and kind of explain the different questions that you could actually answer here.
>
> **[4:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=250)** So with this example, I have the category and the subcategory, and then I have a number of aggregations, all the simple ones that I listed on the previous page.
>
> **[4:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=259)** Here, you have the count.
>
> **[4:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=261)** So this'll be how many orders there were, the total sales that we just looked at, the average sales amount and then the min and the max.
>
> **[4:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=269)** So if you wanted to understand the full distribution and what the average sales were, these aggregations would give you a more comprehensive picture of your data than just a total number, like sum of sales.
>
> **[4:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=282)** Just like before, we have a group by clause, but this time we're grouping by the category and the subcategory, and then we're ordering by those as well.
>
> **[4:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=290)** Let me run this query.
>
> **[4:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=293)** And here you can see we have our results.
>
> **[4:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=295)** So for every product category and product subcategory, we have a count, a sum, the average min and max, a fairly comprehensive results set that explains a lot about the product sales in our database.
>
> **[5:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=308)** Further down, what if we wanted to filter this to just this specific here?
>
> **[5:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=312)** We have here the same query, I've added a year clause or a field that is actually summarized at the year level.
>
> **[5:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=319)** And then down below, I've added a where condition to filter to just that year.
>
> **[5:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=323)** And then I've included it in the group by.
>
> **[5:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=326)** So if I run this query instead, now what I have is essentially the same results that is before filtered to a specific year, but the plot thickens, what if I wanted to only see products that were sold in 2013, that were more than one million dollars in total sales?
>
> **[5:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=344)** I'm answering and I'm asking a much deeper, more interesting question now, that is a common one you'll probably run into.
>
> **[5:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=351)** Here, just like before, the same query, except now we have a new way of filtering, using a clause known as the having clause.
>
> **[5:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=358)** Now, the having clause takes an aggregation and then applies a filter after it's been aggregated.
>
> **[6:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=364)** So what we've done here is we've told our database, take the sum of sales, aggregate it at the level that we've specified and only return results where that number is greater than one million.
>
> **[6:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/aggregate-data-14431150?u=76281980&t=376)** So if I run this query again, you can see here that mountain bikes, road bikes and touring bikes are the only products in 2013 that had total sales of over one million.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **Analogies:** just like (3), picture (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** caveat (1), be careful (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=0)** - [Instructor] So here, we're looking at window functions.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=3)** And these are special functions that specify partitions and ordering for the purpose of aggregation.
>
> **[0:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=9)** I think of these as arguments or ways of focusing our analysis in one particular segment of our data.
>
> **[0:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=16)** The first case I want to bring up for using window functions is to focus on a partition.
>
> **[0:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=20)** This is useful when you want to do something like compare a region's average sales volume to total sales volume.
>
> **[0:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=26)** By using the partition by clause, you can specify exactly the scope of your aggregation.
>
> **[0:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=31)** Another unique feature of window functions is the ability to reference previous rows within the same query.
>
> **[0:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=36)** This is useful when you want to calculate the percent difference between discrete values, such as territories.
>
> **[0:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=41)** The last example I think you'll find particularly useful is using window functions to perform year-to-date calculations.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=46)** This uses a part of the over clause known as rows between, and allows you to specify which rows to use in your aggregation.
>
> **[0:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=54)** For this demo, we're going to take a look at performing different levels of aggregation within the same query using the over clause.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=62)** So in our query here, we have a very basic aggregation query using average, just like before, except this time, what we have is the over clause and we're giving it a partition clause that actually specifies the level of detail at which to aggregate that data.
>
> **[1:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=79)** So we're going to get an average of sales amount and in the first example, have the group average, the next one have the country average, and the third one have the region average.
>
> **[1:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=88)** We're applying some filters down below and we're ordering by the first three columns.
>
> **[1:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=93)** If I highlight this query, we can take a look.
>
> **[1:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=97)** And you can see that here we have our sales territory group, country, and region and then we have the aggregations for all three of those different levels.
>
> **[1:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=105)** Normally, this would take multiple passes with multiple queries and possibly other temp tables to perform.
>
> **[1:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/window-functions-14427513?u=76281980&t=110)** Here, you're able to do that in one single query.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** find (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Subqueries
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=0)** - [Instructor] Now let's take a look at using subqueries.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=3)** A subquery is a query embedded within another query.
>
> **[0:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=7)** And we would do that because sometimes this lets us accomplish things that are time-saving or even performance enhancing ways of getting just the bits of data you want out of another table, or even running additional calculations that then you use in the, what is known as the outer query.
>
> **[0:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=24)** Now we use these most common to aggregate underlying tables.
>
> **[0:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=29)** Often I'll want to join to another table, but only need a subset of that data back.
>
> **[0:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=33)** And I also will want to summarize some of those values.
>
> **[0:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=36)** Using a subquery for this simplifies the process and I can also improve performance since it only returns a subset of the results instead of the entire table.
>
> **[0:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=44)** Some database administrators might argue that a properly designed databases with index could be faster, and they're probably right, but unless I'm designing a real-time application, I find this method just to be simpler and faster in the majority of cases.
>
> **[0:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=57)** The next reason I often use subqueries is to create new aggregations.
>
> **[1:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=61)** For example, in my subquery or my inner query, I might get the monthly sales for the past three years, and in my outer query, I could create a rolling average of those yearly sales.
>
> **[1:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=71)** So by using a subquery, I can create new levels of aggregation to uncover even greater insights.
>
> **[1:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=77)** The last reason I might use the subqueries to filter my results.
>
> **[1:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=80)** Often subqueries used in this manner can be rewritten as joins, but that's not always the case, and this is still a popular method of filtering your results based on the results of another query.
>
> **[1:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=90)** In this demo, what I'm going to do is show you how to use a subquery to aggregate an underlying table.
>
> **[1:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=94)** Then we'll create a new aggregation level, and lastly, I'll show you how to use a subquery to filter your results.
>
> **[1:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=99)** So the first simplest way is to use a subquery to aggregate an underlying table.
>
> **[1:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=104)** So what I have here is a select star from, and then normally I'd have a table name there and instead here I have another query.
>
> **[1:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=111)** Now this query is a very simple, small aggregation table that just pulls out the sales amount and the year from the Fact internet sales.
>
> **[2:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=121)** If I were to run this query here, you see that for every year, I get the total sales amount.
>
> **[2:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=127)** In Fact, because I'm just doing a select star from it, this is essentially the same thing as running that query by itself.
>
> **[2:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=133)** So we haven't done anything new yet, but we have saved from having to pull back the entire result set.
>
> **[2:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=139)** Now, if I wanted to create a new level of aggregation, I can perform essentially that same query, except now I'll actually add an average of those sales across those years.
>
> **[2:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=148)** And here, what you get is across all the years within that Fact internet sales table, the average sales amount.
>
> **[2:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=154)** So I first aggregate the underlying table and then I create a new aggregation on top of that.
>
> **[2:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=159)** Now let's use a subquery to see if the values from one table are in the list of values from another table.
>
> **[2:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=166)** This is similar to using IN clause where you manually typed all of those values in, but here we're just using another query.
>
> **[2:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=173)** This is useful when, especially the table that you're querying from is in a different database, or even on a different server.
>
> **[3:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=180)** Sometimes joins just aren't impossible and this will allow you to do the same functionality without having to actually bring that data into your database.
>
> **[3:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=188)** So if I run this query, you can see that what's happening is I'm starting out with my Dim product table, this is the outer table, and then I'm saying where the product sub-category key, that's my column that I'm looking for, is also in the Dim product subcategory.
>
> **[3:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=204)** So this is just another way to use a subquery in place of a different piece of SQL, a different thing that you'd normally manually type in.
>
> **[3:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=211)** Now this one, because it's on the same server, can be rewritten as a simple join.
>
> **[3:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=215)** So if I were to join these tables like I have here, I would essentially get the exact same results.
>
> **[3:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=221)** So sometimes there's a case for that and other times there aren't, but the point is is that you can use subqueries all over the place, lots of places where you normally would have an expression, you can also use a subquery.
>
> **[3:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=231)** Another common way is to use the EXISTS clause.
>
> **[3:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=234)** And this is kind of old school, and I wanted to include this because not all databases will support subqueries in the same manner, but this EXISTS clause is the traditional way that's been around since I think 1998, when the ANSI standard actually created this.
>
> **[4:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/subqueries-14432077?u=76281980&t=248)** So here essentially the exact same thing as above, except now when I run it, I'm using EXISTS instead of IN, and instead of a join.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), from, (1), for, (1), this. (1)
> **Env Vars:** exists (3), sql (1), ansi (1)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Rolling calculations
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=0)** - [Instructor] So now let's talk about rolling calculations.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=3)** Rolling calculations are a method of applying an aggregation over a specified time period.
>
> **[0:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=8)** Now, they're really useful when looking across time periods as well.
>
> **[0:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=12)** Typically, high-level time periods like months, quarters, or even years.
>
> **[0:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=15)** When analyzing data over time, it's common to want to create moving calculations.
>
> **[0:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=19)** The most common type is a moving average.
>
> **[0:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=21)** This calculation may help you smooth out variability that may occur due to anomalies in your data.
>
> **[0:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=26)** The common example here would be to look at a three month moving average of sales.
>
> **[0:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=30)** Three months is a good time period for most companies, as it aligns with the quarterly sales cycles and smooths out any individual bad or good months.
>
> **[0:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=37)** Another common reason to use moving calculations is to create year-to-date totals.
>
> **[0:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=41)** Running totals are a great way to look at how the year is doing compared to the last few and help project out where you might end up towards the end of the year.
>
> **[0:48](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=48)** The last example is to identify change in growth over time.
>
> **[0:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=51)** The percent difference from period to period is often used in financial reporting and can greatly affect the company's outlook in their stock price.
>
> **[0:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=59)** In this demo, I'm going to show you how to use a moving average and a year-to-date total.
>
> **[1:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=63)** There's a lot of code here, so let me clean it up a little bit before we get going.
>
> **[1:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=66)** The first thing is just to show the simple aggregation we're going to use, underlying all the other ones.
>
> **[1:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=72)** This is a simple calculation, which shows you the weekly sales totals.
>
> **[1:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=76)** There's nothing new here.
>
> **[1:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=77)** We're using a DATEPART function to pull out the week number of a date field.
>
> **[1:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=80)** And then we're just using a SUM aggregation to actually calculate the total sales for that week.
>
> **[1:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=85)** We filter down to 2013 and we've ordered by the week number.
>
> **[1:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=89)** So you can see in the results here, this is just the weekly sales totals.
>
> **[1:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=93)** Now, if we wanted to see a moving average of this, all we do is we take that sub query and we put it inside of where we normally would have a table listed inside of our FROM.
>
> **[1:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=103)** Then we use the AVG function and we use the OVER clause, this is one of those window functions.
>
> **[1:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=109)** And for this one, what we want to do is we want to ORDER BY the week number and then tell the OVER function that we want the preceding six rows.
>
> **[1:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=117)** So rows between six preceding and the current row.
>
> **[2:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=120)** This gives us a seven week moving average.
>
> **[2:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=123)** We'll use our OrderDate, and then we'll also use the WeeklySales total, so you can see the total sales versus the rolling average sales.
>
> **[2:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=130)** If I run this query here, you can see that for week one, the average and the total are the same.
>
> **[2:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=136)** And then as it goes on out from there, the average starts to smooth things out and the total is represented as well.
>
> **[2:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=143)** In the last example, let's take a look at how to do a running total.
>
> **[2:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=145)** So if you wanted to do say a year-to-date total, we take essentially that same query we had before, except this time what we have is the month instead of the week.
>
> **[2:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=153)** And we filter down to just that year, 2013.
>
> **[2:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=156)** Now, an outer query, we have a SUM instead of an average, and we're going to use the OVER clause as well.
>
> **[2:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=163)** Except now, instead of the six rows preceding, we're saying unbounded preceding.
>
> **[2:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=167)** So all previous rows compared to our current row there.
>
> **[2:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=171)** Then as well, show me that monthly sales and then give me the sales month itself.
>
> **[2:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=176)** If I run this and take a look, of course, the monthly sales and year-to-date today sales are the same for the first month.
>
> **[3:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=181)** And then from there, they just get bigger and bigger.
>
> **[3:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=184)** Now, if I wanted to, I could also partition this and have multiple years.
>
> **[3:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=188)** That would mean I would use the OVER clause and PATITION BY as well as ORDER BY.
>
> **[3:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=192)** So in order to do that, first, let's take out our WHERE clause here.
>
> **[3:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=197)** And now it would return all years, which is fine.
>
> **[3:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=200)** But what I want to do is each year, essentially, reset the counter.
>
> **[3:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=204)** So let me bring back the year, as well, s.OrderDate as SalesYear, add this to our GROUP BY.
>
> **[3:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=216)** And then out here, in my outer query, I might add a PARTITION BY and SalesYear.
>
> **[3:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=225)** Then down below, where I have my GROUP BY, I'm also going to add my SalesYear, and I also want to ORDER BY it.
>
> **[3:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=235)** So first I'll ORDER BY SalesYear, then SalesMonth.
>
> **[3:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=239)** When I run this now, let me make sure to return the actual SalesYear.
>
> **[4:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=248)** You can see that the very first year and month was 2010 December and the year-to-date and the monthly sales match 'cause there's only one month there.
>
> **[4:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=257)** And then from then on out, they start adding up.
>
> **[4:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=259)** Notice that it reset.
>
> **[4:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=261)** The year-to-date sales now match the monthly sales for 2011.
>
> **[4:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=264)** And as I get into 2012, they reset again.
>
> **[4:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=267)** So this way I was able to actually show every single year with a running total.
>
> **[4:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=272)** And in the final month, it would actually show you the year-to-date total.
>
> **[4:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=277)** The next step, if you wanted to, you could then take this data and do things like year-over-year comparison, prior month over prior period.
>
> **[4:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/rolling-calculations-14431151?u=76281980&t=284)** All those kinds of things are now possible using these simple methods.

> [!info]- Semantic Content
>
> **Env Vars:** order (4), sum (2), group (2), datepart (1), avg (1)
> **Code Keywords:** let (6), function (3), this, (1), from. (1)
> **SQL:** order by (4), group by (2), where (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Analyze employee data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=0)** - [Instructor] Now let's take a look at analyzing employee data.
>
> **[0:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=3)** Now most systems that manage employee data, store them in a common format with a start and end date for each employee.
>
> **[0:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=9)** This format provides some unique challenges when looking to analyze the data.
>
> **[0:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=13)** Since there are no point of references for when employees come and go, there is no transaction record, rather just a single record for each employee with multiple dates on it.
>
> **[0:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=23)** The most common question I've seen in my years working with employee data is how many active employees were there on a given day?
>
> **[0:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=28)** This is often related to reporting externally or for staffing plans.
>
> **[0:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=32)** Another common question is the rate of attrition.
>
> **[0:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=34)** There are a few ways to calculate this, but it's often the percent of people that were no longer active after a given time period, say a quarter from the total that were there when the periods started.
>
> **[0:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=45)** The last most difficult due to the way employee data is typically stored are trends of active counts over time.
>
> **[0:51](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=51)** If there were more of a transaction log when an employee joins or leaves the company, this would be fairly easy, just like sales orders.
>
> **[0:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=57)** However, most systems don't store data in this way.
>
> **[1:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=60)** So it becomes a bit more difficult.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=62)** In this demo, I'm going to show you how to first take a look at point-in-time active counts.
>
> **[1:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=66)** So for a specific date, and then how to use that same logic to develop a trend of active people over time.
>
> **[1:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=73)** So first let's take a look at our employee table, and this table here is very common in that it has a start, and an end date related to each employee record.
>
> **[1:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=84)** So instead of a log, like when they joined the company, when they left, it has just one record for each employee.
>
> **[1:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=90)** So if I wanted to answer the question, "How many active employees did we have on November 13th, 2013?"
>
> **[1:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=95)** Just as an example.
>
> **[1:36](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=96)** I could run this query here, and it would give me a count, and it's where the start date is less than or equal to the data I'm interested in, meaning they were hired or joined the company prior to then.
>
> **[1:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=106)** And the end date is either after that, meaning they were active during this period of time or the end date is null, and that's a common way to essentially show that that employee is still here.
>
> **[1:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=117)** They're still active.
>
> **[1:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=119)** So when I run that, it basically finds anybody that was either hired before, and then fired after or hired before, and is still active with the company.
>
> **[2:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=127)** So 290 is our magic number.
>
> **[2:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=130)** Now, the way to actually do this calculation for every single day to get an actual trend is to use another table that has just every day in it.
>
> **[2:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=139)** This is a common thing, you've seen in data warehousing, where you have a dates table, often called a date dimension.
>
> **[2:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=145)** So here's an example of the one in our database.
>
> **[2:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=148)** Now with this, we have our date key, our full date alternate key.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=151)** That's the one that we'll actually be using here, which has the date value.
>
> **[2:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=154)** Then you have a lot of other attributes about that day, the month, the English name, the Spanish name, all that kind of stuff.
>
> **[2:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=161)** So let's take a look at how to actually get the active trend.
>
> **[2:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=165)** So we start with our date table.
>
> **[2:48](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=168)** Then we use a sub query against the employee table to actually get the number of people that were active.
>
> **[2:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=174)** Then we need to apply the logic like before, the full date, alternate key, which is the date value we're interested in is between the employee start date, and the employee end date.
>
> **[3:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=184)** But if the employee end date is null, we're just going to replace it with some arbitrary value well off into the future so we'll always get those people included there.
>
> **[3:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=192)** So when I run this, essentially what I have is every single day, how many people were active.
>
> **[3:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=198)** And you can see that in the early goings of the company, there was only one.
>
> **[3:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=201)** And if I scroll down here, you'll see that number grow until we hit our magic number of 290.
>
> **[3:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=207)** So what if I just wanted to see a monthly trend?
>
> **[3:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=210)** Well, we need to use the end of month function, and this is specific to SQL server.
>
> **[3:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=214)** So what I essentially want to do is run that same query, but just pick out the month end.
>
> **[3:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=220)** So I'll run a query here just to explain what that function does.
>
> **[3:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=223)** And I'm using the date table.
>
> **[3:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=225)** I'm just looking at every day, and it's pulling apart just those that are the ending of the month.
>
> **[3:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=230)** So we take our same query as above, except now we have a where clause, and in our where clause, what we have is that the full date alternate key, is equal to the end of month for that same date.
>
> **[4:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=242)** So what this does is essentially just filters it out, and that works because this is a cumulative number.
>
> **[4:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=247)** So when I run this query, I have a monthly active count of employees at my company over time.
>
> **[4:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/analyze-employee-data-14430212?u=76281980&t=254)** If I scroll down, you hit that magic number of 290.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), function (2)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Date and time functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=0)** - [Instructor] All right now let's take a look at some popular date and time functions.
>
> **[0:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=4)** Date and time functions are methods in SQL that allow you to perform manipulation and arithmetic operations on date and time fields.
>
> **[0:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=11)** Often we start dates and times of when events occur in our databases, sometimes those lineup with how we want to analyze the data but often they do not.
>
> **[0:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=19)** So we need to manipulate those values or calculate things like numbers of days between dates, we turn to our date and time functions.
>
> **[0:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=27)** First and foremost, you'll be looking to use functions in aggregations.
>
> **[0:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=30)** As I just said, we may store the data with the detail down to the millisecond of when something occurred but when analyzing we'll want to use all of the events rolled up to the day or month.
>
> **[0:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=40)** So we use these functions to extract those higher levels of granularity of the date hierarchy before we aggregate our values.
>
> **[0:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=47)** The next is filtering.
>
> **[0:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=49)** Time is relevant to every business so it makes sense that when we're looking into questions about cohorts or specific periods, we would need to filter using these functions.
>
> **[0:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=57)** Lastly, we often will want to calculate the time between events to then determine how things are going.
>
> **[1:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=63)** A good example here is the time between when an order is placed to when the date that order is shipped.
>
> **[1:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=68)** This can help us to analyze efficiency of our shipping department as just one example.
>
> **[1:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=72)** In this demo, I'm going to show you how to calculate the monthly sales, even though the data is stored at the daily level.
>
> **[1:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=78)** Then we'll look at how to create a time to ship calculation and lastly, to figure out the most recent month.
>
> **[1:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=84)** So in this first example, what I want to highlight is a function that is SQL Server to help you find the end of the month, it's EOMONTH and what you pass in is a date value.
>
> **[1:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=93)** So what we're doing here is passing an order date, we then have our aggregation, a sum of sales amount and then we group by the end of the month.
>
> **[1:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=101)** So this is a real simple way to get the monthly sales totals from your database.
>
> **[1:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=105)** I run this query here, you can see it's all aggregated up.
>
> **[1:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=110)** And I have the final day of the month.
>
> **[1:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=112)** This is a unique function in SQL Server and there's lots of other ways to do this in other databases but this type of a date function is really powerful and really helps you deliver impactful analytics with a very small amount of code.
>
> **[2:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=124)** The next thing I want to show you is a way to calculate the difference between two dates.
>
> **[2:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=129)** Now, this is a function that is pretty universal, it's DATEDIFF, it does what it sounds like it does, it calculates the difference between two dates.
>
> **[2:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=137)** In this example, the first thing you need to do is pass in the date interval.
>
> **[2:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=141)** So if you want to calculate weeks, months, years, et cetera, between two dates, in this case, I'm using D for the number of days.
>
> **[2:28](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=148)** And the question I want to answer here is how long was it ago that each customer became a customer?
>
> **[2:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=154)** When was the date of their first purchase and how many days ago was that?
>
> **[2:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=158)** So I pass in the date of their first purchased and a function called getdate, which returns today's date.
>
> **[2:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=164)** If you're not using SQL Server, there are other functions to do that such as now or today.
>
> **[2:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=169)** So take a look at the product manual for your database if you're not using SQL Server as it'll be a little bit different.
>
> **[2:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=175)** When I run this query, I get each customer, the date of their first purchase and how many days ago that was.
>
> **[3:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=182)** As I scroll down, you can see that this varies and we have a lot of customers going all the way back to December 29th of 2010.
>
> **[3:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=190)** Now, if I wanted to take a look at that and say, build a histogram, I wanted to aggregate this data and provide more of an analytical solution than a detailed list of customers, I can use these two functions together.
>
> **[3:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=200)** So if I were to take the end of the month of the date of first purchase and then calculate the difference between that date and today, just as I did before and use a count function, which just provides a number of records that are returned that match this grouping level, do a GROUP BY, and then run this one.
>
> **[3:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=220)** I have a very juicy analytical data set here that I could create a histogram of, I could use for trending analysis, I get the month of the first purchase, the number of days that it's been since then and how many customers actually fall into that group.
>
> **[3:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=235)** Now, the last thing I want to show you is a little technique that will help you if you ever are trying to pull in the most recent data from your database.
>
> **[4:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=243)** You see, your database might not always be updated with last month or yesterday's data, sometimes those jobs fail, there's unforeseen circumstances that prevent the data from getting there, whatever the case may be, so I want to show you a little technique here that is really useful to find the most recent data, regardless of when that was.
>
> **[4:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=262)** So the key here is using a sub query to get the max date from our table.
>
> **[4:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=266)** We're using the FactInternetSales table and if I run this query, it just simply returns a one and the most recent day, I join this sub query back to my FactInternetSales table to find whether or not the month and year of the data coming in does match the most recent, the max date from that same table, so this is a self join that I'm using.
>
> **[4:48](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=288)** Then I simply return the rest of the data as I would like to, I run this query, provide my groupings and my ORDER BY, and you can see at the very top there, I have a one for the value of the most recent data.
>
> **[4:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=299)** So I could provide a filter, where is max date equals one and then I would see just that row.
>
> **[5:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/date-and-time-functions?u=76281980&t=304)** This is a really convenient way to make sure that when you run your queries, you're always getting the freshest data for your users.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), pass (3), let (1), case, (1), self (1)
> **Env Vars:** sql (5), eomonth (1), datediff (1), group (1), order (1)
> **Definitions:** is a  (9)
> **CLI Commands:** find (3), make (1)
> **SQL:** group by (1), order by (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Common table expressions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=0)** - [Instructor] Okay. Now we're going to take a look at common table expressions.
>
> **[0:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=4)** Common table expressions are temporary structures that contain separate data than the main query.
>
> **[0:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=10)** And they allow us to reference it again as a self-referencing join.
>
> **[0:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=14)** This might be a little confusing.
>
> **[0:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=15)** So you can think of a CTE or a common table expression like a sub query, where you define a dataset within another query, and then you can reference it from another part of the query, the outer query.
>
> **[0:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=27)** Now CTEs are exactly like that.
>
> **[0:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=29)** But they're also self-referencing, meaning you can do things like traverse hierarchies in your data within a single query.
>
> **[0:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=35)** These little magical functions allow an incredible amount of expressiveness in your analysis.
>
> **[0:41](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=41)** A really unique way is to use CTEs to do a hierarchy analysis.
>
> **[0:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=45)** We'll do this in our demo.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=46)** But to explain the idea is that when you have a hierarchy such as an employee hierarchy, where employees report to other employees, traversing this so you can build an org chart can be really difficult without separate tables or temp tables to help.
>
> **[0:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=59)** With the CTE, it's just one statement.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=62)** Another good use case is to perform lookups.
>
> **[1:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=64)** This is similar to what you can do with a sub query or a join.
>
> **[1:07](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=67)** However, with the CTE, the data will be cashed, and the lookup will be done faster.
>
> **[1:11](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=71)** You can also pass in values to the CTE to perform calculations.
>
> **[1:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=75)** Lastly, and I'm not entirely sure how SQL servers team pull this off, you can create CTEs that reference themselves.
>
> **[1:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=82)** Think of a circular reference in Excel.
>
> **[1:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=85)** Same idea, but it actually works.
>
> **[1:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=87)** I'll show you an example here in a second.
>
> **[1:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=89)** In this demo, first, we're going to use the CTE to create an aggregate of an aggregate.
>
> **[1:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=94)** Then I'll show you how to use a CTE to navigate an employee hierarchy.
>
> **[1:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=98)** Here in my database, the first thing I want to do is show you how to use a CTE to create an aggregate of an aggregate.
>
> **[1:44](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=104)** So I'm going to hide my other code here, just so it cleans it up, and we're not distracted at all.
>
> **[1:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=109)** In this first thing, what I have is essentially a sub query here, which uses the year and the week to roll up the sales amount.
>
> **[1:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=118)** So what we have is the sales by week.
>
> **[2:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=120)** If I were to run this query, you can take a look.
>
> **[2:03](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=123)** You can see, essentially, I have the week number and the year and then the total sales for that time period.
>
> **[2:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=129)** Now to use a CTE, first, I start using the clause WITH and then the name of my CTE, so here, Sales_CTE.
>
> **[2:16](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=136)** And then I define what columns are going to be returned from my query, Yr, WeekNum and WeeklySales.
>
> **[2:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=143)** So those all match up.
>
> **[2:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=144)** It's similar to how you'd create a table.
>
> **[2:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=146)** Then, after I've defined my CTE, I use another SELECT statement to then reference it.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=151)** So instead of in my FROM clause, where I would have a table name, I now referenced the CTE itself.
>
> **[2:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=157)** So I'm doing SELECT * .
>
> **[2:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=159)** And then I have a little function here that says, was it a profitable week where weekly sales over 140,000?
>
> **[2:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=165)** So if so, then one, else is zero, as in yes and no.
>
> **[2:49](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=169)** And if I run this query, what you'll get is a sum of sales by week and then a indicator on the end whether or not it was profitable.
>
> **[2:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=177)** You can see some were, and some were not.
>
> **[3:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=180)** If I wanted to do the same thing, but aggregated up, so I just wanted to see, let's say, the number of profitable weeks within a year, I can do essentially the same thing with my query here.
>
> **[3:10](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=190)** I have the same query, except now I'm not returning all the columns from the CTE, I'm only returning the year.
>
> **[3:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=195)** And then I'm aggregating up, I'm doing a sum around my case statement.
>
> **[3:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=199)** So the case statement is like a little piece of conditional logic inside of my SQL statement, which allows me to test if a condition is true or false and then do something based on the results.
>
> **[3:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=209)** So I'm going to run this guy.
>
> **[3:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=211)** And essentially, the same data as before, just aggregate it up to a new level.
>
> **[3:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=215)** I created a new aggregation level here.
>
> **[3:39](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=219)** All right, the last one is a way to use a CTE to navigate an employee hierarchy.
>
> **[3:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=225)** Now employee hierarchies are rather difficult to actually perform this type of analysis in a single SQL statement.
>
> **[3:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=230)** That's because you have to do this self join, because an employee can report to an employee, and then that employee can report to another employee.
>
> **[3:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=238)** So you don't know how many levels are in this hierarchy, or how many people are above or below a given employee.
>
> **[4:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=244)** So you have to join back multiple times to try to figure that out.
>
> **[4:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=248)** This is where a CTE is a very, very unique and powerful tool to use in your analysis.
>
> **[4:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=254)** Here I define it just like it did before using the WITH statement and then the name, DirectReports.
>
> **[4:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=260)** I define the structure of it, the manager ID, employee ID, title, department ID and level.
>
> **[4:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=266)** Then I have two queries here.
>
> **[4:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=269)** The first one gives me the person at the very top, essentially, where the parent employee key is null.
>
> **[4:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=275)** That means that they don't have anybody that they report to.
>
> **[4:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=278)** If your database is well intact, then this should be the person at the top of the food chain at your company, probably the CEO.
>
> **[4:45](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=285)** Then I union that result set, which is only a single person, with the rest of the data, which is a self-referencing.
>
> **[4:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=292)** So here, if you notice, I'm actually doing level plus one, and I'm actually joining two direct reports, which is the CTE itself.
>
> **[5:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=302)** So I'm doing a new query, essentially, from my employee table and joining back to the query I'm already in.
>
> **[5:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=309)** Now that may make your head explode a little bit, but just trust me, it's going to work.
>
> **[5:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=313)** Now the outer query here, the manager ID, employee ID, title, department ID and level, I try to return all that data from DirectReports.
>
> **[5:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=320)** And I'm just going to filter to the information services department.
>
> **[5:23](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=323)** That's the one I'm most familiar with.
>
> **[5:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=325)** And I want to say, or level equals zero.
>
> **[5:27](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=327)** So I want the top person and then everyone in information services.
>
> **[5:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=331)** When I run this, I essentially get an employee hierarchy where the chief executive officer is at top, and then I have everyone else with an incrementing level over here on the right.
>
> **[5:42](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=342)** Then you can see on the left, who the manager, employee is of each row in my dataset.
>
> **[5:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/common-table-expressions-14430211?u=76281980&t=347)** So that's essentially that manager employee relationship, and that the levels are incremented every time there's a new employee reporting to a new manager.

> [!info]- Semantic Content
>
> **Env Vars:** cte (15), sql (3), select (2), ceo (1)
> **Code Keywords:** self (4), pass (1), function (1), let (1), this, (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** similar to (2), such as (1), just like (1)
> **SQL:** select (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Year-over-year calculations
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=0)** - [Instructor] Now let's take a look at year-over-year analysis.
>
> **[0:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=2)** This is the simple exercise of comparing similar time periods from the previous year to the current year.
>
> **[0:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=8)** This, of course, helps gain an understanding of a company's performance for the current year relative to last.
>
> **[0:13](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=13)** In virtually every earnings call for a public company, you'll hear these metrics quoted and can often have a massive impact on a company's value.
>
> **[0:21](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=21)** Now, every business is subject to seasonality in their sales cycle, with maybe the exception of NASA and Boeing, but many executives and analysts insist on looking at data from the previous month or quarter to the current one.
>
> **[0:32](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=32)** Now, that isn't always a true comparison because of the seasonality, so this year-over-year comparison helps identify a true indicator of performance and remove the actual seasonality between the months or quarters.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=46)** These analyses offer a relative performance metric that isn't burdened by that seasonality, and it can really understand the true relationship of period performance over period performance.
>
> **[0:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=56)** Lastly, I believe that year-over-year analysis offers the true robust comparison to see what's really going on with any company or organization.
>
> **[1:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=65)** These are the ones that I typically go for to understand a company's true performance.
>
> **[1:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=69)** In this demo, I'm going to use a common table expression to find the previous year sales.
>
> **[1:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=74)** Then I'm going to build upon that by calculating the growth percent for the current year over the previous year.
>
> **[1:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=80)** In my database here, first, I want to get the previous year's sales.
>
> **[1:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=84)** So if I were to run my little sub query here, which is embedded within a common table expression, I can see that I have the month, the year, and then the total sales amount.
>
> **[1:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=94)** I'm defining this as monthly sales and we're giving it the names of YearNum, MonthNum, and Sales.
>
> **[1:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=100)** Then I go down and I'm essentially going to, in my outer query, run a very simple statement, which looks at the calendar year, the month, and then a previous sales amount, and then the current sales amount.
>
> **[1:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=112)** So I'm starting with my date table.
>
> **[1:54](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=114)** Then I'm joining to the internet sales table, which just gives me the current year sales.
>
> **[1:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=118)** Then I'm joining to my CTE and in the CTE, I have a little trick here at my sleeve where I'm subtracting a year and joining back to it.
>
> **[2:08](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=128)** So essentially I'm going to get the same month, but from the previous year, pretty simple, right?
>
> **[2:12](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=132)** So if I run this query with my CTE, so what you'll see here is that my result set is pretty clean and nice.
>
> **[2:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=142)** I have the calendar year, the month, the previous sales amount.
>
> **[2:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=146)** So that's the sales amount for that same month of the previous year and then the current sales amount.
>
> **[2:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=151)** So I should be able to go back and look and see that, yes, indeed in 2013th of January, the sales amount matches.
>
> **[2:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=158)** So you can see and test this very simply and see how you can get the previous year sales.
>
> **[2:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=163)** Now we simply want to calculate the percent change.
>
> **[2:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=166)** So that same exact query, except now I have a new little arithmetic operation where I'm finding the difference between the current sales amount and the previous sales amount, and then dividing it by the current sales amount.
>
> **[2:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=177)** So then I run this query here and I have similar results sets, except now I have the percent change.
>
> **[3:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/year-over-year-calculations-14428319?u=76281980&t=184)** And you can see that this January's performance was incredibly bad compared to last, which does add up if you do the math there, but while the rest of them were fairly well, perhaps this data wasn't complete yet, and we didn't have the full, complete picture of the month, who knows, but in any case, you're now able to use a CTE and a real simple way to find year-over-year comparisons in your data.

> [!info]- Semantic Content
>
> **Env Vars:** cte (4), nasa (1)
> **Code Keywords:** let (1), this, (1), public (1), case, (1)
> **CLI Commands:** find (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Finding ranks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=0)** - [Instructor] In this video, I want to explain how to rank your results in SQL.
>
> **[0:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=4)** Now, ranking is essentially just assigning a value for each row in a partition, indicating its position based on some condition or some ordering sequence.
>
> **[0:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=14)** Now, this is commonly used to identify the top X of something.
>
> **[0:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=17)** In this tape, we're going to look at that, as well as some other use cases in our database platform, SQL server.
>
> **[0:22](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=22)** In SQL server, there are some common functions we can look at to identify the ranks.
>
> **[0:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=26)** The most common is of course called RANK().
>
> **[0:29](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=29)** This function returns the rank of a given row within the result set.
>
> **[0:33](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=33)** This, like the other functions, can be partitioned to create more fine-grained rankings.
>
> **[0:38](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=38)** Now, DENSE_RANK() is another way of doing this, except it doesn't skip any of the numbers.
>
> **[0:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=43)** You see, when you use the normal function rank, what happens is if there is a tie at say number two, then the next result will be number four, not number three.
>
> **[0:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=52)** So in this scenario, DENSE_RANK() would actually return number three instead of number four.
>
> **[0:56](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=56)** So depending on how you want to do your ranking and what numbers you want to see, you'll need to choose between one of these two.
>
> **[1:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=62)** ROW_NUMBER() another common method of accomplishing this same thing.
>
> **[1:06](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=66)** It's a little less sophisticated, as it merely returns the index position of the row based on whatever ordering you specify.
>
> **[1:14](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=74)** On the more advanced side, there's one function I wanted to mention, and that is the PERCENT_RANK() function.
>
> **[1:19](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=79)** This function calculates the relative rank of a row within a group of rows.
>
> **[1:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=84)** Instead of showing a rank like one, two, or three, it will turn the relative percent of total within that partition.
>
> **[1:31](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=91)** So the highest ranking row would be one, meaning that it's 100%, and then it would go down from there.
>
> **[1:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=97)** This can be nice when trying to calculate the relative rank of say a sales region compared to the overall total.
>
> **[1:43](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=103)** In this demo, we're going to use these functions to find the top selling products overall, then find the top products for each product sub category.
>
> **[1:52](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=112)** There's a lot of code on the screen here.
>
> **[1:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=113)** So I'm going to shorten this up a little bit so we can focus in our attention on the first one.
>
> **[1:59](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=119)** So here we're going to use the ROW_NUMBER() function as a method of finding the rank.
>
> **[2:04](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=124)** So we use the ROW_NUMBER() function, which, remember, just provides the index position of this row, and we're going to use the ORDER BY after the OVER clause to order it by the total sales amount in a descending order.
>
> **[2:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=137)** Then I have a couple other aggregations here, just to give me the order count, the total sales, and I'm going to finally group by the category and the product sub category.
>
> **[2:25](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=145)** So we're going to find the top product categories and subcategories, and we're filtering to 2013.
>
> **[2:30](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=150)** So just for that one year, and we order by that actual total sales amount.
>
> **[2:35](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=155)** When I run this query, you can take a look and see overall which were the most selling and which were the least selling product categories, and products of categories for that year.
>
> **[2:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=166)** This is a really good, nice little analytical data set.
>
> **[2:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=170)** Now let's use the rank function instead of the row number function.
>
> **[2:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=173)** It just feels right.
>
> **[2:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=175)** And so here I have the same query, except this time I added the sales rank instead of the ROW_NUMBER() function.
>
> **[3:02](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=182)** Same exact thing, just essentially a different function that we're calling.
>
> **[3:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=185)** When I run this one, you get the exact same results.
>
> **[3:09](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=189)** Here they're out of order, and the rank is still preserved.
>
> **[3:15](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=195)** Lastly, I want to show you how to find the top products for sub categories for each year.
>
> **[3:20](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=200)** So very similar to what we did before, except now in our RANK() function, we're going to use a partition by clause.
>
> **[3:26](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=206)** So the partition by basically says, run this aggregation, but then each time this value changes, in this case, the year of the order date, each time we get a new year, go ahead and restart.
>
> **[3:37](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=217)** So I'm going to get the rank for each year and then I'll sort that, and I'll be able to see the top products for the products of categories for each year.
>
> **[3:47](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=227)** When I run this query, we can take a look for 2010.
>
> **[3:50](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=230)** There were two, they're ranked.
>
> **[3:53](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=233)** For 2011, there were also two.
>
> **[3:55](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=235)** There weren't a lot of sales back then apparently.
>
> **[3:57](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=237)** And they were also ranked.
>
> **[3:58](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=238)** And then for 2012 is when it gets more in depth.
>
> **[4:01](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/finding-ranks?u=76281980&t=241)** So you can see here, this is a really nice way of performing a relatively complex analytical function, all within one single SQL statement.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), this, (2), let (1), case, (1)
> **Env Vars:** sql (4), row_number (4), rank (2), dense_rank (2), percent_rank (1)
> **CLI Commands:** find (4)
> **Definitions:** is a  (3)
> **SQL:** order by (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Conclusion

#### Becoming a powerful data scientist
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=0)** - [Instructor] SQL is by far the most universal of data science and programming languages.
>
> **[0:05](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=5)** In this series, you've learned how to perform the basics, such as retrieving data from a database, joining that data with other related tables, aggregating the data up, and even performing complex analysis, like ranking.
>
> **[0:17](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=17)** The journey isn't over, however.
>
> **[0:18](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=18)** There are many more ways and platforms you'll need to master before becoming a true data Jedi.
>
> **[0:24](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=24)** For example, I recommend checking out Foundations of Programming: Databases, [[SQL Essential Training]], and SQL for Data Reporting and Analysis.
>
> **[0:34](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=34)** With the skills you've learned here and that you'll get in these additional courses, you're well on your way to becoming a powerful data scientist.
>
> **[0:40](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=40)** Feel free to connect with me online as well, and remember, when you free the data, your mind will follow.
>
> **[0:46](https://www.linkedin.com/learning/sql-tips-and-tricks-for-data-science/becoming-a-powerful-data-scientist?u=76281980&t=46)** Thanks for watching this course and I'll see you back here next time.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ben Sullins]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Develop Your Data Analysis Skills]]
← [[Data Science Foundations- Data Mining in R]] | **7 of 10** | [[SQL Hands-On Practice- Solve Business Problems]] →

## Appears In

- [[Develop Your Data Analysis Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)