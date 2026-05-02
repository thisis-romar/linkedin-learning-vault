---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: intermediate-sql-for-data-scientists-25322592
url: "https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592"
level: Intermediate
updated: 3/14/2025
learners: 45842
skills:
  - Data Manipulation
  - Data Analysis
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/intermediate-sql-for-data-scientists-5925685/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG4LvxcWRlOYQ/learning-public-crop_675_1200/B4EZUghCgXG0AY-/0/1740007287506?e=2147483647&amp;v=beta&amp;t=M8ue0_cYqF--_BbExv7im3immNCMf4V04Mvpow2fWoM"
linkedin_topic: Data Science
learning_paths:
  - '[[Moving from Data Analyst to Data Scientist]]'
next_courses:
  - '[[Data Wrangling in R]]'
path_nav: '[{"path":"Moving from Data Analyst to Data Scientist","position":1,"total":11,"prev":null,"next":"Data Wrangling in R"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/data-manipulation
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Intermediate%20Sql%20For%20Data%20Scientists.md)

![Intermediate Sql For Data Scientists](https://media.licdn.com/dms/image/v2/D4E0DAQG4LvxcWRlOYQ/learning-public-crop_675_1200/B4EZUghCgXG0AY-/0/1740007287506?e=2147483647&amp;v=beta&amp;t=M8ue0_cYqF--_BbExv7im3immNCMf4V04Mvpow2fWoM)

# Intermediate Sql For Data Scientists

> Organizations are increasingly adopting digital transformation strategies that lead to greater data generation and, as a result, a greater need for data analysis. This course is designed for analysts and data scientists who work with SQL databases. Instructor Dan Sullivan outlines how to perform common data science tasks, including finding, exploring, and extracting data within relational database

> [LinkedIn Learning](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592) | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The need for SQL in data science](#the-need-for-sql-in-data-science)
  - [What you should know](#what-you-should-know)
- [**1. Foundations of SQL for Data Science**](#1-foundations-of-sql-for-data-science) (4 videos)
  - [Overview of data science operations](#overview-of-data-science-operations)
  - [Data manipulation commands](#data-manipulation-commands)
  - [Data definition commands](#data-definition-commands)
  - [SQL standards](#sql-standards)
- [**2. Basic Statistics with SQL**](#2-basic-statistics-with-sql) (8 videos)
  - [Getting started with GitHub Codespaces](#getting-started-with-github-codespaces)
  - [Creating tables and loading data](#creating-tables-and-loading-data)
  - [Basic aggregate functions](#basic-aggregate-functions)
  - [Statistical aggregate functions](#statistical-aggregate-functions)
  - [Grouping and filtering data](#grouping-and-filtering-data)
  - [Joining and filtering data](#joining-and-filtering-data)
  - [Challenge: Test an attribute for normal distribution](#challenge-test-an-attribute-for-normal-distribution)
  - [Solution: Test an attribute for normal distribution](#solution-test-an-attribute-for-normal-distribution)
- [**3. Data Munging with SQL**](#3-data-munging-with-sql) (7 videos)
  - [Reformatting character data](#reformatting-character-data)
  - [Extracting strings from character data](#extracting-strings-from-character-data)
  - [Filtering with regular expressions](#filtering-with-regular-expressions)
  - [Reformatting numeric data](#reformatting-numeric-data)
  - [Fuzzy string matching](#fuzzy-string-matching)
  - [Challenge: Prepare a data set for analysis](#challenge-prepare-a-data-set-for-analysis)
  - [Solution: Prepare a data set for analysis](#solution-prepare-a-data-set-for-analysis)
- [**4. Filtering and Aggregation**](#4-filtering-and-aggregation) (9 videos)
  - [Using the HAVING clause to find subgroups](#using-the-having-clause-to-find-subgroups)
  - [Subqueries for column values](#subqueries-for-column-values)
  - [Subqueries in FROM clauses](#subqueries-in-from-clauses)
  - [Subqueries in WHERE clauses](#subqueries-in-where-clauses)
  - [Using ROLLUP to create subtotals](#using-rollup-to-create-subtotals)
  - [Using CUBE to total across dimensions](#using-cube-to-total-across-dimensions)
  - [Using Top-N queries to find top results](#using-top-n-queries-to-find-top-results)
  - [Challenge: Filter and aggregate a data set](#challenge-filter-and-aggregate-a-data-set)
  - [Solution: Filter and aggregate a data set](#solution-filter-and-aggregate-a-data-set)
- [**5. Window Functions and Ordered Data**](#5-window-functions-and-ordered-data) (6 videos)
  - [Introducing window functions](#introducing-window-functions)
  - [NTH_VALUE and NTH_TILE](#nth_value-and-nth_tile)
  - [RANK, LEAD, and LAG](#rank-lead-and-lag)
  - [Width_buckets and CUME_DIST](#width_buckets-and-cume_dist)
  - [Challenge: Segment a data set using window functions](#challenge-segment-a-data-set-using-window-functions)
  - [Solution: Segment a data set using window functions](#solution-segment-a-data-set-using-window-functions)
- [**6. Common Table Expressions**](#6-common-table-expressions) (6 videos)
  - [Introducing common table expressions (CTEs)](#introducing-common-table-expressions-ctes)
  - [Multiple table common table expressions](#multiple-table-common-table-expressions)
  - [Hierarchical tables](#hierarchical-tables)
  - [Recursive common table expressions](#recursive-common-table-expressions)
  - [Challenge: Rewriting a complex query to use CTEs](#challenge-rewriting-a-complex-query-to-use-ctes)
  - [Solution: Rewriting a complex query to use CTEs](#solution-rewriting-a-complex-query-to-use-ctes)
- [**7. Types of Joins**](#7-types-of-joins) (7 videos)
  - [Overview of types of joins](#overview-of-types-of-joins)
  - [Inner joins](#inner-joins)
  - [Right outer joins](#right-outer-joins)
  - [Left outer joins](#left-outer-joins)
  - [Full outer joins](#full-outer-joins)
  - [Challenge: Choose the correct type of join](#challenge-choose-the-correct-type-of-join)
  - [Solution: Choose the correct type of join](#solution-choose-the-correct-type-of-join)
- [**8. Working with JSON**](#8-working-with-json) (7 videos)
  - [JSON in relational databases](#json-in-relational-databases)
  - [JSON data types](#json-data-types)
  - [Inserting JSON data](#inserting-json-data)
  - [Querying JSON data](#querying-json-data)
  - [Indexing JSON data](#indexing-json-data)
  - [Challenge: Query a JSON column](#challenge-query-a-json-column)
  - [Solution: Query a JSON column](#solution-query-a-json-column)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for SQL in data science](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/the-need-for-sql-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/the-need-for-sql-in-data-science?u=76281980&t=0)** - [Dan] If you work with data, you will likely work with [[SQL]] at some point.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/the-need-for-sql-in-data-science?u=76281980&t=3)** In this course, we build the kinds of SQL queries that data analysts and data scientists often use, including specialized functions and operations that will save you time and help improve the quality and depth of your analysis.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/the-need-for-sql-in-data-science?u=76281980&t=14)** My name is Dan Sullivan, and I'm a data architect specializing in [[Data Science]].
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/the-need-for-sql-in-data-science?u=76281980&t=19)** Start this course today to learn how to perform analysis tasks faster and more efficiently with SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Data Science]] (1)
> **Env Vars:** sql (3)
> **Speakers:** - [dan] (1)

#### [What you should know](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/what-you-should-know?u=76281980&t=0)** - [Instructor] Now I do make some assumptions about what you already know.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/what-you-should-know?u=76281980&t=3)** Now, this is an intermediate [[SQL]] course, so I assume you have some familiarity with [[Relational Databases]] and SQL.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/what-you-should-know?u=76281980&t=11)** And I also assume that you're comfortable working with an editor or an integrated development environment, or IDE.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/what-you-should-know?u=76281980&t=17)** So for example, we'll be working in Visual Studio Code in the [[Codespaces]] environment within [[GitHub]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Relational Databases]] (1), [[Codespaces]] (1), [[GitHub]] (1)
> **Env Vars:** sql (2), ide (1)
> **Tools:** visual studio (1), github (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of SQL for Data Science

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of data science operations](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=0)** - [Instructor] Data is an integral part of how many organizations work, and that doesn't matter if those organizations are businesses, governments, research institutes, or other types of organizations.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=10)** Now, sometimes when we think about data, we think about small amounts of data, say for example, the data that's needed for me to complete an online transaction so I can, for example, purchase a book online.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=21)** But other times, we're looking at large amounts of data because our interest isn't so much as, say, conducting a business transaction, but analyzing, say, thousands of transactions and trying to gain insights into our customers' behaviors and interests.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=36)** What we're focused on in this course is that second category of sort of data problem.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=41)** We want to help our colleagues gather insights from data to help with the operations of our particular organizations.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=48)** So to do that, we will set up, say, [[Data Science]] operations within our organizations.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=54)** Well, what kinds of things do we need to do from a data perspective if we want to have a data science operation?
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=61)** Well, first of all, we have to be able to link data from different sources, because no one system, whether it's a transaction processing system or an HR system that tracks employees or a payroll system, no one of them can tell the complete picture of the business, so we often have to pull different pieces together to get a bigger, more comprehensive view of our organization.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=82)** Now, oftentimes, we're pulling a lot of data together, but we don't always need to work with all of the data, so we have to be able to filter out and focus on particular subsets of data.
>
> **[1:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=92)** We also need to reformat data so that we have a consistent representation for data within our data science operations.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=102)** Now, a key thing that we typically do in data science operations is look at aggregate data.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=108)** So we want to be able to understand the big picture.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=110)** So rather than look at a single transaction, we want to look at patterns over the course of thousands of transactions.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=116)** And we want to be able to answer specific questions about [[Business Operations]], so for example, we might want to know what are the top 10% most profitable stores in a particular chain of retail stores?
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=129)** Or we might want to know which stores are not as profitable this quarter as they were last quarter.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=135)** Those are very specific questions that business people may ask, and we, from a data science and analytics perspective, are able to answer those questions with the techniques that we're going to talk about in this course.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=147)** Now, of course, to do data science, we have to start with data, which means we have to go to various sources.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=153)** Oftentimes, we'll find the data that we need or the data we're interested in is already in a database, and it could be a relational database or it could be a [[NoSQL]] database.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=162)** Now, [[Relational Databases]] are often used for transaction processing systems and data warehouses.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=168)** NoSQL [[Databases]] are typically used in a couple of cases.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=172)** One is when you have very large volumes of data and very high velocity, so a large amount of data coming in short periods of time typically use NoSQL databases.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=182)** Also, when the data is semi-structured, it's not really as well structured or as consistent as we typically find in relational databases, that's another time we might use a NoSQL database.
>
> **[3:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=192)** Now, we may also get data straight from applications that are running in our data centers or in the cloud.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=198)** We may also get [[Data Streaming]] in from mobile devices.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=202)** Now, if you're in an organization that has, say, a fleet of vehicles, those vehicles might be instrumented with [[IoT]], or internet of thing sensors which collect data about the state of the vehicle and send that information for analysis.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=216)** And we also may be looking at, say, web logs.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=218)** So applications typically write out information about the state of the application at any point in time, and sometimes, we need to be able to analyze that.
>
> **[3:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=226)** Those are examples of the kinds of data sources that might come from application-related data.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=232)** And then finally, there's a third category I want to talk about, and this is one that's easily missed, and that's manually managed data.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=239)** We may work with colleagues who collect a lot of data, work with data, and then essentially track their own data in spreadsheets or in a local database, and they derive that data and they work with that data, and that data is only available in the spreadsheet or database that they manage.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=255)** Now, sometimes we need to pull those into our data analysis as well.
>
> **[4:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=260)** How do we get data from these various types of sources basically into a single source that we can work with?
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=268)** Well, the process is known as extraction, transformation, and load.
>
> **[4:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=272)** And here, the idea is basically that we extract or we read the data from its source, if that's in, say, a database or a spreadsheet, or we extract it from applications or IOT data streams.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=285)** And then we do things to transform the data, and basically, we can think of each data source as a puzzle piece, and the transformation is the operations that help us reshape those puzzle pieces so that they all fit together in a logical way.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=300)** And then finally, once we have the data transformed, then we can load it into a relational database, at which point we can then start using [[SQL]] to analyze it.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=310)** Now, transformations is a very broad topic, so let's look at just some simple examples.
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=315)** When we talk about transformations, it could be something as simple as, say, making sure text values don't have any extra white spaces or extra spaces or tabs at the beginning or end of the text.
>
> **[5:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=327)** We also often have to reformat dates.
>
> **[5:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=330)** Different systems use different representation for dates, so we want to make sure we have a consistent way of looking at dates.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=337)** Also, two different systems to talk about the same thing, say, for example, the departments in your organization, they might use different codes to refer to them, so one application might use two letter codes to refer to departments, and another application might spell out the whole name of the department.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=353)** When we're transforming the data, we'll want to make sure we pick some standard way of categorizing or some standard set of codes and make sure that we consistently use those.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=363)** And then we may have other kinds of transformations, something as simple as making sure data values are properly cased, or we might need to, say, reformat numeric values into currency values, or vice versa.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=375)** So those are just some examples of simple transformations.
>
> **[6:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=378)** And transformations can get quite complex, especially if there's additional business logic that's involved.
>
> **[6:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=385)** And then finally, after the transformation are performed, the data is loaded, then we get to what many of us consider the most interesting part, which is the analysis phase.
>
> **[6:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=394)** And here we're going to work with various tools, whether it's SQL or [[Python (Programming Language)|Python]] or Spark, to do different kinds of analysis.
>
> **[6:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=401)** And the goal here is to basically derive insights from the data so we can provide those insights to our colleagues who make decisions about our organization's operations and strategies and tactics.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-data-science-operations?u=76281980&t=416)** So next, we're going to take a look at some specific SQL commands that we will be using throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (6), [[NoSQL]] (4), [[SQL]] (3), [[Relational Databases]] (2), [[Databases]] (2)
> **CLI Commands:** make (4), find (2), python (1)
> **Analogies:** for example (4), picture (2)
> **Env Vars:** sql (3), iot (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Data manipulation commands](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=0)** - [Instructor] This is an intermediate [[SQL]] course, so I assume that you have some familiarity with SQL, but I do want to make sure that we all have some common understanding and a little bit of a refresher just in case it's been a little bit of time since you've seen some of the more common SQL commands that we'll be using in this course.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=17)** So for starters, I just want to point out that there are two types of SQL commands that we're going to focus on.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=23)** One type is called [[Data Manipulation]] commands, and the others are data definition commands.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=28)** In this video, we're going to focus on data manipulation commands.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=32)** Now, the first data manipulation command I want to start with is called insert.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=38)** And here's an example of an insert statement.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=40)** And I'm going to walk through this one section or one clause of the insert statement at a time.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=46)** But I want to show you the entire command, which is used to insert one row of data into a table called company regions.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=54)** So we start with the first part of the insert statement, the first clause is the insert into, and then following those two key terms is the name of a table.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=64)** Now, in our case, this assumes that we have a table that we've already created called company regions.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=70)** And in company regions, we have at least three columns, region id, region name and country.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=77)** So we're specifying these specific column names that we want the data to go into.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=82)** Now, the way we specify the data is we use the values clause.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=88)** So after saying insert into, and then a company name, and then listing the columns that we want to insert the data into, we have a values clause.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=96)** And in the values clause, we have a list that's the same length as the list of the columns.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=102)** As you can probably guess, there's a one-to-one correspondence between an item in the values list and an item in the column list.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=110)** So in this example, the value one is written to the region ID column, Northeast is written to the region name column, and USA is written to the country column.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=122)** So after executing this, we would have a row in the table with a region ID of one, a region name of Northeast and a country of USA.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=130)** Now, if we do multiple insert statements, such as we're showing here, we end up with a table that will have multiple rows.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=139)** So in this case, we have a table with three rows, one row corresponding to each of the insert statements.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=146)** And in each case, an ID, a region and a country is set for each of those rows.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=154)** Now, insert is really useful when we want to put just fresh data, brand-new data into a table.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=161)** Now, if we have data that's already in the table, but we want to manipulate it, we want to change it somehow, we can use the update command.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=168)** Now, here's an example of an update command, and again, we'll break this down and go clause by clause.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=173)** So the first part of the update command is the update clause where we specify update, and then the name of the table we're updating, followed by the set clause.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=182)** Now, here we just have a single column that we want to update, and the country column is the one we're going to update.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=188)** And so we're specifying both the column to update and the value we're going to write to that column.
>
> **[3:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=194)** In this case, we're going to set the country to the words United States.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=200)** Now, optionally, you can use a where clause.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=202)** So in this case, we're only going to update rows in the table where the country is equal to USA.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=209)** So if it's not equal to USA, we're not going to update it at all.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=212)** So that's the basics of an update statement.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=215)** Now, a delete statement, as you can imagine, is useful for removing data from a table.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=220)** Now, the basics of the delete statement are, first, there is a delete from term and part of that clause is the delete from and then the name of the table.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=230)** So again, we're going to continue working with company regions.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=233)** Now, actually you could have a where clause here.
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=235)** And again, like with updating, when we use a where clause, we are limiting the number of rows or the specific rows that are being operated on.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=245)** So in our case, the operation that we're talking about is deleting.
>
> **[4:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=248)** And what we're saying here is we're only going to delete rows from the company region's table where the country is equal to Canada.
>
> **[4:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=256)** So for example, after we inserted our three rows, we have a table that looks like this.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=262)** After running the delete command, we're essentially going to remove the third row, where the ID is three, the region is Quebec and the country is Canada.
>
> **[4:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=271)** But that's the only row that gets removed by this delete statement.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=275)** Now, a select statement is one of the most interesting commands to work with in SQL, and it's one we will spend a lot of time with because this is what we use to execute most of our queries.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=285)** Now, a select statement has a much richer syntax.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=288)** So I just want to cover out some of the highlights of that and just talk a little bit about that before we actually take a look at an example select statement.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=296)** So with a select, we can work with one or more table names, along with a list of columns to retrieve.
>
> **[5:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=302)** Now, sometimes when we're working with more than one table, when we do that, we often use something called a join.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=308)** A join is like a way of linking tables or connecting related information in different tables, linking them together so that we can actually build a row in a result set or an output from a select statement that includes information from both tables.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=323)** Now, like the update and delete statements, we can use a where clause to limit what we're interested in.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=331)** In case of a select statement, when we use a where clause, we limit what rows are returned.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=337)** We can also apply what are known as aggregate functions.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=340)** Those are really useful for doing work, like, oh, adding up all the values of say, you know, a particular column, like if you're working with sales data, add up the total sales price of all of the rows that are returned by the select cause, or find the median or average value for some particular column.
>
> **[5:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=358)** So aggregate functions are really useful and we use them quite a bit in [[Data Science]] work.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=363)** There's also sorting and grouping commands.
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=366)** So we might want to have a specific order.
>
> **[6:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=368)** We might want to say the top 10 sales regions in our company database, or we might want to group say what are the marginal revenues grouped by say product line.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=381)** So select statements are really useful in that they have different commands or different clauses actually for specifying how to order the output, so how to sort the output, and then also how to group or collect subsets of rows so that you can do things like apply aggregate functions to those subsets.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=400)** So one of the simplest select statements is known as the select star.
>
> **[6:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=403)** So here's an example where we're saying select star from our table country regions.
>
> **[6:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=408)** Now, select star is basically a shorthand way of saying select all of the columns in the table, in this case, country regions.
>
> **[6:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=417)** So that query would return all of the data in the table.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=421)** So we're not limiting the columns that we're selecting and we're not using a where clause, so we're not selecting a subset of rows.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=428)** So select star from a table is a way to return all of the data in that table.
>
> **[7:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=436)** Now, we can also restrict or constrain which rows we return.
>
> **[7:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=441)** So for example, we can say select star, which will still give us all of the columns, from country regions.
>
> **[7:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=447)** And now we use a where clause, we say, well, only return rows where the ID column has a value that's in this particular list.
>
> **[7:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=455)** And the list we're talking about is one and two.
>
> **[7:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=458)** Now, when we do that, we select just the rows that have the ID one or two.
>
> **[7:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=464)** So we're just selecting these first two rows.
>
> **[7:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=467)** So that's an example of how to work with select statements, as well as delete, update and insert.
>
> **[7:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-manipulation-commands?u=76281980&t=474)** Those are the main data manipulation tools that we use when we work with SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Data Manipulation]] (4), [[Data Science]] (1)
> **Env Vars:** sql (6), usa (4)
> **Definitions:** is called (2), is a  (2), known as (2), is an  (1)
> **Analogies:** for example (2), such as (1), imagine (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Data definition commands](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=0)** - [Instructor] Now we're going to look at data definition commands, the second type of [[SQL]] command.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=6)** Data definition commands allow us to manipulate [[Data Structures]] within a relational database.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=12)** Now there are many different types of data structures that we have built into [[Relational Databases]].
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=16)** We're going to focus on four tables, indexes, views, and schemas.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=24)** Now, tables are probably the most familiar data structure to those of us who've worked with SQL [[Databases]].
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=28)** Here's an example of a [[Data Manipulation]] command for creating a table, and we'll walk through each of the main components.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=36)** But as you can see, it allows us to create a particular table that has certain columns and certain data types.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=44)** So the first part of a create table statement is the set of key terms or keywords create table.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=51)** Now we follow that by the name of the table.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=54)** In this case, we're creating a table called staff.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=57)** Now, after the create table clause, we have a list, and those are a list of columns.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=63)** Now each column is made up of a name like ID, or last name, or department name, followed by a data type.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=70)** And the data types are typically things like integer or text or dates, but there are additional data types as well.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=78)** But those are the ones we see quite frequently.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=81)** Now our columns can take on these various data types.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=85)** Now you'll notice here that we have data types of text and date.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=90)** Now text is sometimes referred to as character or variable character data type.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=96)** And in some relational databases and actually older versions of [[PostgreSQL|Postgres]], you can also specify a specific length to a text.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=104)** So for example, you could say last name has a maximum size of 30 characters, and it's fine to specify a text, but it's generally considered a good practice to not constrain yourself unnecessarily with regards to the length of strings or texts that we work with.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=120)** So oftentimes what you'll see is that when we work with strings, we use the text data type and don't specify a particular length.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=131)** Now another thing you'll notice in the create table statement is we have these additional clauses which can provide additional information about the table.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=139)** And one really important additional clause is the primary key clause.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=144)** And that specifies which of the columns that we have listed is the one that we should treat as the primary key.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=151)** Now, because ID in this case is the primary key, it can't be null and it has to be unique per row.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=158)** So we can't have two rows with the same value in the ID column.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=162)** So by specifying the primary key clause and specifying a column or set of columns that uniquely identify a row, we tell the database to essentially add some constraints or some mechanisms under the covers to enforce the idea that the primary key has to be unique and it has to be not null.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=182)** Indexes are another important data structure in relational databases.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=186)** Now here's an example of a complete create index command, and it basically starts with the key term create index, followed by an index name, and then we specify tables and columns.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=196)** But let's look at each of those components.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=198)** So first we have our key term or our command, which is create index, followed by the name of the index.
>
> **[3:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=204)** So we're creating an index so we can make up any name we want.
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=208)** Now oftentimes we use naming conventions when we name tables and indexes and other data structures.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=214)** So one that I've seen quite a bit is to use the prefix IDX_ to start the name of an index followed by the name or an abbreviation for the table.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=224)** So in this case, IDX_staff.
>
> **[3:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=226)** And then followed by some indication of the columns that are used in the index.
>
> **[3:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=231)** So for example, IDX staff, last name is pretty easy to read if you're scanning through a long list of indexes to be able to understand pretty quickly.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=240)** Ah, this is on the staff table and it's an index for the last name.
>
> **[4:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=244)** Then we have the on clause.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=246)** The on basically just specifies what table this index is applied to.
>
> **[4:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=250)** In this case it's the staff table.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=251)** And then the using clause precedes a list of the columns that are included in the index.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=258)** Now in this case, we're only using the last name column, but this again, it's pretty common.
>
> **[4:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=263)** If you're working with some kind of database where we have people's names and you often look up by last name, then you would want to have an index on that last name column to improve the query performance when looking up by name.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=276)** Views are another widely used data structure in relational databases.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=280)** And here's an example of a view, and it's fairly complicated mostly because of the select statement.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=285)** But what we can see here is that we have a command called create view, and we're giving it a name.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=290)** In this case it's staff_div or short for staff_division.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=295)** And then we specify, we're creating this table as, and then we give a select statement.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=301)** Now that select statement is going to query one or more tables.
>
> **[5:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=305)** Now in this case, we are selecting an ID and a last name from the staff table.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=311)** And then we're also working with a new table we haven't seen before called Company Divisions.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=316)** And we are aliasing that or kind of referring to that using the shorthand notation CD.
>
> **[5:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=322)** And so CD stands for company divisions.
>
> **[5:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=326)** And in the company divisions table, we want to get the company division column.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=331)** Now we specify in the from clause which tables we're working with.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=336)** So we're working with staff obviously, but then we're not just working with staff, but we're also joining the rows from the staff table to rows in the company divisions table.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=345)** And we specify a left join.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=348)** Again, if you're familiar with SQL, you have probably heard about things like left join, outer joins and so on.
>
> **[5:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=354)** And the left join indicates that we're going to use all of the rows from the table on the left.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=360)** If you think of staff, left join, company division, staff is on the left, followed by left join, followed by company on the right, company divisions on the right.
>
> **[6:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=370)** So this is a left join.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=371)** So we have all the rows from staff, and anytime we find a matching company divisions based on department, then we're going to include that.
>
> **[6:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=379)** So the on statement after left join with the additional table name.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=384)** We have the on statement.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=386)** And the on basically says, well, what columns do I use in each of these two tables to match or to link or to join?
>
> **[6:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=392)** And in both the staff table and the company divisions table, we have a column called department.
>
> **[6:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=399)** And so we join these rows from these two tables, or we link them together when they have the same department value.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=406)** So that's an example of a view.
>
> **[6:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=408)** Now the last data structure we're going to look at in this video is called schemas.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=413)** Now a schema definition is very straightforward.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=416)** Here's an example of a create schema statement, which specifies the phrase or the key terms create schema followed by the name of a schema.
>
> **[7:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=425)** In this case, data sci short for [[Data Science]].
>
> **[7:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=429)** Now we can think of a schema as an organizing structure.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=433)** And within a schema in the database, we have things that we work with together that are related.
>
> **[7:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=438)** So for example, we might have a set of tables, and with each table there may be one or more indexes or zero or more indexes associated with that table, and those tables might also be used in views.
>
> **[7:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=449)** So you can see a schema is a way of packaging or organizing and keeping logical separation around different data structures like tables, indexes, and views that we use.
>
> **[7:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/data-definition-commands?u=76281980&t=460)** So when we think about data manipulation language, basically we're talking about how we create and delete and maintain things like tables, indexes, views, and schemas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (4), [[Relational Databases]] (4), [[SQL]] (3), [[Data Manipulation]] (2), [[Databases]] (1)
> **Definitions:** short for (2), is a  (2), stands for (1), is called (1)
> **Env Vars:** sql (3), idx_ (1), idx (1)
> **CLI Commands:** cd (2), make (1), find (1)
> **Analogies:** for example (3)
> **Code Identifiers:** staff_div (1), staff_division (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [SQL standards](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=0)** - [Speaker] Now as data scientists working with [[Relational Databases]], we need to be aware of [[SQL]] standards.
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=5)** Now, this is because there is no single SQL language standard.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=11)** In fact, the standard has changed over time.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=14)** And also, although we have a common standard, there are variations across [[Databases]].
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=20)** So one database like [[PostgreSQL|Postgres]] might implement a certain subset of a broader standard, whereas another database like Oracle or DB2 or [[Microsoft SQL Server|SQL Server]] might implement different subsets of the standards.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=33)** So we just want to be aware that different databases may have different commands.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=39)** This is especially important if you're trying to follow along this course and you're using a database other than Postgres.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=45)** Now, when we talk about SQL standards, we are typically talking about ANSI standards SQL .
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=52)** And ANSI stands for the American National Standards Institute.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=55)** And the original SQL standard from ANSI came out in 1986, but there have been 11 versions that have come out since then.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=65)** And basically, each version adds new features, new capabilities.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=69)** So for example, some of the latest features include support for [[JSON]] [[Data Structures]], as well as multidimensional arrays, and also advanced triggers.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=79)** Now, what does this mean for us?
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=82)** Well, what it means is your database is SQL implementation may be different from what you see here.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=90)** So, for example, I've talked about how text is a variation on variable character or VARCHAR data types, and that some databases might use VARCHAR, others use text.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=102)** So you may see differences in how we specify things like the data types.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=107)** So you want to check your database documentation, especially for data types.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=112)** There may be additional data types or extra functions that might be available in your database that aren't in the standard.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=119)** And also, functions may be different across different database implementations.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=124)** Now, this may mean that there's a slight variation in the name of the function or the function in your database may take a different set of parameters in that same function call in a different database.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/sql-standards?u=76281980&t=137)** So again, you just want to check your database documentation when working with those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Databases]] (3), [[PostgreSQL|Postgres]] (2), [[Relational Databases]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (7), ansi (3), varchar (2), db2 (1), json (1)
> **SQL:** varchar (2)
> **Analogies:** for example (2)
> **Warnings:** be aware (2)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)


