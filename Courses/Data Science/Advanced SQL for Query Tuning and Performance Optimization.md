---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-for-query-tuning-and-performance-optimization-22894038
url: "https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038"
duration_minutes: 129
duration: 2h 9m
level: Advanced
updated: 10/11/2023
learners: 3845
skills:
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-sql-query-tuning-performance-optimization-4413111/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHhgQSU6L_R7w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697652769241?e=2147483647&amp;v=beta&amp;t=xwvycQ_PCeWV4s2nJNE2HENhzWC6IdLHh0V2t3wGxtE"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
  - '[[Master SQL for Data Science]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Advanced SQL – Window Functions]]'
  - '[[Advanced SQL for Data Scientists]]'
  - '[[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]]'
next_courses:
  - '[[Advanced SQL for Application Development]]'
  - '[[Advanced SQL for Data Science- Time Series]]'
  - '[[Advanced SQL Project- Design and Manage a Database]]'
path_nav: '[{"path":"Master SQL Development","position":5,"total":8,"prev":"Advanced SQL – Window Functions","next":"Advanced SQL for Application Development"},{"path":"Master SQL for Data Science","position":5,"total":6,"prev":"Advanced SQL for Data Scientists","next":"Advanced SQL for Data Science- Time Series"},{"path":"Advance Your Database Administration Skills","position":8,"total":11,"prev":"Practical Database Design- Implementing Responsible Data Solutions with SQL Querying","next":"Advanced SQL Project- Design and Manage a Database"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20for%20Query%20Tuning%20and%20Performance%20Optimization.md)

![Advanced SQL for Query Tuning and Performance Optimization](https://media.licdn.com/dms/image/v2/D560DAQHhgQSU6L_R7w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697652769241?e=2147483647&amp;v=beta&amp;t=xwvycQ_PCeWV4s2nJNE2HENhzWC6IdLHh0V2t3wGxtE)

# Advanced SQL for Query Tuning and Performance Optimization

> SQL queries can be fast and highly efficient, but they can also be slow and demand excessive CPU and memory resources. For many SQL programmers, occasional bouts with long-running queries and poor performance are simply par for the course. But by gaining a better understanding of how databases translate SQL queries into execution plans, you can take steps to avoid these issues. In this course, Dan

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038) | 2h 9m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Reduce query response time with query tuning](#reduce-query-response-time-with-query-tuning)
  - [What you should know](#what-you-should-know)
- [**1. How SQL Executes a Query**](#1-how-sql-executes-a-query) (6 videos)
  - [From declarative SQL to a procedural execution plan](#from-declarative-sql-to-a-procedural-execution-plan)
  - [Scanning tables and indexes](#scanning-tables-and-indexes)
  - [Joining tables](#joining-tables)
  - [Partitioning data](#partitioning-data)
  - [Challenge: Choosing how to partition a table](#challenge-choosing-how-to-partition-a-table)
  - [Solution: Choosing how to partition a table](#solution-choosing-how-to-partition-a-table)
- [**2. PostgreSQL Tools for Tuning**](#2-postgresql-tools-for-tuning) (6 videos)
  - [Using PostgreSQL in Codespaces](#using-postgresql-in-codespaces)
  - [Explain and analyze](#explain-and-analyze)
  - [Example plan: Selecting with a WHERE clause](#example-plan-selecting-with-a-where-clause)
  - [Indexes](#indexes)
  - [Challenge: Generating a query execution plan](#challenge-generating-a-query-execution-plan)
  - [Solution: Generating a query execution plan](#solution-generating-a-query-execution-plan)
- [**3. Types of Indexes**](#3-types-of-indexes) (11 videos)
  - [Indexing](#indexing)
  - [B-tree indexes](#b-tree-indexes)
  - [B-tree index example plan](#b-tree-index-example-plan)
  - [Bitmap indexes](#bitmap-indexes)
  - [Bitmap index example plan](#bitmap-index-example-plan)
  - [Hash indexes](#hash-indexes)
  - [Hash index example plan](#hash-index-example-plan)
  - [Bloom filter indexes](#bloom-filter-indexes)
  - [PostgreSQL-specific indexes](#postgresql-specific-indexes)
  - [Challenge: Choosing an index](#challenge-choosing-an-index)
  - [Solution: Choosing an index](#solution-choosing-an-index)
- [**4. Tuning Joins**](#4-tuning-joins) (10 videos)
  - [Types of joins](#types-of-joins)
  - [Nested loops](#nested-loops)
  - [Nested loop example plan](#nested-loop-example-plan)
  - [Hash joins](#hash-joins)
  - [Hash join example plan](#hash-join-example-plan)
  - [Merge joins](#merge-joins)
  - [Merge join example](#merge-join-example)
  - [Subqueries vs. joins](#subqueries-vs-joins)
  - [Challenge: Designing a join](#challenge-designing-a-join)
  - [Solution: Designing a join](#solution-designing-a-join)
- [**5. Partitioning Data**](#5-partitioning-data) (9 videos)
  - [Horizontal vs. vertical partitioning](#horizontal-vs-vertical-partitioning)
  - [Partition by range](#partition-by-range)
  - [Partition by range example](#partition-by-range-example)
  - [Partition by list](#partition-by-list)
  - [Partition by list example](#partition-by-list-example)
  - [Partition by hash](#partition-by-hash)
  - [Partition by hash example](#partition-by-hash-example)
  - [Challenge: Partitioning a table](#challenge-partitioning-a-table)
  - [Solution: Partitioning a table](#solution-partitioning-a-table)
- [**6. Materialized Views**](#6-materialized-views) (5 videos)
  - [Materialized views](#materialized-views)
  - [Creating materialized views](#creating-materialized-views)
  - [Refreshing materialized views](#refreshing-materialized-views)
  - [Challenge: Creating a materialized view](#challenge-creating-a-materialized-view)
  - [Solution: Creating a materialized view](#solution-creating-a-materialized-view)
- [**7. Database Statistics and Identifying Slow Queries**](#7-database-statistics-and-identifying-slow-queries) (6 videos)
  - [Collect statistics about data in tables](#collect-statistics-about-data-in-tables)
  - [Analyzing execution statistics with pg_stat_statements](#analyzing-execution-statistics-with-pg_stat_statements)
  - [Reviewing execution plans with the auto_explain module](#reviewing-execution-plans-with-the-auto_explain-module)
  - [Additional analysis with other pg_stats data](#additional-analysis-with-other-pg_stats-data)
  - [Challenge: Analyze schema statistics](#challenge-analyze-schema-statistics)
  - [Solution: Analyze schema statistics](#solution-analyze-schema-statistics)
- [**8. Other Optimization Techniques**](#8-other-optimization-techniques) (7 videos)
  - [Using common table expressions to avoid repetitive computation](#using-common-table-expressions-to-avoid-repetitive-computation)
  - [Hints to the Query Optimizer](#hints-to-the-query-optimizer)
  - [Parallel query execution](#parallel-query-execution)
  - [Improving cache utilization](#improving-cache-utilization)
  - [Miscellaneous tips](#miscellaneous-tips)
  - [Challenge: Design a common table expression](#challenge-design-a-common-table-expression)
  - [Solution: Design a common table expression](#solution-design-a-common-table-expression)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Reduce query response time with query tuning](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=0)** - [Dan] No one likes waiting for a slow-running query.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=2)** The good news is that in many cases, you can speed up those queries.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=6)** Understanding how [[Databases]] translate [[SQL]] queries into execution plans will help you optimize queries.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=12)** In this course, you'll learn how SQL queries are executed, how to use different kinds of indexes to improve performance, why the query plan builder chooses a particular join method, and how to use partitioning and materialized views to reduce query response time.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=27)** With a solid understanding of how SQL queries are executed, you'll know how to tune your database schemas and queries to give you the performance you need.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=35)** My name is Dan Sullivan.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=36)** I'm an architect, and I work on large-scale data-intensive applications.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=40)** So let's dive into "Advanced SQL for Query Tuning and Performance Optimization" so you can tune your SQL queries for their optimal performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Databases]] (1)
> **Env Vars:** sql (5)
> **Speakers:** - [dan] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=0)** - [Instructor] Now before we dive into query optimization, I do want to mention a few things that I assume you are familiar with.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=8)** The first is with basic relational [[Database Design]] concepts.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=12)** So in particular, I assume that you're familiar with ideas like tables and views and indexes, and why we use them in the way we do with [[Relational Databases]].
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=23)** I also assume that you have used [[SQL]] for querying.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=27)** So you would be comfortable say writing a select statement that has a from clause a where clause, as well as maybe some order by statements or even a having by clause.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=37)** And then finally, I assume you have some familiarity with storage systems and how file systems and block storage works.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=44)** We're not going into a lot of implementation details about storage systems, but it just helps to have that frame of reference when we're talking about querying and performance optimization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (1), [[Relational Databases]] (1), [[SQL]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 1. How SQL Executes a Query

[↑ Back to Table of Contents](#table-of-contents)

#### [From declarative SQL to a procedural execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=0)** - [Instructor] [[SQL]] is a language of tabular data.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=3)** It started as a query language for [[Relational Databases]] but it's now used in data analytics tools like [[Apache Spark]] as well as other systems like the Kafka distributed stream processing platform.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=14)** So why is SQL so popular?
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=16)** The short answer is that it's well suited for working with tabular data.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=20)** Much of the data we use lends itself to tabular structures.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=24)** Retailers track customer data in tables.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=27)** Healthcare companies manage patient data with relational tables.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=31)** In fact, it's hard to think of an industry that couldn't make use of SQL and tabular data.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=36)** Another reason SQL is popular is that it's declarative.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=39)** We specify what we want without having to concern ourselves with how to get what we want.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=45)** For example, we can state what columns we want to retrieve and then filter the resulting set of rows by some condition.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=52)** The results of our queries are tables and we can use SQL to query the results of other SQL queries.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=59)** Now, I should point out that there are statements that can result in output that's not strictly tabular.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=65)** For example, some commands that have been added to recent versions of SQL to support roll-ups, cubes and other structures that are useful in reporting.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=74)** If you're a developer you're probably used to using procedural languages.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=78)** And languages like [[Java]], [[Python (Programming Language)|Python]], and C++, you specify how to do something.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=84)** For example, you might specify how to loop through an array.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=88)** In procedural languages, you directly manipulate [[Data Structures]] and perform operations in an order that you specify.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=96)** SQL statements have to be mapped from their declarative form into a procedural form in order to return the data that's specified in the query.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=105)** The procedural version of a query is known as an execution plan.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=110)** It's a sequence of steps that can scan, filter and join data in such a way that when the execution plan is done it produces the output that you specified in your declarative query.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=123)** When we develop procedural code, we're often thinking about how to make it efficient.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=127)** The same thing applies to execution plans.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=131)** While there may be many ways to execute a query some are more efficient than others.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=136)** For example, if you want to return data about a subset of customer purchases where the customer ID starts with the numbers 3014, you could look through all the rows in a say 10 million row table, but that's quite inefficient.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=151)** A better approach is to use an index which points to the location of the data blocks containing the rows you're interested in.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=159)** In this course, you will learn about query plans and the different kinds of steps that are used in execution plans.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=167)** We will discuss the trade-offs of different ways to map from a declarative query to a procedural execution plan.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=174)** And perhaps most importantly, we'll learn techniques for structuring your data and crafting your queries to produce efficient execution plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Relational Databases]] (1), [[Apache Spark]] (1), [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** make (2), apache (1), python (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scanning tables and indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=0)** - One of the simplest operations in an execution plan, is a scan operation.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=5)** This is basically the process of accessing each row in a table.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=9)** We can also scan indexes, which are a special kind of table.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=14)** Scanning's a linear operation, moving from one row to the next, and performing some operation, like applying a filter to an implemental WHERE clause.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=22)** Now, scanning is simple.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=24)** The database fetches data blocks from persistent storage or a cache, applies a filter, a join, or some other operation on the row, and then moves on to the next.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=34)** The time it takes to finish the scan, is based on the number of rows in the table.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=40)** Now, I should point out, that data in rows is not always stored together.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=45)** Columnar based storage is used in data warehouses and analytical [[Databases]].
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=51)** This can make filtering based on the value of a single, or a small number of columns, quite efficient when working with large tables.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=58)** Tuning analytical queries for columnar data stories is different from the process for tuning row oriented transaction processing systems, which is what we are focused on.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=67)** From now on, we'll assume row data is stored together unless I mention otherwise.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=73)** Scanning is often the most efficient way to work with small tables.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=77)** It can even be an efficient way to work with large tables, if there are a few queries, or the queries against the table, operate on most rows in the table.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=87)** Scanning large tables repeatedly, however, is inefficient.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=91)** Scanning all rows in a table, is called a full table scan.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=95)** If you see a full table scan in a query execution plan, it's worth looking into why a full table scan was chosen, and seeing if there isn't a more efficient way to retrieve the data.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=106)** Creating indexes is a good way to avoid full table scans, and make execution plans more efficient.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=113)** Indexes are ordered subsets of data in a table, and they're ordered in such a way, that it makes it efficient to look up a row by a particular value.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=121)** As a general rule, [[Relational Databases]] do not store table data in sorted order.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=126)** Now, there are some exceptions to this, but typically an entry in an index contains the data value, that is the basis for the index, and a pointer to the location of that corresponding row.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=139)** If your WHERE clause references the index value, you can use the index, to find rows that meet the criteria, rather than scanning the entire table.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=150)** Index data however, does have a structure that lends itself to ordering.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=154)** Trees are widely used to store indexes.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=158)** Now databases offer different kinds of indexes.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=163)** Some commonly used index types are balance trees or B-trees, which are used for equality and range queries.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=171)** Hash indexes, which are used for equality operations.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=174)** Bitmap indexes are efficient ways of performing set operations, and some databases like [[PostgreSQL|PostgreS]], provide specialized indexes for particular data types like geospatial data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Relational Databases]] (1), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **SQL:** where (2)
> **Env Vars:** where (2)
> **Best Practices:** general rule (1)
> **Speakers:** - one (1)

#### [Joining tables](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=0)** - [Instructor] [[Relational Databases]] store data across multiple tables.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=5)** For example, we may have one table with information about customers.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=9)** This data could include a status level indicating the amount of revenue generated by the client.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=15)** Rather than store all the data associated with an attribute level in the customer table, we store it in a separate table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=23)** The two tables in this example share a common value, the status level.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=28)** We take advantage of that when we need to access data from both tables.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=33)** When we have a shared column value, we can perform joins on the two tables.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=38)** This allows us to reference the corresponding data that is stored in the other table.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=45)** Keeping in mind that [[SQL]] statements describe what we want, we can ask how does the execution plan match row between join tables?
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=54)** Typically, we have a foreign key in one table that corresponds to the primary key in another table.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=61)** In our example, the status level in the customer table is a foreign key to the status table.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=69)** There are three ways to join tables, with nested loop joins, hash joins and sort merge joins.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=76)** Nested loop joins compare each row in a table to all rows in the other table.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=81)** At each step in the process, it compares keys.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=85)** Two advantages of nested loop joins are that they can be used to perform any type of join and they're simple to implement.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=92)** A disadvantage is that they can have a higher cost than other join methods.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=98)** Hash joins calculate a hash value for a foreign key and use that to look up the corresponding row in the other table.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=107)** Hash values for one table are calculated and stored in a hash table and then the other table is scanned, calculating the hash value for each key value as it goes.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=117)** Hash joins can be used for joins that have an equality comparison.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=123)** Sort merge joins start by sorting both tables.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=128)** It then compares the rows like nested loop joins, but it stops scanning when it's no longer possible to find a match later in a table because of the sort order.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=138)** Unlike nested loop joins, the driving table is processed only once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[SQL]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Partitioning data](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=0)** - [Instructor] One way to avoid scanning large amounts of data is to break those large amounts of data into smaller pieces.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=7)** This is basically the idea behind partitioning.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=10)** Large tables are stored as a set of smaller tables.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=14)** This not only helps with query performance, but it can improve the speed of data loads and delete operations.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=21)** Most importantly, when a subset of data is changed or queried, then only the petitions with that particular data need to be accessed.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=30)** Let's start with a large table.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=32)** Now, let's assume we want to access some of the data in the table.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=36)** We could scan the table, but large tables take a long time to scan.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=41)** We can improve upon scans by creating an index.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=44)** Large tables though can lead to large indexes.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=48)** If we can use a hash index, then we'll have constant time access to the data.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=53)** If we use a B-tree index, the depths of the index tree will grow as a logarithmic rate.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=60)** Now, neither of these is bad, and it's in fact much better than a full table scan.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=65)** But can we do better?
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=67)** And in some cases, the answer is yes.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=69)** We can break the large table down into smaller partitions.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=74)** Now imagine we have to do a scan.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=77)** If we know the data we're looking for is located in one of the partitions, then we can scan just that partition.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=84)** This means that operations that require scans can be done more efficiently.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=89)** To know if the data we're looking for is in a particular partition, we have to use something called a partition key.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=98)** A partition key is a column in the table that's used to determine which partition will store the data.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=104)** It's common for a partition key to be based on time.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=108)** For example, we could create one partition for each month and store data generated in a month in its corresponding partition.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=116)** We can use indexes with partitions.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=120)** Local indexes are used to improve the access time to rows in particular partitions.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=126)** We can also have global indexes that provide faster lookups to any data in the table across all partitions.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=134)** This kind of index is helpful if you need to filter data on something other than the partition key and when the data is spread across multiple partitions.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choosing how to partition a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=0)** (bright digital music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=5)** - [Instructor] Let's imagine you have a table that you use to analyze sales performance of multiple [[Microsoft Products|products]] over time.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=12)** Now you commonly need to compare sales in a month to the sales in that same month, but from the previous year.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=20)** Now, queries may include multiple products, but they're always limited to just a single month that we look at.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=27)** So what's a good way to partition this data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright digital music) (1)

#### [Solution: Choosing how to partition a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=0)** - [Instructor] The solution involves identifying the key requirements.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=8)** In this case, it's comparing sales in one month to the same month in the prior year.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=13)** Now, this makes some attribute around time or date a good candidate.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=20)** Now, multiple [[Microsoft Products|products]] are mentioned and multiple products may be included in a query.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=24)** So partitioning on individual products is not likely to help in performance because we'd just have to scan multiple partitions based on multiple products.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=35)** So ideally, a column such as a sales date would be used for partitioning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. PostgreSQL Tools for Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### [Using PostgreSQL in Codespaces](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=0)** - [Instructor] In this course we're going to work with [[PostgreSQL|Postgres]] or [[PostgreSQL]] [[Databases]].
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=5)** Now we have a couple of options.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=6)** You can install Postgres locally if you choose to.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=10)** In this course, when I'm demonstrating, I'm going to be actually using Postgres running in [[GitHub]].
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=15)** And GitHub provides a service called Code Spaces which actually makes it much easier to get started.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=21)** So I've navigated to a GitHub repository for this course.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=25)** It is Advanced [[SQL]] Query tuning performance optimization, all hyphenated.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=30)** And then there's a suffix within number dash 4413111.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=36)** That's the URL that we will use or that you can use to access the repository for this course.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=43)** And then once you've navigated to that repository, if you click on the code button toward the upper right and add a code space, what that will do is it will run a container for you which has Postgres installed along with VS Code or Visual Studio Code and IDE.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=60)** So we'll be able to work with Postgres directly using a visual studio plugin called SQL Tools.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=67)** So right now a container is being built for me and this can take a couple of minutes depending on if you have built this container before and some other factors that might influence how long this takes.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=78)** But in general, it's usually done within a few minutes.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=82)** When the container build process completes, you'll see a screen with the read me from the repository and it'll have the title advanced SQL for Query Tuning and Performance Optimization.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=92)** You'll also notice over toward the left in the Explorer, we have an icon which is shaped like a database icon, a cylinder.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=102)** That is SQL Tools.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=103)** If we click on SQL Tools, we will see that we have the option of connecting.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=108)** And so we have connections here.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=110)** And if you just click on the Postgres SQL database connection and we will see by clicking the Arrow icon, we will see that we have a Postgres database and I will click on that as well and then we have Schemas.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=125)** And within Schemas we have our public schema.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=127)** And within public schemas we have tables and views.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=130)** And under tables, we'll see some tables that we'll be using.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=134)** So for example, we have a table here called staff and we can see that we have different columns in that table.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=141)** So when we're working with Postgres throughout this course, we'll be using this database to just demonstrate certain features and capabilities of Postgres.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (9), [[SQL]] (6), [[GitHub]] (3), [[PostgreSQL]] (1), [[Databases]] (1)
> **Env Vars:** sql (6), url (1), ide (1)
> **Tools:** github (3), visual studio (2), vs code (1)
> **UI Navigation:** click on (3)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Explain and analyze](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=0)** - [Voiceover] One of the first steps in optimizing queries is understanding how they're executing.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=5)** Remember, sequel's declarative.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=7)** So for example, here's a simple declarative statement: select star from staff.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=14)** A query is a declarative statement that must be mapped into a procedural execution plan.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=20)** So we want to understand what that plan looks like.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=24)** From there, we can do a variety of things to our data model and to the query to try and make it more efficient.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=29)** The way we learn about the execution plan in [[PostgreSQL|Postgres]] is to use the explain command and we can precede a query with the command, explain.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=42)** Now, explain is used in other [[Databases]] as well, including [[MySQL]] and Oracle.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=47)** If you use another database, check the documentation just in case there may be another command that's used to display the execution plan, but for now we can just run this command and this will produce an execution plan or also called a query plan.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=63)** We'll notice here in the right panel we have a query plan which includes one step, which is just a seq scan or sequence scan on the staff table.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=74)** Now this is reasonable.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=75)** We're asking [[SQL]] to return all the rows and all the columns in the staff table.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=80)** Now I also want you to notice that there are a set of [[Statistics]] in the parentheses next to the scan operation.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=88)** Cost is a measure of computation required to complete the step.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=93)** In this example, the cost spans 0 to 24.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=97)** So the command starts at the first step of the execution or at zero time and it completes after 24 units of computation.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=104)** Now, this is just an internal metric estimated by Postgres.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=108)** It's not a measure of actual time required to run the query.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=111)** However, we can get the actual runtime by including the analyze command.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=118)** So I'm just going to close up the query plan so we don't have any confusion and add, explain, analyze, select star from staff and let's run that.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=132)** And what we see here is the time required to build the plan and the planning time results.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=140)** We also get the execution time as well.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=144)** Note that the unit of measure for both of these are in milliseconds.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=149)** Now we also see the number of rows returned and the width of the row.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=154)** This gives us an indication of how much data is returned.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=157)** We see in this example we have a width of 75.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=161)** Let's change the query to just return last name and rerun the query.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=166)** So again, I'm going to close up this panel so we don't have any confusion.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=171)** And I'm just going to reformat this slightly and we're going to ask for explain and analyze, select last name from staff and let's run that.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=186)** In this case, the width is only seven indicating less data is returned.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=193)** If you're working with large data sets or concerned about how much data is returned by a query, you can use the row count and the width to help guide you as you try to reduce the amount of data that is returned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Databases]] (1), [[MySQL]] (1), [[SQL]] (1), [[Statistics]] (1)
> **Prerequisites:** required to (3)
> **CLI Commands:** make (1), mysql (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [Example plan: Selecting with a WHERE clause](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=0)** - [Instructor] Let's continue to work with the staff table and restrict the row's return to only those with a salary greater than 75,000.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=8)** So we're going to add a where clause to our select statement.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=11)** So we'll have select, star, from staff, where salary is greater than 75,000.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=23)** And let's run this.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=26)** And we can see there are kind of down in the bottom here in the lower right, but there are 717 rows returned out of the thousand.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=35)** So let's see what steps were taken to actually produce this result.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=39)** And to do that, we're going to insert explain in front of the select and we will run that.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=46)** And now instead of results we're going to get an explain plan.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=51)** In this case, we still do a full table scan, but the explain plan has a second step where it filters by the where clause.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=61)** And we'll notice the cost is 26.5 computational units.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=66)** Now let's run the explain plan on the query without the where clause.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=72)** So let's remove the where clause and now run and get the explain plan.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=78)** And we'll notice that the cost is 24 computational units.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=83)** So the total time estimated can actually be less when returning more data if there are fewer steps in the execution plan.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=91)** Now let's actually time the query with explain analyze, and let's add back our where clause, where salary is greater than 75,000.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=107)** And let's close these up here and let's run that.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=115)** Here, the total execution time is 0.165 milliseconds.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=121)** Let's see it without the where clause.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=126)** And let's run that without the where clause, and we'll see the execution time is 0.129.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=133)** So again, sometimes adding additional steps will lead to less data being returned, but actually increase the time that a query takes to execute.

