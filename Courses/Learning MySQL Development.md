---
type: course
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
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/mysql
status: not-started
created: 2026-04-17
---

# Learning MySQL Development

> Are you brand new to database development? After more than 25 years, MySQL is still the most popular and approachable database management system—ideal for developers who want to start programming data-driven applications. This course provides an overview of MySQL tools and techniques for software development. Discover what a database is and how it's structured and explore the data types underlying

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630) | 1h 56m | Beginner | 20K learners

## Instructor

- [[Brad Wheeler]]

## Resources

- Exercise files available

## Skills Covered

- MySQL

## Table of Contents

### Introduction

#### Learn to use MySQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=0)** - [Brad] Databases are a part of our world.
>
> **[0:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=2)** Almost every digital service you use is based upon them.
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=6)** One of the most popular database management systems available is my MySQL.
>
> **[0:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=10)** It's open source and freely available, and has been adopted by companies large and small around the world.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=16)** But it's not simple, and if you're just starting out, even the help documents can look overwhelming.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=21)** I'm Brad Wheeler.
>
> **[0:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=22)** In this course, I'll start by covering the basics of databases, and database management systems in general, and then you'll learn how to interact with it, first by viewing data, and then by creating, updating, and deleting it.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=34)** Finally, I'll get you started with joining tables, allowing you to create advanced queries and start using MySQL in real-life applications.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/learn-to-use-mysql?u=76281980&t=42)** Now, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (2)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [brad] (1)

#### How to get started with MySQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=0)** - [Narrator] In this course, I'll be using the MySQL Community Edition which includes both the MySQL Server and the MySQL Workbench which is the official graphical interface for MySQL and the one I'll be using throughout this course to create and interact with my databases.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=17)** By following the download link on the MySQL community site you can download an installer for the operating system of your choice.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=24)** Just click on Community Server.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=27)** I'll download the Windows Installer MSI and bypass the Oracle login.
>
> **[0:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=35)** And when that's downloaded, I'll run the installer.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=42)** The installation process is mostly straightforward where you can generally just click Next but there are some items to note.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=49)** Select the Custom Install Option on the setup type page, and click Next.
>
> **[0:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=55)** And then on the select products page you got to make sure to select the newest versions of the following products.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=61)** We need the MySQL Server version eight.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=68)** We need the MySQL Workbench under applications.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=73)** Select the latest version of that.
>
> **[1:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=76)** And then finally, under documentation and then samples and examples, we need to install the latest version of that.
>
> **[1:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=84)** It contains a sample database that I'll use throughout this course.
>
> **[1:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=88)** Everything else is optional.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=91)** I'm going to click Next, Next again and then execute the download and install.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=100)** Once the installation process is done you'll need to configure MySQL Server.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=106)** The only thing that you really need to pay attention to on these screens is the MySQL route password.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=112)** I recommend making this a strong password even for a local install.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=116)** It's just best practices.
>
> **[1:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=119)** And everything else you can generally just click Next through.
>
> **[2:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=124)** On the MySQL Workbench setup page, enter your password and check it, and that will automatically set up the connection in the workbench.
>
> **[2:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=134)** When that's all done, you can just click Finish.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=138)** And Finish again.
>
> **[2:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=140)** I'll be using the Windows version of MySQL so the precise appearance of the tools might appear different if you use a different operating system but MySQL works the same regardless of where it's installed.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=151)** So all of my examples should work equally well for every OS.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=155)** As a quick side note the official pronunciation of MySQL is MySQL, although MySQL is commonly used as well.
>
> **[2:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/how-to-get-started-with-mysql?u=76281980&t=164)** If you would like more step-by-step instructions for installing and configuring MySQL in detail I recommend searching for the MySQL Installation and Configuration Course in the LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (17), make (1)
> **Prerequisites:** install (4), setup (2), you'll need (1), configure (1)
> **UI Navigation:** select the (3), click on (1)
> **Code Keywords:** interface (1), finally, (1)
> **Env Vars:** msi (1)
> **Exercise Files:** download the (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)


### 1. Database Basics

#### What is a database?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=0)** - [Instructor] At the most basic level, a database is a set of order related data that is accessed by a computer system.
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=6)** Technically, the term database only applies to the data itself.
>
> **[0:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=9)** A database management system, or DBMS, provides the services that are necessary for end users or other software to interact with the data.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=17)** However, it's fairly common to refer to the entire collection of data, DBMS, and any associated applications as a database, even in professional contexts.
>
> **[0:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=26)** Without a DBMS the data itself is pretty useless.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=29)** It's the DBMS that provides pretty much all the functionality of the complete database system.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=34)** The DBMS provides the ability to read, write, update, and delete data in the database.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=39)** It provides structure for data, such as the way that numbers, texts, and other types of data are stored.
>
> **[0:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=44)** It provides a means of setting permission such that users have certain rights and restrictions for interacting with the data.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=49)** There's also much that it does that's invisible to the user such as managing the way that the database is physically stored on your disk, and preventing the database from becoming damaged if users and applications interact with it in the wrong way.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=61)** MySQL is just such a database management system.
>
> **[1:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=64)** Specifically, it's a DBMS for types of databases called relational databases, which means that data is stored in a series of related rows and columns within tables.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=74)** To interact with the data, one uses a special type of programming language called SQL, short for Structured Query Language, to make a statement to the database which says what you would like the database to do.
>
> **[1:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=85)** This could be displaying certain data in a specific way, erasing or adding data to existing tables, or even changing the entire structure of the database such as adding new tables.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=95)** These core functions are sometimes called the database engine.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=99)** DBMSs usually also have tools to manage the administration of the database instance, such as monitoring its performance.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=106)** SQL is a very common way of interacting with relational databases of all types, and many SQL commands are common across DBMSs.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=114)** However, every DBMS has its own particular set of rules and constraints that are slightly different from the others and MySQL is no exception.
>
> **[2:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=123)** Since this is an introductory course, most of the SQL you'll be learning will be easily portable to other relational database systems, but I'll be careful to call out any MySQL specific elements as they pop up.
>
> **[2:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=134)** Many of the most popular DMBSs follow the relational model, and it powers everything from giant enterprise databases stored on the cloud to small databases run on a user's own machine.
>
> **[2:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=144)** However, it's not the only kind of database.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=146)** There are some that are designed to store documents or other types of unordered data, rather than individual pieces of data in rows or tables.
>
> **[2:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=153)** Some are designed to run on embedded systems, such as consumer electronics, and must be able to manage their data with high reliability but no remote administration.
>
> **[2:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=161)** Search engine databases have complex data database engines that support searching through giant amounts of text.
>
> **[2:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=168)** Since these non relational databases don't use rows, columns, and tables, they have their own query languages optimized for their specific type of data.
>
> **[2:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/what-is-a-database?u=76281980&t=176)** If you want to learn more about relational databases in general, I recommend looking up relational databases essential training in the LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Env Vars:** dbms (7), sql (4)
> **Definitions:** is a  (2), means that (1), short for (1), is an  (1)
> **Analogies:** such as (5)
> **CLI Commands:** mysql (3), make (1)
> **Code Keywords:** delete (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### SQL, a declarative language
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=0)** - [Instructor] As you might guess from the name, MySQL uses SQL, or structured query language, as the means of programmatically interacting with its databases.
>
> **[0:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=9)** SQL is a declarative language, one common among relational DBMSs, but very different from procedural or object oriented languages common when working with data outside a database.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=20)** In a procedural language, a program is executed step by step, and the program flow explicitly lays out each step that the programmer wants performed.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=29)** A declarative language leaves the exact control flow up to the computer.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=32)** A programmer just states the logic of what they want the end result to look like.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=36)** In database terms, a procedural program might run a loop wherein it checks the first row of data in a table for certain contents, and then displays those contents if they match the criteria or rejecting them if they don't.
>
> **[0:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=48)** Then it would loop to the next row.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=50)** SQL leaves all those specific steps up to the database engine.
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=54)** All that the SQL query needs to do is state what the programmer wants the final results to look like.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=59)** As a result, SQL queries tend to be very succinct compared to procedural or object-oriented programs and have the added advantage of being very human readable.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=69)** To understand the basic syntax of SQL, consider this query.
>
> **[1:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=72)** The first clause, SELECT*, tells the database what data to select.
>
> **[1:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=76)** The star character means everything.
>
> **[1:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=78)** It can be replaced with a list of specific columns if you only want a subset of the data.
>
> **[1:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=83)** The FROM clause indicates where you want to SELECT* from, in this case, the table, movies_basic.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=90)** The WHERE clause filters the results of the select query based on the stated criteria.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=95)** In this case, the select query will only choose movies whose release date is after 1990.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=100)** Finally, the ORDER BY clause describes how you would like the data displayed.
>
> **[1:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=105)** In this case, results will be sorted by the title column, ASC, or ascending, indicates that the data should be displayed in ascending order from low to high.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=114)** As a side note, though it's not required in MySQL, the convention with most SQL implementations is to use all caps for SQL commands and keywords and lowercase for tables, columns, and data.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=127)** It just helps make the query easier for the eye to parse.
>
> **[2:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=130)** SQL also ignores most whitespace, so these two queries are equivalent.
>
> **[2:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=135)** Adding new lines also has the advantage of making the different clauses of the query more visible.
>
> **[2:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=140)** All SQL data manipulation queries and statements follow a similar pattern.
>
> **[2:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=144)** For instance, if the SELECT* were replaced with DELETE and the ORDER BY clause removed, this statement would remove all the data it would otherwise have selected.
>
> **[2:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=153)** Update statements change the data in the database and INSERT is used to add data.
>
> **[2:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=158)** SQL statements can also be used to change the structure of the database itself.
>
> **[2:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=162)** CREATE TABLE statements add new tables to the database, and ALTER TABLE is used to change existing tables.
>
> **[2:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=168)** TRUNCATE is used to empty tables of their contents while preserving their structure, and DROP is used to remove tables entirely.
>
> **[2:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=175)** Finally, a word of warning.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=177)** SQL queries are run instantly against the actual data in the database.
>
> **[3:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=181)** Select queries are harmless because they only display data, but almost every other type of statement that executes successfully will immediately and permanently change the data in the database or even the database itself.
>
> **[3:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/sql-a-declarative-language?u=76281980&t=193)** Be careful when running update or delete or drop commands because in MySQL, there's no undo button.

> [!info]- Semantic Content
>
> **Env Vars:** sql (12), select (3), order (2), table (2), where (1)
> **Code Keywords:** case, (3), finally, (2), delete (2), from, (1)
> **SQL:** select (3), order by (2), where (1), create table (1), alter table (1)
> **CLI Commands:** mysql (3), make (1)
> **Warnings:** warning (1), be careful (1)
> **Code Identifiers:** movies_basic (1)
> **API Endpoints:** delete
 (1)
> **Definitions:** is a  (1)

