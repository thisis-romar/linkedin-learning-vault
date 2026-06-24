---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-mysql-development-22651630
url: "https://www.linkedin.com/learning/learning-mysql-development-22651630"
duration_minutes: 116
duration: 1h 56m
level: Beginner
updated: 7/20/2023
learners: 20486
skills:
  - MySQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF582njh5BViQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689721235922?e=2147483647&amp;v=beta&amp;t=aLA0uJrYNVtKXhQ46ZmOPj1opEQpwMeC0qChidCGUes"
linkedin_topic: Database Management
learning_paths:
  - '[Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)'
prev_courses:
  - '[Learning SQL Programming](../Software%20Development/Learning%20SQL%20Programming.md)'
next_courses:
  - '[Finding New Career Paths with SQL](Finding%20New%20Career%20Paths%20with%20SQL.md)'
path_nav: '[{"path":"Explore a Career in Database Development","position":4,"total":5,"prev":"Learning SQL Programming","next":"Finding New Career Paths with SQL"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/mysql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Learning%20MySQL%20Development.md)

![Learning MySQL Development](https://media.licdn.com/dms/image/v2/D560DAQF582njh5BViQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689721235922?e=2147483647&amp;v=beta&amp;t=aLA0uJrYNVtKXhQ46ZmOPj1opEQpwMeC0qChidCGUes)

# Learning MySQL Development

> Are you brand new to database development? After more than 25 years, MySQL is still the most popular and approachable database management system—ideal for developers who want to start programming data-driven applications. This course provides an overview of MySQL tools and techniques for software development. Discover what a database is and how it's structured and explore the data types underlying

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630) | 1h 56m | Beginner | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn to use MySQL](#learn-to-use-mysql)
  - [How to get started with MySQL](#how-to-get-started-with-mysql)
- [**1. Database Basics**](#1-database-basics) (5 videos)
  - [What is a database?](#what-is-a-database)
  - [SQL, a declarative language](#sql-a-declarative-language)
  - [Databases vs. flat files and spreadsheets](#databases-vs-flat-files-and-spreadsheets)
  - [Common database terms](#common-database-terms)
  - [Database best practices](#database-best-practices)
- [**2. Exploring MySQL**](#2-exploring-mysql) (6 videos)
  - [Advantages and disadvantages of MySQL](#advantages-and-disadvantages-of-mysql)
  - [Exploring MySQL Workbench](#exploring-mysql-workbench)
  - [MySQL data types: Part 1](#mysql-data-types-part-1)
  - [MySQL data types: Part 2](#mysql-data-types-part-2)
  - [Challenge: Explore the built-in databases](#challenge-explore-the-built-in-databases)
  - [Solution: Explore the built-in databases](#solution-explore-the-built-in-databases)
- [**3. Creating Tables**](#3-creating-tables) (8 videos)
  - [Create a database](#create-a-database)
  - [Create a table](#create-a-table)
  - [Use CREATE and ALTER to define a table](#use-create-and-alter-to-define-a-table)
  - [Primary keys and foreign keys](#primary-keys-and-foreign-keys)
  - [Display database relationships with reverse engineering](#display-database-relationships-with-reverse-engineering)
  - [Load bulk data](#load-bulk-data)
  - [Challenge: Create a normalized movies table](#challenge-create-a-normalized-movies-table)
  - [Solution: Create a normalized movies table](#solution-create-a-normalized-movies-table)
- [**4. Selecting Data**](#4-selecting-data) (6 videos)
  - [The basics of SELECT](#the-basics-of-select)
  - [Refine SELECT queries](#refine-select-queries)
  - [Filter results with WHERE](#filter-results-with-where)
  - [Display data with CASE](#display-data-with-case)
  - [Challenge: Filter movies by score](#challenge-filter-movies-by-score)
  - [Solution: Filter movies by score](#solution-filter-movies-by-score)
- [**5. Updating and Deleting Data**](#5-updating-and-deleting-data) (5 videos)
  - [Add data to tables with INSERT](#add-data-to-tables-with-insert)
  - [Update existing rows with UPDATE](#update-existing-rows-with-update)
  - [Remove data with DELETE](#remove-data-with-delete)
  - [Challenge: Clean up the movies](#challenge-clean-up-the-movies)
  - [Solution: Clean up the movies](#solution-clean-up-the-movies)
- [**6. Joining Tables**](#6-joining-tables) (5 videos)
  - [The basics of JOIN](#the-basics-of-join)
  - [Match fields with INNER JOIN](#match-fields-with-inner-join)
  - [Match all fields with outer joins](#match-all-fields-with-outer-joins)
  - [Challenge: Find the best film](#challenge-find-the-best-film)
  - [Solution: Find the best film](#solution-find-the-best-film)
- [**Conclusion**](#conclusion) (1 videos)
  - [Level up your MySQL knowledge](#level-up-your-mysql-knowledge)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn to use MySQL](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=0)** - [Brad] [Databases](../../Skills/Software%20Development/Databases.md) are a part of our world. Almost every digital service you use is based upon them. One of the most popular [Database Management](../../Topics/Database%20Management.md) systems available is my [MySQL](../../Skills/Software%20Development/MySQL.md). It's open source and freely available, and has been adopted by companies large and small around the world. But it's not simple, and if you're just starting out, even the help documents can look overwhelming. I'm Brad Wheeler. In this course, I'll start by covering the basics of databases, and database management systems in general, and then you'll learn how to interact with it, first by viewing data, and then by creating, updating, and deleting it. Finally, I'll get you started with joining tables, allowing you to create advanced queries and start using MySQL in real-life applications. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Database Management](../../Topics/Database%20Management.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **CLI Commands:** mysql (2)
> **Speakers:** - [brad] (1)

#### [How to get started with MySQL](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=0)** - [Narrator] In this course, I'll be using the [MySQL](../../Skills/Software%20Development/MySQL.md) Community Edition which includes both the MySQL Server and the MySQL Workbench which is the official graphical interface for MySQL and the one I'll be using throughout this course to create and interact with my [Databases](../../Skills/Software%20Development/Databases.md). By following the download link on the MySQL community site you can download an installer for the operating system of your choice. Just click on Community Server. I'll download the [Windows](../../Glossary/Service/Windows.md) Installer MSI and bypass the Oracle login. And when that's downloaded, I'll run the installer. The installation process is mostly straightforward where you can generally just click Next but there are some items to note. Select the Custom Install Option on the setup type page, and click Next. And then on the select [products](../../Skills/Software%20Development/Microsoft%20Products.md) page you got to make sure to select the newest versions of the following products. We need the MySQL Server version eight. We need the MySQL Workbench under applications. Select the latest version of that. And then finally, under documentation and then samples and examples, we need to install the latest version of that. It contains a sample database that I'll use throughout this course. Everything else is optional. I'm going to click Next, Next again
>
> **[1:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=96)** and then execute the download and install. Once the installation process is done you'll need to configure MySQL Server. The only thing that you really need to pay attention to on these screens is the MySQL route password. I recommend making this a strong password even for a local install. It's just best practices. And everything else you can generally just click Next through. On the MySQL Workbench setup page, enter your password and check it, and that will automatically set up the connection in the workbench. When that's all done, you can just click Finish. And Finish again. I'll be using the Windows version of MySQL so the precise appearance of the tools might appear different if you use a different operating system but MySQL works the same regardless of where it's installed. So all of my examples should work equally well for every OS. As a quick side note the official pronunciation of MySQL is MySQL, although MySQL is commonly used as well. If you would like more step-by-step instructions for installing and configuring MySQL in detail I recommend searching for the MySQL Installation and Configuration Course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (17), [Windows](../../Glossary/Service/Windows.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** mysql (17), make (1)
> **Prerequisites:** install (4), setup (2), you'll need (1), configure (1)
> **UI Navigation:** select the (3), click on (1)
> **Env Vars:** msi (1)
> **Exercise Files:** download the (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)


### 1. Database Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a database?](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=0)** - [Instructor] At the most basic level, a database is a set of order related data that is accessed by a computer system. Technically, the term database only applies to the data itself. A [Database Management](../../Topics/Database%20Management.md) system, or DBMS, provides the services that are necessary for end users or other software to interact with the data. However, it's fairly common to refer to the entire collection of data, DBMS, and any associated applications as a database, even in professional contexts. Without a DBMS the data itself is pretty useless. It's the DBMS that provides pretty much all the functionality of the complete database system. The DBMS provides the ability to read, write, update, and delete data in the database. It provides structure for data, such as the way that numbers, texts, and other types of data are stored. It provides a means of setting permission such that users have certain rights and restrictions for interacting with the data. There's also much that it does that's invisible to the user such as managing the way that the database is physically stored on your disk, and preventing the database from becoming damaged if users and applications interact with it in the wrong way. [MySQL](../../Skills/Software%20Development/MySQL.md) is just such a database management system. Specifically, it's a DBMS for types of [Databases](../../Skills/Software%20Development/Databases.md) called [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), which means that data is stored in a series of related rows and columns within tables. To interact with the data, one uses a special type of programming language called [SQL](../../Skills/Data%20Science/SQL.md), short for Structured Query Language, to make a statement to the database which says what you would like the database to do. This could be displaying certain data in a specific way, erasing or adding data to existing tables, or even changing the entire structure of the database
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=94)** such as adding new tables. These core functions are sometimes called the database engine. DBMSs usually also have tools to manage the administration of the database instance, such as monitoring its performance. SQL is a very common way of interacting with relational databases of all types, and many SQL commands are common across DBMSs. However, every DBMS has its own particular set of rules and constraints that are slightly different from the others and MySQL is no exception. Since this is an introductory course, most of the SQL you'll be learning will be easily portable to other relational [Database Systems](../../Skills/Software%20Development/Database%20Systems.md), but I'll be careful to call out any MySQL specific elements as they pop up. Many of the most popular DMBSs follow the relational model, and it powers everything from giant enterprise databases stored on the cloud to small databases run on a user's own machine. However, it's not the only kind of database. There are some that are designed to store documents or other types of unordered data, rather than individual pieces of data in rows or tables. Some are designed to run on embedded systems, such as consumer [Electronics](../../Skills/Software%20Development/Electronics.md), and must be able to manage their data with high reliability but no remote administration. Search engine databases have complex data database engines that support searching through giant amounts of text. Since these non relational databases don't use rows, columns, and tables, they have their own query languages optimized for their specific type of data. If you want to learn more about relational databases in general, I recommend looking up [Relational Databases Essential Training](../Data%20Science/Relational%20Databases%20Essential%20Training.md) in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Database Management](../../Topics/Database%20Management.md) (2)
> **Env Vars:** dbms (7), sql (4)
> **Definitions:** is a  (2), means that (1), short for (1), is an  (1)
> **Analogies:** such as (5)
> **CLI Commands:** mysql (3), make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [SQL, a declarative language](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=0)** - [Instructor] As you might guess from the name, [MySQL](../../Skills/Software%20Development/MySQL.md) uses [SQL](../../Skills/Data%20Science/SQL.md), or structured query language, as the means of programmatically interacting with its [Databases](../../Skills/Software%20Development/Databases.md). SQL is a declarative language, one common among relational DBMSs, but very different from procedural or object oriented languages common when working with data outside a database. In a procedural language, a program is executed step by step, and the program flow explicitly lays out each step that the programmer wants performed. A declarative language leaves the exact [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) up to the computer. A programmer just states the logic of what they want the end result to look like. In database terms, a procedural program might run a loop wherein it checks the first row of data in a table for certain contents, and then displays those contents if they match the criteria or rejecting them if they don't. Then it would loop to the next row. SQL leaves all those specific steps up to the database engine. All that the SQL query needs to do is state what the programmer wants the final results to look like. As a result, SQL queries tend to be very succinct compared to procedural or object-oriented programs and have the added advantage of being very human readable. To understand the basic syntax of SQL, consider this query. The first clause, SELECT*, tells the database what data to select. The star character means everything. It can be replaced with a list of specific columns if you only want a subset of the data. The FROM clause indicates where you want to SELECT* from, in this case, the table, movies_basic. The WHERE clause filters the results of the select query based on the stated criteria.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=95)** In this case, the select query will only choose movies whose release date is after 1990. Finally, the ORDER BY clause describes how you would like the data displayed. In this case, results will be sorted by the title column, ASC, or ascending, indicates that the data should be displayed in ascending order from low to high. As a side note, though it's not required in MySQL, the convention with most SQL implementations is to use all caps for SQL commands and keywords and lowercase for tables, columns, and data. It just helps make the query easier for the eye to parse. SQL also ignores most whitespace, so these two queries are equivalent. Adding new lines also has the advantage of making the different clauses of the query more visible. All SQL [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) queries and statements follow a similar pattern. For instance, if the SELECT* were replaced with DELETE and the ORDER BY clause removed, this statement would remove all the data it would otherwise have selected. Update statements change the data in the database and INSERT is used to add data. SQL statements can also be used to change the structure of the database itself. CREATE TABLE statements add new tables to the database, and ALTER TABLE is used to change existing tables. TRUNCATE is used to empty tables of their contents while preserving their structure, and DROP is used to remove tables entirely. Finally, a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of warning. SQL queries are run instantly against the actual data in the database. Select queries are harmless because they only display data, but almost every other type of statement
>
> **[3:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=187)** that executes successfully will immediately and permanently change the data in the database or even the database itself. Be careful when running update or delete or drop commands because in MySQL, there's no undo button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (12), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** sql (12), select (3), order (2), table (2), where (1)
> **SQL:** select (3), order by (2), where (1), create table (1), alter table (1)
> **CLI Commands:** mysql (3), make (1)
> **Warnings:** warning (1), be careful (1)
> **Code Identifiers:** movies_basic (1)
> **API Endpoints:** delete
 (1)
> **Definitions:** is a  (1)

#### [Databases vs. flat files and spreadsheets](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=0)** - [Instructor] Most people who want to start using [Databases](../../Skills/Software%20Development/Databases.md) are already familiar with the other ways of storing data on a computer. There are spreadsheets, which have plenty of tools for calculating, filtering, and displaying data. Most people also have experience with flat files, which are simply text or binary files with lists of data, a very simple format suitable for viewing in a text editor. Given that these other [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) applications exist, why use a database? Spreadsheets and flat files are both much simpler than databases. They don't require any programming experience. They're already installed on many machines, and many users are already familiar with them from their day-to-day work. Flat files are highly portable. You can guarantee anyone who you send the data will be able to view it. Spreadsheets have many integrated tools that make for easy data analysis, especially for numerical data like finances. These are all perfectly valid reasons for using spreadsheets and flat files, and even regular data database users will still frequently use other data tools for presenting and transmitting their data. However, databases do have three major advantages over these other applications, flexibility, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), and integrity. The use of [SQL](../../Skills/Data%20Science/SQL.md) demonstrates the flexibility of a relational database. Although data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) in a table is laid out according to a structure that only rarely changes, most data is not queried one entire table at a time. Instead, queries have the ability to pull data from different tables joined up by their interrelated fields and displayed in an order that makes sense for the particular question being asked of the data. Thinking of users, their addresses, and their activities
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=94)** from three different tables can be easily done in one query, and then filtered in different ways to find the most useful way of displaying the data. New data can be easily integrated into these queries as well. While pivot charts and some spreadsheet applications offer similar functionality, they're slower and more restricted. Speaking of slower, the second major advantage of a database is its scalability. With small amounts of data, it's often possible to just eyeball a spreadsheet or flat file to understand it. But when the user is dealing with thousands or millions or billions of pieces of data, then other programs become hard or impossible to use. Imagine scrolling through a text file with a million rows. Most spreadsheet applications have a maximum quantity of data that they can support. Most enterprise level databases, such as [MySQL](../../Skills/Software%20Development/MySQL.md), can scale to handle arbitrarily large sets of data. Though this course assumes that you're using MySQL on your local machine, most of the time, real world installations of MySQL will be run on servers or in the cloud. Given these resources, a well-designed MySQL instance can query billions of rows of data in seconds. This is simply impossible with other data tools. Finally, DBMS has placed a great deal of value on the integrity of the data. Most of its tools for maintaining integrity are handled outside of the user's direct intervention, but they all serve toward making sure that many users can interact with a database without one user's queries and statements affecting another's. Many websites will run multiple queries for every user of the site. For companies like [Google](../../Glossary/Service/Google.md) or Amazon, that can be millions of users at once. With a database, each query or statement is handled as a single transaction completed or failed
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=189)** before any other user's query or statement will interact with that same data. When using a flat file or a spreadsheet, even one with robust collaboration tools, there's no guarantee that your data won't change while you're using it. With a database, all the data in each statement you run will be consistent with all the other data in that same statement. Ease of use, portability, presentation. There are many reasons to use flat files and spreadsheets. However, for interacting with large-scale sets of ordered data, the flexibility, scalability, and integrity of databases make them the best solution and their real-world use cases bear this out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (5), [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (3), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** mysql (4), make (2), find (1)
> **Env Vars:** sql (1), dbms (1)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Common database terms](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=0)** - [Instructor] Like any computer system, DBMSs have a detailed technical vocabulary. This vocabulary makes it possible to discuss database-specific questions in detail, but it can be impenetrable to newcomers. In this video, I'll touch on terms and ideas that you'll see in action throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course. A database is a set of ordered, related data stored on a computer. This is true of any type of database, but this course focuses specifically on [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), a type of database model that focuses on organizing data into rows and columns within tables. A table is a collection of closely related data. In theory, all data in a database could be stored in a single giant table. However, organizing data into many tables is more efficient from both a human's and a computer's perspective. It makes the data much more readable, and it also takes much, much less processing power to interact with numerous smaller tables. In a relational database, each table is divided into rows and columns. Columns define the data present in each row. One column might be a unique identifier, another might be a piece of text, and a third and fourth might be numbers. Each row contains data that all refer to the same entity in the database, whether it be a customer, a transaction, or a point of scientific data. The intersection of each row and column is called a value. Another way to think of it is that each column defines the nature of a value and a row defines its relationship to other values. Sometimes these structures are referred to by alternate names.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=93)** A table is sometimes known as a relation, a column as an attribute, and a row as a record or tuple. In [MySQL](../../Skills/Software%20Development/MySQL.md), the order of rows and columns in a table does not matter. Column order is defined once when a table is created, usually to make the data as readable as possible, but can be manually changed later. The actual order of rows is essentially meaningless since users can define the order they would like to see when the data is read out of the database. Often, each row in a table will contain one value that functions as a unique identifier called a primary key. This key is unique to each row, and this uniqueness is enforced by the DBMS itself. The key allows the specific row in a table to be referenced either in other tables where it would be called a foreign key, or in queries that include multiple tables. To interact with the database, users employ [SQL](../../Skills/Data%20Science/SQL.md) statements, which are any valid command that complies with SQL syntax, ends with a semicolon, and interacts with a database in some way. The most basic types of statements in SQL are so-called CRUD statements, standing for create, read, update, and delete. These correspond in MySQL to insert, select, update, and delete statements. Select statements are often called queries, and unlike other types of statements, they return a set of rows, including potentially zero rows. Some users will use the term statement and query interchangeably, but technically, a query is a type of statement that users select. Each statement consists of numerous clauses,
>
> **[3:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=188)** which are the building blocks of an SQL statement. In this query, SELECT *, FROM movies_basic, and WHERE release_year > 2010, are all clauses. The WHERE clause also includes a predicate, the > 2010 portion, that filters the results based on some user-defined criteria. When a query includes data from multiple tables, the relationship between those tables is established in the query by joining two tables based on where the data in those two tables overlaps. Primary and foreign keys are frequently used for this, they make for the simplest and most predictable joins since the key must be unique in one table. With these terms in hand, you are now ready to begin learning how to interact with [Databases](../../Skills/Software%20Development/Databases.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (4), where (2), dbms (1), crud (1), select (1)
> **Definitions:** is a  (3), is called (1), known as (1)
> **CLI Commands:** mysql (2), make (2)
> **SQL:** where (2), select (1)
> **Code Identifiers:** movies_basic (1), release_year (1)
> **Speakers:** - [instructor] (1)

#### [Database best practices](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=0)** - [Instructor] When a user who is new to [Databases](../../Skills/Software%20Development/Databases.md) is tasked with creating their first database, they might ask, "Why not just make one table to include all my data?" If they're accustomed to using spreadsheets, this might be intuitive. Nothing in the software will say, "You can't do this." However, that doesn't mean it's recommended. Not only is this user leaving a lot of [MySQL](../../Skills/Software%20Development/MySQL.md)'s most powerful tools on the table, they're making a database that will be hard to update, prone to irregularity, and slow to use, especially as it grows in size. Many of the more detailed aspects of database best practices are beyond the scope of this course, and a lot of the data you'll see in other videos won't be optimized at all. I'm designing my database to be suboptimal for the purposes of example, but by the time you're finished with this course you shouldn't need to rely on such simple datasets. For more detailed information on database optimization, check out Programming Fundamentals: Databases in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. The best way to optimize a database is through a practice called normalization. Normalization is the practice of designing a database to minimize data redundancy and maximize [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). Full normalization is a complex practice rooted in formal logic, but the basic rules to follow are these. Each row-column pair should only have a single value and those values should be related to or depend upon the key values of the table. For instance, if you're designing a database to hold information about movies, you might design a table of film titles. It might make sense to add a column for the director of that title, but it would not make sense to add information
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=93)** about the director's hometown or their net worth. That data is not related to film titles. If the biographical data does need to be included in the database, best practices would be to add a second table for directors and then link the two tables together logically. This means you can avoid data anomalies. For example, if you included all the data about both a film and its director in one table, what happens if all that director's titles get temporarily removed from the database for some reason? All their biographic information would be lost as well. Likewise, say you need to update the director's net worth. You'd have to update it for every single row containing one of those director's titles. If you have two separate tables instead, then neither of these issues can arise. It might seem like there's a downside to making more tables. It makes the tables harder to read since the data is so spread out. This is not as big a problem as it might seem. Most often when using a database you won't be looking at entire tables at once. Rather, you'll be using queries to select only some data from those tables. Modifying a query to pull from multiple tables instead of one is a relatively simple thing to do in [SQL](../../Skills/Data%20Science/SQL.md), and later in this course you'll learn how to do exactly that. The most basic best practice is to design your tables thoughtfully. Before you start laying out columns, decide what specific data you would like each table to contain. Creating normalized databases is easier than updating existing databases to optimize them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (3), mysql (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), for example (1)
> **Best Practices:** recommended (1), best practice (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 2. Exploring MySQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Advantages and disadvantages of MySQL](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=0)** - [Instructor] If you've decided to use a relational database to store your data, which should you use? For the beginning user, [MySQL](../../Skills/Software%20Development/MySQL.md) has many advantages over its competitors. To start with, it's free. The community edition of MySQL is fully featured, and can scale up far beyond the simple tables that this course calls for. This is no small thing. MySQL's chief competitors are the Oracle DBMS and [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). Both of those companies have commercial licenses that can cost thousands or tens of thousands of dollars for moderate-sized installations. There are enterprise versions of MySQL that have similar licenses, but they're not necessary for a beginner or even a small company. The only major downside of the Community Edition is that you don't get any official tech support. Another advantage is ease of use. Although you'll see through this course that MySQL is not exactly simple, it is easy to get started with. Starting with the self-contained installation package, you can get started creating [Databases](../../Skills/Software%20Development/Databases.md) and tables with the MySQL Workbench without even learning any [SQL](../../Skills/Data%20Science/SQL.md). The Workbench also makes it easy to visualize the results of your queries and to import and export data into other software packages. Although it's not as forgiving as say, [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), MySQL lets you play around with your databases and with your DBMS installation without too much worry of catastrophic accidental damage. The third advantage is that it's open source. Even if you never dive into the source code yourself, it means a tremendous number of third-party tools have been developed to extend your installation. It also means there are a lot of users who have delved into the code, and that means that even if you don't buy a support contract,
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=93)** you're likely to find resources online to help you solve any problems with MySQL. This ties into its final major advantage. It's enormously popular and used by people of all skill levels. For many years, MySQL has been a top-tier DBMS, and that means that if you have questions when you're working with it, someone else online has probably already asked them and received an answer. There are also guides and examples for thousands of different use cases. There's a reason why MySQL is so popular. The disadvantages of MySQL are fairly minor compared to its advantages, especially for beginners, people with small databases, or people who will only use the database while others administer it. Though MySQL can scale up to enormous size, larger databases are less efficient than its competitors, and you'll have fewer tools for monitoring or optimizing those large databases. There are also some tools like full text searching that are not supported out of the box and require add-ons to use. It's also not fully SQL compliant. While basic queries are largely similar to standard SQLs, some tweaking will be necessary to migrate to other DBMSs, which themselves may not be fully compliant. The advantages of MySQL should make you confident that it's a useful tool for learning how to use a database, as well as a practical database solution in its own right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (13), [Databases](../../Skills/Software%20Development/Databases.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Microsoft Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **CLI Commands:** mysql (13), find (1), make (1)
> **Env Vars:** dbms (3), sql (3)
> **Definitions:** means that (2)
> **Exercise Files:** source code (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Exploring MySQL Workbench](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=0)** - [Instructor] In this course, we'll be using the Workbench to interact with our [MySQL](../../Skills/Software%20Development/MySQL.md) [Databases](../../Skills/Software%20Development/Databases.md). The Workbench is a powerful [SQL](../../Skills/Data%20Science/SQL.md) editor and database tool that provides graphical ways of interacting with databases, tables, and other MySQL features that we would otherwise have to use the command line for. However, the Workbench requires a connection to the database itself to operate. Depending on your exact setup, the Workbench might already have a connection to your local database. But if you're using MySQL on a remote server or if you installed the server and Workbench separately, you might need to set up the connection manually. And to do that, you can just click this plus button here, (loud chiming) and enter your Hostname, Username and Password for the MySQL server you want to connect to. But if you follow the install instructions earlier in this course, you should already have a connection to your local MySQL instance. You double click on that, (loud chiming) it may prompt you for your password. And if so, just enter it and hit Okay, and then you'll be dropped into the Workbench home screen here. I'll quickly run through what you're seeing on the screen, although the Workbench has a lot of functionality that I won't have time to touch on in this video. In this center of the screen is the query window, where you can write SQL statements, and the buttons along the top of the screen allow you to execute all or part of a statement, save or load a statement, or modify the look of a query. When the query is run, the output will appear in a grid view in the bottom half of the screen like so.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=93)** And below that is the output pane that shows the results of the query in terms of how many rows it was returned or if there were any error messages. It will also shows you the text of the query. And there's a tabbed view here that allows you to switch between the results of multiple queries. If you want to modify the look of the workbench you can go to View and Panels, and you may want to hide the output area or there is also a secondary sidebar that might appear on a default installation. You can hide that. I prefer to hide the secondary sidebar. On the left side of the screen is the navigator pane and on top here, it shows you all the loaded databases. In this case, this is the default Sakila database that was installed with the MySQL samples and examples. And if you click on something here in the bottom half of the pane, it shows some information about the selected item. This is a table, so it shows the table's columns in the information view here. If you change from the schema tab to the administration tab it provides you some tools for managing your MySQL Server. We won't cover that in this course. Most of this course is focused on using the Workbench, so you'll learn a lot more about it as you work through the remaining videos. For now, you should know enough to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (7), [Databases](../../Skills/Software%20Development/Databases.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** mysql (7)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** setup (1), set up (1), install (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [MySQL data types: Part 1](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=0)** - [Instructor] Every piece of data stored in a [MySQL](../../Skills/Software%20Development/MySQL.md) database has a type, whether numeric, text, date, or something else. The type that you assign to a piece of data impacts what you can do with that data. For instance, if you want to perform math on a piece of data, assigning into numeric data type allows you to use the mathematical functions during queries. If the data consists of text, then a string or text data type would be the most suitable. Choosing a precise data type also helps keep your database from growing too large, and it helps speed up queries. For most smaller [Databases](../../Skills/Software%20Development/Databases.md), these effects won't be very noticeable. But accurate typing is a good habit to get into because the effects on large databases can be very significant. MySQL has a few data types that can be roughly divided into the following categories: Numeric, string and text, date/time, and everything else. Numeric data types are further subdivided into integer types, fixed-point numbers, and floating point numbers. Integers are the simplest numeric data type used for storing whole numbers, that is numbers without a decimal point. The maximum storable value depends on the exact integer data type, starting with TINYINT, which takes up only one bite of storage and can store value from 0 to 255 or from -128 to 127 if the integer is signed, meaning that it can take negative values as well as positive ones. Each subsequent integer type takes up more storage but increases the maximum value that can be stored. A BIGINT takes up eight times the storage space of a TINYINT
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=93)** no matter what the actual value being stored is. So you can imagine the impact of choosing BIGINT for every number in a giant database. On the other hand, it's not always possible to predict the exact numeric range you'll need for a piece of data. Using the default INT data type is usually a safe choice. Numbers with decimals come in two flavors in MySQL, fixed point and floating point the fixed point data types, DECIMAL and NUMERIC are identical in MySQL. They're assigned with a precision, the number of significant digits that the data will store before the decimal, and a scale, which is the number of places stored after the decimal. For example, you might use temp DECIMAL 3, 1 to store a temperature from a medical thermometer. This allows values from -999.9 to 999.9, more than enough to cover any range of body temperatures. When you do math with fixed point numbers, the result will always be exactly accurate. That sounds intuitive, but it's actually not the case with the other way of storing real numbers in MySQL, floats. FLOAT is short for a floating point number. In other words, the decimal floats around allowing for more numbers after the decimal in one row of a table and less in the next. With fixed point numbers like decimal, the number of decimal values is literally fixed, it cannot change without altering the whole table. Because of the way that floating point numbers are stored in computer memory, they're never stored as precise values. Unlike with a decimal, you don't need to know exactly how many significant figures the numbers you're storing will have, but the price that you pay for this is that the results when you do math with floats
>
> **[3:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=187)** will not be exactly accurate. To demonstrate, I'll create a math_test table here in the default "world" database, set that as default, and I'll assign a decimal with a precision of 4 and a scale of 2, and a second identical decimal and then two floating point numbers. Now, I will add a row with some decimal values. So I'll INSERT INTO math_test VALUES 1.5 and 1.7 for the decimals, and 2.5 and 2.7 for the floats. Now, if I run a query that adds the decimal values together, the results look like what you'd expect. (keyboard keys clicking) I'm adding 1.5 to 1.7, so the result is 3.2. The extra zero on the end is because I created my decimal value to have two decimal points. Now, if I run an identical query with my floating point values, I'm adding 2.5 to 2.7, so you'd expect the result to be 5.2, and what you get instead with floats is 5.2 plus a very small fraction starting way down in the billionth place. Now, this is the downside of using floats. And what's worse is that this lack of precision will be inconsistent across platforms since it's determined in part by the computer and the OS that it's run on. It's important to understand the difference
>
> **[4:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=279)** between decimals and floats in MySQL. Decimals are best used when precision is required and where the number of significant figures can be accurately predicted like in many business applications. Floating point numbers, on the other hand, are valuable where the number of significant figures is hard to predict or where the lack of precision can be accounted for in other ways, for example, with scientific data. And if you don't need decimal values at all, there's always the simple old-fashioned integer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Versions:** 999.9 (2), 1.5 (2), 1.7 (2), 2.5 (2), 2.7 (2)
> **Env Vars:** tinyint (2), bigint (2), decimal (2), int (1), numeric (1)
> **CLI Commands:** mysql (6)
> **Analogies:** for example (2), for instance (1), imagine (1)
> **Definitions:** is a  (1), short for (1), in other words (1)
> **Code Identifiers:** math_test (2)
> **SQL:** insert into (1)

#### [MySQL data types: Part 2](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=0)** - [Instructor] In most [Databases](../../Skills/Software%20Development/Databases.md), storing numbers alone won't cut it. You'll want to store some text as well. Just like with numeric data types, there are several different ways of storing strings and text. The most common ways of storing text are with the CAR and VARCHAR data types. The maximum length for any CHAR is 30 characters. When you add data to a CHAR field it'll be padded with extra spaces so that this total storage space is always the same, usually one byte per character, depending on the language and character set your database is using. Those padded spaces are hidden whenever the CHAR is retrieved, so you won't see them, but the consistency of storage is one good reason to use CHAR. The max length of any VARCHAR is 65,535 characters, which is also the max length of any table row shared among all of its columns. VARCHAR stands for variable length character, and unlike CHAR will scale their storage requirements based on the actual size of the values being stored with an extra byte or two as overhead and they won't store any padding spaces. In both cases, you'll declare a maximum length in characters for each field when you create the table. So take these columns, for instance. The best practice is to use CHAR when you know exactly how long the data will be, such as my zip code example here. In the US, zip codes are either five or nine digits long. Addresses, on the other hand, are much more variable, and you'll need to account for this when designing your columns. Some people might see this and decide that since VARCHARs will scale automatically with the data they store, they might as well declare all their VARCHAR
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=93)** is absurdly long and not go through the trouble of defining their data requirements. [MySQL](../../Skills/Software%20Development/MySQL.md) absolutely allows this. However, a full VARCHAR 65535 is 64 kilobits in size. Imagine if through some accident or malice, a table had tens of thousands or millions of full rows added, that's effectively a denial of service attack on your database. Best practice is to think about your expected data size, add a generous padding, and then make your VARCAR that length instead. CHAR and VARCHAR have corresponding BINDARY and VARBINARY data types that store strings as strings of bytes rather than strings of characters. This means that they'll be sorted according to their numeric binary value instead of alphabetically. Generally speaking, you should store human readable text as CHAR or VARCHAR, and machine readable text as BINARY or VARBINARY. For very large amounts of text, MySQL supports the BLOB and TEXT types. These are roughly equivalent to VARBINARY and VARCHAR in the way that they're stored and used, except that they allow for much larger strings. Like ENT you can declare anything from tiny BLOB and tiny TEXT, maximum length 256 bytes, to long BLOB and long TEXT, maximum length four gigabytes. These variable types are useful if you need to store very long strings in your database, which is best done carefully. Full discussion of how best to use BLOB and TEXT are beyond the scope of this course. For most databases, CHAR and VARCHAR will be the most common ways to store text. While you can record the date or time in a table with text,
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=189)** MySQL has several purpose-built date and time data types. These data types will allow you to compare dates and times, automatically add or change dates and times, and keep your time measurements consistent throughout your database. The date data type stores the year, month, and day in the format of four-character year, two-character month, two-character day. Date time is similar but adds hours, minutes, seconds, and fractions of a second in the format two-character hour, two-character minute, two-character second, and then a period and a fraction of a second that supports precision down to the microsecond. Timestamp is similar to date time in that it stores date and time values in the same format, but it has some different behaviors. Notably, it's converted between UTC and the databases configured time zone every time it is updated and selected. This means that it's most useful for recording the timing of events that occur in the database itself, like when records are added or changed. Storing static dates and times should be reserved for date or date time. There are a few other less common data types that might appear in a database you're using. BOOLEAN is used to store true and false values. It's actually just a renamed TINYINT where zero equals false and one equals true. SET and ENUM both define a list of acceptable values at table creation, and any data in those fields must come from that list. A SET allows for multiple valid values and ENUM allows for only one. BIT allows for the storage of binary numbers. For example, 1101 could be stored in a BIT three
>
> **[4:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=284)** to represent the value 13. [JSON](../../Skills/Web%20Development/JSON.md) allows for the optimized storage of valid JSON data files. Finally, there are a number of spatial data types for storing [geographic information systems](../../Skills/Data%20Science/Geographic%20Information%20Systems%20(GIS).md) or GIS data form maps. It's worth taking some time to mindfully choose the correct data types for your tables. It's far easier to do when designing a table or database than trying to change when the database is already full of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Geographic information systems](../../Skills/Data%20Science/Geographic%20Information%20Systems%20(GIS).md) (1)
> **Env Vars:** varchar (9), char (9), blob (4), text (4), varbinary (3)
> **SQL:** varchar (9), boolean (1)
> **Analogies:** just like (1), for instance (1), such as (1), imagine (1), similar to (1)
> **CLI Commands:** mysql (3), make (1)
> **Definitions:** means that (2), stands for (1)
> **Best Practices:** best practice (2)
> **Prerequisites:** you'll need (1)

#### [Challenge: Explore the built-in databases](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=0)** - [Instructor] In this challenge, you'll be exploring the built-in [MySQL](../../Skills/Software%20Development/MySQL.md) tutorial [Databases](../../Skills/Software%20Development/Databases.md). If you installed the default installation of the MySQL Community Edition, you should see the world and Sakila databases in the Workbench Navigator pane. See if you can explore the contents of those databases and get a feel for navigating in the workbench, and see how the example data fits together. Specifically, try to select data from at least one table, and to view the structure of one other table. Be careful not to accidentally drop any tables or databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **CLI Commands:** mysql (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Explore the built-in databases](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=0)** - [Narrator] To view the contents of any database, also called schemas in [MySQL](../../Skills/Software%20Development/MySQL.md), click the arrow to the left of the database name. You'll then see a list of contents separated by type, tables, views, stored procedures, and functions. Views, stored procedures, and functions are beyond the scope of this course, although you can view them the same way that you view tables. To view the contents of a table, we'll click the arrow next to the Tables list to expand the full list of tables. And then right-click, and choose Select Rows, Limit 1,000. You can also click the little grid icon that appears when you mouse over the table. This gives you exactly the same data. Viewing the data with a limit is actually a great way to learn about the contents of a table. There's no need to load the entire contents, which could theoretically be enormous and take a long time to load. Selecting just the first 1,000 rows gives you a very good idea of the table structure and contents and is much, much faster. To view the structure of a table, you can right-click on the table and go to Table Inspector. This gives you a quick summary of the table, its number of rows, its size on the disk, location on the disk, and so forth. You can also see the table columns, indexes, triggers, and other table information. Or you can click on the little wrench icon that appears when you mouse over a table, and that brings up the graphical table editor. If you make changes here to the table name or to any of the columns, you can apply them as an alter table statement.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=94)** Right now, there's no need to make any changes. But later in this course, we'll learn how to create and alter tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **CLI Commands:** make (2), mysql (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Creating Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a database](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=0)** - Now that we've discussed some database theory and you understand some of the foundations of [MySQL](../../Skills/Software%20Development/MySQL.md), let's get started making a database. I've started up the MySQL Workbench and I've connected it to my MySQL Instance. Now, assuming you completed the standard installation of the MySQL Community Edition you should see the three existing [Databases](../../Skills/Software%20Development/Databases.md) under the left-hand navigator pane. Remember that in MySQL, the term schema and database are interchangeable for all purposes. So I'll get started creating a database. The nice thing about the MySQL, Workbench, instead of trying to use MySQL, purely through the command line, is that there are two ways of doing almost everything. I can use the built-in Wizards to create my database or I can write the [SQL](../../Skills/Data%20Science/SQL.md) statement myself. To start with, I'll use the Wizard. So I'll click the new schema button and this brings up a new tab and I'll give it the name movies. The only other options are to change the Character Set and Coalition, which can be left to default. So I'll click the apply button and this brings up a new window that shows the actual SQL statement that the workbench is going to execute on my behalf. And to actually apply it, I choose to click Apply. And it says the script was successfully applied, and in the output pane below we can see that the change was applied successfully. And then finally, in the navigator pane, there is now a movies database. So I'll click finish there. And now I'm going to drop this database so I can create it manually with an SQL statement. And I'll right click on movies and click drop schema. Now, as always, be very careful when trying to drop anything in MySQL. So I'm going to review the SQL first
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=93)** and just verify that yes I do want to drop database movies. So click Execute and movies is gone. And now I'm going to open up a new SQL tab. And to create the database movies, all I need to type is create database movies. I could also type create schema movies, it would have the same effect. So I click the execute button, and in the output pane it says Create Database One Row Affected, that's usually a good sign. There's no movies database under the navigator pane yet. Sometimes you need to right click and refresh all before it shows up. And there is my movies database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (8), [SQL](../../Skills/Data%20Science/SQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** mysql (8)
> **Env Vars:** sql (5)
> **Tools:** command line (1)
> **UI Navigation:** click on (1)
> **Speakers:** - now (1)

#### [Create a table](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=0)** - [Narrator] Now that my movie's database has been created, I need to create a table to actually hold the data. In order to best demonstrate the elements comprising a table, I'll use the workbench's graphical method of table creation. First, I'll set the movie's database as the default schema. This will ensure that all of my [SQL](../../Skills/Data%20Science/SQL.md) statements apply automatically to the movie's database. That expanded the movie's database, and you can see that it has no contents. So, I'm going to right-click on tables and click create table. Let's open a new tab in the main view with all the options for table creation. Before I go any farther, I need to decide what data I'm going to be storing in this table. I call the database movies, so for the sake of example, I'm going to create a table to store a very basic movie's dataset. This spreadsheet shows the data I want the table to store. It's a list of 50 fictional movies, along with their genre, release year, director, studio, and critic rating. Back in the workbench, I'll give my table a name, movies basic. The schema is movies, which is correct, and the character set, collation, and engine can all be left at default. The differences between these settings are beyond the scope of this course. I don't feel they need to add any comments, so I will add my first column, which I want to be an ID column. I'll double-click under column name, and notice the workbench has assumed that my first column will be an ID column and assigned an appropriate name. I'm just going to shorten it to ID. The workbench has also correctly assumed
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=93)** that I want my ID column to be an integer, since it will always be whole numbers. Next comes a set of checkboxes that enable, or disable certain [MySQL](../../Skills/Software%20Development/MySQL.md) features for this particular column. I'll go through these one at a time. PK stands for primary key, which I'll explain in detail later in the course, but it means that every row in this table must have a unique value in this column, and it will be used to identify that row in queries. I'll discuss primary keys in more detail elsewhere in the course. Not null means the column cannot contain null values. Essentially, this means that the column cannot be empty. Null values are different than zeros or empty strings, and MySQL treats them in special ways that I'll discuss later in the course. The next flag is unique. I do want my ID column to contain only unique values, but because it's a primary key, they're already going to be unique already. The next field is B for binary. This flag should be checked if the column will contain binary data. Binary data is treated differently than non-binary data for sorting and collation. Unsigned means that the data, if it contains numbers, cannot be negative. This gives a higher maximum value at the cost of all of the values needing to be positive. Zero fill will add zeros to pad out the column's value to the column's maximum size when it's displayed. This doesn't affect how the values are stored only when they're read from the database. Auto increment tells MySQL to automatically generate a unique value for this column. These unique values will start at one and increment every time a row is added.
>
> **[3:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=187)** This feature is especially handy for ID columns because it guarantees that the value in the column will be unique. The final flag is called generated, which lets users supply an expression to automatically generate data for this column. For my ID column, MySQL automatically checked primary key and not null, which is exactly what I want. I'm also going to enable auto increment for this column. I don't need to check unique because it's the primary key. I'm not storing any binary data. I don't care if it's signed and I don't need zero fill and I'm already generating a value with auto increment, so I'm going to leave all the other flags unchecked. So, that's one column down. The next column is the title. Some movies have large titles, so I'll create that as a Varkar 100. I don't need any flags for that, so I'll just go to the next column, which is genre. Varkar 20 should be long enough. After that is release year and years are always whole numbers, so I can make that an integer. Notice how I used an underscore instead of a space in release year. MySQL does actually support spaces in column names, but it will require that you enclose the column name in quotes every time you use it in a statement. That's a lot of extra work, so I'm going to avoid it by using an underscore. Next up is director, which is a name. Varkar 40 should be sufficient. And studio, I'll call Varkar 30.
>
> **[4:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=282)** Finally comes critic rating. And this is, all these values are numeric, and some of them have a decimal point. And they're always out of 10 with only at most one decimal point, so I will call this decimal to one. And I'll also give that a default value of zero. I'll leave all the other defaults empty, which means that they will be null by default, except for the ID column, which will be given a default value with the auto increment flag. My dataset is simple enough that I can take in the whole thing at a glance. If this were thousands or millions of rows instead of 50, you might have to do some further investigation into the nature of the data to make sure that these columns are created correctly. For instance, making sure your titles aren't too long, understanding the nature of all the numerical values, and so forth. Now that I've defined my columns, I can create the table. So, I'll click apply. Your new window will pop up with the SQL statement that's going to be applied to the database. And I will click apply again, and that was executed successfully. And there is now a movies underscore basic table in the movies database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** mysql (5), make (2)
> **Definitions:** means that (4), stands for (1), is called (1), is a  (1)
> **UI Navigation:** right-click (1), double-click (1), go to (1)
> **Env Vars:** sql (2)
> **Cross-References:** later in (2)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Use CREATE and ALTER to define a table](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=0)** - [Instructor] Although the [MySQL](../../Skills/Software%20Development/MySQL.md) Workbench has a fully featured graphical interface tool for creating and modifying tables, there's value in understanding the raw [SQL](../../Skills/Data%20Science/SQL.md) statements that those tools generate. To begin with, I'm going to drop the existing movies_basic table. This will instantly and irreversibly delete it from the database, so I'm going to click Review SQL, just to make sure I'm doing what I intend. And I do want to drop the movies_basic table from the movies database, so I'll click execute and that table is gone. Instead of opening the Create Table screen, I'm going to use this new blank SQL tab. I want to recreate the movies_basic table using the Create Table statement. So I'm going to start with Create Table, movies_basic and then with an open parentheses I'm going to start defining my columns. I need to include their name, their data type and any column flags that I want to be enabled. So I want to start with my ID column, which will be an integer. And I want it to be my primary key, I want it to be not null, and I want it to auto increment. Make sure to use a comma to separate each of your columns. The next one is title, which is a VARCHAR 100, genre is VARCHAR 20, release_year is an integer, director is VARCHAR 40, and studio is a VARCHAR 30.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=99)** And finally, critics_rating is a decimal with a precision of two and a scale of one and a default value of zero. And I will close the parentheses since I'm done listing my columns. And then I will end the statement with a semicolon and click execute. Looks like that executed successfully. So I will refresh the schemas view. And there's my movies_basic table. Note that the white space throughout this statement in a capitalization of the MySQL keywords is optional but it's a useful convention to keep your statements easy to read and understand. Sometimes the placement of a comma or parenthesis can completely change the effect of a statement, but not generate an error. So it's very important to make your statements as clear as possible for your own benefit. Now that I have an existing movies_basic table and I want to make permanent changes to that table's structure, what I'm going to do is use the Alter Table statement. So I'm going to open a new SQL tab and start with Alter Table movies_basic. Then I want to list all of the changes that I'm going to make, and I can make multiple changes with a single Alter Table statement. I'm going to add a column called, box_office_gross as a float. And I want to rename the column, critics_rating to critic_rating And as always, I'm using a comma to separate my commands here. And finally, I want to change column, director
>
> **[3:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=194)** to director VARCHAR 50 instead of 40. And if I wanted to, I could add or rename or change additional columns with this statement, but I'm just going to end it by entering a semicolon and clicking execute. Looks like that was successful. So if I select the movies_basic table again, there's my box [office](../../Skills/Web%20Development/Microsoft%20Office.md) gross. And then also if I go into the Graphical Table Editor, you can see that the director is a VARCHAR 50 instead of a VARCHAR 40. I'm just going to remove this box_office_gross and change the director back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Code Identifiers:** movies_basic (8), critics_rating (2), box_office_gross (2), release_year (1), critic_rating (1)
> **Env Vars:** varchar (7), sql (4)
> **CLI Commands:** make (6), mysql (2)
> **SQL:** varchar (7)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** select the (1)
> **Best Practices:** make sure to (1)

#### [Primary keys and foreign keys](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=0)** - [Instructor] The primary key is one of the most important pieces of data in a table. In the movie's basic table, I defined the ID column as a primary key. A table can only ever have one primary key, and all of the values in the primary key column must be unique because each of those values is used to refer to one specific row of data in the table. It's worth noting that multiple columns can be added to a primary key, but there's still only one key and the combined data of the columns must be unique. So why bother with primary keys then? Strictly speaking, they're not required, but it is best practice to define one for every table when that table is first created. If you have only one table like my movie's basic table, then there's not much advantage to a primary key except for making the data rows slightly more human readable. To demonstrate the real value of primary keys, I'm going to open the Sakila database in the [MySQL](../../Skills/Software%20Development/MySQL.md) workbench and expand the list of tables, and then select the contents of the customer table. This table contains a list of customers of the fictional Sakila DVD Rental store. Notice how, just like my movie's basic table, the first column is an ID column with incrementing numbers. Each number refers to exactly one customer and each time any information about that customer is recorded elsewhere in the database, their unique ID will be used. If I select the data in the rental table, you can see a list of DVD rentals. Each rental has its own primary key, the rental ID column plus the rental date and the return date. But notice the fourth column, it contains the same customer ID from the customer table. If the customer table did not use primary keys
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=95)** or if there was no customer table and the rental table contained all data about the customer doing the renting, then it would have huge amounts of redundant data if each customer made multiple rentals. Linking to the customer ID instead helps reduce the amount of data in the database, as well as helping to ensure [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) by keeping each piece of data in only one place. This is a goal of database normalization. A primary key of one table that's linked in a different table is called a foreign key. If I open the table inspector for the rental table and click on the foreign keys tab, you can see that this table contains three foreign keys; the customer ID, inventory ID, and staff ID, each referring to the ID column in their respective tables. Furthermore, the rental ID primary key from this table is a foreign key in the payment table. Primary keys and foreign keys are an essential tool of keeping a database normalized and neat. Later in this course, you learn how to join tables together based on their primary keys to see the data all in one place. But for now, you should have an understanding of the value of primary keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **UI Navigation:** open the (2), select the (2), click on (1)
> **Definitions:** is a  (2), is an  (1), refers to (1), is called (1)
> **Env Vars:** dvd (2)
> **CLI Commands:** mysql (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)

#### [Display database relationships with reverse engineering](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=0)** - [Narrator] If you have only a small database then understanding the primary and foreign key relationships between tables is easy. Only a few tables means only a few relationships. However, if you have a larger, more complex database like the sample sequila database from [MySQL](../../Skills/Software%20Development/MySQL.md), then understanding the foreign key relationships can be more tricky. It's possible to go from table to table looking at indexes to find foreign keys but it's slow and it's easy to lose track. Fortunately, the MySQL Workbench has a better solution, database models. A database model contains all the structural information about the database. It's tables, views, functions, and everything else including the relationships between tables. It does not, however, contain any data but that's the point. It's small and portable and it doesn't require any connection to the DBMS. You can send a database model over email to a colleague for review for instance. You can build models for [Databases](../../Skills/Software%20Development/Databases.md) that don't exist yet, get everything just so and then create a new schema from the model with just a few clicks. Or you can use the MySQL Workbench to reverse engineer an existing database and make a model for you. Let me show you how. In the MySQL Workbench click Database and then Reverse Engineer. This brings up a wizard that looks complex but it's actually straightforward. This is the connection to the DBMS here and the default values are all good. You may have to enter your route password. And then I'm going to select the sequila database
>
> **[1:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=92)** to reverse engineer. Click Next and we'll just select All Objects and place them on the diagram. Click Execute. It should just take a moment and then in the background, the model is loaded. So immediately you see two tabs. One is this EER diagram that I'll come back to in a moment. But this MySQL model here shows the sequila database then all of its tables, all of its views, all of its routines, users if applicable, and notes.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=132)** And if I double click a table here, it brings up a table designer, just as if this was an actual table in an active database. And if you make changes here and save them, you can apply them from the model back to the actual database if you have permissions to do so. One of the nicest features of the database model was on screen just a moment ago is the EER diagram. EER stands for entity-entity relationship and it's the solution to the problem that I posed at the beginning of this video. In this diagram tab, you can see all of the tables and their relationships neatly visualized. If I mouse over these lines, you can see that the address ID is being used in the store table as a foreign key, for instance. And the address ID here also appears in the customer table. You can rearrange these elements here in any way that makes the most sense to you but once you have this nicely laid out, you can see all of the database relationships neatly visualized and that sure beats going back and forth from table to table in different tabs. If I go to File here, click Save Model. This will prompt me to save the model as a MWB file. Save that to my downloads. And we can see this is only just a few kilobytes so we can easily send that over email to someone else for instance.
>
> **[3:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=225)** It can be very handy to have this EER diagram open in one tab and the actual database in another while writing queries since it always allows you to have a quick reference to the database close at hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** mysql (5), make (2), find (1)
> **Env Vars:** eer (4), dbms (2), mwb (1)
> **Analogies:** for instance (3)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)

#### [Load bulk data](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=0)** - [Instructor] Manually entering data into a [MySQL](../../Skills/Software%20Development/MySQL.md) table row by row is very slow and inefficient, although it's certainly possible. More frequently data will be inserted by some other piece of software or it'll be loaded from an existing file. Right now, my movie's basic table is empty. It needs some data. Since I have some raw data and a spreadsheet already I'm going to use the MySQL Workbenches tools to automatically load bulk data. I'll right-click on the movie's basic table and click the Table Data Import Wizard. In the next window that shows up I'll browse for my data file which is in CSV format, and then click Next. On the next screen you can choose which table the data should be inserted into or you can opt to let the wizard create a new table. I don't recommend this second option, since the tools for creating a new table in the wizard aren't very robust. I'll just use my existing movie's basic table and then click Next. On the next screen, the wizard wants to know which column in the source data should go into which column in the table. In this case, since the source and destination columns have the same name, it's correctly sorted them all out. But if you need to make some adjustments you can just use the dropdown menus. Click Next and Next to run the import and finish the wizard. It looks like the wizard finished successfully. I'll execute this query and there's the data in the movies basic table. There's another way to load bulk data in the MySQL Workbench loading files containing [SQL](../../Skills/Data%20Science/SQL.md) statements.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=94)** This essentially executes all the commands that the files contain in order extremely rapidly. To demonstrate I'm going to drop the Sakila example database I'm going to click Drop schema and there's no do-overs with dropping, so I'll just review to make sure I'm doing what I expect here. Drop database Sakila and click Execute. Now I'm going to reload the database from raw SQL files. I've downloaded Sakila-data SQL and Sakila-schema SQL as well as the Sakila database model from the MySQL Documentation site. The file named Schema contains the commands that will create the structure of the database, all of its tables and views and such. And the data file contains all the data that will fill in the schema, all formatted as insert statements. To load these files, I'll click the Server menu in the workbench and then click Data import, and then I'll choose the import from self-contained file radio button, and I will select from my downloads folder the Sakila-schema SQL file since that contains the commands, that will create the database and the tables and such. Then, start my import and just like that, it's done. I'm going to refresh and there's the Sakila database with all of its tables. But if I select from these tables, they're all empty. So I'm going to go back over to this Import from disk tab and change the self-contained file
>
> **[3:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=186)** from schema.sql to data.sql and start the import again. It took a little bit longer but it looks like it was successful. So I will click this button to run some queries. Gets the category and film, and actor tables and you can see that the data's all present. If you're comfortable writing external code or changing the DBMS configuration, there are many other ways of loading bulk data beyond what I've showed in this video. Probably the most common is writing other software that interacts with a DBMS and inserts data programmatically but there are other SQL solutions such as the LOAD DATA statement. Regardless, it's easy to load bulk data in MySQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [MySQL](../../Skills/Software%20Development/MySQL.md) (5)
> **Env Vars:** sql (6), dbms (2), csv (1), load (1), data (1)
> **CLI Commands:** mysql (5), make (2)
> **File Paths:** schema.sql (1), data.sql (1)
> **UI Navigation:** right-click (1), dropdown (1)
> **Analogies:** just like (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a normalized movies table](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=0)** - [Instructor] In this challenge, your goal is to create a new set of tables that will contain a normalized version of the movie's dataset. Compared to the movie's basic table, these normalized tables will contain very similar data, but they've been restructured to reduce data redundancy and increase [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). Instead of one table, there'll be five tables, each with a primary key and potentially one or more foreign keys. Using the workbench and the movies_full data set in the exercise files, create the tables and their relationships and then populate all the tables using the Import Wizard in the workbench. Here's some hints. First of all, notice that all the tables have an ID column which may be referenced in a different table. This is the primary key/foreign key relationship. Second, if foreign key constraints exist, you can only add data that refers to a specific foreign key ID if that ID already exists in the table being referred to. In other words, the order you import data matters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Code Identifiers:** movies_full (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a normalized movies table](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=0)** - [Instructor] This is a tough challenge and there are a number of ways to go about solving it. I'm going to illustrate one way, although if you solved it in some other fashion, that's great. If you had trouble, make sure that you follow along and end up with a similar data set to what I do. I'm going to be using this data later in the course. The first step to solve this challenge is to create the tables necessary to contain the five sets of data in the movies full exercise files. You can start in any order, but it looks like the titles file has the most relationship with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the data, so I'll start with that one. So I'm going to create table titles. I'm going to create table titles. In the first column, it's going to be the ID column, going to be an integer. It's going to be my primary key, which means I want it not null and auto increment as well. Now I'm going to create a very similar column for all five tables. So I'm just going to copy that. And then I'm going to create title as a varchar 100, create the genre ID column. This is going to be a foreign key that refers to the ID column of the genre table. So that's going to be an integer. Release year is also going to be an integer, but years are usually four digits long, so I can make that a smallint. The director ID and studio ID are both going to be integers. Those are also going to be foreign keys to their respective tables. So I'm going to execute that. Looks good. Refresh.
>
> **[1:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=92)** And there's my titles table. The next table I'm going to create is genre. This is also going to have an ID column. The only other column I need is the genre, which is going to be a varchar 25. Refresh. Looks good. Next table is director. Starting with the ID column and ending with the director name as a varchar 40. Looks good there and there, alright. Next I'm going to create table studio, starting with the ID column and the studio name as a varchar 30 and the city as a varchar 20.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=145)** Refresh. Looks good. Last but not least, the critic rating table. Starting with the ID column and the titles ID, this is going to be a foreign key to the titles table, and the critics rating as a decimal. The precision of two and a scale of one. Looks good. Now that I've created all five tables, I'm going to alter the titles table and the critic rating table to add the foreign key constraints. Now, I could have added these when the tables were created, but just in interest of making a good example, I'm going to use the alter table syntax instead. So I'm going to start with alter table titles and add the constraint genre ID FK, or genre ID foreign key, 'cause this is going to be a foreign key on the genre ID column in the titles table that refers to the genre table and its ID column. I'm going to copy this 'cause I need to add two more foreign keys. Next one is the director ID foreign key. It's going to be on the director ID column and refer to the director table. Finally, the studio ID foreign key on the studio ID column referring to the studio table. And now with a semicolon.
>
> **[4:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=242)** Looks good. Let's just check the table inspector. And there's my foreign keys. I also need to do something very similar to the critic rating table. Going to add a constraint. The titles ID foreign key on the titles ID column referring to the titles table. Check the foreign key tab. Looking good. Now if I refresh this, you can see that the ID column here is listed as a foreign key in the critic rating table. Finally, I'm going to load the data into each table using the import wizard. Now, there's one important thing to note about importing data into a table structure with foreign keys. The data that the foreign key refers to must already exist before you can add data to a foreign key column. So for instance, in my critic rating table, there's a foreign key that refers to the ID column in the titles table. If the titles table is empty, then any attempt to add row to the critic rating table will fail with a foreign key constraint error. Essentially, the primary key value that is supposed to match to the foreign key doesn't exist yet, and that's not allowed. So in this specific case, I need to import data into the director, genre, and studio tables first, and then the titles table, which has foreign keys that refer to those tables, and then finally to the critic rating table. So start with director,
>
> **[5:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=336)** import the data from the movies full data set. And this should be fairly straightforward. All of the column names match. So I'll just click next a bunch of times. Looks promising. I'll just go ahead and select that. Looking good. Same thing to the genre ID. Next, next. Columns look good. Next, next, and finish. There's that. Then I will import into the studio table, select the studio dataset. Columns look good. Select the data just to check and that looks good. So now I can do the titles table. Import from the titles CSV, check the columns. Looks good. All right, that looks promising. Very last thing is to import the critic rating data.
>
> **[6:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=412)** All right, that data's imported. We didn't get any foreign key constraint errors. That's a good sign. So now that we have five tables with their proper foreign key constraints and all the data's loaded, the challenge is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** refers to (2), is a  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Env Vars:** csv (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)


### 4. Selecting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [The basics of SELECT](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=0)** - [Narrator] The most basic way to interact with data in a [MySQL](../../Skills/Software%20Development/MySQL.md) database is to select it. Select statements are often called queries and they display data from tables, according to the filters and constraints listed in the query. When you're interacting with a database, it's fairly common that select statements will be the ones that you'll have to manually write most often. You only have to create or alter tables occasionally, and often changing or deleting data will be done programmatically. But there's a lot of value in knowing the syntax for select statement specifically. The most basic select query is available right from the Workbench GUI. If you mouse over a table and click the grid icon, it will select every column from a table. And just like with create table and alter table, the white space and capitalization doesn't matter. So if I put that on a separate line, it gives the same result. The star means that every column is going to be selected but I can replace the star with just a couple of columns, and if I run this query, it'll display just those couple of columns. And these columns don't even have to be in the same order that they are in the table structure. So if I do genre first, then genre will will be displayed first in the output. And that's it for the basics of select.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **CLI Commands:** mysql (1)
> **Env Vars:** gui (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Refine SELECT queries](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=0)** - [Presenter] Being able to precisely select columns in a table is an important step when using [MySQL](../../Skills/Software%20Development/MySQL.md). In this video, I'll discuss several ways of modifying your basic select queries using the keywords "limit", "distinct", "as", and "order by". Using Limit is a way to test the output of queries or to examine the contents of tables without loading their entire contents. All the datasets you'll be working with in this course are orders of magnitude too small for "limit" to be really necessary, but it's best practice to use "limit" when selecting from a table unless you need to select all the data in that table. And in fact, the MySQL Workbench will automatically limit to 1,000 rows unless that's specifically overridden. To use "limit", add it to the end of a select statement. So if I "LIMIT 5", that will select just the first five rows. This is equivalent to "LIMIT 0, 5". The first parameter is the row to start on, row zero in this case, and the second parameter is the number of rows to select. So if I were to "LIMIT 5, 5", then that would start on the fifth row with ID value 6 and select five rows. If I wanted to start on the fifth row and then select the entire [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the dataset, then I can just make this second parameter an arbitrarily large value. The "limit" keyword is a MySQL specific break from the [SQL](../../Skills/Data%20Science/SQL.md) standard, and there are various other ways of implementing this same functionality in different SQL DBMS's. "Distinct" makes a select statement
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=95)** return only unique values no matter how many times those values occur in the dataset. So if I "SELECT DISTINCT genre FROM movies_basic", then it'll return only five rows because there are only five unique values in the genre column throughout the whole table. And if I add a second column to the query, if I just "SELECT DISTINCT genre" and "studio", then it'll actually select 26 rows. And you can see that each genre, each studio name is shown more than once, but each genre studio combination is only shown once. If I were to select every column using "SELECT *" for "movies_basic", then this actually just selects the entire dataset because the ID column is always unique. Hence "distinct" is best used with a limited selection of columns. The "as" keyword changes the appearance of column headings and the output of a select query. This is purely cosmetic. It doesn't actually change the selected data, just the way that the data looks. So for instance, if I "SELECT title, genre," and "release_year FROM movies_basic", then you can see that there's no capitalization in the title. Release year is an underscore. It's just the same names from the actual table structure, and I can pretty it up by using "as". So I can "SELECT title AS", and then in quotes what I actually want the column heading to be, in this case "Title" with a capital T and "Genre" with a capital G,
>
> **[3:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=188)** and "release_year" with capitals and a space instead of an underscore. And the column values are more attractive when I execute that query. This is especially helpful if you have a function in the select statement that would be enormous as a column heading. Finally, you can change the order that rows are returned in a query. Toward the end of a query, but before "limit" if you're using it, you can add "order by" and then specify a column and then specify an order, ascending or descending like so. If I "SELECT * FROM movies_basic" and "ORDER BY genre" ascending, it will sort by the genre in alphabetical order. If I want to display the genre in reverse alphabetical order, I can instead order by genre descending. If you want to start by multiple columns, you can list them after "order by", and MySQL will sort the results in sequence. So if I order by genre and release year, then the output is sorted first by adventure in alphabetical order, and then by release year from low to high. Notice I didn't explicitly state ascending or descending at the end of the "order by" clause. In this case, MySQL will just default to ascending. Using these tools, you can craft a wide variety of select statements and then tweak them to suit your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** select (6), limit (3), sql (2), distinct (2), dbms (1)
> **SQL:** select (6), order by (1)
> **CLI Commands:** mysql (5), make (1)
> **Code Identifiers:** movies_basic (4), release_year (2)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)

#### [Filter results with WHERE](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=0)** - [Instructor] Frequently, the purpose of writing select statements in a production environment is to help understand the data in a database. To that end, [SQL](../../Skills/Data%20Science/SQL.md) provides a powerful way to filter the results of a query using the where keyword. Where clause is added after the from clause and includes one or more logical expressions. A row is only returned if that expression evaluates true. So for example, with this query select star from movies basic, I can add where ID equals one, and that will return one row where the value of the ID column is equal to one. [MySQL](../../Skills/Software%20Development/MySQL.md) has a number of different operators you can use in these expressions. So for example, I can change this to where ID is greater than 10. That will return 40 rows, starting with a row where the ID value is 11, or I can change this to where ID is greater than or equal to 10. This time it returns 41 rows starting with row number 10. There's a special type of comparison in MySQL called like. Like is similar to equal, so if I start with the expression where genre like children, I'm putting this in quotes because it's a string. You can see this returns only rows where the value of the genre column is children. But the real power of like is that it lets you use wild card characters, which are special characters that are placeholders for other groups of characters. So for example, if I wanted to match all studios that begin with the string studio, I can use the percent wild card, or studio like, studio percent.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=98)** And if I run this query, you can see this returns rows where the studio is Studio 60. And this is only going to match strings that begin with studio. Essentially it's saying where studio is like studio and then any number of characters. You can also add a wild card in front, which just says the string must contain studio. And these wild cards can match any number of characters including zero characters. The underscore wild card works similarly, but it matches exactly one character. So to find all movies that came out of the 1980s, I can use this query where release year, like 198_, and this returns rows where the movie came out in the 1980s. Now notice that release year in this table is not a string, it's an integer. But I've just used a string like comparison, which allows me to use a wild card. Like is a lot slower than equals, even though it is more powerful. So a general rule of thumb is to use equals unless you need to use a wild card. In that case, you can use like. With large tables, the difference in query time can be significant. You can also use a negative to find every row that does not match the expression. So I could change this query to where release year not like 198_. And this will find films that did not come out in the 1980s. This is equivalent to the not equals operator. MySQL statements are not limited to only one expression.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=192)** Multiple expressions can be linked together with and or or to make a more complex expression that is evaluated completely for every row. So for example, I can select rows where genre is like drama, and critic rating is greater than six. This is only going to return five rows, because the value of the genre column has to equal drama and the critic rating also has to be greater than six. But if I change this and to or, then this returns 30 rows. This is going to return every row where the critic rating is greater than six or genre is like drama. So the only critic ratings that are lower than six, so the only rows where the critic rating is lower than six will be dramas. And you can see this most clearly if I order by critic rating ascending. So everything that's lower than six is a drama. Finally, your expression can include the results of functions. Functions in MySQL is a broad topic that deserves a course on its own, but I'll show you a very common example. Say you wanted to find every movie title that was longer than 20 characters. You can find the length of a value by using the length function. So if I select star from movie's basic where length title is greater than 20, this is only going to find the longest titles in the table. The number of characters in the title has to be more than 20 characters.
>
> **[4:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=285)** With these examples, you are now ready to filter your select statements using where, and not just select statements. Many types of statements in MySQL use the same where syntax and since some of them alter your data permanently, it's a good idea to get comfortable using where with select.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** find (6), mysql (5), make (1)
> **Analogies:** for example (4), similar to (1)
> **Definitions:** is a  (3)
> **Env Vars:** sql (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### [Display data with CASE](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=0)** - [Instructor] There are times when you want a query to return data that's not actually present in your table, but based on the data that's in your table. Suppose you're using the movies_basic table and you want a query to simply return whether a movie was well reviewed or not, not the actual score. That's possible using if and case statements. Both if and case will return values based on expression. These expressions use the same syntax as where clauses. They're evaluated to either true or false. So for the example above, I want a list of movie titles and I want to know whether they're good or bad films based on the critic rating. So I'll replace the star in the column list with title and critic_rating. So now I want to replace those numbers with good or bad. So I'll remove critic rating and add if and then open parenthesis. This is the expression that I want to evaluate. So critic_rating greater than six, then a comma. This is what's going to happen if it evaluates true. It'll display the string good. And then this is what'll happen if that expression evaluates to false. It'll display the string bad. And I run this query and my numerical values were replaced with good and bad. So if critic rating was greater than six, then it's good. If critic rating was not greater than six, it was bad. This is also a perfect example of when to use AS to prettify your queries. Notice that the entire if expression got added as the column header. So I'll just change that to AS score.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=95)** Run it again. And you can see that that looks a lot better. Just for good measure, I'll also add AS Title with a capital T. Now case works similarly to if, but instead of having only one expression, you can have as many as you would like and they're evaluated one by one until one of them evaluates to true and then that result is applied to the row. So I can replace this if statement with case and this begins the case and then I start my list of expressions. So when critic rating is less than five, then display bad. When critic rating is lower than eight, then display decent. Finally, if neither of those are true, display good. Then I can end my case statement and I'll still display that AS score, so this whole business doesn't end up as the column header. When I run that, you can see that I now have some decents scattered among the goods and bads. What happened here was these wins were evaluated one at a time, and if none of them evaluated true, then the else was applied. So say the critic rating was seven, so first my [SQL](../../Skills/Data%20Science/SQL.md) would evaluate when critic rating is lower than five. Well, seven is not lower than five, so that's false. Go to the next row. When critic rating is lower than eight, well that's true. Seven is lower than eight. So then it would print decent and then go to the next row. It would skip evaluating any other wins or the else at the end there.
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=189)** Using if and case to display data in meaningful ways is a valuable technique.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** critic_rating (2), movies_basic (1)
> **UI Navigation:** go to (2)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Filter movies by score](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=0)** - [Narrator] In this challenge, you'll need to design a query that will display data from the movie's basic table in a specific format. Pay close attention to the capitalization and punctuation. The first column should be title. The second column released should say 20th century for any film released before the year 2000, or 21st century for any movie that came out in the year 2000 or later. The third column should be director. And then the fourth column, reviews, should convert the critic rating numerical value to text as follows. If the critic rating is less than or equal to five, the query should say bad, if it's 5.1 to seven, decent, if it's 7.1 to 8.9, good, and if it's greater than or equal to nine, the query should say amazing. Sort the results in reverse alphabetical order by title.

> [!info]- Semantic Content
>
> **Versions:** 5.1 (1), 7.1 (1), 8.9 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Filter movies by score](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=6)** - [Instructor] So this challenge is going to be a select statement. So we'll start with select, and then the first column is title, but I need to reformat it to display as title with a capital T and a colon on the end. The next column is released, and that's going to depend on what the release year is. So I'll say if the release year is greater than 1999, or for that matter, I could say greater than or equal to 2000, then display 21st century, otherwise display 20th century, and I want that to be as released with a colon. Next column is director, just with a capital and a colon.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=59)** And then the fourth and final column is the conversion from the critic rating numerical value to a text value. And because there's multiple criteria, I need to use case. So I'll start with case, and the first criteria is when critic rating is less than or equal to five, then display bad. When the critic rating is greater than five, and also less than or equal to seven, then display decent.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=93)** When the critic rating is greater than seven, but it's less than nine, then display good. And otherwise display amazing. Then I'll end the case statement with as views. And of course, all this white space is optional, but it makes the case statement much easier to read. All this is going to be from movies_basic. And finally, I need to order by title in reverse alphabetical order, so descending. Run that query. There's my four columns. All the column headers look nice. Title is in reverse alphabetical order, release date is in the 20th or 21st century, and reviews are bad, decent, good, or amazing. So this challenge is complete.

> [!info]- Semantic Content
>
> **Code Identifiers:** movies_basic (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)


### 5. Updating and Deleting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Add data to tables with INSERT](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=0)** - [Narrator] Although it's common to load bulk data into a table when it's first created, most data is added to tables, line by line using insert statements. In this video, I'll show how to write them by hand but most often, they're generated automatically by other computer programs and added into the table autonomously. In fact, that's what the load bulk data wizard in the [MySQL](../../Skills/Software%20Development/MySQL.md) Workbench does. It generates insert statements from imported data files. So I've got my [SQL](../../Skills/Data%20Science/SQL.md) tab here and I'll start this statement with insert into movies basic. And then I want to list the columns that I want to add data to. If I was going to add data to all columns, I could omit this but I don't want to add any data to the ID column because I'll let the auto increment take care of that. And if I were to omit any other columns, then they would just be added with their default values. So I want to add to the columns title, genre, release year, director, studio and critic rating
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=62)** and then I'll use the keyword values, or you can use value, they're synonymous. Then I need to enter the actual values, separated by commas and with the text enclosed in quotes. So I'll add "Challenge of the Emperor," an adventure film that came out in 2010 , directed by Miley Watson with a critic rating of 7.2. End that the semicolon and execute. Oh, that didn't work. Looks like I forgot something. Notice how I listed six columns but only provided five values. Rather than adding the wrong data, my SQL throws an error because the number of values didn't match. I will fix this by adding the studio name. I'll execute it again and that successfully adds one row to the table. If I select all the data from the table and scroll down, there's the 51st row, "Challenge of the Emperor." Insert statements are most commonly used to add just a single row since they're most commonly generated by software. But if you want to manually enter more than one row, you can do so with a single insert statement. All you have to do is add another set of values for the provided columns and you can do this as many times as you like. I'm just going to add two more movies. First is "Dishonor of Power," and then a comma, second, "Night of the Maze." And I'll end the statement with a semicolon and click Execute. That added two more rows. So if I go back to this movie's basic tab
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=155)** and execute the select statement again, scroll all the way down and there's my two additional movies. Hopefully you will never have to manually add data to tables row by row but now you understand how the process works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** sql (2)
> **CLI Commands:** mysql (1)
> **Versions:** 7.2 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Update existing rows with UPDATE](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=0)** - [Tutor] Once data is loaded into a [MySQL](../../Skills/Software%20Development/MySQL.md) table it's not set in stone. Using an update statement, you can change the values in any row or in many rows at once. If use update, you'll choose a table and the columns whose values you want to change and you'll also include a WHERE clause, just like in a select query to filter the rows you want to update. So I've got an [SQL](../../Skills/Data%20Science/SQL.md) tab here. I'm going to start writing my update statement for the movie's basic table. Suppose director Miley Watson changed their name and is now Mike Watson. I want to replace every instance of Miley with Mike throughout the entire table. So I'll start with the update keyword and then the name of the table, Movies_basic, and then I'll list the column I want to change and the new value I want that column to have. So in this case, I'm going to set director = Mike Watson. Now I could add a semicolon right here, run the query, and every single director would now be named Mike Watson. And there's no way to undo that. Any statement that changes or removes data, as always is best written very carefully. And I'll definitely want to add some criteria, so this statement doesn't affect every row on the table. Update uses the same WHERE syntax as select queries. And so for that reason, it's a good idea to make a trial run of your update statements using a select query that uses the same WHERE clause. So in that way, you'll know if you have a typo or logical error that means more data will get changed than you expect. So I'm going to do that now. I've opened a new SQL tab. I'm going to select * FROM movies_basic WHERE director = Miley Watson. I'll execute that query and that returns three titles.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=98)** And I can see at a glance at all three have Miley Watson as the director name. So my WHERE clause looks good. I'm just going to copy this whole thing into my update statement. And now I know it's only going to update those three rows. So I'm going to execute this statement, and it didn't work. Actually, MySQL here is fine but the workbench by default does not allow update or delete statements where the WHERE clause does not contain a key value. Since the ID column is our primary key and I didn't include that, I triggered the error. Whether this behavior is desirable or not will depend on your circumstances. If you can use a key in your update statement then you should ideally to reduce the possibility of changing data incorrectly. In this case, I know that this query is going to work. I already checked the WHERE clause, so I'm going to disable that functionality. I'm going to go to Edit and then Preferences, SQL Editor, scroll to the bottom, and I'm going to uncheck Safe Updates and click Okay. And I'm going to close my connection to the local instance, and reopen. And now I should be able to run this update statement execute, and I can see in the output pane that three rows were affected. That's a good sign. So I'm going to go back to my query here and rerun it. And it should select zero rows, which it did. That's a good sign. So I'm going to replace Miley with Mike. And that returns those same three films from before. Used cautiously, update statements are the best way to alter data in a table. Double check your WHERE expressions
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=189)** and you should have no trouble with accidental data loss.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (2)
> **Env Vars:** where (8), sql (3)
> **SQL:** where (8)
> **CLI Commands:** mysql (2), make (1)
> **Code Identifiers:** movies_basic (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### [Remove data with DELETE](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=0)** - [Presenter] Delete statements are used to remove rows from a [MySQL](../../Skills/Software%20Development/MySQL.md) table. Used carefully, they can actually remove all data from a table, so the best way to use a delete statement is to carefully identify the data you want to remove. So tactically, delete statements are very simple. I've got a new [SQL](../../Skills/Data%20Science/SQL.md) tab here. I'm going to type delete from movies basic, and I'm not going to add a semicolon just yet, because if I ran this, it would remove all the data from my table, and I definitely don't want that. So instead, I'm going to open a new SQL tab, and I'm going to work on the select query that I'll use to isolate the data that I want to delete. Let's say I no longer care about any movies from the era of silent films, and I want to delete those from the movie's basic database. So "The Jazz Singer" was the first of the feature length talkies, and it came out in 1927, so I'll use that as the date to filter on the release year column, so I'll select star from movies basic, where release year is lower than 1927.
>
> **[1:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=63)** Execute this, it returns 14 rows, and you can see the date in the release year is all lower than 1927, as expected. So I'm going to copy this where clause into my delete statement and add a semicolon, and now I will run this statement, and this should remove those same 14 rows. I can see in the output pane, it did remove 14 rows. That's a good sign, and I will run my select query again, and this time, instead of returning 14 rows, it returns zero, and if I select everything from movies basic, getting rid of the where clause, then it looks like all the release years are, in fact, later than 1927. We can see that most clearly if we order by release year.
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=121)** Some quick notes about delete, if you have an auto increment column like I do with my ID column here, numbers that are removed are not reused. So I just deleted rows with ID one through 14. It now starts at ID 15, but the next row that's added won't be row one again or row 14, it'll be row 54. Frequently, this means that auto increment columns will start to look messy in tables that are in production for a long time, but this functionality is important for maintaining [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). If you need more control over the exact value in an auto increment column, then you can add it manually rather than auto increment it, or you can also change the next auto increment value by using alter table movies basic auto increment equals one. So this will change it so the next row that I add will have a one as the value in the ID column. I'm going to change this back to 54 where it should be. Now, if you want to remove all data from a table, it's actually faster to use a truncate statement instead of using a delete statement with no where clause. The end result is an empty table. I'm not going to actually run that, but just to see what it looks like, if I right click on movies basic, and click on truncate table and review SQL, this is going to just truncate the table movies basic in the movies database. If your table is very large, truncate is a lot faster than delete,
>
> **[3:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=214)** because it actually drops and recreates the table, rather than deleting data row by row. However, truncate doesn't reveal any information about the number of rows that were deleted. Unlike the delete statement, it will reset the auto increment counter, so if I were to delete all the data, the next value in my ID column in movies basic would be one. Now that you know how to delete data from a table, your understanding of CRUD operations in MySQL is complete. You now know enough to get started with complete control over your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Env Vars:** sql (3), crud (1)
> **CLI Commands:** mysql (2)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [presenter] (1)

#### [Challenge: Clean up the movies](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=0)** - [Instructor] In this challenge you'll pretend that you have taken over a movie database from someone who knows far, far less about films than you do. Let's correct some of their mistakes. First, they've ignored the entire corpus of Rence Pera's filmography. Add these films to the movie's basic table, "Run for the Forest," "Luck of the Night," and "Invader Glory." Second, they didn't know that Falsted Group doesn't produce sci-fi films. Falsted prefers the more inclusive term SF instead. So update the table to reflect this. Finally, they didn't know that all of Garry Scott's work for Lionel Brownstone has been lost. Remove it from the table since it's no longer available.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Clean up the movies](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=0)** (soft music) - [Instructor] To solve this challenge, I need to do three things. I need to insert into the table, I need to update the table and I need to delete from the table. So for the first step, I'm going to insert the Rence Pera filmography. And you can do this as one big insert statement or three small ones. I'm just going to do it as one big one. So insert into movies, basic, and I don't want to insert into my ID columns, so I'm just going to list out the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the columns, let the auto increment handle that for me. The values. And then I'm just going to paste in the filmography. So Run For The Forest, Luck of the Night, and Invader Glory execute this and that added three rows. So I'm going to select everything from the movie's basic table and scroll all the way down to the bottom. And there are Rence Pera's three films. So that's one step down. Next I am going to update the movie's basic table.
>
> **[1:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=76)** And I'm going to set the genre equal to SF. And I want to do this where the genre is sci-fi and the studio is Falstead Group. So as per best practices, I'm going to open a new [SQL](../../Skills/Data%20Science/SQL.md) tab and I'm going to select from movies, basic, where, genre equals sci-fi, and studio equals Falstead Group. You could also do if you wanted, where studio is like Falstead with the wild card at the end, gives you the same results. And so this returned three rows, all of which have a genre of sci-fi and the studio is Falstead Group. So that's looks good. I'm just going to copy this where clause into my update statement and write. And that updated three rows. So let's rerun this query, return zero rows as expected. Just to double check we'll just look to see where the genre equals SF and it's three films from Falstead Group as expected. So that's another step down. Step three is to delete from movies basic where the director is Gary Scott, and the studio is Lionel Brownstone. So once again new SQL tab, basic where, director equals Gary Scott, and studio equals Lionel Brownstone.
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=178)** So I'll run this query. Looks like there's two films that Gary Scott did for Lionel Brownstone. So I'm going to copy this where clause into my delete statement, semicolon and run. And that affected two rows, which looks good. Back here again. Oh, this gave me an error. So when you have a portion of a query or a portion of the text in the query window highlighted and you click execute it will only execute the highlighted portion. So I'll just remove the highlight and click execute again. And this returned zero rows. Just to double verify, we'll select the rest of Gary Scott's stuff, make sure it didn't delete too much. And there's his three films for other studios. So that's step three complete. And the challenge complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (2)
> **Non-Speech:** (soft music) (1), (music ends) (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 6. Joining Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [The basics of JOIN](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=0)** - [Instructor] In a real life database it's very uncommon for all the data needed for a query to be stored in one table. In fact, it's often best if data is spread across multiple tables for reasons of database normalization. However, just because the data is spread across multiple tables doesn't mean that multiple queries are needed to access it. Using a single SELECT query, you can use the JOIN keyword to pull data from multiple tables matching related data across the different tables, often utilizing primary key and foreign key relationships. [MySQL](../../Skills/Software%20Development/MySQL.md) supports multiple types of joins. The most basic kind of join is called an inner join, or sometimes a simple join. If you imagine the data in one table as a set and the data in a second table as a set, then pick a type of value, like a name or an ID number, and an inner join will return rows where that same data appears in both tables. The other major type of join is the outer join which selects all of the data from one table, and only matching data from a second table. Any data from the first table which does not have matching data in the second table will show a null value where that matching data would otherwise be. In an inner join, these roads would not appear in the results at all. Outer joins can be right outer joins or left outer joins. These function almost identically, differing only in which table of the two being joined returns every row, and which only returns matching rows. Right outer joins return all rows from the second of two tables in the join clause and left outer joins from the first. Most join clauses require a condition that explicitly states which columns will be matched across the two tables.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=95)** For instance, an ID column in one table might match that same ID in a different table. However, if an inner join is used without a condition, it will match every row from the first table with every row from the second, creating an enormous dataset. This is an uncommon use of join but it's useful in some cases if one of the two data sets being joined is very small or very simple. In MySQL, join, inner join, and cross join are all synonyms and can be used interchangeably. This is different from normal [SQL](../../Skills/Data%20Science/SQL.md) where inner joins require a condition and cross joins are used without a condition to match every row with every row in the other table. With this brief explanation out of the way, let's get started joining some tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** select (1), join (1), sql (1)
> **CLI Commands:** mysql (2)
> **SQL:** select (1), join (1)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** imagine (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Match fields with INNER JOIN](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=0)** - [Instructor] Inner joins are the most common type of join in [MySQL](../../Skills/Software%20Development/MySQL.md). And if you use a join clause without specifying otherwise, it's assumed to be an inner join. For the purposes of joining data, I've split my movie's basic table into the movies full data set which includes five separate tables. Now suppose I want to match the title of each film from the titles table to the city it was filmed in. The city column in the studio table. So I need to join these two tables on their matching data. And I can do that because in the titles table, there's a studio ID column that's a foreign key that refers to the primary key, the ID column of the studio table. So if I open a new [SQL](../../Skills/Data%20Science/SQL.md) tab, I can select "titles.title" and here I am making it explicit which table the column comes from. This is only technically required if the two tables that you're joining have columns that have the same name but it's always best practice to explicitly label the table a column comes from when you're joining multiple tables. So I'll SELECT "titles.title" and "studio.city" FROM titles and with an inner join, it actually doesn't matter whether I'm selecting from titles, and then I join the studio table or select from studio and join the titles table. My preference is usually to select the larger table or the table that contains the foreign key and then join the table that contains the primary key. But really it's just personal preference.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=95)** Now join, INNER JOIN the Table Studio. As my condition, I'll join ON titles.studio_id equals studio.id, and this is where I'm telling MySQL what data is the same in both tables. And to make it more attractive, I'll ORDER BY titles.title. When I run the query, the results show the title and the city of that title studio linked by the ID of the studio. The "ON" clause is the most important part of a joint query because that's how you tell MySQL what data is the same in both tables. And this is why using the foreign key feature of MySQL can be very important. It enforces the integrity of this link between the two tables. If there was simply a list of values in a table that was not programmatically tied to the primary key of another table, then inconsistencies could emerge if you weren't very careful to keep the data in sync. That said, it's not required that you join on a primary key foreign key relationship, but it is very useful because you know that the data is going to be kept consistent. And a mistake or an irregularity in this part of the query might return invalid data that looks completely correct. So for instance, suppose I accidentally typed "director_id" instead of "studio_id" in this condition and around the query. So first glance, this looks like it could be valid data, but if you look a little bit closer, this only returned 20 rows instead of 50, and the cities are totally different. That's why it's so important to be very careful in writing your joint condition.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=192)** Also, it's possible to use multiple joints with one query. If I want to link a director to the critic score for their movies, I need to select the director name from the director table, the title from the titles table. And in the critics rating from the critic rating table. Notice the critic rating table has a foreign key that refers to the title_id. So in a new query, I will "SELECT director.dir_name, titles.title" and "critic_rating.critics_rating" "FROM titles". And when you join multiple tables, you can see that the table that you're originally joining from becomes less and less meaningful. I'm just doing it this way to stay consistent. And then I will JOIN the director table on "titles.director_id" equals "director.id". And then I can just list my second joint. I'm going to join the critic rating table and I'm just going to omit the inner join because it's implicit. On the "critic_rating.titles_id equals titles.id".
>
> **[4:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=273)** And it's worth noting that in all these conditions, this equality is reversible. So titles ID equals critic_rating.titles_id would be equally valid. And I'll order by "director.dir_name". And so this returns three columns, the director name, the title, and the critics rating as expected. And it's important to note that even if a table is required to join data, you don't have to select any columns from it. So for instance, even though I'm selecting from titles, I don't need a column from the titles table in the end results. I'm still linking the director name to the critic rating. This data's not quite as meaningful but it is possible to do. Joining tables in queries can be challenging to understand but it's an essential skill for using MySQL in real life environments. Now you can get started with more complex queries in MySQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** critic_rating (3), studio_id (2), director_id (2), dir_name (2), titles_id (2)
> **CLI Commands:** mysql (6), make (1)
> **Env Vars:** select (2), join (2), sql (1), inner (1), order (1)
> **SQL:** select (2), inner join (1), order by (1), join (1)
> **UI Navigation:** select the (2)
> **Analogies:** for instance (2)
> **Definitions:** refers to (1)

#### [Match all fields with outer joins](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=0)** - [Instructor] An outer join is used to join two tables and select all data from one table and only matching data from a second table. This is useful when you want to either explicitly see what data is missing in a table or the data in one of the tables is in some way optional to the complete set of data in the other. So currently, my movie's database has no missing data. Every row in every table has a match in another table, but real life is rarely so simple. So to demonstrate the value of outer joints, I'm going to create a new table that contains the filename and resolution of the poster art for some of the films in the titles table. So I'll create table posters with my ID column, the usual flags, and then I will create a titles_id column that I'll use as a primary key to refer to the titles table, the poster filename as a VARCHAR30, and a resolution column as a VARCHAR10. And I'm going to add that foreign key constraint as posters_titles_id_fk which is a foreign key on the titles_id column that refers to the ID column of the titles table. I've got my column there and run that, refresh, and there is my posters table. Note data in it currently, so I'm going to right-click on the table name
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=93)** and run the import wizard on the posters dataset. Just add that to the table. The column names look good so we'll just click next a few times and then finish and reselect the posters table. And there's the filename and resolution for my posters. Now notice there's only 23 rows in this table and there's 50 rows in the titles table. So there's going to be some titles without a poster. So to find those, I'm going to create a query that's going to join the title of a film, its director, and the poster filename and resolution if it's available. So I'm going to select titles.title, director.director_name, and posters.filename and posters.resolution from titles. And I'm going to inner join on director because I only want to return rows where there are both titles and a director for the film. And I'll do that on titles.director_id equals director.id. I'm going to do a left outer join on the posters table because I still want to return the title and the director even if there's no poster art. And I'm going to do that on posters.titles_id equals titles.id, and I'm going to order by titles.title. When I run this query, you can see that every row has a title and a director name as intended, but not all of them have filenames or resolutions.
>
> **[3:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=186)** All these null values are rows where there is no matching data in the posters table for that title. And if I change the left outer join to an inner join, you can immediately see the difference between the join types. Look how few rows were returned, all because the rows with those null values are not selected in an inner join. So I return only 23 rows, that's the number of rows that were in the posters table. And note that if instead of going back to a left outer join, I do a right outer join and run this query again, then nothing seems to change. And that's because in this specific case, there's no posters without a corresponding title. And in fact, that would be very unusual because of the primary key and foreign key relationship. For that reason, left outer joins are a lot more common than right outer joins. By combining different kinds of joins in [SQL](../../Skills/Data%20Science/SQL.md) statements, you can create powerful and flexible queries for understanding complex datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** titles_id (3), posters_titles_id_fk (1), director_name (1), director_id (1)
> **Env Vars:** varchar30 (1), varchar10 (1), sql (1)
> **Definitions:** is a  (1), refers to (1)
> **CLI Commands:** find (1)
> **UI Navigation:** right-click (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find the best film](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=6)** - [Instructor] In this challenge you'll use inner and outer joins to find information about the best film in the database. The result should include the following columns: the title, the director name, the critic's rating, and the poster file name if it's available. Because I'm only interested in the best film, the query should only return one row.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Find the best film](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=6)** - [Instructor] To solve this challenge, I'm going to start by opening a new [SQL](../../Skills/Data%20Science/SQL.md) tab and selecting the four columns that were called for in the challenge. So I'm going to select titles.title, director.dir_name, critic_rating.critics_rating and posters.filename. I'm going to select from titles. As always, I could select from any of these tables that I'm going to be inner joining, but I like selecting from titles. And I'll join director on titles.director_ID equals director.id. And I will join the critic_rating table on critic_rating.titles_id equals titles.id. Even though I didn't explicitly state it, a join is implied to be an inner join and I know that there's going to be a director and a critic rating for every title so I've chosen to inner join those. But I'm going to outer join, left outer join, in fact, the posters table. I'm going to do that on the id column and titles equals posters.title_id. And because I want to select the best film that will be the film with the highest critics rating. So I'm going to order by critic.rating.critics rating, descending.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=99)** So the highest critics rating will be the first result and I'll limit one. So I only select the best film and I'll execute that. Oops. The titles ID, not title ID. Execute that. And it only returns one row as expected. So the best film in the movie's database is "Hunters of Eternity," directed by Ryan Ross with a critic's rating of 9.8. And it looks like there is no poster file name. That's too bad. So with that, the challenge is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** critic_rating (3), dir_name (1), critics_rating (1), titles_id (1), title_id (1)
> **UI Navigation:** select the (2)
> **Env Vars:** sql (1)
> **Versions:** 9.8 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Level up your MySQL knowledge](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980&t=0)** - [Brad] That concludes our course. If you'd like to dig a little deeper on [MySQL](../../Skills/Software%20Development/MySQL.md) development, be sure to check out MySQL Essential Training by Bill Weinman. After finishing that course, test your knowledge with my other course, Level Up: MySQL. Again, I'm Brad Wheeler and thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (3)
> **CLI Commands:** mysql (3)
> **Speakers:** - [brad] (1)


## Instructor

- [Brad Wheeler](../../Instructors/Database%20Management/Brad%20Wheeler.md)

## Resources

- Exercise files available

## Skills Covered

- MySQL

## Path Context

### In [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)
← [Learning SQL Programming](../Software%20Development/Learning%20SQL%20Programming.md) | **4 of 5** | [Finding New Career Paths with SQL](Finding%20New%20Career%20Paths%20with%20SQL.md) →

## Appears In

- [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)

## Related Courses

_Courses sharing skills:_

- [PHP with MySQL Essential Training- 2 Build a CMS](../Software%20Development/PHP%20with%20MySQL%20Essential%20Training-%202%20Build%20a%20CMS.md) — MySQL
- [PHP with MySQL Essential Training- 1 The Basics](../Software%20Development/PHP%20with%20MySQL%20Essential%20Training-%201%20The%20Basics.md) — MySQL
- [Choosing A Database Postgresql Mysql Mongo And Cloud](../Data%20Science/Choosing%20A%20Database%20Postgresql%20Mysql%20Mongo%20And%20Cloud.md) — MySQL

---

[↑ Back to top](#)