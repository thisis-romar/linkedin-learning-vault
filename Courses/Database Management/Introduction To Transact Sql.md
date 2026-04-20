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
  - Advance Your MS SQL Server Skills
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/transact-sql-t-sql
  - skill/sql
status: not-started
created: 2026-04-19
---

![Introduction To Transact Sql](https://media.licdn.com/dms/image/v2/D560DAQHH7IzO1sAw6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696613988629?e=2147483647&amp;v=beta&amp;t=OZyGCZE1JTIyFUaH5x0QwKxkJzQCwj_8DAAtULzstLw)

# Introduction To Transact Sql

> Relational databases and SQL servers have been a cornerstone of businesses for decades, and as data growth increases at an exponential pace, learning to work with data held in SQL Server databases is more important than ever. In this course, Jess Pomfret introduces Transact-SQL, an extension of SQL used to interact with relational databases that includes additional programming constructs and featu

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585) | Beginner | 88K learners
> [Jump to Path Context ↓](#path-context)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-transact-sql-4451097)

## Skills Covered

- Transact-SQL (T-SQL)
- SQL

## Table of Contents

### Introduction

#### Transact-SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=0)** - Relational databases have been a cornerstone of businesses for decades now, and SQL Server is one of the top offerings in this area.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=7)** If you are looking to interact with data held within SQL Server databases, you're going to need to learn some Transact-SQL, or T-SQL, and if that's the case, this course is for you.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=17)** I'll build up from the basics, guiding you through your first SELECT statement to help you get the data you need out of a database.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=23)** Things will then get a little more complicated as we add functionality to help filter, manipulate, and present the results we need.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=29)** Hi, I'm Jess Pomfret.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=31)** My pronouns are she and her, and I've worked with SQL Server databases for over 10 years.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=35)** I'm a dual Microsoft MVP in both the Data Platform and the Azure specialities, and I enjoy working with SQL Server databases both on-prem and in the cloud.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/transact-sql?u=76281980&t=44)** By the end of this course, you'll be able to write the T-SQL you need to get the job done.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), select (1), mvp (1)
> **Code Keywords:** case, (1)
> **SQL:** select (1)
> **Speakers:** - relational (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=0)** - [Instructor] As we get started on this course, it's important to level set and ensure that you have the required base knowledge to get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=7)** The good news here is this is an introduction to TSQL and the way I've written this course should allow you to enjoy and learn without too much existing knowledge.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=15)** What I will say is a basic understanding of relational databases and specifically SQL Server will help.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=21)** We are going to cover the language of TSQL and although I will highlight areas where there might be design or performance considerations to think about we won't dive into those topics here.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=30)** In the videos, you'll see me using SQL Server Management Studio to execute queries against the sample database.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=36)** This is a free tool from Microsoft to download and I'd recommend installing and getting comfortable with how that works.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=43)** If you want to follow along with the scripts as I show them in the videos, you can find all the code at the GitHub link shown here.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=50)** And finally, if you need a sample database to play with I can highly recommend using one of the DBA tools docker containers.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=56)** This enables you to create a development database on your local machine that you can safely play with.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=61)** For more information on getting this set up, head over to [dbatools.io/docker](https://dbatools.io/docker).
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-you-should-know?u=76281980&t=66)** Otherwise, simply bring your curiosity and an open mind and let's get started on the content.

> [!info]- Semantic Content
>
> **Env Vars:** tsql (2), sql (2), dba (1)
> **CLI Commands:** docker (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** finally, (1), let (1)
> **URLs:** [dbatools.io](https://dbatools.io) (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### What is T-SQL?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=0)** - [Instructor] So this course is an introduction to Transact-SQL, also known as T-SQL.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=5)** So I guess the first thing we should cover is what that even is.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=8)** But first, let's take it one step further back and talk about just SQL.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=12)** SQL, which stands for Structured Query Language, is a language used to interact and manage databases and the data they contain.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=20)** It is a domain specific language, which means it was designed and written for a specific domain.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=25)** In this case, databases.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=27)** With SQL, we can create tables and other objects within databases, insert, update, delete, and select data, and perform other administration tasks, such as backups or maintenance.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=38)** SQL is standard across many different relational, database management systems.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=41)** However, some like SQL Server use an extended version of the language that includes additional functionality for the specific database system.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=49)** T-SQL is the extended version of SQL that SQL Server uses.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=53)** It allows you to do all the expected things like manipulating data as well as additional things that are unique to SQL Server like more specific error handling or creating SQL Server specific objects like store procedures or functions.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=67)** In this course, we'll focus on T-SQL as we'll be interacting with SQL Server databases.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=72)** However, I will say a lot of what you learn in this course will transfer if you then want to learn to work with another relational database management system.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=80)** Now that's all straightened out.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/what-is-t-sql?u=76281980&t=81)** Let's move on and get into the course.

> [!info]- Semantic Content
>
> **Env Vars:** sql (14)
> **Definitions:** is a  (2), is an  (1), known as (1), stands for (1)
> **Code Keywords:** let (2), case, (1), delete (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### CoderPad tour
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=0)** - [Narrator] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=7)** Each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=14)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=20)** We recommend using a desktop browser for the best experience with code challenges but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=28)** The code Challenge has three areas: instructions in the top left, a console for output in the bottom left and a code editor for your answer on the right.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=37)** You can use these drag handles to allocate space as you like.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=40)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=51)** Each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=57)** Create your answer in the code editor.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=59)** When you click test my code, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=75)** If your answer doesn't create a correct result, you'll see a message telling you the code is incorrect and showing the data that was returned.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=87)** If any messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/coderpad-tour?u=76281980&t=97)** When you finished each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)


### 1. Introducing SELECT

#### Structure of a SELECT statement
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=0)** - [Instructor] In today's world, data is everywhere.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=2)** All kinds of sensors and processes are creating data faster than you could even imagine.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=7)** All this data has to go somewhere, which is where having a database comes in handy.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=11)** Storing that data is all good and well, but you need to be able to read it out of the database in order to use it for making business decisions, fulfilling orders, and perhaps even inputs for other processes.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=22)** The first thing I'll cover in this course is how to write a basic SELECT statement to retrieve data from one of the tables.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=28)** SELECT statements can get very complex, but let's focus first on the building blocks we'll need for every SELECT statement that you'll write.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=35)** In order to select data from the database, the first thing to do is to specify which table or view you want to select the data from.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=42)** To specify this in the query, you'll use the FROM clause.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=45)** In the most simple case, all you need to do is write FROM table name.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=54)** In this example, you can see I'm specifying FROM dbo.customer, which will get all the data from the customer's table.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=61)** The dbo in this FROM clause specifies the schema where our table is.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=65)** dbo is the default schema for SQL Server databases.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=69)** We are able to create additional schemas in SQL server, and these schemas could be created to form logical collections of data.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=76)** For example, you could create a schema called Sales that would group all sales data, and a second schema called Human Resources for the HR data (indistinct).
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=84)** Schemas can be useful to separate data needed for different applications or to apply security permissions to specific data sets.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=92)** The second and final line of code you'll need to finish this first select statement is the SELECT keyword, and then we'll specify which columns to return.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=100)** You can use an asterisk to specify that all the columns should be retrieved.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=103)** You'll hear this referred to as SELECT *.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=110)** This is now valid syntax.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=112)** And running this will return all rows and all columns from our customer table.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=116)** However, SELECT * is not considered a best practice, and instead we should specify the column names for just the data we want to retrieve.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=123)** I won't talk much about performance tuning in this course, but minimizing the amount of data you need by choosing just the necessary columns is an important part of writing performance queries.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=134)** You can specify which columns to return by providing a comma-separated list.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=138)** Here I'll select the company name, contact name, and contact title columns from our table.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=151)** Running this code will retrieve just the necessary data we need about our customers.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=155)** Just like that, you've written your first T-SQL statement that will form the basis of what we need for the rest of this course.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/structure-of-a-select-statement?u=76281980&t=161)** I'll look at many other building blocks to make this more complex throughout this course, but a lot will come back to this basic SELECT statement.

