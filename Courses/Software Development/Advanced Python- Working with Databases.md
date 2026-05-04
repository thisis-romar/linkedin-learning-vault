---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-working-with-databases-22307421
url: "https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421"
duration_minutes: 126
duration: 2h 6m
level: Advanced
updated: 5/11/2023
learners: 54591
skills:
  - Databases
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-working-with-databases-4365479"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGxhz_OMvM_mQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683668063867?e=2147483647&amp;v=beta&amp;t=HKWHjSXUO99KgnvNd2yEm5Ys3sbkYjuRVDgY8BXxEWk"
linkedin_topic: Software Development
learning_paths:
  - '[Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)'
  - '[Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)'
prev_courses:
  - '[Unit Testing in Python](Unit%20Testing%20in%20Python.md)'
  - '[Advanced Python- Working With Data](Advanced%20Python-%20Working%20With%20Data.md)'
next_courses:
  - '[Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md)'
  - '[Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md)'
path_nav: '[{"path":"Master Your Python Skills","position":8,"total":11,"prev":"Unit Testing in Python","next":"Python- Working with Predictive Analytics (2019)"},{"path":"Master Python for Data Science","position":3,"total":8,"prev":"Advanced Python- Working With Data","next":"Python Data Structures and Algorithms"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/databases
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Working%20with%20Databases.md)

