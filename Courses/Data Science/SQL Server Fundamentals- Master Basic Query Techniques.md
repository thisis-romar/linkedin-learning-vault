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
created: 2026-04-21
---

![SQL Server Fundamentals: Master Basic Query Techniques](https://media.licdn.com/dms/image/v2/D4D0DAQFZ5RInMGc4Tw/learning-public-crop_675_1200/B4DZVN0T3.GkAY-/0/1740767314055?e=2147483647&amp;v=beta&amp;t=bw7wK_y3-_PGUDTr6XbTIa7GpVHo3qoY6fw0zS0A-Hw)

# SQL Server Fundamentals: Master Basic Query Techniques

> Do you want to learn about SQL but aren’t sure where to start? In this beginner-level course, instructor Julianne Thouin covers basic concepts of relational database design and explains how to write simple SELECT statements using joins and proper filtering. Julianne explains what SQL Server is and what it is used for. Next, she shows how tables in a relational database relate to one another throug

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques) | 1h 43m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Julianne Thouin]]

## Resources

- Exercise files available

## Skills Covered

- SQL
- Microsoft SQL Server

## Table of Contents

### Introduction

#### How can SQL answer your data questions?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=0)** - [Instructor] Understanding how to directly access information stored in a database can be a very powerful tool.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=6)** And you may think that you need a special diploma or hours and hours of in-depth training to have any hope of learning how to do that.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=13)** But that's simply isn't the case.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=15)** Hi, my name is Julianne Thouin and I established a career writing database queries without obtaining a degree in computer science by learning to write in an English like programming language called SQL.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=28)** In this course, I'll walk you through the basics of writing SQL queries and give you all the tools you'll need to start retrieving information from a relational database.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=36)** Whether you're looking to learn your first programming language in hopes of someday working as a professional database engineer or you already work alongside developers and want to be able to get the answers you need by querying the database on your own.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=50)** This is a great place to start.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/how-can-sql-answer-your-data-questions?u=76281980&t=52)** Welcome to SQL for non-programmers.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Introduction to CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=0)** - [Instructor] This course includes automated code practice problems, which appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=8)** Each one includes instructions and a couple of code editors you can use to write and test your own solution to the prompt presented.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=16)** These challenges are hosted by CoderPad, and can be found on the course page in the same area where you watch the course's videos.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=24)** We recommend using a desktop browser for the best experience with code challenges, but you can also use the LinkedIn Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=33)** Each code challenge has three areas, instructions on the top left, a code editor for your answers on the right-hand panel, and a console that will show the query results in the bottom left.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=47)** You can also use these drag handles to allocate space as you like.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=52)** To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=59)** Each challenge has instructions, including diagrams of the tables needed to solve the problem, a description of what your query is meant to retrieve, and what the final output will look like.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=71)** There are also examples of similar results sets and additional notes on the data and the sample tables and some of the syntax rules you'll need to follow with CoderPad, which uses what is known as the ANSI standard for the code.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=85)** This is also what's used in SQL Server, but Microsoft's version allows some additional code formatting that will not successfully compile in CoderPad.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/introduction-to-coderpad-25266879?u=76281980&t=95)** So make sure you pay attention to the instructions where that may apply.

> [!info]- Semantic Content
>
> **Env Vars:** ansi (1), sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to SQL Server and Relational Database Concepts

#### What is SQL Server?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=0)** - [Instructor] Before we can dive in and write a single line of code, it's important that we cover a few definitions and high level concepts that we are going to need for this course.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=10)** SQL pronounced as either SQL or S-Q-L depending on who you're talking to, is an acronym that stands for Structured Query Language.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=21)** It is a basic English like programming language that is used to interact with a database.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=28)** A database is an organized collection of data points stored on a computer.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=34)** Any information that an organization needs to conduct their affairs is stored in a database of some kind.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=41)** More specifically, SQL is used for managing a relational database, which is a data storage method that organizes information and a series of tables that are connected through data relationships.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=54)** We'll be going more in depth with how that works in another video, so don't worry about that too much right now.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=61)** There are several different relational database management systems out there that you might've heard of like Oracle PostgreSQL, or MySQL, but in this course, we'll be using Microsoft SQL Server and learn to write a specific style of SQL called Transact SQL or T-SQL for short.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=82)** There are some syntactical differences among the different versions of SQL, so once you've mastered one version, you could probably look at code from another one and understand what's going on.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=93)** But the skills you learn in this course won't be 100% transferable to other applications.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=99)** The major differences among the different RDBMS options has to do with feature stacks, under the hood performance tuning, support, and costs.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=111)** The program I'll be using to run my code and interact with the databases in this course is called SQL Server Management Studio or SSMS.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=121)** Before you can start writing any code, you'll need to make sure that you have the latest version of SQL Server downloaded and started on your computer, and Microsoft has all that you'll need to do that right on their website.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=134)** You can go here to download SQL Server.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=138)** The developer version is free and will do just fine for your first steps into SQL Coding, and you just need to install it using the default settings provided.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=148)** Then you can go here for instructions on how to start the SQL Server Configuration Manager and the SQL Server instance that you've downloaded on your machine.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=159)** The program I'll be using to run my code and interact with the databases is called SQL Server Management Studio or SSMS, which you can also download for free here.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=171)** Once you have all that ready, you'll be good to go.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=175)** I do all of my development work on a Windows machine, but you can still run SQL Server on a Mac computer.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=181)** Your installation and setup will just look a little different.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=184)** You'll need to install a program called Docker, which you can download here.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=189)** Obviously, you'll just select the appropriate download for Mac option for your machine.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=194)** Then you can follow the instructions found in this blog post to set up and start SQL Server.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=202)** You won't be able to run SSMS on a Mac either, but Azure Data Studio is another free tool that you can use for your SQL development.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=211)** Download that program here.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/what-is-sql-server-23421631?u=76281980&t=214)** Your interface will look different than what I'm using in these videos, but you can still run all of the same queries in this tool, which will look something like this.