#### Databases vs. flat files and spreadsheets
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=0)** - [Instructor] Most people who want to start using databases are already familiar with the other ways of storing data on a computer.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=7)** There are spreadsheets, which have plenty of tools for calculating, filtering, and displaying data.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=12)** Most people also have experience with flat files, which are simply text or binary files with lists of data, a very simple format suitable for viewing in a text editor.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=21)** Given that these other data storage applications exist, why use a database?
>
> **[0:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=26)** Spreadsheets and flat files are both much simpler than databases.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=29)** They don't require any programming experience.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=32)** They're already installed on many machines, and many users are already familiar with them from their day-to-day work.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=37)** Flat files are highly portable.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=39)** You can guarantee anyone who you send the data will be able to view it.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=42)** Spreadsheets have many integrated tools that make for easy data analysis, especially for numerical data like finances.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=49)** These are all perfectly valid reasons for using spreadsheets and flat files, and even regular data database users will still frequently use other data tools for presenting and transmitting their data.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=59)** However, databases do have three major advantages over these other applications, flexibility, scalability, and integrity.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=66)** The use of SQL demonstrates the flexibility of a relational database.
>
> **[1:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=71)** Although data at rest in a table is laid out according to a structure that only rarely changes, most data is not queried one entire table at a time.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=80)** Instead, queries have the ability to pull data from different tables joined up by their interrelated fields and displayed in an order that makes sense for the particular question being asked of the data.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=91)** Thinking of users, their addresses, and their activities from three different tables can be easily done in one query, and then filtered in different ways to find the most useful way of displaying the data.
>
> **[1:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=102)** New data can be easily integrated into these queries as well.
>
> **[1:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=105)** While pivot charts and some spreadsheet applications offer similar functionality, they're slower and more restricted.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=112)** Speaking of slower, the second major advantage of a database is its scalability.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=116)** With small amounts of data, it's often possible to just eyeball a spreadsheet or flat file to understand it.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=122)** But when the user is dealing with thousands or millions or billions of pieces of data, then other programs become hard or impossible to use.
>
> **[2:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=129)** Imagine scrolling through a text file with a million rows.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=132)** Most spreadsheet applications have a maximum quantity of data that they can support.
>
> **[2:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=136)** Most enterprise level databases, such as MySQL, can scale to handle arbitrarily large sets of data.
>
> **[2:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=143)** Though this course assumes that you're using MySQL on your local machine, most of the time, real world installations of MySQL will be run on servers or in the cloud.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=151)** Given these resources, a well-designed MySQL instance can query billions of rows of data in seconds.
>
> **[2:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=156)** This is simply impossible with other data tools.
>
> **[2:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=159)** Finally, DBMS has placed a great deal of value on the integrity of the data.
>
> **[2:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=163)** Most of its tools for maintaining integrity are handled outside of the user's direct intervention, but they all serve toward making sure that many users can interact with a database without one user's queries and statements affecting another's.
>
> **[2:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=176)** Many websites will run multiple queries for every user of the site.
>
> **[3:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=180)** For companies like Google or Amazon, that can be millions of users at once.
>
> **[3:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=184)** With a database, each query or statement is handled as a single transaction completed or failed before any other user's query or statement will interact with that same data.
>
> **[3:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=193)** When using a flat file or a spreadsheet, even one with robust collaboration tools, there's no guarantee that your data won't change while you're using it.
>
> **[3:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=201)** With a database, all the data in each statement you run will be consistent with all the other data in that same statement.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=208)** Ease of use, portability, presentation.
>
> **[3:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=211)** There are many reasons to use flat files and spreadsheets.
>
> **[3:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/databases-vs-flat-files-and-spreadsheets?u=76281980&t=214)** However, for interacting with large-scale sets of ordered data, the flexibility, scalability, and integrity of databases make them the best solution and their real-world use cases bear this out.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (4), make (2), find (1)
> **Code Keywords:** require (1), finally, (1)
> **Env Vars:** sql (1), dbms (1)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Common database terms
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=0)** - [Instructor] Like any computer system, DBMSs have a detailed technical vocabulary.
>
> **[0:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=5)** This vocabulary makes it possible to discuss database-specific questions in detail, but it can be impenetrable to newcomers.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=12)** In this video, I'll touch on terms and ideas that you'll see in action throughout the rest of this course.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=18)** A database is a set of ordered, related data stored on a computer.
>
> **[0:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=22)** This is true of any type of database, but this course focuses specifically on relational databases, a type of database model that focuses on organizing data into rows and columns within tables.
>
> **[0:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=33)** A table is a collection of closely related data.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=37)** In theory, all data in a database could be stored in a single giant table.
>
> **[0:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=41)** However, organizing data into many tables is more efficient from both a human's and a computer's perspective.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=47)** It makes the data much more readable, and it also takes much, much less processing power to interact with numerous smaller tables.
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=54)** In a relational database, each table is divided into rows and columns.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=59)** Columns define the data present in each row.
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=62)** One column might be a unique identifier, another might be a piece of text, and a third and fourth might be numbers.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=69)** Each row contains data that all refer to the same entity in the database, whether it be a customer, a transaction, or a point of scientific data.
>
> **[1:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=79)** The intersection of each row and column is called a value.
>
> **[1:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=82)** Another way to think of it is that each column defines the nature of a value and a row defines its relationship to other values.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=90)** Sometimes these structures are referred to by alternate names.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=93)** A table is sometimes known as a relation, a column as an attribute, and a row as a record or tuple.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=100)** In MySQL, the order of rows and columns in a table does not matter.
>
> **[1:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=104)** Column order is defined once when a table is created, usually to make the data as readable as possible, but can be manually changed later.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=111)** The actual order of rows is essentially meaningless since users can define the order they would like to see when the data is read out of the database.
>
> **[2:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=120)** Often, each row in a table will contain one value that functions as a unique identifier called a primary key.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=127)** This key is unique to each row, and this uniqueness is enforced by the DBMS itself.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=132)** The key allows the specific row in a table to be referenced either in other tables where it would be called a foreign key, or in queries that include multiple tables.
>
> **[2:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=142)** To interact with the database, users employ SQL statements, which are any valid command that complies with SQL syntax, ends with a semicolon, and interacts with a database in some way.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=155)** The most basic types of statements in SQL are so-called CRUD statements, standing for create, read, update, and delete.
>
> **[2:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=163)** These correspond in MySQL to insert, select, update, and delete statements.
>
> **[2:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=169)** Select statements are often called queries, and unlike other types of statements, they return a set of rows, including potentially zero rows.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=177)** Some users will use the term statement and query interchangeably, but technically, a query is a type of statement that users select.
>
> **[3:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=185)** Each statement consists of numerous clauses, which are the building blocks of an SQL statement.
>
> **[3:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=190)** In this query, SELECT *, FROM movies_basic, and WHERE release_year > 2010, are all clauses.
>
> **[3:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=199)** The WHERE clause also includes a predicate, the > 2010 portion, that filters the results based on some user-defined criteria.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=208)** When a query includes data from multiple tables, the relationship between those tables is established in the query by joining two tables based on where the data in those two tables overlaps.
>
> **[3:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=219)** Primary and foreign keys are frequently used for this, they make for the simplest and most predictable joins since the key must be unique in one table.
>
> **[3:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/common-database-terms?u=76281980&t=227)** With these terms in hand, you are now ready to begin learning how to interact with databases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), where (2), dbms (1), crud (1), select (1)
> **Definitions:** is a  (3), is called (1), known as (1)
> **CLI Commands:** mysql (2), make (2)
> **Code Keywords:** delete (2), this, (1)
> **SQL:** where (2), select (1)
> **Code Identifiers:** movies_basic (1), release_year (1)
> **Speakers:** - [instructor] (1)

#### Database best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=0)** - [Instructor] When a user who is new to databases is tasked with creating their first database, they might ask, "Why not just make one table to include all my data?"
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=8)** If they're accustomed to using spreadsheets, this might be intuitive.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=12)** Nothing in the software will say, "You can't do this."
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=15)** However, that doesn't mean it's recommended.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=17)** Not only is this user leaving a lot of MySQL's most powerful tools on the table, they're making a database that will be hard to update, prone to irregularity, and slow to use, especially as it grows in size.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=29)** Many of the more detailed aspects of database best practices are beyond the scope of this course, and a lot of the data you'll see in other videos won't be optimized at all.
>
> **[0:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=38)** I'm designing my database to be suboptimal for the purposes of example, but by the time you're finished with this course you shouldn't need to rely on such simple datasets.
>
> **[0:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=48)** For more detailed information on database optimization, check out Programming Fundamentals: Databases in the LinkedIn Learning Library.
>
> **[0:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=55)** The best way to optimize a database is through a practice called normalization.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=59)** Normalization is the practice of designing a database to minimize data redundancy and maximize data integrity.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=66)** Full normalization is a complex practice rooted in formal logic, but the basic rules to follow are these.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=73)** Each row-column pair should only have a single value and those values should be related to or depend upon the key values of the table.
>
> **[1:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=82)** For instance, if you're designing a database to hold information about movies, you might design a table of film titles.
>
> **[1:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=88)** It might make sense to add a column for the director of that title, but it would not make sense to add information about the director's hometown or their net worth.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=95)** That data is not related to film titles.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=99)** If the biographical data does need to be included in the database, best practices would be to add a second table for directors and then link the two tables together logically.
>
> **[1:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=109)** This means you can avoid data anomalies.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=111)** For example, if you included all the data about both a film and its director in one table, what happens if all that director's titles get temporarily removed from the database for some reason?
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=122)** All their biographic information would be lost as well.
>
> **[2:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=125)** Likewise, say you need to update the director's net worth.
>
> **[2:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=128)** You'd have to update it for every single row containing one of those director's titles.
>
> **[2:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=133)** If you have two separate tables instead, then neither of these issues can arise.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=138)** It might seem like there's a downside to making more tables.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=141)** It makes the tables harder to read since the data is so spread out.
>
> **[2:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=144)** This is not as big a problem as it might seem.
>
> **[2:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=147)** Most often when using a database you won't be looking at entire tables at once.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=151)** Rather, you'll be using queries to select only some data from those tables.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=155)** Modifying a query to pull from multiple tables instead of one is a relatively simple thing to do in SQL, and later in this course you'll learn how to do exactly that.
>
> **[2:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=164)** The most basic best practice is to design your tables thoughtfully.
>
> **[2:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=168)** Before you start laying out columns, decide what specific data you would like each table to contain.
>
> **[2:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/database-best-practices?u=76281980&t=174)** Creating normalized databases is easier than updating existing databases to optimize them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), mysql (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), for example (1)
> **Best Practices:** recommended (1), best practice (1)
> **Code Keywords:** this. (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 2. Exploring MySQL

#### Advantages and disadvantages of MySQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=0)** - [Instructor] If you've decided to use a relational database to store your data, which should you use?
>
> **[0:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=5)** For the beginning user, MySQL has many advantages over its competitors.
>
> **[0:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=9)** To start with, it's free.
>
> **[0:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=11)** The community edition of MySQL is fully featured, and can scale up far beyond the simple tables that this course calls for.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=18)** This is no small thing.
>
> **[0:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=19)** MySQL's chief competitors are the Oracle DBMS and Microsoft SQL Server.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=24)** Both of those companies have commercial licenses that can cost thousands or tens of thousands of dollars for moderate-sized installations.
>
> **[0:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=31)** There are enterprise versions of MySQL that have similar licenses, but they're not necessary for a beginner or even a small company.
>
> **[0:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=38)** The only major downside of the Community Edition is that you don't get any official tech support.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=42)** Another advantage is ease of use.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=45)** Although you'll see through this course that MySQL is not exactly simple, it is easy to get started with.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=50)** Starting with the self-contained installation package, you can get started creating databases and tables with the MySQL Workbench without even learning any SQL.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=59)** The Workbench also makes it easy to visualize the results of your queries and to import and export data into other software packages.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=66)** Although it's not as forgiving as say, Microsoft Excel, MySQL lets you play around with your databases and with your DBMS installation without too much worry of catastrophic accidental damage.
>
> **[1:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=77)** The third advantage is that it's open source.
>
> **[1:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=79)** Even if you never dive into the source code yourself, it means a tremendous number of third-party tools have been developed to extend your installation.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=87)** It also means there are a lot of users who have delved into the code, and that means that even if you don't buy a support contract, you're likely to find resources online to help you solve any problems with MySQL.
>
> **[1:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=97)** This ties into its final major advantage.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=100)** It's enormously popular and used by people of all skill levels.
>
> **[1:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=103)** For many years, MySQL has been a top-tier DBMS, and that means that if you have questions when you're working with it, someone else online has probably already asked them and received an answer.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=114)** There are also guides and examples for thousands of different use cases.
>
> **[1:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=118)** There's a reason why MySQL is so popular.
>
> **[2:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=120)** The disadvantages of MySQL are fairly minor compared to its advantages, especially for beginners, people with small databases, or people who will only use the database while others administer it.
>
> **[2:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=131)** Though MySQL can scale up to enormous size, larger databases are less efficient than its competitors, and you'll have fewer tools for monitoring or optimizing those large databases.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=141)** There are also some tools like full text searching that are not supported out of the box and require add-ons to use.
>
> **[2:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=147)** It's also not fully SQL compliant.
>
> **[2:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=150)** While basic queries are largely similar to standard SQLs, some tweaking will be necessary to migrate to other DBMSs, which themselves may not be fully compliant.
>
> **[2:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/advantages-and-disadvantages-of-mysql?u=76281980&t=159)** The advantages of MySQL should make you confident that it's a useful tool for learning how to use a database, as well as a practical database solution in its own right.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (13), find (1), make (1)
> **Env Vars:** dbms (3), sql (3)
> **Code Keywords:** for. (1), self (1), require (1)
> **Definitions:** means that (2)
> **Exercise Files:** source code (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Exploring MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=0)** - [Instructor] In this course, we'll be using the Workbench to interact with our MySQL databases.
>
> **[0:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=5)** The Workbench is a powerful SQL editor and database tool that provides graphical ways of interacting with databases, tables, and other MySQL features that we would otherwise have to use the command line for.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=17)** However, the Workbench requires a connection to the database itself to operate.
>
> **[0:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=22)** Depending on your exact setup, the Workbench might already have a connection to your local database.
>
> **[0:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=26)** But if you're using MySQL on a remote server or if you installed the server and Workbench separately, you might need to set up the connection manually.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=34)** And to do that, you can just click this plus button here, (loud chiming) and enter your Hostname, Username and Password for the MySQL server you want to connect to.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=47)** But if you follow the install instructions earlier in this course, you should already have a connection to your local MySQL instance.
>
> **[0:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=55)** You double click on that, (loud chiming) it may prompt you for your password.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=59)** And if so, just enter it and hit Okay, and then you'll be dropped into the Workbench home screen here.
>
> **[1:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=67)** I'll quickly run through what you're seeing on the screen, although the Workbench has a lot of functionality that I won't have time to touch on in this video.
>
> **[1:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=75)** In this center of the screen is the query window, where you can write SQL statements, and the buttons along the top of the screen allow you to execute all or part of a statement, save or load a statement, or modify the look of a query.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=87)** When the query is run, the output will appear in a grid view in the bottom half of the screen like so.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=93)** And below that is the output pane that shows the results of the query in terms of how many rows it was returned or if there were any error messages.
>
> **[1:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=102)** It will also shows you the text of the query.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=106)** And there's a tabbed view here that allows you to switch between the results of multiple queries.
>
> **[1:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=115)** If you want to modify the look of the workbench you can go to View and Panels, and you may want to hide the output area or there is also a secondary sidebar that might appear on a default installation.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=127)** You can hide that.
>
> **[2:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=129)** I prefer to hide the secondary sidebar.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=132)** On the left side of the screen is the navigator pane and on top here, it shows you all the loaded databases.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=138)** In this case, this is the default Sakila database that was installed with the MySQL samples and examples.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=145)** And if you click on something here in the bottom half of the pane, it shows some information about the selected item.
>
> **[2:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=152)** This is a table, so it shows the table's columns in the information view here.
>
> **[2:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=157)** If you change from the schema tab to the administration tab it provides you some tools for managing your MySQL Server.
>
> **[2:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=164)** We won't cover that in this course.
>
> **[2:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=166)** Most of this course is focused on using the Workbench, so you'll learn a lot more about it as you work through the remaining videos.
>
> **[2:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/exploring-mysql-workbench?u=76281980&t=171)** For now, you should know enough to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (7)
> **Code Keywords:** for. (1), switch (1), case, (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** setup (1), set up (1), install (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### MySQL data types: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=0)** - [Instructor] Every piece of data stored in a MySQL database has a type, whether numeric, text, date, or something else.
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=8)** The type that you assign to a piece of data impacts what you can do with that data.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=12)** For instance, if you want to perform math on a piece of data, assigning into numeric data type allows you to use the mathematical functions during queries.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=20)** If the data consists of text, then a string or text data type would be the most suitable.
>
> **[0:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=26)** Choosing a precise data type also helps keep your database from growing too large, and it helps speed up queries.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=32)** For most smaller databases, these effects won't be very noticeable.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=36)** But accurate typing is a good habit to get into because the effects on large databases can be very significant.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=42)** MySQL has a few data types that can be roughly divided into the following categories: Numeric, string and text, date/time, and everything else.
>
> **[0:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=52)** Numeric data types are further subdivided into integer types, fixed-point numbers, and floating point numbers.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=59)** Integers are the simplest numeric data type used for storing whole numbers, that is numbers without a decimal point.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=66)** The maximum storable value depends on the exact integer data type, starting with TINYINT, which takes up only one bite of storage and can store value from 0 to 255 or from -128 to 127 if the integer is signed, meaning that it can take negative values as well as positive ones.
>
> **[1:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=84)** Each subsequent integer type takes up more storage but increases the maximum value that can be stored.
>
> **[1:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=89)** A BIGINT takes up eight times the storage space of a TINYINT no matter what the actual value being stored is.
>
> **[1:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=96)** So you can imagine the impact of choosing BIGINT for every number in a giant database.
>
> **[1:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=101)** On the other hand, it's not always possible to predict the exact numeric range you'll need for a piece of data.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=106)** Using the default INT data type is usually a safe choice.
>
> **[1:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=110)** Numbers with decimals come in two flavors in MySQL, fixed point and floating point the fixed point data types, DECIMAL and NUMERIC are identical in MySQL.
>
> **[1:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=119)** They're assigned with a precision, the number of significant digits that the data will store before the decimal, and a scale, which is the number of places stored after the decimal.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=127)** For example, you might use temp DECIMAL 3, 1 to store a temperature from a medical thermometer.
>
> **[2:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=133)** This allows values from -999.9 to 999.9, more than enough to cover any range of body temperatures.
>
> **[2:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=142)** When you do math with fixed point numbers, the result will always be exactly accurate.
>
> **[2:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=147)** That sounds intuitive, but it's actually not the case with the other way of storing real numbers in MySQL, floats.
>
> **[2:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=154)** FLOAT is short for a floating point number.
>
> **[2:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=156)** In other words, the decimal floats around allowing for more numbers after the decimal in one row of a table and less in the next.
>
> **[2:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=163)** With fixed point numbers like decimal, the number of decimal values is literally fixed, it cannot change without altering the whole table.
>
> **[2:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=171)** Because of the way that floating point numbers are stored in computer memory, they're never stored as precise values.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=177)** Unlike with a decimal, you don't need to know exactly how many significant figures the numbers you're storing will have, but the price that you pay for this is that the results when you do math with floats will not be exactly accurate.
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=189)** To demonstrate, I'll create a math_test table here in the default "world" database, set that as default, and I'll assign a decimal with a precision of 4 and a scale of 2, and a second identical decimal and then two floating point numbers.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=208)** Now, I will add a row with some decimal values.
>
> **[3:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=213)** So I'll INSERT INTO math_test VALUES 1.5 and 1.7 for the decimals, and 2.5 and 2.7 for the floats.
>
> **[3:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=227)** Now, if I run a query that adds the decimal values together, the results look like what you'd expect.
>
> **[3:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=232)** (keyboard keys clicking) I'm adding 1.5 to 1.7, so the result is 3.2.
>
> **[4:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=242)** The extra zero on the end is because I created my decimal value to have two decimal points.
>
> **[4:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=247)** Now, if I run an identical query with my floating point values, I'm adding 2.5 to 2.7, so you'd expect the result to be 5.2, and what you get instead with floats is 5.2 plus a very small fraction starting way down in the billionth place.
>
> **[4:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=266)** Now, this is the downside of using floats.
>
> **[4:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=268)** And what's worse is that this lack of precision will be inconsistent across platforms since it's determined in part by the computer and the OS that it's run on.
>
> **[4:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=277)** It's important to understand the difference between decimals and floats in MySQL.
>
> **[4:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=282)** Decimals are best used when precision is required and where the number of significant figures can be accurately predicted like in many business applications.
>
> **[4:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=290)** Floating point numbers, on the other hand, are valuable where the number of significant figures is hard to predict or where the lack of precision can be accounted for in other ways, for example, with scientific data.
>
> **[5:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-1?u=76281980&t=300)** And if you don't need decimal values at all, there's always the simple old-fashioned integer.

