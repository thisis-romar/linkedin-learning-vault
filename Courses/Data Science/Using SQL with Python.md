---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: using-sql-with-python
url: "https://www.linkedin.com/learning/using-sql-with-python"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 7/12/2021
learners: 65707
skills:
  - Python (Programming Language)
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGiI_t79dOGAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1625163615628?e=2147483647&amp;v=beta&amp;t=pQr5XOi4Bk-rNA3MbfDDQrBd78EvZXnYNWPe3jjmR-g"
linkedin_topic: Data Science
learning_paths:
  - '[Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)'
prev_courses:
  - '[Data Analysis- Investigate with SQL](Data%20Analysis-%20Investigate%20with%20SQL.md)'
next_courses:
  - '[Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md)'
path_nav: '[{"path":"Advance Your Skills in SQL","position":4,"total":5,"prev":"Data Analysis- Investigate with SQL","next":"Hands-On SQL Challenges- Test Your Knowledge"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/python-programming-language
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Using%20SQL%20with%20Python.md)

![Using SQL with Python](https://media.licdn.com/dms/image/v2/C560DAQGiI_t79dOGAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1625163615628?e=2147483647&amp;v=beta&amp;t=pQr5XOi4Bk-rNA3MbfDDQrBd78EvZXnYNWPe3jjmR-g)

# Using SQL with Python

> Are you familiar with SQL? Do you know Python? Are you interested in understanding how these two languages work together? Then join Bill Weinman in this course as he shows the power of these two languages combined. Bill starts with some basics—connecting to a database, performing simple queries, and reading rows from a table. He covers how to use prepared statements and cursors, how to build a wra

> [LinkedIn Learning](https://www.linkedin.com/learning/using-sql-with-python) | 1h 39m | Intermediate | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Use SQL with Python](#use-sql-with-python)
  - [Using the exercise files](#using-the-exercise-files)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
  - [Installing the tools](#installing-the-tools)
- [**1. Common Interface**](#1-common-interface) (8 videos)
  - [The Python DB-API](#the-python-db-api)
  - [Creating a connection](#creating-a-connection)
  - [Simple queries](#simple-queries)
  - [Prepared statements](#prepared-statements)
  - [Hello, SQLite](#hello-sqlite)
  - [Hello, MySQL](#hello-mysql)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**2. A CRUD Class**](#2-a-crud-class) (6 videos)
  - [The essential four](#the-essential-four)
  - [SQL Wrapper](#sql-wrapper)
  - [Adding CRUD methods](#adding-crud-methods)
  - [Using the module](#using-the-module)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**3. Final Project: URL Shortener**](#3-final-project-url-shortener) (6 videos)
  - [Defining the project](#defining-the-project)
  - [Testing a web application](#testing-a-web-application)
  - [Code demonstration](#code-demonstration)
  - [Touring the code](#touring-the-code)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Thank you](#thank-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use SQL with Python](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/use-sql-with-python?u=76281980&t=0)** - [Bill] Hi, I'm Bill Weinman and welcome to Using [SQL](../../Skills/Data%20Science/SQL.md) with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). The goal of this course is to provide you with a working understanding of how to use SQL with Python. We'll start with the basics; connecting to a database, performing simple queries, reading rows from a table. I'll explain how to use prepared statements and cursors. I'll show you how to build a wrapper class to streamline the SQL interface and support multiple different database engines. And finally, we'll build a C.R.U.D. class and a full featured web application using what you've learned. Python is a powerful language for [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) and its DB-API interface is an excellent tool for using SQL. So let's get started with using SQL in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) (1)
> **Env Vars:** sql (5), api (1)
> **CLI Commands:** python (4)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [bill] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are included with your membership. Copy the exercise files folder to a location where you can find it on your system. I've copied it to the desktop on this system. Wherever you put it, just make sure you can find it. The exercise files are organized into chapters which correspond with the chapters of the lesson videos. Each of the chapters contain [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) files for following along with the exercises in that chapter. The db folder contains example [Databases](../../Skills/Software%20Development/Databases.md) in SQLite format, and the [SQL](../../Skills/Data%20Science/SQL.md) folder contains SQL commands for creating the example databases in both SQLite and [MySQL](../../Skills/Software%20Development/MySQL.md). I'll be using PyCharm Community Edition as my development environment for demonstrating the exercises. See the installation video for instructions on installing PyCharm on [Windows](../../Glossary/Service/Windows.md) or MacOS. The exercise files are here to make your learning experience easier and more powerful. Take your time, experiment a lot and happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** find (2), make (2), python (1), mysql (1)
> **Exercise Files:** exercise files (4)
> **Env Vars:** sql (2)
> **Tools:** pycharm (2)
> **Speakers:** - [instructor] (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/what-do-you-need-for-this-course?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there's a few things you'll need to know, and a few things you'll need to have. You'll need a good knowledge of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. All of the examples are in Python 3. You'll need to understand basic Python syntax, Python containers, like lists, tuples, and dictionaries, Python classes and objects, and how to use Python modules. For more information about Python, please see my course, Python 3 Essential Training. You'll need to understand [SQL](../../Skills/Data%20Science/SQL.md). You don't need to have a lot of advanced SQL, we won't be using many advanced features. You'll just need some basics. You'll need to understand [Databases](../../Skills/Software%20Development/Databases.md) and tables, and some simple relational concepts. For more information about SQL, please see my course [SQL Essential Training](SQL%20Essential%20Training.md). You'll need to understand how to install and manage software on your operating system, whether you're on [Windows](../../Glossary/Service/Windows.md), Mac OS, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or whatever, you should know how to get around, how to install software, and how store and find files in your file system. You'll need the latest Python install. You'll need the latest [MySQL](../../Skills/Software%20Development/MySQL.md) installed, or access to a MySQL server, and you'll need PyCharm or some other working editor for Python. Python is a great language for [Database Applications](../../Skills/Software%20Development/Database%20Applications.md), and I look forward to showing you how to use it effectively for both systems and web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (11), [SQL](../../Skills/Data%20Science/SQL.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** python (11), mysql (2), find (1)
> **Prerequisites:** you'll need (10), install (3)
> **Env Vars:** sql (4)
> **Versions:** python 3 (3)
> **Tools:** pycharm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Installing the tools](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=0)** - [Instructor] To follow along with the exercises in this course, you'll need a working installation of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) with [SQL](../../Skills/Data%20Science/SQL.md) Lite and [MySQL](../../Skills/Software%20Development/MySQL.md). You'll also need a working development environment for Python. And for this purpose I'm using PyCharm. You can download Python from the [python.org](https://python.org) website. I recommend that you install the latest version for your platform. And if you bring up their webpage under their downloads link, it'll usually just give you a good big link for the latest version for your platform. You can download the latest MySQL Community Server from the MySQL website at [devmysql.com/downloads/mysql](https://devmysql.com/downloads/mysql).
>
> **[0:51](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=51)** You may choose to run a MySQL server on your development machine, or on a remote machine. I run mine on an old Mac mini separate from my development machine, and that works fine. If you need help setting up MySQL, please see my course, MySQL Installation and Configuration. You can download PyCharm from the [jetbrains.com](https://jetbrains.com) website at [jetbrains.com/pycharm/download](https://jetbrains.com/pycharm/download). The free community edition has all we need. And so I'll be using that. I've already installed these components on both my PC and my Mac. Once you've installed these components, you can open the exercise files directly in PyCharm. You don't want to open it as a new project. You want to just select Open. And here I've got on my desktop, my exercise files folder, and I select Open. You'll notice that it's gone ahead and configured my Python.3.9, which is the latest version of Python. As I record this, your version may be later, that I just installed on this machine. On the Mac, usually it does that automatically. On the PC, it's a little bit different. So here I am on my PC. And I'm going to select Open.
>
> **[2:25](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=145)** And my exercise files from the desktop, I'm just going to say, OK. And you notice it says, No interpreter. It did not configure my interpreter for me. And so I'm going to show you how to configure the interpreter. And this works both on the Mac and on the PC in pretty much the same way. You just come over here and you click on this. And you say, Add interpreter. And you notice that it starts up in this virtual environment. And that is not what you want. It's useful for some purposes, especially where you may want to test your code and different versions of Python. But it is not useful for us. And it adds a layer of complexity that we do not want. And so I'm going to select System Interpreter instead. And it just found my Python Interpreter. And that's where my Python Interpreter is. And I just say, OK. And give this a minute while it does its thing down there. And it has now configured my Python Interpreter. Now, again on both the Mac and the PC, we're not quite done configuring PyCharm. And you know, if you've already been using PyCharm and your PyCharm has already set up and you know how to use it, even if you're using a virtual environment, whatever. As long as it's working, that's all we need. But for our purposes, if you're just setting up PyCharm just for this course, this is the way to do it. Now, if I bring up my from chapter one here, my hello version.py.
>
> **[4:00](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=240)** And I try to run it with shift control F10, or if you're on a Mac, it's shift control R. But here I'm going to press shift control F10. And it's going to just run my Python in the System Interpreter. It's going to run this code. You notice it says, No module MySQL. And here, sometimes this starts out as collapsed. But if you expand this, you see I import mysql.connector as MySQL. And it's not finding that. Because we have not loaded the module. So we need to go and load the module. And there's a couple of ways to do this. You can come up here to File, Settings. And you can select Project Exercise and Python Interpreter. Or you can take this little shortcut down here. If you just click on the Python 3.9 down here and select Interpreter Settings, you get to exactly the same place. And it's a little bit simpler. Okay? And you notice these are all the modules that are loaded in the Python system. Again, we're not using a virtual environment here. And I just want to add one. I want to add mysql-connector-python. This one here. You notice there's a lot of choices here. This is the one that you want. It says version 8.023 for me. It'll probably be a later version for you by the time that you're watching this, and that's fine. But it's the one that says MySQL connector Python. And you need to make sure that you check this box down here that says, Install to user's site packages directory.
>
> **[5:35](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=335)** And again, if you don't select that box, it's not going to work. That sets up this module for the site Python, the system Python on your machine, which is the one that you're using. So I click Install Package. And it says it's done, but it doesn't close the box. So we need to close the box. Then you see it here and you just say, OK. And now when I run this code again, I'm going to close this and I'm going to shift control F10 on the PC. And it's shift control R on the Mac. And you notice that now it runs properly. And it gives me version numbers. This is just my hello world. This is just is my environment working for the development of this project and work purposes for following along with these exercise files. And you notice that I get version numbers for all of these. The version numbers are correct. Yours will probably be different. They'll be a little later. They should be at least these numbers. I've got Python 3.9.4, which is the latest as of the time I'm recording this. SQLite 3.34, that's the version that is coming with the Python as of my recording this. And MySQL connector 8.0.23. Again, the latest version as I record this. Now, if I go back over to the Mac, here I am back on my Mac. And you'll notice if I open up my chapter one and open my hello version.py. And now I'm on the Mac, here I'm going to expand this. It sometimes opens up with that collapsed for some reason.
>
> **[7:10](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=430)** Now my Mac, I'm going to say shift control R. It's shift control F10 on a PC. But it's shift control R on a Mac. It goes ahead and it runs this, and I get the same error, No module MySQL. Okay. I know what to do. I come down here. I click on my interpreter. I say, Interpreter Settings. And you notice I don't have MySQL connector. Again, if you come to your settings, it's right here under your Project Exercise Files and your Python Interpreter. And I'm just going to go ahead and add it. I press this plus here. And I say, mysql-connector, and I have to spell it right, or it does not work. And we find the one that says MySQL connector Python. That all looks correct. I need to check this box. It says, Install to user's site packages. You won't get that checkbox if you're using a virtual environment. That's only when you're using the System Interpreter. But you need to check it and say, Install Package. Again, I get the little green down there. I have to close this and we see that it's installed. And I say, OK. You know, the buttons are on the other side on a Mac. And then I can close this. And now when I run it again, shift control R on my Mac, I get my correct version numbers. That just tells me that our environment is set up and that our environment is working. So just to recap, I can close this down here to run the Python that's opening your window here.
>
> **[8:45](https://www.linkedin.com/learning/using-sql-with-python/installing-the-tools?u=76281980&t=525)** On a Mac, it shift control R, and on a PC back over here on my PC it's shift control F10. And that runs your code. So now you're all set up. And you're ready to follow along with the exercise files. PyCharm IDE is flexible and powerful. It has many features and options. I encourage you to explore and learn. It's got a lot of great stuff in it. And you may decide as I have, that this is an editor worth keeping. And I do most of my Python work in PyCharm now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (24), [MySQL](../../Skills/Software%20Development/MySQL.md) (17), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** python (24), mysql (17), make (1), find (1)
> **Prerequisites:** install (5), set up (3), configure (2), you'll need (1)
> **Tools:** pycharm (10)
> **Env Vars:** f10 (5), sql (1), ide (1)
> **Versions:** python 3 (2), 3.9 (1), version 8 (1), 9.4 (1), 3.34 (1)
> **Exercise Files:** exercise files (6), download the (1)
> **UI Navigation:** click on (3), open the (1), checkbox (1)


### 1. Common Interface

[↑ Back to Table of Contents](#table-of-contents)

#### [The Python DB-API](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=0)** - [Instructor] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) uses a standard interface called DB-API to communicate with the database. The current version of the standard is DB-API 2.0, and you can find the full documentation for it here on the [python.org](https://python.org) website. The purpose of the DB-API is to promote commonality among interfaces so that each [Database Management](../../Topics/Database%20Management.md) system uses more or less the same code to access data from Python. The DB-API is feature complete, including support for all common relational database operations. You'll need to use the [SQL](../../Skills/Data%20Science/SQL.md) syntax specific for each specific DBMS. This common interface includes a connection object for holding the credentials and parameters of the database connection, a cursor object for maintaining context in a sequence of query responses, common hooks for committing and rolling back transactions, and a common set of exceptions for catching errors from the DBMS. Each DBMS has its own implementation, which may include different connection details. SQLite requires only a file name as the database is entirely contained in one file. Client server [Databases](../../Skills/Software%20Development/Databases.md) require more connection information and usually some security credentials. Cursors in the DB-API serve two purposes.
>
> **[1:37](https://www.linkedin.com/learning/using-sql-with-python/the-python-db-api?u=76281980&t=97)** They act as iterators keeping track of a position in the database. This allows your code to step through a query result without the need to hold more than one row at a time in active memory. In the DB-API implementation, cursors also act as prepared statements. This allows you to use placeholders in a query, provides automatic sanitation of parameters and significant performance improvements. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter provides simple examples of connecting to a database and executing SQL statements in both SQLite and [MySQL](../../Skills/Software%20Development/MySQL.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), cursor (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** api (6), dbms (3), sql (2)
> **CLI Commands:** python (3), find (1), mysql (1)
> **URLs:** [python.org](https://python.org) (1)
> **Versions:** 2.0 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Creating a connection](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=0)** - [Narrator] The first step in using the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) DB-API is to connect to the database. This is db-connect.py from chapter one of the exercise files. Notice the import line at the top here, where I import the sqlite3 module. That module, of course, comes with Python, you don't need to add it to your installation. And then down here in line 9, I call connect on that sqlite3 module to connect to the database. Now in parentheses here, normally there is a file name because SQLite stores all of its database information in a single file. And so you'll usually get a file name there. In this case I'm using the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) memory enclosed in colons to get the special SQLite in memory database. And it operates just the same as if I had specified a database file, except that there's no file involved, it's just in memory. This returns an instance of the database interface. And in this case, we're connecting to an in-memory database. And this instance, I tend to call it db. Some people call it c-o-n for con because it's a connection, whatever you choose to call it, just be consistent. I call it db. Once I'm connected, I can create a cursor object. And I do this with the cursor method off the db object. We'll use this cursor object to query the database. And so down here, I have an execute method
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=95)** off the cursor object, and that submits a query to the database and returns a row of results as a tuple. And so, in this case, I'm passing it this bit of [SQL](../../Skills/Data%20Science/SQL.md) here, which just says, it's just a select statement that selects a value with the special function that's specific to SQLite, sqlite_version. And this just returns the version number of the SQLite interface as an element in a row. And it's really just a one column row. And so we call fetchone to get one row from our query. And you notice that I subscript it here with the zero to get the first element of that tuple. And then I print that out with the print statement. So let's go ahead and run this. And this is shift-control-R on a Mac or shift-control-F10 on a PC, and you notice it runs it and it returns that value 3.34.0, which is the version of sqlite3 that came with Python that I installed on this machine. So this looks pretty simple, right? And what's cool about this is it works almost exactly the same for [MySQL](../../Skills/Software%20Development/MySQL.md) or for any database. So I'm just going to change this import and I'm going to mysql.connector, and we'll say as mysql so I don't have to type all of that out every time.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=189)** And instead of sqlite3.connect, I'm going to say mysql.connect. And instead of memory here, I need to give it enough information to actually connect to a MySQL database. So I have my MySQL database on a different host. So I'm going to to say host="pluto.local", which is where my SQL database is. If your MySQL database is on your local machine, you just write localhost here. But be sure to spell it right. So it'll look like that. In my case, it's on pluto.local, and then you need to give it your credentials. I have a special user set up for this purpose called appuser. And it has a very simple password, don't ever do this in real life. Spartacus. And I have now connected to my database. And I clearly have a syntax error here. That should clear all that up. Now, obviously this select statement is specific to SQLite and it won't work with MySQL. Instead in MySQL, you can get exactly the same thing by just calling the version function with your SQL. And obviously here instead of SQLite here, I want to say MySQL. And now I can just save this and run it. And it works exactly the same.
>
> **[4:44](https://www.linkedin.com/learning/using-sql-with-python/creating-a-connection?u=76281980&t=284)** So all I changed was the connection. Well, I imported the right module and I changed the connection string because that's different for every database system. And I changed the SQL to get the version. In this case, it gets the version of the server and not the version of the interface. And it prints out that 8.0.23, which is the version of the server that I'm running on Pluto. So as you can see, Python's DB-API makes it easy to connect to a variety of different relational [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) with virtually the same code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (10), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), cursor (4), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** mysql (10), python (4), sqlite3 (4)
> **Env Vars:** sql (4), api (2), f10 (1)
> **Versions:** 3.34.0 (1), 8.0.23 (1)
> **File Paths:** db-connect.py (1)
> **Code Identifiers:** sqlite_version (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Simple queries](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=0)** - [Instructor] Let's look at some simple queries that [Fetch](../../Skills/Web%20Development/Fetch.md) rows from a table. This is database.query.py from Chapter One of the exercise files. For this example, I'm using SQLite3 and I'm using the scratch database in the exercise files. So you notice that I'm running this in the Chapter One folder in the exercise files and there's a DB folder in the same exercise files that has these .db files. These .db files are SQLite [Databases](../../Skills/Software%20Development/Databases.md). SQLite stores an entire database in one platform-independent file. The same file will work on a PC, it'll work on a Mac, it'll work on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), work on many, many different systems because the file itself is actually platform-independent, and that's the way the database is written. And so this is one of the many reasons why SQLite3 is so convenient and so simple to use. Any event, I open with SQLite3.connect and I give it that filename. You notice the whole file path ../db/scratch.db, that same string will work on both a PC and a Mac and Linux. The PC, [Windows](../../Glossary/Service/Windows.md), will normally use backslashes but it will optionally also understand these forward slashes. So this works just fine. So the same piece of code works on all these different platforms.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=93)** We grab a cursor and then we execute some [SQL](../../Skills/Data%20Science/SQL.md). We drop the table if it already exists because this is just temporary table. We create a table with three columns, all of them text columns, just for simplicity, and we insert values into these columns. One two three, four five six, seven eight nine. We do a commit, and then we select, asterisk. Select everything from this database and we get one row from fetchone and then we print that row and then we get another one. And if we still have a row, then we continue with the while loop and we exit the while loop when there's no more rows. So we're getting one row at a time with a while loop. And then we drop the table if it exists. We close the cursor, and we close the database connection, 'cause that's how you clean up. And I'm just going to go ahead and I'm going to run this code now, and you notice that there's our results. Our three rows from the table, each of them with three columns, one two three, four five six, seven eight and nine. So we actually created a table, we added some rows to the table, and then we selected every row from the table. So let's talk a little about cur.execute. It executes an SQL statement, but it does not return any values.
>
> **[3:09](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=189)** It takes one string as an argument and that one string is an SQL statement. Many statements, like create table, insert into, drop, many statements like this, they don't return any values. It's really only the select statements, and some systems, a few special statements that aren't part of standard SQL. They'll overturn any value. And so if we execute a statement that returns a value, we then have to fetch that value. We use fetchone to return a row from that currently executed value. There's another way we can do this instead of using fetchone. We can actually use the cursor as an iterator. And that looks like this.
>
> **[4:02](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=242)** That's a lot simpler, isn't it? And when I run this, you'll notice that I get exactly the same result here. I'm going to go ahead close that run window so we can see more of the code. Another alternative is to use fetchall instead of fetchone, or using the cursor as an iterator. I can say, rows=cur.fetchall,
>
> **[4:31](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=271)** and then I can say for row in rows.
>
> **[4:40](https://www.linkedin.com/learning/using-sql-with-python/simple-queries?u=76281980&t=280)** And that works exactly the same also. The difference here is that fetchall will return all the rows in the table and you have to have enough memory to hold all of that at once. And so more commonly, you're going to want to do this one row at a time. And you'll notice that down here I close the cursor and I close the database. It's just always a good practice to clean up. So these are some simple queries and in the next lesson we're going to talk about prepared statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (5), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (4)
> **Exercise Files:** exercise files (4)
> **CLI Commands:** sqlite3 (3)
> **File Paths:** database.query.py (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Best Practices:** good practice (1)

#### [Prepared statements](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=0)** - [Instructor] Prepared queries are a powerful tool in most relational [Database Applications](../../Skills/Software%20Development/Database%20Applications.md). Let's take a quick look at how this works. This is db_prepared.py from chapter one of the exercise files. A prepared statement is a statement that is parsed once by the database engine and then used over and over even with different values. Here, we're using [MySQL](../../Skills/Software%20Development/MySQL.md) and you notice I have MY_HOST, USER and PASSWORD as Constance that makes the connection line a lot cleaner. And then you notice that when I create my cursor, I have this option in here prepared=True. MySQL by default does not provide prepared statements and you always want to use prepared statements. And so by setting this prepared flag in the cursor object, you can now use prepared statements. So every time you use MySQL, you're always going to want to set prepared=True. Let's take a look at why. Down here you notice we drop the table, create the table, we're doing exactly the same thing as we did in the last lesson and then we select everything. But now we want to just select rows where a equals a value. And in this case, we're giving it the value four as a string. And so we only want the rows where a is four, which would be the second row here.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=96)** So we have this question mark. This question mark is called a bind variable, and it's essentially a template placeholder for value to be used in the query. The database engine first compiles the query and runs its optimizations without the value. And then the database engine sanitizes the actual value that's passed to prevent [SQL](../../Skills/Data%20Science/SQL.md) injection and other attacks. And this is not to be underestimated its value. This is extremely valuable and it's the most important reason to always use prepared statements because that value will now be sanitized and any potential attacks will be thwarted. It then plugs in whatever values are provided for however many question marks you have in your query. It plugs those values in during the [Fetch](../../Skills/Web%20Development/Fetch.md) operations, making this far more safe and efficient than non prepared statements. And then we have this execute statement and you notice that we're giving it another parameter here. And this parameter is a tuple and you notice we have this stray comma here. This is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) thing. In order to provide a tuple of literals, if you only have one value in the tuple, you need that comma to make it actually create a tuple to pass to the query. So this is select star from temp, where a equals question mark
>
> **[3:08](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=188)** and for this query, the question mark will be replaced by four, which will be sanitized and then passed to the database engine and then we have the result is, and however many rows that's true four which in this case will be one. So let's go ahead and run this. And we see here's the result of our select star from temp and then here is the result of select star from temp where eight equals four, and we have that four string right there. So you're starting to see the value of prepared statements. Let's take a look at prepared2.py and you see here, I'm actually using a prepared statement for my insert. And so I have this insert statement once and it gets compiled by the database engine here, I call execute many, which takes a tuple of tuples. And so here's my tuple of tuples, I've got all these rows, 1, 2, 3, 2, 3, 4, blah, blah, blah, to 9, 10, 11. And so I have nine rows that I'm adding to our table with insert into temp values, just three question marks for the three columns, and then I'm passing it this tuple of tuples and that inserts all of these rows into the table in the one statement. And this statement gets compiled once by the database and reused, which is a great efficiency. And now we can select where a equals four and again, we'll just get that one row there,
>
> **[4:42](https://www.linkedin.com/learning/using-sql-with-python/prepared-statements?u=76281980&t=282)** that fourth row. And I'll go ahead and I'll run this and you see here's our nine rows. I can expand this a little bit so we can see all of this. Here's our nine rows and there's the result of our select with the question mark. So we're starting to see the value here of prepared statements, and we're going to see a lot more of this as we go through the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course, but I really want you to understand how these work and to get a sense of their value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (3), cursor (2), [Database Applications](../../Skills/Software%20Development/Database%20Applications.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** mysql (3), python (1), make (1)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** my_host (1), user (1), password (1), sql (1)
> **File Paths:** db_prepared.py (1), prepared2.py (1)
> **Exercise Files:** exercise files (1), template (1)
> **Code Identifiers:** db_prepared (1)
> **Cross-References:** in the last (1)

#### [Hello, SQLite](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=0)** - This example is called, hello-sqlite.py because it serves much of the same purpose as a traditional hello world program. A traditional hello world program is short and simple, and it's commonly used to validate a tool chain to make sure all the pieces are in place. In this case, it is a bit more than that. I'll also use it to show you how various parts of the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) DB API works. This version uses the [SQL](../../Skills/Data%20Science/SQL.md) Lite database system. SQL Lite is a full featured relational database system that has a few unique properties that make it especially suitable for many purposes. Unlike most [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) as SQL Lite does not use a client server architecture. All the code for the database is contained in the driver. All of the data for each database is contained in a simple platform, independent file. It's a powerful and robust system it's used in a great number of applications that don't require a client server architecture SQL Lite is free and open source. It's included in most Python distributions. So there's no need to download anything. And this is hello-sqlite.py from chapter one of the exercise files. I'm just going to close this sidebar here. So we get a little more room for our code. Of course, here at the top, I import the SQL Lite three module print a little hello, have to predefine these variables to,
>
> **[1:38](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=98)** as I call it "satisfy the warnings monster" code works without that. It just generates warnings. And here we are connecting to the in-memory database system, create a cursor, and I print the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) connected. Do you notice that all of this is in a tri block and we're using the SQL Lite exception class for the exceptions. And then down here in another tri block, we create create a table. You notice I'm using Python's triple quote so that we can format this create table statement to make just a little bit more easy to read. And I execute that and print table created. And then down here at another tri block, we're going to insert some rows. And again, here we're using prepared statements. And so we're actually going to insert these nine rows three times. So we should have 27 rows and here it'll print the count. You notice that we get a row count from the cursor. Every time we call execute, many, the row count from the cursor will tell you how many rows were affected by the last statement. And so that should add up to 27. And I'm just going to ahead and run this here. And we can see that we add all of these rows it says inserting rows, 27 rows added, and then it counts that there's 27 rows of the table and it gives us our column names.
>
> **[3:12](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=192)** And so we have the statement here, select count from hello and it prints the number of rows on the table. And then we use this Pragma, every database system does this differently. This is how you do this in SQL Lite to get table info. We get the column names and we print out those column names. And if we look here, over here, the column names are ID AB and C, which matches what we had in our create table statement there.
>
> **[3:52](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=232)** Then we [Fetch](../../Skills/Web%20Development/Fetch.md) rows using an iterator. And you notice that I say limit five. So we're just going to get the first five rows. And there we are fetching using iterator, getting the first five rows, and then we're going to use a row factory. And this is a special construct that is specific to the SQL Lite driver. The My SQL driver does not have this, but it allows us using this row factory, which we initialize here. Then each of our rows can be read as either a tuple or as a dictionary using this row factory. And so here we have it as a tuple and as a dictionary for each of the rows, we can also fetch in groups of five using fetch many and fetch many is just another fetch method where you can specify how many rows you want to get at once and manage your memory that way. And so using fetch many, getting five at a time, and with 27, we can expect that there'll be a remainder of two down there at the end. So this is just an example of how to do this in SQL Lite and how to do these various common database actions, these common database functionalities in SQL Lite. We drop table with exists, close our cursor,
>
> **[5:25](https://www.linkedin.com/learning/using-sql-with-python/hello-sqlite?u=76281980&t=325)** close our database, and we're done. And so this is an example, doing all of these common actions in SQL Lite and in the next movie, we'll do exactly the same thing using My SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (13), [Fetch](../../Skills/Web%20Development/Fetch.md) (6), cursor (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1)
> **Env Vars:** sql (13), api (1)
> **CLI Commands:** make (3), python (3)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **File Paths:** hello-sqlite.py (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - this (1)

#### [Hello, MySQL](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=0)** - [Instructor] This is the [MySQL](../../Skills/Software%20Development/MySQL.md) version of our hello database script. It serves much the same purpose as a traditional hello world program, but for a database interface. A traditional hello world is short and simple. It's commonly used to validate a tool chain, make sure all the pieces are in place. In this case, it's a bit more than that. Also use it to show you how various parts of the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) DB API works in the MySQL context. MySQL is a free and open source relational database system. This example, presumes you've already installed MySQL server on your system and if you need help doing that, you may see my course, MySQL Installation and Configuration. In this case, you'll notice that I have my database server on a different machine at pluto.local. This would say local hosts, like this. If you have the database on the same machine, as you're running your Python. In any event, this is hello mysql.py from chapter one of the exercise files. I'm going to go ahead and close the project pain. So we have a little bit more room here for our code and you notice I have these constants and you see them down here in the connect, statement in the connect call that helps us keep all of this clean. Much of this if you watch the previous movie with [SQL](../../Skills/Data%20Science/SQL.md) Lite three example, you notice this is much of the same code and we're doing pretty much the same things.
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=95)** Notice again, here on line 20, my cursor is being initialized with prepared = True and that's so that we can use prepared statements. You will always put prepared, equals true when you're using MySQL, you always want prepared statements. There's no circumstance where you won't want to use them and it should be a default, but it's not. So you need to switch it on and that's how you do it. Again, we're using exceptions in this case, we're using the mysql.Error and again, MySQL is this my sql.connector alias.
>
> **[2:15](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=135)** So here's starting in line 27, we have another try block. We dropped table if it exists, we use a triple quote for our CREATE_TABLE string, again, just to format it and make it pretty and then we execute it and we say, TABLE_CREATED. Again, we're inserting all of these rows using prepared statements. And we're using execute many and we call it three times with nine rows that should give us 27. So down here where I say print count rows added, it should say 27 rows added. I'm going to go ahead and run this and show you the result here. There we have a 27 rows added and then we use select count and we get a result that says there's 27 rows, in the table, our column names. In this case, there's no pragma in MySQL to get the column names. So you have to get the column names from a cursor. So we select just one row from the table, select asterisk from, with limit one, we get one row. We [Fetch](../../Skills/Web%20Development/Fetch.md) them all just so that our cursor is executed and then we get our column names. Simple as that and our column names come back as a tool bar. We can fetch rows using an iterator. For a row in cursor, that works just the same as it does in SQL lite. MySQL does not have a dictionary option for the rows
>
> **[3:52](https://www.linkedin.com/learning/using-sql-with-python/hello-mysql?u=76281980&t=232)** and so here we use the Python zip function to zip together a tuple of column names and rows so that we can look at them with the, it says your dictionary work around. So that we can look out the rows either as a tuple or as a dictionary. And that works pretty well. And it's just a simple one line of code and that zip is pretty efficient in Python. We can use fetch many to get five rows at a time. And here we are getting five rows at a time with fetch many. And drop and close the connection. You can see that this is very very much the same code. I mean, there are some distinctions, but it's very, very much the same code in both SQL Lite and MySQL. And MySQL is a very popular database system and it works great with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (4), cursor (4), [Fetch](../../Skills/Web%20Development/Fetch.md) (4)
> **CLI Commands:** mysql (13), python (5), make (2)
> **Env Vars:** sql (3), api (1), create_table (1), table_created (1)
> **Definitions:** is a  (2)
> **File Paths:** mysql.py (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/challenge-13976721?u=76281980&t=5)** - [Instructor] Congratulations! If you've been following along, you now have enough knowledge to write a useful utility. For this challenge, you will copy all the rows of data from a table on a [MySQL](../../Skills/Software%20Development/MySQL.md) database to a table on an SQLite database. In your script, you'll need to create connections to both MySQL and SQLite. You'll need to create tables on both systems. Then you'll add rows of data to the table on MySQL. Then you'll copy that data from the MySQL table to the SQLite table. You'll close both the connections, and for bonus points, write another version that copies from SQLite to MySQL. Expect this project to take you about 30 minutes to an hour. Take your time, experiment a lot. Don't worry if you spend a lot of time on this, that's good, it just means you're learning a lot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (5)
> **CLI Commands:** mysql (5)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=0)** - Here's my solution for the chapter one challenge. This is 01-solution1.py from chapter one of the exercise files. Up the top here, I import my modules. I set up my constants for my [SQL](../../Skills/Data%20Science/SQL.md) inside of main. You notice I define my database and cursor objects outside of the tri blocks. This is just good practice. It works if you do it inside the tri blocks, but [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) will throw warnings about it. So this is just good practice. First, we connect to SQLI three. You notice that we have the path to the database. We get the version, we report the version. We set up the cursor, of course, and then we connect to my SQL, same thing. Notice the prepared = true. We always want to do that. And then we create and populate the My SQL table. So I drop table if exists. I create the table, I've got a bunch of row data here and, you know, so I'm using a prepared statement with execute many for my row data. And that works just great. Then I print the data from the My SQL table, and now I create the SQL Lite table.
>
> **[1:34](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=94)** It's got a compatible schema. You'll notice that the syntax for the different data types is a little bit different between My SQL and SQL Lite. And that's just the way that it is, but it works. We can read directly from one and into the other, and then we do the copy. So we select everything from the My SQL table. And then we set up the insert SQL for SQL Lite and for each row in the My SQL cursor, we execute the insert for SQL Lite you'll notice these slice here. That simply takes us past that first column. We don't want to copy that first column because that's the primary key. We want to let SQL Lite create its own primary key. So we're just doing the ABC columns here. And so that's why we have the slice there in the insert. Then we select from the SQL Lite table and we clean up. So we'll go ahead and we'll run this and we can see here, we insert the rows. There's the My SQL table data. We copy the data to SQL Lite and we query the SQL Lite data and it works just fine. Now for the extra credit, here's my solution number two,
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=190)** and I kind of, modularizes just a little bit. I created a copy table function and I give it a little mode string that it would go one direction or the other direction. So my solution will actually copy in either direction. And so this is all in that function. And then down here in Main, all we do, we have a little input. We ask if we're going this way or that way. And then we connect to the [Databases](../../Skills/Software%20Development/Databases.md),
>
> **[3:44](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=224)** create the tables, the SQL Lite table, the My SQL table. And then we do the copy. We simply copy. We call the copy function and up here in the copy function, if we're copying from My SQL to SQL Lite, we set up all of the, you know, source DB, destination DB. We set up all of these variables for which direction we're going. And we create the row data. And we use the same SQL for both of these, because these are the standard, you know, insert into, select from... those don't vary between [Database Systems](../../Skills/Software%20Development/Database%20Systems.md). So in the source, we insert the data and then we select from the source. And then we do the copy thing. For row in source, we execute the insert. And so when I run this one, which way do I want to go? I want to go SQL Lite to My SQL, right? So I'm going to go number two, and it does it.
>
> **[5:01](https://www.linkedin.com/learning/using-sql-with-python/solution-13980328?u=76281980&t=301)** So that's my solution. Feel free to take your time and look through this code. And I hope this challenge was fun for you. And you learned a lot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (24), cursor (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1)
> **Env Vars:** sql (24), sqli (1), abc (1)
> **Prerequisites:** set up (5)
> **Best Practices:** good practice (2)
> **File Paths:** 01-solution1.py (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 2. A CRUD Class

[↑ Back to Table of Contents](#table-of-contents)

#### [The essential four](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/the-essential-four?u=76281980&t=0)** - [Instructor] The four essential functions of a database system are create, read, update, and delete. The scatological acronym is intended to be pronounced C.R.U.D. These four functions translate to the [SQL](../../Skills/Data%20Science/SQL.md) statements; insert, select, update, and delete. The [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) DB-API was designed to provide a uniform interface for as many [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) as possible and has all the functionality necessary to take full advantage of most any relational [Database Management](../../Topics/Database%20Management.md) system, but most of the time, all you need is a simple way to issue SQL statements, and sometimes, it makes sense to have an interface more closely tailored to a given application. In this chapter, we will create a Python module that acts as a wrapper to the DBA-API interface to provide a simpler, more useful SQL interface, as well as a C.R.U.D. interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1), [Database Management](../../Topics/Database%20Management.md) (1)
> **Env Vars:** sql (3), api (2), dba (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [SQL Wrapper](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=0)** - [Instructor] The first step in creating our module is to encapsulate the most common [SQL](../../Skills/Data%20Science/SQL.md) methods. Then we can build on that to create our crud methods. So this is BWDB-SQL.PY from chapter two of the exercise files. And probably the first thing you'll notice about this is that it's much bigger than any of the other [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) files we've worked on so far. And that's because it's a module and it has a lot of methods in it. And so, to help us navigate around those, I'm going to open up this structure tab down here. You can get this by pressing command seven on a Mac or alt seven on a PC. You notice it opens up here on the left. I can close my projects and navigate around this like this. Or what I prefer to do is to take this structure tab and just move it over to the right side at the top. And alternately, you can right click on it and say, move to right top and you get exactly the same effect. But this helps me to navigate around. If this isn't already opened, you can open your class here with the disclosure triangle. And it just helps me to navigate around. If I want to go to a specific method, boom, there I am. So with larger files, I can also close my project tab over there because I'm working on a fairly small screen. Your screen is probably larger, but for demonstration purposes, the screen tends to be smaller. And so, that helps us navigate around. So, the first thing I want to show you though is way down here at the bottom.
>
> **[1:34](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=94)** And you'll notice this line here, if name equals main, we call main, you've seen this a million times. It's very common in Python. But here it serves a little bit of a different purpose because we're in a module. If this module is opened through an import statement in another file, instead of saying main here, this name variable will be the name of the module. So that way because we're opening it directly and we're running it directly, it's named main. And then we can call our main, but this main only gets called when we're running it directly. And so, that's pretty convenient. So here's our main function. And it's really just here to test all of the methods inside of the BWDB class. And so, here we have the SQL do. We have begin transaction, SQL do many, no commit, things like that. And it kind of tests everything, so that as I'm developing the module, I can test things. And also, once it's all done and I want to add other things, I still have all of these tests in here. It's very much like unit tests, although a little bit more specific. All right, so going back into our class, I want to show you actually at the very top, before we actually get into the class, these import statements. So I'm importing SQLite three and my SQL connector, like we've seen before, except you'll notice these are in tribe blocks. That way, if one of these modules is not actually available, then what happens here is instead of have my SQL true,
>
> **[3:12](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=192)** we get the exception, we have my SQL equals false. And we set my SQL equals none, so that we don't get errors and warnings. So this way we can conditionally import these if we have them and have our module act rationally, if we don't. All right, I want to go down here and I want to show you set DBMS and get DBMS. You notice these have a little P's here. These are properties and they have the little arrows for the setters and getters. And in a knit, you notice that I use these keyword arguments so that when I initialize, I can initialize with different arguments for the different [Database Management](../../Topics/Database%20Management.md) systems. And we'll see that when we get down to main. But for example, if we have DBMS, I set self.DBMS. Yet the property itself is named _DBMS. And that's because we're using these setters and getters. These are declared down here under properties, using the property function, instead of using a decorator. You can use a decorator for this. I find using a decorator for this to be a little bit more confusing, probably because I don't write in Python all the time. I do a lot of work in C++ and other languages. And every time I see decorators and property, I have to look them up. But this is really obvious and clear to me. So I set the gather to get DBMS and the setter to set DBMS. And this reads really clearly for me.
>
> **[4:45](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=285)** And then, when I assign something to that DBMS, .DBMS variable, like we did up here, then the setter gets called automatically as a property setter. As property setters and getters. All right, so if the DBMS equals my SQL, I check if I have it first. With my SQL variable and if not, I can throw an error. And I can do the same with SQLite. And then when I set the database itself, there's a bunch of work I can do. In this case, I call the actual connect on SQLite three connect or on my SQL connect with the user password, with the credentials. And I'm setting these up properly for which database they are. All right, let's take a look at the SQL methods themselves. I have SQL do. And you notice that SQL do simply calls SQL do no commit and then calls a commit. So, in the DBA API, in the specification, it specifies that auto commit must be off by default. And this is so that it works as expected for people who are used to just working directly with SQL and not necessarily through an interface. Many of the interfaces, the C interfaces actually, have auto commit turned on by default. But the people who develop Python wanted consistency. And so, they specify that it must be turned off by default
>
> **[6:21](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=381)** and I leave it off and I simply do commits when I need them. And so, for this SQL do, where we basically take an SQL statement and whatever parameters and then pass those on to the execute on the cursor, I have a no commit version and I have a version that's by default with commit. And this way I can choose which one or I can do my commits manually if I prefer to do that. And so, I have the same with do many, which simply calls execute many. And query, which calls execute. And because this is for queries that actually returned values, these do methods are for queries that do not return values. Things like insert, update and like that. But queries do return values, like select statements, we want it to return the values. So I have one that'll just return a single value. And so, it returns the first parameter of the row. And so, that's for things like the count function and things like that, where you want one specific value. You just want to call this method and get that value. I have one little get a single row and it gets [Fetch](../../Skills/Web%20Development/Fetch.md) one, it signs out to the row and then calls fetch all to just clear out anything else that the query might be returning. And then it returns to the row. And the query by itself returns an iterator through the yield statement in Python. And if you're not familiar with yield, take a look at my SQL central training and I go over how that works.
>
> **[7:56](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=476)** So if we come down here to main, I'm going to close this and come down here to main, here's how we use it. This calls the constructor, the underscore underscore admit underscore underscore. And we can construct it either with SQLite or with my SQL works exactly the same. We call SQL do to drop the table if exists. And then we set up our, depending on the DBMS, we set up our create table, which has different syntax. And then we call SQL do with the create table statement. So I'm just going to go ahead and run this. And you can see there at the top, we created the table. We populate the table and you notice, I have two versions of the populate. One, it says not adding because I do a roll back instead of commit. And another one we're actually adding. And so, if we look up here at the top, we have the not adding rollback and then adding. And then when we're all done, we have query value, select count. There are this many rows and it says there are six rows. And so, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this is pretty simple. We have a SQL query and we print row. We use it as an iterator and we get these rows down here. We have update row, add a row, delete a row, print the remaining rows and clean up. So I know that's a lot of stuff, but it's actually pretty straightforward. When you look at this code,
>
> **[9:30](https://www.linkedin.com/learning/using-sql-with-python/sql-wrapper?u=76281980&t=570)** it's all just really simple wrappers around the SQL statements. Now that we have the SQL part, we can go ahead and add our crud methods in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (25), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), cursor (1)
> **Env Vars:** sql (25), dbms (10), bwdb (2), dba (1), api (1)
> **CLI Commands:** python (5), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Prerequisites:** set up (2)
> **File Paths:** bwdb-sql.py (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)

#### [Adding CRUD methods](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=0)** - [Instructor] Now that we have a library of [SQL](../../Skills/Data%20Science/SQL.md) methods it's time to add our CRUD methods. This is BWDB.py from chapter two of the EerciseFiles. And we've already gone through a lot of this in the previous movie, if you haven't watched that one, I strongly suggest that you do before you watch this one. Over here on the right, I have my structure opened up. We can get this by pressing Command + Y on a Mac or Alt + Y on a PC and I'm just going to open up my BWDB class here to help us navigate around. We're going to start with the init and you notice we've added a couple of properties here for table and column_names that's because with the way that the CRUD methods work, as they depend on particular tables being created in a particular way and so if we come down here to Main, you'll notice when we create our tables, our tables have an ID column, which is a primary key and it auto increments. And this is essential for the CRUD methods because the CRUD methods depend on a relational structure. So we're going to do things where like we're going to search for something and it will return an ID and then we need to be able to use that ID to [Fetch](../../Skills/Web%20Development/Fetch.md) the data. So these methods up here in a init, or rather these properties up here in a init, include a table_name and column_names, because those are central to how our CRUD methods work. All right, and if we look at, for example, table, we have again, properties for table, set_table,
>
> **[1:39](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=99)** which calls sanitize_string on the table_name that's because when we get down into our CRUD methods, like for example, GET_row, I'm going to close this project, give us a little bit more room. We have to actually include that table_name in the SQL and so it needs to be standardized first. And so we have some methods down here at the bottom for doing things like sanitizing a string. You notice it has the static method decorator, which simply tells [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) that this is a static method and it does not access or change any object values and so that allows Python do a little bit of optimization with that. And this method is very straightforward it simply takes the string, iterates through it, compares each character to this acceptable characterset. If the character is not in the characterset, it replaces it with an underscore, very very simple and straightforward. We have other static methods for things like creating a string of colnames, separated by commas and value, question marks separated by columns and an update_string which is basically colnames with equals question mark. And these are used when we add_rows and update_rows. So if I look at add_row, nocommit, you notice I'm using colnames_string, and value_string, a name_string, and a values_string.
>
> **[3:13](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=193)** For the INSERT statement, the INSERT statement in SQL is INSERT INTO table name and then a list of column names separated by commas, and then a list of values, which in this case will be question marks separated by commas. So my values_string, I tell it how many, and it'll give me that many question marks separated by commas and my colnames_string, I pass it the column names typo, and it will return a string with those colnames separated by commas. So again, these are very straightforward. Here's colnames and here's values_string, very straightforward and simple. You notice in colnames, I ignore if the first one is named ID, 'cause we don't use that in our update_strings. Again, we're depending on that specific structure for our tables. And then the update_string is a little bit more complex. Come back here to update_row, nocommit. You notice the SQL is UPDATE table name, SET and then it's a list of colname equals value, colname equals value, which is the SQL syntax for that. And so our update_string, it takes each of the colnames it adds equals question mark, because again, these are going to be prepared statements and then it takes all of that and it joins it with the comma
>
> **[4:46](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=286)** using the join function. So very straightforward. Most of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of these are very simple Wrappers around the SQL. So we have, count_rows, which has a SELECT COUNT star. GET_row, SELECT statement and it returns that convenient iterator or rather get_rows returns the iterator get_row returns a single row. We also have get_rows with a limits, you can pass it a limit and an offset optionally offset defaults to zero. Add_row, which we've looked at, update_row, which we looked at, delete_row, Simple Wrapper. Most of these are Simple Wrappers, even find_row is just a Simple Wrapper. We have a few more convenience methods down here at the bottom, have_db checks to see if we have a Database already set up, have_cursor, have_table, you can actually, hasad a table name and it will query the database and depending on if it's [MySQL](../../Skills/Software%20Development/MySQL.md) or SQLite, it'll query the Master Database and say does this table exist? Lastrowid, begin_transaction rollback, commit and disconnect, which is called by the destructor. So I know this is a lot and we've gone through it pretty quickly the code is all here. Feel free to take your time and experiment with all of this, there's testing code down here, which I'll go ahead and I'll run for you. It's pretty much the same as the one for the SQL,
>
> **[6:19](https://www.linkedin.com/learning/using-sql-with-python/adding-crud-methods?u=76281980&t=379)** except in this case, we're using these CRUD Wrappers, add_row, nocommit, and then call commit, add_row, nocommit and call rollback. We use count_rows. So we're not using the SQL in here we're actually using the CRUD methods in the testing. Now that we have this working module, let's take a look at how to use it in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Code Identifiers:** table_name (3), update_string (3), add_row (3), values_string (3), column_names (2)
> **Env Vars:** sql (8), crud (8), insert (3), bwdb (2), select (2)
> **Definitions:** is a  (4), is called (1)
> **SQL:** select (2), insert into (1), update (1)
> **CLI Commands:** python (2), mysql (1)
> **Analogies:** for example (2)
> **File Paths:** bwdb.py (1)

#### [Using the module](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=0)** - [Instructor] It's simple to import and use this module. You'll notice down here on line five, I say from BwDB import, and then our two classes, BwDB, and BWErr. And then I simply use the class. Like I would any other class, here I am initializing an object with the BwDB connected to SQLite, or if I like I can do it connected to [SQL](../../Skills/Data%20Science/SQL.md).
>
> **[0:34](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=34)** and either one works. Once it's connected, I can use it just as we did in the test code, here I use SQL do to drop a table if exists and here I use SQL do to create a table. Once I've created this temp table, it's named temp, I can set the table name to temp, and then I can use all of the crud methods. So I can say column names, I can use add row with or without the commit. But here since I'm adding a bunch of rows at once, I use no commit and I hit commit down below. I can use get rows as an iterator. I can use find rows to find all the rows that have an S in them. And then I get a list of row IDs, and then I can iterate through the list of row IDs to print them. I can find a particular row with Bird in it. And once I have that row ID, I can update that row and change the name. I can add a row using add row. I can delete a row using find, and then passing that row ID to delete row and I can add a bunch more rows. And then I can page through the rows using limit and offset. I can change the table to a different table
>
> **[2:10](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=130)** and get those rows and I can change it back and just get those rows. Drop table if exists and the close of the database handle and the cursor is handled by the destructor in the class. So I'll just go ahead and run it this, and you'll see all of these things happening here. We create the table. There's the table column names, populate the table, find the rows with an S in them, search just for Bird , change it from Charlie Bird to The Bird . We can add a row. We can delete a row, print the remaining rows. You'll notice there that three, which was Billy Cobham has gone. Add more rows, we have 13 more rows, and then we can page through them five at a time. We change our table and here's our items table, change it back and drop the table. And if we like, I can run that same code against my SQL. And it works exactly the same, little slower because SQLite is all in one compact little file. And this is actually running on a server in my [office](../../Skills/Web%20Development/Microsoft%20Office.md). So you can see here that this module is easy
>
> **[3:47](https://www.linkedin.com/learning/using-sql-with-python/using-the-module?u=76281980&t=227)** and convenient to use. And in the next chapter, we'll use it for a practical application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), cursor (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **CLI Commands:** find (5)
> **Env Vars:** sql (4)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=5)** - [Narrator] The challenge for this chapter is to manage a simple table of domain names and descriptions. For this purpose, I've created a starting place so you can focus on the practical database parts and you'll use the crud library for this challenge. So here we have zero to challenge dot P Y from chapter two of the exercise files. And you notice I import the BW DB class from the module, and I have a number of functions here. So I'm going to just close that and open the structure. And we can look at the functions, we'll start with main. So it main does is it calls connect, which connects to the database, just like that. Very simple. And it stores the database handle in this globals and this globals is just a handy little dictionary for keeping a few global variables. I may just have that one. I don't know. It's a way that I've done this in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) for years and years. It's a simple trick. I do this in a lot of scripting languages. It keeps the namespace nice and clean. In any event, back in main here, we create the table, we set the table name and then we have this wild loop. And if the response is Q for quit, we quit and exit. Otherwise we call this jump response. Do menu displays the menu. Right? And so it looks like this when I run it. You see here's our little menu and if I say add, we've got stubs for each of these find edit list, delete X for drop table and exit and Q for quit.
>
> **[1:45](https://www.linkedin.com/learning/using-sql-with-python/challenge-13980329?u=76281980&t=105)** And it quits right out. And so that's our menu there, in 'Do' menu. And here's our little jump table, very simple. And we have little stubs for add domain, find domain, edit domain, et cetera. And you're going to fill these in with the code, using the crud library to do these functions. So you're also getting an idea of a framework of what I build command line applications, I use a framework like this. It's very, very simple. I'll do this in whatever language I'm doing. I'll jump table and little functions for each functions off the jump table. Very, very simple. I expect this challenge will take you about one or two hours and I'll show you my solution in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** find (2), python (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** we call this (1)
> **Analogies:** just like (1)

#### [Solution](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=0)** - [Instructor] Let's take a look at my solution for the challenge. Keep in mind, your solution may be different, and that's fine. This is 02-solution.py from chapter two of the exercise files. Let's just start out by running it. And you see, I get my little menu here. And if I type L to list domains, you see I have no domains in the database. I can add a domain, let's add [bw.org](https://bw.org) or I'll just say international geek of mystery. And I've added that now to the database. And if I list domains, now, I get that one. I can add another one. I'll add [lynda.com](https://lynda.com).
>
> **[0:54](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=54)** And I'll add another one for, say [Google](../../Glossary/Service/Google.md).
>
> **[1:02](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=62)** And now, when I list domains, I've got these three. So I can find one. If I want to find, I can say [lynda.com](https://lynda.com) and find that one. And you'll notice that it finds that just fine. I can edit a domain. Let's say I want to edit [bw.org](https://bw.org), and I'll just change the description to say Bill Weinman. And now, when I list domains, you see those have changed. I can delete a domain. Let's delete Google because that's certainly useless. And delete row? Yes, no? I say yes and it deletes the row. And now, when I list them, I've just got the two. And I can X to drop table and exit. And boom! We're done. So let's take a look at the code that does this. Of course, we've seen the connect function, we've seen do_menu, we've seen jump response. So here's add_domain, all right? So print out add domain. It gets the database object from the globals, raises an error if it doesn't have a database object. It prompts for the domain name and the description, calls add row. It checks the count that's returned from add row to see if it's less than one. And it gets the last row ID. And it uses that to print the row so you can see what you added. Find_domain, I have a little trick here. I added the keyword arguments with no prompt so that I only print this find_domain header if I don't have that so that I can reuse
>
> **[2:39](https://www.linkedin.com/learning/using-sql-with-python/solution?u=76281980&t=159)** this code for things like edit_domain. You notice that edit_domain calls find_domain. And delete calls find_domain, right? And so that just makes it a little bit more flexible. It asks for domain_name, it calls find_row, it gets row_ID, and if found, it prints it; and it also returns the row_ID for those functions that might call it. So we have edit, again, we call find_domain, we get a row_ID, we ask for the description because we're just going to add the description, and that's fine; and we update row with the new description. List_domain is very simple. Listing count rows domains and we list them. Delete_domain calls find_domain. It asks, yes or no? If you're going to delete, if you really want to delete the row. And drop_db this calls. Drop table if exists and exits. And main, we've already seen that. And that's my solution. It's pretty simple actually. But the whole thing is under 200 lines of code. Very simple and straightforward, especially using this CRUD library that we've created. So I hope you've enjoyed this challenge. I hope you've found it useful. I hope you've learned a lot. And in the next chapter, we'll build a practical web applications. So fasten your seatbelts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2)
> **Code Identifiers:** find_domain (5), edit_domain (2), do_menu (1), add_domain (1), domain_name (1)
> **URLs:** [bw.org](https://bw.org) (2), [lynda.com](https://lynda.com) (2)
> **CLI Commands:** find (3)
> **File Paths:** 02-solution.py (1)
> **Env Vars:** crud (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)


### 3. Final Project: URL Shortener

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining the project](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=0)** - [Instructor] Our final project is a simple, short URL service for personal or private use. I wanted a short URL service, but I didn't want to use one of the public services. I didn't like their [Privacy](../../Skills/Data%20Science/Privacy.md) policies. I didn't want to leave my traffic in the control of an unknown entity. And frankly, it just seemed like a fun little project. I've been using this code for about 10 years now, and it's worked well for me. The code revolves around a simple one-table database that has rows for the short name and the destination URL. I call the app JURL for jump URL. So I named the table JURL. It's really just a name, no reason to overthink it. It would be easy to add support for click counts, referral URLs, and other statistical information. But for my purposes, this simple schema has served me well for many years. There are two significant components to the system, a simple CRUD application for managing the database and a jump script that intercepts the short URLs and redirects the browser to the destination URL. When I built the system, I chose to build a web-based CRUD application to manage the database. This requires a few parts to work properly. A series of [HTML](../../Skills/Web%20Development/HTML.md) files, some CSS to make it look pretty, a templating system to assemble the HTML with the various data filled in, and code to manage all of that, to keep state, and to handle the CGI.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=96)** CGI is, in this context, the common gateway interface. It's one of the original web protocols dating back to the early 1990s. CGI is how we pass information back and forth between a web browser and a web server. I wrote a book about CGI back in '95. If you're interested in understanding the subject, you may be able to find a copy in a used bookstore or online. it's still relevant, and the protocol hasn't changed since I wrote it. Keep in mind that the web is inherently stateless. This means that each time a web browser submits information back to the web server, it does not know what just happened unless your script keeps track. This script uses a simple jump table along with a series of CGI variables to keep track of state. Keeping state with CGI can be confusing. This is one of the reasons that modern web apps use so much [JavaScript](../../Skills/Software%20Development/JavaScript.md). Finally, a separate script handles the actual redirection from short URL to destination URL. This part of the system is very small and simple and requires no user interface. It uses the HTTP 307 response code to direct the browser to the target URL. Response codes are part of the HTTP specification and are issued by the server before the MIME headers. The response code is immediately followed by a location header with the full target URL.
>
> **[3:10](https://www.linkedin.com/learning/using-sql-with-python/defining-the-project?u=76281980&t=190)** Note that CGI scripts run by the built-in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) server class cannot execute redirects because response code 200, the OK response, is sent before the CGI script is called. In order to test a web application, we will need a web server. And in the next lesson, we'll look at how we can create a simple Python web server for testing our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (9), cgi (8), jurl (2), crud (2), html (2)
> **CLI Commands:** python (2), make (1), find (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Warnings:** keep in mind (1), note that (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Testing a web application](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=0)** - [Instructor] Our final project is a web application, which means that we need to test it in a web server. You could use a free or low-cost server from a cloud company and that would work fine or you may prefer this simple, convenient alternative. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) comes with a functional web server that's ideal for testing. It's not something you would use in production, but it works for our purposes. This is webserver.py, from chapter three of the exercise files. It's a simple web server using the HTTP server module, and this module is included with the default Python distribution. You notice down here on line six, I import two classes from the HTTP server module. These two classes are the server itself and a request handler for CGI and then I set up a class that inherits that request handler and I give it the directories where we're going to run CGI. These directories are relative to the server route, which by default is the directory where you're running this web server code, which in this case is our exercise files, which is on the desktop, and chapter three. And you notice we have web-server, we have this cgi-test, which we'll look at in a moment, and the solution to our exercise for our challenge for this chapter. The way that this is organized in the window, it might look like this is under jURL, jURL is a separate directory, so we'll look at that later, but for right now, we're running this web server here. We set its port number to 9999
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=96)** and we set up a object based on the server class, we print out a message, and we call serve_forever. And so when I run this code, you'll notice it says serving at port 9999 and if I switch to my web browser and I type in localhost:9999/cgi-test.py,
>
> **[2:03](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=123)** when I run that, I get this output and that cgi-test.py, it's just a test CGI... I'm just going to fold this down here. It's just a little test CGI script and it imports a couple of things, it puts out a CGI header, which in this case is for the text plane. If we're serving [HTML](../../Skills/Web%20Development/HTML.md), we'd put out a text/html header and then some text, and that text, you'll notice, is showing up here in our browser. And so, if your output looks something like this, it means that it's working. Of course, your Python version might be different and some of this stuff might be a little different, but if you get an output that looks much like that, that means that this is working. So there's our web server and we're actually going to leave this web server running in this terminal tab for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter and you'll notice that we get little logs here. You'll probably also get a 404 because the negative response was already cached in my browser, we don't see it here, but if I shift-reload from here, you'll see I get this 404, no such CGI script for favorite icon, because all web browsers, all the time, look for that in the root directory of the server so they can display that little icon, which you'll notice is not being displayed in my tab here.
>
> **[3:40](https://www.linkedin.com/learning/using-sql-with-python/testing-a-web-application?u=76281980&t=220)** All right, so this looks very much like a web server log, and this is the output from our default web server, and we're just going to leave this running for the rest of the chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Env Vars:** cgi (6), http (2), html (1)
> **Definitions:** means that (3), is a  (2)
> **File Paths:** webserver.py (1), 9999/cgi-test.py (1), cgi-test.py (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** jurl (2), serve_forever (1)
> **Ports:** port 9999 (1), :9999 (1)
> **Exercise Files:** exercise files (2)

#### [Code demonstration](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=0)** - In this movie, we're going to take a look at how the application works. And in the next movie we're going to actually tour the code. For now I'm just going to minimize this terminal. You see I can just hit this minimize and it leaves it running. So the web server is still running and you'll notice this "JURL folder" has got a bunch of things in it. We'll look at these in detail in a little bit. For now we're going to be running this code, but we're not going to run it from inside of PyCharm. We're going to run it in the browser. So here we are in Chrome and this JURL db.PY code. So that's in the JURL folder and it's this db.py code. This is what's running in the browser and it's actually a lot of stuff. Later in this chapter for the challenge, you're going to create a command line version of this. But for now, let's just take a look at how this works. I have a few records in here already. You notice I have a message, "There are 4 records in the database. Add some more!" So we're going to do that. We're going to add one. I'm going to say the target URL (inhales) let's say it's "[google.com](https://google.com)" and my short URL is going to be "ggl". And so I'm going to add the record, and there it is, it says, "Record (ggl) added. There are five records in the database." It's still begging me to add more. Here is ggl and you notice it's underlined, which is a little hard to see on this screen because of the descenders.
>
> **[1:33](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=93)** But what's interesting is when I click on it, you'll notice it's now running jurl.py/ggl. It's sending this redirect, which as I've mentioned before, does not work in this web server. On a normal web server, it would have taken this location, right? I'm just going to copy that and paste it in here, and it would have sent us there. But because of the limitations of the web server that we're using, what we get instead is this redirect on the screen, which isn't really a bad thing, because in actuality, it actually helps us a little bit with the debugging process, so we can actually see what's going on. So it's not that bad of a thing. But in any event, we've added a record. We can edit that record here. We can change the URL. So say maybe I want it to go to images.[google.com](https://google.com) and I can update the record. And now when I click on that, it sends me to images.[google.com](https://google.com), instead of just [google.com](https://google.com). I can also of course delete it. And when I press delete, I get a little confirmation. I say "confirm delete" and the record is gone. So we have the four functions of a CRUD database. We've got create, read, update and delete. All right. So this is what it looks like on the screen. As I mentioned before,
>
> **[3:05](https://www.linkedin.com/learning/using-sql-with-python/code-demonstration?u=76281980&t=185)** there's a number of components to this. There's little [HTML](../../Skills/Web%20Development/HTML.md) files. There's modules that do things like read those HTML files and add variables to them and insert them in to do things like displaying these rows. It's fairly complex. All of the code is here and you can go through this code and learn from it as much as you like. And in the next movie, we're going to take a little tour through the code, not in a lot of detail, but in enough, so that you can see how it's all working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Env Vars:** jurl (3), url (3), html (2), crud (1)
> **URLs:** [google.com](https://google.com) (4)
> **File Paths:** db.py (2), jurl.py (1)
> **Cross-References:** in the next (2), later in (1)
> **Tools:** terminal (1), pycharm (1), command line (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (1)

#### [Touring the code](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=0)** - [Instructor] Let's take a look at how this works. Because it's a web application, it's got a few moving parts that you may not be accustomed to. Here in PyCharm, this is db.py from chapter three of the exercise files, under the JURL folder. And this is the main code that manages this whole web application that you see here in the browser. You notice at the top here, it imports a few libraries. Of course, you're familiar with the BWDB library. BW CGI and BW template and BW config file, these are libraries that I wrote literally 10 years ago or more that manage a few things that you can config, library, managers, a simple config file with names and values, separated by an equal sign. The BWC CGI library manages the CGI connection. It takes care of reading CGI variables from the browser and cookies and headers and a few things like that. The BWTPL for a templating system manages these [HTML](../../Skills/Web%20Development/HTML.md) files. You'll notice, I've got these HTML files here. For example, main.html and you see, they have these [Tokens](../../Skills/Web%20Development/Tokens.md) in them that have dollar signs around them, like dollar message, dollar error, dollar. It's got a dollar before and after the token. Dollar hiddens, dollar. And these are read and written by this very simple templating system.
>
> **[1:35](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=95)** Again, code that I wrote many years ago. So there's a few moving parts here, but most of it is actually pretty straightforward. Here in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code, I've got a dictionary that I use for all of my global variables. A dictionary is basically just a name value database that is kept in memory. And this makes it really easy to keep track of a few values that are shared amongst the entire scope of the file. I've opened up this structure over here on the right. And here I've got an init function, which initializes things that gets the database from the global variables. It sends a header from the CGI module. It gets the variables from the CGI module and it sets a linkback link. The linkback link is very important because every time you do anything on the web, every time you press a button, it actually runs the whole script all over again. And so, the only way to keep context is to have little tokens that go back and forth. And this linkback variable allows it, every time you do this, to again, link back and call this CGI script again.
>
> **[3:00](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=180)** This dispatch function. It's like a jump table. It gets the context from the CGI variables and it knows what button you pressed and where you were, where you're going to and what the action is that you need to take. And then, for each of these different conditions, one of these actions will be taken. Let's see if we can get down to the actions here. There we are. For adding a record into the database, we've got add row here. And then the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this is just logic to handle the context and the HTML pages and all of that. Edit, you notice it called set form variables. When I press edit on any of these, all of these fields are informed variables and they have context variables and things that help to keep track of where we are. And once you actually have edited something and you press the update record button, I'm going to press cancel here, but if you press the update record button, then it'll come down here and it'll call update. And that's where the actual update row call into the database library is made. And so, if we go through this, we've got things like delete confirm, which again is just a page. If I select one of these and I say, delete, I get this confirmation page. And again, that's a whole different call to the Python script. For each one of these buttons that we press, it has to call that Python script again
>
> **[4:34](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=274)** and it needs to keep track of its context. It's worth looking also here at list recs, which lists the records on the page and you see that here. Oh, did I go and delete BW? I certainly did. Well, I'm going to put it back here. [HTTPS://bw.org](https://HTTPS://bw.org) and we'll call it BW and we'll add the record and there we are. You'll notice that I'm displaying four here. And you'll notice that I have this next page, previous page and I have this whole thing here, list page bar, which is these links down here, which you're not seeing because we haven't hit. I think I have it set to 10 in my configuration file. So if I come down here into my configuration file, you'll notice my records for page is set to 10. If I set that to three and save that and then we come back out here, you'll notice when I reload this, that's now just showing three and I have a second page. So I can click on that second page and it's actually paging. It's only going to show up to three on a page. And so I have links for end, I have links for each page, like that because I've set that to three. So I'm going to set it back to 10. And there we are. And all of this is managed here in list recs and in list page bar. We have a bunch of HTML files. I showed you main dot HTML. And again, let me just make some room here,
>
> **[6:07](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=367)** so you can see this again. I wrote all this HTML many, many years ago. It's all good HTML, but it's ten-year-old HTML from when we all thought that XHTML was going to be the big thing. There's very little [JavaScript](../../Skills/Software%20Development/JavaScript.md) in here. Just this one set, the focus, so that the first time you come in here and I'm just going to get rid of these. So the first time you come in here, it automatically sets the focus. It puts the cursor in that field. That's really the only thing I'm using any JavaScript for here, everything else is just done in HTML. We have this edit HTML, which is used by several different things in the system, but this is the form. I mean, if I say edit here or add a record, you're going to get this form that has the fields in it for updating and adding and deleting the record. There's simple headers and footers to set up the HTML. And a footer with the copyright information and such. And you see that here, you know, here's the footer. The header doesn't have anything to display. Well, it does have the title and a few things like that. But that's basically it. All the formatting is done in CSS. And here's the CSS. Again, this is very old, but it works and it looks for something that's designed by a programmer. It's pretty functional and it looks pretty decent. I'm happy with it. So this is the gist of the system. And as you can see, it requires cooperation between a number
>
> **[7:42](https://www.linkedin.com/learning/using-sql-with-python/touring-the-code?u=76281980&t=462)** of different related technologies. You've got HTML, you've got CSS, you've got Python, of course, you've got [SQL](../../Skills/Data%20Science/SQL.md), little bit of [Java](../../Skills/Software%20Development/Java.md) script, all of these different technologies working together. And all of that is really just about making it look pretty. Perhaps a little more accessible to administrators. And for my purposes, if I were doing this again today, I would just make a simple command line program. And that's exactly what we're going to do for our challenge in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** html (12), cgi (8), css (3), jurl (1), bwdb (1)
> **CLI Commands:** python (4), make (2)
> **File Paths:** db.py (1), main.html (1)
> **Tools:** pycharm (1), command line (1)
> **Exercise Files:** exercise files (1), template (1)
> **Analogies:** for example (1), it's like (1)
> **URLs:** [https://bw.org](https://bw.org) (1)

#### [Challenge](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/challenge?u=76281980&t=0)** - [Instructor] The challenge for this chapter is to create a command-line script to manage our short URL database. If you did the challenge for the crud class in the previous chapter, this should be fairly simple for you. I wrote this web-based interface many years ago and it's certainly convenient and I still use it to this day, but if I were writing it today, I'd probably just write a simple command-line script. This challenge should take you about 15 to 30 minutes. I'll show you my solution in the next lesson.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (1), in the next (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=0)** - Let's take a look at my solution for the challenge. Keep in mind that your solution may be different and that's fine. This is zero three solution.py from chapter three of the exercise files. And you'll notice that this solution looks very much like my solution for the previous challenge. In this case, there's no need to create or destroy a table. You notice that I'm initializing the database with dot slash data slash JURL dot db. That's the database for our jump URL application. I have a simple menu, add, find, edit, list, delete and quit. And if I go ahead and run this, you see that this works just like our other cred application. In fact, most cred applications work pretty much the same, don't they? And so I can list domains. You see we have the same domains that we had in our web interface. I can add a domain, the short name, we'll call this one GGL for [Google](../../Glossary/Service/Google.md). And I'll put HTTPS colon slash slash [google.com](https://google.com) and it's added the row. And now when I list them, you'll see that it's got that fifth row in it. I can add a domain, I can edit the record for GGL and it found it. And I can change it if I want to, to say images.[google.com](https://google.com). And there it is, it's updated.
>
> **[1:36](https://www.linkedin.com/learning/using-sql-with-python/solution-13981253?u=76281980&t=96)** I can list them again and there it is in our database. I can find one if I want, I can search for [SQL](../../Skills/Data%20Science/SQL.md), there's my SQL link. And I can delete one if I want, I'll delete GGL and I'll say yes, and it deletes it and I can list them and there they are. I press Q to quit and we've quit. So we've got do menu, which is very simple. We've got our jump table, very simple, add rec, this is all very much like we've seen before. Find rec, edit rec, list recs, delete rec, and main. I do actually have a create table statement, but I don't have a destroy table. So I hope you found this challenge useful. You can see it's a whole lot simpler than that whole complex web based thing. Feel free to play around with it, make it work for another database system. Add features. Experimenting is always valuable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** ggl (3), sql (2), jurl (1), url (1), https (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [google.com](https://google.com) (2)
> **File Paths:** solution.py (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Thank you](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-sql-with-python/thank-you?u=76281980&t=0)** - [Bill] In this course, my goal was to give you a good understanding of how to use [SQL](../../Skills/Data%20Science/SQL.md) with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). I've shown you how to connect to a database, how to submit queries, including adding, editing, and deleting data, and how to read from a database. You've seen examples of common use cases, including libraries for interacting with simple SQL queries and creating a custom creditor phase. I suggest you experiment a lot with the example code. Tear it apart, break it, expand it, learn from it. Python is a rich and powerful environment for working with [Databases](../../Skills/Software%20Development/Databases.md). Take full advantage. I hope this course has helped you to gain a deeper understanding of how to use SQL in Python and I look forward to seeing what you create with your own applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** python (3)
> **Env Vars:** sql (3)
> **Definitions:** is a  (1)
> **Speakers:** - [bill] (1)


## Instructor

- [Bill Weinman](../../Instructors/Software%20Development/Bill%20Weinman.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- SQL

## Path Context

### In [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)
← [Data Analysis- Investigate with SQL](Data%20Analysis-%20Investigate%20with%20SQL.md) | **4 of 5** | [Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md) →

## Appears In

- [Advance Your Skills in SQL](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20SQL.md)

## Related Courses

_Courses sharing skills:_

- [ETL in Python and SQL](ETL%20in%20Python%20and%20SQL.md) — Python (Programming Language), SQL
- [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL

---

[↑ Back to top](#)