### 2. Basic Statistics with SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with GitHub Codespaces](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=0)** - [Instructor] Okay, we are almost ready to get started actually working with [[SQL]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=5)** But before we do that, I want to spend a little time talking about the development environment or the learning environment that we're going to be working with.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=13)** We are going to use a service called [[Codespaces]], which is a virtualized environment that's provided by [[GitHub]].
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=21)** And, GitHub, if you're not familiar with it, is a service which provides repositories for version-controlled code, and it makes it very easy to share and collaborate on code development.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=33)** Well, that's GitHub.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=34)** GitHub plus Codespaces goes a step further by providing an environment in which we can execute our code.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=42)** So we are actually going to be using Codespaces for installing and running a [[PostgreSQL|Postgres]] server and actually interacting with Postgres using our SQL commands that we're going to be learning about in this course.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=55)** So the first thing we need to do is to navigate to the GitHub repository for this course.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=61)** Now, I've highlighted the URL here.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=63)** And the URL is [github.com/linkedinlearning](https://github.com/linkedinlearning) /intermediate-sql-for-data-scientists-5925685.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=75)** So that's the URL where you'll find this.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=77)** Now, when you first go to [github.com](https://github.com), if you aren't logged in, you may be prompted to log in.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=84)** But once you are into GitHub and you see this page, you will be able to see a couple of things.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=90)** First of all, this is a standard GitHub repository landing page.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=93)** And so, for example, we have a list of different files and folders in here as well as a README which provides some basic information about how files are organized.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=104)** We are primarily concerned with exercise files, and I'll just show you the structure of that folder.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=109)** In here, we have folders associated with each chapter that has exercise files, and within each chapter or each folder, there's another set of files.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=122)** Now, most of these follow the naming convention of the number of the chapter plus the number of the video within that chapter, and that's the name of the SQL exercise file.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=132)** So, for example, 02_02 is Chapter 2, second video.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=137)** This is the exercise file associated with that.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=140)** We do have one exception in this folder called Exercise Data, which is actually the file that we will use to create our schema and load some initial data.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=150)** So we'll be talking about that shortly.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=153)** But that is basically an overview of the exercise files.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=156)** And now what we need to do when we're ready to start working with Postgres is to go to this button labeled Code.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=163)** This will bring up some Codespaces.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=166)** Now, if you have some existing Codespaces, they may be listed here, or you may just see this one option of Codespaces.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=173)** So I'm going to create a new Codespace by clicking the plus.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=178)** And now we are going to go through a series of steps which Codespace is executing for us to create a virtualized environment for us.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=187)** Now, this virtualized environment will include an editor or a IDE that we can work in based on Visual Studio, and it will also include an extension called SQLTools.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=198)** And SQLTools is where we have Postgres installed.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=203)** And we will be able to interact using both our IDE and a command line for executing SQL commands with the Postgres that's installed in Codespaces.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=214)** Now, this operation is going to take a few minutes, so we may edit some of this out, but we'll be back as soon as the environment has completed setting up.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=224)** Okay, the first part of the setup has completed now.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=228)** We have our basic Codespace created and we have our files loaded.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=233)** And the next operation will be installing Postgres.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=239)** Okay, it looks like we are done with the installation, and I just want to briefly describe the environment within the Codespaces.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=246)** What we see here in the main panel is the README that we saw in the GitHub repository.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=252)** So this is a good indication that we have loaded our repository.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=255)** And we also see, over to the left, we see a hierarchical environment where we can work, and we see that under our workspace within Codespace, we have some of the folders that we saw in our repository, like the dev container.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=268)** But we also have exercise files.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=270)** So we see, for example, we have the files from Chapter 2.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=275)** So all of this looks like, you know, exactly what I would expect once we have our repo loaded.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=280)** Now, I'm working under the explorer, and we're looking at the contents of the GitHub repository that have been brought into our container.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=288)** Now, another tool that we're going to use is one called SQLTools, and it has this little barrel icon down here.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=294)** If you click on that, you'll see that we have a new prompt here or a new working area called Connections.
>
> **[5:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=302)** Well, one of the things we want to do is click Add New Connection, and what we're going to do is create a connection or our ability to communicate between our container and our Postgres database.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=313)** So I'm going to select, the kind of connection I want to use is a [[PostgreSQL]] connection.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=318)** So I'll click on that.
>
> **[5:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=319)** And we can give this a connection name.
>
> **[5:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=321)** So I'm going to call it data_sci.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=323)** I'm not creating any connection groups.
>
> **[5:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=325)** My connect string is correct.
>
> **[5:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=327)** The server address is correct.
>
> **[5:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=329)** Port 5432 is correct.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=331)** Now, we do have to add database, username, and user password.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=337)** The database name is postgres.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=340)** The username is also postgres.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=345)** And for the password, we're simply going to select Save as Plain Text in Settings, and we're going to enter the password.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=353)** And the password here is postgres.
>
> **[5:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=357)** Now, this is not standard security practice, but we are in a learning environment, so that's why we are doing things like using the default password for the Postgres database and saving it in plain text.
>
> **[6:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=368)** Nothing we are working with requires any more security than this.
>
> **[6:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=373)** So I'm just going to then scroll down through the other options.
>
> **[6:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=376)** We don't need to change any of the other default options.
>
> **[6:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=378)** And I'm just going to go over to the bottom.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=381)** There's Save Connection.
>
> **[6:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=383)** I will save that connection.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=386)** And let's connect now.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=389)** And if we look over here, back to the left in the Connections work area, we'll see that we have an icon with the Postgres icon and a green dot and data_sci.
>
> **[6:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=401)** I'm going to click on the arrow over on the left to expand hierarchically on this.
>
> **[6:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=406)** And what we're interested in is the schemas.
>
> **[6:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=409)** And what we see here is we have four standard schemas that are created by Postgres.
>
> **[6:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=415)** One is called public, and then also there are two related to tiger and one to topology.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=421)** These have to do with extensions like geo-encoding extensions related to Postgres.
>
> **[7:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=426)** We won't be using them.
>
> **[7:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=427)** You can delete them if you like.
>
> **[7:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=429)** I'm just going to leave them, but I just want to explain why you might see these three schemas that you might not be familiar with.
>
> **[7:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=436)** They're fairly new additions to the default Postgres configuration, but they're definitely not going to be in our way.
>
> **[7:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=443)** So what we have now at this point is we have a connection to the Postgres database.
>
> **[7:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=448)** If we look in the public schema and drill down to Tables, again, there's some default tables that are created.
>
> **[7:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/getting-started-with-github-codespaces?u=76281980&t=454)** So basically what this means is, we have successfully navigated to the course GitHub repository, and we have successfully launched Codespaces, including a Postgres server that we will be working with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (17), [[GitHub]] (12), [[Codespaces]] (9), [[SQL]] (5), [[PostgreSQL]] (1)
> **Tools:** github (12), visual studio (1), command line (1)
> **Env Vars:** sql (4), url (3), readme (2), ide (2)
> **UI Navigation:** click on (3), go to (2), navigate to (1), scroll down (1)
> **Exercise Files:** exercise files (4), exercise file (2)
> **Definitions:** is a  (5), is called (1)
> **Analogies:** for example (3)
> **Code Identifiers:** data_sci (2)

#### [Creating tables and loading data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=0)** - [Instructor] With [[Codespaces]] now set up and running, we can move on to our next step, which is to create a schema, a few tables, and then load data into those tables.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=11)** And once we have that, then we can start working with our [[SQL]] queries.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=15)** So I'm in Codespaces here and what I want to do is I want to just make sure my connection is working.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=21)** So I navigate down to the SQL Tools icon and I see yes, my data-side connection is active, and I see the four schemas that are created by default.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=32)** So that is good.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=33)** And the next thing I want to do is I should have a connection open.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=37)** So, for example, I have my data_sci session here.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=41)** And what I want to do next is actually open the file that has the code that we want to execute.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=49)** Now, that file is located under Exercise Files, under chapter two, and it's called exercise_data.sql.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=56)** So let's open that file.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=58)** Now, what I'd like to do is just walk through briefly what are the main components of this file, and what are the main things that we will be executing.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=67)** So, for example, the first thing we will do is we will create a schema called data_sci.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=73)** And if one already exists, it won't error out.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=75)** We'll set the search path to data_sci.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=78)** So by default, tables that are created or data that's inserted will be using the data_sci schema.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=83)** And then we're going to create a table.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=86)** And in this case, we're going to create a table called company_departments.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=89)** And this will have an id as an integer, a department_name, a division_name, an id will be the primary key.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=96)** Then there's a series of insert statements for that table.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=100)** And if we scroll down, we see we have another set of create table commands.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=105)** And the set of commands is basically, it drops the table if it already exists and then recreates it.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=109)** So this is just a good practice in SQL 'cause if you try to create a table that already exists, you'll get an error and the file won't finish executing.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=117)** So here's another create table.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=119)** This one's for company_regions, and we have several insert statements for different regions.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=125)** We also have a table for employees.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=128)** And employees have things like an id, which we use for primary key, but also things you might expect, like last_name, email, salary, job_title, and so on.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=138)** Now, this table also has some indexes, so we'll create indexes, and then we have a series of insert statements.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=144)** So that's basically the pattern of this file.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=146)** You're welcome to look at it in more detail, but I want to run this.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=151)** Now, what I like to do is I like to copy the contents of the files.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=154)** So I'm just going to highlight everything and copy that and go back to my session.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=160)** This is where I will run all of my commands or most of my commands, and I'm going to paste in the commands.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=166)** And looks like everything was pasted in correctly.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=172)** That all looks great.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=174)** And I'm going to select this option to run on active connection.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=178)** So I'm going to go ahead and run that.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=182)** And we'll notice down here in the bottom part, we're seeing some commands or some informational messages printed on the SQL console.
>
> **[3:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=190)** And I'm just going to move some [[Windows]] around.
>
> **[3:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=194)** And if we navigate back over to the left and click on SQL Tools, and now our schemas are expanded.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=206)** So you'll notice we have a new schema called data_sci.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=209)** So I'm going to click on data_sci and I'm going to click on tables.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=212)** And I see we have tables for employees, company_regions, and departments.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=217)** So let's just navigate and drill down into employees.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=220)** And we see the employees have columns id, last_name, email, start_date, and so on.
>
> **[3:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=225)** So what we have done here is we have successfully created a schema called data_sci, and we've created three tables, one called employees, one called company_regions, and one called departments.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/creating-tables-and-loading-data?u=76281980&t=240)** And so at this point, we should be ready to go with actually executing SQL commands, and we'll start that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Codespaces]] (2), [[Windows]] (1)
> **Code Identifiers:** data_sci (7), company_regions (3), last_name (2), exercise_data (1), company_departments (1)
> **Env Vars:** sql (6)
> **UI Navigation:** click on (3), open the (1), scroll down (1)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (2)
> **File Paths:** exercise_data.sql (1)
> **CLI Commands:** make (1)

#### [Basic aggregate functions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=0)** - [Instructor] Now it's time to start working with select statements to query the data.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=4)** I'm going to start with some very basic select statements probably which are very familiar to you, but I just want to make sure we're all starting from a common understanding.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=14)** So you can think of this first couple of of videos where we're executing select statements as kind of a refresher for some of the basics, just again, so that we're all starting at the same common understanding.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=26)** Now, I'm just going to take a quick look over here under the connections work area.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=31)** And I notice here that we are under schemas.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=35)** We have the data size schema, which we expect, and under tables we have three tables, company departments, company regions, and employees.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=42)** So those are the three tables we'll work with.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=45)** So let's start by working with employees and we'll start with probably the simplest [[SQL]] statement there is, which is simply select, star, from, and now I'm going to specify a table and I'm going to select from data_sci.employees.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=63)** And I'm going to run on active connection.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=68)** And what we'll see here is over on the right we have our output.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=74)** So let's see what we have here.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=75)** We have several columns.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=76)** We have an ID column, which has integers, and they look like they range from one to a little over a thousand.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=84)** Okay, A little bit more over, oh, they go quite high, so that's interesting.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=90)** And then we have last name, some email addresses, start dates, salary, job titles, a region ID, department ID.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=98)** So some very basic information about employees.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=102)** And now what we can do is, this is quite a bit of data.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=106)** Oftentimes when I'm first working with tables and I want to kind of get a feel for the data, I don't want to see necessarily all of the rows in the table.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=115)** Well, in that case, I can use the limit command or the limit clause.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=120)** So for example, I can limit myself to 10.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=123)** So I'm going to run that on the active connection.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=126)** And now we see we're just getting 10 rows back.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=129)** So this is the limit clause is particularly useful when you're just trying to get a feel for data that's maybe in a new table you haven't worked with.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=138)** So we see now we are still using select star, so we're getting all of the columns, but we're just limiting the number of rows that are being returned.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=146)** Now when we're looking at the data, we see that there are, we can think of terms of subsets, like, oh by region or by department ID.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=154)** So if we want to look at just employees, maybe from region two, we can add a where clause.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=162)** So from there, typically the where clause is positioned after the from clause.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=167)** So we'll say where, and I want to look at region ID, and I want to look only at region ID.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=177)** And let's limit to 10 rows as well.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=182)** And okay, so now we have 10 rows returned.
>
> **[3:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=185)** Let's just verify, yep.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=186)** The region ID here is all for region two.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=191)** So we can see with the where clause, we can limit what subsets of rows that we actually look at.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=199)** Well, okay, so now we feel like we've got a sense of what the data looks like, what kind of data to expect.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=205)** One of the things I often want to know is, well, how many rows are in a table?
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=208)** Well, to do that, I'm going to remove the where clause in the limit, and I'm going to replace a select star with a select count star.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=217)** And this says basically count all the rows in the table.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=220)** So let's run that on the active connection, and we'll see there are 1046 rows in this table.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=228)** So at this point, I feel like I've got a good understanding of the overall shape of the data, like how many rows are in the table and what are the particular columns that are available and just a rough idea of what the data in each of the columns look like.
>
> **[4:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=243)** Now, one of the columns we have is something called salary.
>
> **[4:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=248)** And I'm just going to go back over to the explorer and on the left side of the screen, and I'm just going to look at the column titles and just verify, yep, salary is the correct one.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=259)** Well, let's say I'm interested in salary.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=262)** So in addition to count, I might want to know, well what's the highest salary and the lowest salary.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=269)** So for that, I can use the min aggregate function.
>
> **[4:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=272)** So I can say, gimme the min salary, the minimum salary, as well as the maximum salary or max salary.
>
> **[4:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=281)** So now when I run this, I'll get the count of the number of employees, plus the minimum salary and the maximum salary.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=288)** And we'll just run on the connection.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=290)** And we see, okay, our minimum salary is about 40,000, little over 40,000.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=296)** Our maximum salary is almost 150,000.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=299)** So now we're starting to get more of a feel for the distribution of the data for one particular column, in this case salary, which is oftentimes something we want to know when we are working in a [[Data Science]] environment, one of the things we wanted to understand is what are the distributions of different columns?
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=320)** So that's when we're working with salary.
>
> **[5:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=322)** I do want to talk a little bit about the ID column.
>
> **[5:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=326)** 'Cause the ID column is a primary key.
>
> **[5:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=330)** Now, the ID column in this dataset is a meaningless key.
>
> **[5:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=333)** The number, whether it's 1 or 27 or 1,018, it doesn't really mean anything.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=340)** However, it is tempting to make assumptions about meaningless keys.
>
> **[5:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=346)** For example, you might think, oh, well a meaningless key that has a small value is probably an older row or an older record than a row that has a much larger ID number.
>
> **[5:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=359)** That could be the case, but it's not always the case.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=363)** Meaningless keys are generated in different ways, and there may be different circumstances or the history of the data that we're working with might be such that maybe multiple tables were combined or rearranged, or new IDs were assigned to new rows at some point for some reason that had to do with maybe there was a data anomaly and something had to be corrected.
>
> **[6:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=388)** So we have to be very careful about assumptions we make.
>
> **[6:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=391)** So for example, if we look at the minimum ID and the maximum ID, and so now if we look at the count min and max ID and we run this, we see that we have a total of 1,046, but we have a max that's much higher, 1944.
>
> **[6:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=409)** So there's almost 900 more IDs that are in a sense missing.
>
> **[6:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=415)** Like where are those other 900 IDs?
>
> **[6:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=417)** Those could be people that no longer work at the company.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=421)** There could be gaps in the way we assigned IDs.
>
> **[7:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=423)** We might have skipped over large blocks.
>
> **[7:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=426)** So I just want to point this out that when you are working meaningless keys, you have to be careful about the assumptions you make.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=433)** So meaningless keys like an ID are really fundamentally different in their characteristics than say the natural attributes of the entities that we're working with.
>
> **[7:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=443)** So for example, a natural attribute of an employee is a salary.
>
> **[7:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=448)** Now those salaries mean something and so we can make certain assumptions about them.
>
> **[7:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=452)** So we just want to be careful when we're doing data science work or data analytics work, we understand the type of data that we're working with.
>
> **[7:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=460)** And if it's an attribute that naturally goes with an entity, like a salary that's associated with an employee or a longitude and latitude that are associated with a geographic location, it's perfectly fine to make certain assumptions about that and look at things like distributions of data.
>
> **[7:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=478)** When we're working with meaningless keys, it's really a completely different ball game.
>
> **[8:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/basic-aggregate-functions?u=76281980&t=482)** And any assumptions we might be tempted to make, we really should verify before we go too far with those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[SQL]] (1)
> **CLI Commands:** make (7)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **Warnings:** be careful (2)
> **Code Identifiers:** data_sci (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Statistical aggregate functions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=0)** - [Narrator] Now let's look at some additional aggregate functions.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=3)** And in particular, I'd like to look at aggregate functions that help us with what are known as descriptive [[Statistics]].
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=10)** So I'd like to understand what's the distribution or the shape of the data in particular columns.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=15)** What does that look like?
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=17)** Well, let's start with, again, with a real basic command, like SELECT * FROM employees, and that'll be from the data_sci schema.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=33)** And if we just run that on the active connection, we'll see all of our rows, as we expect.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=38)** And let's just quickly limit to 10 and run that.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=45)** Yep, okay, so we're seeing a subset of our data.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=49)** Now so one of the things I'm particularly interested in this case is salary.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=54)** And I can see there's a fair rate difference like from the largest to smallest that I see, just a quick look at just 10 employees.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=65)** But let's see, for example, what are we spending in total across all of our employees?
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=70)** So if we take the sum of the salary column for all of the employees, we'll get a single value.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=79)** So here's our value that we have.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=81)** So this is essentially what we're spending on salary.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=85)** Now I might want to know, okay, how does this break down by, say, by department?
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=91)** So rather than look at just the sum of the salary for the whole company, if I want to look at each individual department and see what I'm spending in each department, I can use the group BY clause and I can group BY the department_id.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=109)** Now if I run it just like that, I'll go ahead and just run it like this.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=112)** What we'll see is we'll see a list of salaries or sums of salaries, but I don't know which departments these apply to.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=119)** So simply grouping by the department doesn't include the department ID in the output.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=124)** So I need to add that.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=125)** So I'm going to put that first in my select list and I'm going to say department_id and now run that again.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=132)** And now this is much better.
>
> **[2:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=133)** Now I have two columns.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=134)** So I can see the sum of salary and I know which department this sum applies to.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=141)** Now so this is useful information.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=143)** I can see there is some spread, but it's not too big of a spread across departments, which makes sense.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=149)** This is actually a synthetic data set.
>
> **[2:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=152)** I used a random number generator with a normal distribution.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=156)** So I fully don't expect to see wide variance in the salary.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=160)** So this is making sense.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=163)** And let's see, in addition to the sum or the total amount of salary, let's see what our average salary is.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=171)** And this is where I really expect to see not a lot of variation.
>
> **[2:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=176)** And so the first thing we notice here is with the average, the average is printing out a number with a large number of decimal points.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=184)** And that's just because we have fractional values.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=186)** We're doing division.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=187)** And so what I'd like to do is make this a little bit more readable.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=191)** So I'm going to use the round function and I'm simply going to take the average and I'm going to take the results of the average function and apply the round function.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=203)** And with round, I put in a number that I want to round.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=206)** In this case it's the result of averaging, and then specify the number of decimal places I'd like.
>
> **[3:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=211)** So I'd like two in this case, so let's run that.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=215)** And what we see here, this is much easier to read.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=218)** So here we have an average salary around 98, 99,000, 103, 92, 103.
>
> **[3:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=225)** So again, oh, 87, so again, we're not seeing a large amount of variance here, but rather than just depend on, you know, kind of a rough look, you know, what does my eyeballing this tell me?
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=239)** Why don't we actually use some statistical functions like variants to understand how distributed the salary really is?
>
> **[4:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=250)** Well, there is a function in [[PostgreSQL|Postgres]] called var_pop, which stands for variance of the population.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=258)** And we can specify salary here and we can get a variance of this population or the entire of all of the salaries we look at.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=270)** And so here we see fairly large numbers and that has to do with the nature of how variance is measured.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=276)** So the first thing I want to do is I want to apply the round function.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=279)** So I kind of trim this down to get just two decimal points and let's run that.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=286)** And what we see here is we're really working with actually much larger numbers than salaries themselves because again, that has to do with the nature of the variance calculation.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=300)** It's actually working with like the squares, like the order of magnitude of variance is the square of what our salaries are.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=308)** Now a couple things I want to point out.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=310)** Our column names here are department_id, sum, round, and round (1).
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=316)** That's because I haven't specified any alias for this or column name.
>
> **[5:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=321)** So I am going to specify an alias by saying round, and I'm going to give it, this is avg_salary.
>
> **[5:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=332)** So this is an alias that I'm going to use.
>
> **[5:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=335)** And here I'm going to put V-A-R for variance of salary and let's run that.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=343)** Now what we see here is we're getting the same numbers back, but our column names are different.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=347)** In this case, we have average salary and variance of salary.
>
> **[5:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=351)** So variance is a statistical function that's available to us.
>
> **[5:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=356)** Typically, I don't use it a lot because it doesn't work with my intuition as well as another statistics function called standard deviation.
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=366)** And so let's look at standard deviation.
>
> **[6:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=370)** The function for that is stddev_pop for population.
>
> **[6:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=376)** And if we look at the standard deviation of salary, and let's give this an alias of stddev of salary and let's go ahead and apply the round 'cause we will almost certainly need that.
>
> **[6:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=391)** And let's apply a parameter of two to specify two decimal places and let's run this.
>
> **[6:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=402)** And now what we'll notice here is now we're seeing things where the standard deviation is like 34,000, 35,000, 32,000, 30,000 and so on.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=413)** So it's at the same scale as salaries.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=416)** That's because standard deviation is basically the square root of the variance.
>
> **[7:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=420)** So typically when we're trying to understand what the distribution of data is in a normally-distributed kind of attribute, like a salary, we oftentimes use standard deviation.
>
> **[7:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=435)** Now there are some really nice features about standard deviation that make it, you know, it was one of the reasons that we use it so much.
>
> **[7:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=441)** One is that the values are at the same scale as the column that we're analyzing.
>
> **[7:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=447)** In this case, we're analyzing salary, so we're seeing scales at like tens of thousands, maybe a hundred of thousand of dollars at the most as opposed to the square of that which we saw with variance.
>
> **[7:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=460)** The other thing that's really useful is that with standard deviation, what we can do is we can take the mean or the average and we can subtract the standard deviation and then add the standard deviation.
>
> **[7:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=473)** So for example, if we have an average salary in one department is 100,000 and our standard deviation is 30,000, we can subtract 30,000 from 100,000 and add 30,000.
>
> **[8:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=487)** And that gives us a range of 70,000 to 130,000.
>
> **[8:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=491)** Well, about 65%, 66%, 68%, somewhere in that range of all of the salaries in the department will fall within that range, within one, what we term as one standard deviation of the mean.
>
> **[8:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=507)** Now if you double the standard deviation, say, so instead of 30,000, it's 60,000 and you subtract that from 100,000 and you add it to 100,000, that gives us a range of 40,000 to 160,000.
>
> **[8:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=521)** Well, in that case, we would typically find about 95% of all of the salaries fall within two standard deviations.
>
> **[8:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=529)** And if you go out to three standard deviations, you pretty much find almost all of the salaries within three standard deviations.
>
> **[8:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=536)** So when we're working with data that has a normal distribution, that is, a bell-shaped kind of curve, then working with statistical functions like means and the variance and the standard deviation really work really well and they help us understand, give us a sense of what the shape of that bell curve looks like.
>
> **[9:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=555)** So that's why we sometimes refer to these statistics as descriptive statistics.
>
> **[9:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=561)** They describe the distribution of the data.
>
> **[9:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=564)** And again, we use them really quite often in [[Data Science]].
>
> **[9:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/statistical-aggregate-functions?u=76281980&t=569)** So working with functions like the average to get the mean or working with standard deviation of a population are functions we'll often use when we're working with data science problems and using [[SQL]] to interrogate the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Data Science]] (2), [[PostgreSQL|Postgres]] (1), [[SQL]] (1)
> **Code Identifiers:** department_id (3), data_sci (1), var_pop (1), avg_salary (1), stddev_pop (1)
> **Definitions:** is a  (2), known as (1), stands for (1), is an  (1)
> **CLI Commands:** make (2), find (2)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** select (1), sql (1)
> **SQL:** select (1)
> **Speakers:** - [narrator] (1)