> [!info]- Semantic Content
>
> **Versions:** 26.5 (1), 0.165 (1), 0.129 (1)
> **Speakers:** - [instructor] (1)

#### [Indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=0)** - [Instructor] One common technique for improving query time is to use indexes.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=4)** With indexes, we can avoid costly full table scans.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=8)** Let's create an index on the salary column in the staff table.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=12)** To do that, we issue a command create index and we give the index a name and we'll use "IDX_staff_salary".
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=25)** And this will be on the staff table.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=29)** And within the staff table, we are going to index the salary column.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=35)** So we will run that.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=37)** Now, create index doesn't return any rows so we don't have anything in our results.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=41)** So, I'm just going to close that window.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=44)** Now, if we need to access all the rows in the table, the index won't be used.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=49)** So for example, let's clear this and let's explain select star from staff and run that.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=62)** And we'll see here that a full table scan is still performed.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=66)** Now let's add a where clause that references the salary column.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=71)** Where salary is greater than 75,000 and let's run that.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=80)** But wait, it appears that the index is still not used.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=83)** Why?
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=84)** The reason is, is that there are so many rows with a salary greater than 75,000 that the query execution builder determined it would be faster to simply scan the whole table instead of looking up those rows in the index and then reading the table.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=99)** This is a case in which our where clause is not selective enough to warrant using an index.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=104)** Let's try a different salary cutoff.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=107)** Let's try 150,000, and we'll run that command.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=113)** And here we'll see that the index is actually used.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=119)** So even though we do have an index on a table, the index may not always be used.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=126)** And again, the query plan builder is trying to build a plan which will take the least amount of time overall.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=133)** So it'll take into consideration time to, for example, look up data that's in an index and then go look up additional data that's in a table.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=141)** And so only when the conditions are highly selective are indexes used, when those conditions are so selective that they reduce the number of rows returned sufficiently so that it basically makes the query plan builder favor using an index rather than doing the brute force method of a fold table scan.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Generating a query execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980&t=0)** - [Instructor] In this challenge, we want to view a query plan.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980&t=8)** So imagine that you want to understand how a [[SQL]] Select statement is being mapped from a declarative statement to a procedural plan.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980&t=16)** How would you view the plan to execute the statement, select, ID, description, category code from [[Microsoft Products|products]] where category code in P17, R81 and U76.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** sql (1), p17 (1), r81 (1), u76 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generating a query execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-generating-a-query-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-generating-a-query-execution-plan?u=76281980&t=0)** - [Instructor] The solution is relatively straightforward.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-generating-a-query-execution-plan?u=76281980&t=8)** We insert the term explain before the select statement that we want to analyze and that will produce the query plan that will map this declarative statement into a procedural plan.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Types of Indexes

