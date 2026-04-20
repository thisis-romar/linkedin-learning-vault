---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-for-data-scientists-13972889
url: "https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889"
duration_minutes: 150
duration: 2h 30m
level: Advanced
updated: 5/27/2021
learners: 70428
skills:
  - Data Analysis
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGQCYHPT8oZGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621968587563?e=2147483647&amp;v=beta&amp;t=ZVs4_6wN_VLODDTn_8fVrL1C6b0pLj6l_V3wW4H2BHQ"
linkedin_topic: Data Science
learning_paths:
  - Master SQL Development
  - Master SQL for Data Science
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-analysis
  - skill/sql
status: not-started
created: 2026-04-19
---

![Advanced SQL for Data Scientists](https://media.licdn.com/dms/image/v2/C560DAQGQCYHPT8oZGA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621968587563?e=2147483647&amp;v=beta&amp;t=ZVs4_6wN_VLODDTn_8fVrL1C6b0pLj6l_V3wW4H2BHQ)

# Advanced SQL for Data Scientists

> Many data scientists know how to work with SQL—the industry-standard language for data analysis. But as data sizes grow, you need to know how to do more than simply read and write from a database. This course provides a more sophisticated approach to designing data models and optimizing queries in SQL. Instructor Dan Sullivan begins with the logical and physical design of tables—with particular fo

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889) | 2h 30m | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Dan Sullivan]]

## Resources

- Exercise files available

## Skills Covered

- Data Analysis
- SQL

## Table of Contents

### Introduction

#### Advanced SQL techniques for data science
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=0)** - [Dan] Welcome to this course on Advanced SQL for Data Scientists.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=3)** In this course, we'll go beyond writing complex select statements to learning how to design performant data models using denormalization and read replicas.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=12)** We'll review how and when to use various types of indexes, including GiST and GIN indexes, which we use for composite data types.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=19)** Next, we'll move on to see how to optimize queries by analyzing query execution plans.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=25)** SQL is extensible, so we'll spend time learning how to create user defined functions that can streamline working with SQL for data science.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=32)** We'll also see how to take advantage of specialized features for working with JSON, as well as specialized data types for tree structures that can provide an order of magnitude speed up over conventional hierarchical queries based on recursive common table expressions.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/advanced-sql-techniques-for-data-science?u=76281980&t=47)** So let's get started and learn some Advanced SQL for Data Science.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), gin (1), json (1)
> **Code Keywords:** let (1)
> **Speakers:** - [dan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/what-you-should-know?u=76281980&t=0)** - [Instructor] This is an advanced course, so I make some assumptions about what you already know or at least familiar with, and that starts with assuming that you're fairly comfortable with writing complex SQL statements.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/what-you-should-know?u=76281980&t=11)** So that includes working with different types of joins, applying different filtering operations, such as where and having clauses, applying windowing functions, and working with common table expressions.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/what-you-should-know?u=76281980&t=23)** I also assume you're capable of installing Postgres or PostgreSQL, and as well as any kind of graphical base query tools you would like to use, and also, I assume you have some familiarity with data structures.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/what-you-should-know?u=76281980&t=36)** So when we're talking about things like balanced trees and hashes in the index topics that you will be comfortable and be able to follow along.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Data Modeling: Tables

#### Rules of normalization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=0)** - [Instructor] When we talk about relational databases in SQL and data modeling, we're almost always going to be talking about normalization to some degree.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=10)** Now, normalization is a practice in which we follow a set of rules for designing database tables which help us minimize the risk of data anomalies.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=20)** Now, normalization is an important practice and it's widely adopted, but it's not always essential and there are cases where we actually don't want to normalize.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=30)** So let's take a look at normalization and then we'll take a look at when we actually break the rules of normalization.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=36)** So data anomalies are basically errors or inconsistencies in data that we really want to avoid.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=43)** And there's three types we'll talk about here.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=47)** There is an update anomaly.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=49)** And an update anomaly occurs when you have redundant data and you only partially update that data.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=56)** So for example, if we had a database of books and in that we tracked books and authors, and for authors we track things like their address.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=64)** Well, if every time an author had a book entry, we captured the author's address along with the book, then we might have multiple addresses, say an author has 10 books published, there would be 10 copies of the address.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=78)** Now, if for some reason we updated that address but only updated five of them, then we'd have five with old data and five with new.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=86)** That's an example of an update anomaly.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=89)** An insertion anomaly basically results when we're not able to add data to the database due to the absence of other data.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=97)** So for example, if to add a new book I also have to be able to enter the author's address and I don't have the author's address, then I'm not able to insert that data.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=108)** That's an example of an insertion anomaly.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=111)** And then a deletion anomaly is when we unintentionally lose data because we've deleted other data.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=118)** So for example, we might lose an author's address because we deleted the author's only book that we had in the database.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=124)** Now we may have wanted to delete the book but actually keep the author and author information in the database for future use.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=131)** So that's an example of a deletion anomaly.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=134)** So the way we avoid anomalies like that is we follow normalization rules.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=142)** Now there are many normalization rules but really the most important and the most widely used are the first three.
>
> **[2:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=147)** The first normalization rule which is called first normal form, basically states that each value in a column is an atomic unit.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=155)** So it's going to be a particular number or a unit string or a Boolean or some scalar values, some unit like that that can't be broken down further.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=169)** The second normal form or second rule of normalization states that any attributes or any column we have in a table is dependent on the key.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=178)** So it's a function of that key.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=179)** So there's nothing in the table that's not related to that particular key.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=184)** That gets us to second normal form.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=186)** And then third normal form says we don't have any transitive dependencies or there's some pieces that are dependent on something in the table, but not the key.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=195)** And that something else might be, for example, an author's address is dependent on the author and the author depends on, for example, the book, if we had that kind of relationship, that would violate third normal form.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=209)** So we want to avoid that kind of transitive dependency.
>
> **[3:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=213)** Now, oftentimes when we visualize normalized databases, we have diagrams which show rectangles representing tables and then we have lines connecting the tables which represent relationships, and then we have some kind of indicator for what kind of relationship it is.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=230)** So for example, in many cases we have one table that's like a primary table, for example, like an order table.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=237)** And then we have like a secondary cable that has a lot of detail, like an order's item.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=241)** So if you have an order and there's maybe 10 different books on that order, we'd have one order in the order's table and 10 rows or 10 order items in the order items table that would be a one to many relationship or one to N.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=255)** And sometimes the relationship can be one to one or one to zero or one or one to zero or many.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=262)** And those all fit, these are all allowed under the rules of normalization.
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=267)** And we often see this kind of modeling when we're working with OLTP or online transaction processing systems.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=275)** Now OLTP systems, for example, typically have many reads and writes so they're constantly being updated.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=282)** Data is written once but then it may be updated again frequently by many different processes.
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=287)** So you can imagine like an e-commerce application with users updating many orders at the same time.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=292)** Now, oftentimes these kind of OLTB systems are normalized to third normal form.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=297)** Sometimes per performance they're de-normalized slightly but typically they're still considered normalized.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=303)** Now contrast that with analytical databases, these are used typically for data analysis.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=309)** And here we have many reads by many processes, but typically with analytic databases, we're not updating say a single customer's address or a single customer's order, we might be reading a single order or a single customer record, but in an analytical database we might look at thousands of orders or thousands of customers.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=329)** So our reads tend to span many rows, but have fewer columns that we actually include in our query.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=336)** We have many writes and with batch processing, many of those writes are done all at once like bulk updates where a job will run and it'll start from end to finish until the large number of rows are loaded in.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=349)** We may also have streaming data where a process is ingesting data in near real time and writing it to a database.
>
> **[5:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=357)** That's different from this idea of having maybe thousands of different users doing small updates or small writes, here we're doing fairly large amounts of writes when we have batch processes or we're consistently doing writes if we have a streaming process.
>
> **[6:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=371)** These analytical databases are often de-normalized.
>
> **[6:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/rules-of-normalization?u=76281980&t=375)** And we'll take a look in the next video as to why that's the case.

> [!info]- Semantic Content
>
> **Analogies:** for example (8), imagine (1)
> **Code Keywords:** let (1), new. (1), delete (1), function (1), case. (1)
> **Definitions:** is an  (3), is a  (1), is called (1)
> **Env Vars:** oltp (2), sql (1), oltb (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Denormalization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=0)** - [Presenter] Now sometimes we choose to denormalize our data because denormalization can give us significantly better performance.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=10)** So let's take a look at some of the characteristics of denormalized tables.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=15)** Well, data is often redundant.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=17)** So for example here in this example, looking at a book's table, we have author information that's duplicated as well as publisher information.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=25)** We may have non-atomic values.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=27)** So for example, some analytical databases allow and actually encourage the use of strokes or structures to have more complex values within a column than simple atomic values and then we also tolerate transitive dependencies.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=42)** So if we have say a value that's dependent solely on a non-key attribute in the table and that non-key attribute is itself dependent on the primary key.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=54)** That's totally fine.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=56)** Again, it violates the third normal form but we're willing to tolerate that because in exchange for not being normalized, we're going to get significantly better performance.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=65)** And the really the critical thing is in analytical databases in analytical applications we are typically at a reduced risk level with regards to anomalies.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=74)** And that's because of how we work with the data.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=77)** We have relatively few updates so while customers might constantly be updating their orders and their baskets and things like that.
>
> **[1:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=84)** In an analytical database like a data warehouse or a data mart or say just a data science database, we typically load the table once and then maybe update it or add data but rarely do we go back and correct data that say for example we loaded a week ago.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=98)** Now, if there are mistakes in the data, we may correct the batch or delete a batch or reload with corrected versions but outside of errors in data loading like that, we typically do few updates.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=110)** Really we're more likely to be writing new data and reading data.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=113)** Now, oftentimes we do batch inserts and those batch inserts go through an extraction load transform or extraction transform load process.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=122)** So the data transformation is already kind of cleaning up the data massaging it and getting it into sort of our preferred form.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=132)** So in that case, again, there's less risk of say an update anomaly.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=136)** Again, unless say our transformation process broke but that would be a significant event and we would hopefully catch that with our monitoring system.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=144)** Now sometimes we also have streaming inserts and those are relatively simple data structures.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=150)** So you might think of like an IoT sensor that's measuring temperature and humidity and maybe some other environmental measures and then transmitting those say every minute.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=161)** And so it might be a relatively simple structure that has a sensor ID, a timestamp and then whatever the measures are.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=169)** So again, it's fairly simple with IoT data and streaming data.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=173)** Again, you typically don't update it.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=175)** And another thing about like IoT data which is typically used in the aggregate even if you did have a mistake even if there was an error in one of the readings and one of the minutes, if you're getting 60 readings per hour and you're aggregating those, it almost doesn't matter in terms of the aggregate value.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=194)** So if you're looking at statistical measures across these data structures, very small errors just kind of get washed out and it actually doesn't make a material difference the way we report on it.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=204)** So again, a data error may occur but it doesn't have as much of an impact as it would in an OLTP system.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=211)** And another thing that happens, we eliminate the need for really complex joins.
>
> **[3:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=215)** So that's particularly useful with regards to simplifying and speeding up performance.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=221)** Now there's a couple of different ways that a denormalized database may look.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=225)** A common way of building denormalized databases that's been popular for over a couple of decades is the star schema.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=233)** And here are the idea is we have this fact table with a bunch of measures.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=237)** For example, they might be all the measures that an IoT sensor is taking.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=240)** And then we have different dimension tables and the dimension tables may be things like, oh, the sensor information and geography information and a time information.
>
> **[4:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=248)** So we can keep track of like hours within days, within weeks, within years and be able to easily roll up data.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=254)** So that's one way of denormalizing.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=257)** And this is commonly done in databases where you have a row level orientation and row level orientation means when you go to read a data block, you read an entire row at a time.
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=267)** And that makes perfect sense when you're dealing with OLTP systems because if you're going to update something in a customer record you're likely maybe want to update multiple things.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=276)** So it's helpful to have the entire customer data block available to you.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=281)** Now in analytics systems when we're reading, we typically reading a few columns across many rows so a more performant way to work with it is using columnar orientation or using a columnar format.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=295)** And in that way, when we go and we read data blocks we're actually reading many different attribute values from different rows but all from the same column.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=306)** So if you want to do an average say of the temperature measure of a particular sensor over a 24-hour period, it makes a lot of sense just to grab the temperature data, grab the temperature column and not bring in the other data that you're not interested in and that's what columnar data stores do for us.
>
> **[5:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=326)** Now, another common denormalization technique is to have what's called a white column table.
>
> **[5:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=331)** And here you can imagine what some data modelers in the relational world might think of as their worst nightmare which is that we denormalize, we put everything into a single table and we make it very wide.
>
> **[5:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=344)** Now this would be incredibly problematic for an OLTP system.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=349)** It's actually quite advantageous for many analytical systems and the really high volume, large scale data warehouse systems.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=359)** The kinds that scale to petabytes scale like Google big query or Google big table we'll use a wide column model.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=366)** Now big table is a NoSQL database but big query is an analytical database, and it uses SQL for querying and it uses this kind of wide column model as well.
>
> **[6:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=377)** Now the advantages of denormalizing that can be easier to query again, we're getting rid of complex joins.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=384)** So we don't have the join table, A to B to C to D to E and introduce the risk of making mistakes in our complex queries.
>
> **[6:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=391)** Queries can also be more efficient.
>
> **[6:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=393)** Again, there are a lot of reasons for that, we discuss columnar versus row that's just one example and it also simplifies load procedures.
>
> **[6:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=400)** Oftentimes with ETL processes, we can do joins sort of in stream and then write to a single table.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=407)** It also makes it easier if you're dealing with something called slowly changing dimensions and you want to keep track of history.
>
> **[6:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=414)** Well, by actually tracking the data in a road by denormalizing, you don't have to worry about tracking multiple records and say a dimension table and then pointing to the correct version of the data.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/denormalization?u=76281980&t=425)** So again, denormalizing can somewhat simplify load procedures.