> [!info]- Semantic Content
>
> **Env Vars:** sql (18), ssms (3), rdbms (1)
> **Definitions:** is an  (2), is a  (2), is called (2), stands for (1)
> **Prerequisites:** you'll need (3), install (2), setup (1), set up (1)
> **CLI Commands:** mysql (1), make (1), docker (1)
> **Code Keywords:** interface (1), this. (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Understanding servers, databases, and tables
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=0)** - [Instructor] When the SQL Server installation is up and running, you'll have set up a local instance of a SQL Server on your computer that you can connect to through SSMS or Azure Data Studio.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=10)** Again, I'll be using SSMS in these demos.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=14)** When I open up the program, this Connect to Server window pops up and I automatically have the local instance selected.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=21)** But if that didn't happen for you, just go to this dropdown, select Browse for more, expand the Database Engine option, it should be right there for you.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=32)** Click OK and then Connect, and you should be good to go.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=37)** To show you another way, I'll first disconnect by right clicking here.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=44)** You also have the option of just typing a period in the Server name box.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=49)** Hit connect, and that works the same way.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=51)** If you have a machine that's powerful enough, you could have more than one instance installed.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=56)** And if you're working for a company that uses SQL Server, they probably have many servers that people with the right permissions can connect to.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=63)** But for this course, you'll only need the one.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=65)** If we go over here to the Object Explorer panel on the left, we see we have lots of different options.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=71)** For this course, we're only concerned with the Database folder, which I'll expand by clicking on the plus sign to the left.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=77)** If you've just installed SQL Server for the first time, you probably won't have anything here, I created this demo database earlier.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=84)** But in order to create our own database, we just right click on Databases, select New Database, type in whatever name you want.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=94)** I'm going to use "sandbox" since this will be the database I'll be using in all of these demos, and just say OK.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=102)** And there we have our database, this little cylinder icon indicates that this is a database.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=108)** The data on this database is organized into tables.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=111)** Tables in SQL Server have two part names.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=114)** The first part before the period is called the schema.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=118)** A schema can be used to bucket similar tables or tables for a particular application or project under one name.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=125)** You can also use a schema to manage security and permissions.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=129)** The second part of the name after the period is the unique table name.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=133)** You can have more than one object with the same name as long as they're in different schemas.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=138)** You may also see instances where the server name and the database name are included when referencing a table in code, but usually it's just schema name.table name, or sometimes just the table name by itself since the server will assume you're looking in the default schema set to DBO on install if you don't specify.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=157)** There's a file attached to this video called two.trees.sql.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=161)** If you would like to follow along with the demos in this course, you just have to run the script to create the tables and add the data you'll need to your local database.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=169)** To do that, open the file and then make sure that you're on the correct database by checking this dropdown box right here.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=177)** We want to be on "sandbox," and then just click the Execute button to run the script.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=185)** And you'll see: Command completed successfully.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=189)** Then to look at the list of tables you just added to your database, click on the plus sign next to the database option, and then next to the Tables folder, and here we have our list of tables.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=201)** I'm going to right click on one of these, the dbo.customer table, and do select top 1,000 rows to give you an idea of what this data looks like.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=212)** So this is similar to what you might find if you open up an Excel file.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=215)** The data is stored in rows and the data points are divided up into columns.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/understanding-servers-databases-and-tables-23428000?u=76281980&t=221)** We've got a bunch of readable data here, but we also have some IDs that are pretty meaningless on their own.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), ssms (2), dbo (1)
> **UI Navigation:** click on (3), dropdown (2), go to (1), open the (1)
> **Prerequisites:** set up (1), install (1), you'll need (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** two.trees.sql (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Relational database concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=0)** - [Instructor] At first glance, it might look like the tables in a relational database would be structured in pretty much the same way as tables that you might be used to in other contexts, from Excel files or a table in a textbook.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=11)** There are some key differences however, which we'll cover in this video.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=17)** We're going to start With a simple sample dataset to demonstrate how relational databases organize information.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=25)** This order's table looks like something you might see in an Excel file with information about customers, where they live, what they purchased, how much each item costs and the order total.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=36)** Looking at this dataset, you might notice some inefficiencies in storing the data this way, because we are recording some of the same data points over and over, such as the customer's location or the price of a bottle of oil versus a case of oil.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=51)** We also have multiple rows for the same order when more than one type of item is included in the order.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=57)** To avoid this repetition, I'm going to transform this dataset as you would to store it in a relational database, where data points are stored as few times as possible and tables are linked to one another using pointers called keys.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=74)** First, I'm going to split out the customer information into its own table, the customer table.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=79)** Each customer's information is stored only once.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=82)** And I've assigned each of them a customer ID that I will use in my original table as a stand-in for the entire data row.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=90)** So our new data table would look like this, where we've substituted the customer data that was there before with just the IDs that represent that data from the customer table.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=102)** This is referred to as a one to many relationship.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=106)** Each data point is stored once in the customer table but it can be referenced many times in the order table and in any other tables that store the customer ID in this database.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=118)** To deal with the rest of the duplicate data, let's break out the product information into a new table as well.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=124)** We'll follow the same pattern as with the customer ID by assigning an ID to each product.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=130)** You may notice that we could still remove duplicates further in this dataset, but for the sake of this example, we're not going to do that step right now.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=140)** We could do the same thing we did to add the customer ID to the order table with this new product ID as shown here, but that would still leave us with multiple rows for the same order, which isn't deal.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=152)** Instead, we will remove the product information from the order table entirely, eliminate multiple rows per order in the main table and add an association table also called a join table or a junction table to connect the order information with the product information in a many to many relationship.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=173)** A visual representation of the way the data is organized in a database is called an entity relationship diagram or ERD which you'll see here for our new data design.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=185)** The process I just went through to remove duplicate data and move into a relational database model of storage where tables are linked using key relationships is called normalization.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=196)** In a perfect relational database, your data would be 100% normalized, which means that you would avoid the costs associated with storing any piece of information more than once.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=207)** In reality though, you might see some intentional denormalization or storing the same piece of information more than once.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=216)** Sometimes you want to allow some denormalization if it just makes your data easier to work with, or if your primary concern is speed because it's easier for the server to get everything it needs from one table, rather than jumping across multiple tables.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=232)** As you can see, our dataset has transformed a lot going from this to this.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/relational-database-concepts?u=76281980&t=239)** And while it's not important for you to be able to draw your own ERD at this point, it is critical that you understand the conventions that it represents as you start to navigate a normalized SQL database.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1), this. (1)
> **Env Vars:** erd (2), sql (1)
> **Definitions:** is called (2), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Surrogate, primary, and foreign keys
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=0)** - [Instructor] Time to delve a little deeper into some of the terminology used when discussing the types of relationships among the tables in a relational database.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=9)** As I said, all of their relationships are managed through keys that can be used as a stand in when they are referenced in another table.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=16)** These keys are called surrogate keys.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=20)** These values don't have any meaning on their own and are most often generated by SQL Server, as with an Identity, Sequence or NewID order GUID, short for global unique identifier.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=35)** If I called someone at Two Trees Olive Oil and asked, do you remember the order total for order number 180?
>
> **[0:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=42)** They would have no idea what I was talking about.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=46)** 180 is just a surrogate key that represents all of the data associated with that order.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=51)** If instead, I asked, do you remember the order total for Merrill Freeman's order on May 2nd, 2018?
>
> **[1:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=60)** They might have some chance of at least understanding what I'm asking about.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=65)** Providing the customer's name and the order date in this case is a way to uniquely describe that row in meaningful words.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=72)** This descriptive identifier is called the natural key, as opposed to the surrogate key we talked about earlier, which has no meaning on its own.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=81)** It is best practice in a relational database design to have some kind of unique identifier for every row in every table of your database called the primary key.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=91)** This could be a single column or multiple columns put together to make a unique combination.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=97)** The surrogate and natural keys are concepts of database design and you'll want to take them into consideration when you're choosing the primary key, which will be the physical uniquifier on the table in your database.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=111)** This is a value that you're going to use to reference that unique value in other tables in the database.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=117)** Primary keys also play a part in creating referential integrity in your database as they provide a data check for what's called a foreign key.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=126)** If you add a foreign key to a table, which can only point to a primary key value, the server will check that the ID value that you're inserting in that column actually exists in the table the foreign key is pointing to.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=139)** That way, you won't add a surrogate key value that doesn't mean anything.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/surrogate-primary-and-foreign-keys?u=76281980&t=144)** Now we've definitely covered a lot of ground in this section, and I'm sure that you're eager to start writing actual SQL code, and I promise, we're almost there.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), short for (1), is called (1)
> **Env Vars:** sql (2), guid (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 2. Single Table Select Statements

#### SQL data types and nullability
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=0)** - [Instructor] The last thing that we need to cover before we can move on to write some code are the concepts of data types and nullability, which have to do with the rules around how data is stored in each column of a table.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=12)** Data types define what kind of information is stored in a particular column, as well as how much precision is allowed in that data point.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=21)** There are a number of different options available in SQL Server and we will only cover a handful here, but the basic ones are broken down into numbers, strings and characters, dates and times, and true/false values.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=37)** For numbers, we can store whole numbers with the data type INT, and we can store decimals using either DECIMAL or NUMERIC, which are pretty much interchangeable, so you can decide whichever one you prefer.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=51)** With the decimal values, you can specify how many places you want to allow after the decimal, using two numbers like you see here.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=60)** The first number indicates the maximum number of digits you'll allow in the number, and the second tells you how many places will be allowed after the decimal.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=70)** For strings and characters, we can store a fixed number of characters in a column using the CHAR data type.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=77)** And you would use the number after to define how many characters would be stored.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=82)** If the number of characters in a column will vary from row to row, you would use VARCHAR instead and define the max length of your string there.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=91)** When you want to record dates and times, you have a few different options.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=96)** You can store just the date using the DATE type, just the time using TIME, or you can store those two points together using DATETIME or DATETIME/2.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=108)** DATETIME/2 just has a little more precision.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=112)** And then, if you need to bring time zones into the mix, then you could use the DATETIMEOFFSET.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=118)** Lastly, we've got true false values, which are called BITs, where the only permissible values are zero and one, where zero means false and one means true.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=130)** So those are some of the different ways that we can store data in a table in SQL Server, but there's one more rule that we need to consider, which is whether or not the column is nullable.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=141)** We deal with the concept of NULL in a couple of different ways in SQL, but in regard to its use at the table level, it answers the question of whether or not this is a required data point.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=152)** The term NULL just means that there is nothing stored in that column.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=156)** So if a column is defined as NULL that means that it is optional to have something saved there and logically NOT NULL means that you must provide input for this data point.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/sql-data-types-and-nullability?u=76281980&t=169)** And with that, we have made it through all of our database design concepts and we can get to actually writing some code.

> [!info]- Semantic Content
>
> **Env Vars:** null (4), sql (3), datetime (3), int (1), decimal (1)
> **Definitions:** means that (2), is a  (1), defined as (1)
> **Code Keywords:** type. (1), type, (1)
> **SQL:** varchar (1)
> **Speakers:** - [instructor] (1)