> [!info]- Semantic Content
>
> **Versions:** 999.9 (2), 1.5 (2), 1.7 (2), 2.5 (2), 2.7 (2)
> **Env Vars:** tinyint (2), bigint (2), decimal (2), int (1), numeric (1)
> **CLI Commands:** mysql (6)
> **Code Keywords:** type, (2), else. (2), default, (1)
> **Analogies:** for example (2), for instance (1), imagine (1)
> **Definitions:** is a  (1), short for (1), in other words (1)
> **Code Identifiers:** math_test (2)
> **SQL:** insert into (1)

#### MySQL data types: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=0)** - [Instructor] In most databases, storing numbers alone won't cut it.
>
> **[0:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=4)** You'll want to store some text as well.
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=6)** Just like with numeric data types, there are several different ways of storing strings and text.
>
> **[0:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=11)** The most common ways of storing text are with the CAR and VARCHAR data types.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=15)** The maximum length for any CHAR is 30 characters.
>
> **[0:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=19)** When you add data to a CHAR field it'll be padded with extra spaces so that this total storage space is always the same, usually one byte per character, depending on the language and character set your database is using.
>
> **[0:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=30)** Those padded spaces are hidden whenever the CHAR is retrieved, so you won't see them, but the consistency of storage is one good reason to use CHAR.
>
> **[0:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=38)** The max length of any VARCHAR is 65,535 characters, which is also the max length of any table row shared among all of its columns.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=47)** VARCHAR stands for variable length character, and unlike CHAR will scale their storage requirements based on the actual size of the values being stored with an extra byte or two as overhead and they won't store any padding spaces.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=61)** In both cases, you'll declare a maximum length in characters for each field when you create the table.
>
> **[1:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=67)** So take these columns, for instance.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=69)** The best practice is to use CHAR when you know exactly how long the data will be, such as my zip code example here.
>
> **[1:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=75)** In the US, zip codes are either five or nine digits long.
>
> **[1:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=79)** Addresses, on the other hand, are much more variable, and you'll need to account for this when designing your columns.
>
> **[1:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=84)** Some people might see this and decide that since VARCHARs will scale automatically with the data they store, they might as well declare all their VARCHAR is absurdly long and not go through the trouble of defining their data requirements.
>
> **[1:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=97)** MySQL absolutely allows this.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=100)** However, a full VARCHAR 65535 is 64 kilobits in size.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=106)** Imagine if through some accident or malice, a table had tens of thousands or millions of full rows added, that's effectively a denial of service attack on your database.
>
> **[1:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=115)** Best practice is to think about your expected data size, add a generous padding, and then make your VARCAR that length instead.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=122)** CHAR and VARCHAR have corresponding BINDARY and VARBINARY data types that store strings as strings of bytes rather than strings of characters.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=132)** This means that they'll be sorted according to their numeric binary value instead of alphabetically.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=138)** Generally speaking, you should store human readable text as CHAR or VARCHAR, and machine readable text as BINARY or VARBINARY.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=146)** For very large amounts of text, MySQL supports the BLOB and TEXT types.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=151)** These are roughly equivalent to VARBINARY and VARCHAR in the way that they're stored and used, except that they allow for much larger strings.
>
> **[2:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=159)** Like ENT you can declare anything from tiny BLOB and tiny TEXT, maximum length 256 bytes, to long BLOB and long TEXT, maximum length four gigabytes.
>
> **[2:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=170)** These variable types are useful if you need to store very long strings in your database, which is best done carefully.
>
> **[2:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=176)** Full discussion of how best to use BLOB and TEXT are beyond the scope of this course.
>
> **[3:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=180)** For most databases, CHAR and VARCHAR will be the most common ways to store text.
>
> **[3:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=185)** While you can record the date or time in a table with text, MySQL has several purpose-built date and time data types.
>
> **[3:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=193)** These data types will allow you to compare dates and times, automatically add or change dates and times, and keep your time measurements consistent throughout your database.
>
> **[3:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=202)** The date data type stores the year, month, and day in the format of four-character year, two-character month, two-character day.
>
> **[3:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=209)** Date time is similar but adds hours, minutes, seconds, and fractions of a second in the format two-character hour, two-character minute, two-character second, and then a period and a fraction of a second that supports precision down to the microsecond.
>
> **[3:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=225)** Timestamp is similar to date time in that it stores date and time values in the same format, but it has some different behaviors.
>
> **[3:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=232)** Notably, it's converted between UTC and the databases configured time zone every time it is updated and selected.
>
> **[3:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=239)** This means that it's most useful for recording the timing of events that occur in the database itself, like when records are added or changed.
>
> **[4:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=246)** Storing static dates and times should be reserved for date or date time.
>
> **[4:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=251)** There are a few other less common data types that might appear in a database you're using.
>
> **[4:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=256)** BOOLEAN is used to store true and false values.
>
> **[4:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=259)** It's actually just a renamed TINYINT where zero equals false and one equals true.
>
> **[4:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=264)** SET and ENUM both define a list of acceptable values at table creation, and any data in those fields must come from that list.
>
> **[4:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=272)** A SET allows for multiple valid values and ENUM allows for only one.
>
> **[4:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=277)** BIT allows for the storage of binary numbers.
>
> **[4:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=280)** For example, 1101 could be stored in a BIT three to represent the value 13.
>
> **[4:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=286)** JSON allows for the optimized storage of valid JSON data files.
>
> **[4:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=291)** Finally, there are a number of spatial data types for storing geographic information systems or GIS data form maps.
>
> **[4:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=298)** It's worth taking some time to mindfully choose the correct data types for your tables.
>
> **[5:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/mysql-data-types-part-2?u=76281980&t=302)** It's far easier to do when designing a table or database than trying to change when the database is already full of data.

> [!info]- Semantic Content
>
> **Env Vars:** varchar (9), char (9), blob (4), text (4), varbinary (3)
> **SQL:** varchar (9), boolean (1)
> **Analogies:** just like (1), for instance (1), such as (1), imagine (1), similar to (1)
> **Code Keywords:** enum (2), this. (1), static (1), finally, (1)
> **CLI Commands:** mysql (3), make (1)
> **Definitions:** means that (2), stands for (1)
> **Best Practices:** best practice (2)
> **Prerequisites:** you'll need (1)

#### Challenge: Explore the built-in databases
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=0)** - [Instructor] In this challenge, you'll be exploring the built-in MySQL tutorial databases.
>
> **[0:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=11)** If you installed the default installation of the MySQL Community Edition, you should see the world and Sakila databases in the Workbench Navigator pane.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=20)** See if you can explore the contents of those databases and get a feel for navigating in the workbench, and see how the example data fits together.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=27)** Specifically, try to select data from at least one table, and to view the structure of one other table.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-explore-the-built-in-databases?u=76281980&t=34)** Be careful not to accidentally drop any tables or databases.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Explore the built-in databases
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=0)** - [Narrator] To view the contents of any database, also called schemas in MySQL, click the arrow to the left of the database name.
>
> **[0:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=14)** You'll then see a list of contents separated by type, tables, views, stored procedures, and functions.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=21)** Views, stored procedures, and functions are beyond the scope of this course, although you can view them the same way that you view tables.
>
> **[0:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=28)** To view the contents of a table, we'll click the arrow next to the Tables list to expand the full list of tables.
>
> **[0:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=35)** And then right-click, and choose Select Rows, Limit 1,000.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=39)** You can also click the little grid icon that appears when you mouse over the table.
>
> **[0:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=43)** This gives you exactly the same data.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=45)** Viewing the data with a limit is actually a great way to learn about the contents of a table.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=49)** There's no need to load the entire contents, which could theoretically be enormous and take a long time to load.
>
> **[0:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=55)** Selecting just the first 1,000 rows gives you a very good idea of the table structure and contents and is much, much faster.
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=62)** To view the structure of a table, you can right-click on the table and go to Table Inspector.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=66)** This gives you a quick summary of the table, its number of rows, its size on the disk, location on the disk, and so forth.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=73)** You can also see the table columns, indexes, triggers, and other table information.
>
> **[1:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=79)** Or you can click on the little wrench icon that appears when you mouse over a table, and that brings up the graphical table editor.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=87)** If you make changes here to the table name or to any of the columns, you can apply them as an alter table statement.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=94)** Right now, there's no need to make any changes.
>
> **[1:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-explore-the-built-in-databases?u=76281980&t=96)** But later in this course, we'll learn how to create and alter tables.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **CLI Commands:** make (2), mysql (1)
> **Code Keywords:** type, (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Creating Tables

#### Create a database
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=0)** - Now that we've discussed some database theory and you understand some of the foundations of MySQL, let's get started making a database.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=7)** I've started up the MySQL Workbench and I've connected it to my MySQL Instance.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=12)** Now, assuming you completed the standard installation of the MySQL Community Edition you should see the three existing databases under the left-hand navigator pane.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=20)** Remember that in MySQL, the term schema and database are interchangeable for all purposes.
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=25)** So I'll get started creating a database.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=27)** The nice thing about the MySQL, Workbench, instead of trying to use MySQL, purely through the command line, is that there are two ways of doing almost everything.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=36)** I can use the built-in Wizards to create my database or I can write the SQL statement myself.
>
> **[0:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=40)** To start with, I'll use the Wizard.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=42)** So I'll click the new schema button and this brings up a new tab and I'll give it the name movies.
>
> **[0:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=48)** The only other options are to change the Character Set and Coalition, which can be left to default.
>
> **[0:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=53)** So I'll click the apply button and this brings up a new window that shows the actual SQL statement that the workbench is going to execute on my behalf.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=61)** And to actually apply it, I choose to click Apply.
>
> **[1:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=65)** And it says the script was successfully applied, and in the output pane below we can see that the change was applied successfully.
>
> **[1:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=72)** And then finally, in the navigator pane, there is now a movies database.
>
> **[1:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=77)** So I'll click finish there.
>
> **[1:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=78)** And now I'm going to drop this database so I can create it manually with an SQL statement.
>
> **[1:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=83)** And I'll right click on movies and click drop schema.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=87)** Now, as always, be very careful when trying to drop anything in MySQL.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=91)** So I'm going to review the SQL first and just verify that yes I do want to drop database movies.
>
> **[1:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=97)** So click Execute and movies is gone.
>
> **[1:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=102)** And now I'm going to open up a new SQL tab.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=106)** And to create the database movies, all I need to type is create database movies.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=112)** I could also type create schema movies, it would have the same effect.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=116)** So I click the execute button, and in the output pane it says Create Database One Row Affected, that's usually a good sign.
>
> **[2:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=124)** There's no movies database under the navigator pane yet.
>
> **[2:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=126)** Sometimes you need to right click and refresh all before it shows up.
>
> **[2:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-database?u=76281980&t=130)** And there is my movies database.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (8)
> **Env Vars:** sql (5)
> **Code Keywords:** let (1), default. (1), finally, (1)
> **Tools:** command line (1)
> **UI Navigation:** click on (1)
> **Speakers:** - now (1)