> [!info]- Semantic Content
>
> **Env Vars:** select (7), sql (3)
> **SQL:** select (7)
> **Code Keywords:** let (1), from. (1), case, (1), return. (1)
> **Analogies:** imagine (1), for example (1), just like (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Best Practices:** best practice (1)

#### Aliasing columns and tables
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=0)** - [Instructor] Let's build on the basic SELECT statement created in the first video and talk about aliases.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=5)** As I mentioned, SELECT statements can get very complex.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=8)** So far I've kept it nice and simple, selecting just a few columns out of one table.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=12)** But as multiple tables and more columns are added, you might want to use aliases.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=17)** To alias a table, you'll just need to add the syntax AS alias name after the FROM clause.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=22)** Here you can see I've added the alias cust to the customer table, meaning wherever I refer to that table, now I can use the shortened name.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=36)** I would recommend using aliases that mean something to you.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=38)** In this example, you can see I've alias the customer table as just the letter a.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=43)** This saves some typing, but we do lose a lot of meaning.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=46)** If we have a complicated query, you'll now have to keep track of which table is table a.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=50)** Whereas if you alias with a short but useful name, such as cust, it'll improve the readability of the code.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=59)** One of the reasons you might want to use table alias is, is it makes for a lot less typing when joined to other tables.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=64)** I'll cover this in more details in the chapter covering joins.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=67)** But aliases can also be used for columns, which will help make the result set more readable.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=73)** I've added the PostalCode column onto our SELECT statement now.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=76)** But depending on the use case, this column might be better known as Zip Code.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=81)** When data is returned, you can change the name of the column in the result set to something more meaningful.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=91)** As seen with table aliases, to alias a column, you just need to add AS alias name after the column name in the SELECT list.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=97)** When this query is executed, you'll see that the column heading says Zip Code instead of PostalCode.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=103)** This will also be useful once you start adding calculations and more complex column definitions to our SELECT statement.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/aliasing-columns-and-tables?u=76281980&t=109)** Keep your eyes out for these in the next video.

> [!info]- Semantic Content
>
> **SQL:** select (5)
> **Env Vars:** select (5)
> **Code Keywords:** let (1), case, (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Adding calculations to your result set
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=0)** - [Instructor] Alright, let's take a look at some different data for this video.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=3)** Here you can see the OrderDetails table.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=5)** As the name implies, it stores details about orders that customers have made.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=9)** There are columns for both unit price and quantity, but to get total price, you'll need to perform a calculation on these two columns.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=20)** With T-SQL, you can do this right in line within the SELECT statement.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=25)** In this example, you'll see I just multiplied the UnitPrice by the Quantity.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=28)** Running this query gets the expected result of a total price column.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=32)** However, you can see that SQL Server hasn't named this column, it's just "No column name," which isn't very useful for whoever or whatever might consume this data.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=41)** You already learned how to solve this problem though with column aliases.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=48)** Here I have the calculation to create the total price column, and then I'll add AS TotalPrice to specify that the column will be named in a useful manner.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=57)** These calculations can be as complicated as they need to be.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=60)** The general rules apply, including using brackets to specify which calculations should happen first.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=69)** In this slightly more complicated example, you're looking at a system table called sys.dm_db_partition_stats which keeps track of how many pages make up each object within our database.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=79)** SQL Server stores data on 8 KB pages, so the reserved page count in this table tells us how many 8 KB pages make up each object.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=88)** This is fine, but my mind works better in megabytes rather than 8 KB pages, so I can add in a calculation to convert this to a more user-friendly value.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=97)** To get megabytes from 8 KB pages, I must first multiply it by 8 to get the number of kilobytes and then divide by 1,024 to convert that to megabytes.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=107)** In this example, I've also added a column alias, so I'll have a useful name returned with the data.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/adding-calculations-to-your-result-set?u=76281980&t=112)** Adding calculations to the results set can help make sense of the data we are returning, and paired with column aliases, you can return exactly what might be needed for our users or reports.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), select (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (1)
> **Code Identifiers:** dm_db_partition_stats (1)
> **SQL:** select (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Simple SELECT statement
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=0)** - [Instructor] All right, hopefully your first question went well and you got the right answer.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=9)** Let me tell you how I got there.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=11)** For this question, the task is to select some certain columns from the Dishes table and also rename one of them with a column alias.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=18)** The code to start does a SELECT * FROM the Dishes table, which will return all the columns.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=23)** To solve this problem, I'll change the asterisk to specify the three columns I need.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=27)** Name, Price, and Type.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=32)** However, I also need to use a column alias to change Type to be returned as DishType.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=37)** I'll accomplish this by adding AS DishType.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=43)** Once I'm happy with the query, I'll press the Test my code button and if I've completed this task successfully, I'll get the correct output shown in green above my results there.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=55)** Good job, folks, that's the first section done and your first question complete.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-write-a-select-statement-to-retrieve-data?u=76281980&t=59)** See you in the next section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type. (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Filtering the Result Set

#### Filtering data with WHERE using equalities
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=0)** - [Instructor] So far, I've demonstrated how to write the most basic SELECT statement that returns all the rows from a table or view within SQL Server.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=7)** However, often you don't need all the data.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=9)** Instead, you need to filter it to return rows that meet certain requirements.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=13)** Let's take a look at adding a WHERE clause to some queries.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=16)** From what you've learned so far, you can build this SELECT statement to view all the rows within the employee table.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=24)** You can see in the Results pane, I'm selecting just five columns from the table: EmployeeID, LastName, FirstName, Country, and Title.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=32)** Now imagine if you only wanted to return data for employees that lived in the UK.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=37)** To do that, you'll need to add a WHERE clause to the existing SELECT statement.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=46)** To accomplish this, I'll add the WHERE clause after the FROM statement.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=49)** You can see the syntax is pretty easy to read and I'll state where country equals the UK.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=56)** When I execute this query now, you'll see just four rows are returned and only where the Country matches UK.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=65)** You might also want to find rows that match any value in a given list of values.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=70)** For the next example, I'll alter our SELECT statement and change the WHERE clause to say WHERE LastName is IN Leverling or Callahan.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=79)** Executing this, you'll see we have filtered the results set to just those two employees whose last names match a value specified within the IN conditions.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=88)** Using the operators you've now learned about, you can get a long way to write in T-SQL that will find just the rows you're looking for.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=94)** You can start building some great reports and processes that will enable people to use your data, but you also might want to find data that doesn't meet certain requirements.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-data-with-where-using-equalities?u=76281980&t=102)** In that case, we need to learn about handling inequalities and I'll show you that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** where (5), select (4), sql (2)
> **SQL:** where (5), select (4)
> **Code Keywords:** this, (2), let (1), for. (1), case, (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Handling inequalities with WHERE clauses
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=0)** - [Instructor] There are many ways that you can filter data with T-SQL Syntax to ensure you get just the rows you need in your results set.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=6)** I will now introduce a couple more operators.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=9)** This time, ones that allow us to deal with inequalities, allowing us to find data that doesn't meet certain requirements.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=16)** If you take a look at the suppliers table, you can see we have details on where the suppliers are located.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=21)** If you wanted to find suppliers in a certain country or countries, you would use the operators taught in the previous lesson, equals to find one, or in to find more than one.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=31)** But to find all the suppliers outside of the USA, you'll need to learn about another operator.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=41)** For this query, you can write a where clause that says find all the suppliers that don't equal USA.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=46)** You can see that the operator for not equals combines the less than and greater than sign.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=50)** This is the ANSI standard operator for not equals.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=53)** There is also another option you can write the same query and get the same result by using this syntax, an exclamation point and an equals sign.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=64)** This is common syntax in a lot of programming languages.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=66)** Both operators introduced here for not equals can be used interchangeably, and the SQL engine will construct the same plan for getting the data.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=74)** Meaning that there is no performance gain for one versus the other.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=82)** If you wanted to further limit our results and say find all the suppliers that are not equal to the USA or the UK, you could use the not in syntax and provide a list of countries not to include.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=92)** Here you can see I've changed the syntax to say where country not in USA or UK.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=98)** This will further filter my results, and you can see the rows previously shown for the UK have now also been removed.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=105)** These operators can be used with text or string values as we've shown in these examples or with numeric data types.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=111)** Either way, it allows the results set to be filtered down to just the rows you need.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/handling-inequalities-with-where-clauses?u=76281980&t=116)** This is important because as you start to write more and more T-SQL, you'll want to start thinking about writing efficient and performant queries and only selecting the necessary data is an important part of that.