#### Reading from a single table in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=0)** - [Instructor] We have finally arrived at the coding portion of our show, and we're going to start with the most basic operation, which is reading from a single table.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=8)** To do that, we're going to build what's known as a select statement, where you're going to select what columns you want to look at, and tell SQL Server what tables those columns should be coming from using a from clause.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=23)** So let's move over to SSMS so we can see this in action.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=28)** As you can see, I've already connected to the server on my machine and I'm going to go ahead and expand my Databases folder by clicking on the plus sign to the left.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=38)** And I'm going to be using the sandbox database for this demo, and expand that in the same way.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=45)** And then lastly, we're going to look at our list of tables available.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=49)** And if you ran the data script attached to chapter one, your database should look exactly like this as well.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=57)** So to write my first query, first I'm going to select the database I want to work off of, which is the sandbox database.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=65)** And I'm going to go up here and click on New Query.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=69)** And I'm going to go into my query editor, and I'm going to select star.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=74)** Star just means get all of the columns available in this table.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=78)** And I'm going to say from dbo.additional_service.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=86)** And I can run that by going over here and clicking on Execute.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=91)** Run that.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=93)** And I get all of the data available in that table.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=96)** And if I go over back to my object explorer and expand the additional_service table and the Columns folder, I'll see that the columns here match what came back in my results set.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=111)** A lot of times, you're not going to want to look at every column in your table, so you can limit that set by listing the columns individually.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=119)** So I get rid of this star, and I just want to look at the service name.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=125)** Add a comma to separate the column names.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=128)** And I want to know the minimum number of participants for each service.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=134)** And then again, I'm going to go over and execute my query.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=138)** And I'm just going to see the data from those two columns.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=141)** We haven't changed the table at all.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=144)** If I go over here, I can refresh.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=149)** And I can confirm that all of the columns are still there.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=153)** I'm just changing what's presented.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=156)** Another good tip when you're running queries like this is that sometimes you're dealing with a table with lots and lots of rows, but maybe you're just trying to get an idea of what the data looks like or you want to just look at a sample set.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=168)** So to limit how many rows come back, after select you would just add top three, or top 10 or however many you'd want to.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=178)** And again, execute.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=180)** And I only get three rows back.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=184)** So you'll notice in our results panel that by default our column headers are also the same as the names of the columns themselves, but sometimes you might want to change your presentation a little bit and change those column headers.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=198)** So I'm going to show you a couple of ways to do that.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=200)** There're several ways, but I'm just going to show you the two that I like best.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=204)** First I'm going to just copy this query.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=207)** So the first option is to put your alias at the front of your column name, and I'm going to call this additional_service, and you just put an equal sign.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=221)** And then I'm going to say minimum_participants.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=226)** And I'm going to run both of these so we can compare the results that we get.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=230)** Same data.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=232)** And you'll notice that the only thing that has changed is the column header.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=235)** And again, we're not changing the structure of the tables at all, just their presentation.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=241)** And then the other way that you can do this, we'll start fresh, is to add it after the column name.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=249)** And it's not required, but I really recommend that you put these in square brackets.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=255)** So I'm going to use the same ones, additional_service, and using the brackets also allows me to put a space in the column alias.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=264)** If I didn't have those brackets, it wouldn't know what to do if I added this space.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=269)** And then I'm going to say minimum_participants.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=275)** Going to execute that.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=278)** And again, same result.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=280)** It's just a matter of which one you like better.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=285)** I also really quickly want to point out this yellow bar at the bottom of our query window.
>
> **[4:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=291)** And there's a lot of useful information here, like the server that we're connected to, the database we're connected to, the runtime, and the number of rows that we've gotten back.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=304)** And I just really want to draw your attention to this runtime.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=307)** Sometimes your query might be taking a really long time to run when you're only expecting a little bit of data back.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=314)** So you might want to cancel your query in the middle.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=317)** So to do that, you just go up here, and this Cancel button will be red while the query is running, and you just click on that, and it will stop whatever query you're running.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=328)** Just a thing to keep an eye on.
>
> **[5:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=331)** Realistically, there probably won't be very many scenarios where you just want to get all of the data from the table every time.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/reading-from-a-single-table-in-sql?u=76281980&t=338)** More likely you'll have specific questions that you want to answer by filtering the results in your query, which is what we're going to cover in our next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** additional_service (4), minimum_participants (2)
> **UI Navigation:** click on (2), select the (1)
> **Code Keywords:** let (1), this, (1)
> **Env Vars:** sql (1), ssms (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Filtering on a single condition in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=0)** - [Instructor] To really make our select queries useful, we are going to need to add some filtering conditions to answer questions like, can you show me the purchases made in the last week?
>
> **[0:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=9)** Or can you show me the orders totaling over $100?
>
> **[0:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=13)** And to accomplish that, we're going to need to add a where clause to our base query.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=19)** Show me the results where this data point is true or false.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=23)** And there are several different ways that we can do that.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=27)** So first we're going to look for an exact string match.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=30)** So find the rows where the service name is catering lunch.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=34)** So we're going to start with our base query as we had it in our last video but we're going to add a where condition, where and the service name cause that's the condition we're considering and then equals.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=52)** And I'll use single quotes around my string.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=55)** And I have to remember to type the exact name of the service I'm looking for here.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=59)** So we can highlight this to just run this query and we get back just this one route, and it has to be an exact match.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=69)** So these spaces had to be exactly correct too.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=72)** If I did this and ran that, I wouldn't get that result back.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=78)** Cause it has to be an exact match when you're using the equals condition.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=82)** Put those spaces back and we're good.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=87)** But then if I want to find the rows where the service name is not catering lunch.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=93)** Again, we'll copy this query and use it as a basis for this question, you can either add an exclamation point or a bang in front of the equals and it will give you all the rows.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=107)** (murmurs) is not catering lunch or you can do open and close angle brackets.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=114)** They give you the same result.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=116)** Those two do the same thing.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=118)** So that's just a matter of preference but then if we want to consider, oh, what if it's in this list of service names?
>
> **[2:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=128)** We can do that as well.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=130)** And we just say, where the service name is in, copy this list.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=143)** Just a comma-separated list, but I want to make sure that I don't include this or here, since we know from earlier that that syntax has a specific meaning and it won't work here.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=157)** Don't forget to close parentheses or you'll be sad, run that.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=162)** And we get anything that's included in that list.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=164)** So I could also add an option that doesn't even exist.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=169)** And I could just say where it's in, gift basket, extra large, select that and run it.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=179)** It just finds what's included.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=181)** If there's anything extra there it's not going to hurt anything.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=188)** And then just as we had not equals, if we want to find everything except for these values we can just say not in.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=200)** Run that and it will exclude those rows.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=204)** Just to note about formatting here, it's perfectly fine that I put this whole list on one line.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=209)** This little symbol means that I just dropped to the next line because white space doesn't mean anything in SQL server.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=217)** If I decided that I wanted to put everything in one list like this, I can do that.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=225)** And it's not a problem.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=226)** It works the same way.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=229)** I suggest that you use spacing more like this, generally speaking just because it makes it a little bit easier to read.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=237)** And that's really important when you're looking at a piece of code that somebody else wrote, or frankly even something that you wrote and haven't visited in awhile.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=245)** Clear code is very important.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=248)** Another thing that can help your code be more clear are comments like this, and you can create comments in SQL server by just adding two dashes and say here's may filtering condition.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=260)** You can write anything after these two dashes and include it when I run my query and it doesn't have any impact.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=267)** It's just good to comment your code, it's a good practice.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=272)** On to our next way of filtering, so our previous examples with equals and N, we required there to be an exact string matches.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=282)** We saw when I took the spaces out in that first example, the query didn't work, and there are going to be a lot of cases where you might not have all the information.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=290)** So SQL server gives us, I'm just going to copy this query again, the like operator and wild cards for that case.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=300)** So I'm just going to say where service name like and then same thing open with single quote, use single quotes around strings, gift basket delivery.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=314)** And then I don't care what the text is after this part of the string.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=317)** So I'm going to add a wild card.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=318)** In this case, I'm going to use the percent sign.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=320)** There are several different wild card options that you can look up on Microsoft's website but the percent sign is the most used and is the most universal.
>
> **[5:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=331)** So if I just run this, I get everything that starts with gift basket delivery.
>
> **[5:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=340)** I can add those percent signs pretty much anywhere in my code.
>
> **[5:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=344)** So if I, again, take this, I want to find anything where the service name contains party.
>
> **[5:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=354)** And I don't know if it's at the front of the string, the back of the string.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=356)** I don't where it is.
>
> **[5:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=357)** I can just wrap that string in 2% signs.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=361)** So run it like that.
>
> **[6:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=363)** And we get everything that contains the word party.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=367)** And then just like we have not equal, not in should come as no surprise that we also have not like, so we'll get everything except the things that start with gift basket delivery.
>
> **[6:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=386)** We can also do range searches in SQL server.
>
> **[6:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=390)** So if we want to find the rows where the price per person is between 75 and 125, thankfully SQL is an English-based language, so we can basically almost type exactly what's there.
>
> **[6:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=403)** So where a service name between 75 and 125.
>
> **[6:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=412)** So that didn't work because I chose the wrong column in my query.
>
> **[6:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=416)** And I passed integers in when I was trying to look at the string.
>
> **[7:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=421)** So actually that's definitely something to be careful of, make sure that the data type that you're providing in your filtering condition is the same data type as what your column actually is.
>
> **[7:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=431)** So I actually, I wanted price per person or per person price between 75 and 125.
>
> **[7:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=442)** There you go.
>
> **[7:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=443)** And you'll notice that between is inclusive.
>
> **[7:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=448)** So we did get this result where the price per person is 125.
>
> **[7:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=454)** Be careful using between because of that, when you're dealing with dates and times though, just a word of warning on that.
>
> **[7:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=465)** We can also look for rows where the price per person is less than $75 with this less than sign.
>
> **[7:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=476)** With the angle bracket, we can run that.
>
> **[7:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=479)** We'll get everything that's less than 75.
>
> **[8:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=483)** And then we can look for rows where it's greater than or equal to if we want to include 125 you can do that with less than as well.
>
> **[8:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=495)** Run that because we did greater than or equal to, we got the row that included price where price per person is 125.
>
> **[8:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=504)** If we took that out, we wouldn't get an error.
>
> **[8:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=508)** We do it, just get no results back.
>
> **[8:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=512)** So there's one sort of strange data state we haven't covered yet.
>
> **[8:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=518)** And that's how do we deal with null values?
>
> **[8:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=520)** So you'll notice if I say where men participants is for example, let's say greater than seven.
>
> **[8:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=534)** Okay, null isn't greater than seven.
>
> **[8:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=536)** Okay, so let's look at it the other way, less than or equal to seven.
>
> **[9:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=542)** Well, null isn't there either.
>
> **[9:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=544)** So how do we get those rows back?
>
> **[9:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=548)** Seems logical that we would say men participants equals null.
>
> **[9:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=556)** But that doesn't work either.
>
> **[9:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=558)** And that's because null itself isn't a value.
>
> **[9:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=561)** It's a data state.
>
> **[9:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=563)** It's the absence of a value.
>
> **[9:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=564)** So you can't evaluate it in N equals not equals.
>
> **[9:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=568)** It's not zero.
>
> **[9:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=569)** There's nothing you can compare it to like that.
>
> **[9:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=572)** So instead, we say, where men participants is null, where the data state is null.
>
> **[9:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=579)** We can run that.
>
> **[9:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=581)** And again, no surprise, you can do the opposite to your work is not null, we get all of these rows back.
>
> **[9:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=591)** So be careful with nulls there, they're a little tricky.
>
> **[9:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=596)** So those are the major techniques that you'll use when you're filtering queries but you might be wondering, well, what if I have more than one condition to consider in one query.
>
> **[10:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-a-single-condition-in-sql?u=76281980&t=605)** Well, you're in luck because SQL server provides tools to handle those cases as well.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (5), match. (2), let (2), case. (1), case, (1)
> **CLI Commands:** find (5), make (3)
> **Env Vars:** sql (6)
> **Warnings:** be careful (3), warning (1)
> **Analogies:** just like (1), for example (1)
> **Best Practices:** don't forget (1), good practice (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Filtering on multiple conditions in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=0)** - [Instructor] In analysis, it's often useful to consider more than one data point at a time, and SQL uses logical operators 'and' and 'or' on the 'where' clause to accomplish that.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=12)** The basic rules of logical operators in other contexts, like mathematics, apply here in SQL as well.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=19)** When you use 'and', both sides of the equation must evaluate to true to return those results.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=26)** And with 'or', at least one of them must evaluate to true.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=29)** Though it's fine if both conditions are met as well.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=34)** So before I start our demo I'm going to show you one little trick that you can use if you're using SSMS.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=40)** So if you go over here to the top right-hand corner, there is this little up and down arrow right here in the corner.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=48)** And if I click that and drag it down, I can use that to freeze this top panel of my screen.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=55)** So I can scroll down here, and that's going to be useful for me in this demo because this 'select' statement in the top is going to be relevant to all of our examples.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=64)** So I want it here so I can easily copy and paste it over and over.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=69)** So for our first example, we want to find all the rows for services that require no more than six participants, and cost no more than $25 for a person.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=80)** So we'll start with our base query, and we'll say where the minimum number of participants is no more than six.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=93)** So it's less than or equal to, because we want to include six.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=99)** And the per person price is no more than $25.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=105)** So again, less than or equal to 25 because that's included.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=111)** So if we run this, we get rows back where both conditions are true, where min participants are no more than six, and the price per person is no more than $25.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=124)** But it's important to note that you can actually add as many of these logical operators as you want to your query.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=131)** So if we wanted to consider three conditions, we'll start with this query that we had before, and now we're going to add an additional factor to just show the catering services.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=145)** So we'll look at that result set again.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=148)** Should get just one result.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=150)** So if we add and service name is like catering.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=160)** Highlight this to run that.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=163)** And I'm just using a keyboard shortcut here, that's why you're not seeing me click the execute button.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=168)** I just get my one row back where all three conditions are met now.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=174)** So as I said, at the top of this video, we have the 'and' operator where all of the conditions have to be met.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=180)** But then we also have to see what the 'or' condition looks like, where at least one of the conditions has to be met.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=187)** So again, we'll take our base query.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=192)** So we're looking for rows that are either catering services or gift baskets or a Two Trees Tasting Party.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=199)** So we'll say where the service name is like catering or service name is like gift or service name equals Two Trees Tasting Party.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=223)** So I'm going to run this one line at a time to demonstrate how 'or' works.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=227)** So here we have just rows that are like catering.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=233)** If we add or it's like gift, we're going to just add those rows to our results set because either one of those is true for each of these rows.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=244)** And then we'll include one more with the Two Trees Tasting Party.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=249)** So if any of those conditions is true in a row, then we get one of those rows back.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=257)** And then lastly, there're going to be situations where we have to mix 'and' and 'or'.
>
> **[4:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=262)** So now we're looking for services that cost less than $30, and they are either catering services or gift baskets.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=271)** We do that.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=274)** So we want to find the rows for services that cost less than $30 and are either for catering services or gift baskets.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=281)** So we'll go ahead and add where the per person price is less than 30, and the service name is like catering or the service name is like gift.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=303)** So let's go ahead and run this line by line.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=305)** So I know that I'm looking for things that are less than 30.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=311)** So I filter here.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=312)** And then I'm just looking for catering or gift baskets.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=316)** So I'm expecting just one row to come back, this last result.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=323)** When I run this, I actually get four rows back.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=329)** And the reason for that has to do with the order that the query is going to resolve my conditions.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=335)** So what I actually want to say here is I want rows where this condition is true, where the price is less than $30, and either one of these conditions is true, either it's catering or a gift basket.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=353)** What I'm actually asking right now is for conditions where the price is less than 30 and it's catering, or give me any rows that are a gift basket.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=367)** So to fix this, I'm going to use parentheses, to make it really clear to SQL Server how I want to group these conditions together.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=377)** So I'm going to say and the service name is like catering or the service name is like gift.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=387)** And now when I run it, I've made it really clear that this condition should be true and either one of these conditions can be true.
>
> **[6:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=395)** And I run it, and I just get the one row back that I expected.
>
> **[6:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=401)** So whenever you're mixing 'and' and 'or' in your where clause, I definitely recommend that you add parentheses, even if you do have it in the correct order to get it to evaluate the way you want, just because it makes it clear and clear code is always a good thing.
>
> **[6:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=418)** Now you've got lots of tools in your SQL Server toolbox to start writing some really useful queries, just using select, from and where.
>
> **[7:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/filtering-on-multiple-conditions-in-sql?u=76281980&t=426)** In the next chapter, we will start to consider how we can read from multiple tables in a single query.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), require (1), let (1)
> **Env Vars:** sql (4), ssms (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** it's like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Filtering dates
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=0)** - [Instructor] To find all of the paid orders from 2023, I'm going to start by selecting all of the columns from the Order table that I care about for this query, the order ID, the creation date, and the status.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=22)** And then I'm going to start filtering.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=24)** So I know I have two pieces of information to consider, the status of the order and the creation date of the order.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=32)** So I'm going to start by filtering with a WHERE condition, where the status column equals paid.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=46)** And I also need to know that the creation date, now there are two ways to do this.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=53)** I'll show you both ways.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=54)** We can use the between operator between 2023-12-01 and 2024-01-01.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=72)** And if I test my code, we have success.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=76)** And I just want to point out one thing that might trip you up.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=81)** The creation date is a date and a time.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=85)** So when you use this between operator, if I changed this to 2023-12-31,
>
> **[1:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=102)** because we see we do have an entry from that date, if we run this, test my code again, I'm actually missing that value because when we just provide the date to a datetime column, it assumes midnight is going to be the time we're talking about.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=120)** And this happened after midnight, so that's why we use 2024-01-01, because it's considering midnight at that date.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=132)** And I told you I would show you another way to do this date filter, and that is using greater than or less than.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=142)** So we're still going to say CreationDate is greater than or equal to, just copy this, 2023-01,
>
> **[2:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=157)** and the CreationDate is less than 01-01-24.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-filtering-date-25273028?u=76281980&t=166)** And we test that, and that also provides the correct output.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), this. (1)
> **CLI Commands:** find (1)
> **SQL:** where (1)
> **Env Vars:** where (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Multiple Table Select Statements

#### Inner joins
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=0)** - [Instructor] Because of the nature of how data is stored in a relational database, we often will need to visit multiple tables to get all of the data that we need to answer our questions.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=10)** In this example, we have surrogate keys standing in for the oil flavor, the flavor ID, and the product type, the product type ID in the product table.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=23)** To get at the flavor name and the product type associated with an order, we have to add two tables to our query: the oil flavor table and the product type table, and that's where joins come in.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=36)** Joins allow us to use common relationships, such as foreign key relationships, to look at data in more than one table in a single query.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=46)** In this video, we're going to talk about inner joins.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=50)** Using an inner join, we look for rows where there's a match in our data relationships.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=56)** Here, we have two distinct data sets, and we want to compare them to find what data points that they both have in common.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=65)** The overlap highlighted in this Venn diagram shows what results will come back when we use an inner join on this simple data set.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=73)** So we're trying to build a query that will return these four columns from the product table and the oil flavor table.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=81)** So to start, I'm going to write my select statement just as before, but I'm just going to pull from the product table.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=88)** Select star, from DBO product, and I run that, and here are all the columns that are available in the product table.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=97)** So now I know I need to get to the oil flavor table as well and based on the data in my result, I can probably guess that the flavor ID is going to be my most likely avenue to do that, so if I go over to the object explorer and expand the oil flavor table, look at the columns, yes, I can confirm that both of these tables do have a flavor ID column, so that's going to be my gateway to get both of these tables involved in my query.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=126)** I'm going to do that using an inner join, so next to pull an oil flavor, I just write inner join, DBO oil flavor.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=137)** And now I'm going to add what's known as a table alias to my query, it's just going to be an abbreviation that's going to stand in for the table name later on, it's going to make the code look a lot neater and cleaner as you'll see in just a second.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=154)** So you can technically use whatever you want for your table alias, but I try to make it kind of obvious what table it's referencing, so I'll use like P for the product table, and maybe OF for oil flavor, but you can see here that the text turned blue.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=169)** If you're using SSMS, that's an indicator that this is a reserved word, which means that it means something specific to SQL Server, so I can't use it in this context, so instead I'm just going to use F.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=181)** Okay, so I have my two tables listed, now okay, how do I connect those things together?
>
> **[3:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=186)** And I know that I use the flavor ID, so I'm going to say on my join condition is where the flavor ID and the product table, so p.flavor_id is the same as, equals, the flavor ID in the oil flavor table.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=203)** And if I didn't use these aliases, I'd have to type out the whole table name here and it would just look messier than it needs to, so instead I just use aliases.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=213)** So we'll run this query, and now we get all of the columns from the product table as well as all of the columns from the oil flavor table.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=223)** But then you'll also notice that the flavor ID values match in each of these rows, just as I indicated in my join condition here on line nine.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=235)** So now I'm only trying to get back these four columns.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=238)** So instead of star, I'm going to list the column names just like I did previously.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=242)** So we'll say product ID, flavor ID, flavor name, and price.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=255)** So you'll notice that there's this red squiggly line under flavor ID and that tells me that there's going to be some kind of an issue with that, but let's run it and see what kind of error message we get.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=267)** Ambiguous column name flavor ID, so the reason I'm getting this error is because there's two columns with the same name in different tables in my query, so I need to specify which value I'm referring to.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=280)** We know that it doesn't matter which table we pull from because based on our join condition, these values have to be the same from both tables, but SQL Server doesn't know that when you're building the query, so you have to give it some more instructions.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=295)** So we just would add the oil flavor table, it doesn't really matter, and then it's good practice just to add table aliases for all of these, even though technically you could get away with not doing that.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=308)** Then we run this, and we get just that data that we're looking for.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=314)** So when you're first starting out with the database system, it can be really tricky to know how to connect tables in your joins, and what keys are shared between which tables, and that's where ERDs can come in really handy, but if that's not available, you can also check your object explorer for foreign keys on a table.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=332)** So if we look at the product table, and look at this keys sub-folder here and expand that, we can see what foreign keys are on this table and that's indicated by these white keys.
>
> **[5:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/inner-joins?u=76281980&t=347)** And those can be good pointers for candidates that you can use in your join conditions.