#### Create a table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=0)** - [Narrator] Now that my movie's database has been created, I need to create a table to actually hold the data.
>
> **[0:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=5)** In order to best demonstrate the elements comprising a table, I'll use the workbench's graphical method of table creation.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=12)** First, I'll set the movie's database as the default schema.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=15)** This will ensure that all of my SQL statements apply automatically to the movie's database.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=21)** That expanded the movie's database, and you can see that it has no contents.
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=25)** So, I'm going to right-click on tables and click create table.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=29)** Let's open a new tab in the main view with all the options for table creation.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=34)** Before I go any farther, I need to decide what data I'm going to be storing in this table.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=39)** I call the database movies, so for the sake of example, I'm going to create a table to store a very basic movie's dataset.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=47)** This spreadsheet shows the data I want the table to store.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=50)** It's a list of 50 fictional movies, along with their genre, release year, director, studio, and critic rating.
>
> **[0:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=57)** Back in the workbench, I'll give my table a name, movies basic.
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=62)** The schema is movies, which is correct, and the character set, collation, and engine can all be left at default.
>
> **[1:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=70)** The differences between these settings are beyond the scope of this course.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=74)** I don't feel they need to add any comments, so I will add my first column, which I want to be an ID column.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=80)** I'll double-click under column name, and notice the workbench has assumed that my first column will be an ID column and assigned an appropriate name.
>
> **[1:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=89)** I'm just going to shorten it to ID.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=91)** The workbench has also correctly assumed that I want my ID column to be an integer, since it will always be whole numbers.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=98)** Next comes a set of checkboxes that enable, or disable certain MySQL features for this particular column.
>
> **[1:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=104)** I'll go through these one at a time.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=106)** PK stands for primary key, which I'll explain in detail later in the course, but it means that every row in this table must have a unique value in this column, and it will be used to identify that row in queries.
>
> **[1:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=118)** I'll discuss primary keys in more detail elsewhere in the course.
>
> **[2:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=123)** Not null means the column cannot contain null values.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=127)** Essentially, this means that the column cannot be empty.
>
> **[2:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=129)** Null values are different than zeros or empty strings, and MySQL treats them in special ways that I'll discuss later in the course.
>
> **[2:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=137)** The next flag is unique.
>
> **[2:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=139)** I do want my ID column to contain only unique values, but because it's a primary key, they're already going to be unique already.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=146)** The next field is B for binary.
>
> **[2:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=149)** This flag should be checked if the column will contain binary data.
>
> **[2:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=152)** Binary data is treated differently than non-binary data for sorting and collation.
>
> **[2:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=157)** Unsigned means that the data, if it contains numbers, cannot be negative.
>
> **[2:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=161)** This gives a higher maximum value at the cost of all of the values needing to be positive.
>
> **[2:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=166)** Zero fill will add zeros to pad out the column's value to the column's maximum size when it's displayed.
>
> **[2:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=173)** This doesn't affect how the values are stored only when they're read from the database.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=177)** Auto increment tells MySQL to automatically generate a unique value for this column.
>
> **[3:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=183)** These unique values will start at one and increment every time a row is added.
>
> **[3:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=187)** This feature is especially handy for ID columns because it guarantees that the value in the column will be unique.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=192)** The final flag is called generated, which lets users supply an expression to automatically generate data for this column.
>
> **[3:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=199)** For my ID column, MySQL automatically checked primary key and not null, which is exactly what I want.
>
> **[3:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=206)** I'm also going to enable auto increment for this column.
>
> **[3:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=209)** I don't need to check unique because it's the primary key.
>
> **[3:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=212)** I'm not storing any binary data.
>
> **[3:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=214)** I don't care if it's signed and I don't need zero fill and I'm already generating a value with auto increment, so I'm going to leave all the other flags unchecked.
>
> **[3:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=223)** So, that's one column down.
>
> **[3:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=225)** The next column is the title.
>
> **[3:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=228)** Some movies have large titles, so I'll create that as a Varkar 100.
>
> **[3:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=234)** I don't need any flags for that, so I'll just go to the next column, which is genre.
>
> **[4:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=242)** Varkar 20 should be long enough.
>
> **[4:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=244)** After that is release year and years are always whole numbers, so I can make that an integer.
>
> **[4:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=251)** Notice how I used an underscore instead of a space in release year.
>
> **[4:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=255)** MySQL does actually support spaces in column names, but it will require that you enclose the column name in quotes every time you use it in a statement.
>
> **[4:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=264)** That's a lot of extra work, so I'm going to avoid it by using an underscore.
>
> **[4:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=270)** Next up is director, which is a name.
>
> **[4:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=274)** Varkar 40 should be sufficient.
>
> **[4:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=277)** And studio, I'll call Varkar 30.
>
> **[4:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=282)** Finally comes critic rating.
>
> **[4:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=285)** And this is, all these values are numeric, and some of them have a decimal point.
>
> **[4:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=290)** And they're always out of 10 with only at most one decimal point, so I will call this decimal to one.
>
> **[4:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=298)** And I'll also give that a default value of zero.
>
> **[5:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=301)** I'll leave all the other defaults empty, which means that they will be null by default, except for the ID column, which will be given a default value with the auto increment flag.
>
> **[5:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=312)** My dataset is simple enough that I can take in the whole thing at a glance.
>
> **[5:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=316)** If this were thousands or millions of rows instead of 50, you might have to do some further investigation into the nature of the data to make sure that these columns are created correctly.
>
> **[5:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=325)** For instance, making sure your titles aren't too long, understanding the nature of all the numerical values, and so forth.
>
> **[5:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=334)** Now that I've defined my columns, I can create the table.
>
> **[5:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=336)** So, I'll click apply.
>
> **[5:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=338)** Your new window will pop up with the SQL statement that's going to be applied to the database.
>
> **[5:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=343)** And I will click apply again, and that was executed successfully.
>
> **[5:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/create-a-table?u=76281980&t=345)** And there is now a movies underscore basic table in the movies database.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (5), make (2)
> **Definitions:** means that (4), stands for (1), is called (1), is a  (1)
> **Code Keywords:** let (1), default. (1), require (1), default, (1)
> **UI Navigation:** right-click (1), double-click (1), go to (1)
> **Env Vars:** sql (2)
> **Cross-References:** later in (2)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Use CREATE and ALTER to define a table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=0)** - [Instructor] Although the MySQL Workbench has a fully featured graphical interface tool for creating and modifying tables, there's value in understanding the raw SQL statements that those tools generate.
>
> **[0:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=11)** To begin with, I'm going to drop the existing movies_basic table.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=16)** This will instantly and irreversibly delete it from the database, so I'm going to click Review SQL, just to make sure I'm doing what I intend.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=24)** And I do want to drop the movies_basic table from the movies database, so I'll click execute and that table is gone.
>
> **[0:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=31)** Instead of opening the Create Table screen, I'm going to use this new blank SQL tab.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=36)** I want to recreate the movies_basic table using the Create Table statement.
>
> **[0:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=41)** So I'm going to start with Create Table, movies_basic and then with an open parentheses I'm going to start defining my columns.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=49)** I need to include their name, their data type and any column flags that I want to be enabled.
>
> **[0:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=56)** So I want to start with my ID column, which will be an integer.
>
> **[1:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=60)** And I want it to be my primary key, I want it to be not null, and I want it to auto increment.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=68)** Make sure to use a comma to separate each of your columns.
>
> **[1:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=72)** The next one is title, which is a VARCHAR 100, genre is VARCHAR 20, release_year is an integer, director is VARCHAR 40, and studio is a VARCHAR 30.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=99)** And finally, critics_rating is a decimal with a precision of two and a scale of one and a default value of zero.
>
> **[1:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=109)** And I will close the parentheses since I'm done listing my columns.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=112)** And then I will end the statement with a semicolon and click execute.
>
> **[1:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=117)** Looks like that executed successfully.
>
> **[1:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=119)** So I will refresh the schemas view.
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=121)** And there's my movies_basic table.
>
> **[2:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=125)** Note that the white space throughout this statement in a capitalization of the MySQL keywords is optional but it's a useful convention to keep your statements easy to read and understand.
>
> **[2:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=135)** Sometimes the placement of a comma or parenthesis can completely change the effect of a statement, but not generate an error.
>
> **[2:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=143)** So it's very important to make your statements as clear as possible for your own benefit.
>
> **[2:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=148)** Now that I have an existing movies_basic table and I want to make permanent changes to that table's structure, what I'm going to do is use the Alter Table statement.
>
> **[2:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=158)** So I'm going to open a new SQL tab and start with Alter Table movies_basic.
>
> **[2:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=165)** Then I want to list all of the changes that I'm going to make, and I can make multiple changes with a single Alter Table statement.
>
> **[2:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=172)** I'm going to add a column called, box_office_gross as a float.
>
> **[2:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=179)** And I want to rename the column, critics_rating to critic_rating And as always, I'm using a comma to separate my commands here.
>
> **[3:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=190)** And finally, I want to change column, director to director VARCHAR 50 instead of 40.
>
> **[3:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=199)** And if I wanted to, I could add or rename or change additional columns with this statement, but I'm just going to end it by entering a semicolon and clicking execute.
>
> **[3:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=209)** Looks like that was successful.
>
> **[3:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=211)** So if I select the movies_basic table again, there's my box office gross.
>
> **[3:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=217)** And then also if I go into the Graphical Table Editor, you can see that the director is a VARCHAR 50 instead of a VARCHAR 40.
>
> **[3:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/use-create-and-alter-to-define-a-table?u=76281980&t=228)** I'm just going to remove this box_office_gross and change the director back.

> [!info]- Semantic Content
>
> **Code Identifiers:** movies_basic (8), critics_rating (2), box_office_gross (2), release_year (1), critic_rating (1)
> **Env Vars:** varchar (7), sql (4)
> **CLI Commands:** make (6), mysql (2)
> **SQL:** varchar (7)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** finally, (2), interface (1), delete (1)
> **UI Navigation:** select the (1)
> **Best Practices:** make sure to (1)

#### Primary keys and foreign keys
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=0)** - [Instructor] The primary key is one of the most important pieces of data in a table.
>
> **[0:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=4)** In the movie's basic table, I defined the ID column as a primary key.
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=8)** A table can only ever have one primary key, and all of the values in the primary key column must be unique because each of those values is used to refer to one specific row of data in the table.
>
> **[0:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=19)** It's worth noting that multiple columns can be added to a primary key, but there's still only one key and the combined data of the columns must be unique.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=27)** So why bother with primary keys then?
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=29)** Strictly speaking, they're not required, but it is best practice to define one for every table when that table is first created.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=36)** If you have only one table like my movie's basic table, then there's not much advantage to a primary key except for making the data rows slightly more human readable.
>
> **[0:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=44)** To demonstrate the real value of primary keys, I'm going to open the Sakila database in the MySQL workbench and expand the list of tables, and then select the contents of the customer table.
>
> **[0:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=56)** This table contains a list of customers of the fictional Sakila DVD Rental store.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=61)** Notice how, just like my movie's basic table, the first column is an ID column with incrementing numbers.
>
> **[1:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=67)** Each number refers to exactly one customer and each time any information about that customer is recorded elsewhere in the database, their unique ID will be used.
>
> **[1:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=76)** If I select the data in the rental table, you can see a list of DVD rentals.
>
> **[1:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=82)** Each rental has its own primary key, the rental ID column plus the rental date and the return date.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=87)** But notice the fourth column, it contains the same customer ID from the customer table.
>
> **[1:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=92)** If the customer table did not use primary keys or if there was no customer table and the rental table contained all data about the customer doing the renting, then it would have huge amounts of redundant data if each customer made multiple rentals.
>
> **[1:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=105)** Linking to the customer ID instead helps reduce the amount of data in the database, as well as helping to ensure data integrity by keeping each piece of data in only one place.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=114)** This is a goal of database normalization.
>
> **[1:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=117)** A primary key of one table that's linked in a different table is called a foreign key.
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=121)** If I open the table inspector for the rental table and click on the foreign keys tab, you can see that this table contains three foreign keys; the customer ID, inventory ID, and staff ID, each referring to the ID column in their respective tables.
>
> **[2:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=136)** Furthermore, the rental ID primary key from this table is a foreign key in the payment table.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=141)** Primary keys and foreign keys are an essential tool of keeping a database normalized and neat.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=146)** Later in this course, you learn how to join tables together based on their primary keys to see the data all in one place.
>
> **[2:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/primary-keys-and-foreign-keys?u=76281980&t=152)** But for now, you should have an understanding of the value of primary keys.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), select the (2), click on (1)
> **Definitions:** is a  (2), is an  (1), refers to (1), is called (1)
> **Env Vars:** dvd (2)
> **CLI Commands:** mysql (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Display database relationships with reverse engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=0)** - [Narrator] If you have only a small database then understanding the primary and foreign key relationships between tables is easy.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=7)** Only a few tables means only a few relationships.
>
> **[0:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=10)** However, if you have a larger, more complex database like the sample sequila database from MySQL, then understanding the foreign key relationships can be more tricky.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=20)** It's possible to go from table to table looking at indexes to find foreign keys but it's slow and it's easy to lose track.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=27)** Fortunately, the MySQL Workbench has a better solution, database models.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=32)** A database model contains all the structural information about the database.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=36)** It's tables, views, functions, and everything else including the relationships between tables.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=42)** It does not, however, contain any data but that's the point.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=45)** It's small and portable and it doesn't require any connection to the DBMS.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=50)** You can send a database model over email to a colleague for review for instance.
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=54)** You can build models for databases that don't exist yet, get everything just so and then create a new schema from the model with just a few clicks.
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=62)** Or you can use the MySQL Workbench to reverse engineer an existing database and make a model for you.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=68)** Let me show you how.
>
> **[1:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=70)** In the MySQL Workbench click Database and then Reverse Engineer.
>
> **[1:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=77)** This brings up a wizard that looks complex but it's actually straightforward.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=80)** This is the connection to the DBMS here and the default values are all good.
>
> **[1:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=85)** You may have to enter your route password.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=90)** And then I'm going to select the sequila database to reverse engineer.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=94)** Click Next and we'll just select All Objects and place them on the diagram.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=100)** Click Execute.
>
> **[1:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=102)** It should just take a moment and then in the background, the model is loaded.
>
> **[1:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=110)** So immediately you see two tabs.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=112)** One is this EER diagram that I'll come back to in a moment.
>
> **[1:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=115)** But this MySQL model here shows the sequila database then all of its tables, all of its views, all of its routines, users if applicable, and notes.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=132)** And if I double click a table here, it brings up a table designer, just as if this was an actual table in an active database.
>
> **[2:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=140)** And if you make changes here and save them, you can apply them from the model back to the actual database if you have permissions to do so.
>
> **[2:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=149)** One of the nicest features of the database model was on screen just a moment ago is the EER diagram.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=155)** EER stands for entity-entity relationship and it's the solution to the problem that I posed at the beginning of this video.
>
> **[2:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=164)** In this diagram tab, you can see all of the tables and their relationships neatly visualized.
>
> **[2:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=169)** If I mouse over these lines, you can see that the address ID is being used in the store table as a foreign key, for instance.
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=178)** And the address ID here also appears in the customer table.
>
> **[3:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=182)** You can rearrange these elements here in any way that makes the most sense to you but once you have this nicely laid out, you can see all of the database relationships neatly visualized and that sure beats going back and forth from table to table in different tabs.
>
> **[3:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=200)** If I go to File here, click Save Model.
>
> **[3:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=205)** This will prompt me to save the model as a MWB file.
>
> **[3:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=211)** Save that to my downloads.
>
> **[3:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=218)** And we can see this is only just a few kilobytes so we can easily send that over email to someone else for instance.
>
> **[3:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-database-relationships-with-reverse-engineering?u=76281980&t=225)** It can be very handy to have this EER diagram open in one tab and the actual database in another while writing queries since it always allows you to have a quick reference to the database close at hand.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (5), make (2), find (1)
> **Env Vars:** eer (4), dbms (2), mwb (1)
> **Analogies:** for instance (3)
> **Code Keywords:** require (1), let (1)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)