> [!info]- Semantic Content
>
> **Env Vars:** oltp (3), sql (1), etl (1)
> **Analogies:** for example (4), imagine (1)
> **Code Keywords:** let (1), delete (1), case, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### Partitioning data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=0)** - [Instructor] One of the most effective ways to deal with large data sets is to use partitioning.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=7)** Now, what can happen when we're dealing with really large datasets is that large tables can be difficult to query effectively because they have so much data, and especially if you're scanning or you have to maintain very large indexes.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=21)** So what partitioning does is it splits tables by either rows or columns into these subsections, which we call partitions.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=29)** Now, horizontal partitioning is a way of limiting the amount of data we have to scan to a subset of a set of columns.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=38)** We can have local indexes for each different partition, so in this example, we have a large table which is broken down into three different partitions, we could have three distinct sets of local indexes, and so our indexes would be smaller, scanning the indexes would be smaller, or if we needed to scan the entire partition, the amount of data would be smaller.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=59)** And also partitioning makes adding and deleting data efficient, especially if you have like a time-based partition.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=65)** It's very easy to say drop off the oldest partition, just drop that partition once that data set ages beyond whatever period of time you think it's useful for.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=75)** Now, vertical partitioning is a little bit different from horizontal partitioning.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=79)** With vertical partitioning we're separating out columns, and this is, in a way, what columnar storage does, it's sort of extreme vertical partitioning in that we increase the number of rows that can fit in a data block because we have fewer columns in each row.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=94)** So when we're using a row oriented storage system, this is one way to start to get some of those advantages of columnar storage.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=102)** Now we can have global indexes for each partition, so we're still covering the entire table like all global indexes, but we can still reduce I/O because when we fetch data, we're going to fetch a single block, or actually, you know, some number of data blocks but those data blocks will have the equivalent of more rows than if we had additional columns in the data block, and again, columnar storage has similar benefits.
>
> **[2:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=128)** Now range partitioning is a type of horizontal partitioning, and basically what it allows us to do is to partition on non-overlapping keys.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=137)** So we'll identify a column or set of columns that is a partition key, and those will be distinct, and we will be able to sort of designate which partition a particular row of data goes into based on that key.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=152)** Now working with date is quite common, also numeric ranges are often used for range partitioning, and we could also use alphabetic ranges.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=161)** This partitioning is a little bit different, we basically have a set of particular attributes.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=167)** So for example, if we wanted to work with tables with data from global sensors, and we wanted to just partition them by continent, we could do that.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=176)** Again, it's not overlapping keys, but there's some fixed list of values that we're going to be worked with, so that's the thing that's distinctive about list partitioning.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=186)** Now another option is hash partitioning.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=189)** In here, basically what we do, we still identify a partition key, but then we apply a hash to that, and then we take the modulus of that hash to identify, for example, which partition to go to.
>
> **[3:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=202)** So with hash partitioning, we might decide, oh we want 10 or 20 or 30 partitions, and then we'll pick a partition key, that partition key will be used when it's time to determine where a particular row should go, and we'll just do the mod operator on the hash of that partition, and then based on whether the mod result is zero through 19, depending on where that lands, that'll determine which partition it should go into.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=227)** Now, hash partitioning is useful when you don't have like a set of values that would make sense for list partitioning, or other numeric or alphanumeric, doesn't really make a lot of sense for range partitioning.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=241)** It's also good if you want to make sure your data is evenly distributed, hash partitioning will keep it balanced.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=247)** Okay, so now I've switched over to PG Admin which is a GUI tool we use for working with Postgres, and what I'd like to do now is to just do a quick example of creating a table with a range partition.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=262)** I want to point out I'm using a Postgres database and I'm in a database named postgres, and right now I'm using a schema called iot, or internet of things, and so what I'm going to do is create a table, and I'm going to create it in the iot schema, and I'm going to call it sensor measurement, or msmt for short, and let's see, we will have a sensor ID which will be an integer, and it should be not null, and we'll have a measurement date, which will be a date and not null, and let's measure temperature, and for simplicity, we're going to keep this as an int,
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=313)** we will assume there's no decimal places on temperature, similarly with humidity, we'll call that an int, and that wraps up our list of attributes, but now I want to specify that I want to partition by, and I want to use range partitioning, so I'm going to petition by range over my measurement date, and I'll just execute that to create that table.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=343)** And so basically I've created that table, and now what I need to do is actually create the partitions, and I do that by using actually the create table statement with the partition of option, so let me show what that looks like.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=359)** So here we're going to to create a partition, one for each month.
>
> **[6:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=363)** And so I'm going to create a table and I'm going to call it iot sensor measurement, and I'm going to call it year 2021, month 01, and I'm going to specify that this table is a partition of my iot sensor measurement table,
>
> **[6:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=389)** and now I need to specify what values, so I'm going to say for values from, and I'll specify a date, I'll say 2021-01-01 to 2021-01-31,
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=408)** click on there, and then I will do the same, so let's say I want to do it for February as well.
>
> **[6:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=413)** I won't do this for all 12 months, but I'll just do a couple partitions here, so you can just see, get a sense of what the syntax looks like.
>
> **[7:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=420)** So let's see, we'll want to change that to 20, oh, and I made a mistake here, this should be 2021, this should be 2021, this should be 2021, 2021, and this should be actually 02, we'll change to February to 28, and this to 02.
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=443)** So we have our main table, which is iot sensor measurement, and then we specify that we're going to use a date column, in this case, it's called measurement date, and now we're going to be creating the partitions themselves.
>
> **[7:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=455)** Now, if we wanted to have a whole year's worth of partitions, we'd have 12 create table partition of statements like this, but instead of doing that let's just run this, and it returns, and basically now we have a partition table.
>
> **[7:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/partitioning-data?u=76281980&t=471)** So that's the syntax, and the syntax, again, is similar for like list partitioning, hash partitioning, but again, the core idea here is you create like a a main primary table which specifies what the structure looks like, and then you create whatever partitions you need for that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), for. (1), from, (1), case, (1)
> **Definitions:** is a  (7)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **Env Vars:** gui (1)
> **Speakers:** - [instructor] (1)

#### Materialized views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=0)** - [Instructor] Now, another technique in our data modeling toolbox that we can use to officially work with really large datasets is something called materialized views.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=10)** Now, a materialized view basically persists the results of a query.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=14)** So rather than executing a query, say, multiple times and actually going through all the steps of the particular execution plan and then getting our results back, we can actually save the results after executing the query once and then we can go back and read that saved result sets many times.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=32)** The value here is that reading from a single table can be much faster than executing a complex query over and over again to get the same data.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=41)** So we can think of materialized views as a form of caching.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=46)** It's also a way of getting some of the value of WideTable denormalization while still having on the side a more normalized model.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=57)** And, ultimately, we're trading space for time, so you want to consider that in way the benefits of saving on time while adding more to your storage costs.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=67)** Now, there are some kind of general rules of thumb about when is a good time to use materialized views.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=73)** If you have a long-running query, that's a great candidate right there.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=77)** Now, complex queries, especially when there are a lot of joins, or maybe you have subqueries or some common table expressions or things that might be complicated for people who aren't necessarily well-versed in SQL, it would make their life a lot easier if they could simply query a single table.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=96)** So that's another good indicator that you might have a good candidate for materialized views.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=102)** If you're doing a lot of aggregate computation and other derived data, that can be a form of long-running query, but that, again, is a good candidate for materialized view.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=112)** Also, when there's really a distinction in the terms of class of like read operations and write operations, which we have, we have batch uploads or streaming processes, and then we have, you know, users building these queries and querying data, when you have that kind of clear partitioning between reading and writing, that's another sort of feature that lends itself to using materialized views.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=133)** Now, there are some other considerations you want to keep in mind about when not to use materialized view.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=139)** Materialized views use a form of consistency known as eventual consistency.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=145)** And, basically, what can happen is the materialized view can get out of sync with the underlying tables that were used to build the query.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=153)** So, for example, with our IoT data example, we might build a materialized view every hour.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=159)** Now, since it's an IoT system, we're probably streaming the data in continually.
>
> **[2:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=164)** So 15 minutes after we build a materialized view, we're going to have even more data in the database.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=171)** Now, that 15 minutes of data won't be incorporated into the materialized view until the next hour, assuming we have a one-hour refresh.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=179)** So if you can live with the fact that when you query, say, the materialized view, you might not have the latest data, and it may be up to maybe like 59 minutes of missing data, if that's not a problem, then that's fine.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=192)** If it is a problem, then you need to either reconsider either refreshing more frequently to get it to something that's really in your tolerance range or not using materialized views if you really can't tolerate eventual consistency, if you need a stronger form of consistency.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=208)** You also want to think of the cost of the the update process.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=211)** So you're going to be executing an example, in our IoT example, going to be updating the materialized view every hour.
>
> **[3:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=219)** Now, is it worth to run a very expensive query every hour?
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=225)** That's something you want to take into account.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=227)** Also, you want to understand if you can concurrently read a materialized view while it's being updated.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=235)** Now, in Postgres, that's the default, but it may not be in other databases.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=239)** So if you're using other relational database management systems, you want to check into that.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=245)** And, again, the size versus time trade-off, you want to consider the size of the materialized view data.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=250)** And also, as we mentioned with regards to eventual consistency, you want to think about the refresh frequency.
>
> **[4:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=256)** You know, what's the right balance, and can you strike that balance between eventual consistency and the benefits of having materialized view?
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=266)** Now, let's take a look at an example of creating a materialized view.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=270)** I've jumped to a different schema here.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=272)** I'm in the landon schema.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=274)** And this is information about hotels, so we have a table about customers, and we have a table of expenses and locations, and there are some other data as well.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=286)** But I would like to create a materialized view that will help me understand the expenses for each of my hotels.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=294)** So what I'm going to do is start with a SELECT query.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=298)** And so let's say I want to join my locations and expense tables.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=303)** Let's fill the SELECT statement for that.
>
> **[5:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=306)** And let's say I want to select from the locations table, which I'm going to alias with an l, so I'll use that here.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=313)** I want to select hotel id and, let's see, the city, state or province, and let's get the country as well, and I think that's enough from location.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=329)** From expenses, we want to get the year, let's get annual payroll and health insurance costs and finally the cost of supplies.
>
> **[5:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=341)** And we're going to join or query from landon schema using the locations table, aliased with an l, and I'm going to LEFT JOIN, again, another table from the landon schema, this time it will be expenses, which we'll alias with an e, and we're going to join on the locations hotel_id, where that is equal to the expenses hotel_id, okay?
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=373)** So I'm just going to execute that query.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=376)** And so, as we could see, we have some information from the locations table and from the expenses table.
>
> **[6:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=383)** Now, something this simple, you probably wouldn't put into a materialized view, but I'm just keeping it simple purely for demonstration purposes.
>
> **[6:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=395)** So now the next step now that I have my SELECT statement, to create a materialized view, I can specify CREATE MATERIALIZED VIEW, and I want to create this in the landon schema.
>
> **[6:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=409)** I'm going to call this mv for materialized views, and then locations_expenses AS, and then I'm just going to wrap the SELECT statement in parentheses and execute.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=425)** So now I have created a materialized view.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=427)** Now, one thing I can do now that I have this materialized view is, of course, I can actually select from it.
>
> **[7:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=433)** So if I do a SELECT * FROM landon_mv_locations_expenses,
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=443)** and I execute just that statement, I'm going to get the results, the same results I got from the query, of course.
>
> **[7:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=450)** So that's how you create and basically work with materialized views.
>
> **[7:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=454)** It's no different in a sense in terms of querying from working with other views.
>
> **[7:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=458)** Now, if you want to refresh the materialized view, that's pretty straightforward too.
>
> **[7:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=463)** The command is REFRESH MATERIALIZED VIEW, and then we specify the name, in this case it will be in the landon schema mv_locations_expenses.
>
> **[7:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=475)** Now, when we execute this statement, what's going to happen is it will re-execute that SELECT statement that we specified in the CREATE MATERIALIZED VIEW statement.
>
> **[8:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=486)** And so, it runs really quickly, of course, 'cause this is a small table.
>
> **[8:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/materialized-views?u=76281980&t=491)** But that's basically the steps of working with a materialized view.

> [!info]- Semantic Content
>
> **Env Vars:** select (6), materialized (3), view (3), create (2), sql (1)
> **Code Keywords:** let (7), default, (1)
> **SQL:** select (6), left join (1)
> **Code Identifiers:** hotel_id (2), locations_expenses (1), landon_mv_locations_expenses (1), mv_locations_expenses (1)
> **Definitions:** is a  (4), known as (1)
> **CLI Commands:** make (1), mv (1)
> **Cross-References:** we mentioned (1)
> **Analogies:** for example (1)