> [!info]- Semantic Content
>
> **Env Vars:** usa (4), sql (3), ansi (1)
> **CLI Commands:** find (7)
> **Code Keywords:** include. (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Find rows where strings partially match
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=0)** - [Instructor] All right, let's talk about patterns and matching parts of a value to find the rows for our result set.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=5)** So far, I've shown you how to find rows that either match or don't match exact values but now let me show you how to match on just part of a value.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=13)** Here's the orders table.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=15)** I've selected just a few columns.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=17)** The OrderID, CustomerID, OrderDate, ShipName and ShipAddress.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=22)** You'll notice that these are orders made by particular businesses on certain dates.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=27)** If I wanted to filter this data for certain values in the ShipName, I could use the operators that you've already learned but only if I knew the specific names of businesses.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=36)** In this case, I want to find any that have the word hungry in their name.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=45)** We can accomplish this by adding a WHERE clause and using the like operator.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=49)** The like operator lets us specify a pattern, which includes wildcards.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=53)** Since I want to find businesses that have the word hungry anywhere in their name, I'll add a wildcard to both the start and the end of the word.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=60)** The wildcard operator in T-SQL is the percent sign, so the pattern we want to search for is %hungry%.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=68)** When I execute this query, you can see that there are a couple of different businesses with hungry in the name.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=73)** As a side note here, T-SQL is generally case insensitive, meaning that, by default, case doesn't matter and so this wildcard will match uppercase or lowercase letters.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=84)** You can see I've used a lowercase h on hungry but results for the capital H have been returned.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=90)** This is configurable by changing the collation to one that is case sensitive.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=94)** This can be done at several different levels, including for the whole database or for a certain column.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=100)** For now, you just need to know that, by default, and in all my examples in this course, case doesn't matter for our SQL Server queries.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=108)** Because we started our pattern with a percent sign, the SQL Server engine must look for that word to exist anywhere within the column value.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=115)** If instead we wanted to find any businesses that start with the letter H, we can remove the leading percent sign like so.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=127)** You can see in the results now, the only rows where the ShipName starts with H are returned.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=133)** It's also worth pointing out that once you start to think about writing performant queries, you'll want to try and avoid, where possible, starting your pattern with a wildcard.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=141)** This means the SQL Server engine has to search all the data for these matches rather than if there is an appropriate index, just searching the rows that start with the pattern.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=151)** The like operator is another really useful operator in your toolbox for filtering data.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/find-rows-where-strings-partially-match?u=76281980&t=156)** I'm sure it'll come in handy for a lot of scenarios as you start to write more and more queries to find data.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6)
> **Env Vars:** sql (5), where (1)
> **Code Keywords:** let (2), default, (2), case, (1)
> **SQL:** where (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Filtering numeric data
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=0)** - [Instructor] Great stuff so far.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=1)** You now have several really great operators in your toolbox that you can use to filter all kinds of data.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=6)** However, most of the operators we've looked at so far, we've applied to strings.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=10)** They can be used with numeric values, but I have a couple more options to show that are really useful when you have numeric data types, like prices or quantity.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=18)** Let's start by running a select star query against the products table.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=22)** This is a great way to view the structure and some of the data within.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=26)** In our test database, the tables are all small, there are only 77 rows here.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=30)** But in the real world, we're probably going to want to do a select star, but only return the first 10 rows.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=35)** I'll show you how to accomplish that in a video on the top keyword a little bit later.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=40)** Here you can see we've got information about our products, including prices and the amount of units in stock.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=46)** First of all, let's find all the items that are in stock.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=52)** As you'll find with T-SQL, there are often multiple ways to write queries.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=56)** You can't, or at least shouldn't, have negative stock levels.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=58)** So to find in stock items we could say, where the units in stock are not equal to zero.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=66)** If I execute this query, you'll see we have all the items that have units in stock and, therefore, can be sold.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=74)** Let's instead use the greater than comparison operator to find rows where the units in stock are greater than zero.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=82)** Executing this query, we get the exact same results as by using not equal to zero.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=86)** However, this would also rule out any negative numbers.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=89)** So depending on your data, this might be more appropriate.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=93)** You can see there are several good comparison operators to use when comparing data.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=98)** As well as the greater than operator, you could also use greater than or equal to, which would include the value you specify.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=105)** The link at the bottom of this slide will take you to the Microsoft Docs page, where you can get more information on all of these operators.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=111)** Talking of including the value in your results there, let's run one more query to show off the less than or equal to operator.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=118)** In this query, I'm specifying that I want all the products where the unit price is less than or equal to 18.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=125)** I'll run this query.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=126)** And in the results, you can see the product name of Chai has a unit price of 18, and so was included within the results.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=133)** We also got all products that are cheaper than 18 of whatever this currency might be.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=139)** This is all good stuff, but it's still a bit simple.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=141)** We've only been including one work clause per query.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=145)** What happens if we need to specify multiple conditions?
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/filtering-numeric-data?u=76281980&t=148)** Well, good news, we're covering that next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** let (4)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Combining multiple operators into one WHERE clause
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=0)** - [Instructor] In this chapter of videos, you've learned about a lot of really useful operators.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=4)** You can now use these to filter data and return the perfect results set for your reports or applications.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=9)** However, so far, I've only shown you how to craft queries with one condition.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=13)** Now let's get a little more complicated and talk about specifying multiple conditions.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=18)** For this section, let's take a look at the orders table again.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=21)** Running a select star, you can see the structure of the table.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=24)** There are quite a lot of columns to filter on.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=31)** First, we'll use the equals operator to say, give me all the orders where the ship country is France.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=37)** Running this, I get a lot of results still, but you can see they all have a ship country of France.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=43)** You can add additional conditions to the where clause by using logical operators.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=47)** You can use and to specify both conditions must be met or or to specify at least one of the conditions must be met.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=54)** Let's add to the first query, and I'll say that ship country should be France, but also, the freight should be less than five.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=64)** Running the query, you can see the results meet both of these conditions.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=71)** Okay, one more step.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=72)** What if I want to find where the ship country is either France or Spain and the freight is less than five?
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=81)** When I write this query, I'm expecting only to get rows where the freight is less than five, but if I execute this, you'll see that I get results for France where the freight is more than five.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=94)** That's because of operator precedence, which means the order in which the SQL engine processes the operators.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=100)** SQL Server has processed the and first and then the or.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=104)** Don't panic, though.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=105)** As with maths, you can specify the order of the operators with brackets.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=114)** If I add brackets around the ship country equals France or ship country equals Spain, the SQL Server engine will process this first before moving on to filter where the freight is less than five.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=127)** I'll execute this query now, and you'll see the expected results.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=130)** The ship country is either France or Spain, and the freight is always under five.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=135)** There's a lot of great documentation on the topic on the Microsoft Docs site.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-multiple-operators-into-one-where-clause?u=76281980&t=139)** Here are three topics to get you started, but there are plenty of other pages to enjoy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2)
> **Env Vars:** sql (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Understanding how NULL data affects query results
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=0)** - [Instructor] This topic is a slightly more advanced one but I just want to bring it up here so you're aware of it.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=5)** This is how null values are treated when we write T-SQL queries.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=9)** Where this gets a little more complicated is you can change the behavior of how nulls are treated but for this intro course, we're going to look at how they're treated by default.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=17)** when you connect to SQL Server.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=19)** By default, the ANSI_NULLS option is set to on.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=22)** Just know that if you wanted to, you could turn this off to change how nulls are treated.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=27)** So firstly, what is a null value?
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=29)** Well, it tells us there's the absence of a value in that column.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=34)** This basically means a gap in our data and this is important because it'll make more sense with how nulls are treated.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=41)** A null value means we don't know the value for that piece of data, and so it is treated as an unknown value.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=47)** I bring this up in this chapter because when you write your where clauses you need to think, what if there are null values?
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=53)** Here is a query similar to the one you've already seen.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=56)** I'm saying, give me all the customers where the region equals null.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=63)** Executing this query doesn't work though, no rows are returned.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=67)** That is because, remember, null is an unknown value, so one null doesn't necessarily equal another null.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=78)** This is also the case for using in within our where clause.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=81)** This query will only return the results where region is equal to BC.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=86)** Instead, we need to use is null in the where clause.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=89)** If I wanted to find all the customers that don't have a region, because it's null, I would need to write the query like this.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=99)** Now, if I execute this, you can see I get the expected results.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/understanding-how-null-data-affects-query-results?u=76281980&t=103)** As I mentioned, this is a slightly more complicated topic but important to remember as you start writing more T-SQL queries to get after your data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), basically means (1), is an  (1)
> **Code Keywords:** default. (1), default, (1), this. (1), this, (1)
> **Env Vars:** sql (3), ansi_nulls (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Filtered SELECT statement
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=0)** (catchy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=5)** - [Instructor] All right, welcome back.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=7)** I hope you're enjoying the interactive questions within this course.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=10)** This question built on top of the first one and included skills you've learned within this section.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=15)** Again, we have been provided with the schema for the dishes table and the question is to find main dishes where the price is more than nine.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=22)** There is also a requirement to return four certain columns.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=25)** I'm given the basic select * from dishes, again, to build on top of.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=30)** First I will start with adding the where clause for the main dishes.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=33)** This will be where type equals main.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=39)** Then I'll need to add the second condition for price.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=42)** The question asks for results that are both the main type and price greater than nine.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=46)** So it'll be and price greater than nine.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=51)** Finally, I'll change the asterisk to specify columns I want.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=54)** Name, description, price, and type.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=59)** Running this will give me six rows and confirmation that this is the correct output.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=64)** Note that I only use the greater than sign.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=67)** Since I asked for more than nine, this is not inclusive of nine so you should use just greater than and not greater than or equal to.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=80)** Using greater than or equal to, you will include the chef salad in your results which costs exactly nine, and you'll get an error that the wrong output, too many rows were returned.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-select-data-meeting-multiple-where-conditions?u=76281980&t=92)** Hopefully, you got the correct result and we're ready to move on to the next section and add further to your T-SQL skills.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), type. (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (catchy upbeat music) (1)


### 3. Manipulating the Result Set

#### ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=0)** - [Instructor] In this section of the course, we're going to talk about manipulating the result set that is returned when we write our queries.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=6)** We already covered how to filter the results with various where clauses to get the rows that you need, but there are some other useful techniques to format the results.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=15)** When you look at a data set, it's useful to have it ordered by certain columns.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=19)** For example, if the data is showing sales per month, it would be nice if the months were in order as we'd expect them in the year.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=27)** It's important to remember though, if you don't specify an order, SQL Server will return the rows as it finds them.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=33)** And depending on the index you used, the order might change even if it seems like the results are always in the order you wanted.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=39)** So if you want your results in a certain order, you need to specify an ORDER BY clause.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=44)** Here, I'll start off with a pretty simple select statement.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=46)** At this point of the course, this should be starting to look familiar.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=49)** I'm specifying, I want to select four columns from the products table.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=54)** Running this query, I get the expected results, except they could be in any order.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=58)** For this example, they look like they're ordered by Product ID, but that is not guaranteed.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=63)** And depending on the indexes on this table, among other things, this could change.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=68)** I can, however, guarantee the order by adding the ORDER BY clause.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=72)** I'll add order by unit price.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=75)** You can see that the results are ordered from the cheapest product first all the way to the most expensive.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=81)** ORDER BY sorts our dataset by ascending order by default.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=84)** But if I instead wanted to sort by descending order or, in this case, most expensive product first, I can add the descending keyword.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=94)** Running the query now, the results are switched, and you can see the most expensive product at the top of the results there.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=101)** One final point on ORDER BY, so far I've only specified one column to sort on, but you can add additional columns.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=108)** For example, if I wanted to sort first by category ID, and then by price descending, I would add in the category ID column to the ORDER BY clause.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=118)** Executing this query now gives me all of Category 1 products first.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=122)** We haven't specified descending order so the category is being sorted by ascending order.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=127)** Within the Category 1 products you can see that they are sorted by unit price.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/order-by?u=76281980&t=132)** ORDER BY clauses can be particularly useful when you are displaying results in a report as often, order matters in those cases.

> [!info]- Semantic Content
>
> **Env Vars:** order (6), sql (1)
> **SQL:** order by (6)
> **Code Keywords:** default. (1), case, (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### TOP
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=0)** - [Instructor] In this course, our sample database is pretty small.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=3)** So far, the queries I've written have returned all the rows from each table.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=7)** However, in the real world it's likely that our tables will have thousands, millions, or perhaps even billions of rows.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=14)** If you write a select statement and return a large number of rows, you could cause significant performance issues on the SQL server.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=20)** And let's be honest, none of us are actually going to read a billion rows of data.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=24)** This is why it becomes important to use the conditions you've learned in the where clause section of this course to filter the data to just what you want.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=32)** But what if we just want to see a few rows of a certain table to see what kind of structure it has and what kind of data it contains?
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=39)** We can accomplish this with the top keyword.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=42)** As I mentioned, this database is small and I'm in a local development environment.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=46)** There's a low risk that if I run a select star with no where clause, that it'll cause an issue.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=52)** So here I'll start with a select star from DBO customers.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=56)** You can see that all the columns have been returned but also all of the rows.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=61)** In the bottom right hand corner you can see 91 rows have been returned.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=66)** I already mentioned the importance of only returning columns you actually need, but in the example here I just want to return 10 rows, all the columns so I can explore the data available.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=76)** I can accomplish this really easily just adding top 10 before the asterisk.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=80)** So SQL Server will return all the columns still but only 10 rows.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=91)** Executing this query you can see it now only shows 10 rows of data but all of the columns still.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=97)** This can be a really useful tool for working out what data you have available within the tables of your databases.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=102)** As you start to write more complicated queries you'll find more uses for the top keyword.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/top?u=76281980&t=107)** But I still use this method all the time when I have a new database to explore.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), dbo (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### DISTINCT
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=0)** - [Instructor] All right, again, I've got a really simple keyword to add to your queries.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=4)** This will allow you to ensure that your results set is unique.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=7)** Let's start by selecting two columns from the orders table.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=10)** You can see I've got customer ID and employee ID, and then I've ordered it by customer ID and employee ID.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=18)** If I execute this query, you can see that for each customer ID, I have several rows.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=23)** Looking just at the first customer, whose ID is ALFKI, you can see that they have orders handled by employee ID one, three, four, and six.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=34)** If I wanted to find all the unique combinations of customer ID and employee ID, I only really need one row for each combination.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=42)** You can see for the ALFKI and employee four, for example, I have duplicate rows.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=48)** To solve this problem, I'll just add the keyword distinct before the column list.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=57)** When I execute this, it'll apply the distinct requirement across all columns specified, so in this case, distinct or unique combinations of customer ID and employee id.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=66)** Before I execute this, you can note that I have 830 rows returned, and when I run the query, we're left with only 464 unique combinations.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=77)** If you instead wanted to answer the question, which customers ordered from the UK?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=84)** You could combine your newfound knowledge of where clauses to filter on the ship country equals UK and then apply the distinct to just the customer ID column.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=92)** Executing this final query will give us a distinct list of seven customers.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=98)** Remember, these customers could have ordered just once or many times.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/distinct?u=76281980&t=102)** This query just shows that they've ordered at least once.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), case, (1)
> **Env Vars:** alfki (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Intermediate SELECT statement
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=0)** - Time for the next challenge question.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=7)** This time we'll need to make use of both the distinct and order by syntax to complete the challenge successfully.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=13)** The initial code is again, a select star statement.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=16)** This time from the customer's table.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=18)** I know that I need just the state and city columns for this solution.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=21)** So I'll first change the asterisk to specify those columns.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=29)** The second requirement to this is about the unique combinations.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=32)** To do that, I'll add the distinct keyword to the select list.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=40)** And the final requirement is the order.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=42)** Because that's required, I'll add order by state and city and that should solve the puzzle.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=50)** Executing this query, I'm shown a green message stating I have the correct output.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=55)** One thing worth noting, it's possible to get the correct answer without the order by clause.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=60)** Depending on how the SQL engine gets the results, they might be in order but it's never guaranteed unless you specify order by so don't skip that last piece.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=69)** Great work on this one.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution?u=76281980&t=70)** See you in the next section.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - time (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Joins

#### INNER JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=0)** - [Instructor] It's time for things to get a little more interesting.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=2)** So far, each query I've written has been against only one table, but most databases are designed in a normalized fashion, which means that the data you want to see is spread across multiple tables.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=17)** If I run a select top 10 against the Orders table, you can see that within this table there are references to data in other tables.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=24)** The CustomerID and EmployeeID columns don't tell us much about the customer who made the order or the employee that processed it.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=31)** But by using that ID, we can essentially look up the data about, say, EmployeeID number 5 within another table.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=38)** As you learn more about databases and more specifically database design, you'll start to hear about primary keys and foreign keys.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=46)** These keys help to structure our data to ensure these relationships between tables are enforced.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=51)** For example, we can't have an order made by a CustomerID that doesn't exist in the Customer table.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=57)** At the moment, as you're just starting to learn T-SQL don't worry too much about the design aspects, but it is important to recognize how to join multiple tables together to get what you need.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=66)** The first join we'll cover is the most common, and that is the inner join.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=70)** This join type means that records will only be returned if there are matching values in both tables.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=76)** With the example from earlier, which showed the relationship between the Orders table and the Customers table, you can see that I can join these two tables on the CustomerID field.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=85)** To write this query, I'll start with my select top 10 from Orders.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=89)** Then to join to the second table, I'll specify the type of join, inner join in this case, and then the table to join to, so Customers.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=99)** This is only part of the story though.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=100)** We have to specify which columns to join on.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=103)** In this example, it's the CustomerID field from each table.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=107)** If you recall from earlier, I taught you about table aliases.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=110)** Adding an alias to each table means we can use that alias to specify the join criteria.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=115)** Let's alias the Orders table as O and the Customers table as C.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=123)** Finally, I'll specify the on clauses for the join, and that'll be the CustomerID from the Orders table, so O.CustomerID is equal to the CustomerID from the Customer table, which is C.CustomerID.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=138)** Running this query with the asterisk means that I'll get all the columns from both tables returned.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=143)** First, we have the columns from Orders, and if I scroll to the right, you'll also see the columns from the Customer table.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=151)** This is a lot of columns.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=153)** Let's refine it down a bit.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=154)** I'll choose just the columns I care about today, which is OrderID, CustomerID, and CompanyName.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=164)** You might notice a red squiggly line under CustomerID.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=167)** SQL Server Management Studio is telling me there is a problem.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=170)** If I hover over that red line or execute the query, you'll see the problem.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=175)** An ambiguous column, basically saying it appears in both tables, so I'll need to specify where to retrieve it from.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=181)** Adding the alias of either table, remember, I've joined on that column so the values must be the same from either table will resolve this issue.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=192)** Personally, when I'm writing queries with multiple tables, I'll always add the alias for each column that I returned.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=197)** It increases readability for the next person who picks up this code or for future Jess when I come back to it.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=203)** If I execute the final query, you can see I've now paired the information stored in the Orders table with the customer information.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=210)** Since I specified an inner join, this results that will only include rows where the CustomerID is present in both tables.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/inner-join?u=76281980&t=217)** Next, we'll talk about another join option for finding rows when data isn't present in one of the two tables.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), finally, (1), from. (1)
> **Definitions:** means that (2), is a  (2)
> **Env Vars:** sql (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### LEFT JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=0)** - [Instructor] The next type of join to learn about is the LEFT JOIN.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=3)** Remember, with the INNER JOIN rows were returned if there was a match in both tables.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=7)** Therefore, it didn't matter which table you specified in the FROM clause and which table was specified in the JOIN clause.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=14)** However, with a LEFT JOIN, all the rows must be returned from the first table, even if there are no matches in the second table.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=21)** If there are matches, then the values will be returned for those columns and if there are no matches, nulls will be returned.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=28)** This means that consideration is needed on which table is the left table was specified first in the FROM clause.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=34)** For this video, the question we're trying to answer from the data in this database is which products have had no sales?
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=40)** So basically, which products have no matching order detail records.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=47)** I'll start with just a select top 10 from products, returning all the columns just to get a feel for the data.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=57)** And I'll do the same for OrderDetails.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=59)** You can see that there is a ProductID column in the OrderDetails table that we can use to join on.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=65)** The syntax is pretty similar for all the join types.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=68)** First, I'll add in the join information.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=69)** This time specifying LEFT JOIN.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=75)** Remember the table order matters.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=76)** So I'll do FROM products using the p alias, and then LEFT JOIN OrderDetails with the alias od.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=84)** Again, we'll specify the join criteria, which will be on p.ProductID equals od.ProductID.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=91)** And I'll also specify the columns to return, just the ProductID from the products table.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=96)** And then I can do od.*, which will return all of the OrderDetails information.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=102)** To start with, the results, it looks exactly like what you saw with the INNER JOIN as there are matches for the ProductID 1 in the OrderDetails table.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=112)** However, if we scroll down to ProductID 2 in the results, you'll notice that only the first column, ProductID, has a value in.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=119)** The rest are null, because there was no matching rows in the OrderDetails for ProductID number two.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=128)** To make this easier to see, and if the goal of this query was to just find products with no sales, I could add a WHERE clause to only show products where one of the values from the second table is null.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=139)** So adding where OrderID is null would accomplish this.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=144)** Running this query, you can easily see that ProductID 2 is the only one without any orders.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/left-join?u=76281980&t=150)** This technique can be really useful for answering these kinds of questions and finding where data doesn't exist.