#### Load bulk data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=0)** - [Instructor] Manually entering data into a MySQL table row by row is very slow and inefficient, although it's certainly possible.
>
> **[0:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=9)** More frequently data will be inserted by some other piece of software or it'll be loaded from an existing file.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=15)** Right now, my movie's basic table is empty.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=18)** It needs some data.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=20)** Since I have some raw data and a spreadsheet already I'm going to use the MySQL Workbenches tools to automatically load bulk data.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=27)** I'll right-click on the movie's basic table and click the Table Data Import Wizard.
>
> **[0:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=33)** In the next window that shows up I'll browse for my data file which is in CSV format, and then click Next.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=39)** On the next screen you can choose which table the data should be inserted into or you can opt to let the wizard create a new table.
>
> **[0:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=46)** I don't recommend this second option, since the tools for creating a new table in the wizard aren't very robust.
>
> **[0:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=52)** I'll just use my existing movie's basic table and then click Next.
>
> **[0:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=57)** On the next screen, the wizard wants to know which column in the source data should go into which column in the table.
>
> **[1:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=63)** In this case, since the source and destination columns have the same name, it's correctly sorted them all out.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=69)** But if you need to make some adjustments you can just use the dropdown menus.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=74)** Click Next and Next to run the import and finish the wizard.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=80)** It looks like the wizard finished successfully.
>
> **[1:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=83)** I'll execute this query and there's the data in the movies basic table.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=87)** There's another way to load bulk data in the MySQL Workbench loading files containing SQL statements.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=94)** This essentially executes all the commands that the files contain in order extremely rapidly.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=100)** To demonstrate I'm going to drop the Sakila example database I'm going to click Drop schema and there's no do-overs with dropping, so I'll just review to make sure I'm doing what I expect here.
>
> **[1:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=113)** Drop database Sakila and click Execute.
>
> **[1:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=118)** Now I'm going to reload the database from raw SQL files.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=122)** I've downloaded Sakila-data SQL and Sakila-schema SQL as well as the Sakila database model from the MySQL Documentation site.
>
> **[2:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=131)** The file named Schema contains the commands that will create the structure of the database, all of its tables and views and such.
>
> **[2:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=137)** And the data file contains all the data that will fill in the schema, all formatted as insert statements.
>
> **[2:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=143)** To load these files, I'll click the Server menu in the workbench and then click Data import, and then I'll choose the import from self-contained file radio button, and I will select from my downloads folder the Sakila-schema SQL file since that contains the commands, that will create the database and the tables and such.
>
> **[2:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=167)** Then, start my import and just like that, it's done.
>
> **[2:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=172)** I'm going to refresh and there's the Sakila database with all of its tables.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=177)** But if I select from these tables, they're all empty.
>
> **[3:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=180)** So I'm going to go back over to this Import from disk tab and change the self-contained file from schema.sql to data.sql and start the import again.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=192)** It took a little bit longer but it looks like it was successful.
>
> **[3:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=195)** So I will click this button to run some queries.
>
> **[3:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=200)** Gets the category and film, and actor tables and you can see that the data's all present.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=208)** If you're comfortable writing external code or changing the DBMS configuration, there are many other ways of loading bulk data beyond what I've showed in this video.
>
> **[3:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=216)** Probably the most common is writing other software that interacts with a DBMS and inserts data programmatically but there are other SQL solutions such as the LOAD DATA statement.
>
> **[3:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/load-bulk-data?u=76281980&t=226)** Regardless, it's easy to load bulk data in MySQL.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), dbms (2), csv (1), load (1), data (1)
> **CLI Commands:** mysql (5), make (2)
> **Code Keywords:** self (2), let (1), case, (1), import, (1)
> **File Paths:** schema.sql (1), data.sql (1)
> **UI Navigation:** right-click (1), dropdown (1)
> **Analogies:** just like (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a normalized movies table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=0)** - [Instructor] In this challenge, your goal is to create a new set of tables that will contain a normalized version of the movie's dataset.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=13)** Compared to the movie's basic table, these normalized tables will contain very similar data, but they've been restructured to reduce data redundancy and increase data integrity.
>
> **[0:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=23)** Instead of one table, there'll be five tables, each with a primary key and potentially one or more foreign keys.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=29)** Using the workbench and the movies_full data set in the exercise files, create the tables and their relationships and then populate all the tables using the Import Wizard in the workbench.
>
> **[0:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=40)** Here's some hints.
>
> **[0:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=41)** First of all, notice that all the tables have an ID column which may be referenced in a different table.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=45)** This is the primary key/foreign key relationship.
>
> **[0:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=48)** Second, if foreign key constraints exist, you can only add data that refers to a specific foreign key ID if that ID already exists in the table being referred to.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-create-a-normalized-movies-table?u=76281980&t=59)** In other words, the order you import data matters.

> [!info]- Semantic Content
>
> **Code Identifiers:** movies_full (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a normalized movies table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=0)** - [Instructor] This is a tough challenge and there are a number of ways to go about solving it.
>
> **[0:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=10)** I'm going to illustrate one way, although if you solved it in some other fashion, that's great.
>
> **[0:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=14)** If you had trouble, make sure that you follow along and end up with a similar data set to what I do.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=18)** I'm going to be using this data later in the course.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=21)** The first step to solve this challenge is to create the tables necessary to contain the five sets of data in the movies full exercise files.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=29)** You can start in any order, but it looks like the titles file has the most relationship with the rest of the data, so I'll start with that one.
>
> **[0:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=35)** So I'm going to create table titles.
>
> **[0:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=38)** I'm going to create table titles.
>
> **[0:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=40)** In the first column, it's going to be the ID column, going to be an integer.
>
> **[0:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=43)** It's going to be my primary key, which means I want it not null and auto increment as well.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=50)** Now I'm going to create a very similar column for all five tables.
>
> **[0:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=53)** So I'm just going to copy that.
>
> **[0:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=55)** And then I'm going to create title as a varchar 100, create the genre ID column.
>
> **[1:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=64)** This is going to be a foreign key that refers to the ID column of the genre table.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=68)** So that's going to be an integer.
>
> **[1:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=70)** Release year is also going to be an integer, but years are usually four digits long, so I can make that a smallint.
>
> **[1:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=77)** The director ID and studio ID are both going to be integers.
>
> **[1:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=84)** Those are also going to be foreign keys to their respective tables.
>
> **[1:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=87)** So I'm going to execute that.
>
> **[1:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=89)** Looks good.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=90)** Refresh.
>
> **[1:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=92)** And there's my titles table.
>
> **[1:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=94)** The next table I'm going to create is genre.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=99)** This is also going to have an ID column.
>
> **[1:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=101)** The only other column I need is the genre, which is going to be a varchar 25.
>
> **[1:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=110)** Refresh.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=111)** Looks good.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=112)** Next table is director.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=116)** Starting with the ID column and ending with the director name as a varchar 40.
>
> **[2:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=125)** Looks good there and there, alright.
>
> **[2:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=129)** Next I'm going to create table studio, starting with the ID column and the studio name as a varchar 30 and the city as a varchar 20.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=145)** Refresh.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=146)** Looks good.
>
> **[2:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=148)** Last but not least, the critic rating table.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=151)** Starting with the ID column and the titles ID, this is going to be a foreign key to the titles table, and the critics rating as a decimal.
>
> **[2:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=164)** The precision of two and a scale of one.
>
> **[2:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=170)** Looks good.
>
> **[2:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=171)** Now that I've created all five tables, I'm going to alter the titles table and the critic rating table to add the foreign key constraints.
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=178)** Now, I could have added these when the tables were created, but just in interest of making a good example, I'm going to use the alter table syntax instead.
>
> **[3:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=187)** So I'm going to start with alter table titles and add the constraint genre ID FK, or genre ID foreign key, 'cause this is going to be a foreign key on the genre ID column in the titles table that refers to the genre table and its ID column.
>
> **[3:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=212)** I'm going to copy this 'cause I need to add two more foreign keys.
>
> **[3:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=216)** Next one is the director ID foreign key.
>
> **[3:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=221)** It's going to be on the director ID column and refer to the director table.
>
> **[3:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=228)** Finally, the studio ID foreign key on the studio ID column referring to the studio table.
>
> **[3:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=239)** And now with a semicolon.
>
> **[4:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=242)** Looks good.
>
> **[4:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=243)** Let's just check the table inspector.
>
> **[4:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=245)** And there's my foreign keys.
>
> **[4:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=247)** I also need to do something very similar to the critic rating table.
>
> **[4:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=254)** Going to add a constraint.
>
> **[4:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=258)** The titles ID foreign key on the titles ID column referring to the titles table.
>
> **[4:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=271)** Check the foreign key tab.
>
> **[4:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=273)** Looking good.
>
> **[4:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=275)** Now if I refresh this, you can see that the ID column here is listed as a foreign key in the critic rating table.
>
> **[4:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=283)** Finally, I'm going to load the data into each table using the import wizard.
>
> **[4:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=288)** Now, there's one important thing to note about importing data into a table structure with foreign keys.
>
> **[4:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=293)** The data that the foreign key refers to must already exist before you can add data to a foreign key column.
>
> **[5:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=300)** So for instance, in my critic rating table, there's a foreign key that refers to the ID column in the titles table.
>
> **[5:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=306)** If the titles table is empty, then any attempt to add row to the critic rating table will fail with a foreign key constraint error.
>
> **[5:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=314)** Essentially, the primary key value that is supposed to match to the foreign key doesn't exist yet, and that's not allowed.
>
> **[5:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=320)** So in this specific case, I need to import data into the director, genre, and studio tables first, and then the titles table, which has foreign keys that refer to those tables, and then finally to the critic rating table.
>
> **[5:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=334)** So start with director, import the data from the movies full data set.
>
> **[5:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=341)** And this should be fairly straightforward.
>
> **[5:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=344)** All of the column names match.
>
> **[5:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=346)** So I'll just click next a bunch of times.
>
> **[5:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=350)** Looks promising.
>
> **[5:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=351)** I'll just go ahead and select that.
>
> **[5:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=353)** Looking good.
>
> **[5:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=354)** Same thing to the genre ID.
>
> **[5:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=359)** Next, next.
>
> **[6:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=360)** Columns look good.
>
> **[6:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=362)** Next, next, and finish.
>
> **[6:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=367)** There's that.
>
> **[6:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=369)** Then I will import into the studio table, select the studio dataset.
>
> **[6:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=376)** Columns look good.
>
> **[6:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=380)** Select the data just to check and that looks good.
>
> **[6:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=382)** So now I can do the titles table.
>
> **[6:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=386)** Import from the titles CSV, check the columns.
>
> **[6:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=391)** Looks good.
>
> **[6:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=398)** All right, that looks promising.
>
> **[6:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=400)** Very last thing is to import the critic rating data.
>
> **[6:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=412)** All right, that data's imported.
>
> **[6:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=414)** We didn't get any foreign key constraint errors.
>
> **[6:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=416)** That's a good sign.
>
> **[6:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-create-a-normalized-movies-table?u=76281980&t=417)** So now that we have five tables with their proper foreign key constraints and all the data's loaded, the challenge is complete.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), this, (1), case, (1), match. (1)
> **Definitions:** refers to (2), is a  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Env Vars:** csv (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)


### 4. Selecting Data

