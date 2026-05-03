---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-logical-query-processing-part-1
url: "https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1"
duration_minutes: 102
duration: 1h 42m
level: Advanced
updated: 12/6/2024
learners: 73284
skills:
  - Database Queries
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG28KHopi6kWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619735443478?e=2147483647&amp;v=beta&amp;t=U5fUSj6XbdM7tR_q9ix_WGa_Pig5SqY8AUCIGx1QaWA"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
prev_courses:
  - '[[Top Five Things To Know In Advanced Sql]]'
next_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 2]]'
path_nav: '[{"path":"Master SQL Development","position":2,"total":8,"prev":"Top Five Things To Know In Advanced Sql","next":"Advanced SQL- Logical Query Processing, Part 2"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-queries
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL-%20Logical%20Query%20Processing%2C%20Part%201.md)

![Advanced SQL: Logical Query Processing, Part 1](https://media.licdn.com/dms/image/v2/C4E0DAQG28KHopi6kWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619735443478?e=2147483647&amp;v=beta&amp;t=U5fUSj6XbdM7tR_q9ix_WGa_Pig5SqY8AUCIGx1QaWA)

# Advanced SQL: Logical Query Processing, Part 1

> SQL has been the dominant data processing language for the past five decades. This course takes you beyond the syntax fundamentals, and into a new world of understanding how relational database management systems process SQL queries, and how that impacts your coding practices. Learn about logical query processing, and avoid most common pitfalls and processing limitations. Discover advanced JOIN te

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1) | 1h 42m | Advanced | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Course introduction](#course-introduction)
  - [Course agenda](#course-agenda)
  - [Tooling](#tooling)
  - [Introducing the demo database](#introducing-the-demo-database)
  - [Using the code files](#using-the-code-files)
- [**1. Constructing Query Source Data Sets**](#1-constructing-query-source-data-sets) (5 videos)
  - [Single data source queries](#single-data-source-queries)
  - [Dual source query processing](#dual-source-query-processing)
  - [Joining multiple source data sets](#joining-multiple-source-data-sets)
  - [Challenge: Hybrid multi-table join](#challenge-hybrid-multi-table-join)
  - [Solution: Hybrid multi-table join](#solution-hybrid-multi-table-join)
- [**2. Row Filters**](#2-row-filters) (3 videos)
  - [Filtering source rows](#filtering-source-rows)
  - [Missing information and ternary logic](#missing-information-and-ternary-logic)
  - [Dealing with ternary logic in SQL](#dealing-with-ternary-logic-in-sql)
- [**3. Grouping**](#3-grouping) (5 videos)
  - [Grouping](#grouping)
  - [Dealing with NULLs and elimination duplicates](#dealing-with-nulls-and-elimination-duplicates)
  - [Group filters](#group-filters)
  - [Challenge: Filtering and grouped query](#challenge-filtering-and-grouped-query)
  - [Solution: Grouped query with Distinct](#solution-grouped-query-with-distinct)
- [**4. Ordering and Paging**](#4-ordering-and-paging) (3 videos)
  - [Presentation ordering in multitier architecture](#presentation-ordering-in-multitier-architecture)
  - [Ordering result sets](#ordering-result-sets)
  - [Paging result sets](#paging-result-sets)
- [**Conclusion**](#conclusion) (2 videos)
  - [Course review and takeaway](#course-review-and-takeaway)
  - [Feedback and additional resources](#feedback-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=0)** - [Ami] You're an uprising or seasoned data practitioner. You write [[SQL]] for work or for fun. You taught yourself SQL or perhaps taken a few courses. You feel you have a decent hold of the syntax and you manage to get stuff done in SQL reasonably well. And yet, you often find yourself scratching your head, trying to wrap it around this extremely annoying query. Why doesn't it work? Well, don't feel bad. It is not your fault. No one ever taught you how your queries are processed and why they work that way. Query processing order is one of the most fundamental aspects of SQL. In this course, I invite you to say goodbye to many hours of frustration, and hello to the beginning of a fresh, solid understanding. For this course, I will assume that you're somewhat familiar and experienced using basic SQL, but even if you're just starting your SQL career and not fully confident yet, I suggest you don't go anywhere before you complete this course. In the following two hours, we're going to explore the subatomic structure of a SQL query from a fresh new angle, which will bring with it radical new insights into SQL's beauty and its power.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-introduction?u=76281980&t=98)** We are not going to write two page long complex queries, that will come in the following courses. This course is needed as a foundational back to basics so that the complexities that will follow will come effortlessly. You will begin to see SQL queries through the eyes of the database, exactly as it processes them and unveiling the intricacies and logic behind every clause. Layer by layer, chapter by chapter, we'll uncover how SQL queries are processed. You will learn methodologies for analyzing and solving SQL challenges, and how to avoid the most common pitfalls. You're about to take the most significant SQL course ever. This is not your typical script kiddy course. It's going to challenge you every step of the way, and much more so, on the topics that you think you know and take for granted. Remember, "it ain't what you don't know "that gets you into trouble, it's what you know for sure "that just ain't so."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (12)
> **Env Vars:** sql (12)
> **CLI Commands:** find (1)
> **Speakers:** - [ami] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Course agenda](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-agenda?u=76281980&t=1)** - [Instructor] In this chapter I'll briefly review our agenda and the tools I'll be using. I'll introduce you to the demo database and show you how to use the code files. Then we'll dive right into query processing, starting with the processing of the source data sets. You will see how single and multiple sources are processed, in what order, and why it matters a lot. Next, we'll see how row filters are applied and how to use both binary internally logic. We'll focus on the common anomalies that often deceive even the most experienced developers. In chapter four we will learn exactly what happens to the data set when it's grouped and the logical limitations that grouping brings with it for the [[Representational State Transfer (REST)|rest]] of the query. In chapter five we'll leave the relational world behind to deal with ordering and paging. It is not as simple or innocent as it may seem. And lastly, we will briefly review what we've learned, I'll give you some recommendations to go, and say proper farewell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - [instructor] (1)

#### [Tooling](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/tooling?u=76281980&t=0)** - [Instructor] The concepts you will learn are universal and apply to all relational [[Database Management]] systems. I will be using [[Microsoft SQL Server|SQL Server]] for most of the demos, occasionally switching to show you how other [[Databases]] behave or misbehave. For an ID, I will use SQL Server Management Studio and for the other databases, I'll use DBeaver Community Edition, which supports all mainstream databases. I will not cover installation or configuration of any of these databases or tools. In the code file for this video, you will find links to step-by-step installation articles for all databases I'll use in this course. If you can't install any of these and don't have access to a network server or a cloud-hosted database, you still have the option of using an online query service. An online query service requires no installation as everything is done inside your browser. There are a few such online services, [[SQL]] Fiddle, DB Fiddle, Rextester, and others, but my favorite one by far is db&lt;&gt;fiddle UK. It has proven to be highly reliable and free of commercial interest, qualities that most other services have not, let's say, excelled at. You will find db&lt;&gt;fiddle UK links to copies of all code files, including the database creation script embedded and hidden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[Microsoft SQL Server|Sql server]] (2), [[Database Management]] (1), [[SQL]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** find (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Introducing the demo database](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=1)** - [Instructor] I considered using existing sample [[Databases]], such as [[MySQL]]'s Employees, [[Microsoft SQL Server|SQL Server]] AdventureWorks, Worldwide Importers, or one of the many others that are out there. It was very tempting to use a familiar off-the-shelf database, but I chose to create a new one from scratch for this series. Honestly, I find most of the existing demo databases to be severely flawed in their design. And I will use this opportunity to demonstrate some of my design choices using a topic that is near and dear to my heart, helping animals in need. So hereby I proudly introduce the Animal Shelter demo database. At first glance, you might find it somewhat odd. First, I chose to use natural, intelligent keys for all tables. There are no magical IDs, auto increment columns, sequences, identity GUIDs, or any other type of surrogate key. This is a controversial topic with near religious opinion and heated debates. And I'm aware that my opinion is in the minority. I find that the abuse of surrogate keys for every table in the database to be one of the most destructive habits ever to plague the relational database world. And surrogate keys have their place and can be useful, just not as a default one-size-fits-all solution for every single table in the database. What's worse is that this practice got so deeply rooted
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=95)** and most database designer these days don't even consider the natural business keys and immediately opt for whatever table name underscore ID as the primary key. And this has devastating results for data consistency, query convolution, workload performance, modularity, [[Scalability]], concurrency, and I can go on forever. I plan to release a course dedicated to this topic. For now, I ask that you just take it for what it is, and see for yourself how simple, elegant, and efficient [[SQL]] becomes when writing queries against tables that use natural keys. To be able to fit this database in DB Fiddle, I used only a subset of the tables from the full animal shelter database project and with only a few hundred rows of data. If you visit the [[GitHub]] project page for this database, you will see that I've included many more reference data tables. These are a must-have for any external authority data. States, cities, zip codes, calendar holidays, species, breeds, and color names are all standardized data sets that must be enforced for consistency. For this course, I included just the colors and species tables as an example in the reference schema. Both consist of a single column, which serves as the primary key. Now, some of you may think it's redundant, and I say it is anything but.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/introducing-the-demo-database?u=76281980&t=190)** Having a standardized reference set of colors and species that every other entity can reference and enforce, will guarantee we will never have misspelled, non-standard, or non-existent values. I created all these tables in the dedicated reference schema, which typically should be in read only so that the application can't mess it up. If reference data is added or modified, a DBA must set it to read write, make the change, and then set it back to read only. We will cover the individual tables as we go along. This project may evolve over time, but the version that is provided in the course materials is guaranteed to produce the same results as you will see in the videos and, as expected, for the challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[MySQL]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Scalability]] (1), [[SQL]] (1)
> **CLI Commands:** find (3), mysql (1), make (1)
> **Env Vars:** sql (2), dba (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using the code files](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=1)** - [Instructor] Throughout this course I will demonstrate and reinforce the discussion topics using live queries. You can just watch or follow along with me, but even better, pause the video occasionally and experiment for yourself by modifying these queries and coming up with your own to make sure you fully understand what's happening under the covers. I've also included a few mini challenges where I will ask you explicitly to pause the video to answer a short puzzle. Chapters two and five include a challenge video and my detailed suggested solution walkthrough. All the code files can be downloaded from the Courses homepage and use [[Microsoft SQL Server|SQL Server]] syntax unless otherwise noted. These files will be hosted on [[GitHub]] as well and by now you know where you'll find the links. So, that's about it for the introduction. It's time to dive into the rabbit hole of [[SQL]] query logical processing from which there's no going back. But before we dive in, let's quickly see where we're heading by following query processing order. Every query begins with a FROM clause, which constructs the query's dataset. This is the only data that will be available for the [[Representational State Transfer (REST)|rest]] of the query. After the FROM clause produces a single dataset, it is passed on to the WHERE clause as a virtual table and the WHERE clause uses binary and ternary logical predicates to filter out individual rows.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/using-the-code-files?u=76281980&t=94)** The filtered set is then passed on to the GROUP BY clause where it is grouped and from there to the HAVING clause where entire groups can be filtered. The grouped and filtered set is then passed on to the SELECT clause, which evaluates every expression for each row. Then, it is passed on to the ORDER BY clause to apply presentation ordering and finally, the OFFSET [[Fetch]] clause, also known as LIMIT OFFSET, determines which and how many rows will be returned. So without further ado, let's head onto the first step, constructing the source dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[GitHub]] (1), [[SQL]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1)
> **Env Vars:** sql (2), where (2), offset (2), group (1), having (1)
> **SQL:** where (2), group by (1), having (1), select (1), order by (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** coming up (1)
> **Tools:** github (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 1. Constructing Query Source Data Sets

[↑ Back to Table of Contents](#table-of-contents)

#### [Single data source queries](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=1)** - [Instructor] Our journey begins with the first step of every [[SQL]] query, establishing the source data set, the only data that will be used by all subsequent processing phases. So welcome to the FROM Clause. The FROM Clause results in the single data set in the form of a virtual table constructed from one or more sources, and then handed over to the following processing phase. Some [[Databases]], including [[Microsoft SQL Server|SQL Server]], [[PostgreSQL]], [[MySQL]] and others, also support a SELECT without a FROM clause. You can think of a FROM-less SELECT as if it was using a hypothetical FROM clause that consists of a Dummy table containing one row, one column with some arbitrary value. Other databases force us to include an explicit FROM clause, even when it's not really used except as syntactic sugar. SAP HANA decided to literally call this table Dummy. Oracle decided to call it DUAL, and Informix sysdual, but the name doesn't really matter. They all serve the same purpose, to provide our query with a valid source data set to process. What is important is query processing order. First, the FROM clause is evaluated. Only then the resulting data set is passed on to the next processing phase. For this trivial query, it goes straight to the SELECT clause. At this point, the FROM clause is forgotten and no longer used.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=95)** The SELECT clause evaluates each expression for each row of the data set that was handed over to it. Our dummy set had only one row so the resulting set will consist of one row, a single column expression containing our string, and no alias. The FROM clause accepts any source data set that fulfills the following requirements. Source data sets must be uniquely aliased as the query must be able to reference each set unambiguously. Each column within each source data set must uniquely aliased for the same reason, and the source data sets must not be ordered, and we will cover the reasons for that later. Side note, there is no requirement in SQL for neither the source data nor the results to consist of unique rows. This is one of the many aspects of SQL that doesn't agree with a relational model. SQL is a composable language. It allows the FROM clause to use data sets from any source as long as it complies with these rules. We can use a table, a view, a function, or a subquery derived table. The processing of a FROM with just one source is straightforward. The entire source data set is evaluated. The result is then gift wrapped as a virtual table and delivered to the next phase for further processing. This fundamental process will be the same whether our source is a single table or a 500 rows long nightmare
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=191)** with 20-level deep nested tables, views, functions, and subqueries. SELECT * FROM Staff returns all nine staff members. Following execution order, the query begins by evaluating the entire Staff table, passing it on to the SELECT, which will in turn translates the star to all column names and evaluates each one for every row. Now, I want you to try and guess the result of the following query. SELECT 'SQL IS FUN' FROM Staff. Side note, throughout this course, I will ask you to pause and answer puzzles and short questions. So whenever you see this icon, it's time to pause and think. Let's execute the query, and does it make sense? If it doesn't, let me add back the source columns for a minute and execute again. I will say it again: Always follow processing order. First the source data set gets evaluated in the FROM clause. This means that the Staff table gets wrapped in a gift package and handed over to the SELECT clause. The SELECT then evaluates all expressions for each and every row. And this is true whether we use a source column, but it's also true for the string literal SQL IS FUN. Both are evaluated per row of the Staff table.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/single-data-source-queries?u=76281980&t=290)** Does it make more sense now? Frequently, our queries require data that spans multiple sources, thus requiring a JOIN. Most of you have been using JOINs for a long time. It's one of the most fundamental features of SQL. In the next video, we will see how JOINs are processed under the covers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Databases]] (2), [[Microsoft SQL Server|Sql server]] (1), [[PostgreSQL]] (1), [[MySQL]] (1)
> **Env Vars:** select (9), sql (8), fun (2), sap (1), hana (1)
> **SQL:** select (9), join (1)
> **CLI Commands:** make (2), mysql (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Dual source query processing](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=1)** - [Instructor] Every join no matter type, color, gender or race always begins with a Cartesian product. In a Cartesian product, each row from one set is paired with each row from the other. The result set consists of all columns from both sources. If the specified join type is a cross join, processing stops at this point and the Cartesian product is passed on to the next clause. For all other join types, processing continues to the next step qualification. Inner and outer join are called qualified joins. The qualification predicate is specified using the on keyword. The qualification process evaluates each row from the Cartesian product using the predicate. Only rows for which the predicate evaluates to true will live to see another clause. All other rows are eliminated from the set. If the requested join type is an inner join, join processing stops at this point and only the qualified rows are passed on to the next clause. If the requested join type is an outer join, the qualified rows move on to the next step, reservation. Outer joins designate one or both source sets as reserved. Reserved sets get to have all of the rows added to the join results even those that did in past qualification in the previous step.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=94)** A left outer join reserves the set on the left side of the join. Here it is set a so all its rows that failed to qualify are reintroduced back into the join result. Since these rows had no match in set B, there is no value to show for it and in no indicator is used for this inapplicable data. A right outer join reserved the set on the right instead of the one on the left. Here rows from set B that failed qualification will get reintroduced back into the join result. A full outer join simply reserves both sets. Most [[Databases]] support join syntax shortcuts by omitting the inner and outer keywords. I prefer to use the full syntax in my code for improved readability but there's really no harm in omitting them. Some databases support the using keyword instead of specifying the full qualification predicate when the predicate expressions of both sets have the same exposed alias. So, instead of ON A.X = B.X, we can specify using X. Here too, I prefer to spell out the full predicate but there is no real harm in using using but that is not the case with the next shortcut. A natural join allows us to omit the qualification predicates altogether. It assumes the predicate consists of all columns that have the same exposed aliases in both sets
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=188)** and it will construct an equality qualification predicate including each and every one. Avoid using natural join like the plague. It makes the query less readable and less portable but that's not the issue. I have witnessed applications failing miserably with devastating consequences when additional columns were added to the underlying tables and some happened to have the same name. The most common cases had to do with tracking attributes such as modified on, modified by and various Boolean flags such as is deleted, is active, et cetera. These columns were added to the natural join predicate and you can imagine what that did to the query result. So, consider yourself warned. We need to write a query that generates all possible combinations of roles for each staff member. Select star from staff cross join staff roles will return a Cartesian product with every possible combination of each staff member and role. We rarely use explicit Cartesian [[Microsoft Products|products]], although logically, they are the first processing step for all types of joints. Quiz time, what do you think will happen if we replace the cross join with an inner join but use the qualification predicate one equals one. Stop the video for a minute
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=281)** and try to see if you can guess the result. If you followed joint processing order, you got it right. So, let me hammer it in one more time. The first step of every join is a Cartesian product. Then every row from the Cartesian product is evaluated using the qualification predicate. Only rows for which the predicate evaluates to true get to see another clause. In here, all rows from the Cartesian product evaluated to true as the predicate is always true. Therefore, this innocent-looking inner join is in fact a well disguised cross join. While this is not something we would normally do, it demonstrates the processing order nicely. In most cases, we need to match rows based on some common attribute, the qualification. We need to write a query for the animal adoption report including the animals breed and implant chip ID. Side note, the animals table uses name and species as its primary key to uniquely identify each animal. I've already mentioned that I'm an avid advocate of using natural keys wherever possible and avoid the all too ubiquitous and abused surrogate keys such as animal ID. Now, name and species may seem like an odd choice. The reason I chose them as I tried to find the most intuitive and familiar way to identify animals
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=376)** if I was working at that shelter. This means I've decided that this is the business key. This is how staff communicate when trying to reference a specific animal. Back to the adoption report. Looking at the schema, we can see that a joint is required between adoptions and animals to retrieve breed and implant chip ID, the non-key animal attributes. Most of you have written many joins before but this time we're going to follow processing order. And I'll say it once again, every join begins with a Cartesian product. To visualize it, let's write this cross join first where every adoption gets matched with every animal. Now, let's change it to an inner join and provide the qualification predicate. Side note, composite natural keys are somewhat of an inconvenience as we must type multiple predicates instead of just one. I don't find this extra typing to be a really big deal and it makes the query clearer as it is obvious what identifies an animal in our shelter just by looking at the query text. Some query editors will auto complete the predicate so we don't even have to type the whole thing. So, where were we? Inner join, yes. Every row of the Cartesian product gets evaluated using the qualification predicate. Only rows were the predicate evaluates to true will be kept and all others will be discarded. This means that animal rows will be matched
>
> **[7:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=470)** with their respective adoption rows based on the animal's identifying attribute, name and species. Animals that were not adopted were eliminated from the set because they had no matching adoptions. If we want to get these animals back, a third step is needed in which we reserve the animals table. Since animals is on the left side, we must replace the inner join with a left outer join. Now, all rows from the reserved table that failed to qualify meaning the animals that were not adopted will be added to the intermediate set of the rows that did qualify with null indicators for all attributes of the non reserved table. Quiz time again. Let's execute this query and something seems odd. How come we have rows with no animal species and name? Pause the video for a minute and see if you can figure it out. With the inner join query, we retrieved all columns from the adoption table including the animals identifying attributes. For an inner join, it didn't matter where we got these attributes from as only matching rows were returned anyway. These rows had the same value for name and species in both tables. The animals that were reintroduced by the outer join had no match in adoptions and all their adoption attributes are now including the animals name and species.
>
> **[9:29](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dual-source-query-processing?u=76281980&t=569)** So, to fix this issue, all we need to do is retrieve the common attribute from the reserved table. And now we can see that Angel, April and many others were not adopted. Well, not adopted yet, that is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **Analogies:** such as (3), imagine (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Joining multiple source data sets](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=0)** - [Instructor] So far, we've looked at from clauses with one and two source data sets. But often we need to join more than two sources. The easiest way to visualize multi source processing is to look at two sources at a time and work our way down. Think about the result of the join between A and B, as new set, which in turn is joined to C, forming a new intermediate set, which in turn is joined to D and so on. When dealing exclusively with inner joins, the order in which the source data sets are joined does not affect the result. Some [[Databases]] will process multiple inner joins in the same order they are spelled out in the query. Other databases that have smarter cost based query optimizers such as Oracle and [[Microsoft SQL Server|SQL Server]], will estimate and execute these joins in the most efficient order that they see fit, regardless of the order in which they are spelled out in the query. For outer joins, the processing order is critical as it will affect the result and for those we do have an option to explicitly control join order. This is best explained with an example. We need to write a [[SQL]] query for animal adoptions and include information about their adopters. Looking at the schema, we can see that we need to join animals, adoptions, and persons. Since all our joins are inner joins, the join execution order doesn't affect the result.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=94)** It doesn't matter if animals is joined to adoptions first and the result then to persons or if adoptions is joined to persons and only then joined back to animals. The total number of rows will be 70, which is the total number of adoptions we have in our shelter database. But, be very careful as that is not the case with outer joins. Let's say we also need to return animals that were never adopted. We might be tempted to change the first join to a left outer join and designate her majesty, the animals table as the reserve table and this query should return more rows than before as we do have animals that were never adopted. Pause the video for a minute and see if you can guess how many rows are going to be returned. Hint, there are 100 rows in the animals table. Let's execute this query and surprise, only 70 rows again, which means we still don't see animals that were never adopted. Let's break it down following join processing order. The animals table was first outer joined to adoption and at that point it did include all 100 animal rows. We can verify it by omitting the last join and executing again. The problem is that the following join to persons, relies on these attributes for qualification
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=187)** so all the rows with a null for adopter email didn't qualify and were eliminated. And I often see developers overcome this by changing all subsequent joins to outer joins. And it is not uncommon to see a from clause with numerous outer joins which we added just to avoid this unwanted elimination of rows due to the subsequent joins. So, let's try it, execute, and indeed we get 100 rows but while this solution works, I find it to be suboptimal. It makes the query harder to understand and it may also have a nasty performance penalty. Much better is to keep the joins logically correct and to force the join order explicitly to match our requirements. What we need here is for the adopters table to be inner joined to persons first and only then, outer joined to animals. And the way to do that is by encapsulating the inner join between adoptions and persons in parentheses. If we just blindly place the parentheses we will get an error. Pause the video for a minute and see if you can figure out why we get this error. Since the table expressions inside the parentheses will be evaluated first, this forces us to move the join predicate from inside the parentheses to the end.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/joining-multiple-source-data-sets?u=76281980&t=285)** And interestingly, it is not the parentheses that did the trick, it's actually the moving of the on clause. We can safely remove the parentheses and the correct join order will still be maintained. This order of the joins and their respective on clause is called chiastic order. And even though the parentheses are not required to force the order I highly recommend that you keep them and indent the forced join order for clarity. Here is an idea for formatting and indenting a forced join order which I often use. Trivia fact, chiastic order is often used in rhetoric by reversing grammatical structure of successive phrases. Chiasm is frequently used in the Hebrew bible, the New Testament, the Koran, Book of Mormons and many other scriptures. Shakespeare and other classical poets were very fond of it as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1)
> **Env Vars:** sql (2)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Hybrid multi-table join](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-hybrid-multi-table-join?u=76281980&t=0)** - [Instructor] You need to write a query to report all animals and their vaccinations. Animals that have not been vaccinated should be included. The report should include the following attributes, the animal's name, species, breed, and primary color, the vaccination time and the vaccine name, the staff member's first name, last name, and role. The guidelines are to use the minimal number of tables that are required and to use the correct logical join types and force join order as needed. Good luck!

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Hybrid multi-table join](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=0)** - [Instructor] Let's see which tables are required. First, animals and vaccinations are obvious, we also need persons for the address, and staff assignments for the role of the staff member. Because the database uses the same identifier for a person throughout, we don't need any data from staff, which just saved us a whole join. If we were to use the surrogate key, staff ID, which in turn would point to a person ID, we would have no choice but to join staff as well. In my solutions, I always start from the from clause and list tables with inner joins first. Provide aliases, specify the qualification predicate, and now I can list all the select expressions and do a quick sanity test by executing this intermediate query. I also like to add an order by, so I can have immediate visual reference, even though it's not required by the challenge. Let's execute the query, and we're almost there. The only thing missing is to return animals that were never vaccinated. And to do that, we need to reserve the animals table. If I change the inner join to a left outer join, the non-vaccinated animals still don't show up, because the subsequent join to staff assignment is using email, and it will fail, as the vaccinate attribute are all null for the reserved rows. Therefore, I need to force the order so that the outer join will be performed last. And to do that, all I have to do is add parentheses
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-hybrid-multi-table-join?u=76281980&t=97)** around the other joins, which in turn forces me to move the qualifying predicate outside the parentheses. Let's execute it now, and that's about it.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Row Filters

[↑ Back to Table of Contents](#table-of-contents)

#### [Filtering source rows](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=1)** - [Instructor] After the row set got evaluated and finalized in the from clause, it is passed on to the where clause. The where clause evaluates every row using the logical predicates. Only rows for which the predicate evaluates to true will live to see another clause. Rows that do not evaluate to true are discarded. The fact that the where clause is processed after the from clause is a very common cause for confusion regarding filtering with joint qualification predicate versus the where predicate. Look at these two queries, and try to guess whether or not they are equivalent using the content of sets A and B as shown on the slide. Pause the video for a minute, and guess. Let's do it together following processing order. First, a Cartesian product is created, and this is going to be true for both queries. The query on the left uses a composite qualification predicate for matching X values, and A.X larger than one. This composite predicate is evaluated for each row of the Cartesian product, and only the row with both twos evaluates to true. This in turn gets passed on to the select, and returned to the client. The right query's predicate only matches the X values between the sets.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=92)** So both rows with the ones and the twos qualify. The result set will be passed on to the where clause, which evaluates each row for the second predicate, X larger than one. Only at this point, the row with the ones will be eliminated by the where. The remaining row with the twos is passed to the select clause, and returned to the client. While the result of both queries is the same, their logical processing is different, and this distinction is critical. As for outer joins, things get more interesting. Here are the same two queries but this time using the left outer join instead of an inner join. Like before, the first step is a Cartesian product. The left query's composite qualification predicate is evaluated and only the matching rows are kept. Due to the outer join, a reservation step is added in which the rows from A that didn't qualify are reintroduced with the null for the non-reserved column. These two rows are passed to the select clause and returned to the client. The right query's qualification predicate only matches the X values. So here both rows with the ones and the twos qualify. This means that the reservation step finds no unmatched rows to be reintroduced and both rows are passed on to the where clause.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/filtering-source-rows?u=76281980&t=189)** The where evaluates each row for the second predicate, X larger than one. The row with the ones gets eliminated as it evaluates to false. The remaining row with both twos is passed through the select clause and returned to the client. Many smart, experienced developers have fallen for this trap and I can't blame them, as unlike you, the importance of query processing order was never explained to them. Processing of the where clause is simple, but things get more interesting when we need to deal with missing data, which is what the next video is about.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Missing information and ternary logic](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=0)** - [Instructor] In 1970, Dr. Edgar F. Codd published his seminal paper, "A Relational Model of Data for Large Shared Data Banks", in which he introduced his relational model. It soon became apparent that in our less-than-ideal reality, missing data is a pain we must deal with. And only five years later, Codd introduced NULL as an indicator for missing data. In 1979, he further defined the semantics of NULL in his paper paper, "Transactions on [[Databases]]". NULL is one of the most controversial aspects of the relational model and of [[SQL]]. It introduced numerous anomalies and complexities and has been criticized by scholars and data practitioners throughout history. Trivia fact, Chris Date, one of the most highly regarded relational data model experts, a close collaborator of Dr. Codd and an author of key influential books on the relational model says, "NULLs undermine "the entire foundations of the relational model." Although Dr. Codd and others referred to NULL as NULL values, I highly recommend that until you reach Dr. Codd's level of expertise, that you should think of NULLs as being an indicator and not as a value. This distinction will help you tackle its complexities much easier. Zero is a concrete value. An empty string is a valid value. NULL is not a value, it is an indicator
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=95)** to the absence of one. Codd made a clear distinction between two types of missing data. A values and I values representing missing and applicable and missing but inapplicable, respectively. For example, we may not know exactly when our puppy was born. That doesn't mean he doesn't have a birth date. Obviously he does, we just don't know it. This is an applicable, but missing value. Our second puppy is a mongrel. For the mongrel, the breed attribute is inapplicable. It won't ever change, we will never find out its breed. Breed is an irrelevant attribute for this puppy. It's not that we don't know it, it just doesn't exist. Chamberlin and Boyce, the original developers of SQL, decided not to implement this distinction, and so we ended up with only one type of NULL to represent both. With only one type of NULL, SQL implements three valued logic, also known as ternary logic. If they were to implement both types of NULLs as Codd suggested, it would have required a four value or quaternary logic. In our everyday lives, we deal with both binary and ternary logic. If I ask you, are you at work now? Your answer is either yes or no. This is the domain of binary logic where a predicate can evaluate to a logical state
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=190)** of either true or false. Ternary logic adds a third state, an unknown. Let's say you receive two packages, and before you open them, I ask you, is there a book in the small package? Your only honest answer is, I don't know. Using a mathematical equality comparison operator, this question can be written as the predicate, content of small package equals book. The data regarding the content of the package is not available yet. There is something in the box, you hope, you just don't know what it is yet. This is missing, but applicable information. And comparing a known value, a book, to an unknown value, the content of the package is still unknown. Next, I ask you, what's the gender of the large package? You still can't answer this question, but this time for a different reason. The gender attribute is inapplicable to packages, at least to those that I am aware of. This is the missing and inapplicable type of unknown. Next, I ask you, is the content of both packages identical? The predicate is still in a quality comparison, which can be written as content of package one equals content of package two. But the answer is still I don't know. It doesn't matter if both packages are closed, or just one,
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=286)** as comparing two unknowns is still an unknown. All the predicates we used so far were comparison predicates. And it doesn't matter if the comparison is an equality, inequality, larger than, smaller than, or any other mathematical comparison. The same logical principle applies to SQL, and it is enough that one of the operands is unknown for any such comparison to evaluate to an unknown. To deal with this unknown, we obviously can't use comparison predicates, and instead we need to use state predicates. So if I ask you, is it true that you don't know what's in the small package? Now, I'm not using a comparison predicate. I'm using a binary state predicate, which can only evaluate to either true or false. You either know or don't know what's in it. What you see on the slide is the logical evaluation tables for ternary logic. I recommend that you print it out as a cheat sheet and hang it in your workspace for easy reference. Pay special attention to the less intuitive evaluation of true and unknown versus false and unknown, and true, or unknown versus false or unknown. And things get more interesting when we need to negate a condition involving a NULL. We need to write a query that returns all dogs except bull mastiffs.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=379)** We may be tempted to write it literally as select start from animals where species equal dog and breed not equal bull mastiff. And if I execute it, we don't get any non-breed dogs back. And as far as I know, mongrel dogs without a breed are not bull mastiffs. So, how come they don't show up? Pause the video for a minute and see if you can figure it out. The reason is that a NULL for breed represents a non-applicable attribute. But the developers of SQL shows to treat NULLs for the most part as if they were of the applicable but missing type for which this behavior makes sense. If we're looking for persons whose birth date is not January 1st, 2000, we probably don't want to include those with a NULL birthdate. Why? Because this is an applicable but missing value. It may be equal, it may not, we just don't know. Here, it makes sense not to return the rows with NULL for birthdate. But for breed, we know for sure that a dog with a NULL breed is not a bull mastiff. Here, it would make sense for the rows with a NULL breed to be returned. And now you can begin to understand why Dr. Codd wanted to implement two types of NULLs with different semantics.
>
> **[7:53](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/missing-information-and-ternary-logic?u=76281980&t=473)** We will see how SQL solves this anomaly in the next video. Unfortunately, in most databases that I've seen, it was obvious that the designers had little or no concern for NULL constraints and missing data logic in general. In most cases, it had devastating results for data consistency, performance, [[Scalability]] and the mental wellbeing of those who had to deal with it. An overabundance of NULLs is typically a clear indication of fundamental design flaws in the data model. Okay, but enough with the rants. We must deal with NULLs with what we have, and SQL is the best we have so let's see how to deal with this NULL mess.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Databases]] (2), [[Scalability]] (1)
> **Env Vars:** null (16), sql (7)
> **Definitions:** is an  (5), is a  (4), known as (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Dealing with ternary logic in SQL](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=0)** - Most [[SQL]] developers struggle at first with ternary logic. To list all non-breed animals, we might be tempted to use a comparison predicate breed equals null. By now we know that every comparison operation involving nulls always evaluates to a null, so now we understand why these queries return an empty set, regardless if you use equality, non-equality, or any other mathematical comparison. Even a composite filter where a breed is equal to null or not equal to null returns an empty set. And intuitively it should return all animals, right? Even more confusing is that a predicate looking for all animals, which are a bull mastiff or all those that are not a bull mastiff doesn't return non-breed animals. All this is counter-intuitive for our humble, limited human brains. We expect all animals to be returned if they either equal something or not equal the same thing. But it doesn't work that way with ternary logic. Most of you probably know that in order to filter for non-breed animals, we need to use the state predicate IS NULL, or it's negative form, IS NOT NULL. This is a fundamentally different question than does this animal breed equal null. The IS NULL predicate can be translated to English as is it true that this animal's breed
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=93)** is unknown or inapplicable? State predicates can evaluate to either true or false but never to a null. Back to the bull mastiffs. So, how do we go about filtering for animals that are not bull mastiffs without eliminating all the breed ones? Most often I see developers just add another predicate, or breed is null. While it does give us the desired result, it is too verbose and maybe confusing to less experienced developers. If you're using [[Microsoft SQL Server|SQL Server]], Oracle, [[MySQL]], and most other [[Databases]], we're out of luck. We have no choice but to add the additional predicate like this one or some other creative ideas, such as adding an ISNULL conditional function. The ANSI SQL standard does offer elegant predicate operators that come to the rescue. The first one is called a distinct predicate, and it is spelled is or is not distinct from. The idea here is that different values are distinct from themselves and from nulls, but one null is not distinct from another null even though it's not equal. Therefore, breed is distinct from bull mastiff will return all animals that are not bull mastiffs and will include those with a null breed. Another very elegant feature of the SQL standard is called a truth test.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-ternary-logic-in-sql?u=76281980&t=188)** A truth test is a logical operator that tests the result of another predicate. It is spelled is or is not true, false, or unknown. Select star from animals where breed equals bull mastiff is not true will evaluate to true only if the predicate in parenthesis is either false or unknown, and it will evaluate to false when the predicate is true. Mind blowing ternary logic. Unfortunately, among the mainstream databases, both distinct predicates and truth tests are currently implemented by only post-square SQL. Hopefully, others will follow soon. These are extremely useful and cool feature which could make our code so much more readable and elegant. And by the way, I opened the boxes from the previous slide, and this is what I found inside.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Databases]] (2), [[Microsoft SQL Server|Sql server]] (1), [[MySQL]] (1)
> **Env Vars:** sql (5), null (3), isnull (1), ansi (1)
> **Definitions:** is a  (2), is called (2)
> **CLI Commands:** mysql (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - most (1)


### 3. Grouping

[↑ Back to Table of Contents](#table-of-contents)

#### [Grouping](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=1)** - [Instructor] In a properly designed relational database, every table represents a single relation or a thing in the real world, and every row represents an instance of that thing. Animals, persons, staff and vaccines, all hold the granular attributes or facts about each one of these things. The from clause processed one or more of these sources and passed them to the where clause. The where clause evaluated each row using predicates. In both clauses, processing was of the individual rows but sometimes it's not these details that we're after. Instead we need to answer higher level questions for which grouping comes in handy. Let's quickly revisit the basics. Here is a group of animals. Each animal is represented as a row in a table. If I asked you for the name of all cats, you would need to evaluate each animal row using the predicate Species equal Cat. Only Felix and Calvin's row evaluate to true so the answer to that question would be both their rows. This is what I mean by the from and the where clauses processing individual rows. Nothing new thus far. But what if I asked, how many animals are in the photo? To answer this question, we can no longer treat each animal's row individually. Instead we must treat all animal rows
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=95)** as a single group and a quick count comes up with the correct answer: nine. Let's emphasize the fundamental difference between these two types of queries again. The first one dealt with individual source rows and the result was made up of these individual source rows as well. The second question dealt with a whole set as a single group. Therefore, the answer was just a single value in a single row for the entire group. Remember this logical distinction, it's going to come in very handy soon. Select star from Adoptions returns all 70 adoption rows. To count how many animals were adopted, we can replace the star with the grouped aggregate count star function, which this time returns a single answer row. Processing order is the same. The adoption table was evaluated in the from clause and then passed on to the select. Since the second query treats the whole set as a single group, we can no longer refer to expressions from the individual source rows. It doesn't make sense to retrieve both the details and the high level aggregates at the same time as there are multiple source rows but only one answer row. Adding name to the select list results in an error. The database is telling me that my query doesn't make sense. We can't ask for the details on one hand
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=189)** and the higher level aggregate at the same time. I'll dare say that anyone who ever wrote a [[SQL]] group by has encountered these types of errors, and many accept it at face value without understanding the fundamental reason for it. And we are here to get to the bottom of it. I'll say it again. It is critical to understand and remember that whenever we leave the individual source rows behind and group them, we lose access to the original row details. And this is true whether we treat the whole table as a single group, like in the previous query, or if we group rows by some common denominator using the group by clause. So instead of counting how many animals we have in total, let's say we need to count how many animals we have of each species. To do that, we need to tell the database that we want to treat each species as a separate group by specifying group by species. You've probably used group by many times before but this time we are going to follow query processing order. First, the Animals table gets evaluated in the from clause. It is then passed on to the next clause, the group by. The group by looks at all rows and marks them for grouping based on the grouping expression, in this case species. At this point, something interesting happens. This set is transformed from its normal
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=285)** table-like shape into this hybrid grouped structure, where each group of unique specie values corresponds to a single output row. The only value that is guaranteed to be the same for all rows within a group is the value of the group by expressions. Instead of nine source rows we are now dealing with three row groups, and this funny-looking set is now passed on to the select clause. All select expressions are evaluated like before but instead of being evaluated per row, now they are evaluated per group. We got three rows with the correct counts but without the group identifier they won't make much sense. So let's add it back to the select list, and now it makes more sense. We can see the species, the group identifier alongside the animal count, the aggregate function of the group. It only made sense because species is the group by expression. It is the group identifier which is guaranteed to have the same value for all rows within the group. And what do you think will happen if we add name to the select list? Pause the video for a minute and see if you can figure it out. You got it! The query doesn't make sense and will return an error.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=378)** Unlike species, which had only one value for each group, name can have many different values. Since the output consists of just one row per group, which cat name should be returned, Felix or Calvin? The only way to guarantee that non-grouping expressions will return a single value for each group is to encapsulate them in an aggregate function. And in fact, this is the definition of an aggregate function. It takes in a set of elements and aggregates them to return just one. Max name is a valid expression and by default, the max function over a set of strings will pick the one with the highest dictionary sort order by most [[Databases]]. Here, these are Felix, Winston and Milly. This is another aspect of SQL where I often see smart and experienced developers failing to realize why they get these types of errors. Memorize this rule and save yourself many hours of frustration. After the group by has had its way with the set, the only expressions that can be referenced directly are the grouping expressions which are guaranteed to have only one value for a group, or other expressions must be encapsulated in an aggregate function. Let's see a code example. The Vaccinations table stores all animal vaccinations.
>
> **[7:50](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=470)** To see how many vaccinations our shelter has performed for each species, we can't treat the entire table as a single set and instead we need to instruct the database to return a separate row for each species, and this is what the group by clause is for. So all the rows that share the same value for species will be treated as a group. To calculate how many vaccinations each animal has received, we need to treat the set of rows for each animal as a group, not just species. The identifier of an animal are name and species so grouping by this set of attributes will group all rows for each animal and the count will return the number of vaccinations per animal. And I will say it once again. After the group by we can no longer reference any expression, which is not part of the group by expressions, without an aggregate function. Adding Vaccine to the select list will naturally result in an error. It doesn't make sense as it may have many values for each animal. And after the group by, the set consists of just one row per group. We're not going to cover all the different aggregate functions and their subtle flavors in this course. There are far too many of those and this course is focused on the processing foundations rather than the syntax and details. So check the documentation of your database of choice to see what functions are supported
>
> **[9:22](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/grouping?u=76281980&t=562)** and how their syntax works. I really hope you didn't think we're done with nulls yet because nothing could be further from the truth. Nulls have their special way of inspiring complexity for every aspect of SQL and grouping is no exception.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Databases]] (1)
> **CLI Commands:** make (5), cat (2)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Dealing with NULLs and elimination duplicates](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=0)** - [Instructor] Grouping of nullable expressions treats all nulls as a single group. And if you find this confusing you're in very good company. Just in the previous chapter I told you that one null is never equal to another null. So how come they are treated in a single group? Well, it wouldn't be very useful to create a group for each row with a null. Therefore grouping is based on values that are distinct from each other, not ones that are mathematically equal. Remember that even though nulls are not equal a null is not distinct from another. With a few exceptions aggregate functions ignore nulls altogether. And this makes sense as the aggregate can only rely on known values when reporting max, min, sum, and even count of an explicit expression. Count star is a special aggregate function that counts the number of rows per group. It doesn't reference or cares about any specific expression value. Therefore nulls are irrelevant to it. There are other expressions such as [[JSON]] array aggregate functions which need to maintain the null representation and each database has its own. So again, check the documentation for your database of choice. Let's see how many animals we have for each species and breed. Imagine how useful this result would be. Instead of having one group for all known breed cats we would get a row for each one with a count of one.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=97)** Now imagine a table with 68 million rows with a null. To see how many people were born in the same year we need to group by their birth year. Now constant expressions are exempt from aggregate functions as being constant they have the same value for all rows. To show their age instead of their year born we can use the current timestamp function to calculate their age. People who refused to disclose their age will be grouped together as expected. In chapter two I mentioned that [[SQL]] allows for duplicate rows in a set which makes it a multi-set or a bag. Returning duplicate rows isn't very useful as we can't tell them apart. And group by is an obvious way to eliminate duplicates by grouping source rows on the unique set of attributes that we are interested in regardless of whether we need to use aggregate functions or not. Another way most of you are familiar with is to add a distinct set quantifier to the select clause. And this similarity between distinct and group by is not accidental. And it has some implications which we are going to encounter later when we deal with row ordering. But for now let's see another short demo. We need to write a query that returns all animals that have been vaccinated. There are a few options to do that and we might be tempted to try something
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=189)** like select species and name from vaccinations only to quickly realize that we get multiple duplicate rows for the same animal, one per vaccination. Adding group by species and name will group all vaccinations of an animal into a single output row effectively returning every animal once, even if we don't want to use any aggregate functions. The distinct set quantifier achieves a similar result. The difference is that group by provides the benefit of using aggregate functions which is not possible with distinct. Pause the video for a minute and try to figure out why we cannot use aggregate functions with distinct. And yet again the reason is query processing order. The distinct takes place after all select expressions have been evaluated. And aggragations don't make sense if the source rows are not grouped beforehand. So let's try to execute it and see. Hmm, now this is interesting. We get error 8120 again even though we don't have a group by clause. So what's going on? Pause the video again and try to figure it out. If you realized that due to the count star the database treats the entire set as a single group you are correct.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/dealing-with-nulls-and-elimination-duplicates?u=76281980&t=284)** If the whole table is a single group which is the only way that the count star makes sense in this context, then species and name without an aggregate function are invalid expressions. Let's go back to the group by query and remove name from the select list but not from the group by clause. Now another interesting phenomenon occurs. Let me just add an order by so it's easier to visualize what we're dealing with here and once again pause the video for a minute and try to see what's going on. The group by still returns one row per unique animal but the select list without the name doesn't show this attribute which causes the set to have duplicate rows. And what do you think will happen if we now go crazy and add distinct to this grouped query? Pause the video for a minute and see if you can figure it out. So adding distinct to the mix got rid of some of these duplicates but only for animals of the same species that also happen to have the same number of vaccination. The distinct is applied to all select list expressions including the count star. And while this is not something we would normally do it demonstrates the implication of execution order quite nicely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[SQL]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** imagine (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** json (1), sql (1)
> **Cross-References:** previous chapter (1), go back to (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Group filters](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=0)** - [Instructor] After the GROUP BY had its way, the group set is passed on to the HAVING clause. HAVING is very similar to the WHERE clause in the sense that both consist of logical predicates, and both discard elements for which the predicate does not evaluate to true. The difference between WHERE and HAVING is their location in query processing order. When they take place, and consequently the type of elements they can filter. The WHERE filter was applied right after the FROM clause, so is only had access to the source rows. The HAVING clause is processed after the GROUP BY, so it can no longer refer to individual rows, only to row groups. So HAVING can use aggregate functions for its predicate, something we couldn't do in the WHERE clause before the groups were formed. A row group, for which the HAVING predicate does not evaluate to true, will be discarded. A less known fact is that we can use non-aggregate expressions as predicates for HAVING, as long as we comply with the grouping rules we discussed earlier. To find out how many potential hoarders our shelter serves, we can use the following query. Email is a person's identifier, so a GROUP BY email and account gives us the answer. Most people adopt just one animal. Some have adopted more than one, such as Virginia and Wayne, who adopted four animals each.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=97)** To see all persons who adopted more than one animal, we need to filter for groups for which the row count is larger than one. Trying to do so in the WHERE clause leads to the expected error, "An aggregate may not appear "in the where clause," and now you know exactly why that is. Moving it to the HAVING clause works as expected, and returns our list of potential hoarders. The HAVING clause is not limited to using just aggregate functions. We can use any valid predicate with or without aggregates, but the emphasis is on valid. Nothing prevents us from using a non-aggregate predicate, such as filtering out all adopters who have Gmail accounts. Well, nothing other than common sense. Pause the video for a minute, and see why this might not be a great idea, even if the query is valid. Query processing order to the rescue once again. It doesn't make sense to let the GROUP BY process all adopters, including those with a Gmail account, only to remove them immediately after. Although the database's optimizer may identify this and perform the filter before the GROUP BY, why rely on it when we can explicitly filter out in the WHERE, and guarantee that the GROUP BY will have less work. Remember that the HAVING clause takes place after the GROUP BY.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/group-filters?u=76281980&t=189)** Therefore, the grouping rules we discussed earlier for the select apply here as well. Trying to reference adoption date will result in the familiar error, "Column is invalid "in the HAVING clause because it is not contained "in an aggregate function," et cetera, et cetera. Exactly like we saw previously with the select list and for the exact same reasons. Processing order is king.

> [!info]- Semantic Content
>
> **SQL:** having (11), group by (7), where (6)
> **Env Vars:** having (11), group (7), where (6)
> **Analogies:** such as (2), similar to (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we discussed (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Filtering and grouped query](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/challenge-filtering-and-grouped-query?u=76281980&t=1)** - [Narrator] You need to write a query to report animals and the number of vaccinations each has received. You need to include animals that were never vaccinated but exclude all rabbits, all rabies vaccinations, and all animals that were last vaccinated on or later than October 1st, 2019. The report should return the following attributes. The animal's name, species, primary color and breed. The number of vaccinations that the animal has received. And obviously with zero for animals that were never vaccinated. Your guidelines are to use the minimal number of tables that are required, use the correct logical join types and force order if needed, and use the correct logical group by expressions. Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Solution: Grouped query with Distinct](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=1)** - [Instructor] Like before, I always start with a from clause and first join all the tables I think I'll need with an inner join as a starting point, alias them, add the qualification predicate and execute a quick select star, just to make sure I didn't miss anything obvious and that the query executes. Since I need to include animals that were never vaccinated, I'll change the join to a left outer and now I'll also add an order by for good measures and execute it again. I know we have animals that were not vaccinated so it's a good idea to make sure I can see some rows with no for vaccination attributes and it looks good so far. Now I can attend to the select expressions and start with the ones I already have available. From the animals table, I can get name, species, primary color and breed. And from the vaccination table, I can get vaccine. Now we can move on to the grouping. I know we need to return one row per animal so our group by expressions are the animals' identifying attributes, species and name. Now I must go back and revisit the select to make sure these are the only attributes that are referenced directly and try to figure out what to do with the others. Primary color and breed are functionally dependent on name and species. This means that every animal is guaranteed
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=94)** to always have the same color and the same breed values for all rows that were generated from the join with vaccinations. This is common sense but we still must follow grouping rules. So now I have two options. I can either add these attributes to the group by expression or use a dummy aggregate function such as min or max to make the query syntactically valid. It doesn't matter which function I'll use since I know that both will return the same value, the only breed and color of that animal. The challenge guidelines stated that I should use the correct logical grouping expressions, so I'll encapsulate both color and breed with the max function. Remember to add an alias as the function eliminated it. I also like to add a comment when I put dummy aggregates for the next person who will read the query. As for vaccine, I need to count the number of vaccinations. Here, I must be very careful which type of count function to use. My options are either count star or count vaccine. When I'm not sure about which function to use, I like to add both and see if there is a difference and what that difference is. Often it will immediately clarify the issue and everything becomes obvious. So let's try to add both an execute and I see that for rows where the count vaccine was larger than zero,
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=188)** the count star returned the exact same result. However, for animals that were never vaccinated, the count star returned a one and the count vaccine returned the correct result, zero. The reason is that we used the outer join to reserve animals that were never vaccinated and the count star counts the number of rows within each animal group regardless if their vaccine is a null resulting from the outer join or an actual vaccination event. I can safely remove the wrong count star and move on. We only have a few exclusions left to handle. All rabbits, all rabies vaccinations, and all animals who were last vaccinated in October 2019. To exclude all rabbits, I will add a where clause with a predicate species different than rabbit. There are no null concerns as species is part of the animal's identifier so it cannot be null. To exclude rabies vaccinations, I need to be more careful. Let's see what happens if I just add another predicate to the where. And vaccine not equal rabies. Instead of the expected, 87 animal rows except rabbits, I now get only 40 and none of them with zero vaccinations. The reason is that all animals that were never vaccinated had a null for vaccine and the new predicate evaluated to unknown for all of them so they were eliminated from the result.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=282)** This is not what I need, so let's handle the null. If I was using [[PostgreSQL]], I would use is distinct from, but since I'm using [[Microsoft SQL Server|SQL Server]], I have no choice but to add another predicate to be able to keep the non-vaccinated animals. Lastly, I need to exclude animals that were last vaccinated on or after October 1st, 2019. I should be careful here too. If I try to add a predicate to the where clause and vaccination time is smaller than October 1st, 2019, it will eliminate only individual vaccinations that happened after that date but not the animal itself if it had any vaccinations done before that. The challenge requirements are to eliminate the animal altogether and for that, I must using the having clause, which takes place after the grouping. Since the challenge requirements are to exclude animals that were last vaccinated on or after October 1st, 2019, I'll add the predicate, having max vaccination times smaller than 2019, October 1st. Let's execute it but something is wrong again. Once again, not a single animal with zero vaccination. Nulls raise their ugly heads again. Same as with the rabies predicate, the max vaccination time will be null for animals that were never vaccinated.
>
> **[6:17](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/solution-grouped-query-with-distinct?u=76281980&t=377)** So I must handle it explicitly here too. Adding or max vaccination time is null will take care of it. And with that, the solution is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** sql (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 4. Ordering and Paging

[↑ Back to Table of Contents](#table-of-contents)

#### [Presentation ordering in multitier architecture](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=0)** - [Instructor] The final processing phases of the query deal with presentation ordering and the ability to limit the size of the result set. Before we dive into the specifics of order processing, I would like to spend a few minutes on why I believe that in most cases it doesn't make sense to perform ordering in the database at all. In a multi-tier application the responsibilities of the entire application stack are physically and logically separated, with each tier having well defined responsibilities and boundaries. Communication between tiers are performed over well defined APIs. The data tier consists of the persistence mechanisms and the data access layer. The application tier processes data to and from the presentation tier, perform logic transformations, and enforces business roles. The presentation tier is what the users see and interact with. This separation of duties is critical for avoiding evil dependencies which would prohibit replacing any single tier when a better suited technology becomes available. In an ideal world, we could just pop in a completely new tier without changing a single line of code in any of the other tiers. Yeah I know, wishful thinking. The ordering of the data for presentation purposes is the sole responsibility of the presentation tier. Would you consider formatting fonts, text boxes, colors, frames and pull down menu styles in the database?
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=98)** If this makes you shiver, as it should, then why should presentation ordering be handled by the database? The answer is that it shouldn't. So, you might be wondering why this is such a ubiquitous practice? And, this is my own personal opinion and experience, but they have taught me that in many cases this is done only due to short term convenience. Developers need to write the [[SQL]] queries anyway. So, why bother with additional code for sorting in the presentation tier when SQL provides such an easy and convenient way of ordering. Unfortunately long term consideration and holistic thinking are seldom the main driver for developers working on tight schedules and budgets. Moreover, with a median tenure for workers in IT being somewhere around three years, the price for this temporary convenience is often paid by their successors. And, this is true not only for presentation ordering. SQL happens to be such convenient language that I often see developers enforce business rules in the database as well. And this is a much worse practice with dire consequences but covering it would require a whole course. So, I'll digress. With that out of the way, and since SQL does provide sorting functionality and because it's so widely used,
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/presentation-ordering-in-multitier-architecture?u=76281980&t=194)** let's see how it's processed and when it may make sense to sort in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** sql (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Ordering result sets](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=0)** - [Instructor] I'm sure that by now you've had enough of hearing me say this, but I'm going to say it again anyway. Sets have no order. In the relational model, neither the attributes nor the tuples have any order. Their [[SQL]] counterparts, rows and columns, were not so lucky. SQL supports ordering of both rows and of referencing expressions by their ordinal position. First, let's get expression order out of the way. Most [[Databases]] support referencing select list expressions using their ordinal position as they are listed from left to right. Theoretically the select clause is evaluated after the having clause, and no previous clauses should be aware of these positions. And [[Microsoft SQL Server|SQL server]] does follow this logical order, and allows referencing expressions by position only after they are evaluated, meaning it is only allowed in the order by clause, the only clause that follows the select. Other databases include the [[MySQL]] and [[PostgreSQL]] allow us to reference expressions by position even in clauses that logically precede the select such as the group by clause. But I really hope that none of you think that order by two comma five comma one has any advantage over specifying the attribute names, species, breed, and name.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=93)** The only thing we might save are a few keystrokes, and if we are using a reasonable IDE with auto-complete, then you're saving very little. Specifying the explicit aliases is much clearer and readable and we can immediately tell what the sorting expressions are without starting to count and follow the relative positions in the list. I hope you agree with me that it makes no sense so I'm going to leave it at that and trust that you will always specify the full alias. Let's move on to row order. Once an order has been applied to a set, it ceases to be a set and its new status deserves public shaming with the name cursor as we move into the realm of row by row operations also known as the dark side of SQL. Once all select list expressions have been evaluated and the result set is formed, it is passed on to the order by clause where it is sorted according to the sorting expressions. Most databases allow for sorting by expressions that are not part of the select list and SQL server is among them. Here is a query that lists all adoptions sorted by an adoption date in descending order. Removing adoption date from the select list doesn't prevent us from using it in the order by even though in most cases it doesn't make sense. Remember that ordering is meant to improve readability
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=188)** by the application users. And if the rows are ordered by an invisible expression, the order appears to be random. Even if you do decide to do so, be aware that throwing in a distinct to the mix, has some interesting logical implications. Look at the following query and guess what will happen when we execute it. Pause the video for a minute and guess the result. This query is not valid and attempting to execute it results in an error. Order by items must appear in the select list if select distinct is specified. Can you see why that is? If not, review video two of the grouping chapter once again. The one we discussed, group by verses distinct for eliminating duplicates. Adding distinct effectively groups by all select expressions. And duplicate rows will be grouped into one. The grouping is done only for the select list expression, so any other expression may have multiple values for each group. This is exactly the same logical reason that we couldn't reference any expression which was not part of the group by without an aggregate function. In trying to order rows, which in fact are row groups because of the distinct, doesn't make any sense.
>
> **[4:43](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=283)** Each group of rows may have more than one adoption date for each animal if the animal was adopted, returned, and adopted again. As long as our sorting expressions are unique, there is no ambiguity regarding the ordinal position of each row. If these sorting expressions are not unique, we have to deal with sorting of tied row. When two or more rows share the same sorting value, the database may return those in any order that it sees fit, and it would still count as a valid correct result. To save yourself grief, always treat presentation order of tied rows as if it was completely random and indeterministic. We may get a different result when we execute the same query again, even on the same exact underlying data. Now usually it's not a big deal, just something to be aware of. If we absolutely need to make sure that the query results are deterministic, we must add tiebreaker expressions to the order by clause. A tiebreaker is an additional sorting expression which determines the sorting order of the rows for rows which all the other expressions are type. Select star from animals, order by species, is guaranteed to return the cats first, followed by dogs and the rabbits last. There is no guarantee which cat will be sorted first and this may change from execution to the next.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=380)** Adding name, which together with species is the identifier of an animal guarantees that the query will be deterministic and there can be no ambiguity to what the correct result is. Same is true if we order just by implant chip ID, which is also a unique attribute, but this might make less sense for our users. But what about queries without an order by? In what order will they return the results? If you think there is one, you should think again. There are many myths regarding ordering of queries without an order by by different databases that have been around since forever. And I still see developers that believe that even without an order by clause their database of choice will return the rows in some sort of index order or physical storage order or whatever other creative idea. And this is false. I've seen applications fail miserably because of such assumptions. If we need rows sorted, we must use order by. Now, no chapter in this course would be complete without them, and yet again nulls raise their heads for sorting as well. Null, not being a value, doesn't make sense for sorting. It can't be compared to a value, so we can't tell if it is higher or lower than any other value.
>
> **[7:56](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/ordering-result-sets?u=76281980&t=476)** Unfortunately the ANSI SQL standard doesn't specify any rules regarding ordering of nulls. So different databases chose to treat them differently. SQL server and MySQL treat nulls as if they had the lowest sorting value, which means that nulls will appear first when sorting with ascending order and last when sorting with descending. PostgreSQL and Oracle treat them the other way around. However, the latter do support explicit null ordering using the nulls first and nulls last keywords. First and last will be respected always regardless if we use descending or ascending sort order. Check the documentation if you're interested in that sort of thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[SQL]] (4), [[Microsoft SQL Server|Sql server]] (3), [[MySQL]] (2), [[PostgreSQL]] (2)
> **Env Vars:** sql (7), ide (1), ansi (1)
> **CLI Commands:** make (5), mysql (2), cat (1)
> **Definitions:** known as (1), is a  (1), is an  (1), means that (1)
> **Warnings:** be aware (3)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)