[↑ Back to Table of Contents](#table-of-contents)

#### [Indexing](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=0)** - [Instructor] One of the most important tools for tuning queries is indexing.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=4)** We'll start our discussion of indexes by looking at a simple data model.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=9)** Our example model has three tables, one with information about employees at a company.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=14)** We'll call this the Staff table.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=16)** We also have two tables with reference data.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=18)** One is the Company_divisions table, which describes functional areas for the company, And then there's also the Company_regions table, which has data about the geographic location of staff.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=30)** The reason we want to have indexes on these tables is that they help to speed up access to data.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=35)** It's often much faster to look up data in an index than in a corresponding table, which is usually much larger.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=42)** Indexes also help enforce constraints.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=45)** For example, if we have a unique constraint on a column, then, when we add a new row to the table, we can see if the value of the index column is already in the index.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=55)** This is faster than scanning the table to see if any row has a duplicate value.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=60)** The reason index lookups are faster is that they're smaller and that they're ordered.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=65)** And in addition, they're typically smaller than the tables themselves.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=70)** The big advantage of indexes is that they reduce the need for full scans.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=76)** Another factor that makes indexes so helpful for querying is that indexes tend to be smaller than their corresponding tables.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=83)** This means that they're more likely to fit in memory.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=86)** That's great news for querying, because reading data from memory is much faster than reading from hard disks, or even solid state drives, or SSDs.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=95)** Indexes are [[Data Structures]] that are separate from tables.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=100)** Indexes hold the values of the index column or columns and point to the location of the corresponding row.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=108)** Indexes are not always unique, so there can be duplicate values in an index.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=113)** Indexes are ordered, and that's an important difference from tables, which are usually unordered.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=119)** Now, indexes use storage space in addition to what's in the table.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=124)** Usually, we try not to duplicate data, but indexes are a special case.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=129)** Their contribution to efficient query processing can outweigh the cost of additional storage.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=135)** Now, this is not always the case.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=137)** For example, if most queries on a table require a full table scan, then the index may not be used.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=144)** In [[PostgreSQL|Postgres]], and in most [[Relational Databases]], you'll have a number of different types of indexes.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=150)** B-trees, or balance trees, are commonly used.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=154)** Bitmap indexes are used when columns have few distinct values, and this is known as having a low cardinality.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=161)** Hash indexes are used when we need to look up values in a key value form.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=167)** Now, Postgres also has specialized indexes, like geospatial, which are designed for specific data types.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=174)** To summarize, indexes order data so that we can have fast lookups.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=180)** We can use B-tree indexes to look up based on a quality operator or based on a range of values.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=189)** And then, finally, another benefit of indexes is that they can help us enforce constraints that exist on tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Data Structures]] (1), [[Relational Databases]] (1)
> **Definitions:** means that (1), known as (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [B-tree indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=0)** - [Instructor] Let's turn our attention to balanced tree, or B-tree, indexes.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=5)** As the name implies, the B-tree index is a tree data structure with a root and nodes.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=12)** The tree is balanced because the root node is the index value that splits the range of values found in the index column.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=21)** For example, if an index column has values from one to 100, then the root would be 50, or close to 50 if there isn't a 50 in the column.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=31)** Each side of the tree has a subtree.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=34)** The top node of the subtree splits the value of the index column so that the values less than the node value are stored to the left branch of the tree, and values greater than the value in the node are stored to the right.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=50)** This pattern continues at each level of the tree until we reach the bottom.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=57)** In this example, the B-tree has 11 nodes storing values of the index column of a table with 11 rows.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=66)** B-trees make for efficient lookups because we can always determine where in a tree a node is located by looking at a node value and branching to the left or to the right until we find a value in the tree.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=81)** In this example, we're looking for the value 15, so we make three comparisons at 50, 25, and 13 nodes.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=93)** From there, we find the node with a value of 15.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=98)** Once we reach the node we want, we can find a reference to where the corresponding row is stored, such as the address of a data block.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=107)** To summarize, B-trees are the most commonly used type of index.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=112)** It's used when there are large number of distinct values in a column.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=115)** This is called a high cardinality.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=119)** B-trees also rebalance as needed to keep the depth of the tree about the same for all paths.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=125)** This prevents a lopsided tree that would be fast to search on one side and slower on the other.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=132)** Anytime you look up a value in a B-tree, you can expect it to take a time that's proportional to the log of the number of nodes in the tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), find (3), make (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [B-tree index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=0)** - [Instructor] Okay, now let's open our database tool, if it's not already available.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=4)** Now, I'm going to navigate to the public schema where we've created our example tables.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=9)** So I'm just going to go up to connections, double click on the [[PostgreSQL|Postgres]] database and drill down through schemas to public to tables.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=19)** And I'll just show the tables we have.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=21)** Now, the tables we're primarily interested in are the company_division, company_region and staff table.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=27)** I'm just going to be working with the staff table in this video.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=32)** So what I want to do is let's just start with something really simple.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=35)** Let's do a SELECT count * from staff.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=37)** So let's do a SELECT count * from staff.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=46)** And I'm going to run that on the active connection.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=50)** And that'll show me that we have a count of 1,000.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=55)** So we have 1,000 rows in the table.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=57)** Now let's see what the data actually looks like by changing this query to SELECT * from staff.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=65)** And let's run that.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=67)** And I'm just going to slide this window over a little bit.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=71)** And what we can see here is we have things like names and emails, departments, start_date, some job title and some other information as well.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=82)** So what I'd like to do is I'd like to get a list of all the staff members who have a particular email.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=88)** So for that, I'm going to add a WHERE clause to the SELECT statement and I'm going to say WHERE email equal to, and I want to look for someone with email bphillips5@[time.com](https://time.com).
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=108)** Now let's just execute that by running on the active connection.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=112)** We see the person has ID six, last_name Phillips, email is Phillips.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=117)** And their start_date looks like it was in 2013.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=122)** So we have one employee that shows up.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=125)** So let's take a look at the explain plan to see how we went about and figured out that there was one employee that met the criteria.
>
> **[2:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=135)** And what we'll see is that we're using a sequence scan.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=139)** So a sequence scan basically just scans the entire table.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=142)** Now, this sequence scan took 26.5 computational units.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=148)** So we just want to remember that so we can compare it to other results.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=153)** Now, what I want to do is I'm going to just make a copy of that and save that.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=159)** And now what I want to do is create an index.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=162)** And in particular, I want to create a B-tree index on the email column.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=166)** Now, B-tree is the default type of index used.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=169)** So we can just use a basic create index statement without specifying B-tree.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=175)** And to do that we can say create index and let's give it a name that starts with idx and the name of the table, in this case, staff, and the column we're going to index, which is email.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=187)** And then we're going to create index idx_staff on the staff table.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=193)** We're going to use the email column.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=196)** So let's run that.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=198)** And the index is created and there are no rows returned so we don't see anything showing up over here on the other side.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=204)** Now what I want to do is go back.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=208)** So now let's see what the query plan builder does now that we have an index available.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=215)** Okay, so what happens is the query plan builder uses the index to do what's called an index scan.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=221)** So rather than scan the whole table, we're going to scan a much smaller index.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=225)** And what that allows us to do is to basically find the rows that we were looking for at a much lower computational cost.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=233)** Well, notice here our cost is about 8.3.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=237)** 8.29 is the actual cost.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=240)** So that's quite a bit different from our original cost when we did not have an index.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=247)** So what we see here is when we have a B-tree index on the column or a column that's used in a WHERE clause, we can significantly lower the cost of running a query by avoiding say, full table scans and using index scans instead.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=264)** Now, one last thing I want to do is just drop the index 'cause I just want to clean up and make sure I don't leave any unintentional or unwanted indexes around.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=272)** So I don't need this at the moment, so I'm going to drop idx_staff_email and run that.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=281)** And then our index should be dropped.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Code Identifiers:** start_date (2), company_division (1), company_region (1), last_name (1), idx_staff (1)
> **SQL:** select (4), where (3)
> **Env Vars:** select (4), where (3)
> **CLI Commands:** make (2), find (1)
> **Versions:** 26.5 (1), 8.3 (1), 8.29 (1)
> **URLs:** [time.com](https://time.com) (1)
> **UI Navigation:** click on (1)

#### [Bitmap indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=0)** - [Instructor] Now we'll take a look at a special kind of index that is well suited for low cardinality columns.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=7)** Bitmap indexes store a series of bits for indexed values.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=12)** The number of bits used is the same as the number of distinct values in a column.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=17)** For example, a column that has either a yes or no value would require two bits, one corresponding to the yes, and one corresponding to the no.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=28)** We aren't restricted to Boolean or yes/no columns.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=33)** We could have three or more values.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=35)** For example, if we have a pay type which has three possible values, we could use three bits to represent the pay type.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=45)** One of the advantages of bitmap indexes is that we can perform Boolean operations quickly.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=51)** For example, anding two bitmaps is a fast operation, so we could use it to find all union members who have hourly pay rates.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=61)** Bitmaps are used with low cardinality columns, especially when we want to filter on those columns or perform Boolean operations like and, or, or not.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=72)** While bitwise operations are fast, updating bitmap indexes can be more time consuming than other indexes, so they tend to be used in read intensive use cases like data warehouses.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=86)** Some [[Databases]] like Oracle lets you create explicit bitmap indexes, but [[PostgreSQL|Postgres]] does not.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=93)** Instead, Postgres will calculate bitmap indexes on the fly when they can be used to improve query performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Databases]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bitmap index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=0)** - [Instructor] Let's see an example where [[PostgreSQL|Postgres]] creates bitmap indexes on the fly.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=5)** We'll work with the staff table again.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=7)** This time, let's take a look at job title.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=10)** And first thing I'm going to do is let's list all the distinct job titles.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=14)** So, I will select DISTINCT job_title from staff, and let's also order by job_title.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=30)** Take advantage of our popups here.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=32)** And, let's see, select DISTINCT job_title.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=35)** Give that a run.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=37)** And what we'll see here, there are 186 distinct job titles.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=44)** So, let's take a look at some of these.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=46)** Let's pick one, in particular.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=47)** How about, let's see, oh, operator.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=51)** Let's go, and now, let's run a different select statement.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=56)** Let's select star from staff, where job_title is equal to operator.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=67)** And let's just run that, and we'll see we get a list of 11 rows.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=74)** Now, let's see how that was executed.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=77)** So, let's put an explain.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=78)** Let's have, for an explanation here, and we'll run that.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=83)** And not surprisingly, we did a sequence scan on the staff table.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=88)** So our cost was 26.5 for that.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=92)** Now, let's create an index on the table.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=95)** So, let's cut this out, and we'll copy that and save that for later.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=100)** And let's create another index.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=101)** And this time, we'll create an index called idx_staff_job_title.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=111)** And we'll create this on the staff table.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=115)** And the specific column we're creating it on is called job_title, and let's create that.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=125)** Okay, so now we have an index on the job_title column.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=131)** So let's go back to our explain.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=133)** So we're going to explain our select star from staff, where job title is equal to operator.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=138)** If we build this plan, okay, so what we'll notice here is we created an index which, by default, is a B-tree index, but we're not using a B-tree index here.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=150)** Instead, the query plan creates a bitmap index and performs a bitmap index scan.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=156)** Now, Postgres uses those when an index scan would reach too much data, but a full table scan is not warranted.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=163)** Also, notice the query plan uses a bitmap heap scan, which only visits data blocks that are needed and does not scan all the index blocks.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=174)** So that's an example of a case where Postgres will create bitmaps on the fly and use those rather than the B-tree index that we actually created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (3)
> **Code Identifiers:** job_title (6), idx_staff_job_title (1)
> **Env Vars:** distinct (2)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 26.5 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Hash indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=0)** - [Instructor] The next type of index we'll discuss is the hash index.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=4)** The basis for this kind of index is a function called a hash function.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=8)** Hash functions take an arbitrary length data and map it to a fixed-size value.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=13)** Hash values are designed so that different inputs will produce different outputs.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=18)** Now, occasionally, two different inputs will produce the same output, but that's very unlikely.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=24)** In general, even a slight change in an input will produce a different hash value.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=30)** The hash value that is created can vary in size depending on which hash algorithm is used.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=35)** You'll notice in this example that similar input strings can produce widely different hash values.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=42)** Adding a single letter or changing the case of a letter is sufficient to lead to a new value.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=48)** Now, here are a few things to keep in mind about hash functions.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=51)** They're used only for equality comparisons.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=54)** Hash values won't help if you want to filter on a range of values.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=58)** Some of the more recent versions of [[PostgreSQL|Postgres]] have made improvements on hash indexes, and now, these hash indexes can be smaller in some cases than B-tree indexes but just as fast.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=71)** This can be an advantage because smaller indexes are more easily fit within memory, and that can be a help with performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Hash index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=0)** - [Instructor] Let's create a hash index on the email column of the staff table.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=4)** The email column is a good candidate for hash indexing, since the email should be unique to each person and it's likely we want to be able to, say, look up a person's data using their email.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=16)** Also, it's not likely that we'd want to perform a range scan query using email address.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=23)** So to specify a hash index, we start with create index, and of course, we give it a name, so let's call this idx_staff_email, and we're going to create this on the staff table.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=38)** Now, instead of immediately specifying the column, at this point, we introduce a new clause called using hash, and that just tells the [[PostgreSQL|Postgres]] that we want to use a hash index on the column email.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=55)** And so let's run that, and so now we have created an index.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=62)** Let's take a look at what an explain plan will look like when we try and select star from staff where email is equal to bphillips5@[time.com](https://time.com).
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=81)** Looks good.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=84)** Okay, so we do have that correct, so now let's see how the explain plan worked, and what we'll see here is, we used an index scan using the idx_staff_email, and it cost about eight computational units, 8.02, and let's do a quick check.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=106)** Okay, so that was about eight, 8.02.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=109)** Let's see what happens if we use a B-tree index.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=114)** So let's drop index idx_staff_email.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=123)** So we dropped that.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=124)** Now let's just create index idx_staff_email on staff using the email column, and so by default, we're going to create a B-tree index, and now, let's explain this and see what happens.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=148)** And we explained, and it was slightly more expensive, 8.29.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=152)** So for this table, it's only a thousand rows.
>
> **[2:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=154)** Hash index didn't buy us that much performance, but if you have tables with millions of rows and you can use a hash index, you'd definitely see some significant performance difference in B-tree versus hash indexes if your use case happens to be a good candidate for using hash indexing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Code Identifiers:** idx_staff_email (4)
> **Versions:** 8.02 (2), 8.29 (1)
> **URLs:** [time.com](https://time.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bloom filter indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=0)** - [Instructor] Sometimes when we write queries, we want to filter out data and find like a very specific group of rows.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=8)** For example, if we're working in, say, a retail industry and we want to analyze different customers and we group customers along different attributes, like what geographic region do they live in?
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=19)** How frequently do they shop at a store?
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=21)** What's the total amount of sales they might have used?
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=25)** And are they a loyalty card member?
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=27)** And so on, and so we might have a large number of sort of conditions that we want to satisfy because we want to find something very precise.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=35)** And so in that way, it's kind of like finding a needle in a haystack.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=38)** And one of the questions we have or we need to address when we're tuning queries like that is how do we index a table like that in such a way that, one, it's efficient we can efficiently query the data?
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=53)** But also we don't want to have a crazy large number of indexes that we need to maintain, because that takes up a lot of space and every time we insert a row we need to update all of those indexes.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=62)** This really is a challenge and it's almost like an edge case in indexing, but it does come up frequently enough that there are particular solutions that seem to work well.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=73)** Now you might think, "Well, we just organize our data."
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=76)** So, for example, if we have a large number of chunks of data, which we call partitions, and we're going to be discussing that shortly, we might organize our chunks of data or our partitions in a certain way.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=89)** Like, we might have a column and the column might have an integer value.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=93)** And so anything with a column value of between one and 10 we put in one block, and 11 to 20 we put in another block, and so on.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=100)** And that way if we know the value of the column, we can pretty quickly determine which block we should go retrieve.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=106)** And that works really well.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=108)** That actually is a great strategy in many cases.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=111)** However, the constraint on using that is that strategy only works well when your lookup criteria is the same as your sort of organizing principle that you used for ordering the partitions.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=123)** When you're looking for something or using some criteria that's different than your organizing principle for the data blocks and the partitions, then it doesn't really help so much.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=133)** So, for example, we might arrange our data volumes by a particular kind of code, but we might want to look up by several different codes, but of different types of codes.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=146)** So, in that case, a different strategy that works well is something called a bloom filter.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=152)** Now a bloom filter is basically a way of filtering out, in this case, like blocks or rows, that definitely don't meet our criteria, but the bloom filter might return some results that actually don't meet our filter criteria, but somehow they kind of slip past that check.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=169)** And so what a bloom filter does is it allows us to trade off things like keeping a large number of indexes and storing a large amount of data.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=179)** So we trade that for a more probabilistic approach in which we get the results back and we can know for sure that the data we're looking for is in our results, but then we may also have some extra stuff that actually didn't quite fit the filter, and that is a trade-off.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=195)** And the question is, is that a good trade-off for you to make from an indexing strategy perspective?
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=202)** Well, it depends.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=203)** And it depends because a bloom filter index is probabilistic, which means it's not deterministic, we might get some results that aren't actually fitting our filter criteria.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=215)** But it's really space efficient, highly space efficient.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=218)** And the reason it is so space efficient is that we lose information.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=223)** It's a lossy representation, unlike, say, a B-tree index where we don't lose information.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=228)** So we're losing a little bit of information, but we're saving a lot on storage space.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=233)** And because of this, when we get results back we may have some false positives.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=238)** So if we can quickly filter through those false positives afterwards, then it may be useful to use a bloom filter.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=245)** Now, typically, bloom filters are especially useful when we're querying arbitrary combinations or a large number of attributes.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=254)** Now we might think, "Well, we could use B-tree indexes."
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=257)** And B-tree indexes in many cases are faster.
>
> **[4:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=261)** But with B-tree indexes we would have to create an individual index for each column that is in the combination of columns that we're interested in querying on.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=272)** That's not the case with a bloom filter.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=275)** With a bloom filter index, we create a single index.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=279)** So, in this case, I'm going to create a custom bloom index on a table called customer features.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=283)** And I'm going to assume that in this customer features table I have a bunch of columns, and I'm particularly interested in C1, C2, and so on through C8.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=292)** So I have eight columns that I'm interested in.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=294)** And it could be any combination, I could have values for C2, C5, C8, or I could have combinations for C1, C4, C5, C6, C7.
>
> **[5:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=305)** We could use this one index for any of those combinations.
>
> **[5:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=308)** We wouldn't have to have a bunch of different indexes.
>
> **[5:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=312)** So, one, it's helpful because we don't have to have as many indexes.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=315)** And also it's helpful because the size of the index itself can be smaller because we control the size of the bloom filter index, how much data we use to store an entry in this index, and we specify it in terms of the length of the number of bits that we want to use to represent an index entry.
>
> **[5:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=335)** In this case, I'm using 160 bits to represent eight different columns.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=340)** Now one thing to know is that we can trade-off storage space for more certainty around false positives.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=348)** So the longer the length of the index entry, the smaller the chance of false positives being included in the results when we use this index.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=358)** Now bloom filter types of index work with integers and text data types.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=363)** Now, because the bloom filter index is an extension, that is, it's not part of the [[PostgreSQL|Postgres]] core, if we want to use bloom filter indexes, the first thing we need to do in our database is to create the extension, if it doesn't already exist, by using the create extension if not exists bloom command.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=380)** And we just need to do that once, you know, once a database is created, and then it will be available for us.
>
> **[6:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=385)** And then, we can start creating bloom filter indexes as we see here in this example at the top of the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [PostgreSQL-specific indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=0)** - [Instructor] In addition to the indexes we've already discussed, [[PostgreSQL]], or [[PostgreSQL|Postgres]], has some specialized indexes that you won't necessarily find in other [[Relational Databases]].
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=10)** These include the GiST, the SP-GiST, GIN, and BRIN indexes.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=16)** Let's take a look at each of these.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=19)** The GiST index, which stands for generalized search tree, is not a single type of index.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=25)** It's more like a framework for implementing custom indexes.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=30)** SP-GiST is an example of one of those indexes that can be implemented with GiST, and SP-GiST stands for space-partitioned GIST, and it supports partitioned search trees, and those are useful when we have nonbalanced or skewed distributions of data, and so SP-GiST is used for nonbalanced [[Data Structures]].
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=51)** And this is useful because sometimes, we have to support partitions that we don't want to have the same size.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=58)** GIN indexes are used for text indexing.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=61)** Now, lookups with GIN are faster than with GiST, but the builds can be slower than they are with GiST, and the indexes can be two to three times larger.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=70)** So GIN versus GiST is an example of what we often face when we work with different kinds of [[Algorithms]], which is sometimes, we optimize for space, and sometimes, we optimize for time.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=81)** And often, there's a tradeoff between the two.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=85)** Now, a BRIN index is a block range indexing mechanism, and it's used for large datasets, and basically, it allows us to divide data into ordered blocks, and within those blocks, we can keep min and max values that are oriented with values within the index.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=101)** And then, what this allows us to do is quickly identify blocks that have the data that's in the range we are interested in, and that allows us to search only the blocks that have the match that we're interested in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (1), [[PostgreSQL|Postgres]] (1), [[Relational Databases]] (1), [[Data Structures]] (1), [[Algorithms]] (1)
> **Env Vars:** gin (4), brin (2), gist (1)
> **Definitions:** stands for (2), is an  (2), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choosing an index](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980&t=0)** - [Instructor] In this challenge, we're going to choose an index type for a table that has millions of rows.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980&t=11)** And this table has a sensor ID column, which is a unique identifier for a sensor.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980&t=17)** Now each sensor generates hundreds of rows of data per day, and users of this dataset, they'll be looking up specific sensors one at a time.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980&t=28)** What kind of index would you use?

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Choosing an index](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=0)** - [Instructor] The solution to this challenge is to use a hash index.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=9)** Now, the reason is that the sensor ID that we're going to be looking up on is high cardinality.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=15)** That means there's many, many different values, and we're using equality conditions to filter the rows.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=23)** And also, hash indexes provide essentially a constant time operation.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=28)** So as the size of the table grows, the size of doing the lookup in the index does not grow, which is not the case when we're using BTREE indexes.