#### Read replicas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=0)** - [Instructor] Now in some cases, data scientists work with systems that may also be used by other people for different reasons.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=9)** For example, you might want to use an online transaction processing system as a source of data, and you want to grab data continually.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=17)** Well, you don't want to put too much stress on the OLTP system, which is being used by interactive users.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=25)** One way to deal with a situation like that is for data scientists to work with database administrators to create something called a read replica.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=33)** Now, when we think about database servers, it makes sense oftentimes we use just a single server.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=40)** So for example, if we're in the cloud, we can decide how much memory we need, how much storage we need, and pick a virtual machine, or use a hosted database service and size the instance that we're interested in.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=52)** And let's think of that as our primary.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=56)** Now in that scenario, all the reads and all the writes go to the primary database operation.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=62)** So we send data in, we also query from it.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=65)** So the primary server is responsible for handling both read and write operations at the same time.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=74)** An alternative option is to create a read replica.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=78)** And here the idea is any time data is written to the primary, it's also written to another instance of a database server, full-blown Postgres instance that's on the network and can receive data from the primary and essentially keep a copy of all the data.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=100)** When we have a read replica, then we can direct queries to the read replica.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=104)** The data's kept up to date pretty quickly using the write ahead log in the primary.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=111)** And so what happens is writes go to the primary, the primary sends data or replicates data to the read replica and read operations are routed to the read replica.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=122)** So this allows the primary to do most of the work with regarding writing, but also offloading a lot of the read work.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=131)** So the reason we use replicas is again so the primary can really focus on the writes.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=136)** And we could even have multiple replicas if we needed that.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=140)** So if we had so much read load that a single replica wouldn't satisfy our needs, we could add multiple replicas.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=148)** And again, this is especially useful when you have really heavy read loads.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=153)** Now, like with materialized views, we have to think about eventual consistency.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=158)** Now, however, unlike materialized views, when we're working with a read replica, it's the update operations on the read replica are much faster.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=167)** In Postgres, there's a parameter you can use to determine the level of consistency before a transaction.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=173)** For example, a write operation is considered complete.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=176)** The fastest way, but also the least reliable, is basically what's called the fire and forget method, which is the primary would just send the data to the read replica and just assume that it's written there.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=189)** Now, there's a potential for the data to be lost on the read replica because of some error, but the primary's not waiting around for an acknowledgment.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=197)** The slowest method enables strong consistency and basically the primary waits until it's guaranteed to have saved the data to the primary data storage, as well as the replica storage and get an acknowledgement that it has been stored like that.
>
> **[3:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=212)** Now, that's the safest in terms of data integrity, but it's also the slowest in terms of when a transaction completes.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/read-replicas?u=76281980&t=220)** So that's a factor you need to consider when using read replicas.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **UI Navigation:** go to (2)
> **Code Keywords:** let (1)
> **Env Vars:** oltp (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Design a data model for analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=5)** - [Instructor] Here is a data modeling challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=8)** Let's assume you're a consultant and you're working with an internet of things, or an IoT company, that is collecting streaming data from thousands of sensors and they collect this data every minute.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=19)** For them, low write latency is essential.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=22)** So as soon as the data comes in, it needs to be written because we don't want to basically have a backlog of data or anything like that, and it's also important that the write latency be fairly consistent so we don't want, you know, some periods where it's very bursty and we have very low latency, and then other times it's more prolonged, it's more delayed.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=39)** Now, at the same time, this IoT company has a team of data scientists and they're going to be performing different kinds of time series analysis including roll-ups of aggregate data.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=49)** So, say for example, by each sensor, what's the, what are some aggregate measures over, you know, hours and over days?
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=58)** And with regards to that analysis, those data scientists need access to any data that's older than one hour.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=65)** Anything newer than that isn't necessarily required for this aggregate analysis.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=70)** So the challenge is to design a model that would support these requirements.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-data-model-for-analytics?u=76281980&t=75)** Now this is a high-level model, just outline what kind of structures or design patterns would you use to address the business requirements identified here?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Design a data model for analytics
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=0)** - [Instructor] Here is a solution to the data model challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=8)** So, first of all, the sensor data should be written to a table that models the data sent from the sensors.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=13)** So, for example, if a sensor is sending a sensor ID, a timestamp, and then measure one, measure two, measure three, we should have a table with those five attributes: sensor ID, timestamp, and then the three measures.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=25)** Now, likely the table will be partitioned by time.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=28)** Now, we didn't explicitly state in the requirements the need for partitioning and we didn't discuss, for example, how long we wanted data to be kept in this table and if data past a certain age should be rolled off.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=42)** Now, this is something you need to keep in mind when you're doing data science, and you're working with data modeling at the same time.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=47)** Not all of the requirements are going to be outlined for you, the people that are, say, domain experts may not be aware of the kinds of factors that we think about when there's designing.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=57)** So, any time you're presented with sort of a challenge, like we have here, it is important to not just take what's given, but also interrogate and probe other questions so, for example, how long should data be persisted?
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=69)** Now, this is a good use case for materialized views because materialized views can be used to generate a persistent view, or a materialized view of the aggregated data and whatever that aggregation is.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=82)** For example, you might have one materialized view that is used for hourly aggregates, and another materialized view that's used for daily aggregates.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=91)** And, of course, you want to refresh these, at least, once per hour.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=95)** Now, with regards to the daily materialized views, we may not need to refresh at all because once the day has passed, and we build a materialized view with that day's roll-ups we shouldn't need to change those.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=108)** Will data scientists be using that daily materialized views for partial results throughout the day?
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=114)** If that's the case, then you want at least that materialized view refreshed more frequently.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=119)** Now, also, another factor we didn't delve down into too deeply with regards to the requirements is do the data scientists need access to the low level detail as well as the aggregates?
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-data-model-for-analytics?u=76281980&t=130)** Because if they need access to low level data like the raw data that comes from the IoT sensor, well, because of the low right latency requirement we don't want to bog down the primary server with a lot of ad hoc query, that would be a good use case for a read replica.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Definitions:** is a  (2)
> **Code Keywords:** case, (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Data Modeling: Indexes

#### B-tree indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=0)** - [Instructor] In addition to designing tables, part of data modeling is developing an indexing strategy.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=6)** So let's take a look at indexes, different types of indexes, and how they apply when we're working with analytical queries.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=14)** We'll start with B-Tree indexes.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=16)** So, indexing is used primarily to reduce the amount of work we need to do when we have to go and fetch data.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=23)** Now, typically this means we don't want to be scanning a lot of data blocks, so indexes are used to help us reduce that.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=31)** Now, there is a cost associated with this because we have to maintain these indexes.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=36)** So what that means is we're going to take up additional space, but we're also going to be doing additional rights, so anytime we're loading data or deleting data, we're going to need to update the index.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=47)** Now, some things to keep in mind is that when we index a column, the higher the cardinality which means, you know, just the number of distinct values, really influences how well the index helps improve query performance.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=60)** So for example, if you had a table of codes and the codes were numbers, one through 10, the codes are evenly distributed you can expect about 10% of the table to be returned if you look up a particular code.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=72)** So 10% is not bad but it doesn't reduce a lot say compared to if the cardinality was say a 1000, and if you looked up a particular code you could reduce the amount of work that you need to do to maybe 1000th of the size of the table.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=89)** Now, we're going to be talking about indexing, but again I want to point out in terms of things that are different in analytical databases, indexing is not used in analytical databases like Google BigQuery or AWS Redshift, again, they have different strategies.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=103)** Now, there are several different types of indexes, we're going to pay attention to three broad categories, the B-tree, the bitmap, and the hash index, and then we're also going to look at special purpose index.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=117)** So first, let's take a look at B-trees indexes.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=120)** Now the B in B-tree stands for balanced.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=123)** And what this means is that what we're trying to do is keep a record or information about rows of data by capturing a small amount of information, that's the attribute or attributes that we're indexing.
>
> **[2:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=137)** And one of the things we want to be able to do with an index is to be able to look up a value very quickly.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=143)** Well, B-trees are sort of the workhorse of indexing, they work really well in many different cases and what they give us is basically the ability to look up a value in logarithmic time.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=155)** So let's see how that works.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=157)** Say, we are indexing say a column that has one to 100, and the first one we index or the item right in the middle is a 50, and that makes sense because we want to be able to split sort of divide and conquer and with a balanced tree the way it works is the next time we insert a value, if the value is less than 50 then we're going to put it in toward the left node and if it's greater than 50 we're going to put it toward the right note.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=182)** So for example, 25 would go to the left and 75 would go to the right.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=187)** Now, let's say you want to insert a value say between 25 and 50, in that case, it's going to be less than 50, so we're going to go to the left, we'll go toward 25 but then if it's greater than 25 we're going to go to the right.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=204)** So in this example, you know, 37 is placed first to the left and then to the right.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=210)** And we can continue this example, and what we can see here is even though there could be a 100 different nodes in this tree, we're never going to have to go more than log n or log 100 steps to actually find the value.
>
> **[3:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/b-tree-indexes?u=76281980&t=226)** So that's one of the big values of B-tree indexes is it gives us that order and look up time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), continue (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** aws (1), node (1), find (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** for example (2)
> **Env Vars:** aws (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Bitmap indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=0)** - [Instructor] Let's take a look at bitmap indexes.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=3)** Now, a bitmap index is relatively simple.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=6)** It's quite different from a B-tree index and the basic idea is when we have a column that has a small number of possible values, we might be able to map those values or encode them in a bit string.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=18)** So for example, here we have a table and there's an ID column and another column which is_union_member and you can see we list yes or no or null.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=30)** And we could use literally those strings.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=33)** Alternatively, we could map a yes to a one, a no to a zero and a null to a zero zero.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=41)** And that's what we've done in the two columns on the right.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=44)** Now, it doesn't have to be just two values.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=47)** You can have a larger number of possible values.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=51)** For example, in this new table here on the right where we have an ID and pay_type, we have three different kinds of pay type: salary, hourly, and contractor.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=61)** Now, you'll notice the salary column has a one in it when the pay type is salary and a zero and a zero in hourly and contractor.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=71)** Similarly, when the pay type is hourly, there's a one under the hourly column and a zero in the other two columns.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=77)** And for a contractor, there's a one under the contractor column and a zero in the salary and hourly.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=83)** So you can see, we can map these, for example, the is_union_member a simple yes/no or a list of value kind of pay_type into a bit string.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=95)** And one of the reasons we would do that is because it makes it very easy to do kind of Boolean operations with bit operators.
>
> **[1:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=104)** So, for example, looking for someone who is a union member and paid hourly would be a matter of doing some bit operations on the bitmap index.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=114)** So we use bitmap indexes typically when there's a small number of possible volumes in a column, so a low cardinality.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=121)** When we're going to be filtering by bitwise operations, such as and, or, and not, so if you're going to apply those operators, and the thing to keep in mind is that the time to access the selected rows using this index is based on the time that it takes to perform bitwise operations, which of course are very fast.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=140)** Now, typically, bitmap index is when they are explicitly declared, like if you're working with a database that supports the explicit declaration of bitmap indexes.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=150)** You typically save that for read-intensive use cases, like data warehousing or data science operations where there's relatively few writes.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=158)** And that's because it can be expensive to build a bitmap index in some cases.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=163)** So in terms of bitmap index availability, as I mentioned, some databases allow you to create them explicitly, but Postgres does not.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=172)** However, Postgres does sometimes build bitmap indexes on the fly as is needed.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bitmap-indexes?u=76281980&t=177)** So the decision to use bitmap indexes or not in Postgres is made by the query plan builder.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (1)
> **Code Identifiers:** is_union_member (2), pay_type (2)
> **Code Keywords:** let (1), type: (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Hash indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=0)** - [Instructor] Now a third type of index is the hash index.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=3)** Now hash indexes use hash functions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=6)** Now hash functions are mappings of arbitrary linked data into a fixed-size string.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=13)** Now hash values are virtually unique and the hash value is a function of the input, of course.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=18)** So even slight changes in inputs will produce a new hash.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=23)** So for example, if you're hashing a string and you add a space at the end, that would give you a totally different hash than the one you had originally.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=30)** And here's some examples.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=31)** So some things to consider.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=33)** The size of the hash value depends on the algorithm used.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=36)** So that's typically determined by the database management system designers.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=41)** There's no ordering or preserving with hash functions so they could appear in just any random order, and similar inputs, again, can have vastly different outputs so you can't make any assumptions about the value that a hash function generates other than it's highly likely to be unique.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=58)** What this means is hash indexes are only useful for equality operations.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=62)** So if you're looking up, say, almost like key value kind of things, hash indexes can work very well in those cases.
>
> **[1:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hash-indexes?u=76281980&t=69)** In the case of Postgres, hash indexes can be smaller than B-tree indexes, and they're built with at about the same speed or about the same pace as one builds B-tree indexes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### GiST and SP-GiST indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=0)** - [Instructor] GiST and SP-GiST indexes are specialized index provided by Postgres.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=6)** Now, GiST stands for Generalized Search Tree, and it's basically, it's a balanced tree structure method.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=13)** And GiST is used as a template to actually implement other indexing schemes.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=17)** So depending on our data structure, we can use a GiST index.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=22)** So for example, one could build a B-tree index, which is a self-balancing tree, or an R-trees which are used with multi-dimensional data.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=31)** So these, for example, with geographic coordinates.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=33)** Now, that GiST is used in Postgres for indexing things like hstore and ltree.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=39)** These are two data types that we're going to delve into much more deeply, later in the course.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=44)** But I just wanted to point out that GiST indexes are used for these specialized data types.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=49)** Now, when we talk about indexes and data types we also have to talk about operators and what kind of objects can the operators apply to.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=56)** So in the case of these indexes, we're talking about things like; operations have geometric shapes like boxes, circles, and also internet address points if we're talking about distances and dimensional planes, as well as polygons and ranges.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=71)** And it also works with text queries, and that includes a data type known as text vectors as well.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=77)** Now SP-GiST is a space-partitioned GiST and it supports partitioned search trees.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=83)** And it's typically used for non balanced data structures.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=86)** So we might use these with things like quadtrees or k-d trees, which again are used in multidimensional space.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=93)** And SP-GiST can also be used to develop custom indexes.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=97)** Now, the operators here include things like things for operations like K dimensional and quad operations, range operations.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gist-and-sp-gist-indexes?u=76281980&t=107)** Again, geometric things like boxes and polygons as well as internet address data types.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), stands for (1), known as (1)
> **Analogies:** for example (2)
> **Code Keywords:** self (1)
> **Cross-References:** later in (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### GIN and BRIN indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=0)** - [Instructor] One of the reasons I like working with Postgres is that it has specialized indexes for data types that are more complex than we typically work with.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=10)** So for example, there's something called a GIN index which stands for generalized inverted index.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=15)** And that's used when we have to index data that are inside other elements or other pieces of data.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=21)** And we call these things composite values and we use a GIN index when we need to index the values which are in that composite item.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=30)** So for example, words in a document, the composite data structure is the document, but in that document, each of those words is a individual element, which we are interested in indexing.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=42)** Now the index stores the data and key value pairs and the key is the element value and the posting list is a set of row IDs where that key occurs.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=51)** So it's very fast to go from key to actual data location.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=56)** Now GIN index has a large number of built-in operator classes that allow you to do things like operate on arrays, JSON data structures, and in particular JSONB data structures as well as text vectors.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=70)** Now some tips when you're using GIN indexes, keep in mind that the insertion can be slow and this is because many keys may be inserted for each item.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=78)** So if you have a large number of documents and you are indexing all of them, then each of the words and each of the documents need to be indexed.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=86)** So that's why insertions can be slow.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=89)** So for a very large bulk operation so if you're doing like an initial data load, it's likely faster to just drop the index and then recreate the index after you've loaded the entire dataset.
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=99)** An alternative way to do this is to let Postgres postpone a lot of the indexing work using something called temporary lists.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=107)** Now temporary lists are eventually inserted into the index using kind of a optimized bulk insertion technique.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=114)** So basically the temporary list we're keeping track of but we are not actually committing it to the index just yet.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=121)** Now the disadvantage here is that the temporary list has to be searched in addition to the regular index anytime there's a lookup that uses the index.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=130)** So in that case, large temporary lists will slow searches significantly so you're trading off, are your searches going to be slow or your load is going to be slow.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=138)** Now, when you create index, you can disable the fast update parameter to disabled temporary lists.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=144)** So if you really find that during the loads, the temporary lists are becoming problematic with respect to your query performance, try disabling the fast update perimeter.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=155)** Now another index type that Postgres support is called a BRIN index, which stands for block range index.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=162)** And we typically use BRIN indexes with very large tables.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=166)** And within these tables, the column data has some kind of correlation with physical location like a postal code or dates where dates close to each other are going to be typically stored in the same data block near data blocks.
>
> **[3:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=180)** And block ranges are pages that are physically adjacent in a table.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=184)** So when we talk about a block range index, we're talking about ordering these data blocks and what the BRIN index does is it stores summary information about the block ranges.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=194)** So you might have things like the max postal code and min postal code in a particular block or max statement data block.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=201)** So you can end up storing very small amounts of data in a BRIN index, but still get really good performance.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=208)** Some things to keep in mind with BRIN indexes, the entries are per entire block ranges, select the max and min, so it's not for individual elements.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=217)** But the trade-off here is we don't have details about individual elements, but it allows us to quickly scan and skip large segments of a table when we're searching.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=225)** And this is really important if you have ordered data like if you're working with time series data or you have other data where you can make use of kind of this min and max idea.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=235)** Now BRIN operators have a whole bunch of operators like date min and max, also works with characters, floating point numbers, timestamps as well as UUIDs.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/gin-and-brin-indexes?u=76281980&t=244)** And there are even more, which you can find in the Postgres documentation.

> [!info]- Semantic Content
>
> **Env Vars:** brin (6), gin (4), json (1), jsonb (1)
> **Definitions:** stands for (2), is a  (2), is called (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1), case, (1)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (2)
> **UI Navigation:** select the (1)
> **Best Practices:** the key is (1)

#### Challenge: Choosing an optimal indexing strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=5)** - [Instructor] Alright, here's a challenge around indexing.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=8)** Let's assume you have received a large dataset with insurance claims details.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=13)** Now you want to be able to upload or ingest that data into an existing database that you're already using for your data science analytics.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=20)** Now each claim has a unique claim identifier along with about 12 columns of data.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=26)** The existing database has a table of all claim numbers ever generated.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-choosing-an-optimal-indexing-strategy?u=76281980&t=30)** How would you index the new claims detailed to optimize a join operation on the claim ID?

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Choosing an optimal indexing strategy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=5)** - [Instructor] We have really two options we can think of.
>
> **[0:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=8)** Now, by default, when we build an index in Postgres, we use a B-tree index.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=13)** Now B-tree indexes are generally good choices because they're relatively fast to work with because, on average, you're going to get a time basically relative to the logarithm of the size of the table, so even a table with a large number of rows is going to be able to find the index value relatively quickly.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=32)** Now because we're working with claim IDs and claim IDs are unique, that means that at most, one row in each table will have that particular claim ID.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=44)** Well, in that case, since we're not going to be doing things like range scans or things like that, which work really well with B-tree indexes, we can use a hash index.
>
> **[0:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=53)** A hash index uses a function that takes a column value, like a claim ID, and then converts it into a 32 bit integer, and we can use that 32 bit integer as basically like an address or an index into a table, and so, rather than kind of walking through a tree along multiple steps, we can immediately go to the storage area that has the location of the data block we're looking for or actually points to the data block.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-choosing-an-optimal-indexing-strategy?u=76281980&t=78)** So definitely in this case, because claim ID is unique, and we're not doing any kind of range scanning, we're just doing a one-to-one lookup, that's a good use case for a hash index.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), default, (1), function (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Query Optimization

#### EXPLAIN and ANALYZE commands
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=0)** - [Instructor] Now as data scientists working with SQL, it's sometimes helpful to understand a little bit about how the database engine actually executes SQL statements.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=10)** And that's particularly important if we're trying to optimize the performance of our queries.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=14)** So let's start from first principles.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=16)** SQL is basically a declarative language.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=19)** So we specify what we want.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=21)** So for example, I want these certain set of column returned from this particular table subject to this filter criteria.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=29)** Now that again is stating what we want.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=31)** I'm not saying in any way, how the database should go about doing that.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=35)** Limiting the data we have to scan to a subset of rows.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=38)** So many languages like Python or Java can be used procedurally.
>
> **[0:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=44)** And when we're doing that we're specifying how to do something.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=48)** So we're actually like directly manipulating data structures and determining like the sequence of steps.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=54)** So one of the things that database engine does for us is it figures out those sort of procedural steps and then execute some for us.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=61)** So one of the simplest kind of procedural steps is scanning a table.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=65)** And basically what happens is we say, start at the beginning of table, fetch a row and then move on to the next row.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=73)** And maybe we're doing a comparison.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=75)** For example, we're looking at a status level and we want to filter, show me all the customers who are status level gold.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=81)** Well, that's, what something like this kind of simple scan could do.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=85)** We'll simply walk through each row in a table and check the particular column that's part of the filter.
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=90)** And then if it passes the filter, we return it.
>
> **[1:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=92)** So again, the procedure is fairly straightforward.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=96)** So in a lot of ways, scanning is simple.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=98)** We just look at each row, fetch the data block that contains the row and apply the filter or the condition.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=105)** So if we're thinking in terms of, well what's the order what's the time complexity of this?
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=110)** Well, the cost is basically based on the number of rows in the table.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=114)** Now I should say that scanning isn't always as simple.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=118)** I'm making the assumption that we're working with a database that uses a row storage or a row orientation.
>
> **[2:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=124)** Now, some databases like AWS Redshift or Google Big Query use column in their storage.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=131)** And again, we typically see columnar storage with data warehouses.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=134)** So some of the things that I say here about scanning and row fetching certainly apply when we're using Postgres but maybe not something if you're working with say a petabyte scale data warehouse.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=146)** So cost is based on the number of rows.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=148)** Now that doesn't mean scanning is always bad.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=150)** Some scanning can be really efficient when tables are small.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=153)** So for example, rather than use an index and look up something in the index and then go fetch something from the table, it may be faster just to scan a row and not maintain an index.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=163)** Now, scanning large tables can be efficient if we're only scanning them very few times.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=169)** So for example, say you have a very large table and you have to scan it once.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=173)** It's probably not worth building an index on that because of the cost of building the index, the storage that's required as well as the time.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=181)** So even with very large tables, there may be times when scanning is efficient.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=187)** But in general, with large tables that we query repeatedly, that's not efficient.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=191)** So we want to find some other way to work with those tables rather than doing sequence scans or full table scans.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=197)** One way to do that is to use indexes.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=199)** And of course, we've already talked about this but just to recap, indexes are ordered, and they're faster to search for an attribute value than say scanning the whole table.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=208)** And since the index is basically a set of attributes and an a pointer to a particular row that we can use the index say for our filter and use the index and do the filtering based on the index rather than doing the filtering based on the data in the rows.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=227)** In the case of using 20 partitions.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=230)** Now, another thing we want to watch when we're thinking about performance is joining tables.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=235)** So of course the basic idea with joining tables is that we have data in say two tables and we want to somehow select a row from one table and link it or join it to a row in another table and basically produced a projection or a new view over that data.
>
> **[4:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=252)** So the question is, how do we go about matching those rows?
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=255)** Well, one table is going to have a foreign key in it, and the other table is going to have of course the primary key in the other table.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=262)** And so the question of how to match rows becomes how do we match keys?
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=267)** So there are a few ways to do this.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=269)** There is a technique known as the nested loop join.
>
> **[4:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=272)** And that's whether the database and Jim will compare all rows in both tables to each other.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=277)** There is the hash join, in which we calculate a hash value of a key and then join based on matching hash values.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=284)** And then finally, there's something called sort merge join in which we sort both tables and then join rows while taking advantage of the order.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=293)** So for a nested loop, the basic sequence of steps is we loop through one table and then for each row, we loop through the other table and at each step we compare the keys.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=303)** So the nice thing about nested loop joins is it simple to implement but it can be expensive if the tables are large.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=310)** Nested loop join is often a good choice when the tables are small.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=313)** Now a hash join computes the hash value of keys in a smaller table.
>
> **[5:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=319)** It then stores those hashes in a hash table and the hash table has the hash value in some row attributes.
>
> **[5:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=326)** And then we scan the larger table.
>
> **[5:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=328)** And we find rows from the smaller hash table that matched with the hash value of the hash and key on the larger table.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=336)** With sort merged join, we sort both tables, we compare the rows like we do with nested loop join but because both tables are ordered, we can stop when it's not possible to find a match later in the table because of sort order.
>
> **[5:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=350)** And this is nice because we scan the driving table only once.
>
> **[5:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=353)** So we've looked at indexes and we've looked at joins with regards to kind of things we look at with regards to query optimization.
>
> **[6:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=361)** One of the things that the database engine or the the plan builder looks at is information about the tables themselves.
>
> **[6:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=370)** And so the plan builder relies on statistics about the data in the tables that we're working with.
>
> **[6:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=375)** Now, usually statistics are kept up to date.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=378)** And in Postgres there is a process called autovacuum, which does that and also kind of cleans up after some deletes and compresses data and does some other sort of background, housekeeping kinds of things.
>
> **[6:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=389)** Now, sometimes statistics can get out of date.
>
> **[6:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=392)** So there is a command called ANALYZE which you can run, which will update statistics.
>
> **[6:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=398)** So if for some reason you're looking at a query plan and you can't quite figure out why would the query plan builder choose this really inefficient way if it looks, like for example, it's doing a nested loop join when maybe a hash join would be more appropriate.
>
> **[6:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=414)** A possible reason for that and outside chances for some reason, the statistics are out of date, so just run the ANALYZE command.
>
> **[7:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=421)** And there are different parameters you can analyze whole schemas or tables.
>
> **[7:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=424)** So you can definitely get more detail on the ANALYZE command.
>
> **[7:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=427)** That's not something you necessarily need to use a lot, but if you do, there are some options with the ANALYZE command so you can either scan an entire schema or really target a particular table for that.
>
> **[7:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=439)** And some things to keep in mind.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=441)** When a table has a relatively small amount of data, the ANALYZE will look at all of the data.
>
> **[7:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=446)** When it's a very large table, it will only sample the data.
>
> **[7:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=450)** So it'll build statistics out of a sampling.
>
> **[7:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/explain-and-analyze-commands?u=76281980&t=452)** So if you were to run ANALYZE say two times over a very large table you might get slightly different statistics but that's because of sampling.