#### [Grouping and filtering data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=0)** - [Instructor] I want to continue our work with grouping and filtering.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=3)** So I'm going to build a select statement and I'm going to select from employees and let's select a few things.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=12)** Let's, first of all, we'll go over to the navigator and just list the columns over there.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=18)** So let's get last name, department ID, and salary from employees.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=26)** That looks correct.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=29)** So let's run that and just make sure, oh, you know what?
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=34)** I forgot to specify the schema name.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=38)** Now let's try this again. There we go.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=42)** So what we have here is our list of employees with their department and their salaries.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=48)** Now, I might want to filter it and look for someone with just a particular name.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=52)** So let's search the date of site employees table where the last name is equal to.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=61)** Let's go with Boyd, okay, and let's run that.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=65)** And what we see here is, oh, we actually have four people with that last name.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=69)** So this is one way we can search for a specific name.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=73)** We could simply say, let's search for last name equal to whatever the last name is.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=80)** Now, what if I wanted to search for everybody that maybe whose last name began with the letter B?
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=86)** What if I wanted to do some kind of matching?
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=89)** Well, the way we can do that kind of simple kind of pattern matching is to use a percent sign, which says match any number of characters.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=100)** So what this particular criteria says is look for any last names that begin with B, and then have any number of characters after that.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=110)** Now I'm going to run this and now I'm going to explain why we got no data.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=117)** The reason we got no data is because this is saying, please go ahead and look at the last name column and list any rows where the last name is B percent sign.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=129)** But we don't want to do an exact match.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=131)** What we want to do is we want to tell the [[PostgreSQL|Postgres]] query plan builder, the thing that actually builds the steps to execute this statement.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=140)** We want it to, instead of doing a literal match for a B, followed by a percent sign, we want it to do a pattern match where it looks for a B and then the pattern that we associate with an ampersand is basically any number of characters.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=154)** Well, to indicate we want to use pattern matching instead of literal matching, we need to use the like operator instead of the equal sign.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=162)** So let's run this and see what happens.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=165)** This is much better, this is more what I was expecting.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=168)** For example, we have Boyd at the top, Boyd, Burns, Butler, another Boyd, more Burns, Butler, and so on.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=174)** So these are all B names.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=177)** So this is one way that we can search, for example, looking for names to begin with the letter B.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=184)** Now, let's suppose we want to also add as a further constraint the name has to end with the letter D, so it begins with B, there's any number of characters in between, and then there's a letter D.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=197)** Now let's run this.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=200)** And what we see here is, okay, so only Boyd fits that pattern, but this indicates that we can use a combination of literal strings like the B and the D and pattern matching indicators, like the percent sign.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=214)** Now let's do a little bit more with this, with our grouping by.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=218)** So let's say, let's maybe get rid of the... Say we don't want to match last letter D, but we want to match on the first two letters being B and O.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=228)** So we can run that and we see now in addition to Boyd, we also have Bowman.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=232)** So what we're building here are these strings, which are the series of characters that we exactly want to match.
>
> **[3:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=239)** And then these sort of more freeform pattern matching characters like the percent sign.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=245)** Now we can also add other constraints.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=249)** So we could add another condition.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=251)** We could say, and let's say we want to match where the last name is, like B-O-Y-D.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=257)** And salary is greater than 100,000.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=266)** And let's run that.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=270)** Okay, so now we have two, we have, excuse me, we have three Bowman and then two Boyds.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=275)** Now, I don't always want to have all of the conditions satisfied when we use and in a aware clause, both of the conditions around that and need to be satisfied.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=285)** If I want to list the last name, department ID, and salary of any employee whose last name starts with BO, or whose salary is greater than 100,000, then I'm likely to get a mix where I'll have some salaries below a hundred thousand, but only if the last name starts with BO, and some I will have salaries greater than a hundred thousand and the last name could be anything, doesn't necessarily start with BO.
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=315)** So let's run that.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=316)** And that's exactly what we have.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=318)** So we see one row here, Boyd, where the salary is less than a hundred thousand.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=323)** But when we see other names in here like Gonzalez and Owens and Webb, these are all over 100,000.
>
> **[5:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=330)** So we can use a combination of Boolean conditions and we can either make them, you know, all need to apply and when we want them all to apply, we use the and operator, when we want any one of them to apply, we can use the or operator.
>
> **[5:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=349)** Now we can also combine these different pattern matching and different filtering with group buys.
>
> **[5:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=355)** So for example, let's say, I want to know what's the sum of salaries, sum of salaries for all departments where the salary is greater than 100,000.
>
> **[6:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=377)** Now if I ran this, let's go ahead and run that.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=381)** If I ran this, this is going to sum up all of the salaries greater than a hundred thousand for the entire company.
>
> **[6:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=388)** So that's the answer.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=389)** That's if we look at just our hundred thousand plus salary employees and we add up their salaries, this is the value that we get over here.
>
> **[6:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=397)** Now if I want to see, well, what is that sum for each department?
>
> **[6:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=403)** I can group by department ID.
>
> **[6:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=409)** Now I want to know what the department is when I list each of these salaries.
>
> **[6:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=412)** So I'm going to go ahead and put the department ID in the list of output columns as well.
>
> **[6:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=417)** And let's run that.
>
> **[7:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=420)** And now what we see is we have our department IDs and we have the sum of all of the salaries greater than 100,000.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=428)** So this doesn't count any salaries that are maybe 90,000 or 80,000.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=433)** So basically what we're saying is gimme the sum of the salaries for all of our top earners and group them by department.
>
> **[7:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/grouping-and-filtering-data?u=76281980&t=440)** So that's what we're showing with this example query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Joining and filtering data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=0)** - [Instructor] One of the things we find pretty quickly when we're working with [[Relational Databases]] is that we often have to combine information that's stored in different tables.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=9)** And we do that from a [[Data Modeling]] perspective quite intentionally.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=14)** We split up data into different tables to help avoid what are known as data anomalies or problems that can creep into the data such as inconsistencies and how we report things.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=26)** Well, the fact that we split up related information into different tables means there will be times when we're querying that we want to combine that related data back into say, a single query.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=36)** And we're going to look at that in this video.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=39)** We're going to look at joining tables and also how we can filter on join tables.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=44)** So let's start with our go-to employee table.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=48)** So I'm going to SELECT, star, from let's from data_sci is the schema and it's the employee's table.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=60)** And again, I like to just run this regularly just to make sure I'm building this correctly as I incrementally build it.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=67)** Now what we see here, when we look at the data that comes out of the employee table, we see we have the employee_id, then we have these things called like region_id and department_id.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=77)** So we don't have any other information about the region_id in this table.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=81)** So we don't know what country it's in, what the name of the region is.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=84)** Similarly, we don't know what the department name is, but there will be times when we're generating queries that we're going to want to include that information in the results.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=94)** While the way we get that information is we perform what's known as a join.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=99)** So a join operation is something that we specify in the from clause and we use the keyword JOIN and then we specify what additional table we want to join to.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=112)** So we have employees, let's say we want to work with company_regions.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=116)** I'm just going to jump over real quick into the [[SQL]] connections area and just drop down or expand the company_regions table explanation where we can see the columns that are available.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=128)** And there are two columns available with descriptive text.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=131)** One is called region_name, one is called country_name.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=134)** So we're going to join on data.sci.employees to data.sci.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=140)** I need to specify the schema again.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=142)** And then the name of the table.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=143)** In this case, it's company_regions and I'll just take that.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=147)** Now when we specify a join, we need to tell [[PostgreSQL|Postgres]] or SQL what columns you want to join on.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=155)** 'Cause a join basically says link up two rows or two or more rows, but link up rows that are related.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=162)** Well, how do we relate things?
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=164)** In relational data modeling, we relate them based on column values and both of our employee tables and the company_region table have IDs for region_names.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=178)** So we can link up or join on and we actually use the keyword on and then specify the names of the columns we want to join on.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=188)** So in the employee's table, we have region_id and in the company_regions table, we have an id.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=202)** Now the id has the same values.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=205)** That would be the corresponding value that would be stored in the employee's region table.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=209)** So let's just run this real quick.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=213)** And what we see is we are doing a select star, so we're selecting all the columns, but now we select all the columns from both tables.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=221)** So we have columns from the employee table.
>
> **[3:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=225)** So for example, we have last name, email, start date, and so on region_id and department_id.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=230)** And then we have id with a parenthetical one after it.
>
> **[3:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=234)** So we have two different tables that we're joining to and they each have a column name with the same name.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=241)** In this case, it's id.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=242)** So we've got a different column alias put in here, but then we also see we have these other text fields, region_name and country_name.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=252)** So using a join is how we can get additional pieces of information.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=257)** So now what I'd like to do is I'd like to make this a little more streamlined.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=262)** So one of the things I'd like to do is I don't like spelling out the full table names in the on statement.
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=268)** So what I'm going to do is I'm going to alias the tables in the join clause.
>
> **[4:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=271)** So I'm going to alias data.sci.employees as e, and we're going to alias data.sci.company_regions as cr.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=280)** And I'm going to use the aliases when I reference those tables.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=286)** Now another thing I like to do is to explicitly list the columns that I'm working with.
>
> **[4:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=291)** So I'm going to go ahead and do that here.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=294)** I'm going to say that I want to, let's say we want all the columns from the employee table, but we only want the region_name and country_name from the company_regions table.
>
> **[5:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=305)** So we can say e*.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=308)** So for the table employees, we're going to get all of those columns.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=312)** And then for cr, we're going to get region_name.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=317)** And from cr, we're going to get country_name.
>
> **[5:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=321)** Now let's run this.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=324)** Now what we see is we see that we have all of the columns from the employee table, including the id, last name, start date, job title, region_id, department_id.
>
> **[5:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=334)** Those are from the employee table.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=336)** And then we only have region_name and country_name.
>
> **[5:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=339)** So we've dropped that id with the parenthetical one afterwards because we are just pulling region_name and country_name from the company_regions table.
>
> **[5:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=351)** Well, in addition to doing joins and doing it efficiently in terms of aliases and explicitly stating columns, we can also do some filtering.
>
> **[6:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=362)** So let's say I am interested in listing all the employees who are in Canada.
>
> **[6:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=368)** I can add a WHERE clause here.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=371)** Now, before, if I was working just with the employee table, I would have to like know what department_ids or what region_ids probably would be the best ones that are associated with Canada 'cause it is the country_name is a function of the region.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=384)** So I would have to know all the region_ids in Canada if I'm only working with the employee table.
>
> **[6:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=390)** But since I've joined related information from the company_regions table, I can use the other columns or the other attributes that are available in that table.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=400)** And in particular, I can use the country_name that's available and I'm going to put cr in front.
>
> **[6:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=407)** Now the only table that I'm referring to that has country_name is the company_regions table.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=413)** So I could be okay by just saying country_name, but I really like to spell out in as much detail as possible.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=421)** You know what I'm working with.
>
> **[7:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=422)** I like to make it explicit.
>
> **[7:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=424)** It's not that I would necessarily forget while I'm working today about this, but if I come back to this code in three months or six months from now, I want to make it easy on myself.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=433)** So that's why I try and spell things out as much as possible anytime I'm working with code that I think I will be using in the future.
>
> **[7:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=440)** So in this case I'll use cr.country_name and I'm going to use the equality operator and I want to look for Canada as the country_name.
>
> **[7:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=449)** So I believe I've got my syntax right there.
>
> **[7:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=452)** Let's give it a try.
>
> **[7:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=453)** Yep. Okay.
>
> **[7:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=454)** So now we have rows that we returned.
>
> **[7:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=457)** And it looks like, if you can see down here, it looks like we are looking at the first 50 of 421 rows.
>
> **[7:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=464)** And if we scroll over, we'll see we have all of our employee information and then we have region_name and then country_name.
>
> **[7:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=471)** And sure enough, country_name is all Canada.
>
> **[7:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=474)** So this is how we can use joins to add additional columns that we can use both for providing more information on our results set, but also for making our filtering a little more explicit or a little more obvious as to why we're doing it.
>
> **[8:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=488)** Now, I could have done something like list the region numbers.
>
> **[8:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=492)** Like it looks like regions five, six, and seven are in Canada.
>
> **[8:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=496)** I could say have a WHERE clause where I say WHERE region_id in and then list 5, 6, 7.
>
> **[8:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=503)** But that's not nearly as obvious to me as seeing country_name equals Canada.
>
> **[8:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=509)** So again, I want to be sort of kind to my future self who might be looking at this code several months from now.
>
> **[8:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=514)** And so definitely doing a join, it allows, again, more explicit data to make the data more obvious to somebody who might be reading it.
>
> **[8:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=523)** Because you may download and export this data set to an [[Microsoft Excel|Excel]] spreadsheet that you pass off to someone else.
>
> **[8:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=529)** Well, think about them as well.
>
> **[8:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=531)** How can you make their lives easier and make it faster for them to kind of assess what your data is trying to tell you.
>
> **[8:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=538)** So you want to think about that.
>
> **[9:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=540)** And then you also just want to make it easier on yourself as someone who is coding this and may come back and revise the code later.
>
> **[9:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=547)** So in that vein, just to really push this example, I would also change the e* 'cause I don't need to list everything that's in the employee table.
>
> **[9:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=558)** For example. I really don't need id, but I do want last_name and email, start_date, salary, and let's add job title too.
>
> **[9:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=580)** And get a comma in there.
>
> **[9:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=582)** Yeah, so now, this SQL statement is very explicit.
>
> **[9:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=585)** I'm identifying exactly which columns I want, what tables they're coming from.
>
> **[9:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=591)** And then also, I have the WHERE clause, which is fairly obvious, right?
>
> **[9:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=595)** We're not working with just some obfuscated id.
>
> **[9:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=599)** So let's run this.
>
> **[10:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=601)** And what we see here is, okay, so now we don't have any of that sort of database specific things like primary keys that are meaningless keys.
>
> **[10:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=610)** This is much more useful information for someone who's maybe particularly interested in the business domain.
>
> **[10:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=615)** So maybe somebody who works in HR and wants to identify all of the employees in Canada because they need to do maybe comply with some government regulation in Canada.
>
> **[10:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=624)** And so they need a list of all the employees in Canada.
>
> **[10:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=626)** Well this is the kind of information that would be useful in a case like that.
>
> **[10:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/joining-and-filtering-data?u=76281980&t=632)** So this just shows an example of how we can use joins to get additional data to improve the quality of the result sets that we're doing to make things more obvious and also allow us to more easily filter that data that we're working with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Data Modeling]] (2), [[Relational Databases]] (1), [[PostgreSQL|Postgres]] (1), [[Microsoft Excel|Excel]] (1)
> **Code Identifiers:** country_name (15), company_regions (9), region_name (7), region_id (6), department_id (3)
> **CLI Commands:** make (9), find (1)
> **Env Vars:** where (4), sql (3), select (1), join (1)
> **SQL:** where (4), select (1), join (1)
> **Definitions:** known as (2), is called (2), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Test an attribute for normal distribution](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-test-an-attribute-for-normal-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-test-an-attribute-for-normal-distribution?u=76281980&t=0)** - [Narrator] Okay.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-test-an-attribute-for-normal-distribution?u=76281980&t=6)** In this challenge, I want you to write a SELECT query to return the last name, email, department name for employees with salaries greater than $120,000.