#### The basics of SELECT
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=0)** - [Narrator] The most basic way to interact with data in a MySQL database is to select it.
>
> **[0:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=5)** Select statements are often called queries and they display data from tables, according to the filters and constraints listed in the query.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=13)** When you're interacting with a database, it's fairly common that select statements will be the ones that you'll have to manually write most often.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=20)** You only have to create or alter tables occasionally, and often changing or deleting data will be done programmatically.
>
> **[0:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=28)** But there's a lot of value in knowing the syntax for select statement specifically.
>
> **[0:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=33)** The most basic select query is available right from the Workbench GUI.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=37)** If you mouse over a table and click the grid icon, it will select every column from a table.
>
> **[0:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=43)** And just like with create table and alter table, the white space and capitalization doesn't matter.
>
> **[0:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=49)** So if I put that on a separate line, it gives the same result.
>
> **[0:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=52)** The star means that every column is going to be selected but I can replace the star with just a couple of columns, and if I run this query, it'll display just those couple of columns.
>
> **[1:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=64)** And these columns don't even have to be in the same order that they are in the table structure.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=68)** So if I do genre first, then genre will will be displayed first in the output.
>
> **[1:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-select?u=76281980&t=75)** And that's it for the basics of select.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (1)
> **Env Vars:** gui (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Refine SELECT queries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=0)** - [Presenter] Being able to precisely select columns in a table is an important step when using MySQL.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=7)** In this video, I'll discuss several ways of modifying your basic select queries using the keywords "limit", "distinct", "as", and "order by".
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=16)** Using Limit is a way to test the output of queries or to examine the contents of tables without loading their entire contents.
>
> **[0:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=22)** All the datasets you'll be working with in this course are orders of magnitude too small for "limit" to be really necessary, but it's best practice to use "limit" when selecting from a table unless you need to select all the data in that table.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=36)** And in fact, the MySQL Workbench will automatically limit to 1,000 rows unless that's specifically overridden.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=42)** To use "limit", add it to the end of a select statement.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=45)** So if I "LIMIT 5", that will select just the first five rows.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=50)** This is equivalent to "LIMIT 0, 5".
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=54)** The first parameter is the row to start on, row zero in this case, and the second parameter is the number of rows to select.
>
> **[1:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=61)** So if I were to "LIMIT 5, 5", then that would start on the fifth row with ID value 6 and select five rows.
>
> **[1:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=70)** If I wanted to start on the fifth row and then select the entire rest of the dataset, then I can just make this second parameter an arbitrarily large value.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=80)** The "limit" keyword is a MySQL specific break from the SQL standard, and there are various other ways of implementing this same functionality in different SQL DBMS's.
>
> **[1:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=92)** "Distinct" makes a select statement return only unique values no matter how many times those values occur in the dataset.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=100)** So if I "SELECT DISTINCT genre FROM movies_basic", then it'll return only five rows because there are only five unique values in the genre column throughout the whole table.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=114)** And if I add a second column to the query, if I just "SELECT DISTINCT genre" and "studio", then it'll actually select 26 rows.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=122)** And you can see that each genre, each studio name is shown more than once, but each genre studio combination is only shown once.
>
> **[2:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=129)** If I were to select every column using "SELECT *" for "movies_basic", then this actually just selects the entire dataset because the ID column is always unique.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=141)** Hence "distinct" is best used with a limited selection of columns.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=145)** The "as" keyword changes the appearance of column headings and the output of a select query.
>
> **[2:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=150)** This is purely cosmetic.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=151)** It doesn't actually change the selected data, just the way that the data looks.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=155)** So for instance, if I "SELECT title, genre," and "release_year FROM movies_basic", then you can see that there's no capitalization in the title.
>
> **[2:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=170)** Release year is an underscore.
>
> **[2:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=172)** It's just the same names from the actual table structure, and I can pretty it up by using "as".
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=178)** So I can "SELECT title AS", and then in quotes what I actually want the column heading to be, in this case "Title" with a capital T and "Genre" with a capital G, and "release_year" with capitals and a space instead of an underscore.
>
> **[3:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=197)** And the column values are more attractive when I execute that query.
>
> **[3:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=201)** This is especially helpful if you have a function in the select statement that would be enormous as a column heading.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=208)** Finally, you can change the order that rows are returned in a query.
>
> **[3:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=212)** Toward the end of a query, but before "limit" if you're using it, you can add "order by" and then specify a column and then specify an order, ascending or descending like so.
>
> **[3:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=221)** If I "SELECT * FROM movies_basic" and "ORDER BY genre" ascending, it will sort by the genre in alphabetical order.
>
> **[3:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=235)** If I want to display the genre in reverse alphabetical order, I can instead order by genre descending.
>
> **[4:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=242)** If you want to start by multiple columns, you can list them after "order by", and MySQL will sort the results in sequence.
>
> **[4:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=251)** So if I order by genre and release year, then the output is sorted first by adventure in alphabetical order, and then by release year from low to high.
>
> **[4:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=263)** Notice I didn't explicitly state ascending or descending at the end of the "order by" clause.
>
> **[4:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=268)** In this case, MySQL will just default to ascending.
>
> **[4:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/refine-select-queries?u=76281980&t=271)** Using these tools, you can craft a wide variety of select statements and then tweak them to suit your needs.

> [!info]- Semantic Content
>
> **Env Vars:** select (6), limit (3), sql (2), distinct (2), dbms (1)
> **SQL:** select (6), order by (1)
> **CLI Commands:** mysql (5), make (1)
> **Code Identifiers:** movies_basic (4), release_year (2)
> **Code Keywords:** case, (2), function (1), finally, (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)

#### Filter results with WHERE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=0)** - [Instructor] Frequently, the purpose of writing select statements in a production environment is to help understand the data in a database.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=7)** To that end, SQL provides a powerful way to filter the results of a query using the where keyword.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=13)** Where clause is added after the from clause and includes one or more logical expressions.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=18)** A row is only returned if that expression evaluates true.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=21)** So for example, with this query select star from movies basic, I can add where ID equals one, and that will return one row where the value of the ID column is equal to one.
>
> **[0:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=33)** MySQL has a number of different operators you can use in these expressions.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=37)** So for example, I can change this to where ID is greater than 10.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=42)** That will return 40 rows, starting with a row where the ID value is 11, or I can change this to where ID is greater than or equal to 10.
>
> **[0:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=51)** This time it returns 41 rows starting with row number 10.
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=54)** There's a special type of comparison in MySQL called like.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=59)** Like is similar to equal, so if I start with the expression where genre like children, I'm putting this in quotes because it's a string.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=68)** You can see this returns only rows where the value of the genre column is children.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=73)** But the real power of like is that it lets you use wild card characters, which are special characters that are placeholders for other groups of characters.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=81)** So for example, if I wanted to match all studios that begin with the string studio, I can use the percent wild card, or studio like, studio percent.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=98)** And if I run this query, you can see this returns rows where the studio is Studio 60.
>
> **[1:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=103)** And this is only going to match strings that begin with studio.
>
> **[1:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=107)** Essentially it's saying where studio is like studio and then any number of characters.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=112)** You can also add a wild card in front, which just says the string must contain studio.
>
> **[1:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=117)** And these wild cards can match any number of characters including zero characters.
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=121)** The underscore wild card works similarly, but it matches exactly one character.
>
> **[2:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=126)** So to find all movies that came out of the 1980s, I can use this query where release year, like 198_, and this returns rows where the movie came out in the 1980s.
>
> **[2:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=142)** Now notice that release year in this table is not a string, it's an integer.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=146)** But I've just used a string like comparison, which allows me to use a wild card.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=151)** Like is a lot slower than equals, even though it is more powerful.
>
> **[2:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=156)** So a general rule of thumb is to use equals unless you need to use a wild card.
>
> **[2:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=161)** In that case, you can use like.
>
> **[2:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=162)** With large tables, the difference in query time can be significant.
>
> **[2:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=168)** You can also use a negative to find every row that does not match the expression.
>
> **[2:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=173)** So I could change this query to where release year not like 198_.
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=178)** And this will find films that did not come out in the 1980s.
>
> **[3:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=182)** This is equivalent to the not equals operator.
>
> **[3:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=188)** MySQL statements are not limited to only one expression.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=192)** Multiple expressions can be linked together with and or or to make a more complex expression that is evaluated completely for every row.
>
> **[3:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=200)** So for example, I can select rows where genre is like drama, and critic rating is greater than six.
>
> **[3:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=212)** This is only going to return five rows, because the value of the genre column has to equal drama and the critic rating also has to be greater than six.
>
> **[3:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=222)** But if I change this and to or, then this returns 30 rows.
>
> **[3:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=229)** This is going to return every row where the critic rating is greater than six or genre is like drama.
>
> **[3:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=234)** So the only critic ratings that are lower than six, so the only rows where the critic rating is lower than six will be dramas.
>
> **[4:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=240)** And you can see this most clearly if I order by critic rating ascending.
>
> **[4:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=248)** So everything that's lower than six is a drama.
>
> **[4:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=251)** Finally, your expression can include the results of functions.
>
> **[4:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=254)** Functions in MySQL is a broad topic that deserves a course on its own, but I'll show you a very common example.
>
> **[4:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=260)** Say you wanted to find every movie title that was longer than 20 characters.
>
> **[4:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=265)** You can find the length of a value by using the length function.
>
> **[4:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=269)** So if I select star from movie's basic where length title is greater than 20, this is only going to find the longest titles in the table.
>
> **[4:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=281)** The number of characters in the title has to be more than 20 characters.
>
> **[4:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=285)** With these examples, you are now ready to filter your select statements using where, and not just select statements.
>
> **[4:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/filter-results-with-where?u=76281980&t=291)** Many types of statements in MySQL use the same where syntax and since some of them alter your data permanently, it's a good idea to get comfortable using where with select.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), mysql (5), make (1)
> **Analogies:** for example (4), similar to (1)
> **Code Keywords:** case, (1), finally, (1), function (1)
> **Definitions:** is a  (3)
> **Env Vars:** sql (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### Display data with CASE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=0)** - [Instructor] There are times when you want a query to return data that's not actually present in your table, but based on the data that's in your table.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=7)** Suppose you're using the movies_basic table and you want a query to simply return whether a movie was well reviewed or not, not the actual score.
>
> **[0:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=14)** That's possible using if and case statements.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=17)** Both if and case will return values based on expression.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=20)** These expressions use the same syntax as where clauses.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=24)** They're evaluated to either true or false.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=27)** So for the example above, I want a list of movie titles and I want to know whether they're good or bad films based on the critic rating.
>
> **[0:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=33)** So I'll replace the star in the column list with title and critic_rating.
>
> **[0:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=40)** So now I want to replace those numbers with good or bad.
>
> **[0:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=43)** So I'll remove critic rating and add if and then open parenthesis.
>
> **[0:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=48)** This is the expression that I want to evaluate.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=50)** So critic_rating greater than six, then a comma.
>
> **[0:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=56)** This is what's going to happen if it evaluates true.
>
> **[1:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=60)** It'll display the string good.
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=62)** And then this is what'll happen if that expression evaluates to false.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=66)** It'll display the string bad.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=69)** And I run this query and my numerical values were replaced with good and bad.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=74)** So if critic rating was greater than six, then it's good.
>
> **[1:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=78)** If critic rating was not greater than six, it was bad.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=81)** This is also a perfect example of when to use AS to prettify your queries.
>
> **[1:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=86)** Notice that the entire if expression got added as the column header.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=91)** So I'll just change that to AS score.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=95)** Run it again.
>
> **[1:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=96)** And you can see that that looks a lot better.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=98)** Just for good measure, I'll also add AS Title with a capital T.
>
> **[1:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=104)** Now case works similarly to if, but instead of having only one expression, you can have as many as you would like and they're evaluated one by one until one of them evaluates to true and then that result is applied to the row.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=116)** So I can replace this if statement with case and this begins the case and then I start my list of expressions.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=127)** So when critic rating is less than five, then display bad.
>
> **[2:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=134)** When critic rating is lower than eight, then display decent.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=141)** Finally, if neither of those are true, display good.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=146)** Then I can end my case statement and I'll still display that AS score, so this whole business doesn't end up as the column header.
>
> **[2:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=154)** When I run that, you can see that I now have some decents scattered among the goods and bads.
>
> **[2:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=159)** What happened here was these wins were evaluated one at a time, and if none of them evaluated true, then the else was applied.
>
> **[2:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=167)** So say the critic rating was seven, so first my SQL would evaluate when critic rating is lower than five.
>
> **[2:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=173)** Well, seven is not lower than five, so that's false.
>
> **[2:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=176)** Go to the next row.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=177)** When critic rating is lower than eight, well that's true.
>
> **[3:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=180)** Seven is lower than eight.
>
> **[3:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=181)** So then it would print decent and then go to the next row.
>
> **[3:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=184)** It would skip evaluating any other wins or the else at the end there.
>
> **[3:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/display-data-with-case?u=76281980&t=189)** Using if and case to display data in meaningful ways is a valuable technique.

> [!info]- Semantic Content
>
> **Code Identifiers:** critic_rating (2), movies_basic (1)
> **Code Keywords:** if, (1), finally, (1)
> **UI Navigation:** go to (2)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Filter movies by score
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=0)** - [Narrator] In this challenge, you'll need to design a query that will display data from the movie's basic table in a specific format.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=13)** Pay close attention to the capitalization and punctuation.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=16)** The first column should be title.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=18)** The second column released should say 20th century for any film released before the year 2000, or 21st century for any movie that came out in the year 2000 or later.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=29)** The third column should be director.
>
> **[0:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=31)** And then the fourth column, reviews, should convert the critic rating numerical value to text as follows.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=37)** If the critic rating is less than or equal to five, the query should say bad, if it's 5.1 to seven, decent, if it's 7.1 to 8.9, good, and if it's greater than or equal to nine, the query should say amazing.
>
> **[0:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-filter-movies-by-score?u=76281980&t=51)** Sort the results in reverse alphabetical order by title.

> [!info]- Semantic Content
>
> **Versions:** 5.1 (1), 7.1 (1), 8.9 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Filter movies by score
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=6)** - [Instructor] So this challenge is going to be a select statement.
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=8)** So we'll start with select, and then the first column is title, but I need to reformat it to display as title with a capital T and a colon on the end.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=20)** The next column is released, and that's going to depend on what the release year is.
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=25)** So I'll say if the release year is greater than 1999, or for that matter, I could say greater than or equal to 2000, then display 21st century, otherwise display 20th century, and I want that to be as released with a colon.
>
> **[0:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=51)** Next column is director, just with a capital and a colon.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=59)** And then the fourth and final column is the conversion from the critic rating numerical value to a text value.
>
> **[1:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=67)** And because there's multiple criteria, I need to use case.
>
> **[1:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=71)** So I'll start with case, and the first criteria is when critic rating is less than or equal to five, then display bad.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=81)** When the critic rating is greater than five, and also less than or equal to seven, then display decent.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=93)** When the critic rating is greater than seven, but it's less than nine, then display good.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=106)** And otherwise display amazing.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=111)** Then I'll end the case statement with as views.
>
> **[1:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=117)** And of course, all this white space is optional, but it makes the case statement much easier to read.
>
> **[2:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=123)** All this is going to be from movies_basic.
>
> **[2:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=126)** And finally, I need to order by title in reverse alphabetical order, so descending.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=132)** Run that query.
>
> **[2:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=134)** There's my four columns.
>
> **[2:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=136)** All the column headers look nice.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=138)** Title is in reverse alphabetical order, release date is in the 20th or 21st century, and reviews are bad, decent, good, or amazing.
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-filter-movies-by-score?u=76281980&t=146)** So this challenge is complete.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), case, (1), finally, (1)
> **Code Identifiers:** movies_basic (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)


### 5. Updating and Deleting Data