> [!info]- Semantic Content
>
> **Env Vars:** btree (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Tuning Joins

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=0)** - [Instructor] Joins can be an expensive operation so they're a good target for your tuning efforts.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=5)** Let's take a look at the different kinds of joins that are available.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=9)** The four types of joins in Sequel are the inner join, the left outer join, the right outer join, and the full outer join.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=19)** The inner join is the most common type of join.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=23)** The inner join returns rows from both tables that have corresponding rows in each of the tables.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=31)** The left outer join returns all rows from the left table.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=36)** Now, in the example here, the left table is company regions.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=40)** It's shown as above here, but if the table names were on the same line as the left outer join statement then the company regions would be to the left of the join term.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=51)** Only rows in the right table that have matching keys in the left table are returned.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=57)** Rows in the left table without a matching row in the right table will have nulls in the column selected from the right table.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=66)** The right outer join works like the left outer join but in the other direction.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=72)** So, in this example query here, the right table is called staff.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=77)** Only rows in the left table that have a matching key in the right table are returned.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=83)** Rows in the left table without a matching row in the right table will have nulls in the column selected from the left table.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=91)** The full outer join returns all rows from both tables.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=96)** When there isn't a matching row in one of the tables the nulls will be returned for the columns that are selected from that table.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=103)** For example, if there's a row in company regions but no row in staff that have a matching key then the columns from the company regions will be returned and the columns from the staff will all be null.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=116)** We can think of different kinds of joins in terms of Venn diagrams.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=120)** The inner join is the overlapping area of two tables.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=125)** Left and right outer joins are all the regions of one table and the overlapping areas of the other table.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=132)** A full outer join is the combination of the two.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=137)** From a tuning perspective, prefer inner joins if they're sufficient to meet your needs.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=143)** Outer and full joins can require more steps than inner joins.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=149)** However, if you need to know which rows do not have corresponding rows in the other table, then use one of the other joins.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Nested loops](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=0)** - [Instructor] Now let's look at how execution plans map declarative joins into procedural operations.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=5)** We'll start with nested loop joins.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=8)** Nested loops are a naive approach to joining tables, but their big advantage is that they will work with any kind of join, using either equality, inequality, or range operators.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=18)** As the name implies, a nested loop join works by running two loops, one within the other.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=24)** The outer loop iterates over one table called the driver table.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=29)** The inner loop iterates over the other table called the join table.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=34)** The outer loop executes once, and the inner loop runs once for each row in the join table.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=40)** Let's look at an example.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=42)** Here we want to join some data about customers and their status level, which indicates how much revenue the customer generates.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=50)** Now, the status level is a foreign key in the customer table and the primary key in the status table.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=56)** The customer table is the driver table, and the status table is the join table.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=61)** We start at the first row in the customer table, and see the status level is silver.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=67)** We compare that to the first row of the status table.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=70)** The status level in that row is gold.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=73)** The status levels don't match, so we move on to the next row in the join table.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=78)** In this case, the second row has a primary key of silver, so we have a match.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=83)** We can stop executing the inner loop and return the second row.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=87)** Now we continue to iterate over the driver table with the outer loop.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=91)** Now we're at the second row of the driver table, and we see that the status level is bronze.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=96)** We start another iteration of the inner loop at the first row of the join table.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=102)** The primary key of the first row in the status table is gold, so the keys don't match.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=107)** Next, we check the second row of the join table, and see the primary key there is silver.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=113)** Still no match, so let's keep looking.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=116)** When we reach the third row of the status table, we find matching keys.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=120)** We can return the row and stop iterating the inner loop.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=124)** Now we're at the third row of the driver table, and compare the foreign key of that row to the first row of the status table.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=133)** We have a match, so we can stop iterating right away.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=137)** So that's the basic idea behind nested loop joins.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=140)** As noted, their big advantage is that they work with any kind of join condition.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=145)** There's also low overhead.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=147)** We don't need to create other [[Data Structures]] or sort tables before looking for matches between foreign keys and primary keys.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=155)** Nested loops work well with small tables, especially if the large table has an index on the join column.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=162)** Now, in terms of disadvantages, nested loops can be slower than other join methods.
>
> **[2:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=168)** If a table does not fit in memory, then we'll get an even bigger performance hit, because rows will have to be read from persistent storage.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=177)** Indexes can improve the performance of nested loops.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=181)** This is especially the case if your indexes include all the columns returned by your query.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=187)** The execution plan won't have to read from the table.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=190)** It can just return the data from the index.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=193)** This is called a covered index, and it's a good technique to keep in mind when tuning queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Nested loop example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=0)** - [Instructor] Now we'll take a look at an explain plan that uses nested loops.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=4)** We'll use a simple query over the staff and company regions table.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=9)** So specifically we're going to look at SELECT, and I'm going to look at ID.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=16)** Now for staff I'm going to alias it using an s, so I'm going to say s.id, and we'll look at the last_name, job_title, and the company_region, country.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=36)** And I'm going to SELECT FROM the staff table and alias that as s.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=42)** And then I'm going to INNER JOIN on the company_regions table.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=49)** And I'll just grab that off the popup there, and we'll alias that as cr.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=54)** Now we need to specify how we're going to join.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=57)** We're going to join ON the region_id in the staff table, and we're going to join that to the region_id in the company_regions table.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=70)** Now let's just run this and take a look at the results.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=74)** And actually, I'm just going to reformat it slightly here, just so it's a little easier to read.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=80)** There we go, okay.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=82)** So what we see here is we have the columns that we have specified, the id, last_name, job_title, and the country.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=93)** Now let's look at what the EXPLAIN plan has for us.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=99)** And we'll run that.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=102)** In this case, the Query Plan Builder determined that a Hash Join is the most efficient way to join these tables.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=109)** That seems logical, since there are few distinct company regions, and we are using an equality operation on the join.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=117)** But we want to see what a nested loop join looks like.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=120)** So we'll force the Query Plan Builder to use a plan based on nested loops.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=126)** Now to do this, we're going to enter three commands to force the use of nested loops.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=131)** And I'm going to set those above the statement here.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=136)** And those commands are set enable_nestloop
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=146)** equals true, set enable_hashjoin equals false, and set enable_mergejoin equals false.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=171)** Now, this is a way to specify directives to the Query Plan Builder.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=176)** Other [[Databases]] uses hints which are incorporated into the SELECT statement.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=181)** If you're using a database other than [[PostgreSQL|Postgres]], I suggest you check your documentation for the syntax to use.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=187)** Now, when we execute the explain plan, we'll see that a nested loop is used.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=192)** So let's run that.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=195)** I see I mistyped enable_nestloop, so I've corrected that.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=198)** So let's run this.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=202)** And we'll scroll over to our results.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=205)** So, we see the use of nested loop starting with a full table scan of the staff table, and then looking up company_regions using an index scan.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=214)** This is more efficient than the naive implementation of nested loops, because it uses the index to minimize the number of rows that need to be checked in the join table.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=224)** Postgres creates an index for all primary key columns.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=228)** In this case it's using the primary key to optimize the nested loop.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=232)** If the primary key did not exist, the Query Plan Builder would've had to use a full table scan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Databases]] (1)
> **Code Identifiers:** company_regions (3), last_name (2), job_title (2), region_id (2), enable_nestloop (2)
> **Env Vars:** select (3), inner (1), join (1), explain (1)
> **SQL:** select (3), inner join (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hash joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=0)** - [Instructor] Another algorithm for performing joins is the hash join.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=4)** Hash joins use a function to map data, such as a key value, into a value that can act as an index in an array.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=13)** Hash functions are designed so that the output value is virtually unique across all the values in the domain or set of input values.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=21)** Even slight changes in the input value can lead to different outputs.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=26)** Part of the process of hash joining is building a table of hash values.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=31)** The smaller of the two tables is used.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=35)** For each key value in the smaller table, we compute a hash value and store it in the table.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=41)** The next step is called the probe phase.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=45)** In this step, we calculate the hash value of the key in each row, and then look up the corresponding value in the hash table.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=54)** The hash table contains a pointer or a reference to the location of the row we're joining to.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=61)** It's important to note that hash joins only work with the equality conditions, they don't help when using inequality operators in the join.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=71)** Also, the total time required to perform the join is based on the time required to build the hash table and go through the larger table calculating hash values and performing lookups.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=82)** The key advantage of hash joins is that they can provide fast lookups.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=86)** That can be faster than other join methods.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Hash join example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=0)** - [Instructor] We're back in the IDE now to see what an explain plan with a hash join looks like.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=5)** We'll start with the commands that will force the use of a hash join.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=9)** So I will change enable_nestloop to false, and we'll set enable_hashjoin to true.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=19)** And now, we will simply paste in the query that we've been using for this exercise.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=27)** And again, in this query, we're going to query from the staff table, and from the staff table, we're going to get the ID, the last name, and job title.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=35)** And then, we're also going to join to the company_regions table.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=38)** And from the company_regions table, we're going to get country.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=41)** So let's run this and see what a hash-join query plan looks like.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=47)** And we'll just scroll over to the results pane for the explain plan.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=53)** Now, what we'll see here is, first of all, the hash join has a total cost of about 49 computational units.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=61)** There is a hash condition, so the condition that we're working on is basically comparing the staff region ID to the country region ID.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=71)** Now, at line three, we see that there's a sequential scan of the staff table, and then at line four we have a cost for hashing, and the hash is applied to the company regions table.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=84)** And we apply that hash after we do a sequence scan to the company regions.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=89)** So again, basically, we've decided, or the query plan builder actually has decided, that it's going to use a hash join.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=96)** It's going to calculate the hash based on the company region's region ID, and then use that along with the sequential scan of the staff table to produce our output.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=109)** So this is an example of what a hash join explain plan looks like.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_regions (2), enable_nestloop (1), enable_hashjoin (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### [Merge joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=0)** - [Instructor] The merge join is the last join algorithm we'll examine.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=4)** Merge joins, also known as sort merge joins, sort the input table prior to looking up rows by key values.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=12)** By sorting, the algorithm can take advantage of ordering of the tables to reduce the number of rows that have to be checked.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=19)** Let's look at an example.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=21)** Assume we have performed the sort operations.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=24)** In this example, we're joining two tables on region_id.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=28)** The first row of the tables have a region_id of one, so we have a match and we can return that row.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=36)** Next, we move to the second row of the larger table.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=39)** Again, we have a match on the first row of the smaller table so we can stop after the first row in that table.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=47)** Now, we move on and focus on the third row.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=50)** There's no match with the first row of the second table, so we advanced to the next row of the second table.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=58)** There's no match on the second row, so we advance to the third row of the second table and here we find a match.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=68)** So next, we advance to the fourth row of the first table and continue the process.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=74)** We know that the value we're looking for in the second table must be equal to or greater than the last match value.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=82)** In this case, we have a value of four in the larger table and the last value we saw in the smaller table was three.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=90)** There's no reason to consider it any rows before the three in the smaller table, so we can start looking for the match from the row with the value of three.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=100)** As you can see, this is similar to nested loop joints, but because the tables are sorted, we can often start iterating farther down in the second table and do not have to start the scan at the top of the table.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=114)** Now, something to keep in mind about merge joins is that they are only used with equality join conditions.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=122)** The time required to execute the join is based on table sizes and how long it takes to sort and scan.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=130)** Merge joins are especially useful when large tables don't fit into memory because we can do fewer joins from persistent storage than we would likely need to do if we were using a nested loop join.

> [!info]- Semantic Content
>
> **Code Identifiers:** region_id (2)
> **CLI Commands:** find (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Merge join example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=0)** - [Instructor] We'll now see what a mergejoin looks like.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=2)** We'll start with our directives, and we will disable the use of a hashjoin by setting enable_hashjoin to false, and we'll enable the mergejoin by setting the directive to true, and we'll paste in, once again, our query that we've been using, and again, we're going to look at the staff table, and from the staff table, we're going to return the id, last_name, and job_title, and from the company_regions table, we're going to return the country, so let's run this and see what a mergejoin looks like, and we'll just scroll over to the panel with our explain results, and what we'll see, starting at the top here, is, first of all, the mergejoin costs about 132 computational units, so this is definitely not the optimal plan, but that's okay.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=52)** We are interested in understanding what the structure of a mergejoin looks like.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=56)** Well, the first thing we'll see is that we're being driven by a merge condition, and our merge condition is, of course, matching the staff region_id with the company region's, region_id, so basically, what we need to do is, for each table, we're going to be sorting on the key that we're using, so in the case of the staff table, we're going to sort on the staff region_id, and in the case of the company_regions table, we're going to sort on the company_regions id.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=84)** Once we have those two sorts, we can actually do the merge operation combining the results of the two sorted results set.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=95)** Now, in general, the query builder will choose the optimal join method, and we use the directives that we've used here to compare the cost between different join methods.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=106)** Now, if you believe the builder is not choosing the best method, you can use the explain plans to understand why, so, for example, you might expect the builder to use an index scan, but it uses a full table scan.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=120)** That's a clue that your index may be missing, so my only suggestion with regards to using directives and hints is to use them with extreme caution.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=131)** They're very useful when learning things like the structure of a query plan and what a mergejoin operation actually looks like.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=139)** However, when you're running code in production, the query plan builder makes use of [[Statistics]] about the data in your database and the distribution of that data to figure out what's the best way to join a table, so use things like directives and hints with caution because, especially because even if they work well now, and you found an optimal solution right now that the query plan builder didn't find, over time, your data distribution's going to change, and that may no longer be the case, so definitely use directives and hints for a learning perspective, but use them in production with caution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Code Identifiers:** company_regions (3), region_id (3), enable_hashjoin (1), last_name (1), job_title (1)
> **Warnings:** caution (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Subqueries vs. joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=0)** - Before we move on from our discussion of joins, let's touch on the question of joins vs. subqueries.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=6)** A subquery can be used to return a value from a related table.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=10)** In this example, we're essentially performing a lookup on the company_regions table in the part of the select statement where we specify the columns that we want to return from this query.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=21)** We could rewrite the query to use joins in this example, the results are the same.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=28)** This is a good example of how we can declaratively specify an outcome in different ways.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=34)** But this raises a question, so which methods should we use?
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=38)** Now, in the past the conventional wisdom has been that we should always use joins since they'll be more efficient.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=45)** That may have been true in the past, but optimizers have improved over time and we can build efficient execution plans for subqueries.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=54)** My advice is to optimize for clarity.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=57)** So use the method that makes your intentions clear.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=61)** If there's a significant performance difference between joins and subqueries, then you can choose the optimal one and document your query so others reading your code can immediately understand your intentions.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_regions (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### [Challenge: Designing a join](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980&t=0)** - [Instructor] In this challenge, we want to consider which join method would be used in a particular scenario.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980&t=11)** In this case, we have an application that needs to join two large tables.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980&t=16)** Now the results of the query should be returned in sort order.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980&t=20)** What join method will likely be used?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Designing a join](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=5)** - [Instructor] In this case, a merge join will likely be used.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=8)** Joining two large tables are not good candidates for nested loop joins, but a merge join produces results in sort order.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=17)** So it makes it the most likely candidate to be used in terms of a join solution.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)


### 5. Partitioning Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Horizontal vs. vertical partitioning](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=0)** - [Instructor] Let's look at some ways we can change our data model implementation to improve query performance.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=6)** One of the problems with large tables is that they can be difficult to query efficiently.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=11)** Even with indexes, queries against large tables may not be performant enough.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=17)** One way to deal with this is by splitting the large table into smaller sub-tables.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=22)** This is called horizontal partitioning.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=25)** And basically we treat each partition like a table.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=29)** The benefit of horizontal partitioning is that we can sometimes limit scans to a small number of partitions.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=36)** Because partitions are like tables, we can create indexes on columns in those partitions.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=42)** This leads to smaller indexes than those that would exist in the full table.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=47)** In addition, partitions can make bulk data operations like dropping old data even more efficient because we can drop an entire partition quickly.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=57)** If we need to drop a subset of rows, that can also be faster because a smaller index is updated faster rather than a much larger index.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=67)** Partitions are used widely in several kinds of [[Database Applications]], including data warehouses.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=74)** They are often partitioned based on time because time is commonly used as a filter.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=80)** Timeseries data is also a good candidate for partitioning because the latest data is the most likely to be queried.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=87)** In other areas, there may be a natural partition strategy that doesn't involve time.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=93)** For example, you may want to partition by geography or by product type.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=98)** Vertical partitioning separates the columns of a large table into multiple tables.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=104)** Designers tend to keep columns that are frequently queried together in the same vertical partition.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=110)** When using vertical partition, you'll use the same primary key across all of the partitions.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=117)** Benefits of vertical partitioning include increasing the number of rows stored in a single data block.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=124)** This means that more rows are returned with each block read.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=128)** We can create global indexes on each partition.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=133)** Because columns are separated, we can read less data to satisfy a query and this can reduce IO.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=140)** Columnar [[Data Storage]] strategies can provide similar benefits as well.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=145)** You may see vertical partitioning used in data warehouses, in wide-column tables such as product tables with a large number of product attributes, and in data analytics.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=158)** That's another area where vertical partitioning can be used, sometimes after preliminary analysis to determine which of the attributes are most important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Applications]] (1), [[Data Storage]] (1)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Partition by range](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=0)** - [Voiceover] Let's take a look at range partitioning.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=3)** Range Partitioning is a kind of horizontal partitioning.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=7)** Partitions are created based on non-overlapping partition keys.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=12)** Now, partition keys are often based on time but numeric ranges and alphabetic ranges are also used.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=18)** The partition key is a column used to determine which partition should hold a row.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=24)** Partitions are bounded by minimum and maximum values on the partition key.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=30)** Since the partitions are essentially separate tables, each partition can have its own indexes and constraints.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=37)** Let's take a look at an [[IoT|Internet of Things]] or [[IoT]] example.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=41)** In this example, we're collecting measurements.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=43)** Each measurement has a location, a date, temperature and relative humidity.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=49)** The partition key is the date of the measurement.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=53)** Now, we can partition this table into week long partitions.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=58)** Here we create one partition for each week.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=61)** The range of values for the partition key span one week in each partition.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=68)** Partitioning by range works well in a number of cases, such as when we typically query the latest data or perform comparative queries between periods of time, such as a report on this month's sales compared to last year's sales in the same month.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=85)** Range partitioning also works well when we query data within a single partition.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=91)** If you drop data after a certain amount of time, partitioning can make the deleting operation more efficient because the entire partition can be deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT|Internet of things]] (1), [[IoT]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [voiceover] (1)

#### [Partition by range example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=0)** - [Instructor] Let's see how we create a table that uses range partitioning.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=4)** We'll use an [[IoT]] table as an example, so let's issue a create table command.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=9)** Create table, and the table we'll create is called iot_measurement.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=18)** And let's have a location_id which will make an integer, and that's required so it's not null.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=28)** And the measurement_datetime, and that's of type timestamp and that's not null.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=38)** And let's have a temperature in Celsius, and we'll track that as an integer.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=45)** And let's get relative humidity or rel_humidity.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=49)** And we'll track the percent of relative humidity and that can be an integer as well.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=55)** So that's a very basic table.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=58)** Now we're going to add a clause which defines how we want to do partitioning.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=64)** And we do that by adding the [[Microsoft Word|word]] partition by range, so we're specifying that we want to do partitioning and we want to use range partitioning.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=75)** And we want that range to be defined over the measurement_datetime.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=82)** So let's run this and get a table created.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=87)** And now what we're going to do is we're going to refresh our schemas here and let's see the table and refresh.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=97)** There we go, we have an IOT measurement table, and it has the, of course, the columns that we've defined.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=105)** So that defines our base table.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=108)** So the next thing we want to do is actually define particular partitions in this table.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=114)** Now to do that, I'm going to use another create table command.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=123)** And this time I'm going to specify iot_measurement, and let's call this week one of 2024.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=133)** And in this partition of, actually, I'm going to drop this down to the next line to make it a little more readable.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=141)** So this is going to be a partition of the table we just created, iot_measurement.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=150)** So we're creating a table called "iot_measurement_wk1_2024" and it's a partition of this, essentially, this parent table that we just created.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=160)** And now we have to specify the values for the range partition.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=164)** To do that we use the clause for values from, and now we specify the range that, basically, the timestamp range that we want.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=174)** And in this case, we want to work from 2024-01-01,
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=183)** and we want to go up to 2024-01-08.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=192)** That will give us one partition.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=197)** So let's run that, and let's refresh here as well.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=207)** And what we'll see here now is we have another table listed in the tables, and we have iot_measurement week one.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=214)** Now we can also create additional partitions 'cause typically we have several partitions.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=221)** So for example, let's change this to week two, and we'll specify this as from January 8th and we'll go up to the 15th.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=235)** And let's create one more partition.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=239)** And so I'm just going to copy this week two definition and we're going to make week three.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=247)** And we'll specify this as starting on the 15th and going to the 22nd, oops, that was a mistake.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=254)** We need to get rid of that zero, and 22nd.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=262)** Now let me just double check and make sure I don't have any other mistakes here.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=265)** 01-08, that looks good, so we'll run this on the active connection.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=273)** Okay, so now we should have two additional partitions, so let's close that and refresh our list and see, that's the other list, and there we are.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=285)** So what we have done is created, essentially, a parent table called iot_measurement.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=291)** And when we insert into iot_measurement, the rows that we insert will actually be stored in one of the three partitions we created, assuming the measurement timestamp fits within that particular range.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=306)** So what we see here is that each partition can have its own indexes constraints and triggers as well.
>
> **[5:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=312)** And you'll notice that each of the partitions inherits the columns that we defined in the parent table.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=319)** So we can think of partitions as almost like subtables that are essentially structured or constrained in some ways in terms of the columns.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=329)** Those are constrained by what we define in the parent table or in this case the iot_measurement table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (2), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** iot_measurement (7), measurement_datetime (2), location_id (1), rel_humidity (1)
> **CLI Commands:** make (4)
> **Env Vars:** iot (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Partition by list](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=0)** - [Instructor] Partitioning by list is a type of horizontal partitioning.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=4)** Data is divided among partitions, based on a partition key.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=9)** In this case, the partition values are defined in a list of values.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=14)** Now, there is a partition key, which takes values from a list of partition values.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=20)** The partition bounds, are the list of values allowed in the partition.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=25)** And, like other [[Forms]] of horizontal partitioning, each partition can have its own indexes, constraints, and defaults.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=34)** Here's a product catalog example.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=36)** In this [[Microsoft Products|products]] table, we have an ID, name, short and long description, and a product category.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=43)** And the partition key is the product category.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=47)** Notice, that when we define the partition table, we have to list the values of the partition key, that will be allowed in that partition.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=57)** We use list partitioning, when data logically groups into subgroups, based on the partition key values.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=64)** For example, we could have a partition for clothing, and another for [[Electronics]].
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=69)** This works well when most queries are within a partition.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=72)** For example, we might report on clothing or electronics individually, but rarely compare the two.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=79)** List partitioning is a good option, when your data is not so time-oriented, that date-based partitioning would make more sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (2), [[Forms]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Partition by list example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=0)** - [Instructor] Now we're going to implement a table using list partitioning.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=4)** And look, we're going to start by creating a product table.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=7)** And so for that we're going to say CREATE TABLE.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=12)** And we're going to call this table [[Microsoft Products|products]].
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=16)** And in this table we will have a product id which will be an integer and not null.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=24)** And we will also have a product name, which will be a text.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=29)** And let's say that's required, so that's not null.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=33)** And let's have a product description, which will be of type text and a product category which is also of type text.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=50)** Now, again, we have a basic table here, and we're going to indicate that we want this table to be partitioned by using the PARTITION BY clause and specifying the type of partition we're using.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=64)** In this case it's LIST partitioning, and how we want this to be partitioned?
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=72)** What value should we look at?
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=74)** And in this case, it's going to be the product category that we're going to look at.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=79)** So let's run that to create the table.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=83)** And we'll refresh our view here.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=85)** And let's just verify that we have, yep, we do have a products table, and it has the columns we expect.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=93)** So then, as the case with anytime we use partitioning, the next step that we're going to do is we're going to create some partitions.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=102)** Now, when we work with list partitioning, we basically, as the name would imply, we list out the values that are used to determine where a row is written to in terms of which partition a row is written to.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=116)** So for that, we're going to CREATE a TABLE.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=121)** And let's call the first one, we'll partition these products into different categories.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=126)** The first will be a clothing category.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=129)** So we'll call this product_clothing.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=133)** And this is a PARTITION OF the products table.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=141)** And this partition is going to be FOR VALUES IN.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=149)** And now we start listing off values.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=151)** So we have a few different types of clothing.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=152)** Let's say we have casual and business attire.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=159)** We'll just shorten that to business.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=161)** And how about formal?
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=165)** And so that will give us a partition for product_clothing.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=169)** And let's just create a couple others, too.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=170)** Let's CREATE a TABLE, and let's make this partition for [[Electronics]], product_electronics.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=179)** And this is also a PARTITION OF the products table.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=190)** And this is FOR VALUES IN, and for electronics, let's use say mobile, and how about tablets?
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=205)** And one more, we'll call it, we'll say laptops.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=211)** And let's terminate that with a semicolon, 'cause that's the end of the command.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=217)** And one more, let's do a CREATE TABLE product.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=223)** Let's make this for kitchenware.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=225)** And this will be a PARTITION OF the products table,
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=233)** and it will be for values in, and let's say, oh food-processor and cutlery.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=249)** And one more, let's say blenders.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=254)** And we'll have a semicolon and terminate that command.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=258)** And let's just do a quick check.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=260)** So we're going to create product_clothing PARTITION OF products FOR VALUES IN, and then there's three values.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=265)** Then we'll CREATE the TABLE product_electronics, which is a partition of products.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=270)** And that's FOR VALUES IN those three.
>
> **[4:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=273)** List of three.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=274)** And then CREATE TABLE product_kitchen PARTITION OF products FOR VALUES food-processor, cutlery.
>
> **[4:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=279)** That looks good, so let's run this on the active connection, and let's refresh our list here.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=294)** And again, we have our product_clothing table, product_electronics, product_kitchen, and products.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=301)** So we can see here in this example that we can create list partitioning.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=306)** And this is really useful when we have columns that have a number of different types or categories.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=314)** So typically those categories, or the number of those categories, is fairly low.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=319)** So relatively low cardinality.
>
> **[5:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=321)** You know, we don't tell you to have thousands of different distinct values, but you know, smaller numbers than that where we can easily manage to create different tables and actually list out the distinct values that we want to use for our list items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (10), [[Electronics]] (2)
> **Env Vars:** create (6), table (6), partition (6), values (5), list (1)
> **Code Identifiers:** product_clothing (4), product_electronics (3), product_kitchen (2)
> **SQL:** create table (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Partition by hash](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=0)** - [Instructor] The last type of partitioning we'll look at is hash partitioning.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=4)** Hash partitioning is a type of horizontal partitioning.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=7)** The partition key is used as input into a function that computes a value indicating which partition should store a row of data.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=17)** As with other partition methods, the partition key is used to determine where data should be stored but the partition key is not used directly.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=27)** Instead, in [[PostgreSQL|Postgres]], modular division is applied to the partition key to compute a value that's based on the number of partitions.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=36)** For example, if we use five partitions we would apply module 05 to the partition key to generate a value in the range of zero to four.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=46)** This kind of partitioning is available in Postgres, Oracle, and [[MySQL]].
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=50)** You may find it in other [[Databases]] as well.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=54)** Consider a database tracking the way customers use a web application.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=58)** We might want to track each URL the customer visits the time spent on that page, the order in which the customer navigated from one page to another.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=68)** We could use the CI ID column as a partition key.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=71)** If we want to keep customers interactions together we could use a customer ID or session ID to ensure that all rows with a customer ID or session ID are in the same partition.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=83)** Here, for example, we create a set of five partitions.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=87)** The CI ID is divided by five using modular division which allows us to use the remainder as the partition key.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=97)** We use hash partitions when the data does not logically group into subgroups, and we want to maintain a fairly even distribution across partitions.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=108)** And there's no need for subgroup specific operations such as dropping a particular partition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[MySQL]] (1), [[Databases]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** mysql (1), find (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Partition by hash example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=0)** - [Instructor] Let's create one more partition table.
>
> **[0:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=2)** We'll create a partition table using hash partitioning for a table that tracks customer interactions.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=10)** So for that, we'll say create table and let's call this customer interactions.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=20)** And let's use CI as a prefix for customer interaction.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=24)** And we'll have an id, which is an integer and not null.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=29)** And let's say we're tracking at a particular URL which is a text and not null.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=35)** We want to track the time at URL and let's make that an integer and not null.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=45)** And then finally we'll have a click sequence, which is an integer that we're tracking and that's also not null.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=54)** Now because this is a partition table we have a partition by clause and we specify the type of partition of course, and in this case it's hash.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=66)** And the column we're going to be using to partition by in this case it will be the customer interaction id.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=73)** 'Cause we want to basically group the customer's interactions together.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=79)** So let's create this table and we'll close up that and let's refresh our table list and see if we have customer interactions.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=92)** There we go.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=93)** We have customer interactions with the columns we would expect.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=97)** So now the next step is to create the partitions.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=102)** And for that of course we use the create table statement and then we give it a name for the partition.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=108)** So for example, we could have customer interactions one and that is a partition of customer interaction.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=123)** And for values, and in this case we use with statements.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=130)** So for values with, and now we specify our modulus.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=137)** So let's use modulus five, with a remainder of zero.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=148)** And this will allow us to create five different partitions.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=152)** So let's just make sure I've got this correct.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=155)** Create table customer interactions one.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=157)** And let's just run this to make sure that looks correct.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=160)** That looks right and we'll refresh just to verify.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=166)** Yep, okay, so our customer interactions one is correct.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=171)** So now what I'm going to do is actually, I'm just going to modify this.
>
> **[2:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=174)** I'm going to copy this and then just start modifying it.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=178)** I'm going to create four others.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=179)** So we'll have customer two, and this will be for a modulus of five with a remainder of one.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=188)** And this will be our third partition remainder of two and three.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=201)** And our final partition will be partition five.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=208)** And we do a modulus with a remainder of four there.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=211)** So if we run this, that executed all those commands and if we do a refresh, we will see now that we have our five customer interaction partitions.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=226)** And again, as with other partition tables these partitions or the child tables, if we want to think of it as terms of a parent-child relationship they have the same column structure as the parent table.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=241)** So with partitioning we have the option of using range partitioning list partitioning or hash partitioning.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=247)** And each is really useful for a particular use case.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=252)** So in this case hash partitions are really useful when we have say high cardinality values like a customer identifier that we want to work with.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=262)** Lists is useful when we have very low cardinality sort of values that we want to use.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=269)** And range partitioning is really useful when we have date time attributes that we want to partition on.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (3)
> **Env Vars:** url (2)
> **Analogies:** for example (1), think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Partitioning a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=0)** - [Instructor] Let's consider partitioning a table by a time range.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=9)** Let's imagine we create a table called sensor metrics, which has several attributes including a sensor ID, a measurement date, temperature, humidity, and pressure.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=20)** Also, we want to partition the by range using measure date.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=24)** Here are some definitions of partitions.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=29)** Now, as you look at these, I want you to consider what might be a problem with the definitions that we have here.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Partitioning a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980&t=0)** - [Instructor] The problem with the definitions that we had for partitions is that there are gaps in the dates.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980&t=11)** The maximum date and the time range is not inclusive, so we need to have essentially some overlap between our partition definitions.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980&t=20)** In this case, the data for 24-1-8 and 24-1-16 are not assigned to our partition.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Materialized Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=0)** - [Instructor] Materialized views combine some of the features of tables and views.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=6)** Materialized views are used to store the results of pre-computed queries.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=11)** For example, we may have to perform expensive joins and we want to minimize the number of times we need to run that query.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=18)** By materializing or storing the results of a query, the query results can be used for other operations without performing an expensive query operation again.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=29)** While materialized views can save time, they will also take up space.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=34)** Materialized views duplicate data that is already stored in tables.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=39)** Data in materialized views can change state, so we'll have to update or refresh materialized views to capture changes to the sources of those materialized views.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=51)** This means there is a potential for inconsistencies between source tables and materialized views.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=59)** If you can tolerate these potential problems, the materialized views can help reduce the time required to execute queries.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=68)** Now, here's an example of a materialized view.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=71)** Notice that it's very similar to a Create View command, but this statement includes the term materialized.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=79)** Materialized views are good options when saving time on query response is more important than minimizing the amount of storage used.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=89)** You should only use materialized views if you can tolerate some potential inconsistencies, or you can ensure that the materialized views are refreshed after each update to the source.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Creating materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=0)** - [Instructor] Let's see how easily we can create a materialized view.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=4)** We're going to start with the statement create materialized view.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=10)** Now specify the name of this view.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=12)** Now we're going to build a view over the staff table and company regions.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=16)** So I'm just going to call this MV staff.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=19)** So the prefix MV is just short for materialized view.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=23)** And we're going to say that this view is defined by this select statement.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=27)** And we are going to select a few items from the staff table which I will alias as S.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=33)** From the staff table we're going to get last name and department and job title.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=43)** And then from the company regions table let's get company regions.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=51)** And this will be from the staff table, of course which is alias to S.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=59)** And we're going to interjoin the staff table to the company regions table, which we're going to alias CR.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=70)** And we're going to specify the columns we're going to join on which in this case is going to be the region ID and the staff table.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=81)** And that's going to be join to using the equality operator join to, the company regions table and the region ID there.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=91)** So let's just double check.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=93)** So let looks good join on thing.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=95)** Looks good.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=96)** We'll run this.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=101)** And if we look at materialized views we see we have something called MV staff.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=107)** So that's basically all that's required to create a materialized view it's very similar to creating a traditional view or simply adding the term materialized to the create statement.