#### [Paging result sets](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=0)** - [Instructor] Paging, or pagination is the process of separating large row sets into smaller, disgestable chunks known as pages. Now, theoretically, this task is also the sole responsibility of the presentation tier and not that of the database. But as Albert Einstein once said, "In theory, theory and practice are the same. "In practice, they are not." Overloading the calling application or the middle tier with huge and potentially unused datasets may not always be the best course of action. So for paging purposes, I will take off my purist hat for a minute and consent that it does make sense to perform this task much closer to the data, and [[SQL]] is as close as it gets. Paging doesn't make sense without an order by, and in most [[Databases]], they are inseparable. [[Microsoft SQL Server|SQL Server]] and Sybase support a proprietary non-ANSI compliant operator called Top, which is not strongly tied to an order by. So we can issue a query, such as select top three star from animals, even without an order by. But except for sampling data for a quick reference, this is not very useful, as there is no guarantee which three rows will be returned. Adding a non-unique order by expression,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=94)** such as primary color, doesn't make things much better. We will get three black animals, as B has the lowest dictionary sorting order of all colors, but there is no guarantee which ones. SQL server is the only mainstream database that supports the verbose ANSI SQL standard syntax for paging. Offset X rows, [[Fetch]] next Y rows only. Most other databases support a similar, though non-ANSI compliant, syntax of limit X, offset Y. Both achieve the same result of limiting the size of the row set and allow for an offset value so we can retrieve the next or previous page. There's nothing interesting or complex about paging in SQL, so I won't waste our valuable time. What is important is that determinism may be critical for paging, as failing to guarantee it may cause rows to be completely missed or appear on more than one page if it so happens that a database decides to change the order of tied rows between retrieval of one page and the next. A limitation of current paging in SQL is the fact that presentation ordering and the ordering which is used to determine paging are the same. For example, we cannot page rows based on admission date, but order them from presentation by species and breed within each page.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/paging-result-sets?u=76281980&t=187)** It would've been nice if we could separate the two, something along the lines of fetch next three rows only using admission date descending, as an independent sorting clause. And with that, we have completed our adventure of the most common query processing aspects of SQL. In the next video, we will review the course and wrap up. I suggest that you do not skip the next video, even if your brain is overloaded now. I promise you, it's going to be very short.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Databases]] (2), [[Microsoft SQL Server|Sql server]] (2), [[Fetch]] (2)
> **Env Vars:** sql (7), ansi (3)
> **CLI Commands:** make (3)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course review and takeaway](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=1)** - [Instructor] We started our query processing adventure less than two hours ago, with me making some wild claims and promises about this course. I hope you found our time together worthwhile. We started at the same place the database engine begins processing of every query, the FROM clause. We saw how to use single and multiple source datasets and how the different types of joins are processed. We learned how [[SQL]] handles missing data and the intricacies of ternary logic. We saw why the processing order of join qualification predicates versus the WHERE row filter is so critical. That was a fun chapter. Well, at least for me it was. We followed the datasets path to the GROUP BY clause, where it was transformed beyond recognition. We realized why it introduces limitation as to what can and can't be referenced from that point on, and to the role of aggregate functions. You might have noticed that there was no dedicated chapter for the SELECT expressions, but we covered most of its processing aspects as we reviewed the examples for the other clauses. From there, we stepped outside the relational model boundaries and into the dark side of SQL, where ordering and paging reign. As I said at least once, this course was mandatory as it laid down the foundation you must have in order to further advance your SQL skills. There are many more aspects of query processing. Sub-query processing, lateral derived tables,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=95)** cursors, ordered set functions, window functions, common table expressions, recursive common table expressions, the all-at-once principal, and even futuristic features such as row pattern recognition, polymorphic table functions, and much, much more. [[LinkedIn]] is an amazing learning platform, and there are so many additional courses you can take here. I recommend that you choose carefully, and look for the ones that focus on the foundational knowledge, theory, and understanding of the subject matter, rather than the ones that promise instant results. Now, don't get me wrong, there's nothing bad with learning how to get your hands dirty quickly as a starting point. But I see way too many SQL developers that simply stay stuck at that level for the [[Representational State Transfer (REST)|rest]] of their SQL careers. Don't be tempted by the quick solutions, not for SQL and not for life in general. There's way too much of that going on. If you're serious about your SQL career, I recommend that you bite the bullet and spend the time that is required to master the forefather of SQL, the relational data model. It's not an easy subject, and that's an understatement, but on the other hand, I can't overstate the importance of understanding the foundations on which SQL is built. Do that, and you will stand out from the crowd of script kiddies and stack overflow copy paste experts. You see, even in this Adobe stock image,
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/course-review-and-takeaway?u=76281980&t=193)** every single table has a table name underscore ID for its key. And it's not just this one, it's every single database schema image that I could find. You will know better than that once you really understand what a key represents in the relational model, and this is just one small example. I promise you, the relational model will blow your mind once you get to know it intimately. Dr. Codd was a true genius, make sure you read his book and his articles. I can also recommend the works of Chris Day, to Joe Celco, David McGovern, Fabian Pascal, and Hugh Darwin, just to name a few. I will provide some links in the code files for this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (9), where (1), group (1), select (1)
> **SQL:** where (1), group by (1), select (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we covered (1)
> **Documentation:** stack overflow (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### [Feedback and additional resources](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-logical-query-processing-part-1/feedback-and-additional-resources?u=76281980&t=0)** - [Instructor] What is important is how do you feel about this course? Did it meet your expectations? Was there any part where you wished for some more? Any topics that you found boring or trivial? Do you have anything to add? Or maybe you even disagree with something I said? All feedback is fair game and I would love to hear from you. It's the only way I can improve and get better for future students. So, I invite you to rank this course honestly, and even better, I will highly appreciate it if you take a few minutes and provide more detailed feedback than just a score. You can use the Q&A tab on the courses page to ask questions, provide feedback, or you can look me up here on [[LinkedIn]] and connect. But when you do, please add a personal message to your connection request. The human brain works in mysterious ways. It's a complex neural network and learning triggers new neural pathways and memories. But these pathways are very volatile, and without practice, they will soon fade away. Studies show that in one hour, you will forget about 50% of what you now remember, 70% will be lost tomorrow, and 90% within a week. To make sure your efforts are not in vain, you must do four things, practice, practice, practice, and keep learning more [[SQL]]. And on that positive note, it is time to say farewell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[SQL]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


## Instructor

- [[Ami Levin]]

## Resources

- Exercise files available

## Skills Covered

- Database Queries
- SQL

## Path Context

### In [[Master SQL Development]]
← [[Top Five Things To Know In Advanced Sql]] | **2 of 8** | [[Advanced SQL- Logical Query Processing, Part 2]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[SQL Practice- Intermediate Queries]] — SQL, Database Queries
- [[Level Up- Advanced SQL]] — SQL, Database Queries
- [[SQL Queries Made Easy]] — SQL, Database Queries
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL

---

[↑ Back to top](#)