#### Add data to tables with INSERT
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=0)** - [Narrator] Although it's common to load bulk data into a table when it's first created, most data is added to tables, line by line using insert statements.
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=8)** In this video, I'll show how to write them by hand but most often, they're generated automatically by other computer programs and added into the table autonomously.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=18)** In fact, that's what the load bulk data wizard in the MySQL Workbench does.
>
> **[0:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=21)** It generates insert statements from imported data files.
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=25)** So I've got my SQL tab here and I'll start this statement with insert into movies basic.
>
> **[0:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=31)** And then I want to list the columns that I want to add data to.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=36)** If I was going to add data to all columns, I could omit this but I don't want to add any data to the ID column because I'll let the auto increment take care of that.
>
> **[0:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=45)** And if I were to omit any other columns, then they would just be added with their default values.
>
> **[0:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=51)** So I want to add to the columns title, genre, release year, director, studio and critic rating
>
> **[1:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=62)** and then I'll use the keyword values, or you can use value, they're synonymous.
>
> **[1:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=67)** Then I need to enter the actual values, separated by commas and with the text enclosed in quotes.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=74)** So I'll add "Challenge of the Emperor," an adventure film that came out in 2010 , directed by Miley Watson with a critic rating of 7.2.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=90)** End that the semicolon and execute.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=93)** Oh, that didn't work.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=95)** Looks like I forgot something.
>
> **[1:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=96)** Notice how I listed six columns but only provided five values.
>
> **[1:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=101)** Rather than adding the wrong data, my SQL throws an error because the number of values didn't match.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=106)** I will fix this by adding the studio name.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=111)** I'll execute it again and that successfully adds one row to the table.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=116)** If I select all the data from the table and scroll down, there's the 51st row, "Challenge of the Emperor."
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=121)** Insert statements are most commonly used to add just a single row since they're most commonly generated by software.
>
> **[2:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=128)** But if you want to manually enter more than one row, you can do so with a single insert statement.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=132)** All you have to do is add another set of values for the provided columns and you can do this as many times as you like.
>
> **[2:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=138)** I'm just going to add two more movies.
>
> **[2:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=140)** First is "Dishonor of Power," and then a comma, second, "Night of the Maze."
>
> **[2:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=146)** And I'll end the statement with a semicolon and click Execute.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=151)** That added two more rows.
>
> **[2:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=152)** So if I go back to this movie's basic tab and execute the select statement again, scroll all the way down and there's my two additional movies.
>
> **[2:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/add-data-to-tables-with-insert?u=76281980&t=162)** Hopefully you will never have to manually add data to tables row by row but now you understand how the process works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), match. (1)
> **Env Vars:** sql (2)
> **CLI Commands:** mysql (1)
> **Versions:** 7.2 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Update existing rows with UPDATE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=0)** - [Tutor] Once data is loaded into a MySQL table it's not set in stone.
>
> **[0:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=4)** Using an update statement, you can change the values in any row or in many rows at once.
>
> **[0:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=10)** If use update, you'll choose a table and the columns whose values you want to change and you'll also include a WHERE clause, just like in a select query to filter the rows you want to update.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=18)** So I've got an SQL tab here.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=20)** I'm going to start writing my update statement for the movie's basic table.
>
> **[0:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=23)** Suppose director Miley Watson changed their name and is now Mike Watson.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=27)** I want to replace every instance of Miley with Mike throughout the entire table.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=32)** So I'll start with the update keyword and then the name of the table, Movies_basic, and then I'll list the column I want to change and the new value I want that column to have.
>
> **[0:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=40)** So in this case, I'm going to set director = Mike Watson.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=47)** Now I could add a semicolon right here, run the query, and every single director would now be named Mike Watson.
>
> **[0:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=52)** And there's no way to undo that.
>
> **[0:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=54)** Any statement that changes or removes data, as always is best written very carefully.
>
> **[0:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=59)** And I'll definitely want to add some criteria, so this statement doesn't affect every row on the table.
>
> **[1:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=63)** Update uses the same WHERE syntax as select queries.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=66)** And so for that reason, it's a good idea to make a trial run of your update statements using a select query that uses the same WHERE clause.
>
> **[1:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=74)** So in that way, you'll know if you have a typo or logical error that means more data will get changed than you expect.
>
> **[1:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=80)** So I'm going to do that now.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=81)** I've opened a new SQL tab.
>
> **[1:23](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=83)** I'm going to select * FROM movies_basic WHERE director = Miley Watson.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=93)** I'll execute that query and that returns three titles.
>
> **[1:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=98)** And I can see at a glance at all three have Miley Watson as the director name.
>
> **[1:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=101)** So my WHERE clause looks good.
>
> **[1:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=103)** I'm just going to copy this whole thing into my update statement.
>
> **[1:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=108)** And now I know it's only going to update those three rows.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=111)** So I'm going to execute this statement, and it didn't work.
>
> **[1:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=114)** Actually, MySQL here is fine but the workbench by default does not allow update or delete statements where the WHERE clause does not contain a key value.
>
> **[2:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=123)** Since the ID column is our primary key and I didn't include that, I triggered the error.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=127)** Whether this behavior is desirable or not will depend on your circumstances.
>
> **[2:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=131)** If you can use a key in your update statement then you should ideally to reduce the possibility of changing data incorrectly.
>
> **[2:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=139)** In this case, I know that this query is going to work.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=141)** I already checked the WHERE clause, so I'm going to disable that functionality.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=145)** I'm going to go to Edit and then Preferences, SQL Editor, scroll to the bottom, and I'm going to uncheck Safe Updates and click Okay.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=155)** And I'm going to close my connection to the local instance, and reopen.
>
> **[2:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=161)** And now I should be able to run this update statement execute, and I can see in the output pane that three rows were affected.
>
> **[2:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=167)** That's a good sign.
>
> **[2:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=169)** So I'm going to go back to my query here and rerun it.
>
> **[2:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=172)** And it should select zero rows, which it did.
>
> **[2:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=176)** That's a good sign.
>
> **[2:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=177)** So I'm going to replace Miley with Mike.
>
> **[3:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=181)** And that returns those same three films from before.
>
> **[3:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=183)** Used cautiously, update statements are the best way to alter data in a table.
>
> **[3:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/update-existing-rows-with-update?u=76281980&t=188)** Double check your WHERE expressions and you should have no trouble with accidental data loss.

> [!info]- Semantic Content
>
> **Env Vars:** where (8), sql (3)
> **SQL:** where (8)
> **CLI Commands:** mysql (2), make (1)
> **Code Keywords:** case, (2), delete (1)
> **Code Identifiers:** movies_basic (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### Remove data with DELETE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=0)** - [Presenter] Delete statements are used to remove rows from a MySQL table.
>
> **[0:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=4)** Used carefully, they can actually remove all data from a table, so the best way to use a delete statement is to carefully identify the data you want to remove.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=13)** So tactically, delete statements are very simple.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=16)** I've got a new SQL tab here.
>
> **[0:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=17)** I'm going to type delete from movies basic, and I'm not going to add a semicolon just yet, because if I ran this, it would remove all the data from my table, and I definitely don't want that.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=29)** So instead, I'm going to open a new SQL tab, and I'm going to work on the select query that I'll use to isolate the data that I want to delete.
>
> **[0:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=35)** Let's say I no longer care about any movies from the era of silent films, and I want to delete those from the movie's basic database.
>
> **[0:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=42)** So "The Jazz Singer" was the first of the feature length talkies, and it came out in 1927, so I'll use that as the date to filter on the release year column, so I'll select star from movies basic, where release year is lower than 1927.
>
> **[1:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=63)** Execute this, it returns 14 rows, and you can see the date in the release year is all lower than 1927, as expected.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=73)** So I'm going to copy this where clause into my delete statement and add a semicolon, and now I will run this statement, and this should remove those same 14 rows.
>
> **[1:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=88)** I can see in the output pane, it did remove 14 rows.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=91)** That's a good sign, and I will run my select query again, and this time, instead of returning 14 rows, it returns zero, and if I select everything from movies basic, getting rid of the where clause, then it looks like all the release years are, in fact, later than 1927.
>
> **[1:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=112)** We can see that most clearly if we order by release year.
>
> **[2:01](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=121)** Some quick notes about delete, if you have an auto increment column like I do with my ID column here, numbers that are removed are not reused.
>
> **[2:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=131)** So I just deleted rows with ID one through 14.
>
> **[2:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=135)** It now starts at ID 15, but the next row that's added won't be row one again or row 14, it'll be row 54.
>
> **[2:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=145)** Frequently, this means that auto increment columns will start to look messy in tables that are in production for a long time, but this functionality is important for maintaining data integrity.
>
> **[2:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=155)** If you need more control over the exact value in an auto increment column, then you can add it manually rather than auto increment it, or you can also change the next auto increment value by using alter table movies basic auto increment equals one.
>
> **[2:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=175)** So this will change it so the next row that I add will have a one as the value in the ID column.
>
> **[3:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=182)** I'm going to change this back to 54 where it should be.
>
> **[3:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=186)** Now, if you want to remove all data from a table, it's actually faster to use a truncate statement instead of using a delete statement with no where clause.
>
> **[3:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=194)** The end result is an empty table.
>
> **[3:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=197)** I'm not going to actually run that, but just to see what it looks like, if I right click on movies basic, and click on truncate table and review SQL, this is going to just truncate the table movies basic in the movies database.
>
> **[3:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=210)** If your table is very large, truncate is a lot faster than delete, because it actually drops and recreates the table, rather than deleting data row by row.
>
> **[3:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=219)** However, truncate doesn't reveal any information about the number of rows that were deleted.
>
> **[3:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=224)** Unlike the delete statement, it will reset the auto increment counter, so if I were to delete all the data, the next value in my ID column in movies basic would be one.
>
> **[3:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=235)** Now that you know how to delete data from a table, your understanding of CRUD operations in MySQL is complete.
>
> **[4:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/remove-data-with-delete?u=76281980&t=240)** You now know enough to get started with complete control over your database.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (13), this, (2), let (1)
> **Env Vars:** sql (3), crud (1)
> **CLI Commands:** mysql (2)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [presenter] (1)