> [!info]- Semantic Content
>
> **Env Vars:** join (7), left (4), inner (2), where (1)
> **SQL:** left join (4), inner join (2), join (1), where (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** return, (1), this. (1)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### FULL OUTER JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=0)** - [Instructor] The final type of join I'll introduce in this course is the full outer join.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=4)** This builds on what you learned about in the video about left joins.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=7)** Rows will be returned from both tables when you use a full outer join, even if there are no matches.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=13)** Let's take a look at an example to make this a little clearer.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=16)** First off, I'll run a select top 10 for both the supplier's table and the customer's table.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=21)** This is a useful way of exploring the data to see what I have available.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=26)** This data is a list of customers and suppliers from all over the world, if we take a look at the country column in each table.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=32)** What if I wanted a list of all the customers in each country that we have suppliers in?
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=36)** Well, for that example, I'll do an inner join.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=41)** If I use an inner join between suppliers and customers joining on the country column, I can answer this question.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=48)** You'll also notice I've selected just the name and country columns from each table and applied aliases to make my results clearer.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=55)** Running that query, you'll see there are some duplicates in the supplier name column as we're getting each combination of supplier and customer for each country.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=63)** But there are no null values, so we can't tell if there are suppliers in countries with no customers or, vice versa, customers in countries with no suppliers.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=72)** This is where the full outer join comes in as we want all the rows from both tables even if there are no matches on the join criteria.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=83)** Running this now, you'll see nulls.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=84)** This shows that we have customers in countries such as Mexico, where we don't have any suppliers and if I scroll down, you can see that there are suppliers in Japan and the Netherlands and Australia but there are no customers in those countries.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=100)** There are many places where this may come in useful and now you have three options available when joining tables together.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=107)** However, so far we've only looked at joins involving two tables.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/full-outer-join?u=76281980&t=110)** Next up, we'll combine more than two tables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Combining more than two tables
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=0)** - [Instructor] As you've seen so far, joins can be really useful for connecting tables together and getting the whole picture from your data.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=7)** The whole idea of a relational database, like SQL Server, is to normalize the data and store it in this distributed fashion where data lives in appropriate tables and can then be brought together as we query it.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=18)** So far though, we've only joined two tables together.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=21)** And as your skills improve, and you find yourself writing queries out in the real world, I can guarantee you'll need to join more than two tables together.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=28)** So let's take a quick look at them.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=31)** Remember the orders table?
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=33)** This contains multiple keys that reference data in other tables.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=37)** We have the CustomerID, which can be joined to the customer's table, and the EmployeeID, which as you might have guessed, can be joined to the employee data in the employees table.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=46)** If we're trying to get the whole picture on each order, we might want to pull in information about both the customers and employees that were involved in each transaction.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=54)** Let's start by adding an inner join to the customers table.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=59)** And as you've already seen, the join criteria will be on o.customerid = c.customerid.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=69)** If I execute that query, you'll see the additional columns returned.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=73)** I'll reduce the columns returned a little and get just the customers company name and contact name.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=81)** Now I'll add the second join.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=83)** Again, an inner join this time to the employee table.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=86)** The join criteria here is on the employee ID from each table.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=91)** As far as columns go, I'll get just the employees last name, first name, and title.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=97)** You'll notice I'm using the table aliases to improve the readability.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=101)** You can easily tell which table each column is coming from and it's as easy as that.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=105)** You can add on as many tables as you need.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=108)** It's worth considering the performance of your queries though.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=111)** The more you add, the more work SQL Server has to do to retrieve your data.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=115)** One final consideration is the join order.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=118)** If you're using all inner joins as we are in this example, the order doesn't matter.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=123)** But remember what you learned in this chapter.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=124)** For an inner join to return rows, the data needs to be in both tables, so data that doesn't exist in both tables is filtered out.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=132)** If you want to use a mix of inner joins and outer joins, either full outer joins or left joins, you need to consider the order as you want to make sure you don't filter out rows that you're expecting to keep.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/combining-more-than-two-tables?u=76281980&t=144)** Well, folks, thus joins another great tool for your T SQL Querying Tool Belt.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (2)
> **Analogies:** picture (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Joins
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=0)** - [Instructor] As we get further into this course, your skills are improving and so the code challenges are getting a little more challenging.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=11)** Hope you enjoyed this one, let's take a look at how I solved the problem.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=15)** This is the first challenge where we've had two tables to work with.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=18)** You can see in the diagram at the top of the question, we have a customer's table and an orders table, and they're connected by a customer ID column.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=27)** The question asks for a result set that contains two columns from each table.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=30)** And to start with, I'm given just a SELECT * FROM Orders.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=35)** The first thing I'll need to do is integrate the second table.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=38)** There is no mention of needing data even if it doesn't exist in the other table, so we'll use an inner join for this task.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=44)** I'll add the syntax inner join customers on customer ID from the orders table equal to customer ID from the customer table.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=55)** You'll notice I'm using table aliases to make the syntax easier to read, and it'll also help for the select portion of this query.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=62)** At this point, the query will return all the columns from both tables, and I'm only asked for four.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=67)** So I'll replace the asterisk with order ID and order date from the orders table, and first name and last name from the customer's table.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=78)** Finally, I'll execute this query and check my results.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/solution-22866535?u=76281980&t=83)** Looks good, I have the expected results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. DDL and DML: Creating and Changing Data