> [!info]- Semantic Content
>
> **Env Vars:** dbo (2), sql (2), ssms (1)
> **Code Keywords:** type, (1), let (1), this, (1), for. (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (1), just like (1)
> **Code Identifiers:** flavor_id (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Multiple inner joins
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=0)** - [Instructor] Looking back at our ERD from the last video, we've already established the connection between the product table and the oil flavor table via the flavor ID.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=10)** But now, let's take a look at how to incorporate the product type table.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=15)** We can see here that we have a foreign key relationship between the product table and the product type table through the product type ID.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=23)** So we'll keep that in mind as we're adding to our query.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=28)** So we're going to pick up with the same query that we left off with in our last video, but we're going to add the product type table to get the additional information available there.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=39)** So we're going to do the same thing as we did with the oil flavor table.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=44)** So we're going to do an inner join to dbo product type and I'm going to go ahead and use the table alias again.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=53)** And theoretically, I could either join to this new table from either the product table or the oil flavor table.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=61)** So anything that has been brought into the query previously is fair game for our join condition.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=68)** But we know from our ERT that we need to use the product type ID which is in both the product table and the product type table.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=76)** So once again, we're going to say on p dot product type ID equals pt dot product type ID.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=87)** And it doesn't matter which table I referenced first.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=90)** I could've done pt and then p.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=93)** It doesn't matter.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=93)** It's the transit property so it's the same either way.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=97)** So then, I can see that I actually got information from this table back in my query.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=102)** I'm going to show you a little trick.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=104)** I'm going to add pt dot star.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=109)** So that means add all of the columns from the product type table to my query results.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=114)** So I'm going to go ahead and run that.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=117)** And now you can see, we have everything that we had before along with the columns from the product type table.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=127)** So now we have the result set that we were hoping for, but I'm just going to show you one more thing about when you're using joins and that's just that you can still do filtering on these queries using the where cause just like we did before.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=141)** So if I only wanted to see the results come back that were for product type case, I would just go back to my query and add where pt dot product type.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=156)** Again, I'm using the table alias when I reference this column, equals case.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=163)** Go ahead and run that.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=165)** And I just get those rows that I wanted back, as well as the columns that I had listed.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=172)** So that wraps up inner joins.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/multiple-inner-joins?u=76281980&t=174)** I would recommend that you really spend some time with this one before you move on because it's a critical concept when you're living in a relational database world.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for, (1), case, (1), type. (1), case. (1)
> **Env Vars:** erd (1), ert (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Inner joins
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=0)** - [Instructor] In this solution, I need to get access to data from a couple different tables.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=9)** So I'm going to start by writing my join conditions.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=13)** We'll add a table alias for Orders, and then INNER JOIN to the Customer table AS c.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=26)** And then our join condition here is going to be the CustomerId, since those are shared in both tables.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=37)** And then we're going to add the Salesperson table as well AS s on the SalespersonID from the Orders table and the Salesperson table.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=58)** Now I can add my filtering.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=59)** I know I only want orders where the Status = past due and the Salesperson, so s, LastName = Hall.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=80)** So now that I have the correct data set, I'm going to specify which columns I want.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=86)** So I need the OrderId.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=91)** And then to get the customer name, I'm going to use the CONCAT function to combine the FirstName, make sure I include a space so those values don't get squished together, the LastName, and then give that column alias of CustomerName.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=115)** I also need the customer's Email, the TotalDue from the Orders table, and the FirstName for that salesperson.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-inner-joins-25268782?u=76281980&t=130)** I'll test my code, and there's my correct output.

