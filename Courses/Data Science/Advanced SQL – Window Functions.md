---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-window-functions
url: "https://www.linkedin.com/learning/advanced-sql-window-functions"
duration_minutes: 126
duration: 2h 6m
level: Advanced
updated: 9/17/2024
learners: 70428
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFmu57eVx6ZjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1590514876110?e=2147483647&amp;v=beta&amp;t=11fO-8Z6oGt2D_NpzeQYE_s-2GFh3vgdpDnJg3ursU4"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 2]]'
next_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
path_nav: '[{"path":"Master SQL Development","position":4,"total":8,"prev":"Advanced SQL- Logical Query Processing, Part 2","next":"Advanced SQL for Query Tuning and Performance Optimization"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20%E2%80%93%20Window%20Functions.md)

![Advanced  SQL – Window Functions](https://media.licdn.com/dms/image/v2/C4E0DAQFmu57eVx6ZjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1590514876110?e=2147483647&amp;v=beta&amp;t=11fO-8Z6oGt2D_NpzeQYE_s-2GFh3vgdpDnJg3ursU4)

# Advanced  SQL – Window Functions

> Window functions are one of the most radical, fundamental enhancements to modern SQL. They allow access to neighboring rows without using subqueries, thus enabling amazing opportunities for concise, elegant, high-performing solutions.This course teaches the foundations and intricacies of window function processing and how to use it to implement practical solutions to everyday challenges. You can l

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-window-functions) | 2h 6m | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Course introduction](#course-introduction)
  - [Course agenda](#course-agenda)
- [**1. Tools, Files, and Query Processing Review**](#1-tools-files-and-query-processing-review) (3 videos)
  - [Tools and demo database](#tools-and-demo-database)
  - [Using the demo and exercise files](#using-the-demo-and-exercise-files)
  - [Logical query processing review](#logical-query-processing-review)
- [**2. Window Functions and the OVER Clause**](#2-window-functions-and-the-over-clause) (3 videos)
  - [How window functions fit in query processing](#how-window-functions-fit-in-query-processing)
  - [Overview and filter clause](#overview-and-filter-clause)
  - [PARTITION BY and ORDER BY](#partition-by-and-order-by)
- [**3. Framing, Exclusions, and Shortcuts**](#3-framing-exclusions-and-shortcuts) (3 videos)
  - [Framing rows and ranges](#framing-rows-and-ranges)
  - [Practical framing examples](#practical-framing-examples)
  - [Defaults, shortcuts, exclusions, and null handling](#defaults-shortcuts-exclusions-and-null-handling)
- [**4. Aggregate Window Functions**](#4-aggregate-window-functions) (5 videos)
  - [Aggregate grouped functions](#aggregate-grouped-functions)
  - [Aggregate window functions](#aggregate-window-functions)
  - [Combining grouped and window aggregate functions](#combining-grouped-and-window-aggregate-functions)
  - [Challenge: Aggregate window functions](#challenge-aggregate-window-functions)
  - [Solution: Aggregate window functions](#solution-aggregate-window-functions)
- [**5. Rank and Distribution Window Functions**](#5-rank-and-distribution-window-functions) (6 videos)
  - [The concept of rank](#the-concept-of-rank)
  - [ROW_NUMBER and NTILE](#row_number-and-ntile)
  - [RANK and DENSE_RANK](#rank-and-dense_rank)
  - [Distribution window functions](#distribution-window-functions)
  - [Challenge: Rank window functions](#challenge-rank-window-functions)
  - [Solution: Rank window functions](#solution-rank-window-functions)
- [**6. Offset Window Functions**](#6-offset-window-functions) (5 videos)
  - [Offset window functions](#offset-window-functions)
  - [Row offset window functions](#row-offset-window-functions)
  - [Frame offset window functions](#frame-offset-window-functions)
  - [Challenge: Offset window functions](#challenge-offset-window-functions)
  - [Solution: Offset window functions](#solution-offset-window-functions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Review, conclusion, and next steps](#review-conclusion-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=0)** (bright music)
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=9)** - [Ami] You're an experienced [[SQL]] developer. You manage to get stuff done in time. Your manager and colleagues are generally happy. For the most part, you're happy with your SQL skills too. And yet, you frequently encounter a SQL challenge that frustrates you to no end. And eventually, you do come up with a solution. You just know there must be a better way. All these subqueries and complex logic just don't seem right. Figuring out your own code, the one you wrote only one hour ago, seems like a futile exercise in a foreign language. And you already know that when it gets to QA, they will scream to high Heaven because of the query's horrendous performance. Window functions literally open new [[Windows]] of processing logic and solution opportunities that once seen can't be unseen. This course will save you hours of hair pulling, allow you to write queries that are clear, elegant and efficient. Your QA team is going to send you flowers. Like any fundamentally different feature, it may seem hard at first. But don't worry. We will tackle window functions from the ground up. Layer by layer, you will realize just how powerful of a tool they are. We will start with a quick review of query processing order and how window functions fit in the grand scheme of it. You will learn all about the OVER clause, partitioning, ordering, filtering, framing, all using common-use cases for the various types of window functions.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-window-functions/course-introduction?u=76281980&t=106)** This course is not about the syntax. Yeah, sure, we will cover the syntax. But our focus will be on the foundational understanding of how window functions are processed, how to use them effectively and how to avoid the most common pitfalls. For this course, you will need a minimum of one year of SQL experience. But more importantly, an analytical, inquisitive mindset. It's not going to be an easy ride. I do promise that it's going to be fun-packed, challenging and extremely rewarding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Windows]] (1)
> **Env Vars:** sql (4)
> **Speakers:** - [ami] (1)
> **Non-Speech:** (bright music) (1)

#### [Course agenda](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=1)** - [Instructor] We'll begin with a brief introduction of the tools I'm going to use an the demo database that I designed specifically for this series. We will see the course materials, how they're organized and where to find them. I recommend that you watch my Query Processing course before this one. If not, don't worry. I'll spend a few minutes reviewing query processing so that the context of window functions is clear. Next, we will realize how window functions fit in this grand scheme of query processing. We will cover the general syntax of the OVER clause and how partitioning works. After establishing this baseline, we'll be ready to dive into the actual construct of window functions. We'll see how to use the various types of frames. We'll cover some convenient shortcuts, and I'm going to warn you of some of the riskier ones. Then, you'll be ready to meet window functions in person. We'll start with aggregates. These are the most familiar and intuitive, as they are frequently used as group aggregates. But this apparent familiarity is often a cause of confusion. So I'll try to clarify the distinctions. Rank and distribution functions are next. These may become your favorite type, especially, the data analyst among you. Lastly, we will learn about offset window functions. These are going to become a vital tool in your arsenal no matter what you do with [[SQL]].
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/course-agenda?u=76281980&t=97)** To wrap things up, I'll spend a few minutes reviewing what we've learned, provide some advice on where to go next, solicit your feedback, give you some homework, and say proper goodbye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 1. Tools, Files, and Query Processing Review

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools and demo database](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=1)** - [Instructor] I'll be using the [[PostgreSQL]] relational [[Database Management]] system for all demos and challenges. To save my throat and your time, I'm going to use the term database instead of relational database management system, and [[PostgreSQL|Postgres]] instead of PostgreSQL. Postgres offers one of the richest window function support among all mainstream [[Databases]]. And I reserve the right to mention other databases whose implementation differences may be a value or just to publicly shame them. I'll be using [[Microsoft Azure]] data studio integrated development environment with a Postgres extension. If you don't have access to an instance of Postgres, you can still use an online query service. These services requires zero installation, they're 100% a web based, and even the server is hosted by the service providers. You might be familiar with some of these like [[SQL]] Fiddle, DB Fiddle and Rextester to name a few. My favorite one, however, is DB Fiddle UK. DB Fiddle UK has proven to be highly reliable and free of commercial interests, qualities that some of the other services have. How shall I put it nicely? Not always excelled at. I consider using one of the existing sample databases that are out there. And while it was very tempting to use an off-the-shelf database, I chose to create a new one specifically for this series.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=97)** I used this opportunity to demonstrate some of my design choices using a topic that is near and dear to my heart, helping animals in need. So, I hereby proudly introduce the animal shelter demo database. At first glance, you might find it somewhat odd. First, I chose to use natural and intelligent keys for all tables. This means you will find no magical IDs, identities, auto increment, sequences, or any type of surrogate key. For example, the animal's table uses a composite key that consists of species and names. This is what the shelter staff use to uniquely identify each animal. This means we can have two animals of different species with the same name. This also means that all other tables reference animals using their natural identifier thus saving numerous joints and simplifying queries. Natural versus surrogate keys is a controversial topic with near religious opinions. I find the abuse of surrogate keys for every table in every database to be one of the most destructive habits ever to plague relational database world. I realized that surrogate keys have their place and can be useful, but they should never be used as a default, one size fits all solution for every single table.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=194)** Worse, is that this notion got so deeply rooted that I see most database designers these days don't even consider the business keys. They just immediately opt for whatever, table name, underscore ID and there you go. There's your primary key. This has devastating results for data consistency, query convolution, workload performance, modularity, [[Scalability]], concurrency and I can go on and on. I would love to release a course dedicated to this topic. So please let me know in the Q&A section if you find this topic interesting and would like to see a course about it. For now, all that I ask is that you take it for what it is. Just see for yourself how simple, elegant and efficient SQL becomes when you work against tables that use natural keys. To fit this database in DB Fiddle, I use the subset of the tables from the full project with only a few hundred rows of data. If you visit the [[GitHub]] project page, you'll see that I've included many more reference data tables. These are a must have for any external authority data. States, cities, zip codes, calendar holidays, species, breeds, and even color names, they're all standardized datasets that must be enforced through out your data model. For this course, I've included
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-window-functions/tools-and-demo-database?u=76281980&t=287)** only the colors and species tables. And if you look closely, you'll see that they both consist of just a single column, that is, their primary key. To some of you, it may seem redundant, but it's anything but. Having a standardized reference set of external authority data that all our entities can reference, guarantees that we will never have misspells, nonstandard or non-existing attributes, values. We're going to cover the individual tables as we go along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (4), [[Databases]] (3), [[PostgreSQL]] (2), [[Database Management]] (2), [[SQL]] (2)
> **CLI Commands:** find (4)
> **Env Vars:** sql (2)
> **Tools:** notion (1), github (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using the demo and exercise files](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/using-the-demo-and-exercise-files?u=76281980&t=1)** - [Instructor] Throughout the course, I will reinforce discussion topics with code demos. You're welcome to just watch them. It will be even better if you follow along, and much better if you pause the video occasionally and experiment by modifying these queries and coming up with your own examples. I'm also going to include several mini challenges, where I'm going to ask you to pause the video for a minute and answer a question. Chapters four, five, and six include challenge videos. My detailed suggested solution walkthroughs will follow. All code files can be downloaded from the course's page. I'm going to host them on [[GitHub]] as well, and you'll find the links in the code files. I invite you to provide feedback, either on GitHub or in the course's Q&A section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Logical query processing review](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=1)** - [Instructor] For those of you who haven't yet watched my query processing course, this video is going to be a speed-of-light review of some of the main concepts. Every query begins with the FROM clause, where the data set for the query is constructed. The data sources may be anything from a single table and up to joins of 50 shades of various different sources. All data sources, join qualifications, and reservations are evaluated and placed into a single data set that is then passed to the WHERE clause. WHERE evaluates each row using logical predicates. Rows for which the predicate evaluates to true will live to see another clause. All others are discarded, never to be seen again by the query. Then, this filtered set is passed to the GROUP BY clause. GROUP BY changes the fundamental structure of the set, from individual rows into row groups based on the grouping expressions. The group set is then shipped to the HAVING clause. HAVING uses logical predicates, as well, to evaluate entire row groups. Only groups for which these predicates evaluate to true, will get to see another clause. The row filtered grouped and grouped filtered set is then passed to the SELECT clause.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=95)** SELECT evaluate each expression for every row or row group. These are the expressions that will be returned to the client application. Next, the set is passed to the ORDER BY clause. ORDER BY sorts the data set and at this point, it ceases to be a set and becomes a [[Cursor]]. The cursor can be further processed by the query's final clause, the OFFSET [[Fetch]], also known as LIMIT OFFSET, where it is sliced into manageable bite-sized pages for user consumption. Let's review this process once again from a different angle. Instead of looking at the syntax, let's follow the data set. Here is the data set after the from clause has completed its work. This set finds its way to the WHERE clause, where each row is evaluated with the predicates. Rows for which the predicate does not evaluate to true are discarded. The filtered set now moves on to the GROUP BY. GROUP BY creates row groups based on the grouping expressions, x in this case. Now we're no longer dealing with five individual rows. Instead, we have three row groups. This grouped set moves on to the HAVING filter The HAVING evaluates each row group with predicates. The first row group
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-window-functions/logical-query-processing-review?u=76281980&t=187)** for which x is not larger than one is eliminated. And at this point the set has completed all its transformation and has taken its final form. All the following clauses, SELECT, ORDER BY, and OFFSET FETCH, will not modify it. The filtered and grouped set is passed to the SELECT. The SELECT evaluates each expression for each row group. The scope of each SELECT expression is limited to the same row or row group. And remember this fact. It's going to come in handy very soon. I'm not going to bother with sorting and paging for now. At this point, you might be wondering why you should even care about it, but oh, boy should you! Query processing order is one of the most fundamental aspects of [[SQL]] with far reaching implications, and window functions are no exception. So now that we have a general idea of how query processing works, let's see how window functions fit in this grand-scheme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[SQL]] (1)
> **Env Vars:** select (6), group (4), having (4), where (3), order (3)
> **SQL:** select (6), group by (4), having (4), where (3), order by (3)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Window Functions and the OVER Clause

[↑ Back to Table of Contents](#table-of-contents)

#### [How window functions fit in query processing](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=1)** - [Instructor] As we just saw, evaluation scope of standard expressions is limited to their own rows. We can create a new expression from existing ones but only from those that are on the same row. If we need to use a value from another row, we have no choice but to use a subquery. So to list the name of the second animal from the same species next to the current one, we must write this whole mess of a subquery. We must handle NOWs and probably need an aspirin afterwards. Well, had no choice is a more accurate term. Because this is exactly the limitation that window functions overcome. As their name suggests, window functions open a new window to other rows that can be accessed directly without a subquery. For every row we can use a window function to peek at values from other rows. But before we start coding window functions, we first need to understand their place. Window functions are limited to the select and order by clauses. Why, you ask. Very good question. Assume we have a hypothetical window function named previous that automagically retrieves the name of the animal with the closest previous admission date. Don't worry about the implementation, it's completely hypothetical. Our hypothetical function is used in the select list
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=95)** where it poses no logical challenges. The reason is that our data set has taken its final form so there is no ambiguity as to which animal is previous. But what if we try to use the function elsewhere in the query? Maybe in the WHERE clause? Let's see what happens. The WHERE evaluates each row using predicates and only rows that evaluate to true will make it to the next clause. In this trivial example, the logical issue may not be apparent. Theoretically, we can evaluate the function for each row and only Pumpkin evaluates to true. No problem, right? But, things get more interesting if we add additional predicates. For example, end species is different than cat. Pause the video for a minute, and see if you can guess the result. Now, the fun starts. If the predicate previous equals Abby is evaluated first, only Pumpkin evaluates to true like before. For the second predicate, Pumpkin evaluates to a false. The end logical operator causes Pumpkin to be eliminated from the result and no rows are returned. Let's roll it back and start over. This time, in a different order. If we evaluate the predicate species
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/how-window-functions-fit-in-query-processing?u=76281980&t=189)** different than cats first, Pumpkin evaluates to false and is eliminated. When we evaluate the second predicate, it is now Peanut that evaluates to true. So, as you can see, the order of predicate evaluation determined the result. [[SQL]] does not allow for such ambiguities. It doesn't make any sense, and in fact, there is no order to predicate evaluation no matter which one we spell first. All predicates are evaluated at once as if they occur at the exact same point in time. And that's the reason why window functions that rely on the dataset, the whole dataset, and nothing but the dataset are not allowed before it takes its final shape and form. And this is true only in the select clause and the order by that follows, but not before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** make (2), cat (1)
> **Env Vars:** where (2), sql (1)
> **SQL:** where (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Overview and filter clause](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=1)** - [Instructor] My favorite starting point is always right at the end. This is the basic syntax of a window function in all its fame and glory. Don't worry, we're not going to tackle it all at once. I just want you to keep it in the back of your mind as a roadmap. The function is, well, a function. We will cover all three function categories in due time. The function itself is less important for now, because we must first understand how it is processed. The OVER clause defines the window over the dataset, and most of these constructs are filters that limit the scope of the window that our function will see through. If we want the window to cover the whole set we can do without them by specifying a blank OVER clause. This looks less intimidating, right? Examples will follow shortly. FILTER is, well, a filter. Like the WHERE clause, FILTER limits the scope of the window with logical predicates. But unlike the WHERE that eliminated rows from the dataset and affected the [[Representational State Transfer (REST)|rest]] of the query, FILTER limits the viewing scope only for the function where it lives. It has no side effects whatsoever on any other aspect of the query. WHERE species is not equal dog will exclude dogs from the window. The dogs are still there, and will be seen by all other select expressions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=95)** Only the current window function ignores them. Let's see a practical example. Here are our animals as they made it to the select. Like any expression, aggregate window functions are evaluated per row. Let's use a MAX name function with an empty OVER clause. The empty OVER clause causes the window to span the entire set. MAX name looks for the name with the highest dictionary sort order and finds Winston. This empty OVER clause is independent of any row value or its position, therefore it evaluates the same way for all rows within the set. Here is a query that returns a few attributes for all animals sorted by admission date. We need to add another column to this query to show how many animals we have in total. Before window functions, the only way was to use a non-correlated subquery that performs a COUNT over a second instance of the table. The window function equivalent is a COUNT star and an empty OVER clause. So far, no big difference. If we need to discard animals that were admitted prior to 2017, we should add a predicate. When we have a subquery solution that references two instances of the table, we must be careful.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-window-functions/overview-and-filter-clause?u=76281980&t=188)** If only the subquery is filtered, it returns the 75 animals which were admitted in 2017 and later, but the parent isn't. It returns all 100 animals. And to eliminate these we must duplicate the predicate. With window functions we can add a FILTER clause, and like with the original subquery solution, the window function counts 75 animals, but the query itself returns all 100. Unlike the subquery, eliminating these does not require duplicate predicates. It's enough to filter in the WHERE clause and this data is all that the window function sees, so there's no more use for the filter. In terms of performance, window functions enable opportunities for the query optimizer by using a single instance of the table. Whether the query optimizer seizes these opportunities is a different question. On my PC, using [[PostgreSQL]] 12, the window function solution's total cost is around 6.5, versus nine for the subquery solution. It may sound like a lot, but these queries are so cheap that I doubt it will be even noticeable. Your mileage may vary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[PostgreSQL]] (1)
> **Env Vars:** filter (4), where (4), max (2), count (2)
> **SQL:** where (4)
> **Definitions:** is a  (3)
> **Versions:** 6.5 (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [PARTITION BY and ORDER BY](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=1)** - [Instructor] The second filter we can place in front of our window is the partition by clause. To partition something, means to divide it into parts and this is exactly what partition by does. The partitioning expressions limit the function's visible window only to rows that share the same values as the current row. Let's bring back the simplified animal set. Partition by species limits the function visibility to animals of the same species. For Buddy's row, the window is limited to his and Abby's. And the same is true for Abby. For Pumpkin, the window is limited to cats. Only herself in this case, and similarly for Peanut. Let's bring back the Max name function and add partition by species. For the first row, the function won't see the entire set. It will only see cats and Felix is the winner. The following row happens to be a cat too, so the function picks Felix once again. Next, is Prince. Prince is a dog, so the function no longer sees cats. It sees only dogs and this time Winston is the lucky winner. The same is true for all dogs that share a partition. Milly, our only rabbit's partition, consists of just her row, and the maximal name is the only name, our dear lonely Milly.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=98)** Here is the same animal's query that we used before. This time, instead of a grand total, we need to add a column that shows the total number of animals of the same species as the current row. Using a sub-query solution requires introducing a correlation between the parent query and the sub-query so that the count is limited only to animals of the same species. This requires unique aliases to distinguish between the two instances of the table, A1 and A2. When using table aliases, I highly recommend that you qualify all expressions to avoid confusion. To solve this with a window function, all we need to do is add a partition by clause to limit the count of the animals to the same species. It is equivalent to the correlation term we just used for the sub-query. However, it is significantly clearer. And performance-wise, the differences between these two queries is much more pronounced. The cost of the window function solution on my PC is around 11 versus 340 for the sub-query one. There is a more efficient solution that still uses a sub-query, one that doesn't require 100 aggregate iterations. Pause the video for a minute and see if you can find it. Query processing order to the rescue once again.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-window-functions/partition-by-and-order-by?u=76281980&t=197)** Pre-aggregating the animal species counts and joining it in the from clause avoids the need for the correlated sub-query to be executed 100 times, once per row. This sub-query is non-correlated and will be executed only once. This solution's cost is about the same as the one of the window function, but of course, your mileage may vary. The order by clause is the most confusing part of the over clause. It serves completely different purposes using the same syntax which is never a good idea. I wish the ASCII [[SQL]] committee would've come up with a better syntax choice. But unfortunately, that's water under the bridge. Aggregate and frame offset window functions are inherently order agnostic. For these, order by is used for defining frames that further limit the rows visible to the function. For rank, row offset, and distribution window functions, order by defines how the function is evaluated. Now I know, these terms probably don't make much sense yet, but don't worry, we're going to cover all of them in the following chapters. I just wanted to include it here with the syntax overview. And now, onto framing, exclusions, and shortcuts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** cat (1), find (1), make (1)
> **Env Vars:** ascii (1), sql (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 3. Framing, Exclusions, and Shortcuts

[↑ Back to Table of Contents](#table-of-contents)

#### [Framing rows and ranges](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=1)** - [Instructor] Here's a window over a dataset that consists of six rows with a pair of integer values in each, call them the green column and the brown column. First, let's partition our window by the brown column. Partition boundaries are fixed. This means that for each row within a partition, a window function will always see all partition rows. Sometimes we need to further limit the scope of a window within each partition so that not all rows use the same window, and this is what framing is all about. To define a frame, we must introduce an order so that the terms first, last, next and previous make sense. There is no such thing as first or next without an order. So let's order our rows in both partitions by the green column, in ascending order and define frame boundaries. For example, a frame that begins at the current row and ends at the following one. For the first row, this frame covers one and two, The highlighted area that you see is what the window function sees instead of the whole partition. For the second row, our frame covers two and four, for the third, four and seven, and for the last row the frame will shrink as there is no next row, and the process repeats for each partition.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=96)** Let's see the syntax and the options. First, we define our sorting in the ORDER BY clause. Let's use a set similar to the previous one and focus just on one partition. And we're evaluating the third row, the one with a green four. Next we specify one of three frame types, ROWS, RANGE or GROUPS. ROWS is probably the most intuitive type, so let's start with it. ROWS frame boundaries are specified using row position count. one row, 20 row, a million rows or all the rows that either precede or follow the current one. Row frames don't care what values are in these rows, they just count rows. Next we specify where the frame begins. UNBOUNDED PRECEDING points to the beginning of the partition. N PRECEDING and N FOLLOWING, point to any number of rows before or after the current one. N must be a none-null positive integer. One PRECEDING and one FOLLOWING, point to the next and previous immediate neighbor rows. CURRENT ROW, means, surprise, surprise, the current row, and I'm not joking when I say surprise, because as you'll soon see,
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=189)** CURRENT ROW, doesn't always mean what you think it means. The frame end is specified similarly. The difference is that UNBOUNDED PRECEDING is replaced with UNBOUNDED FOLLOWING. It doesn't make sense for a frame to start at the end of the partition nor to end at the beginning of it. Now, start and end are relative terms and depend on the sorting direction. So if we use descending order instead of ascending, the frame boundaries will be reversed. UNBOUNDED FOLLOWING and UNBOUNDED PRECEDING work the same way with all frame types, but that is not the case with N PRECEDING, N FOLLOWING and CURRENT ROW. RANGE frames are specified using value ranges that either precede or follow the current row regardless of how many rows they cover, and RANGE frames are data type dependent. So an integer range of 10 represents all rows that have a sorting value which is plus or minus 10 from the current rows value. Value not position. Unlike ROWS and GROUPS, that can use multiple sorting expressions, RANGE is limited to only one. Date and time ranges require an interval data type. For example, three seconds, 25 years or two months,
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=287)** five days and six milliseconds. For this set a RANGE frame of one PRECEDING and CURRENT ROW, evaluated for the highlighted row, covers only the current row, as the closest preceding neighbor is two integer values away. As long as our sorting expressions are unique within the partition, there is no confusion about what CURRENT ROW means because CURRENT ROW is also current value, but if the partition contains more than one row with the same sorting value, things get interesting. CURRENT ROW for RANGE frames doesn't refer to the current row's position like it did with the ROWS frame. For RANGE, it refers to the current row's value, and that includes all rows that share the same value. GROUPS frames are defined using the number of peer groups following or preceding the current row's group. A peer group is a set of rows that share the same sorting values. So when evaluated for the second row in this partition, a group frame that begins with one PRECEDING and ends with one FOLLOWING, will cover all partition rows. Sounds complex, right?
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=379)** Well, it is, but don't worry, it's going to make perfect sense as soon as we'll get some more practice. Let's do a practical example using our MAX name, but this time we'll add a frame. I sorted all rows in ascending name order within each species partition. This will make the visualization clearer, but remember that sets have no order. The partition is by species like before and the frame limits the function to see all rows that precede it, and up to the current row with name as our sorting expression. Let's start with Calvin. Calvin has the lowest sort order value name. His frame is limited to his own row and the function picks the only value that's available. For Felix, the frame extends to cover both him and Calvin. Felix has a higher sorting value than Calvin and so the function MAX picks him. Abby is next. Now, we switch to a new partition and the process repeats. The first frame covers one row, the second two and so on. If you look closely, you may spot something odd with these results. How come the results set exactly mirrors our source rows? Pause the video for a minute and see if you can figure it out.
>
> **[7:55](https://www.linkedin.com/learning/advanced-sql-window-functions/framing-rows-and-ranges?u=76281980&t=475)** The reason is that I chose to use a MAX name function, together with a frame that is sorted also by name in ascending order. Therefore, any new row which is extended into the frame is guaranteed to have a larger sorting value than the previous one and will be picked up by the MAX. Now, this is not a very useful frame except as a visual example. Typically, we sort by one expression and use the function over another. Let's see some actual query fun.

> [!info]- Semantic Content
>
> **Env Vars:** preceding (8), range (7), current (7), row (7), following (6)
> **CLI Commands:** make (4)
> **Definitions:** means that (1), refers to (1), is a  (1)
> **Analogies:** for example (2), similar to (1)
> **SQL:** order by (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Practical framing examples](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=0)** - [Instructor] Here are the two queries we used in the previous chapter to count the number of animals per species. We need to modify the number of species animals, so that instead of counting the total number of animals for each species, it will count only those that were admitted prior to it. This is the number of animals of the same species as we had in the shelter on the day before the current one. With the subquery solution, we can try adding a second correlation predicate so that the count will see rows that have a lower admission date than the current one. Using the Window function, let's attempt a frame sorted by admission date ascending with boundaries of unbounded preceding and current row. Let's execute and oops, something is off. Their results are different than those of the subquery solution. Stop the video for a minute and see if you can figure out the difference. The results are offset by one as the subquery solution does not include the current row's date due to the smaller than operator. The Window functions frame is defined up to the current row, and therefore does include the current day. For Tigger, the sub query returned a zero since no cats were admitted before it.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=94)** The Window functions current row frame does and returns a one. If we want to include the current day, we can change the smaller than operator to a smaller than or equal to, and execute. And now it seems to deliver the same results as the window function with a current row frame. However, that's not what we want it. Their requirement was, show the number of animals admitted prior to the current day. Let's fix the Window function solution by changing the frame end to one preceding instead of current row, and execute. Side note. Rows one preceding, doesn't necessarily reference the calendar day before the current one. Unfortunately, our shelter doesn't admit animals every day, and rows one preceding, will point to the previous admission. However, for this query, it is irrelevant as the number of animals on the previous day is the same number of animals as it was since the last admission. And now it seems more in line with the subquery solution and with a requirement. However, unfortunately, things are rarely as they seem, and there's a nasty logical bug hiding here. Can you see it? Pause the video for a minute, and see if you can spot the lurking bug. To see this issue,
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=189)** we need to look for a day where two animals of the same species were admitted. This is a simple group aggregate query with a having clause for the count. Indeed, we have two dogs that were admitted on August 29, 2017. And a select star for this date, reveals that these are King and Prince. Let's limit our data to only dogs and only those that were admitted after August 1st, 2017, so we can focus on King and Prince without distractions. For the subquery solution, remember that the predicates must be added to both the parent query and the subquery. I find this duplicity ugly and error prone, and there's an easy way around it with a [[CTE]]. So, let's do that, and execute much better. Further Window functions solution, duplicity is not an issue. The Window function sees the data after the Where filter had its way with it. Let's compare the results. The subquery solution shows that zero dogs were adopted prior to both King and Prince. For Ranger, admitted about a month later, it returns a two. This is the correct answer to their requirement. Count the number of animals of the same species as it was on the previous day. The Window function solution returns zero for King but a one for Prince,
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=285)** and this doesn't make sense as they were adopted on the same day. Can you see why that is? Stop the video for a minute and see if you can figure it out. The reason this time is the frame type. For a rows frame, even though King and Prince have the same admission date, they are distinct animal rows. So, the frame still counts each one. And why did Prince get a one and not King? Well, there is no reason. This query is non-deterministic, meaning that the database may well return a one for King and zero for Prince, and it will still be a correct valid result. What we need here is a range frame. And once again, we should be careful as trying to change only the frame type, results in an error for a mismatch data type. The hint in the error message is helpful. It tells us that we can use an integer range offset for a date expression. What we need is that to change the integer one to an interval of one day to get the desired result. Now, look at these two queries and tell me which one is clearer and more elegant. And the icing on the cake is that the Window function query performance
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-window-functions/practical-framing-examples?u=76281980&t=379)** is about 10 times better than the subquery one. And we're just starting to have fun. Plenty more demos coming up soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous chapter (1), coming up (1)
> **Definitions:** is a  (2)
> **Env Vars:** cte (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Defaults, shortcuts, exclusions, and null handling](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=1)** - [Instructor] The ANSI [[SQL]] standard defines shortcuts for frame boundary definitions by omitting the between keyword and one of the boundaries. So, instead of specifying between unbounded preceding and current row, we can just say unbounded preceding and current row will be assumed as the frame and vice versa for unbounded following. Between current row and current row is a legitimate frame. Can you see what is the difference between rows, range and groups current row? Pause the video for a minute and think about it. Rows current row is not very useful. The frame will consist of just the current row and to access expressions from the current row, we don't need window functions to begin with, we can access them directly. Range and groups current row will include the current row and all peer rows that have the same sorting values. These shortcuts may seem like a good idea at first, but I found that saving a few keystrokes may end up introducing confusion and bugs and it's just not worth it. As a rule of thumb, I recommend avoiding most syntax shortcuts, your code will be more readable and more portable, as not all [[Databases]] support all shortcuts. While the frame boundary shortcuts that we see here
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=96)** aren't terribly bad, the next one is. I've seen it inflict so much damage and grief that I decided it deserves its own shaming slide. Window function syntax allows specifying ORDER BY without any explicit frame boundaries. The frame will assume the default of, wait for it, range between unbounded preceeding and current row. This is an unfortunate frame that is neither obvious nor intuitive. I have seen developers fall for this trap over and over and over again. There are window functions, ones that we haven't covered yet, where the ORDER BY isn't used for framing at all and they look the same and ORDER BY with no frame boundaries. To distinguish framing ORDER BY from a functional ORDER BY, you will need to remember which window functions support framing. Now you see why I recommend avoiding shortcuts. Consider the possibility that your successors won't necessarily understand or appreciate it. So always specify the full syntax. In the long run, it will save you hours of frustration, precious air, and plenty of aspirin. Window frames support an optional clause that excludes
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=193)** the current row or its peers from the frame. Assume the frame is the entire partition and we're evaluating the highlighted third row. When no frame exclusion is specified, the default is, exclude no others, where both the current row and its peers are included in the frame. Exclude group excludes both the current row and its peers, exclude ties, excludes the peers but keeps the current row and exclude current row excludes the current row but keeps the peers. There's nothing fancy or complicated about it, it's a simple useful feature and I wonder why most databases don't support it yet. Window functions of different categories handle NULLs differently. It wouldn't be interesting without it, right? Most aggregate functions ignore Nulls, rank and distribution functions respect NULLs, and so do frame boundaries. We'll deal with each of them later. The ANSI SQL standard defines an explicit no ordering clause that allows us to control whether NULLs are sorted first or last. It does not determine whether NULLs have the highest or lowest sorting value, because first and last are respected regardless if we're sorting by ascending or descending order.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-window-functions/defaults-shortcuts-exclusions-and-null-handling?u=76281980&t=290)** Be extra careful when migrating between platforms as not all databases support this clause, but even worse is that they don't all sort NULLs the same way. For Offset functions, the ANSI SQL standard defines a NULL treatment clause. It determines whether NULLs are respected or ignored for Offset purposes. We're going to deal with Offset functions later in this course so let's leave it at that for now. Queries with window functions often require reusing an OVER clause. For example, it is common to ask for both the minimal and the maximal value of an expression over the same window. To make our lives easier, the ANSI SQL standard defines a window clause. Instead of repeating an exceptionally long OVER clause, we can write it once, alias it and reuse the alias in the query. This minimizes typing, reduces the chances for errors and makes the query more readable, a win, win, win. We will use this very handy clause soon. Now, let's move on to the next chapter in which we'll explore aggregate window functions in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Databases]] (3)
> **Env Vars:** order (5), ansi (4), sql (4), null (1)
> **SQL:** order by (5)
> **Cross-References:** later in (1), next chapter (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)


### 4. Aggregate Window Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Aggregate grouped functions](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=1)** - [Instructor] Up until now, I've used Aggregate window functions as my go-to examples. That was deliberate. As aggregates seemed to be the most intuitive and familiar for most developers. However, this apparent familiarity is a double-edged sword that manages to confuse even the most experienced developers. And yes, I know I covered it already and still I would like to spend two more minutes refreshing group by processing and emphasize the difference between group aggregate and Window aggregate functions. First, the animal's table is evaluated by the FROM clause. It is then passed to the GROUP BY clause. GROUP BY marks all rows for grouping based on the grouping expression species in this case. Our set is then transformed from its normal table like shape into a hybrid structure where each group of unique species rows will correspond to a single output row. Instead of nine individual source rows we're now dealing with three-row groups. This funny-looking set is delivered to the SELECT clause. SELECT evaluates all expressions as usual. Since this query has a GROUP BY clause, the expressions are evaluated per row group. This returns three rows and their respective group counts.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=97)** Without the group identifiers they don't tell us much so let's add species to the SELECT. And now we see species alongside their counts. Much better. Remember that species makes sense here only because it is the GROUP BY expression. It is the group identifier and is therefore guaranteed to have the same value for all rows within the group. What will happen if we add name to the SELECT? The query is no longer valid and will return an error. As unlike species, name may have multiple values for a group. The output still consist of one row per group so which cat should be returned? Felix or Calvin. The only way to guarantee that non-grouping expressions return a single value for each group is to wrap them in an aggregate function and that is the definition of an aggregate function. A function that takes in a set of elements, aggregates, and returns just one max name is a valid expression and this query will return Felix, Winston, and Milly. To sum things up, Aggregate window functions are defined with the OVER clause. They see all the rows or row groups as defined by their window specification.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-grouped-functions?u=76281980&t=193)** They don't see individual rows within each row group. Group aggregate functions are a different based. They can be used in the having, select, and order by clauses. They see individual rows within each group, but they can't see any row groups other than their own. Keep this important distinction in mind. You will thank me for it very soon.

> [!info]- Semantic Content
>
> **SQL:** group by (4), select (4)
> **Env Vars:** group (4), select (4)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Aggregate window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=1)** - [Narrator] These are the common categories for aggregate functions. Most [[Databases]] support most aggregate group functions as aggregate window functions too. You've probably used a few of these before, most likely, the arithmetic ones. Trivia fact, the [[Microsoft Word|word]] arithmetic comes from number art. Arithmos is number and tic is art. The NC [[SQL]] standard defines Boolean aggregate functions called every, any and some. Array aggregations are often extended to support [[JSON]] and XML formats. Statistical aggregates are plentiful and we're going to see a few later. And some databases add their own proprietary functions such as, Bitwise aggregations and Approximate functions that can offer better performance when accuracy is not critical. I can probably author a whole course just on aggregations. Now that I say it out loud, it actually sounds like a decent idea. Let me know in the Q and A section if you would like to see a course dedicated to aggregations. Routine check up is our largest table with about 300 rows. It stores results of monthly check ups for each animal. I deleted most of the original monthly rows at random just to save space. That's why not all animals have check ups. And those that do aren't monthly. We need to write a query that shows animal's species,
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=97)** name, check up time and heart rate. It should also include the Boolean column that evaluates to true for animals which every one of their heart rate measurements was either equal to, or larger than the average heart rate for their species. It's an interesting exercise that can be solved using sub queries derived, tables or window functions. If you want to try and solve it yourself, pause the video for a minute and give it a shot. Kudos to those of you who solved it no matter how. Calculating the average heart rate for each species is straightforward average aggregate window function, partitioned by species. Let's execute it first as is. To evaluate the Boolean expression, we'll use the every Boolean aggregate function. It will return true, only if all the elements are true. We partition it by both species and name so that the partition is limited to the current animal. If we inline the species average aggregate window function, as an argument within the every Boolean aggregate window functions, we will run into one of the limitations of window functions in general. Window functions cannot be nested. The NC SQL 2016 standard defines an exception with a feature called, nested window functions.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-window-functions/aggregate-window-functions?u=76281980&t=193)** Unfortunately, we don't have time to cover it in this course and even if I really wanted to demonstrate it, I can't. As I'm not aware of any database that has implemented this feature yet. We can circumvent this limitation with a [[CTE|common table expression]], [[CTE]], referencing the alias for this species average heart rate in the following query. If instead of showing this Boolean attribute, we need to use it as a filter and show only animals that are consistently at or above their species average, we might be tempted to try and copy it into the where clause. Only to be promptly reminded that window functions cannot be used in the where clause. And the way around it, is just to use another CTE and push the filter down one more level. All other aggregate window functions behave similarly. And we're going to cover plenty of them later. So I think that's enough for now. Let's see how we can use both window and group aggregate functions together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[SQL]] (2), [[CTE]] (2), [[Microsoft Word|Word]] (1), [[JSON]] (1)
> **Env Vars:** sql (2), cte (2), json (1), xml (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Combining grouped and window aggregate functions](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=0)** - [Presenter] Look at this query and try to see if you can guess it's results. I took the liberty of providing the result of the group aggregate COUNT (*) but what is the result of the window COUNT (*) function? Pause the video for a minute and see if you can figure it out. The COUNT(*) group aggregate function evaluated each row group. It had access to the individual rows within the group and being an aggregate function, it did its magic and returned a single value, the number of rows in the group. The COUNT (*) window function doesn't have that privilege. It is not a group function and is treated like any other select expression. It does have access to all three row groups and the empty over clause makes the entire set visible to the function. So the count of all row groups is three and it's going to be true for every single group. Let's push it one step further. What will happen if I'll use COUNT (Name) instead of COUNT (*)? Pause the video for a minute and see if you can figure it out. And the winner is, error. This query is logically invalid, the database will complain that name is not a group by expression and it is not contained in an aggregate function. The window aggregate count doesn't have access
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=94)** to the individual rows within each group and for name to make sense in this context, it must return a single value per group. What function would you use to count how many non-null names we have in total for all species? Ignore the fact that there are no-null names as it's part of the key but assume there may be. Once again, pause the video for a minute and see if you can figure it out. We must use a group aggregate function to guarantee a single value per row group. A window aggregate SUM over the grouped aggregate count of each group will do the trick. Does it make sense now? This is another confusing aspect of window functions and I often see experienced smart developers struggle, it's all about processing order and scope. We need to create a query to report monthly adoption fees revenue. The query needs to show every month and every year with adoptions, the total monthly adoption fees and the percent of this month's revenue from the total annual revenue for the same year. First thing we need is to group by year and month. And at this point, we can no longer use select star, you know we can only reference the group by expressions
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=190)** and use group aggregate functions on all others. To calculate the monthly totals, we'll use the sum group aggregate function, provide descriptive aliases and I'll add an order by just as a visual aid and we're halfway there. We see each month of each year alongside the total monthly adoption fee. Now for the annual percent. The formula for calculating percentage is 100 multiplied by the monthly total and divided by the annual total, to get the annual totals we need to look beyond the current row by defining a window partition by year. We can't reuse the alias, we just defined due to the all at once principle so we have to copy the entire expression. Beware of the lurking pitfall. I won't make you guess this time. Using SUM adoption fee as a window function will be rewarded with the infamous error, adoption fee must appear in the group by clause or in an aggregate function. There may be multiple adoption fees for each month so it doesn't make sense. We need to tell the database which adoption fee we are after with a group aggregate function. And to do that, we need to use a window SUM of the group SUM of adoption fees.
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-window-functions/combining-grouped-and-window-aggregate-functions?u=76281980&t=287)** This query is valid and returns the desired result. However, this monstrous expression isn't the prettiest manifestation of [[SQL]] and if you find it confusing and hard to read, you're not alone. Therefore, I recommend separating the grouped query from the window function with a [[CTE|common table expression]] to improve its readability. First, define the group query in a [[CTE]], then add the window function percent calculation using the aliases just defined in the CT. This is slightly longer but much clearer for you and whoever needs to read your code in the future. Now it's your turn to fly solo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[CTE|Common table expression]] (1), [[CTE]] (1)
> **Env Vars:** count (6), sum (4), sql (1), cte (1)
> **CLI Commands:** make (4), find (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [presenter] (1)

#### [Challenge: Aggregate window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=0)** - [Instructor] I created challenges for chapters four, five, and six of this course. You will find the challenge requirements, guidelines, and the expected results in the code files for each chapter. In the same folder, you will find a file with my suggested solution, which I'm going to walk you through in the following video. I've contemplated the challenges' difficulty level for a while and it was not an easy decision. On one hand, a challenge that is too difficult will require much effort and may discourage you. On the other hand, a trivial one kind of misses the whole point of a challenge and for me, solving a tough challenge is one of the most rewarding experiences of [[SQL]]. And the more time and effort I need to invest in it, the greater the reward. This is an advanced SQL course, so I decided to lean slightly towards the more difficult side of the spectrum. Please let me know your feedback in the Q and A section. SQL is an amazing declarative language and enables multiple correct solutions using different approaches, features, and syntax. Consider my suggested solution as one option and not necessarily the best one. I choose solutions that demonstrate the concepts clearly and that are generic enough to be of value in different similar cases. If you find another solution that you like, please share it in the Q and A section
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-aggregate-window-functions?u=76281980&t=93)** for everyone to enjoy. I love seeing solutions that I learn from. If you're using a database other than [[PostgreSQL|Postgres]], you may need to use different syntax and find alternatives for unsupported features. However, you may find even better solutions using features that Postgres doesn't support. Now to get you started, this first challenge is a warm-up and is not hard. The following ones will be more difficult, enjoy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[PostgreSQL|Postgres]] (2)
> **CLI Commands:** find (5)
> **Env Vars:** sql (3)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Aggregate window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=1)** - [Instructor] First, I'll find the number of annual vaccinations. This is a simple query grouped by year using a count star to aggregate the number of vaccinations. I don't need anything else from the table. Only the years that had vaccinations and their vaccination count. I always like to have the results of the previous step in front of me as I'm working on the next one. That's why after every [[CTE]], I add a select star from it and comment it out as I go. I often find that I need to go back to previous ones for debugging. I'm now ready to calculate the average for the previous two years. I'm going to break the solution to multiple steps, probably more than necessary, but just to make it easier to follow and to avoid needing to repeat long expressions. I also use highly descriptive long aliases even if it makes the query longer. Remember, you can always go back and compact it. I'll use the previous CTE as my input and add an average aggregate window function over the number of vaccinations calculated above. Be careful with a partition window and frame. Here, I don't need to partition since we already have one row per year. What I do need is a frame that covers the two proceeding years, order by year, range between two proceeding and one proceeding.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-aggregate-window-functions?u=76281980&t=93)** What do you think will happen if we use rows instead of a range frame? Pause the video for a minute and think about it. For this dataset, there will be no difference. It contains consecutive rows for each year, but if I add a filter just to check it and remove 2018, using a range frame shows the average of the two previous years for 2019 as 23. This is the correct result. 2018, no longer exists and the frame extends only two years back therefore, we get 2017. With a rows frame, the average shows 17. And this is the average of the years 2016 and 2017, the two rows, not the two years that proceed 2019. And that of course is not the correct answer. All that is left is to calculate the change in percent, 100 multiplied by the number of vaccinations of the current year divided by the average of the past two years. The cast to decimal prevents the results from having way too many digits, in this case, it's just for a better presentation, but for some of the next challenges, it will have a more substantial impact so remember it. And with that, our first solution is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (2)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cte (2)
> **Definitions:** is a  (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 5. Rank and Distribution Window Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [The concept of rank](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=1)** - [Instructor] Ranks define a relationship between a set of elements. So that's for any two elements, we can state that one is ranked higher, lower, or the same as any other. In mathematics it is called a weak order or a total preorder of elements. Reducing or simplifying a set of attributes to a numeric sequence or ratio is extremely useful for evaluating complex datasets. The ANSI [[SQL]] standard defines two window functions in the Rank category, RANK and DENSE_RANK. I've decided to include two more functions for this chapter, even though they're not considered by ANSI to be true Rank functions. These are ROW_NUMBER and NTILE. The ANSI standard defines each as a category in itself. From now on when I'll use the term Rank functions, remember I refer to all four. Partitioning is optional for Rank functions. The first major difference between Rank window functions and Aggregate window functions is their use of the ORDER BY clause. For Aggregate window functions, ORDER BY's sole purpose was for framing. For Rank functions, ORDER BY determines the basis for the rank and is mandatory. Framing doesn't make sense for Rank functions, as a rank of an expression is always relative to others within its partition.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-window-functions/the-concept-of-rank?u=76281980&t=93)** We can rank [[Microsoft Products|products]] based on size, popularity, price, age, or any other set of attributes. Let's start with the somewhat simpler ROW_NUMBER and NTILE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** ansi (3), order (3), row_number (2), ntile (2), sql (1)
> **SQL:** order by (3)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [ROW_NUMBER and NTILE](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=1)** - [Instructor] Row number assigns each row in a partition and number out of a sequence of monotonically increasing integers, beginning with one and up to the number of partition rows. Consider each row in this stadium as a partition and each seat as an element or a row ordered from left to right in ascending order. One of the most common use cases for row numbers is the classic top N per group challenge. Let's see how to solve it. We need to write a query to show the top three and only three animals of each species who had the most checkups, including species for which we have less than three animals. Let's start with a grouped query by species and name and a count star group aggregate function to get the number of checkups per animal. Now I hope you didn't forget that we should include species that have less than three animals, and less than three also includes zero. All species are in the reference species table, so let's incorporate that into our grouped query with the left outer join. Count star no longer makes sense as for species with no checkups, it returns a one. Either a name or checkup time will do. Now we see that our shelter accepts both ferrets and raccoons, although currently we have none. Next, we need to find a way to get the top three of each species.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=95)** First, let's try a sub query approach and see how that works. Let's wrap the previous query in a [[CTE]], calling it animal checkups. Now let's add a correlated sub query from a second instance of the CTE that counts how many animals of the same species had more checkups than itself. Those who had the fewest are the winners. Let's execute it and see what we get. The top three most checkup cats are Tigger in first place as there are no cats with more checkups than itself, and Ivy and Sadie are tied for second place. The sharp-eyed among you may notice that there's another potential issue here, but let's ignore it for now and continue as if all is well. Selecting from the CTE and filtering for animals, which there are fewer than three others with more checkups than themselves should give us the top three, right? Let's execute, and wrong. There are three dogs that are tied for third place with 11 checkups each and three rabbits tied for second place with five checkups each and all are showing up. The requirement was to return no more than three, so we're not done yet. However, the requirement didn't mention which of the animals to return in case that there are ties, so we are free to pick any three. The unique attributes per species is name,
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=189)** so let's use that as a tie breaker and count only animals whose name is smaller than the one from the outer query. And to do that, we must write this long logical predicate with two evaluation paths. If the number of checkups for the animal is larger than that of the one being evaluated, no problem. If it's equal, only then compare their names and count only those with a lower value name. Now we have an ugly, long, inefficient, unreadable but working solution onto the Window function. Let's copy the group query with it's CTE, add a column with a row number, Window function, partitioned by species ordered by the number of checkups in descending order and name as a tiebreaker for consistency with a sub query. By now, you know well that due to processing order, we can't use the row number result in the where clause so we must use another CTE. Wrap the row number query in a CTE, select from it with a filter for rows where the row number is three or less. The row number is one based, while the sub query count was zero for the first animal, so we need to use a smaller than or equal to operator. And with that, we're done. Not bad, right? Performance-wise, I think you can do the math yourself.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=288)** For the curious among you, at the bottom of the file, you'll find a third solution, which I think is even more elegant than both ones we just saw. Check it out and let me know what you think in the Q and A section. Ntile segments a partition into as equal as possible n or less segments. Each segment is called a tile. Ntile assigns each row an integer number out of a monotonically increasing sequence starting with one and ending either at N or the number of rows within the partition in case there are fewer of those. Think section numbers in a stadium, where all seats within a section are assigned the same section number. The stadium is the partition, the sections are the tiles, but unlike section numbers, ntile sections are as equal as possible in size and start with a one. I can only recall a handful of cases where I actually used ntile for real world challenges. But I will try to find an interesting use case for this chapter's challenge. Back to the animals table, select species name and admission date for all animals. Unpartitioned ntile 10 by admission date segments a 100 animals into 10 segments with exactly 10 rows each. Ntile 30 results in uneven segments and the remainder is distributed among the first partitions.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-window-functions/row-number-and-ntile?u=76281980&t=384)** That's why we see four rows in segment one, four rows in segment two, but all the following segments have three rows each. Ntile 30 partition by species will result in one tile per cat as we happen to have exactly 30 cats. Scrolling down to rabbits of which we have only 10, we see that there are only 10 segments with one row each.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (6)
> **Env Vars:** cte (6)
> **CLI Commands:** find (3), cat (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [RANK and DENSE_RANK](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=0)** - [Man] Rank assigns each row a number between one and the number of distinct values in a partition. If the values of the sorting expressions within the partition are all unique, the sequence will be monotonically increasing by one, which will be the equivalent of the row number. However, unlike row number, when a partition has tied sorting value expression rows, they are all assigned the same rank. The following value receives its rank disregarding the ties, hence introducing gaps in the sequence. Dense_Rank does a very similar thing, but as his name suggests, it avoids the gaps. These are best explained with an example. Let's revisit the routine checkup report we used two demos ago simplified to exclude species for which there were no checkups. Let's add columns for Rank and Dense_Rank, I will be reusing the over clause. So a window clause is probably an order. The row number generated a unique value for each row even though Ivy and Sadie had seven checkups each. And you already know that it could have been the other way around and just as correct. Rank assigns the same rank too to both Ivy and Sadie, and Charlie, the next cat in line with six checkups gets a rank of four. The three was skipped
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=94)** due to the duplicate ranks assigned to Ivy an Sadie. And similarly, we see larger gaps for Misty, Oscar and Simon with four checkups each and then Archie with three. Like Rank, Dense_Rank, assign the same rank to Ivy an Sadie, but it avoided the gaps and assign Charlie a rank of three. At this point, you may be asking yourself, well, what are all these nuances good for? I'll tell you that understanding these nuances is going to save you hours of frustration for slightly different requirements. For the row number, the requirement was to show the top three animals who had the most checkups. For that, we use the filter on the row number of three or less. You may also recall that we have three dogs tied for third place and three rabbits tied for second. What if we do need to include ties for third place, like the original sub-query solution did before we add a name to break the ties? This is a slightly different question. Show me the top three animals per species with the most checkups and include any animals tied for third place. And row number won't help us with that, but Rank is here to save our day. Replacing the where predicate to rows where the rank is three or less is going to do just that. For cats, it didn't change anything as they had no ties.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-window-functions/rank-and-dense-rank?u=76281980&t=189)** For dogs, we now get five back, including Jake and Shadow that were missing from the previous query. And now I have a quiz for you. And this time, we're going to do a reversed quiz. I'm going to show you the query and you need to come up with a question. What is the question that is answered by the query, where our filter is for rows whose dense_rank is smaller than or equal to three? Pause the video for a minute and see if you can find the question. If you're not sure yet, let me execute it for you and give you another chance to figure it out. Pause the video again and see if it makes more sense. The question this query answers is not for the top three animals. It is for the top three distinct number of checkups. Show me all animals that have a number of checkups, which is one of the top three number of distinct checkups per species. And now you know what all these rank functions can do for you. And with that, I [[Representational State Transfer (REST)|rest]] my case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** cat (1), find (1)
> **Code Identifiers:** dense_rank (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### [Distribution window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=1)** - [Instructor] A cumulative distribution function, describes the [[Probability]] that our random variable X evaluated at n, we'll take a value that is less than or equal to n. As a highly simplified example, consider a standard six side playing dice. Each side has a unique integer value between one and six and has a roll probability of 1/6. The cumulative distribution for rolling a value that is equal to or smaller than one is 1/6. The probability for rolling a value that is equal to or smaller than two is the sum of the previous and the current probabilities 2/6 or 1/3, similarly for a three, the permeability is 1/2 and so on up to one. One represents the probability of rolling a value that is equal to or smaller than six and that is a certainty. The NCC equal standard defines distribution window functions as functions that compute a relative rank over a row R, within a window partition of R, expressed as an approximate numeric ratio between 0.0 and 1.0. [[SQL]] supports two variants of distribution window functions, percent rank and cumulative distribution. Their syntax is similar to that of ranking dense rank, both functions take no arguments,
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=97)** have an optional partition by clause and the mandatory order by clause. Let's use the same highly simplified dice example to see how each function is evaluated. In a window partition, each side of the dice is a row R the window is sorted by the rows integer values in ascending order. Cumulative distribution evaluate the relative rank over row, Rn as Np of N divided by NR. Np of N is the number of rows proceeding or peer with Rn and NR is the total number of rows in the partition. For example, row two has two rows that proceed, or peer it divided by the total number of rows, which is six evaluates to 1/3. Percent rank evaluates the relative rank of a row Rn, as the rank value of Rn minus one, divided by NR minus one. Present rank evaluates to relative ranks that much like cumulative distribution and with a one, but it begins with a zero. For example, rows two rank is two, minus one is one divided by the total number of rows six minus one is 1/5. Let's have some fun with statistical weight analysis of our animals.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=192)** An animal's weight may vary between measurements. So first let's average it with a group aggregate query, an order by for both species and average weight in descending order will cause the rabbits to show up first with the heaviest ones on top. Now, the reason I'm doing this is because there are fewer rabbits, which is going to make our visual reference a little easier. Like before, let's wrap the group query in a [[CTE]] for convenience and select from the CTE, let's add both percent rank and cumulative distribution window functions, partitioned by species and ordered by the average wait and execute. The order by for the window function is an opposite sort of direction to the one used for presentation order but of course it doesn't affect the results. April is our chubbiest rabbit at nearly seven pounds, both percent track and cumulative distribution assigned her a perfect one as all other rabbits are lighter. Peanut is our lightest rabbit at 3.13 pounds, and her name suits her very well. Percent rank assigned peanut is zero as there are no lighter rabbits while the cumulative distribution assigned a value, which is slightly higher than zero. If you're a statistician or a data analyst, you're probably find these extremely useful.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-window-functions/distribution-window-functions?u=76281980&t=285)** Unfortunately, I am neither so I'm going to leave it at that and proceed right onto this chapter's challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[CTE]] (2), [[SQL]] (1)
> **Env Vars:** cte (2), ncc (1), sql (1)
> **Versions:** 0.0 (1), 1.0 (1), 3.13 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Rank window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-rank-window-functions?u=76281980&t=1)** - [Instructor] As I promised, I believe you will find this challenge more difficult than the previous warm up one. Naturally, it will involve rank window functions. It may also require aggregate window functions, or even group aggregate functions just to make thing more interesting. This challenge is an example of a common category of challenges that I frequently encounter in the real world, analyzing time series data, for example stock prices or sensor readings over time. I recommend that you use a similar approach to the one I demonstrated with a previous solution. Break down your solution into small, digestible chunks using as many [[CTE|CTEs]] as you feel comfortable with. After each one, execute a select star, preferably by an order by to keep row order consistent for visual reference, and once you're happy with it, proceed to the next step. Remember that data type issues can hinder your progress, so make sure to cast expressions early to manageable easy to read types. Enjoy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Ctes]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Rank window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=0)** - [Instructor] First, let's figure out the species average temperatures and every measurement's difference from it. I chose to use an aggregate window function partitioned by species and subtracted from the current temperature. Well, I could've separated this into two [[CTE|CTEs]] to avoid repeating the function. I believe that by now you should be comfortable enough with a bit more logic in each [[CTE]]. A reasonable alternative is to first calculate all the averages per species with a grouped query, and join it to routine checkups. It makes calculating the difference a bit more direct. At the bottom of the solution code file you will find an alternative query that uses the same steps as I'm about to show you for this one using slightly different syntax and features. The next step is calculating whether a measurement's difference from the average constitutes an exception or not. I chose to use the integers one and zero to differentiate exceptions from non-exceptions, and you'll see in a minute why. The absolute function is needed to account for both positive and negative differences. I used the Boolean exception indicator for the alternative query with a count aggregate just for fun. Check it out. Now that I have all exceptions, I can count how many of these each animal experienced. Grouped by species and name will group all checkups to one row, group, or animal.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-rank-window-functions?u=76281980&t=95)** A grouped sum aggregate will sum up all the ones and zeroes we just calculated for the total number of exceptions per animal. The requirement is to sort by the latest checkup time for animals whose number of exceptions are the same. Using a max checkup time we won't do, as it will include rows for which the checkup times are not necessarily exceptions. And to work around it, I used the case conditional expression that returns checkup times only for exception rows. Nearly done. Now I have each animal's number of exceptions and its latest exception date. Time to segment the results into four roughly equal segments per species. NTILE 4, partition by species, ordered by the number of exceptions, and a tiebreaker of the latest exception time in descending order will do the trick. All that's left is to filter for the first segment, the one that got assigned an NTILE value of one that represents the lowest number of exceptions sorted nicely, and that's about it. For the alternative query at the bottom of the file I used percent rank instead of NTILE. Make sure to check it out. I also left a question for you there. See if you can figure that one out, too. And now we're off to offset window functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Ctes]] (1), [[CTE]] (1)
> **Env Vars:** ntile (3), cte (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 6. Offset Window Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Offset window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/offset-window-functions?u=76281980&t=0)** - [Instructor] Offset window functions enable access to individual partition rows, and they come in two flavors. A pointer to another row can be either based on a current position or on an absolute position regardless of the current one. If you're looking for the restrooms, I can help you get there based on your current location. Move two doors eastward or 600 steps north from where you are. Alternatively, I can direct you to the same restrooms based on a known location. Two doors from the entrance or last door to the north, and this is regardless of your current position. Offset window functions support both direction types. Lead and lag are called row offset functions, as they use a positional offset from the current row. This is the equivalent of move two doors eastward. Partitioning is optional, and framing is irrelevant, as the offset is specified from the current row's position. First, last, and nth value functions are called frame offset functions, as they use an offset from a frame boundary. This pointer doesn't care about the current row's position and is the equivalent of last door to the north. For these functions, partitioning is optional, but framing is mandatory.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Row offset window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=1)** - [Instructor] All Offset functions require a mandatory expression for what we want to [[Fetch]] from the other row. Row Offset functions have two additional optional parameters. First is an Offset value and the second is a Default value replacement. The Default is used in case the Offset points to outside the partition boundaries or to a row that doesn't exist. If Offset is not specified, one is assumed. If a default is not specified, NULL will be used. IGNORE and RESPECT NULLS determine whether rows with NULL expressions are counted towards the Offset. The Default is RESPECT NULLS. Following are the optional PARTITION BY clause and the mandatory ORDER BY clause. Remember the ORDER BY in this case does not imply framing. And in fact, we can't specify a frame even if we really wanted to. Here is a row set ordered by the green column in ascending order. We're currently evaluating the highlighted third row. A lead with an Offset of one points to the following row and a LAG with the same Offset points to the previous row. Note that the Offset has nothing to do with the value gaps of the green values. It refers to the relative position and nothing else. The weight analysis was a lot of fun,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=95)** so let's take it one step further. We need to write a query that returns all animal weight measurements and how much they gained or lost since their last checkup. This time we don't need the group by as we're looking for the individual measurements. Here is the base query to get us started. Let's add a column that subtracts current weight from the previous one using LAG weight, PARTITION BY species and name, ORDER BY checkup time ascending. Note that the first checkup for each animal returns a NULL weight gain as there are no previous measurements. I believe that this is purely a presentation issue that should be solved on the client side and not in the database. Nevertheless, let's see what we can do about it. First, a naive attempt to use a default string of not available will immediately run into reality check. We can't use a string as a default for a numeric column, makes sense. Even a COALESCE over the expression won't avoid this incompatibility. I've witnessed cases where developers were tempted to cast the inner numeric expression to a string which unfortunately is going to bite much harder. And to easily demonstrate this issue with this dataset, let's for a minute multiply weight gain by 100. I'll also change the ORDER BY to weight gain so that the issue will be easily visible.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=188)** And looking at Charlie's row, everything seems to be okay. However, scrolling down reveals that for Simon, a minus 20 gain is sorted as being smaller than a minus 41. And this is the correct sorting for strengths but this is not what we are after. A zero won't do either. We can't use an integer literal as it is incompatible data type as well. Side note, I guess that [[PostgreSQL]] could have been a little bit more lenient here and implicitly convert the integer literal to a numeric for us. Other [[Databases]] like [[Microsoft SQL Server|SQL Server]] do that. That said, and if you know me just a little by now, you know that I will never complain about a database being too strict. The opposite is usually true. Changing the zero to a 0.0 works. But the result is not good either. Current weight minus zero is the current weight, not the weight gain. So using current weight as a default results in a zero gain for their first checkup, but that's no good either. If this set requires further processing, for example, averaging the weight gains, this zero is going to skew the results. The point I'm trying to make here is that we just don't know what the gain is for the first checkup
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-window-functions/row-offset-window-functions?u=76281980&t=281)** and therefore it should remain a NULL. With all its complexities and all its anomalies, NULL is still the best way to deal with missing data. I guess that if the last three minutes end up saving you even four minutes sometime in the future, then it was well worth it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[PostgreSQL]] (1), [[Databases]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** null (5), order (4), respect (2), nulls (2), partition (2)
> **SQL:** order by (4)
> **Definitions:** is a  (2), is an  (1), refers to (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Versions:** 0.0 (1)
> **Analogies:** for example (1)

#### [Frame offset window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=1)** - [Instructor] Like the row offset functions, frame offset functions require a mandatory value to [[Fetch]] expression. Nth value also requires an offset specification. Nth value supports an optional from first or from last clause, which determines whether the offset is evaluated from the beginning or from the end of the frame. The default is from first. Ignore and respect nulls work the same way as they did for row offset functions. Partitioning is optional, but framing is mandatory. Note that the order by is used both for the frame definition and also for the offset evaluation of nth value. Wouldn't it be nice if the frame and nth value could use different sort orders. As for the frame definition, mandatory is a bit of a strong [[Microsoft Word|word]] as we can omit it and specify only the order by. I highly recommend that you don't, as if you do, a frame will be assumed for you and it happens to be the same unfortunate one we saw for aggregate functions, range between, unbounded preceding and current row. Here is the same row set as before with a frame of rows between unbounded preceding and one following. First value points to the first frame row and for any frame that uses unbounded preceding,
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=96)** first value will always point to the same row for all partition rows. Last value points to the last row in the frame, which is one following in this example. The n boundary will keep advancing as the frame advances for each subsequent partition row. Lastly, nth value using an offset of two and the default from start points to the second row in the frame. Confused yet? Great. If not, let's see a code demo and try to confuse you some more. Here is the query we just used to calculate weight gains. The lag function doesn't care how long ago the previous checkup was, as it is based solely on the row's position, and therefore, these results can be highly misleading for any medical evaluation. A weight loss of half a pound in a week is much more alarming then a similar weight loss realized over a year. And to fix that, we need to replace the weight gain since the previous checkup with a weight gain, let's say over the past three months. This is slightly trickier and may not have a definite ultimate answer as we don't have data for every single month and yet let's give it a shot and see what we come up with. If your database never had any missing data points, you're more than welcome to skip this demo.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=191)** Let's begin with a naive approach like before and work our way up. First, I'll try a first value using a range frame that begins three months before and ends with the current row. If I execute, I can immediately see that the results are very suspicious. When I see so many zeros and not a single null, although I know we have plenty of missing data points, my alarm bells start ringing. Do you see why that is? Pause the video for a minute and see if you can figure it out. There are no nulls as for all rows, regardless of the number or frequency of checkups, the frame has at least one row, the current one, that's also the reason for the zeros galore. First value for frame that consists of the current row is the current weight. If we look at Charlie's checkups from March 20th, 2018, we can see that his weight gain of 0.3 pounds was realized from one month before, not three. Now, I already admitted that the requirements are not complete. I said we needed to show the weight gain of the animal over the past three months, I didn't say what we should do if there are none or if there are only more recent measurements. Trying to limit the frame to only three months ago
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=288)** by replacing current row with three months preceding is not very helpful either. You may recall that range frames are data type dependent and checkup time is a timestamp. [[PostgreSQL|Postgres]] timestamps include the time of day with a resolution up to a microsecond. This means that the frame will catch a previous checkup only if it happened to take place precisely three months ago to the microsecond, and that's not very likely. Let's change that by explicitly casting checkup time to a date type instead. The frame now covers checkups that happened on the same date three months before, but regardless of the time of day. And these results are slightly more useful, although not much. We do get a few non-null results such as Charlie's latest two, as he happened to have had checkups at on the same day, three months before. Now, the purpose of this demo is not to come up with a definite ultimate answer, as I already said twice that the challenge is not well defined. What I do want to show you is some of the challenges that you may encounter when dealing with offset and ranges. But I can't leave you hanging without some sort of answer so here is what I would do if this was my application. I would use a frame of three months preceding
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-window-functions/frame-offset-window-functions?u=76281980&t=382)** and one day preceding. My reasoning is that if we're looking for abnormal weight differences over three months, these differences should be much more alarming if realized over shorter periods of time. I would change the query to sort by the absolute weight gain, not by animal and checkup time and note that Postgres does not allow for functions on order by expressions, which use aliases from the same query. And the error message is somewhat misleading. Other [[Databases]] have no problem with it, and the workaround is simple, just wrap it in a [[CTE]] and sort in the following query. I would also add nulls last, so we don't have to scroll down to see our first real result. Alternatively, we can eliminate null rows in the (talks) clause. Even better is sorting by relative and not by absolute weight gain because a two-pound loss for a 50-pound dog is not as alarming as the same loss for a four-pound rabbit. This requires yet another CTE to calculate the percent change, and here are the results. And now if you'll excuse me, I really need to hurry, go check on Walter, it seems that something is very wrong with the poor guy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[CTE]] (2), [[Fetch]] (1), [[Microsoft Word|Word]] (1), [[Databases]] (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** cte (2)
> **Warnings:** note that (2)
> **Versions:** 0.3 (1)
> **Documentation:** specification (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)

