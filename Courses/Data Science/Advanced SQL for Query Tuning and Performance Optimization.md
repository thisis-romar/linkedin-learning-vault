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
  - '[Master SQL Development](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20Development.md)'
  - '[Master SQL for Data Science](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20for%20Data%20Science.md)'
  - '[Advance Your Database Administration Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Database%20Administration%20Skills.md)'
prev_courses:
  - '[Advanced SQL – Window Functions](Advanced%20SQL%20%E2%80%93%20Window%20Functions.md)'
  - '[Advanced SQL for Data Scientists](Advanced%20SQL%20for%20Data%20Scientists.md)'
  - '[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md)'
next_courses:
  - '[Advanced SQL for Application Development](Advanced%20SQL%20for%20Application%20Development.md)'
  - '[Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md)'
  - '[Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md)'
path_nav: '[{"path":"Master SQL Development","position":5,"total":8,"prev":"Advanced SQL – Window Functions","next":"Advanced SQL for Application Development"},{"path":"Master SQL for Data Science","position":5,"total":6,"prev":"Advanced SQL for Data Scientists","next":"Advanced SQL for Data Science- Time Series"},{"path":"Advance Your Database Administration Skills","position":8,"total":11,"prev":"Practical Database Design- Implementing Responsible Data Solutions with SQL Querying","next":"Advanced SQL Project- Design and Manage a Database"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reduce-query-response-time-with-query-tuning?u=76281980&t=0)** - [Dan] No one likes waiting for a slow-running query. The good news is that in many cases, you can speed up those queries. Understanding how [Databases](../../Skills/Software%20Development/Databases.md) translate [SQL](../../Skills/Data%20Science/SQL.md) queries into execution plans will help you optimize queries. In this course, you'll learn how SQL queries are executed, how to use different kinds of indexes to improve performance, why the query plan builder chooses a particular join method, and how to use partitioning and materialized views to reduce query response time. With a solid understanding of how SQL queries are executed, you'll know how to tune your database schemas and queries to give you the performance you need. My name is Dan Sullivan. I'm an architect, and I work on large-scale data-intensive applications. So let's dive into "Advanced SQL for Query Tuning and Performance Optimization" so you can tune your SQL queries for their optimal performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (5)
> **Speakers:** - [dan] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/what-you-should-know?u=76281980&t=0)** - [Instructor] Now before we dive into query optimization, I do want to mention a few things that I assume you are familiar with. The first is with basic relational [Database Design](../../Skills/Software%20Development/Database%20Design.md) concepts. So in particular, I assume that you're familiar with ideas like tables and views and indexes, and why we use them in the way we do with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). I also assume that you have used [SQL](../../Skills/Data%20Science/SQL.md) for querying. So you would be comfortable say writing a select statement that has a from clause a where clause, as well as maybe some order by statements or even a having by clause. And then finally, I assume you have some familiarity with storage systems and how file systems and block storage works. We're not going into a lot of implementation details about storage systems, but it just helps to have that frame of reference when we're talking about querying and performance optimization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Design](../../Skills/Software%20Development/Database%20Design.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 1. How SQL Executes a Query

[↑ Back to Table of Contents](#table-of-contents)

#### [From declarative SQL to a procedural execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=0)** - [Instructor] [SQL](../../Skills/Data%20Science/SQL.md) is a language of tabular data. It started as a query language for [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) but it's now used in data analytics tools like [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) as well as other systems like the Kafka distributed stream processing platform. So why is SQL so popular? The short answer is that it's well suited for working with tabular data. Much of the data we use lends itself to tabular structures. Retailers track customer data in tables. Healthcare companies manage patient data with relational tables. In fact, it's hard to think of an industry that couldn't make use of SQL and tabular data. Another reason SQL is popular is that it's declarative. We specify what we want without having to concern ourselves with how to get what we want. For example, we can state what columns we want to retrieve and then filter the resulting set of rows by some condition. The results of our queries are tables and we can use SQL to query the results of other SQL queries. Now, I should point out that there are statements that can result in output that's not strictly tabular. For example, some commands that have been added to recent versions of SQL to support roll-ups, cubes and other structures that are useful in reporting. If you're a developer you're probably used to using procedural languages. And languages like [Java](../../Skills/Software%20Development/Java.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and C++, you specify how to do something. For example, you might specify how to loop through an array. In procedural languages, you directly manipulate [Data Structures](../../Skills/Software%20Development/Data%20Structures.md)
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/from-declarative-sql-to-a-procedural-execution-plan?u=76281980&t=92)** and perform operations in an order that you specify. SQL statements have to be mapped from their declarative form into a procedural form in order to return the data that's specified in the query. The procedural version of a query is known as an execution plan. It's a sequence of steps that can scan, filter and join data in such a way that when the execution plan is done it produces the output that you specified in your declarative query. When we develop procedural code, we're often thinking about how to make it efficient. The same thing applies to execution plans. While there may be many ways to execute a query some are more efficient than others. For example, if you want to return data about a subset of customer purchases where the customer ID starts with the numbers 3014, you could look through all the rows in a say 10 million row table, but that's quite inefficient. A better approach is to use an index which points to the location of the data blocks containing the rows you're interested in. In this course, you will learn about query plans and the different kinds of steps that are used in execution plans. We will discuss the trade-offs of different ways to map from a declarative query to a procedural execution plan. And perhaps most importantly, we'll learn techniques for structuring your data and crafting your queries to produce efficient execution plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** sql (8)
> **CLI Commands:** make (2), apache (1), python (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scanning tables and indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=0)** - One of the simplest operations in an execution plan, is a scan operation. This is basically the process of accessing each row in a table. We can also scan indexes, which are a special kind of table. Scanning's a linear operation, moving from one row to the next, and performing some operation, like applying a filter to an implemental WHERE clause. Now, scanning is simple. The database fetches data blocks from persistent storage or a cache, applies a filter, a join, or some other operation on the row, and then moves on to the next. The time it takes to finish the scan, is based on the number of rows in the table. Now, I should point out, that data in rows is not always stored together. Columnar based storage is used in data warehouses and analytical [Databases](../../Skills/Software%20Development/Databases.md). This can make filtering based on the value of a single, or a small number of columns, quite efficient when working with large tables. Tuning analytical queries for columnar data stories is different from the process for tuning row oriented transaction processing systems, which is what we are focused on. From now on, we'll assume row data is stored together unless I mention otherwise. Scanning is often the most efficient way to work with small tables. It can even be an efficient way to work with large tables, if there are a few queries, or the queries against the table, operate on most rows in the table. Scanning large tables repeatedly, however, is inefficient. Scanning all rows in a table,
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/scanning-tables-and-indexes?u=76281980&t=93)** is called a full table scan. If you see a full table scan in a query execution plan, it's worth looking into why a full table scan was chosen, and seeing if there isn't a more efficient way to retrieve the data. Creating indexes is a good way to avoid full table scans, and make execution plans more efficient. Indexes are ordered subsets of data in a table, and they're ordered in such a way, that it makes it efficient to look up a row by a particular value. As a general rule, [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) do not store table data in sorted order. Now, there are some exceptions to this, but typically an entry in an index contains the data value, that is the basis for the index, and a pointer to the location of that corresponding row. If your WHERE clause references the index value, you can use the index, to find rows that meet the criteria, rather than scanning the entire table. Index data however, does have a structure that lends itself to ordering. Trees are widely used to store indexes. Now databases offer different kinds of indexes. Some commonly used index types are balance trees or B-trees, which are used for equality and range queries. Hash indexes, which are used for equality operations. Bitmap indexes are efficient ways of performing set operations, and some databases like [PostgreS](../../Skills/Software%20Development/PostgreSQL.md), provide specialized indexes for particular data types like geospatial data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **SQL:** where (2)
> **Env Vars:** where (2)
> **Best Practices:** general rule (1)
> **Speakers:** - one (1)

#### [Joining tables](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=0)** - [Instructor] [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) store data across multiple tables. For example, we may have one table with information about customers. This data could include a status level indicating the amount of revenue generated by the client. Rather than store all the data associated with an attribute level in the customer table, we store it in a separate table. The two tables in this example share a common value, the status level. We take advantage of that when we need to access data from both tables. When we have a shared column value, we can perform joins on the two tables. This allows us to reference the corresponding data that is stored in the other table. Keeping in mind that [SQL](../../Skills/Data%20Science/SQL.md) statements describe what we want, we can ask how does the execution plan match row between join tables? Typically, we have a foreign key in one table that corresponds to the primary key in another table. In our example, the status level in the customer table is a foreign key to the status table. There are three ways to join tables, with nested loop joins, hash joins and sort merge joins. Nested loop joins compare each row in a table to all rows in the other table. At each step in the process, it compares keys. Two advantages of nested loop joins are that they can be used to perform any type of join and they're simple to implement. A disadvantage is that they can have a higher cost
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/joining-tables?u=76281980&t=95)** than other join methods. Hash joins calculate a hash value for a foreign key and use that to look up the corresponding row in the other table. Hash values for one table are calculated and stored in a hash table and then the other table is scanned, calculating the hash value for each key value as it goes. Hash joins can be used for joins that have an equality comparison. Sort merge joins start by sorting both tables. It then compares the rows like nested loop joins, but it stops scanning when it's no longer possible to find a match later in a table because of the sort order. Unlike nested loop joins, the driving table is processed only once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Partitioning data](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=0)** - [Instructor] One way to avoid scanning large amounts of data is to break those large amounts of data into smaller pieces. This is basically the idea behind partitioning. Large tables are stored as a set of smaller tables. This not only helps with query performance, but it can improve the speed of data loads and delete operations. Most importantly, when a subset of data is changed or queried, then only the petitions with that particular data need to be accessed. Let's start with a large table. Now, let's assume we want to access some of the data in the table. We could scan the table, but large tables take a long time to scan. We can improve upon scans by creating an index. Large tables though can lead to large indexes. If we can use a hash index, then we'll have constant time access to the data. If we use a B-tree index, the depths of the index tree will grow as a logarithmic rate. Now, neither of these is bad, and it's in fact much better than a full table scan. But can we do better? And in some cases, the answer is yes. We can break the large table down into smaller partitions. Now imagine we have to do a scan. If we know the data we're looking for is located in one of the partitions, then we can scan just that partition. This means that operations that require scans can be done more efficiently. To know if the data we're looking for is in a particular partition,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partitioning-data?u=76281980&t=94)** we have to use something called a partition key. A partition key is a column in the table that's used to determine which partition will store the data. It's common for a partition key to be based on time. For example, we could create one partition for each month and store data generated in a month in its corresponding partition. We can use indexes with partitions. Local indexes are used to improve the access time to rows in particular partitions. We can also have global indexes that provide faster lookups to any data in the table across all partitions. This kind of index is helpful if you need to filter data on something other than the partition key and when the data is spread across multiple partitions.

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
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-how-to-partition-a-table?u=76281980&t=5)** - [Instructor] Let's imagine you have a table that you use to analyze sales performance of multiple [products](../../Skills/Software%20Development/Microsoft%20Products.md) over time. Now you commonly need to compare sales in a month to the sales in that same month, but from the previous year. Now, queries may include multiple products, but they're always limited to just a single month that we look at. So what's a good way to partition this data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright digital music) (1)