> [!info]- Semantic Content
>
> **Env Vars:** inner (1), join (1), concat (1)
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **SQL:** inner join (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Outer joins
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=0)** - [Instructor] Now we're going to move on to a different type of join that you'll use pretty frequently called an outer join.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=7)** There are a few different types of outer joins but the one I think you will run into most frequently is the left outer join.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=14)** So that's the one I'm going to demo for you in this video.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=18)** Like the inner join, the outer join allows us to retrieve information from a second table based on a related key value.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=26)** But it always does so without filtering the results from the first table in your join order.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=33)** We're going to refer to that first table as the anchoring table.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=38)** In an outer join as you see in the highlighted area on this diagram, you'll get to keep all of the data in your anchoring table, along with anything that matches in the secondary table added to the query through an outer join.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=54)** So here we want to get the full name and the order total for every customer named Sydney in our database.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=60)** So, we know how to write the first part of that query.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=64)** Select star from the customer table.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=70)** And we only want rows where the first name equals Sydney.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=79)** And we only need to return the full name.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=83)** So if we run this, we see, okay, we have three customers in our database whose first name is Sydney.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=91)** So then, if we want to get their order total information, we're going to have to use a join.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=97)** So let's start with an inner join.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=99)** I'm going to add my table aliases here before I start.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=105)** Then we're going to write an inner join to the product order table, 'cause that holds all of my order information.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=115)** Again, table alias.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=117)** Go over and see what columns are available.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=121)** And I know that these both have a customer ID, and I see that there's a foreign key here so I'm going to use that as my join condition.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=129)** So on C dot customer ID equals the customer ID from product order.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=140)** We can add in the order total.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=146)** So if I run this, I'm expecting three rows because I know I have three customers that I need to keep in my query.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=154)** When I run this, I end up with five rows, and they're all for the same person.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=161)** And that's because Sydney Bartlett is the only one who actually placed orders.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=167)** So I need to get order information for the other two customers as well, and they won't have any order information.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=175)** So I need to get rid of the filtering aspect of my join.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=178)** So now I'm going to switch it from an inner join to a left outer join.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=184)** And when I run this, I still get those five rows for Sydney Bartlett for her five different orders.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=190)** But now I also get rows for Sydney Robinson and Sydney Dejesus with no results for their order totals.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=199)** So again, it doesn't filter the results based on my join condition.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=205)** So again, null is just the absence of data.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=209)** It's not that there are rows in the product order table where order total is null itself, it's just that there's no results in the product order table for Sydney Robertson and Sydney Dejesus.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=223)** So we say the result is null because there's no data available for that.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=229)** A lot of times you can actually use this null result in a left outer join to your advantage.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=235)** So if you wanted to know, show me the names of all the customers who haven't placed orders yet, you could use this null.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=244)** So you would say, show me where order total.
>
> **[4:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=251)** Whoop, need my column alias.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=253)** Order total is null.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=256)** And here I took out the filtering for Sydney.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=259)** So this shows me all of the customers in our database that haven't placed orders yet.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=265)** And that's a pretty common case if you want to find where there aren't matches.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=271)** It's also important to remember that join orders matter when you're adding tables to your query through an outer join.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=278)** With an inner join, the join order doesn't matter since we are looking for rows where the key value in our join condition is the same in both tables.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=287)** With an outer join though, you only get to keep all of the rows from your anchoring table which has to come first in your query.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=295)** As you can see in this diagram, I would get different results depending on whether table A or table B came first in my join order.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/outer-joins?u=76281980&t=305)** And this is definitely something you want to keep in mind as you're writing your code.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), let (1), switch (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Solution: Working with multiple tables
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=5)** - [Instructor] So in this solution we always want to return the customer information regardless of whether or not they have an order associated with that customer.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=12)** So we're going to use a left join here when we get to the orders table.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=18)** So we start with customer as C with that table alias, then we'll use a left outer join to get to orders as O.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=32)** And our join condition is where the customer ID is the same in both tables.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=46)** And if I were writing a regular SQL server query, I would not need this outer keyword.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=53)** But because we're following ANSI standard with CoderPad, we do need to include that here.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=58)** But just know in SQL server that is optional.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=62)** All right, so now we've got our two tables here.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=64)** We're going to start filtering, so where the customer's state equals DE.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=73)** And then we know we either want to return orders where they're not marked paid or where the customer doesn't have any orders.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=81)** So to accomplish that, we're going to say and, the order's status is not paid
>
> **[1:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=96)** or, the order ID is null.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=106)** And it's not that the data point itself is null, it's that the result with this left join means no match, but we're not filtering out the customer.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=116)** So there's our filtering analysis, return to proper columns.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=119)** We've got the customer first name, the customer last name, the customer phone, and the order status.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=135)** Give that a test.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-working-with-multiple-tables-25273053?u=76281980&t=141)** And there we go.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), ansi (1)
> **Code Keywords:** match, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Subqueries
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=0)** - [Instructor] As we've discussed, one of the functions of inner joins is that they can be used to filter results sets, but there is another method that we can use to achieve this called a subquery.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=12)** So we're going to use a subquery to get us the results we need to get all of the names for customers who live in Boston.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=20)** So first let's start by running a query that will get us all of the customer names.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=25)** And we know from our previous examples that that's going to be from the customer table.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=30)** So we're going to select star from dbo.customer, and we're going to go ahead and give this a table alias.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=39)** So let's run that and look at our data once again.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=43)** We don't have the city name in this table so we can't filter on that condition right now.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=50)** But if we can get access to information from the city_state_zip table, we can apply those filters.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=57)** So what we're going to do is we're going to select star from dbo.city_state_zip.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=68)** Let's see what that data set looks like, and figure out what city state zip IDs we need for the city of Boston.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=77)** So we'll say actually, where city name equals Boston.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=85)** We run this, and we see that we're looking for city state zip ID nine and 10.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=93)** So we're going to go ahead and hard-code those IDs into our filtering condition.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=98)** So we'll say where city state zip ID, and since we have more than one ID that we're looking for here, we're going to use 'in' nine or 10.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=112)** And if we run that, these are the customers that have that city state zip ID.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=120)** And as we're just looking for a name, so we'll go ahead and just choose that one column.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=126)** And there we go.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=128)** But if you didn't want to run this second query to look up the IDs manually, you would instead use a subquery.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=135)** And basically, what we're going to do is we're going to replace this in list with these hard-coded IDs with a query instead.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=145)** So basically, we're just going to take this query we used here, place it in-between our parentheses.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=158)** Make the code look a little prettier.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=160)** But we're only going to look for the city state zip ID.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=165)** So remember, we had nine and 10 here earlier for when we looked it up.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=171)** And if I run this query by itself, I'm going to get those numbers, nine and 10.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=178)** So this is a way to write a single query that will do the exact same thing.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=184)** And one thing that you should know about subqueries is that we can't reference any tables from the subquery in our main select statement.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=195)** So if I try to add the city name here, I get this red squiggly line which tells me that there's an error in my code.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=205)** So if I try to run this we'll see invalid column name 'city_name' because the select list doesn't know anything about the table included in our subquery because it's strictly for filtering.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=219)** We don't have access to that data.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=221)** But if we wanted to be able to include that column, we would just write it as an inner join instead.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=228)** So we'll select star from customer c, inner join dbo.city_state_zip, and we'll alias that as z.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=241)** Hide my results set using Ctrl+R.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=244)** And we'll say on city_state_zip_id equals the city_state_zip_id from the city_state_zip table, and we're going to apply the same filter condition where the city_name equals Boston.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=266)** And go grab these, give them aliases.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=274)** And then we have access to both columns.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=279)** So now you might be wondering, if an inner join can filter my results and a subquery can filter my results and give me the same answer, how do I know which one to use when?
>
> **[4:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=291)** Well, the short answer is that sometimes SQL Server can resolve a complicated query or a query that involves really big tables more quickly if you do your filtering with a subquery.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=303)** So I would recommend using those when you can.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=307)** Sometimes though you need to retrieve data from the table you're using to filter.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/subqueries?u=76281980&t=312)** And in that case, you would always have to use a join.