#### [Challenge: Offset window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/challenge-offset-window-functions?u=76281980&t=0)** - [Instructor] Like the previous challenge, the last challenge for this course involves more than just the chapter's topic. So, of course, you will need to use offset window functions, but perhaps also aggregate functions or maybe even a RANK window function. Basic knowledge of datetime function is necessary, so if you're not familiar with these, the documentation is your friend. And please do read the requirements carefully. I left an important tip for you there that is going to save you some misery. Enjoy.

> [!info]- Semantic Content
>
> **Env Vars:** rank (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Offset window functions](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=1)** - The first step is to identify each quarter. And, I really hope you heeded my tip, and used quarter start dates as their identifiers, and were not tempted to extract quarter number and years from the dates. If you did, I bet you quickly realized what a hassle they are when dealing with cross-year boundaries. I chose to use MAKE_DATE with DATE_PART, but any other method is fine, as long as you end up with the date type to work with. All I need are the species and the quarters. At the bottom of the solution file, you will find an alternative query that uses extract. Now, I can figure out quarterly adoptions and then some. The first challenge is to find the right grouping expressions. I need to calculate quarterly adoptions, both for each species, and for all species. One option is to write two separate queries, one that groups by quarter and species, and another that groups only by quarter, and then union them. And, there's nothing wrong with this approach, and in fact, I used it for the alternative query, which you know where to find. What I did choose to use is a very powerful, but unfortunately less frequently used feature of [[SQL]] called grouping sets. Grouping sets create multiple row groups in a single query. Group by grouping sets, quarter and species, and only quarter, will add super-aggregate rows
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=97)** for all species for each quarter with a null for species. Magically, we have a new row group, representing all species for each quarter, which is going to significantly simplify all upcoming calculations. The COUNT(*) group aggregate function counts all adoptions for each quarter and species. At this point, we're ready to calculate the difference from the previous quarter. This is the current quarter's count, minus the previous quarter's count, which I get with FIRST_VALUE, partition by species, and a frame that starts and ends with an interval of three months preceding, a.k.a. previous quarter-start. Now, you see why using the quarter start date as its identifier is such a good idea. For quarters that follow quarters with no adoptions, the frame is going to be empty, and the function will return a null. Subtracting a null from an integer results in a null. So, I must use COALESCE, and replace them with zeroes. I also identify the first quarter for each species with a CASE conditional expression, comparing the current quarter with the first one for its species, with another first value, partitioned by species and ordered by quarter start. The frame's end boundary doesn't really matter,
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-window-functions/solution-offset-window-functions?u=76281980&t=192)** as we referenced the first value in the frame. But, I chose to use what I consider to be logically correct, a frame that covers the whole partition. If the current quarter is also the first quarter, this expression evaluates to a zero. For all other quarters, a null. And, you'll see why I do that in the next step. Another valid option is to use a Boolean expression, which I did for the alternative query. While you're checking out the alternative query, also notice the slightly different logic using LAG, it's pretty cool. Now, that was the hard part. All that's left is to rank each quarter for each species. The COALESCE will return zero for the first quarter. And, for all other quarters, where it is a null, the actual difference from the previous quarter is used for the rank, as per the requirements. The quarter-start descending tiebreaker guarantees that the most recent quarter is used in case of ties. And lastly, filter for rows with a rank of five or less, revert the quarter identifiers back to year and quarter number, and sorted per the requirements. SQL and window functions are so mind-blowing amazing, aren't they?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2), coalesce (2), make_date (1), date_part (1), count (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Review, conclusion, and next steps](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=0)** - [Instructor] And so here we are, at the end of our short but intense journey. I can't believe we started it just two hours ago. Our first step was an introduction to the general concepts of Window Functions and the OVER Clause. We learned about partitioning, Framing subtleties, and frame Exclusions. Then, we covered the three types of Window Functions in-depth. We saw how Aggregate Window Functions differ from group aggregate functions, the one you know and love, and how both can live together in harmony. I bet that the Rank and Distribution Functions blew the minds of the analysts among you. For you developers, I promise that you will learn to appreciate how useful they are for solving numerous types of challenges as you get comfortable with them, and the same is true for Offset Window Functions. They too, have numerous use cases and will come in handy no matter what type of obligations you're working on. If you haven't watched my query processing course yet, it's not too late. After completing this course, it will be easier to follow, and will help put some of the more basic [[SQL]] constructs into an even tighter framework. Window functions are your friends, and one of your most valuable tools no matter where you're heading with your SQL career. If you like this course, please bookmark my author page, and check it occasionally to see when I publish new ones.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=95)** I promise to make good use of window functions to solve all kinds of nifty challenges, and there's no shortage of good challenges. [[LinkedIn]] Learning is an endless resource of quality content. With so many options, choosing the right course to spend your valuable time watching isn't a simple task. I recommend that you choose courses that focus on foundational knowledge, theory, and understanding of the subject matter, rather than ones that focus on syntax and promise instant results. Don't get me wrong, there's nothing immoral about learning how to get your hands dirty fast, but only as a starting point. Unfortunately, I often see developers stuck at the Stack Overflow copy paste paradigm for the [[Representational State Transfer (REST)|rest]] of their SQL careers. Don't be tempted by instant solutions, not for SQL, and not in your life. The instant culture has been thriving in recent decades, and that's really not a good thing. If you're serious about your SQL career, I recommend that you bite the bullet, and spend whatever time and effort is needed to master the relational data model, SQL's forefather. It is not an easy subject, and that's an understatement. On the other hand, I can't overstate the importance of understanding the foundations on which SQL was built. Do that, and you will stand out from the crowd
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=190)** of script kiddies. You see, even in this Adobe stock image we purchased for this course, every single table has a table name underscore ID as its primary key. You will know better than that once you learn what a key really represents in the relational model, and I promise you it will blow your mind once you get to know it. Dr. Codd was a rare genius. Make sure you read his book and his articles. I'll provide links to some of my favorite resources in the code file for this chapter. I really need your feedback to improve. Did this course meet your expectations? Was there any part where you wished for more? Any topics you found boring or trivial? Were the challenges too hard or too easy? Do you disagree with something I said and feel the urge to correct me? All feedback is fair game, and I invite you to rank this course honestly. And even better, I will highly appreciate it if you could spend a few minutes and provide more detailed feedback than just a like or a like or a DENSE_RANK. Use the Q and A section to leave feedback and ask questions. You're also very welcome to look me up on LinkedIn and connect, but if you do, please add a personal message to your connection request. Our human brains work in mysterious ways. They're complex [[Neural Networks]],
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-window-functions/review-conclusion-and-next-steps?u=76281980&t=284)** and learning triggers new pathways and memories. These pathways are volatile, and without practice they will soon fade away. Studies have shown that in one hour, you will forget about 50% of what you remember now, 70% will be gone tomorrow, and 90% in a week. To make sure your effort and time were not in vain, you must do four things, practice, practice, practice, and keep learning more SQL. So, to keep you busy with some more practice, I created one last challenge as homework. It's an extra difficult one for triple bonus points. You'll find the challenge and the solution files, as usual, in the folder for this chapter. And I'm not going to review neither the requirements nor the solution. I did leave detailed comments and descriptive aliases, and I really hope that's enough. I will tell you that it took me over two and a half hours to solve it and weed out all my bugs. So, be patient and careful. I hope you'll enjoy it, and find a better solution than mine, and if you do, let me know in the Q and A section what you think and how you solved it. And on that positive note, it is time to say goodbye. Thank you, from the bottom of my heart, for your patients and making it all thew way to this point. I couldn't have done it without you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[LinkedIn]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Neural Networks]] (1)
> **Env Vars:** sql (8), dense_rank (1)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** we covered (1)
> **Documentation:** stack overflow (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ami Levin]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL- Logical Query Processing, Part 2]] | **4 of 8** | [[Advanced SQL for Query Tuning and Performance Optimization]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)