> [!info]- Semantic Content
>
> **Env Vars:** analyze (6), sql (3), aws (1)
> **CLI Commands:** find (3), python (1), aws (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (3), known as (1)
> **Code Keywords:** let (1), this. (1), finally, (1)
> **Cross-References:** later in (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Generating data with generate_sequence
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=0)** - [Instructor] Okay, before we get into using explained plan let's create some data for us to work with.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=5)** Now, the first thing I want to do is just paste in some code that we have seen already earlier.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=11)** Basically what I want to do is recreate an IOT sensor measurement table, and create a couple of partitions.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=17)** I won't go over all the details 'cause I've covered this in an earlier video but I do want to point out a couple of things.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=23)** In this case, we're going to use measurement date.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=25)** We're actually going to make that a timestamp so we can include hours and minutes as well.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=30)** And I just want to point out in terms of creating partitions we want to keep in mind that this last value that at the end of the range is not inclusive.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=39)** I always forget this.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=40)** So for example, if I set this date to be 2021 01-31, that's a perfectly valid range to go from January 1st to January 31st, but it's not inclusive.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=50)** I always forget that.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=51)** So I just want to point that out.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=52)** You want to have overlaps here.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=54)** So for example, we'll go from January 1st to February 1st and then in our next petition we'll go February 1st to March 1st.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=60)** Okay, and I also have a drop table statement here in case that's left around and okay, so I have created my table and it is partitioned.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=71)** Now, the next thing I want to do is create some data.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=73)** Now we're working with time series data.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=75)** So there's a really useful set function in Postgres called generate series.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=81)** So let's take a look at that.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=82)** Now, generate series works with a select statement.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=85)** So I'm going to say select star from generate series.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=93)** We're just going to call the function.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=95)** Now the arguments I pass in are integers or dates.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=100)** And the reason is because generate series can work with either integers and create a series of integers say like one to a hundred or it can create a series of dates or timestamps.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=112)** So we'll start by creating, let's say a hundred rows for (mumbles).
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=119)** And we'll say that is as T1 for table one.
>
> **[2:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=126)** And what you'll notice here is it's simply generates a list of a hundred numbers.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=132)** So that's perfect, that's great.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=133)** That's one of the things we'll need.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=134)** Those integers would make very good sensor IDs for our table.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=139)** Now, the other thing we can do with generate series is to pass in dates or timestamps.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=148)** So I'm going to pass in, let's see, 2021-01-01 and we're going to work with hours and minutes.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=156)** So I'll say zero hours and zero minutes.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=159)** This is the start.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=160)** Now I'm going to be explicit with Postgres and tell it to convert this string to a timestamp.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=166)** And I can do that using the syntax, colon, colon and its specifying a data type, in this case timestamp.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=173)** And that'll do the casting or the implicit conversion that we need.
>
> **[2:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=177)** And I'm going to put as my N date 2021, let's go into February but let's only go up to say the 15th and we'll use 00 and 00, the stopping hour and minute.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=192)** And again, let's cast that at a timestamp.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=196)** And then, the one of the thing we need to put when we working with generate series and we're working with time series is put in some kind of interval specification.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=205)** So I'm going to generate a timestamp for every minute.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=209)** So I would say one minutes and let's call this a stable two, the series, let's see, kind of correct.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=225)** And what you'll notice here as I'm now generating a series of timestamps that are increment in one minute steps.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=233)** So as you go along, we'll see that we're still in 01, 01 and we're going down so we'll have about 60 timestamps for the first hour and so on.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=245)** The reason this is going to help us is we're going to be able to use this generate series to actually create our generated data.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-data-with-generate-sequence?u=76281980&t=253)** So let's take a look at that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (3), function (2), case, (1), this. (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Env Vars:** iot (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Generating time series data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=0)** - [Instructor] Now I'm starting off from where I left off in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=4)** And here we have a select statement that uses generate series to create some timestamps for us.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=10)** Now, what I'd like to do at this point is actually use this and another generate series to generate a series of sensor IDs, and then a set of timestamps.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=23)** But what I want is I want each sensor ID to have all of the timestamps.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=28)** So let's see how we can do that.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=30)** So first of all I'm going to be turning this select statement into a subquery.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=37)** And just to make it a little less spread out I'll just do a little bit of formatting here, okay.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=46)** Now I also want to be able to generate the sensor ID.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=51)** So I'm going to put in a select star from generate series and let's go from one to 100 and this is going to be a subquery.
>
> **[1:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=65)** So I'm going to say, let's call that as T1 and here this will be a sub query as well.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=74)** And that'll be as T2.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=76)** So by saying a subquery I mean a subquery in the from clause.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=80)** So I'm going to select star from these two subqueries.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=87)** Oh, sorry.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=88)** I didn't mean to execute the query.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=89)** I meant to indent these.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=93)** There we go.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=94)** Now, first thing I need to do is get my syntax correct by putting a comma there but you'll notice here we have two tables or two projections actually in the, from clause and there's no joint statement and that's intentional because when we don't put a joint explicit joint clause in and we have two tables, then Postgres is going to generate the Cartesian product or basically a one to all mapping for the rows in each table.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=121)** So here in our first subquery we're going to generate 100 rows.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=125)** Each one of those rows is going to be joined to each of the time series that are generated by the second select statement.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=132)** So let's run that and see what we get.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=136)** Now, what we'll notice here is we have the generated series begins with one, which is as expected.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=143)** And for the one, we also have each of the time series that we saw before that's generated, you know, 60 per hour each one of those is joined to the integer that we generate.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=155)** So we're going to have a large number of timestamps and generated sensor ID numbers.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=162)** So this is great.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=162)** This is what we need to basically start our table.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=165)** Now let's take a look at our table actually and let's do a refresh to make sure it's up to date.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=172)** And there's sensor management.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=173)** Let's look at the columns.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=175)** So we have our sensor ID and our measurement date or a timestamp.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=179)** So the next thing we need to do is generate some random data for temperature and humidity.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=184)** So random of course, is a good choice of random function.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=187)** So let's think about this.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=189)** How can we use these generated sensor IDs and timestamps but then also easily get data for temperature and humidity?
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=201)** Well, one way to do that is to use a common table expression and create a common table expression for this query right here.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=210)** So to do that, we'll say with and let's call this sensors date times as and let's indent this a little bit and we'll close up that.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=223)** So now we have something called sensor datetimes which we can use in another select statement.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=230)** So we'll select something from sensors datetimes, okay.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=237)** Have that spelled right.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=238)** And let's say here set with ST.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=240)** So the first thing I want to do is I definitely want to select everything from that's in sensor datetime.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=244)** So I'll just use SD star for that.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=247)** And now I want to generate some random numbers for let's start with temperature.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=251)** So we're going to use the random function and random returns, a decimal between zero and one.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=257)** And let's say, I want my temperatures to be say between zero and 30 degrees Celsius.
>
> **[4:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=262)** So I'll multiply by 30.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=264)** Now I specified temperature and humidity to be integers.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=268)** So I'm going to take the floor function which just essentially drops off the decimal part.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=274)** The counterpart is ceiling.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=275)** If you want to, you know, have a decimal number and then go up to the next highest number that would be ceiling, but we'll just use floor here.
>
> **[4:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=282)** And I'm going to alias that as temperature and we'll follow a similar pattern for humidity.
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=291)** We'll use a random number and let's say humidity and the up to 80%, and we'll say that as humidity.
>
> **[5:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=304)** And so now what we're going to do is we're going to select everything from our sensor datetimes and then we're going to generate a random number for temperature and humidity for each row.
>
> **[5:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=316)** So let's run this I'll double check commas, syntax looks correct.
>
> **[5:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=321)** Let's give that a try.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=324)** Okay, so let's take a look and as expected.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=327)** So now what we have is we have our sensor IDs.
>
> **[5:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=330)** We have all of our time series and now we have a temperature and humidity value for each row.
>
> **[5:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=337)** So now we have our data, we've created our data.
>
> **[5:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=340)** So the next thing we have to do is just simply save this or basically store it into our sensor measurement table.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=348)** So for that, we can just use an insert statement and we can say insert into IOT schema.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=354)** And the name of our table is sensor measurement, or MSMT.
>
> **[5:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=359)** And then we wrap this in parentheses and wrap that in parentheses.
>
> **[6:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=367)** And just for readability we'll indent this and we can just stop checking.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=373)** That looks good and we'll execute this.
>
> **[6:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=378)** Okay, so we have created our data.
>
> **[6:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=383)** What you'll notice here is that we have about six and a half million rows inserted.
>
> **[6:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=388)** So we have our data and we have it inserted into our table.
>
> **[6:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/generating-time-series-data?u=76281980&t=392)** So now we're ready to work with explain plan.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (3), this. (2), try. (1)
> **CLI Commands:** make (2)
> **Env Vars:** iot (1), msmt (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Analyzing a query with WHERE clauses and indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=0)** - [Instructor] Now let's take a look at using explained plan with a select statement that has a where clause.
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=5)** So to do that, we're going to explain select, let's just select star and we'll work with our time series data.
>
> **[0:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=13)** So we'll say from, the IOT schema and we're going to use sensor measurement and let's say where sensor ID between 10 and 20, and let's execute that, and let's see what come up with.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=37)** A couple of things to point out here.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=38)** Here this top level operation, the append is sort of the outermost operation and then we can kind of drill down almost like in a modular way to the next set of operations.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=49)** So the first operation under a pen, is a sequence scan and you'll notice it's scanning one of the partitions.
>
> **[0:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=55)** Now this is the month one partition and below that there's another sequence scan scanning the month two partition.
>
> **[1:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=61)** So these are two operations that can happen in parallel and Postgres can optimize and do things in parallel sometimes depending on configurations.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=71)** But we want to notice here is we're doing a sequence scan and basically a sequence scan is basically, I'm going to look at everything in the table and see when I hit a row that satisfies a particular filter condition.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=83)** Now at the top, we have a cost here which goes up to about 142, 000 and it's an arbitrary like measure of computational load that Postgres uses.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=93)** So the number itself or the units of measure, isn't all that important, it's more like from a relative perspective if you're comparing query plans you want to look at that number.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=102)** Now we're doing a full scan or basically because we don't have any indexes so let's create an index and then see what happens.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=109)** Now I'm using sensor ID in the where clause so I would create an index on that and let's call it IDX and this is on sensor measurement and it's on the sensor ID so we'll call it that on and then the table is IOT sensor measurement.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=129)** And it's sensor ID that we're interested in.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=134)** So let's execute the create index statement and now let's look at the explain plan.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=141)** And what you'll notice is a significantly smaller number here.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=144)** Let's see what's going on.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=146)** Instead of a sequence scan we're actually scanning just the indexes.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-where-clauses-and-indexes?u=76281980&t=152)** So this is how we can see whether or not indexes are helping us in particular queries is by just doing comparison, do an explain plan before and after creating the index and you can get a sense of how useful that particular index is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), from, (1)
> **Env Vars:** iot (2), idx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Analyzing a query with a join
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=0)** - [Instructor] Now Explain Plan is also useful for understanding how Postgres implements joins.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=6)** So let's take a look at that.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=7)** Now, the first step of course is we need another table to join to our sensor management table.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=12)** So let's just create a simple little reference table for our sensor IDs.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=16)** Let's make a table that gives a name for each ID and we'll keep it simple.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=21)** We'll just call our sensors, we use the word sensor and then append the sensor ID and that'll be the name.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=28)** So for that, I'm going to use the generate series again.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=32)** So we'll do a select, select i from generate_series and we have 100 sensors so we'll go from one to 100 and we'll alias that as i.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=48)** Okay, so that gives us our list of 100.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=51)** And we're going to use this as part of a common table expression.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=54)** So I'll say with, let's call the sensor IDs as, and we'll say select as i, and we will select i as ID and then we'll create Sensor and we'll actually use Sensor with a space after it, we'll concatenate that sensor ID number.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=81)** So concatenate i and cast it as a text.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=85)** And let's alias that as sensor_name.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=89)** And of course, we're going to be selecting this from our common table expression which has sensor_ids.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=96)** So let's double check.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=100)** Looks like the comma is in the right place.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=102)** And so now what we have is a list of 100 IDs and 100 names.
>
> **[1:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=107)** So that's great.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=108)** So basically this just gives a table we can join to and we'll look up a name on it.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=112)** So let's finish by now creating a table with this data.
>
> **[1:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=118)** So we'll create table iot_sensors as with in parentheses, format that.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=133)** Okay, so now we have a table called iot_sensors and I'm just going to jump over here real quickly to refresh.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=140)** And let's see, we have our sensor measurements and then we have sensors.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=144)** And let's just check our column names to make sure ID and sensor_name.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=151)** So that looks good.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=153)** All right, so we have a table now that we can join to.
>
> **[2:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=156)** So now we're going to be doing an explain on a select statement.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=162)** And what I want to do is I want to get a sensor name from the sensors table and then some measurements in the date from the sensor measurement table.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=171)** So let's see, I'm going to select from iot.sensor measurement and let's alias that as sm and we're going to be doing a left join on iot.sensors and that's plural.
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=189)** And let's alias that as s, and we're going to be joining on the sensor measurement.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=197)** We're going to use sensor ID and in our sensor table, and the corresponding column is ID.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=205)** And so that's what our join looks like.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=207)** And now let's put some columns in here.
>
> **[3:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=211)** Let's get sensor name from that new table we just created.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=216)** And from the measurement table let's get the measurement date time and temperature and the humidity.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=228)** See if everything looks correct.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=231)** So we have an explain, are from left join, okay?
>
> **[3:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=236)** Check that.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=238)** So what we have here, I'm going to scroll up over the text of the query so I can see what's going on here.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=245)** Now, what you'll notice at the top, so the top level thing that's going on is a Hash join.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=251)** So again, there are three different kinds of ways of doing join.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=254)** There's a nested loop which works really well with small amounts of data, small tables.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=259)** Hash join which works well when you have like large tables or you're scanning all the tables.
>
> **[4:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=263)** And so we have a Hash condition here and I won't go into all of the details but we'll notice we're doing sequence scans and sequence scans tend to be expensive but we're joining on the whole table and we don't have any filtering down.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=276)** So it's not unusual to see a full table scan.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=280)** So here we have a join and it shows us how we're going to be able to join over an entire table.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=288)** So let's make this a little bit smaller in terms of the amount of data that we're going to work with.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=293)** And let's add a where clause and let's say where the sensor ID is equal to, let's pick 30.
>
> **[5:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=305)** Now here, you will notice we've switched now.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=309)** We're no longer doing a Hash join.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=310)** And that's because we're working with a small amount of data.
>
> **[5:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=313)** In fact, just one row from the sensors table.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=315)** So we can switch over and use a nested loop.
>
> **[5:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=318)** And so again, so we don't have to do something as complicated as a Hash join.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=324)** So again, we can get a sense of which of the three techniques for implementing joins are being used by Postgres.
>
> **[5:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=332)** So again, there's nested loop.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=333)** That works well when you have small amounts of data, Hash joins when you're working with a lot of data and sort merge if you're working with a lot of data and you have a sort, you need to order the results.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/analyzing-a-query-with-a-join?u=76281980&t=343)** If you see yourself doing nested loop joins when you have a large amount of data that's a good indication that you might want to go back and look at your join criteria and also any use of indexes if possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), implements (1), switch (1)
> **Code Identifiers:** sensor_name (2), iot_sensors (2), generate_series (1), sensor_ids (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Optimize a query using an explain plan
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=5)** - [Instructor] Let's consider a challenge around query performance optimization.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=9)** So imagine that a colleague has asked you to help them analyze a long-running query that they're working with.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=15)** Now you take a quick look and you realize, okay, the query has three tables and two left joins.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=22)** Two of the tables have over 500,000 rows and one table has 200 rows.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-optimize-a-query-using-an-explain-plan?u=76281980&t=28)** So given that, how would you proceed to improve the query performance?

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Optimize a query using an explain plan
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=0)** - [Instructor] Now the first thing we'd want to do if we're trying to understand query performance is to run an explain plan on the query.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=12)** That'll give us a breakdown of the steps that are actually being executed.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=16)** Now, as you're looking at those steps, some things you might want to keep an eye out for are things like a full table scans or sequence scans, where we're scanning large amounts of data.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=25)** That's often an opportunity for creating indexes.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=29)** Also, you want to assess how the indexes are used with joins.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=33)** So in particular, if you think that an index should be used on a particular join, and if it's not being used, then that may mean the index was dropped, or there's some other reason the index isn't being used, but it's something worth investigating.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=46)** And we also want to look for opportunities to filter the dataset side.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=50)** You know, a fast running query is a query that doesn't have to look at a lot of data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=54)** So if there are opportunities to reduce the amount of data that are pulled back from the large tables, that could be a help as well.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=62)** And then finally, just in the off case the statistics are off, you could run the analyze command to make sure statistics are up to date.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=70)** So those are just some of the solutions you can take to this challenge.
>
> **[1:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=75)** Query optimization is a really in-depth area that we can dig into, and it's more than we can cover in this course.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=82)** However, there is a course in the catalog on SQL query optimization and tuning.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-optimize-a-query-using-an-explain-plan?u=76281980&t=88)** So I highly suggest you look into that course if you are interested in learning more about how to use explain plan, and how to how to really get better performance out of your queries.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. User-Defined Functions