> [!info]- Semantic Content
>
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Test an attribute for normal distribution](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=0)** - [Instructor] Here is the solution to the challenge.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=7)** We have a SELECT statement and we have three columns.
>
> **[0:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=10)** We have the employee last name and employee email, which is coming from the employees table.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=15)** And we've alias that in the FROM clause using e.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=18)** We also have the department name coming from a table with an alias of cd.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=23)** Well, the cd table is listed in the JOIN clause, and that's a join on the data_sci.company_departments table.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=33)** Now, because this is a join, we have to specify which columns we're going to join on.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=37)** We're going to use the department ID from the employees table and join that to the ID column of the company_departments table.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=44)** And then, finally, we have a WHERE clause where the salary is greater than 120,000.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=49)** And I've executed that.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-test-an-attribute-for-normal-distribution?u=76281980&t=50)** And so we can see in our result pane over to the right, we have a list of employees, their last name, email, and department name.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_departments (2), data_sci (1)
> **SQL:** select (1), join (1), where (1)
> **Env Vars:** select (1), join (1), where (1)
> **CLI Commands:** cd (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Data Munging with SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Reformatting character data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=0)** - [Instructor] In [[Data Science]] and data analysis, we often work with numbers, but we also often work with text and short strings.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=8)** So it's important to think about how we can use different functions in [[SQL]] for manipulating text, such as reformatting text.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=16)** So in this video, we're going to work with the company_departments table because that has a couple of text columns in there.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=24)** So let's start by just selecting all of the columns from the data side, company_departments table.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=35)** And let's just run that, make sure I got everything typed correctly.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=38)** Okay.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=39)** Yes, and what we see here is we see all of the data in the company_departments table, and we'll notice, it's all lowercase.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=46)** So if we want to list all of the department names, we can list just department_name and run that and get just one column back.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=55)** But the format of the text that we're looking at is however it is stored in the row.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=60)** Now this may be fine for, you know, we may want all lowercase in the database for some reason, but for some reporting requirement, we really want all of these department names to be uppercase.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=71)** Well, in that case, we can use the upper function and simply pass in the name of the column we want or the text that we want to uppercase.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=80)** And when we use the upper function, we'll again, get back a single column, but now everything is uppercase.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=87)** Now, sometimes, you may just want the first letter or the initial letter capitalized, and you want everything else however it normally is.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=94)** Well, in that case, we can use the initcap function and pass in department_name.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=101)** And now if we run that, we'll see only the first name is capitalized.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=107)** Now one of the nice things about the way SQL works is that you can take the results of a function and pass that in as a parameter and argument to another function.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=117)** So for example, here, we're taking department_name and then whatever else it is, but we are going to make sure the first letter in the department_name is capitalized.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=127)** Well, what if we want to then lowercase?
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=130)** So basically undo our upper initial capitalization.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=134)** We can do that.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=136)** And so what we've done is we take the department_name, we turn the first or initial letter into a capital, and then we lower it again.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=144)** So we're getting back to right where we started from.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=147)** So it's not terribly useful, but I just wanted to demonstrate how we could have a whole series of functions that take as their input, the results of other functions.
>
> **[2:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=157)** Because that can be quite handy when you want to do a whole series of operations on a string.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=163)** Now sometimes, when we work with strings, we can run into some subtle problems with white spaces.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=169)** This happens more than I would like at least in my work where I might be working with a new data set.
>
> **[2:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=176)** It might come out of maybe an older source data system that doesn't have quite the, you know, [[Data Quality]] checks that we might be used to.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=184)** So for example, let's say we're working with somebody's name.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=188)** And we want to work with, say the name Kelly.
>
> **[3:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=192)** We can for example, type SELECT Kelly.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=196)** And if we run this, this is simply going to return the [[Microsoft Word|word]] Kelly.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=200)** Now, if I put a space in front of the word Kelly and run this, I get a result back, which looks surprisingly similar.
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=208)** There's a space before the K in this case, but it looks very similar.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=212)** Like I couldn't tell if I was just looking at the result whether or not there might be an extra space there.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=217)** Well, let's test and make sure I'm actually looking at something other than capital K-E-L-L-Y.
>
> **[3:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=226)** So let's run this.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=227)** So I'm basically doing a Boolean test.
>
> **[3:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=229)** I am asserting that this string is the same as this string.
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=235)** So character for character, are these two the same character string?
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=240)** And the answer is false.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=241)** No, they're not.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=242)** That's because we've got an extra space here.
>
> **[4:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=244)** So that's throwing us off.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=245)** If we remove the extra space and then run this check, of course, we're going to get true again.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=252)** So sometimes, when we're working with strings, we want to use functions which help us trim off white space from the beginning and the end of a column.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=264)** So for example, if we use the function called ltrim or left trim, and pass in the word Kelly, and we just apply ltrim, we're going to get just Kelly back.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=279)** So let's test that and see if this is equal to K-E-L-L-Y.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=286)** And it is.
>
> **[4:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=287)** Now, if we add a space at the beginning before Kelly and run this and do an ltrim, we get a true back.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=295)** That's because ltrim will remove the extra white space.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=299)** So let's put a couple more in there.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=301)** Whoops, don't want a period for sure.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=303)** Let's put a couple more in there and run this.
>
> **[5:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=307)** And what we see here is ltrim will trim up all of the leading white spaces, whether it's one space or two or three spaces, it will remove those.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=316)** So that is one way of trimming down.
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=320)** Now let's imagine we have an extra space after the word Kelly.
>
> **[5:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=325)** So this is on the right side of the string.
>
> **[5:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=327)** So let's run that.
>
> **[5:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=329)** And now, it turns out the ltrim does not take care of the extra white space on the right side.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=336)** However, we can do what we were talking about before, which is pass the results of this function into another function.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=343)** And in this case, I'm going to use rtrim or right trim, and I want to right trim the results that I get back from my ltrim over this string that Kelly with spaces on both sides.
>
> **[5:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=357)** So now we're trimming the left side, and then we're taking the result of that and trimming the right side.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=361)** So let's see if we get a true back.
>
> **[6:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=364)** We do.
>
> **[6:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=365)** So we can do this kind of trimming both on the left and on the right to help us clean up potentially unseen or non-printing characters.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=375)** Now in addition to working with things like uppercase and lowercase or initializing capitalization and trimming off leading white spaces from the beginning and ends of strings, sometimes, what we want to do is we want to construct larger strings from component, text columns, or text strings that we have.
>
> **[6:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=395)** And to do that, we can use the concatenate operator.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=398)** So let's look at an example of how we can concatenate or join together two strings.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=404)** Let's look at the employee's table.
>
> **[6:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=407)** And from the employee's table, I want to get the job title.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=413)** And I want to concatenate it to the last name.
>
> **[6:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=419)** And this is going to be from data.sci.employees.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=428)** So the double pipe is the concatenation operator, so it just runs two strings together.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=433)** So let's run this and see what we got.
>
> **[7:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=435)** And sure enough, what we have is we have a job title, like in this case, in the first result, we have structural engineer immediately followed by the last name, in this case, Kelly.
>
> **[7:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=445)** Now what we're doing here is we're missing some kind of separator or delimiter that indicates we have, you know, the end of the job title and the beginning of the last name.
>
> **[7:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=454)** Well, one way we can fix that is to add a delimiting character, like a dash sign, and we can concatenate that to the job title and then we can concatenate the results of that concatenation operation to last name.
>
> **[7:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=469)** So we'll take job title, we'll append or concatenate a dash, and then we'll append or concatenate last name.
>
> **[7:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=475)** So let's see how that looks.
>
> **[7:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=477)** Okay, so this is better.
>
> **[7:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=478)** This is a little easier to read.
>
> **[8:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=480)** So now I can see easily that's structural engineer Kelly and recruiting manager Carr and marketing assistant Alexander.
>
> **[8:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=489)** What we can do is use the basically the double pipe operator.
>
> **[8:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=493)** Now when we work with the double pipe operator and with column names, we want to think about what happens when a column has a null value.
>
> **[8:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=502)** So let's say there might be someone, for some reason, their last name is missing and there's a null in for their last name.
>
> **[8:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=510)** What happens when we concatenate a null to the string using the pipe operator?
>
> **[8:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=514)** Well, let's see.
>
> **[8:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=517)** What we get back, the entire result of the concatenation operator is null.
>
> **[8:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=522)** It's not simply the job title, dash, and then nothing else.
>
> **[8:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-character-data?u=76281980&t=526)** You might expect that, but that's not how the concat operator works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[SQL]] (2), [[Data Science]] (1), [[Data Quality]] (1)
> **Code Identifiers:** department_name (5), company_departments (3)
> **Analogies:** for example (4), such as (1), imagine (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (2), select (1)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Extracting strings from character data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=0)** - [Instructor] Sometimes when we work with text, we want to extract a section of a piece of text or a string.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=6)** So we might want to maybe break off or take off the beginning of a piece of text or extract the end of a piece of text.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=12)** Well, [[SQL]] gives us a number of different ways to do that.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=16)** So let's start with a really simple example, and let's start with a select and then a series of letters.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=22)** So we'll start out with letters from the alphabet here at the start of the alphabet, and we'll just run this and make sure.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=27)** Yep, okay, so when we get back, when we do a select from A through K, we get a string with all the letters A through K, as we might expect.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=36)** Now sometimes we might decide, it's like, oh, let's take a subsection of that.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=42)** Well, first thing I want to do is I'm going to alias this as test string.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=46)** So before I take a subsection, let me just run this.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=49)** Okay, yeah, so there we have our alias here.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=51)** Now let's say, for our test string, I want to take a substring.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=58)** So we'll use the substring function over this and we'll specify what part of that string we want to extract.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=68)** In this case, we can specify where we start.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=70)** So the first character is character one, and we want to go for three characters.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=75)** So let's run this, and this should return A, B, C, which makes sense.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=81)** A, B, C are the first three characters.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=83)** So this is the position where we start, and that's the length of the string we want to return.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=88)** So that makes sense if we understand the purpose of each number in each of these positions.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=95)** Now sometimes, if you're not quite as familiar with SQL, or you're going to be sharing code with people who might not be as familiar with SQL as you are, you might want to use the alternative syntax where we specify from and then the starting position and then however long we want to go for.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=111)** And that would be for, in our case we're going for three characters.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=115)** So let's go ahead and run that.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=120)** Oops, excuse me, I need to remove the comma.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=124)** There we go.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=125)** So this is a little more explicit.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=127)** So we're taking the substring and it's given this string, we want to go from position one and we want to go for three characters.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=135)** So you just want to remember to remove the comma that you might have in front of the from if you did editing, like the one three like I did.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=143)** So that is an alternative way of specifying the text we want to extract.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=148)** Now, if we don't specify a for clause and we just say something like from five, that means extract all of the string starting from position five and going on, basically for the length of the string.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=163)** So start at position five and then go all the way to the end.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=166)** So that's how we can extract from the fifth character on.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=170)** So substring is really useful.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=172)** There are a couple of different ways of specifying the parameters.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=175)** You can either specify the starting position and the number of characters just as a list of numbers, like 1, 3, or you can be more explicit and say like from whatever the starting position is for the number of characters that we're interested in extracting.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=191)** Okay, so that's one example.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=193)** Let's work with the employees table, because we have some strings in there.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=197)** So let's just start with select star from data_sci.employees and yep, working right, and what we want to do is, let's look at job titles.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=215)** And where are our job titles.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=216)** Here we go.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=216)** So we've got different kinds of job titles.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=218)** So we have somebody here who's a marketing assistant, there's an [[Microsoft Office|office]] assistant three.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=224)** Okay, so let's say we want to understand more about people who have assistant in their title.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=230)** Well, one thing we could do is we could create a where clause and match where job title is like assistant.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=245)** Now we don't want to necessarily start with the [[Microsoft Word|word]] assistant.
>
> **[4:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=248)** We want to match anytime the word assistant falls anywhere within a title.
>
> **[4:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=254)** So I'm going to put a percent at the end and at the beginning.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=259)** So this says, this Boolean expression, job title like "%assistant%" that's a Boolean expression, and it'll be true when the word assistant is somewhere in the title, regardless of where it is.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=274)** So let's go ahead and run this and let's just check our job titles and what we have are marketing assistant, assistant manager, marketing assistant, office assistant three, administrative assistant, human resource assistant, I believe that will be assistant.
>
> **[4:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=291)** Let's see.
>
> **[4:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=293)** Yep, oh wait, assistant two.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=294)** So we see we seem to be matching.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=296)** This is working as we expect.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=299)** So this is useful.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=301)** This kind of pattern matching is really useful when we want to look inside of a string of text and be able to match a pattern within it.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=310)** Now I will offer this one warning.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=313)** If you are working with a very large table and you're trying to do pattern matching like this, you may run into some performance issues.
>
> **[5:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=321)** Because when we do this kind of matching where we have a percent at the beginning of our string, or we're matching a string and we have a percent sign at the beginning of the pattern we're looking at, when that's the case, we can't use indexes on that column.
>
> **[5:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=335)** So we might have an index on the job title column, which makes it, in general, very fast to look up, say all the assistant managers when we specify just quote assistant manager.
>
> **[5:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=346)** When we put a wild card, like the percent sign, that basically indicates to the query plan builder, oh, we can't use an index for this, 'cause we don't know where the word assistant will fall within the larger string.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=361)** So what you end up doing is, rather than doing an index lookup, where kind of like when you use an index in the back of the book, you see which page you'd want to go to, and you immediately go to that page, it's really fast.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=371)** Instead of doing that, we end up doing what you might do if you had to read every word in the book to see if the word assistant shows up.
>
> **[6:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=377)** And so we start at the beginning of the table and look at basically all of the values of job titles until we get to the end.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=384)** That's called a sequence scan.
>
> **[6:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=385)** Sequence scans can be relatively fast on small tables, on very large tables they can be much slower.
>
> **[6:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=392)** So just something to be aware of.
>
> **[6:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=394)** This kind of pattern matching does come with some costs when you were talking about working with very large tables.
>
> **[6:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=401)** Now another thing we can do with this kind of pattern matching is that we can derive some additional columns that might be of use for someone maybe looking at a data set.
>
> **[6:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=412)** So for example, we could select a job title, title, and we could look at this same condition we have down here in the where clause.
>
> **[7:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=424)** We can copy this and put it up here in our select statement in the list of columns or values that we're returning.
>
> **[7:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=437)** And we can treat this as a Boolean expression.
>
> **[7:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=439)** Well, it is a Boolean expression, and we can give it a name and that can be is_assistant, and this column, is_assistant, will return either true or false.
>
> **[7:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=450)** So let's run that and see.
>
> **[7:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=452)** And we're getting, okay, so all of these are assistants.
>
> **[7:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=456)** Now that's what we would expect because of the where clause, but if we remove the where clause, we should see a mix of some assistants are true and some are false.
>
> **[7:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=466)** And we're saying, yep, some are false, some are true.
>
> **[7:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=469)** So when it's structural engineer or recruiting manager, it's false.
>
> **[7:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=473)** Electrical engineer is false, but marketing assistant is true.
>
> **[7:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=476)** So we can use this kind of pattern matching to also build up other columns, which can sometimes be useful.
>
> **[8:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=484)** Again, this might not be as useful to you if you're doing ad hoc queries and you know exactly what you're looking at.
>
> **[8:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/extracting-strings-from-character-data?u=76281980&t=489)** But if you're building data sets for somebody else to work with, who's more oriented toward the business domain, you might want to use these kind of expressions like this to build up columns that are more closely aligned with the terminology that is used in the business domain, or indicate certain attributes that might not be explicit in the table, but are useful to say the end consumer of the data if you do make them explicit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[SQL]] (3), [[Microsoft Office|Office]] (2)
> **Code Identifiers:** is_assistant (2), data_sci (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** it's like (1), kind of like (1), for example (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Warnings:** warning (1), be aware (1)

#### [Filtering with regular expressions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=0)** - [Instructor] As our work with text strings becomes more complicated and the patterns we're working with are really capturing more complex business logic, it's sometimes useful to start using regular expression pattern matching, rather than using the like operator.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=16)** So let's work with the employees table again and let's work with job titles.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=21)** So let's select, and we're going to be selecting from, on the data sci employees table.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=31)** And what we will select, first of all, is the job title.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=36)** So let's make sure we have that working as expected. Okay.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=39)** Yep.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=40)** Now let's say, as we're looking through this, I see we have, here's a VP of product manager, I think there's some other VPs.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=48)** Here's VP of sales. Yeah, let's take a look.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=51)** Oh, VP of product management, I think.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=55)** Let's take a look and see if we can find all of the employees who have VP in their title.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=62)** Well, to do that, we'll use a where clause and we'll say where job title is like, and we can use VP followed by a percent sign, so to match anything afterwards.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=73)** So let's see what that gives us.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=74)** We should get, okay, we get quite a few.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=77)** Oh, but see some of these, like we have VP accounting, accounting, accounting.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=81)** So there are many rows that have a job title that match this.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=85)** What I'm really interested, though, in is just seeing the individual job title.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=90)** So I don't need to see VP of accounting more than once.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=94)** Well, for that, I can use the select distinct operator.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=98)** And when we run that, now we get each title just once.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=103)** And that's really what I want.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=104)** I want to work with just a particular job title here.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=108)** So now that we have that, now we have the distinct job titles.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=115)** Now we also noticed there were some other job titles.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=118)** I believe there were some that were started with web.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=122)** So for example, if we want to look at job titles where the title is VP or the job title is like web developer, let's put that in there.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=135)** So that's where, or job title.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=142)** Like, and now let's bring in web developers and anything else that has a job title that begins with web.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=150)** And we'll run that and we see, yeah, okay, so we have some web designers, one and three and web developers, different web developers.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=159)** Yeah, so we have a mix of web developers and VPs.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=164)** Now if the logic that you're trying to match gets more complex, you can imagine adding additional or clauses, or and clauses and things like that.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=173)** Well, at some point, it might be easier to switch from using the like operators in a whole series of Boolean conditions like this to using what's known as the similar to operator.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=186)** So let's replace like with similar to.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=191)** And when we're working with similar to, we can combine and basically search for VPs and web in one line.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=199)** And the way we do that is, we can say we want to match VP and web.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=206)** Now we're interested in starting in titles that start with web or start with VP.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=213)** So we can put the percent sign to indicate that.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=218)** Now I want to basically match either this VP pattern or this web pattern.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=224)** Well, to do that, I just simply put these into a list that are bounded by parentheses and I put a single pipe in between the two patterns.
>
> **[3:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=237)** And what this says is exactly the same logic that I had before with the or clause.
>
> **[4:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=243)** This says, where job title similar to VP percentage, or job title similar to web percentage.
>
> **[4:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=250)** But what we've done is we've reduced it to a single line.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=253)** So the logic's a little simpler.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=255)** Again, we have a list and we're going to be choosing, basically it's an or operation across each of the options in this list.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=262)** And the different options are demarcated by the single pipe.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=266)** So we have VP percent or web percent.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=269)** So let's run that and see what we get, 'cause we should get the similar list.
>
> **[4:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=273)** Oh, you know what?
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=274)** I have forgotten a critical thing, with anytime we're working with strings, and that is my quotation marks.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=282)** And let me put in the quotation marks. And that goes here.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=285)** So now the similar to operator is going to operate, using this specification, looking for rows that have the job title that match the specification.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=299)** So now let's run.
>
> **[5:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=302)** And now we get the same list that we saw before.
>
> **[5:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=305)** So with the quotation marks, and this is really critical, we have to have that because the similar two expects a string at that point.
>
> **[5:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=313)** And so that's what we have specified here is a string that searches for VP or for web, followed by any number of characters.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=324)** Now usually when I'm writing select statements, I like to use a lot of white space.
>
> **[5:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=328)** So typically I might, you know, put a space there, space there, 'cause it's easier to read.
>
> **[5:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=333)** Now what happens when we do that?
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=336)** We run into a problem. We get no data back.
>
> **[5:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=338)** And the reason is, these spaces that I added are now part of the pattern.
>
> **[5:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=344)** So this part of the specification says, match any row where the job title starts with VP, has any number of characters, and then a space at the end, okay?
>
> **[5:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=356)** None of our VP titles have a space at the end.
>
> **[5:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=359)** This part of the specification says, match any row where the job title begins with a space, followed by W-E-B, and then any number of characters.
>
> **[6:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=369)** Well, none of our job titles begin with space W-E-B, and that's why we're not getting any data.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=375)** So we have to be very careful about things like white space when we're constructing these specifications that we use with similar to, so that we have exactly what we want, which in this case is titles without spaces in there.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=389)** Okay, let's look for just VPs again.
>
> **[6:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=392)** Let's kind of simplify this thing again, and let's switch over to searching for quote VP percent and run that.
>
> **[6:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=403)** That looks good. Okay, so we're getting just the VP titles.
>
> **[6:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=407)** Now let's say I want to find, say, just like VP of accounting.
>
> **[6:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=412)** Yeah, just something that like begins with A.
>
> **[6:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=415)** I could, for example, try VP percent A. Now let's run this.
>
> **[7:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=423)** And what we're finding here is that we're not getting anything.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=428)** Well, what's going on is, our pattern is match VP, followed by any number of characters followed where the character string and job title ends in an A.
>
> **[7:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=440)** Well, none of our job titles actually match that.
>
> **[7:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=444)** What I really want to do is I'm just trying to find, you know, all of the rows where I'm going to find like, VP of accounting or VP of auditing, something like that.
>
> **[7:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=454)** Ah, so maybe if I just add a percent at the end.
>
> **[7:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=458)** So I'm looking for a VP with an A afterwards.
>
> **[7:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=461)** Well, let's run that. Okay.
>
> **[7:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=464)** Now what we realize is, oh, right, all of our VP titles also have the letter A in them.
>
> **[7:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=469)** So that's not helpful.
>
> **[7:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=471)** All right, so what I really want is I just want the VP, followed by a space, followed by an A, and then any number of characters after that.
>
> **[7:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=479)** Let's see how that works. Okay, that's finally it.
>
> **[8:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=482)** That's what I was shooting for.
>
> **[8:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=483)** I wanted to find something like that.
>
> **[8:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=486)** And so what we have here now is we are able to see that we can match a VP, followed by a space, followed by an A.
>
> **[8:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=495)** Well, what if there's, you know, some other character that might be in there like, I don't know, maybe there's a tab or some other character that we might want to match on, or not so much a tab, maybe just some other character.
>
> **[8:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=506)** Well, I could specify an underscore and that'll match on any single character.
>
> **[8:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=511)** So if you want just one character to match, we use an underscore.
>
> **[8:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=515)** If we want any particular character match, we use the ampersand.
>
> **[8:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=520)** Now what if we want to match on, say, VP followed by VP of something that starts with an A, or VP of something that starts with an M?
>
> **[8:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=530)** Well, for that, we can try VP, followed by, and then we're going to build a list.
>
> **[8:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=538)** And in that list, we're going to say either A or M, followed by, let's get rid of the percent and see what happens.
>
> **[9:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=549)** Just to say, yep, yeah, we don't match on anything.
>
> **[9:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=552)** So VP with a space followed by an A or an M, there's definitely things that match there.
>
> **[9:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=558)** But again, they don't end with that.
>
> **[9:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=560)** So there's additional characters afterwards.
>
> **[9:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=562)** So now let's run.
>
> **[9:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=564)** So now what we've done is we've matched VP of accounting and VP of marketing.
>
> **[9:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=570)** So here we are.
>
> **[9:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=572)** What we're doing now is it's similar to working with a like operator, but we're using more of a regular expression syntax, which allows us to do like lists where we can choose among the different options in a list, like starts with A, or starts with M in the second [[Microsoft Word|word]].
>
> **[9:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=588)** And anytime you want to build more complex logic around pattern matching, I would suggest looking at the similar two operator.
>
> **[9:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=597)** Now there are more things you can do with regular expressions, like specifying, oh, I want to match on digits or a certain number of characters or, you know, a number of other kinds of very specific patterns.
>
> **[10:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=607)** So I would suggest looking at the [[PostgreSQL|Postgres]] documentation for similar to, to see what other ways you can specify patterns, using this.
>
> **[10:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/filtering-with-regular-expressions?u=76281980&t=614)** But it is really a really useful and expressive syntax for describing text patterns and doing regular expression matching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[PostgreSQL|Postgres]] (1)
> **Analogies:** similar to (8), for example (2), imagine (1), just like (1)
> **CLI Commands:** find (5), make (1)
> **Documentation:** specification (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Reformatting numeric data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=0)** - [Instructor] Now sometimes we need to reformat numeric data.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=4)** So let's take a look at salaries again.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=6)** So we're going to work with select and let's select salary from the data_sci.employees table.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=21)** And actually what we want to do is let's work with the average salary 'cause we want to see different ways that we can work with values that have a fairly large number of digits in the decimal places.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=34)** So for example here, we have the average salary of around $97,433 and 54 to 55 cents, but there's a lot of digits in this calculation, which is really helpful.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=46)** It's great that we can use [[PostgreSQL|Postgres]] to do some fairly high precision calculations like this, but really oftentimes we don't need to have that level of precision.
>
> **[0:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=57)** And we have seen in previous videos how we can use the round operation to round this value.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=63)** So this should round up to 97,434 if I read this correctly and it does.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=71)** So we can use the round operation.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=73)** And remember, we can also specify a number of digits we want to round to.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=78)** So for example, we can round to two decimal places or to four decimal places.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=87)** And so we can determine what's the level of decimal point precision we'd like to have with our numeric data.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=94)** Well, in addition to round, we can also use other functions.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=98)** So let's just go back to the average for now and see what our value is.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=106)** And we're on that.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=107)** So it's 97.33, about 54.55.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=113)** So there is a function called trunc, short for truncate.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=117)** And what this does is it basically drops decimal points.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=122)** It doesn't round, it simply just eliminates them from the numbers.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=125)** So let's run this and I need to spell that correctly.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=130)** There we go, so it completely just drops off the number of digits.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=135)** Now, we could also specify with trunc some number of digits to truncate two.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=141)** And here you'll notice that it's 97433.54.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=146)** So we're truncating everything after the two decimal digits.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=151)** We're not rounding, we're just truncating.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=153)** Now, typically I just use round, but there may be reasons, like there might be some business logic rule that requires you to use truncate instead.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=161)** There's also the ability to truncate farther out.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=164)** So for example, if you wanted to truncate to four decimal places, you could do that as well.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=171)** Now there is also a function called ceiling or ceil, which basically goes up to the next largest whole number.
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=180)** And so for example, this is going to 97434.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=184)** So when you round and the decimal value of a number is greater than 0.5, then that's the equivalent of using the ceiling function.
>
> **[3:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=194)** If the decimal value is less than 0.5, that's the equivalent of using the trunc value.
>
> **[3:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=200)** So the functions that we typically use when we're reformatting numeric data are rounding.
>
> **[3:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=207)** For rounding the number, trunc, for just truncating off some decimal digits, and the ceiling for going up to the next largest number.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/reformatting-numeric-data?u=76281980&t=217)** Those are typically the functions we use for that kind of numeric reformatting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Versions:** 0.5 (2), 97.33 (1), 54.55 (1), 97433.54 (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1), short for (1)
> **Code Identifiers:** data_sci (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Fuzzy string matching](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=0)** - [Narrator] When we're working with texts, sometimes we want to be tolerant of small variations in a text.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=6)** For example, if we're using single words and we're trying to match on those, maybe there's a typo and maybe there's an extra S for example, like at the end of the [[Microsoft Word|word]] [[PostgreSQL|Postgres]], well, if somebody has two S's at the end of Postgres versus one, do you want to be able to match on that column?
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=20)** Well, sometimes the answer's going to be no, absolutely not.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=23)** Those are two distinct values.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=24)** But then there are other use cases that have different requirements, and you might want to be tolerant.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=29)** But when you want to be tolerant about how you match on texts, it's helpful to use some functions that are available in a Postgres extension known as fuzzystrmatch.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=41)** And to use this, we need to enable the extension.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=45)** Now, extensions in Postgres are like libraries of code that are available with the Postgres code, but not necessarily installed by default.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=52)** And so what we do is when we want to use an optional extension is we use the create extension command, and we specify the name of the extension we want to create, and in our case we want to use the fuzzystring, or fuzzystrmatch extension.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=71)** So now I'm going to run this, and what we'll see here is if the fuzzystrmatch is already installed, and it's already installed in my database, we get an error.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=80)** Now we can use an optional clause, create extension if not exists fuzzystrmatch, and we run that, it simply gives us a notice down here in the [[SQL]] console, notice that the fuzzystrmatch extension already exists.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=97)** So if I had other operations, other commands in this file, I wouldn't have errored out completely.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=104)** So we have the fuzzystrmatch extension installed, and what that means is we now have three functions available to us that are, actually more than that, but ones that we're going to talk about today are three functions we're going to work with, and one is called Soundex.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=120)** Let's take a look at what Soundex does.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=123)** So let's SELECT the Soundex of a word like Postgres, and let's run this.
>
> **[2:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=130)** And what we see is that the Soundex function converts a string like Postgres into a four-character code, in this case P232.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=142)** So that is the Soundex value.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=145)** The idea behind Soundex is that we map a string into a code, and the mapping from a string to the code is such that two words that sound very similar are going to have matching Soundexes.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=160)** So for example, let's create another Soundex and this time let's make this Soundex on Postgres, but with three S's at the end.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=172)** So if we run this, we see both Soundex, oh and actually Soundex 1.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=179)** Let me just put some alias columns in here.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=182)** Let's do p1 for Postgres 1, p2, there, and run that.
>
> **[3:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=189)** And so our two Soundexes are the same.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=193)** Now, let's see, if we were to evaluate a Boolean, and we evaluate it, is this string equal to this string?
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=212)** Well, we run that, as we would expect, we get a false.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=216)** However, if we copy this same thing and then, and we'll make this Boolean 1, this same, but now instead of matching the string, we're matching on the Soundex of these two terms.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=240)** There we go.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=241)** And now if we run, what we see is we have the two Soundexs are the same, the two strings are different, but our Soundex Boolean in this case, I forgot to put an alias here, but our Boolean, our second Boolean is true.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=258)** So this is how Soundex works.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=259)** It basically, it looks at the beginning characters, like the first four characters and determines how similar or what a value is for a particular string.
>
> **[4:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=271)** So this is useful if we want to know, can we map, you know, a term or a string into a Soundex value?
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=279)** And if we do that for a couple of different terms, are they equal?
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=282)** Well, sometimes we might want to know, well what's the difference?
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=286)** Like maybe, you know, how big is the difference if a sound isn't exact?
>
> **[4:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=291)** What if it's close?
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=292)** Well, if that's the kind of way we want to think about a problem, we can use a different function from Soundex.
>
> **[4:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=298)** We'll use the difference function.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=301)** And this is part of the extension.
>
> **[5:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=303)** And if we take the difference between Postgres and Postgres with three S's at the end, and we run that, we see that we have a difference of 4.
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=320)** And the value of the difference function ranges from 0 to 4.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=324)** 0 means there's no matches in the Soundex of the two values, of the two terms, A 4 means all four values in a Soundex are the same.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=337)** So let's experiment a little bit here.
>
> **[5:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=339)** And now let's do another Soundex of Postgres, that's our baseline.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=348)** And now let's change the first character and do a Soundex of, let's change the P to a K, let's run those values.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=361)** Oh, I forgot my comma.
>
> **[6:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=365)** And what we see here is our Soundex value of Postgres is P232.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=371)** Our Soundex for Postgres with the P replaced by K is K232.
>
> **[6:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=378)** And now what we notice here is the difference, oh, I forgot to change this.
>
> **[6:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=383)** So we know that there's no difference between those.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=386)** But if we use Kostgres there and now run that, what we see here is that the difference is now 3.
>
> **[6:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=397)** That's because there is three values that are the same in the two Soundexes, there's 232 is the same, but the P is different in the second Soundex where we have a K.
>
> **[6:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=410)** Now what this tells me is that Postgres and Postgres with a K, they don't sound the same, but they're fairly similar.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=421)** And the difference, there's only a difference of 1 in this particular metric that we're using.
>
> **[7:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=426)** So if you are willing to tolerate some level of difference between the Soundex even, then a difference, so for example, you might say, as long as difference is 3 or 4 I'm going to accept that as a match.
>
> **[7:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=440)** Or maybe if you're really tolerant, you might say, oh, if it's within 2, 2, 3, or 4 is the difference value, then I'll accept that as a match.
>
> **[7:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=447)** So you can experiment with your data and see what works for your particular use case.
>
> **[7:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=453)** So difference again works with Soundex.
>
> **[7:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=456)** So, and it just tells you how different are two Soundexes, and that's useful.
>
> **[7:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=461)** If you're moderately tolerant and you want the Soundex to be exact, you can just use Soundex.
>
> **[7:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=466)** If you're willing to let a little bit of variation in the Soundex value kind of creep into your data and you're fine with that, then using Soundex with difference is useful.
>
> **[7:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=477)** Now another function which can be useful, especially when you're working with like really longer pieces of text and you're more tolerant, and you want to say, I want to kind of specify, like, how many different changes I need to apply to one word like Postgres.
>
> **[8:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=493)** If I do two or fewer changes, can I get whatever the second value is?
>
> **[8:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=497)** I might be tolerant.
>
> **[8:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=498)** Or if I have to make 10 changes, or 20 changes to some really long string, I might be tolerant of that.
>
> **[8:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=504)** Well, for that we can use the levenshtein function, which is L-E-V-E-N and S-H-T-E-I-N.
>
> **[8:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=514)** I want to make sure I spell that correctly.
>
> **[8:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=515)** So let's look at the results of the levenshtein function when we apply that to Postgres with one S, and well, we'll start, we'll just make an exact match.
>
> **[8:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=528)** And if we run that we see 0.
>
> **[8:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=531)** So there are zero changes that we need to apply to this term to get this term.
>
> **[8:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=538)** Now a change could be an addition, a deletion, there's different kinds of operations, but basically I don't have to do any operations on one term to get to the other term.
>
> **[9:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=549)** So that means there's an exact match.
>
> **[9:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=551)** Well, let's see if we change this P to a K, and run that.
>
> **[9:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=558)** Well, now we see we have to make one change.
>
> **[9:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=560)** So if we make one change, we change the K to a P, we've got an exact match.
>
> **[9:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=566)** Now maybe we've got to make a lot of changes.
>
> **[9:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=569)** So maybe we're typing in something like [[MySQL]] and we run that.
>
> **[9:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=574)** We see that we actually have to make eight changes.
>
> **[9:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=577)** We have to eliminate all six of the letters My in MySQL and add two more.
>
> **[9:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=582)** So that's an example of how we can use levenshtein to help us understand, you know, how close different pieces of text are in terms of matching character for character, and how different they are.
>
> **[9:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=596)** And we can use those measures of difference to allow us to kind of set our own tolerances for how much we want to match.
>
> **[10:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=605)** Now before we go, I do want to mention there are some limitations to Soundex, especially if you're using multi-byting coating like UTF-8.
>
> **[10:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=614)** Also, sometimes with non-English languages, Soundex may not work as well.
>
> **[10:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/fuzzy-string-matching?u=76281980&t=619)** Well, the fuzzystrmatch extension also has an additional Soundex function called the Daitch-Mokotoff Soundex or DM Soundex, and that works well with other languages like multi-coding, multi-encoded character strings like UTF-8, or if you're working with some non-English language text, you might want to look into using that function as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (18), [[Microsoft Word|Word]] (3), [[MySQL]] (2), [[SQL]] (1)
> **CLI Commands:** make (9), mysql (2)
> **Env Vars:** p232 (2), utf (2), sql (1), select (1), k232 (1)
> **Analogies:** for example (4)
> **Definitions:** known as (1), is called (1)
> **SQL:** select (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Prepare a data set for analysis](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980&t=5)** - [Instructor] In this challenge, I'd like you to answer a few questions.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980&t=8)** First, what function could you use to reformat a number from having eight decimal places to having two decimal places?
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980&t=15)** Also, what operator would you use to filter using regular expressions?
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-prepare-a-data-set-for-analysis?u=76281980&t=19)** And then finally, what function would you use to measure the difference in characters between two strings?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### [Solution: Prepare a data set for analysis](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980&t=5)** - [Instructor] Okay, the solution with regards to the question of what function could you use to reformat a number from having eight decimal places to two decimal places?
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980&t=13)** We could use either the ROUND or the TRUNC specifying two as a second parameter.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980&t=17)** With regards to what operator we can use to filter using regular expression, it's the similar to operator.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-prepare-a-data-set-for-analysis?u=76281980&t=25)** And then finally, the Levenshtein function is a function we would use to measure the difference in characters between two strings.