> [!info]- Semantic Content
>
> **Code Identifiers:** city_state_zip (4), city_name (2), city_state_zip_id (2)
> **Code Keywords:** let (3), this, (1), case, (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Additional SQL Query Tools

#### Case statements
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=0)** - [Instructor] If this course were an album, I would call this last section, the bonus tracks.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=5)** You could do a lot with just what we've gone over already but I want to give you a couple more tools to help you with data manipulation.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=14)** There are times when you might want to present the data a little differently than it's available to you in your table, or you might want to show different texts depending on the data state.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=24)** And that's where case statements can come in really handy.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=28)** So on the screen here, we have a few things that we haven't covered yet.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=31)** So first we've got this scalar variable, which we declare and then name with the @ symbol at the front.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=39)** And then we told SQL server, what kind of data we're going to hold in this variable.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=44)** And then this case we're using an int.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=47)** And then we can assign a value to this variable using equals and we'll say five.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=55)** So now, whenever we see at number in our code set, it will replace it with whatever value we've assigned here.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=62)** So five.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=64)** So next down here, we have an example of a case statement.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=69)** And we wrote a select, actually doesn't have a from clause.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=73)** So this is allowed.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=74)** If you can manage to manipulate the data without pulling from any tables.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=78)** There aren't a ton of use cases for it, but it is something that you can do.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=83)** And then I've got this column alias here, divisible.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=88)** And then our case statement, which is just a conditional statement for what's going to be returned in this column.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=94)** So let's walk through it.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=98)** First, we declare that this is a case.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=101)** So now we say, when @number and this percent sign here is called modulo two equal zero.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=109)** That means when our number is divided by two, the remainder is going to be zero.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=115)** So it's an even number.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=117)** So if that case is true, then we return this text.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=122)** When the number divided by three has no remainder, then we return this text.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=128)** And if neither of those is true, we have a fall back with our else condition.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=133)** This isn't required in a case statement but it's definitely good practice because if you don't have this and none of the conditions are met, you're just going to get a null.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=142)** And then we wrap up our case statement with just end.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=147)** So if we can go ahead and run this query with our variable @number set to five, we get, does not meet criteria because five is not evenly divisible by either two or three.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=160)** So if we change this to four, we'll get divisible by two.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=167)** We set it to nine.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=170)** We'll get divisible by three.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=173)** And if we use six, which we'll meet both of our conditions, divisible by two and three we're going to get the first case that evaluates to true.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=183)** So the order of your case statement does matter.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=186)** You want to have your most preferable outcome to be the first one that's in your case statement if there's going to be potential for overlap.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=197)** So now let's move over to show a case statement that actually does pull from a table.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=203)** Now that we've kind of got a handle on this.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=206)** So here, we're going to break down customers into different spending tiers.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=210)** And we're just looking at orders placed after August first 2020 by customers in California.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=218)** And I've gone ahead and already started our query for us.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=222)** So we're looking at the customer table, joining to the product order table, as we've done many times before.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=230)** I've left it as just a join for now because I haven't decided yet if I want to do an inner join or an outer join.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=238)** If I just left this at joined SQL server, would assume I mean inner join it.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=242)** We treat it like that.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=244)** So when I run this in a second, that's what's going to be happening.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=248)** And then here I use a subquery to look just for customers that live in California using the joined relationship of the city, state, zip ID in the customer table, as well as the city, state, zip table.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=264)** So if I go ahead and run this.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=267)** We just have the names and the order totals for all of our California customers.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=276)** So let's add to this query.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=278)** So, first let's make a decision about our join condition.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=282)** So I know that if a customer doesn't have a purchase after August, I still want them to show up in this list if they're from California.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=289)** So, because I don't want to have that filtering for just customers with orders, I'm going to use a left join.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=298)** And now let's add our filtering for the orders placed after August first.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=302)** So we're going to add order date to our results just so we can see it here.
>
> **[5:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=310)** And then add and, po order date is after 8/1/2020.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=318)** So with dates, when we're doing comparisons like that, if we want something after a certain date, we're going to do greater than.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=325)** We'll say 8/1/2020.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=328)** If we wanted something before that, we could do less than or equal to our greater than or equal to if you want to include that date.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=335)** So if we run this query now, we only have data for customers who place orders after that date.
>
> **[5:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=343)** But we want to also include the customers if they didn't place any orders after that date, which is why we used our left join.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=350)** But the reason that this is happening is because we put our condition in the where clause.
>
> **[5:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=354)** So we're actually limiting our results more than we wanted to.
>
> **[5:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=359)** So instead, we're going to move this as a secondary join condition.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=367)** And then when we run that, we see that we keep all of the California customers.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=373)** And if they didn't have an order after August first then they would just have a null value for their results for the order total or order date.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=384)** So now that we have all of our filtering set up, we can go ahead and add our key statement for spending tiers.
>
> **[6:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=390)** So we don't need order to here.
>
> **[6:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=393)** We're going to add a spending tier column.
>
> **[6:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=396)** So spending tier equals and we have four different cases.
>
> **[6:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=401)** So we start with case when order total is less than 20.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=411)** Then we show that it's a low tier when, oops.
>
> **[6:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=419)** I got my alias wrong.
>
> **[7:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=422)** PO order total.
>
> **[7:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=429)** PO order total is between 20 and 100, then it's in the second tier.
>
> **[7:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=441)** When it is greater than 100, then it's in the high tier.
>
> **[7:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=450)** And our fallback or else condition.
>
> **[7:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=453)** If none of those are met, we'll display no recent orders.
>
> **[7:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=457)** And we can go ahead and end this.
>
> **[7:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=461)** So now we can run our query.
>
> **[7:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=464)** Do a little data check, make sure that if there's no order total information, we reached our else.
>
> **[7:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=472)** Spot check a few of these, these medium tiers look correct.
>
> **[7:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=477)** No one in the high tiers or the low tiers here.
>
> **[8:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=480)** And then we can take out the order total since that's not part of their requirement.
>
> **[8:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=486)** We've got all these names and now, we're going to add another clause here to make our data a little easier to look at and that's going to be to order the results.
>
> **[8:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=492)** So let's order by a new clause here.
>
> **[8:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=496)** Let's order by the full name.
>
> **[8:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=499)** And by default, this is going to be an ascending order.
>
> **[8:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=503)** But if I wanted to make it descending, I would just add dsc for descending.
>
> **[8:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=508)** And now we have all of the names in order.
>
> **[8:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=511)** So you'll notice here that these last two values are exactly the same.
>
> **[8:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=516)** We have duplicate records.
>
> **[8:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=518)** Because this customer must have placed more than one order in the timeframe that we're looking at.
>
> **[8:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=523)** So to get rid of these duplicates, one thing that you can do that's really simple is to add distinct after select and we run it again.
>
> **[8:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=533)** And we get rid of our duplicate values.
>
> **[8:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=535)** It will only return unique rows here.
>
> **[8:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=539)** Case statements can be very useful as you begin to add your own analysis or apply data rules to your queries.
>
> **[9:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/case-statements?u=76281980&t=545)** So they are definitely another great tool to add to your toolkit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (3), case. (1), else. (1), default, (1)
> **CLI Commands:** make (4)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Solution: Case statement
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=0)** - [Instructor] In this solution, I only need to retrieve data that's in the orders table, so I can go ahead and start filtering right away.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=12)** So we'll say orders as O, and we know we want where the status equals paid,
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
> **[1:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=111)** then we'll return one.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=114)** When total due is between 100 and 150,
>
> **[2:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=125)** then we'll return two, and otherwise, so just we'll use else, return three, end our case statement, and give a column alias as order tier, and we're all set.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-case-statement-25273054?u=76281980&t=142)** Give it a test, and we're all set!

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Built-in functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=0)** - [Instructor] While SQL server gives you some standard tools for building queries that we've gone over already like select, from, where, joins it also provides some other handy tools for manipulating data, and those are called built-in functions.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=16)** Built-in functions can be used right alongside the rest of your code and requires zero or more inputs.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=23)** This varies depending on which function you're using, and then it returns a single value.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=28)** And we're going to go over a handful that you're likely to use on a pretty regular basis in this video.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=36)** First, we're going to deal with some functions used for formatting for our data presentation.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=40)** And we'll start with cast and convert, which are used to change the data type for a column for the duration of the query where specified.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=50)** So that means we aren't actually changing the data type on the actual table definition or changing the data itself, we are just changing the way it's treated wherever we use cast or convert.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=62)** So in this example, we're going to use cast to present the price, which has a data type of decimal five two.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=70)** If we go over to the table definition here, we can confirm that price is decimal five two, but we're going to present it as an int.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=80)** So first I'm going to remove the two dashes here to un comment the code and make it part of our query again.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=88)** And also remove this extra comma I have here at the end of the line so I don't get a syntax error.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=94)** Then I going to go ahead and run that.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=97)** And here is the price as it is in the table.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=99)** And here it is displayed as an integer.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=103)** And now we'll use convert to transform the price to a decimal six three, so we'll have three places after the decimal point.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=113)** Let me run that.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=117)** And now we have three places.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=119)** We just added that zero.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=121)** You can use either of these to transform your data into any compatible data type.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=125)** But cast is the ANSI standard and convert is SQL specific and includes optional style numbers.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=134)** And while either of them works and sometimes the style numbers can be useful, I would lean toward cast because it's considered more of the gold standard for coding.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=144)** So next, I'm going to show you a couple of options for stringing multiple values together.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=151)** So first we can put things together using a plus sign like you see here on line 31.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=158)** And once again I'm just going to un comment this code like before but there are a couple of pitfalls that we can run into.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=167)** So I'm using this price prefixed variable to add the dollar sign at the front of price and when I run it, I get this error.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=178)** Error converting data type, varchar to numeric.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=182)** And that's because I'm mixing incompatible data types with the decimal on a string.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=187)** It doesn't know how to put those two together.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=190)** So to make that work, I have to cast my price as a string.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=200)** So as a var char, say varchar 10.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=206)** Run this, now we're adding var char to var char and it goes ahead and adds the plus sign to the front of it.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=214)** The other issue comes if I don't assign a value then it's just assumes that that is a null value.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=221)** So if I run this, I get a result of null and that's because of the weird data state of null.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=229)** Anything plus null is going to end up being null.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=234)** So that's definitely something you want to keep in mind if you're doing string manipulation like this.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=239)** So to make things much cleaner, we have this concat function.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=245)** And I'll just un comment this line again as you'll continue to see throughout this video and I'm going to leave my variable null and we'll see that it handles the null case for us and doesn't result in a null, but if I give this a value with the dollar sign and run this.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=269)** It also handles the mixed data types here.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=271)** So concat does definitely have some advantages to just using the plus sign here.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=278)** And next up we have the format function.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=281)** And there are several useful options for this function but most notably it can be used for formatting dates and currencies.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=289)** So you can either use a format code like C for currency or D for date, with a language culture code.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=297)** As you see in this example, go ahead and run this.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=305)** And if we changed it to en gb for great Britain, we see that it uses the pound symbol instead of the dollar symbol.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=316)** But also with the format function we have the option of making a custom format here.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=323)** So if we wanted to have the abbreviated month name the day comma, the full year we would list it out like this.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=335)** Go ahead and run it.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=337)** And here's the order date from the actual table.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=339)** And here it is formatted out as I requested.
>
> **[5:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=343)** Just one thing to be aware of if you're doing date formatting like this capital M is for month and lowercase m is for minute.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=352)** So you definitely don't want to change this to M M cause that doesn't make any sense.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=360)** That data is not correct.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=361)** So just make sure you're aware of that.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=367)** And moving on.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=367)** Now, we finally have an example of a built-in function with zero inputs with GETDATE and SYSDATETIME.
>
> **[6:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=375)** So I'm just going to select these.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=377)** Since they don't have any inputs, I don't need to get any tables involved if I don't want to.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=384)** Go ahead and run these.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=387)** And I get a timestamp for this very moment.
>
> **[6:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=391)** It's October 28th when I'm recording this.
>
> **[6:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=394)** And you're definitely likely to find lots of uses for this particular function.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=399)** If you need to know something in relation to what's happening now when the difference between GETDATE and SYSDATETIME is just a matter of precision.
>
> **[6:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=407)** As you can see in the output here.
>
> **[6:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=410)** So GETDATE returns, a daytime value and SYSDATETIME returns a daytime too.
>
> **[6:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=415)** So just keep that in mind if you're ever comparing a column's value to one of these function outputs.
>
> **[7:02](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=422)** You want that the data types to match so that you avoid what's known as an implicit conversion by SQL server where it has to make the two data types match before it can do the comparison and add a little bit of overhead.
>
> **[7:17](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=437)** Now I'm going to use the SYSDATETIME function along with the date add function.
>
> **[7:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=442)** So if I say select date add, and I'll say I want to look at a month ago, you use a negative number.
>
> **[7:30](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=450)** It'll show you time in the past.
>
> **[7:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=453)** So a month ago from SYSDATETIME.
>
> **[7:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=458)** I run that, it tells me it was September 28th.
>
> **[7:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=461)** But if I want to look at a month from now, I just make that a positive number and that'll be November 28th.
>
> **[7:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=468)** And this might be useful if I'm trying to limit my results to just the orders from the last month as you see in this example.
>
> **[7:58](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=478)** So if I run this, if the order date is greater than a month ago which is September 28th, 2020.
>
> **[8:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=487)** Oh my goodness, my output looks crazy.
>
> **[8:10](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=490)** If this ever happens and your result sets come back as text, instead of as a grid, it just means that you toggled something incorrectly, which I do all the time.
>
> **[8:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=500)** So if I do control D here and try running it again, now it comes back to the right data set.
>
> **[8:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=506)** And we see that we just have Lucas Trevino that placed his order on September 29th.
>
> **[8:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=513)** And now lastly, I'm going to demo is null and coalesce which help us deal with null values.
>
> **[8:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=521)** So is null only takes in two options.
>
> **[8:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=524)** And the first one is your first choice but then if that's null it will fall back to the second option provided.
>
> **[8:52](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=532)** So here, if men participants is null then I'm going to display zero.
>
> **[9:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=540)** As you can see here, it fell back to the zero for these last three rows right here.
>
> **[9:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=547)** Then if I use coalesce, which is the ANSI standard you can provide multiple options.
>
> **[9:15](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=555)** As you can see here, though you can still end up with a null value for either of those.
>
> **[9:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=560)** If your fall back ends up being a null value but because this one has more flexibility and because it's the ANSI standard, I definitely prefer this one.
>
> **[9:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=569)** So if I leave the override variable null here and run this we're going to get zero again for these columns.
>
> **[9:39](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=579)** But if I change this to 500, that's a lot of participants.
>
> **[9:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=587)** Then we get that because it took, because it took this second option here.
>
> **[9:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=593)** But coalescent is not, are both cases where you still need to pay attention to make sure your data types match.
>
> **[10:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=600)** So if I run this here, I've got an integer for override men participants are already in integer column.
>
> **[10:08](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=608)** As we can go over here to the object explorer and check.
>
> **[10:14](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=614)** Men participants is an int but here I'm trying to pass a string as its third option.
>
> **[10:23](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=623)** So if I run it with the 500 value it's fine because it doesn't get to this string value to cause us any trouble.
>
> **[10:34](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=634)** But if I set this to null, again an error.
>
> **[10:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=638)** Conversion failed when converting varchar value NA to data type int.
>
> **[10:43](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=643)** Because it expects all of the options that it comes across to be of the same data type.
>
> **[10:49](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=649)** So that's another thing to be careful about.
>
> **[10:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=651)** I would have to cast both men participants and override as var chars here, if I wanted NA to work.
>
> **[11:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=661)** And now these are only a few examples of the built-in functions available for SQL server.
>
> **[11:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/built-in-functions?u=76281980&t=667)** You can find more information on these, which are noted as scalar functions here from the Microsoft documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), this. (5), var (4), this, (3), override (3)
> **Env Vars:** sysdatetime (5), sql (4), ansi (3), getdate (3)
> **CLI Commands:** make (8), find (2)
> **Definitions:** is a  (1), known as (1), means that (1), is an  (1)
> **Warnings:** be aware (1), be careful (1)
> **Speakers:** - [instructor] (1)