#### Create a table
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=0)** - [Instructor] You've learned a lot so far on querying data, how to retrieve it from the database and create a result set that answers certain questions.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=7)** But this section will instead focus on building tables to store data and how to insert, delete, and update the data within those tables.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=15)** In this video I'll explain the syntax you need to create your first table.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=19)** It's worth noting here that I'll explain how to create a simple table that you can use within the rest of this course.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=24)** But the art of designing database tables is a complex subject area.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=28)** There are many considerations to take note of to ensure you build the best and most performant tables for your needs.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=35)** The first thing I need to do is specify that I wish to create a new table and I'll do that by typing create table and then the table name.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=43)** (keyboard clacking) I'm going to create a table to store some data about animals so I'll write create table animals and then open and close parenthesis which will hold the definition of the columns.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=55)** As I add columns, there are a few pieces of information I'll need to provide.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=59)** This includes specifying at least a name and a data type.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=62)** For some of my columns I'll also add some additional options.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=66)** For the first column, I'm going to add an ID field.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=68)** This will act as my primary key for the table and I'm going to use an int or integer as the data type.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=74)** I'll name the column animal ID and then specify the INT data type.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=78)** As I mentioned I also want this column to be my primary key so I'll add primary key after the data type, this will create the primary key constraint with a default name.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=87)** If you prefer to control the name you can instead define the primary key constraint after the column definitions, I'll share a link to the Microsoft documentation on this syntax at the end of this video.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=97)** There is also a really neat feature in SQL server called identities, which allows me to specify that this animal ID column as an identity, and as data is inserted, the ID will auto increment.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=108)** I can add the identity keyword to the same column and then I'll specify the seed, which is the starting value.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=114)** So I want my first ID to be 1, and then the increment.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=117)** If I want the values to increase by 1 each time I'll again add 1 here.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=122)** That's my first column complete so I'll add a comma and move to the next line.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=126)** For the next column it'll be called Name, and it'll be a VARCHAR 50.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=130)** This specifies that it'll be a string value with a max length of 50.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=135)** You can specify VARCHARMAX, but it is best practice to define the string length needed.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=140)** I'm also going to specify not null, which means this column must always contain data.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=145)** Let's add a second VARCHAR column for species.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=148)** This time a little longer, and still not null, so requiring data to be inserted.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=154)** For the next column, I'm going to name it date added and since, as you may have guessed, it's going to store a date, I'll use the DATETIME2 data type.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=162)** The brackets after this specifies the precision of the date.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=165)** For my case, I'll use a 0.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=167)** This will store a date time with a precision up to seconds which is plenty in my case.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=172)** It's always best practice to use the smallest data type you can.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=175)** If I didn't specify the precision for DATETIME2, it would use two extra bytes per value.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=180)** That doesn't sound a lot but it adds up fast in big databases.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=185)** For the final column, I'll name it isMammal, and I'll specify a bit data type.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=189)** This is a special data type that only has two possible values, 1 or 0.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=195)** That's the definition of my table complete so I'll execute that.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=198)** And if I now run a select star from the table, you can see no data, but the expected column names along the top.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=208)** (keyboard clacking) My table is now ready for some data, and we'll look at adding that in the next video.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=213)** As promised, here are a couple of references for you to review.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=216)** Firstly, we've only covered a few of the many data types available to use when designing your tables.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=221)** Review this document and learn about which data types are the best for the kind of data you want to store.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/create-a-table?u=76281980&t=226)** The second link will enlighten you on primary keys and the different syntax you can use to define them.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (5), delete (1), type, (1), let (1), case, (1)
> **Env Vars:** varchar (2), datetime2 (2), int (1), sql (1), varcharmax (1)
> **SQL:** varchar (2)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (2)
> **Code Identifiers:** ismammal (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Insert data into a table
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=0)** - [Instructor] In the last video, you saw how to design and create your very own SQL server table, which is very exciting, except it's currently pretty empty.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=8)** And let's be honest, an empty SQL server table isn't much fun.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=11)** Let's take a look at how we can insert some rows into the table.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=15)** First, let's remind ourselves of the structure of the table.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=18)** You can see in the comment at the top of the file, I have the table definition.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=26)** Also, if I run a select star against the table, you can see the columns are returned.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=36)** One final tip.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=37)** You can execute a system stored procedure called SP_HELP to see more information about your table.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=42)** If I pass in the name of my table as a parameter to SP_HELP, I'll get several useful result sets returned.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=48)** The first pane just shows the name, owner and when it was created, but the second pane shows the columns and their associated data types, which is useful information when we want to insert data.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=58)** There are some more good information returned by SP_HELP.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=61)** I'll let you explore that further on your own.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=65)** The easiest way to insert data is to write an insert statement.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=69)** I'll start that with the keywords insert into, and then the table name, which is animals.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=74)** Then I'll specify the columns within parentheses that I want to insert data into.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=78)** Since the animal ID column is an identity, I can actually just skip that column.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=83)** Finally, I'll specify values, and then within the parentheses, the values I wish to enter.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=88)** For the two string values, I'm going to enter Zippy as the name and kangaroo as the species.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=94)** I can specify the built-in function get date to get the current date, and then finally, I'll add a one for the bit column.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=101)** since kangaroos are mammals.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=106)** Running this statement, you'll see the message, "One row has been affected," and if I rerun the select star from animals, we can now see we have one row of data in the table.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=118)** It's looking good.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=120)** You can also insert multiple rows at a time in this same fashion.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=125)** For example, here I've written a statement to insert two rows just by adding a comma at the end of the first line of values and then adding a second set.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=133)** Each row is surrounded by parentheses.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=138)** Executing that. and you'll see two rows are affected.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=141)** And if I select all the data from the animals table again, you can now see three rows in total.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=149)** You can also use a select statement to get the data you want to insert.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=154)** If I have a staging table called stg_animals, I can write a select statement from the table and use it to insert the data like so.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/insert-data-into-a-table?u=76281980&t=167)** If I do one final select, you can see that I've inserted data for Rupert the frog that was contained within my staging table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), pass (1), function (1)
> **Env Vars:** sp_help (3), sql (2)
> **Code Identifiers:** stg_animals (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Update data within a table
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=0)** - [Instructor] Next up we have updating data within our table.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=3)** If you've been following along with the videos in this section you should now have a table named Animals with some data in.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=9)** But what if something changes?
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=11)** Maybe we decided to rename one of our animals or perhaps we made a mistake when entering the information in the first place.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=17)** We can use an update statement to make changes to data already within our database.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=22)** I'll say this now and probably again in the video.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=25)** The most important part of an update statement is making sure it's targeting only the rows you want to update.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=31)** Personally, whenever I start to write an update I start with a select statement.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=35)** So let's take a look at this scenario.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=39)** First, I'll run a select top 10 * which gives me up to 10 rows and all the columns.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=45)** I need to update Maria, the elephant's name, to Mrs. Maria as she's feeling pretty formal these days.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=51)** The first step for this process is to isolate the rows I want to update.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=54)** In this case, it's just the row where animal ID is three.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=58)** Let's add that as a where clause to my select statement and confirm the correct data is returned.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=67)** You can clearly see only one row is returned which is the exact target of my update statement.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=72)** I could have said where name equals Maria but if there were more animals in the table named Maria I might update too many rows.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=80)** Choose the most specific column you can and I'd usually recommend the primary key if your scenario is like this one.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=87)** Once you have the data to update you can write your update statement using the where clause you just perfected.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=95)** I'll start with update and then the table name animals.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=101)** Then I'll specify the data to change.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=103)** In this case, I will type set name equals Mrs. Maria.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=108)** Finally, I'll add the where clause, where animal ID equals three, and when I execute it you'll see that one row has been affected.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=119)** If I repeat the select * now you can see the data has been changed.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=127)** This is a very simple update statement with only one table involved but you can write more complicated statements with joins to other tables, for example, and you can also target multiple rows at once to update.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=138)** One final reminder though, double check will the select statement that your where clause is returning just the rows you want to update before you run the update statement.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-within-a-table?u=76281980&t=146)** There is no worse feeling than running a statement, checking the results and seeing a lot more rows have been affected than you were expecting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), finally, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Delete data from a table
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=0)** - [Instructor] So far in this section, I've covered creating tables to hold data and then inserting and updating the data within those tables.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=7)** Next up, we have deleting data.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=9)** There are two main ways to remove data from a table.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=12)** In this video, we'll cover the first method, which is a delete statement.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=15)** Similar to an update statement, you will start by working out exactly how to target the rows you want to delete.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=21)** As I recommended previously, I'd write a select statement to ensure your where clause is perfectly crafted before you run the delete.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=28)** There is nothing worse than deleting more data than you were expecting to.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=32)** So today I'm going to look to delete all the mammals from the table.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=36)** To start, let's run a select top 10 from animals, so I can see all the data we have, and then I can figure out how to best solve the request.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=46)** As you may remember, the animals table has a column named isMammal which is set to one where the animal is a mammal, and zero when the animal is not.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=54)** Let's add where isMammal equals one to the select and then rerun it.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=62)** Reviewing the data, I can see it contains just the rows where isMammal is equal to one, so it looks good.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=68)** Now, I can feel confident that when I write the delete statement using this where clause that I'll target the expected rows.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=75)** The delete syntax is very similar to the update statement that you've already seen.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=79)** I'll type delete from animals, and then add the where clause from the select.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=86)** Now I'm ready to execute that and remove the rows.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=91)** You can see that two rows are affected, which is the number that I was expecting.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=100)** Finally, I'll rerun the select statement.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=102)** Here I'm highlighting just select top 10 from animals, and I can prove that just the data I'm expecting remains.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=109)** In the next video, I'll show you how to remove all the data from one table in one go.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/delete-data-from-a-table?u=76281980&t=114)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (7), let (2), finally, (1)
> **Code Identifiers:** ismammal (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### TRUNCATE a table
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=0)** - [Instructor] The final statement I want to mention for this section of the course is the TRUNCATE TABLE statement.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=5)** In the last video, you saw how I could use the delete statement to target rows in a table and delete them.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=10)** I used a WHERE clause to select the precise rows but I could have skipped the WHERE clause to delete all the rows in the table.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=17)** However, when you run a delete against all the rows in a large table, you can see performance problems and potentially cause issues with resources, such as the transaction log on your server.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=26)** Instead, I recommend if you want to remove all the rows from a table, use the TRUNCATE TABLE syntax that I'll cover here.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=33)** There is one caveat I want to mention and that is if the table has an identity column, the seed value will be reset.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=39)** So the next row that you will insert will have the value of one or whatever you set the identity seed to when you define the table.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=46)** If that behavior isn't desirable, you'll instead need to use a delete statement.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=51)** But if you're happy with resetting the identity, let's take a look at how to truncate the table.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=58)** Remember the animals table?
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=59)** I'll run a SELECT TOP 10 to refresh your memory.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=63)** You can see the rows of data we have available in there.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=65)** The TRUNCATE TABLE statement is probably the easiest you'll ever write.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=69)** It's simply TRUNCATE TABLE and then the table name.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=72)** So I will write TRUNCATE TABLE animals.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=80)** Executing that, you'll notice I get a message, command completed successfully but no row count, which I've received with the other data manipulation statements I've executed.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=89)** This operation targeted all the rows in the table and it didn't keep track of how many it had to remove.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=94)** It just removed them all.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=96)** This is why the performance is better.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=98)** It's logged in a different way than the delete statement, so you can truncate a massive table in literal milliseconds.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=104)** Remember, with great power comes great responsibility so be careful and make sure that you're certain before you execute the queries.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/truncate-a-table?u=76281980&t=112)** Rerunning the SELECT and you'll see the data is all gone.