> [!info]- Semantic Content
>
> **Env Vars:** round (1), trunc (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Filtering and Aggregation

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the HAVING clause to find subgroups](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=0)** - [Instructor] Now we're going to turn our attention to filtering and aggregation.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=4)** Now, sometimes when we're working with data we want to work with subgroups and we want to make decisions about what to include in our result set based on say values or aggregates about those subgroups.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=16)** So, we're going to work on some examples of that and see how we can do that.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=19)** So, first of all, how about if we work with departments and employees?
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=25)** And in particular, let's select the number of employees in each department.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=30)** So, I have a SELECT statement.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=32)** And I know I'm going to want to look up department names, so for that I'm going to use the company_departments table.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=38)** And I know I'll alias that as cd.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=41)** And I'm going to want to list by department name.
>
> **[0:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=47)** I'm going to want to get the count of rows, and I'm going to want to pull this data from two different tables in the data_sci schema.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=60)** And they are data_sci employees, and that's going to be aliased as e.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=70)** And I'm going to be joining to another table in data_sci called company_departments, and that's going to be aliased as cd.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=81)** And now of course I need to specify the ON clause.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=85)** And so, we're going to specify the column we're going to look for in the employees table is department_id, and the column we're going to look for in the company_departments is simply id.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=99)** Now, what I need to do is I want to have a GROUP BY 'cause I have an aggregate, so I'm going to GROUP BY, and I'm going to group by the department name.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=107)** So, that's cd.department_name.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=111)** And that looks correct, so I'm going to go ahead and run this.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=115)** And what we have is a list of different departments, and it's just in a fairly random order.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=120)** And we have the count, which is the number of employees in each department.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=126)** Well, okay, so that worked well so far.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=129)** Why don't we add an ORDER BY clause so that we can see this list in alphabetical order by department name.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=138)** And so, for that I'm going to add an ORDER BY, and I want to order by cd.department_name and we'll run this.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=148)** And so, we see it's basically in alphabetical order, A through T.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=153)** Now, I could also order this by count, so I can pick one of the other columns that we're outputting and I can order by that.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=164)** And so, let's order by that and see what happens.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=168)** So, now we see ah, music is at the top, that has the lowest number of employees with 36.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=174)** Clothing and other are at the top with 53 and 88.
>
> **[2:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=177)** So, what I'm seeing here is that I am able to order by this ascending order by the number of employees.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=186)** But let's suppose I want to see the top departments in terms of count of employees.
>
> **[3:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=190)** Well, I can order by count and specify DESC for descending.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=195)** And when I do that and I run I see now the order is flipped.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=199)** So, now the departments with the most employees are at the top of the list and the departments with the fewest employees are at the bottom.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=206)** So, that's how the descending works.
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=208)** Now, you can also, if you really want to be explicit, you can say ASC for ascending.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=212)** And if you run that you get the default behavior.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=215)** So, depending on what you want you can have ASC, or you can just leave it out.
>
> **[3:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=219)** ASC is the default.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=221)** Now, another thing you can do with ORDER BY is you can use a reference to the position in the list of selected columns.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=230)** So, for example, if you want to order by department you could say ORDER BY one and run that.
>
> **[3:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=237)** And that will list in alphabetical, ascending order by department name.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=241)** You could also specify descending department name, and now we should have toys at the top.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=246)** Yep, toys and tools, sports and so on.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=249)** Now, if you want to reference count, which is the second column in the list of selected columns, we can just change that to two.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=257)** And this will be in descending order.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=259)** And we can also make that ascending by just running just two.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=264)** So, you can use this short notation.
>
> **[4:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=267)** That's convenient, again, if you're doing like ad hoc stuff.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=270)** I really don't like to do that when it's code that I'm saving because somebody, especially if it's a complex query, might not notice an ORDER BY is relative to column order.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=280)** And they might add a column somewhere in the SELECT statement up at the top.
>
> **[4:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=283)** So, I typically prefer to be very explicit about the ORDER BY column.
>
> **[4:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=289)** So, let's change this back to the department_name, and let's make sure that runs correctly.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=295)** Yep, okay, good.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=296)** Now, so we've seen how we can reference a column in the row, like department_name, in the ORDER BY clause.
>
> **[5:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=304)** We've also seen how we can use an aggregate like count in the ORDER BY.
>
> **[5:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=310)** Well, now let's see how we can filter.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=312)** Well, let's say we know we can put department_name in a WHERE clause.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=317)** So, for example, we could have a WHERE clause here and filter on some particular department name.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=323)** So, we could filter where department_name, WHERE cd.department_name is equal to, and then we could put something like baby, there's a baby department.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=336)** So, let's run that.
>
> **[5:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=338)** And we see we're getting just the baby.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=340)** Okay, so that works, that's very similar to the ORDER BY.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=343)** But now let's put a WHERE count(*) is greater than 50.
>
> **[5:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=350)** Now, I'll tell you now it's not going to work, and I want to show you what kind of error messages we get.
>
> **[5:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=356)** Well, this doesn't work because we get an error, aggregate functions are not allowed in the WHERE clause.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=361)** Well, and that makes sense because let's think back to what we use the WHERE clause for.
>
> **[6:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=365)** The WHERE clause allows us to tell [[PostgreSQL|Postgres]] which rows we want to include in our result set, or whatever operation we're doing.
>
> **[6:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=374)** So, before we even have a count we have to decide which rows are going to be included in the count.
>
> **[6:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=380)** So, aggregates just logically don't make sense in a WHERE clause.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=386)** But that's okay because there's another clause that we have available to us called HAVING.
>
> **[6:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=393)** And HAVING is basically a clause which allows us to specify an aggregate like the count and specify some condition on that, like greater than 50.
>
> **[6:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=405)** So, now let's run this.
>
> **[6:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=407)** And what we see here is these are the departments that have greater than 50 employees.
>
> **[6:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=415)** And so, we use the HAVING clause anytime we want to basically filter a result set.
>
> **[7:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=422)** And in cases where that result set use is aggregating and we're producing aggregates in the output, and we want to use the results of the aggregation as part of our criteria for deciding what to include in our output.
>
> **[7:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=436)** So, those are some different ways that we can filter using aggregates.
>
> **[7:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-the-having-clause-to-find-subgroups?u=76281980&t=441)** So, really the HAVING clause is really quite powerful when you want to be able to filter based on the results of aggregation functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Env Vars:** order (9), where (8), having (4), asc (3), select (2)
> **SQL:** order by (9), where (8), having (4), select (2), group by (2)
> **Code Identifiers:** department_name (7), company_departments (3), data_sci (3), department_id (1)
> **CLI Commands:** cd (5), make (4)
> **Analogies:** for example (2), similar to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### [Subqueries for column values](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=0)** - [Instructor] One of the nice things about the way [[SQL]] is designed is that it allows you to have SELECT statements within SELECT statements, which can be really useful for creating a kind of modularized logic and allowing us to break down business logic into components which are easy to understand and relatively easy to implement.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=22)** Now, in SQL, there are a few different places in a SELECT statement where you can use another SELECT statement.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=30)** You can use that in the list of columns that we're selecting, we can use it in a FROM clause, and we can use sub-statements or subqueries in where clauses as well.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=42)** So we're going to take a look at how we can use a subquery within our list of columns that we want to select.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=51)** So for this, what I'd like to do is I want to be able to list out employees in each department, their salary, and then also the average salary of people in their department.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=63)** So within a single department, what is the average?
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=66)** So let's see how we might go about doing that.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=68)** So the first thing I'm going to do is SELECT.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=72)** I know I'm going to be pulling from the employee table, so I'm going to pull employee, e.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=76)** And let's go with last name.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=79)** And let's look for the salary, of course.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=83)** We'll want that.
>
> **[1:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=86)** And let's also get the department ID.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=91)** And now what I want, and I'll select this from data_sci.employees.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=102)** And what I want now is basically I want to create something that's going to give me the department average.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=110)** And so for that, I'm going to create another SELECT statement, and I'm going to select the average salary of something.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=119)** I'm building up the logic here incrementally.
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=121)** So I know I'm going to be working with the employees table.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=125)** So there's going to be a from data_sci.employees.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=132)** Okay, but wait a minute, can we reference the same table twice within a single SELECT statement?
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=138)** And the answer is yes.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=140)** But we need to be careful about our aliases because we need to be able to distinguish which reference to employee table we're talking to.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=147)** Are we talking when we're doing something like averaging the salary here?
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=151)** Are we using the employee table that we're referencing here in the subquery or the outer query?
>
> **[2:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=157)** To be able to distinguish between those, we need to have different aliases.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=161)** So instead of using just the letter e for the employee table, I'm going to use e1 for the outer table and e2 for the inner table.
>
> **[2:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=171)** And you can use any naming convention you like.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=173)** This is one I typically use.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=175)** I just suggest you be consistent about it because, again, it just helps with making code easier to read.
>
> **[3:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=183)** So now, right now, this SELECT statement will return the average salary for employees across the entire company.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=191)** I want to limit where we're looking in this where clause to just the employees in the same department as the employee whose last name and salary and department ID we're currently looking at.
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=205)** So this is basically, this set of data is going to change as we go row by row.
>
> **[3:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=210)** And the last name will change, the salary will change.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=213)** However, this SELECT statement, each time we have a new row, it will be doing a new calculation.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=222)** And it will be based on taking into account this employee's department ID.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=228)** So one of the things I'll need to do is change the alias here from e to e1.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=233)** So this is always, I'm referring to, when I'm talking about last name, salary, department ID here, I'm referring to this table.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=242)** When I'm calculating an average, I want to take it from the data_sci.employee.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=247)** And alias to that is e2.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=249)** But I only want to look at one department's worth of data.
>
> **[4:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=254)** So I'm going to have a where clause, and I'm going to have where a department ID is equal to, what?
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=262)** Well, I want this e2, this second table.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=266)** So as I'm calculating the average, I only want to look where the department ID is equal to the department ID of the person referenced in the e1 instance.
>
> **[4:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=282)** So e1.department_id.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=286)** So let's take a look at what we're doing here.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=288)** We are querying the employee table for last name, salary, department ID.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=292)** Really straightforward.
>
> **[4:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=295)** We're calling or aliasing that employees table, e1.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=301)** So each time we're walking through the list of each employee, we're doing that with a reference to the e1 table.
>
> **[5:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=309)** We're also running a subquery.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=312)** So for each row that we encounter, we're going to run this subquery, and we're going to calculate the average salary from what happens to be the same table.
>
> **[5:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=321)** It's the data_sci.employees table.
>
> **[5:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=324)** So we're working with the table in two different ways, however, we're synchronizing them or we're coordinating them or correlating them by making sure the department ID of all the rows that we're averaging is the same as the department ID of the person we're collecting information about in our outer query.
>
> **[5:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=344)** So let's go ahead and run this and see what kind of results we get.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=348)** Oh, I forgot to put round in for the average of salary.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=353)** So let me just put that in real quick.
>
> **[5:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=357)** And we'll go to two decimal places.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=360)** And I'm going to rerun that.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=363)** And so what we're seeing here is, so here's the department ID.
>
> **[6:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=367)** There's Kelley, Carr... Kelley, Carr, Alexander.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=371)** The salary is different, but Kelley is in a different department from Carr and Alexander.
>
> **[6:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=377)** Carr's, for example, Carr, Alexander are in Department 1.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=384)** They both have the same average salary.
>
> **[6:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=387)** Kelley is in a different department.
>
> **[6:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=389)** Kelley is in Department 6.
>
> **[6:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=390)** They have a different value.
>
> **[6:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=392)** So depending on which department you're in, you're going to have a different average.
>
> **[6:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=397)** So let's just see.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=398)** Here, we're splitting, here's someone in Department 1.
>
> **[6:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=401)** Here is someone in Department 2.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=404)** Looks like they actually have the same salary.
>
> **[6:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=407)** That's just a coincidence because here's Department 3.
>
> **[6:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=411)** Department 4 has 103.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=413)** So we can see different departments have different averages in most cases.
>
> **[6:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=419)** And, again, what we are doing here is we're using a subquery to help us calculate a new column.
>
> **[7:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=427)** So this is one way we can use subqueries to build fairly complex logic.
>
> **[7:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=433)** Now, I will say this isn't the only way to calculate this, but using a subquery is often a good first way to do this, and oftentimes it will be quite performant.
>
> **[7:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=445)** There may be times when there are more efficient ways to do things, but that's really more of an advanced topic.
>
> **[7:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-for-column-values?u=76281980&t=450)** Here we're focused on, how do we capture the logic of a particular business problem, in this case, comparing the salary of an individual with the average for that person's department?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** select (9), sql (2)
> **SQL:** select (9)
> **Code Identifiers:** data_sci (4), department_id (1)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Subqueries in FROM clauses](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=0)** - [Instructor] We can use subqueries and FROM clauses, and that's really useful when we have some complex logic that we want to build up and apply to generate basically a set of rows that we then want to do another SELECT statement over.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=14)** So let's look at a simple example, looking at the average salary of employees.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=19)** So we'll start with SELECT, and we're going to select the avg(salary).
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=25)** And before I forget, I'm going to add the round function and round this to two decimal places.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=35)** And I'm going to select this from data_sci.employees.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=46)** Let's just run that to make sure I have that correct.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=48)** Yes, okay, so we have the average salary.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=52)** Well, now let's assume I only want to get the average salary of employees who earn over $100,000.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=59)** Well, instead of selecting from the data_sci.employees table directly, I'm going to build a subquery here where I select all of the columns from the data_sci.employees table, and I'm going to specify a WHERE clause.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=81)** And so I'm going to say WHERE salary > 100000.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=91)** Now, if I try to run this, let's go ahead and run this and we'll see what happens, we see that we get a different value here.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=101)** So, for example, rather than averaging over all of the employees, we're averaging only over those who earn over $100,000.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=111)** So we're getting a different average here.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=116)** Now, you might think, "Well, why do we have to do this because couldn't we just use a WHERE clause?"
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=120)** And we could, this could easily be written as the following.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=124)** Actually, I'll just copy this and then make a new version.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=131)** And we could select from data _sci where salary > than 100000.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=144)** So these two queries are logically equivalent.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=149)** So this is typically the way we would normally do it, but I wanted to just show this example where we do have a subquery here because you may have a lot more complex business logic that you want to apply as you build up to generate your final result set.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-from-clauses?u=76281980&t=166)** So sometimes when we have that complicated logic, it makes sense and makes for a more readable query if we isolate some of that logic into a subquery in the FROM clause.

> [!info]- Semantic Content
>
> **SQL:** where (3), select (2)
> **Env Vars:** where (3), select (2)
> **Code Identifiers:** data_sci (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Subqueries in WHERE clauses](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=0)** - [Instructor] Using a subquery in a where clause can be helpful when we want our filtering conditions in the where clause to be based on some property that we can extract or identify using a select statement.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=14)** So let's take an example where we want to find the department that has the employee who has the maximum salary.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=23)** Now it's possible there may be multiple employees with the max salary.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=27)** So let's have a query that selects the department, the department ID from data_sci.employees.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=42)** Now I want to select where somehow the maximum salary.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=48)** I want to find the maximum salary of everybody in the company.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=52)** Well, to do that I would use a select statement, and I would write a select max salary from data_sci.employees.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=63)** And that looks pretty straightforward.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=64)** Yeah, that'll find the max salary.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=66)** Now the problem is we have, again, two references to the employees table.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=71)** So this is an inner query, so I'm going to use the convention E followed by two for that.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=77)** And I will alias the outer query as E one.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=81)** And what I want it to do here is, now what I'm doing is I'm in a where clause, well, where clauses work with Boolean conditions.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=90)** So something has to evaluate to true or false.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=93)** And so I want this to evaluate to a true or false based on whether or not this is equal to the employee that we're looking at in the outer query.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=104)** What's their salary?
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=107)** Well, if their salary is equal to the max, whatever that is, I don't necessarily know exactly what the maximum salary is, but this select statement will tell me what it is.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=116)** And if the current employee's salary is equal to that, then we're going to return that department ID.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=123)** So let's go ahead and run this and see how this works.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=125)** And what we see is, ah, there's only one department, so department 10 has at least one employee with a maximum salary equal to the maximum salary of anyone in the company.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=137)** Now we could also do joins to look up things like the department name and other things, but this is just a, kind of a typical example of how we use subqueries and where clauses.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/subqueries-in-where-clauses?u=76281980&t=148)** And the thing to remember about using a subquery in the where clause is we always want it to be used in a way that evaluates to a Boolean because we need that kind of Boolean condition to be a predicate for the where clause.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Identifiers:** data_sci (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using ROLLUP to create subtotals](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=0)** - [Instructor] When we work with aggregates, we can use the aggregates, say, to get the totals, maybe the average or some sums or some counts across an entire table.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=11)** Or we have seen, we can also use the group by expression or the group by clause in the select statement to apply those aggregates to subgroups within, say, a table.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=24)** So for example, we could maybe group by a department name to see the count of the number of employees within each department.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=32)** Well, [[SQL]] and [[PostgreSQL|Postgres]] actually has another operator we can use called roll up, which gives us a third way of working with aggregates.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=42)** And roll up allows us to do sort of like sub aggregates in a hierarchical fashion.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=49)** So for example, in our data model, we have company regions, and these regions are part of countries.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=58)** So we could, for example, with roll up, get our total number of employees by region and then also get a total count by country and then also a total count by the whole table of employees.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=73)** So that's what the roll up operator does.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=75)** So let's take a look at that and we'll start by looking at a way we've typically used, group by with a single subgroup.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=84)** So let's say I want to know the count of employees by region.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=89)** So I'm going to select, I wanted to work with regions, so I know I'm going to work with the country regions table.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=95)** So I'll use CR 'cause that's how I alias company regions.
>
> **[1:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=99)** And I want to know the country name.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=102)** And I also want to know the region name.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=107)** And I'm interested, the metric I'm interested in, or the aggregate I'm interested, is the count of the number of employees.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=116)** Well, I know I'm going to have to work with the employees tables, and I typically alias that with an E.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=120)** So I'll count the number of rows in the employee table, and I'm going to select this from the employees table in data sci.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=131)** So again, data sci is the schema, employees is the table.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=136)** And I'm going to alias that as E.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=139)** And I want to join this to the company regions table, which is also in the data sci schema.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=151)** And that will be aliased as CR.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=154)** And then of course, I need to specify my on clause.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=158)** And the columns we're going to join on are the employee's region ID and the company region's ID.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=170)** Now also, I want to group by the country name
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=178)** and the region name.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=182)** And that looks correct.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=184)** Let's run that and see what we have here. Yep, okay.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=187)** So what we see here is we have a total of seven rows, and we have three rows are for regions in Canada, Quebec, British Columbia, and Nova Scotia.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=196)** And then we have four regions in the United States, northeast, southwest, northwest, southeast.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=203)** And we have a subtotal for each region.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=209)** Now, what I'd also like to know is, well, what if I want to know, well, what are the totals in Canada and the United States?
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=217)** Now could write another query for this, or I could use the roll up operator.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=222)** And we apply the roll up operator in the group by clause.
>
> **[3:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=226)** And it's really simple to use.
>
> **[3:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=227)** We simply go into our group by clause, add the term roll up, and then provide a list of the columns we want to roll up by.
>
> **[3:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=238)** And so what this specifies is basically a hierarchy.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=241)** The top of the hierarchy is going to be country name and then followed by country region.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=247)** So we're going to group by country region and do a account of employees.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=251)** Then we're going to group by country name and do a count by country name.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=257)** Now let's run this.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=258)** This is not going to be exactly what we want, but let's just run it and see.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=262)** And what we see here is we have some new rows that were inserted.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=266)** For example, here is a subtotal for USA, here is a subtotal for Canada.
>
> **[4:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=271)** Here is a total for the entire set.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=274)** But obviously this is not in the right order, or at least it's in an order.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=279)** It's not the order I would like.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=280)** So I'm going to add an order by clause where we order by the country name and the region name, and let's run that again.
>
> **[4:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=293)** Let's get things in an order that's a little more fit for what I'm looking for.
>
> **[4:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=297)** There we go.
>
> **[4:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=298)** So what we see now is, what the roll-up does, is it does the standard kind of group by operation that we expect, but it also inserts additional rows.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=306)** So now we have a row with a subtotal for the number of employees in Canada.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=311)** So we roll up from region into country.
>
> **[5:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=314)** We do the same thing with USA.
>
> **[5:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=316)** We roll up from the regions in the United States into a total for the United States.
>
> **[5:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=322)** And then we have a roll up for the entire data set, for the entire result set, which is the total of all employees across all regions, which means across all countries or both countries.
>
> **[5:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=335)** So this is a really useful feature when you're generating data, say for a final report, maybe you're producing it or you're exporting this data to a spreadsheet.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=345)** A roll up can be really useful.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=347)** I will say a roll up is what's known as a non-relational feature of SQL.
>
> **[5:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=353)** And what that means is it produces an output that doesn't necessarily fit well in other relational operators.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=361)** So for example, sometimes we use subqueries.
>
> **[6:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=365)** And subqueries, as long as they don't have a roll up or other non-relational operator in there, will return a set of rows or a set of pupils in relational database terminology.
>
> **[6:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=377)** It'll return a set of pupils or a set of rows that we can then use as the source for other operations, like we could do selects over it.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=386)** That's not the case when we're using a roll up, or at least we could run into unexpected behaviors because roll up is injecting things that we don't necessarily see when we're doing relational operators.
>
> **[6:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=399)** So again, roll ups are kind of a non-standard operator in SQL in that it's injecting things that we don't normally have.
>
> **[6:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=408)** So typically we save the roll up or other non-relational features to the last process we're working on.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=416)** So we might have a whole bunch of subqueries and other operations we do.
>
> **[6:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=419)** But the last thing we do, that can include a roll up, assuming we're just generating a data set that we're going to then either use in a report or export.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=428)** But you just want to be careful using roll ups to make sure you don't use them, say inside a subquery, because you probably get something unexpected in terms of the result, your final results.
>
> **[7:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-rollup-to-create-subtotals?u=76281980&t=439)** But that said, roll ups are super useful for cases like this where we actually want to have these embedded subtotals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** sql (3), usa (2)
> **Analogies:** for example (5)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Using CUBE to total across dimensions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=0)** - [Instructor] When you're working with data sets like we have been, we see that there are a lot of different ways of grouping data.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=7)** So in our example dataset, we could group by country name or region and department name.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=13)** And there are many different combinations that we can look at.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=17)** Now, there is another non-relational operator called Cube, which is really useful for data exploration when we want to just get a feel for, what are the different possible combinations of different dimensions.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=30)** Dimensions is another term for a column that we use for grouping data by and then applying aggregates.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=36)** So let's think, for example, if we want to see different combinations of country name, region name, department name, and count employees by that, how we might be able to do that and how we could use this cube operator to help us with that.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=49)** So the first thing we're going to do is, write a pretty sizable select statement that joins across three different tables, employees, company regions, and company departments.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=64)** So I'm going to hold up on what columns I'm going to select that I'm going to select from, and now I'm going to build my from clause.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=71)** So I want to select from, of course, data sci, employees, and we're going to join.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=82)** So we'll first join two company regions and we'll join on employee region ID, and we'll join that to company regions ID.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=101)** And I see I forgot to alias that.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=105)** So let's take care of that.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=109)** Now the results of that, so we have employees table being joined to the company regions.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=115)** That's going to produce a set of rows.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=118)** And those rows, we can join to the company department's table, and let's alias that as CD.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=134)** And we'll join on the employee's department ID and join that to the company department's ID.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=144)** So that gives us our join. And now let's put our columns in.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=149)** So we're going to be pulling from all three of these columns, and we want to pull in, let's start with the country, country name.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=160)** So that'll come from company regions.
>
> **[2:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=162)** So we'll pull in country name, and then we're going to pull in the region name.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=169)** And I would like the department name.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=172)** And then finally, we're going to do a count, and we're going to count all the rows.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=182)** And we could use count star or E dot star, makes it a little more explicit than I'm particularly interested in counting employees, but the results are the same.
>
> **[3:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=190)** So we'll just go with count for E star.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=193)** And oh, we could go without a group by, and we would see totals for the entire data set.
>
> **[3:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=201)** But instead, I want to group by.
>
> **[3:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=204)** And now I'm going to group by all of the columns that are not aggregates in our select statement.
>
> **[3:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=211)** So I want to group by country name, region name, and department name.
>
> **[3:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=215)** So I'm just going to copy and paste that in.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=220)** Now, I also want an order by statement, so I can have this in the order that I'm interested in.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=228)** And the order by is going to be the same sequence as the group by.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=233)** So this is a fairly long query.
>
> **[3:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=235)** So let's take a look at this.
>
> **[3:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=237)** So we're going to select country name, region name, department name, and we're also going to select the count of employees in each.
>
> **[4:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=244)** So for each country in each region, and then within each department in each region, we're going to get the count of employees.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=251)** And we're getting that because we're joining the employees table to the company region's table on the region ID from the employee table.
>
> **[4:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=260)** And we're taking the results of that and doing another join to company departments.
>
> **[4:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=265)** And we're using department ID from employees for that.
>
> **[4:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=267)** So that makes sense.
>
> **[4:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=269)** And then we're simply grouping by and ordering by country name, region name, department name.
>
> **[4:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=274)** So, all right, so everything looks good.
>
> **[4:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=276)** Everything has an alias, and I think my commas are correct.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=280)** So let's give it a try and see. Nope, have a syntax error.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=285)** I forgot a comma. There we go.
>
> **[4:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=289)** Now we'll run it.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=290)** And what we see here is we see that we're ordering by country names.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=294)** So we have Canada first and then USA, and then within Canada, we have a list of region names.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=301)** And so for example, we have British Columbia, followed by Nova Scotia and Quebec and Canada, and then Northeast, Northwest in the US, followed by Southeast and Southwest.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=311)** And then for each of those regions, we have each department.
>
> **[5:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=314)** So we start with automotive, baby, beauty, clothing, et cetera.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=318)** And then around here, when we're shifting from British Columbia to Nova Scotia, we're starting again with our list of department names, like automotive, baby, beauty.
>
> **[5:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=330)** And if we scroll down past Nova Scotia to Quebec, we see we restart again.
>
> **[5:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=336)** So what we have here is a grouping where we're grouping by a country name, region name, and department name, and we're getting a count for each.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=345)** Well, what if we wanted to look at different combinations?
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=347)** Like for example, we might want to know, how many employees are there in Canada, in British Columbia, across all departments, or in British Columbia, all across regions without regard to country?
>
> **[6:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=362)** Well, in this case, region name, there's a one-to-one mapping from country name to region name.
>
> **[6:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=367)** But there might be cases where we're grouping by things that are independent.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=371)** So if we wanted to look at, say, all possible combinations of these three dimensions or country name, region name, department name, we could use an operator called Cube.
>
> **[6:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=381)** And the Cube is an operator we apply in the group by clause, and it's very similar to Rollup in that we simply ask [[PostgreSQL|Postgres]] to apply the Cube operator to this grouping structure.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=398)** So I'm just going to run this.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=400)** I'm going to run this new command, and let's see what we get.
>
> **[6:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=405)** Well, at first, it looks very similar to what we already have seen.
>
> **[6:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=409)** We see Canada, British Columbia, and a list of department names starting with automotive, baby, beauty, et cetera.
>
> **[6:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=416)** Well, let's scroll down a little bit.
>
> **[6:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=418)** We come down here to the end of British Columbia.
>
> **[7:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=421)** So at the end, toys is the last department.
>
> **[7:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=424)** We have injected here a new row, which is Canada, British Columbia, and then a Rollup for all of the departments.
>
> **[7:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=432)** So again, it's kind of like Rollup.
>
> **[7:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=434)** And we see if we keep scrolling down and we are looking at the grouping for Nova Scotia and all the departments, we see also there's a Rollup for Nova Scotia.
>
> **[7:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=443)** Okay, so this all makes sense.
>
> **[7:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=445)** Feels very similar to Rollup.
>
> **[7:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=447)** Similarly for Quebec, we have a Rollup for that.
>
> **[7:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=450)** And then all of a sudden, we've got a bunch of nulls in the region name.
>
> **[7:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=455)** And what we're doing here is, we're basically looking at a combination of for country name and department name, what's the Rollup.
>
> **[7:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=463)** So this is giving us a combination of country name and department name without regard to regions.
>
> **[7:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=469)** So we're rolling up across regions, but it's as if we're grouping by country name and department name.
>
> **[7:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=475)** So we're getting a total of all the automotive employees in Canada, for example, in this that I have highlighted here, we're getting a list of all of the employees in Canada that work in clothing departments here.
>
> **[8:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=491)** So what we see here is, so that's an example of what Cube does.
>
> **[8:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=494)** It's looking at different possible combinations of our three dimension columns.
>
> **[8:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=498)** So let's keep scrolling down to see what else we have.
>
> **[8:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=501)** Well, we also have a total for Canada without regard for region name or department name, or just in a sense, looking at just the combination of just country name.
>
> **[8:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=510)** So this is like with Rollup.
>
> **[8:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=512)** So we have a total of employees across Canada without regard to region or department name.
>
> **[8:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=517)** And then we transition to the United States where we see Northeast, and we see each individual department.
>
> **[8:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=524)** And if we keep scrolling down, eventually we'll see a total for Northeast, and then we switch to Northwest, and then we have a total for Northwest after each individual department.
>
> **[8:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=536)** And so we're seeing the same pattern again.
>
> **[8:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=538)** Here, we have it with Southeast, and then we see the total for Southwest.
>
> **[9:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=543)** And now we see for US, USA, all of the employees in the automotive department in the US, the number of employees in the baby department in the US and so on.
>
> **[9:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=556)** And then we have another set of combination.
>
> **[9:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=559)** This is a set of region names and department names.
>
> **[9:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=562)** So what we're looking at is, all possible combinations of our dimensions.
>
> **[9:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=566)** And what we see here is, again, we have total, here's the total for just British Columbia.
>
> **[9:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=570)** So all the employees in British Columbia here is a total for all the employees in Northeast and all the employees in Northwest.
>
> **[9:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=581)** And if we keep scrolling down, we're going to keep seeing this pattern.
>
> **[9:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=584)** And at the end, we're going to see a total for all the employees in automotive only.
>
> **[9:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=589)** So we're getting totals for all of the different ways of breaking this down.
>
> **[9:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=593)** And finally, at the end, we'll get a total for the number of employees across all of the countries, regions, and departments.
>
> **[10:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=602)** So Cube is really useful in data exploration if you want to see these different possible combinations.
>
> **[10:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=609)** Now, like Rollup, Cube is not a relational operator.
>
> **[10:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=612)** So if you start applying, you know, relational operators to the results of a select statement that uses Cube, you're almost certainly going to get unexpected or surprising results.
>
> **[10:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=621)** So Cube, like Rollup, is really good for things like data exploration, or if you're generating reports and you want to produce all these possible combinations and people to analyze them, you know, in some other way or share the data.
>
> **[10:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-cube-to-total-across-dimensions?u=76281980&t=634)** Cube is a great way to help you reduce the number of select statements you have to write to get the same amount of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Analogies:** for example (4), similar to (2), kind of like (1)
> **Definitions:** is a  (5), is an  (1)
> **UI Navigation:** scroll down (2), select the (1), switch to (1)
> **Env Vars:** usa (2)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)