#### Extending SQL with user-defined functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=0)** - [Instructor] Now we're going to shift our attention to extending SQL.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=3)** And this is actually one of the more interesting topics with regards to advanced SQL, which is how do we get beyond what is given to us essentially in the box in the Postgres or whatever database we're using.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=15)** How can we make it even more functional from a data science perspective?
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=19)** Well, the first thing to note is that of course, SQL provides many types of functions for operating on data and we use them all the time.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=27)** But in terms of the universe of all possible functions we might need to work with from a data science perspective, what SQL provides is a small fraction.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=37)** So there are many more functions we might want to be working with.
>
> **[0:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=40)** So for example, SQL will provide aggregate functions for us, string manipulation functions, pattern matching, date/time, and geometric functions.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=50)** And these are just a small number of examples.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=54)** But we sometimes need custom functions.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=57)** So let's think about say a retailer might have a customer loyalty program where they calculate different levels, like a one-two-three or a gold-silver-bronze based on how much a customer has purchased in the last year or the value or something like that.
>
> **[1:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=70)** We also might have say some customers who are behind on payments and we want to sort of prioritize who do we focus on first.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=77)** So we might want to have a priority score.
>
> **[1:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=80)** In other cases, marketers or salespeople might want to predict how valuable is this customer to us over the lifetime of the relationship with the company?
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=89)** How much are they going to spend?
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=90)** Also, we might want to be able to say predict if we were a bank or a lender of some kind making predictions about what's the probability that this person will default on a loan?
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=101)** So when we're working with Postgres, there are five types of user-defined functions.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=106)** There are query language functions, which are written in SQL.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=109)** There are procedural functions, which are written in a procedural language called PL/pgSQL which is a combination of both SQL and something like a Pascal-like structured programming language.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=122)** So if you're familiar with some of the older languages, ALGOL, Pascal, PL/pgSQL is similar to that.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=129)** Now, another type of user-defined function is an internal function.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=133)** Now, these are written in C and statically linked to the Postgres platform, the main engine.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=139)** So this is something you only use if you are really working on the Postgres platform and you're trying to extend it.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=146)** There are also C language functions that are available through shared libraries, so they're not necessarily linked in post compile time, but they're shared at run time.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=153)** So that's another way to work with user-defined functions.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=158)** But again, these are C-level functions and not something we typically use when we're say working with data science functions.
>
> **[2:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=165)** There's also an extension called PL/Python which allows you to write user-defined functions in Python.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/extending-sql-with-user-defined-functions?u=76281980&t=171)** And there are a lot of advantages to that, but I just want to note right off the bat that PL/Python is not a trusted language, which basically means you could really do some damage to the database if something's not quite right in your Python, so use PL/Python with caution.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), algol (1)
> **CLI Commands:** python (5), make (1)
> **Definitions:** is a  (2), is an  (1), basically means (1)
> **Code Keywords:** function (2), let (1)
> **Code Identifiers:** pgsql (2)
> **Analogies:** for example (1), similar to (1)
> **Cross-References:** in the last (1)
> **Warnings:** caution (1)

#### SQL query functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=0)** - [Instructor] Now let's take a look at SQL functions.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=3)** Now SQL functions are basically query language functions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=6)** So these are different from, say, writing a procedural code either in PL/pgSQL or in C or in Python.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=16)** And so we're really writing in declarative language.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=19)** So basically, we can execute an arbitrary list of SQL statements all at once in a single function.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=25)** Now the thing to keep in mind about query language functions is that the last statement either has to be a select or the function has to be declared void.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=34)** So if you're familiar with some procedural languages, you know, Java, C, sometimes, you can have a function which doesn't return anything, you declare it as void, which is basically means it's, you know, it's just a procedure, it has side effects, it doesn't return a value.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=49)** Similar for query language functions, you can declare it as void.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=52)** Also important to note that although functions are typically functional, which means they return one value, that one value can be a set, so you can actually have multiple rows, and that would be by declaring that you are returning a set.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=68)** Now there are the types of SQL statements that you can work with inside a procedure include the select, insert, update, delete.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=76)** So your basic, you know, create, read, update, delete or CRUD functions are available to you.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=82)** Now what's not available is anything involving things like transactions, where you'd like specifying a begin and then a commit or a rollback or a savepoint where you're doing like a checkpoint.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=94)** You can't do any of those things in a function.
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=97)** Those are definitely side effects, but, like, from a procedural perspective.
>
> **[1:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=102)** But they're not allowed.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=103)** They're too big of a change within a database to allow them within a function.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=108)** Now the way we create functions is with the create function statement.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=112)** And no surprise here, it just creates a new function.
>
> **[1:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=116)** I want to point out that Postgres has another way of creating a function, which is called create or replace function.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=122)** And that's really nice, because if the function exists, it'll update the definition.
>
> **[2:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=127)** And if it doesn't exist, it will create it for you.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=131)** But I want to distinguish this from the drop and create function.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=136)** Now if you drop a function and then create it, it sounds a lot like, well, that's the same as create or replace, but it's not.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=143)** When you drop a function, you actually delete an existing function.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=146)** And then you create a new function.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=149)** Well, that new function essentially has a new identifier.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=152)** And so if you referred to that function in rules, views, triggers, you need to drop those and recreate them, because now you need the new identifier that goes along with the new function.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=163)** So again, if you are, just want to replace a definition, then use create or replace.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=169)** If you really want to wipe it out and absolutely start from scratch, then drop function plus create is the way to go.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=175)** Okay. Let's look at an example of a function where you might want to create.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=179)** Now harmonic mean is a kind of average.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=182)** It's one of the Pythagorean means.
>
> **[3:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=184)** And basically, it's a reciprocal of the arithmetic mean.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=188)** And we often see it used like with rates.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=190)** So if you have a problem where you're, say, driving at 50 kilometers an hour for part of a trip, and then, you know, you're going back, and you're driving at 25 kilometers per hour, you know, what's the average rate?
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=201)** Harmonic mean is what will give you the, you know, sort of the correct average mile per hour across that whole time span.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=209)** Now from a data science perspective, it's also used a lot with information retrieval in machine learning, particularly, when we combine precision and recall numbers.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=218)** So we have two measures that we typically use in machine learning, precision and recall, in terms of classification problems.
>
> **[3:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=224)** But sometimes, it's nice to work with just a single number that combines them both.
>
> **[3:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=227)** Harmonic mean works really well for that.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=229)** And in terms of information retrieval, it's often called the F-score or F1-score.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=235)** Now let's imagine we are managing a hotel, and we have these two rates that we keep track of the bed occupancy rate and the room occupancy rate.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=244)** Now these are really two different things, just like, you know, precision and recall, they're different things.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=249)** We want to compute a harmonic mean of those.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=253)** Well, we could simply spell it out by doing as we do here.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=257)** We're going to round at the product of, you know, this division of a two times the bed occupancy rate times the room occupancy rate divided by bed occupancy rate plus room occupancy rate.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=268)** And oh, by the way, let's cast that as a numeric.
>
> **[4:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=271)** And let's name it as composite occupancy rate.
>
> **[4:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=274)** So we could do that.
>
> **[4:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=276)** We could write all that code in a SQL statement every time we need it to compute the harmonic mean.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=281)** Alternatively, we could just create a function.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=284)** So what we're doing here is we're specifying the create function statement.
>
> **[4:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=288)** We give it a name called harmonic mean.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=290)** It's a function, so we can have parameters.
>
> **[4:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=293)** And in this case, we have two parameters, X and Y, both of which are numeric data types.
>
> **[4:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=297)** We're returning a numeric type to type.
>
> **[5:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=301)** And our definition is then captured in between the dollar sign dollar sign and the second dollar sign dollar sign.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=309)** Basically, that dollar sign dollar sign is a way within Postgres that we can specify a literal string.
>
> **[5:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=315)** So there's other ways to do it with quotes and things, but definitely, the convention is to use dollar sign dollar sign as the start of this string when working with create function.
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=323)** In essentially the body of the function, I'm saying select the round of the two times the product of the two parameters divided by the sum of the two parameters and cast that as a numeric and pass it back.
>
> **[5:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=335)** The last statement after the closing dollar sign dollar sign, so I've closed off the string, I'm just specifying language SQL.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=343)** So I could also specify language PL/SQL, or if I was working with some other language, I could specify that.
>
> **[5:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=349)** But that is the, essentially, an example of how to create a function.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=354)** So now let's jump over into Postgres and actually see in action.
>
> **[5:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=358)** So basically, here I'm working in our iotschema.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=362)** So let's say I've got a couple of measures in my central measurement table that I want to use harmonic mean for for some reason.
>
> **[6:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=367)** So the first thing I'm going to do is say create function.
>
> **[6:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=372)** And I'm going to give it a name, and I'll call this harmonic mean.
>
> **[6:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=376)** And I'm going to use two parameters.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=379)** I'm going to use X which is a numeric and Y which is also a numeric.
>
> **[6:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=384)** And I want to tell it that this function is going to return a numeric value.
>
> **[6:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=390)** And now I want to specify this as, so this is kind of like create views something as, this is create function something as.
>
> **[6:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=398)** Now because we're working with strings here, I've got to put my dollar sign dollar sign in to say, okay, this is, I'm starting a quoted string.
>
> **[6:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=406)** And I'm going to say select.
>
> **[6:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=408)** And I know I need to round my number.
>
> **[6:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=411)** And I'm going to use try two times my parameter X, times my perimeter Y.
>
> **[7:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=420)** And I'm going to divide that by X plus Y.
>
> **[7:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=426)** And I want to cast this as a numeric.
>
> **[7:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=431)** And I want to round it to two decimal places.
>
> **[7:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=435)** Now let me just make sure I got my parentheses correct.
>
> **[7:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=439)** That closes correctly, and that closes correctly.
>
> **[7:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=442)** Okay, great.
>
> **[7:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=443)** Now I just need to close off my quoted string and tell Postgres I'm working with SQL and give it a run.
>
> **[7:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=457)** Ah, what's happened here is that I have already defined this function in this schema, so what I should have done is written create or replace.
>
> **[7:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=468)** Because essentially, what I want to do is update the function.
>
> **[7:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=471)** Also, I want to point out in this error message.
>
> **[7:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=473)** Note that it says the function harmonic mean already exists with same argument types.
>
> **[8:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=480)** So it's not saying it simply it already exists, but it already exists with same argument types.
>
> **[8:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=485)** That is a reference to a concept called overloading which we will discuss shortly.
>
> **[8:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=489)** So I'm going to change this to create or replace function and execute it again.
>
> **[8:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=496)** And now I succeeded.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=498)** So now the next thing I want to do is, I just want to execute a select statement.
>
> **[8:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=502)** I want to use this function.
>
> **[8:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=503)** So let's select harmonic.
>
> **[8:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=506)** And let's pass in the parameters of two and seven.
>
> **[8:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=510)** And this is the only thing I want to execute, so I'll highlight that and execute.
>
> **[8:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=515)** And here I get 3.11.
>
> **[8:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/sql-query-functions?u=76281980&t=517)** Now this, of course, is different from the average.

> [!info]- Semantic Content
>
> **Code Keywords:** function (34), let (10), delete (3), pass (2), from, (1)
> **Env Vars:** sql (8), crud (1)
> **Definitions:** is a  (4), basically means (1), is called (1)
> **Analogies:** imagine (1), just like (1), kind of like (1)
> **CLI Commands:** python (1), make (1)
> **Warnings:** keep in mind (1), note that (1)
> **Code Identifiers:** pgsql (1)
> **Versions:** 3.11 (1)