> [!info]- Semantic Content
>
> **CLI Commands:** mv (3)
> **Definitions:** short for (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Refreshing materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=0)** - [Instructor] It's important to remember that materialized views save data from the source tables into a new data structure.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=8)** The data that was in the source tables at the time the materialized view are created.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=14)** That's what's there in the materialized view even if the underlying table is updated.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=20)** So let's take a look at the data in the MV staff materialized for you.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=24)** Select star from MV staff.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=29)** And we'll run this and we'll see.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=32)** We have the four columns we would expect.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=35)** Last name, department, job title, and company region.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=38)** So the values that we see here are the values that were in the tables, in the staff table and in the company region table at the time the materialized view was created.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=49)** Now let's assume the staff table has been updated.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=53)** Those update operations or those changes are not necessarily reflected in the materialized view until we actually force those updates to be included in the materialized view.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=66)** And to do that we use a command called refresh materialized view.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=71)** So for example we could say refresh materialized, view MV staff.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=81)** And if we run this what will happen is that is basically the command that will cause any changes that have been made to the company regions table or the staff table to be reflected into the corresponding data structure in the materialized view.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=99)** So you should run the refresh command as frequently as needed to meet your requirements for consistency between the source table and the materialized view.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=108)** If you need the materialized view updated any time the source table is updated, you can consider using triggers on the source table to update the materialized view.