#### [Solution: Choosing how to partition a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-how-to-partition-a-table?u=76281980&t=0)** - [Instructor] The solution involves identifying the key requirements. In this case, it's comparing sales in one month to the same month in the prior year. Now, this makes some attribute around time or date a good candidate. Now, multiple [products](../../Skills/Software%20Development/Microsoft%20Products.md) are mentioned and multiple products may be included in a query. So partitioning on individual products is not likely to help in performance because we'd just have to scan multiple partitions based on multiple products. So ideally, a column such as a sales date would be used for partitioning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. PostgreSQL Tools for Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### [Using PostgreSQL in Codespaces](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=0)** - [Instructor] In this course we're going to work with [Postgres](../../Skills/Software%20Development/PostgreSQL.md) or [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) [Databases](../../Skills/Software%20Development/Databases.md). Now we have a couple of options. You can install Postgres locally if you choose to. In this course, when I'm demonstrating, I'm going to be actually using Postgres running in [GitHub](../../Skills/Software%20Development/GitHub.md). And GitHub provides a service called Code Spaces which actually makes it much easier to get started. So I've navigated to a GitHub repository for this course. It is Advanced [SQL](../../Skills/Data%20Science/SQL.md) Query tuning performance optimization, all hyphenated. And then there's a suffix within number dash 4413111. That's the URL that we will use or that you can use to access the repository for this course. And then once you've navigated to that repository, if you click on the code button toward the upper right and add a code space, what that will do is it will run a container for you which has Postgres installed along with VS Code or Visual Studio Code and IDE. So we'll be able to work with Postgres directly using a visual studio plugin called SQL Tools. So right now a container is being built for me and this can take a couple of minutes depending on if you have built this container before and some other factors that might influence how long this takes. But in general, it's usually done within a few minutes. When the container build process completes, you'll see a screen with the read me from the repository and it'll have the title advanced SQL for Query Tuning and Performance Optimization. You'll also notice over toward the left in the Explorer,
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-postgresql-in-codespaces?u=76281980&t=97)** we have an icon which is shaped like a database icon, a cylinder. That is SQL Tools. If we click on SQL Tools, we will see that we have the option of connecting. And so we have connections here. And if you just click on the Postgres SQL database connection and we will see by clicking the Arrow icon, we will see that we have a Postgres database and I will click on that as well and then we have Schemas. And within Schemas we have our public schema. And within public schemas we have tables and views. And under tables, we'll see some tables that we'll be using. So for example, we have a table here called staff and we can see that we have different columns in that table. So when we're working with Postgres throughout this course, we'll be using this database to just demonstrate certain features and capabilities of Postgres.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (9), [SQL](../../Skills/Data%20Science/SQL.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (6), url (1), ide (1)
> **Tools:** github (3), visual studio (2), vs code (1)
> **UI Navigation:** click on (3)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Explain and analyze](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=0)** - [Voiceover] One of the first steps in optimizing queries is understanding how they're executing. Remember, sequel's declarative. So for example, here's a simple declarative statement: select star from staff. A query is a declarative statement that must be mapped into a procedural execution plan. So we want to understand what that plan looks like. From there, we can do a variety of things to our data model and to the query to try and make it more efficient. The way we learn about the execution plan in [Postgres](../../Skills/Software%20Development/PostgreSQL.md) is to use the explain command and we can precede a query with the command, explain. Now, explain is used in other [Databases](../../Skills/Software%20Development/Databases.md) as well, including [MySQL](../../Skills/Software%20Development/MySQL.md) and Oracle. If you use another database, check the documentation just in case there may be another command that's used to display the execution plan, but for now we can just run this command and this will produce an execution plan or also called a query plan. We'll notice here in the right panel we have a query plan which includes one step, which is just a seq scan or sequence scan on the staff table. Now this is reasonable. We're asking [SQL](../../Skills/Data%20Science/SQL.md) to return all the rows and all the columns in the staff table. Now I also want you to notice that there are a set of [Statistics](../../Skills/Data%20Science/Statistics.md) in the parentheses next to the scan operation. Cost is a measure of computation required to complete the step. In this example, the cost spans 0 to 24.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=97)** So the command starts at the first step of the execution or at zero time and it completes after 24 units of computation. Now, this is just an internal metric estimated by Postgres. It's not a measure of actual time required to run the query. However, we can get the actual runtime by including the analyze command. So I'm just going to close up the query plan so we don't have any confusion and add, explain, analyze, select star from staff and let's run that. And what we see here is the time required to build the plan and the planning time results. We also get the execution time as well. Note that the unit of measure for both of these are in milliseconds. Now we also see the number of rows returned and the width of the row. This gives us an indication of how much data is returned. We see in this example we have a width of 75. Let's change the query to just return last name and rerun the query. So again, I'm going to close up this panel so we don't have any confusion. And I'm just going to reformat this slightly and we're going to ask for explain and analyze, select last name from staff and let's run that. In this case, the width is only seven indicating less data is returned.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/explain-and-analyze?u=76281980&t=193)** If you're working with large data sets or concerned about how much data is returned by a query, you can use the row count and the width to help guide you as you try to reduce the amount of data that is returned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=0)** - [Instructor] Let's continue to work with the staff table and restrict the row's return to only those with a salary greater than 75,000. So we're going to add a where clause to our select statement. So we'll have select, star, from staff, where salary is greater than 75,000.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=23)** And let's run this. And we can see there are kind of down in the bottom here in the lower right, but there are 717 rows returned out of the thousand. So let's see what steps were taken to actually produce this result. And to do that, we're going to insert explain in front of the select and we will run that. And now instead of results we're going to get an explain plan. In this case, we still do a full table scan, but the explain plan has a second step where it filters by the where clause. And we'll notice the cost is 26.5 computational units. Now let's run the explain plan on the query without the where clause. So let's remove the where clause and now run and get the explain plan. And we'll notice that the cost is 24 computational units. So the total time estimated can actually be less when returning more data if there are fewer steps in the execution plan. Now let's actually time the query with explain analyze, and let's add back our where clause, where salary is greater than 75,000. And let's close these up here and let's run that.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/example-plan-selecting-with-a-where-clause?u=76281980&t=115)** Here, the total execution time is 0.165 milliseconds. Let's see it without the where clause. And let's run that without the where clause, and we'll see the execution time is 0.129. So again, sometimes adding additional steps will lead to less data being returned, but actually increase the time that a query takes to execute.

> [!info]- Semantic Content
>
> **Versions:** 26.5 (1), 0.165 (1), 0.129 (1)
> **Speakers:** - [instructor] (1)

#### [Indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=0)** - [Instructor] One common technique for improving query time is to use indexes. With indexes, we can avoid costly full table scans. Let's create an index on the salary column in the staff table. To do that, we issue a command create index and we give the index a name and we'll use "IDX_staff_salary".
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=25)** And this will be on the staff table. And within the staff table, we are going to index the salary column. So we will run that. Now, create index doesn't return any rows so we don't have anything in our results. So, I'm just going to close that window. Now, if we need to access all the rows in the table, the index won't be used. So for example, let's clear this and let's explain select star from staff and run that.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=62)** And we'll see here that a full table scan is still performed. Now let's add a where clause that references the salary column. Where salary is greater than 75,000 and let's run that.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexes?u=76281980&t=80)** But wait, it appears that the index is still not used. Why? The reason is, is that there are so many rows with a salary greater than 75,000 that the query execution builder determined it would be faster to simply scan the whole table instead of looking up those rows in the index and then reading the table. This is a case in which our where clause is not selective enough to warrant using an index. Let's try a different salary cutoff. Let's try 150,000, and we'll run that command. And here we'll see that the index is actually used. So even though we do have an index on a table, the index may not always be used. And again, the query plan builder is trying to build a plan which will take the least amount of time overall. So it'll take into consideration time to, for example, look up data that's in an index and then go look up additional data that's in a table. And so only when the conditions are highly selective are indexes used, when those conditions are so selective that they reduce the number of rows returned sufficiently so that it basically makes the query plan builder favor using an index rather than doing the brute force method of a fold table scan.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Generating a query execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-generating-a-query-execution-plan?u=76281980&t=0)** - [Instructor] In this challenge, we want to view a query plan. So imagine that you want to understand how a [SQL](../../Skills/Data%20Science/SQL.md) Select statement is being mapped from a declarative statement to a procedural plan. How would you view the plan to execute the statement, select, ID, description, category code from [products](../../Skills/Software%20Development/Microsoft%20Products.md) where category code in P17, R81 and U76.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** sql (1), p17 (1), r81 (1), u76 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generating a query execution plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-generating-a-query-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-generating-a-query-execution-plan?u=76281980&t=0)** - [Instructor] The solution is relatively straightforward. We insert the term explain before the select statement that we want to analyze and that will produce the query plan that will map this declarative statement into a procedural plan.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Types of Indexes