#### Function overloading
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=0)** - [Instructor] Postgres supports the concept of function overloading.
>
> **[0:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=4)** Now basically what this means is that a single function can actually have multiple definitions.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=9)** Now, the way we do this is we use multiple create function statements, but those create function statements have different signatures or a different set of parameters.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=19)** So for example, we could create a harmonic mean like the one we have created earlier, which takes in two arguments, both of which are numeric.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=28)** We could also create a harmonic mean that takes in text values and then converts them.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=35)** Function overloading is useful when the same function can apply or be applied to different data types.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=41)** Now, one thing you want to keep in mind is you want to avoid anything that might be ambiguous in terms of how Postgres will interpret the particular signatures.
>
> **[0:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=51)** So for example, if we called a function, let's call it ambiguous, and we passed in the value eight, well eight could be either an integer or a small integer.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=62)** So if we had two create function statements which took in one parameter, one was an integer and one was a small integer, Postgres wouldn't necessarily know at the time it's processing that which of those signatures to use.
>
> **[1:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=76)** So we want to make sure that we avoid those kinds of ambiguities.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=79)** So let's take a look at an example.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=82)** Now we've already defined a function called harmonic mean and now what I want to do is create another version or overload this function harmonic mean by specifying that someone can pass in the two parameters as text and we would simply change the definition accordingly.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=101)** So in this case using text inputs, we'd want to convert the text into numeric types so we explicitly cast them as numeric.
>
> **[1:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=110)** Now let's take a look at how we define overloaded functions.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=115)** So I'm going to say create or replace function harmonic mean and we're going to specify the first perimeter as numeric, second as numeric.
>
> **[2:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=130)** And we're going to specify that it returns a numeric string start indicator.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=138)** And we'll say that we are going to select.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=142)** And if you recall, the definition of harmonic mean is two times X times Y divided by X plus Y.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=153)** And we want to round this to two decimal places.
>
> **[2:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=159)** And just to be explicit, we can say we want to cast the results as numeric.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=167)** And we'll just specify the end of the definition and of the actual function code and we have to tell Postgres which language we are using.
>
> **[2:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=176)** We'll specify SQL.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=178)** And let's just run that just to make sure I got that correct.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=181)** So everything's correct there.
>
> **[3:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=183)** Now what I can do is let's specify it with text.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=187)** So here I'm going to just say create or replace function harmonic mean.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=193)** So it's exactly the same name.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=195)** There's no need to change that, what's changing is the parameter signature or what we put in the parameter list.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=201)** I'm still going to call it X, but now I'm going to specify the data type as text.
>
> **[3:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=206)** Y is a text.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=209)** Now, I still want this to return a numeric so I'll specify numeric as the result.
>
> **[3:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=216)** As dollar sign, dollar sign, and here I'm going to select.
>
> **[3:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=221)** Now I'm going to do two times X, but X is a text so I need to cast that explicitly as numeric.
>
> **[3:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=228)** And I'm also going to multiply by Y which again I have to specify explicitly as numeric.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=235)** That's slightly easier to read.
>
> **[3:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=237)** So that is the first part, that's our numerator so let's build our denominator here, which is simply X plus Y.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=244)** And again, we'll specify a casting plus Y numeric.
>
> **[4:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=250)** We'll round this up, round up to two.
>
> **[4:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=254)** And we'll explicitly say numeric again.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=257)** This is overkill, Postgres wouldn't have a problem figuring that out, but I'm putting it in in language is SQL.
>
> **[4:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=265)** And let's see if I got that right.
>
> **[4:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=266)** So this closes that, that closes correctly, that closes with the round.
>
> **[4:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=275)** That looks correct so let's run that.
>
> **[4:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=277)** So now we have both functions created.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=281)** So now let's try select harmonic mean of 2.2 and 7.1.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=292)** And we'll run that and we get an answer.
>
> **[4:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=296)** Now let's add harmonic mean of quote 2.2 and quote 7.1.
>
> **[5:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=307)** And let's run that.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=310)** Now what you'll see is we're getting the same answer which obviously we would expect to do.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=314)** So this is a little bit of a contrived case where we're passing in text values as numeric, but actually this can occur if you're doing a lot of like extraction load transform kind of work.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-overloading?u=76281980&t=324)** So if you're working with say imported data or something like that, oftentimes you might have issues where you have to do either conversions or in this case, you can actually do function overloading to help you avoid some of the overhead of constantly converting different data types.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (11), pass (1), case, (1)
> **Versions:** 2.2 (2), 7.1 (2)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Env Vars:** sql (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Function volatility
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=0)** - [Instructor] Function volatility is something we need to consider with regards to optimizing the performance of our functions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=6)** Now, functions have a volatility classification and basically this classification is essentially like a promise or an indication of what kind of behaviors the function performs, or more practically, the kinds of things it won't do.
>
> **[0:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=21)** This allows the optimizer to make certain assumptions about what optimizations are safe for that particular function.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=29)** Now, there are three classifications: volatile, stable, and immutable.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=34)** If you don't specify a classification, volatile is the default classification.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=41)** A volatile function can perform any operation, including making changes to the database.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=46)** So you can insert, you can update, you can delete.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=49)** And this is because the optimizer doesn't make any assumptions about the function in terms of optimizing the way the code might run.
>
> **[0:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=58)** And this is something to keep in mind, the function is reevaluated at every row the function is needed.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=64)** So if you're applying this function to every row in a very large table and you haven't specified a volatility classification, it will be reevaluated at every row in that table.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=77)** So, definitely use volatile functions and specify them as volatile when you have to, but use one of the other classifications if you can.
>
> **[1:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=88)** Now, stable is the second classification.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=91)** You cannot modify the database with a stable classification, so no deleting, updating, inserting.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=98)** Another thing is it's guaranteed to return the same results given the same arguments for all rows within a single statement.
>
> **[1:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=105)** So for example, if you have a select statement, and you're calling a function and that function is applied to many rows across the table, anytime a particular row has the same parameters as another row, they will always get the same result from that function.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=123)** That's one of the things that we guarantee or promise to the optimizer when we specify a function is stable.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=131)** And with stable, we get some optimizations.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=134)** So it's definitely, if you can specify it as stable that's better than volatile in terms of performance when you're working with especially large data sets.
>
> **[2:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=142)** Now immutable is the most restricted, and of course like stable, it cannot modify the database.
>
> **[2:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=148)** We're guaranteed to return the same results given the same argument in all cases.
>
> **[2:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=152)** it's not just restricted to a single statement.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=155)** So anytime you call this function with say parameters two and three, you're always going to get the same answer.
>
> **[2:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=161)** A function labeled as immutable basically tells the optimizer that it can just do as many optimizations as available for a function.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=170)** So let's take a look at an example here.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=172)** This is our harmonic mean function, which we've seen before.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=175)** And you'll notice here in the last line, after we specify the language, which in this case is SQL.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=181)** We're specifying the volatility classification, which in this case is immutable because the function is immutable.
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=188)** Under any circumstances if we have two parameters which are the same, and they are called at different times, they will always have the same result.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=198)** Now there's some things you want to keep in mind about volatility.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=201)** For performance purposes, you want to use the most strict volatility classification that's possible.
>
> **[3:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=207)** That's going to give you the best performance.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=209)** Now, any function with any kind of side effects that's altering something, that's changing the state of the database, that has to be volatile.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=217)** Also, if a function has no side effects, but it uses another function.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/function-volatility?u=76281980&t=222)** So for example, in our harmonic mean, if we made a call to another function, say like the random function or the time of day function, well those can change during the course of the execution of say a long statement, or random, it can change at any time and will change across rows, those functions need to be labeled as volatile.

> [!info]- Semantic Content
>
> **Code Keywords:** function (23), delete (1), let (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### PL/Python functions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=0)** - [Instructor] Now, it is possible to write user-defined functions in Python when using Postgres.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=7)** And we write Python by using the PL/Python language.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=11)** So the PL/Python language is a Postgres extension.
>
> **[0:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=16)** And as I mentioned, it makes it possible to write SQL functions in Python.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=20)** And what we would do is basically call the create extension command.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=24)** And in this case, we could call the create extension command and then specify plpythonu and then either version two or version three.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=32)** Now, let's look at some pros and cons.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=34)** Now, there are definitely reasons to use Python.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=37)** For many people who work in data science, we already know Python.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=41)** It's a well-developed language.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=43)** We have a lot of tools in it.
>
> **[0:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=45)** We have ecosystems for developing around Python.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=48)** We can also reuse code we've already written.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=50)** We might be able to just copy and paste some stuff into our user deploying functions.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=54)** And one of the other nice things is if we have to write procedural code for the database, you can avoid having to learn something like PL/pgSQL, which is an older procedural language.
>
> **[1:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=64)** Now, there are also some cons or some reasons not to use it.
>
> **[1:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=67)** So first of all, Python is not a trusted language within the Postgres database.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=71)** And what that means is that the code in your functions could damage the database.
>
> **[1:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=77)** There's no sort of guarantees.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=79)** There's no guardrails protecting what you write from damaging the database.
>
> **[1:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=83)** So that's what we mean by not trusted.
>
> **[1:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=86)** Also, the installation can vary slightly by Postgres package.
>
> **[1:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=89)** So yes, you always call create extensions, but depending on which package you use or which installation method you use, you may have to kind of hunt around and look for different libraries that might not be found by the create extension.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=103)** So you definitely want to look at the documentation for your particular SQL package when installing this.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=109)** Now, with installation, you need to use a user that has superuser privilege.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=114)** Now, when you're creating PL/Python, you can specify the create extension and specify plpython3u if you want to use Python 3, or you can specify create extension pythonu and that'll use Python 2.
>
> **[2:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=131)** Now, that's not recommended.
>
> **[2:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=132)** Python 2 is no longer supported.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=134)** So going forward, it's better to use Python 3 just in general.
>
> **[2:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=138)** So here's an example of a function.
>
> **[2:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=141)** Now, notice we used the create function syntax that we saw earlier.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=144)** And here, we're going to specify a function called pymax, which is simply going to take the maximum of two integers.
>
> **[2:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=150)** And you'll notice we have the typical function signature with create function, a function name, a list of parameters, a return statement, and then a data type as and then we have our string.
>
> **[2:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=162)** The string part is what is written in Python.
>
> **[2:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=166)** So here we just have a simple Python statement, so if x is greater than y, return x.
>
> **[2:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=170)** Otherwise, return y.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=171)** And then at the end, we specify this language and the language that you would specify is what you specified when you created the extension.
>
> **[2:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=178)** So in this case, we're assuming we're working with Python 3.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=182)** Now, some key points to remember about PL/Python.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=185)** You need superuser privilege to install.
>
> **[3:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=187)** So you might have to issue a command like alter user Postgres with superuser or you could substitute for Postgres some other user that you want to be installing this extension.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=197)** And then once you have it installed, then others can write the PL/Python functions.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=201)** They don't need to be superusers.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=203)** And also you want to remember with PL/Python, arguments that you pass in, those are treated as global variables, and there are ways to modify them if you declare them as global within Python, but it's best to treat those arguments as read-only variables.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/pl-python-functions?u=76281980&t=217)** And so if you do need to change those values or something, just copy them to a local variable, then make the changes there.

> [!info]- Semantic Content
>
> **CLI Commands:** python (21), make (1)
> **Code Keywords:** function (6), case, (2), let (1), this. (1), pass (1)
> **Versions:** python 3 (3), python 2 (2)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** recommended (1), it's best to (1)
> **Code Identifiers:** pgsql (1)
> **Documentation:** the documentation (1)