![Advanced Python: Working with Databases](https://media.licdn.com/dms/image/v2/D560DAQGxhz_OMvM_mQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683668063867?e=2147483647&amp;v=beta&amp;t=HKWHjSXUO99KgnvNd2yEm5Ys3sbkYjuRVDgY8BXxEWk)

# Advanced Python: Working with Databases

> To create functional and useful Python applications, you need a database. Databases allow you to store data from user sessions, track inventory, make recommendations, and more. However, Python is compatible with many options: SQLite, MySQL, and PostgreSQL, among others. Selecting the right database is a skill that advanced developers are expected to master. This course provides an excellent primer

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421) | 2h 6m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Using databases to level up your Python applications](#using-databases-to-level-up-your-python-applications)
- [**1. Introduction to Databases in Python**](#1-introduction-to-databases-in-python) (4 videos)
  - [What is a database?](#what-is-a-database)
  - [Relational databases](#relational-databases)
  - [Non-relational databases](#non-relational-databases)
  - [Python Database API](#python-database-api)
- [**2. Using SQLite in Python**](#2-using-sqlite-in-python) (11 videos)
  - [What is SQLite?](#what-is-sqlite)
  - [Creating an SQLite database](#creating-an-sqlite-database)
  - [Inserting your first record into an SQLite database](#inserting-your-first-record-into-an-sqlite-database)
  - [Adding multiple records at a time to an SQLite database](#adding-multiple-records-at-a-time-to-an-sqlite-database)
  - [Filtering records in an SQLite database](#filtering-records-in-an-sqlite-database)
  - [What is SQLAlchemy?](#what-is-sqlalchemy)
  - [Setting up a virtual environment for SQLAlchemy](#setting-up-a-virtual-environment-for-sqlalchemy)
  - [Executing a SQL query with SQLAlchemy](#executing-a-sql-query-with-sqlalchemy)
  - [Using the SQL expression language to write maintainable code](#using-the-sql-expression-language-to-write-maintainable-code)
  - [Challenge: Create an SQLite database](#challenge-create-an-sqlite-database)
  - [Solution: Create an SQLite database](#solution-create-an-sqlite-database)
- [**3. Using MySQL in Python**](#3-using-mysql-in-python) (13 videos)
  - [What is MySQL?](#what-is-mysql)
  - [Creating a MySQL database](#creating-a-mysql-database)
  - [Building tables in a MySQL database](#building-tables-in-a-mysql-database)
  - [Adding data to a MySQL database](#adding-data-to-a-mysql-database)
  - [Connecting a Python application to a MySQL database](#connecting-a-python-application-to-a-mysql-database)
  - [Encapsulating database operations](#encapsulating-database-operations)
  - [Setting up MySQL in Python using SQLAlchemy](#setting-up-mysql-in-python-using-sqlalchemy)
  - [Building a model with SQLAlchemy ORM](#building-a-model-with-sqlalchemy-orm)
  - [Adding up a foreign key with SQLAlchemy ORM](#adding-up-a-foreign-key-with-sqlalchemy-orm)
  - [Using SQLAlchemy Sessions to transact on a MySQL database](#using-sqlalchemy-sessions-to-transact-on-a-mysql-database)
  - [Retrieving data using SQLAlchemy ORM](#retrieving-data-using-sqlalchemy-orm)
  - [Challenge: Create a MySQL database](#challenge-create-a-mysql-database)
  - [Solution: Create a MySQL database](#solution-create-a-mysql-database)
- [**4. Using PostgreSQL in Python**](#4-using-postgresql-in-python) (11 videos)
  - [What is PostgreSQL?](#what-is-postgresql)
  - [Creating a PostgreSQL database](#creating-a-postgresql-database)
  - [Creating a table in Postgres using Python](#creating-a-table-in-postgres-using-python)
  - [Inserting data into a Postgres database](#inserting-data-into-a-postgres-database)
  - [Interacting with a Postgres database using Python](#interacting-with-a-postgres-database-using-python)
  - [Setting up SQLAlchemy Core to connect to a Postgres database](#setting-up-sqlalchemy-core-to-connect-to-a-postgres-database)
  - [Manipulating with Postgres data using SQLAlchemy Core](#manipulating-with-postgres-data-using-sqlalchemy-core)
  - [Setting up SQLAlchemy ORM to connect to a Postgres database](#setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database)
  - [Manipulating with Postgres data using SQLAlchemy ORM](#manipulating-with-postgres-data-using-sqlalchemy-orm)
  - [Challenge: Create a Postgres database](#challenge-create-a-postgres-database)
  - [Solution: Create a Postgres database](#solution-create-a-postgres-database)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue using databases in Python applications](#continue-using-databases-in-python-applications)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using databases to level up your Python applications](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=0)** - [Instructor] When creating [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programs, you'll likely want to populate data in an application automatically, or save data between user sessions. [Databases](../../Skills/Software%20Development/Databases.md) help you to do this. They provide an organized structure so you can easily access, store, and manage large amounts of data. In this course, we'll look at how to use databases in Python 3, we'll create databases in SQLite, [MySQL](../../Skills/Software%20Development/MySQL.md), and [Postgres](../../Skills/Software%20Development/PostgreSQL.md). Then we'll experiment with those databases using special Python modules that implement the Python database API, as well as an object relational mapping tool called SQLAlchemy. Hi, my name is Kathryn Hodge and I'm a software engineer. Join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, all about working with databases and Python, so you can level up your Python applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (5), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (6), mysql (1)
> **Env Vars:** api (1)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Databases in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a database?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=0)** - [Instructor] First, what is data? Data is information. Think a birthday, someone's name, the color of the sky. It could be information about anyone or anything. Images, computer files, and PDFs are also data. When you have data, you might want a place to store it, and you can store it in a database. A database is an organized collection of data. For example, you could have a database with a collection of student names associated with their current GPAs and class year. The data would be each student name along with the other data associated with that name. In this case, current GPA and class year. You could also have a database with a bunch of your favorite photos. This database would consist of a group of photos where each photo is a piece of data. What data is in the collection is really up to you. So why must the data in a database be organized? Information or data must be organized so it can easily be accessed, managed, and updated. For the favorite photos database, this means if you want to add a new photo your database should be organized in a way that makes it easy to do that. For your student names database, if you want to get a list of students that have a certain GPA, your database should be organized in a way
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=94)** that makes that functionality accessible. [Databases](../../Skills/Software%20Development/Databases.md) support storage of data, as well as manipulation of that data, so it makes sense that they require some kind of data to store as well as a way to organize that data so it's easy to manipulate. To add, remove, and access data in a database, we often use a special query language to talk to the database. You may have heard of relational or non-[Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md), and we'll look at these in upcoming lessons, but they're different types of databases that organize data in different ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Env Vars:** gpa (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Relational databases](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=0)** - [Instructor] One common type of database is a relational database. A relational database consists of a collection of data with predefined relationships between its contents. This means data in a relational database has a relationship with at least one other piece of data in the database. Often, the collection of data is organized into tables with rows and columns. Each column in the table holds a certain type of data and each row has a set of values related to one entity. Let's take a look at an example. This is a depiction of a relational database named School with a single table named Students. The Students table has three columns, Name, GPA, and Class Year. Each row holds information about a given student. For example, in the first case, we have Sally with the GPA of 3.65. Her graduation year is 2027. All of this information is about Sally the student. We often call each row of record in the database because if we added another entry or another record to this database, we would be adding another row, another set of data with the Student Name, GPA, and Class Year. Some of these values could be null, but an entire row or record would still be added. Given that, each row must have a unique identifier
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=98)** that allows us to identify it. This way, we don't confuse two pieces of data. Here, we've added an ID column that gives each student an ID. With the ID column, we won't confuse two students that have the same name or graduate in the same year. Now, this example only had one table, but I could have multiple tables within a database, say a table for offered classes. To relate these tables, I would need a foreign key. A foreign key establishes a relationship between two different tables and connects rows among multiple tables. This allows us to access the data in various different ways without reorganizing the database itself. The main thing to remember with the relational database is that we identify and access data in relation to other pieces of data, whether that's data in the same row or data across tables. In order to create and update a relational database, we'll need to use a relational [Database Management](../../Topics/Database%20Management.md) system or an RDBMS. This is a special type of program that allows us to work with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). You may have heard of them before, but some common examples of management systems are SQLite, [MySQL](../../Skills/Software%20Development/MySQL.md), and [Postgres](../../Skills/Software%20Development/PostgreSQL.md), and we'll be working with all of these in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) in this course.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=192)** Many of these relational database management systems use the [SQL](../../Skills/Data%20Science/SQL.md) language to access the database. SQL stands for Structured Query Language, and it's a language we can use to communicate with our database. Now, I know what you're thinking. A new programming language? No way. I already know Python. Well, I have good news for you. SQL is not a programming language, and in fact, its syntax changes depending on which relational database system you use. Since we'll be working with these [Databases](../../Skills/Software%20Development/Databases.md) in Python, there are a few ways we'll be able to connect to and manipulate our databases, including with SQL, but it can be useful to understand a few basic queries to grasp the bigger picture. The first statement you should know is the SELECT statement. This SELECT statement selects and returns all of the data from the students' table. Students represents a table, not a database, which would've been configured prior to this. Instead of selecting the entire table, we could select a specific column from the table. This statement would return all the student names in the Student table, but not information about each student's class year, or GPA. Perfect. Now we know how to retrieve information from our database.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=284)** What about updating data, filtering data, or inserting data? As we continue through this course, we'll pick up more SQL along the way as we need it, but most SQL statements reference SELECT, column names, or a table in some way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Database Management](../../Topics/Database%20Management.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Env Vars:** sql (6), gpa (4), select (3), rdbms (1)
> **CLI Commands:** python (3), mysql (1)
> **Definitions:** is a  (3), stands for (1)
> **SQL:** select (3)
> **Analogies:** for example (1), picture (1)
> **Versions:** 3.65 (1)
> **Speakers:** - [instructor] (1)

#### [Non-relational databases](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=0)** - [Instructor] Although we will not be working with non-[Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) in this course, it's important to understand what they are and how they differ from relational databases. A non-relational database does not use tables and rows like a relational database. Instead, the storage model is optimized for the type of data being stored. And the storage format can vary depending on the data. For example, data may be organized and stored as [JSON](../../Skills/Web%20Development/JSON.md) documents, key-value pairs, or as a graph with edges and vertices. This type of database has grown in popularity to meet [Big Data](../../Skills/Data%20Science/Big%20Data.md) demands and handle unstructured diverse data that does not fit neatly into rows and columns. There are four main types of non-relational databases. First, there is the document data store or document database, which is designed to store and query JSON-like or XML-like data. Each piece of structured data is a document, which is flexible, semi-structured, and unique, and whose format can change over time. In this example, we have two entries or two documents, one with the name Susie Campbell and an associated, cell, email, and birthday. The other one has the name Mark Watson
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=94)** and an associated birthday. Not every entry has to have the same number of attributes or even the same attributes as the other entries. This makes it more flexible than a relational database. However, each document should have a specific key that allows you to retrieve the document quickly. You can also query by specific fields contained inside. [MongoDB](../../Skills/Software%20Development/MongoDB.md) and DynamoDB are popular non-relational databases that support document database models. Another type of database is a columnar database. Although it's organized in a table, the database is organized by columns. Looking at this example, if I collapsed this table into a list and it was organized as rows, I would list out the first row, then the second row, then the third row. If this was organized as columns, I would list out the first column with all the IDs, then the column with all of the names, and so on. With columnar [Databases](../../Skills/Software%20Development/Databases.md), each row can also have a different set of columns. This is similar to what we saw with the document database earlier. Cassandra is another popular non-relational database used with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). It's a cross between a key-value and columnar database. The last database we'll talk about is a graph database.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=193)** Graph databases are based on modeling your data as a graph, with a collection of nodes and edges. The nodes represent your data, and the edges represent the relationship between your pieces of data. This is ideal for modeling small individual pieces of data with deeply interconnected and complex relationships. [Neo4j](../../Skills/Software%20Development/Neo4j.md) is a graph database often used with Python. Now, you may have heard of non-relational databases referred to as [NoSQL](../../Skills/Software%20Development/NoSQL.md) databases. The term NoSQL refers to not only [SQL](../../Skills/Data%20Science/SQL.md), meaning when querying the database, other programming languages and constructs are used. In the following chapters and lessons, we'll be looking less at how databases work and more at how they can be used in a Python program with the Python programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (2)
> **Definitions:** is a  (4), refers to (1)
> **CLI Commands:** python (4)
> **Env Vars:** json (2), xml (1), sql (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Python Database API](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=0)** - [Instructor] In order to access and use a database in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) we'll often use the given database's module. These modules could have completely different syntax for how we interact with them, but since there are so many different [Database Management](../../Topics/Database%20Management.md) systems Python has created a common specification to follow so that programmers can manage their [Databases](../../Skills/Software%20Development/Databases.md). This specification is called the Python Database API and it encourages conformity between the Python modules that are used to access databases. This allows code to be more transferrable across databases and broaden the [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) used in Python. Nearly all Python database modules conform to this interface, so once you learn how to use databases with one module it's easy to pick up and understand code from others. Let's take a look at the Python database API specification so we can see what the syntax might look like across many database modules for given functionality. First, in order to conform to the Python database API specification access to the database must be provided through a connection object. To do this, each database module must implement a connect function that returns a connection object. This connection object is a connection to the database. With the connection object, we can close the connection,
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=97)** we can commit any pending transactions to the database, or if the database supports rollbacks we can roll back to the start of any pending transaction. We'll talk more about transactions later but they're a set of all or nothing changes made to the database. With this connection object, we can also grab a cursor. The cursor object allows us to interact with the database. We can execute certain commands that insert, delete, or manipulate our data. We can [Fetch](../../Skills/Web%20Development/Fetch.md) data with fetch one, which returns one row of data or fetch more data with fetch many or fetch all. Since many databases have a strict set of types for their data, a given module must provide constructors for objects that hold special values. When this data is passed to the cursor methods for an insertion or other executions the proper type should be detected and bound correctly. Now, we did not cover everything that's included with the Python database API but we've covered the most commonly used components. You can check out the Python Enhancement Proposal for this specification for more details. In the next chapter, we'll use SQLite's implementation of the Python database API with their SQLite 3 module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (11), [Databases](../../Skills/Software%20Development/Databases.md) (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (5), cursor (3), [Database Management](../../Topics/Database%20Management.md) (1)
> **CLI Commands:** python (11)
> **Env Vars:** api (5)
> **Documentation:** specification (5)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 2. Using SQLite in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [What is SQLite?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=0)** - [Instructor] One relational [Database Management](../../Topics/Database%20Management.md) system is called SQLite, and we can use it with the sqlite3 module in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). This provides an interface that is compliant with the Python database API specification. The lite in SQLite means the management system is light in terms of setup, administration, and resources. Unlike other [Databases](../../Skills/Software%20Development/Databases.md), SQLite does not require a server to run. Normally, an RDBMS requires a server to run where the database lives and the application communicates with the remote database. Instead, a SQLite database is integrated with the application locally and the database files are stored on disk. This makes accessing and manipulating data in the database extremely fast. With no server, there is no need to install any SQLite drivers before using it, and there are no server processes that need to be configured. SQLite is also self-contained, meaning it does not require many external libraries or much support from the operating system to run. This means you can use SQLite on many different platforms, including embedded devices such as mobile phones, gaming consoles, and more. If you're familiar with ACID compliance, all transactions in SQLite are ACID-compliant. A transaction is a set of changes
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=95)** that you want to take place all at once. And ACID-compliance stands for atomic, consistent, isolated, and durable. This means if transactions within a database are ACID-compliant, all of the queries in that transaction either take place or they do not take place at all. You'll never be in a half done state in the case of a program crashing. SQLite can also be a great starting point to prototype your application. Then you can port your code to a larger database later on. Of course, once you get to production, you'll want to use the same database locally and in prod to avoid any unexpected errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** acid (4), api (1), rdbms (1)
> **CLI Commands:** python (2), sqlite3 (1)
> **Definitions:** is called (1), is a  (1), stands for (1)
> **Prerequisites:** setup (1), install (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=0)** - Let's create a SQLite3 database in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). First, we'll open up our Python file. That's app.py. To create our database, we'll import the SQLite3 module. This will let us access the functionality needed to build the database. This module follows the Python database API specification, so we'll grab a connection object with the connect function. Since we haven't created any [Databases](../../Skills/Software%20Development/Databases.md) yet, this connect function will create the database. The next time we run this function, connect will just connect us with the already created movies database. To create our first table in this relational database, we'll need to grab the cursor object. With the cursor, we can now execute commands and queries on the database. Our first command will be to create the table. We'll write cursor, and then execute to execute the command. We'll write the command in triple quotes. A [SQL](../../Skills/Data%20Science/SQL.md) command will be used to create the table. To create a table in SQL, we'll write CREATE TABLE IF NOT EXISTS. This will create the table, if it does not already exist in the database. Then we'll write the name of the table.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=92)** In this case, Movies. And now the name of each column and its type. We will have the columns title, director, and year. Title will have the data type TEXT. Director will also have this same data type, and year will have the INT data. SQLite does not have a date time data type, so we could use text, a real number, or an integer to store it. We're using an INT to keep things simple. Now, this isn't the perfect database schema. I could have another table that lists out the directors and link it to this table so I don't have to repeat director names. I could also change the schema to accommodate movies with more than one director. Since this course is focused on using databases in Python rather than database modeling, we'll keep it like this for now. Before moving on to the next lesson, let's save our changes. In this case, that's the change of creating the database and the table. To save changes, we'll write connection.commit. Then we'll close the connection. We'll save the Python file with Command+S and we'll run it. We'll run it using the terminal. I'm already in the directory where the app.py file lives. To run it on a Mac, we'll use python3 app.py.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=191)** If we run ls, we'll see that this script created the movies.db file. That's our movies database. We can also see it in the Finder. It's important to note that we could put a full path in the connect argument and it would write to a given location on our computer. For now, we'll keep it as movies.db, which assumes the database file is in our local folder where we're running the Python script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), cursor (3), [Databases](../../Skills/Software%20Development/Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** python (6), sqlite3 (2), python3 (1), ls (1)
> **Env Vars:** sql (2), int (2), api (1), create (1), table (1)
> **File Paths:** app.py (3)
> **SQL:** create table (1)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **Speakers:** - let (1)

#### [Inserting your first record into an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=0)** - [Instructor] With our first table created, we can start adding data to our SQLite database. For the first entry, we'll add Martin Scorsese's Taxi Driver. We'll use the execute function on the cursor and an insert [SQL](../../Skills/Data%20Science/SQL.md) command to insert the data. We'll insert this data into the Movies table where the values are Taxi Driver for the title, Martin Scorsese for the director, and 1976 for the year. This execute line will insert the first entry or our first record into the Movies database. Now let's select or retrieve this entry and prove it's actually in our database. We'll write cursor.execute. We'll select everything from the Movies table. We've selected the data, but to actually retrieve it in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), we have a few options. First, we can use the [Fetch](../../Skills/Web%20Development/Fetch.md) one function to retrieve a single row. Another option is to iterate through everything resulting from the execute statement. We could also return all the results with a fetch all command. Let's try using fetch one first. We'll print cursor.fetchone. To save our database changes, we commit them and then close the connection.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=96)** Let's run this script and see if it retrieves the Taxi Driver entry. I'm in the folder where the Python script lives. This is also the same folder where the database file lives. Let's run our Python script, python3 app.py, and there's our entry, Taxi Driver, Martin Scorsese, 1976. Now, every time we run this script, it would insert the Taxi Driver entry. We don't want to duplicate the Taxi Driver entries so let's comment out the insertion. You could also use an if statement to see if the entry exists before inserting it. If one doesn't, it would add one to the database. Since we're just getting started, commenting out is fine for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** python (3), python3 (1)
> **File Paths:** app.py (1)
> **Env Vars:** sql (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Adding multiple records at a time to an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=0)** - [Instructor] Let's say we want to add a bunch of movies to our database, not just one. To achieve this, we'll create the data we want to insert into the database first. It'll be a tuple containing three values for each film. Then we'll combine the tuples into a list to create a famous films collection. We'll start with Quintin Tarantino's "Pulp Fiction". Then we'll add "Back to the Future". The last one we'll add is "Moonrise Kingdom". We can add these movies to our database with just one line of code. We'll use the execute mini function on the cursor object. We'll insert these movies into the movies table. This statement will look at each tuple within famous films and fill in the three placeholder question marks with their values. Then it'll run insertion for each tuple. This means that "Pulp Fiction", Quentin Tarantino, 1994, would be the first set of values inserted. Then the "Back to the Future" data would be inserted. Finally, the "Moonrise Kingdom" data would be added to the database. Let's execute the select statement again and see if all the entries are returned. This will confirm they're added to the database. Since we're using the same movies.db file as before,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=95)** we should also see Martin Scorsese's "Taxi Driver" with this select statement. To iterate through all of the matching results or the results of this sequel statement, we can call the [Fetch](../../Skills/Web%20Development/Fetch.md) all function. Now, it's important to remember that the cursor acts as a pointer for looking at the returned data. So once we iterate through the results of the cursor once, we cannot iterate through it again. This means if I tried to print out cursor dot fetch one now, it would return empty. The cursor resets after each execute or execute many command. Let's run this file and see what happens. I'm in the folder where both the app.py file and our database file live. Let's run our script. Python3 app.py. And there's our data. We see the three movies we added along with Martin Scorsese's "Taxi Driver". This is exactly what we expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **File Paths:** app.py (2)
> **CLI Commands:** python3 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Filtering records in an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=0)** - [Instructor] With the data inserted and in place, let's try filtering the results by only selecting the movies that were released in 1985. First, we'll create a variable called release year. And we'll set it to a tuple containing 1985. Now you might be thinking, why a tuple? Why not just make it 1985? We'll address this soon, I promise. To filter the results by those released in 1985, we'll use the cursor's execute function again. We'll select all the movies in the movies table. And add a where clause, where the year is the release year. In our case, that's 1985. With this statement, we use [SQL](../../Skills/Data%20Science/SQL.md) to select all of the movies and then filter by release year. Since this is the execute function and the tuple is the second parameter, this will only be executed one time. Now you might be thinking, why don't we just use string operations to assemble the SQL query, with the appropriate values? Doing so is actually very insecure. It makes your program vulnerable to a SQL injection attack. If you need to use values from [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) variables and your SQL statements, this is the way to do it. Use the question mark placeholder
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=92)** and provide a tuple of values as the second argument, in the execute or execute many function, just like we've done here. Let's retrieve the data returned by the select statement. We'll print cursor [Fetch](../../Skills/Web%20Development/Fetch.md) all. This will return all the movies that were released in 1985. Let's run it. (keyboard keys clacking) I'm in the folder with the app.py file and the movies database file. We'll run Python app.py. And we get one movie back, "Back to the Future" from 1985. So we've shown a few different SQL commands here, but many other SQL statements, including those with update and delete, can also be used here. Unfortunately, these hard-coded SQL statements can be difficult to work with sometimes. To mitigate this, you can break down commonly used sequence statements out into their own functions, with their own error handling to use as needed. Or, you can even avoid hard-coded SQL strings altogether, with SQL Alchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (9), cursor (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** sql (9)
> **CLI Commands:** python (2), make (1)
> **File Paths:** app.py (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [What is SQLAlchemy?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=0)** - [Instructor] Sometimes, writing [SQL](../../Skills/Data%20Science/SQL.md) queries in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code can seem a little out of place. That's why many Python developers use an object-relational mapping tool, or an ORM, to work with [Databases](../../Skills/Software%20Development/Databases.md) in a more Pythonic way. ORMs allow you to work with Python or your language of choice instead of SQL to query and manipulate data in your databases. Now, there isn't just one ORM you can use in Python. Various libraries implement this functionality and overall concept. And SQLAlchemy is one of the most popular ones for [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). SQLAlchemy also works with varying web frameworks, including Flask, and databases such as SQLite, [MySQL](../../Skills/Software%20Development/MySQL.md), and [Postgres](../../Skills/Software%20Development/PostgreSQL.md), which is why we're focusing on it in this course. Even if your Python script is just a data analysis tool that interacts with the database, you can still use SQLAlchemy. Now, SQLAlchemy is a large SQL toolkit, with lots of different components, including an ORM. And these components can be used individually or combined together. Although we won't be going through all of its components, the two largest sections are SQLAlchemy Core and the SQLAlchemy ORM. While both have different ways of interacting with your database, the biggest difference between these two is that SQLAlchemy Core has a schema-centric view,
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=96)** which is focused around tables, keys, and SQL concepts. SQLAlchemy encapsulates the schema with business objects. This means encapsulation makes your database interactions feel more like Python code. With SQLAlchemy ORM, you abstract many of the underlying database concepts. With SQLAlchemy Core, you use the SQL Expression Language, which is a mild abstraction of the typical SQL language. This allows it to be a consistent language across many relational databases. The SQLAlchemy ORM is focused around the domain model of the application. It also leverages the unit of work pattern to maintain consistency between objects and the database. It provides a higher level of abstraction on top of the SQL Expression Language. This enables the user to abstract database concepts even more, allowing you to work with your database in an object-oriented way. Even if you're using the ORM, you're still welcome to use the SQL Expression Language as well, since the ORM is built on top of Core. Now, if you're a master at SQL, you'll likely be able to write more performant queries with SQL than with the abstracted ORM. On the flip side, if you're not familiar with SQL, the ORM can give you some pretty fast queries
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=193)** right out of the box. Using an ORM also shifts the database complexity into the application code rather than keeping it in its own system. With the abstraction, an ORM can prevent you from understanding what SQL and other technologies are doing under the hood. But since it simplifies working with the data layer immensely, many developers choose to use one. Now, with the introduction of SQLAlchemy 2.0, Core and the ORM are becoming more integrated, meaning SQLAlchemy as a whole will be more unified. Currently, there are a bunch of different ways to do the exact same thing in this library. But the creators want to make it more simplified. This effort is currently in progress with SQLAlchemy 2.0 and will be in progress for some time. But the first version of SQLAlchemy 2.0 has been released, and we'll be using it in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (12), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** orm (13), sql (12)
> **CLI Commands:** python (6), mysql (1), make (1)
> **Versions:** 2.0 (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a virtual environment for SQLAlchemy](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-a-virtual-environment-for-sqlalchemy?u=76281980)

#### [Executing a SQL query with SQLAlchemy](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=0)** - [Instructor] With SQLAlchemy ready to go, let's import the data from our movies database. Inside of our folder, we have a movies.db file and a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file named database.py. Let's open this Python file. Inside of here, we'll retrieve our data from the movies.db file using SQLAlchemy. To use SQLAlchemy, we'll write import sqlalchemy. In this example, we'll be using SQLAlchemy Core to run [SQL](../../Skills/Data%20Science/SQL.md) statements against the database. Later on in the course, we'll experiment with the SQL expression language and the ORM. The next step is to connect to the database. We can do this by using SQLAlchemy's create_engine function. We'll be connecting to a SQLite database, so write sqlite, and then the name of our database, movies.db. If this file does not exist, it would create it, and in turn, create the database. We'll also include echo=True so we can see extra logs that describe what SQLAlchemy is doing behind the scenes. Once the engine is created, we'll save it in a variable called engine. Now, this engine is not the same thing as the Python database API's connection object. The engine is the starting point
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=94)** for the SQLAlchemy application. It's the home base with which database connections can be formed. The engine allows your application to have multiple database connections, and it manages those connections. From the engine, we can create a connection with which we can run [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) on. To create a connection, we'll use the engine's connect method. This conn or connection is actually a proxy for the true Python database API connection. Inside the [with clause](../../Glossary/Concept/CTE.md), we'll be able to interact with the database. Let's select all the items in the movies table. We'll use a textual SELECT statement on the table. SELECT everything FROM Movies. Now, this sets up our query, but it doesn't actually query the database yet. To execute the query, we'll need to use the execute function on the connection object. We'll give it our query as an argument. Then we'll save the result in a variable, result. To see the data, we'll iterate through the result object. For each row and result, we'll print it to the output. Let's save this and run it in the terminal. First, we'll activate the environment.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=188)** Right now, I'm in the SQLAlchemy Workspace. To activate our environment, we'll run source bin/activate. Now we can run our Python script. We'll run python database.py and there's our data right there in the output. Now, you may notice there is some other text here. Implicitly, SQL performed the begin command to begin interactions with the database. At the end, there's also a rollback statement. This occurred because we didn't commit our changes to the database. In fact, we didn't need to because we made no changes to the data in the database. Don't worry. We'll work more with these implicit statements later on in the course. For now, we can say that we've successfully queried our database with Python using a new library, SQLAlchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [With clause](../../Glossary/Concept/CTE.md) (1)
> **Env Vars:** sql (3), api (2), select (2), orm (1)
> **CLI Commands:** python (7)
> **File Paths:** database.py (2)
> **SQL:** select (2)
> **Code Identifiers:** create_engine (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Using the SQL expression language to write maintainable code](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=0)** - [Instructor] The real benefit of SQLAlchemy comes when you begin to use tools like the [SQL](../../Skills/Data%20Science/SQL.md) expression language. You can use it to make your code easier to read as you query a database. Let's try it out. We start off with the same import statement and engine as before. The first thing that's different is we need to create a [Metadata](../../Skills/Web%20Development/Metadata.md) object. This metadata object will keep track of the different tables we work with. Now, to represent the table, we'll use a table object. This will come from SQLAlchemy, and we'll use .table. The table object will contain the name of the table, Movies, the metadata object, and the columns the table has. So that's title, director, and year. We pass then the metadata object because it acts as a dictionary that stores a series of tables, where the table name is the key and the value is the table object. In order to instantiate the table, we use the metadata object, metadata.create_all and we pass in the engine. Now we can proceed with the connection. Just like before, we'll use engine.connect to connect to the database. For the SQL execution,
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=94)** we'll use the SQLAlchemy expression language. We'll write an expression that selects all the entries from the Movies table. We'll write sqlalchemy.select movies_table. Now, this doesn't execute our statement just yet. We need to pass it in to connection.execute for it to run. Our conn.execute. To view all the results that are returned, we can put this in a loop. For each row in our results, we'll print out the row. Let's run it. We'll navigate to the terminal window and our SQLAlchemy workspace is already activated. We're also in the folder with our movies.db file and our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script. Let's run python3 database.py. In the output, we see each movie entry. Now, you might be wondering, why would you ever not use this expression language? Well, there may be a very specific SQL command you want to run that's not represented in this language. In that case, using sqlalchemy.txt. is a great option if other parts of your application use SQLAlchemy. This way, all of your communication with the database stays associated with one module rather than using some SQLite directly
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=187)** and others using SQLAlchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1), python3 (1)
> **Env Vars:** sql (3)
> **File Paths:** database.py (1), sqlalchemy.txt (1)
> **Code Identifiers:** create_all (1), movies_table (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)

#### [Challenge: Create an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=0)** - [Instructor] In this challenge, you'll practice creating and querying a SQLite database. You will create one table called Users and it will have a User_Id column, a First Name column, a Last Name column, and an Email Address column. Once the table is created, insert five entries into the database where at least two of the entries have email addresses ending in [gmail.com](https://gmail.com). Once the database is initialized with the correct data, query the database to retrieve all of the email addresses. You may need to do some research to figure out how to do this query. For this challenge, you may use the sqlite3 module with [SQL](../../Skills/Data%20Science/SQL.md) statements or you can use SQLAlchemy to create a database and query for data. The next lesson will give examples to both types of solutions. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** sqlite3 (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=0)** - Let's walk through the SQLite 3 module version first. Remember, the goal is to create a SQLite database using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). I may have done it differently than you, and that's okay. There are lots of different solutions that will work here. By walking through this solution, you'll see another take on how to solve the challenge and likely learn something new. Let's get started. We'll open up version1 inside of the sqlalchemy-workspace. The database.py file has all of the logic. Let's take a look. First, we import SQLite 3, and we create the database with a connection. We call our database users-sqlite. This is the file our database will be stored in. Then we create a cursor object and we use it to create a new table. If the table doesn't already exist, we'll create a user's table with four columns. User ID, first name, last name, and email address. The user ID column feels like a good column we can use to identify each record individually. That's why we make it the primary key. The primary key will allow us to later link it to other tables we create
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=93)** in our relational database with the foreign key. The auto increment option also makes it so we don't have to give a value for user ID for each record. SQLite will populate this field for us. It'll come up with a value and store it with each record we insert. On a production scale, you would likely not use auto increment because it requires more overhead. But for our prototype, this is fine for now. Then we have the data we want to insert. Each user has a first name, last name, and email address. That user ID column will automatically be populated when we insert a new user. For the insertion we use a similar statement that we've used in previous videos. We'll insert each value into the appropriate column. Then we'll select all the data using a select statement. Let's run it. We'll start by activating the workspace, source bin/activate. This particular database file is located in version1. We'll go to that version and run it. And there's our data. Each user has been inserted into the database. We can double this by looking at our database file. This will have all the data that we just inserted. Now let's walk through the [SQL](../../Skills/Data%20Science/SQL.md) Alchemy version.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=190)** We'll go to version2 and open up the database.py file. This example will use SQL Alchemy without the expression language. The last example will show how to do this with the expression language. In the implementation we start by importing SQL Alchemy. We also create an engine that will talk to our database. With this first call, it will also create our database. Next, we set up the data we want to insert. This is in a different format than the data we inserted previously. Instead of a list of tuples, we have a list of objects, each with its own first name, last name, and email address. Next, we connect to the database. We create the table if it does not already exist and then insert each user with their attributes. To see the results we've run a select statement and print out each item returned. Let's run it. We'll go back to the SQL Alchemy workspace folder and go in version2. From here, we'll run the Python file. And there's our data. Each user appears in the output. Note, we didn't have to insert the primary key or increment, SQL did that for us. The 1, 2, 3, 4, and 5.
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=286)** Now let's see what this looks like when we use the SQL Alchemy expression language. We're in version3 and we'll open up the database.py file. The import engine and users remain the same. Then we represent the table in Python. We create the [Metadata](../../Skills/Web%20Development/Metadata.md) object and a table object with the name users. We also add in the appropriate columns. To connect all of this with the engine we use the create_all function on the metadata. With the table setup, we create a database connection. We insert and select the data using SQL Alchemy expression statements. For the insert, we pass the table object along with the values we want to insert. This data is in the form of a list containing objects. For the select, we select all the data in the user's table. Let's run it. We'll cd back to the main folder with the different versions. Then we'll go into version3 and run its database.py file.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=366)** In the output we can see the insertion statement that the SQL Alchemy engine ran. It's pretty similar to the initial statement we created in the first example solution. We can also see each entry in the select statement. Congratulations, you just created a SQLite database and manipulated data using the Python database API and SQL Alchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (9), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), cursor (1)
> **Env Vars:** sql (9), api (1)
> **CLI Commands:** python (4), make (1), cd (1)
> **File Paths:** database.py (4)
> **UI Navigation:** go to (2), select the (1)
> **Prerequisites:** set up (1), setup (1)
> **Code Identifiers:** create_all (1)
> **Cross-References:** go back to (1)


### 3. Using MySQL in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [What is MySQL?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=0)** - [Instructor] Another relational database engine is [MySQL](../../Skills/Software%20Development/MySQL.md) and it's actually one of the most popular relational [Database Management](../../Topics/Database%20Management.md) systems used with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Similar to SQLite, it uses a relational model with tables to describe relationships between its data, but instead of being contained directly on the file system, your database lives on a server. MySQL follows a client server relationship. This means your database lives on a server and any time you want to make changes to your database, you send a request to the server. The request contains your [SQL](../../Skills/Data%20Science/SQL.md) statement or instructions for the modification or selection. Once received, the server accepts that request, performs the action, and sends a response back to the client with the results. Most of this is abstracted to us as users of the database. All we have to do is install the correct driver and configure the connection correctly. We'll do this throughout the chapter. Although we have only one client pictured here, your database can have multiple clients or multiple machines that can each access and modify your database on the server. It's important to remember that MySQL is not SQL. MySQL is a relational database management system, which helps you create and manage your database.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=94)** Whereas SQL is a query language used to interact directly with the database. Many RDBMSs use SQL, but one RDBMS would not use another. MySQL was designed with speed and ease of use in mind, which is why it's one of the more popular [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). But with speed as a priority, it comes with certain functional limitations. MySQL is not fully SQL compliant, as it doesn't support certain SQL operations, such as full join clauses. MySQL is also a dual licensed software with a free and open source community edition, as well as several paid commercial editions. Many features and plugins are only available in the proprietary editions. However, MySQL has great replication support, which makes it a great choice for distributed database setups. It's also known for powering many websites and applications across the internet because it's easy to install, run and scale. Similar to other [Databases](../../Skills/Software%20Development/Databases.md), MySQL has compatible graphical user interfaces or GUIs we can use to interact with the database. We can also interact with MySQL databases in custom-built Python applications as well. Similar to how Python offers a module
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=190)** to interact with SQLite, Python offers a similar module named mysql-connector for interacting with MySQL. We can also use an ORM or object relational mapping tool such as SQLAlchemy within Python to interact with a MySQL database. We'll be looking at how to use both in this chapter. But again, in the real world, you would only choose one method to access your database with Python, either an ORM or the specific Python module. You'd choose one and stick with it. Most of the time, you'll create your database using a MySQL GUI, or with the MySQL command line. Then you'd interact with your database using your Python application. This is because most of the time, your Python applications and users of your Python app will be querying, inserting, updating, or deleting data from your database, but not necessarily creating new databases and new tables. However, similar to SQLite, it is possible to use Python to create databases and tables in MySQL as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (16), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (11), [SQL](../../Skills/Data%20Science/SQL.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Database Management](../../Topics/Database%20Management.md) (2)
> **CLI Commands:** mysql (16), python (11), make (1)
> **Env Vars:** sql (6), orm (2), rdbms (1), gui (1)
> **Analogies:** similar to (4), such as (2)
> **Prerequisites:** install (2), configure (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Creating a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=0)** - [Instructor] Before we can use [MySQL](../../Skills/Software%20Development/MySQL.md), we need to install the community edition. We'll download it here. Now we'll enter a password for the root user. This is really important to remember, we'll use it later on in the course. And it's installed. Let's try using the MySQL command in the terminal. If you're on Mac, this won't work just yet. We need to update our path for this command line tool. The easiest way to do this on a Mac is to add something to wherever your path is set. First, we'll cd into our home directory. Then we'll figure out what type of shell we're running. We can do this with echo SHELL. In this case, it's bin slash zsh, which means we'll need to add something to our zshrc file in our home directory. We'll open it up with nano. Then, we'll add the path where MySQL is located. This may differ if you're on [Windows](../../Glossary/Service/Windows.md). To write out, we'll use Control O and hit enter. To exit, we'll do control X. Then, to set it with our system, we'll write source dot zshrc. With this updated, let's restart our terminal
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=93)** and try running the [SQL](../../Skills/Data%20Science/SQL.md) command again. Let's log in to the MySQL shell. You're welcome to use a gooey, such as MySQL Workbench instead. But since we don't want to go too deep into tooling, the terminal should work great for our purposes. To log in, we'll write sudo my sql dash u root dash p. The first password we'll enter is for Sudo. This is the password to your machine, so to your Mac machine or to your Windows machine. What you use to log in. The next password is for the database. What password did you use to configure your MySQL database? That's what you should use here. And we're in. Let's create a database called Projects. We'll use the keywords "CREATE DATABASE" and we'll call it projects. This database will represent the collection of projects we want to accomplish and the tasks associated with each project. Congratulations! You've just created your first MySQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (7), [Windows](../../Glossary/Service/Windows.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **CLI Commands:** mysql (7), sudo (2), cd (1)
> **Tools:** terminal (3), command line (1), zsh (1)
> **Env Vars:** shell (1), create (1), database (1)
> **Prerequisites:** install (1), configure (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Building tables in a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=0)** - [Instructor] With our project's database created and our terminal logged into the [MySQL](../../Skills/Software%20Development/MySQL.md) shell, we can begin adding data to our database. First, we'll use the projects database. That's where we're going to add our data. We'll select it with used projects. In order to represent our projects and tasks, we'll be creating two tables. The first table will have our projects, where each project will have an ID, title, and description. Let's create it. We'll write CREATE TABLE projects where each project will have a project ID that's auto-incremented. There will also be a title column, which will be a VARCHAR and a description that will also be a VARCHAR. The number has to do with how much space we're giving this variable. Then we'll set the primary key to project_id. Let's create it. To prove it's created, we'll write show tables. And there's our table and the output. The second table will have tasks associated with each project. Each task will be represented with the task ID, project ID, and description. Let's write it out. CREATE TABLE, we'll call it tasks.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=94)** And each task will have a task ID that will be auto-incremented. It'll also have a project ID that cannot be null. And a description that's a VARCHAR. The primary key will be the task ID. We'll also have a foreign key that references the project's table. And it's created. And we see it in our tables. In our tasks table, we could also add a true or false column that represents whether the task is completed or not. For our example, we'll just delete the task as it gets completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** varchar (3), create (2), table (2)
> **SQL:** varchar (3), create table (2)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** project_id (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Adding data to a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=0)** - [Instructor] Before we move on to working with [MySQL](../../Skills/Software%20Development/MySQL.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), let's add a few items to this database. We'll create a project and two tasks for the project. We'll start by inserting the project. In the projects table, we'll insert a title and description. The values for those will be organized photos and organized old iPhone photos by year. Then we'll insert two tasks to go with this project. We'll insert them into the tasks table. They'll each have a project ID and a description. The project ID will be one and the description will vary for each task. The first one will be organized 2020 photos. The second will be organized 2019 photos. Let's create one more project with an associated task. The second project will be read more where we read a book a month this year. The task will be to read "The Huntress." That's a book. With the foreign key constraint,
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=92)** we cannot insert a task without a corresponding project ID. We'll also have to delete the tasks before we delete the projects. With special operators such as on delete cascade, we can avoid this, but let's not get two in the weeds just yet. Let's make sure our data was actually added to the database. We can query the projects table with select star from projects. There's our two projects: organized photos, and read more. Let's see those tasks. The organized photos tasks are associated with project one, the organized photos project. The last task is associated with the second project, read more. We can see this with the corresponding project ID. To exit the MySQL shell, we can write quit. Now, we're back in the regular terminal. You might be wondering, "Could we have done this with SQLite, "used a shell to insert and select our data?" The answer is yes. SQLite does have a shell program that you can run that's very similar to this. The main difference is the way our [SQL](../../Skills/Data%20Science/SQL.md) is written and the fact our MySQL database is running on a local server, local host, rather than just located in the file system.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=186)** Furthermore, everything we've done here can be done in Python. This includes our create database query, our insertion queries, and more. In fact, it's easier and more replicatable when done with code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** mysql (3), python (2), make (1)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** sql (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Connecting a Python application to a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=0)** - [Narrator] Before we can connect to our [MySQL](../../Skills/Software%20Development/MySQL.md) database and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), we need to install MySQL Connector using pip. This will give us the compliant module that we can import into our Python application. It would also be nice to have a different virtual environment for this database. So let's create a new environment. We'll call it mysql-workspace. Then we'll cd into it and activate it. I have pip3 for Python, so I'm going to run pip3 install mysql-connector-python, and now it works. With the MySQL Connector installed, let's open up a new file using Sublime and import the module. We'll call it database.py, and we'll put it inside of our workspace folder. For the import, we'll write mysql.connector as mysql. This will allow us to reference this import as mysql. Then we'll connect to the database. We'll use connect on the MySQL import. Unlike SQLite, we'll need to specify a host user and password. The host could be some remote server or we can host it locally with localhost. This is where the database actually lives.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=96)** Our application will send requests back and forth to this location. In our case, the database will be on localhost. Our user will be root. Our password will be password, and the database will be projects. This password is what we configured when we installed MySQL. I'm writing this in plain text for the course to keep it simple, but if you don't want to do this, you could also use environment variables with virtual in. Now, with this connection, we'll want to add some additional error checking in case the database doesn't exist. Let's wrap this in a function. With our try-catch statement, we try to connect to the database. If an error occurs, we print out the error instead. We've wrapped this in a function called connect. We call this inside of the main function. We connect to the database and save it in a variable called db. With our function, we've parameterized the name of the database, but we could also parameterize the host and login credentials if we wanted to. These could be read from a file and then passed into this connection. With the connection in place, we can get access to the cursor object and then execute a few [SQL](../../Skills/Data%20Science/SQL.md) statements. Now, this looks a lot like what we did in SQLite.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=194)** The main difference will be the SQL syntax. SQL syntax can vary among RDBMS's, but the overall idea is the same. There are select statements, insert statements, et cetera. So let's query the project's database. We'll retrieve all the project records from the database. We'll use cursor.execute and select everything from projects. Then we'll retrieve the projects with cursor.fetchall and then print them to the output. Similar to how we used the cursor object with SQLite, we use it here with MySQL. Let's run it. We're already in the MySQL workspace folder and the virtual environment is activated. Let's run our database file. Here's our project data. All of the commands we ran with the MySQL Shell can be run here with the execute method on the cursor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (13), cursor (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **CLI Commands:** mysql (13), python (4), pip3 (2), pip (1), cd (1)
> **Env Vars:** sql (3), rdbms (1)
> **Prerequisites:** install (2)
> **File Paths:** database.py (1)
> **Tools:** sublime (1)
> **Definitions:** we call this (1)
> **Analogies:** similar to (1)

#### [Encapsulating database operations](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=0)** - [Instructor] Now, since we're working in application code in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and not in [MySQL](../../Skills/Software%20Development/MySQL.md), it's nice to separate business logic from the database schema. We can encapsulate the database operations, so they're easier to reuse in the future, similar to how we did for the Connect operation. Now, as a user, I'll want to add a project with a series of tasks. In the main function, we connect to the database in hard codes and data. This data represents a "Clean the House" project, and it has a series of tasks. Then we use the add_project function to add the project to the database, but it's not implemented yet. Let's add some code, so we actually insert the project to the database. Now this can seem intimidating, but don't worry, we'll take it step by step. To start out, we'll describe what execute statements we need to write for the projects table. Each project has a title and description, so let's create something to store that. We'll call it project data, and it'll have the project title and description. Then we'll want to insert this entry into the projects table using the cursor. Next, we'll do the same for the tasks. For each task, we'll create the task data,
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=97)** and append it to our tasks data list. cursor.lastrowid allows us to retrieve the project ID of the project we just created. With the task data assembled, we'll insert it into the tasks table. And the main function, we select all the data from the database to show it's been inserted, let's run it. We already have the MySQL Workspace activated, and there's our database.py file. We'll run it with database.py and there's our data. Here we see our "Organized Photos" project and our new "Clean House" project. We also see the projects associated with "Clean House". They have the Project ID three. We have "Clean bathroom", "Clean kitchen", and "Clean living Room". This is one way to encapsulate a database operation, but there are many other ways you can do this as well. We could add a UI so that users can input new projects, and corresponding tasks separately. We could also further encapsulate each [SQL](../../Skills/Data%20Science/SQL.md) query and parameterize it so that someone coming into the code doesn't have to deal with SQL if they don't want to. They could reuse an encapsulated insert function instead.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=192)** Of course, if you continue to encapsulate functions, at some point, you're creating a library of functionality, and you might as well use an ORM instead. This would allow new developers joining your team to get up and running more quickly. Now, looking at this specific example, the way we pass the cursor here may feel kind of weird. We could modify these functions to just return strings for the cursor to execute, but that would add lots of code to our application. Another option is to pass in the connection object, so we can commit the changes inside the function instead of outside the function. We could also open and close the database connection every time we run this function, and encapsulate the database connection inside of it. This would prevent a connection from going unused for a long period of time, but it could add a tiny bit more latency to our application. For this sample app, these design decisions don't matter too much, and there is a lot of debate in the database community about which way to go. Considering our application is small for now, we just passed the cursor in, and commit the changes after it's run. Overall, I still don't love this as an engineer, the database schema is tied pretty deeply into the application code. This means if I change a column in my database,
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=287)** I have to significantly change the functions, and the way those functions are used in my application. But no matter what if you change the schema of your database you'll likely have to change some application code. Now, is there a way to abstract this more? Soon we'll find out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (5), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** mysql (2), python (1), find (1)
> **Env Vars:** sql (2), orm (1)
> **File Paths:** database.py (2)
> **Code Identifiers:** add_project (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Setting up MySQL in Python using SQLAlchemy](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=0)** - [Instructor] Let's try accessing the same database with SQLAlchemy. SQLAlchemy will not actually create our database, only connect to it. So we'll be connecting to our project's database. Before we can get started though, we'll need to create a virtual environment to work with. We'll call this one [MySQL](../../Skills/Software%20Development/MySQL.md) SQLAlchemy Workspace. Then we'll activate it. Let's install our dependencies. These will include the MySQL Connector and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as well as SQLAlchemy. Great. Let's connect to our database and Python. We'll create a file called database.py. We'll save it in our workspace. Then we'll import SQLAlchemy and create our engine. Here the syntax will be a little different than SQLite. We're connecting to a MySQL database, so we'll use MySQL as the database type. We also refer to this as the dialect. Then we'll include a driver. That'll be MySQL Connector. We'll also give it our username and password. That'll be root. And then our password, password. Our database will live on local host at Port 3306.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=99)** This is the default port, so let's add that. We'll be connecting to the project's database, so we'll add that at the end of our string. We'll also add echo equals true. This'll work the same as it did in SQLite. It'll give us extra print statements that show us what SQLAlchemy is doing behind the scenes. Now the engine is the starting point for any SQLAlchemy application. It's the same for SQLAlchemy Core and SQLAlchemy ORM. Let's run it. We'll run Python3 database.py. We won't see anything in the output just yet because we'll need to create a connection. We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** mysql (5), python (2), python3 (1)
> **File Paths:** database.py (2)
> **Ports:** port 3306 (1)
> **Env Vars:** orm (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Building a model with SQLAlchemy ORM](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] Everything we've done so far looks very similar to what we did with SQLite. In this chapter, instead of using SQLAlchemy Core components we'll be using the ORM. This will allow us to see a different syntax for how we can work with database information in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Whether you're using Core or the ORM, both will work for [MySQL](../../Skills/Software%20Development/MySQL.md) and SQLite, and any other supported relational database for that matter. The pattern we've established so far is retrieve the cursor object and execute some statements. With the ORM, we'll be able to create classes and models for the objects our database will hold. We're diving into the ORM side with object relational mapping, which will make interacting with our database more Pythonic. For our sample code, I've added some import statements at the top. This makes our code easier to read. Let's get into the implementation. With the ORM, the [Metadata](../../Skills/Web%20Development/Metadata.md) collection still exists, but it is contained within ORM only object called the registry. We can create a registry with the registry function. We just call registry, and it's located in the sqlalchemy.orm module. Inside of the registry, we can access the metadata object
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=97)** with mapper_registry.metadata. Now, the big difference is that instead of declaring the table objects directly, we declare them indirectly through directives applied to mapped classes. Each mapped class in SQLAlchemy is based on a common base class known as the declarative base. We can retrieve a new declarative base from the registry. We'll use the mapped registry and generate a base. With this base, we can begin to create our models for our corresponding project and task tables. Starting with the project model, we'll base it off of the base, and we'll initialize it with the tablename. For the tablename, we say projects, because that's the name of the MySQL table. Now we'll set up the columns. These should look pretty similar to what we did with SQLAlchemy Core, and that's because the ORM is built on top of Core. Next, we'll write a function to show a printable representation of the object. Perfect. Our first model is finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), cursor (1)
> **Env Vars:** orm (7)
> **CLI Commands:** mysql (2), python (1), make (1)
> **Code Identifiers:** mapper_registry (1)
> **Exercise Files:** sample code (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [Adding up a foreign key with SQLAlchemy ORM](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] The projects database has two tables, the projects table and the tasks table. We've already created the model for the projects table. Now let's create the task model and link it to our project model. We'll create a new class called task and we'll base it on the base. The table name will be tasks, because that's what we've named it in our [MySQL](../../Skills/Software%20Development/MySQL.md) database. Next, we'll add the columns. Here, the task_id column will be the primary key, and the project_id column will act as a foreign key linked to the projects table. To link the tasks project_id column to the projects table, we use the foreign key keyword and input the projects table name as well as the column we'd like to link it to. To further define the relationship, we can create a relationship with the project model and set it equal to project. Relationships are new with SQLAlchemy and they compliment foreign keys. They tell our application that we're building relationships between two models, rather than with the database. The foreign key implementation inside the column definition references the [Databases](../../Skills/Software%20Development/Databases.md), tables, and syntax, but the relationship references our model, not the table name. To connect everything together, we should do both.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=96)** This may seem like a lot, but it helps us easily perform joins in our application. Since project and task data are very related, we'll likely want to see what tasks correspond with a given project. This defines the relationship upfront, so we can easily work with it in our app's business logic. Similar to the project model, we'll want to write a printable format for the task. With our models in place, let's connect up our tables in MySQL. We'll use the base.[Metadata](../../Skills/Web%20Development/Metadata.md).create_all and pass in the engine. Since these tables already exist, SQLAlchemy will use the already existing table instead of creating new ones. Let's run this program. Our workspace is activated and we're in the folder with the database.py file. Let's run it. In the output, we can see [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) setting up the models using the SQLAlchemy ORM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** project_id (2), task_id (1), create_all (1)
> **CLI Commands:** mysql (2), python (1)
> **File Paths:** database.py (1)
> **Env Vars:** orm (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Using SQLAlchemy Sessions to transact on a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=0)** - [Instructor] Let's continue on with our SQLAlchemy ORM implementation. Since we're using the ORM, we'll need to create a session object to query our database. The session object is responsible for building insert constructs and sending them to the database in a transaction. In the implementation, we'll add new objects to the session and then omit these objects to the database when needed, using a process known as a flush. Let's get started. We can create a session with the engine. We'll pass it in as a parameter. The session comes from the SQLAlchemy ORM module, so we'll add that as an import at the top. Now sessions are how we create transactions with SQLAlchemy. As we've mentioned before, a transaction is a set of all or nothing queries. We either want them all to run or none of them to run at all. Ideally, they all run and are all successful, but if we need to roll back the changes, we roll them back all in the session and never leave the database in a half done state. With our session created, let's make a project object and insert it into the database. To do this, we can use the project model and set a title and description. We'll save this
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=92)** in a variable called organize_closet_project. To insert it into the database, we simply write session.add and pass in the record we want to insert, so that's organize_closet_project. That was so easy. Let's add some tasks to associate with this project. We can put all the tasks we want to add in a tasks list and then add them in a bulk operation. To save our tasks, we use the session, session.bulk_save_objects, and pass in our tasks. Now, if we try to save the tasks at this point in the session, we will get an error. That's because the primary key of the project is not instantiated yet. We haven't sent anything to the database, so the primary key doesn't exist yet. In the ORM, the session object makes use of a pattern known as unit of work. This generally means it accumulates changes one at a time, but it does not actually communicate them to the database until needed. When it does emit [SQL](../../Skills/Data%20Science/SQL.md) to the database to push out the current set of changes, the process is known as a flush. In our case case, this means that the primary key of the project isn't initialized until after we flush the session.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=186)** So let's do that after we add the project, session.flush. With this flush, we create an open transaction. We can close it with session.commit, session.rollback, or session.close. Let's commit these changes after we add the tasks, session.commit. Now we can run the program. Let's head over to our terminal. The virtual workspace is already activated, so I can run my file with python3 database.py. And with that final commit, our data has been added to the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** orm (4), sql (1)
> **Definitions:** known as (3), is a  (1)
> **Code Identifiers:** organize_closet_project (2), bulk_save_objects (1)
> **CLI Commands:** make (1), python3 (1)
> **File Paths:** database.py (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Retrieving data using SQLAlchemy ORM](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] Now that we've added data to the database using the SQLAlchemy ORM, let's retrieve it. This will look very similar to what we did with SQLAlchemy Core, except instead of using a connection object, we'll be using the session. The first step is to create our [SQL](../../Skills/Data%20Science/SQL.md) statement. We'll use the select keyword to select a project where the title is Organize closet. To use this keyword directly, we can add it at the top. It's a part of the SQLAlchemy module. With our statement created, we can feed it to the session for execution and then print what's returned. Scalar allows us to retrieve the first row returned in the results. In this case, that's our project. We can use this return data to retrieve the tasks associated with it. We'll create a select statement where we query the task table and retrieve only the tasks with the organize_closet_project id. Let's write it out. This will return all the tasks associated with our project. Let's execute it with the session. Let's run the program. Our virtual environment is already activated, so we'll run the file with python3 database.py. Here are the tasks.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=96)** These are the tasks associated with our organize closet project. We can also see our organize closet project up above. Now, a lot of the stuff we've done here, we could encapsulate out into separate reusable and parameterized functions. We could continue to make this more Pythonic. Right now, a lot of the stuff is hard coded, including that username and password, which you should never do in production. These can easily be taken out in the future using a properties file or environment variables. But overall, this is a great start for getting your hands on SQLAlchemy with your [MySQL](../../Skills/Software%20Development/MySQL.md) database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **CLI Commands:** python3 (1), make (1), mysql (1)
> **Env Vars:** orm (1), sql (1)
> **File Paths:** database.py (1)
> **Code Identifiers:** organize_closet_project (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=0)** - [Narrator] In this challenge, you'll create a [MySQL](../../Skills/Software%20Development/MySQL.md) database, insert some data, and then query it for information. The database you'll be creating will represent a tech company's online sales. There are various customers, [products](../../Skills/Software%20Development/Microsoft%20Products.md), and orders. The columns in the database will be order_num, order_type, cust_type, cust_name, prod_category, prod_number, prod_name, quantity, price, discount, and order total. For this challenge, you'll create a database named Red30. That's the company's name. And you'll create a table called sales with five rows of data. Order_num should be the primary key. Using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), I want you to find what the most expensive order was and who ordered it. There are many different solutions to this problem and you're welcome to use MySQL Connector or [SQL](../../Skills/Data%20Science/SQL.md) Alchemy. There are many different solutions to this problem and you're welcome to use MySQL Connector or SQL Alchemy. To keep things shorter and simpler, I'll only be walking through the SQL Alchemy ORM version of the solution. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** order_num (1), order_type (1), cust_type (1), cust_name (1), prod_category (1)
> **CLI Commands:** mysql (3), python (1), find (1)
> **Env Vars:** sql (3), orm (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=5)** - [Instructor] Let's create a [MySQL](../../Skills/Software%20Development/MySQL.md) database and query it in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using the [SQL](../../Skills/Data%20Science/SQL.md) Alchemy ORM. First, we'll need to create the red 30 database, using the MySQL shell. We'll use the keywords "CREATE DATABASE" and add in red30. Let's configure it. We'll create a table called sales, with the appropriate columns defined in the challenge. We make the table directly with MySQL and not SQL Alchemy, because most of the time the database will already be created. As a software engineer, the main thing you'll be responsible for is querying the database, whether that's retrieving, deleting, or inserting data. Let's add a few rows to this table using the SQL Alchemy ORM. Here we have some code that sets up the connection to the red30 database. Then, we create a model based on an individual sale, that has attributes for each column in the sales table. We use this model to create sales and add them to the database using the session. Let's run this file and add these sales to the database. We'll exit our SQL shell, clear this up, and then activate our virtual environment.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=101)** We can access that environment in the MySQL SQL Alchemy folder. Then, we'll activate it. Then we'll run the file. In the output, we can see our data was added to the database. Let's double check this with the SQL shell. We'll deactivate our virtual environment and log into the shell.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=137)** And there's our data. It's been added to the database. Now let's use Python to calculate which purchased is the largest. We'll go back to our Python code and comment out these insertions. Let's make a new query. Here, we use the max function to select the row with the highest order total in the sales table. Since we're using select and func, we'll need to add these at the top as imports. They both come from the SQL Alchemy module. Let's execute this query. Session dot execute, and we'll pass in our query. We'll also use the scalar function, to convert it into a single result. That result, the max order total. (keyboard keys clacking) Another option is to return all the results but in descending order, based on order total. Here, we return all the items in the sale table but order them so that the total is descending. This means the largest order total will be first. Let's execute it. We're ready to run the file. With our workspace activated, we'll run it with python3 database.py. In the output, we can see the highest order total is 1500. In the descending entries that follow,
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=234)** we see that a little over a thousand is second, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the entries follow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (7), orm (2), create (1), database (1)
> **CLI Commands:** mysql (4), python (3), make (2), python3 (1)
> **File Paths:** database.py (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. Using PostgreSQL in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [What is PostgreSQL?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=0)** - [Instructor] Another commonly used relational database is [Postgres](../../Skills/Software%20Development/PostgreSQL.md). Similar to the other [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) we've looked at, data is organized into tables with columns and rows. But unlike [SQL](../../Skills/Data%20Science/SQL.md) light in [MySQL](../../Skills/Software%20Development/MySQL.md), Postgres is an object relational database. Postgres includes advanced features like table inheritance and function overloading which although are usually in object [Databases](../../Skills/Software%20Development/Databases.md) can be important to certain applications. Postgres advertises itself as the most advanced open source database system because it was created with the goal of being highly extensible and standards compliant. It's capable of efficiently handling multiple tasks at the same time, ensuring [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) while being ACID compliant, and it requires very minimal maintenance efforts due to its stability. Postgres also adheres more closely to SQL standards than MySQL. Postgres was designed to be extensible. You could define your own data types, add custom functions using programming languages and more. With Postgres, it's easy to develop plugins to replace any part of the system you don't like. All of this makes Postgres very scalable but it also makes it more complex to work with. Now these advanced features can come at the expense of speed. For every new client connection,
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=93)** Postgres forks a new process which requires 10 megabytes of memory, and that can add up quickly. Furthermore, if your application is very read heavy, it might be better to go with MySQL as it is more performant. Overall, Postgres is still less popular than MySQL. This means there are fewer third party tools you can use with it and fewer developers that will work with it. However, if there's a platform or tool that prefers Postgres by all means use it. It might be worth choosing it over another database like the other RDBMS' we've worked with, we can interact with our database in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using a Python module that follows the Python database specification - SQLAlchemy or another ORM. Like MySQL, Postgres follows a client server model. So we'll need to install a driver to interact with the database. Let's try it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (12), [MySQL](../../Skills/Software%20Development/MySQL.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **CLI Commands:** mysql (5), python (3)
> **Env Vars:** sql (2), acid (1), rdbms (1), orm (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating a PostgreSQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=0)** - [Instructor] Before we can create a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database, we need to install Postgres software.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=14)** Let's follow the instructions. We'll install everything except pgAdmin 4. Now for the password. This is really important that you remember this password. We'll use it later on in the course.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=38)** The setup's complete. Let's use it in our terminal. We'll need to configure it in our path. On Mac, this can be done by adding a line to our ZSHRC file. We'll export path and add the location where Postgres lives. That's Postgres/15/bin. Then Control + O, Control + X to exit. Then we'll set it up with our system with source and then the name of the file. Depending on what shell you're running, you may need to use a different file for this environment variable. To activate Postgres, we can use psql and log in with our root user. This is the default user we configured on the installation. We'll use that same password here and we're in. Let's create our database. We'll use the keywords CREATE DATABASE. We'll be using the same data from the last challenge, so we'll call it red30. To list the different [Databases](../../Skills/Software%20Development/Databases.md) that exist, we can run \l. A couple default ones come included with the installation. We can also see the database we just set up, red30. We can connect to this database with \c
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=131)** and then the name, red30. We're in. Next, we'll use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) to create a table in this database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Prerequisites:** install (2), setup (1), configure (1), set up (1)
> **Env Vars:** zshrc (1), create (1), database (1)
> **CLI Commands:** psql (1), python (1)
> **Code Identifiers:** pgadmin (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Creating a table in Postgres using Python](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=0)** - [Narrator] One way we can interact with our database in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is to use the psycopg2 module. We do have to install it with pip, so we'll create a virtual environment to interact with our database. We'll activate it and install our dependencies. In this case, that's psycopg2-binary. Like SQLite3 and [MySQL](../../Skills/Software%20Development/MySQL.md)-connector, this module is compliant with the Python database API. This means interacting with this module will look very similar to how we've used the other modules. However, under the hood, a different [Database Management](../../Topics/Database%20Management.md) system is used. Let's open up Sublime and connect to this database. We'll save our Python code in a file called database.py. It'll live in our [Postgres](../../Skills/Software%20Development/PostgreSQL.md) workspace. Here we've imported the psycopg2 module. We've also created a connection to our database, specifically the Red30 database. Let's grab the cursor and create a table. We'll create a sales table. This [SQL](../../Skills/Data%20Science/SQL.md) query will create our table. Let's commit this change. We'll do that with the connection,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=95)** and then close it up. Let's run it. Python3 database.py. Inside of our activated workspace, we didn't output anything to the console, so nothing appears. We can double check with our Postgres shell to see if our new table exists. We'll deactivate our workspace and log into the shell. We'll connect to Red30 and see our new table with /dt. And there it is. There's our sales table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Database Management](../../Topics/Database%20Management.md) (1), cursor (1)
> **CLI Commands:** python (3), pip (1), sqlite3 (1), mysql (1), python3 (1)
> **File Paths:** database.py (2)
> **Env Vars:** api (1), sql (1)
> **Prerequisites:** install (2)
> **Tools:** sublime (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### [Inserting data into a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's insert some data into this database so we actually have something to work with. We talked about a few different ways to do this in the last chapter with [MySQL](../../Skills/Software%20Development/MySQL.md). And many of those ways will also work with [Postgres](../../Skills/Software%20Development/PostgreSQL.md). That's because of how compatible database tools are in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). For example, we could use the cursor object and execute a command or we could use the SQLAlchemy expression language. We could even do it directly in the Postgres Shell. For now, we'll use the psycopg2 module to retrieve the cursor object and execute some insert commands. In this sample code, we have some data that we'll insert into the database. Each entry in the sales list represents an individual sale. We'll insert them by executing a [SQL](../../Skills/Data%20Science/SQL.md) query with the cursor objects executemany function. Here we insert a series of entries into the sales table. Each percent S stands for a value and a column. And the full set of S's represent a row. We execute this insert statement for as many entries as there are in the sales list. After inserting the data, we commit the changes and close the connection. Let's run it. Our workspace is activated, so we'll run python3 database.py. To check if our data has been added,
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=96)** we can use the Postgres Shell. Let's log in. We'll connect to the red30 database and select all the data from the sales table. And there it is. There's our sample data. Of course, these are just a few hard coded sales. What if we want to dynamically add sales? Next, we'll look at a way to do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (3), cursor (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** mysql (1), python (1), python3 (1)
> **Cross-References:** we talked about (1), in the last (1)
> **File Paths:** database.py (1)
> **Env Vars:** sql (1)
> **Exercise Files:** sample code (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)

#### [Interacting with a Postgres database using Python](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=0)** - [Instructor] Let's create a function that inserts a new sale into our [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database with dynamic data. Like in the other case with [MySQL](../../Skills/Software%20Development/MySQL.md), we'll pass the cursor in, but you could pass in the database connection instead. Inside this function, we'll calculate the order total. You might want to break this order total calculation into its own function to encourage a single responsibility design and break apart the business logic more. For now, we'll just put it here. The order total will be the quantity multiplied by the price. We'll also apply the discount if there is one. Now let's insert the item. We could use the same methodology as in the last video where we created a tuple and then inserted it, but this time we'll use named placeholders. We'll create a dictionary and a set of key value pairs. We'll call this our sale data. Then we'll pass this data to a [SQL](../../Skills/Data%20Science/SQL.md) statement. Here, each key in our query will be replaced by its associated value in the sale data dictionary. We've also written it in a way that protects it from a SQL injection attack. The database will use the specified type and value of each piece of data when executing the query. Now that our function is complete, let's use it.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=97)** In our main function, we connect to the database and then ask the user for a bunch of data. We could let the program determine the order number or let the user provide it. Here, the user provides it. With the product number, we could have another backend service retrieve more information about that product. Perhaps you could create another database with information about each product. The price information could be stored with that as well so the user wouldn't have to provide it. These are all potential improvements. After collecting the data, we call the insert sale function with the user's inputted data. Then we commit the changes and close the connection. Let's run the file. With our virtual environment activated, we'll run the file. We'll give it the order number 123. We'll say the product number as that. We'll say these are expensive pencils. Let's check our database to see if this was inserted.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=187)** There it is. We have Sarah who purchased a pencil, and purchased two of them, and they were 9.99. The order total was 19.98 because there is no discount. There's so many other SQL commands and clauses we could use in this application. If you want more practice, I encourage you to take a few common SQL commands and encapsulate them into functions that are customized to this particular application and database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), cursor (1)
> **Env Vars:** sql (4)
> **Versions:** 9.99 (1), 19.98 (1)
> **CLI Commands:** mysql (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Setting up SQLAlchemy Core to connect to a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=0)** - [Narrator] When we worked with the SQLite database, we used the SQLite3 module and SQLAlchemy Core. When we worked with [MySQL](../../Skills/Software%20Development/MySQL.md), we used the mysql-connector module and the full SQLAlchemy ORM. For [Postgres](../../Skills/Software%20Development/PostgreSQL.md), we've used the Psycopg2 module. Now we'll show you how to interact with it using SQLAlchemy Core and the full SQLAlchemy ORM. All three of these interfaces can be used to interact with the [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) we've worked with so far. We didn't introduce them all at once because there's a steep learning curve to some of the interfaces and introducing them over time with hands-on examples can help you get a sense of how each works before we compare and contrast them. As you've probably noticed, a lot of the behind the scenes work that reveals the difference between each [Database Management](../../Topics/Database%20Management.md) system is fairly abstracted to you. The interfaces, while they vary, work similarly with many relational databases. Alright, with all that covered, let's look at how to use SQLAlchemy Core to interact with our Postgres database. You're welcome to reuse the Postgres Virtual Environment Workspace we've already created, or you can create a new one. I'm going to reuse our current workspace, so I'll cd into it and activate it. Like in our examples with MySQL,
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=94)** we need to install SQLAlchemy to this workspace. We'll do that with pip3 install sqlalchemy.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=106)** Perfect. Since the Red30 database is already created and initialized with data, we can just connect to it in our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) application using whatever interface we want. In this case, we'll start off by using SQLAlchemy Core. In the code, we import a few things from SQLAlchemy. Then we established the engine and [Metadata](../../Skills/Web%20Development/Metadata.md) object. Previously we created the table in SQLAlchemy, but since the table is already created in the Red30 database we can autoload it with the engine. We just passed in the engine to the table statement. Then we connect everything up with metadata.create_all and the engine. Let's run it. Python3 database.py. And now we've just set up our Python application with SQLAlchemy Core so it can connect to a Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (2)
> **CLI Commands:** mysql (3), python (2), sqlite3 (1), cd (1), pip3 (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** orm (2)
> **File Paths:** database.py (1)
> **Code Identifiers:** create_all (1)
> **Speakers:** - [narrator] (1)

#### [Manipulating with Postgres data using SQLAlchemy Core](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=0)** - [Instructor] With the setup complete, let's walk through how to establish a connection to a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database using [SQL](../../Skills/Data%20Science/SQL.md) Alchemy Core. Engine dot connect creates a connection with the database. Inside the connection, we run a bunch of CRUD statements. CRUD stands for create, read, update, and delete. These are the main operations you'll run as you manipulate data in any database. Let's start with read. We pass in the sales table to a select statement and then select all the rows in the table. For each row, we print it out. Then we add a new piece of data to the database. It's a sale of a few books called "Understanding [Artificial Intelligence](../../Topics/Artificial%20Intelligence%20(AI).md)." Now, let's say the buyer, Syman Mapstone, gets the books in the mail and one of them has a few pages ripped out. We'd need to update the sales table so he gets a refund for the ruined book. We do that here with an update statement. We say, update the table where the order number is 1105910. Then update the values so that the quantity is two and the order total is 39. Once the statement is set up, we execute it with the connection. To confirm the update, we reread the table and find the item
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=93)** with the correct order number. We use a select statement and select the sale where the order number is 1105910. Then we print it out. Another operation we can use with [Databases](../../Skills/Software%20Development/Databases.md) is delete. We delete the item we just added by creating the statement and executing it with the connection. To confirm the delete, we use our selection statement from before and try to find our item. The row count will be 0 if the item does not exist, let's run it. We'll go to our Postgres workspace. The virtual environment is activated and we'll run it. In the console, we can see all the items printed from the database with our select statement. We add in our new sale and then update it to a quantity of 2. That's what we see in the printout. The new item with quantity 2. Once we've deleted it, we get a row count of 0 when we try to select it again. We've just completed the basic CRUD operations using SQL Alchemy Core in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** crud (3), sql (2)
> **CLI Commands:** find (2), python (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** setup (1), set up (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Setting up SQLAlchemy ORM to connect to a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's access our data in [Postgres](../../Skills/Software%20Development/PostgreSQL.md) using the SQLAlchemy ORM. Unlike SQLAlchemy Core, we'll be using classes and models to represent our data. Let's walk through this code. To start, we connect to the database using an engine. Then, we set up the schema. When we used the ORM previously in this course, we wrote out the table's full schema in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). There's several benefits to doing this because it makes it very clear what you have access to within the table as you're coding. Another option though, is to autoload the entire schema. This means you don't have to write out and hard code every single column in the database. We can do this using the automap base function and then set up the base with the engine using the prepare method. To access the sales model, we just need to access the classes with base. Let's run it. And now, we've just set up our Python application with the SQLAlchemy ORM, so it can connect to a Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** orm (3)
> **Prerequisites:** set up (3)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)

#### [Manipulating with Postgres data using SQLAlchemy ORM](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] With the set up complete, let's walk through how to establish a connection to a [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database with [SQL](../../Skills/Data%20Science/SQL.md) Alchemy O-R-M. We start by setting up a session. This is how we'll communicate to the database. Inside the session we use the four CRUD operations: create, read, update and delete. We read an item using the select statement. Then we order the results by order total. This returns the smallest sale row and we print out its order total. Next is create, or, insert. We create a new sale using the model and add it to the database using the session's add method. It isn't fully added to the database until we commit the change, so we run the commit method to complete the transaction. The recent sale object we created is connected to the database. This means, if I update the object, I will also update the database. Here we update the recent sale to have a quantity of two and an order total of thirty nine. Then we check to see if the sale is updated by running a select statement and filtering for the order we just inserted, using the order number. To see if the sale is updated, we print out the quantity and order total. These should be two and thirty nine,
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=92)** because that's what we updated them to. Finally, we have delete. To delete a sale, we can pass in a sale object to the session. Here, we delete the object we've been working with. To save the change we committed, let's run this program. We'll activate the workspace and run the file. In the output, we see $19.98 as the smallest sales total. We also see the updated values for our inserted sale; two for the quantity and thirty nine for the total. We've accessed our Postgres database in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) using the SQL Alchemy O-R-M. Let's take a second to reflect. If our database was in "My SQL" or "SQL Light 3" instead, all we would need to do is change our input to the create engine function. Of course, usually you won't be switching between relational [Database Management](../../Topics/Database%20Management.md) systems, but if you want to migrate your database from one to the other, this makes it fairly straightforward, because most of your Python code can remain the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Database Management](../../Topics/Database%20Management.md) (1)
> **Env Vars:** sql (4), crud (1)
> **CLI Commands:** python (2)
> **Versions:** 19.98 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=0)** - [Narrator] In this challenge, I want you to create a database that stores authors and the books they've written. The database will contain three tables, authors, books, and AuthorBooks. Each record and authors will have an ID, first name and last name. Each record in books will have an ID, title and number of pages. Each record in AuthorBooks will have an ID, a corresponding author ID, and a corresponding book ID. We separate the author book pairings into a separate table because it allows us to easily store multiple books by the same author while allowing us to have lots of data on each table. For books with multiple authors, multiple entries would be added to the AuthorBooks table, each entry with a different author. You're welcome to create this database using psycopg2, SQLAlchemy Core, or SQLAlchemy ORM. I'll show you one solution using the SQLAlchemy ORM, but there are many you can choose from. Once you have the database in place with the appropriate tables, it's time to add functionality to add a new book to the database. A few operations must take place in order to do this correctly. First, the books table should be updated with the new book.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=96)** If the author is a new author, the authors table should be updated to include the new author. If the author is not new, the author should not be inserted again. With the authors and books database set, you should add the new pairing to the AuthorBooks table. We'll assume the book has only one author. All of this should be done within a transaction, so the database never falls into an incomplete state. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** orm (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's create a database that stores authors and the books they've written. We'll create our database using the [postgres](../../Skills/Software%20Development/PostgreSQL.md) shell. We'll use the keywords CREATE DATABASE, and we'll call it library. And there it is in our [Databases](../../Skills/Software%20Development/Databases.md) list. Let's connect to it.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=32)** To make this walkthrough a little more fluid, I've written out all the ORM code in advance. We'll talk through each piece of code as we get to it. To start out, we import some tools from the sqlalchemy libraries and create an engine. We're using postgres and connecting on localhost to the library database. Our user and credentials are also in the string. Since we're creating our tables with sqlalchemy, we can't automap just yet. We need to write out each column and its data type, and that's what we see here. We create the registry and generate the Base from the registry. Then we use this Base to create the models. The Author model has an author_id, first_name, and last_name. The Book model has a book_id, title, and number_of_pages. Our last model, BookAuthor, associates our author and book data. In this case, that's our book_id and author_id. With this model, we use foreign keys to link the ids and set up a relationship between this table and the other tables. Once our models are set up, we can create them with the engine. Now, we'll jump down to the bottom of the file where the core execution takes place. That's on line 76.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=126)** Here, we retrieve data from the user to input into our database. We ask the user for the title of the book, number of pages, and then information about the author. To input the data into the database, we use the add_book function. Let's look at the implementation. The add_book method takes in data we want to add to our database. We start off by creating instances of the author and book from this passed-in data. Then we begin the session. We don't want to add any data that already exists. This means before we add a new book, we should run a query to check if the book already exists in the database. We do this by using the select function and filtering where the book's data is the same as the data passed in. If the book exists, meaning the entry is not none, we print out a message to the user and exit the function. If, in fact, the book does need to be added, we add it with the session. Then we do the same thing with the author. We check to see if the author's already been added to the database. If the author exists, we only add the book and then create the pairing between the existing author and the new book. If the author does not exist,
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=219)** we add the author and then create the pairing. We have to flush the session because otherwise the author_id on the new author would not exist. Same for the book_id. That's why we have to flush the session. It updates the object so the id is not null. Once we've updated the book and author tables, we need to update the pairing table. We do that by adding the pairing to the session and then committing the changes. Our commit will automatically do the flush for us. At the end, we print the new information we've added to the database. Let's run it. We'll activate our workspace and run the file. Let's add a book. We'll add "The Huntress" which is 560 pages by Kate Quinn. We add the book and the author. Let's add another book. We'll add "The Institute" which is 576 pages by Steven King. Now, let's try adding a book where the author is already in the database. We'll add "The Diamond Eye" by Kate Quinn. The author already exists
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=314)** so we don't add it to the database. The author_id is 3, and if we scroll up, the other book we added also had author_id 3. Both books map to the same author. Let's see what this looks like in the postgres shell.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=340)** We'll select everything from the authors table. We've Kate Quinn with author_id 3 and Steven King with author_id 4. Now, let's check the books table. We've three books with different book_ids. Now, let's check the bookauthor table. And it's bookauthors. Here, we can see each bookauthor_id. For this pairing, we have author_id 3 and book_id 4. That's Kate Quinn and "The Huntress." Then we have author_id 4 and book_id 5. That's Steven King and "The Institute." Then we have the last entry, author_id 3, so that's Kate Quinn, and book_id 6, "The Diamond Eye." Our data has been added and organized in the Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Code Identifiers:** author_id (10), book_id (6), add_book (2), first_name (1), last_name (1)
> **Env Vars:** create (1), database (1), orm (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue using databases in Python applications](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=0)** - [Kathryn] Congratulations on finishing the course! From learning about the different types of [Databases](../../Skills/Software%20Development/Databases.md) used with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) to actually interacting with them in code using the SQLAlchemy ORM, you've learned a lot. You can now populate data into your application or even modify data in your relational database using Python. From here, I encourage you to check out some of the other Python courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. For diving deeper into databases, try some of the courses that focus solely on your database of choice, SQLite, [MySQL](../../Skills/Software%20Development/MySQL.md), or [Postgres](../../Skills/Software%20Development/PostgreSQL.md). Understanding the nuances of the technologies your application interacts with can be the difference between spending a week on a coding problem versus an hour. You may also want to start integrating dynamic data into more sophisticated applications. Look into Flask, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) and other Python technologies that use dynamic data to create webpages or build charts that help you analyze data. In fact, you can check out the companion course to this one to see practical examples of how to use databases with Python in real world applications. Becoming a better software engineer doesn't end with mastering a single programming language. You may have stepped out of your comfort zone by taking this course involving databases, and I hope it encourages you to continue stepping out of your comfort zone
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=94)** as a technologist. There's always something new to learn. My name is Kathryn, and I hope to see you again in some of my other LinkedIn Learning courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **CLI Commands:** python (5), mysql (1)
> **Env Vars:** orm (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [Kathryn Hodge](../../Instructors/Software%20Development/Kathryn%20Hodge.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-working-with-databases-4365479)

## Skills Covered

- Databases
- Python (Programming Language)

## Path Context

### In [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
← [Unit Testing in Python](Unit%20Testing%20in%20Python.md) | **8 of 11** | [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) →

### In [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)
← [Advanced Python- Working With Data](Advanced%20Python-%20Working%20With%20Data.md) | **3 of 8** | [Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md) →

## Appears In

- [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
- [Master Python for Data Science](../../Paths/Database%20Management/Learning%20Paths/Master%20Python%20for%20Data%20Science.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)