#### [Using Top-N queries to find top results](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=0)** - [Instructor] Now if we want to find, say the top 10 employees by salary or some other, you know, top by count of employees, there are a couple, actually a few different ways of doing it within [[PostgreSQL|Postgres]].
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=16)** And I just want to show you one of the ways.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=18)** One is, so let's say we're interested in looking at the top employees by salary.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=24)** So we can write a select statement.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=27)** Select, let's say we'll select all the columns from employees.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=32)** We want to know everything about these employees from data_sci.employees.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=41)** Now let's just alias that just because it's a good habit.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=45)** And then I'm going to, now one of the things I can do is simply order by the salary and I can add the descending keyword.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=55)** So this will return all the employees in the order, and I can just simply count one, two, three, four.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=66)** There, and I have my top 10 employees.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=69)** Well, that's one way to do it.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=71)** Now sometimes if it's like a lot of data like this, I really don't want to see the other data.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=76)** I can use an operator in Postgres that is in many different relational [[Database Systems]], but is not part of standard [[SQL]].
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=83)** It's called the Limit Operator.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=84)** And I can say Limit 10, and that will run the query that I have above here.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=89)** So that will run all of this.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=91)** It'll execute this entire thing, get the entire results sets back, and then trim the results that it returns to the UI or to the user interface down to the first 10 rows.
>
> **[1:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=100)** So let's run that.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=102)** So that's kind of a quick way to get the top 10.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=107)** Now limit is not a standard SQL operator, but there is an operator called [[Fetch]] First.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=117)** Fetch first 10 rows only, that you probably don't see this too much, but in case you're working with a version of SQL that doesn't support the limit operator, you can write this as well.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=131)** Now I will say one thing to keep in mind when using an order by and a Limit is that typically the query plan builder, which is the part of the database that kind of builds the plan or the procedural steps that go about executing the query, that query Plan Builder will build the steps to bring back the entire data set without regards to whatever the limit number is.
>
> **[2:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=156)** Like limit 10, limit 100.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=158)** So if you have a very large table, you might, for example, bring back 1,000 rows or 10,000 rows or 100,000 rows.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=165)** So the database is going to do all the work to get say 10,000 rows, and then take that result set and chop off everything but the first 10 rows.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=173)** So there could potentially be a lot of work done that's not necessary.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=178)** So there are some alternative ways that we're going to discuss later, but this is just a quick way.
>
> **[3:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/using-top-n-queries-to-find-top-results?u=76281980&t=183)** If you're just, again, doing data exploration, you want a quick look at something, then order by followed by limit or fetch first is a really useful way to kind of get a quick look at a top N or a top K results in a data set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Fetch]] (3), [[PostgreSQL|Postgres]] (2), [[Database Systems]] (1)
> **Env Vars:** sql (3)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** it's like (1), for example (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** data_sci (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Filter and aggregate a data set](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-filter-and-aggregate-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-filter-and-aggregate-a-data-set?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to write a query that returns the count of employees in departments where the total salary paid in that department is greater than $5 million.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-filter-and-aggregate-a-data-set?u=76281980&t=16)** Now, the results should be ordered from highest to lowest total salary.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Filter and aggregate a data set](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=0)** (upbeat synth music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=5)** - Okay, here's the solution to our challenge.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=7)** To return the departments in which the total salary is over $5 million, we select a department ID and we sum the salary from the employees table in the data_sci schema.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=22)** We group by the department ID, and then we filter using a having clause 'cause we want to filter based on a property of something that we're aggregating, in this case the sum of salary.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=33)** So we can have it in the where clause.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=34)** We need to use a having clause.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=36)** and we want this in from greatest value down to lower value.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-filter-and-aggregate-a-data-set?u=76281980&t=40)** So we're going to order by the sum of salary, and we're going to use the descending keyword to ensure that we filter it with the highest value first, and then go in descending order from there.

> [!info]- Semantic Content
>
> **Code Identifiers:** data_sci (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat synth music) (1)


### 5. Window Functions and Ordered Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing window functions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=0)** - [Instructor] Now, we have seen that we can derive information about groups of rows for using subqueries.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=9)** And one of the ways that we use subqueries is, for example, to find out information from a group of rows, such as maybe all the rows for employees in a particular department.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=20)** And let's say we want to find, well, what's the minimum salary in that department?
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=24)** Well, we could use a subquery for that.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=27)** Well, [[SQL]] also provides another mechanism for doing that kind of calculation, and it's something known as window functions.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=33)** And the term window you can think of as a metaphor for like a window in a house.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=38)** And if you look out the window, you can see a certain amount of landscape.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=44)** Now, if you move the window a little bit to the left, a little bit to the right, you can see a different set.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=48)** If you move the window maybe all the way to the other end of the house, you'll see something completely different.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=53)** Well, similarly with window functions, you can think of a window function as a way of grouping a set of rows, doing an operation on that row, and then returning some bit of information.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=63)** And so oftentimes I feel like the best way to learn about window functions and really grok what they do is to actually try one.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=71)** So let's take a look at the employees table.
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=73)** So let's write a SELECT statement.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=75)** And we're going to be selecting from the data_sci.employees table.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=85)** And now I want to get some information based on departments.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=88)** So the first thing I want to include is a department_id.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=91)** And I also want to look at an individual level.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=93)** So I want the last_name of our employees and the salary.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=101)** Okay, this looks pretty straightforward and I'm just going to run it to make sure I've got even a simple syntax here right.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=106)** Yep. Okay, great.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=108)** Now, what I really want to know is what is the minimum salary in each department?
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=114)** And I want to include that with the information that I provide when I'm returning information about employees in different departments.
>
> **[2:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=121)** Well, for that, I can use a function called first_value.
>
> **[2:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=126)** And first_value is a kind of window function.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=129)** And we're going to think of it as a window over the salary column.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=134)** And specifically, we want the first_value of the salary, and we want to work over a grouping.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=143)** And the group that we want to work on is specified by PARTITION BY, and that's the term that SQL uses for specifying the group that we want to operate on.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=155)** And what I want to operate on is a group that is defined by the department_id.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=163)** Let's run this query, which is not complete yet.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=167)** It's a building block towards something.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=169)** So what we see here is we have a list of employees that's grouped by departments.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=175)** So in the first column, we have all of department ones for now, oh, and there's some department twos, and I'm going to scroll down and there's some department threes.
>
> **[3:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=183)** So we're organizing these by department_id.
>
> **[3:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=187)** And we see that we have the salary in the third column, and that changes.
>
> **[3:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=192)** And then we see we have a first_value column.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=196)** Well, the first_value column in the first row is 101768.
>
> **[3:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=201)** So that's the first_value of salary that we encounter in this department.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=206)** Now, we'll see that the next person down has a salary of 144.
>
> **[3:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=211)** So this first_value is not the maximum salary because we have some salaries with a higher salary.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=217)** And it's not the minimum salary because we see that there are some that have a lower salary.
>
> **[3:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=223)** But what it is it's the first_value that we encounter in the salary column in this grouping by department.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=230)** So let's jump down to say, oh, here we are.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=232)** We're at some group three. We see the value here.
>
> **[3:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=236)** And first_value was 85227, and group four, the first_value is 83144.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=245)** So what we have here is the first_value that we encounter in this list of employees by department.
>
> **[4:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=254)** Well, if we don't specify in an ORDER BY clause, when we return a set of rows in SQL, it is returned in some arbitrary order.
>
> **[4:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=263)** We don't really know what it is.
>
> **[4:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=265)** If we want to know what the maximum value or the minimum value of the salary is, we want to be sure to include an ORDER BY clause.
>
> **[4:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=273)** And in this case, we want to ORDER BY salary.
>
> **[4:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-window-functions?u=76281980&t=279)** And actually, what I'm going to do is I'm going to shift this a little bit and move this down to the next row so we have a little more space to look at our results sets here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Code Identifiers:** first_value (11), department_id (3), data_sci (1), last_name (1)
> **Env Vars:** sql (3), order (3), select (1), partition (1)
> **SQL:** order by (3), select (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (1), such as (1), think of it as (1)
> **UI Navigation:** scroll down (1)

#### [NTH_VALUE and NTH_TILE](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=0)** - [Instructor] Now when we're using windowing operations, we can use some of the aggregate functions that we've seen before, like sum or average.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=8)** And then we can also use ones that are really more specialized toward the windowing operation itself.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=14)** And two that we'll look at are called ntile and nth value.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=18)** But before we look at those specialized ones, let's see how we can use our more commonly used aggregate functions like average with windowing operations.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=29)** So to do that, I want to work with the employees table and look at salaries by department.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=34)** So I'm going to create a select statement, and I'm going to select department ID and how about salary, and I also want to know the average salary.
>
> **[0:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=49)** And now the average salary, I want this average.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=53)** I don't want the average of everyone in the company or anything like that.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=56)** I want the average over a particular window.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=59)** And that window that I'm interested in is defined by the expression partitioned by and then department ID.
>
> **[1:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=67)** So I want to basically organize this window around department ID and I want to find the average salary in each department.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=77)** And then after that, I can simply finish building my standard select statement from data_sci.employees.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=85)** And I think that looks correct, let's give that a run.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=90)** Okay, and so what we see here is that we have our department ID, our salary, and then we have an average.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=98)** Now you'll notice here, our average has a lot of decimal places.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=101)** So I forgot to put the round in, so let's put round.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=105)** Now you might think, oh yeah, we'll just do round of average salary, two.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=110)** Well, this won't work.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=111)** But let's see what happens when we do try and run this.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=115)** And what we get is an error and we get an error because over is specified, and round is not a window function or an aggregate function.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=124)** So basically what we're saying is we want to apply round, which basically says, take the results of this operation, and then in this case, round the value.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=134)** But we're not rounding the average value of each individual salary.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=139)** Instead, what we're doing is we want to round the average salary that we calculate over this specification over this window.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=148)** So we need to include the entire clause.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=151)** This is the first argument to the round function.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=154)** The second argument is the number two.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=158)** So now if we run this, we're going to get what I expect, which is to have the result, the round value rounded to two decimal places.
>
> **[2:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=169)** So that's an example of how we can use an average aggregate.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=175)** Now, another aggregate that we can use that's more specialized is called ntile.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=182)** And ntile is a function which allows us to break our group, like our group, say department one or department two, all of the rows that fit in to say a particular department.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=196)** We can chunk them into equal sizes.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=198)** So for example, if we're interested in working with four groups or quartiles, we could specify an ntile of four.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=206)** If we're interested in working with deciles or 10 groups, 10 subgroups, we could specify 10.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=212)** So let's work with four subgroups over a particular window.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=218)** And that window is defined by the partition over the department ID.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=228)** Now remember, if I just specify this, then I will get rose returned in an arbitrary order 'cause I don't have any kind of order by specification.
>
> **[3:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=236)** So I want to make sure I order by what I'm particularly interested in.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=241)** In this case, I'm interested in salary, and I want my first quartile to have the biggest salaries.
>
> **[4:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=249)** So I'm going to make this in descending order, and I'm going to give this an alias.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=255)** I'm going to call this quartile.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=257)** So it's obvious what that is.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=258)** Now I'm going to run it, and let's see what I did wrong, we have...
>
> **[4:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=268)** Mistyped the partition by phrase so let's try that one more time, there we go.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=275)** Now what we see here is that we have department one, which goes from here.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=280)** It scrolls down well down past the first page down to here.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=286)** And actually there's the last one.
>
> **[4:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=288)** And what we see here is that we have department one and now we have a salary.
>
> **[4:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=294)** Now this salary 146,167 is in the first quartile, and so is the next one, 144,724.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=301)** And in fact, the smallest salary in the first quartile is 127,521.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=308)** Now, we'll notice after that we start the second quartile.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=311)** And the second quartile goes all the way down to 101,768, after which we're into the third quartile, which is bounded by 101,006, and that goes to 71,367.
>
> **[5:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=328)** And after that, we're into the fourth quartile and the fourth quartile goes down to 42,602.
>
> **[5:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=334)** And after that, we're switching departments.
>
> **[5:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/nth-value-and-nth-tile?u=76281980&t=337)** Now we're in our second department.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Documentation:** specification (2)
> **Code Identifiers:** data_sci (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [RANK, LEAD, and LAG](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=0)** - [Instructor] Window functions combined with order by statements really enable some interesting kind of additional work that we can do with sets of rows.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=9)** So for example, if we are able to say group employees within a department, we can start doing things like ranking them and actually looking maybe ahead or behind a particular employee relative to their position in a list.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=23)** So let's look at three functions that will help us do those kinds of things.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=27)** There's the rank function, the lead and the lag function.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=32)** So we're going to work with salaries again.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=34)** So I'm going to be selecting, let's pull the last name.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=40)** Actually, let's start with department_id, let's make sure we have that.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=45)** And last_name and salary.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=52)** And now we're going to pull this from data_sci.employees.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=61)** And I'm going to want to put a windowing function in here.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=65)** And the function I want to use is basically, I want to know what's the order like from one to a hundred or whatever the number of employees we have?
>
> **[1:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=73)** I want to rank them from one to whatever the number of employees we have.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=77)** Well, the function to do that is called rank.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=80)** And that assigns a rank, and we can assign that over some window that we want to look at.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=87)** Now if we want to do the entire list of all of the employees, then we can simply do this over and then specify.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=96)** We don't have to specify a partition by, we can specify order by salary descending if we want to go from top to bottom.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=105)** So let's take a look at that.
>
> **[1:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=106)** So this is a little bit different 'cause we're not breaking it up into subgroups.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=109)** I just want to assign a rank for every employee in the company.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=114)** And what we see here is that we have a rank that is assigned in the first row.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=118)** Somebody in department 12 named Stanley has the highest salary at 149,929 and then it goes down from there.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=125)** And you'll notice the rank is just a count.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=129)** We're going from count from one to two, and it continues all the way up until we get to the lowest value or the lowest valued salary, which would have the highest valued rank.
>
> **[2:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=141)** So that's what the rank function does.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=143)** Now we can also rank based on salary and group by a department.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=147)** And to do that we would simply add PARTITION BY and we would specify PARTITION BY department_id.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=158)** And let me just move that to a separate line.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=161)** So PARTITION BY department_id and then order by salary.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=166)** Now let's run that.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=168)** And what we see here is we have a ranking- Here is the highest paid person is Sanchez in department one.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=175)** And that goes up to, how many people do we have in this department?
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=179)** 46, we have 46 people, and then we switch over and there's department two, which seems to be mirroring department one, so let's go down to department three.
>
> **[3:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=189)** Here we go, here's three starting here.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=193)** Department three goes from one to 45, and then finally department four.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=202)** If we look there, that goes to a rank of up to 53.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=206)** So we can use the rank function to assign an ordinal value, a value based on the order in a particular list that we're generating or a particular partition that we're working with.
>
> **[3:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=218)** Now, another function that's useful when we're working with groups is the lead then the lag functions.
>
> **[3:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=225)** So let's switch this up and let's change rank to lead and we'll take the lead of a column.
>
> **[3:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=237)** In this case, we'll look at the lead of salary.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=240)** Lead basically looks ahead and allows us to look at rows relative to the one we're currently working with.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=247)** So for example, when we partition these employees by department and we order by sales and descending, we see that the first person in department one that's listed is Sanchez and has a salary of 146,167.
>
> **[4:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=264)** Well, when we look at the lead, basically lead says go one row ahead and look up that salary value, in this case 144,724, and copy that value back or print that value or return that value as part of the row before it.
>
> **[4:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=280)** So when we're looking at a row, we see the salary in that row plus the salary in the row ahead.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=286)** So if you wanted to do something like calculate the difference between an employee and the next highest paid employee in the department, you could use the lead to go basically peek ahead at the next row, grab that value, and then do the calculation.
>
> **[5:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=301)** Now lead by default looks one ahead, but we could also look, for example, at two ahead if we wanted to do that.
>
> **[5:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=308)** So let's run a lead with two.
>
> **[5:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=312)** And what we see now is we still have Sanchez at 146,167, but now the value in the lead column is 141,501, which is where we get from row three.
>
> **[5:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=323)** So we look two ahead to get this value and bring it back.
>
> **[5:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=327)** So you can look ahead using lead at some particular column.
>
> **[5:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=333)** Now there's also a lag function, which is a compliment which looks behind.
>
> **[5:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=340)** So let's run that, and what we see is, well, we don't have two behind.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=345)** We're at the first one or the first second.
>
> **[5:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=347)** We can't look back two, we don't have like negative two, but as soon as we hit the third value, then we can go back and look at what that lagging second row is.
>
> **[5:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=357)** In this case, the value in the salary is 146,167.
>
> **[6:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=361)** So we're copying that down and we're bringing that and making that available in this row, in the third row.
>
> **[6:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=367)** So lag and lead can both take off sets, but they default to an offset of one.
>
> **[6:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=374)** So let's just verify that.
>
> **[6:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=377)** And so what we see here, yeah, so now when we're looking at the second employee and we look at the lag, we don't specify a specific value.
>
> **[6:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=385)** The lag defaults to one, and so we're lagging or looking back one row.
>
> **[6:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=390)** So what we can do, again, if we want to assign a rank value, an ordinal value across an entire partition and then restart at the next partition, say we're grouping by departments, we can use the rank function.
>
> **[6:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=404)** Lead and lag are useful for looking ahead and looking behind within that sort of ordered windowing of our subgroup.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=413)** In this case, within our ordered grouping within a department.
>
> **[6:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=417)** So lead and lag can help us look up a value either one row ahead, two rows behind, depending on what our criteria is.
>
> **[7:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/rank-lead-and-lag?u=76281980&t=425)** So rank, lead, and lag are some additional windowing specific functions that can be really useful when we're working with partitioning by different types of ordering columns like department_id.

> [!info]- Semantic Content
>
> **Code Identifiers:** department_id (4), last_name (1), data_sci (1)
> **Env Vars:** partition (3)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Width_buckets and CUME_DIST](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=0)** - [Instructor] As we're wrapping up our discussion of windowing functions, I want to point out two more functions that may be useful.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=6)** One is called the width_buckets.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=8)** Any other is called cumulative distribution or cume_dist for short.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=12)** The first one, the width_bucket, is kind of similar to ntile in that it allows us to break up say, a group or a window into subsections.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=24)** But rather than specifying a particular number, like within tile, specifying four if we want quartiles or 10 if we want deciles, with a window bucket function, we specify a range of like what's the maximum value we want to work with and the minimum value, and then how many different buckets we want to put those values in.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=42)** So let's take a look in an example of the width_bucket and we're going to select from our employee table and we will SELECT, let's start with department name,
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=56)** excuse me, not department name, department_id, and last_name.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=60)** That's where the name comes in, as well as salary.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=65)** And now I want to use the width_bucket function and I want to apply this width_bucket to the salary column.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=76)** And I expect the salaries to be in the range of zero to 150,000.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=82)** And I would like to have that broken into 10 different buckets.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=87)** And I'm going to alias this with the term bucket.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=91)** And this is going to be from the data_sci.employees table.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=104)** And quick look, I think that looks right.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=107)** So let's see what the results look like 'cause that helps us understand what this width_bucket is actually calculating.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=114)** So what we're seeing here is that we have, of course, the department_id a last_name, a salary.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=120)** We don't have any order by, so this is arbitrary order.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=123)** And what we see here is this person with salary 67,470 falls into bucket five.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=131)** Someone with 144,724. So a higher end of the salary range, they end up in bucket 10.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=137)** So the higher salaries end up in higher buckets.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=140)** And let's see if we have some closer or lower value buckets.
>
> **[2:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=144)** Here's one, a person who has a salary of 42,602 falls in bucket three.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=151)** So what we see here is basically, an ordinal value that's assigned and we can design what the range, how many different buckets we want to push these values into.
>
> **[2:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=161)** Again, it probably feels like ntile.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=164)** And it is similar to ntile.
>
> **[2:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=166)** There are some differences though.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=167)** With width_bucket, we have to specify a min and a max as well as the number of buckets we want through the number of tiles we want.
>
> **[2:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=175)** Another difference is that width_bucket, if there are numbers outside of those range, so if we had like a negative salary or maybe a salary that was greater than 150,000, those would fall into a couple of outlier buckets.
>
> **[3:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=186)** One for less than the min and one for greater than the min.
>
> **[3:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=189)** So that's a kind of a catchall.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=191)** And that's useful if you expect things to be in a particular range.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=195)** For example, if you're doing data exploration and you're looking for outliers, doing width_bucket is a great way to kind of get a sense of the distribution of the data, like how many values fall into different buckets.
>
> **[3:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=206)** But also quickly identify real distinctive outliers if they fall outside your min or max range.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=212)** So that's width_bucket.
>
> **[3:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=213)** That's kind of handy for some use cases.
>
> **[3:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=216)** Now another thing that can be useful is the cumulative distribution or the cume_dist function.
>
> **[3:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=221)** And let's look at that.
>
> **[3:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=222)** We're going to use department and last_name and salary and now we're going to change this specification.
>
> **[3:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=231)** So what we're going to use is the cume_dist function.
>
> **[3:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=238)** And that is like rank, it is parameter list.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=242)** We don't specify parameter.
>
> **[4:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=243)** This is simply going to give, in some ways it's like a ranking, but it's not an integer ranking like one through N, where N is the number of values in a list.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=253)** The number of values in a list that we're working with.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=255)** Cumulative dist is about a percentage.
>
> **[4:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=258)** So if we took some value like the salary and we added it all up, and we add a total value, we can think of cumulative distribution going from zero to one where the first salary contributes some amount, it might give you us maybe 0.001 of the total cumulative value.
>
> **[4:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=277)** Then if we see two employees or three employees, we're going to see our cumulative distribution increase because each of those employees is contributing their salary or adding their salary to the total of the cumulative distribution.
>
> **[4:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=290)** So if you want to have a running total and know what percent of the total we already have completed, cumulative dist is a good function to work with.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=299)** Now with cumulative dist, obviously, we're almost certainly going to want to use an over and then order by something.
>
> **[5:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=306)** So if we want to order by, let's say we want to work with all the salaries across the company.
>
> **[5:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=311)** So we don't need a partition by, we just need an order by.
>
> **[5:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=315)** Order by and specify salary.
>
> **[5:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=317)** I want to order by salary and let's go with descending.
>
> **[5:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=322)** And with that, let's just see what this returns at this point.
>
> **[5:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=329)** So what we see here is that we have this cumulative distribution and we see a very small value here .00095.
>
> **[5:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=338)** So that's the contribution of this first salary, the 149.
>
> **[5:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=343)** And then we have another salary.
>
> **[5:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=345)** We sort of come close to doubling our cumulative distribution and then getting close to three times 'cause all of these are very similar.
>
> **[5:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=352)** So we're increasing the cumulative distribution.
>
> **[5:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=355)** And what you'll notice here is the cumulative distribution keeps increasing.
>
> **[5:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=359)** And if we go toward the bottom of the list, if we go down here, now you see we're in the 98%, 99.
>
> **[6:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=366)** Finally, after the last person salary is counted, we get a one.
>
> **[6:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=370)** So that's an example of how we can use cumulative distribution.
>
> **[6:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=376)** Now this is also an opportunity to talk about something else as well.
>
> **[6:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=379)** And this is going to come up if we... I'm going to close this actually.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=384)** If we try and use the round function.
>
> **[6:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=386)** So typically, you know, whenever we have like those large precision, I like to round to two values just to make it a little more readable.
>
> **[6:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=393)** Now in our case, we might want to round to like four or five because those small values early on.
>
> **[6:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=398)** So let's use the round function.
>
> **[6:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=400)** And now we've learned from previous work with using round and window functions, that we want the round operator to apply to the full clause that we use to specify the window and the operation on that window.
>
> **[6:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=413)** So let's say we went around this to five decimal places.
>
> **[6:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=417)** Now let's run this and see what happens.
>
> **[7:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=420)** What we get here is an error message.
>
> **[7:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=423)** And let's see.
>
> **[7:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=424)** It says the function round double precision integer does not exist.
>
> **[7:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=428)** Well, there's a big clue in here about what's going on.
>
> **[7:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=432)** So we know, so the function round, so there's round and then it's expecting this first argument to be a double precision.
>
> **[7:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=439)** And then the second argument to be an integer.
>
> **[7:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=442)** Well, five is definitely an integer.
>
> **[7:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=444)** So this must mean that dist, cume_dist is not a double precision.
>
> **[7:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=451)** So now at this point, I typically would jump to the documentation.
>
> **[7:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=454)** I have an understanding of what's going on, but I want to verify.
>
> **[7:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=457)** So I've happened to just go out and look up [[PostgreSQL|Postgres]] documentation for the round function.
>
> **[7:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=464)** And if we scroll down and we see here, ah, there are two signatures or two sort of patterns or two sets of arguments we can pass into round.
>
> **[7:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=474)** We can have a single value, which is either a dp, that stands for double precision, or a numeric.
>
> **[8:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=481)** Or we can pass in one value, which is a numeric type, and then one which is an integer.
>
> **[8:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=488)** So this is the value the round that we're using.
>
> **[8:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=491)** We're trying to round to S decimal places.
>
> **[8:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=494)** Yeah, we went a round to five decimal.
>
> **[8:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=495)** This is exactly what we're trying to do.
>
> **[8:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=499)** So what this tells me is the fact that we got the error, it's telling me the cume_dist is not returning a numeric value.
>
> **[8:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=508)** Well, in fact, if we look up cumulative dist, it returns a double precision.
>
> **[8:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=514)** So what we want to do is convert that double precision into a numeric value.
>
> **[8:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=521)** Now, the way we do that is we use an operation in Postgres known as casting.
>
> **[8:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=528)** And what I want to do is I want to demarcate the clause that we're interested.
>
> **[8:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=538)** So this whole cumulative distribution over order by salary descending, I want to convert that from a double precision into a numeric value.
>
> **[9:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=550)** Now, one way we can do that in Postgres is to use the double colon notification.
>
> **[9:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=556)** So that's tells Postgres, "Hey, we're going to compute this value.
>
> **[9:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=560)** And then before we do anything else with it, we're going to convert it to, in this case, a numeric value."
>
> **[9:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=566)** And now let's run this and see what we got.
>
> **[9:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=571)** And now what we see is, ah, now we don't get that error message.
>
> **[9:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=575)** So we can see that we are getting the cumulative distribution and the round function is working correctly.
>
> **[9:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/width-buckets-and-cume-dist?u=76281980&t=582)** And that's because we figured out using the documentation that we needed to convert this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (4)
> **Code Identifiers:** width_bucket (9), cume_dist (5), last_name (3), department_id (2), width_buckets (1)
> **Definitions:** is a  (3), is called (2), is an  (2), stands for (1), known as (1)
> **Analogies:** similar to (2), for example (1), it's like (1)
> **Documentation:** the documentation (2), specification (1)
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Env Vars:** select (1)

