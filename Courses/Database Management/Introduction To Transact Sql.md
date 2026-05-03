---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-transact-sql-22864585
url: "https://www.linkedin.com/learning/introduction-to-transact-sql-22864585"
level: Beginner
updated: 12/3/2024
learners: 87841
skills:
  - Transact-SQL (T-SQL)
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-transact-sql-4451097"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHH7IzO1sAw6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696613988629?e=2147483647&amp;v=beta&amp;t=OZyGCZE1JTIyFUaH5x0QwKxkJzQCwj_8DAAtULzstLw"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
next_courses:
  - '[[Microsoft SQL Server 2022 Essential Training]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":1,"total":9,"prev":null,"next":"Microsoft SQL Server 2022 Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/transact-sql-t-sql
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Introduction%20To%20Transact%20Sql.md)

![Introduction To Transact Sql](https://media.licdn.com/dms/image/v2/D560DAQHH7IzO1sAw6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696613988629?e=2147483647&amp;v=beta&amp;t=OZyGCZE1JTIyFUaH5x0QwKxkJzQCwj_8DAAtULzstLw)

# Introduction To Transact Sql

> Relational databases and SQL servers have been a cornerstone of businesses for decades, and as data growth increases at an exponential pace, learning to work with data held in SQL Server databases is more important than ever. In this course, Jess Pomfret introduces Transact-SQL, an extension of SQL used to interact with relational databases that includes additional programming constructs and featu

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585) | Beginner | 88K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Transact-SQL](#transact-sql)
  - [What you should know](#what-you-should-know)
  - [What is T-SQL?](#what-is-t-sql)
  - [CoderPad tour](#coderpad-tour)
- [**1. Introducing SELECT**](#1-introducing-select) (4 videos)
  - [Structure of a SELECT statement](#structure-of-a-select-statement)
  - [Aliasing columns and tables](#aliasing-columns-and-tables)
  - [Adding calculations to your result set](#adding-calculations-to-your-result-set)
  - [Solution: Simple SELECT statement](#solution-simple-select-statement)
- [**2. Filtering the Result Set**](#2-filtering-the-result-set) (7 videos)
  - [Filtering data with WHERE using equalities](#filtering-data-with-where-using-equalities)
  - [Handling inequalities with WHERE clauses](#handling-inequalities-with-where-clauses)
  - [Find rows where strings partially match](#find-rows-where-strings-partially-match)
  - [Filtering numeric data](#filtering-numeric-data)
  - [Combining multiple operators into one WHERE clause](#combining-multiple-operators-into-one-where-clause)
  - [Understanding how NULL data affects query results](#understanding-how-null-data-affects-query-results)
  - [Solution: Filtered SELECT statement](#solution-filtered-select-statement)
- [**3. Manipulating the Result Set**](#3-manipulating-the-result-set) (4 videos)
  - [ORDER BY](#order-by)
  - [TOP](#top)
  - [DISTINCT](#distinct)
  - [Solution: Intermediate SELECT statement](#solution-intermediate-select-statement)
- [**4. Joins**](#4-joins) (5 videos)
  - [INNER JOIN](#inner-join)
  - [LEFT JOIN](#left-join)
  - [FULL OUTER JOIN](#full-outer-join)
  - [Combining more than two tables](#combining-more-than-two-tables)
  - [Solution: Joins](#solution-joins)
- [**5. DDL and DML: Creating and Changing Data**](#5-ddl-and-dml-creating-and-changing-data) (6 videos)
  - [Create a table](#create-a-table)
  - [Insert data into a table](#insert-data-into-a-table)
  - [Update data within a table](#update-data-within-a-table)
  - [Delete data from a table](#delete-data-from-a-table)
  - [TRUNCATE a table](#truncate-a-table)
  - [Update data with a join](#update-data-with-a-join)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Transact-SQL](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=0)** - [[Relational Databases]] have been a cornerstone of businesses for decades now, and [[Microsoft SQL Server|SQL Server]] is one of the top offerings in this area. If you are looking to interact with data held within SQL Server [[Databases]], you're going to need to learn some [[Transact-SQL (T-SQL)|Transact-SQL]], or T-[[SQL]], and if that's the case, this course is for you. I'll build up from the basics, guiding you through your first SELECT statement to help you get the data you need out of a database. Things will then get a little more complicated as we add functionality to help filter, manipulate, and present the results we need. Hi, I'm Jess Pomfret. My pronouns are she and her, and I've worked with SQL Server databases for over 10 years. I'm a dual [[Microsoft]] MVP in both the Data Platform and the [[Microsoft Azure|Azure]] specialities, and I enjoy working with SQL Server databases both on-prem and in the cloud. By the end of this course, you'll be able to write the T-SQL you need to get the job done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[Databases]] (3), [[SQL]] (2), [[Relational Databases]] (1), [[Transact-SQL (T-SQL)|Transact-sql]] (1)
> **Env Vars:** sql (7), select (1), mvp (1)
> **SQL:** select (1)
> **Speakers:** - relational (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=0)** - [Instructor] As we get started on this course, it's important to level set and ensure that you have the required base knowledge to get the most out of this course. The good news here is this is an introduction to TSQL and the way I've written this course should allow you to enjoy and learn without too much existing knowledge. What I will say is a basic understanding of [[Relational Databases]] and specifically [[Microsoft SQL Server|SQL Server]] will help. We are going to cover the language of TSQL and although I will highlight areas where there might be design or performance considerations to think about we won't dive into those topics here. In the videos, you'll see me using SQL Server Management Studio to execute queries against the sample database. This is a free tool from [[Microsoft]] to download and I'd recommend installing and getting comfortable with how that works. If you want to follow along with the scripts as I show them in the videos, you can find all the code at the [[GitHub]] link shown here. And finally, if you need a sample database to play with I can highly recommend using one of the DBA tools docker containers. This enables you to create a development database on your local machine that you can safely play with. For more information on getting this set up, head over to [dbatools.io/docker](https://dbatools.io/docker). Otherwise, simply bring your curiosity and an open mind and let's get started on the content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Relational Databases]] (1), [[Microsoft]] (1), [[GitHub]] (1)
> **Env Vars:** tsql (2), sql (2), dba (1)
> **CLI Commands:** docker (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [dbatools.io](https://dbatools.io) (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [What is T-SQL?](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=0)** - [Instructor] So this course is an introduction to [[Transact-SQL (T-SQL)|Transact-SQL]], also known as T-[[SQL]]. So I guess the first thing we should cover is what that even is. But first, let's take it one step further back and talk about just SQL. SQL, which stands for Structured Query Language, is a language used to interact and manage [[Databases]] and the data they contain. It is a domain specific language, which means it was designed and written for a specific domain. In this case, databases. With SQL, we can create tables and other objects within databases, insert, update, delete, and select data, and perform other administration tasks, such as backups or maintenance. SQL is standard across many different relational, [[Database Management]] systems. However, some like [[Microsoft SQL Server|SQL Server]] use an extended version of the language that includes additional functionality for the specific database system. T-SQL is the extended version of SQL that SQL Server uses. It allows you to do all the expected things like manipulating data as well as additional things that are unique to SQL Server like more specific error handling or creating SQL Server specific objects like store procedures or functions. In this course, we'll focus on T-SQL as we'll be interacting with SQL Server databases. However, I will say a lot of what you learn in this course will transfer if you then want to learn to work with another relational database management system. Now that's all straightened out. Let's move on and get into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Microsoft SQL Server|Sql server]] (5), [[Databases]] (4), [[Database Management]] (2), [[Transact-SQL (T-SQL)|Transact-sql]] (1)
> **Env Vars:** sql (14)
> **Definitions:** is a  (2), is an  (1), known as (1), stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=0)** - [Narrator] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code Challenge has three areas: instructions in the top left, a console for output in the bottom left and a code editor for your answer on the right. You can use these drag handles to allocate space as you like. To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=51)** Each challenge has instructions that include a description of the challenge and the challenge's desired result. Create your answer in the code editor. When you click test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=75)** If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned. If any messages are too long to fit in the console, you can scroll sideways to see all of the text. When you finished each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)


### 1. Introducing SELECT

[↑ Back to Table of Contents](#table-of-contents)

#### [Structure of a SELECT statement](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=0)** - [Instructor] In today's world, data is everywhere. All kinds of sensors and processes are creating data faster than you could even imagine. All this data has to go somewhere, which is where having a database comes in handy. Storing that data is all good and well, but you need to be able to read it out of the database in order to use it for making business decisions, fulfilling orders, and perhaps even inputs for other processes. The first thing I'll cover in this course is how to write a basic SELECT statement to retrieve data from one of the tables. SELECT statements can get very complex, but let's focus first on the building blocks we'll need for every SELECT statement that you'll write. In order to select data from the database, the first thing to do is to specify which table or view you want to select the data from. To specify this in the query, you'll use the FROM clause. In the most simple case, all you need to do is write FROM table name. In this example, you can see I'm specifying FROM dbo.customer, which will get all the data from the customer's table. The dbo in this FROM clause specifies the schema where our table is. dbo is the default schema for [[Microsoft SQL Server|SQL Server]] [[Databases]]. We are able to create additional schemas in SQL server, and these schemas could be created to form logical collections of data. For example, you could create a schema called Sales that would group all sales data, and a second schema called [[Human Resources (HR)|Human Resources]] for the HR data (indistinct). Schemas can be useful to separate data needed for different applications or to apply security permissions to specific data sets. The second and final line of code you'll need
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=93)** to finish this first select statement is the SELECT keyword, and then we'll specify which columns to return. You can use an asterisk to specify that all the columns should be retrieved. You'll hear this referred to as SELECT *. This is now valid syntax. And running this will return all rows and all columns from our customer table. However, SELECT * is not considered a best practice, and instead we should specify the column names for just the data we want to retrieve. I won't talk much about [[Performance Tuning]] in this course, but minimizing the amount of data you need by choosing just the necessary columns is an important part of writing performance queries. You can specify which columns to return by providing a comma-separated list. Here I'll select the company name, contact name, and contact title columns from our table.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=151)** Running this code will retrieve just the necessary data we need about our customers. Just like that, you've written your first T-[[SQL]] statement that will form the basis of what we need for the [[Representational State Transfer (REST)|rest]] of this course. I'll look at many other building blocks to make this more complex throughout this course, but a lot will come back to this basic SELECT statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Databases]] (1), [[Human Resources (HR)|Human resources]] (1), [[Performance Tuning]] (1), [[SQL]] (1)
> **Env Vars:** select (7), sql (3)
> **SQL:** select (7)
> **Analogies:** imagine (1), for example (1), just like (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Best Practices:** best practice (1)

#### [Aliasing columns and tables](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=0)** - [Instructor] Let's build on the basic SELECT statement created in the first video and talk about aliases. As I mentioned, SELECT statements can get very complex. So far I've kept it nice and simple, selecting just a few columns out of one table. But as multiple tables and more columns are added, you might want to use aliases. To alias a table, you'll just need to add the syntax AS alias name after the FROM clause. Here you can see I've added the alias cust to the customer table, meaning wherever I refer to that table, now I can use the shortened name.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=36)** I would recommend using aliases that mean something to you. In this example, you can see I've alias the customer table as just the letter a. This saves some typing, but we do lose a lot of meaning. If we have a complicated query, you'll now have to keep track of which table is table a. Whereas if you alias with a short but useful name, such as cust, it'll improve the readability of the code. One of the reasons you might want to use table alias is, is it makes for a lot less typing when joined to other tables. I'll cover this in more details in the chapter covering joins. But aliases can also be used for columns, which will help make the result set more readable. I've added the PostalCode column onto our SELECT statement now. But depending on the use case, this column might be better known as Zip Code. When data is returned, you can change the name of the column in the result set to something more meaningful. As seen with table aliases, to alias a column, you just need to add AS alias name after the column name in the SELECT list. When this query is executed, you'll see that the column heading says Zip Code instead of PostalCode. This will also be useful once you start adding calculations and more complex column definitions to our SELECT statement. Keep your eyes out for these in the next video.

> [!info]- Semantic Content
>
> **SQL:** select (5)
> **Env Vars:** select (5)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Adding calculations to your result set](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=0)** - [Instructor] Alright, let's take a look at some different data for this video. Here you can see the OrderDetails table. As the name implies, it stores details about orders that customers have made. There are columns for both unit price and quantity, but to get total price, you'll need to perform a calculation on these two columns. With T-[[SQL]], you can do this right in line within the SELECT statement. In this example, you'll see I just multiplied the UnitPrice by the Quantity. Running this query gets the expected result of a total price column. However, you can see that [[Microsoft SQL Server|SQL Server]] hasn't named this column, it's just "No column name," which isn't very useful for whoever or whatever might consume this data. You already learned how to solve this problem though with column aliases. Here I have the calculation to create the total price column, and then I'll add AS TotalPrice to specify that the column will be named in a useful manner. These calculations can be as complicated as they need to be. The general rules apply, including using brackets to specify which calculations should happen first. In this slightly more complicated example, you're looking at a system table called sys.dm_db_partition_stats which keeps track of how many pages make up each object within our database. SQL Server stores data on 8 KB pages, so the reserved page count in this table tells us how many 8 KB pages make up each object. This is fine, but my mind works better in megabytes rather than 8 KB pages, so I can add in a calculation
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=93)** to convert this to a more user-friendly value. To get megabytes from 8 KB pages, I must first multiply it by 8 to get the number of kilobytes and then divide by 1,024 to convert that to megabytes. In this example, I've also added a column alias, so I'll have a useful name returned with the data. Adding calculations to the results set can help make sense of the data we are returning, and paired with column aliases, you can return exactly what might be needed for our users or reports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (1)
> **Env Vars:** sql (3), select (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** dm_db_partition_stats (1)
> **SQL:** select (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Simple SELECT statement](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=0)** - [Instructor] All right, hopefully your first question went well and you got the right answer. Let me tell you how I got there. For this question, the task is to select some certain columns from the Dishes table and also rename one of them with a column alias. The code to start does a SELECT * FROM the Dishes table, which will return all the columns. To solve this problem, I'll change the asterisk to specify the three columns I need. Name, Price, and Type. However, I also need to use a column alias to change Type to be returned as DishType. I'll accomplish this by adding AS DishType. Once I'm happy with the query, I'll press the Test my code button and if I've completed this task successfully, I'll get the correct output shown in green above my results there. Good job, folks, that's the first section done and your first question complete. See you in the next section.

> [!info]- Semantic Content
>
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Filtering the Result Set

[↑ Back to Table of Contents](#table-of-contents)

#### [Filtering data with WHERE using equalities](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=0)** - [Instructor] So far, I've demonstrated how to write the most basic SELECT statement that returns all the rows from a table or view within [[Microsoft SQL Server|SQL Server]]. However, often you don't need all the data. Instead, you need to filter it to return rows that meet certain requirements. Let's take a look at adding a WHERE clause to some queries. From what you've learned so far, you can build this SELECT statement to view all the rows within the employee table. You can see in the Results pane, I'm selecting just five columns from the table: EmployeeID, LastName, FirstName, Country, and Title. Now imagine if you only wanted to return data for employees that lived in the UK. To do that, you'll need to add a WHERE clause to the existing SELECT statement. To accomplish this, I'll add the WHERE clause after the FROM statement. You can see the syntax is pretty easy to read and I'll state where country equals the UK. When I execute this query now, you'll see just four rows are returned and only where the Country matches UK. You might also want to find rows that match any value in a given list of values. For the next example, I'll alter our SELECT statement and change the WHERE clause to say WHERE LastName is IN Leverling or Callahan. Executing this, you'll see we have filtered the results set to just those two employees whose last names match a value specified within the IN conditions. Using the operators you've now learned about, you can get a long way to write in T-[[SQL]] that will find just the rows you're looking for.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=94)** You can start building some great reports and processes that will enable people to use your data, but you also might want to find data that doesn't meet certain requirements. In that case, we need to learn about handling inequalities and I'll show you that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1)
> **Env Vars:** where (5), select (4), sql (2)
> **SQL:** where (5), select (4)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Handling inequalities with WHERE clauses](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=0)** - [Instructor] There are many ways that you can filter data with T-[[SQL]] Syntax to ensure you get just the rows you need in your results set. I will now introduce a couple more operators. This time, ones that allow us to deal with inequalities, allowing us to find data that doesn't meet certain requirements. If you take a look at the suppliers table, you can see we have details on where the suppliers are located. If you wanted to find suppliers in a certain country or countries, you would use the operators taught in the previous lesson, equals to find one, or in to find more than one. But to find all the suppliers outside of the USA, you'll need to learn about another operator. For this query, you can write a where clause that says find all the suppliers that don't equal USA. You can see that the operator for not equals combines the less than and greater than sign. This is the ANSI standard operator for not equals. There is also another option you can write the same query and get the same result by using this syntax, an exclamation point and an equals sign. This is common syntax in a lot of programming languages. Both operators introduced here for not equals can be used interchangeably, and the SQL engine will construct the same plan for getting the data. Meaning that there is no performance gain for one versus the other. If you wanted to further limit our results and say find all the suppliers that are not equal to the USA or the UK, you could use the not in syntax and provide a list of countries not to include. Here you can see I've changed the syntax to say
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=94)** where country not in USA or UK. This will further filter my results, and you can see the rows previously shown for the UK have now also been removed. These operators can be used with text or string values as we've shown in these examples or with numeric data types. Either way, it allows the results set to be filtered down to just the rows you need. This is important because as you start to write more and more T-SQL, you'll want to start thinking about writing efficient and performant queries and only selecting the necessary data is an important part of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Env Vars:** usa (4), sql (3), ansi (1)
> **CLI Commands:** find (7)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Find rows where strings partially match](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=0)** - [Instructor] All right, let's talk about patterns and matching parts of a value to find the rows for our result set. So far, I've shown you how to find rows that either match or don't match exact values but now let me show you how to match on just part of a value. Here's the orders table. I've selected just a few columns. The OrderID, CustomerID, OrderDate, ShipName and ShipAddress. You'll notice that these are orders made by particular businesses on certain dates. If I wanted to filter this data for certain values in the ShipName, I could use the operators that you've already learned but only if I knew the specific names of businesses. In this case, I want to find any that have the [[Microsoft Word|word]] hungry in their name. We can accomplish this by adding a WHERE clause and using the like operator. The like operator lets us specify a pattern, which includes wildcards. Since I want to find businesses that have the word hungry anywhere in their name, I'll add a wildcard to both the start and the end of the word. The wildcard operator in T-[[SQL]] is the percent sign, so the pattern we want to search for is %hungry%. When I execute this query, you can see that there are a couple of different businesses with hungry in the name. As a side note here, T-SQL is generally case insensitive, meaning that, by default, case doesn't matter and so this wildcard will match uppercase or lowercase letters. You can see I've used a lowercase h on hungry but results for the capital H have been returned. This is configurable by changing the collation
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=92)** to one that is case sensitive. This can be done at several different levels, including for the whole database or for a certain column. For now, you just need to know that, by default, and in all my examples in this course, case doesn't matter for our [[Microsoft SQL Server|SQL Server]] queries. Because we started our pattern with a percent sign, the SQL Server engine must look for that word to exist anywhere within the column value. If instead we wanted to find any businesses that start with the letter H, we can remove the leading percent sign like so.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=127)** You can see in the results now, the only rows where the ShipName starts with H are returned. It's also worth pointing out that once you start to think about writing performant queries, you'll want to try and avoid, where possible, starting your pattern with a wildcard. This means the SQL Server engine has to search all the data for these matches rather than if there is an appropriate index, just searching the rows that start with the pattern. The like operator is another really useful operator in your toolbox for filtering data. I'm sure it'll come in handy for a lot of scenarios as you start to write more and more queries to find data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Microsoft SQL Server|Sql server]] (3), [[SQL]] (2)
> **CLI Commands:** find (6)
> **Env Vars:** sql (5), where (1)
> **SQL:** where (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Filtering numeric data](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=0)** - [Instructor] Great stuff so far. You now have several really great operators in your toolbox that you can use to filter all kinds of data. However, most of the operators we've looked at so far, we've applied to strings. They can be used with numeric values, but I have a couple more options to show that are really useful when you have numeric data types, like prices or quantity. Let's start by running a select star query against the [[Microsoft Products|products]] table. This is a great way to view the structure and some of the data within. In our test database, the tables are all small, there are only 77 rows here. But in the real world, we're probably going to want to do a select star, but only return the first 10 rows. I'll show you how to accomplish that in a video on the top keyword a little bit later. Here you can see we've got information about our products, including prices and the amount of units in stock. First of all, let's find all the items that are in stock. As you'll find with T-[[SQL]], there are often multiple ways to write queries. You can't, or at least shouldn't, have negative stock levels. So to find in stock items we could say, where the units in stock are not equal to zero. If I execute this query, you'll see we have all the items that have units in stock and, therefore, can be sold. Let's instead use the greater than comparison operator to find rows where the units in stock are greater than zero. Executing this query, we get the exact same results as by using not equal to zero. However, this would also rule out any negative numbers. So depending on your data, this might be more appropriate. You can see there are several good comparison operators
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=96)** to use when comparing data. As well as the greater than operator, you could also use greater than or equal to, which would include the value you specify. The link at the bottom of this slide will take you to the [[Microsoft]] Docs page, where you can get more information on all of these operators. Talking of including the value in your results there, let's run one more query to show off the less than or equal to operator. In this query, I'm specifying that I want all the products where the unit price is less than or equal to 18. I'll run this query. And in the results, you can see the product name of Chai has a unit price of 18, and so was included within the results. We also got all products that are cheaper than 18 of whatever this currency might be. This is all good stuff, but it's still a bit simple. We've only been including one work clause per query. What happens if we need to specify multiple conditions? Well, good news, we're covering that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[SQL]] (1), [[Microsoft]] (1)
> **CLI Commands:** find (4)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Combining multiple operators into one WHERE clause](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=0)** - [Instructor] In this chapter of videos, you've learned about a lot of really useful operators. You can now use these to filter data and return the perfect results set for your reports or applications. However, so far, I've only shown you how to craft queries with one condition. Now let's get a little more complicated and talk about specifying multiple conditions. For this section, let's take a look at the orders table again. Running a select star, you can see the structure of the table. There are quite a lot of columns to filter on. First, we'll use the equals operator to say, give me all the orders where the ship country is France. Running this, I get a lot of results still, but you can see they all have a ship country of France. You can add additional conditions to the where clause by using logical operators. You can use and to specify both conditions must be met or or to specify at least one of the conditions must be met. Let's add to the first query, and I'll say that ship country should be France, but also, the freight should be less than five. Running the query, you can see the results meet both of these conditions. Okay, one more step. What if I want to find where the ship country is either France or Spain and the freight is less than five? When I write this query, I'm expecting only to get rows where the freight is less than five, but if I execute this, you'll see that I get results for France where the freight is more than five.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=94)** That's because of operator precedence, which means the order in which the [[SQL]] engine processes the operators. [[Microsoft SQL Server|SQL Server]] has processed the and first and then the or. Don't panic, though. As with maths, you can specify the order of the operators with brackets.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=114)** If I add brackets around the ship country equals France or ship country equals Spain, the SQL Server engine will process this first before moving on to filter where the freight is less than five. I'll execute this query now, and you'll see the expected results. The ship country is either France or Spain, and the freight is always under five. There's a lot of great documentation on the topic on the [[Microsoft]] Docs site. Here are three topics to get you started, but there are plenty of other pages to enjoy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (1), [[Microsoft]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Understanding how NULL data affects query results](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=0)** - [Instructor] This topic is a slightly more advanced one but I just want to bring it up here so you're aware of it. This is how null values are treated when we write T-[[SQL]] queries. Where this gets a little more complicated is you can change the behavior of how nulls are treated but for this intro course, we're going to look at how they're treated by default. when you connect to [[Microsoft SQL Server|SQL Server]]. By default, the ANSI_NULLS option is set to on. Just know that if you wanted to, you could turn this off to change how nulls are treated. So firstly, what is a null value? Well, it tells us there's the absence of a value in that column. This basically means a gap in our data and this is important because it'll make more sense with how nulls are treated. A null value means we don't know the value for that piece of data, and so it is treated as an unknown value. I bring this up in this chapter because when you write your where clauses you need to think, what if there are null values? Here is a query similar to the one you've already seen. I'm saying, give me all the customers where the region equals null. Executing this query doesn't work though, no rows are returned. That is because, remember, null is an unknown value, so one null doesn't necessarily equal another null. This is also the case for using in within our where clause. This query will only return the results where region is equal to BC. Instead, we need to use is null in the where clause. If I wanted to find all the customers that don't have a region, because it's null,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=93)** I would need to write the query like this. Now, if I execute this, you can see I get the expected results. As I mentioned, this is a slightly more complicated topic but important to remember as you start writing more T-SQL queries to get after your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft SQL Server|Sql server]] (1)
> **Definitions:** is a  (4), basically means (1), is an  (1)
> **Env Vars:** sql (3), ansi_nulls (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Filtered SELECT statement](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=0)** (catchy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=5)** - [Instructor] All right, welcome back. I hope you're enjoying the interactive questions within this course. This question built on top of the first one and included skills you've learned within this section. Again, we have been provided with the schema for the dishes table and the question is to find main dishes where the price is more than nine. There is also a requirement to return four certain columns. I'm given the basic select * from dishes, again, to build on top of. First I will start with adding the where clause for the main dishes. This will be where type equals main. Then I'll need to add the second condition for price. The question asks for results that are both the main type and price greater than nine. So it'll be and price greater than nine. Finally, I'll change the asterisk to specify columns I want. Name, description, price, and type. Running this will give me six rows and confirmation that this is the correct output. Note that I only use the greater than sign. Since I asked for more than nine, this is not inclusive of nine so you should use just greater than and not greater than or equal to.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=80)** Using greater than or equal to, you will include the chef salad in your results which costs exactly nine, and you'll get an error that the wrong output, too many rows were returned. Hopefully, you got the correct result and we're ready to move on to the next section and add further to your T-[[SQL]] skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (catchy upbeat music) (1)


### 3. Manipulating the Result Set

[↑ Back to Table of Contents](#table-of-contents)

#### [ORDER BY](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=0)** - [Instructor] In this section of the course, we're going to talk about manipulating the result set that is returned when we write our queries. We already covered how to filter the results with various where clauses to get the rows that you need, but there are some other useful techniques to format the results. When you look at a data set, it's useful to have it ordered by certain columns. For example, if the data is showing sales per month, it would be nice if the months were in order as we'd expect them in the year. It's important to remember though, if you don't specify an order, [[Microsoft SQL Server|SQL Server]] will return the rows as it finds them. And depending on the index you used, the order might change even if it seems like the results are always in the order you wanted. So if you want your results in a certain order, you need to specify an ORDER BY clause. Here, I'll start off with a pretty simple select statement. At this point of the course, this should be starting to look familiar. I'm specifying, I want to select four columns from the [[Microsoft Products|products]] table. Running this query, I get the expected results, except they could be in any order. For this example, they look like they're ordered by Product ID, but that is not guaranteed. And depending on the indexes on this table, among other things, this could change. I can, however, guarantee the order by adding the ORDER BY clause. I'll add order by unit price. You can see that the results are ordered from the cheapest product first all the way to the most expensive. ORDER BY sorts our dataset by ascending order by default. But if I instead wanted to sort by descending order or, in this case, most expensive product first, I can add the descending keyword. Running the query now, the results are switched,
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=96)** and you can see the most expensive product at the top of the results there. One final point on ORDER BY, so far I've only specified one column to sort on, but you can add additional columns. For example, if I wanted to sort first by category ID, and then by price descending, I would add in the category ID column to the ORDER BY clause. Executing this query now gives me all of Category 1 products first. We haven't specified descending order so the category is being sorted by ascending order. Within the Category 1 products you can see that they are sorted by unit price. ORDER BY clauses can be particularly useful when you are displaying results in a report as often, order matters in those cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** order (6), sql (1)
> **SQL:** order by (6)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [TOP](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=0)** - [Instructor] In this course, our sample database is pretty small. So far, the queries I've written have returned all the rows from each table. However, in the real world it's likely that our tables will have thousands, millions, or perhaps even billions of rows. If you write a select statement and return a large number of rows, you could cause significant performance issues on the [[Microsoft SQL Server|SQL server]]. And let's be honest, none of us are actually going to read a billion rows of data. This is why it becomes important to use the conditions you've learned in the where clause section of this course to filter the data to just what you want. But what if we just want to see a few rows of a certain table to see what kind of structure it has and what kind of data it contains? We can accomplish this with the top keyword. As I mentioned, this database is small and I'm in a local development environment. There's a low risk that if I run a select star with no where clause, that it'll cause an issue. So here I'll start with a select star from DBO customers. You can see that all the columns have been returned but also all of the rows. In the bottom right hand corner you can see 91 rows have been returned. I already mentioned the importance of only returning columns you actually need, but in the example here I just want to return 10 rows, all the columns so I can explore the data available. I can accomplish this really easily just adding top 10 before the asterisk. So SQL Server will return all the columns still but only 10 rows.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=91)** Executing this query you can see it now only shows 10 rows of data but all of the columns still. This can be a really useful tool for working out what data you have available within the tables of your [[Databases]]. As you start to write more complicated queries you'll find more uses for the top keyword. But I still use this method all the time when I have a new database to explore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Databases]] (1)
> **Env Vars:** sql (2), dbo (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [DISTINCT](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=0)** - [Instructor] All right, again, I've got a really simple keyword to add to your queries. This will allow you to ensure that your results set is unique. Let's start by selecting two columns from the orders table. You can see I've got customer ID and employee ID, and then I've ordered it by customer ID and employee ID. If I execute this query, you can see that for each customer ID, I have several rows. Looking just at the first customer, whose ID is ALFKI, you can see that they have orders handled by employee ID one, three, four, and six. If I wanted to find all the unique combinations of customer ID and employee ID, I only really need one row for each combination. You can see for the ALFKI and employee four, for example, I have duplicate rows. To solve this problem, I'll just add the keyword distinct before the column list. When I execute this, it'll apply the distinct requirement across all columns specified, so in this case, distinct or unique combinations of customer ID and employee id. Before I execute this, you can note that I have 830 rows returned, and when I run the query, we're left with only 464 unique combinations. If you instead wanted to answer the question, which customers ordered from the UK? You could combine your newfound knowledge of where clauses to filter on the ship country equals UK and then apply the distinct to just the customer ID column. Executing this final query
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=94)** will give us a distinct list of seven customers. Remember, these customers could have ordered just once or many times. This query just shows that they've ordered at least once.

> [!info]- Semantic Content
>
> **Env Vars:** alfki (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Intermediate SELECT statement](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=0)** - Time for the next challenge question. This time we'll need to make use of both the distinct and order by syntax to complete the challenge successfully. The initial code is again, a select star statement. This time from the customer's table. I know that I need just the state and city columns for this solution. So I'll first change the asterisk to specify those columns. The second requirement to this is about the unique combinations. To do that, I'll add the distinct keyword to the select list. And the final requirement is the order. Because that's required, I'll add order by state and city and that should solve the puzzle. Executing this query, I'm shown a green message stating I have the correct output. One thing worth noting, it's possible to get the correct answer without the order by clause. Depending on how the [[SQL]] engine gets the results, they might be in order but it's never guaranteed unless you specify order by so don't skip that last piece. Great work on this one. See you in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - time (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Joins

[↑ Back to Table of Contents](#table-of-contents)

#### [INNER JOIN](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=0)** - [Instructor] It's time for things to get a little more interesting. So far, each query I've written has been against only one table, but most [[Databases]] are designed in a normalized fashion, which means that the data you want to see is spread across multiple tables. If I run a select top 10 against the Orders table, you can see that within this table there are references to data in other tables. The CustomerID and EmployeeID columns don't tell us much about the customer who made the order or the employee that processed it. But by using that ID, we can essentially look up the data about, say, EmployeeID number 5 within another table. As you learn more about databases and more specifically [[Database Design]], you'll start to hear about primary keys and foreign keys. These keys help to structure our data to ensure these relationships between tables are enforced. For example, we can't have an order made by a CustomerID that doesn't exist in the Customer table. At the moment, as you're just starting to learn T-[[SQL]] don't worry too much about the design aspects, but it is important to recognize how to join multiple tables together to get what you need. The first join we'll cover is the most common, and that is the inner join. This join type means that records will only be returned if there are matching values in both tables. With the example from earlier, which showed the relationship between the Orders table and the Customers table, you can see that I can join these two tables on the CustomerID field. To write this query, I'll start with my select top 10 from Orders. Then to join to the second table, I'll specify the type of join, inner join in this case,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=94)** and then the table to join to, so Customers. This is only part of the story though. We have to specify which columns to join on. In this example, it's the CustomerID field from each table. If you recall from earlier, I taught you about table aliases. Adding an alias to each table means we can use that alias to specify the join criteria. Let's alias the Orders table as O and the Customers table as C. Finally, I'll specify the on clauses for the join, and that'll be the CustomerID from the Orders table, so O.CustomerID is equal to the CustomerID from the Customer table, which is C.CustomerID. Running this query with the asterisk means that I'll get all the columns from both tables returned. First, we have the columns from Orders, and if I scroll to the right, you'll also see the columns from the Customer table. This is a lot of columns. Let's refine it down a bit. I'll choose just the columns I care about today, which is OrderID, CustomerID, and CompanyName. You might notice a red squiggly line under CustomerID. [[Microsoft SQL Server|SQL Server]] Management Studio is telling me there is a problem. If I hover over that red line or execute the query, you'll see the problem. An ambiguous column, basically saying it appears in both tables, so I'll need to specify where to retrieve it from. Adding the alias of either table, remember, I've joined on that column so the values must be the same from either table
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=187)** will resolve this issue. Personally, when I'm writing queries with multiple tables, I'll always add the alias for each column that I returned. It increases readability for the next person who picks up this code or for future Jess when I come back to it. If I execute the final query, you can see I've now paired the information stored in the Orders table with the customer information. Since I specified an inner join, this results that will only include rows where the CustomerID is present in both tables. Next, we'll talk about another join option for finding rows when data isn't present in one of the two tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Database Design]] (1), [[SQL]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Definitions:** means that (2), is a  (2)
> **Env Vars:** sql (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [LEFT JOIN](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=0)** - [Instructor] The next type of join to learn about is the LEFT JOIN. Remember, with the INNER JOIN rows were returned if there was a match in both tables. Therefore, it didn't matter which table you specified in the FROM clause and which table was specified in the JOIN clause. However, with a LEFT JOIN, all the rows must be returned from the first table, even if there are no matches in the second table. If there are matches, then the values will be returned for those columns and if there are no matches, nulls will be returned. This means that consideration is needed on which table is the left table was specified first in the FROM clause. For this video, the question we're trying to answer from the data in this database is which [[Microsoft Products|products]] have had no sales? So basically, which products have no matching order detail records. I'll start with just a select top 10 from products, returning all the columns just to get a feel for the data. And I'll do the same for OrderDetails. You can see that there is a ProductID column in the OrderDetails table that we can use to join on. The syntax is pretty similar for all the join types. First, I'll add in the join information. This time specifying LEFT JOIN. Remember the table order matters. So I'll do FROM products using the p alias, and then LEFT JOIN OrderDetails with the alias od. Again, we'll specify the join criteria, which will be on p.ProductID equals od.ProductID. And I'll also specify the columns to return,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=93)** just the ProductID from the products table. And then I can do od.*, which will return all of the OrderDetails information. To start with, the results, it looks exactly like what you saw with the INNER JOIN as there are matches for the ProductID 1 in the OrderDetails table. However, if we scroll down to ProductID 2 in the results, you'll notice that only the first column, ProductID, has a value in. The [[Representational State Transfer (REST)|rest]] are null, because there was no matching rows in the OrderDetails for ProductID number two. To make this easier to see, and if the goal of this query was to just find products with no sales, I could add a WHERE clause to only show products where one of the values from the second table is null. So adding where OrderID is null would accomplish this. Running this query, you can easily see that ProductID 2 is the only one without any orders. This technique can be really useful for answering these kinds of questions and finding where data doesn't exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** join (7), left (4), inner (2), where (1)
> **SQL:** left join (4), inner join (2), join (1), where (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [FULL OUTER JOIN](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=0)** - [Instructor] The final type of join I'll introduce in this course is the full outer join. This builds on what you learned about in the video about left joins. Rows will be returned from both tables when you use a full outer join, even if there are no matches. Let's take a look at an example to make this a little clearer. First off, I'll run a select top 10 for both the supplier's table and the customer's table. This is a useful way of exploring the data to see what I have available. This data is a list of customers and suppliers from all over the world, if we take a look at the country column in each table. What if I wanted a list of all the customers in each country that we have suppliers in? Well, for that example, I'll do an inner join. If I use an inner join between suppliers and customers joining on the country column, I can answer this question. You'll also notice I've selected just the name and country columns from each table and applied aliases to make my results clearer. Running that query, you'll see there are some duplicates in the supplier name column as we're getting each combination of supplier and customer for each country. But there are no null values, so we can't tell if there are suppliers in countries with no customers or, vice versa, customers in countries with no suppliers. This is where the full outer join comes in as we want all the rows from both tables even if there are no matches on the join criteria. Running this now, you'll see nulls. This shows that we have customers in countries such as Mexico, where we don't have any suppliers and if I scroll down, you can see that there are suppliers
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=95)** in Japan and the Netherlands and Australia but there are no customers in those countries. There are many places where this may come in useful and now you have three options available when joining tables together. However, so far we've only looked at joins involving two tables. Next up, we'll combine more than two tables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Combining more than two tables](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=0)** - [Instructor] As you've seen so far, joins can be really useful for connecting tables together and getting the whole picture from your data. The whole idea of a relational database, like [[Microsoft SQL Server|SQL Server]], is to normalize the data and store it in this distributed fashion where data lives in appropriate tables and can then be brought together as we query it. So far though, we've only joined two tables together. And as your skills improve, and you find yourself writing queries out in the real world, I can guarantee you'll need to join more than two tables together. So let's take a quick look at them. Remember the orders table? This contains multiple keys that reference data in other tables. We have the CustomerID, which can be joined to the customer's table, and the EmployeeID, which as you might have guessed, can be joined to the employee data in the employees table. If we're trying to get the whole picture on each order, we might want to pull in information about both the customers and employees that were involved in each transaction. Let's start by adding an inner join to the customers table. And as you've already seen, the join criteria will be on o.customerid = c.customerid.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=69)** If I execute that query, you'll see the additional columns returned. I'll reduce the columns returned a little and get just the customers company name and contact name. Now I'll add the second join. Again, an inner join this time to the employee table. The join criteria here is on the employee ID from each table. As far as columns go, I'll get just the employees last name, first name, and title. You'll notice I'm using the table aliases to improve the readability. You can easily tell which table each column is coming from and it's as easy as that. You can add on as many tables as you need. It's worth considering the performance of your queries though. The more you add, the more work SQL Server has to do to retrieve your data. One final consideration is the join order. If you're using all inner joins as we are in this example, the order doesn't matter. But remember what you learned in this chapter. For an inner join to return rows, the data needs to be in both tables, so data that doesn't exist in both tables is filtered out. If you want to use a mix of inner joins and outer joins, either full outer joins or left joins, you need to consider the order as you want to make sure you don't filter out rows that you're expecting to keep. Well, folks, thus joins another great tool for your T [[SQL]] Querying Tool Belt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** picture (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Joins](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=0)** - [Instructor] As we get further into this course, your skills are improving and so the code challenges are getting a little more challenging. Hope you enjoyed this one, let's take a look at how I solved the problem. This is the first challenge where we've had two tables to work with. You can see in the diagram at the top of the question, we have a customer's table and an orders table, and they're connected by a customer ID column. The question asks for a result set that contains two columns from each table. And to start with, I'm given just a SELECT * FROM Orders. The first thing I'll need to do is integrate the second table. There is no mention of needing data even if it doesn't exist in the other table, so we'll use an inner join for this task. I'll add the syntax inner join customers on customer ID from the orders table equal to customer ID from the customer table. You'll notice I'm using table aliases to make the syntax easier to read, and it'll also help for the select portion of this query. At this point, the query will return all the columns from both tables, and I'm only asked for four. So I'll replace the asterisk with order ID and order date from the orders table, and first name and last name from the customer's table. Finally, I'll execute this query and check my results. Looks good, I have the expected results.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. DDL and DML: Creating and Changing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a table](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=0)** - [Instructor] You've learned a lot so far on querying data, how to retrieve it from the database and create a result set that answers certain questions. But this section will instead focus on building tables to store data and how to insert, delete, and update the data within those tables. In this video I'll explain the syntax you need to create your first table. It's worth noting here that I'll explain how to create a simple table that you can use within the [[Representational State Transfer (REST)|rest]] of this course. But the art of designing database tables is a complex subject area. There are many considerations to take note of to ensure you build the best and most performant tables for your needs. The first thing I need to do is specify that I wish to create a new table and I'll do that by typing create table and then the table name. (keyboard clacking) I'm going to create a table to store some data about animals so I'll write create table animals and then open and close parenthesis which will hold the definition of the columns. As I add columns, there are a few pieces of information I'll need to provide. This includes specifying at least a name and a data type. For some of my columns I'll also add some additional options. For the first column, I'm going to add an ID field. This will act as my primary key for the table and I'm going to use an int or integer as the data type. I'll name the column animal ID and then specify the INT data type. As I mentioned I also want this column to be my primary key so I'll add primary key after the data type, this will create the primary key constraint with a default name. If you prefer to control the name you can instead define the primary key constraint after the column definitions, I'll share a link
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=93)** to the [[Microsoft]] documentation on this syntax at the end of this video. There is also a really neat feature in [[Microsoft SQL Server|SQL server]] called identities, which allows me to specify that this animal ID column as an identity, and as data is inserted, the ID will auto increment. I can add the identity keyword to the same column and then I'll specify the seed, which is the starting value. So I want my first ID to be 1, and then the increment. If I want the values to increase by 1 each time I'll again add 1 here. That's my first column complete so I'll add a comma and move to the next line. For the next column it'll be called Name, and it'll be a VARCHAR 50. This specifies that it'll be a string value with a max length of 50. You can specify VARCHARMAX, but it is best practice to define the string length needed. I'm also going to specify not null, which means this column must always contain data. Let's add a second VARCHAR column for species. This time a little longer, and still not null, so requiring data to be inserted. For the next column, I'm going to name it date added and since, as you may have guessed, it's going to store a date, I'll use the DATETIME2 data type. The brackets after this specifies the precision of the date. For my case, I'll use a 0. This will store a date time with a precision up to seconds which is plenty in my case. It's always best practice to use the smallest data type you can. If I didn't specify the precision for DATETIME2, it would use two extra bytes per value. That doesn't sound a lot but it adds up fast in big [[Databases]]. For the final column, I'll name it isMammal,
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=187)** and I'll specify a bit data type. This is a special data type that only has two possible values, 1 or 0. That's the definition of my table complete so I'll execute that. And if I now run a select star from the table, you can see no data, but the expected column names along the top. (keyboard clacking) My table is now ready for some data, and we'll look at adding that in the next video. As promised, here are a couple of references for you to review. Firstly, we've only covered a few of the many data types available to use when designing your tables. Review this document and learn about which data types are the best for the kind of data you want to store. The second link will enlighten you on primary keys and the different syntax you can use to define them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Databases]] (1)
> **Env Vars:** varchar (2), datetime2 (2), int (1), sql (1), varcharmax (1)
> **SQL:** varchar (2)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (2)
> **Code Identifiers:** ismammal (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Insert data into a table](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=0)** - [Instructor] In the last video, you saw how to design and create your very own [[Microsoft SQL Server|SQL server]] table, which is very exciting, except it's currently pretty empty. And let's be honest, an empty SQL server table isn't much fun. Let's take a look at how we can insert some rows into the table. First, let's remind ourselves of the structure of the table. You can see in the comment at the top of the file, I have the table definition. Also, if I run a select star against the table, you can see the columns are returned. One final tip. You can execute a system stored procedure called SP_HELP to see more information about your table. If I pass in the name of my table as a parameter to SP_HELP, I'll get several useful result sets returned. The first pane just shows the name, owner and when it was created, but the second pane shows the columns and their associated data types, which is useful information when we want to insert data. There are some more good information returned by SP_HELP. I'll let you explore that further on your own. The easiest way to insert data is to write an insert statement. I'll start that with the keywords insert into, and then the table name, which is animals. Then I'll specify the columns within parentheses that I want to insert data into. Since the animal ID column is an identity, I can actually just skip that column. Finally, I'll specify values, and then within the parentheses, the values I wish to enter. For the two string values, I'm going to enter Zippy as the name and kangaroo as the species.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=94)** I can specify the built-in function get date to get the current date, and then finally, I'll add a one for the bit column. since kangaroos are mammals. Running this statement, you'll see the message, "One row has been affected," and if I rerun the select star from animals, we can now see we have one row of data in the table. It's looking good. You can also insert multiple rows at a time in this same fashion. For example, here I've written a statement to insert two rows just by adding a comma at the end of the first line of values and then adding a second set. Each row is surrounded by parentheses. Executing that. and you'll see two rows are affected. And if I select all the data from the animals table again, you can now see three rows in total. You can also use a select statement to get the data you want to insert. If I have a staging table called stg_animals, I can write a select statement from the table and use it to insert the data like so. If I do one final select, you can see that I've inserted data for Rupert the frog that was contained within my staging table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sp_help (3), sql (2)
> **Code Identifiers:** stg_animals (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Update data within a table](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=0)** - [Instructor] Next up we have updating data within our table. If you've been following along with the videos in this section you should now have a table named Animals with some data in. But what if something changes? Maybe we decided to rename one of our animals or perhaps we made a mistake when entering the information in the first place. We can use an update statement to make changes to data already within our database. I'll say this now and probably again in the video. The most important part of an update statement is making sure it's targeting only the rows you want to update. Personally, whenever I start to write an update I start with a select statement. So let's take a look at this scenario. First, I'll run a select top 10 * which gives me up to 10 rows and all the columns. I need to update Maria, the elephant's name, to Mrs. Maria as she's feeling pretty formal these days. The first step for this process is to isolate the rows I want to update. In this case, it's just the row where animal ID is three. Let's add that as a where clause to my select statement and confirm the correct data is returned. You can clearly see only one row is returned which is the exact target of my update statement. I could have said where name equals Maria but if there were more animals in the table named Maria I might update too many rows. Choose the most specific column you can and I'd usually recommend the primary key if your scenario is like this one. Once you have the data to update you can write your update statement using the where clause you just perfected. I'll start with update and then the table name animals.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=101)** Then I'll specify the data to change. In this case, I will type set name equals Mrs. Maria. Finally, I'll add the where clause, where animal ID equals three, and when I execute it you'll see that one row has been affected. If I repeat the select * now you can see the data has been changed. This is a very simple update statement with only one table involved but you can write more complicated statements with joins to other tables, for example, and you can also target multiple rows at once to update. One final reminder though, double check will the select statement that your where clause is returning just the rows you want to update before you run the update statement. There is no worse feeling than running a statement, checking the results and seeing a lot more rows have been affected than you were expecting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Delete data from a table](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=0)** - [Instructor] So far in this section, I've covered creating tables to hold data and then inserting and updating the data within those tables. Next up, we have deleting data. There are two main ways to remove data from a table. In this video, we'll cover the first method, which is a delete statement. Similar to an update statement, you will start by working out exactly how to target the rows you want to delete. As I recommended previously, I'd write a select statement to ensure your where clause is perfectly crafted before you run the delete. There is nothing worse than deleting more data than you were expecting to. So today I'm going to look to delete all the mammals from the table. To start, let's run a select top 10 from animals, so I can see all the data we have, and then I can figure out how to best solve the request. As you may remember, the animals table has a column named isMammal which is set to one where the animal is a mammal, and zero when the animal is not. Let's add where isMammal equals one to the select and then rerun it. Reviewing the data, I can see it contains just the rows where isMammal is equal to one, so it looks good. Now, I can feel confident that when I write the delete statement using this where clause that I'll target the expected rows. The delete syntax is very similar to the update statement that you've already seen. I'll type delete from animals, and then add the where clause from the select. Now I'm ready to execute that and remove the rows. You can see that two rows are affected,
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=92)** which is the number that I was expecting. Finally, I'll rerun the select statement. Here I'm highlighting just select top 10 from animals, and I can prove that just the data I'm expecting remains. In the next video, I'll show you how to remove all the data from one table in one go. See you there.

> [!info]- Semantic Content
>
> **Code Identifiers:** ismammal (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [TRUNCATE a table](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=0)** - [Instructor] The final statement I want to mention for this section of the course is the TRUNCATE TABLE statement. In the last video, you saw how I could use the delete statement to target rows in a table and delete them. I used a WHERE clause to select the precise rows but I could have skipped the WHERE clause to delete all the rows in the table. However, when you run a delete against all the rows in a large table, you can see performance problems and potentially cause issues with resources, such as the transaction log on your server. Instead, I recommend if you want to remove all the rows from a table, use the TRUNCATE TABLE syntax that I'll cover here. There is one caveat I want to mention and that is if the table has an identity column, the seed value will be reset. So the next row that you will insert will have the value of one or whatever you set the identity seed to when you define the table. If that behavior isn't desirable, you'll instead need to use a delete statement. But if you're happy with resetting the identity, let's take a look at how to truncate the table. Remember the animals table? I'll run a SELECT TOP 10 to refresh your memory. You can see the rows of data we have available in there. The TRUNCATE TABLE statement is probably the easiest you'll ever write. It's simply TRUNCATE TABLE and then the table name. So I will write TRUNCATE TABLE animals.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=80)** Executing that, you'll notice I get a message, command completed successfully but no row count, which I've received with the other [[Data Manipulation]] statements I've executed. This operation targeted all the rows in the table and it didn't keep track of how many it had to remove. It just removed them all. This is why the performance is better. It's logged in a different way than the delete statement, so you can truncate a massive table in literal milliseconds. Remember, with great power comes great responsibility so be careful and make sure that you're certain before you execute the queries. Rerunning the SELECT and you'll see the data is all gone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Manipulation]] (1)
> **Env Vars:** truncate (5), table (5), where (2), select (2), top (1)
> **SQL:** where (2), select (2)
> **Warnings:** caveat (1), be careful (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### [Update data with a join](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=0)** - [Instructor] All right, I've got one more scenario for you before we wrap up this course. So far, we've only looked at very simple UPDATE and DELETE statements where the conditions to target the rows to update or delete are within the same table. Now I'm going to show you how to combine this knowledge with what you learned in the join section of this course. I'm going to demonstrate how to update values in one table based on the relationship to another table. Let's refresh ourselves by running a SELECT * against both the animals and the staging animals table.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=33)** You can see that although they both have an ID column, they are separate to those tables. So if we wanted to join these tables together, we need to do so on another column. In this simple example, you can see that the name column is appropriate. What I want to do is add a column to the animals table called notes and then update it with a short note for any animals that are in the stg_animals table. The first step is to add the new column. I'll use an ALTER TABLE statement for this. We haven't covered that in this course, so consider this another bonus tip. I'll say ALTER TABLE, table name and then add the column details. In this case, a notes column, the data type is VARCHAR 100, and it will accept null values. Now that's ready, I'll write a SELECT statement that uses the join criteria I'll need for this update. Here you can see I'm selecting all the columns from animals with an INNER JOIN to stg_animals on the name column from each table. Running this, you'll see I have one row returned. There's only one row in animals that is also in stg_animals. I now just need to swap this around to an update statement. I'll remove the SELECT * row but leave everything else intact and replace it with UPDATE a SET notes equal to imported from stg_animals table. The update this time has the alias of the animals table specified. Since there are multiple tables in this statement, we need to specify which table is the target of the update.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=132)** As you start crafting more queries out there in the world, you'll probably need to use techniques like this to isolate the data you want to update. And one final bonus tip, you can use the exact same technique for delete statements. Build the join to target the rows and then add in the DELETE keyword, just specifying the table to delete from.

> [!info]- Semantic Content
>
> **Env Vars:** select (3), update (2), delete (2), alter (2), table (2)
> **SQL:** select (3), update (2), alter table (2), varchar (1), inner join (1)
> **Code Identifiers:** stg_animals (4)
> **API Endpoints:** delete  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=0)** - [Instructor] Well, folks, that brings us to the end of this course. I hope you've enjoyed it and I also hope you feel like you've learned a good amount of T-[[SQL]] enough to create a good base for you to continue your learning. There are many resources available to continue this journey. One recommendation is to search for T-SQL or [[Microsoft SQL Server|SQL Server]] within the [[LinkedIn]] Learning Library. You'll find lots of great content there and I've even got an Advanced T-SQL Level Up course that you can tackle once you feel ready. Also, the online SQL community is strong and lots of experts are often blogging and presenting about SQL Server topics, including writing T-SQL, [[Performance Tuning]] and other administration type topics. I'd recommend following the #sqlserver and sqlfamily on LinkedIn, Twitter and Blue Sky to get connected and keep up to date with the latest content. You can also find me all over the internet. If you've enjoyed this course, please let me know and if you've got questions, I'm more than happy to try and answer them. The best place to find me is on LinkedIn or Blue Sky. Again, my name is Jess Pomfret. Thank you so much for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[LinkedIn]] (3), [[Microsoft SQL Server|Sql server]] (2), [[Performance Tuning]] (1)
> **Env Vars:** sql (7)
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-transact-sql-4451097)

## Skills Covered

- Transact-SQL (T-SQL)
- SQL

## Path Context

### In [[Advance Your MS SQL Server Skills]]
**1 of 9** | [[Microsoft SQL Server 2022 Essential Training]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)