> [!info]- Semantic Content
>
> **Env Vars:** truncate (5), table (5), where (2), select (2), top (1)
> **Code Keywords:** delete (6), let (1)
> **SQL:** where (2), select (2)
> **Warnings:** caveat (1), be careful (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### Update data with a join
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=0)** - [Instructor] All right, I've got one more scenario for you before we wrap up this course.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=4)** So far, we've only looked at very simple UPDATE and DELETE statements where the conditions to target the rows to update or delete are within the same table.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=12)** Now I'm going to show you how to combine this knowledge with what you learned in the join section of this course.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=17)** I'm going to demonstrate how to update values in one table based on the relationship to another table.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=23)** Let's refresh ourselves by running a SELECT * against both the animals and the staging animals table.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=33)** You can see that although they both have an ID column, they are separate to those tables.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=37)** So if we wanted to join these tables together, we need to do so on another column.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=41)** In this simple example, you can see that the name column is appropriate.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=45)** What I want to do is add a column to the animals table called notes and then update it with a short note for any animals that are in the stg_animals table.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=53)** The first step is to add the new column.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=55)** I'll use an ALTER TABLE statement for this.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=58)** We haven't covered that in this course, so consider this another bonus tip.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=62)** I'll say ALTER TABLE, table name and then add the column details.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=66)** In this case, a notes column, the data type is VARCHAR 100, and it will accept null values.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=77)** Now that's ready, I'll write a SELECT statement that uses the join criteria I'll need for this update.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=83)** Here you can see I'm selecting all the columns from animals with an INNER JOIN to stg_animals on the name column from each table.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=94)** Running this, you'll see I have one row returned.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=97)** There's only one row in animals that is also in stg_animals.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=101)** I now just need to swap this around to an update statement.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=104)** I'll remove the SELECT * row but leave everything else intact and replace it with UPDATE a SET notes equal to imported from stg_animals table.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=118)** The update this time has the alias of the animals table specified.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=121)** Since there are multiple tables in this statement, we need to specify which table is the target of the update.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=132)** As you start crafting more queries out there in the world, you'll probably need to use techniques like this to isolate the data you want to update.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=139)** And one final bonus tip, you can use the exact same technique for delete statements.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/update-data-with-a-join?u=76281980&t=143)** Build the join to target the rows and then add in the DELETE keyword, just specifying the table to delete from.