#### [Challenge: Segment a data set using window functions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-segment-a-data-set-using-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-segment-a-data-set-using-window-functions?u=76281980&t=0)** - [Instructor] In this challenge, I would like you to write a query to return department_id, last_name, salary, and the sum of all salaries in a department.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-segment-a-data-set-using-window-functions?u=76281980&t=15)** Do not use a subquery in the solution to this challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** department_id (1), last_name (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Segment a data set using window functions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=0)** - [Instructor] The solution to this challenge is as follows.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=8)** We write a SELECT statement where we include the department_id, the last_name, and the salary.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=13)** And then we specify a window function using the sum aggregate, and we're going to sum salary.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=20)** And then we sum over the partitioning by department_id.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=25)** And of course, we select this from the data_sci.employees table.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-segment-a-data-set-using-window-functions?u=76281980&t=29)** And we see over here on the right, the results are as we would expect, where we are seeing the sum over partition along with the information on each employee in the particular department.

> [!info]- Semantic Content
>
> **Code Identifiers:** department_id (2), last_name (1), data_sci (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Common Table Expressions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing common table expressions (CTEs)](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=0)** - [Instructor] Sequel has a feature known as common table expressions, or [[CTE|CTEs]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=5)** Now, these are basically auxiliary statements that we use when we're working with larger, more complex queries.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=12)** And what they allow us to do is essentially modularize our query, much like you use modular approaches in programming and [[Software Development]] to break down, say, complex tasks into smaller units, and each unit is its own module or function.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=30)** Well, you can think of a [[CTE|common table expression]] as a module within a query that allows you to break down and isolate some of the complexity, and so we're able to essentially create what are like temporary tables that are used within a query.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=46)** Now, we do this for the same reason we use modularity in programming.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=50)** It helps us to simplify complexity.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=53)** So in this case, common table expressions allow us to often simplify complex queries that would otherwise require a lot of subqueries, and maybe subqueries within subqueries, and those can be effective, but they can also be hard to understand.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=68)** One of the things I particularly like about common table expressions is that they are much easier to read and quickly grasped than, say, a very large, complex, monolithic query with a lot of subqueries.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=81)** Now, in addition to common table expressions, there is sort of a subtype or a specialized type of common table expression known as a recursive [[CTE]], and recursive CTEs enable queries over hierarchical data.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=95)** So if you need, for example, to encode maybe like a management hierarchy, like in an org chart in a relational data structure, you might want to use recursive CTEs to basically query that structure.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=109)** Now, we define common table expressions using a WITH statement.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=113)** The structure is fairly straightforward.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=115)** It's basically the keyword WITH followed by a name for your common table expression, AS is another keyword, and then a select statement.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=125)** So whatever you put in that select statement basically defines the projection or the relation that we then reference later on as the CTE name.
>
> **[2:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=134)** And we can have multiple CTEs defined in a list.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=137)** It's just a matter of saying WITH, then a CTE name, AS, select statement, followed by another CTE name, AS, select statement, and so on, and then when we're done listing all of our CTE names, we have our main SELECT statement.
>
> **[2:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=150)** And in that SELECT statement, we reference the CTE names that we have created in the WITH statement.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=155)** So that's how we can basically build these sort of temporary tables or temporary projections or relations that we can then reference in the SELECT statement.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=165)** So you can imagine if you didn't have the ability to do this, you might have to do a lot of subqueries within the SELECT statement.
>
> **[2:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=173)** Again, one of the nice things I really like about common table expressions, or CTEs, is that they are much easier to read and easier to understand.
>
> **[3:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=180)** So if you have the option of working with CTEs, at least for me, I find it quite easier than working especially with nested subqueries.
>
> **[3:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/introducing-common-table-expressions-ctes?u=76281980&t=188)** Subqueries are great when you have just basic, simple kind of subquery, but anything other than a really basic subquery that's pretty obvious, I tend to opt to use a CTE over a subquery when I have that option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (7), [[CTE|Ctes]] (6), [[CTE|Common table expression]] (3), [[Software Development]] (1)
> **Env Vars:** cte (7), select (4)
> **SQL:** select (4)
> **Definitions:** known as (2)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Multiple table common table expressions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=0)** - [Instructor] Okay, I want to do some analysis on salaries across regions.
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=5)** Now in particular, I want to know how much do we pay in salaries in each region?
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=11)** And actually what I really want to know is which of the regions are above the average for what we pay in a region for salary?
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=18)** So this is kind of a multi-step analysis I want to do.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=21)** So I'm going to start with kind of a high level approach, and I'm just going to kind of think this one through.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=26)** I want to select all of the attributes associated with a relation that I'm going to call region salaries.
>
> **[0:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=39)** Now, I haven't defined that yet and that's okay.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=41)** I'm just kind of thinking at a high level here what my logic is.
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=44)** And I want to pull from this list of region salaries, only those regions where the region ID is in the list are in a set of regions where they're above average.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=65)** So I want to be able to create a list of regions that have above average salaries.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=69)** Well, I'll figure out how to do that later.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=71)** And so for now, I'm just going to call it top region salaries.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=77)** Now if you're familiar with programming in programming languages, you'll probably feel like a familiarity like what I'm doing is like writing a top level function where I'm mapping out my basic high level logic and I'm assuming that I will have access to additional functions that will help me implement this.
>
> **[1:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=94)** Now with [[SQL]], instead of implementing functions, we implement relations or queries that return sets of data that we work with.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=102)** So what I'm saying here is I've got to create two additional sets of data.
>
> **[1:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=107)** One is called region salaries and one is called top region salaries.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=111)** So those are additional relations we will create by using common table expressions.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=116)** So let's start with region salaries.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=119)** Since I'm working with a [[CTE]], I'm going to use a [[CTE|with clause]] and I'm going to say with, and then define region salaries as.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=131)** And now I simply specify a select statement and that select statement, what I want to get is a region ID.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=138)** And now I want to get the total of the salary for that region and I'm going to alias this as region salary.
>
> **[2:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=147)** So that's how I'll refer to this sum or total for each region.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=153)** So that's the attribute we want to get back.
>
> **[2:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=155)** That's really one of the key thing that we're going to be looking at.
>
> **[2:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=160)** And I'm going to pull this from the data_sci.employee's table.
>
> **[2:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=170)** So that's our first [[CTE|common table expression]].
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=172)** Now I have a second one I need to define as well.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=174)** The second one is called top region salaries.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=178)** And I'm going to find that one as another select statement.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=182)** Now this select statement is a little bit different.
>
> **[3:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=185)** All I want from top region salary is a region ID 'cause the only place I use top region salaries is is in the subquery.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=193)** So I'm simply going to select region ID.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=198)** And now I'm going to select that from.
>
> **[3:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=203)** Now the question is where do I select this from?
>
> **[3:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=205)** Well, I want to get this from the region salaries relation that I just defined.
>
> **[3:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=211)** So this is the CTE we defined here, and now we're going to use it in our second CTE.
>
> **[3:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=217)** So it's immediately available to us.
>
> **[3:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=219)** And what I want to do is from that list of region salaries, I want to pick out only the regions where we have above average total salary payment.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=232)** So the column I want to refer to is region salaries.
>
> **[4:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=240)** And I want only the ones that are above average.
>
> **[4:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=243)** So I'm going to select where the region salaries are greater than.
>
> **[4:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=247)** And now I've got to calculate the average salary across all of the regions.
>
> **[4:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=253)** Well, to do that, I can use a subquery.
>
> **[4:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=255)** And here, I'll use a select and I'm going to average.
>
> **[4:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=259)** And the thing I'm going to average is the region salary that I defined in the CTE above.
>
> **[4:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=266)** And this is going to be selected from region salaries because that's the CTE that has that information.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=275)** So let's just walk through our logic again.
>
> **[4:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=277)** So this first CTE, called region salaries, selects a region ID and then sums up the salary for each region.
>
> **[4:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=286)** Then we have another CTE, which defines the list of above average salaries.
>
> **[4:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=292)** And that's basically just returns a list of region IDs for all of the regions that have above average salaries.
>
> **[4:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=299)** So that's perfect because what we really want to do is select all of the attributes in region salaries, which in this case is just region ID and the total salary we paid out.
>
> **[5:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=309)** And then we use our second CTE top region salaries to help us filter down to only those regions with above average salaries.
>
> **[5:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=318)** So let's go ahead and run this.
>
> **[5:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=320)** Oh dear, I forgot the group by function here 'cause we don't want the sum of salary for the entire company.
>
> **[5:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=331)** We only want it by region ID.
>
> **[5:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=339)** Now we'll run this and it's not region salaries, it's region salary.
>
> **[5:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=348)** You'll notice here the error messages operator does not exist record greater than numeric.
>
> **[5:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=352)** Well region salaries, which is a CTE or a relation also sometimes referred to as a record.
>
> **[6:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=360)** So we can't do a numeric comparison against the whole record.
>
> **[6:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=363)** So instead we're doing it against the region salary, which is a column within region salaries.
>
> **[6:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=371)** So now if we run, we're going to get what we want.
>
> **[6:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=375)** So what we see here is we have three regions, seven, four, and two, that have an above average total salary paid out for each of those regions.
>
> **[6:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/multiple-table-common-table-expression?u=76281980&t=384)** So this is an example of how we can use common table expressions to build incrementally some fairly complex query logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (9), [[SQL]] (1), [[CTE|With clause]] (1), [[CTE|Common table expression]] (1)
> **Env Vars:** cte (9), sql (1)
> **Definitions:** is a  (5), is called (3), is an  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** data_sci (1)
> **Speakers:** - [instructor] (1)

#### [Hierarchical tables](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=0)** - [Instructor] Now when we work with hierarchical [[Data Structures]], like on organization structures, it's often helpful to use recursive [[CTE|CTEs]].
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=9)** So let's take a look at how we might organize hierarchical data in a relational database.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=15)** So here's an example of a very simple organizational structure where we have three levels of management hierarchy.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=22)** We have at the root or the top of the organizational hierarchy is the CEO [[Microsoft Office|office]], and then below that, we have two different departments.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=32)** We have VP of sales and we have VP of operations.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=36)** Within each of those, we have two subsections.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=40)** So under VP of sales, we have Southeast sales and Northwest sales, and under VP operations, we have infrastructure operations and management operations.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=48)** So this is an example of some very basic hierarchical structure.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=52)** Well, if we model this in a relational table, we're probably going to want to use a recursive [[CTE]] to query that data.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=61)** So let's take a look at the structure of the CTE and what the syntax looks like.
>
> **[1:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=66)** Well, of course it's a CTE, so we start with a [[CTE|WITH clause]] or a WITH term, and then we have a new term called RECURSIVE.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=74)** So in addition to having the WITH, we want to say WITH RECURSIVE to indicate to [[PostgreSQL|Postgres]] that we're now working with a recursive CTE.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=82)** We follow that with a CTE name or a table name or a relation name, and then a list of columns that we're going to reference within our CTE.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=93)** And then we have the term AS, and then we have two select statements.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=97)** One is known as a terminal select statement, 'cause we're working with recursion, so if you're familiar with working with recursion, you have the recursive clause and the terminal clause.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=105)** The terminal clause is basically where we bottom out.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=108)** So that would be an indication, that would be a select statement, about say how we identify when we're at the lowest position in the hierarchy we're interested in going to.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=116)** And we're going to UNION or UNION ALL that result to the results that we get from the recursive select statement.
>
> **[2:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=124)** Now, the difference between UNION and UNION ALL is that UNION removes duplicates.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=128)** UNION ALL does not.
>
> **[2:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=129)** You can have dupes with UNION ALL.
>
> **[2:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=131)** So we're just going to use UNION, but I just wanted to point out, UNION ALL is an option.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=136)** And then after we specify the terminal select statement and the recursive select statement, we have our sort of the primary driving select statement after that.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=146)** Now, let's take a look at some example data that we're going to work with.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=149)** So I've just pasted in a set of statements here, data definition language statements, which are available in the exercise files, and basically what I'm going to do is I'm going to create a table in the data_sci schema, and I'm going to call it org_structure, and this org_structure will have three attributes.
>
> **[2:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=167)** It's going to have an ID, it'll have a department_name, and then a parent_department_id, and that parent_department_id is going to refer to other IDs in the table, and we can see how that works here, in the insert statement.
>
> **[3:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=183)** So what I'm going to do is insert a value, one for each of the different departments or levels within our org structure that we were just looking at.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=193)** Now, the CEO Office is the root, so it does not have a parent.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=197)** So when we insert a row for that, we have an ID, we have a department_name, but the parent_department_id is null, so that's why you see a null at this point.
>
> **[3:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=209)** But in all of the other cases, we actually do have a parent.
>
> **[3:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=212)** So for example, rows with ID 2 and 3, those are the second level of the hierarchy, and they constitute the VP of Sales and VP of Operation, and both of those have the CEO Office as the parent, so their parent ID is 1.
>
> **[3:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=228)** And then as we move down, we see Northeast Sales and Northwest Sales.
>
> **[3:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=232)** Well, their parent ID is number 2, so they're under the VP of Sales.
>
> **[3:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=236)** And then finally, the last two rows are for Infrastructure Operations and Management Operations.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=242)** Well, their parent is VP of Operations, so their parent ID is 3.
>
> **[4:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=246)** So I'm just going to go ahead and run this to execute everything.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/hierarchical-tables?u=76281980&t=252)** And so what that did was created this table and it inserted the data that we just described, and in the next video, we're going to actually build a recursive CTE to see how we can query this data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (7), [[Microsoft Office|Office]] (3), [[Data Structures]] (1), [[CTE|Ctes]] (1), [[CTE|With clause]] (1)
> **Env Vars:** union (9), cte (7), ceo (3), recursive (2)
> **Code Identifiers:** parent_department_id (3), org_structure (2), department_name (2), data_sci (1)
> **Tools:** terminal (4)
> **Definitions:** is an  (2), known as (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Recursive common table expressions](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=0)** - [Instructor] Let's take a look at a recursive [[CTE]].
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=4)** So what we have here is a query that begins using the term with recursive, so we're working with a recursive CTE.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=13)** We name this report structure because we're basically what we're doing is reporting on the structure of an organization.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=20)** And here we specify after the name of the CTE a list of the columns that we're going to be referencing.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=28)** Now, in our org structure table that we just created in the previous video, we have three columns, ID, department name, and then the ID of the parent department.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=38)** So we're going to be referencing all of those.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=40)** And then within the recursive CTE, we specify two select statements 'cause remember, one is the terminal statement and one is the recursive statement.
>
> **[0:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=50)** Well, the terminal statement is basically the one that indicates when have we bottomed out in our hierarchy.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=56)** So for example, if we're traversing a path through the hierarchy, we might hit the bottom when we'd say hit one of the lowest level identifiers.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=65)** So here I've just picked ID seven, which I know is one of the lowest level parts of the organization.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=71)** And what I'm doing in this terminal select clause is basically selecting the ID, the department ID, and the parent department ID.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=80)** So I'm picking everything I know about that department and I'm terminating or stopping this recursion whenever I hit a row where the ID is seven.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=88)** And then I'm going to return for the row with ID seven, I'm going to return that ID number plus the department name and the parent name.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=95)** And then I'm going to take that row and I'm going to union it or combine it with the results of the recursive select clause.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=105)** Now the recursive select clause, we are going to query from the org structure, which is the table we created.
>
> **[1:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=113)** So this is similar to what we did in the terminal clause.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=117)** And we're going to select the same columns.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=119)** We're going to select the ID, the department name, and the parent department name.
>
> **[2:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=123)** However, because this is the recursive clause, we also need to have a join in here where we're rejoining on the report structure.
>
> **[2:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=133)** Well report structure is this CTE, that's the name of this CTE that we are defining.
>
> **[2:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=140)** And this is where we are implementing the recursion.
>
> **[2:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=143)** So this is the self-referential part of recursion.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=146)** We're joining to itself and we're joining using the parent ID of the row that we're working with and comparing that with the other ID, the OS ID.
>
> **[2:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=159)** So that defines the recursive clause and union results, so we're going to keep recursively iterating through the structure until we hit an ID, which equals number seven and then we're simply going to return everything that we have pulled back.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=174)** In this case, ID department name and parent department ID.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=179)** So let's run that and see what happens.
>
> **[3:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=181)** So we see with ID seven, that's the management operations [[Microsoft Office|office]], and that's in part of VP operations and it's part of the CEO's office.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=191)** So that fits what we would expect.
>
> **[3:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=193)** Now, I can also change this and run this say with ID four.
>
> **[3:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=197)** And then if we run that, we see that here we're working with the Northeast sales office that has ID four, and we see that just above that is VP sales and just above that is the CEO office.
>
> **[3:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/recursive-common-table-expressions?u=76281980&t=208)** So this is an example of how we can use recursive [[CTE|CTEs]] to work with hierarchical data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (6), [[Microsoft Office|Office]] (4), [[CTE|Ctes]] (1)
> **Env Vars:** cte (6), ceo (2)
> **Tools:** terminal (4)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Rewriting a complex query to use CTEs](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=5)** - [Instructor] In this challenge, we're going to be given a query with a subquery in the where clause, and I'd like you to write an equivalent query that uses a [[CTE|common table expression]] instead of a subquery.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=16)** Let's take a look at the query we're going to start with.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=19)** So in this case, we have a select statement where we're working with salaries, and the data_sci.employees table, and we're also working the company_regions table.
>
> **[0:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=30)** So the query that we have is to select the sum of the salary and then round the average of the salary to two decimal places, query that from the data_sci.employees table, where the region_id is in a result set where we select the id from the data_sci.company_regions, where the region_name is like east.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=51)** It has somewhere in that in the name, the pattern E-A-S-T.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-recursive-cte?u=76281980&t=56)** So the challenge is to re-write that as a query that uses common table expressions instead of a subquery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Common table expression]] (1)
> **Code Identifiers:** data_sci (3), company_regions (2), region_id (1), region_name (1)
> **UI Navigation:** select the (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Rewriting a complex query to use CTEs](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980&t=5)** - [Instructor] And here's the solution to that challenge.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980&t=7)** So the challenge was to basically move the subquery into a [[CTE]].
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980&t=12)** So what we've done here is we have defined a CTE called the east regions, and we define that as selecting the ID from the data side company regions table, where the region name is like percent east percent.
>
> **[0:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-rewriting-a-complex-query-to-use-ctes?u=76281980&t=26)** And then we have our primary query where we're selecting the sum of the salary and then rounding the average of the salary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (2)
> **Env Vars:** cte (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 7. Types of Joins

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of types of joins](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=0)** - [Instructor] Now, I'd like to take a closer look at joins.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=4)** Joins are operations that we use in [[SQL]] that allow us to combine data from multiple tables.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=9)** Now, we do that combination based on related columns in each table.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=14)** Typically, a foreign key column in one table has a value that corresponds to the primary key column in another table.
>
> **[0:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=23)** Now, there are different ways to join based on how we want to behave when we have matches or don't have matches across the two tables.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=32)** We have several types of joins, and I want to just briefly describe them.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=37)** There are the INNER joins, the RIGHT and LEFT OUTER joins, the FULL OUTER join, and then two rarely used joins, CROSS joins and SELF joins.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=48)** Now, let's take a look at each of these a little more closely.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=53)** The INNER join is what we use when we want to return rows that have matching values.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=59)** So, for example, if we have two tables, A and B, we want to use an INNER join when we want to return rows that have values in both tables.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=71)** Now, if we want to return all of the rows in one table, and then any values we look up in the other table, then we can use a LEFT or a RIGHT join.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=82)** Now, the LEFT and RIGHT refer to the position of the table name when you type out the join statement.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=89)** So for example, you might have a LEFT OUTER join on a.columnname = b.columnname.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=98)** Well, the LEFT in that case is the A, and the B is the right.
>
> **[1:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=101)** So, if you want to return to all the columns from A, you would use a LEFT OUTER join.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=105)** And if you want to return all the columns from B, you would use a RIGHT OUTER join.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=111)** Now, what happens, however, is when there is a row, say, in the LEFT table and it doesn't have a corresponding row in the right table.
>
> **[2:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=120)** Then, all of the values that we would expect to find in the B columns are simply null in the results of the join.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=128)** Now, there are times where we want to return all the rows from both tables regardless of whether there's a match in the alternate table.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=135)** And to do that, we use what's known as a FULL join.
>
> **[2:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=138)** So, we use a FULL join to return all rows from both tables.
>
> **[2:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=142)** Now, CROSS joins are hardly ever used. They're very rare.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=145)** That produces what is known as a Cartesian product.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=148)** So for each row in, say, Table A, you create an output row that includes all of the rows in column B.
>
> **[2:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=157)** So, you're basically taking the number of rows in column A and multiplying by the number of rows in column B, and that will get you the size of the result set of a CROSS join.
>
> **[2:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=168)** So, CROSS join or a Cartesian product join are rarely used.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=172)** Now, a SELF join is also rarely used, but that can be used when querying hierarchical data.
>
> **[2:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/overview-of-types-of-joins?u=76281980&t=178)** So, it's an alternative to using recursive [[CTE|CTEs]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE|Ctes]] (1)
> **Env Vars:** left (7), outer (5), right (4), cross (4), inner (3)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Inner joins](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=0)** - [Instructor] Okay, right now we're going to take a look at an inner join.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=4)** So first thing I'm going to do is just start a select statement here.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=7)** And what I'd like to do is select all of the columns from the employee table.
>
> **[0:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=12)** So I'm just going to use E period star.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=16)** So that E will be the alias for the employee table.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=18)** And the star indicates I want all of the columns.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=20)** And similarly, I want to join the employee table to the company regions table.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=25)** So I'm going to specify CR as an alias for company regions and we'll get all the columns there as well.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=32)** And so this will be from, and we'll pull this from data _sci employees
>
> **[0:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=44)** and we'll alias that with an E and we are going to do an inner join.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=54)** Now if I said just join, which I sometimes do, that's the join is a shorthand or defaults to inner join.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=61)** But I'll spell out inner join in this case.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=63)** And then I will specify the other table that we want to join too, which in this case is data_sci.company_regions.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=70)** And then of course we need to specify our on clause and we want to specify from the employee table, we want to use a foreign key.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=79)** Now the foreign key is called region_id, so we'll use that.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=83)** And we want to join to the company regions table.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=87)** And here in this case, we want to reference the primary key, which in company regions is id.
>
> **[1:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=92)** So let's review again.
>
> **[1:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=93)** We have a select statement where we're pulling all of the columns from E or Employees table and from the CR or company_regions table.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=102)** And we're joining the employees table to the company_regions table, using a foreign key in the employee_regions table, which is called region_id.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=111)** And we're joining to the primary key in company regions, which is simply called id.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=116)** So let's run that and see, I forgot to put in an alias there.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=122)** I'll run that again.
>
> **[2:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=125)** And what we have here is we see that we have it very small, but we have 1046 rows returned.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=132)** Well, 1046 happens to be the number of employees we have.
>
> **[2:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=136)** So what we've done is we've taken all of the rows from the employee's table that have a corresponding row in the company region's table and returned them.
>
> **[2:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=145)** Now the way our data is set up, all of the employees have an associated company region right now.
>
> **[2:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=151)** So anytime we go and we look up a value for a company region based on an employee, we will find one.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=158)** Similarly, all of the company regions have at least one employee associated with it.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=164)** So all of the rows in the employee tables are returned and all of the rows in the company regions table are returned in this case with this inner joint.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=172)** However, I do want to point out, there could be times where maybe there's a company region where there are no employees associated with it, in which case we would never see that company region in the result set like this.
>
> **[3:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inner-joins?u=76281980&t=184)** But in our case, since all of the employees do have a company region, and all of the company regions have at least one employee, all employees and all regions are showing up in the result set here.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_regions (3), region_id (2), data_sci (1), employee_regions (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Right outer joins](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=0)** - [Instructor] Now we're going to take a look at right outer joins.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=3)** Now with the right outer join, the basic idea is that we want to return all of the rows from the table in the right side of the joint specification and only those rows in the left side that have corresponding values.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=18)** Well, what I want to do is show how this behaves when there is a row on the right side that does not have a corresponding value on the left side of the joint statement.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=28)** So to do that, I'm going to insert a new company region and this company region, we're going to call it London, and it's based in the UK.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=36)** So we're going to insert into the data side company regions table.
>
> **[0:41](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=41)** Basically we're going to use a simple insert statement, we'll give it the primary key of eight and we'll just say, this is London and the UK is the region.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=48)** So I have a command for that here. I'm just going to run it.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=52)** And it looks like we now have the output is correct.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=58)** Let's just see. Yes, insert successfully.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=61)** So I can see that down below in the [[SQL]] console.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=65)** So I'm just going to clear this out now that insert statement.
>
> **[1:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=68)** And now we're going to do a right outer join.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=71)** Now I'm going to use the same statement I've used previously, which is select E for employee and all of the columns.
>
> **[1:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=78)** And then CR for company region, and all of the columns.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=82)** This is going to be from data sci employees with the alias of E.
>
> **[1:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=92)** And we're going to then apply a right outer join.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=97)** And we can also use right join, but I'll spell it all the way out, right outer join on data sci, company regions, and that has the alias of cr.
>
> **[1:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=110)** And now we specify the on statement, which is E.
>
> **[1:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=119)** And the foreign key in the E or employees table is region ID.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=122)** And we want to match that to the primary key in company regions or ID.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=128)** Now, before I run this, I just want to explain, I tend to break up my select statements, especially like the join clauses into multiple lines.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=135)** And so it's not always obvious like why you would refer to this as right.
>
> **[2:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=139)** And so actually if we do a little switch here and we actually change this to run it, put it all on one line, it may make more sense.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=149)** So what we're saying here is this is a right outer join.
>
> **[2:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=154)** So this is the table on the right, the specification on the right.
>
> **[2:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=157)** So we're going to return all of the rows from company regions and then the corresponding or matching rows from on the left.
>
> **[2:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=164)** So that's where this idea of on the right basically means to the right of the right outer join clause.
>
> **[2:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=172)** And with that, I'm actually going to put it back so we have a little more room to view our output.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=179)** And so I'll grab that and open that up a little more.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=182)** Now let's run this and see, now it's hard to see, but we now have a total of 1047 rows returned.
>
> **[3:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=191)** Now when we did our inner join, we had 1046 rows returned.
>
> **[3:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=195)** So we have one more row.
>
> **[3:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=196)** So let's see if we can find that one.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=198)** I believe it's going to be at the bottom.
>
> **[3:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=199)** So let's go all the way to the bottom.
>
> **[3:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=202)** And it is, and what we have here, so basically we have all of the rows from the employee's table because all employees have a company region that has a value in the company region's table.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=214)** But we have a company region, one that's in London, which doesn't have any employees associated with it.
>
> **[3:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=220)** But with the right outer join, we're basically asking SQL to return all of the rows in the table, in the right table, which in this case is company regions.
>
> **[3:50](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=230)** So let's scroll over and we see that when we're looking at the columns from the company region table, we have an ID8, a London, and a UK.
>
> **[4:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=241)** So we have the values from company region.
>
> **[4:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=243)** So that's what the write outer join does.
>
> **[4:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=245)** It makes sure we see all of the columns from all of the company regions, even ones that don't have employees.
>
> **[4:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=252)** And then in the employee columns we're just seeing nulls for everything.
>
> **[4:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=256)** So that's the other thing that a right join or a left join will do is if you do have a non-matching row, so for example, London, UK, we just return nulls for all of the values of the other table.
>
> **[4:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=270)** So in this case, we don't have a matching employee, so all the employee columns are null.
>
> **[4:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=275)** But what we do have is one row corresponding to that London, UK company region, even though it doesn't have any employees.
>
> **[4:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/right-outer-joins?u=76281980&t=284)** So if that's the kind of behavior we want, that's when we use a right outer join.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2), id8 (1)
> **Definitions:** is a  (2), basically means (1)
> **CLI Commands:** make (1), find (1)
> **Documentation:** specification (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Left outer joins](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=0)** - [Instructor] In this video, we're going to take a look at the left outer join.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=4)** So I have pasted in a query here.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=6)** A select statement that selects all of the columns from the employees table and all of the columns from the company regions table.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=14)** And in the from clause you'll notice we're saying from data_sci employees e so that specifies that we're going to be working with the employees table and aliasing it as e.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=25)** The join clause is left outer join.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=28)** That means the table on the left, in this case the data_sci employees, is going to have all rows returned.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=35)** And then we're left outer joining the employees to the company regions table.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=40)** And as with other types of joins that we've seen in our lessons we're joining on the region id and the employee and we're matching that to the company regions primary key which is id.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=52)** So let's go ahead and run this.
>
> **[0:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=54)** And see the results and see if they make sense.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=58)** So what we have here is we have 1046 rows returned.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=63)** And that actually does make sense 'cause if you remember from the right outer join when we were joining all of the rows from the right table when we joined all of the rows from the right table we actually had more rows because the company regions table has an entry for London in the UK.
>
> **[1:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=81)** Now the London, UK region does not have any employees associated with it.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=85)** Now in this case, we're doing a left outer join so we're getting all of the rows from the employees table, but only the corresponding rows in the company regions table.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/left-outer-joins?u=76281980&t=95)** Since there's no employee with a corresponding region that's tied to London, UK we're not going to be retrieving the London, UK row from company regions and that's why we end up with 1046 rows in this example.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** data_sci (2)
> **Speakers:** - [instructor] (1)

