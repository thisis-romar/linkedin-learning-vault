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
  - '[[Master Your Python Skills]]'
  - '[[Master Python for Data Science]]'
prev_courses:
  - '[[Unit Testing in Python]]'
  - '[[Advanced Python- Working With Data]]'
next_courses:
  - '[[Python- Working with Predictive Analytics (2019)]]'
  - '[[Python Data Structures and Algorithms]]'
path_nav: '[{"path":"Master Your Python Skills","position":8,"total":11,"prev":"Unit Testing in Python","next":"Python- Working with Predictive Analytics (2019)"},{"path":"Master Python for Data Science","position":3,"total":8,"prev":"Advanced Python- Working With Data","next":"Python Data Structures and Algorithms"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/database-management
  - skill/databases
  - skill/python-programming-language
status: not-started
created: 2026-05-02
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=0)** - [Instructor] When creating [[Python (Programming Language)|Python]] programs, you'll likely want to populate data in an application automatically, or save data between user sessions.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=8)** [[Databases]] help you to do this.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=10)** They provide an organized structure so you can easily access, store, and manage large amounts of data.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=18)** In this course, we'll look at how to use databases in Python 3, we'll create databases in SQLite, [[MySQL]], and [[PostgreSQL|Postgres]].
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=27)** Then we'll experiment with those databases using special Python modules that implement the Python database API, as well as an object relational mapping tool called SQLAlchemy.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=38)** Hi, my name is Kathryn Hodge and I'm a software engineer.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-databases-to-level-up-your-python-applications?u=76281980&t=42)** Join me in my [[LinkedIn]] learning course, all about working with databases and Python, so you can level up your Python applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Databases]] (5), [[MySQL]] (1), [[PostgreSQL|Postgres]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (6), mysql (1)
> **Env Vars:** api (1)
> **Versions:** python 3 (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Databases in Python

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a database?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=0)** - [Instructor] First, what is data?
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=3)** Data is information.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=5)** Think a birthday, someone's name, the color of the sky.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=9)** It could be information about anyone or anything.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=13)** Images, computer files, and PDFs are also data.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=18)** When you have data, you might want a place to store it, and you can store it in a database.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=25)** A database is an organized collection of data.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=29)** For example, you could have a database with a collection of student names associated with their current GPAs and class year.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=38)** The data would be each student name along with the other data associated with that name.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=45)** In this case, current GPA and class year.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=48)** You could also have a database with a bunch of your favorite photos.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=53)** This database would consist of a group of photos where each photo is a piece of data.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=60)** What data is in the collection is really up to you.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=64)** So why must the data in a database be organized?
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=68)** Information or data must be organized so it can easily be accessed, managed, and updated.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=76)** For the favorite photos database, this means if you want to add a new photo your database should be organized in a way that makes it easy to do that.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=86)** For your student names database, if you want to get a list of students that have a certain GPA, your database should be organized in a way that makes that functionality accessible.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=98)** [[Databases]] support storage of data, as well as manipulation of that data, so it makes sense that they require some kind of data to store as well as a way to organize that data so it's easy to manipulate.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=113)** To add, remove, and access data in a database, we often use a special query language to talk to the database.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-a-database?u=76281980&t=121)** You may have heard of relational or non-[[Relational Databases]], and we'll look at these in upcoming lessons, but they're different types of databases that organize data in different ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Relational Databases]] (1)
> **Env Vars:** gpa (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Relational databases](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=0)** - [Instructor] One common type of database is a relational database.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=4)** A relational database consists of a collection of data with predefined relationships between its contents.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=11)** This means data in a relational database has a relationship with at least one other piece of data in the database.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=20)** Often, the collection of data is organized into tables with rows and columns.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=27)** Each column in the table holds a certain type of data and each row has a set of values related to one entity.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=36)** Let's take a look at an example.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=38)** This is a depiction of a relational database named School with a single table named Students.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=46)** The Students table has three columns, Name, GPA, and Class Year.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=51)** Each row holds information about a given student.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=55)** For example, in the first case, we have Sally with the GPA of 3.65.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=63)** Her graduation year is 2027.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=67)** All of this information is about Sally the student.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=70)** We often call each row of record in the database because if we added another entry or another record to this database, we would be adding another row, another set of data with the Student Name, GPA, and Class Year.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=87)** Some of these values could be null, but an entire row or record would still be added.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=94)** Given that, each row must have a unique identifier that allows us to identify it.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=100)** This way, we don't confuse two pieces of data.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=104)** Here, we've added an ID column that gives each student an ID.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=110)** With the ID column, we won't confuse two students that have the same name or graduate in the same year.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=118)** Now, this example only had one table, but I could have multiple tables within a database, say a table for offered classes.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=129)** To relate these tables, I would need a foreign key.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=133)** A foreign key establishes a relationship between two different tables and connects rows among multiple tables.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=141)** This allows us to access the data in various different ways without reorganizing the database itself.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=149)** The main thing to remember with the relational database is that we identify and access data in relation to other pieces of data, whether that's data in the same row or data across tables.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=163)** In order to create and update a relational database, we'll need to use a relational [[Database Management]] system or an RDBMS.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=173)** This is a special type of program that allows us to work with [[Relational Databases]].
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=178)** You may have heard of them before, but some common examples of management systems are SQLite, [[MySQL]], and [[PostgreSQL|Postgres]], and we'll be working with all of these in [[Python (Programming Language)|Python]] in this course.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=192)** Many of these relational database management systems use the [[SQL]] language to access the database.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=199)** SQL stands for Structured Query Language, and it's a language we can use to communicate with our database.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=207)** Now, I know what you're thinking.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=209)** A new programming language?
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=211)** No way.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=212)** I already know Python.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=214)** Well, I have good news for you.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=216)** SQL is not a programming language, and in fact, its syntax changes depending on which relational database system you use.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=226)** Since we'll be working with these [[Databases]] in Python, there are a few ways we'll be able to connect to and manipulate our databases, including with SQL, but it can be useful to understand a few basic queries to grasp the bigger picture.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=243)** The first statement you should know is the SELECT statement.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=247)** This SELECT statement selects and returns all of the data from the students' table.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=253)** Students represents a table, not a database, which would've been configured prior to this.
>
> **[4:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=260)** Instead of selecting the entire table, we could select a specific column from the table.
>
> **[4:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=267)** This statement would return all the student names in the Student table, but not information about each student's class year, or GPA.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=278)** Perfect.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=279)** Now we know how to retrieve information from our database.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=284)** What about updating data, filtering data, or inserting data?
>
> **[4:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/relational-databases?u=76281980&t=290)** As we continue through this course, we'll pick up more SQL along the way as we need it, but most SQL statements reference SELECT, column names, or a table in some way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Python (Programming Language)|Python]] (3), [[Database Management]] (2), [[Databases]] (2), [[Relational Databases]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=0)** - [Instructor] Although we will not be working with non-[[Relational Databases]] in this course, it's important to understand what they are and how they differ from relational databases.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=12)** A non-relational database does not use tables and rows like a relational database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=19)** Instead, the storage model is optimized for the type of data being stored.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=24)** And the storage format can vary depending on the data.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=29)** For example, data may be organized and stored as [[JSON]] documents, key-value pairs, or as a graph with edges and vertices.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=41)** This type of database has grown in popularity to meet [[Big Data]] demands and handle unstructured diverse data that does not fit neatly into rows and columns.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=54)** There are four main types of non-relational databases.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=58)** First, there is the document data store or document database, which is designed to store and query JSON-like or XML-like data.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=69)** Each piece of structured data is a document, which is flexible, semi-structured, and unique, and whose format can change over time.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=80)** In this example, we have two entries or two documents, one with the name Susie Campbell and an associated, cell, email, and birthday.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=91)** The other one has the name Mark Watson and an associated birthday.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=97)** Not every entry has to have the same number of attributes or even the same attributes as the other entries.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=106)** This makes it more flexible than a relational database.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=110)** However, each document should have a specific key that allows you to retrieve the document quickly.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=118)** You can also query by specific fields contained inside.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=123)** [[MongoDB]] and DynamoDB are popular non-relational databases that support document database models.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=131)** Another type of database is a columnar database.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=135)** Although it's organized in a table, the database is organized by columns.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=142)** Looking at this example, if I collapsed this table into a list and it was organized as rows, I would list out the first row, then the second row, then the third row.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=155)** If this was organized as columns, I would list out the first column with all the IDs, then the column with all of the names, and so on.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=166)** With columnar [[Databases]], each row can also have a different set of columns.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=173)** This is similar to what we saw with the document database earlier.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=177)** Cassandra is another popular non-relational database used with [[Python (Programming Language)|Python]].
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=183)** It's a cross between a key-value and columnar database.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=189)** The last database we'll talk about is a graph database.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=193)** Graph databases are based on modeling your data as a graph, with a collection of nodes and edges.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=202)** The nodes represent your data, and the edges represent the relationship between your pieces of data.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=210)** This is ideal for modeling small individual pieces of data with deeply interconnected and complex relationships.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=219)** [[Neo4j]] is a graph database often used with Python.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=224)** Now, you may have heard of non-relational databases referred to as [[NoSQL]] databases.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=231)** The term NoSQL refers to not only [[SQL]], meaning when querying the database, other programming languages and constructs are used.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/non-relational-databases?u=76281980&t=243)** In the following chapters and lessons, we'll be looking less at how databases work and more at how they can be used in a Python program with the Python programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (5), [[Databases]] (4), [[Python (Programming Language)|Python]] (4), [[JSON]] (2), [[NoSQL]] (2)
> **Definitions:** is a  (4), refers to (1)
> **CLI Commands:** python (4)
> **Env Vars:** json (2), xml (1), sql (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Python Database API](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=0)** - [Instructor] In order to access and use a database in [[Python (Programming Language)|Python]] we'll often use the given database's module.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=8)** These modules could have completely different syntax for how we interact with them, but since there are so many different [[Database Management]] systems Python has created a common specification to follow so that programmers can manage their [[Databases]].
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=26)** This specification is called the Python Database API and it encourages conformity between the Python modules that are used to access databases.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=38)** This allows code to be more transferrable across databases and broaden the [[Database Systems]] used in Python.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=46)** Nearly all Python database modules conform to this interface, so once you learn how to use databases with one module it's easy to pick up and understand code from others.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=59)** Let's take a look at the Python database API specification so we can see what the syntax might look like across many database modules for given functionality.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=71)** First, in order to conform to the Python database API specification access to the database must be provided through a connection object.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=82)** To do this, each database module must implement a connect function that returns a connection object.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=90)** This connection object is a connection to the database.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=94)** With the connection object, we can close the connection, we can commit any pending transactions to the database, or if the database supports rollbacks we can roll back to the start of any pending transaction.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=110)** We'll talk more about transactions later but they're a set of all or nothing changes made to the database.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=117)** With this connection object, we can also grab a [[Cursor]].
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=122)** The cursor object allows us to interact with the database.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=126)** We can execute certain commands that insert, delete, or manipulate our data.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=132)** We can [[Fetch]] data with fetch one, which returns one row of data or fetch more data with fetch many or fetch all.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=141)** Since many databases have a strict set of types for their data, a given module must provide constructors for objects that hold special values.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=152)** When this data is passed to the cursor methods for an insertion or other executions the proper type should be detected and bound correctly.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=162)** Now, we did not cover everything that's included with the Python database API but we've covered the most commonly used components.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=172)** You can check out the Python Enhancement Proposal for this specification for more details.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/python-database-api?u=76281980&t=179)** In the next chapter, we'll use SQLite's implementation of the Python database API with their SQLite 3 module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Databases]] (5), [[Fetch]] (5), [[Database Management]] (1), [[Database Systems]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=0)** - [Instructor] One relational [[Database Management]] system is called SQLite, and we can use it with the sqlite3 module in [[Python (Programming Language)|Python]].
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=9)** This provides an interface that is compliant with the Python database API specification.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=15)** The lite in SQLite means the management system is light in terms of setup, administration, and resources.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=23)** Unlike other [[Databases]], SQLite does not require a server to run.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=29)** Normally, an RDBMS requires a server to run where the database lives and the application communicates with the remote database.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=40)** Instead, a SQLite database is integrated with the application locally and the database files are stored on disk.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=49)** This makes accessing and manipulating data in the database extremely fast.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=54)** With no server, there is no need to install any SQLite drivers before using it, and there are no server processes that need to be configured.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=65)** SQLite is also self-contained, meaning it does not require many external libraries or much support from the operating system to run.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=75)** This means you can use SQLite on many different platforms, including embedded devices such as mobile phones, gaming consoles, and more.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=85)** If you're familiar with ACID compliance, all transactions in SQLite are ACID-compliant.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=93)** A transaction is a set of changes that you want to take place all at once.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=98)** And ACID-compliance stands for atomic, consistent, isolated, and durable.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=104)** This means if transactions within a database are ACID-compliant, all of the queries in that transaction either take place or they do not take place at all.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=116)** You'll never be in a half done state in the case of a program crashing.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=121)** SQLite can also be a great starting point to prototype your application.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=127)** Then you can port your code to a larger database later on.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlite?u=76281980&t=131)** Of course, once you get to production, you'll want to use the same database locally and in prod to avoid any unexpected errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Database Management]] (1), [[Databases]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=0)** - Let's create a SQLite3 database in [[Python (Programming Language)|Python]].
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=4)** First, we'll open up our Python file.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=8)** That's app.py.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=12)** To create our database, we'll import the SQLite3 module.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=16)** This will let us access the functionality needed to build the database.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=22)** This module follows the Python database API specification, so we'll grab a connection object with the connect function.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=31)** Since we haven't created any [[Databases]] yet, this connect function will create the database.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=38)** The next time we run this function, connect will just connect us with the already created movies database.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=46)** To create our first table in this relational database, we'll need to grab the [[Cursor]] object.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=53)** With the cursor, we can now execute commands and queries on the database.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=59)** Our first command will be to create the table.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=63)** We'll write cursor, and then execute to execute the command.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=69)** We'll write the command in triple quotes.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=72)** A [[SQL]] command will be used to create the table.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=77)** To create a table in SQL, we'll write CREATE TABLE IF NOT EXISTS.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=84)** This will create the table, if it does not already exist in the database.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=90)** Then we'll write the name of the table.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=92)** In this case, Movies.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=95)** And now the name of each column and its type.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=99)** We will have the columns title, director, and year.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=103)** Title will have the data type TEXT.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=107)** Director will also have this same data type, and year will have the INT data.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=117)** SQLite does not have a date time data type, so we could use text, a real number, or an integer to store it.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=125)** We're using an INT to keep things simple.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=128)** Now, this isn't the perfect database schema.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=131)** I could have another table that lists out the directors and link it to this table so I don't have to repeat director names.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=139)** I could also change the schema to accommodate movies with more than one director.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=145)** Since this course is focused on using databases in Python rather than database modeling, we'll keep it like this for now.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=153)** Before moving on to the next lesson, let's save our changes.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=157)** In this case, that's the change of creating the database and the table.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=163)** To save changes, we'll write connection.commit.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=168)** Then we'll close the connection.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=171)** We'll save the Python file with Command+S and we'll run it.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=177)** We'll run it using the terminal.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=179)** I'm already in the directory where the app.py file lives.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=184)** To run it on a Mac, we'll use python3 app.py.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=191)** If we run ls, we'll see that this script created the movies.db file.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=198)** That's our movies database.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=201)** We can also see it in the Finder.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=205)** It's important to note that we could put a full path in the connect argument and it would write to a given location on our computer.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-an-sqlite-database?u=76281980&t=214)** For now, we'll keep it as movies.db, which assumes the database file is in our local folder where we're running the Python script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Databases]] (2), [[SQL]] (2)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=0)** - [Instructor] With our first table created, we can start adding data to our SQLite database.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=6)** For the first entry, we'll add Martin Scorsese's Taxi Driver.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=12)** We'll use the execute function on the [[Cursor]] and an insert [[SQL]] command to insert the data.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=19)** We'll insert this data into the Movies table where the values are Taxi Driver for the title, Martin Scorsese for the director, and 1976 for the year.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=36)** This execute line will insert the first entry or our first record into the Movies database.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=44)** Now let's select or retrieve this entry and prove it's actually in our database.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=51)** We'll write cursor.execute.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=54)** We'll select everything from the Movies table.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=59)** We've selected the data, but to actually retrieve it in [[Python (Programming Language)|Python]], we have a few options.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=65)** First, we can use the [[Fetch]] one function to retrieve a single row.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=71)** Another option is to iterate through everything resulting from the execute statement.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=77)** We could also return all the results with a fetch all command.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=82)** Let's try using fetch one first.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=86)** We'll print cursor.fetchone.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=90)** To save our database changes, we commit them and then close the connection.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=96)** Let's run this script and see if it retrieves the Taxi Driver entry.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=103)** I'm in the folder where the Python script lives.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=107)** This is also the same folder where the database file lives.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=112)** Let's run our Python script, python3 app.py, and there's our entry, Taxi Driver, Martin Scorsese, 1976.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=125)** Now, every time we run this script, it would insert the Taxi Driver entry.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=132)** We don't want to duplicate the Taxi Driver entries so let's comment out the insertion.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=138)** You could also use an if statement to see if the entry exists before inserting it.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=144)** If one doesn't, it would add one to the database.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-your-first-record-into-an-sqlite-database?u=76281980&t=148)** Since we're just getting started, commenting out is fine for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Fetch]] (3), [[SQL]] (1)
> **CLI Commands:** python (3), python3 (1)
> **File Paths:** app.py (1)
> **Env Vars:** sql (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Adding multiple records at a time to an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=0)** - [Instructor] Let's say we want to add a bunch of movies to our database, not just one.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=6)** To achieve this, we'll create the data we want to insert into the database first.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=12)** It'll be a tuple containing three values for each film.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=16)** Then we'll combine the tuples into a list to create a famous films collection.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=24)** We'll start with Quintin Tarantino's "Pulp Fiction".
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=28)** Then we'll add "Back to the Future".
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=31)** The last one we'll add is "Moonrise Kingdom".
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=36)** We can add these movies to our database with just one line of code.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=40)** We'll use the execute mini function on the [[Cursor]] object.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=46)** We'll insert these movies into the movies table.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=51)** This statement will look at each tuple within famous films and fill in the three placeholder question marks with their values.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=60)** Then it'll run insertion for each tuple.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=64)** This means that "Pulp Fiction", Quentin Tarantino, 1994, would be the first set of values inserted.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=72)** Then the "Back to the Future" data would be inserted.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=75)** Finally, the "Moonrise Kingdom" data would be added to the database.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=80)** Let's execute the select statement again and see if all the entries are returned.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=86)** This will confirm they're added to the database.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=90)** Since we're using the same movies.db file as before, we should also see Martin Scorsese's "Taxi Driver" with this select statement.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=102)** To iterate through all of the matching results or the results of this sequel statement, we can call the [[Fetch]] all function.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=111)** Now, it's important to remember that the cursor acts as a pointer for looking at the returned data.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=117)** So once we iterate through the results of the cursor once, we cannot iterate through it again.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=124)** This means if I tried to print out cursor dot fetch one now, it would return empty.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=130)** The cursor resets after each execute or execute many command.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=136)** Let's run this file and see what happens.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=141)** I'm in the folder where both the app.py file and our database file live.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=147)** Let's run our script.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=149)** Python3 app.py.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=153)** And there's our data.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=155)** We see the three movies we added along with Martin Scorsese's "Taxi Driver".
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-multiple-records-at-a-time-to-an-sqlite-database?u=76281980&t=161)** This is exactly what we expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2)
> **File Paths:** app.py (2)
> **CLI Commands:** python3 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Filtering records in an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=0)** - [Instructor] With the data inserted and in place, let's try filtering the results by only selecting the movies that were released in 1985.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=9)** First, we'll create a variable called release year.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=14)** And we'll set it to a tuple containing 1985.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=20)** Now you might be thinking, why a tuple?
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=23)** Why not just make it 1985?
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=26)** We'll address this soon, I promise.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=29)** To filter the results by those released in 1985, we'll use the [[Cursor]]'s execute function again.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=37)** We'll select all the movies in the movies table.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=42)** And add a where clause, where the year is the release year.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=49)** In our case, that's 1985.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=52)** With this statement, we use [[SQL]] to select all of the movies and then filter by release year.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=59)** Since this is the execute function and the tuple is the second parameter, this will only be executed one time.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=67)** Now you might be thinking, why don't we just use string operations to assemble the SQL query, with the appropriate values?
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=76)** Doing so is actually very insecure.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=79)** It makes your program vulnerable to a SQL injection attack.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=83)** If you need to use values from [[Python (Programming Language)|Python]] variables and your SQL statements, this is the way to do it.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=90)** Use the question mark placeholder and provide a tuple of values as the second argument, in the execute or execute many function, just like we've done here.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=101)** Let's retrieve the data returned by the select statement.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=105)** We'll print cursor [[Fetch]] all.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=108)** This will return all the movies that were released in 1985.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=114)** Let's run it.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=115)** (keyboard keys clacking) I'm in the folder with the app.py file and the movies database file.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=123)** We'll run Python app.py.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=126)** And we get one movie back, "Back to the Future" from 1985.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=132)** So we've shown a few different SQL commands here, but many other SQL statements, including those with update and delete, can also be used here.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=143)** Unfortunately, these hard-coded SQL statements can be difficult to work with sometimes.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=149)** To mitigate this, you can break down commonly used sequence statements out into their own functions, with their own error handling to use as needed.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/filtering-records-in-an-sqlite-database?u=76281980&t=160)** Or, you can even avoid hard-coded SQL strings altogether, with SQL Alchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Python (Programming Language)|Python]] (2), [[Fetch]] (1)
> **Env Vars:** sql (9)
> **CLI Commands:** python (2), make (1)
> **File Paths:** app.py (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [What is SQLAlchemy?](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=0)** - [Instructor] Sometimes, writing [[SQL]] queries in [[Python (Programming Language)|Python]] code can seem a little out of place.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=6)** That's why many Python developers use an object-relational mapping tool, or an ORM, to work with [[Databases]] in a more Pythonic way.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=15)** ORMs allow you to work with Python or your language of choice instead of SQL to query and manipulate data in your databases.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=26)** Now, there isn't just one ORM you can use in Python.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=30)** Various libraries implement this functionality and overall concept.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=35)** And SQLAlchemy is one of the most popular ones for [[Relational Databases]].
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=41)** SQLAlchemy also works with varying web frameworks, including Flask, and databases such as SQLite, [[MySQL]], and [[PostgreSQL|Postgres]], which is why we're focusing on it in this course.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=54)** Even if your Python script is just a data analysis tool that interacts with the database, you can still use SQLAlchemy.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=63)** Now, SQLAlchemy is a large SQL toolkit, with lots of different components, including an ORM.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=70)** And these components can be used individually or combined together.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=76)** Although we won't be going through all of its components, the two largest sections are SQLAlchemy Core and the SQLAlchemy ORM.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=86)** While both have different ways of interacting with your database, the biggest difference between these two is that SQLAlchemy Core has a schema-centric view, which is focused around tables, keys, and SQL concepts.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=101)** SQLAlchemy encapsulates the schema with business objects.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=107)** This means encapsulation makes your database interactions feel more like Python code.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=114)** With SQLAlchemy ORM, you abstract many of the underlying database concepts.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=120)** With SQLAlchemy Core, you use the SQL Expression Language, which is a mild abstraction of the typical SQL language.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=129)** This allows it to be a consistent language across many relational databases.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=135)** The SQLAlchemy ORM is focused around the domain model of the application.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=141)** It also leverages the unit of work pattern to maintain consistency between objects and the database.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=149)** It provides a higher level of abstraction on top of the SQL Expression Language.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=155)** This enables the user to abstract database concepts even more, allowing you to work with your database in an object-oriented way.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=165)** Even if you're using the ORM, you're still welcome to use the SQL Expression Language as well, since the ORM is built on top of Core.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=176)** Now, if you're a master at SQL, you'll likely be able to write more performant queries with SQL than with the abstracted ORM.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=186)** On the flip side, if you're not familiar with SQL, the ORM can give you some pretty fast queries right out of the box.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=195)** Using an ORM also shifts the database complexity into the application code rather than keeping it in its own system.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=203)** With the abstraction, an ORM can prevent you from understanding what SQL and other technologies are doing under the hood.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=212)** But since it simplifies working with the data layer immensely, many developers choose to use one.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=219)** Now, with the introduction of SQLAlchemy 2.0, Core and the ORM are becoming more integrated, meaning SQLAlchemy as a whole will be more unified.
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=232)** Currently, there are a bunch of different ways to do the exact same thing in this library.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=238)** But the creators want to make it more simplified.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=242)** This effort is currently in progress with SQLAlchemy 2.0 and will be in progress for some time.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-sqlalchemy?u=76281980&t=249)** But the first version of SQLAlchemy 2.0 has been released, and we'll be using it in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (12), [[Python (Programming Language)|Python]] (6), [[Databases]] (3), [[Relational Databases]] (2), [[MySQL]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=0)** - [Instructor] With SQLAlchemy ready to go, let's import the data from our movies database.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=6)** Inside of our folder, we have a movies.db file and a [[Python (Programming Language)|Python]] file named database.py.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=15)** Let's open this Python file.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=17)** Inside of here, we'll retrieve our data from the movies.db file using SQLAlchemy.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=25)** To use SQLAlchemy, we'll write import sqlalchemy.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=30)** In this example, we'll be using SQLAlchemy Core to run [[SQL]] statements against the database.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=38)** Later on in the course, we'll experiment with the SQL expression language and the ORM.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=44)** The next step is to connect to the database.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=47)** We can do this by using SQLAlchemy's create_engine function.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=53)** We'll be connecting to a SQLite database, so write sqlite, and then the name of our database, movies.db.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=64)** If this file does not exist, it would create it, and in turn, create the database.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=71)** We'll also include echo=True so we can see extra logs that describe what SQLAlchemy is doing behind the scenes.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=81)** Once the engine is created, we'll save it in a variable called engine.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=86)** Now, this engine is not the same thing as the Python database API's connection object.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=92)** The engine is the starting point for the SQLAlchemy application.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=97)** It's the home base with which database connections can be formed.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=102)** The engine allows your application to have multiple database connections, and it manages those connections.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=109)** From the engine, we can create a connection with which we can run [[Database Queries]] on.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=116)** To create a connection, we'll use the engine's connect method.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=121)** This conn or connection is actually a proxy for the true Python database API connection.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=130)** Inside the [[CTE|with clause]], we'll be able to interact with the database.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=135)** Let's select all the items in the movies table.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=139)** We'll use a textual SELECT statement on the table.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=144)** SELECT everything FROM Movies.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=148)** Now, this sets up our query, but it doesn't actually query the database yet.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=154)** To execute the query, we'll need to use the execute function on the connection object.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=161)** We'll give it our query as an argument.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=165)** Then we'll save the result in a variable, result.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=171)** To see the data, we'll iterate through the result object.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=175)** For each row and result, we'll print it to the output.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=181)** Let's save this and run it in the terminal.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=185)** First, we'll activate the environment.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=188)** Right now, I'm in the SQLAlchemy Workspace.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=192)** To activate our environment, we'll run source bin/activate.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=198)** Now we can run our Python script.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=201)** We'll run python database.py and there's our data right there in the output.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=210)** Now, you may notice there is some other text here.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=214)** Implicitly, SQL performed the begin command to begin interactions with the database.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=222)** At the end, there's also a rollback statement.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=225)** This occurred because we didn't commit our changes to the database.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=230)** In fact, we didn't need to because we made no changes to the data in the database.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=237)** Don't worry.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=237)** We'll work more with these implicit statements later on in the course.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/executing-a-sql-query-with-sqlalchemy?u=76281980&t=242)** For now, we can say that we've successfully queried our database with Python using a new library, SQLAlchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[SQL]] (3), [[Database Queries]] (1), [[CTE|With clause]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=0)** - [Instructor] The real benefit of SQLAlchemy comes when you begin to use tools like the [[SQL]] expression language.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=8)** You can use it to make your code easier to read as you query a database.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=13)** Let's try it out.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=15)** We start off with the same import statement and engine as before.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=20)** The first thing that's different is we need to create a [[Metadata]] object.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=25)** This metadata object will keep track of the different tables we work with.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=31)** Now, to represent the table, we'll use a table object.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=36)** This will come from SQLAlchemy, and we'll use .table.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=42)** The table object will contain the name of the table, Movies, the metadata object, and the columns the table has.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=54)** So that's title, director, and year.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=58)** We pass then the metadata object because it acts as a dictionary that stores a series of tables, where the table name is the key and the value is the table object.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=70)** In order to instantiate the table, we use the metadata object, metadata.create_all and we pass in the engine.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=82)** Now we can proceed with the connection.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=85)** Just like before, we'll use engine.connect to connect to the database.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=92)** For the SQL execution, we'll use the SQLAlchemy expression language.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=98)** We'll write an expression that selects all the entries from the Movies table.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=103)** We'll write sqlalchemy.select movies_table.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=108)** Now, this doesn't execute our statement just yet.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=111)** We need to pass it in to connection.execute for it to run.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=116)** Our conn.execute.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=118)** To view all the results that are returned, we can put this in a loop.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=122)** For each row in our results, we'll print out the row.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=128)** Let's run it.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=129)** We'll navigate to the terminal window and our SQLAlchemy workspace is already activated.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=136)** We're also in the folder with our movies.db file and our [[Python (Programming Language)|Python]] script.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=143)** Let's run python3 database.py.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=149)** In the output, we see each movie entry.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=154)** Now, you might be wondering, why would you ever not use this expression language?
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=160)** Well, there may be a very specific SQL command you want to run that's not represented in this language.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=168)** In that case, using sqlalchemy.txt. is a great option if other parts of your application use SQLAlchemy.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-the-sql-expression-language-to-write-maintainable-code?u=76281980&t=178)** This way, all of your communication with the database stays associated with one module rather than using some SQLite directly and others using SQLAlchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (6), [[SQL]] (3), [[Python (Programming Language)|Python]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=0)** - [Instructor] In this challenge, you'll practice creating and querying a SQLite database.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=11)** You will create one table called Users and it will have a User_Id column, a First Name column, a Last Name column, and an Email Address column.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=23)** Once the table is created, insert five entries into the database where at least two of the entries have email addresses ending in [gmail.com](https://gmail.com).
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=34)** Once the database is initialized with the correct data, query the database to retrieve all of the email addresses.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=43)** You may need to do some research to figure out how to do this query.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=47)** For this challenge, you may use the sqlite3 module with [[SQL]] statements or you can use SQLAlchemy to create a database and query for data.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=59)** The next lesson will give examples to both types of solutions.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-an-sqlite-database?u=76281980&t=63)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **CLI Commands:** sqlite3 (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create an SQLite database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=0)** - Let's walk through the SQLite 3 module version first.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=10)** Remember, the goal is to create a SQLite database using [[Python (Programming Language)|Python]].
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=15)** I may have done it differently than you, and that's okay.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=19)** There are lots of different solutions that will work here.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=22)** By walking through this solution, you'll see another take on how to solve the challenge and likely learn something new.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=29)** Let's get started.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=31)** We'll open up version1 inside of the sqlalchemy-workspace.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=37)** The database.py file has all of the logic.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=42)** Let's take a look.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=44)** First, we import SQLite 3, and we create the database with a connection.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=51)** We call our database users-sqlite.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=56)** This is the file our database will be stored in.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=60)** Then we create a [[Cursor]] object and we use it to create a new table.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=66)** If the table doesn't already exist, we'll create a user's table with four columns.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=72)** User ID, first name, last name, and email address.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=77)** The user ID column feels like a good column we can use to identify each record individually.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=84)** That's why we make it the primary key.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=87)** The primary key will allow us to later link it to other tables we create in our relational database with the foreign key.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=97)** The auto increment option also makes it so we don't have to give a value for user ID for each record.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=105)** SQLite will populate this field for us.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=108)** It'll come up with a value and store it with each record we insert.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=113)** On a production scale, you would likely not use auto increment because it requires more overhead.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=120)** But for our prototype, this is fine for now.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=123)** Then we have the data we want to insert.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=127)** Each user has a first name, last name, and email address.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=132)** That user ID column will automatically be populated when we insert a new user.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=138)** For the insertion we use a similar statement that we've used in previous videos.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=144)** We'll insert each value into the appropriate column.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=149)** Then we'll select all the data using a select statement.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=153)** Let's run it.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=155)** We'll start by activating the workspace, source bin/activate.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=162)** This particular database file is located in version1.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=167)** We'll go to that version and run it.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=171)** And there's our data.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=174)** Each user has been inserted into the database.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=178)** We can double this by looking at our database file.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=182)** This will have all the data that we just inserted.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=187)** Now let's walk through the [[SQL]] Alchemy version.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=190)** We'll go to version2 and open up the database.py file.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=196)** This example will use SQL Alchemy without the expression language.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=201)** The last example will show how to do this with the expression language.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=207)** In the implementation we start by importing SQL Alchemy.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=212)** We also create an engine that will talk to our database.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=217)** With this first call, it will also create our database.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=222)** Next, we set up the data we want to insert.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=226)** This is in a different format than the data we inserted previously.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=230)** Instead of a list of tuples, we have a list of objects, each with its own first name, last name, and email address.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=240)** Next, we connect to the database.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=244)** We create the table if it does not already exist and then insert each user with their attributes.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=251)** To see the results we've run a select statement and print out each item returned.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=257)** Let's run it.
>
> **[4:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=259)** We'll go back to the SQL Alchemy workspace folder and go in version2.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=265)** From here, we'll run the Python file.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=270)** And there's our data.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=272)** Each user appears in the output.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=276)** Note, we didn't have to insert the primary key or increment, SQL did that for us.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=282)** The 1, 2, 3, 4, and 5.
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=286)** Now let's see what this looks like when we use the SQL Alchemy expression language.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=294)** We're in version3 and we'll open up the database.py file.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=299)** The import engine and users remain the same.
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=304)** Then we represent the table in Python.
>
> **[5:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=308)** We create the [[Metadata]] object and a table object with the name users.
>
> **[5:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=314)** We also add in the appropriate columns.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=318)** To connect all of this with the engine we use the create_all function on the metadata.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=324)** With the table setup, we create a database connection.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=328)** We insert and select the data using SQL Alchemy expression statements.
>
> **[5:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=334)** For the insert, we pass the table object along with the values we want to insert.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=341)** This data is in the form of a list containing objects.
>
> **[5:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=346)** For the select, we select all the data in the user's table.
>
> **[5:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=350)** Let's run it.
>
> **[5:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=352)** We'll cd back to the main folder with the different versions.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=357)** Then we'll go into version3 and run its database.py file.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=366)** In the output we can see the insertion statement that the SQL Alchemy engine ran.
>
> **[6:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=372)** It's pretty similar to the initial statement we created in the first example solution.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=378)** We can also see each entry in the select statement.
>
> **[6:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-an-sqlite-database?u=76281980&t=383)** Congratulations, you just created a SQLite database and manipulated data using the Python database API and SQL Alchemy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Python (Programming Language)|Python]] (4), [[Metadata]] (2)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=0)** - [Instructor] Another relational database engine is [[MySQL]] and it's actually one of the most popular relational [[Database Management]] systems used with [[Python (Programming Language)|Python]].
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=11)** Similar to SQLite, it uses a relational model with tables to describe relationships between its data, but instead of being contained directly on the file system, your database lives on a server.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=26)** MySQL follows a client server relationship.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=30)** This means your database lives on a server and any time you want to make changes to your database, you send a request to the server.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=40)** The request contains your [[SQL]] statement or instructions for the modification or selection.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=48)** Once received, the server accepts that request, performs the action, and sends a response back to the client with the results.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=57)** Most of this is abstracted to us as users of the database.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=62)** All we have to do is install the correct driver and configure the connection correctly.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=68)** We'll do this throughout the chapter.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=70)** Although we have only one client pictured here, your database can have multiple clients or multiple machines that can each access and modify your database on the server.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=83)** It's important to remember that MySQL is not SQL.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=87)** MySQL is a relational database management system, which helps you create and manage your database.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=94)** Whereas SQL is a query language used to interact directly with the database.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=101)** Many RDBMSs use SQL, but one RDBMS would not use another.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=109)** MySQL was designed with speed and ease of use in mind, which is why it's one of the more popular [[Relational Databases]].
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=118)** But with speed as a priority, it comes with certain functional limitations.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=125)** MySQL is not fully SQL compliant, as it doesn't support certain SQL operations, such as full join clauses.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=135)** MySQL is also a dual licensed software with a free and open source community edition, as well as several paid commercial editions.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=146)** Many features and plugins are only available in the proprietary editions.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=151)** However, MySQL has great replication support, which makes it a great choice for distributed database setups.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=160)** It's also known for powering many websites and applications across the internet because it's easy to install, run and scale.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=170)** Similar to other [[Databases]], MySQL has compatible graphical user interfaces or GUIs we can use to interact with the database.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=181)** We can also interact with MySQL databases in custom-built Python applications as well.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=187)** Similar to how Python offers a module to interact with SQLite, Python offers a similar module named mysql-connector for interacting with MySQL.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=200)** We can also use an ORM or object relational mapping tool such as SQLAlchemy within Python to interact with a MySQL database.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=210)** We'll be looking at how to use both in this chapter.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=214)** But again, in the real world, you would only choose one method to access your database with Python, either an ORM or the specific Python module.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=225)** You'd choose one and stick with it.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=228)** Most of the time, you'll create your database using a MySQL GUI, or with the MySQL command line.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=236)** Then you'd interact with your database using your Python application.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=241)** This is because most of the time, your Python applications and users of your Python app will be querying, inserting, updating, or deleting data from your database, but not necessarily creating new databases and new tables.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-mysql?u=76281980&t=257)** However, similar to SQLite, it is possible to use Python to create databases and tables in MySQL as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (16), [[Python (Programming Language)|Python]] (11), [[SQL]] (6), [[Databases]] (4), [[Database Management]] (2)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=0)** - [Instructor] Before we can use [[MySQL]], we need to install the community edition.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=5)** We'll download it here.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=8)** Now we'll enter a password for the root user.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=11)** This is really important to remember, we'll use it later on in the course.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=17)** And it's installed.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=19)** Let's try using the MySQL command in the terminal.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=23)** If you're on Mac, this won't work just yet.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=26)** We need to update our path for this command line tool.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=30)** The easiest way to do this on a Mac is to add something to wherever your path is set.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=37)** First, we'll cd into our home directory.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=41)** Then we'll figure out what type of shell we're running.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=45)** We can do this with echo SHELL.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=49)** In this case, it's bin slash zsh, which means we'll need to add something to our zshrc file in our home directory.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=60)** We'll open it up with nano.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=63)** Then, we'll add the path where MySQL is located.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=68)** This may differ if you're on [[Windows]].
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=72)** To write out, we'll use Control O and hit enter.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=77)** To exit, we'll do control X.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=81)** Then, to set it with our system, we'll write source dot zshrc.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=90)** With this updated, let's restart our terminal and try running the [[SQL]] command again.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=98)** Let's log in to the MySQL shell.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=101)** You're welcome to use a gooey, such as MySQL Workbench instead.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=105)** But since we don't want to go too deep into tooling, the terminal should work great for our purposes.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=112)** To log in, we'll write sudo my sql dash u root dash p.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=120)** The first password we'll enter is for Sudo.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=123)** This is the password to your machine, so to your Mac machine or to your Windows machine.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=130)** What you use to log in.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=134)** The next password is for the database.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=137)** What password did you use to configure your MySQL database?
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=142)** That's what you should use here.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=145)** And we're in.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=147)** Let's create a database called Projects.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=150)** We'll use the keywords "CREATE DATABASE" and we'll call it projects.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=158)** This database will represent the collection of projects we want to accomplish and the tasks associated with each project.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=167)** Congratulations!
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-mysql-database?u=76281980&t=168)** You've just created your first MySQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (7), [[Windows]] (2), [[SQL]] (2)
> **CLI Commands:** mysql (7), sudo (2), cd (1)
> **Tools:** terminal (3), command line (1), zsh (1)
> **Env Vars:** shell (1), create (1), database (1)
> **Prerequisites:** install (1), configure (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Building tables in a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=0)** - [Instructor] With our project's database created and our terminal logged into the [[MySQL]] shell, we can begin adding data to our database.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=9)** First, we'll use the projects database.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=13)** That's where we're going to add our data.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=15)** We'll select it with used projects.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=19)** In order to represent our projects and tasks, we'll be creating two tables.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=24)** The first table will have our projects, where each project will have an ID, title, and description.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=32)** Let's create it.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=34)** We'll write CREATE TABLE projects where each project will have a project ID that's auto-incremented.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=44)** There will also be a title column, which will be a VARCHAR and a description that will also be a VARCHAR.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=54)** The number has to do with how much space we're giving this variable.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=59)** Then we'll set the primary key to project_id.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=64)** Let's create it.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=67)** To prove it's created, we'll write show tables.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=72)** And there's our table and the output.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=75)** The second table will have tasks associated with each project.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=81)** Each task will be represented with the task ID, project ID, and description.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=88)** Let's write it out.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=90)** CREATE TABLE, we'll call it tasks.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=94)** And each task will have a task ID that will be auto-incremented.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=100)** It'll also have a project ID that cannot be null.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=105)** And a description that's a VARCHAR.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=110)** The primary key will be the task ID.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=116)** We'll also have a foreign key that references the project's table.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=124)** And it's created.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=128)** And we see it in our tables.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=131)** In our tasks table, we could also add a true or false column that represents whether the task is completed or not.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-tables-in-a-mysql-database?u=76281980&t=140)** For our example, we'll just delete the task as it gets completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1)
> **Env Vars:** varchar (3), create (2), table (2)
> **SQL:** varchar (3), create table (2)
> **CLI Commands:** mysql (1)
> **Code Identifiers:** project_id (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Adding data to a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=0)** - [Instructor] Before we move on to working with [[MySQL]] and [[Python (Programming Language)|Python]], let's add a few items to this database.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=8)** We'll create a project and two tasks for the project.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=13)** We'll start by inserting the project.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=17)** In the projects table, we'll insert a title and description.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=22)** The values for those will be organized photos and organized old iPhone photos by year.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=33)** Then we'll insert two tasks to go with this project.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=38)** We'll insert them into the tasks table.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=42)** They'll each have a project ID and a description.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=46)** The project ID will be one and the description will vary for each task.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=53)** The first one will be organized 2020 photos.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=59)** The second will be organized 2019 photos.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=66)** Let's create one more project with an associated task.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=71)** The second project will be read more where we read a book a month this year.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=80)** The task will be to read "The Huntress."
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=87)** That's a book.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=90)** With the foreign key constraint, we cannot insert a task without a corresponding project ID.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=97)** We'll also have to delete the tasks before we delete the projects.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=102)** With special operators such as on delete cascade, we can avoid this, but let's not get two in the weeds just yet.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=112)** Let's make sure our data was actually added to the database.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=116)** We can query the projects table with select star from projects.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=123)** There's our two projects: organized photos, and read more.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=128)** Let's see those tasks.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=132)** The organized photos tasks are associated with project one, the organized photos project.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=140)** The last task is associated with the second project, read more.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=145)** We can see this with the corresponding project ID.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=150)** To exit the MySQL shell, we can write quit.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=154)** Now, we're back in the regular terminal.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=157)** You might be wondering, "Could we have done this with SQLite, "used a shell to insert and select our data?"
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=165)** The answer is yes.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=167)** SQLite does have a shell program that you can run that's very similar to this.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=173)** The main difference is the way our [[SQL]] is written and the fact our MySQL database is running on a local server, local host, rather than just located in the file system.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=186)** Furthermore, everything we've done here can be done in Python.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=191)** This includes our create database query, our insertion queries, and more.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-data-to-a-mysql-database?u=76281980&t=196)** In fact, it's easier and more replicatable when done with code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (3), [[Python (Programming Language)|Python]] (2), [[SQL]] (1)
> **CLI Commands:** mysql (3), python (2), make (1)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** sql (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Connecting a Python application to a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=0)** - [Narrator] Before we can connect to our [[MySQL]] database and [[Python (Programming Language)|Python]], we need to install MySQL Connector using pip.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=8)** This will give us the compliant module that we can import into our Python application.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=14)** It would also be nice to have a different virtual environment for this database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=19)** So let's create a new environment.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=23)** We'll call it mysql-workspace.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=26)** Then we'll cd into it and activate it.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=31)** I have pip3 for Python, so I'm going to run pip3 install mysql-connector-python, and now it works.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=44)** With the MySQL Connector installed, let's open up a new file using Sublime and import the module.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=52)** We'll call it database.py, and we'll put it inside of our workspace folder.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=59)** For the import, we'll write mysql.connector as mysql.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=66)** This will allow us to reference this import as mysql.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=72)** Then we'll connect to the database.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=76)** We'll use connect on the MySQL import.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=80)** Unlike SQLite, we'll need to specify a host user and password.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=86)** The host could be some remote server or we can host it locally with localhost.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=92)** This is where the database actually lives.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=96)** Our application will send requests back and forth to this location.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=101)** In our case, the database will be on localhost.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=105)** Our user will be root.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=108)** Our password will be password, and the database will be projects.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=116)** This password is what we configured when we installed MySQL.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=121)** I'm writing this in plain text for the course to keep it simple, but if you don't want to do this, you could also use environment variables with virtual in.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=132)** Now, with this connection, we'll want to add some additional error checking in case the database doesn't exist.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=139)** Let's wrap this in a function.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=143)** With our try-catch statement, we try to connect to the database.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=148)** If an error occurs, we print out the error instead.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=151)** We've wrapped this in a function called connect.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=156)** We call this inside of the main function.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=160)** We connect to the database and save it in a variable called db.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=166)** With our function, we've parameterized the name of the database, but we could also parameterize the host and login credentials if we wanted to.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=176)** These could be read from a file and then passed into this connection.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=181)** With the connection in place, we can get access to the [[Cursor]] object and then execute a few [[SQL]] statements.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=189)** Now, this looks a lot like what we did in SQLite.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=194)** The main difference will be the SQL syntax.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=197)** SQL syntax can vary among RDBMS's, but the overall idea is the same.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=204)** There are select statements, insert statements, et cetera.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=208)** So let's query the project's database.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=212)** We'll retrieve all the project records from the database.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=216)** We'll use cursor.execute and select everything from projects.
>
> **[3:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=224)** Then we'll retrieve the projects with cursor.fetchall and then print them to the output.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=234)** Similar to how we used the cursor object with SQLite, we use it here with MySQL.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=241)** Let's run it.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=243)** We're already in the MySQL workspace folder and the virtual environment is activated.
>
> **[4:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=250)** Let's run our database file.
>
> **[4:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=254)** Here's our project data.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/connecting-a-python-application-to-a-mysql-database?u=76281980&t=256)** All of the commands we ran with the MySQL Shell can be run here with the execute method on the cursor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (13), [[Python (Programming Language)|Python]] (4), [[SQL]] (3)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=0)** - [Instructor] Now, since we're working in application code in [[Python (Programming Language)|Python]] and not in [[MySQL]], it's nice to separate business logic from the database schema.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=11)** We can encapsulate the database operations, so they're easier to reuse in the future, similar to how we did for the Connect operation.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=20)** Now, as a user, I'll want to add a project with a series of tasks.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=26)** In the main function, we connect to the database in hard codes and data.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=31)** This data represents a "Clean the House" project, and it has a series of tasks.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=39)** Then we use the add_project function to add the project to the database, but it's not implemented yet.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=49)** Let's add some code, so we actually insert the project to the database.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=55)** Now this can seem intimidating, but don't worry, we'll take it step by step.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=60)** To start out, we'll describe what execute statements we need to write for the projects table.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=66)** Each project has a title and description, so let's create something to store that.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=73)** We'll call it project data, and it'll have the project title and description.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=80)** Then we'll want to insert this entry into the projects table using the [[Cursor]].
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=88)** Next, we'll do the same for the tasks.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=92)** For each task, we'll create the task data, and append it to our tasks data list.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=101)** cursor.lastrowid allows us to retrieve the project ID of the project we just created.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=109)** With the task data assembled, we'll insert it into the tasks table.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=116)** And the main function, we select all the data from the database to show it's been inserted, let's run it.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=124)** We already have the MySQL Workspace activated, and there's our database.py file.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=134)** We'll run it with database.py and there's our data.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=140)** Here we see our "Organized Photos" project and our new "Clean House" project.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=148)** We also see the projects associated with "Clean House".
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=152)** They have the Project ID three.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=154)** We have "Clean bathroom", "Clean kitchen", and "Clean living Room".
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=160)** This is one way to encapsulate a database operation, but there are many other ways you can do this as well.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=168)** We could add a UI so that users can input new projects, and corresponding tasks separately.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=176)** We could also further encapsulate each [[SQL]] query and parameterize it so that someone coming into the code doesn't have to deal with SQL if they don't want to.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=187)** They could reuse an encapsulated insert function instead.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=192)** Of course, if you continue to encapsulate functions, at some point, you're creating a library of functionality, and you might as well use an ORM instead.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=203)** This would allow new developers joining your team to get up and running more quickly.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=209)** Now, looking at this specific example, the way we pass the cursor here may feel kind of weird.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=216)** We could modify these functions to just return strings for the cursor to execute, but that would add lots of code to our application.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=226)** Another option is to pass in the connection object, so we can commit the changes inside the function instead of outside the function.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=236)** We could also open and close the database connection every time we run this function, and encapsulate the database connection inside of it.
>
> **[4:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=246)** This would prevent a connection from going unused for a long period of time, but it could add a tiny bit more latency to our application.
>
> **[4:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=256)** For this sample app, these design decisions don't matter too much, and there is a lot of debate in the database community about which way to go.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=266)** Considering our application is small for now, we just passed the cursor in, and commit the changes after it's run.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=274)** Overall, I still don't love this as an engineer, the database schema is tied pretty deeply into the application code.
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=283)** This means if I change a column in my database, I have to significantly change the functions, and the way those functions are used in my application.
>
> **[4:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=294)** But no matter what if you change the schema of your database you'll likely have to change some application code.
>
> **[5:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=301)** Now, is there a way to abstract this more?
>
> **[5:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/encapsulating-database-operations?u=76281980&t=304)** Soon we'll find out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (2), [[Python (Programming Language)|Python]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=0)** - [Instructor] Let's try accessing the same database with SQLAlchemy.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=5)** SQLAlchemy will not actually create our database, only connect to it.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=11)** So we'll be connecting to our project's database.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=14)** Before we can get started though, we'll need to create a virtual environment to work with.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=20)** We'll call this one [[MySQL]] SQLAlchemy Workspace.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=26)** Then we'll activate it.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=31)** Let's install our dependencies.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=34)** These will include the MySQL Connector and [[Python (Programming Language)|Python]] as well as SQLAlchemy.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=46)** Great. Let's connect to our database and Python.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=49)** We'll create a file called database.py.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=55)** We'll save it in our workspace.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=58)** Then we'll import SQLAlchemy and create our engine.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=65)** Here the syntax will be a little different than SQLite.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=69)** We're connecting to a MySQL database, so we'll use MySQL as the database type.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=76)** We also refer to this as the dialect.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=79)** Then we'll include a driver.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=81)** That'll be MySQL Connector.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=85)** We'll also give it our username and password.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=88)** That'll be root.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=90)** And then our password, password.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=94)** Our database will live on local host at Port 3306.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=99)** This is the default port, so let's add that.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=103)** We'll be connecting to the project's database, so we'll add that at the end of our string.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=110)** We'll also add echo equals true.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=114)** This'll work the same as it did in SQLite.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=118)** It'll give us extra print statements that show us what SQLAlchemy is doing behind the scenes.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=126)** Now the engine is the starting point for any SQLAlchemy application.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=131)** It's the same for SQLAlchemy Core and SQLAlchemy ORM.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=136)** Let's run it.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=138)** We'll run Python3 database.py.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=144)** We won't see anything in the output just yet because we'll need to create a connection.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-mysql-in-python-using-sqlalchemy?u=76281980&t=150)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[Python (Programming Language)|Python]] (2)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] Everything we've done so far looks very similar to what we did with SQLite.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=6)** In this chapter, instead of using SQLAlchemy Core components we'll be using the ORM.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=14)** This will allow us to see a different syntax for how we can work with database information in [[Python (Programming Language)|Python]].
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=22)** Whether you're using Core or the ORM, both will work for [[MySQL]] and SQLite, and any other supported relational database for that matter.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=34)** The pattern we've established so far is retrieve the [[Cursor]] object and execute some statements.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=42)** With the ORM, we'll be able to create classes and models for the objects our database will hold.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=50)** We're diving into the ORM side with object relational mapping, which will make interacting with our database more Pythonic.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=59)** For our sample code, I've added some import statements at the top.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=63)** This makes our code easier to read.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=67)** Let's get into the implementation.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=70)** With the ORM, the [[Metadata]] collection still exists, but it is contained within ORM only object called the registry.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=80)** We can create a registry with the registry function.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=84)** We just call registry, and it's located in the sqlalchemy.orm module.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=92)** Inside of the registry, we can access the metadata object with mapper_registry.metadata.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=101)** Now, the big difference is that instead of declaring the table objects directly, we declare them indirectly through directives applied to mapped classes.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=112)** Each mapped class in SQLAlchemy is based on a common base class known as the declarative base.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=121)** We can retrieve a new declarative base from the registry.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=125)** We'll use the mapped registry and generate a base.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=130)** With this base, we can begin to create our models for our corresponding project and task tables.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=138)** Starting with the project model, we'll base it off of the base, and we'll initialize it with the tablename.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=149)** For the tablename, we say projects, because that's the name of the MySQL table.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=156)** Now we'll set up the columns.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=159)** These should look pretty similar to what we did with SQLAlchemy Core, and that's because the ORM is built on top of Core.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=170)** Next, we'll write a function to show a printable representation of the object.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=178)** Perfect.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/building-a-model-with-sqlalchemy-orm?u=76281980&t=179)** Our first model is finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[MySQL]] (2), [[Python (Programming Language)|Python]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] The projects database has two tables, the projects table and the tasks table.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=6)** We've already created the model for the projects table.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=10)** Now let's create the task model and link it to our project model.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=15)** We'll create a new class called task and we'll base it on the base.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=20)** The table name will be tasks, because that's what we've named it in our [[MySQL]] database.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=27)** Next, we'll add the columns.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=30)** Here, the task_id column will be the primary key, and the project_id column will act as a foreign key linked to the projects table.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=41)** To link the tasks project_id column to the projects table, we use the foreign key keyword and input the projects table name as well as the column we'd like to link it to.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=55)** To further define the relationship, we can create a relationship with the project model and set it equal to project.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=65)** Relationships are new with SQLAlchemy and they compliment foreign keys.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=71)** They tell our application that we're building relationships between two models, rather than with the database.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=79)** The foreign key implementation inside the column definition references the [[Databases]], tables, and syntax, but the relationship references our model, not the table name.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=92)** To connect everything together, we should do both.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=96)** This may seem like a lot, but it helps us easily perform joins in our application.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=102)** Since project and task data are very related, we'll likely want to see what tasks correspond with a given project.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=112)** This defines the relationship upfront, so we can easily work with it in our app's business logic.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=119)** Similar to the project model, we'll want to write a printable format for the task.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=126)** With our models in place, let's connect up our tables in MySQL.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=132)** We'll use the base.[[Metadata]].create_all and pass in the engine.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=140)** Since these tables already exist, SQLAlchemy will use the already existing table instead of creating new ones.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=149)** Let's run this program.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=152)** Our workspace is activated and we're in the folder with the database.py file.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=158)** Let's run it.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/adding-up-a-foreign-key-with-sqlalchemy-orm?u=76281980&t=161)** In the output, we can see [[Python (Programming Language)|Python]] setting up the models using the SQLAlchemy ORM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Databases]] (1), [[Metadata]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** project_id (2), task_id (1), create_all (1)
> **CLI Commands:** mysql (2), python (1)
> **File Paths:** database.py (1)
> **Env Vars:** orm (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Using SQLAlchemy Sessions to transact on a MySQL database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=0)** - [Instructor] Let's continue on with our SQLAlchemy ORM implementation.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=5)** Since we're using the ORM, we'll need to create a session object to query our database.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=12)** The session object is responsible for building insert constructs and sending them to the database in a transaction.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=20)** In the implementation, we'll add new objects to the session and then omit these objects to the database when needed, using a process known as a flush.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=30)** Let's get started.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=33)** We can create a session with the engine.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=36)** We'll pass it in as a parameter.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=41)** The session comes from the SQLAlchemy ORM module, so we'll add that as an import at the top.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=50)** Now sessions are how we create transactions with SQLAlchemy.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=55)** As we've mentioned before, a transaction is a set of all or nothing queries.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=61)** We either want them all to run or none of them to run at all.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=66)** Ideally, they all run and are all successful, but if we need to roll back the changes, we roll them back all in the session and never leave the database in a half done state.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=78)** With our session created, let's make a project object and insert it into the database.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=84)** To do this, we can use the project model and set a title and description.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=91)** We'll save this in a variable called organize_closet_project.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=98)** To insert it into the database, we simply write session.add and pass in the record we want to insert, so that's organize_closet_project.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=111)** That was so easy.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=113)** Let's add some tasks to associate with this project.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=117)** We can put all the tasks we want to add in a tasks list and then add them in a bulk operation.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=125)** To save our tasks, we use the session, session.bulk_save_objects, and pass in our tasks.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=135)** Now, if we try to save the tasks at this point in the session, we will get an error.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=141)** That's because the primary key of the project is not instantiated yet.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=147)** We haven't sent anything to the database, so the primary key doesn't exist yet.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=153)** In the ORM, the session object makes use of a pattern known as unit of work.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=160)** This generally means it accumulates changes one at a time, but it does not actually communicate them to the database until needed.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=170)** When it does emit [[SQL]] to the database to push out the current set of changes, the process is known as a flush.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=178)** In our case case, this means that the primary key of the project isn't initialized until after we flush the session.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=186)** So let's do that after we add the project, session.flush.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=192)** With this flush, we create an open transaction.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=196)** We can close it with session.commit, session.rollback, or session.close.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=203)** Let's commit these changes after we add the tasks, session.commit.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=210)** Now we can run the program.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=212)** Let's head over to our terminal.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=215)** The virtual workspace is already activated, so I can run my file with python3 database.py.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/using-sqlalchemy-sessions-to-transact-on-a-mysql-database?u=76281980&t=225)** And with that final commit, our data has been added to the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] Now that we've added data to the database using the SQLAlchemy ORM, let's retrieve it.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=7)** This will look very similar to what we did with SQLAlchemy Core, except instead of using a connection object, we'll be using the session.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=20)** The first step is to create our [[SQL]] statement.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=23)** We'll use the select keyword to select a project where the title is Organize closet.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=31)** To use this keyword directly, we can add it at the top.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=35)** It's a part of the SQLAlchemy module.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=39)** With our statement created, we can feed it to the session for execution and then print what's returned.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=47)** Scalar allows us to retrieve the first row returned in the results.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=52)** In this case, that's our project.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=55)** We can use this return data to retrieve the tasks associated with it.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=60)** We'll create a select statement where we query the task table and retrieve only the tasks with the organize_closet_project id.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=69)** Let's write it out.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=71)** This will return all the tasks associated with our project.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=76)** Let's execute it with the session.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=81)** Let's run the program.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=85)** Our virtual environment is already activated, so we'll run the file with python3 database.py.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=94)** Here are the tasks.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=96)** These are the tasks associated with our organize closet project.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=100)** We can also see our organize closet project up above.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=106)** Now, a lot of the stuff we've done here, we could encapsulate out into separate reusable and parameterized functions.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=114)** We could continue to make this more Pythonic.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=118)** Right now, a lot of the stuff is hard coded, including that username and password, which you should never do in production.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=126)** These can easily be taken out in the future using a properties file or environment variables.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/retrieving-data-using-sqlalchemy-orm?u=76281980&t=133)** But overall, this is a great start for getting your hands on SQLAlchemy with your [[MySQL]] database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[MySQL]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=0)** - [Narrator] In this challenge, you'll create a [[MySQL]] database, insert some data, and then query it for information.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=13)** The database you'll be creating will represent a tech company's online sales.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=18)** There are various customers, [[Microsoft Products|products]], and orders.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=22)** The columns in the database will be order_num, order_type, cust_type, cust_name, prod_category, prod_number, prod_name, quantity, price, discount, and order total.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=36)** For this challenge, you'll create a database named Red30.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=41)** That's the company's name.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=43)** And you'll create a table called sales with five rows of data.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=47)** Order_num should be the primary key.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=49)** Using [[Python (Programming Language)|Python]], I want you to find what the most expensive order was and who ordered it.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=56)** There are many different solutions to this problem and you're welcome to use MySQL Connector or [[SQL]] Alchemy.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=63)** There are many different solutions to this problem and you're welcome to use MySQL Connector or SQL Alchemy.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=71)** To keep things shorter and simpler, I'll only be walking through the SQL Alchemy ORM version of the solution.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-mysql-database?u=76281980&t=79)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (3), [[SQL]] (3), [[Microsoft Products|Products]] (1), [[Python (Programming Language)|Python]] (1)
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
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=5)** - [Instructor] Let's create a [[MySQL]] database and query it in [[Python (Programming Language)|Python]] using the [[SQL]] Alchemy ORM.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=12)** First, we'll need to create the red 30 database, using the MySQL shell.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=20)** We'll use the keywords "CREATE DATABASE" and add in red30.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=26)** Let's configure it.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=29)** We'll create a table called sales, with the appropriate columns defined in the challenge.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=38)** We make the table directly with MySQL and not SQL Alchemy, because most of the time the database will already be created.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=48)** As a software engineer, the main thing you'll be responsible for is querying the database, whether that's retrieving, deleting, or inserting data.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=59)** Let's add a few rows to this table using the SQL Alchemy ORM.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=65)** Here we have some code that sets up the connection to the red30 database.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=71)** Then, we create a model based on an individual sale, that has attributes for each column in the sales table.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=79)** We use this model to create sales and add them to the database using the session.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=87)** Let's run this file and add these sales to the database.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=92)** We'll exit our SQL shell, clear this up, and then activate our virtual environment.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=101)** We can access that environment in the MySQL SQL Alchemy folder.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=108)** Then, we'll activate it. Then we'll run the file.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=115)** In the output, we can see our data was added to the database.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=120)** Let's double check this with the SQL shell.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=123)** We'll deactivate our virtual environment and log into the shell.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=137)** And there's our data. It's been added to the database.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=142)** Now let's use Python to calculate which purchased is the largest.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=148)** We'll go back to our Python code and comment out these insertions.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=154)** Let's make a new query.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=157)** Here, we use the max function to select the row with the highest order total in the sales table.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=164)** Since we're using select and func, we'll need to add these at the top as imports.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=171)** They both come from the SQL Alchemy module.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=175)** Let's execute this query.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=178)** Session dot execute, and we'll pass in our query.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=183)** We'll also use the scalar function, to convert it into a single result.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=188)** That result, the max order total.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=192)** (keyboard keys clacking) Another option is to return all the results but in descending order, based on order total.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=202)** Here, we return all the items in the sale table but order them so that the total is descending.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=210)** This means the largest order total will be first.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=214)** Let's execute it.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=217)** We're ready to run the file.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=220)** With our workspace activated, we'll run it with python3 database.py.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=226)** In the output, we can see the highest order total is 1500.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-mysql-database?u=76281980&t=231)** In the descending entries that follow, we see that a little over a thousand is second, and the [[Representational State Transfer (REST)|rest]] of the entries follow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[MySQL]] (4), [[Python (Programming Language)|Python]] (3), [[Representational State Transfer (REST)|Rest]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=0)** - [Instructor] Another commonly used relational database is [[PostgreSQL|Postgres]].
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=5)** Similar to the other [[Relational Databases]] we've looked at, data is organized into tables with columns and rows.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=12)** But unlike [[SQL]] light in [[MySQL]], Postgres is an object relational database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=19)** Postgres includes advanced features like table inheritance and function overloading which although are usually in object [[Databases]] can be important to certain applications.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=31)** Postgres advertises itself as the most advanced open source database system because it was created with the goal of being highly extensible and standards compliant.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=43)** It's capable of efficiently handling multiple tasks at the same time, ensuring [[Data Integrity]] while being ACID compliant, and it requires very minimal maintenance efforts due to its stability.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=57)** Postgres also adheres more closely to SQL standards than MySQL.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=63)** Postgres was designed to be extensible.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=66)** You could define your own data types, add custom functions using programming languages and more.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=73)** With Postgres, it's easy to develop plugins to replace any part of the system you don't like.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=79)** All of this makes Postgres very scalable but it also makes it more complex to work with.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=86)** Now these advanced features can come at the expense of speed.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=91)** For every new client connection, Postgres forks a new process which requires 10 megabytes of memory, and that can add up quickly.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=101)** Furthermore, if your application is very read heavy, it might be better to go with MySQL as it is more performant.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=109)** Overall, Postgres is still less popular than MySQL.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=114)** This means there are fewer third party tools you can use with it and fewer developers that will work with it.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=122)** However, if there's a platform or tool that prefers Postgres by all means use it.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=128)** It might be worth choosing it over another database like the other RDBMS' we've worked with, we can interact with our database in [[Python (Programming Language)|Python]] using a Python module that follows the Python database specification - SQLAlchemy or another ORM.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=146)** Like MySQL, Postgres follows a client server model.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=151)** So we'll need to install a driver to interact with the database.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/what-is-postgresql?u=76281980&t=155)** Let's try it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (12), [[MySQL]] (5), [[Python (Programming Language)|Python]] (3), [[SQL]] (2), [[Relational Databases]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=0)** - [Instructor] Before we can create a [[PostgreSQL|Postgres]] database, we need to install Postgres software.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=14)** Let's follow the instructions.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=16)** We'll install everything except pgAdmin 4.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=21)** Now for the password.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=23)** This is really important that you remember this password.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=27)** We'll use it later on in the course.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=38)** The setup's complete.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=39)** Let's use it in our terminal.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=42)** We'll need to configure it in our path.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=45)** On Mac, this can be done by adding a line to our ZSHRC file.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=53)** We'll export path and add the location where Postgres lives.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=59)** That's Postgres/15/bin.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=63)** Then Control + O, Control + X to exit.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=68)** Then we'll set it up with our system with source and then the name of the file.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=74)** Depending on what shell you're running, you may need to use a different file for this environment variable.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=81)** To activate Postgres, we can use psql and log in with our root user.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=88)** This is the default user we configured on the installation.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=93)** We'll use that same password here and we're in.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=97)** Let's create our database.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=100)** We'll use the keywords CREATE DATABASE.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=104)** We'll be using the same data from the last challenge, so we'll call it red30.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=111)** To list the different [[Databases]] that exist, we can run \l.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=118)** A couple default ones come included with the installation.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=122)** We can also see the database we just set up, red30.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=128)** We can connect to this database with \c and then the name, red30.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=134)** We're in.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-postgresql-database?u=76281980&t=135)** Next, we'll use [[Python (Programming Language)|Python]] to create a table in this database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (5), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Prerequisites:** install (2), setup (1), configure (1), set up (1)
> **Env Vars:** zshrc (1), create (1), database (1)
> **CLI Commands:** psql (1), python (1)
> **Code Identifiers:** pgadmin (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Creating a table in Postgres using Python](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=0)** - [Narrator] One way we can interact with our database in [[Python (Programming Language)|Python]] is to use the psycopg2 module.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=8)** We do have to install it with pip, so we'll create a virtual environment to interact with our database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=19)** We'll activate it and install our dependencies.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=23)** In this case, that's psycopg2-binary.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=29)** Like SQLite3 and [[MySQL]]-connector, this module is compliant with the Python database API.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=37)** This means interacting with this module will look very similar to how we've used the other modules.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=44)** However, under the hood, a different [[Database Management]] system is used.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=50)** Let's open up Sublime and connect to this database.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=54)** We'll save our Python code in a file called database.py.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=60)** It'll live in our [[PostgreSQL|Postgres]] workspace.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=66)** Here we've imported the psycopg2 module.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=70)** We've also created a connection to our database, specifically the Red30 database.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=78)** Let's grab the [[Cursor]] and create a table.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=82)** We'll create a sales table.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=85)** This [[SQL]] query will create our table.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=89)** Let's commit this change.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=91)** We'll do that with the connection, and then close it up.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=99)** Let's run it.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=103)** Python3 database.py.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=107)** Inside of our activated workspace, we didn't output anything to the console, so nothing appears.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=114)** We can double check with our Postgres shell to see if our new table exists.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=120)** We'll deactivate our workspace and log into the shell.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=127)** We'll connect to Red30 and see our new table with /dt.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=134)** And there it is.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/creating-a-table-in-postgres-using-python?u=76281980&t=135)** There's our sales table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[PostgreSQL|Postgres]] (2), [[MySQL]] (1), [[Database Management]] (1), [[SQL]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's insert some data into this database so we actually have something to work with.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=5)** We talked about a few different ways to do this in the last chapter with [[MySQL]].
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=11)** And many of those ways will also work with [[PostgreSQL|Postgres]].
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=15)** That's because of how compatible database tools are in [[Python (Programming Language)|Python]].
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=20)** For example, we could use the [[Cursor]] object and execute a command or we could use the SQLAlchemy expression language.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=29)** We could even do it directly in the Postgres Shell.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=33)** For now, we'll use the psycopg2 module to retrieve the cursor object and execute some insert commands.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=42)** In this sample code, we have some data that we'll insert into the database.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=47)** Each entry in the sales list represents an individual sale.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=53)** We'll insert them by executing a [[SQL]] query with the cursor objects executemany function.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=60)** Here we insert a series of entries into the sales table.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=65)** Each percent S stands for a value and a column.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=69)** And the full set of S's represent a row.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=72)** We execute this insert statement for as many entries as there are in the sales list.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=78)** After inserting the data, we commit the changes and close the connection.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=84)** Let's run it.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=86)** Our workspace is activated, so we'll run python3 database.py.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=93)** To check if our data has been added, we can use the Postgres Shell.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=99)** Let's log in.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=104)** We'll connect to the red30 database and select all the data from the sales table.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=110)** And there it is.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=112)** There's our sample data.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=114)** Of course, these are just a few hard coded sales.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=118)** What if we want to dynamically add sales?
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/inserting-data-into-a-postgres-database?u=76281980&t=122)** Next, we'll look at a way to do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (3), [[MySQL]] (1), [[Python (Programming Language)|Python]] (1), [[SQL]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=0)** - [Instructor] Let's create a function that inserts a new sale into our [[PostgreSQL|Postgres]] database with dynamic data.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=8)** Like in the other case with [[MySQL]], we'll pass the [[Cursor]] in, but you could pass in the database connection instead.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=16)** Inside this function, we'll calculate the order total.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=20)** You might want to break this order total calculation into its own function to encourage a single responsibility design and break apart the business logic more.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=31)** For now, we'll just put it here.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=34)** The order total will be the quantity multiplied by the price.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=39)** We'll also apply the discount if there is one.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=43)** Now let's insert the item.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=45)** We could use the same methodology as in the last video where we created a tuple and then inserted it, but this time we'll use named placeholders.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=57)** We'll create a dictionary and a set of key value pairs.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=61)** We'll call this our sale data.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=65)** Then we'll pass this data to a [[SQL]] statement.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=70)** Here, each key in our query will be replaced by its associated value in the sale data dictionary.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=79)** We've also written it in a way that protects it from a SQL injection attack.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=84)** The database will use the specified type and value of each piece of data when executing the query.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=93)** Now that our function is complete, let's use it.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=97)** In our main function, we connect to the database and then ask the user for a bunch of data.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=103)** We could let the program determine the order number or let the user provide it.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=108)** Here, the user provides it.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=113)** With the product number, we could have another backend service retrieve more information about that product.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=121)** Perhaps you could create another database with information about each product.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=126)** The price information could be stored with that as well so the user wouldn't have to provide it.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=132)** These are all potential improvements.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=135)** After collecting the data, we call the insert sale function with the user's inputted data.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=142)** Then we commit the changes and close the connection.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=147)** Let's run the file.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=150)** With our virtual environment activated, we'll run the file.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=156)** We'll give it the order number 123.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=159)** We'll say the product number as that.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=167)** We'll say these are expensive pencils.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=172)** Let's check our database to see if this was inserted.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=187)** There it is.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=188)** We have Sarah who purchased a pencil, and purchased two of them, and they were 9.99.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=195)** The order total was 19.98 because there is no discount.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=201)** There's so many other SQL commands and clauses we could use in this application.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/interacting-with-a-postgres-database-using-python?u=76281980&t=207)** If you want more practice, I encourage you to take a few common SQL commands and encapsulate them into functions that are customized to this particular application and database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[PostgreSQL|Postgres]] (1), [[MySQL]] (1)
> **Env Vars:** sql (4)
> **Versions:** 9.99 (1), 19.98 (1)
> **CLI Commands:** mysql (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Setting up SQLAlchemy Core to connect to a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=0)** - [Narrator] When we worked with the SQLite database, we used the SQLite3 module and SQLAlchemy Core.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=7)** When we worked with [[MySQL]], we used the mysql-connector module and the full SQLAlchemy ORM.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=13)** For [[PostgreSQL|Postgres]], we've used the Psycopg2 module.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=18)** Now we'll show you how to interact with it using SQLAlchemy Core and the full SQLAlchemy ORM.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=26)** All three of these interfaces can be used to interact with the [[Relational Databases]] we've worked with so far.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=33)** We didn't introduce them all at once because there's a steep learning curve to some of the interfaces and introducing them over time with hands-on examples can help you get a sense of how each works before we compare and contrast them.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=49)** As you've probably noticed, a lot of the behind the scenes work that reveals the difference between each [[Database Management]] system is fairly abstracted to you.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=60)** The interfaces, while they vary, work similarly with many relational databases.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=66)** Alright, with all that covered, let's look at how to use SQLAlchemy Core to interact with our Postgres database.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=75)** You're welcome to reuse the Postgres Virtual Environment Workspace we've already created, or you can create a new one.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=83)** I'm going to reuse our current workspace, so I'll cd into it and activate it.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=92)** Like in our examples with MySQL, we need to install SQLAlchemy to this workspace.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=98)** We'll do that with pip3 install sqlalchemy.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=106)** Perfect. Since the Red30 database is already created and initialized with data, we can just connect to it in our [[Python (Programming Language)|Python]] application using whatever interface we want.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=118)** In this case, we'll start off by using SQLAlchemy Core.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=124)** In the code, we import a few things from SQLAlchemy.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=128)** Then we established the engine and [[Metadata]] object.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=134)** Previously we created the table in SQLAlchemy, but since the table is already created in the Red30 database we can autoload it with the engine.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=144)** We just passed in the engine to the table statement.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=148)** Then we connect everything up with metadata.create_all and the engine.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=155)** Let's run it.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=157)** Python3 database.py.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-core-to-connect-to-a-postgres-database?u=76281980&t=162)** And now we've just set up our Python application with SQLAlchemy Core so it can connect to a Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (4), [[MySQL]] (3), [[Relational Databases]] (2), [[Python (Programming Language)|Python]] (2), [[Metadata]] (2)
> **CLI Commands:** mysql (3), python (2), sqlite3 (1), cd (1), pip3 (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** orm (2)
> **File Paths:** database.py (1)
> **Code Identifiers:** create_all (1)
> **Speakers:** - [narrator] (1)

#### [Manipulating with Postgres data using SQLAlchemy Core](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=0)** - [Instructor] With the setup complete, let's walk through how to establish a connection to a [[PostgreSQL|Postgres]] database using [[SQL]] Alchemy Core.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=9)** Engine dot connect creates a connection with the database.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=13)** Inside the connection, we run a bunch of CRUD statements.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=18)** CRUD stands for create, read, update, and delete.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=23)** These are the main operations you'll run as you manipulate data in any database.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=30)** Let's start with read.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=32)** We pass in the sales table to a select statement and then select all the rows in the table.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=38)** For each row, we print it out.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=41)** Then we add a new piece of data to the database.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=45)** It's a sale of a few books called "Understanding [[Artificial Intelligence (AI)|Artificial Intelligence]]."
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=51)** Now, let's say the buyer, Syman Mapstone, gets the books in the mail and one of them has a few pages ripped out.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=59)** We'd need to update the sales table so he gets a refund for the ruined book.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=64)** We do that here with an update statement.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=68)** We say, update the table where the order number is 1105910.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=76)** Then update the values so that the quantity is two and the order total is 39.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=84)** Once the statement is set up, we execute it with the connection.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=89)** To confirm the update, we reread the table and find the item with the correct order number.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=95)** We use a select statement and select the sale where the order number is 1105910.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=103)** Then we print it out.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=106)** Another operation we can use with [[Databases]] is delete.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=111)** We delete the item we just added by creating the statement and executing it with the connection.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=118)** To confirm the delete, we use our selection statement from before and try to find our item.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=125)** The row count will be 0 if the item does not exist, let's run it.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=132)** We'll go to our Postgres workspace.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=134)** The virtual environment is activated and we'll run it.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=141)** In the console, we can see all the items printed from the database with our select statement.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=148)** We add in our new sale and then update it to a quantity of 2.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=152)** That's what we see in the printout.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=155)** The new item with quantity 2.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=157)** Once we've deleted it, we get a row count of 0 when we try to select it again.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-core?u=76281980&t=163)** We've just completed the basic CRUD operations using SQL Alchemy Core in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[SQL]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** crud (3), sql (2)
> **CLI Commands:** find (2), python (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** setup (1), set up (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Setting up SQLAlchemy ORM to connect to a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's access our data in [[PostgreSQL|Postgres]] using the SQLAlchemy ORM.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=6)** Unlike SQLAlchemy Core, we'll be using classes and models to represent our data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=12)** Let's walk through this code.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=15)** To start, we connect to the database using an engine.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=20)** Then, we set up the schema.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=23)** When we used the ORM previously in this course, we wrote out the table's full schema in [[Python (Programming Language)|Python]].
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=31)** There's several benefits to doing this because it makes it very clear what you have access to within the table as you're coding.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=40)** Another option though, is to autoload the entire schema.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=45)** This means you don't have to write out and hard code every single column in the database.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=52)** We can do this using the automap base function and then set up the base with the engine using the prepare method.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=61)** To access the sales model, we just need to access the classes with base.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=67)** Let's run it.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/setting-up-sqlalchemy-orm-to-connect-to-a-postgres-database?u=76281980&t=72)** And now, we've just set up our Python application with the SQLAlchemy ORM, so it can connect to a Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** orm (3)
> **Prerequisites:** set up (3)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)