#### Aggregates
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=0)** - [Instructor] Doing calculations across multiple rows to find a sum or an average can be a common operation in data analysis and SQL Server provides aggregate functions to do these computations.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=12)** To do this, we simply have to write a query that indicates how we want to collapse in group rows to do our analysis.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=20)** For example, in this small sample set, if we want to count the number of rows per item, we could group our query by the item column.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=31)** We collapse the groups based on unique values in the designated column.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=36)** So, let's see a few of these aggregate queries in action.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=41)** So first, if we want to count all of the rows in a table, we would add count star to this query and it would count the number of rows.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=53)** We didn't provide a grouping condition, so we are basically asking SQL Server to collapse all of the rows in the table to get a count.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=61)** But if we wanted to count the number of orders per customer, we would group by a column that could uniquely identify an individual customer.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=71)** So we could use customer ID, which is the primary key, but that's not as useful to look at as the full name.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=79)** So, we'll return that in our results set, and then we need to add it to something new, the group by clause.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=89)** That tells us this is the condition we're going to use to collapse the rows, and it's the value, in this case, that we want to actually count.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=98)** And the rule is that if you're using an aggregate function, you can't add any other columns in your select that are not referenced in your group by clause.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=108)** You'll get an error if you try to do that.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=110)** And here, if we run this query, we see the number of orders placed per customer name.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=119)** And similarly, we can find the total amount spent per customer using the sum function.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=126)** So we use star when we call the count function because it's counting the entire row, so we don't need to specify a column, but the other aggregates don't work like that.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=138)** So when we use sum, we have to designate which column we want to add up, based on the condition in the group by clause.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=147)** So if we add sum the order total, but group by the full name, we'll get the total that each individual spent, based on the data in our table.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=162)** Of course, you can also group by multiple columns or values.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=167)** For example, if I want to find the highest order total per customer per year, first I can extract the year from the order date, and we'll give it a column alias, YR, get the order date, and we can use another built-in function, year, and we'll just run this part.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=192)** And this is not an aggregate function, this is a built-in function, like we saw in our last video, and it'll extract just the year from the order date.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=200)** And then if we want to find the highest order total per person per year, we can use the max aggregate function, so the max order total.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=215)** And since we added another condition to our select statement, we have to include that in our group by clause, 'cause we're grouping on these two conditions.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=227)** So when we run this, we get the highest value in order total per year per customer.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=235)** And likewise, we could look for the lowest order total using the min function, which works in the same way.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=243)** And again, these are just a few examples of what SQL Server has to offer for aggregate functions.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/aggregates?u=76281980&t=249)** And you can find more options here, in the Microsoft documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), this, (2), let (1), new, (1), case, (1)
> **CLI Commands:** find (5)
> **Env Vars:** sql (3)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Aggregates
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=0)** - [Instructor] In this solution, we need to consider the order item data as well as the product data together.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=11)** So I'm going to start by writing up that join.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=13)** So order item as OI, inner join, because I only want cases where those values match, as P, on OI.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=32)** Product ID, equals P, dot product ID.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=40)** And no filtering, the join is going to do all the filtering work that we would need here.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=46)** So I can go ahead and start writing my aggregate query.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=50)** So I know that I am counting based on the number of rows returned per variety.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=57)** So I know I need to return the product variety and then a count star, as number of orders.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=73)** And to get this aggregate to work, I need to add a group by clause, so it knows how to collapse that data.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=82)** Make sure I add the column in it, table alias.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=87)** Give it a test.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/solution-aggregates-25268783?u=76281980&t=91)** And there we have it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** match, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Query processing order
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=0)** - [Instructor] In the previous video, we went over the basics of how aggregate functions work, but now we need to spend a little more time on the rules for manipulating this data into a more useful structure.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=12)** And here, we will consider how to order and filter results that include data from an aggregate computation.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=19)** So first, let's talk about the ORDER BY clause.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=22)** We've touched on it briefly before, but we need to explore it a bit further.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=27)** So we have a few different options when we want to order this set.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=31)** We can order by the full_name, an actual column in our table, and the set is returned alphabetized, and I could do that.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=42)** As we said before, by default, it's ascending, but if I wanted to do it in reverse order, I could designate descending, and then it would be Z to A.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=53)** I can also order by the aggregate function itself, so I can order by count star.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=60)** Again, ascending or descending.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=63)** I could order by multiple columns, the count, and then by the full name, if I wanted to do that, and then the last option is that I could actually order by this column alias instead of the aggregate, or instead of if I gave this an alias of customer_name, I could order it by any column alias.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=86)** And this is something that's unique to the ORDER BY clause in SQL Server.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=93)** And the reason that we can refer to a column alias in the ORDER BY clause but not in other places in our query is because of the order in which the server resolves the query that we've provided.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=105)** So first, it looks at the FROM statement which includes any JOINs, which makes sense because before you can get any data, you need to know where it's coming from.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=114)** Then the server filters the data by considering the WHERE clause.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=120)** Then it collapses the results using any GROUP BY conditions.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=124)** Then we actually build out the query results for the columns listed in the SELECT statement, applying any requested aliases.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=132)** And this is why we can reference the column alias in the ORDER BY clause, which is resolved next.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=138)** And lastly, the server applies the top condition to limit the results as requested in the query.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=146)** And then there's one more piece of the puzzle that we have to consider when we want to filter our dataset based on the results of an aggregate function.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=156)** But there's one more piece of the puzzle we have to consider when we want to filter our data based on the results of an aggregate function.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=164)** And I'm using a slightly different query here to demonstrate this using the sum function instead of count.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=171)** And if we want to filter the results on this aggregate function, sum, in this case, it would seem logical that we'd want to add it to the WHERE clause.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=180)** So let's do that: where sum.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=186)** So I want to see anybody that's spent over $500 total.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=191)** And if I run this... so we get this error that an aggregate may not appear in the WHERE clause, and that's because of how the query is resolved.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=205)** As you may recall, the filtering from the WHERE clause happens before GROUP BY has been aggregated, so it doesn't know what that code means at that moment.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=218)** Instead, we have another clause that exists specifically for this use case, which is the HAVING clause.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=227)** And it goes right here, having sum greater than 500.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=236)** It's written in basically the same way as the WHERE cause, but because it resolves after the GROUP BY, we can use it to filter it with the aggregate here.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/query-processing-order?u=76281980&t=247)** I realize that looking into the order that queries are resolved might seem a little too technical, and it's definitely not something you need to worry about memorizing or that you even think about most of the time, but it can be really useful when you're debugging queries in certain cases.

> [!info]- Semantic Content
>
> **Env Vars:** where (5), order (4), group (3), sql (1), select (1)
> **SQL:** where (5), order by (4), group by (3), select (1), having (1)
> **Code Keywords:** function (5), let (2), case, (2), default, (1), from. (1)
> **Code Identifiers:** full_name (1), customer_name (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=0)** - [Instructor] That wraps things up for this course, but if you're looking for more information about all of the features included in SQL Server, you can always check out the documentation available on Microsoft's website.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=12)** If you're searching for help from other SQL developers, I also recommend checking out Stack Overflow, which is a forum for discussing coding problems and solutions.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=21)** Or there's also a hashtag on Twitter, #sqlhelp, if you're stuck and want to ask a specific question.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=29)** If you liked this format and wish to expand your knowledge of SQL Server through a more in-depth course, through LinkedIn Learning, I would suggest you check out the Microsoft SQL Server Essential Training course for the latest version of SQL Server.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-fundamentals-master-basic-query-techniques/next-steps?u=76281980&t=44)** Thank you so much for joining me and happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Documentation:** the documentation (1), stack overflow (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


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