> [!info]- Semantic Content
>
> **CLI Commands:** mv (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Creating a materialized view](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=0)** - [Instructor] In this challenge, we're going to create a materialized view.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=9)** Let's imagine that we are working with a table called sensor_metrics, which has a sensor_id, a measure_date, temperature, humidity, and pressure.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=21)** We want to create a materialized view on the sensor_metric table.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=25)** Now, the materialized view should contain only rows where the sensor ID is greater than 90000.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=34)** And the name of the materialized view should be mv_sensor_metric.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=39)** What statement would you use to create that materialized view?

> [!info]- Semantic Content
>
> **Code Identifiers:** sensor_metrics (1), sensor_id (1), measure_date (1), sensor_metric (1), mv_sensor_metric (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating a materialized view](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980&t=0)** - [Instructor] The solution is to use the data definition statement, create materialized views.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980&t=10)** Then we'll specify the name we want to use in this case, mv_sensor_metric.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980&t=14)** And then we'll specify a select statement that specifies the attributes or the columns that we want to include from the sensor_metric table.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980&t=24)** And then we also have a where clause where we'll specify the sensor_id as greater than 90,000.

> [!info]- Semantic Content
>
> **Code Identifiers:** mv_sensor_metric (1), sensor_metric (1), sensor_id (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Database Statistics and Identifying Slow Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Collect statistics about data in tables](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=0)** - [Instructor] Schemas hold the [[Data Structures]] we commonly think of when we think of [[Databases]], and these are things like tables, indexes, constraints, views and materialized views, but they also include [[Statistics]] about the data in those tables.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=20)** For example, we need statistics on the number of rows in a table and how much storage is used.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=28)** We also need to know the frequency of values and the cardinality of columns.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=34)** It's also important to understand the distribution of data or how is that data kind of spread out.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=40)** Under a normal distribution, data values tend toward the middle or the mean of the range and fall equally off in both directions.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=49)** But sometimes values can tend toward one end of the distribution more than the other.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=54)** So here, for example, we have a distribution where there are more instances toward the larger values.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=61)** We call this a negative skew, and here we have values tending toward the lower end of the range.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=68)** Now, this is called a positive skew.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=71)** It's important to know about a skew in your data so you don't make incorrect assumptions about your data.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=77)** For example, we wouldn't want to assume that the data is equally divided with half the values less than the mean and half greater than the mean when, in fact, your data is skewed.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=88)** Histograms count the number of values in a range and give us a good way of representing the distribution of data.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=96)** So how do we get these statistics?
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=99)** One way is to run the ANALYZE command, which collects statistics on tables and data.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=105)** Now, I will say the results of the ANALYZE command are not all that human friendly.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=110)** They're not really readable or all that useful to us directly, but we can collect this data automatically, which is used by [[PostgreSQL|Postgres]] and we can do that by running the AUTOVACUUM daemon or running the VACUUM command manually.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=125)** The VACUUM command reclaims space of updated data.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=129)** If you use just the VACUUM command, you'll reclaim some space and mark it so that it's available for reuse by the table.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=137)** Now, by running the VACUUM full on a particular table, that will lock the table and it can reclaim even more space.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=146)** This method does require more disk space than the non-full vacuums because actually what it does is it writes a new copy of the table and it doesn't release the old copy of the table until the operation's finished.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=159)** VACUUM FULL is recommended only when a significant amount of space needs to be reclaimed from within the table.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=165)** If you want to collect statistics while reclaiming data in a table, you can do that by running the VACUUM FULL, ANALYZE command on a particular table.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=175)** Another kind of housekeeping you may need to do is rebuilding corrupted indexes.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=179)** Now, you shouldn't need to rebuild indexes but if there are bugs in the system, you may come across corrupted indexes.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=187)** Re-indexing collects unused pages in B-tree indexes, and you can re-index on a single index or on a table or an entire schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (5), [[Data Structures]] (1), [[Databases]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** vacuum (6), analyze (3), full (2), autovacuum (1)
> **Analogies:** for example (3)
> **Definitions:** we call this (1), is called (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing execution statistics with pg_stat_statements](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=0)** - [Instructor] [[PostgreSQL|Postgres]] has a feature known as pg_stat_statements, and it's a feature for tracking, planning, and execution [[Statistics]] of all the [[SQL]] statements that a server executes.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=12)** Now, pg_stat_statements, basically, it needs to be turned on.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=16)** It does take some overhead, so it's off by default, but we can actually turn it on by adding a pg_stat_statements to the shared_preload_libraries section in the Postgres configuration file.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=32)** Now, this is something that requires a database administrator.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=34)** It's not something that an average user should do, which is understandable.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=38)** This is something that affects the entire server, so this may be something you need to work with your DBA on, and not something you could necessarily do yourself unless you do have [[Database Administration]] privileges.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=49)** Now, pg_stat_statements, the view includes a variety of information.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=54)** It includes information on, like, the user, the database, and the query ID, as well as the query text, so you actually get to see what the text of the query was.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=63)** Then, there's also the plan statistics that are provided inside pg_stat_statements, and these include things like the number of times the query was planned and the total time that was spent on those planning operations.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=76)** There's also statistics on the distribution of the time spent planning, including the min, the max, and the standard deviation of the time spent planning, and we also get some kind of distribution data with regards to min, max, and standard deviation of the time spent executing the statement, so we can see the range of values for things like how much time spent creating the plan for a statement and how much time actually executing, and oftentimes, it's the execution that we're most interested in, so it can be really helpful to see the full range of execution times as well as get a sense of what the distribution is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[PostgreSQL|Postgres]] (2), [[SQL]] (1), [[Database Administration]] (1)
> **Code Identifiers:** pg_stat_statements (5), shared_preload_libraries (1)
> **Env Vars:** sql (1), dba (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing execution plans with the auto_explain module](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=0)** - [Instructor] Now explaining is really useful especially when we're developing queries and we want to understand what the characteristics of the execution plan are.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=9)** But sometimes it's really helpful, especially in production environments, to be able to understand the query plans that are being executed in production and especially for slow running queries.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=21)** So for example, oftentimes in production environments, one of the things we monitor are the top 10 slowest queries.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=28)** Well, there's a module called Auto Explain within [[PostgreSQL|Postgres]] that logs the execution plans of slow statements automatically without having us have to manually run the explain command.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=39)** Now, to enable this, we need to load the auto explain module.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=43)** We can either do that at the session level if we're a super user or we can load it into the Postgres configuration file if we're the database administrator.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=51)** And when we load the module, we can specify different parameters that will determine what content is collected for us.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=60)** So for example, we could set the log minimum duration or the log mid duration which is the minimum execution time in milliseconds that will cause the statements plan to be logged.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=72)** So we may, depending on what kind of database we're working with, if it's a transaction processing system.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=77)** We may want really low latency query response time so we might set our minimum duration fairly low.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=84)** If we're working in more of an analytical database like in a data warehouse where we have very large queries we would probably tend to make our min log duration higher than that.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=93)** Now we can also set a parameter called log nested statements, and depending on that setting, we will get information about functions or nested statements included with the logging.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=106)** So if we're interested in just, say the [[SQL]] that we're writing and we're not interested in tracking, say a user defined function that we're pretty sure is pretty well optimized, then we don't need to use log nested statements.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=118)** But if this is almost kind of like tracing where you want to see as much information as possible, then log nested statement is a good one to enable.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=127)** Now like in say a [[Linux]] environment or a different programming level languages where you can set different log levels, we can do that with auto explain.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=136)** So it uses some of the standard conventions for log levels, like info warning, error, debug.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=143)** Actually it has five different debug settings.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=146)** So you can get really detailed information with auto explain, depending on how you set the log level parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[SQL]] (1), [[Linux]] (1)
> **Analogies:** for example (2), kind of like (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Additional analysis with other pg_stats data](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=0)** - [Instructor] Now PG_Stats is a module and a set of views that provide access to information that's stored in the PG_STATISTICS catalog.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=10)** And these [[Statistics]] describe the distribution of data in a table.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=15)** Now, one thing to be aware of is that PG_Stats constrains what we can view so that we can only have access to the data that I have permission or that we as users have permission to read.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=26)** So, for example, we can't use PG_Stats as sort of a workaround to kind of get information that we might otherwise not be able to get.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=35)** For example, if there is a salary column, you can't go in and look at the max salary and the min salary in PG_Stats unless you're able to actually see it in the base table itself.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=45)** Now, PG_Stats has different types of columns or collections of columns.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=49)** Some include information about the schema, the table, and the column name, of course.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=54)** There are statistics on their frequency of NULLs and the fraction of NULLs, the number of distinct values, and most common values, and their frequencies associated with a column.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=65)** And then also there's a histogram of counts of distinct non-null elements with the different values of the column.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=72)** So this is the kind of detail that's often very useful, especially if you're doing either, like a [[Data Quality]] assessment, or you're trying to understand the distribution of data in a table or in specific columns within a table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Data Quality]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Env Vars:** pg_statistics (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Analyze schema statistics](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980&t=0)** - [Narrator] In this challenge, we're considering a scenario where we've created a table called sensor_metrics and we've inserted a large number of rows.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980&t=13)** Now, we want to make sure our table [[Statistics]] are up to date.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980&t=17)** So what command would you run to update statistics on the sensor_metrics table?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2)
> **Code Identifiers:** sensor_metrics (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Analyze schema statistics](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-analyze-schema-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-analyze-schema-statistics?u=76281980&t=0)** - [Narrator] We would use the ANALYZE command and specify the name of the table that we want to analyze and update the [[Statistics]] on.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-analyze-schema-statistics?u=76281980&t=12)** In this case, it would be ANALYZE sensor_metrics;.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Env Vars:** analyze (2)
> **Code Identifiers:** sensor_metrics (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Other Optimization Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Using common table expressions to avoid repetitive computation](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=0)** - [Instructor] Common table expressions are often used as an alternative to subqueries 'cause many of us find them often more readable and more easy to reuse than using subqueries.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=11)** So common table expressions can be computed once, which is really optimal if you have say, a long-running calculation or a long-running query that will generate a single list in that same list of values or a result set is used across all of the correlated queries that that is going to work with.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=31)** Now, common table expressions can also be computed multiple times or each time or in line with the primary query.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=39)** Now, that's optimal when each invocation of the query can use information from the parent query to make whatever that subquery or that [[CTE|common table expression]], make that query more efficient.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=51)** So if the values that you're looking up in the correlated query change over the course of the dataset that's calculated for the parent query, then you probably want to use inline versus having the results materialized.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=66)** Well, so materialized [[CTE|CTEs]] are when we compute the value once and save the data.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=71)** So for example, when we say with some common table expression, a name AS and then some statement, and then our SELECT statement, that common table expression will be executed each time or it will be executed in line with each time the SELECT statement has a row that needs to be processed.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=91)** However, if we want to execute it once and reuse the results, then we can use the AS MATERIALIZED clause.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=98)** So you would say something like WITH, name of a common table expression, AS MATERIALIZED, and then give the expression and the SELECT statement.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=107)** Now, in [[PostgreSQL|Postgres]], non-materialized or inline is the default in Postgres or at least it has been since Postgres 12.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=114)** So if you want to materialize the results of a common table expression and basically only have to do the the query work once for the common table expression, you want to make sure you include the clause AS MATERIALIZED in your common table expression definition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Common table expression]] (7), [[PostgreSQL|Postgres]] (3), [[CTE|Ctes]] (1)
> **Env Vars:** select (3), materialized (3)
> **CLI Commands:** make (3), find (1)
> **SQL:** select (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hints to the Query Optimizer](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=0)** - [Instructor] Hints are suggestions to a query plan builder.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=3)** Some [[Databases]] allow you to specify hints in line with the [[SQL]] code.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=9)** Now, these inline suggestions are outside of normal SQL statements, they're are extra-SQL statements, and this practice really pushes the boundary between declarative and procedural code.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=21)** Now, some data spaces support hints, like Oracle, [[MySQL]] and [[Microsoft SQL Server|SQL Server]].
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=27)** However, [[PostgreSQL|Postgres]] takes a different approach.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=30)** Postgres uses commands to change the behavior of the query plan builder.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=36)** For example, with the SET enable commands you can prevent the use of hash joins, or you can make sure that nested loops are enabled.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=47)** All join options are available by default, so you don't need to do anything if you want to have all three enabled.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=55)** Now, some caveats, you want to be careful anytime you're using hints in other databases or changing the configuration of the query plan builder.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=64)** Oftentimes, it's better to update [[Statistics]] with ANALYZE and VACCUM before trying hints and try other optimization techniques like partitioning and materialized views before trying hints.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=77)** Be sure a query plan is suboptimal before resorting to changing the query planner configuration.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=84)** Also, if you do make changes, either if you're in another database and you're using hints, or you're altering the query plan behavior, be careful to watch for changes in the size and distribution of the data that can render your query planner configuration ineffective, or even worse, it could lead to degraded performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Databases]] (2), [[PostgreSQL|Postgres]] (2), [[MySQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (4), set (1), analyze (1), vaccum (1)
> **CLI Commands:** make (2), mysql (1)
> **Warnings:** be careful (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parallel query execution](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=0)** - [Instructor] Another way to make queries execute faster is to execute steps in parallel.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=6)** Sometimes the execution plan builder will find that it can run some steps in parallel.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=11)** In that case, it will try to execute parts of the plan in parallel and then combine or gather the results.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=19)** You can tell your execution plan is using parallel queries if there is a gather or gather, merge in the query plan.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=27)** Steps below that are executed in parallel.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=31)** How many parallel processes the execution plan will use is based on a couple of parameters; the max parallel workers and max worker process parameters.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=43)** These are [[PostgreSQL|Postgres]] specific parameters, but if your database supports parallel queries, it's likely they have similar parameters.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=51)** Now, in order to execute some steps in parallel we need to have the max parallel workers per gatherer parameter set to a value greater than zero.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=62)** The dynamic shared memory type parameter must not be set to none, and the database can't be running in single-user mode.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=72)** Also, the query we're executing must not write data or lock rows.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=78)** And the query must not be using a function that has been marked "parallel unsafe", which occurs with user defined functions.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=86)** Now, some things to keep in mind; first, parallel queries may not be faster than sequential execution.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=92)** Parallel plans must exceed parallel setup cost and parallel tuple cost parameters.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=99)** Parallel index scans only work with B-tree indexes, so that's something to consider if you want to use hash or other specialized indexes.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=107)** The inner side of nested loops and merged joins are executed sequentially.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=114)** And then finally, hash joins can be executed in parallel, but each process will create a copy of the hash table.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=121)** This may be a consideration if you are generating large hash tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Improving cache utilization](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=0)** - [Instructor] Now caching is really important in [[Databases]].
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=3)** Caching is a process of storing results of a query so that we can reuse them without having to re-execute a query plan to go and actually get the data for the result sets.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=14)** Now, the amount of data that we can store or cache is dependent on the size of a data structure called the shared buffers.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=23)** And in [[PostgreSQL|Postgres]], Postgres will fill up the shared buffers as much as it can and then it will start to evict data or start deleting data from the cache that it feels is no longer needed.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=34)** So for example, if it hasn't been used in quite a while if it's the longest of all the query results the one with the longest time since this would last used as a good candidate for evicting or for deleting from the cache.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=47)** Now, one of the key pieces of information that we can get from our explain plan is the number of hits or the number of times a hit refers to a time where we're able to get some data from the cache, versus the number of reads or the times we had to read from the disks.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=62)** So if we're showing a very low hit rate and quite a high read rate with repeated queries then we might want to consider increasing the size of our cache.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=73)** And we do that by adjusting the shared buffers shared memory buffers defaults to 128 meg currently in Postgres.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=82)** It's been like this since around Postgres 10 or 11 but we're currently at Postgres 15, 16's in beta and there's still 128.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=91)** So I wouldn't be surprised if in the near future that goes up to a higher number.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=95)** But in any case whatever the shared buffer value default is it is often the case that we need larger values to improve performance.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=105)** Now, one rule of thumb is that we should dedicate 25% of our available memory in your server to shared buffers.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=114)** So if you have a 16 gig machine then you'd want to use four gig of RAM for the shared buffers.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=122)** And now one thing to keep in mind is this parameter can only be set when the server is starting.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=127)** So this is not a dynamic configuration parameter.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=130)** So you want to think about shared buffers and adjust those during your maintenance period or whatever down period you may have because you will have to restart the server if you do want to change that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (5), [[Databases]] (1)
> **Env Vars:** ram (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Miscellaneous tips](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=0)** - [Instructor] Let's wrap up this section with some miscellaneous tips.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=4)** Now with regards to indexing, you want to create indexes on any columns that you're going to be using in join clauses or if those columns are used in a WHERE clause.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=15)** Also, if you can create covering indexes, that is indexes that will hold all of the columns that are required to respond to a query, then that can save you time because you can get all of the data you need from the index without also having to reference data blocks associated with the table.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=31)** If you're checking for null values, you want to use the IS NULL statement rather than using equality with null.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=39)** And if you use a function in a WHERE clause, like you apply some function to a value in a column, if you do that, try to create a functional index for that column.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=49)** Otherwise, the index won't be used.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=52)** Now, if you're working with index range scans, try to keep the ranges as small as possible and use equality conditions.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=59)** Remember, if you're doing string pattern matching, if you use something like a LIKE, and then a string with a wild card like percent, then that can use an index because the wild card comes at the end of the pattern you're looking for.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=72)** If you put a wild card at the beginning, for example using LIKE, quote, %ABC, then you're not going to be able to use an index.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=80)** Now, if you do a lot of full text searching, then consider using GIN indexes.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=86)** And also remember, if we have indexes, then we may be able to avoid sort operations when we use an ORDER BY.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=94)** So if you need to order certain query result sets and there are large queries or there's a lot of data that you are expecting, then you might want to consider using indexes to avoid having to do a sort operation and instead we can use the index to order our results.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=111)** When it comes to filtering, some things you want to keep in mind about data types.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=115)** When you're filtering on a range condition, especially dates and times, use continuous conditions such as trunking a sysdate, and say, going from sysdate to sysdate+1, use the trunk on sysdate.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=128)** You don't want to separate time and data into separate columns.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=131)** Use a date time data type instead.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=134)** Also, don't store numeric data as characters, varchars, or text.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=137)** Make sure you use an appropriate numeric data type for that.