#### Challenge: Write a user-defined function
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-write-a-user-defined-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-write-a-user-defined-function?u=76281980&t=0)** - [Instructor] In this challenge, I'd like you to write a SQL function that returns a Boolean and the function will return true, if an input string is a palindrome.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-write-a-user-defined-function?u=76281980&t=15)** That is the string is the same in reverse as it is going forward.
>
> **[0:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-write-a-user-defined-function?u=76281980&t=20)** So, for example, the string abccba is the same in going forward and going in reverse.
>
> **[0:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-write-a-user-defined-function?u=76281980&t=27)** So, again, just write a SQL function that we will call isPalindrome.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3)
> **Env Vars:** sql (2)
> **Code Identifiers:** ispalindrome (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Write a user-defined function
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=0)** - [Narrator] This is our solution to the challenge to create a function called is_palindrome, which returns True when a string that's passed in is the same in reverse as it is going forward.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=17)** You'll notice, we specify our create or replace function.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=22)** Then we have our signature, followed by our function name, which in this case is, is_palindrome.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=28)** We have a single parameter called STR, which is a type text and the function returns a Boolean.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=34)** Then we specify the body of the function.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=38)** Here, it's pretty straightforward.
>
> **[0:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=39)** We're just going to use the reverse function.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=41)** We're going to take the string, reverse it and see if it's equal to the string that was passed in.
>
> **[0:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=47)** The other thing I want to point out is that because this function will always return the same value under any conditions, what if the parameter is the same at any time in the future?
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=60)** The results would always be the same.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=62)** That means we can specify that this function is immutable.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=66)** Finally, look, we can just run a test by selecting is_palindrome with an actual palindrome value.
>
> **[1:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=73)** That should be True, and this value should be False.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=78)** We can just execute that.
>
> **[1:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=81)** As we see, the first argument actually is a palindrome, so we have a value of True returned.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=87)** The second example, is_palindrome with foobarbaz, is not, so we have False return.
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-write-a-user-defined-function?u=76281980&t=93)** That's basically the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), finally, (1), return. (1)
> **Code Identifiers:** is_palindrome (4)
> **Definitions:** is a  (2)
> **Env Vars:** str (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Special-Purpose Functionality

#### Federated queries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=0)** - [Instructor] Now, there may be times we want to work with data that's not in the database, and we don't actually want to load the data either, but we'd still like to have access to it through SQL.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=9)** In that case, we could use something known as federated queries.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=12)** Now, federated data is data that's outside a database, but is still accessible by SQL.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=18)** This is made possible by a SQL standard called SQL/MED, or management of external data.
>
> **[0:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=24)** And it defines a number of different abstractions, but the sort of key ones are foreign data wrappers and datalinks.
>
> **[0:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=31)** Now, a foreign data wrapper is a specification and a module or a package that allows us to view data that's outside the database.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=41)** Datalinks compliment foreign data wrappers.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=43)** They provide functionality we expect to have in a database like integrity, functions, recovery mechanisms, and authorization mechanisms.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=52)** So, the way we create a federated data source is first we create an extension called postgres_fdw.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=60)** Now, an extension is a module which is part of Postgres, but it is not installed by default.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=68)** So when we want to install an extension, we use the CREATE EXTENSION command, and then we specify the name of the extension we want to install, which in this case is postgres_fdw.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=79)** Next, if we want to create a foreign data wrapper for another database, we can use the command CREATE SERVER.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=87)** And here I'm specifying a name called external_db_server.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=91)** I need to specify what kind of foreign data wrapper I want to use.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=95)** In this case, I'm going to use the postgres_fdw, and then I want to specify my options.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=100)** Not surprisingly, the kinds of things we specify in the option are the kinds of things you would expect to see in a connect string, like name of a host and a database name.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=111)** Now we also want to be able to map users.
>
> **[1:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=113)** So if we're going to get data from another database, we're going to be getting that data using the roles or the permissions assigned to some user there.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=123)** So the way we do that is we're using a CREATE USER MAPPING command, and we're going to map the current user to the server we just created, external_db_server.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=133)** And we're going to specify in the options a username and a password.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=139)** That's how we will access the data on the database.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=143)** So, it's through this user, in this case analyst, which is a user on the external database, and we're going to be working through the analyst user to actually get the data out of the database when we're querying that external data.
>
> **[2:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=157)** Now, another thing we can do is we can map a schema from an external database.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=163)** So for example, let's say we have an e-commerce application that has some sales information and we want to reference that data, we can create a schema on our database.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=173)** Let's call it external_sales.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=175)** And then we import the foreign schema sales from the server that we created.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=181)** Now again, when I say from the server we created, what I'm referring to is the data structure that we have on our Postgres database that references the external database.
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=190)** And I'm going to import that data into my schema that I just created, external_sales.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=196)** Now, I can also create a foreign table.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=198)** So let's say I have a log file that's CSV formatted.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=203)** I can use the CREATE FOREIGN TABLE command and give the table a name.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=208)** I'm going to call it page_visit_log, and it's a very simple table.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=210)** It just has a timestamp, a username, and a webpage.
>
> **[3:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=214)** And I can specify that as SERVER log_data and specify OPTIONS.
>
> **[3:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=220)** So here, because I am working with a file, the options I'm going to specify are related to how I would access a file.
>
> **[3:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=229)** So for example I need to specify the file name and the format.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=233)** So, the CREATE FOREIGN TABLE command is a way of easily working with say structured data that's in a log file or some other data source, but is outside the database, and you would rather not, for whatever reason, bring that data into the database.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/federated-queries?u=76281980&t=249)** This is how you can work with that data using SQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), create (5), server (2), foreign (2), table (2)
> **Code Identifiers:** postgres_fdw (3), external_db_server (2), external_sales (2), page_visit_log (1), log_data (1)
> **Code Keywords:** let (3), case, (2), module (2), default. (1)
> **Definitions:** is a  (4), known as (1)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Bloom filters
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=0)** - [Instructor] Now often when we work with very large data sets we often will trade accuracy for speed.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=7)** So for example, we might sample a dataset and then do calculations over that sample and assume that the overall population has roughly the same measures.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=18)** Well that's a probabilistic method and they're approximate.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=23)** Another probabilistic method is known as a bloom filter and we can use those to create indexes which can be highly efficient in some cases.
>
> **[0:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=32)** So a bloom filter is a space efficient method for determining set membership.
>
> **[0:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=38)** So for example, if we need to find out which data block contains a particular piece of data or we have a complex query with multiple conditions in a where clause such as finding customers who live in a particular state or city and have been customers for less than a certain period of time and are delinquent on payments.
>
> **[0:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=59)** Now, a blue filter is a lossy representation of data.
>
> **[1:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=63)** So some compression methods are lossy.
>
> **[1:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=66)** That means you can take the compressed version and then recreate it in an exact way the original source.
>
> **[1:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=74)** Now bloom filters are similar in the sense that they're a probabilistic data structure.
>
> **[1:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=78)** Now, with regards to the lossiness what that means is it may produce false positives.
>
> **[1:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=85)** So a bloom filter is basically a boolean.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=87)** Does this element exist in this set?
>
> **[1:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=90)** And by false positives, we mean that the bloom filter may indicate, yes this element is in the set, when in fact it's not.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=98)** So that can occur with bloom filters.
>
> **[1:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=101)** However, we never get a false negative.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=103)** If a bloom filter indicates that an element is not in a set, you know for certain it's not in that set.
>
> **[1:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=109)** Now, the relative accuracy of bloom filters is a function of how many bits are used in the filter.
>
> **[1:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=114)** And what people have found is that oftentimes about 10 bits per element will yield about a 1% false positive rate.
>
> **[2:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=121)** Now a blue filter index is a Postgres extension.
>
> **[2:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=125)** So that means it's part of Postgres but it's not installed by default.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=129)** And bloom filters are particularly useful when a table has many attributes and we filter in our queries based on many different combinations or attributes.
>
> **[2:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=139)** Now it's important to know that B-tree indexes are faster typically but they may require more indexes.
>
> **[2:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=145)** So for example, if you have a table with 20 columns you can create a bloom filter, a single bloom filter with all of those attributes and get similar behavior that you would if you had created 20 individual B-tree indexes one for each of the columns.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=163)** So the B-tree index may be faster but you're using up much more space.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=167)** Now there are some limitations to keep in mind.
>
> **[2:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=169)** Two in particular first is that the bloom filter indexes support only the equality operator and it only works with two data types, integers, four byte integers and text data types.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=182)** If you need inequality or ranges or conditions in addition to equality then you'd probably want to use B-tree indexes instead.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=191)** Now let's take a look at how we create a bloom filter index.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=193)** First thing we need to do is create the extension.
>
> **[3:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=195)** So basically install the bloom filter module and we use the create extension command for that.
>
> **[3:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=201)** And then we just use the create index command but we specify a using clause.
>
> **[3:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=209)** So for example, we might want to create an index on a table that has some locations and we might call the index IDX location bloom.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=218)** And that index is being created on a table called locations.
>
> **[3:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=223)** And we're using bloom, which is specification.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=225)** We're using a bloom index and we're going to have three columns in that index, city, state, province and country.
>
> **[3:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=232)** Now we can also specify a with clause and specify the length of the bloom filter and the longer the length the higher the accuracy of the bloom filter in the sense of reducing the number of false positives.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=245)** Now because bloom filters have false positives, you can't assume that all of the data returned will actually satisfy the rule.
>
> **[4:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=255)** So for example, you might have a statement such as, where attribute one equals A, attribute two equals B and attribute three equals C.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=264)** It is possible to have rows returned and a result set that actually don't meet that criteria.
>
> **[4:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/bloom-filters?u=76281980&t=269)** So you want to always double-check and make sure that the results that are returned by a bloom filter actually meet the criteria that you're interested in.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), such as (2)
> **Code Keywords:** function (1), yield (1), default. (1), require (1), let (1)
> **Definitions:** is a  (4), known as (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** idx (1)
> **Documentation:** specification (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)

#### Hstore for key-value pairs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=0)** - [Instructor] Now, Postgres has features that may be more properly considered in the realm of NoSQL, including key-value stores and support for document structures using JSON.
>
> **[0:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=12)** So let's first take a look at hstore.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=15)** hstore is a data type for storing sets of key-value pairs.
>
> **[0:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=19)** Now, we use hstore by first creating an extension.
>
> **[0:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=23)** And an extension is a package or module that's part of Postgres but not installed by default.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=28)** So we essentially install it by using the CREATE EXTENSION hstore command, and then we can create cables as we would normally.
>
> **[0:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=36)** And for one of the comp source, several of the comps, we could specify the data type as hstore.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=43)** Then when we insert data, we basically insert a string which is a list of key-value pairs.
>
> **[0:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=50)** Now, why would you use hstore?
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=52)** Well, it's useful when it helps when keys are not predefined.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=56)** So that is, the keys in the list can change arbitrarily.
>
> **[1:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=60)** So if you have a large number of attributes and many of them are not used, so if you have sparse data, hstore may be a good option.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=68)** Another advantage is you don't have to change the column definition to accomodate new columns because your column can be represented as a key-value pair in that single hstore column.
>
> **[1:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=79)** Another advantage is that GIN and GiST indexes can be used to index all the keys so you can still have performant operations.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=87)** So, for example, one example would be a catalog, so items in the catalog might have different attributes.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=94)** So, for example, an appliance may have a power usage, a weight, height, depth dimensions, whereas a piece of clothing might have a size, color, material as attributes, and all of those can be represented as key-value pairs.
>
> **[1:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=112)** Now, there are some limitations with hstore.
>
> **[1:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=115)** First of all, all keys and values are stored as strings.
>
> **[1:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=117)** You get no other data types.
>
> **[1:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=119)** It does not support hierarchical data structures.
>
> **[2:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=122)** Now, if you need hierarchical data structures, JSONB or XML data types are better options.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=129)** Let's take a look at how we would use hstore.
>
> **[2:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=133)** So I'm going to create a table called books, and let's have an id which is a serial and for a primary key, and we'll have the title of the book, and that will be of type text, and then we'll have a list of attributes which is of type hstore.
>
> **[2:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=153)** Now, if you haven't installed hstore, you'll want to use the CREATE EXTENSION command hstore, and I'll just run this.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=163)** I already have it installed so I'll get a little error message saying it's already exists.
>
> **[2:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=167)** But if you haven't installed it, it would just give you a success message.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=171)** So we'll get rid of it.
>
> **[2:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=172)** We don't need that, so get rid of that.
>
> **[2:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=175)** And your CREATE books, id serial primary key, looks good.
>
> **[3:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=181)** We'll create the table.
>
> **[3:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=182)** So now let's see how we would insert data into this table.
>
> **[3:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=186)** So let's INSERT INTO books, and I just want to insert title and attributes because id is a serial.
>
> **[3:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=194)** It will be assigned automatically.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=197)** And we'll have our VALUES, and our VALUES will be the title of the book.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=203)** Let's call the title SQL for Data Science.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=208)** That's one value.
>
> **[3:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=210)** And then our other value for attributes, let's have some attributes such as language, and we'll say that's in English.
>
> **[3:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=218)** We use the equal and the greater than sign, and we'll specify English as the value.
>
> **[3:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=225)** And let's say we have a page_count, and let's say that's 500.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=230)** Can't forget that, okay.
>
> **[3:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=233)** page_count 500.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=235)** And let's say the publication year is equal to 2021.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=240)** And, okay, so that inserted a row.
>
> **[4:04](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=244)** Let's start another one.
>
> **[4:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=245)** Let's just copy this and kind of mix it up a little bit.
>
> **[4:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=249)** We'll change things slightly.
>
> **[4:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=251)** Let's say we have SQL for Data Science 2, and the page_count is 600, the language is still English, and the pub_year is, let's say, 2022.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=264)** So let's insert that.
>
> **[4:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=267)** That's also inserted.
>
> **[4:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=268)** And now let's do a SELECT statement, and let's simply SELECT * FROM books and see what it looks like.
>
> **[4:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=280)** And what you'll see in the attributes column, the values appear as a string, but they don't behave like strings.
>
> **[4:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=289)** So let's see, for example, how to work with the attributes.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=292)** For example, if we wanted to, say, list the title and page count, we could do that by saying SELECT title.
>
> **[5:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=302)** Now, we want page_count.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=303)** Well, page_count is in the attribute's hstore so we need to specify attributes.
>
> **[5:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=309)** And then here we don't use an equal sign, we use the minus sign or dash, and then the greater than sign, and then we specify what we're interested in, and we're interested in the page_count attribute, and we want to collect that from books.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=324)** Now, notice I had to put these in quotes, page_count in quotes.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=327)** So if I execute this, I should see title and just the page_count, which is what I have.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=336)** And I could also alias this for something like pc for page_count and get something like that.
>
> **[5:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=346)** I can also use attributes in a WHERE clause.
>
> **[5:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=348)** For example, I could say WHERE attribute, WHERE attributes, let's see, page_count equals 500.
>
> **[6:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=360)** Notice, I can't treat that as a numeric.
>
> **[6:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=361)** I'm using that, making that a text value, and then I can use SELECT there.
>
> **[6:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=367)** Now, if I had just put 500 here, I would get an error because it's not converted.
>
> **[6:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hstore-for-key-value-pairs?u=76281980&t=375)** So when you're working with values that are stored in hstore, you want to make sure to always treat them as strings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), module (1), default. (1), this. (1), this, (1)
> **Env Vars:** select (4), create (3), where (3), extension (2), values (2)
> **Code Identifiers:** page_count (10), pub_year (1)
> **SQL:** select (4), where (3), insert into (1)
> **Analogies:** for example (5), such as (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)

#### JSON for semi-structured data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=0)** - [Instructor] Now PostgreSQL provides data types for supporting JSON, which is ideal for semi-structured data.
>
> **[0:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=6)** So with PostgreSQL, we have options to use both relational and NoSQL type features.
>
> **[0:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=11)** Now JSON is particularly good at modeling document databases.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=15)** Now, document databases are used when a use case demands a flexible schema, nested structures, and the ability to query an index keys throughout the structure.
>
> **[0:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=26)** Since PostgreSQL 9.2, we can have both relational and document structures in a single database.
>
> **[0:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=33)** So here's an example of a document structure.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=35)** Let's imagine we have a table called Customer Summary and we have the name of a customer, their address, and then some information about purchase history.
>
> **[0:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=43)** Well, each of those could itself be a complex structure.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=48)** So for example, name could be a pair, first name and last name.
>
> **[0:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=52)** Address could be made up of a street, city, province, postal code.
>
> **[0:56](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=56)** And finally, the purchase history could say, be an array of annual purchase values, so how much did that customer purchase each year, and also a lifetime value estimate, which might be just a scale or a single numeric.
>
> **[1:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=68)** Well, both JSON and JSONB would work well for that.
>
> **[1:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=72)** Both data types validate that a string is valid JSON, both allow querying and JSONB supports indexing of elements in a JSON structure.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=82)** Now since 9.2, JSON represents the actual JSON structure in plain text.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=87)** But starting in 9.4, we have the option of using JSONB.
>
> **[1:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=91)** Now the B stands for better, and part of the better is that it's a binary representation and it's more efficient than the JSON data type.
>
> **[1:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=100)** So JSONB supports nested JSON structures.
>
> **[1:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=103)** We can use GIN indexes with them which index all the key value pairs in a structure.
>
> **[1:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=108)** Now in general, if you're trying to choose between a key value hstore or JSON, which stores JSON and plain text, or JSONB, almost always the best option is JSONB.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=120)** Okay, let's work a little bit with that JSON structure.
>
> **[2:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=123)** First thing I want to do is create a table and let's call this customer_summary.
>
> **[2:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=129)** And let's use id which is a serial as our primary key.
>
> **[2:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=134)** And let's call our JSON column customer_doc, and that will be a JSON.
>
> **[2:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=140)** And we're going to use JSONB since that's more efficient.
>
> **[2:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=143)** And we will create that table.
>
> **[2:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=146)** So now we have a table called customer_summary.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=149)** It has an id as a primary key.
>
> **[2:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=151)** And it has a single other attribute, which is customer_doc.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=155)** So let's insert some data into that table.
>
> **[2:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=158)** So I'm going to insert into customer_summary, and I'm just going to insert the customer_doc because the serial value will be set automatically.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=171)** And we'll specify the values.
>
> **[2:53](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=173)** And the values we're going to be specifying, we are going to specify a JSON structure.
>
> **[2:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=179)** So that will be a string which is delimited using the curly brackets.
>
> **[3:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=185)** And within that, we're going to have our three high-level structures, which is customer_name and address and purchase_history.
>
> **[3:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=199)** Now, each of these, these are keys, so it's going to be followed by a value.
>
> **[3:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=204)** And in JSON, we use the colon to separate the key from the value.
>
> **[3:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=208)** Now the customer name, you'll remember, is also a structure and it includes a first_name and a last_name.
>
> **[3:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=217)** And again, we're going to specify a value for each key.
>
> **[3:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=222)** So let's say the first_name of this customer is Alice and the last_name is Johnson.
>
> **[3:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=230)** And we need to put our commas in, put a comma there, put a comma there.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=235)** And so now we've specified customer_name.
>
> **[3:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=238)** So now let's specify address.
>
> **[4:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=240)** So again, we're going to build another JSON structure.
>
> **[4:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=242)** And an address has a street address, we'll just call it street though.
>
> **[4:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=247)** It has a street, a city and let's say state, typo there, correct that.
>
> **[4:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=258)** So those were our three keys.
>
> **[4:19](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=259)** Now we specify the values, the street, let's say it's 5432 Port Ave, and the city is Boston and the state is Massachusetts, which we can use a two letter abbreviation MA for that.
>
> **[4:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=281)** And so now we've specified our address as a key, and this is the value of that key, so I'll put a comma after that.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=292)** And now the last thing we want to specify is purchase_history.
>
> **[4:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=295)** And purchase_history, as you recall, has two elements.
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=300)** And that is annual_purchase_value and the other key is lifetime_value.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=310)** And so we have our keys, we'll specify a value for each.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=314)** Now the annual_purchase_value, let's assume it's an array and the first element of the array is the total value of the customer's purchase their first year as a customer.
>
> **[5:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=324)** So let's say that's $100.
>
> **[5:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=327)** And the second is the second year, let's say that's 200.
>
> **[5:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=330)** And let's say at year three, it went up to 350, okay.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=334)** So that completes our array of values.
>
> **[5:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=338)** So in addition to the nested structures we can have with JSON, we can also have a RASON.
>
> **[5:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=343)** And for lifetime_value, we wanted just a scalar.
>
> **[5:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=345)** Let's say we estimate the lifetime value will be 1500.
>
> **[5:50](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=350)** Okay, so that closes off purchase history.
>
> **[5:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=354)** And then we need to close off customer_doc, which we do, and we'll close that.
>
> **[6:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=362)** Actually, we need to put it right there and now close off.
>
> **[6:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=366)** And now let's run this.
>
> **[6:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=370)** Let's just do a quick check for missing commas.
>
> **[6:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=374)** Nope, looks good, so we will execute that insert statement.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=380)** That's an extra in there.
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=382)** Let's execute again.
>
> **[6:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=385)** There we go.
>
> **[6:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=386)** So we now have one row in that table.
>
> **[6:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=389)** And let's clear this out and work with some select statements now.
>
> **[6:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=394)** Now first, let's see what the data looks like.
>
> **[6:38](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=398)** So I'm simply going to do a select star, customer_summary.
>
> **[6:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=407)** And as we expect, we see the JSON structure and it contains what is essentially text values or strings of attribute value pairs and some of them are hierarchical.
>
> **[6:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=418)** Also notice that the way that the key value pairs are ordered in the database is not necessarily the same way that we entered them using the insert statement.
>
> **[7:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=429)** Now, if I want to just look at the customer_doc column, I could specify customer_doc and that gives me the entire JSONB structure.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=441)** Now I could also essentially look inside by using the dash arrow.
>
> **[7:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=447)** And what that will do is it will return the value of some key.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=451)** So let's look at the customer_name and execute that.
>
> **[7:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=457)** What you'll notice, it returns just the customer_name.
>
> **[7:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=461)** Now the operator here I'm using is a single dash and then an arrow or greater than sign.
>
> **[7:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=466)** Now, when you use that, that returns the results as a JSONB type.
>
> **[7:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=471)** You'll notice there it's a JSONB type.
>
> **[7:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=474)** And one reason we might want to do that is because we want to treat that JSONB structure as a hierarchical thing and we want to extract something from that.
>
> **[8:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=483)** So for example, if we wanted to extract a first_name, we could do that.
>
> **[8:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=490)** Now the first name is going to be a text.
>
> **[8:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=493)** So I'm going to specify first_name and let's run that.
>
> **[8:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=500)** And what you'll see here, we get back a text item.
>
> **[8:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=502)** So the result is text and it's first_name.
>
> **[8:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=505)** So that's how we reference items within the particular structure.
>
> **[8:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/json-for-semi-structured-data?u=76281980&t=510)** And of course you can use the same syntax in the where clause as well.