[↑ Back to Table of Contents](#table-of-contents)

#### [Indexing](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=0)** - [Instructor] One of the most important tools for tuning queries is indexing. We'll start our discussion of indexes by looking at a simple data model. Our example model has three tables, one with information about employees at a company. We'll call this the Staff table. We also have two tables with reference data. One is the Company_divisions table, which describes functional areas for the company, And then there's also the Company_regions table, which has data about the geographic location of staff. The reason we want to have indexes on these tables is that they help to speed up access to data. It's often much faster to look up data in an index than in a corresponding table, which is usually much larger. Indexes also help enforce constraints. For example, if we have a unique constraint on a column, then, when we add a new row to the table, we can see if the value of the index column is already in the index. This is faster than scanning the table to see if any row has a duplicate value. The reason index lookups are faster is that they're smaller and that they're ordered. And in addition, they're typically smaller than the tables themselves. The big advantage of indexes is that they reduce the need for full scans. Another factor that makes indexes so helpful for querying is that indexes tend to be smaller than their corresponding tables. This means that they're more likely to fit in memory. That's great news for querying, because reading data from memory is much faster than reading from hard disks,
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=92)** or even solid state drives, or SSDs. Indexes are [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) that are separate from tables. Indexes hold the values of the index column or columns and point to the location of the corresponding row. Indexes are not always unique, so there can be duplicate values in an index. Indexes are ordered, and that's an important difference from tables, which are usually unordered. Now, indexes use storage space in addition to what's in the table. Usually, we try not to duplicate data, but indexes are a special case. Their contribution to efficient query processing can outweigh the cost of additional storage. Now, this is not always the case. For example, if most queries on a table require a full table scan, then the index may not be used. In [Postgres](../../Skills/Software%20Development/PostgreSQL.md), and in most [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), you'll have a number of different types of indexes. B-trees, or balance trees, are commonly used. Bitmap indexes are used when columns have few distinct values, and this is known as having a low cardinality. Hash indexes are used when we need to look up values in a key value form. Now, Postgres also has specialized indexes, like geospatial, which are designed for specific data types. To summarize, indexes order data so that we can have fast lookups. We can use B-tree indexes to look up based on a quality operator
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/indexing?u=76281980&t=185)** or based on a range of values. And then, finally, another benefit of indexes is that they can help us enforce constraints that exist on tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Definitions:** means that (1), known as (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [B-tree indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=0)** - [Instructor] Let's turn our attention to balanced tree, or B-tree, indexes. As the name implies, the B-tree index is a tree data structure with a root and nodes. The tree is balanced because the root node is the index value that splits the range of values found in the index column. For example, if an index column has values from one to 100, then the root would be 50, or close to 50 if there isn't a 50 in the column. Each side of the tree has a subtree. The top node of the subtree splits the value of the index column so that the values less than the node value are stored to the left branch of the tree, and values greater than the value in the node are stored to the right. This pattern continues at each level of the tree until we reach the bottom. In this example, the B-tree has 11 nodes storing values of the index column of a table with 11 rows. B-trees make for efficient lookups because we can always determine where in a tree a node is located by looking at a node value and branching to the left or to the right until we find a value in the tree. In this example, we're looking for the value 15, so we make three comparisons at 50, 25, and 13 nodes.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-indexes?u=76281980&t=93)** From there, we find the node with a value of 15. Once we reach the node we want, we can find a reference to where the corresponding row is stored, such as the address of a data block. To summarize, B-trees are the most commonly used type of index. It's used when there are large number of distinct values in a column. This is called a high cardinality. B-trees also rebalance as needed to keep the depth of the tree about the same for all paths. This prevents a lopsided tree that would be fast to search on one side and slower on the other. Anytime you look up a value in a B-tree, you can expect it to take a time that's proportional to the log of the number of nodes in the tree.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), find (3), make (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [B-tree index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=0)** - [Instructor] Okay, now let's open our database tool, if it's not already available. Now, I'm going to navigate to the public schema where we've created our example tables. So I'm just going to go up to connections, double click on the [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database and drill down through schemas to public to tables. And I'll just show the tables we have. Now, the tables we're primarily interested in are the company_division, company_region and staff table. I'm just going to be working with the staff table in this video. So what I want to do is let's just start with something really simple. Let's do a SELECT count * from staff. So let's do a SELECT count * from staff.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=46)** And I'm going to run that on the active connection. And that'll show me that we have a count of 1,000. So we have 1,000 rows in the table. Now let's see what the data actually looks like by changing this query to SELECT * from staff. And let's run that. And I'm just going to slide this window over a little bit. And what we can see here is we have things like names and emails, departments, start_date, some job title and some other information as well. So what I'd like to do is I'd like to get a list of all the staff members who have a particular email. So for that, I'm going to add a WHERE clause to the SELECT statement and I'm going to say WHERE email equal to, and I want to look for someone with email bphillips5@[time.com](https://time.com).
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=108)** Now let's just execute that by running on the active connection. We see the person has ID six, last_name Phillips, email is Phillips. And their start_date looks like it was in 2013. So we have one employee that shows up. So let's take a look at the explain plan to see how we went about and figured out that there was one employee that met the criteria. And what we'll see is that we're using a sequence scan. So a sequence scan basically just scans the entire table. Now, this sequence scan took 26.5 computational units. So we just want to remember that so we can compare it to other results. Now, what I want to do is I'm going to just make a copy of that and save that. And now what I want to do is create an index. And in particular, I want to create a B-tree index on the email column. Now, B-tree is the default type of index used. So we can just use a basic create index statement without specifying B-tree. And to do that we can say create index and let's give it a name that starts with idx and the name of the table, in this case, staff, and the column we're going to index, which is email. And then we're going to create index idx_staff on the staff table. We're going to use the email column. So let's run that. And the index is created and there are no rows returned
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/b-tree-index-example-plan?u=76281980&t=201)** so we don't see anything showing up over here on the other side. Now what I want to do is go back. So now let's see what the query plan builder does now that we have an index available. Okay, so what happens is the query plan builder uses the index to do what's called an index scan. So rather than scan the whole table, we're going to scan a much smaller index. And what that allows us to do is to basically find the rows that we were looking for at a much lower computational cost. Well, notice here our cost is about 8.3. 8.29 is the actual cost. So that's quite a bit different from our original cost when we did not have an index. So what we see here is when we have a B-tree index on the column or a column that's used in a WHERE clause, we can significantly lower the cost of running a query by avoiding say, full table scans and using index scans instead. Now, one last thing I want to do is just drop the index 'cause I just want to clean up and make sure I don't leave any unintentional or unwanted indexes around. So I don't need this at the moment, so I'm going to drop idx_staff_email and run that. And then our index should be dropped.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=0)** - [Instructor] Now we'll take a look at a special kind of index that is well suited for low cardinality columns. Bitmap indexes store a series of bits for indexed values. The number of bits used is the same as the number of distinct values in a column. For example, a column that has either a yes or no value would require two bits, one corresponding to the yes, and one corresponding to the no. We aren't restricted to Boolean or yes/no columns. We could have three or more values. For example, if we have a pay type which has three possible values, we could use three bits to represent the pay type. One of the advantages of bitmap indexes is that we can perform Boolean operations quickly. For example, anding two bitmaps is a fast operation, so we could use it to find all union members who have hourly pay rates. Bitmaps are used with low cardinality columns, especially when we want to filter on those columns or perform Boolean operations like and, or, or not. While bitwise operations are fast, updating bitmap indexes can be more time consuming than other indexes, so they tend to be used in read intensive use cases like data warehouses. Some [Databases](../../Skills/Software%20Development/Databases.md) like Oracle lets you create explicit bitmap indexes, but [Postgres](../../Skills/Software%20Development/PostgreSQL.md) does not.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-indexes?u=76281980&t=93)** Instead, Postgres will calculate bitmap indexes on the fly when they can be used to improve query performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bitmap index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=0)** - [Instructor] Let's see an example where [Postgres](../../Skills/Software%20Development/PostgreSQL.md) creates bitmap indexes on the fly. We'll work with the staff table again. This time, let's take a look at job title. And first thing I'm going to do is let's list all the distinct job titles. So, I will select DISTINCT job_title from staff, and let's also order by job_title. Take advantage of our popups here. And, let's see, select DISTINCT job_title. Give that a run. And what we'll see here, there are 186 distinct job titles. So, let's take a look at some of these. Let's pick one, in particular. How about, let's see, oh, operator. Let's go, and now, let's run a different select statement. Let's select star from staff, where job_title is equal to operator. And let's just run that, and we'll see we get a list of 11 rows. Now, let's see how that was executed. So, let's put an explain. Let's have, for an explanation here, and we'll run that. And not surprisingly, we did a sequence scan on the staff table. So our cost was 26.5 for that.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bitmap-index-example-plan?u=76281980&t=92)** Now, let's create an index on the table. So, let's cut this out, and we'll copy that and save that for later. And let's create another index. And this time, we'll create an index called idx_staff_job_title. And we'll create this on the staff table. And the specific column we're creating it on is called job_title, and let's create that. Okay, so now we have an index on the job_title column. So let's go back to our explain. So we're going to explain our select star from staff, where job title is equal to operator. If we build this plan, okay, so what we'll notice here is we created an index which, by default, is a B-tree index, but we're not using a B-tree index here. Instead, the query plan creates a bitmap index and performs a bitmap index scan. Now, Postgres uses those when an index scan would reach too much data, but a full table scan is not warranted. Also, notice the query plan uses a bitmap heap scan, which only visits data blocks that are needed and does not scan all the index blocks. So that's an example of a case where Postgres will create bitmaps on the fly and use those rather than the B-tree index that we actually created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (3)
> **Code Identifiers:** job_title (6), idx_staff_job_title (1)
> **Env Vars:** distinct (2)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 26.5 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Hash indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-indexes?u=76281980&t=0)** - [Instructor] The next type of index we'll discuss is the hash index. The basis for this kind of index is a function called a hash function. Hash functions take an arbitrary length data and map it to a fixed-size value. Hash values are designed so that different inputs will produce different outputs. Now, occasionally, two different inputs will produce the same output, but that's very unlikely. In general, even a slight change in an input will produce a different hash value. The hash value that is created can vary in size depending on which hash algorithm is used. You'll notice in this example that similar input strings can produce widely different hash values. Adding a single letter or changing the case of a letter is sufficient to lead to a new value. Now, here are a few things to keep in mind about hash functions. They're used only for equality comparisons. Hash values won't help if you want to filter on a range of values. Some of the more recent versions of [Postgres](../../Skills/Software%20Development/PostgreSQL.md) have made improvements on hash indexes, and now, these hash indexes can be smaller in some cases than B-tree indexes but just as fast. This can be an advantage because smaller indexes are more easily fit within memory, and that can be a help with performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Hash index example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=0)** - [Instructor] Let's create a hash index on the email column of the staff table. The email column is a good candidate for hash indexing, since the email should be unique to each person and it's likely we want to be able to, say, look up a person's data using their email. Also, it's not likely that we'd want to perform a range scan query using email address. So to specify a hash index, we start with create index, and of course, we give it a name, so let's call this idx_staff_email, and we're going to create this on the staff table. Now, instead of immediately specifying the column, at this point, we introduce a new clause called using hash, and that just tells the [Postgres](../../Skills/Software%20Development/PostgreSQL.md) that we want to use a hash index on the column email. And so let's run that, and so now we have created an index. Let's take a look at what an explain plan will look like when we try and select star from staff where email is equal to bphillips5@[time.com](https://time.com).
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=81)** Looks good. Okay, so we do have that correct, so now let's see how the explain plan worked, and what we'll see here is, we used an index scan using the idx_staff_email, and it cost about eight computational units, 8.02, and let's do a quick check. Okay, so that was about eight, 8.02. Let's see what happens if we use a B-tree index. So let's drop index idx_staff_email.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-index-example-plan?u=76281980&t=123)** So we dropped that. Now let's just create index idx_staff_email on staff using the email column, and so by default, we're going to create a B-tree index, and now, let's explain this and see what happens. And we explained, and it was slightly more expensive, 8.29. So for this table, it's only a thousand rows. Hash index didn't buy us that much performance, but if you have tables with millions of rows and you can use a hash index, you'd definitely see some significant performance difference in B-tree versus hash indexes if your use case happens to be a good candidate for using hash indexing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Code Identifiers:** idx_staff_email (4)
> **Versions:** 8.02 (2), 8.29 (1)
> **URLs:** [time.com](https://time.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Bloom filter indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=0)** - [Instructor] Sometimes when we write queries, we want to filter out data and find like a very specific group of rows. For example, if we're working in, say, a retail industry and we want to analyze different customers and we group customers along different attributes, like what geographic region do they live in? How frequently do they shop at a store? What's the total amount of sales they might have used? And are they a loyalty card member? And so on, and so we might have a large number of sort of conditions that we want to satisfy because we want to find something very precise. And so in that way, it's kind of like finding a needle in a haystack. And one of the questions we have or we need to address when we're tuning queries like that is how do we index a table like that in such a way that, one, it's efficient we can efficiently query the data? But also we don't want to have a crazy large number of indexes that we need to maintain, because that takes up a lot of space and every time we insert a row we need to update all of those indexes. This really is a challenge and it's almost like an edge case in indexing, but it does come up frequently enough that there are particular solutions that seem to work well. Now you might think, "Well, we just organize our data." So, for example, if we have a large number of chunks of data, which we call partitions, and we're going to be discussing that shortly, we might organize our chunks of data or our partitions in a certain way. Like, we might have a column and the column might have an integer value.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=93)** And so anything with a column value of between one and 10 we put in one block, and 11 to 20 we put in another block, and so on. And that way if we know the value of the column, we can pretty quickly determine which block we should go retrieve. And that works really well. That actually is a great strategy in many cases. However, the constraint on using that is that strategy only works well when your lookup criteria is the same as your sort of organizing principle that you used for ordering the partitions. When you're looking for something or using some criteria that's different than your organizing principle for the data blocks and the partitions, then it doesn't really help so much. So, for example, we might arrange our data volumes by a particular kind of code, but we might want to look up by several different codes, but of different types of codes. So, in that case, a different strategy that works well is something called a bloom filter. Now a bloom filter is basically a way of filtering out, in this case, like blocks or rows, that definitely don't meet our criteria, but the bloom filter might return some results that actually don't meet our filter criteria, but somehow they kind of slip past that check. And so what a bloom filter does is it allows us to trade off things like keeping a large number of indexes and storing a large amount of data. So we trade that for a more probabilistic approach in which we get the results back and we can know for sure that the data
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=188)** we're looking for is in our results, but then we may also have some extra stuff that actually didn't quite fit the filter, and that is a trade-off. And the question is, is that a good trade-off for you to make from an indexing strategy perspective? Well, it depends. And it depends because a bloom filter index is probabilistic, which means it's not deterministic, we might get some results that aren't actually fitting our filter criteria. But it's really space efficient, highly space efficient. And the reason it is so space efficient is that we lose information. It's a lossy representation, unlike, say, a B-tree index where we don't lose information. So we're losing a little bit of information, but we're saving a lot on storage space. And because of this, when we get results back we may have some false positives. So if we can quickly filter through those false positives afterwards, then it may be useful to use a bloom filter. Now, typically, bloom filters are especially useful when we're querying arbitrary combinations or a large number of attributes. Now we might think, "Well, we could use B-tree indexes." And B-tree indexes in many cases are faster. But with B-tree indexes we would have to create an individual index for each column that is in the combination of columns that we're interested in querying on. That's not the case with a bloom filter. With a bloom filter index, we create a single index. So, in this case, I'm going to create a custom bloom index
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=281)** on a table called customer features. And I'm going to assume that in this customer features table I have a bunch of columns, and I'm particularly interested in C1, C2, and so on through C8. So I have eight columns that I'm interested in. And it could be any combination, I could have values for C2, C5, C8, or I could have combinations for C1, C4, C5, C6, C7. We could use this one index for any of those combinations. We wouldn't have to have a bunch of different indexes. So, one, it's helpful because we don't have to have as many indexes. And also it's helpful because the size of the index itself can be smaller because we control the size of the bloom filter index, how much data we use to store an entry in this index, and we specify it in terms of the length of the number of bits that we want to use to represent an index entry. In this case, I'm using 160 bits to represent eight different columns. Now one thing to know is that we can trade-off storage space for more certainty around false positives. So the longer the length of the index entry, the smaller the chance of false positives being included in the results when we use this index. Now bloom filter types of index work with integers and text data types. Now, because the bloom filter index is an extension, that is, it's not part of the [Postgres](../../Skills/Software%20Development/PostgreSQL.md) core, if we want to use bloom filter indexes, the first thing we need to do in our database
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/bloom-filter-indexes?u=76281980&t=373)** is to create the extension, if it doesn't already exist, by using the create extension if not exists bloom command. And we just need to do that once, you know, once a database is created, and then it will be available for us. And then, we can start creating bloom filter indexes as we see here in this example at the top of the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [PostgreSQL-specific indexes](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=0)** - [Instructor] In addition to the indexes we've already discussed, [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md), or [Postgres](../../Skills/Software%20Development/PostgreSQL.md), has some specialized indexes that you won't necessarily find in other [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). These include the GiST, the SP-GiST, GIN, and BRIN indexes. Let's take a look at each of these. The GiST index, which stands for generalized search tree, is not a single type of index. It's more like a framework for implementing custom indexes. SP-GiST is an example of one of those indexes that can be implemented with GiST, and SP-GiST stands for space-partitioned GIST, and it supports partitioned search trees, and those are useful when we have nonbalanced or skewed distributions of data, and so SP-GiST is used for nonbalanced [Data Structures](../../Skills/Software%20Development/Data%20Structures.md). And this is useful because sometimes, we have to support partitions that we don't want to have the same size. GIN indexes are used for text indexing. Now, lookups with GIN are faster than with GiST, but the builds can be slower than they are with GiST, and the indexes can be two to three times larger. So GIN versus GiST is an example of what we often face when we work with different kinds of [Algorithms](../../Skills/Software%20Development/Algorithms.md), which is sometimes, we optimize for space, and sometimes, we optimize for time. And often, there's a tradeoff between the two. Now, a BRIN index is a block range indexing mechanism, and it's used for large datasets, and basically, it allows us
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/postgresql-specific-indexes?u=76281980&t=93)** to divide data into ordered blocks, and within those blocks, we can keep min and max values that are oriented with values within the index. And then, what this allows us to do is quickly identify blocks that have the data that's in the range we are interested in, and that allows us to search only the blocks that have the match that we're interested in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PostgreSQL](../../Skills/Software%20Development/PostgreSQL.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** gin (4), brin (2), gist (1)
> **Definitions:** stands for (2), is an  (2), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choosing an index](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-choosing-an-index?u=76281980&t=0)** - [Instructor] In this challenge, we're going to choose an index type for a table that has millions of rows. And this table has a sensor ID column, which is a unique identifier for a sensor. Now each sensor generates hundreds of rows of data per day, and users of this dataset, they'll be looking up specific sensors one at a time. What kind of index would you use?

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Choosing an index](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-choosing-an-index?u=76281980&t=0)** - [Instructor] The solution to this challenge is to use a hash index. Now, the reason is that the sensor ID that we're going to be looking up on is high cardinality. That means there's many, many different values, and we're using equality conditions to filter the rows. And also, hash indexes provide essentially a constant time operation. So as the size of the table grows, the size of doing the lookup in the index does not grow, which is not the case when we're using BTREE indexes.

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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=0)** - [Instructor] Joins can be an expensive operation so they're a good target for your tuning efforts. Let's take a look at the different kinds of joins that are available. The four types of joins in Sequel are the inner join, the left outer join, the right outer join, and the full outer join. The inner join is the most common type of join. The inner join returns rows from both tables that have corresponding rows in each of the tables. The left outer join returns all rows from the left table. Now, in the example here, the left table is company regions. It's shown as above here, but if the table names were on the same line as the left outer join statement then the company regions would be to the left of the join term. Only rows in the right table that have matching keys in the left table are returned. Rows in the left table without a matching row in the right table will have nulls in the column selected from the right table. The right outer join works like the left outer join but in the other direction. So, in this example query here, the right table is called staff. Only rows in the left table that have a matching key in the right table are returned. Rows in the left table without a matching row in the right table will have nulls in the column selected from the left table. The full outer join returns all rows from both tables.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/types-of-joins?u=76281980&t=96)** When there isn't a matching row in one of the tables the nulls will be returned for the columns that are selected from that table. For example, if there's a row in company regions but no row in staff that have a matching key then the columns from the company regions will be returned and the columns from the staff will all be null. We can think of different kinds of joins in terms of Venn diagrams. The inner join is the overlapping area of two tables. Left and right outer joins are all the regions of one table and the overlapping areas of the other table. A full outer join is the combination of the two. From a tuning perspective, prefer inner joins if they're sufficient to meet your needs. Outer and full joins can require more steps than inner joins. However, if you need to know which rows do not have corresponding rows in the other table, then use one of the other joins.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Nested loops](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=0)** - [Instructor] Now let's look at how execution plans map declarative joins into procedural operations. We'll start with nested loop joins. Nested loops are a naive approach to joining tables, but their big advantage is that they will work with any kind of join, using either equality, inequality, or range operators. As the name implies, a nested loop join works by running two loops, one within the other. The outer loop iterates over one table called the driver table. The inner loop iterates over the other table called the join table. The outer loop executes once, and the inner loop runs once for each row in the join table. Let's look at an example. Here we want to join some data about customers and their status level, which indicates how much revenue the customer generates. Now, the status level is a foreign key in the customer table and the primary key in the status table. The customer table is the driver table, and the status table is the join table. We start at the first row in the customer table, and see the status level is silver. We compare that to the first row of the status table. The status level in that row is gold. The status levels don't match, so we move on to the next row in the join table. In this case, the second row has a primary key of silver, so we have a match. We can stop executing the inner loop and return the second row. Now we continue to iterate over the driver table with the outer loop. Now we're at the second row of the driver table,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=94)** and we see that the status level is bronze. We start another iteration of the inner loop at the first row of the join table. The primary key of the first row in the status table is gold, so the keys don't match. Next, we check the second row of the join table, and see the primary key there is silver. Still no match, so let's keep looking. When we reach the third row of the status table, we find matching keys. We can return the row and stop iterating the inner loop. Now we're at the third row of the driver table, and compare the foreign key of that row to the first row of the status table. We have a match, so we can stop iterating right away. So that's the basic idea behind nested loop joins. As noted, their big advantage is that they work with any kind of join condition. There's also low overhead. We don't need to create other [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) or sort tables before looking for matches between foreign keys and primary keys. Nested loops work well with small tables, especially if the large table has an index on the join column. Now, in terms of disadvantages, nested loops can be slower than other join methods. If a table does not fit in memory, then we'll get an even bigger performance hit, because rows will have to be read from persistent storage. Indexes can improve the performance of nested loops. This is especially the case if your indexes include all the columns returned by your query. The execution plan won't have to read from the table.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loops?u=76281980&t=190)** It can just return the data from the index. This is called a covered index, and it's a good technique to keep in mind when tuning queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Nested loop example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=0)** - [Instructor] Now we'll take a look at an explain plan that uses nested loops. We'll use a simple query over the staff and company regions table. So specifically we're going to look at SELECT, and I'm going to look at ID. Now for staff I'm going to alias it using an s, so I'm going to say s.id, and we'll look at the last_name, job_title, and the company_region, country. And I'm going to SELECT FROM the staff table and alias that as s. And then I'm going to INNER JOIN on the company_regions table. And I'll just grab that off the popup there, and we'll alias that as cr. Now we need to specify how we're going to join. We're going to join ON the region_id in the staff table, and we're going to join that to the region_id in the company_regions table. Now let's just run this and take a look at the results. And actually, I'm just going to reformat it slightly here, just so it's a little easier to read. There we go, okay. So what we see here is we have the columns that we have specified, the id, last_name, job_title, and the country. Now let's look at what the EXPLAIN plan has for us.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=99)** And we'll run that. In this case, the Query Plan Builder determined that a Hash Join is the most efficient way to join these tables. That seems logical, since there are few distinct company regions, and we are using an equality operation on the join. But we want to see what a nested loop join looks like. So we'll force the Query Plan Builder to use a plan based on nested loops. Now to do this, we're going to enter three commands to force the use of nested loops. And I'm going to set those above the statement here. And those commands are set enable_nestloop
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/nested-loop-example-plan?u=76281980&t=146)** equals true, set enable_hashjoin equals false, and set enable_mergejoin equals false. Now, this is a way to specify directives to the Query Plan Builder. Other [Databases](../../Skills/Software%20Development/Databases.md) uses hints which are incorporated into the SELECT statement. If you're using a database other than [Postgres](../../Skills/Software%20Development/PostgreSQL.md), I suggest you check your documentation for the syntax to use. Now, when we execute the explain plan, we'll see that a nested loop is used. So let's run that. I see I mistyped enable_nestloop, so I've corrected that. So let's run this. And we'll scroll over to our results. So, we see the use of nested loop starting with a full table scan of the staff table, and then looking up company_regions using an index scan. This is more efficient than the naive implementation of nested loops, because it uses the index to minimize the number of rows that need to be checked in the join table. Postgres creates an index for all primary key columns. In this case it's using the primary key to optimize the nested loop. If the primary key did not exist, the Query Plan Builder would've had to use a full table scan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Code Identifiers:** company_regions (3), last_name (2), job_title (2), region_id (2), enable_nestloop (2)
> **Env Vars:** select (3), inner (1), join (1), explain (1)
> **SQL:** select (3), inner join (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hash joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-joins?u=76281980&t=0)** - [Instructor] Another algorithm for performing joins is the hash join. Hash joins use a function to map data, such as a key value, into a value that can act as an index in an array. Hash functions are designed so that the output value is virtually unique across all the values in the domain or set of input values. Even slight changes in the input value can lead to different outputs. Part of the process of hash joining is building a table of hash values. The smaller of the two tables is used. For each key value in the smaller table, we compute a hash value and store it in the table. The next step is called the probe phase. In this step, we calculate the hash value of the key in each row, and then look up the corresponding value in the hash table. The hash table contains a pointer or a reference to the location of the row we're joining to. It's important to note that hash joins only work with the equality conditions, they don't help when using inequality operators in the join. Also, the total time required to perform the join is based on the time required to build the hash table and go through the larger table calculating hash values and performing lookups. The key advantage of hash joins is that they can provide fast lookups. That can be faster than other join methods.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Hash join example plan](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=0)** - [Instructor] We're back in the IDE now to see what an explain plan with a hash join looks like. We'll start with the commands that will force the use of a hash join. So I will change enable_nestloop to false, and we'll set enable_hashjoin to true. And now, we will simply paste in the query that we've been using for this exercise. And again, in this query, we're going to query from the staff table, and from the staff table, we're going to get the ID, the last name, and job title. And then, we're also going to join to the company_regions table. And from the company_regions table, we're going to get country. So let's run this and see what a hash-join query plan looks like. And we'll just scroll over to the results pane for the explain plan. Now, what we'll see here is, first of all, the hash join has a total cost of about 49 computational units. There is a hash condition, so the condition that we're working on is basically comparing the staff region ID to the country region ID. Now, at line three, we see that there's a sequential scan of the staff table, and then at line four we have a cost for hashing, and the hash is applied to the company regions table. And we apply that hash after we do a sequence scan to the company regions. So again, basically, we've decided, or the query plan builder actually has decided,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hash-join-example-plan?u=76281980&t=94)** that it's going to use a hash join. It's going to calculate the hash based on the company region's region ID, and then use that along with the sequential scan of the staff table to produce our output. So this is an example of what a hash join explain plan looks like.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_regions (2), enable_nestloop (1), enable_hashjoin (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### [Merge joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=0)** - [Instructor] The merge join is the last join algorithm we'll examine. Merge joins, also known as sort merge joins, sort the input table prior to looking up rows by key values. By sorting, the algorithm can take advantage of ordering of the tables to reduce the number of rows that have to be checked. Let's look at an example. Assume we have performed the sort operations. In this example, we're joining two tables on region_id. The first row of the tables have a region_id of one, so we have a match and we can return that row. Next, we move to the second row of the larger table. Again, we have a match on the first row of the smaller table so we can stop after the first row in that table. Now, we move on and focus on the third row. There's no match with the first row of the second table, so we advanced to the next row of the second table. There's no match on the second row, so we advance to the third row of the second table and here we find a match. So next, we advance to the fourth row of the first table and continue the process. We know that the value we're looking for in the second table must be equal to or greater than the last match value. In this case, we have a value of four in the larger table and the last value we saw in the smaller table was three. There's no reason to consider it any rows before the three in the smaller table, so we can start looking for the match
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-joins?u=76281980&t=97)** from the row with the value of three. As you can see, this is similar to nested loop joints, but because the tables are sorted, we can often start iterating farther down in the second table and do not have to start the scan at the top of the table. Now, something to keep in mind about merge joins is that they are only used with equality join conditions. The time required to execute the join is based on table sizes and how long it takes to sort and scan. Merge joins are especially useful when large tables don't fit into memory because we can do fewer joins from persistent storage than we would likely need to do if we were using a nested loop join.

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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=0)** - [Instructor] We'll now see what a mergejoin looks like. We'll start with our directives, and we will disable the use of a hashjoin by setting enable_hashjoin to false, and we'll enable the mergejoin by setting the directive to true, and we'll paste in, once again, our query that we've been using, and again, we're going to look at the staff table, and from the staff table, we're going to return the id, last_name, and job_title, and from the company_regions table, we're going to return the country, so let's run this and see what a mergejoin looks like, and we'll just scroll over to the panel with our explain results, and what we'll see, starting at the top here, is, first of all, the mergejoin costs about 132 computational units, so this is definitely not the optimal plan, but that's okay. We are interested in understanding what the structure of a mergejoin looks like. Well, the first thing we'll see is that we're being driven by a merge condition, and our merge condition is, of course, matching the staff region_id with the company region's, region_id, so basically, what we need to do is, for each table, we're going to be sorting on the key that we're using, so in the case of the staff table, we're going to sort on the staff region_id, and in the case of the company_regions table, we're going to sort on the company_regions id. Once we have those two sorts, we can actually do the merge operation combining the results of the two sorted results set. Now, in general,
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/merge-join-example?u=76281980&t=96)** the query builder will choose the optimal join method, and we use the directives that we've used here to compare the cost between different join methods. Now, if you believe the builder is not choosing the best method, you can use the explain plans to understand why, so, for example, you might expect the builder to use an index scan, but it uses a full table scan. That's a clue that your index may be missing, so my only suggestion with regards to using directives and hints is to use them with extreme caution. They're very useful when learning things like the structure of a query plan and what a mergejoin operation actually looks like. However, when you're running code in production, the query plan builder makes use of [Statistics](../../Skills/Data%20Science/Statistics.md) about the data in your database and the distribution of that data to figure out what's the best way to join a table, so use things like directives and hints with caution because, especially because even if they work well now, and you found an optimal solution right now that the query plan builder didn't find, over time, your data distribution's going to change, and that may no longer be the case, so definitely use directives and hints for a learning perspective, but use them in production with caution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Code Identifiers:** company_regions (3), region_id (3), enable_hashjoin (1), last_name (1), job_title (1)
> **Warnings:** caution (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Subqueries vs. joins](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/subqueries-vs-joins?u=76281980&t=0)** - Before we move on from our discussion of joins, let's touch on the question of joins vs. subqueries. A subquery can be used to return a value from a related table. In this example, we're essentially performing a lookup on the company_regions table in the part of the select statement where we specify the columns that we want to return from this query. We could rewrite the query to use joins in this example, the results are the same. This is a good example of how we can declaratively specify an outcome in different ways. But this raises a question, so which methods should we use? Now, in the past the conventional wisdom has been that we should always use joins since they'll be more efficient. That may have been true in the past, but optimizers have improved over time and we can build efficient execution plans for subqueries. My advice is to optimize for clarity. So use the method that makes your intentions clear. If there's a significant performance difference between joins and subqueries, then you can choose the optimal one and document your query so others reading your code can immediately understand your intentions.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_regions (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### [Challenge: Designing a join](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-designing-a-join?u=76281980&t=0)** - [Instructor] In this challenge, we want to consider which join method would be used in a particular scenario. In this case, we have an application that needs to join two large tables. Now the results of the query should be returned in sort order. What join method will likely be used?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Designing a join](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-designing-a-join?u=76281980&t=5)** - [Instructor] In this case, a merge join will likely be used. Joining two large tables are not good candidates for nested loop joins, but a merge join produces results in sort order. So it makes it the most likely candidate to be used in terms of a join solution.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)


### 5. Partitioning Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Horizontal vs. vertical partitioning](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=0)** - [Instructor] Let's look at some ways we can change our data model implementation to improve query performance. One of the problems with large tables is that they can be difficult to query efficiently. Even with indexes, queries against large tables may not be performant enough. One way to deal with this is by splitting the large table into smaller sub-tables. This is called horizontal partitioning. And basically we treat each partition like a table. The benefit of horizontal partitioning is that we can sometimes limit scans to a small number of partitions. Because partitions are like tables, we can create indexes on columns in those partitions. This leads to smaller indexes than those that would exist in the full table. In addition, partitions can make bulk data operations like dropping old data even more efficient because we can drop an entire partition quickly. If we need to drop a subset of rows, that can also be faster because a smaller index is updated faster rather than a much larger index. Partitions are used widely in several kinds of [Database Applications](../../Skills/Software%20Development/Database%20Applications.md), including data warehouses. They are often partitioned based on time because time is commonly used as a filter. Timeseries data is also a good candidate for partitioning because the latest data is the most likely to be queried. In other areas, there may be a natural partition strategy that doesn't involve time.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/horizontal-vs-vertical-partitioning?u=76281980&t=93)** For example, you may want to partition by geography or by product type. Vertical partitioning separates the columns of a large table into multiple tables. Designers tend to keep columns that are frequently queried together in the same vertical partition. When using vertical partition, you'll use the same primary key across all of the partitions. Benefits of vertical partitioning include increasing the number of rows stored in a single data block. This means that more rows are returned with each block read. We can create global indexes on each partition. Because columns are separated, we can read less data to satisfy a query and this can reduce IO. Columnar [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) strategies can provide similar benefits as well. You may see vertical partitioning used in data warehouses, in wide-column tables such as product tables with a large number of product attributes, and in data analytics. That's another area where vertical partitioning can be used, sometimes after preliminary analysis to determine which of the attributes are most important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Partition by range](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=0)** - [Voiceover] Let's take a look at range partitioning. Range Partitioning is a kind of horizontal partitioning. Partitions are created based on non-overlapping partition keys. Now, partition keys are often based on time but numeric ranges and alphabetic ranges are also used. The partition key is a column used to determine which partition should hold a row. Partitions are bounded by minimum and maximum values on the partition key. Since the partitions are essentially separate tables, each partition can have its own indexes and constraints. Let's take a look at an [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) or [IoT](../../Glossary/Concept/IoT.md) example. In this example, we're collecting measurements. Each measurement has a location, a date, temperature and relative humidity. The partition key is the date of the measurement. Now, we can partition this table into week long partitions. Here we create one partition for each week. The range of values for the partition key span one week in each partition. Partitioning by range works well in a number of cases, such as when we typically query the latest data or perform comparative queries between periods of time, such as a report on this month's sales compared to last year's sales in the same month. Range partitioning also works well when we query data within a single partition. If you drop data after a certain amount of time,
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range?u=76281980&t=93)** partitioning can make the deleting operation more efficient because the entire partition can be deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [voiceover] (1)