#### [Manipulating with Postgres data using SQLAlchemy ORM](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=0)** - [Instructor] With the set up complete, let's walk through how to establish a connection to a [[PostgreSQL|Postgres]] database with [[SQL]] Alchemy O-R-M.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=9)** We start by setting up a session.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=12)** This is how we'll communicate to the database.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=15)** Inside the session we use the four CRUD operations: create, read, update and delete.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=23)** We read an item using the select statement.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=27)** Then we order the results by order total.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=31)** This returns the smallest sale row and we print out its order total.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=37)** Next is create, or, insert.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=40)** We create a new sale using the model and add it to the database using the session's add method.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=47)** It isn't fully added to the database until we commit the change, so we run the commit method to complete the transaction.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=55)** The recent sale object we created is connected to the database.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=61)** This means, if I update the object, I will also update the database.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=66)** Here we update the recent sale to have a quantity of two and an order total of thirty nine.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=73)** Then we check to see if the sale is updated by running a select statement and filtering for the order we just inserted, using the order number.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=84)** To see if the sale is updated, we print out the quantity and order total.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=90)** These should be two and thirty nine, because that's what we updated them to.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=95)** Finally, we have delete.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=98)** To delete a sale, we can pass in a sale object to the session.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=103)** Here, we delete the object we've been working with.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=108)** To save the change we committed, let's run this program.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=113)** We'll activate the workspace and run the file.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=120)** In the output, we see $19.98 as the smallest sales total.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=126)** We also see the updated values for our inserted sale; two for the quantity and thirty nine for the total.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=134)** We've accessed our Postgres database in [[Python (Programming Language)|Python]] using the SQL Alchemy O-R-M.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=140)** Let's take a second to reflect.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=144)** If our database was in "My SQL" or "SQL Light 3" instead, all we would need to do is change our input to the create engine function.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/manipulating-with-postgres-data-using-sqlalchemy-orm?u=76281980&t=154)** Of course, usually you won't be switching between relational [[Database Management]] systems, but if you want to migrate your database from one to the other, this makes it fairly straightforward, because most of your Python code can remain the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[PostgreSQL|Postgres]] (2), [[Python (Programming Language)|Python]] (2), [[Database Management]] (1)
> **Env Vars:** sql (4), crud (1)
> **CLI Commands:** python (2)
> **Versions:** 19.98 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=0)** - [Narrator] In this challenge, I want you to create a database that stores authors and the books they've written.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=12)** The database will contain three tables, authors, books, and AuthorBooks.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=20)** Each record and authors will have an ID, first name and last name.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=25)** Each record in books will have an ID, title and number of pages.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=31)** Each record in AuthorBooks will have an ID, a corresponding author ID, and a corresponding book ID.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=40)** We separate the author book pairings into a separate table because it allows us to easily store multiple books by the same author while allowing us to have lots of data on each table.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=53)** For books with multiple authors, multiple entries would be added to the AuthorBooks table, each entry with a different author.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=62)** You're welcome to create this database using psycopg2, SQLAlchemy Core, or SQLAlchemy ORM.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=70)** I'll show you one solution using the SQLAlchemy ORM, but there are many you can choose from.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=77)** Once you have the database in place with the appropriate tables, it's time to add functionality to add a new book to the database.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=86)** A few operations must take place in order to do this correctly.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=92)** First, the books table should be updated with the new book.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=96)** If the author is a new author, the authors table should be updated to include the new author.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=103)** If the author is not new, the author should not be inserted again.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=108)** With the authors and books database set, you should add the new pairing to the AuthorBooks table.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=115)** We'll assume the book has only one author.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=118)** All of this should be done within a transaction, so the database never falls into an incomplete state.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/challenge-create-a-postgres-database?u=76281980&t=125)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** orm (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a Postgres database](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=0)** - [Instructor] Let's create a database that stores authors and the books they've written.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=10)** We'll create our database using the [[PostgreSQL|postgres]] shell.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=16)** We'll use the keywords CREATE DATABASE, and we'll call it library.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=23)** And there it is in our [[Databases]] list. Let's connect to it.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=32)** To make this walkthrough a little more fluid, I've written out all the ORM code in advance.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=38)** We'll talk through each piece of code as we get to it.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=42)** To start out, we import some tools from the sqlalchemy libraries and create an engine.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=49)** We're using postgres and connecting on localhost to the library database.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=56)** Our user and credentials are also in the string.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=59)** Since we're creating our tables with sqlalchemy, we can't automap just yet.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=66)** We need to write out each column and its data type, and that's what we see here.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=71)** We create the registry and generate the Base from the registry.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=77)** Then we use this Base to create the models.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=80)** The Author model has an author_id, first_name, and last_name.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=86)** The Book model has a book_id, title, and number_of_pages.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=93)** Our last model, BookAuthor, associates our author and book data.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=99)** In this case, that's our book_id and author_id.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=104)** With this model, we use foreign keys to link the ids and set up a relationship between this table and the other tables.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=113)** Once our models are set up, we can create them with the engine.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=117)** Now, we'll jump down to the bottom of the file where the core execution takes place.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=123)** That's on line 76.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=126)** Here, we retrieve data from the user to input into our database.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=132)** We ask the user for the title of the book, number of pages, and then information about the author.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=139)** To input the data into the database, we use the add_book function.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=145)** Let's look at the implementation.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=148)** The add_book method takes in data we want to add to our database.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=153)** We start off by creating instances of the author and book from this passed-in data.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=160)** Then we begin the session.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=162)** We don't want to add any data that already exists.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=167)** This means before we add a new book, we should run a query to check if the book already exists in the database.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=175)** We do this by using the select function and filtering where the book's data is the same as the data passed in.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=185)** If the book exists, meaning the entry is not none, we print out a message to the user and exit the function.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=194)** If, in fact, the book does need to be added, we add it with the session.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=199)** Then we do the same thing with the author.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=203)** We check to see if the author's already been added to the database.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=208)** If the author exists, we only add the book and then create the pairing between the existing author and the new book.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=217)** If the author does not exist, we add the author and then create the pairing.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=223)** We have to flush the session because otherwise the author_id on the new author would not exist.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=231)** Same for the book_id.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=233)** That's why we have to flush the session.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=237)** It updates the object so the id is not null.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=241)** Once we've updated the book and author tables, we need to update the pairing table.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=247)** We do that by adding the pairing to the session and then committing the changes.
>
> **[4:13](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=253)** Our commit will automatically do the flush for us.
>
> **[4:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=257)** At the end, we print the new information we've added to the database.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=262)** Let's run it.
>
> **[4:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=264)** We'll activate our workspace and run the file.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=270)** Let's add a book.
>
> **[4:34](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=274)** We'll add "The Huntress" which is 560 pages by Kate Quinn.
>
> **[4:42](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=282)** We add the book and the author.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=284)** Let's add another book.
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=287)** We'll add "The Institute" which is 576 pages by Steven King.
>
> **[4:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=296)** Now, let's try adding a book where the author is already in the database.
>
> **[5:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=302)** We'll add "The Diamond Eye" by Kate Quinn.
>
> **[5:11](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=311)** The author already exists so we don't add it to the database.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=317)** The author_id is 3, and if we scroll up, the other book we added also had author_id 3.
>
> **[5:27](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=327)** Both books map to the same author.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=330)** Let's see what this looks like in the postgres shell.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=340)** We'll select everything from the authors table.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=344)** We've Kate Quinn with author_id 3 and Steven King with author_id 4.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=351)** Now, let's check the books table.
>
> **[5:53](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=353)** We've three books with different book_ids.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=356)** Now, let's check the bookauthor table.
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=362)** And it's bookauthors.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=365)** Here, we can see each bookauthor_id.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=369)** For this pairing, we have author_id 3 and book_id 4.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=375)** That's Kate Quinn and "The Huntress."
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=378)** Then we have author_id 4 and book_id 5.
>
> **[6:23](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=383)** That's Steven King and "The Institute."
>
> **[6:26](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=386)** Then we have the last entry, author_id 3, so that's Kate Quinn, and book_id 6, "The Diamond Eye."
>
> **[6:35](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/solution-create-a-postgres-database?u=76281980&t=395)** Our data has been added and organized in the Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (4), [[Databases]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=0)** - [Kathryn] Congratulations on finishing the course!
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=3)** From learning about the different types of [[Databases]] used with [[Python (Programming Language)|Python]] to actually interacting with them in code using the SQLAlchemy ORM, you've learned a lot.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=14)** You can now populate data into your application or even modify data in your relational database using Python.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=22)** From here, I encourage you to check out some of the other Python courses in the [[LinkedIn]] Learning library.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=30)** For diving deeper into databases, try some of the courses that focus solely on your database of choice, SQLite, [[MySQL]], or [[PostgreSQL|Postgres]].
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=41)** Understanding the nuances of the technologies your application interacts with can be the difference between spending a week on a coding problem versus an hour.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=51)** You may also want to start integrating dynamic data into more sophisticated applications.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=58)** Look into Flask, [[Pandas (Software)|pandas]] and other Python technologies that use dynamic data to create webpages or build charts that help you analyze data.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=68)** In fact, you can check out the companion course to this one to see practical examples of how to use databases with Python in real world applications.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=78)** Becoming a better software engineer doesn't end with mastering a single programming language.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=84)** You may have stepped out of your comfort zone by taking this course involving databases, and I hope it encourages you to continue stepping out of your comfort zone as a technologist.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=96)** There's always something new to learn.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-working-with-databases-22307421/continue-using-databases-in-python-applications?u=76281980&t=98)** My name is Kathryn, and I hope to see you again in some of my other LinkedIn Learning courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Databases]] (4), [[LinkedIn]] (2), [[MySQL]] (1), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** python (5), mysql (1)
> **Env Vars:** orm (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-working-with-databases-4365479)

## Skills Covered

- Databases
- Python (Programming Language)

## Path Context

### In [[Master Your Python Skills]]
← [[Unit Testing in Python]] | **8 of 11** | [[Python- Working with Predictive Analytics (2019)]] →

### In [[Master Python for Data Science]]
← [[Advanced Python- Working With Data]] | **3 of 8** | [[Python Data Structures and Algorithms]] →

## Appears In

- [[Master Your Python Skills]]
- [[Master Python for Data Science]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)