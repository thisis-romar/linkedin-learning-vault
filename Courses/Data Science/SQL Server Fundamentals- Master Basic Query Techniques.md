---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-server-fundamentals-master-basic-query-techniques
url: "https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques"
duration_minutes: 103
duration: 1h 43m
level: Beginner
updated: 2/26/2025
learners: 29193
skills:
  - SQL
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFZ5RInMGc4Tw/learning-public-crop_675_1200/B4DZVN0T3.GkAY-/0/1740767314055?e=2147483647&amp;v=beta&amp;t=bw7wK_y3-_PGUDTr6XbTIa7GpVHo3qoY6fw0zS0A-Hw"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Database Foundations- Application Development]]'
next_courses:
  - '[[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]]'
path_nav: '[{"path":"Advance Your Database Administration Skills","position":6,"total":11,"prev":"Database Foundations- Application Development","next":"Practical Database Design- Implementing Responsible Data Solutions with SQL Querying"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
  - skill/microsoft-sql-server
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md)

![SQL Server Fundamentals: Master Basic Query Techniques](https://media.licdn.com/dms/image/v2/D4D0DAQFZ5RInMGc4Tw/learning-public-crop_675_1200/B4DZVN0T3.GkAY-/0/1740767314055?e=2147483647&amp;v=beta&amp;t=bw7wK_y3-_PGUDTr6XbTIa7GpVHo3qoY6fw0zS0A-Hw)

# SQL Server Fundamentals: Master Basic Query Techniques

> Do you want to learn about SQL but aren’t sure where to start? In this beginner-level course, instructor Julianne Thouin covers basic concepts of relational database design and explains how to write simple SELECT statements using joins and proper filtering. Julianne explains what SQL Server is and what it is used for. Next, she shows how tables in a relational database relate to one another throug

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques) | 1h 43m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [How can SQL answer your data questions?](#how-can-sql-answer-your-data-questions)
  - [Introduction to CoderPad](#introduction-to-coderpad)
- [**1. Introduction to SQL Server and Relational Database Concepts**](#1-introduction-to-sql-server-and-relational-database-concepts) (4 videos)
  - [What is SQL Server?](#what-is-sql-server)
  - [Understanding servers, databases, and tables](#understanding-servers-databases-and-tables)
  - [Relational database concepts](#relational-database-concepts)
  - [Surrogate, primary, and foreign keys](#surrogate-primary-and-foreign-keys)
- [**2. Single Table Select Statements**](#2-single-table-select-statements) (5 videos)
  - [SQL data types and nullability](#sql-data-types-and-nullability)
  - [Reading from a single table in SQL](#reading-from-a-single-table-in-sql)
  - [Filtering on a single condition in SQL](#filtering-on-a-single-condition-in-sql)
  - [Filtering on multiple conditions in SQL](#filtering-on-multiple-conditions-in-sql)
  - [Solution: Filtering dates](#solution-filtering-dates)
- [**3. Multiple Table Select Statements**](#3-multiple-table-select-statements) (6 videos)
  - [Inner joins](#inner-joins)
  - [Multiple inner joins](#multiple-inner-joins)
  - [Solution: Inner joins](#solution-inner-joins)
  - [Outer joins](#outer-joins)
  - [Solution: Working with multiple tables](#solution-working-with-multiple-tables)
  - [Subqueries](#subqueries)
- [**4. Additional SQL Query Tools**](#4-additional-sql-query-tools) (6 videos)
  - [Case statements](#case-statements)
  - [Solution: Case statement](#solution-case-statement)
  - [Built-in functions](#built-in-functions)
  - [Aggregates](#aggregates)
  - [Solution: Aggregates](#solution-aggregates)
  - [Query processing order](#query-processing-order)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How can SQL answer your data questions?](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=0)** - [Instructor] Understanding how to directly access information stored in a database can be a very powerful tool. And you may think that you need a special diploma or hours and hours of in-depth training to have any hope of learning how to do that. But that's simply isn't the case. Hi, my name is Julianne Thouin and I established a career writing [[Database Queries]] without obtaining a degree in computer science by learning to write in an English like programming language called [[SQL]]. In this course, I'll walk you through the basics of writing SQL queries and give you all the tools you'll need to start retrieving information from a relational database. Whether you're looking to learn your first programming language in hopes of someday working as a professional database engineer or you already work alongside developers and want to be able to get the answers you need by querying the database on your own. This is a great place to start. Welcome to SQL for non-programmers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Database Queries]] (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to CoderPad](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=0)** - [Instructor] This course includes automated code practice problems, which appear when you click on the challenge links in the course's table of contents. Each one includes instructions and a couple of code editors you can use to write and test your own solution to the prompt presented. These challenges are hosted by CoderPad, and can be found on the course page in the same area where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can also use the [[LinkedIn]] Learning mobile app if you prefer. Each code challenge has three areas, instructions on the top left, a code editor for your answers on the right-hand panel, and a console that will show the query results in the bottom left. You can also use these drag handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions, including diagrams of the tables needed to solve the problem, a description of what your query is meant to retrieve, and what the final output will look like. There are also examples of similar results sets and additional notes on the data and the sample tables and some of the syntax rules you'll need to follow with CoderPad, which uses what is known as the ANSI standard for the code. This is also what's used in [[Microsoft SQL Server|SQL Server]], but [[Microsoft]]'s version allows some additional code formatting that will not successfully compile in CoderPad.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=95)** So make sure you pay attention to the instructions where that may apply.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft]] (1)
> **Env Vars:** ansi (1), sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to SQL Server and Relational Database Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [What is SQL Server?](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=0)** - [Instructor] Before we can dive in and write a single line of code, it's important that we cover a few definitions and high level concepts that we are going to need for this course. [[SQL]] pronounced as either SQL or S-Q-L depending on who you're talking to, is an acronym that stands for Structured Query Language. It is a basic English like programming language that is used to interact with a database. A database is an organized collection of data points stored on a computer. Any information that an organization needs to conduct their affairs is stored in a database of some kind. More specifically, SQL is used for managing a relational database, which is a [[Data Storage]] method that organizes information and a series of tables that are connected through data relationships. We'll be going more in depth with how that works in another video, so don't worry about that too much right now. There are several different relational [[Database Management]] systems out there that you might've heard of like Oracle [[PostgreSQL]], or [[MySQL]], but in this course, we'll be using [[Microsoft SQL Server]] and learn to write a specific style of SQL called Transact SQL or T-SQL for short. There are some syntactical differences among the different versions of SQL, so once you've mastered one version, you could probably look at code from another one and understand what's going on.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=93)** But the skills you learn in this course won't be 100% transferable to other applications. The major differences among the different RDBMS options has to do with feature stacks, under the hood [[Performance Tuning]], support, and costs. The program I'll be using to run my code and interact with the [[Databases]] in this course is called [[Microsoft SQL Server|SQL Server]] Management Studio or SSMS. Before you can start writing any code, you'll need to make sure that you have the latest version of SQL Server downloaded and started on your computer, and [[Microsoft]] has all that you'll need to do that right on their website. You can go here to download SQL Server. The developer version is free and will do just fine for your first steps into SQL Coding, and you just need to install it using the default settings provided. Then you can go here for instructions on how to start the SQL Server Configuration Manager and the SQL Server instance that you've downloaded on your machine. The program I'll be using to run my code and interact with the databases is called SQL Server Management Studio or SSMS, which you can also download for free here. Once you have all that ready, you'll be good to go. I do all of my development work on a [[Windows]] machine, but you can still run SQL Server on a Mac computer. Your installation and setup will just look a little different. You'll need to install a program called Docker,
>
> **[3:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=187)** which you can download here. Obviously, you'll just select the appropriate download for Mac option for your machine. Then you can follow the instructions found in this blog post to set up and start SQL Server. You won't be able to run SSMS on a Mac either, but [[Microsoft Azure|Azure]] Data Studio is another free tool that you can use for your SQL development. Download that program here. Your interface will look different than what I'm using in these videos, but you can still run all of the same queries in this tool, which will look something like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Microsoft SQL Server|Sql server]] (8), [[Databases]] (2), [[Data Storage]] (1), [[Database Management]] (1)
> **Env Vars:** sql (18), ssms (3), rdbms (1)
> **Definitions:** is an  (2), is a  (2), is called (2), stands for (1)
> **Prerequisites:** you'll need (3), install (2), setup (1), set up (1)
> **CLI Commands:** mysql (1), make (1), docker (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Understanding servers, databases, and tables](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=0)** - [Instructor] When the [[Microsoft SQL Server|SQL Server]] installation is up and running, you'll have set up a local instance of a SQL Server on your computer that you can connect to through SSMS or [[Microsoft Azure|Azure]] Data Studio. Again, I'll be using SSMS in these demos. When I open up the program, this Connect to Server window pops up and I automatically have the local instance selected. But if that didn't happen for you, just go to this dropdown, select Browse for more, expand the Database Engine option, it should be right there for you. Click OK and then Connect, and you should be good to go. To show you another way, I'll first disconnect by right clicking here. You also have the option of just typing a period in the Server name box. Hit connect, and that works the same way. If you have a machine that's powerful enough, you could have more than one instance installed. And if you're working for a company that uses SQL Server, they probably have many servers that people with the right permissions can connect to. But for this course, you'll only need the one. If we go over here to the Object Explorer panel on the left, we see we have lots of different options. For this course, we're only concerned with the Database folder, which I'll expand by clicking on the plus sign to the left. If you've just installed SQL Server for the first time, you probably won't have anything here, I created this demo database earlier. But in order to create our own database, we just right click on [[Databases]], select New Database, type in whatever name you want.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=94)** I'm going to use "sandbox" since this will be the database I'll be using in all of these demos, and just say OK. And there we have our database, this little cylinder icon indicates that this is a database. The data on this database is organized into tables. Tables in SQL Server have two part names. The first part before the period is called the schema. A schema can be used to bucket similar tables or tables for a particular application or project under one name. You can also use a schema to manage security and permissions. The second part of the name after the period is the unique table name. You can have more than one object with the same name as long as they're in different schemas. You may also see instances where the server name and the database name are included when referencing a table in code, but usually it's just schema name.table name, or sometimes just the table name by itself since the server will assume you're looking in the default schema set to DBO on install if you don't specify. There's a file attached to this video called two.trees.[[SQL]]. If you would like to follow along with the demos in this course, you just have to run the script to create the tables and add the data you'll need to your local database. To do that, open the file and then make sure that you're on the correct database by checking this dropdown box right here. We want to be on "sandbox," and then just click the Execute button to run the script. And you'll see: Command completed successfully.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=189)** Then to look at the list of tables you just added to your database, click on the plus sign next to the database option, and then next to the Tables folder, and here we have our list of tables. I'm going to right click on one of these, the dbo.customer table, and do select top 1,000 rows to give you an idea of what this data looks like. So this is similar to what you might find if you open up an [[Microsoft Excel|Excel]] file. The data is stored in rows and the data points are divided up into columns. We've got a bunch of readable data here, but we also have some IDs that are pretty meaningless on their own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (5), [[Microsoft Azure|Azure]] (1), [[Databases]] (1), [[SQL]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sql (5), ssms (2), dbo (1)
> **UI Navigation:** click on (3), dropdown (2), go to (1), open the (1)
> **Prerequisites:** set up (1), install (1), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** two.trees.sql (1)
> **Analogies:** similar to (1)

#### [Relational database concepts](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=0)** - [Instructor] At first glance, it might look like the tables in a relational database would be structured in pretty much the same way as tables that you might be used to in other contexts, from [[Microsoft Excel|Excel]] files or a table in a textbook. There are some key differences however, which we'll cover in this video. We're going to start With a simple sample dataset to demonstrate how [[Relational Databases]] organize information. This order's table looks like something you might see in an Excel file with information about customers, where they live, what they purchased, how much each item costs and the order total. Looking at this dataset, you might notice some inefficiencies in storing the data this way, because we are recording some of the same data points over and over, such as the customer's location or the price of a bottle of oil versus a case of oil. We also have multiple rows for the same order when more than one type of item is included in the order. To avoid this repetition, I'm going to transform this dataset as you would to store it in a relational database, where data points are stored as few times as possible and tables are linked to one another using pointers called keys. First, I'm going to split out the customer information into its own table, the customer table. Each customer's information is stored only once. And I've assigned each of them a customer ID that I will use in my original table as a stand-in for the entire data row. So our new data table would look like this,
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=94)** where we've substituted the customer data that was there before with just the IDs that represent that data from the customer table. This is referred to as a one to many relationship. Each data point is stored once in the customer table but it can be referenced many times in the order table and in any other tables that store the customer ID in this database. To deal with the [[Representational State Transfer (REST)|rest]] of the duplicate data, let's break out the product information into a new table as well. We'll follow the same pattern as with the customer ID by assigning an ID to each product. You may notice that we could still remove duplicates further in this dataset, but for the sake of this example, we're not going to do that step right now. We could do the same thing we did to add the customer ID to the order table with this new product ID as shown here, but that would still leave us with multiple rows for the same order, which isn't deal. Instead, we will remove the product information from the order table entirely, eliminate multiple rows per order in the main table and add an association table also called a join table or a junction table to connect the order information with the product information in a many to many relationship. A visual representation of the way the data is organized in a database is called an entity relationship diagram or ERD which you'll see here for our new data design. The process I just went through to remove duplicate data
>
> **[3:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=188)** and move into a relational database model of storage where tables are linked using key relationships is called normalization. In a perfect relational database, your data would be 100% normalized, which means that you would avoid the costs associated with storing any piece of information more than once. In reality though, you might see some intentional denormalization or storing the same piece of information more than once. Sometimes you want to allow some denormalization if it just makes your data easier to work with, or if your primary concern is speed because it's easier for the server to get everything it needs from one table, rather than jumping across multiple tables. As you can see, our dataset has transformed a lot going from this to this. And while it's not important for you to be able to draw your own ERD at this point, it is critical that you understand the conventions that it represents as you start to navigate a normalized [[SQL]] database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Relational Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1)
> **Env Vars:** erd (2), sql (1)
> **Definitions:** is called (2), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Surrogate, primary, and foreign keys](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=0)** - [Instructor] Time to delve a little deeper into some of the terminology used when discussing the types of relationships among the tables in a relational database. As I said, all of their relationships are managed through keys that can be used as a stand in when they are referenced in another table. These keys are called surrogate keys. These values don't have any meaning on their own and are most often generated by [[Microsoft SQL Server|SQL Server]], as with an Identity, Sequence or NewID order GUID, short for global unique identifier. If I called someone at Two Trees Olive Oil and asked, do you remember the order total for order number 180? They would have no idea what I was talking about. 180 is just a surrogate key that represents all of the data associated with that order. If instead, I asked, do you remember the order total for Merrill Freeman's order on May 2nd, 2018? They might have some chance of at least understanding what I'm asking about. Providing the customer's name and the order date in this case is a way to uniquely describe that row in meaningful words. This descriptive identifier is called the natural key, as opposed to the surrogate key we talked about earlier, which has no meaning on its own. It is best practice in a relational [[Database Design]] to have some kind of unique identifier for every row in every table of your database called the primary key. This could be a single column
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=93)** or multiple columns put together to make a unique combination. The surrogate and natural keys are concepts of database design and you'll want to take them into consideration when you're choosing the primary key, which will be the physical uniquifier on the table in your database. This is a value that you're going to use to reference that unique value in other tables in the database. Primary keys also play a part in creating referential integrity in your database as they provide a data check for what's called a foreign key. If you add a foreign key to a table, which can only point to a primary key value, the server will check that the ID value that you're inserting in that column actually exists in the table the foreign key is pointing to. That way, you won't add a surrogate key value that doesn't mean anything. Now we've definitely covered a lot of ground in this section, and I'm sure that you're eager to start writing actual [[SQL]] code, and I promise, we're almost there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (2), [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1)
> **Definitions:** is a  (2), short for (1), is called (1)
> **Env Vars:** sql (2), guid (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 2. Single Table Select Statements

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL data types and nullability](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=0)** - [Instructor] The last thing that we need to cover before we can move on to write some code are the concepts of data types and nullability, which have to do with the rules around how data is stored in each column of a table. Data types define what kind of information is stored in a particular column, as well as how much precision is allowed in that data point. There are a number of different options available in [[Microsoft SQL Server|SQL Server]] and we will only cover a handful here, but the basic ones are broken down into numbers, strings and characters, dates and times, and true/false values. For numbers, we can store whole numbers with the data type INT, and we can store decimals using either DECIMAL or NUMERIC, which are pretty much interchangeable, so you can decide whichever one you prefer. With the decimal values, you can specify how many places you want to allow after the decimal, using two numbers like you see here. The first number indicates the maximum number of digits you'll allow in the number, and the second tells you how many places will be allowed after the decimal. For strings and characters, we can store a fixed number of characters in a column using the CHAR data type. And you would use the number after to define how many characters would be stored. If the number of characters in a column will vary from row to row, you would use VARCHAR instead and define the max length of your string there. When you want to record dates and times,
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=94)** you have a few different options. You can store just the date using the DATE type, just the time using TIME, or you can store those two points together using DATETIME or DATETIME/2. DATETIME/2 just has a little more precision. And then, if you need to bring time zones into the mix, then you could use the DATETIMEOFFSET. Lastly, we've got true false values, which are called BITs, where the only permissible values are zero and one, where zero means false and one means true. So those are some of the different ways that we can store data in a table in SQL Server, but there's one more rule that we need to consider, which is whether or not the column is nullable. We deal with the concept of NULL in a couple of different ways in [[SQL]], but in regard to its use at the table level, it answers the question of whether or not this is a required data point. The term NULL just means that there is nothing stored in that column. So if a column is defined as NULL that means that it is optional to have something saved there and logically NOT NULL means that you must provide input for this data point. And with that, we have made it through all of our [[Database Design]] concepts and we can get to actually writing some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (1), [[Database Design]] (1)
> **Env Vars:** null (4), sql (3), datetime (3), int (1), decimal (1)
> **Definitions:** means that (2), is a  (1), defined as (1)
> **SQL:** varchar (1)
> **Speakers:** - [instructor] (1)

#### [Reading from a single table in SQL](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=0)** - [Instructor] We have finally arrived at the coding portion of our show, and we're going to start with the most basic operation, which is reading from a single table. To do that, we're going to build what's known as a select statement, where you're going to select what columns you want to look at, and tell [[Microsoft SQL Server|SQL Server]] what tables those columns should be coming from using a from clause. So let's move over to SSMS so we can see this in action. As you can see, I've already connected to the server on my machine and I'm going to go ahead and expand my [[Databases]] folder by clicking on the plus sign to the left. And I'm going to be using the sandbox database for this demo, and expand that in the same way. And then lastly, we're going to look at our list of tables available. And if you ran the data script attached to chapter one, your database should look exactly like this as well. So to write my first query, first I'm going to select the database I want to work off of, which is the sandbox database. And I'm going to go up here and click on New Query. And I'm going to go into my query editor, and I'm going to select star. Star just means get all of the columns available in this table. And I'm going to say from dbo.additional_service. And I can run that by going over here and clicking on Execute. Run that.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=93)** And I get all of the data available in that table. And if I go over back to my object explorer and expand the additional_service table and the Columns folder, I'll see that the columns here match what came back in my results set. A lot of times, you're not going to want to look at every column in your table, so you can limit that set by listing the columns individually. So I get rid of this star, and I just want to look at the service name. Add a comma to separate the column names. And I want to know the minimum number of participants for each service. And then again, I'm going to go over and execute my query. And I'm just going to see the data from those two columns. We haven't changed the table at all. If I go over here, I can refresh. And I can confirm that all of the columns are still there. I'm just changing what's presented. Another good tip when you're running queries like this is that sometimes you're dealing with a table with lots and lots of rows, but maybe you're just trying to get an idea of what the data looks like or you want to just look at a sample set. So to limit how many rows come back, after select you would just add top three, or top 10 or however many you'd want to. And again, execute. And I only get three rows back. So you'll notice in our results panel
>
> **[3:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=186)** that by default our column headers are also the same as the names of the columns themselves, but sometimes you might want to change your presentation a little bit and change those column headers. So I'm going to show you a couple of ways to do that. There're several ways, but I'm just going to show you the two that I like best. First I'm going to just copy this query. So the first option is to put your alias at the front of your column name, and I'm going to call this additional_service, and you just put an equal sign. And then I'm going to say minimum_participants. And I'm going to run both of these so we can compare the results that we get. Same data. And you'll notice that the only thing that has changed is the column header. And again, we're not changing the structure of the tables at all, just their presentation. And then the other way that you can do this, we'll start fresh, is to add it after the column name. And it's not required, but I really recommend that you put these in square brackets. So I'm going to use the same ones, additional_service, and using the brackets also allows me to put a space in the column alias. If I didn't have those brackets, it wouldn't know what to do if I added this space. And then I'm going to say minimum_participants. Going to execute that. And again, same result.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=280)** It's just a matter of which one you like better. I also really quickly want to point out this yellow bar at the bottom of our query window. And there's a lot of useful information here, like the server that we're connected to, the database we're connected to, the runtime, and the number of rows that we've gotten back. And I just really want to draw your attention to this runtime. Sometimes your query might be taking a really long time to run when you're only expecting a little bit of data back. So you might want to cancel your query in the middle. So to do that, you just go up here, and this Cancel button will be red while the query is running, and you just click on that, and it will stop whatever query you're running. Just a thing to keep an eye on. Realistically, there probably won't be very many scenarios where you just want to get all of the data from the table every time. More likely you'll have specific questions that you want to answer by filtering the results in your query, which is what we're going to cover in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[Databases]] (1)
> **Code Identifiers:** additional_service (4), minimum_participants (2)
> **UI Navigation:** click on (2), select the (1)
> **Env Vars:** sql (1), ssms (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Filtering on a single condition in SQL](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=0)** - [Instructor] To really make our select queries useful, we are going to need to add some filtering conditions to answer questions like, can you show me the purchases made in the last week? Or can you show me the orders totaling over $100? And to accomplish that, we're going to need to add a where clause to our base query. Show me the results where this data point is true or false. And there are several different ways that we can do that. So first we're going to look for an exact string match. So find the rows where the service name is catering lunch. So we're going to start with our base query as we had it in our last video but we're going to add a where condition, where and the service name cause that's the condition we're considering and then equals. And I'll use single quotes around my string. And I have to remember to type the exact name of the service I'm looking for here. So we can highlight this to just run this query and we get back just this one route, and it has to be an exact match. So these spaces had to be exactly correct too. If I did this and ran that, I wouldn't get that result back. Cause it has to be an exact match when you're using the equals condition. Put those spaces back and we're good. But then if I want to find the rows where the service name is not catering lunch. Again, we'll copy this query
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=94)** and use it as a basis for this question, you can either add an exclamation point or a bang in front of the equals and it will give you all the rows. (murmurs) is not catering lunch or you can do open and close angle brackets. They give you the same result. Those two do the same thing. So that's just a matter of preference but then if we want to consider, oh, what if it's in this list of service names? We can do that as well. And we just say, where the service name is in, copy this list. Just a comma-separated list, but I want to make sure that I don't include this or here, since we know from earlier that that syntax has a specific meaning and it won't work here. Don't forget to close parentheses or you'll be sad, run that. And we get anything that's included in that list. So I could also add an option that doesn't even exist. And I could just say where it's in, gift basket, extra large, select that and run it. It just finds what's included. If there's anything extra there it's not going to hurt anything. And then just
>
> **[3:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=189)** as we had not equals, if we want to find everything except for these values we can just say not in. Run that and it will exclude those rows. Just to note about formatting here, it's perfectly fine that I put this whole list on one line. This little symbol means that I just dropped to the next line because white space doesn't mean anything in [[Microsoft SQL Server|SQL server]]. If I decided that I wanted to put everything in one list like this, I can do that. And it's not a problem. It works the same way. I suggest that you use spacing more like this, generally speaking just because it makes it a little bit easier to read. And that's really important when you're looking at a piece of code that somebody else wrote, or frankly even something that you wrote and haven't visited in awhile. Clear code is very important. Another thing that can help your code be more clear are comments like this, and you can create comments in SQL server by just adding two dashes and say here's may filtering condition. You can write anything after these two dashes and include it when I run my query and it doesn't have any impact. It's just good to comment your code, it's a good practice. On to our next way of filtering, so our previous examples with equals and N, we required there to be
>
> **[4:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=281)** an exact string matches. We saw when I took the spaces out in that first example, the query didn't work, and there are going to be a lot of cases where you might not have all the information. So SQL server gives us, I'm just going to copy this query again, the like operator and wild cards for that case. So I'm just going to say where service name like and then same thing open with single quote, use single quotes around strings, gift basket delivery. And then I don't care what the text is after this part of the string. So I'm going to add a wild card. In this case, I'm going to use the percent sign. There are several different wild card options that you can look up on [[Microsoft]]'s website but the percent sign is the most used and is the most universal. So if I just run this, I get everything that starts with gift basket delivery. I can add those percent signs pretty much anywhere in my code. So if I, again, take this, I want to find anything where the service name contains party. And I don't know if it's at the front of the string, the back of the string. I don't where it is. I can just wrap that string in 2% signs. So run it like that. And we get everything that contains the [[Microsoft Word|word]] party. And then just like we have not equal, not in
>
> **[6:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=373)** should come as no surprise that we also have not like, so we'll get everything except the things that start with gift basket delivery. We can also do range searches in SQL server. So if we want to find the rows where the price per person is between 75 and 125, thankfully [[SQL]] is an English-based language, so we can basically almost type exactly what's there. So where a service name between 75 and 125. So that didn't work because I chose the wrong column in my query. And I passed integers in when I was trying to look at the string. So actually that's definitely something to be careful of, make sure that the data type that you're providing in your filtering condition is the same data type as what your column actually is. So I actually, I wanted price per person or per person price between 75 and 125. There you go. And you'll notice that between is inclusive. So we did get this result where the price per person is 125. Be careful using between because of that, when you're dealing with dates and times though, just a word of warning on that. We can also look for rows
>
> **[7:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=466)** where the price per person is less than $75 with this less than sign. With the angle bracket, we can run that. We'll get everything that's less than 75. And then we can look for rows where it's greater than or equal to if we want to include 125 you can do that with less than as well. Run that because we did greater than or equal to, we got the row that included price where price per person is 125. If we took that out, we wouldn't get an error. We do it, just get no results back. So there's one sort of strange data state we haven't covered yet. And that's how do we deal with null values? So you'll notice if I say where men participants is for example, let's say greater than seven. Okay, null isn't greater than seven. Okay, so let's look at it the other way, less than or equal to seven. Well, null isn't there either. So how do we get those rows back? Seems logical that we would say men participants equals null. But that doesn't work either.
>
> **[9:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=558)** And that's because null itself isn't a value. It's a data state. It's the absence of a value. So you can't evaluate it in N equals not equals. It's not zero. There's nothing you can compare it to like that. So instead, we say, where men participants is null, where the data state is null. We can run that. And again, no surprise, you can do the opposite to your work is not null, we get all of these rows back. So be careful with nulls there, they're a little tricky. So those are the major techniques that you'll use when you're filtering queries but you might be wondering, well, what if I have more than one condition to consider in one query. Well, you're in luck because SQL server provides tools to handle those cases as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (5), [[Microsoft Word|Word]] (2), [[Microsoft]] (1), [[SQL]] (1)
> **CLI Commands:** find (5), make (3)
> **Env Vars:** sql (6)
> **Warnings:** be careful (3), warning (1)
> **Analogies:** just like (1), for example (1)
> **Best Practices:** don't forget (1), good practice (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Filtering on multiple conditions in SQL](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=0)** - [Instructor] In analysis, it's often useful to consider more than one data point at a time, and [[SQL]] uses logical operators 'and' and 'or' on the 'where' clause to accomplish that. The basic rules of logical operators in other contexts, like mathematics, apply here in SQL as well. When you use 'and', both sides of the equation must evaluate to true to return those results. And with 'or', at least one of them must evaluate to true. Though it's fine if both conditions are met as well. So before I start our demo I'm going to show you one little trick that you can use if you're using SSMS. So if you go over here to the top right-hand corner, there is this little up and down arrow right here in the corner. And if I click that and drag it down, I can use that to freeze this top panel of my screen. So I can scroll down here, and that's going to be useful for me in this demo because this 'select' statement in the top is going to be relevant to all of our examples. So I want it here so I can easily copy and paste it over and over. So for our first example, we want to find all the rows for services that require no more than six participants, and cost no more than $25 for a person. So we'll start with our base query, and we'll say where the minimum number of participants is no more than six. So it's less than or equal to,
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=96)** because we want to include six. And the per person price is no more than $25. So again, less than or equal to 25 because that's included. So if we run this, we get rows back where both conditions are true, where min participants are no more than six, and the price per person is no more than $25. But it's important to note that you can actually add as many of these logical operators as you want to your query. So if we wanted to consider three conditions, we'll start with this query that we had before, and now we're going to add an additional factor to just show the catering services. So we'll look at that result set again. Should get just one result. So if we add and service name is like catering. Highlight this to run that. And I'm just using a keyboard shortcut here, that's why you're not seeing me click the execute button. I just get my one row back where all three conditions are met now. So as I said, at the top of this video, we have the 'and' operator where all of the conditions have to be met. But then we also have to see what the 'or' condition looks like, where at least one of the conditions has to be met. So again, we'll take our base query.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=192)** So we're looking for rows that are either catering services or gift baskets or a Two Trees Tasting Party. So we'll say where the service name is like catering or service name is like gift or service name equals Two Trees Tasting Party. So I'm going to run this one line at a time to demonstrate how 'or' works. So here we have just rows that are like catering. If we add or it's like gift, we're going to just add those rows to our results set because either one of those is true for each of these rows. And then we'll include one more with the Two Trees Tasting Party. So if any of those conditions is true in a row, then we get one of those rows back. And then lastly, there're going to be situations where we have to mix 'and' and 'or'. So now we're looking for services that cost less than $30, and they are either catering services or gift baskets. We do that. So we want to find the rows for services that cost less than $30 and are either for catering services or gift baskets. So we'll go ahead and add where the per person price is less than 30,
>
> **[4:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=289)** and the service name is like catering or the service name is like gift. So let's go ahead and run this line by line. So I know that I'm looking for things that are less than 30. So I filter here. And then I'm just looking for catering or gift baskets. So I'm expecting just one row to come back, this last result. When I run this, I actually get four rows back. And the reason for that has to do with the order that the query is going to resolve my conditions. So what I actually want to say here is I want rows where this condition is true, where the price is less than $30, and either one of these conditions is true, either it's catering or a gift basket. What I'm actually asking right now is for conditions where the price is less than 30 and it's catering, or give me any rows that are a gift basket. So to fix this, I'm going to use parentheses, to make it really clear to [[Microsoft SQL Server|SQL Server]] how I want to group these conditions together. So I'm going to say and the service name is like catering
>
> **[6:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=382)** or the service name is like gift. And now when I run it, I've made it really clear that this condition should be true and either one of these conditions can be true. And I run it, and I just get the one row back that I expected. So whenever you're mixing 'and' and 'or' in your where clause, I definitely recommend that you add parentheses, even if you do have it in the correct order to get it to evaluate the way you want, just because it makes it clear and clear code is always a good thing. Now you've got lots of tools in your SQL Server toolbox to start writing some really useful queries, just using select, from and where. In the next chapter, we will start to consider how we can read from multiple tables in a single query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (4), ssms (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** it's like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Filtering dates](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=0)** - [Instructor] To find all of the paid orders from 2023, I'm going to start by selecting all of the columns from the Order table that I care about for this query, the order ID, the creation date, and the status. And then I'm going to start filtering. So I know I have two pieces of information to consider, the status of the order and the creation date of the order. So I'm going to start by filtering with a WHERE condition, where the status column equals paid.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=46)** And I also need to know that the creation date, now there are two ways to do this. I'll show you both ways. We can use the between operator between 2023-12-01 and 2024-01-01. And if I test my code, we have success. And I just want to point out one thing that might trip you up. The creation date is a date and a time. So when you use this between operator, if I changed this to 2023-12-31,
>
> **[1:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=102)** because we see we do have an entry from that date, if we run this, test my code again, I'm actually missing that value because when we just provide the date to a datetime column, it assumes midnight is going to be the time we're talking about. And this happened after midnight, so that's why we use 2024-01-01, because it's considering midnight at that date. And I told you I would show you another way to do this date filter, and that is using greater than or less than. So we're still going to say CreationDate is greater than or equal to, just copy this, 2023-01,
>
> **[2:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=157)** and the CreationDate is less than 01-01-24. And we test that, and that also provides the correct output.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **SQL:** where (1)
> **Env Vars:** where (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Multiple Table Select Statements

[↑ Back to Table of Contents](#table-of-contents)

#### [Inner joins](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=0)** - [Instructor] Because of the nature of how data is stored in a relational database, we often will need to visit multiple tables to get all of the data that we need to answer our questions. In this example, we have surrogate keys standing in for the oil flavor, the flavor ID, and the product type, the product type ID in the product table. To get at the flavor name and the product type associated with an order, we have to add two tables to our query: the oil flavor table and the product type table, and that's where joins come in. Joins allow us to use common relationships, such as foreign key relationships, to look at data in more than one table in a single query. In this video, we're going to talk about inner joins. Using an inner join, we look for rows where there's a match in our data relationships. Here, we have two distinct data sets, and we want to compare them to find what data points that they both have in common. The overlap highlighted in this Venn diagram shows what results will come back when we use an inner join on this simple data set. So we're trying to build a query that will return these four columns from the product table and the oil flavor table. So to start, I'm going to write my select statement just as before, but I'm just going to pull from the product table. Select star, from DBO product, and I run that, and here are all the columns that are available
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=94)** in the product table. So now I know I need to get to the oil flavor table as well and based on the data in my result, I can probably guess that the flavor ID is going to be my most likely avenue to do that, so if I go over to the object explorer and expand the oil flavor table, look at the columns, yes, I can confirm that both of these tables do have a flavor ID column, so that's going to be my gateway to get both of these tables involved in my query. I'm going to do that using an inner join, so next to pull an oil flavor, I just write inner join, DBO oil flavor. And now I'm going to add what's known as a table alias to my query, it's just going to be an abbreviation that's going to stand in for the table name later on, it's going to make the code look a lot neater and cleaner as you'll see in just a second. So you can technically use whatever you want for your table alias, but I try to make it kind of obvious what table it's referencing, so I'll use like P for the product table, and maybe OF for oil flavor, but you can see here that the text turned blue. If you're using SSMS, that's an indicator that this is a reserved [[Microsoft Word|word]], which means that it means something specific to [[Microsoft SQL Server|SQL Server]], so I can't use it in this context, so instead I'm just going to use F. Okay, so I have my two tables listed, now okay, how do I connect those things together? And I know that I use the flavor ID,
>
> **[3:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=187)** so I'm going to say on my join condition is where the flavor ID and the product table, so p.flavor_id is the same as, equals, the flavor ID in the oil flavor table. And if I didn't use these aliases, I'd have to type out the whole table name here and it would just look messier than it needs to, so instead I just use aliases. So we'll run this query, and now we get all of the columns from the product table as well as all of the columns from the oil flavor table. But then you'll also notice that the flavor ID values match in each of these rows, just as I indicated in my join condition here on line nine. So now I'm only trying to get back these four columns. So instead of star, I'm going to list the column names just like I did previously. So we'll say product ID, flavor ID, flavor name, and price. So you'll notice that there's this red squiggly line under flavor ID and that tells me that there's going to be some kind of an issue with that, but let's run it and see what kind of error message we get. Ambiguous column name flavor ID, so the reason I'm getting this error is because there's two columns with the same name in different tables in my query, so I need to specify which value I'm referring to. We know that it doesn't matter which table we pull from
>
> **[4:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=283)** because based on our join condition, these values have to be the same from both tables, but SQL Server doesn't know that when you're building the query, so you have to give it some more instructions. So we just would add the oil flavor table, it doesn't really matter, and then it's good practice just to add table aliases for all of these, even though technically you could get away with not doing that. Then we run this, and we get just that data that we're looking for. So when you're first starting out with the database system, it can be really tricky to know how to connect tables in your joins, and what keys are shared between which tables, and that's where ERDs can come in really handy, but if that's not available, you can also check your object explorer for foreign keys on a table. So if we look at the product table, and look at this keys sub-folder here and expand that, we can see what foreign keys are on this table and that's indicated by these white keys. And those can be good pointers for candidates that you can use in your join conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** dbo (2), sql (2), ssms (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (1), just like (1)
> **Code Identifiers:** flavor_id (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Multiple inner joins](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=0)** - [Instructor] Looking back at our ERD from the last video, we've already established the connection between the product table and the oil flavor table via the flavor ID. But now, let's take a look at how to incorporate the product type table. We can see here that we have a foreign key relationship between the product table and the product type table through the product type ID. So we'll keep that in mind as we're adding to our query. So we're going to pick up with the same query that we left off with in our last video, but we're going to add the product type table to get the additional information available there. So we're going to do the same thing as we did with the oil flavor table. So we're going to do an inner join to dbo product type and I'm going to go ahead and use the table alias again. And theoretically, I could either join to this new table from either the product table or the oil flavor table. So anything that has been brought into the query previously is fair game for our join condition. But we know from our ERT that we need to use the product type ID which is in both the product table and the product type table. So once again, we're going to say on p dot product type ID equals pt dot product type ID.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=87)** And it doesn't matter which table I referenced first. I could've done pt and then p. It doesn't matter. It's the transit property so it's the same either way. So then, I can see that I actually got information from this table back in my query. I'm going to show you a little trick. I'm going to add pt dot star. So that means add all of the columns from the product type table to my query results. So I'm going to go ahead and run that. And now you can see, we have everything that we had before along with the columns from the product type table. So now we have the result set that we were hoping for, but I'm just going to show you one more thing about when you're using joins and that's just that you can still do filtering on these queries using the where cause just like we did before. So if I only wanted to see the results come back that were for product type case, I would just go back to my query and add where pt dot product type. Again, I'm using the table alias when I reference this column, equals case. Go ahead and run that. And I just get those rows that I wanted back, as well as the columns that I had listed. So that wraps up inner joins. I would recommend that you really spend some time with this one before you move on because it's a critical concept
>
> **[3:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=181)** when you're living in a relational database world.

> [!info]- Semantic Content
>
> **Env Vars:** erd (1), ert (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Inner joins](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=0)** - [Instructor] In this solution, I need to get access to data from a couple different tables. So I'm going to start by writing my join conditions. We'll add a table alias for Orders, and then INNER JOIN to the Customer table AS c.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=26)** And then our join condition here is going to be the CustomerId, since those are shared in both tables. And then we're going to add the Salesperson table as well AS s on the SalespersonID from the Orders table and the Salesperson table. Now I can add my filtering. I know I only want orders where the Status = past due and the Salesperson, so s, LastName = Hall. So now that I have the correct data set, I'm going to specify which columns I want. So I need the OrderId. And then to get the customer name, I'm going to use the CONCAT function to combine the FirstName, make sure I include a space so those values don't get squished together, the LastName, and then give that column alias of CustomerName. I also need the customer's Email, the TotalDue from the Orders table,
>
> **[2:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=126)** and the FirstName for that salesperson. I'll test my code, and there's my correct output.

> [!info]- Semantic Content
>
> **Env Vars:** inner (1), join (1), concat (1)
> **CLI Commands:** make (1)
> **SQL:** inner join (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Outer joins](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=0)** - [Instructor] Now we're going to move on to a different type of join that you'll use pretty frequently called an outer join. There are a few different types of outer joins but the one I think you will run into most frequently is the left outer join. So that's the one I'm going to demo for you in this video. Like the inner join, the outer join allows us to retrieve information from a second table based on a related key value. But it always does so without filtering the results from the first table in your join order. We're going to refer to that first table as the anchoring table. In an outer join as you see in the highlighted area on this diagram, you'll get to keep all of the data in your anchoring table, along with anything that matches in the secondary table added to the query through an outer join. So here we want to get the full name and the order total for every customer named Sydney in our database. So, we know how to write the first part of that query. Select star from the customer table. And we only want rows where the first name equals Sydney.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=79)** And we only need to return the full name. So if we run this, we see, okay, we have three customers in our database whose first name is Sydney. So then, if we want to get their order total information, we're going to have to use a join. So let's start with an inner join. I'm going to add my table aliases here before I start. Then we're going to write an inner join to the product order table, 'cause that holds all of my order information. Again, table alias. Go over and see what columns are available. And I know that these both have a customer ID, and I see that there's a foreign key here so I'm going to use that as my join condition. So on C dot customer ID equals the customer ID from product order. We can add in the order total. So if I run this, I'm expecting three rows because I know I have three customers that I need to keep in my query. When I run this, I end up with five rows, and they're all for the same person. And that's because Sydney Bartlett is the only one who actually placed orders. So I need to get order information for the other two customers as well,
>
> **[2:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=172)** and they won't have any order information. So I need to get rid of the filtering aspect of my join. So now I'm going to switch it from an inner join to a left outer join. And when I run this, I still get those five rows for Sydney Bartlett for her five different orders. But now I also get rows for Sydney Robinson and Sydney Dejesus with no results for their order totals. So again, it doesn't filter the results based on my join condition. So again, null is just the absence of data. It's not that there are rows in the product order table where order total is null itself, it's just that there's no results in the product order table for Sydney Robertson and Sydney Dejesus. So we say the result is null because there's no data available for that. A lot of times you can actually use this null result in a left outer join to your advantage. So if you wanted to know, show me the names of all the customers who haven't placed orders yet, you could use this null. So you would say, show me where order total. Whoop, need my column alias. Order total is null. And here I took out the filtering for Sydney. So this shows me all of the customers in our database that haven't placed orders yet. And that's a pretty common case
>
> **[4:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=267)** if you want to find where there aren't matches. It's also important to remember that join orders matter when you're adding tables to your query through an outer join. With an inner join, the join order doesn't matter since we are looking for rows where the key value in our join condition is the same in both tables. With an outer join though, you only get to keep all of the rows from your anchoring table which has to come first in your query. As you can see in this diagram, I would get different results depending on whether table A or table B came first in my join order. And this is definitely something you want to keep in mind as you're writing your code.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Working with multiple tables](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=5)** - [Instructor] So in this solution we always want to return the customer information regardless of whether or not they have an order associated with that customer. So we're going to use a left join here when we get to the orders table. So we start with customer as C with that table alias, then we'll use a left outer join to get to orders as O. And our join condition is where the customer ID is the same in both tables. And if I were writing a regular [[Microsoft SQL Server|SQL server]] query, I would not need this outer keyword. But because we're following ANSI standard with CoderPad, we do need to include that here. But just know in SQL server that is optional. All right, so now we've got our two tables here. We're going to start filtering, so where the customer's state equals DE.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=73)** And then we know we either want to return orders where they're not marked paid or where the customer doesn't have any orders. So to accomplish that, we're going to say and, the order's status is not paid
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=96)** or, the order ID is null. And it's not that the data point itself is null, it's that the result with this left join means no match, but we're not filtering out the customer. So there's our filtering analysis, return to proper columns. We've got the customer first name, the customer last name, the customer phone, and the order status. Give that a test. And there we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (2), ansi (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Subqueries](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=0)** - [Instructor] As we've discussed, one of the functions of inner joins is that they can be used to filter results sets, but there is another method that we can use to achieve this called a subquery. So we're going to use a subquery to get us the results we need to get all of the names for customers who live in Boston. So first let's start by running a query that will get us all of the customer names. And we know from our previous examples that that's going to be from the customer table. So we're going to select star from dbo.customer, and we're going to go ahead and give this a table alias. So let's run that and look at our data once again. We don't have the city name in this table so we can't filter on that condition right now. But if we can get access to information from the city_state_zip table, we can apply those filters. So what we're going to do is we're going to select star from dbo.city_state_zip. Let's see what that data set looks like, and figure out what city state zip IDs we need for the city of Boston. So we'll say actually, where city name equals Boston. We run this, and we see that we're looking for city state zip ID nine and 10. So we're going to go ahead and hard-code those IDs
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=96)** into our filtering condition. So we'll say where city state zip ID, and since we have more than one ID that we're looking for here, we're going to use 'in' nine or 10. And if we run that, these are the customers that have that city state zip ID. And as we're just looking for a name, so we'll go ahead and just choose that one column. And there we go. But if you didn't want to run this second query to look up the IDs manually, you would instead use a subquery. And basically, what we're going to do is we're going to replace this in list with these hard-coded IDs with a query instead. So basically, we're just going to take this query we used here, place it in-between our parentheses. Make the code look a little prettier. But we're only going to look for the city state zip ID. So remember, we had nine and 10 here earlier for when we looked it up. And if I run this query by itself, I'm going to get those numbers, nine and 10. So this is a way to write a single query that will do the exact same thing. And one thing that you should know about subqueries is that we can't reference any tables
>
> **[3:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=190)** from the subquery in our main select statement. So if I try to add the city name here, I get this red squiggly line which tells me that there's an error in my code. So if I try to run this we'll see invalid column name 'city_name' because the select list doesn't know anything about the table included in our subquery because it's strictly for filtering. We don't have access to that data. But if we wanted to be able to include that column, we would just write it as an inner join instead. So we'll select star from customer c, inner join dbo.city_state_zip, and we'll alias that as z. Hide my results set using Ctrl+R. And we'll say on city_state_zip_id equals the city_state_zip_id from the city_state_zip table, and we're going to apply the same filter condition where the city_name equals Boston. And go grab these, give them aliases. And then we have access to both columns. So now you might be wondering, if an inner join can filter my results
>
> **[4:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=283)** and a subquery can filter my results and give me the same answer, how do I know which one to use when? Well, the short answer is that sometimes [[Microsoft SQL Server|SQL Server]] can resolve a complicated query or a query that involves really big tables more quickly if you do your filtering with a subquery. So I would recommend using those when you can. Sometimes though you need to retrieve data from the table you're using to filter. And in that case, you would always have to use a join.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1)
> **Code Identifiers:** city_state_zip (4), city_name (2), city_state_zip_id (2)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Additional SQL Query Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Case statements](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=0)** - [Instructor] If this course were an album, I would call this last section, the bonus tracks. You could do a lot with just what we've gone over already but I want to give you a couple more tools to help you with [[Data Manipulation]]. There are times when you might want to present the data a little differently than it's available to you in your table, or you might want to show different texts depending on the data state. And that's where case statements can come in really handy. So on the screen here, we have a few things that we haven't covered yet. So first we've got this scalar variable, which we declare and then name with the @ symbol at the front. And then we told [[Microsoft SQL Server|SQL server]], what kind of data we're going to hold in this variable. And then this case we're using an int. And then we can assign a value to this variable using equals and we'll say five. So now, whenever we see at number in our code set, it will replace it with whatever value we've assigned here. So five. So next down here, we have an example of a case statement. And we wrote a select, actually doesn't have a from clause. So this is allowed. If you can manage to manipulate the data without pulling from any tables. There aren't a ton of use cases for it, but it is something that you can do. And then I've got this column alias here, divisible. And then our case statement, which is just a conditional statement for what's going to be returned in this column.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=94)** So let's walk through it. First, we declare that this is a case. So now we say, when @number and this percent sign here is called modulo two equal zero. That means when our number is divided by two, the remainder is going to be zero. So it's an even number. So if that case is true, then we return this text. When the number divided by three has no remainder, then we return this text. And if neither of those is true, we have a fall back with our else condition. This isn't required in a case statement but it's definitely good practice because if you don't have this and none of the conditions are met, you're just going to get a null. And then we wrap up our case statement with just end. So if we can go ahead and run this query with our variable @number set to five, we get, does not meet criteria because five is not evenly divisible by either two or three. So if we change this to four, we'll get divisible by two. We set it to nine. We'll get divisible by three. And if we use six, which we'll meet both of our conditions, divisible by two and three we're going to get the first case that evaluates to true. So the order of your case statement does matter. You want to have your most preferable outcome
>
> **[3:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=190)** to be the first one that's in your case statement if there's going to be potential for overlap. So now let's move over to show a case statement that actually does pull from a table. Now that we've kind of got a handle on this. So here, we're going to break down customers into different spending tiers. And we're just looking at orders placed after August first 2020 by customers in California. And I've gone ahead and already started our query for us. So we're looking at the customer table, joining to the product order table, as we've done many times before. I've left it as just a join for now because I haven't decided yet if I want to do an inner join or an outer join. If I just left this at joined SQL server, would assume I mean inner join it. We treat it like that. So when I run this in a second, that's what's going to be happening. And then here I use a subquery to look just for customers that live in California using the joined relationship of the city, state, zip ID in the customer table, as well as the city, state, zip table. So if I go ahead and run this. We just have the names and the order totals for all of our California customers. So let's add to this query. So, first let's make a decision about our join condition. So I know that if a customer
>
> **[4:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=284)** doesn't have a purchase after August, I still want them to show up in this list if they're from California. So, because I don't want to have that filtering for just customers with orders, I'm going to use a left join. And now let's add our filtering for the orders placed after August first. So we're going to add order date to our results just so we can see it here. And then add and, po order date is after 8/1/2020. So with dates, when we're doing comparisons like that, if we want something after a certain date, we're going to do greater than. We'll say 8/1/2020. If we wanted something before that, we could do less than or equal to our greater than or equal to if you want to include that date. So if we run this query now, we only have data for customers who place orders after that date. But we want to also include the customers if they didn't place any orders after that date, which is why we used our left join. But the reason that this is happening is because we put our condition in the where clause. So we're actually limiting our results more than we wanted to. So instead, we're going to move this as a secondary join condition. And then when we run that, we see that we keep all of the California customers. And if they didn't have an order after August first then they would just have a null value
>
> **[6:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=380)** for their results for the order total or order date. So now that we have all of our filtering set up, we can go ahead and add our key statement for spending tiers. So we don't need order to here. We're going to add a spending tier column. So spending tier equals and we have four different cases. So we start with case when order total is less than 20.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=411)** Then we show that it's a low tier when, oops. I got my alias wrong. PO order total. PO order total is between 20 and 100, then it's in the second tier. When it is greater than 100, then it's in the high tier. And our fallback or else condition. If none of those are met, we'll display no recent orders. And we can go ahead and end this. So now we can run our query. Do a little data check, make sure that if there's no order total information, we reached our else. Spot check a few of these, these medium tiers look correct. No one in the high tiers or the low tiers here. And then we can take out the order total since that's not part of their requirement. We've got all these names and now, we're going to add another clause here to make our data a little easier to look at and that's going to be to order the results. So let's order by a new clause here. Let's order by the full name. And by default, this is going to be an ascending order. But if I wanted to make it descending,
>
> **[8:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=505)** I would just add dsc for descending. And now we have all of the names in order. So you'll notice here that these last two values are exactly the same. We have duplicate records. Because this customer must have placed more than one order in the timeframe that we're looking at. So to get rid of these duplicates, one thing that you can do that's really simple is to add distinct after select and we run it again. And we get rid of our duplicate values. It will only return unique rows here. Case statements can be very useful as you begin to add your own analysis or apply data rules to your queries. So they are definitely another great tool to add to your toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Data Manipulation]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Case statement](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=0)** - [Instructor] In this solution, I only need to retrieve data that's in the orders table, so I can go ahead and start filtering right away. So we'll say orders as O, and we know we want where the status equals paid,
>
> **[0:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=27)** and now we can start writing our subquery, where o.Salesperson.Id is in, we'll write our subquery.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=42)** Select salesperson ID from salesperson as S.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=57)** Just for clarity, we'll add that alias to the column there, too, where s.FirstName equals Jane
>
> **[1:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=71)** and s.LastName equals Porter.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=82)** There, our filtering is done, so we'll work on our column list and our case statement, so we need the order ID, the total due.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=98)** Now, for our case statement, we're going to say case when total due is less than 100,
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=111)** then we'll return one. When total due is between 100 and 150,
>
> **[2:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=125)** then we'll return two, and otherwise, so just we'll use else, return three, end our case statement, and give a column alias as order tier, and we're all set. Give it a test, and we're all set!

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Built-in functions](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=0)** - [Instructor] While [[Microsoft SQL Server|SQL server]] gives you some standard tools for building queries that we've gone over already like select, from, where, joins it also provides some other handy tools for manipulating data, and those are called built-in functions. Built-in functions can be used right alongside the [[Representational State Transfer (REST)|rest]] of your code and requires zero or more inputs. This varies depending on which function you're using, and then it returns a single value. And we're going to go over a handful that you're likely to use on a pretty regular basis in this video. First, we're going to deal with some functions used for formatting for our data presentation. And we'll start with cast and convert, which are used to change the data type for a column for the duration of the query where specified. So that means we aren't actually changing the data type on the actual table definition or changing the data itself, we are just changing the way it's treated wherever we use cast or convert. So in this example, we're going to use cast to present the price, which has a data type of decimal five two. If we go over to the table definition here, we can confirm that price is decimal five two, but we're going to present it as an int. So first I'm going to remove the two dashes here to un comment the code and make it part of our query again. And also remove this extra comma I have here at the end of the line so I don't get a syntax error.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=94)** Then I going to go ahead and run that. And here is the price as it is in the table. And here it is displayed as an integer. And now we'll use convert to transform the price to a decimal six three, so we'll have three places after the decimal point. Let me run that. And now we have three places. We just added that zero. You can use either of these to transform your data into any compatible data type. But cast is the ANSI standard and convert is [[SQL]] specific and includes optional style numbers. And while either of them works and sometimes the style numbers can be useful, I would lean toward cast because it's considered more of the gold standard for coding. So next, I'm going to show you a couple of options for stringing multiple values together. So first we can put things together using a plus sign like you see here on line 31. And once again I'm just going to un comment this code like before but there are a couple of pitfalls that we can run into. So I'm using this price prefixed variable to add the dollar sign at the front of price and when I run it, I get this error. Error converting data type, varchar to numeric. And that's because I'm mixing incompatible data types with the decimal on a string.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=187)** It doesn't know how to put those two together. So to make that work, I have to cast my price as a string.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=200)** So as a var char, say varchar 10. Run this, now we're adding var char to var char and it goes ahead and adds the plus sign to the front of it. The other issue comes if I don't assign a value then it's just assumes that that is a null value. So if I run this, I get a result of null and that's because of the weird data state of null. Anything plus null is going to end up being null. So that's definitely something you want to keep in mind if you're doing string manipulation like this. So to make things much cleaner, we have this concat function. And I'll just un comment this line again as you'll continue to see throughout this video and I'm going to leave my variable null and we'll see that it handles the null case for us and doesn't result in a null, but if I give this a value with the dollar sign and run this.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=269)** It also handles the mixed data types here. So concat does definitely have some advantages to just using the plus sign here. And next up we have the format function. And there are several useful options for this function but most notably it can be used for formatting dates and currencies. So you can either use a format code like C for currency or D for date, with a language culture code. As you see in this example, go ahead and run this.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=305)** And if we changed it to en gb for great Britain, we see that it uses the pound symbol instead of the dollar symbol. But also with the format function we have the option of making a custom format here. So if we wanted to have the abbreviated month name the day comma, the full year we would list it out like this. Go ahead and run it. And here's the order date from the actual table. And here it is formatted out as I requested. Just one thing to be aware of if you're doing date formatting like this capital M is for month and lowercase m is for minute. So you definitely don't want to change this to M M cause that doesn't make any sense. That data is not correct. So just make sure you're aware of that. And moving on. Now, we finally have an example of a built-in function with zero inputs with GETDATE and SYSDATETIME. So I'm just going to select these. Since they don't have any inputs, I don't need to get any tables involved if I don't want to. Go ahead and run these. And I get a timestamp for this very moment. It's October 28th when I'm recording this. And you're definitely likely to find lots of uses for this particular function.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=399)** If you need to know something in relation to what's happening now when the difference between GETDATE and SYSDATETIME is just a matter of precision. As you can see in the output here. So GETDATE returns, a daytime value and SYSDATETIME returns a daytime too. So just keep that in mind if you're ever comparing a column's value to one of these function outputs. You want that the data types to match so that you avoid what's known as an implicit conversion by SQL server where it has to make the two data types match before it can do the comparison and add a little bit of overhead. Now I'm going to use the SYSDATETIME function along with the date add function. So if I say select date add, and I'll say I want to look at a month ago, you use a negative number. It'll show you time in the past. So a month ago from SYSDATETIME. I run that, it tells me it was September 28th. But if I want to look at a month from now, I just make that a positive number and that'll be November 28th. And this might be useful if I'm trying to limit my results to just the orders from the last month as you see in this example. So if I run this, if the order date is greater than a month ago which is September 28th, 2020. Oh my goodness, my output looks crazy. If this ever happens and your result sets come back
>
> **[8:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=493)** as text, instead of as a grid, it just means that you toggled something incorrectly, which I do all the time. So if I do control D here and try running it again, now it comes back to the right data set. And we see that we just have Lucas Trevino that placed his order on September 29th. And now lastly, I'm going to demo is null and coalesce which help us deal with null values. So is null only takes in two options. And the first one is your first choice but then if that's null it will fall back to the second option provided. So here, if men participants is null then I'm going to display zero. As you can see here, it fell back to the zero for these last three rows right here. Then if I use coalesce, which is the ANSI standard you can provide multiple options. As you can see here, though you can still end up with a null value for either of those. If your fall back ends up being a null value but because this one has more flexibility and because it's the ANSI standard, I definitely prefer this one. So if I leave the override variable null here and run this we're going to get zero again for these columns. But if I change this to 500, that's a lot of participants. Then we get that because it took,
>
> **[9:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=589)** because it took this second option here. But coalescent is not, are both cases where you still need to pay attention to make sure your data types match. So if I run this here, I've got an integer for override men participants are already in integer column. As we can go over here to the object explorer and check. Men participants is an int but here I'm trying to pass a string as its third option. So if I run it with the 500 value it's fine because it doesn't get to this string value to cause us any trouble. But if I set this to null, again an error. Conversion failed when converting varchar value NA to data type int. Because it expects all of the options that it comes across to be of the same data type. So that's another thing to be careful about. I would have to cast both men participants and override as var chars here, if I wanted NA to work. And now these are only a few examples of the built-in functions available for SQL server. You can find more information on these, which are noted as scalar functions here from the [[Microsoft]] documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[SQL]] (1), [[Microsoft]] (1)
> **Env Vars:** sysdatetime (5), sql (4), ansi (3), getdate (3)
> **CLI Commands:** make (8), find (2)
> **Definitions:** is a  (1), known as (1), means that (1), is an  (1)
> **Warnings:** be aware (1), be careful (1)
> **Speakers:** - [instructor] (1)

#### [Aggregates](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=0)** - [Instructor] Doing calculations across multiple rows to find a sum or an average can be a common operation in data analysis and [[Microsoft SQL Server|SQL Server]] provides aggregate functions to do these computations. To do this, we simply have to write a query that indicates how we want to collapse in group rows to do our analysis. For example, in this small sample set, if we want to count the number of rows per item, we could group our query by the item column. We collapse the groups based on unique values in the designated column. So, let's see a few of these aggregate queries in action. So first, if we want to count all of the rows in a table, we would add count star to this query and it would count the number of rows. We didn't provide a grouping condition, so we are basically asking SQL Server to collapse all of the rows in the table to get a count. But if we wanted to count the number of orders per customer, we would group by a column that could uniquely identify an individual customer. So we could use customer ID, which is the primary key, but that's not as useful to look at as the full name. So, we'll return that in our results set, and then we need to add it to something new, the group by clause. That tells us this is the condition we're going to use to collapse the rows, and it's the value, in this case,
>
> **[1:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=95)** that we want to actually count. And the rule is that if you're using an aggregate function, you can't add any other columns in your select that are not referenced in your group by clause. You'll get an error if you try to do that. And here, if we run this query, we see the number of orders placed per customer name. And similarly, we can find the total amount spent per customer using the sum function. So we use star when we call the count function because it's counting the entire row, so we don't need to specify a column, but the other aggregates don't work like that. So when we use sum, we have to designate which column we want to add up, based on the condition in the group by clause. So if we add sum the order total, but group by the full name, we'll get the total that each individual spent, based on the data in our table. Of course, you can also group by multiple columns or values. For example, if I want to find the highest order total per customer per year, first I can extract the year from the order date, and we'll give it a column alias, YR, get the order date, and we can use another built-in function, year,
>
> **[3:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=190)** and we'll just run this part. And this is not an aggregate function, this is a built-in function, like we saw in our last video, and it'll extract just the year from the order date. And then if we want to find the highest order total per person per year, we can use the max aggregate function, so the max order total. And since we added another condition to our select statement, we have to include that in our group by clause, 'cause we're grouping on these two conditions. So when we run this, we get the highest value in order total per year per customer. And likewise, we could look for the lowest order total using the min function, which works in the same way. And again, these are just a few examples of what SQL Server has to offer for aggregate functions. And you can find more options here, in the [[Microsoft]] documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Microsoft]] (1)
> **CLI Commands:** find (5)
> **Env Vars:** sql (3)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Aggregates](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=0)** - [Instructor] In this solution, we need to consider the order item data as well as the product data together. So I'm going to start by writing up that join. So order item as OI, inner join, because I only want cases where those values match, as P, on OI. Product ID, equals P, dot product ID.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=40)** And no filtering, the join is going to do all the filtering work that we would need here. So I can go ahead and start writing my aggregate query. So I know that I am counting based on the number of rows returned per variety. So I know I need to return the product variety and then a count star, as number of orders. And to get this aggregate to work, I need to add a group by clause, so it knows how to collapse that data. Make sure I add the column in it, table alias. Give it a test. And there we have it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Query processing order](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=0)** - [Instructor] In the previous video, we went over the basics of how aggregate functions work, but now we need to spend a little more time on the rules for manipulating this data into a more useful structure. And here, we will consider how to order and filter results that include data from an aggregate computation. So first, let's talk about the ORDER BY clause. We've touched on it briefly before, but we need to explore it a bit further. So we have a few different options when we want to order this set. We can order by the full_name, an actual column in our table, and the set is returned alphabetized, and I could do that. As we said before, by default, it's ascending, but if I wanted to do it in reverse order, I could designate descending, and then it would be Z to A. I can also order by the aggregate function itself, so I can order by count star. Again, ascending or descending. I could order by multiple columns, the count, and then by the full name, if I wanted to do that, and then the last option is that I could actually order by this column alias instead of the aggregate, or instead of if I gave this an alias of customer_name, I could order it by any column alias. And this is something that's unique to the ORDER BY clause in [[Microsoft SQL Server|SQL Server]]. And the reason that we can refer to a column alias
>
> **[1:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=95)** in the ORDER BY clause but not in other places in our query is because of the order in which the server resolves the query that we've provided. So first, it looks at the FROM statement which includes any JOINs, which makes sense because before you can get any data, you need to know where it's coming from. Then the server filters the data by considering the WHERE clause. Then it collapses the results using any GROUP BY conditions. Then we actually build out the query results for the columns listed in the SELECT statement, applying any requested aliases. And this is why we can reference the column alias in the ORDER BY clause, which is resolved next. And lastly, the server applies the top condition to limit the results as requested in the query. And then there's one more piece of the puzzle that we have to consider when we want to filter our dataset based on the results of an aggregate function. But there's one more piece of the puzzle we have to consider when we want to filter our data based on the results of an aggregate function. And I'm using a slightly different query here to demonstrate this using the sum function instead of count. And if we want to filter the results on this aggregate function, sum, in this case, it would seem logical that we'd want to add it to the WHERE clause. So let's do that: where sum. So I want to see anybody that's spent over $500 total.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=191)** And if I run this... so we get this error that an aggregate may not appear in the WHERE clause, and that's because of how the query is resolved. As you may recall, the filtering from the WHERE clause happens before GROUP BY has been aggregated, so it doesn't know what that code means at that moment. Instead, we have another clause that exists specifically for this use case, which is the HAVING clause. And it goes right here, having sum greater than 500.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=236)** It's written in basically the same way as the WHERE cause, but because it resolves after the GROUP BY, we can use it to filter it with the aggregate here. I realize that looking into the order that queries are resolved might seem a little too technical, and it's definitely not something you need to worry about memorizing or that you even think about most of the time, but it can be really useful when you're debugging queries in certain cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** where (5), order (4), group (3), sql (1), select (1)
> **SQL:** where (5), order by (4), group by (3), select (1), having (1)
> **Code Identifiers:** full_name (1), customer_name (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=0)** - [Instructor] That wraps things up for this course, but if you're looking for more information about all of the features included in [[Microsoft SQL Server|SQL Server]], you can always check out the documentation available on [[Microsoft]]'s website. If you're searching for help from other [[SQL]] developers, I also recommend checking out Stack Overflow, which is a forum for discussing coding problems and solutions. Or there's also a hashtag on Twitter, #sqlhelp, if you're stuck and want to ask a specific question. If you liked this format and wish to expand your knowledge of SQL Server through a more in-depth course, through [[LinkedIn]] Learning, I would suggest you check out the [[Microsoft SQL Server]] Essential Training course for the latest version of SQL Server. Thank you so much for joining me and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Microsoft]] (1), [[SQL]] (1), [[LinkedIn]] (1), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (5)
> **Documentation:** the documentation (1), stack overflow (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Julianne Thouin]]

## Resources

- Exercise files available

## Skills Covered

- SQL
- Microsoft SQL Server

## Path Context

### In [[Advance Your Database Administration Skills]]
← [[Database Foundations- Application Development]] | **6 of 11** | [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] →

## Appears In

- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]] — SQL, Microsoft SQL Server
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)