#### [Partition by range example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=0)** - [Instructor] Let's see how we create a table that uses range partitioning. We'll use an [IoT](../../Glossary/Concept/IoT.md) table as an example, so let's issue a create table command. Create table, and the table we'll create is called iot_measurement. And let's have a location_id which will make an integer, and that's required so it's not null. And the measurement_datetime, and that's of type timestamp and that's not null. And let's have a temperature in Celsius, and we'll track that as an integer. And let's get relative humidity or rel_humidity. And we'll track the percent of relative humidity and that can be an integer as well. So that's a very basic table. Now we're going to add a clause which defines how we want to do partitioning. And we do that by adding the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) partition by range, so we're specifying that we want to do partitioning and we want to use range partitioning. And we want that range to be defined over the measurement_datetime. So let's run this and get a table created. And now what we're going to do is we're going to refresh our schemas here and let's see the table and refresh. There we go, we have an IOT measurement table,
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=101)** and it has the, of course, the columns that we've defined. So that defines our base table. So the next thing we want to do is actually define particular partitions in this table. Now to do that, I'm going to use another create table command. And this time I'm going to specify iot_measurement, and let's call this week one of 2024. And in this partition of, actually, I'm going to drop this down to the next line to make it a little more readable. So this is going to be a partition of the table we just created, iot_measurement. So we're creating a table called "iot_measurement_wk1_2024" and it's a partition of this, essentially, this parent table that we just created. And now we have to specify the values for the range partition. To do that we use the clause for values from, and now we specify the range that, basically, the timestamp range that we want. And in this case, we want to work from 2024-01-01,
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=183)** and we want to go up to 2024-01-08.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=192)** That will give us one partition. So let's run that, and let's refresh here as well.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=207)** And what we'll see here now is we have another table listed in the tables, and we have iot_measurement week one. Now we can also create additional partitions 'cause typically we have several partitions. So for example, let's change this to week two, and we'll specify this as from January 8th and we'll go up to the 15th. And let's create one more partition. And so I'm just going to copy this week two definition and we're going to make week three. And we'll specify this as starting on the 15th and going to the 22nd, oops, that was a mistake. We need to get rid of that zero, and 22nd. Now let me just double check and make sure I don't have any other mistakes here. 01-08, that looks good, so we'll run this on the active connection. Okay, so now we should have two additional partitions, so let's close that and refresh our list and see, that's the other list, and there we are. So what we have done is created, essentially, a parent table called iot_measurement. And when we insert into iot_measurement, the rows that we insert will actually be stored in one of the three partitions we created,
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-range-example?u=76281980&t=300)** assuming the measurement timestamp fits within that particular range. So what we see here is that each partition can have its own indexes constraints and triggers as well. And you'll notice that each of the partitions inherits the columns that we defined in the parent table. So we can think of partitions as almost like subtables that are essentially structured or constrained in some ways in terms of the columns. Those are constrained by what we define in the parent table or in this case the iot_measurement table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** iot_measurement (7), measurement_datetime (2), location_id (1), rel_humidity (1)
> **CLI Commands:** make (4)
> **Env Vars:** iot (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Partition by list](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list?u=76281980&t=0)** - [Instructor] Partitioning by list is a type of horizontal partitioning. Data is divided among partitions, based on a partition key. In this case, the partition values are defined in a list of values. Now, there is a partition key, which takes values from a list of partition values. The partition bounds, are the list of values allowed in the partition. And, like other [Forms](../../Skills/Web%20Development/Forms.md) of horizontal partitioning, each partition can have its own indexes, constraints, and defaults. Here's a product catalog example. In this [products](../../Skills/Software%20Development/Microsoft%20Products.md) table, we have an ID, name, short and long description, and a product category. And the partition key is the product category. Notice, that when we define the partition table, we have to list the values of the partition key, that will be allowed in that partition. We use list partitioning, when data logically groups into subgroups, based on the partition key values. For example, we could have a partition for clothing, and another for [Electronics](../../Skills/Software%20Development/Electronics.md). This works well when most queries are within a partition. For example, we might report on clothing or electronics individually, but rarely compare the two. List partitioning is a good option, when your data is not so time-oriented, that date-based partitioning would make more sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Partition by list example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=0)** - [Instructor] Now we're going to implement a table using list partitioning. And look, we're going to start by creating a product table. And so for that we're going to say CREATE TABLE. And we're going to call this table [products](../../Skills/Software%20Development/Microsoft%20Products.md). And in this table we will have a product id which will be an integer and not null. And we will also have a product name, which will be a text. And let's say that's required, so that's not null. And let's have a product description, which will be of type text and a product category which is also of type text. Now, again, we have a basic table here, and we're going to indicate that we want this table to be partitioned by using the PARTITION BY clause and specifying the type of partition we're using. In this case it's LIST partitioning, and how we want this to be partitioned? What value should we look at? And in this case, it's going to be the product category that we're going to look at. So let's run that to create the table. And we'll refresh our view here. And let's just verify that we have, yep, we do have a products table, and it has the columns we expect. So then, as the case with anytime we use partitioning,
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=97)** the next step that we're going to do is we're going to create some partitions. Now, when we work with list partitioning, we basically, as the name would imply, we list out the values that are used to determine where a row is written to in terms of which partition a row is written to. So for that, we're going to CREATE a TABLE. And let's call the first one, we'll partition these products into different categories. The first will be a clothing category. So we'll call this product_clothing. And this is a PARTITION OF the products table.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=141)** And this partition is going to be FOR VALUES IN. And now we start listing off values. So we have a few different types of clothing. Let's say we have casual and business attire. We'll just shorten that to business. And how about formal? And so that will give us a partition for product_clothing. And let's just create a couple others, too. Let's CREATE a TABLE, and let's make this partition for [Electronics](../../Skills/Software%20Development/Electronics.md), product_electronics. And this is also a PARTITION OF the products table.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=190)** And this is FOR VALUES IN, and for electronics, let's use say mobile, and how about tablets? And one more, we'll call it, we'll say laptops. And let's terminate that with a semicolon, 'cause that's the end of the command. And one more, let's do a CREATE TABLE product. Let's make this for kitchenware. And this will be a PARTITION OF the products table,
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=233)** and it will be for values in, and let's say, oh food-processor and cutlery.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=249)** And one more, let's say blenders. And we'll have a semicolon and terminate that command. And let's just do a quick check. So we're going to create product_clothing PARTITION OF products FOR VALUES IN, and then there's three values. Then we'll CREATE the TABLE product_electronics, which is a partition of products. And that's FOR VALUES IN those three. List of three. And then CREATE TABLE product_kitchen PARTITION OF products FOR VALUES food-processor, cutlery. That looks good, so let's run this on the active connection, and let's refresh our list here.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-list-example?u=76281980&t=294)** And again, we have our product_clothing table, product_electronics, product_kitchen, and products. So we can see here in this example that we can create list partitioning. And this is really useful when we have columns that have a number of different types or categories. So typically those categories, or the number of those categories, is fairly low. So relatively low cardinality. You know, we don't tell you to have thousands of different distinct values, but you know, smaller numbers than that where we can easily manage to create different tables and actually list out the distinct values that we want to use for our list items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (10), [Electronics](../../Skills/Software%20Development/Electronics.md) (2)
> **Env Vars:** create (6), table (6), partition (6), values (5), list (1)
> **Code Identifiers:** product_clothing (4), product_electronics (3), product_kitchen (2)
> **SQL:** create table (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Partition by hash](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=0)** - [Instructor] The last type of partitioning we'll look at is hash partitioning. Hash partitioning is a type of horizontal partitioning. The partition key is used as input into a function that computes a value indicating which partition should store a row of data. As with other partition methods, the partition key is used to determine where data should be stored but the partition key is not used directly. Instead, in [Postgres](../../Skills/Software%20Development/PostgreSQL.md), modular division is applied to the partition key to compute a value that's based on the number of partitions. For example, if we use five partitions we would apply module 05 to the partition key to generate a value in the range of zero to four. This kind of partitioning is available in Postgres, Oracle, and [MySQL](../../Skills/Software%20Development/MySQL.md). You may find it in other [Databases](../../Skills/Software%20Development/Databases.md) as well. Consider a database tracking the way customers use a web application. We might want to track each URL the customer visits the time spent on that page, the order in which the customer navigated from one page to another. We could use the CI ID column as a partition key. If we want to keep customers interactions together we could use a customer ID or session ID to ensure that all rows with a customer ID or session ID are in the same partition. Here, for example, we create a set of five partitions. The CI ID is divided by five using modular division which allows us to use the remainder as the partition key.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash?u=76281980&t=97)** We use hash partitions when the data does not logically group into subgroups, and we want to maintain a fairly even distribution across partitions. And there's no need for subgroup specific operations such as dropping a particular partition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** mysql (1), find (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Partition by hash example](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=0)** - [Instructor] Let's create one more partition table. We'll create a partition table using hash partitioning for a table that tracks customer interactions. So for that, we'll say create table and let's call this customer interactions. And let's use CI as a prefix for customer interaction. And we'll have an id, which is an integer and not null. And let's say we're tracking at a particular URL which is a text and not null. We want to track the time at URL and let's make that an integer and not null. And then finally we'll have a click sequence, which is an integer that we're tracking and that's also not null. Now because this is a partition table we have a partition by clause and we specify the type of partition of course, and in this case it's hash. And the column we're going to be using to partition by in this case it will be the customer interaction id. 'Cause we want to basically group the customer's interactions together. So let's create this table and we'll close up that and let's refresh our table list and see if we have customer interactions.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=92)** There we go. We have customer interactions with the columns we would expect. So now the next step is to create the partitions. And for that of course we use the create table statement and then we give it a name for the partition. So for example, we could have customer interactions one and that is a partition of customer interaction. And for values, and in this case we use with statements. So for values with, and now we specify our modulus. So let's use modulus five, with a remainder of zero.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=148)** And this will allow us to create five different partitions. So let's just make sure I've got this correct. Create table customer interactions one. And let's just run this to make sure that looks correct. That looks right and we'll refresh just to verify. Yep, okay, so our customer interactions one is correct. So now what I'm going to do is actually, I'm just going to modify this. I'm going to copy this and then just start modifying it. I'm going to create four others. So we'll have customer two, and this will be for a modulus of five with a remainder of one. And this will be our third partition remainder of two and three. And our final partition will be partition five. And we do a modulus with a remainder of four there. So if we run this, that executed all those commands and if we do a refresh, we will see now that we have our five customer interaction partitions. And again, as with other partition tables these partitions or the child tables, if we want to think of it as terms of a parent-child relationship they have the same column structure as the parent table. So with partitioning
>
> **[4:03](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/partition-by-hash-example?u=76281980&t=243)** we have the option of using range partitioning list partitioning or hash partitioning. And each is really useful for a particular use case. So in this case hash partitions are really useful when we have say high cardinality values like a customer identifier that we want to work with. Lists is useful when we have very low cardinality sort of values that we want to use. And range partitioning is really useful when we have date time attributes that we want to partition on.

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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-partitioning-a-table?u=76281980&t=0)** - [Instructor] Let's consider partitioning a table by a time range. Let's imagine we create a table called sensor metrics, which has several attributes including a sensor ID, a measurement date, temperature, humidity, and pressure. Also, we want to partition the by range using measure date. Here are some definitions of partitions. Now, as you look at these, I want you to consider what might be a problem with the definitions that we have here.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Partitioning a table](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-partitioning-a-table?u=76281980&t=0)** - [Instructor] The problem with the definitions that we had for partitions is that there are gaps in the dates. The maximum date and the time range is not inclusive, so we need to have essentially some overlap between our partition definitions. In this case, the data for 24-1-8 and 24-1-16 are not assigned to our partition.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Materialized Views