> [!info]- Semantic Content
>
> **Env Vars:** select (3), update (2), delete (2), alter (2), table (2)
> **Code Keywords:** delete (5), let (1), this. (1), case, (1), this, (1)
> **SQL:** select (3), update (2), alter table (2), varchar (1), inner join (1)
> **Code Identifiers:** stg_animals (4)
> **API Endpoints:** delete  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=0)** - [Instructor] Well, folks, that brings us to the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=2)** I hope you've enjoyed it and I also hope you feel like you've learned a good amount of T-SQL enough to create a good base for you to continue your learning.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=9)** There are many resources available to continue this journey.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=12)** One recommendation is to search for T-SQL or SQL Server within the LinkedIn Learning Library.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=18)** You'll find lots of great content there and I've even got an Advanced T-SQL Level Up course that you can tackle once you feel ready.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=25)** Also, the online SQL community is strong and lots of experts are often blogging and presenting about SQL Server topics, including writing T-SQL, performance tuning and other administration type topics.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=37)** I'd recommend following the #sqlserver and sqlfamily on LinkedIn, Twitter and Blue Sky to get connected and keep up to date with the latest content.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=46)** You can also find me all over the internet.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=48)** If you've enjoyed this course, please let me know and if you've got questions, I'm more than happy to try and answer them.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=54)** The best place to find me is on LinkedIn or Blue Sky.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=57)** Again, my name is Jess Pomfret.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-transact-sql-22864585/next-steps?u=76281980&t=59)** Thank you so much for watching.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7)
> **CLI Commands:** find (3)
> **Code Keywords:** continue (2), let (1)
> **Speakers:** - [instructor] (1)


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