#### [Full outer joins](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=0)** - [Instructor] I'd like to look at one more type of join, and that's the full outer join.
>
> **[0:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=4)** Now in this select statement, we are querying all of the columns in the employees table and in the company regions table.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=11)** We're querying from data_sci.employees and we've aliased that as e.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=15)** We're also querying from the data_sci.company_regions, which we've aliased as cr, and we're combining those two tables using a full outer join.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=25)** Now what that means is we're going to take all of the rows from both tables.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=29)** We're going to combine the rows that have corresponding values in the foreign key of one table in the primary key of the other.
>
> **[0:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=36)** So for example, if there is an employee with a particular region ID and that region ID has a corresponding row in the company region table, we're going to combine those two sets of columns in the single row.
>
> **[0:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=48)** Now this is a full outer join, so we're going to return all of the rows from the employees table and all of the rows from the company regions table, even if they don't have a corresponding row in the alternate table.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=59)** So let's run this and see the results.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=63)** Now remember we are working with company regions table, which has an additional column that we added in a previous video for the London UK region.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=72)** And I did that to show you how when we did a right join on the company regions table using the company regions table as the right table, we got essentially an extra row.
>
> **[1:23](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=83)** Now we'll notice again we have 1,047 rows in the results set.
>
> **[1:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=87)** So let's scroll to the end.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=89)** And what we see here is that we have nulls, again, this is similar to what we saw with the right outer join, and that is we have all of the employee rows returned, but we also have all of the company region rows return, including the row for London, UK, which has no corresponding employees.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=111)** So for the employee columns, we simply specify null as the value for all of the employee columns associated with the row where we have the London, UK company region.
>
> **[2:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=122)** So with a full outer join, we get all of the rows from both tables.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/full-outer-joins?u=76281980&t=128)** And so if that's the behavior you want, then full outer join is the type of join you want to be using.

> [!info]- Semantic Content
>
> **Code Identifiers:** data_sci (2), company_regions (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choose the correct type of join](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980&t=0)** - [Instructor] Okay, here's our challenge related to joins.
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980&t=8)** Let's imagine that you need to create a query that enjoins the employees and the company departments table.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980&t=14)** Now, it's important that your query returns all of the rows from both tables.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980&t=19)** Now, this is even the case if there's no corresponding row in the other table.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-choose-the-correct-type-of-join?u=76281980&t=24)** Which type of join would you use?

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Choose the correct type of join](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-choose-the-correct-type-of-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-choose-the-correct-type-of-join?u=76281980&t=0)** - [Narrator] The solution to this challenge is to use a full outer join.
>
> **[0:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-choose-the-correct-type-of-join?u=76281980&t=9)** And the reason we're using a full outer join is because we want to make sure that we return all of the rows from both of the tables involved in the join.
>
> **[0:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-choose-the-correct-type-of-join?u=76281980&t=17)** And when that's the case, we use full outer joins.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Working with JSON

[↑ Back to Table of Contents](#table-of-contents)

#### [JSON in relational databases](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=0)** - [Instructor] Now in [[Data Science]], we're often asked to work with [[JSON]] [[Data Structures]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=5)** JSON is a very flexible and adaptable data schema that we can use for working with a lot of different types of systems, whether they're [[Databases]] or applications, or maybe third party services.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=20)** So JSON is quite popular, so it's not surprising that we're seeing JSON data structures show up in our data sets that we work with in data science.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=31)** Now, one of the nice things that has happened over the years is that there is increasing support for JSON data structures in relational [[Database Management]] systems.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=40)** So many relational [[Database Systems]], whether it's [[PostgreSQL|Postgres]], or [[MySQL]], or Oracle, have some support for JSON.
>
> **[0:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=47)** And this is really valuable because it enables us to store both types of data, both structured data, like we traditionally use with relational database management systems, as well as semi-structured data, which is what we typically use JSON for.
>
> **[1:01](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=61)** Now, this provides us a lot of flexibility in what data structure we use to capture, you know, a certain set of data while still providing some of those core features that are so valuable to us in [[Relational Databases]], like the ability to support atomic transactions and enforcement of [[Data Integrity]] rules.
>
> **[1:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=79)** Now, having JSON in relational databases have some particular benefits.
>
> **[1:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=85)** First of all, JSON is an adaptable schema.
>
> **[1:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=88)** This is really valuable.
>
> **[1:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=90)** So what this means is we can capture a JSON structure today that has a certain format.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=96)** Well, tomorrow that format might change a little bit.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=98)** Like maybe there's a new attribute that has been added to the JSON structure.
>
> **[1:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=103)** Well, we can ingest that without a problem.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=105)** We don't have to explicitly model the fact that the JSON structure now has an additional attribute.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=112)** In addition, we can support variable attributes.
>
> **[1:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=115)** So what this means is we could have a JSON structure that describes, say, a product that might be an appliance, and an appliance might have attributes like weight, and length, and width, and height.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=128)** But we might have other [[Microsoft Products|products]], like digital music, that we are selling.
>
> **[2:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=132)** Well that doesn't necessarily have a weight or a height or a depth.
>
> **[2:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=137)** Now, instead, a piece of digital music might have an artist, it might have a studio that produced it, it might have a duration or the length of the time that the music plays.
>
> **[2:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=149)** But those are different types of attributes, those others variable attributes.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=153)** JSON is well suited to supporting use cases where we have a definite need for variable attributes, and catalogs is one example of that.
>
> **[2:43](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=163)** Another example is API responses.
>
> **[2:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=165)** Oftentimes now we're building systems based on a service oriented architecture where we're making calls to different services via APIs.
>
> **[2:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=174)** Typically like [[Representational State Transfer (REST)|rest]] APIs or in high performance environment, we might use something like GRPC protocol.
>
> **[3:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=182)** But in either case, we're still getting API responses and those, ideally, we should be able to support flexible structures because there could be complex kind of information requirements in a JSON response so we want to be able to capture all of that.
>
> **[3:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=198)** Now, another example of a useful place where we might want variable structures is if we want to capture like preferences and configurations for different environments or maybe different user preferences.
>
> **[3:30](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=210)** JSON structures work really well for that as well.
>
> **[3:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=214)** Now, there are some best practices for using JSON and relational database management systems.
>
> **[3:39](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=219)** Typically, we reserve the use of JSON columns for variable schema data.
>
> **[3:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=224)** So if you have a service that returns a JSON structure and that structure might change over time, that's a great candidate for using JSON.
>
> **[3:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=233)** When we work with hierarchical data, we can, as we've seen, work with hierarchical data in relational databases, but it can be a little bit tricky.
>
> **[4:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=242)** For example, working with hierarchical [[CTE|CTEs]] isn't necessarily intuitive, but when we work with JSON, JSON really lends itself to hierarchical data structures.
>
> **[4:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=251)** So definitely a good use case for JSON and relational databases is working with hierarchical data.
>
> **[4:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=257)** And that, again, external API responses are a good candidate as well.
>
> **[4:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=262)** Now we still have plenty of need for traditional columns.
>
> **[4:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=265)** So whenever we have like fixed data structures or data structures requiring relationships where we want to be able to say, enforce, you know, data integrity or constraints that depend on, say, a value existing in another table, then that's the kind of time when we want to use the traditional columns.
>
> **[4:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=285)** So again, JSON in relational databases kind of extend the breadth of different types of data that we can capture and the use cases that we can easily accommodate.
>
> **[4:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=296)** JSON's very useful when we need some flexibility.
>
> **[5:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-in-relational-databases?u=76281980&t=300)** And the traditional columns that we use in relational databases work really well when we still have, kind of, those traditional requirements that relational databases were designed for, like fixed data structures and enforcing integrity constraints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (25), [[Data Structures]] (7), [[Relational Databases]] (7), [[Database Management]] (3), [[Data Science]] (2)
> **Env Vars:** json (25), api (3), grpc (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** mysql (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [JSON data types](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=0)** - [Instructor] Now, in [[PostgreSQL|Postgres]], we have the option of two different data types that we can use with [[JSON]].
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=6)** One is simply called JSON, and that was the original data type that was used to support JSON.
>
> **[0:13](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=13)** And it's basically a text-based version of JSON.
>
> **[0:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=16)** So it stores an exact copy of the input text.
>
> **[0:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=20)** So you can think of it as a type of text or a variable character string.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=24)** And one of the advantages of using JSON is that it preserves whitespace.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=28)** So it's literally taking the string representation of the JSON.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=33)** Now, a significant disadvantage of this is that because we're essentially treating this JSON as a string of characters, it requires re-parsing that data structure each time we do an operation.
>
> **[0:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=45)** Like if we want to go find a path or look up a value of a particular attribute, we need to re-parse that string.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=52)** Now, the JSON data type is really useful when we need to maintain an exact copy of the data.
>
> **[0:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=58)** So for example, if we're using JSON to store logs or to maintain auditing information.
>
> **[1:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=65)** We want to make sure anytime we have auditing information, we're doing minimal kind of processing on the data to manipulate it.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=71)** So JSON is really a good option when you want an exact copy of what was returned to you or provided to you for that value.
>
> **[1:20](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=80)** So for example, an API response.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=82)** If you're trying to troubleshoot something with regards to the API and you're collaborating with those developers, you want to make sure you have exactly what was returned to you without any possible manipulation by preprocessing or the way we store the data.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=98)** So the JSON data type is really useful when you want the exact string of characters, including white spaces.
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=105)** Now, the JSONB data type is what's generally considered a better version, and for many cases, it's a binary format.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=112)** It's more efficient for processing and formatting because we basically process it once.
>
> **[1:58](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=118)** Now, it does mean that we have faster querying, faster read operations, but writes can be slower because we're basically, we're going through the parsing work and storing the results of the parsing.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=128)** So when we're ingesting data or writing the data, it's a little bit slower than if we use the JSON data type.
>
> **[2:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=135)** Another advantage of JSONB is it supports GIN indexes, which makes lookups or queries much faster than they would be if we are using values within the JSON structure in our where clause.
>
> **[2:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/json-data-types?u=76281980&t=148)** So definitely consider using JSONB any time you want to be doing any kind of filtering based on the values within the JSON structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (14), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** json (14), jsonb (3), api (2), gin (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2), think of it as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Inserting JSON data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=0)** - [Instructor] Okay, so we talked about [[JSON]] and the advantages of using JSON inside of [[Relational Databases]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=5)** And we briefly discussed some differences between the JSON data type and JSONB data type.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=11)** So next let's just get a feel for what it's like to work with JSON.
>
> **[0:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=15)** So I've opened up code spaces and what I want to do here is I'm going to create a really just dead simple table in the data site schema called API responses.
>
> **[0:25](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=25)** And it's going to have a primary key called the ID, which will just be an integer.
>
> **[0:28](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=28)** And then we're going to have a column called response.
>
> **[0:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=31)** And response is going to be a data type JSON.
>
> **[0:34](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=34)** Now remember, JSON is the data type we use when we want like exactly the literal string that we get, we want to store with minimal processing.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=42)** So that's what we're going to use cuz now we're using an example of an API response.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=46)** So the most important thing is that we kind of capture exactly what the API response is, so we're going to use JSON.
>
> **[0:53](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=53)** So let's go ahead and run this create table command.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=56)** And it looks like we have created the table.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=62)** And then the next thing I want to do is I'm just going to cut this out and I'm going to paste in another piece of code for inserting.
>
> **[1:09](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=69)** And I'm just going to paste in an insert statement.
>
> **[1:12](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=72)** And so basically we're going to insert into the data site a pay response table.
>
> **[1:16](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=76)** We're going to assign a value, just pick an arbitrary integer for the primary key, but most importantly we're going to put in a JSON data structure and it's going in as a string, you'll see the single quotes, and we have a basic JSON structure with a status, and then an HCTP code, in this case 200.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=95)** Then we have a little bit of data like the user ID.
>
> **[1:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=97)** So for example, we have a user here, Jane Doe, who has ID one, two, three, and their email address is jd@[example.com](https://example.com).
>
> **[1:45](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=105)** Now, the [[Metadata]], we have a timestamp and just some other source.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=109)** So this is a very basic JSON structure.
>
> **[1:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=112)** So if we run this, we will insert that.
>
> **[1:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=116)** And now if we do a select star from data sci, I'll just clean this up.
>
> **[2:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=127)** And if we run select star from data sci responses, we see here in our result window that we have one row, and the response is a JSON structure.
>
> **[2:26](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=146)** We can see here we have status, we have code, data, and it has exactly the same format as the insert statement.
>
> **[2:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=153)** So this is how we can go about inserting data into a JSON data structure.
>
> **[2:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=158)** Now the insert operation would be similar if we had used JSONB, it's just that the right would've taken a little bit longer, nothing that we would've noticed, but it would've taken a little longer and it would've basically broken the JSON structure down into its constituent parts and put it into a data structure that is more amenable to things like indexing using gin indexes.
>
> **[2:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/inserting-json-data?u=76281980&t=179)** So that's just an example of how we can insert JSON data into a relational table that has either a JSON or a JSONB data type column defined in it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (15), [[Relational Databases]] (1), [[Metadata]] (1)
> **Env Vars:** json (15), jsonb (3), api (3), hctp (1)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1), for example (1)
> **URLs:** [example.com](https://example.com) (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Querying JSON data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=0)** - [Instructor] Okay, so now let's query our [[JSON]] data.
>
> **[0:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=3)** So what I'm going to do is I'm going to select the ID and the response from API responses in the data side schema where the ID equals one.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=11)** So let's run that.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=14)** And as we expect, we get only ID one, which is the only column in the table, and then we have the JSON structure here.
>
> **[0:21](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=21)** Now, let's say we want to get the person's name.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=24)** Well, the name is within data and which is within user and then we have name.
>
> **[0:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=29)** Well, we can do this by essentially building up a path that we use to walk through the JSON structure to get to the values that we're looking for.
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=38)** While we do that, using a notation where we have response and then a single dash and an arrow sign, and then as a string, the name of the embedded JSON structure, the substructure, in this case it's data.
>
> **[0:52](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=52)** So let's see what happens when we return response data.
>
> **[0:56](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=56)** Let's run that.
>
> **[0:59](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=59)** Now this is a little bit different.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=60)** We don't have like the success status or the 200 HTTP code.
>
> **[1:04](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=64)** We just have the JSON structure that is the value of the data attribute.
>
> **[1:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=71)** So what we're doing is we're essentially walking into the structure.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=74)** What we can follow this pattern again and put a dash arrow and then specify user, and let's see what happens when we do that.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=84)** Now what we have is just the values associated with the user.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=89)** So, okay, let's continue this pattern.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=91)** Let's go in and let's grab name.
>
> **[1:36](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=96)** And run that.
>
> **[1:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=98)** And now what we see is we have the user or the column name Jane Doe.
>
> **[1:44](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=104)** Now, because we want Jane Doe as a string, what we see is that automatically this converted it, there is sometimes you might see a convention where there is a double arrowhead, and if you run that, you get the same result.
>
> **[1:57](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=117)** But that double arrow head, if you ever see that, is just an explicit statement that says, if this is the only value, then don't return a JSON structure, just return the string value.
>
> **[2:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/querying-json-data?u=76281980&t=128)** So that is an example of how you can query the JSON's data structure using this kind of a path notation with the dash arrow or dash greater than.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7)
> **Env Vars:** json (7), api (1), http (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Indexing JSON data](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=0)** - [Instructor] Now let's take a look at working with indexes and [[JSON]] [[Data Structures]].
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=5)** So the first thing I want to do is I want to delete the API responses table and I want to recreate it, but this time I want to use the data type JSONB for the response column, which of course, is where we're going to be storing our JSON structure.
>
> **[0:19](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=19)** So I'll go ahead and run that.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=22)** And so now we have dropped that table, so I'm going to erase that.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=27)** And now I'm just going to paste in an insert statement and we'll go ahead and insert that.
>
> **[0:33](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=33)** And so this is the same insert statement I had used before, and we see we have successfully inserted that.
>
> **[0:40](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=40)** So that's basically all the same up to this point.
>
> **[0:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=42)** Now what I want to do is I want to show you how to create an index.
>
> **[0:46](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=46)** And I'll just, again, paste in the create index statement here.
>
> **[0:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=51)** Now, what this statement does, it follows this typical pattern for create index.
>
> **[0:55](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=55)** We specify an index name and then the on term followed by the name of the table.
>
> **[1:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=60)** In this case, it's data side API responses.
>
> **[1:03](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=63)** And then we specify a path to the column, or excuse me, it's not a column, it's an attribute.
>
> **[1:10](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=70)** We want to specify a path to the attribute within the JSON structure that we actually want to index.
>
> **[1:15](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=75)** So in this case, we want to actually index on name.
>
> **[1:17](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=77)** Well, we're going to use the path structure that we have seen before when we do querying.
>
> **[1:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=82)** Well, we use that same path structure to specify a path to an attribute that we want to use when we index.
>
> **[1:29](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=89)** So I'm going to go ahead and run that.
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=91)** And we get a create successfully executed.
>
> **[1:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=95)** So now we have an index on username that is the username within the JSON structure.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=102)** So that's how you can go about indexing or creating an index on an attribute within a JSON structure.
>
> **[1:49](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=109)** You just have to specify the path.
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=111)** And the path is the same path that we use when we query.
>
> **[1:54](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/indexing-json-data?u=76281980&t=114)** So it's really simple to work with JSON once we get an intuitive understanding of this path structure that we have to specify both when we are querying and when we're building indexes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6), [[Data Structures]] (1)
> **Env Vars:** json (6), api (2), jsonb (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Query a JSON column](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-query-a-json-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-query-a-json-column?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-query-a-json-column?u=76281980&t=5)** - [Instructor] Okay, here's a challenge for working with [[JSON]] [[Data Structures]].
>
> **[0:08](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-query-a-json-column?u=76281980&t=8)** Create a query to return the source attribute from an api_response JSON data structure.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/challenge-query-a-json-column?u=76281980&t=14)** So, this is the same api_response data structure that we have been using through this lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Data Structures]] (1)
> **Code Identifiers:** api_response (2)
> **Env Vars:** json (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### [Solution: Query a JSON column](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=5)** - [Instructor] Okay, here's the solution.
>
> **[0:07](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=7)** I'm creating a select statement, and I'm returning the primary key as well.
>
> **[0:11](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=11)** But the [[JSON]] structure is in a column called response.
>
> **[0:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=14)** So, I want a particular attribute within that JSON structure.
>
> **[0:18](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=18)** So, I need to specify a path to it, which in this case is data.
>
> **[0:22](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=22)** And then within the data substructure, I want to get the [[Metadata]] structure within there.
>
> **[0:27](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=27)** And then from there, I want to get source, and I want an alias that results as source.
>
> **[0:32](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=32)** So, if I just run that, we'll see that I get the source.
>
> **[0:35](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=35)** And the source is user_api.
>
> **[0:37](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/solution-query-a-json-column?u=76281980&t=37)** So, that's an example of how we can query the source attribute from a table using JSON.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Metadata]] (1)
> **Env Vars:** json (3)
> **Code Identifiers:** user_api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=0)** - [Narrator] Congratulations on completing this course on Intermediate [[SQL]] for data scientists.
>
> **[0:06](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=6)** If you're interested in continuing your studies and learning how you can use SQL to solve problems in data analytics and [[Data Science]], then I suggest you view the course [[Advanced SQL for Data Scientists]], where I go into even additional further techniques that will help you with your work in data science.
>
> **[0:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=24)** If you're also interested in [[Application Development]] or you're interested in working with large volumes of data in your data science work, then I would strongly suggest the [[Advanced SQL for Query Tuning and Performance Optimization]].
>
> **[0:38](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=38)** SQL is very easy to use in some ways, but it's also very easy to develop poorly performing queries.
>
> **[0:47](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=47)** And this course on [[Advanced SQL for Query Tuning and Performance Optimization]] helps you understand the best ways to craft queries to meet your goals from a data science or data analytics perspective while doing it in a highly performant way.
>
> **[1:02](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=62)** Now, if you work with time series data, for example, if you work with [[IoT]] sensor data or observability data around logging or monitoring complex systems, then you're probably working with time series data.
>
> **[1:14](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=74)** Well, there are certain techniques that work well with analyzing time series data, and we cover those in the Advanced SQL for Data Science Time Series course.
>
> **[1:24](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=84)** And then finally, it always helps to understand [[Data Modeling]] anytime you're working with [[Relational Databases]].
>
> **[1:31](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=91)** So I'd strongly urge you to consult the course catalog and look for courses on data modeling to help you understand the principles behind how we design relational databases.
>
> **[1:42](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=102)** My name is Dan Sullivan, and I'm always looking forward to talking to other people who are interested in SQL and data science.
>
> **[1:48](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=108)** So please feel free to connect with me on [[LinkedIn]].
>
> **[1:51](https://www.linkedin.com/learning/intermediate-sql-for-data-scientists-25322592/next-steps?u=76281980&t=111)** My idea is Dan Sullivan PDX, and I wish you the best going ahead and working with SQL for data science.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Data Science]] (7), [[Data Modeling]] (2), [[Relational Databases]] (2), [[Application Development]] (1)
> **Env Vars:** sql (9), iot (1), pdx (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/intermediate-sql-for-data-scientists-5925685/codespaces)

## Skills Covered

- Data Manipulation
- Data Analysis
- SQL

## Path Context

### In [[Moving from Data Analyst to Data Scientist]]
**1 of 11** | [[Data Wrangling in R]] →

## Appears In

- [[Moving from Data Analyst to Data Scientist]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Advanced SQL for Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis
- [[SQL for Data Analysis]] — SQL, Data Analysis

---

[↑ Back to top](#)