> [!info]- Semantic Content
>
> **Env Vars:** where (2), null (1), abc (1), gin (1), order (1)
> **SQL:** where (2), order by (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design a common table expression](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-design-a-common-table-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-design-a-common-table-expression?u=76281980&t=0)** - [Instructor] In this challenge, we're going to consider common table expressions.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-design-a-common-table-expression?u=76281980&t=9)** Let's imagine you have a [[CTE|common table expression]] that takes a long time to evaluate and you want to evaluate the common table expression only once when you're executing the associated parent query.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-design-a-common-table-expression?u=76281980&t=20)** How would you define the common table expression?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Common table expression]] (3)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design a common table expression](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-design-a-common-table-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-design-a-common-table-expression?u=76281980&t=0)** - [Instructor] We would define the [[CTE|common table expression]] using the AS MATERIALIZED clause, and that will allow the query plan builder to execute the query once, cache the results, and then reuse those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Common table expression]] (1)
> **Env Vars:** materialized (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=0)** - [Dan] This concludes our review of [[SQL]] query tuning.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=4)** Now, we've covered a lot of different aspects of query tuning, but there's still more we can learn.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=10)** There are some additional courses in the library that you may find helpful.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=14)** If you're focused on analytics, the course [[Advanced SQL for Data Scientists]] may be of interest to you.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=19)** We also have a course on Advanced SQL for Time Series Data, which focuses on really the specifics of how we can optimize our work and really build performant queries around time series data.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=32)** Then there's also [[Advanced SQL for [[Application Development]]]], where we turn our attention to optimizing SQL for transaction processing systems, and then the course on Designing Highly Available and Highly Scalable SQL [[Databases]] gets more into [[Data Architecture]] with a focus on high availability and [[Scalability]].
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=50)** Then finally, I would just recommend, review the specific database documentation for the database that you work with.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=56)** There's really no better source for information about how to go about building and tuning SQL applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Application Development]] (1), [[Databases]] (1), [[Data Architecture]] (1), [[Scalability]] (1)
> **Env Vars:** sql (7)
> **CLI Commands:** find (1)
> **Speakers:** - [dan] (1)


## Instructor

- [[Dan Sullivan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-sql-query-tuning-performance-optimization-4413111/codespaces)

## Skills Covered

- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL – Window Functions]] | **5 of 8** | [[Advanced SQL for Application Development]] →

### In [[Master SQL for Data Science]]
← [[Advanced SQL for Data Scientists]] | **5 of 6** | [[Advanced SQL for Data Science- Time Series]] →

### In [[Advance Your Database Administration Skills]]
← [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] | **8 of 11** | [[Advanced SQL Project- Design and Manage a Database]] →

## Appears In

- [[Master SQL Development]]
- [[Master SQL for Data Science]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)