#### Challenge: Clean up the movies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=0)** - [Instructor] In this challenge you'll pretend that you have taken over a movie database from someone who knows far, far less about films than you do.
>
> **[0:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=13)** Let's correct some of their mistakes.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=15)** First, they've ignored the entire corpus of Rence Pera's filmography.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=18)** Add these films to the movie's basic table, "Run for the Forest," "Luck of the Night," and "Invader Glory."
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=25)** Second, they didn't know that Falsted Group doesn't produce sci-fi films.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=29)** Falsted prefers the more inclusive term SF instead.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=32)** So update the table to reflect this.
>
> **[0:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=34)** Finally, they didn't know that all of Garry Scott's work for Lionel Brownstone has been lost.
>
> **[0:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-clean-up-the-movies?u=76281980&t=39)** Remove it from the table since it's no longer available.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1), finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Clean up the movies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=0)** (soft music) - [Instructor] To solve this challenge, I need to do three things.
>
> **[0:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=9)** I need to insert into the table, I need to update the table and I need to delete from the table.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=15)** So for the first step, I'm going to insert the Rence Pera filmography.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=20)** And you can do this as one big insert statement or three small ones.
>
> **[0:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=25)** I'm just going to do it as one big one.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=27)** So insert into movies, basic, and I don't want to insert into my ID columns, so I'm just going to list out the rest of the columns, let the auto increment handle that for me.
>
> **[0:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=44)** The values.
>
> **[0:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=46)** And then I'm just going to paste in the filmography.
>
> **[0:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=51)** So Run For The Forest, Luck of the Night, and Invader Glory execute this and that added three rows.
>
> **[0:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=58)** So I'm going to select everything from the movie's basic table and scroll all the way down to the bottom.
>
> **[1:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=65)** And there are Rence Pera's three films.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=66)** So that's one step down.
>
> **[1:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=68)** Next I am going to update the movie's basic table.
>
> **[1:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=76)** And I'm going to set the genre equal to SF.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=81)** And I want to do this where the genre is sci-fi and the studio is Falstead Group.
>
> **[1:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=86)** So as per best practices, I'm going to open a new SQL tab and I'm going to select from movies, basic, where, genre equals sci-fi, and studio equals Falstead Group.
>
> **[1:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=106)** You could also do if you wanted, where studio is like Falstead with the wild card at the end, gives you the same results.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=116)** And so this returned three rows, all of which have a genre of sci-fi and the studio is Falstead Group.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=122)** So that's looks good.
>
> **[2:04](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=124)** I'm just going to copy this where clause into my update statement and write.
>
> **[2:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=132)** And that updated three rows.
>
> **[2:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=135)** So let's rerun this query, return zero rows as expected.
>
> **[2:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=141)** Just to double check we'll just look to see where the genre equals SF and it's three films from Falstead Group as expected.
>
> **[2:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=149)** So that's another step down.
>
> **[2:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=151)** Step three is to delete from movies basic where the director is Gary Scott, and the studio is Lionel Brownstone.
>
> **[2:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=161)** So once again new SQL tab, basic where, director equals Gary Scott, and studio equals Lionel Brownstone.
>
> **[2:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=178)** So I'll run this query.
>
> **[3:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=180)** Looks like there's two films that Gary Scott did for Lionel Brownstone.
>
> **[3:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=185)** So I'm going to copy this where clause into my delete statement, semicolon and run.
>
> **[3:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=193)** And that affected two rows, which looks good.
>
> **[3:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=197)** Back here again.
>
> **[3:19](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=199)** Oh, this gave me an error.
>
> **[3:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=200)** So when you have a portion of a query or a portion of the text in the query window highlighted and you click execute it will only execute the highlighted portion.
>
> **[3:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=211)** So I'll just remove the highlight and click execute again.
>
> **[3:34](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=214)** And this returned zero rows.
>
> **[3:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=216)** Just to double verify, we'll select the rest of Gary Scott's stuff, make sure it didn't delete too much.
>
> **[3:43](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=223)** And there's his three films for other studios.
>
> **[3:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=226)** So that's step three complete.
>
> **[3:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-clean-up-the-movies?u=76281980&t=227)** And the challenge complete.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (2)
> **Env Vars:** sql (2)
> **Non-Speech:** (soft music) (1), (music ends) (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 6. Joining Tables

#### The basics of JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=0)** - [Instructor] In a real life database it's very uncommon for all the data needed for a query to be stored in one table.
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=6)** In fact, it's often best if data is spread across multiple tables for reasons of database normalization.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=12)** However, just because the data is spread across multiple tables doesn't mean that multiple queries are needed to access it.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=18)** Using a single SELECT query, you can use the JOIN keyword to pull data from multiple tables matching related data across the different tables, often utilizing primary key and foreign key relationships.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=29)** MySQL supports multiple types of joins.
>
> **[0:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=32)** The most basic kind of join is called an inner join, or sometimes a simple join.
>
> **[0:36](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=36)** If you imagine the data in one table as a set and the data in a second table as a set, then pick a type of value, like a name or an ID number, and an inner join will return rows where that same data appears in both tables.
>
> **[0:50](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=50)** The other major type of join is the outer join which selects all of the data from one table, and only matching data from a second table.
>
> **[0:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=58)** Any data from the first table which does not have matching data in the second table will show a null value where that matching data would otherwise be.
>
> **[1:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=65)** In an inner join, these roads would not appear in the results at all.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=69)** Outer joins can be right outer joins or left outer joins.
>
> **[1:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=73)** These function almost identically, differing only in which table of the two being joined returns every row, and which only returns matching rows.
>
> **[1:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=81)** Right outer joins return all rows from the second of two tables in the join clause and left outer joins from the first.
>
> **[1:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=89)** Most join clauses require a condition that explicitly states which columns will be matched across the two tables.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=95)** For instance, an ID column in one table might match that same ID in a different table.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=100)** However, if an inner join is used without a condition, it will match every row from the first table with every row from the second, creating an enormous dataset.
>
> **[1:49](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=109)** This is an uncommon use of join but it's useful in some cases if one of the two data sets being joined is very small or very simple.
>
> **[1:56](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=116)** In MySQL, join, inner join, and cross join are all synonyms and can be used interchangeably.
>
> **[2:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=122)** This is different from normal SQL where inner joins require a condition and cross joins are used without a condition to match every row with every row in the other table.
>
> **[2:11](https://www.linkedin.com/learning/learning-mysql-development-22651630/the-basics-of-join?u=76281980&t=131)** With this brief explanation out of the way, let's get started joining some tables.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), function (1), let (1)
> **Env Vars:** select (1), join (1), sql (1)
> **CLI Commands:** mysql (2)
> **SQL:** select (1), join (1)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** imagine (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Match fields with INNER JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=0)** - [Instructor] Inner joins are the most common type of join in MySQL.
>
> **[0:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=3)** And if you use a join clause without specifying otherwise, it's assumed to be an inner join.
>
> **[0:08](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=8)** For the purposes of joining data, I've split my movie's basic table into the movies full data set which includes five separate tables.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=16)** Now suppose I want to match the title of each film from the titles table to the city it was filmed in.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=24)** The city column in the studio table.
>
> **[0:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=26)** So I need to join these two tables on their matching data.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=29)** And I can do that because in the titles table, there's a studio ID column that's a foreign key that refers to the primary key, the ID column of the studio table.
>
> **[0:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=41)** So if I open a new SQL tab, I can select "titles.title" and here I am making it explicit which table the column comes from.
>
> **[0:52](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=52)** This is only technically required if the two tables that you're joining have columns that have the same name but it's always best practice to explicitly label the table a column comes from when you're joining multiple tables.
>
> **[1:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=66)** So I'll SELECT "titles.title" and "studio.city" FROM titles and with an inner join, it actually doesn't matter whether I'm selecting from titles, and then I join the studio table or select from studio and join the titles table.
>
> **[1:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=82)** My preference is usually to select the larger table or the table that contains the foreign key and then join the table that contains the primary key.
>
> **[1:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=93)** But really it's just personal preference.
>
> **[1:35](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=95)** Now join, INNER JOIN the Table Studio.
>
> **[1:41](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=101)** As my condition, I'll join ON titles.studio_id equals studio.id, and this is where I'm telling MySQL what data is the same in both tables.
>
> **[1:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=113)** And to make it more attractive, I'll ORDER BY titles.title.
>
> **[1:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=118)** When I run the query, the results show the title and the city of that title studio linked by the ID of the studio.
>
> **[2:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=125)** The "ON" clause is the most important part of a joint query because that's how you tell MySQL what data is the same in both tables.
>
> **[2:13](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=133)** And this is why using the foreign key feature of MySQL can be very important.
>
> **[2:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=137)** It enforces the integrity of this link between the two tables.
>
> **[2:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=140)** If there was simply a list of values in a table that was not programmatically tied to the primary key of another table, then inconsistencies could emerge if you weren't very careful to keep the data in sync.
>
> **[2:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=150)** That said, it's not required that you join on a primary key foreign key relationship, but it is very useful because you know that the data is going to be kept consistent.
>
> **[2:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=159)** And a mistake or an irregularity in this part of the query might return invalid data that looks completely correct.
>
> **[2:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=166)** So for instance, suppose I accidentally typed "director_id" instead of "studio_id" in this condition and around the query.
>
> **[2:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=174)** So first glance, this looks like it could be valid data, but if you look a little bit closer, this only returned 20 rows instead of 50, and the cities are totally different.
>
> **[3:05](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=185)** That's why it's so important to be very careful in writing your joint condition.
>
> **[3:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=192)** Also, it's possible to use multiple joints with one query.
>
> **[3:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=196)** If I want to link a director to the critic score for their movies, I need to select the director name from the director table, the title from the titles table.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=208)** And in the critics rating from the critic rating table.
>
> **[3:32](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=212)** Notice the critic rating table has a foreign key that refers to the title_id.
>
> **[3:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=218)** So in a new query, I will "SELECT director.dir_name, titles.title" and "critic_rating.critics_rating" "FROM titles".
>
> **[3:54](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=234)** And when you join multiple tables, you can see that the table that you're originally joining from becomes less and less meaningful.
>
> **[4:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=240)** I'm just doing it this way to stay consistent.
>
> **[4:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=243)** And then I will JOIN the director table on "titles.director_id" equals "director.id".
>
> **[4:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=254)** And then I can just list my second joint.
>
> **[4:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=256)** I'm going to join the critic rating table and I'm just going to omit the inner join because it's implicit.
>
> **[4:25](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=265)** On the "critic_rating.titles_id equals titles.id".
>
> **[4:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=273)** And it's worth noting that in all these conditions, this equality is reversible.
>
> **[4:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=277)** So titles ID equals critic_rating.titles_id would be equally valid.
>
> **[4:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=282)** And I'll order by "director.dir_name".
>
> **[4:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=288)** And so this returns three columns, the director name, the title, and the critics rating as expected.
>
> **[4:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=293)** And it's important to note that even if a table is required to join data, you don't have to select any columns from it.
>
> **[4:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=299)** So for instance, even though I'm selecting from titles, I don't need a column from the titles table in the end results.
>
> **[5:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=306)** I'm still linking the director name to the critic rating.
>
> **[5:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=309)** This data's not quite as meaningful but it is possible to do.
>
> **[5:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=312)** Joining tables in queries can be challenging to understand but it's an essential skill for using MySQL in real life environments.
>
> **[5:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-fields-with-inner-join?u=76281980&t=320)** Now you can get started with more complex queries in MySQL.

> [!info]- Semantic Content
>
> **Code Identifiers:** critic_rating (3), studio_id (2), director_id (2), dir_name (2), titles_id (2)
> **CLI Commands:** mysql (6), make (1)
> **Env Vars:** select (2), join (2), sql (1), inner (1), order (1)
> **SQL:** select (2), inner join (1), order by (1), join (1)
> **UI Navigation:** select the (2)
> **Analogies:** for instance (2)
> **Code Keywords:** from. (1)
> **Definitions:** refers to (1)

#### Match all fields with outer joins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=0)** - [Instructor] An outer join is used to join two tables and select all data from one table and only matching data from a second table.
>
> **[0:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=7)** This is useful when you want to either explicitly see what data is missing in a table or the data in one of the tables is in some way optional to the complete set of data in the other.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=16)** So currently, my movie's database has no missing data.
>
> **[0:18](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=18)** Every row in every table has a match in another table, but real life is rarely so simple.
>
> **[0:24](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=24)** So to demonstrate the value of outer joints, I'm going to create a new table that contains the filename and resolution of the poster art for some of the films in the titles table.
>
> **[0:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=37)** So I'll create table posters with my ID column, the usual flags, and then I will create a titles_id column that I'll use as a primary key to refer to the titles table, the poster filename as a VARCHAR30, and a resolution column as a VARCHAR10.
>
> **[1:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=63)** And I'm going to add that foreign key constraint as posters_titles_id_fk which is a foreign key on the titles_id column that refers to the ID column of the titles table.
>
> **[1:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=82)** I've got my column there and run that, refresh, and there is my posters table.
>
> **[1:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=90)** Note data in it currently, so I'm going to right-click on the table name and run the import wizard on the posters dataset.
>
> **[1:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=97)** Just add that to the table.
>
> **[1:40](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=100)** The column names look good so we'll just click next a few times and then finish and reselect the posters table.
>
> **[1:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=107)** And there's the filename and resolution for my posters.
>
> **[1:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=111)** Now notice there's only 23 rows in this table and there's 50 rows in the titles table.
>
> **[1:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=115)** So there's going to be some titles without a poster.
>
> **[1:57](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=117)** So to find those, I'm going to create a query that's going to join the title of a film, its director, and the poster filename and resolution if it's available.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=127)** So I'm going to select titles.title, director.director_name, and posters.filename and posters.resolution from titles.
>
> **[2:22](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=142)** And I'm going to inner join on director because I only want to return rows where there are both titles and a director for the film.
>
> **[2:30](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=150)** And I'll do that on titles.director_id equals director.id.
>
> **[2:37](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=157)** I'm going to do a left outer join on the posters table because I still want to return the title and the director even if there's no poster art.
>
> **[2:45](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=165)** And I'm going to do that on posters.titles_id equals titles.id, and I'm going to order by titles.title.
>
> **[2:59](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=179)** When I run this query, you can see that every row has a title and a director name as intended, but not all of them have filenames or resolutions.
>
> **[3:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=186)** All these null values are rows where there is no matching data in the posters table for that title.
>
> **[3:14](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=194)** And if I change the left outer join to an inner join, you can immediately see the difference between the join types.
>
> **[3:21](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=201)** Look how few rows were returned, all because the rows with those null values are not selected in an inner join.
>
> **[3:28](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=208)** So I return only 23 rows, that's the number of rows that were in the posters table.
>
> **[3:33](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=213)** And note that if instead of going back to a left outer join, I do a right outer join and run this query again, then nothing seems to change.
>
> **[3:42](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=222)** And that's because in this specific case, there's no posters without a corresponding title.
>
> **[3:46](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=226)** And in fact, that would be very unusual because of the primary key and foreign key relationship.
>
> **[3:51](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=231)** For that reason, left outer joins are a lot more common than right outer joins.
>
> **[3:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/match-all-fields-with-outer-joins?u=76281980&t=235)** By combining different kinds of joins in SQL statements, you can create powerful and flexible queries for understanding complex datasets.

> [!info]- Semantic Content
>
> **Code Identifiers:** titles_id (3), posters_titles_id_fk (1), director_name (1), director_id (1)
> **Env Vars:** varchar30 (1), varchar10 (1), sql (1)
> **Definitions:** is a  (1), refers to (1)
> **CLI Commands:** find (1)
> **Code Keywords:** case, (1)
> **UI Navigation:** right-click (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find the best film
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=6)** - [Instructor] In this challenge you'll use inner and outer joins to find information about the best film in the database.
>
> **[0:12](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=12)** The result should include the following columns: the title, the director name, the critic's rating, and the poster file name if it's available.
>
> **[0:20](https://www.linkedin.com/learning/learning-mysql-development-22651630/challenge-find-the-best-film?u=76281980&t=20)** Because I'm only interested in the best film, the query should only return one row.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Find the best film
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=6)** - [Instructor] To solve this challenge, I'm going to start by opening a new SQL tab and selecting the four columns that were called for in the challenge.
>
> **[0:15](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=15)** So I'm going to select titles.title, director.dir_name, critic_rating.critics_rating and posters.filename.
>
> **[0:27](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=27)** I'm going to select from titles.
>
> **[0:29](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=29)** As always, I could select from any of these tables that I'm going to be inner joining, but I like selecting from titles.
>
> **[0:38](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=38)** And I'll join director on titles.director_ID equals director.id.
>
> **[0:47](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=47)** And I will join the critic_rating table on critic_rating.titles_id equals titles.id.
>
> **[0:58](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=58)** Even though I didn't explicitly state it, a join is implied to be an inner join and I know that there's going to be a director and a critic rating for every title so I've chosen to inner join those.
>
> **[1:09](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=69)** But I'm going to outer join, left outer join, in fact, the posters table.
>
> **[1:17](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=77)** I'm going to do that on the id column and titles equals posters.title_id.
>
> **[1:26](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=86)** And because I want to select the best film that will be the film with the highest critics rating.
>
> **[1:31](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=91)** So I'm going to order by critic.rating.critics rating, descending.
>
> **[1:39](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=99)** So the highest critics rating will be the first result and I'll limit one.
>
> **[1:44](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=104)** So I only select the best film and I'll execute that.
>
> **[1:48](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=108)** Oops. The titles ID, not title ID. Execute that.
>
> **[1:53](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=113)** And it only returns one row as expected.
>
> **[1:55](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=115)** So the best film in the movie's database is "Hunters of Eternity," directed by Ryan Ross with a critic's rating of 9.8.
>
> **[2:03](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=123)** And it looks like there is no poster file name.
>
> **[2:06](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=126)** That's too bad.
>
> **[2:07](https://www.linkedin.com/learning/learning-mysql-development-22651630/solution-find-the-best-film?u=76281980&t=127)** So with that, the challenge is complete.

> [!info]- Semantic Content
>
> **Code Identifiers:** critic_rating (3), dir_name (1), critics_rating (1), titles_id (1), title_id (1)
> **UI Navigation:** select the (2)
> **Env Vars:** sql (1)
> **Versions:** 9.8 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### Conclusion

#### Level up your MySQL knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980&t=0)** - [Brad] That concludes our course.
>
> **[0:02](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980&t=2)** If you'd like to dig a little deeper on MySQL development, be sure to check out MySQL Essential Training by Bill Weinman.
>
> **[0:10](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980&t=10)** After finishing that course, test your knowledge with my other course, Level Up: MySQL.
>
> **[0:16](https://www.linkedin.com/learning/learning-mysql-development-22651630/level-up-your-mysql-knowledge?u=76281980&t=16)** Again, I'm Brad Wheeler and thanks for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (3)
> **Speakers:** - [brad] (1)


## Path Context

### In [[Explore a Career in Database Development]]
← [[Learning SQL Programming]] | **4 of 5** | [[Finding New Career Paths with SQL]] →

## Appears In

- [[Explore a Career in Database Development]]

## Related Courses

_Courses sharing skills:_

- [[PHP with MySQL Essential Training- 2 Build a CMS]] — MySQL
- [[PHP with MySQL Essential Training- 1 The Basics]] — MySQL
- [[Choosing A Database Postgresql Mysql Mongo And Cloud]] — MySQL