[↑ Back to Table of Contents](#table-of-contents)

#### [Materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=0)** - [Instructor] Materialized views combine some of the features of tables and views. Materialized views are used to store the results of pre-computed queries. For example, we may have to perform expensive joins and we want to minimize the number of times we need to run that query. By materializing or storing the results of a query, the query results can be used for other operations without performing an expensive query operation again. While materialized views can save time, they will also take up space. Materialized views duplicate data that is already stored in tables. Data in materialized views can change state, so we'll have to update or refresh materialized views to capture changes to the sources of those materialized views. This means there is a potential for inconsistencies between source tables and materialized views. If you can tolerate these potential problems, the materialized views can help reduce the time required to execute queries. Now, here's an example of a materialized view. Notice that it's very similar to a Create View command, but this statement includes the term materialized. Materialized views are good options when saving time on query response is more important than minimizing the amount of storage used. You should only use materialized views if you can tolerate some potential inconsistencies,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/materialized-views?u=76281980&t=95)** or you can ensure that the materialized views are refreshed after each update to the source.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Creating materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=0)** - [Instructor] Let's see how easily we can create a materialized view. We're going to start with the statement create materialized view. Now specify the name of this view. Now we're going to build a view over the staff table and company regions. So I'm just going to call this MV staff. So the prefix MV is just short for materialized view. And we're going to say that this view is defined by this select statement. And we are going to select a few items from the staff table which I will alias as S. From the staff table we're going to get last name and department and job title. And then from the company regions table let's get company regions. And this will be from the staff table, of course which is alias to S. And we're going to interjoin the staff table to the company regions table, which we're going to alias CR. And we're going to specify the columns we're going to join on which in this case is going to be the region ID and the staff table. And that's going to be join to using the equality operator join to, the company regions table and the region ID there. So let's just double check.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/creating-materialized-views?u=76281980&t=93)** So let looks good join on thing. Looks good. We'll run this. And if we look at materialized views we see we have something called MV staff. So that's basically all that's required to create a materialized view it's very similar to creating a traditional view or simply adding the term materialized to the create statement.

> [!info]- Semantic Content
>
> **CLI Commands:** mv (3)
> **Definitions:** short for (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Refreshing materialized views](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=0)** - [Instructor] It's important to remember that materialized views save data from the source tables into a new data structure. The data that was in the source tables at the time the materialized view are created. That's what's there in the materialized view even if the underlying table is updated. So let's take a look at the data in the MV staff materialized for you. Select star from MV staff. And we'll run this and we'll see. We have the four columns we would expect. Last name, department, job title, and company region. So the values that we see here are the values that were in the tables, in the staff table and in the company region table at the time the materialized view was created. Now let's assume the staff table has been updated. Those update operations or those changes are not necessarily reflected in the materialized view until we actually force those updates to be included in the materialized view. And to do that we use a command called refresh materialized view. So for example we could say refresh materialized, view MV staff.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/refreshing-materialized-views?u=76281980&t=81)** And if we run this what will happen is that is basically the command that will cause any changes that have been made to the company regions table or the staff table to be reflected into the corresponding data structure in the materialized view. So you should run the refresh command as frequently as needed to meet your requirements for consistency between the source table and the materialized view. If you need the materialized view updated any time the source table is updated, you can consider using triggers on the source table to update the materialized view.

> [!info]- Semantic Content
>
> **CLI Commands:** mv (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Creating a materialized view](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-creating-a-materialized-view?u=76281980&t=0)** - [Instructor] In this challenge, we're going to create a materialized view. Let's imagine that we are working with a table called sensor_metrics, which has a sensor_id, a measure_date, temperature, humidity, and pressure. We want to create a materialized view on the sensor_metric table. Now, the materialized view should contain only rows where the sensor ID is greater than 90000. And the name of the materialized view should be mv_sensor_metric. What statement would you use to create that materialized view?

> [!info]- Semantic Content
>
> **Code Identifiers:** sensor_metrics (1), sensor_id (1), measure_date (1), sensor_metric (1), mv_sensor_metric (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating a materialized view](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-creating-a-materialized-view?u=76281980&t=0)** - [Instructor] The solution is to use the data definition statement, create materialized views. Then we'll specify the name we want to use in this case, mv_sensor_metric. And then we'll specify a select statement that specifies the attributes or the columns that we want to include from the sensor_metric table. And then we also have a where clause where we'll specify the sensor_id as greater than 90,000.

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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=0)** - [Instructor] Schemas hold the [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) we commonly think of when we think of [Databases](../../Skills/Software%20Development/Databases.md), and these are things like tables, indexes, constraints, views and materialized views, but they also include [Statistics](../../Skills/Data%20Science/Statistics.md) about the data in those tables. For example, we need statistics on the number of rows in a table and how much storage is used. We also need to know the frequency of values and the cardinality of columns. It's also important to understand the distribution of data or how is that data kind of spread out. Under a normal distribution, data values tend toward the middle or the mean of the range and fall equally off in both directions. But sometimes values can tend toward one end of the distribution more than the other. So here, for example, we have a distribution where there are more instances toward the larger values. We call this a negative skew, and here we have values tending toward the lower end of the range. Now, this is called a positive skew. It's important to know about a skew in your data so you don't make incorrect assumptions about your data. For example, we wouldn't want to assume that the data is equally divided with half the values less than the mean and half greater than the mean when, in fact, your data is skewed. Histograms count the number of values in a range and give us a good way
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=93)** of representing the distribution of data. So how do we get these statistics? One way is to run the ANALYZE command, which collects statistics on tables and data. Now, I will say the results of the ANALYZE command are not all that human friendly. They're not really readable or all that useful to us directly, but we can collect this data automatically, which is used by [Postgres](../../Skills/Software%20Development/PostgreSQL.md) and we can do that by running the AUTOVACUUM daemon or running the VACUUM command manually. The VACUUM command reclaims space of updated data. If you use just the VACUUM command, you'll reclaim some space and mark it so that it's available for reuse by the table. Now, by running the VACUUM full on a particular table, that will lock the table and it can reclaim even more space. This method does require more disk space than the non-full vacuums because actually what it does is it writes a new copy of the table and it doesn't release the old copy of the table until the operation's finished. VACUUM FULL is recommended only when a significant amount of space needs to be reclaimed from within the table. If you want to collect statistics while reclaiming data in a table, you can do that by running the VACUUM FULL, ANALYZE command on a particular table. Another kind of housekeeping you may need to do is rebuilding corrupted indexes. Now, you shouldn't need to rebuild indexes but if there are bugs in the system, you may come across corrupted indexes.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/collect-statistics-about-data-in-tables?u=76281980&t=187)** Re-indexing collects unused pages in B-tree indexes, and you can re-index on a single index or on a table or an entire schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (5), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Env Vars:** vacuum (6), analyze (3), full (2), autovacuum (1)
> **Analogies:** for example (3)
> **Definitions:** we call this (1), is called (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing execution statistics with pg_stat_statements](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=0)** - [Instructor] [Postgres](../../Skills/Software%20Development/PostgreSQL.md) has a feature known as pg_stat_statements, and it's a feature for tracking, planning, and execution [Statistics](../../Skills/Data%20Science/Statistics.md) of all the [SQL](../../Skills/Data%20Science/SQL.md) statements that a server executes. Now, pg_stat_statements, basically, it needs to be turned on. It does take some overhead, so it's off by default, but we can actually turn it on by adding a pg_stat_statements to the shared_preload_libraries section in the Postgres configuration file. Now, this is something that requires a database administrator. It's not something that an average user should do, which is understandable. This is something that affects the entire server, so this may be something you need to work with your DBA on, and not something you could necessarily do yourself unless you do have [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) privileges. Now, pg_stat_statements, the view includes a variety of information. It includes information on, like, the user, the database, and the query ID, as well as the query text, so you actually get to see what the text of the query was. Then, there's also the plan statistics that are provided inside pg_stat_statements, and these include things like the number of times the query was planned and the total time that was spent on those planning operations. There's also statistics on the distribution of the time spent planning, including the min, the max, and the standard deviation of the time spent planning, and we also get some kind of distribution data with regards to min, max, and standard deviation of the time spent executing the statement,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/analyzing-execution-statistics-with-pg-stat-statements?u=76281980&t=95)** so we can see the range of values for things like how much time spent creating the plan for a statement and how much time actually executing, and oftentimes, it's the execution that we're most interested in, so it can be really helpful to see the full range of execution times as well as get a sense of what the distribution is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) (1)
> **Code Identifiers:** pg_stat_statements (5), shared_preload_libraries (1)
> **Env Vars:** sql (1), dba (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing execution plans with the auto_explain module](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=0)** - [Instructor] Now explaining is really useful especially when we're developing queries and we want to understand what the characteristics of the execution plan are. But sometimes it's really helpful, especially in production environments, to be able to understand the query plans that are being executed in production and especially for slow running queries. So for example, oftentimes in production environments, one of the things we monitor are the top 10 slowest queries. Well, there's a module called Auto Explain within [Postgres](../../Skills/Software%20Development/PostgreSQL.md) that logs the execution plans of slow statements automatically without having us have to manually run the explain command. Now, to enable this, we need to load the auto explain module. We can either do that at the session level if we're a super user or we can load it into the Postgres configuration file if we're the database administrator. And when we load the module, we can specify different parameters that will determine what content is collected for us. So for example, we could set the log minimum duration or the log mid duration which is the minimum execution time in milliseconds that will cause the statements plan to be logged. So we may, depending on what kind of database we're working with, if it's a transaction processing system. We may want really low latency query response time so we might set our minimum duration fairly low. If we're working in more of an analytical database like in a data warehouse where we have very large queries we would probably tend to make our min log duration higher than that.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/reviewing-execution-plans-with-the-auto-explain-module?u=76281980&t=93)** Now we can also set a parameter called log nested statements, and depending on that setting, we will get information about functions or nested statements included with the logging. So if we're interested in just, say the [SQL](../../Skills/Data%20Science/SQL.md) that we're writing and we're not interested in tracking, say a user defined function that we're pretty sure is pretty well optimized, then we don't need to use log nested statements. But if this is almost kind of like tracing where you want to see as much information as possible, then log nested statement is a good one to enable. Now like in say a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) environment or a different programming level languages where you can set different log levels, we can do that with auto explain. So it uses some of the standard conventions for log levels, like info warning, error, debug. Actually it has five different debug settings. So you can get really detailed information with auto explain, depending on how you set the log level parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Analogies:** for example (2), kind of like (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Additional analysis with other pg_stats data](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/additional-analysis-with-other-pg-stats-data?u=76281980&t=0)** - [Instructor] Now PG_Stats is a module and a set of views that provide access to information that's stored in the PG_STATISTICS catalog. And these [Statistics](../../Skills/Data%20Science/Statistics.md) describe the distribution of data in a table. Now, one thing to be aware of is that PG_Stats constrains what we can view so that we can only have access to the data that I have permission or that we as users have permission to read. So, for example, we can't use PG_Stats as sort of a workaround to kind of get information that we might otherwise not be able to get. For example, if there is a salary column, you can't go in and look at the max salary and the min salary in PG_Stats unless you're able to actually see it in the base table itself. Now, PG_Stats has different types of columns or collections of columns. Some include information about the schema, the table, and the column name, of course. There are statistics on their frequency of NULLs and the fraction of NULLs, the number of distinct values, and most common values, and their frequencies associated with a column. And then also there's a histogram of counts of distinct non-null elements with the different values of the column. So this is the kind of detail that's often very useful, especially if you're doing either, like a [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) assessment, or you're trying to understand the distribution of data in a table or in specific columns within a table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Env Vars:** pg_statistics (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Analyze schema statistics](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-analyze-schema-statistics?u=76281980&t=0)** - [Narrator] In this challenge, we're considering a scenario where we've created a table called sensor_metrics and we've inserted a large number of rows. Now, we want to make sure our table [Statistics](../../Skills/Data%20Science/Statistics.md) are up to date. So what command would you run to update statistics on the sensor_metrics table?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Code Identifiers:** sensor_metrics (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Analyze schema statistics](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-analyze-schema-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-analyze-schema-statistics?u=76281980&t=0)** - [Narrator] We would use the ANALYZE command and specify the name of the table that we want to analyze and update the [Statistics](../../Skills/Data%20Science/Statistics.md) on. In this case, it would be ANALYZE sensor_metrics;.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** analyze (2)
> **Code Identifiers:** sensor_metrics (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Other Optimization Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Using common table expressions to avoid repetitive computation](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=0)** - [Instructor] Common table expressions are often used as an alternative to subqueries 'cause many of us find them often more readable and more easy to reuse than using subqueries. So common table expressions can be computed once, which is really optimal if you have say, a long-running calculation or a long-running query that will generate a single list in that same list of values or a result set is used across all of the correlated queries that that is going to work with. Now, common table expressions can also be computed multiple times or each time or in line with the primary query. Now, that's optimal when each invocation of the query can use information from the parent query to make whatever that subquery or that [common table expression](../../Glossary/Concept/CTE.md), make that query more efficient. So if the values that you're looking up in the correlated query change over the course of the dataset that's calculated for the parent query, then you probably want to use inline versus having the results materialized. Well, so materialized [CTEs](../../Glossary/Concept/CTE.md) are when we compute the value once and save the data. So for example, when we say with some common table expression, a name AS and then some statement, and then our SELECT statement, that common table expression will be executed each time or it will be executed in line with each time the SELECT statement has a row that needs to be processed. However, if we want to execute it once and reuse the results,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/using-common-table-expressions-to-avoid-repetitive-computation?u=76281980&t=95)** then we can use the AS MATERIALIZED clause. So you would say something like WITH, name of a common table expression, AS MATERIALIZED, and then give the expression and the SELECT statement. Now, in [Postgres](../../Skills/Software%20Development/PostgreSQL.md), non-materialized or inline is the default in Postgres or at least it has been since Postgres 12. So if you want to materialize the results of a common table expression and basically only have to do the the query work once for the common table expression, you want to make sure you include the clause AS MATERIALIZED in your common table expression definition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Common table expression](../../Glossary/Concept/CTE.md) (7), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (3), [Ctes](../../Glossary/Concept/CTE.md) (1)
> **Env Vars:** select (3), materialized (3)
> **CLI Commands:** make (3), find (1)
> **SQL:** select (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Hints to the Query Optimizer](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=0)** - [Instructor] Hints are suggestions to a query plan builder. Some [Databases](../../Skills/Software%20Development/Databases.md) allow you to specify hints in line with the [SQL](../../Skills/Data%20Science/SQL.md) code. Now, these inline suggestions are outside of normal SQL statements, they're are extra-SQL statements, and this practice really pushes the boundary between declarative and procedural code. Now, some data spaces support hints, like Oracle, [MySQL](../../Skills/Software%20Development/MySQL.md) and [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). However, [Postgres](../../Skills/Software%20Development/PostgreSQL.md) takes a different approach. Postgres uses commands to change the behavior of the query plan builder. For example, with the SET enable commands you can prevent the use of hash joins, or you can make sure that nested loops are enabled. All join options are available by default, so you don't need to do anything if you want to have all three enabled. Now, some caveats, you want to be careful anytime you're using hints in other databases or changing the configuration of the query plan builder. Oftentimes, it's better to update [Statistics](../../Skills/Data%20Science/Statistics.md) with ANALYZE and VACCUM before trying hints and try other optimization techniques like partitioning and materialized views before trying hints. Be sure a query plan is suboptimal before resorting to changing the query planner configuration. Also, if you do make changes, either if you're in another database and you're using hints, or you're altering the query plan behavior, be careful to watch for changes
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/hints-to-the-query-optimizer?u=76281980&t=93)** in the size and distribution of the data that can render your query planner configuration ineffective, or even worse, it could lead to degraded performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (4), set (1), analyze (1), vaccum (1)
> **CLI Commands:** make (2), mysql (1)
> **Warnings:** be careful (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parallel query execution](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=0)** - [Instructor] Another way to make queries execute faster is to execute steps in parallel. Sometimes the execution plan builder will find that it can run some steps in parallel. In that case, it will try to execute parts of the plan in parallel and then combine or gather the results. You can tell your execution plan is using parallel queries if there is a gather or gather, merge in the query plan. Steps below that are executed in parallel. How many parallel processes the execution plan will use is based on a couple of parameters; the max parallel workers and max worker process parameters. These are [Postgres](../../Skills/Software%20Development/PostgreSQL.md) specific parameters, but if your database supports parallel queries, it's likely they have similar parameters. Now, in order to execute some steps in parallel we need to have the max parallel workers per gatherer parameter set to a value greater than zero. The dynamic shared memory type parameter must not be set to none, and the database can't be running in single-user mode. Also, the query we're executing must not write data or lock rows. And the query must not be using a function that has been marked "parallel unsafe", which occurs with user defined functions. Now, some things to keep in mind; first, parallel queries may not be faster than sequential execution.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/parallel-query-execution?u=76281980&t=92)** Parallel plans must exceed parallel setup cost and parallel tuple cost parameters. Parallel index scans only work with B-tree indexes, so that's something to consider if you want to use hash or other specialized indexes. The inner side of nested loops and merged joins are executed sequentially. And then finally, hash joins can be executed in parallel, but each process will create a copy of the hash table. This may be a consideration if you are generating large hash tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Improving cache utilization](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=0)** - [Instructor] Now caching is really important in [Databases](../../Skills/Software%20Development/Databases.md). Caching is a process of storing results of a query so that we can reuse them without having to re-execute a query plan to go and actually get the data for the result sets. Now, the amount of data that we can store or cache is dependent on the size of a data structure called the shared buffers. And in [Postgres](../../Skills/Software%20Development/PostgreSQL.md), Postgres will fill up the shared buffers as much as it can and then it will start to evict data or start deleting data from the cache that it feels is no longer needed. So for example, if it hasn't been used in quite a while if it's the longest of all the query results the one with the longest time since this would last used as a good candidate for evicting or for deleting from the cache. Now, one of the key pieces of information that we can get from our explain plan is the number of hits or the number of times a hit refers to a time where we're able to get some data from the cache, versus the number of reads or the times we had to read from the disks. So if we're showing a very low hit rate and quite a high read rate with repeated queries then we might want to consider increasing the size of our cache. And we do that by adjusting the shared buffers shared memory buffers defaults to 128 meg currently in Postgres. It's been like this since around Postgres 10 or 11 but we're currently at Postgres 15, 16's in beta and there's still 128. So I wouldn't be surprised if
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/improving-cache-utilization?u=76281980&t=92)** in the near future that goes up to a higher number. But in any case whatever the shared buffer value default is it is often the case that we need larger values to improve performance. Now, one rule of thumb is that we should dedicate 25% of our available memory in your server to shared buffers. So if you have a 16 gig machine then you'd want to use four gig of RAM for the shared buffers. And now one thing to keep in mind is this parameter can only be set when the server is starting. So this is not a dynamic configuration parameter. So you want to think about shared buffers and adjust those during your maintenance period or whatever down period you may have because you will have to restart the server if you do want to change that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** ram (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Miscellaneous tips](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=0)** - [Instructor] Let's wrap up this section with some miscellaneous tips. Now with regards to indexing, you want to create indexes on any columns that you're going to be using in join clauses or if those columns are used in a WHERE clause. Also, if you can create covering indexes, that is indexes that will hold all of the columns that are required to respond to a query, then that can save you time because you can get all of the data you need from the index without also having to reference data blocks associated with the table. If you're checking for null values, you want to use the IS NULL statement rather than using equality with null. And if you use a function in a WHERE clause, like you apply some function to a value in a column, if you do that, try to create a functional index for that column. Otherwise, the index won't be used. Now, if you're working with index range scans, try to keep the ranges as small as possible and use equality conditions. Remember, if you're doing string pattern matching, if you use something like a LIKE, and then a string with a wild card like percent, then that can use an index because the wild card comes at the end of the pattern you're looking for. If you put a wild card at the beginning, for example using LIKE, quote, %ABC, then you're not going to be able to use an index. Now, if you do a lot of full text searching, then consider using GIN indexes. And also remember, if we have indexes, then we may be able to avoid sort operations when we use an ORDER BY. So if you need to order certain query result sets
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/miscellaneous-tips?u=76281980&t=97)** and there are large queries or there's a lot of data that you are expecting, then you might want to consider using indexes to avoid having to do a sort operation and instead we can use the index to order our results. When it comes to filtering, some things you want to keep in mind about data types. When you're filtering on a range condition, especially dates and times, use continuous conditions such as trunking a sysdate, and say, going from sysdate to sysdate+1, use the trunk on sysdate. You don't want to separate time and data into separate columns. Use a date time data type instead. Also, don't store numeric data as characters, varchars, or text. Make sure you use an appropriate numeric data type for that.

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
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/challenge-design-a-common-table-expression?u=76281980&t=0)** - [Instructor] In this challenge, we're going to consider common table expressions. Let's imagine you have a [common table expression](../../Glossary/Concept/CTE.md) that takes a long time to evaluate and you want to evaluate the common table expression only once when you're executing the associated parent query. How would you define the common table expression?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Common table expression](../../Glossary/Concept/CTE.md) (3)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design a common table expression](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-design-a-common-table-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/solution-design-a-common-table-expression?u=76281980&t=0)** - [Instructor] We would define the [common table expression](../../Glossary/Concept/CTE.md) using the AS MATERIALIZED clause, and that will allow the query plan builder to execute the query once, cache the results, and then reuse those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Common table expression](../../Glossary/Concept/CTE.md) (1)
> **Env Vars:** materialized (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-query-tuning-and-performance-optimization-22894038/next-steps?u=76281980&t=0)** - [Dan] This concludes our review of [SQL](../../Skills/Data%20Science/SQL.md) query tuning. Now, we've covered a lot of different aspects of query tuning, but there's still more we can learn. There are some additional courses in the library that you may find helpful. If you're focused on analytics, the course [Advanced SQL for Data Scientists](Advanced%20SQL%20for%20Data%20Scientists.md) may be of interest to you. We also have a course on Advanced SQL for Time Series Data, which focuses on really the specifics of how we can optimize our work and really build performant queries around time series data. Then there's also [Advanced SQL for Application Development](Advanced%20SQL%20for%20Application%20Development.md), where we turn our attention to optimizing SQL for transaction processing systems, and then the course on Designing Highly Available and Highly Scalable SQL [Databases](../../Skills/Software%20Development/Databases.md) gets more into [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) with a focus on high availability and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Then finally, I would just recommend, review the specific database documentation for the database that you work with. There's really no better source for information about how to go about building and tuning SQL applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Data Architecture](../../Skills/Software%20Development/Data%20Architecture.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** sql (7)
> **CLI Commands:** find (1)
> **Speakers:** - [dan] (1)


## Instructor

- [Dan Sullivan](../../Instructors/Data%20Science/Dan%20Sullivan.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-sql-query-tuning-performance-optimization-4413111/codespaces)

## Skills Covered

- SQL

## Path Context

### In [Master SQL Development](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20Development.md)
← [Advanced SQL – Window Functions](Advanced%20SQL%20%E2%80%93%20Window%20Functions.md) | **5 of 8** | [Advanced SQL for Application Development](Advanced%20SQL%20for%20Application%20Development.md) →

### In [Master SQL for Data Science](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20for%20Data%20Science.md)
← [Advanced SQL for Data Scientists](Advanced%20SQL%20for%20Data%20Scientists.md) | **5 of 6** | [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) →

### In [Advance Your Database Administration Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Database%20Administration%20Skills.md)
← [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) | **8 of 11** | [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) →

## Appears In

- [Master SQL Development](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20Development.md)
- [Master SQL for Data Science](../../Paths/Data%20Science/Learning%20Paths/Master%20SQL%20for%20Data%20Science.md)
- [Advance Your Database Administration Skills](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Database%20Administration%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)