> [!info]- Semantic Content
>
> **Env Vars:** json (19), jsonb (11), gin (1), rason (1)
> **Code Identifiers:** customer_doc (6), first_name (5), customer_summary (4), customer_name (4), purchase_history (3)
> **Code Keywords:** let (22), type. (3), finally, (1), this. (1)
> **Versions:** 9.2 (2), 9.4 (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** for example (2), imagine (1)
> **Speakers:** - [instructor] (1)

#### Hierarchical data and ltrees
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=0)** - [Instructor] Occasionally, we need to work with hierarchical data.
>
> **[0:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=3)** There are different ways of working with hierarchical data and one is to use an extension in Postgres called ltrees.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=10)** So, here's an example of a simple tree and oftentimes one of the things we need to do with these trees is work with paths.
>
> **[0:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=17)** So for example, if I were to start at the root and go from node A, which is the root, to node B, and then to node D, and then to node H, we'd have a path from the root to one of the leaves.
>
> **[0:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=29)** And we can depict that as a string of characters, such as A.B.D.H.
>
> **[0:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=34)** Now, we can model this in different ways.
>
> **[0:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=37)** A common way to do this is to use a table that has one row per node.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=42)** So for example, in this table, node A is the root, so it's parent node is null.
>
> **[0:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=48)** A is the parent of B and C, so what we see in the parent node column is the foreign key or the ID of the parent.
>
> **[0:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=57)** So in the case of B and C, that would be ID one because node A is the parent.
>
> **[1:02](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=62)** In the case of D and E, both of those are below B, and so B is the foreign key in the parent node table.
>
> **[1:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=71)** Now, when you're querying hierarchical data, we often use recursive common table expressions but if you're working with Oracle, you can use a Connect By clause in your SQL query.
>
> **[1:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=82)** Now, another way to represent paths is to use a pattern called materialized paths.
>
> **[1:27](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=87)** In this case, each node in the tree is in its own row and each row representing a node has a path column.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=94)** So we're no longer have a parent column, that's essentially been changed to a path column, and the path column contains a string which represents the path from the current node back through all of the ancestors to the root.
>
> **[1:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=106)** And the way we query this and work with the path is by using string function.
>
> **[1:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=111)** So for example, we might use regular expression, pattern matching, or use sub strings to match something in that particular path.
>
> **[2:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=120)** Now, as you can imagine, if we're working with very large data sets and doing a lot of string operations across all many different rows, it can be rather inefficient, because for example, without indexes, we have to apply operations repeatedly over each row.
>
> **[2:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=136)** So, wouldn't it be better if we had a mechanism that has allowed us to work with materialized paths, but gave us the advantages of indexes.
>
> **[2:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=144)** And in Postgres, we can do that and that's by using the ltree extension.
>
> **[2:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=149)** So, the ltree extension is part of Postgres, and it's used for working with trees and paths.
>
> **[2:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=155)** It comes with many operators which we can use for operating on and comparing paths.
>
> **[2:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=160)** It supports both B-tree and GiST indexes.
>
> **[2:43](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=163)** Although GiST indexes are typically favored because you can use more operators, or more operators are available with the GiST index.
>
> **[2:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=171)** So, some of the common ltree operators that we'll often work with are the ancestor and descendant pattern matching, the concatenate for concatenating tree paths, and the Tilda which basically answers the question, does an ltree match an ltree text query?
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=188)** So this is a basic pattern matching operation.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=192)** And as I mentioned, there are quite a few operators.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=193)** There are about 20 more in addition to these four.
>
> **[3:16](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=196)** So I suggest if you'd like to learn more about ltree operators to consult the Postgres documentation on the ltree extension.
>
> **[3:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=203)** Okay, so let's work with ltrees.
>
> **[3:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=205)** So the first thing I'm going to do is create a table and let's call it something like paths_to_nodes, and we'll follow a pattern of having an ID which is a serial as our primary key, and we will have a node, which is a text type, and we will have a path which is an ltree.
>
> **[3:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=231)** Now, I have already installed the ltree extension.
>
> **[3:55](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=235)** So, I don't need to specify, create extension ltree.
>
> **[3:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=239)** So I'm just going to execute that.
>
> **[4:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=241)** Now, if you haven't installed the ltree extension then you can simply add the command, create extension ltree, and you can execute that.
>
> **[4:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=253)** Now I'll execute it and Postgres will just tell me it's already installed.
>
> **[4:17](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=257)** So it already exists so I don't need to do that.
>
> **[4:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=260)** But first time you're using it, you want to put that create extension in.
>
> **[4:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=264)** So we have our table, let's create an index on this table.
>
> **[4:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=270)** And we'll call it idx_paths_to_nodes, and we're going to create this on paths_to_nodes, and we're going to specify a using clause because we want to use a GiST index here and not a B-tree, which is the default if we don't specify a using clause, and we want that GiST to be applied to the path column.
>
> **[4:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=294)** So I will just execute that.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=298)** Okay, so now we have our table.
>
> **[5:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=300)** We have a GiST index on our path column.
>
> **[5:03](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=303)** So, I've previously saved these insert statements so I'm just going to paste them in to save time.
>
> **[5:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=310)** And so now we have data, so just take a look at it.
>
> **[5:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=314)** Paths_to_nodes, and we'll execute that, and let's take a look.
>
> **[5:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=322)** Okay, what would you expect?
>
> **[5:23](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=323)** 11 rows, each with paths from the root down to the various leaves.
>
> **[5:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=329)** So the first thing I want to do, I want to use the ancestor operator.
>
> **[5:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=333)** So I'm going to select paths_to_nodes.
>
> **[5:34](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=334)** I'm going to add a where clause here.
>
> **[5:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=336)** And let's say, I want to find all of the descendants that have A.B at the beginning of their path.
>
> **[5:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=345)** And to do that, I'm going to specify the path, which in this case has just A and B, and then I'll use the at greater than sign operator, which is the ancestor, and I want to apply that operator to the path column.
>
> **[5:57](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=357)** So I will execute that, and what we'll see here is everything that is returned has the pattern A.B in the path at the beginning of the path.
>
> **[6:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=367)** So that's pretty simple.
>
> **[6:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=369)** And once we do this, we can do things like count the nodes.
>
> **[6:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=373)** So things that you would normally do with other aggregation patterns or other things like that, you can of course do here as well.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=381)** So now, let's say I want to kind of loosen up the criteria and I want to search for anything where B is an ancestor.
>
> **[6:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=389)** Well, one way to do that is instead of using the ancestor path, we'll use a pattern matching operator, which is the Tilda, and now I can specify, for example, I want everything with a B in it.
>
> **[6:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=399)** I can specify star dot B dot star.
>
> **[6:45](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=405)** Now this should return anything that has a B in the pattern.
>
> **[6:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=409)** We'll get rid of the count, we'll go back here, and here again, we have anything which has B in the pattern, but there needs to be one B.
>
> **[6:59](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=419)** We can add a specification using a curly bracket and then specify one.
>
> **[7:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=425)** So that means any number of ancestors can proceed B, we want to have one node following the B in the pattern.
>
> **[7:13](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=433)** Now let's see what happens there.
>
> **[7:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=435)** Well notice, we lost A.B itself but now we have A.B.D and A.B.E, which is what we'd expect.
>
> **[7:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=441)** Now, we can also use a zero-based operators, and we could, for example say, we want to have at least zero and at most two.
>
> **[7:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=451)** So we can specify both a min and a max here.
>
> **[7:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=455)** So let's do that.
>
> **[7:36](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=456)** So we should see this first row shows just A.B.
>
> **[7:39](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=459)** Now, so there are zero nodes after the B.
>
> **[7:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=462)** The other rows in the table show at least one and up to two nodes in the path.
>
> **[7:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=469)** All right, let's do a little work with concatenation operator.
>
> **[7:52](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=472)** Let's clear this out.
>
> **[7:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=474)** And first of all, let's just start, we'll build this query incrementally.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=478)** So we'll select, let's see, we're going to select from paths_to_nodes, and I'm going to alias set as p1.
>
> **[8:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=487)** And, let's select from p1, the ID, the p1 node and the p1 path.
>
> **[8:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=498)** And let's add a where clause.
>
> **[8:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=501)** And let's say where p1 path matches the ltree query star dot B dot star.
>
> **[8:32](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=512)** So the one we just used.
>
> **[8:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=513)** So we should get results similar to what we've seen before when we're querying for a star B star.
>
> **[8:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=520)** Okay, so that's working as expected.
>
> **[8:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=522)** Now, what I want to do is I want to concatenate some other sub trees to those rows.
>
> **[8:48](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=528)** So let's build another query, and in this case, I'm going to use select, and I'm going to be selecting from same table, paths_to_nodes, but this time I'm going to alias it as p2, and so I want to select, we'll select star.
>
> **[9:06](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=546)** Here, we'll keep it simple from p2 and I want to say where path matches a query, such that there is a C in the path.
>
> **[9:20](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=560)** Now, let's just execute this select statement, and I'll do that by highlighting it.
>
> **[9:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=566)** Okay, as we expect, everything that is returned has a C in it.
>
> **[9:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=570)** Okay.
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=571)** So now let's build these two together.
>
> **[9:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=573)** So we've got our two building blocks.
>
> **[9:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=575)** I'm going to copy this select statement and move it up here into a with statement.
>
> **[9:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=581)** So I'm going to say with, we'll call this paths_to_concatenate, or simply to concat as.
>
> **[9:51](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=591)** So I'm creating a common table expression, and I'm going to paste in what I had below, and I'll just indent this a little bit for me to build them.
>
> **[10:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=600)** Okay, so what I've done here is I've created a common table expression, and I'm calling paths to concatenate the table or that's the relation where there's are the Cs in the path.
>
> **[10:11](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=611)** And what I'm wanting to do now is I want to join p1 to paths_to_concat p2.
>
> **[10:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=621)** Now, I want to do a Cartesian product so I'm not going to specify a joint clause.
>
> **[10:24](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=624)** So each row in p1 is going to get matched up with each row in p2.
>
> **[10:29](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=629)** And we'll leave the paths the same.
>
> **[10:33](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=633)** So again, let's just review this one more time.
>
> **[10:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=635)** We have a common table expression which allows us to build this query in a modular way.
>
> **[10:40](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=640)** So all of the paths that have C in the path are going to be in the relation called paths to concatenate.
>
> **[10:47](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=647)** I'm going to use paths to concatenate to do a Cartesian product with paths_to_nodes and I'm going to concatenate p1 path to p2 path.
>
> **[11:01](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=661)** So this is how I'm going to combine the B paths with the C paths.
>
> **[11:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=667)** So let's execute that query, and see what we have.
>
> **[11:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=670)** What we'll notice here is that all of the rows, starting with the A.B paths, and then afterwards we have C paths.
>
> **[11:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=678)** So for example, we have A.C, A.C.F, A.C.G.
>
> **[11:21](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=681)** So this is how we can build ltrees through concatenation.
>
> **[11:26](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=686)** Now, you'll notice that the concatenation operator is a double pipe, which is the same as what we use with strings, but this column that is being returned is actually ltree type, it's not a string.
>
> **[11:37](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=697)** So we have all the advantages of having the ltree entry indexed.
>
> **[11:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/hierarchical-data-and-ltrees?u=76281980&t=701)** So, ltrees look a lot like strings, and even the operator, like the concatenation operator, looks familiar and the Tilda operator looks familiar, if you're familiar with working with strings, but again, there's potentially a significant performance difference by using ltrees instead of strings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), case, (2), type, (2), function (1), this, (1)
> **CLI Commands:** node (16), find (1)
> **Analogies:** for example (7), such as (1), imagine (1), similar to (1)
> **Code Identifiers:** paths_to_nodes (6), idx_paths_to_nodes (1), paths_to_concatenate (1), paths_to_concat (1)
> **Definitions:** is a  (5), is an  (2)
> **File Paths:** a.c (3), a.b.d.h (1)
> **Env Vars:** sql (1)
> **Documentation:** specification (1)

#### Challenge: Design a table to support unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=0)** (light techno music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=5)** - [Instructor] Okay, here's a challenge around data modeling and design choices.
>
> **[0:10](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=10)** Let's imagine you're working with an ecommerce company who wants to create a new catalog of products.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=15)** Now different kinds of products are going to have different attributes and it's critical that users be able to query and filter on any attribute.
>
> **[0:25](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=25)** And of course, performance is a key consideration.
>
> **[0:28](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/challenge-design-a-table-to-support-unstructured-data?u=76281980&t=28)** So how would you design a table to support this type of product model?

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light techno music) (1)

#### Solution: Design a table to support unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=0)** - [Instructor] Now, in this solution, we need to consider a number of factors.
>
> **[0:09](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=9)** Clearly we're working with semi-structured data and we need indexes to support query performance.
>
> **[0:15](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=15)** Now, we could use a column for each attribute, but that's really not practical, particularly in a relational database.
>
> **[0:22](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=22)** Now, that's not the case with another type of database, in particular the type of NoSQL database known as a wide-column database.
>
> **[0:30](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=30)** Now, Apache Cassandra, Query Google Bigtable are both examples of wide-column tables, where having a column for each attribute is an appropriate way to design it.
>
> **[0:41](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=41)** But when you're working with Postgres or other relational tables, that's really not a good option.
>
> **[0:46](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/solution-design-a-table-to-support-unstructured-data?u=76281980&t=46)** A better option is to use a JSONB column, because with JSONB, we have the semi-structured document data structure to work with and JSONB supports indexing.

> [!info]- Semantic Content
>
> **Env Vars:** jsonb (3)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=0)** - [Dan] Now that we've completed the Advanced SQL for Data Science course, there's some other courses you may be interested in taking a look at.
>
> **[0:07](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=7)** SQL query tuning and performance optimization is a critical skill anytime you're working with large data sets.
>
> **[0:14](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=14)** I'd highly recommend studying query tuning and performance optimization.
>
> **[0:18](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=18)** I'd also suggest learning more about data modeling, including modeling NoSQL databases, because the lines have begun to blur between relational or SQL and NoSQL and so some of the techniques that you might learn in NoSQL data modeling may be applicable when you're working, for example, with JSONB data.
>
> **[0:35](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=35)** Now, depending on the type of data you're working with, you may want to look into some specialized courses, like data science for time series data.
>
> **[0:42](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=42)** And also, as you have seen, SQL for data science is much more than just writing queries.
>
> **[0:49](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=49)** There's a lot of thought that needs to go in around how you structure your data, how you structure systems.
>
> **[0:54](https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889/next-steps?u=76281980&t=54)** So any work you can do with data architecture or learning data architecture patterns will almost certainly be helpful in your data science career.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), jsonb (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [dan] (1)


## Path Context

### In [[Master SQL Development]]
← [[Advanced SQL for Application Development]] | **7 of 8** | [[Level Up- Advanced SQL]] →

### In [[Master SQL for Data Science]]
← [[SQL Hands-On Practice- Solve Business Problems]] | **4 of 6** | [[Advanced SQL for Query Tuning and Performance Optimization]] →

## Appears In

- [[Master SQL Development]]
- [[Master SQL for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Intermediate SQL- Data Reporting and Analysis]] — SQL, Data Analysis
- [[Data Analysis- Investigate with SQL]] — SQL, Data Analysis
- [[Intermediate Sql For Data Scientists]] — SQL, Data Analysis
- [[SQL for Healthcare Professionals]] — SQL, Data Analysis
- [[SQL for Data Analysis]] — SQL, Data Analysis

---

[↑ Back to top](#)