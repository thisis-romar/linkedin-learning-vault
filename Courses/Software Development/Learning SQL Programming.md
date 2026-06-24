---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-sql-programming-8382385
url: "https://www.linkedin.com/learning/learning-sql-programming-8382385"
duration_minutes: 108
duration: 1h 48m
level: Beginner
updated: 12/20/2023
learners: 65707
skills:
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/learningsql-2875059"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGAqoJIz-W-wA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702690438853?e=2147483647&amp;v=beta&amp;t=qDz6L00bvr_LCysHubqU3mGGX8TwhC3El8rynmyKzmo"
linkedin_topic: Software Development
learning_paths:
  - '[Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)'
  - '[Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)'
  - '[Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)'
prev_courses:
  - '[Quick Start Guide to SQL](../Database%20Management/Quick%20Start%20Guide%20to%20SQL.md)'
  - null
  - '[Learning C-](Learning%20C-.md)'
next_courses:
  - '[Learning MySQL Development](../Database%20Management/Learning%20MySQL%20Development.md)'
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](../Data%20Science/Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
  - '[Programming Foundations- Web Security](Programming%20Foundations-%20Web%20Security.md)'
path_nav: '[{"path":"Explore a Career in Database Development","position":3,"total":5,"prev":"Quick Start Guide to SQL","next":"Learning MySQL Development"},{"path":"Data Engineering Foundations Professional Certificate by Astronomer","position":1,"total":6,"prev":null,"next":"Complete Guide to Python for Data Engineering- From Beginner to Advanced"},{"path":"Become a Software Developer","position":11,"total":12,"prev":"Learning C-","next":"Programming Foundations- Web Security"}]'
path_count: 3
tags:
  - course
  - topic/database-management
  - topic/software-development
  - topic/data-science
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20SQL%20Programming.md)

![Learning SQL Programming](https://media.licdn.com/dms/image/v2/D4D0DAQGAqoJIz-W-wA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702690438853?e=2147483647&amp;v=beta&amp;t=qDz6L00bvr_LCysHubqU3mGGX8TwhC3El8rynmyKzmo)

# Learning SQL Programming

> Structured Query Language (SQL) is a common tool for retrieving data from relational databases such as SQL Server, MySQL, MariaDB, and PostgreSQL. This course provides an introduction to this core programming language. Learn how to request data from a database, limit and sort the responses, aggregate data from multiple tables with joins, and edit and delete data. Instructor Scott Simpson also show

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385) | 1h 48m | Beginner | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Learning SQL programming](#learning-sql-programming)
  - [Exercise files](#exercise-files)
  - [Exploring DB Browser for SQLite](#exploring-db-browser-for-sqlite)
  - [CoderPad tour](#coderpad-tour)
  - [What is a database?](#what-is-a-database)
  - [What is SQL?](#what-is-sql)
- [**1. Ask for Data from a Database**](#1-ask-for-data-from-a-database) (7 videos)
  - [Ask for data with SELECT](#ask-for-data-with-select)
  - [Narrow down a query with WHERE](#narrow-down-a-query-with-where)
  - [Adding more criteria to a statement](#adding-more-criteria-to-a-statement)
  - [Broadening and limiting responses](#broadening-and-limiting-responses)
  - [Organize responses with ORDER BY](#organize-responses-with-order-by)
  - [Find information about the data](#find-information-about-the-data)
  - [Solution: Retrieve data from the database](#solution-retrieve-data-from-the-database)
- [**2. Ask for Data from Two or More Tables**](#2-ask-for-data-from-two-or-more-tables) (4 videos)
  - [Ask for data across two or more tables](#ask-for-data-across-two-or-more-tables)
  - [Understand JOIN types](#understand-join-types)
  - [Grouping results](#grouping-results)
  - [Solution: Practice with JOINs](#solution-practice-with-joins)
- [**3. Data Types, Math, and Helpful Features**](#3-data-types-math-and-helpful-features) (6 videos)
  - [Data types in SQL](#data-types-in-sql)
  - [Math in SQL](#math-in-sql)
  - [Compound Select](#compound-select)
  - [Transforming data](#transforming-data)
  - [Creating aliases with AS](#creating-aliases-with-as)
  - [Solution: State score metrics](#solution-state-score-metrics)
- [**4. Add or Modify Data**](#4-add-or-modify-data) (4 videos)
  - [Add data to a table](#add-data-to-a-table)
  - [Modify data in a table](#modify-data-in-a-table)
  - [Removing data from a table](#removing-data-from-a-table)
  - [Solution: Identifying the correct record](#solution-identifying-the-correct-record)
- [**Conclusion**](#conclusion) (2 videos)
  - [Overcoming common SQL mistakes](#overcoming-common-sql-mistakes)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning SQL programming](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=0)** - [Scott] Our world is driven by data, and a lot of that data is stored in [Databases](../../Skills/Software%20Development/Databases.md). In order to unlock the information and insights stored in databases, we need a way of asking for data. One common language for asking about and modifying data in databases is [SQL](../../Skills/Data%20Science/SQL.md). In this course, I'll explain what SQL is, and I'll take you through an introduction to the language. You'll see how to ask questions of databases in a structured way to get the information you need. We'll focus on the language itself, not any particular tool. And the amount of setup you'll need to do in order to get started is minimal. The goal of this course is to get you comfortable working with the basics of the language using a database that already exists. We'll look at how to get information from more than one database table, and I'll introduce some more features and functions of SQL. After that, we'll take a look at adding and modifying data in tables that already exist in a database. We'll end with a quick look at overcoming some common pitfalls in working with SQL. This course will help prepare you to work with SQL in programming, [Data Science](../../Topics/Data%20Science.md), or [Data Reporting](../../Skills/Software%20Development/Data%20Reporting.md) applications. And it will provide a foundation for deeper learning about [Database Administration](../../Skills/Database%20Management/Database%20Administration.md), advanced SQL, and developing with data. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Data Science](../../Topics/Data%20Science.md) (1), [Data Reporting](../../Skills/Software%20Development/Data%20Reporting.md) (1), [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) (1)
> **Env Vars:** sql (6)
> **Prerequisites:** setup (1), you'll need (1)
> **Speakers:** - [scott] (1)

#### [Exercise files](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=0)** - [Instructor] The exercise files for this course, which contain the database that we'll be working with as we learn [SQL](../../Skills/Data%20Science/SQL.md), are available through [GitHub](../../Skills/Software%20Development/GitHub.md) to anyone watching the course. The files are divided into a few folders and I want to take a moment to explain those before we explore the database and take a look at the options for following along with this course. To use the exercise files on your computer, you'll need to download and unzip the exercise files. To do that, I'll visit the GitHub repository for this course and I'll click here on the green button and make sure I'm on the local tab. Then I'll find the option to download the zip file. Once that's downloaded, I'll find that on my computer, and I'll extract that zip file so I can use the files inside of it. As I mentioned, the exercise files are divided into three folders, one called SQLite, one called Other DBMS, and one called Notes. The SQLite folder contains the database file that I'll be using in the course, and it's the one that I recommend you use as well. The other DBMS folder contains the same database but in formats that can be imported into software like [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) or other [Database Management](../../Topics/Database%20Management.md) systems. And the Notes folder contains a text document with all the commands that I use in the course for your reference. You'll be able to open this file in any plain text editor, though I recommend you view it on GitHub. It can also be helpful to keep notes as you go along. If you plan to do so, I recommend Visual Studio Code for Mac, [Windows](../../Glossary/Service/Windows.md), or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md),
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=94)** or you can use the plain text mode of your systems text editor. The database that the course uses, which is called Quiz Data, includes two tables. One called people and one called states. The people table contains some information for a thousand people in the US who participated in a fictional quiz competition. The table includes their scores, what team they signed up to be part of, an ID number, whether they chose to get a shirt or a hat for participating in the competition and some other information. The states table includes abbreviations and full names of states in the US and information about what census region and division each state is part of. Throughout the course, we'll use this information in different ways to explore how SQL works. As you might have guessed by now, there are a few different ways of following along with this course and I'd like to take a moment to discuss each of them so you can choose which option is best for you. The first way of following the course is to download and install a free program called DB Browser for SQLite on your computer and use it to open the exercise files. This is the method that I'll be using in the videos for the course, and I recommend that you also use this method if you're able to do so. In fact, the next video covers how to use that software in more depth. The second way to follow the course is to import the appropriate SQL file into other database management software. I don't necessarily recommend this method because it can become somewhat complicated, but the files are available if you need to take this route. The third option, which is useful if you aren't able to install software on your computer or if you want to work in an environment
>
> **[3:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=186)** that isn't stuck on one computer, is to use GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). GitHub Codespaces is an environment that runs in the browser without any software needing to be installed on your local machine. Anyone with a free or paid GitHub account can use GitHub Codespaces. Let's take a brief look at how that works. To launch a Codespace, I'll visit the courses GitHub repository. I'll create a fork or a copy of this repository in my own GitHub account by clicking the fork button up here, and I'll go through that process. When I have my own fork, I'll click on the green button up here and make sure I'm on the Codespaces tab. Then I'll click create Codespace on main. This starts up the in-browser Codespaces environment, and when it does, you'll be prompted to install the SQLite viewer extension. I recommend that you do so that you can use it to explore the database. I'll click install. I'll close this terminal down here because we won't be using that and I'll move back to my readme. In this environment, we don't need to do anything special to get the exercise files. The database is already right here in the SQLite folder. I'll open that up. I'll click open anyway, and then choose the SQLight Viewer. And there's my tables. To work with the database, we'll need to connect to it, so I'll open the command palette here with Command + Shift+ P on a Mac or Control + Shift + P on Windows. There I'll type SQLight and find the open database option.
>
> **[4:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=281)** Then I'll select quizdata.db. To write the queries that you'll see in the course, you can create a blank file here on the left by right clicking and choosing new file, and then call that something like working.sql.
>
> **[5:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=302)** I'll split my window here by finding the split editor button and holding the alt key and then clicking it. Then in the top copy of the working file, we can write a query. Like SELECT * from people. Don't worry about what this does right now. We'll explore that in just a little bit. To run the query, I'll open the command palette again and find SQLight: Run Query.
>
> **[5:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=334)** When I do, I'll see the results down here in the lower area. Again, GitHub Codespaces is a useful tool for following the course if you don't want to install software in your computer or if you want to work in a cloud environment that isn't tied to one computer, but it's one of three options available for following along with me. I'll be using the DB browser software on my computer and we'll explore that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (10), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Database Management](../../Topics/Database%20Management.md) (2), [Windows](../../Glossary/Service/Windows.md) (2)
> **Tools:** github (10), visual studio (1), terminal (1)
> **Exercise Files:** exercise files (6), zip file (2), download the (1)
> **CLI Commands:** find (4), make (2), unzip (1)
> **Env Vars:** sql (4), dbms (2), select (1)
> **Prerequisites:** install (5), you'll need (1)
> **UI Navigation:** open the (3), click on (1)
> **Definitions:** is called (1), is an  (1), is a  (1)

#### [Exploring DB Browser for SQLite](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=0)** - [Instructor] When we work with [SQL](../../Skills/Data%20Science/SQL.md), we need some kind of tool that lets us write a statement and then send that statement to database software that will interpret it and give us a result. There are many different programs and applications that can understand SQL. And often, an SQL statement will be embedded inside of the code for an application or program. Because I can't cover all the software someone might use to write SQL, I've chosen an application that works on all major platforms and is free. Many applications that use SQL take a lot of setup. And I don't want to get bogged down with that here at the beginning. You can follow along with this course on your desktop or laptop computer with a free application for [Windows](../../Glossary/Service/Windows.md), Mac and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) called DB Browser for SQLite. It's available from [SQLitebrowser.org/dl](https://SQLitebrowser.org/dl). Download the file and install it according to the instructions for your platform. If you're using Windows, chances are you'll want this one, the installer for the 64-bit version. If you're using Windows, but you're not able to install software on the computer that you're using, you can try out the zip version or the standalone version of the software instead. On a Mac, this is the one you want. And if you're using Linux, you can find instructions for your system down below. Install the software and then open it up. I already have the exercise files downloaded here on my system. So if you don't have them, be sure to download them and unzip them if need be. After downloading and unpacking the exercise files, find the open database option in the toolbar, and browse to where you downloaded the exercise files. Open up that folder and browse to the SQLite folder and then find the quiz data file. Click open. And that will open the database here in DB Browser. Let's take a quick tour of the software.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=95)** Here under the database structure tab, we see the database structure. It's a pretty simple database with a couple of table. We'll get more into those details as we explore the data in a little bit. Here, you can see the create statement for the tables. We can browse through the data in each table using this next tab. And then if we click over to the execute SQL tab, we have an area where we can write and run SQL statements. I want to make sure my font is large enough. So I'll go into the preferences. In this version of DB Browser, it's under edit and then preferences. In the SQL section, there's options for the SQL editor font size and log size. I'll set these to something larger. You can pick something that looks good to you, or you can leave it set as is. I'll try 16. And I'll change the color of strings that we type from this really bright red to a more muted orange. That's just a preference and you don't need to do that. And you don't need to change the font size if you don't want to either. These changes just help things look a little nicer here on my screen. I'll click save and go back to the editor. Now, I'll write a very quick SQL statement here in the execute SQL tab to check things out. I'll explain the statement later. But for now, this will show us how some other parts of the interface work. Throughout the course, we'll be writing SQL statements and running them. So to run the statement, I'll either click the play button up here or press F5 on my keyboard. On a Mac and on some PC laptops with media keys,
>
> **[3:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=191)** you may need to hold the function key to get F5 to work. And on a Mac, you can press command + R or command + return to run the statement too. Here's the result of our query. Again, don't worry about exactly what this is right now. We'll explore it later on. Down here at the bottom of the window is a status message back from the database server about what happened. This is useful for troubleshooting. And it's good to keep an eye on this to see what the database did when we asked it to run a statement. Over here on the right side, are some panels we can get rid of if we want to. Click the X button to send them away, or pop the panel out so it floats on its own. You can click the icon with the two overlapping boxes, and you can put it back by dragging. To toggle these side panels, we can also go to the view menu and choose them from the list. I'm going to get rid of all of these by going down to window layout and choosing simplify window layout. I want to draw attention to one panel you might want to use, the SQL log.
>
> **[4:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=249)** It keeps a record of every command sent to the database for this project. I'll make sure I'm looking at the user section. So I have a running history of everything that I've typed. This is useful because if I go over here and type another statement in the query window,
>
> **[4:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=270)** and run it, all of the statements in this query box run. So if I just wanted to run one statement, I would need to erase what I had before, and then run my single query. You can also select one query by painting it with the mouse and run it just by itself. But the log gives us a running history. So if you delete a statement that you ran in the query window, it's not gone forever.
>
> **[5:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=311)** You can copy and paste from the log back into the query window. The DB Browser for SQL Lite software is focused on writing SQL and managing one type of database, SQL Lite, which is popular for storing data in mobile and desktop applications. So there's all kinds of features in the software that we won't be using in this course. But I really like the software because it makes it easy to have an offline database on your computer without having to set up developer tools and database servers and all kinds of complicated, extra stuff. You may need to do that down the road, but we're not focusing on that right now. I also like the software because it's consistent across all three major platforms and it's free. If you want to use different software, that's fine, but you're on your own for setting that up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (16), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **Env Vars:** sql (16)
> **CLI Commands:** find (3), make (2), unzip (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **UI Navigation:** in the toolbar (1), open the (1), toggle (1), go to (1)
> **Exercise Files:** exercise files (3), download the (1)
> **URLs:** [sqlitebrowser.org](https://sqlitebrowser.org) (1)
> **Cross-References:** go back to (1)

#### [CoderPad tour](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has three areas, instructions in the top left, a console for output in the bottom left, and the code editor for your answer on the right. You can use these drag handles to allocate space as you like. To get even more horizontal space for the code editor, you can collapse the courses table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's desired result. Create your answer in the code editor. When you click Test my code, you'll see a message indicating whether your code returned a correct result, and a text-based version of the return data.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=72)** If your answer doesn't create a correct result, you'll see a message telling you that the code is incorrect and showing the data that was returned.
>
> **[1:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=86)** If your answer doesn't create a correct result, you'll see a message telling you that the code is incorrect and showing the data that was returned. If any messages are too long to fit in the console, you can scroll sideways to see all of the text. When you finish each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [What is a database?](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=0)** - [Instructor] Before we start learning about a language used to talk to a database, we need to have an understanding of what a database is. At the most basic, a database is a collection of information. Think about a list of people, the city they live in, and their favorite color. This gives us three kinds of information, a name, a city, and a color. In a database, the individual kinds of information are organized into columns, and each set of information is organized into rows. Often, the columns are called fields, and the rows are called records. You can think of a record like a card with an individual person's information on it. The cards all have the same spaces for information. They have the same fields. But each card pertains to one person, and each one is an individual record. Together, fields and records make up a table, and one or more tables make up a database. With this kind of basic information in one table, we could use a spreadsheet like [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) to keep track of our data. But [Databases](../../Skills/Software%20Development/Databases.md) allow us not only to add more tables, but also to set up rules and relationships between the tables. The layout and definition of how fields, tables, and relationships are set up is called the schema of the database. Creating setups with relationships and other parameters is beyond the scope of this course, but if you want to learn more about how these [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) work, be sure to check out [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md): Databases here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. While the row and column arrangement of data in a table can look like a spreadsheet, it's difficult to ask some kinds of questions
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=93)** about this data using a spreadsheet. With a spreadsheet, we can easily say what the sum total of a row or column is or sort information alphabetically. But if we wanted to ask how many people in New York like the color purple, it gets a little bit more complicated. That's where databases become helpful, and that's why we have [SQL](../../Skills/Data%20Science/SQL.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **Prerequisites:** set up (2), before we start (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [What is SQL?](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=0)** - [Instructor] [SQL](../../Skills/Data%20Science/SQL.md) stands for Structured Query Language, which is a language for manipulating and defining data in [Databases](../../Skills/Software%20Development/Databases.md). It first came into use in 1974 and became a standard in 1986. SQL gives us a standardized way of asking a specific question of a database, or for making a structured query that a database knows how to respond to. There's a whole lot of formal math behind how SQL was designed and defined, but in this course, we're not going to cover that. We'll focus on the practical usage of the language. And if you want to explore the academic history of SQL, I encourage you to do so. SQL gives us a way of writing questions a database can understand. Databases aren't clever and they can't figure out meaning from a question the way a human can. If I were to ask you a question like, "How many people on the winning team asked for shirts?", you, a person, could pretty easily understand what I'm asking you. Even given just a list of team members, points, and shirt preferences, you could eventually figure it out. But give that same list to a database and ask the same question, and you'll probably get whatever the computer equivalent of a blank stare is. The computer doesn't know how to understand the meaning or intention of my question. To make questions like this approachable for a database, we need to break them down into a series of smaller questions that are structured in a way that the database software can understand. Because it's such a powerful way of thinking about data, SQL has been adopted into many database [products](../../Skills/Software%20Development/Microsoft%20Products.md). Some products support the SQL standard
>
> **[1:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=92)** and add other features on top of it, and some support part, though not all, of the SQL standard. In this course, I'll cover the basic and widely supported parts of SQL that you're likely to use, whether you're working with [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) [Transact-SQL](../../Skills/Software%20Development/Transact-SQL%20(T-SQL).md) or T-SQL, [MySQL](../../Skills/Software%20Development/MySQL.md), [Postgres](../../Skills/Software%20Development/PostgreSQL.md), SQLite, and others. The way we say the name of this language can sometimes be a little bit confusing. The language is called SQL, or Structured Query Language, but was originally called SEQUEL, for Structured English Query Language. Maybe because of this, or because the letters themselves look a little bit like the English [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) sequel, some people pronounce the name of the language this way instead. This confusion extends to products with the name of the language in their names, like MySQL or MySQL or [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). I tend to prefer switching back and forth a little bit, calling the language itself by the letters and saying sequel when it's easier to pronounce that way, or when it flows better as part of the name of a product. Both ways are acceptable, though some people have strong opinions about it. Just don't call it squeal or squirrel or anything like that. Before we start building SQL statements, we need to understand what the basic parts of a statement are. Overall, something you write in SQL to get an answer from a database or to make a change to it is called a statement. SQL is generally white space independent, meaning that if you want to add some space or lines between clauses or expressions to make your statement easier to read, you can do so. In this course, I'll break statements across various lines in order to make them more clearly readable.
>
> **[3:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=186)** You can do this too. I find it really helpful when I'm putting together a more complicated statement so I can see what's going on. A statement is made up of clauses. Don't worry about what this actual statement does right now. We'll see how to make clauses on statements later in the course. Clauses are the basic components of statements, the smaller building blocks that make up the whole thing. These clauses are constructed out of various elements including keywords, which are special or reserved words which tell the database to take some action, field names, which let us refer to fields or columns of data whose values we want to use, table names, which tell the database which table to use, and predicates, which we use to specify what information or condition we're looking for. Predicates include a value or condition called an expression. A clause can be a statement if you're writing a really basic one. There are also operators, as we'll see later on, which let us compare equality or ranges of data or treat information in other ways. These keywords and operators are customarily written as uppercase, though usually they don't have to be. But it helps to distinguish the SQL from your expressions and field names at a glance. In this course, I'll follow the custom of writing them in uppercase, even though we have some syntax highlighting that will also help differentiate them. At the end of a statement, we put a semi-colon. This tells the database that a statement has ended. That's important because we can reconfigure some of the clauses in different ways and add more to the end of a statement. So we need to be able to tell the database that we're done
>
> **[4:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=278)** and that it can start figuring out what we're asking for. While the semi-colon is often required in order for database software to accept the statement as valid, not all database software enforces this. So it's a good idea to just get into the habit of using a semi-colon to end a statement as you would use a period to end a sentence. Any SQL we write that takes some kind of action is a statement. And sometimes you'll see a statement using the select keyword called a query instead. A query suggests that we're asking a question and when we're using the select keyword, that's generally the case. SQL statements can also be used to add, modify, or delete data in a database or even to create, modify, and remove tables. When we use SQL to work with data in existing tables, that's SQL being used as a DML, or [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language. These operations where we change data are generally called CRUD, short for create, read, update, and delete. CRUD is a common shorthand for referring to modifying data in a database. And the CRUD operations are central to working with databases. Crud is also something fun to say if you make a typo or mistake when working with SQL. When we write SQL to make changes to the structure of tables themselves or to change the database, that's SQL being used as a DDL, or data definition language. In this course, we'll focus on SQL as a data manipulation language working within existing tables. Once you're comfortable with that, you'll be ready to move onto courses
>
> **[6:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=371)** which focus on the structure of databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (23), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (2)
> **Env Vars:** sql (25), crud (3), sequel (1), dml (1), ddl (1)
> **CLI Commands:** make (8), mysql (3), find (1)
> **Definitions:** is a  (3), is called (2), stands for (1), short for (1)
> **Cross-References:** later in (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 1. Ask for Data from a Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Ask for data with SELECT](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=0)** - [Instructor] The most basic way of asking for information with [SQL](../../Skills/Data%20Science/SQL.md) is to use a select statement. Select statements start with the select keyword, which tells the database software that we want it to select, or choose, or collect specific information from the database and return it to us. In fact, we can use it to return information that isn't even part of the database. For example, if I wanted the database software to send me back some text, I could write select and put hello world or any other texts inside single quotes and end that with a semi-colon and I would get that text back regardless of the data stored in the database. Try it out for yourself. Anything you put in single quotes will get returned to you as text. Returning explicit text can be useful for some queries but we won't focus on it here. Instead, we can replace that statement in single quotes with some parameters that will tell the database software to start sending us information from the database. First, let's take a look at what the information in the database looks like. I'll click on browse data and make sure I have the people table selected. Here I can see the field names in my database across the top of this interface and each of those field names is something I can use to ask the database for information. So to see all of the first names in the database, all of the values in the first name field in the people table, I can write SELECT first_name FROM people;
>
> **[1:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=99)** and the result here is a listing of every value in the first name field in my database. If I wrap that field identifier in single quotes, I'd get back the text string instead. Remember single quotes are for literal text. Though you may see back ticks, the little diagonal apostrophe character, around identifiers on certain database platforms here and there as well. I'll get rid of those and select the last name field instead of the first name. I can ask for results from more than one field by adding multiple fields separated by commas. Let's return the first name and last name for each row in the people table. To do that, I'll write SELECT first_name, last_name FROM people; and end that with a semi-colon. I can change the order of the fields too. Whatever order these fields appear in the query will be the order of the fields in the output. For example, I'll take last name and put that as the first field.
>
> **[3:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=182)** Then I'll run the query and I can see the result here. Last name and then first name. If we want to get a response that shows all of the fields in a table instead of just listing them one by one, we can use a wild card operator, the star or asterisk, which represents all of the fields in a specified table. Using the asterisk is useful when you're exploring data but we'll rarely use it in an app or report because it returns a lot of information and usually we want to do more interesting things with our data than just dump all of the information into one big result. Let's use the select statement to get a little more familiar with it. From the select star statement that I just wrote, I can see the column names in the table that I'm working with. Let's experiment with some of these names. I'll look at first name, the state code, and company
>
> **[4:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=241)** and then company, first name, and quiz points. (keyboard clicking) If you'd like, take some time to try out other combinations. Selecting data doesn't change anything in the database so it's a great way to explore this data set and any other data set that you might be working with in the future. The select statement gives us the ability to read data and that's one of the actions that's represented by the acronym CRUD. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this chapter, we'll take a look at how to add on to basic select statements to find the data we need and get it in the form we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** select (2), sql (1), crud (1)
> **Code Identifiers:** first_name (2), last_name (1)
> **CLI Commands:** make (1), find (1)
> **SQL:** select (2)
> **UI Navigation:** click on (1), select the (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### [Narrow down a query with WHERE](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=0)** - [Instructor] When we're asking the database for information, it's very helpful to be able to give some parameters. We can use the WHERE keyword to add a condition to a SELECT statement. For example, if I wanted to see all of the records only for people who live in California, I could use my SELECT * statement and then add a WHERE clause with a predicate or condition, state_code=CA. In this predicate, CA is an expression. In this case, the text we use here in the expression is case-sensitive which means that if the capitalization differs from what's in the database, it won't match. We might look at lower-case ca and upper-case CA and think of them as the same thing, but to the database, they're completely different. Whether a field is treated as case-sensitive or not is something that can be defined when constructing the table as part of the database schema. I'll change capital CA here, to lower-case ca and run my query again. No results. But upper-case CA works because it matches these values in the state_code field. We can try this out with a different state by changing the expression. I'll change CA to FL and there's the participants from Florida. We'll change that to WA and there's the Washingtonians.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=95)** And if I change it to NY, I can see everyone who participated in our quiz who lives in New York. We can also use a different field. Let's change the field in our predicate to ask, instead, who all in our database had asked for a shirt, as opposed to a hat when they signed up for our contest. The field that contains that is called shirt_or_hat and I'll set the match condition to shirt. Looking at the result in the shirt_or_hat column, I can see that every record that was returned is for shirt, and none are for hat. I know that the values in this field are only lower-case shirt and lower-case hat. If I had asked for something that didn't appear in this field in any of the records, like a mug, I'd get no results back. We can start to see how this might be helpful if we want to use this data for something but we still have a lot of fields displayed in the output. Let's narrow it down a little bit by using just a few fields, instead. (keyboard keys tapping)
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=171)** So here's a list of the names of people who had wanted a shirt. We can verify that by adding on the shirt_or_hat field here, in the SELECT clause. And all of the fields for all of the records we see here are, in fact, shirt. But we know that, so we can remove that field from the query if we don't need to use it later, down the line. And of course, if we ask for a value where that value doesn't exist, we'll get no results, as we would expect. It's important to point out that these clauses need to be in this order to work. If I switch them around, for example, putting the WHERE clause first, it still makes sense to a human: WHERE shirt_or_hat a shirt, select some values, we know what that means, but the database doesn't and it'll give us an error. The same is true if we move the order around in another way that makes sense to humans. That totally makes sense. FROM people SELECT these fields WHERE this is true. But again, this is not how the database software needs it so it's not valid [SQL](../../Skills/Data%20Science/SQL.md), so it fails. Remembering the ordering of clauses can be tricky and it's worth practicing. This is one place where adding white space as I'm doing here, can really help to solve problems with syntax. When things are all on one, long line, it can be more difficult to visualize what you're asking the database to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** where (5), select (4), sql (1)
> **SQL:** where (5), select (4)
> **Code Identifiers:** shirt_or_hat (4), state_code (2)
> **Definitions:** is an  (1), means that (1), is called (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Adding more criteria to a statement](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=0)** - [Instructor] When we're asking for a set of fields from a database, we can pretty easily find values that match a term exactly. All the people who signed up to get T-shirts or all the people in California. But we can add a little bit of logic to our statements, too, in order to start to ask more interesting questions about the data. For example, we could ask for the names of everyone who is in California and who asked for a shirt. To do that, I would write SELECT first_name comma last_name FROM people WHERE state_code=CA AND shirt_or_hat=shirt. This AND here, is a logical operator and [SQL](../../Skills/Data%20Science/SQL.md) supports these logical operators as part of a predicate. You can chain logical conditions together if you want to ask for records that have more conditions fulfilled. I'll add a team here, as another condition and I'll add it to my SELECT statement as well, so we can see the result. This will search for people in California who wanted a shirt, who signed up for the Angry Ants team. We could also take this last condition here, and write != which means not equal. So as I can see from browsing the data here, that shows me every matching record for people in California who wanted a shirt but who is not on the Angry Ants team. We can also use the operator IS which can operate like the equals sign. And here, we have the same result
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=94)** as using team=Angry Ants. Or we can switch out IS for IS NOT and get the records that have anything except Angry Ants in the team field. We can use the less-than and great-than signs right together, as a not equals operator, as well. Rather than asking for many conditions that are all true, we can use the OR operator to tell the database that I want results where one of two conditions is true. Let's say we wanted to see everyone who wanted a shirt but only those who are in California or Colorado. I'll modify my statement here to say WHERE state_code=CA OR state_code=CO AND shirt_or_hat=shirt. In the SELECT clause, I'll make sure to look for shirt_or_hat and the state_code, along with a first and last name. I'll run this and, well, that's not what I was looking for. There's all kinds of hat people in here, and I just wanted shirt people. Why is that? The database is interpreting each of my conditions as it goes along, so it's giving me records where the state is California or the state is Colorado, and also the records where shirt_or_hat is shirt. The database is thinking about those last two conditions as being paired together, so we see every record where California is the state, including the ones where hat is in the shirt_or_hat field in addition to records where the state is Colorado and the shirt_or_hat field is shirt. What we want to see is the state being
>
> **[3:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=193)** either California or Colorado and within that group of records, only the ones where shirt_or_hat is shirt. So we need to add some parentheses here, around the state selection to make it clear that we want to get back either California or Colorado and then ask within that set for records that match shirt. Parentheses around conditions let us tell the database what to interpret first, similar to how we'd use parentheses in algebra to say do this part first before evaluating the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the problem. Now I have what I expected, no hats, only shirts and only in California and Colorado. If I move these parentheses over to the right a little bit, I can replicate the effect I was getting before, though now with more explicit focus on what's going on. Parentheses are a really useful tool for shaping the meaning of your question for the database. You can use more than one set if your query is extra complicated, too. Incorrect grouping is a very common mistake in writing statements, and it can be a tricky thing to troubleshoot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** shirt_or_hat (7), state_code (4), first_name (1), last_name (1)
> **Env Vars:** select (3), where (2), sql (1)
> **SQL:** select (3), where (2)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Warnings:** common mistake (1), troubleshoot (1)

#### [Broadening and limiting responses](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=0)** - [Instructor] While we usually want to be very specific when we're setting the conditions for what data we want back from the database, sometimes instead we need to be a little bit less specific about what we're asking to match, and to look for values that match some part of a field, but not all of it. For that, there's the LIKE operator. The LIKE operator works with a percent sign representing the part of the field we don't really care about. If we wanted to say, show me all the records whose state_code starts with the letter C, we could write out a long statement with logical OR operators, with state_code="CA", OR state_code="CO", OR state_code="CT", and so on. Or we could say state_code LIKE 'C%' This tells the database to match the letter C, and then whatever comes after it, we don't care about, regardless of how much information follows the letter C. We just care about records whose value in this field matches the first character. Or we can change that around and put N first, for example. Or put the percent at the beginning, to match any state whose code ends with N, states like Indiana, Minnesota, Tennessee, and so on. Or we could say, give me all the first names, that start with A. Or with J.
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=94)** And you can add a percent to each end of the string too if you want to match the text somewhere in the middle of the field. This is a little bit subtle. I'll scroll down to record number 594. And I can see that while some of the match names are Jack, Jacquelyn, Joyce, and another Jacqueline, having a percent at each end with a J in the middle also matched the string, "Benjamin." Let's switch out the condition for some other texts, and you can see how it works. For example, I'll replace J with ON. And here I have Bonnie, Jonathan, Donna, Sharon, Raymond, and many other people whose names contain ON. Notice here that this isn't case sensitive, I'm using capital letters in my condition, but it's matching lowercase ones. Columns can be defined to be case sensitive or not, and that depends both on which variety of database software you're using, and whether the column has been set to case sensitive collation or not. We're not going to worry about that here though, and we'll use LIKE in a case insensitive way. We can also put the percent sign in between characters, like this. I'll change the condition to LIKE 'B%N' I'll run that, and now I have the names starting with B and ending with N, regardless of how long they are. Let's look in the company field instead, and say, look for all of the company names that end in LLC. We can also tell the database
>
> **[3:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=190)** how many responses we'd like to see with the LIMIT keyword. LIMIT tells the database to stop returning results after a given number of them have met our search criteria. So if I wanted to only see the first five records in the database that matched this last query, I can do that by adding LIMIT 5. And now I only have five records. Or I could ask for the first 10. And if I wanted to see a specific range of them, like the second set of five, these here, I can use the offset command to tell the database to skip some records before counting off my five. I'll change this to LIMIT 5 OFFSET 5. And here's the second set of five in the database. The limit keyword can be useful in conjunction with some other tests where value is involved, as we'll see in the video about math, or when interacting with a very large database.

> [!info]- Semantic Content
>
> **Env Vars:** limit (4), llc (1), offset (1)
> **Code Identifiers:** state_code (5)
> **Analogies:** for example (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Organize responses with ORDER BY](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=0)** - [Instructor] When we get information back from a query, it can be in an order that isn't always helpful. So to sort data, we can use the ORDER BY keyword. Let's write a statement that will return a lot of rows. We'll get the first name and last name from every record in the people table. Looking at the result, it looks like it's all over the place in terms of sorting. This is the order that the records are stored in the database, sure, but that's not how I want to see them. So to change how they're sorted, I'll add an ORDER BY clause here at the end, and I need to give it a field with which to sort. Let's sort by first name for now. There we go. These first names are sorted alphabetically. These are sorted in an order called ascending which means that the lower the value, the earlier in the list it comes and the larger, the later it comes in the list. As we go through the list, the values ascend higher, or in this case later in the alphabet. Ascending order is the default which means that that's what I'll get if I don't tell the database to do it another way. I can also specifically tell the database to sort in ascending order by adding ASC. Or I can switch the order to descending with DESC.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=90)** Descending order puts large values first in the list and then the value descends or declines to the smallest values at the end. We can add more fields to sort on after the first one as well if we want to add a secondary or tertiary sort order. For example, we could sort first by state and then within state, sort by last name. To do that, I'll write SELECT state_code, last_name, first_name FROM people ORDER BY state_code, last_name.
>
> **[2:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=129)** And here I have the data listed alphabetically by state. And then within that for each state, the data are sorted by the last name in ascending alphabetical order. I can change the last name sort to descending order while the state is still in the default, ascending order. And here I can see that the sort order of the states is still the same but now the records are reordered in reverse alphabetical sequence by last name within the state. Returning data in a particular order is a useful thing to do in reporting and when you're working with data in an application. You might, for example, want to return records about [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) cases in descending order by ticket ID or date to save the end user having to sort the data you provide themselves in order to find recent tickets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (1)
> **Env Vars:** order (3), asc (1), desc (1), select (1)
> **Code Identifiers:** state_code (2), last_name (2), first_name (1)
> **SQL:** order by (3), select (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)

#### [Find information about the data](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=0)** - [Instructor] Instead of just getting back records that match our queries, we can use some other functions and commands to find out more about the data itself. Let's take a look at ways of describing the data by finding out how long the values and fields are, how many distinct values a field contains, and how many values match some criteria. I'll write a simple query here to get the first name of everyone in our database. And let's add the first_name field here in the SELECT clause again. But this time I'll wrap it in a function called LENGTH, which will tell us how long the information in the given field is in characters, rather than the value of the field itself. And checking just a little bit here, I can see that this matches up with what I'd expect. Janice is six characters long. Wanda is five characters long. Jack and Ryan are both four characters long, and so on. We can use that on some other fields too if we wanted to explore a little bit. It can be helpful to get a listing of unique values in a field as well. We have 1,000 rows in the people table, but I know there's many people with the same first or last name. Let's take a look at pulling out only the unique values, or the values that are distinct from one another with the DISTINCT function. This will filter the information that I get back from the database, and I'll get one result for each unique first name in the table. If it finds a second instance of a name that it's already seen, it ignores it, so I'd just get one result if there's one name,
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=93)** and one result if there's 100 records with the same name in the field I'm asking about. Notice here in the size of my result it's 198 instead of the 1,000 records I know exist in this table. That's because some of my participants have the same first name. So if I've counted an Aaron, and the query comes across another Aaron that Aaron and all subsequent Aarons are skipped in this result. I can make that a little bit more clear here with an ORDER BY clause at the end of my statement.
>
> **[2:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=128)** Here, I can see only one Aaron, only one Adam, and so on, even though I know there are more than one records with each of those names in this table. This is also a helpful way of seeing what all the values in a given field might be. Names, of course, will vary. But if we wanted to check that we really do only have shirt or hat in the field called shirt or hat, we can take a look at the distinct values there. And in this case, I'll remove the ORDER BY. I'll run the query, and I get back two results, shirt and hat. It looks like this field is being used correctly. We also use the COUNT function to see how many records match a given criteria. If I wanted to count how many people are from California in our database, I could write SELECT and then use the COUNT function on a specific field, or on all fields FROM people WHERE state_code equals CA. And I see that I have 127 records where the state is California. Because I care how many records match this condition, I can also use the field that I'm looking for, or another field where I know there will be data. But if I choose a field that doesn't have data in all of the rows, as we'll see in a little bit, I get a different number. That's because while there are still 127 records that have the state code of CA, there aren't that many values where the state code is CA, and which have a value in the company field.
>
> **[3:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=221)** We'll use the COUNT function more later on, and it'll start to become even more useful combined with some other approaches.

> [!info]- Semantic Content
>
> **Env Vars:** count (3), select (2), order (2), length (1), distinct (1)
> **SQL:** select (2), order by (2), where (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** first_name (1), state_code (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Retrieve data from the database](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge. First, I used SELECT to create the output columns that the challenge asked for. Team, shirt_or_hat, first_name, and last_name. Those are from the people table, so that's my FROM clause. And the challenge asked for only participants from Colorado, which I used state_code = 'CO' to narrow down. The challenge also asked us to sort the data in a pretty specific way. To do that, I used an ORDER BY clause and provided three fields. First is team, which will sort the people alphabetically by the team field. Next is shirt_or_hat, and this will have the effect of sorting people first with hat, and then with shirt, within each team. Finally, I wrote last_name DESC to sort the people of each hat or shirt group for each team in reverse alphabetical order as the challenge requested. So, let's test my solution here. There we go. It's correct. And here, we can see the effects of these various ORDER BY conditions. If you got the same output, congratulations. If not, spend some time revisiting your solution and try again.

> [!info]- Semantic Content
>
> **Code Identifiers:** shirt_or_hat (2), last_name (2), first_name (1), state_code (1)
> **Env Vars:** order (2), select (1), desc (1)
> **SQL:** order by (2), select (1)
> **Speakers:** - [instructor] (1)


### 2. Ask for Data from Two or More Tables

[↑ Back to Table of Contents](#table-of-contents)

#### [Ask for data across two or more tables](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=0)** - [Instructor] One advantage of working with [Databases](../../Skills/Software%20Development/Databases.md) is that we can use data for more than one table to answer a query. Of course, you can work with data across many spreadsheets using a lookup function, and in a database, to accomplish the same thing, we use the join keyword. There are a few kinds of joins, a few different ways of using join to attach data together. But we'll just look at one in this video, the inner join, which is often just called a join. The idea behind a join is that we're asking for pieces of data or records that somehow associate with each other, that connect or correlate in some way by way of some common piece of information that we tell the database to match up from one table to the next. For example, this diagram shows how we might join the people and states tables using the state code and the state abbreviation as that common piece of information. In one table, I have information about some people, and in another table, called states, I have information about states in the US. Running this query here would result in this response, showing records from both tables snapped together based on that connection I made between the state code on the people table and the state abbreviation from the states table. Don't worry too much about the [SQL](../../Skills/Data%20Science/SQL.md) statement here, though. We'll build up to this in just a moment. We could perhaps use this information to print out regionally-customized t-shirts for people who participated in our contest, with mountains on the shirt for people in the mountain division, and maybe a nice lighthouse logo for the New Englanders. Of course, what you do with your data will be different, but everybody likes a free t-shirt. Let's take a quick look at the states table
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=94)** so we know what we're working with. Here's the state abbreviation, the full name of the state, and the census region and division. I have 50 records here, one for each of the 50 states. To start out with, let's get a list of first names from the people table and the abbreviation of the state that they're from. To do that, I'll write select first name, comma, state code from people. And then we'll connect that to the states table and associate the census division to each record as well. To do that, I'll use the join keyword. I'll make a new clause here so we can see it better. After the from clause, I'll write join states. That tells the database that we're going to be associating the states table in the statement. And if I run this, it'll work. Or more specifically, it won't cause an error, but it returns us 50,000 records, because we haven't been specific enough. So we'll get back a copy of all the records in the states table for each record in the people table. Not too helpful. To be more specific we need to tell the database what pieces of information we want to associate from one table to the next. To do that, here in the join clause, I'll add ON people.state_code equals states.state_ abbreviation. This dot notation with the table, a period or dot, and the field name from that table lets us avoid confusion by telling the database which table to use to find each field.
>
> **[3:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=189)** Nothing in this database has the same field name across different tables. But if it did, I would definitely need to be specific, or I'd get an error. So it's a good practice to just use this notation all the time. I could say state code equals state abbreviation, and that would work here, but I'll stick with using table names. This statement now says whenever you return a record from the people table, for the associated record in the states table, use the state value in the people table and match it to the state abbreviation value in the states table. These two values need to be identical. Otherwise, the database won't be able to match them. Okay, we have a way of looking up values, so let's add one of the values from the states table to our results, so we can see that it's working the way we expect. Here in the select clause, I'll add states.division, and to keep with best practices, I'll add the people table name to the front of the other fields. Again, in this case, it would work without them, but it's a good idea to be thorough and specific. Then I'll run the query, and there we go. We have two columns from the people table and then one from the states table. If we wanted to have some fun, we could use the star operator in the select clause instead of individual fields. This returns all of the fields on both tables. Here's the fields from my people table, and over here on the right are the four fields from the states table You may recognize that this is the statement for my diagram earlier in the video.
>
> **[4:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=281)** Because this is one data set that gets returned, we can treat it like it's all one table, too, and make queries based on any of the columns here. So I could look for people whose names start with J and who are in the South. It looks like 65 records match that search. Here we can see the power of using data that we have to gain insights. We could accomplish a similar goal if we knew which states were in the South and wrote a long where clause listing each one, but we already have information about which states are in the South, and we can let the database do the work for us. You can also join across more than two tables, but that's not something we're going to do here. It works the same way, though, and you just add another join clause before your where clause. We can also ask for data across tables without using the join keyword and just using the dot notation for the table names and the fields on them.
>
> **[5:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=348)** Well, that works just the same as writing join explicitly. In fact, this is called an implicit joint, when we don't write it. It's usually best to use the explicit join syntax, just to keep things clear. It's also possible to end up with unintended consequences, like a cross join, when using an implicit join, so be sure to use explicit join syntax to avoid that. And if the tables have long names, we can give a nickname to the tables as well, to make it easier to use fields across both tables without typing the table name every time. Here, PPL is an alias for the people table, and ST is an alias for the states table.
>
> **[6:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=392)** And these can be more descriptive if you'd like, but the reason we'd use these as to reduce verbosity. so you may want to stick with something short. Joins enable us to work with data in more than one table, and that's often a very important part of working with data, whether you're an analyst, a developer, a data scientist, or pretty much anything else.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (2), is called (1)
> **Env Vars:** sql (1), ppl (1)
> **Code Identifiers:** state_code (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)

#### [Understand JOIN types](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=0)** - [Instructor] When we use a join to associate data across tables, there are a few ways we can go about it. Let's think about our two tables as being on the left and the right in some kind of imaginary workspace. Left and right in this sense are the table named first in the select statement on the left and the table we're joining to on the right. If we just leave a statement without any kind of qualifying parameters, we get a resulting table that's the size of the left table times the right table. We get back one of every row from the right table for every row of the left table. Notice how here in the result there's three results for Marcus and California, one associated with each of the entries from the states, and then when that's finished, there's three entries for Jennifer and Virginia, and so on. This was called a cross join, and we won't use it too much. When we ask to join tables based on some given criteria, that creates overlap between the tables where the criteria match. The state abbreviation, CA, for example, on one table would be equated to CA in the other table, thereby joining those records together and associating data from the left table to data the right table. It's not a one-to-one relationship necessarily. We could have one key on the right side match that same key in more than one row on the left, but we might also have a condition where the records on the right or the left don't have a corresponding key to the other side. That's why we have other types of joins to account for situations like that. This basic join where we're asking for results from both tables where the state code field
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=93)** from the people table is set to match up with the abbreviation field and the states table is actually what's called an inner join. Inner and outer refer to the space where the records match or overlap. Here, CA and VA match up, but DE and MA don't match up. CA and VA would be considered inner because they're in the overlap space, and DE and MA would be considered outer. The inner join asks for the records that overlap, so that's what we see in the result over here. If we wanted to see all of the data from one table or another and then just get the matches from the other table where there's a match happening, we can use this outer concept to make that happen. To get back a result for every row in the left table, I'd use left join, which was also referred to as left outer join. And here in the result, there's a row for every row in the left table, the people table, and wherever there's a match for the right table, I have that information too, but if there's no match for the state abbreviation, for example, here with MA, I get back null values because there's no information about the key in the right table. So my result is the same length as the left hand table with the left join. If I wanted to make sure that I saw all the values in the right table instead, I could use right join. And in this case, I can see all the record values from the right table, some of which match the values in the left hand table. And if there isn't a match, I just see the values from the right table with null in the fields for the left hand table where there's no data.
>
> **[3:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=185)** Delaware here appears in the right table but doesn't have a corresponding row in the left table, and Devin from Massachusetts doesn't appear because Massachusetts isn't in the rightmost table and there's no match on MA. And we can ask for a row representing each record in both tables using a full outer join. This gives us the matches and also unmatched records from both the left and right tables. There are more complex kinds of joins that you may come across as you extend your skills with [SQL](../../Skills/Data%20Science/SQL.md), but these are the basics. You should also be aware that not all software supports all of the kinds of joins that are available in SQL. For example, my SQL doesn't support full outer join, and SQLite doesn't support right join or full outer join. We can practice with some of these joins here in the database software. Let's join up our quiz participants' names and state abbreviations with the full state name from the states table. This is pretty similar to what we saw in the last video.
>
> **[4:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=258)** There we go. We can switch up the order that we're joining the tables too, and we'll see that we get a different order of records. I'll switch the states and people tables here around the join keyword. Before I run this query, notice that Janice Howell is record number one. I'll run the query, and there we go. Notice that the association didn't have to change though because it's using the dot notation for clarity and because equality works both ways. It can be a good idea though, for clarity, to keep the instances where you refer to fields on different tables in the same order in which you're joining them, but it's not necessary. Now that the states table is on the left and the people table is on the right, let's switch this to a left join so we get all of the records from the states table instead of just the ones that match. I'll run this, and I notice that I have 1003 rows instead of the 1000 we had before. Scrolling down to the bottom of the result, I can start to see why that is. There's at least one record here in the states table that doesn't correspond to something in the people table. I don't seem to have any quiz participants from Wyoming, and given that I have 1003 records, I'm willing to bet there are two other states that don't match up with people in our people table. Let's write a query to match up the state abbreviations and the people table with those in the states table so we can see what else is missing. I don't need all these rows, so I'll use the distinct function to throw out duplicates and reduce the size of our result.
>
> **[5:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=355)** I'll change the select clause to read select, distinct, people.state code comma states.state abbreviation, and we'll run that. And to make the difference more clear, I'll add order by people.state code. Now, here at the top, I can see that there's three values from the states table that don't match the people table. None of our quiz participants live in Maine, Rhode Island, or Wyoming. Interesting. Joins can be confusing, but they're also extremely helpful for making use of the power of [Databases](../../Skills/Software%20Development/Databases.md) to represent and retrieve data. It can be helpful to draw out diagrams to support your thinking about joins as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (3), similar to (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (3)
> **Cross-References:** in the last (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Grouping results](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=0)** - [Instructor] When we need to divide results in various ways, we can use the GROUP BY keyword to change the way that a query works. Let's say we wanted to count up how many of each first name we have in our database. I'll write SELECT first_name, COUNT (first_name) FROM people. That should work, right? Hmm. That's a lot of Jameses. Why isn't this working like I expect? That's because when we ask the database to give us a count of the items in the first name field, we get one result, the number 1,000, and then that informs the size of the response, so we just get the first name value from the last record in the set. But if we add a clause to the end using the GROUP BY keyword, we can tell the database to run our SELECT clause against each individual grouping by the field that we specify. So I'll add that on the end here. At the end of the query, I'll write GROUP BY first_name, and then I'll run the query again. And that looks like what we want. This is a count of how many times each first name appears in the table. We can change this GROUP BY field to a different field. Instead of first_name, I'll use last_name, and I'll run the query. The only problem is that this is garbage information, because while we're grouping by last name and counting the occurrences of each, we're still returning the first name, which will be the initial first name in each of the groups of last names, which isn't at all useful. So I'll switch the other fields to last_name too, run the query,
>
> **[1:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=92)** and now the result shows us useful information again. Let's change this to count up how many of our quiz participants come from each state in the US. I'll change my query to read SELECT state_code, COUNT (state-code) FROM people, GROUP BY state-code. Here's the result, and it looks like I have the most participants from California and Texas, which seems pretty reasonable. When we group responses, we need to be careful that what we're asking for makes sense. The database will give us a response in a lot of cases, but it doesn't know if the response makes any sense to a person. Let's ask how many people from each state got which score. I'll write SELECT state_code, quiz_points, COUNT (quiz_points), FROM people, GROUP BY (quiz_points). The statement looks like it makes sense. We want to see the state and how many people got each score in each state. Select the state, count the quiz points, group by quiz points. The database will run this without a problem, and it gives us this result. Great, but there's just one problem. Once again, this data is garbage. I wanted to see how many people in each state got in which score, and I can already tell by looking at the data that's not what I have here. For one thing, I only have 36 rows. I know my data is missing a few states, but it's not missing that many, something's wrong. In order to make this grouping make sense, we need to add another criteria to group the results by. We need to group the results by state,
>
> **[3:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=185)** and then we need to group by quiz points. So the COUNT keyword counts scores of each quiz value within each state. Here in the GROUP BY clause, I'll add state_code in front of quiz_points, and again, I'll run the query. There we go, that's what we actually wanted to see. And if you go do the manual work of checking these results yourself, you'll see we've solved the problem. So be cautious about how you group your results. If you're not, you'll get a response that's basically meaningless. The database will dutifully report back what you asked for, so be sure to [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) your questions carefully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** group (7), select (4), count (4)
> **Code Identifiers:** first_name (4), quiz_points (4), state_code (3), last_name (2)
> **SQL:** group by (7), select (4)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### [Solution: Practice with JOINs](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=0)** - [Instructor] To solve this challenge, we need to use information from both of the tables in our database. So here in the middle of the query, I'm using a join statement. And then with on, I'm saying that the state_abbreviation field on the states table corresponds with the state_code field on the people table. So that's how we'll connect the tables and use them both at the same time. In the SELECT statement, I'm using the region field from the states table because the challenge asked us for the region, and I'm using the team field from the people table because we also need to consider the teams when we're counting up the number of people on each team in each region. The last value here is a count of members of the team on the people table. These are the fields we want, but we need to add a GROUP BY clause to actually have them be used the way that the challenge requires. In the GROUP BY clause, I'll use the region field from the states table, so we'll get our fields condensed into regions, and I'll also use the team field from the people table to break out the regions by team. This way, the count of participants from each team in each region will make sense, and that's what the challenge asked for. Let's run this and see if it solves the challenge. Looks like it does, and here's the result. If you got the same result, congratulations. And if not, spend some time coming up with another solution and try again.

> [!info]- Semantic Content
>
> **SQL:** group by (2), select (1)
> **Env Vars:** group (2), select (1)
> **Code Identifiers:** state_abbreviation (1), state_code (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Data Types, Math, and Helpful Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Data types in SQL](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=0)** - [Instructor] Fields in a database represent specific kinds of data, like a name, a date, an ID number, or an amount of points in a competition. Depending on how we use these fields, we may not really care what kind of information they represent. But most [Databases](../../Skills/Software%20Development/Databases.md) require us to define what kind of data a particular field will hold when we build a table. Different kinds of data are stored in different ways, and that's something the database software mostly takes care of. But these different kinds of information storage, these data types offer us certain abilities when writing [SQL](../../Skills/Data%20Science/SQL.md) statements. For example, it doesn't make sense to ask the database to add up the value of all the names in a table. But it might make sense to add up all the points won in a game. Generally speaking, SQL has a few categories of data types you should be aware of, those dealing with binary information, with dates and times, with numbers, and with text. Within each of those general categories, there are specific types with specific purposes. And, as you learn more about using SQL in your field and in your software of choice, you'll get a better understanding of which types are helpful for you and which ones are supported in your database. Not all of them are supported in every implementation of SQL. So be sure to check the documentation for the tools you're using. The data type indicates what a field is optimized to store and what operations are possible on it. The binary fields are optimized to store ones and zeros, representing whatever data that might be, in either a fixed, variable, or long way. Binary fields are often used to store specific binary sequences,
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=94)** 10010, that kind of thing, which is often used for bitmasks or sequences that represent a coded series of information. And much longer binary fields are used to store files, things like images or zip files, or any other kind of data that isn't going to be treated as plain text or another kind of special data, like numbers or dates and times. The date and time types indicate that the data in a field should be treated as a time value, and that's reflected in the way they're stored, compared, and used. The number types represent different kinds of numeric values, including integers of different lengths, floating points of various lengths and precisions, and so on. To store a quiz score like eight or 10, we'd probably use an integer type, because we aren't concerned about decimals points there. Though, to store other numbers like 7.5 or 3.14159, we'd use different types, decimal or floating point, depending on what data types the database software we're using offers. The text types represent different lengths of characters treated as text, rather than as numbers or binary data. So, to store a person's name, we would use a text type with a variable length, usually varchar or varchar, depending on how you'd like to pronounce it. That stands for variable character length up to a given limit. As compared with char or char, which is a fixed length of characters. If we had a varchar field for a name, and someone was called Abigail, that would take up seven characters. If we used a char field for a name with a length of 50, Abigail would take up 50 characters,
>
> **[3:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=187)** because the database would store empty spaces for the other 43 characters in the field. Using varchars is often more flexible and space-efficient, but it can be slower to use under heavy load. But those kinds of details aren't really the point here. You'll get into things like that as you extend your learning into programming or analysis. We could represent true or false as binary, but there's a special type available called Boolean that's usually a better choice. And there's a special value that I want to mention here too, and it's called null. Null is a value that represents nothing in a particular field. It's a value different than zero and different than no or false in Boolean. It means we don't have a value for something. And so, it's treated differently than other values. Because of this, I'll be sure to point out where null is used and how it's treated differently throughout the course. But, for now, just remember, null is not zero and null is not no. This value can appear in any field designated for any data type, and we can also define a database in such a way that it will reject entries where there's a null value. Data types come into play mostly when we're creating a table, so we can tell the system how to treat data that's going to be added. But, as I mentioned earlier, it's also important to know how data is stored when you go to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (4)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (2)
> **Versions:** 7.5 (1), 3.14159 (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Math in SQL](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=0)** - [Narrator] [SQL](../../Skills/Data%20Science/SQL.md) supports various ways of doing math, and using mathematical functions on values and records. The most basic way of doing math and SQL is with a select statement and a mathematical expression. SQL supports the standard arithmetic operations, addition, subtraction, multiplication, and division, and also modulo. Mathematical operations are assumed to involve integers, and thus one or more of the terms is expressed in floating point. So you may get unexpected results if you don't pay attention to that. We can also use logical comparison operators like greater than, less than, greater than, or equal, less than or equal, equal and not equal to ask the database to give us results which match or fulfill those conditions. Like we might, if we wanted to see records with a quiz score greater than 70 points or where the state was not New York. We've used the equals operator already, but we can use these other competitors as well. [Database Management](../../Topics/Database%20Management.md) systems also provide mathematical functions that we can use, and to see which ones your software supports, take a look at its documentation. Let's take a quick look at doing some addition with integers. I'll right select four plus two, and run that query. And here in the result, I see the answer, six. Let's do some division. I'll divide one by three. I'll run that, and the result that I get is zero. One divided by three in the integer space is zero, but one divided by 3.0, making it a floating point value, comes back as the value we would expect, 0.333 and so on.
>
> **[1:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=97)** The precision of the result is still limited though, so if you need high precision calculations, like you'd have with certain financial or scientific operations, it's a good idea to let another language like your application code, handle the math to ensure you're not losing precision. We can also use comparison operators and ask logical questions, and there are functions available to find the minimum, maximum, sum, and other aspects of numeric fields. For example, we can ask if three is greater than two. The result here is one, a logical expression for true. Is two greater than three, we might ask. And the result comes back zero, false. Is three equal to three? That's true. Is five not equal to three? That's also true. We can use these operators to help us return information from the database as well. I'll ask for a first name and a quiz score from our people table. And I'll ask for the records which have a quiz score of more than 70. That's a lot, that's most of our participants, and they mostly did pretty well. If we wanted to include the people whose score is exactly 70, we could change the query to greater than or equal to. I'll combine this with an order by clause so we can see those more easily. It looks like Kevin, the Betty's and Kelly would have been left out of the previous query where we were only asking for scores greater than 70.
>
> **[3:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=192)** Let's flip the comparison around and see who got 70 or less. I'll change this to less than or equal to 70. I'll run it, and there's not too many. That's good. If we wanted to find out what the maximum and minimum scores on the quiz were, we could use the max and min functions, two aggregate functions which return the greatest and smallest value in whatever field they're given. All right, select max quiz points, min quiz points from people. And I can see that the maximum score on the quiz was 100 and the minimum was 63. If we wanted to figure out the total number of points earned in our quiz, we could also use the sum function. That's a lot of points. Let's take a little bit of time and combine some of what we know so far. It's nice to have all of this information, but it's even better to get some kind of insights from it. Let's build a little report that shows the breakdown of how many people are on each team, the total points earned by each team, and the team's average score. Because we're breaking down the data by team, we know that we want to use a group by clause on the team field. So I'll start kind of backwards with that. And then to get the team name, we can add team here in the select clause. And adding in our other fields, let's start with a count function, with a star because we just need the number of rows. And because this is working with a group by clause, this count will apply to each team, not to the whole table. If we took off the group by clause,
>
> **[4:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=285)** we'd get back just one row because count returns one value for the whole set. And then let's add in the total points that each team got with some quiz points. And now for the average, we want the average, which is the sum of the items divided by the number of items. And we'll use parentheses to group the expression together. I'll get the sum of the points and divide that by the count of number of records, like we have in the previous columns. Let's run this. While these results are close to correct, we're experiencing the result of something I mentioned earlier. These averages are perfectly round. That seems a little suspicious. Remember, these math operations that we can do, in this case division, are integer operations if they're being performed on the integer values. And in that case, they don't give us precisely the result we need here. In most cases, we don't want to construct calculations ourselves when there's something that can handle the math for us. So instead of making an average ourselves, we can use another aggregate function, AVG, which gives us the average to a higher precision. And without having to remember the formula for calculating an average or a dealing with precision. I'll change the last term in my select clause to AVG quiz points. There, that's better. In this case, it doesn't actually change who won, but you can see how that difference could be problematic when it comes to scientific, financial, or other values. But for now, I can see that we have a clear winner of our quiz competition, both in points and average score. Good for the cosmic cobras.
>
> **[6:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=380)** It's a best practice to use dedicated functions when they're available. And depending on the flavor of SQL you're using, and what database software you have, you can look up what functions are available for them in your documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Database Management](../../Topics/Database%20Management.md) (1)
> **Env Vars:** sql (4), avg (2)
> **CLI Commands:** find (2)
> **Versions:** 3.0 (1), 0.333 (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### [Compound Select](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=0)** - [Instructor] Sometimes we need to use more than one select statement to get the information we want. It's often the case that we want to set up a query that relies on the result of another query. Using a secondary select statement inside of another query is called a sub-query or sub-select, and it helps us to narrow down or zero in on a specific set of data to use in that larger query. Let's get a listing of all the people in our database who achieved the highest score on our quiz. It might occur to us to write select first_name, last_name, quiz_points, from people where quiz_points equals max quiz_points. But when I run that, I have an error. Misuse of aggregate function max. This max function, like the other aggregate functions, min, average, and so on, won't work this way as part of a where condition. So instead of just max here, I'll wrap it inside a select statement inside of parentheses. So my where condition becomes where quiz_points equals select max quiz_points from people. That inner select statement, the sub-select or sub-query, will give us back one value, the highest number in the quiz points column, and then in our outer select statement, we'll have one value to look for in the where clause. There we go. That's the people who got the highest score on the quiz. Of course, we could also write this statement to just look for people where the quiz points equal 100, which from working with the data I know is the case.
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=94)** But using a secondary select statement lets us not have to know about what specific values are in the data. That makes the statement portable, maybe for another quiz that goes up to 200 points instead of just 100. We wouldn't want to have the wrong explicit value in there and assume that 100 will always be correct, or it may be the case that there's a 100 point quiz where nobody gets the maximum points because it's really tricky. Using a sub-select like this will always get the list of people who scored the highest, regardless of what that score is. We can also use a sub-query to use information from one table to inform a search on another one. Let's say you want to find all of the participants for Minnesota, but you can never remember what the state abbreviation for Minnesota is. Is it M-I, M-A, M-N? There's so many that are so similar. Instead of specifying a state abbreviation, let's look up the name of Minnesota in the States table, get its abbreviation, and then use that value to look up people from Minnesota. There we go. The state code is M-N and here's all the results which match what I was looking for. And just so I'm not picking on Minnesota, let's change the query to look up Kansas instead, and there we go. Without knowing the exact value for the state abbreviation, we used a sub-query to look it up first and then use that result to get what we needed.

> [!info]- Semantic Content
>
> **Code Identifiers:** quiz_points (5), first_name (1), last_name (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Transforming data](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=0)** - [Instructor] Just because data is stored one way in the database doesn't mean we can't transform it into something we need with our query. Some common functions we'll look at are changing the case of a string, converting a value to a different type, trimming a value, and replacing a particular string in a field. Let's start with a basic query like we've seen before. I'll write, SELECT first_name, last_name FROM people. And let's take a few liberties with the capitalization here. On the first field, I'll use the LOWER function to tell the database to give me a lowercase representation of the contents of the field. And on the last_name field, I'll add an UPPER function to transform the text into its uppercase equivalent. I'll run this, and I can see that the data has been transformed. These functions are fairly straightforward, and they can be useful when we need to present information in a particular way. We can also chop up pieces of a string. For example, if you need to get the first five characters of a name for some reason. And for that, we'll use the substring function, referring to a smaller piece of a larger string of text. In most [SQL](../../Skills/Data%20Science/SQL.md) implementations, substring is the name of the function. But here in SQLite, it's SUBSTR, which is a substring of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) substring. Let's use substring on the last name. Let's again start out with a very basic query and then we'll use substring on the last_name field. I'll use the function name,
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=95)** and whether here in SQLite or in another dialect of SQL, the substring function takes a few arguments. First, the field or a string literal that represents the string that we want to work with. In this case, the last_name field. And then, a number representing at which character in the longer string to start counting, and the length after which to stop in characters. I want to start at the first character and then proceed five characters after that to get the first five characters of the last_name field. Let's take a look at that. Looks like that did what it says on the tin. We can change the numbers around too to get a sense of how this function works. Instead of starting at the first character, I'll start at the second and run for four characters from that. And here, I can see the results. So that's a little different segment there. If we leave off the last field, the length, we just get back a string beginning with whatever character would represent the start of the range and running to the end of the field. And if we turn that number negative, we get a count coming from the end of the string instead of the beginning. So negative two gives us the last two letters of the string. Negative four gives us the last four and so on. If for some reason we need to replace text in a string as we return it from the database, we can do that with the REPLACE function. I'll write REPLACE here, and as the first field in the function, I'll pass in the field I want to work with.
>
> **[3:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=189)** As with the other functions, this could be a string literal too, a string that isn't a value in the database but is just specific text. The next item that I'll give the function is the string to replace. In this case, I'll say the letter a. But it could be a longer string. And the third value I'll give here is the string to replace that previous string with. I'll use a dash character so it's really clear when the substitution is happening. This can also be a longer string or an empty string if you just want to omit a particular string from your results. I'll run that, and there we go. There's a dash replacing all of the lowercase a characters. Notice it affected some values but not others if they didn't have an a in them. This replacement is case sensitive, so keep an eye out for that. In fact, if I scroll down here to row 53, Anne still has a capital A because capital A is a different character than lowercase a. We can use the CAST keyword to tell the database to interpret one data type as another. This can be useful if we don't have control over the schema of the database, and we can't make changes to how data is stored. To use CAST, we'd write CAST and then put in a field name, and the AS keyword and a data type. The type could be any of the types we saw before. Though, in some cases, the result won't make sense, like casting a date to a Boolean. One way we can see a difference in how data types work is to take something we know is a number, like the quiz_points here in the database, and sort them. That makes sense.
>
> **[4:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=285)** The numbers are in sequence all the way up through 100. But if I take this quiz_points field and tell the ORDER BY clause to treat it as character data,
>
> **[5:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=302)** rather than its normal numeric value, I can see how that changes how this works. Now it treats these values as characters rather than numbers, sorting them using alphanumeric sort, looking at how the first character of one field compares with the first character of the next field, and then going on to look at the second character if the first character in the two fields match. Just like how a comes before b in alphanumeric sorting, one comes before two and certainly before six here. And that's why we see 100 before 63 because all these values we see as 100 are one, zero, zero, so they sort here together at the top, where one belongs. And then, the later characters come after that. We can check out this behavior another way too with the MAX function.
>
> **[5:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=352)** If I compare the values as character values, the max is 99, even though I know the points go up to 100. That's because a text string that starts with nine will sort with a higher value than one that starts with a one. So 99 would be considered higher than 100, 1000, or even 1 million. If I change the type to an integer, I get the result that I expect. Treating data differently than it's stored in the database is something you can do in SQL, or something you or your developers can do later on down the line when you're working with data in a different program, like a web app or reporting software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** sql (3), cast (3), replace (2), select (1), lower (1)
> **Code Identifiers:** last_name (5), quiz_points (2), first_name (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **SQL:** select (1), order by (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** scroll down (1)

#### [Creating aliases with AS](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=0)** - [Instructor] It's been a little bit subtle so far, but the names of the fields that we get back when we make a query, and subsequently the names of the field we get in a program or something we'd write, are the names of fields or expressions that we put into the statement to begin with. Usually this makes sense, but sometimes if we have a little bit of a lengthy way of creating a field, or want to be more clear on our output, for example, if we're taking the results directly into a spreadsheet that someone else is going to use or into the [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) portion of an app, we can change the returned name of a field with the AS keyword. Let's take a basic look at that with a statement that will get us the first_name and last_name of the participants in our people table. This is a result we've seen before. Notice how the column headers here are the same as the field names I asked for. And if I transform the names a little bit, that comes through here in the column header. That can be helpful if you want to see what you asked for specifically, but when you're providing this output to an application or exporting it to a spreadsheet, it can be a lot easier to give it a more friendly name. So in my SELECT clause, after UPPER(last_name), I'll add AS and a short name that I want to use to refer to this field. Let's call it surname. We don't have to reserve the AS keyword only for long functions though, we can rename any field. Let's make first_name a little nicer too and return it as firstname with no underscore. And then when I run the query again, I see that name here instead of the function and field name
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=94)** that I'm actually using. This name should have no spaces in it, but if you want to use spaces you need to wrap the name up in apostrophes, though developers and analysts will appreciate having fields without spaces or special characters in them, so it's a good idea to keep names without spaces. It's also useful to use the result of the AS keyword within a query, like I can do here, because the alias functions as a stand in for the original field. When working with longer and more complex queries, you may see this feature used frequently. While the presentation of data is usually best left to reporting software, apps, or some other end user focused solution, We can do a little bit within our queries to ensure that our outputs are organized and accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Code Identifiers:** first_name (2), last_name (2)
> **CLI Commands:** make (2)
> **Env Vars:** select (1), upper (1)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: State score metrics](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=0)** - [Instructor] The challenge asked for the state name, so I'm including that in the select clause here. I'm also using the as keyword to assign aliases or names to these values. This satisfies the challenge's request for these fields to be named max points and average points. It also allows us to use the name average points down in the order by clause to sort the results by that value. The quiz points values come from the people table, but the state name comes from the state's table. So I'm joining that table here on the common values state abbreviation and state code. The challenge wanted information about each state, so we'll group by state code or we could group by state abbreviation for one row per state and finally, we'll use the average points to order the rows by that value as the challenge requested. Let's see if this works. It does. Great. If you got the same result, congratulations and if not, spend some time working on your solution and try again.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 4. Add or Modify Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Add data to a table](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=0)** - [Narrator] To add new data to a database table, we can use the insert keyword. To add information, we need to tell the database a few important things. So the insert clause has a few components in addition to just insert. We need to tell it what table to add data to, what field or fields to add information in, and then the values to put in those fields. All right, insert into people. First name, values, Bob. That ran successfully, and let's take a look at the result with select star from people. Here, all the way down at the bottom is our new information. The first name field is what we added, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the fields have null in them. Because we didn't set any information, so they have no value stored in them. Let's write another insert statement to add some more information. I'll write insert into people, first name, last name, state code, city, shirt or hat.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=65)** Values, Mary, Hamilton, OR, Portland and hat.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=75)** I'll run that. And let's take a look at the table now with select star from people. And there's Mary. We can add more than one record at a time too, either by running many insert statements at once or by giving the field names, and then a series of entries in parentheses. I'll write an insert statement with just a few fields so we can see how that works.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=107)** Each of those parenthetical groupings will become their own record when this executes, with the first name going to the first field, and the last name going to the last field, before moving on to the next pair. I've left Carol's last name off here, and I'll try to run the statement. When I do, I have an error because when I provide fields to accept data, I need to give them data, simply leaving off information, whether it's the last item like this or a value in the middle of a list of fields doesn't work. If there is supposed to not be a value such as if Carol here either doesn't have or doesn't want to provide a last name, we'll use null in most cases, as a placeholder for nothingness. Other tables may be defined in such a way that an empty or default value might be zero, or such that null isn't allowed, in which case you'd need to follow whatever business logic is behind the database in order to add entries. With each field having a corresponding value, now over in the statement. My query ran successfully, and once again, let's take a look at the data. Notice that we can selectively add information to fields. We don't necessarily need to have all of the information for a record. Sometimes though, tables require data be entered in a particular format. And when you construct a table, you can choose to enforce certain standards on data coming into the table, like whether a certain field has a unique value or has a non null value, and so on. In fact, this column, the ID number column, has a special rule applied to it
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=200)** that tells the database to add a new number for new records. We didn't tell the database to add that number in the insert statement, but there it is. Auto incrementation, and constraints like uniqueness are more advanced than we'll get into here. These constraints help to preserve the integrity of the database, and there's something you'll learn about in a course on [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) like [Programming Foundations Databases](Programming%20Foundations%20Databases.md). And something you'll work with when you move on to using [SQL](../../Skills/Data%20Science/SQL.md) is a data definition language to build your own tables. We'll continue to focus on using existing tables in this course. Inserting new data or creating it represents one of the most frequently performed operations when working with the database, the crud operations I mentioned earlier. Those are operations we do with data in a database. And so far we've covered R, reading with a select statement and C, create with the insert statement. Take some time and explore creating records in this database. Here in DB browser, changes aren't made to the database unless you go up here and click write changes. So you can add all sorts of records just to practice, and then hit revert changes, and the changes will disappear. But if you do make changes you want to save, click write changes and they'll be saved to the SQL database file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Modify data in a table](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=0)** - [Instructor] Data in the database can be modified using the update keyword. Update is useful where we want to change information that's already there, rather than adding new records with different information. To update information, we have to tell the database which table we're using, what fields to update with what values, and optionally, a where clause to specify how to find records to update. If you leave off a where clause, the change will apply to all the records in the whole table. So be careful with that. Let's say we were contacted by one of our participants who noticed they had entered their name incorrectly. Carlos Morrison of Houston, Texas accidentally typed too many Rs. Since Carlos has already taken our quiz and already provided other information, it's best to just go in and change the last name field rather than delete Carlos and add a new, correct record. I'll write an update statement to change the last name to Morrison, spelled correctly, for the first name, Carlos. But before I run that, we need to pause a moment. Is Carlos Morrison, the only Carlos in our table? It's best to check. To do that, I'll translate the condition this would match into a select statement instead. Uh oh, it looks like we have a lot of Carloses. So we need to be more specific about which record to update. And we have a few choices. Because we know that Carlos's last name was misspelled, we can find that misspelling and replace the value like this.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=96)** I know that we'll work with this dataset. And you can confirm that by running a select on records with the last name Morrrison. A better way to update this record is to match more information by adding other fields that identify this particular participant.
>
> **[1:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=118)** Writing a select statement with more information confirms that this one participant is named Carlos and is from Houston. We'd write an update statement that uses both the first name and city as conditions to update the last name this way. But there's an even better way to approach this. The people table has a unique number for each participant, and that's something you'll find is the case in many [Databases](../../Skills/Software%20Development/Databases.md), which deal with people's information. So we can use that to be absolutely certain we have the right participant record. This Carlos has an ID number of 175. So using [SQL](../../Skills/Data%20Science/SQL.md), we can first write a select statement to check that we're working with a record that we intend to. Looks good. Once we've checked that, let's finally write the update statement that will make this change. I'll write, update people, set last name equals Morrison, spelled correctly, where ID number equals 175. I'll select this and then I'll run the query. Then I'll select my previous query to take a look at Carlos's record. Run that, and I can see the change has been made. The where clause here is important because it targets only the correct record. And if I left it off, I'd set the last name to Morrison for every record in the table. That's not what I want to do. And when working with most databases, there's often no undo feature. Here in DB Browser, we have one, but in the real world, we won't. So we need to be as specific as possible with our statement and check our logic first, before changing data in the database. Because we have a where clause
>
> **[3:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=212)** that we can use to make updates, we can make changes to more than one record at a time if we want to. Let's say one of the companies that our participants work for got bought out and the name has changed Fisher LLC is now Megacorp Incorporated. Let's find records where the company is Fisher LLC. And then we'll make the change, setting the company name to Megacorp, where the company is currently Fisher with update people set company equals Megacorp Incorporated where company equals Fisher LLC. Again, I'll highlight that line. I'll run it. And our query executed successfully. Now, if we look for people at Fisher, there is no results. But we do have results for Megacorp. Changing or updating existing data represents the U in CRUD. And now we've covered creating, reading and updating data. Take some time to explore updating data in this table. Remember the changes you make here in DB Browser aren't permanent until you hit the right changes button, and you can throw out unsaved changes with revert changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (5), find (4)
> **Env Vars:** llc (3), sql (1), crud (1)
> **Best Practices:** it's best to (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Removing data from a table](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=0)** - [Instructor] Removing a row of data from a table can be accomplished with the DELETE keyword. As with an UPDATE statement, we need to tell the database from where it should delete something, and it's a good idea to add a condition to set the scope of deletion; otherwise, we'll delete everything in the table. For example, this is a completely valid DELETE statement and would remove all the records from the people table. That's not something we want to do right now though. So let's add some more context to the statement and target specific records to delete. First though, let's take a look at our table and find some unlucky records to delete. I'll remove some of these incomplete records that we've just added. Let's start with Bob. And before we delete, let's make sure to test our logic so we know that we're only getting the record that we intend to work with. Bob's ID number is 1001. So I'll write SELECT * FROM people WHERE id_number=1001. That looks like my WHERE condition matches only what I want to delete. So we're ready to convert this into a DELETE statement. To do that, I'll create a statement that says DELETE FROM people WHERE id_number=1001. My query ran successfully. And now if I take a look at the data in the table,
>
> **[1:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=85)** there's no more Bob. We can remove more than one record at a time too with a condition that matches more than one record. This is useful in many cases, but as we saw before it can be dangerous as well. These incomplete records we recently added all have something in common, their quiz_points field is empty, it's NULL. So that's not too useful to us in a table constructed to store quiz points. Let's put together a statement to get rid of any records with a NULL score. But first we'll test our logic with a SELECT statement. When we're working with NULL values, we don't ask for values equal to or unequal to NULL, we ask for records where the field IS NULL or IS NOT NULL. Further values though, like strings or numbers or dates, we use a equality comparison operators. Okay, that looks reasonable. There's the records that have no quiz points listed, and I don't see any surprises. Let's switch this to a DELETE statement. The result will be DELETE FROM people where quiz_points IS NULL. And once again, let's take a look at the data in our table. There we go. Now, all the records have a value for quiz_points and anything that doesn't is gone. This covers the last letter of the CRUD acronym, delete, and it rounds out our basic set of operations that we'll use [SQL](../../Skills/Data%20Science/SQL.md) for as a DML, a [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) language. There are other keywords in the SQL standard including those where SQL is used as a DDL, a data definition language,
>
> **[2:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=177)** which we use to create and modify [Databases](../../Skills/Software%20Development/Databases.md) and tables themselves. And individual flavors of SQL provides still different options, but all versions of SQL support SELECT, INSERT, UPDATE, and DELETE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** delete (7), null (7), sql (5), select (3), where (3)
> **SQL:** select (3), where (3), update (2), delete from (2)
> **API Endpoints:** delete  (6)
> **Code Identifiers:** quiz_points (3), id_number (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)

#### [Solution: Identifying the correct record](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=0)** - [Instructor] This challenge asked us to find the unique identifier for one record so that if we were to alter or delete that record, we'd know that we're working with precisely the record we want and that we're not accidentally modifying other records that match some non-unique criteria. To start, I added the fields that we'll be using to locate the record. First name, state code, and team in the select clause, and I added ID number, which is the unique identifier for records in the people table. I'll be using records from the people table, so that will be my from clause. And then I'll use the values, the challenge provided to filter the records. The challenge said Florida and I happen to know that the state code for Florida is fl. If you didn't, you might have joined the state's table and used the full name. That's fine. The challenge also said this participant was a member of the Cobras, but that's not the team's full name. So I'm using like here to match just part of the team name in case I don't remember what it is. Okay, let's see if this returns just one record. It does, and I can see that this participant's unique ID is 931. If this query had returned more than one record, I'd need to further refine my search to identify just the one ID number for the one record that I'd need to work with. If you got the same result, congratulations and if not, work on your solution and try again.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Overcoming common SQL mistakes](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=0)** - [Instructor] When working with [SQL](../../Skills/Data%20Science/SQL.md), there are a few common mistakes that it's easy to make. SQL is not a very forgiving language if you don't have the syntax just right. And the errors that you'll get back from the database software if you miss type something can be cryptic at best. So if you're getting an error message, be sure to read it carefully and see if it points you in the right direction. If you have a syntax error that you just can't find, start breaking down the statement into pieces that do work, and then put the statement together again, keeping an eye on when an error happens. It's easy to mix up parentheses or misspell a field name. And when you're learning, it can be tricky to remember the order of clauses or whether a keyword is missing an important part. Keep in mind that if you're using a text string, you need to put it in single quotes for it to be treated as text. And if for some reason your database has spaces in field names, which is allowed, but isn't really a best practice, you'll need to put backticks around the name of your field when you use it in a statement. Depending on the software you're using, it could interpret table and field names as case sensitive too, so watch out for that. Some development environments will give you hints when it can figure out what you're trying to do. But often there's not much in the way of support if you're writing statements outside of an environment designed to help you out. For that reason, it's usually a good idea to keep an SQL focused app around, so you can connect to your database and just work with it directly rather than troubleshooting through another tool. When you get a statement working the way you want it to, copy and paste it into a note or some other documentation that you keep as you build and learn. When you're copying and pasting SQL statements,
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=93)** it's important to make sure that you're doing so using plain text. Many text editors that aren't designed for [Software Development](../../Topics/Software%20Development.md), things like [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or Pages or Stickies, or even many note taking applications, will make changes to text that cause problems. One of the most irritating problems to me is when a text editor changes quotation characters into so-called smart quotes. They may look better when printed on an elegant invitation, but smart quotes and the single straight quote are different characters, and SQL interpreters don't know what to do with fancy punctuation. So if you've copied some SQL from somewhere and it looks right, but it doesn't work, check for smart quotes. If you're sharing SQL queries with team members or someone else, it's a good idea to use plain text files to contain them rather than pasting them into an email or chat message for the same reason. Not only does attaching statements as files keep your actual communication clean, it can also make them easier to find and share later on. Treating null values incorrectly can cause errors or unexpected behavior. Remember that a null value is not the same as zero, or no, or false. So if you're looking for employees that don't have ID numbers, checking for those equal to zero isn't the same as asking for those that are null. You don't want to use an equality operator to look for null values. You want to use IS NULL or IS NOT NULL. If you're making a change to a table, be sure that you're using a condition that will scope your change how you intend. Turn it into a select statement first to make sure that you aren't going to have unexpected behavior due to a typo or a logic mistake. Remember too, that most software will run
>
> **[3:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=188)** all of the statements in a console window. So if you're writing more than one at a time, keep them in a scratch pad and switch them in one by one, or be sure to select the one you want to run and run it. Even the pros make typos and other mistakes, and the only way to improve is with practice. So if you make a mistake or 12 while you're learning, don't feel bad, we've all been there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Software Development](../../Topics/Software%20Development.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (7), find (2)
> **Env Vars:** sql (7), null (2)
> **Warnings:** keep in mind (1), watch out (1)
> **UI Navigation:** select the (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=0)** - [Instructor] In this course, we've seen how to use [SQL](../../Skills/Data%20Science/SQL.md) to work with an existing database. Depending on what your goal is, your next steps for learning can take a few different paths. If you're interested in learning how to create [Databases](../../Skills/Software%20Development/Databases.md) and how to administer them, take a look at our courses on [Database Management](../../Topics/Database%20Management.md) systems, like [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), [MySQL](../../Skills/Software%20Development/MySQL.md), Oracle and others. If you're interested in digging deeper into SQL itself, check out our courses on more advanced SQL. Before you do that, though, you may want to brush up on one of the database management systems they use, either SQL Server or MySQL, in order to be able to follow along better. The DBMS and the variety of SQL it uses go hand in hand. Or if you're looking to build an application that uses SQL in it, have a look at our courses about using SQL with popular languages like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Java](../../Skills/Software%20Development/Java.md), and others. Whichever path you take, have fun learning and good luck. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Database Management](../../Topics/Database%20Management.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (8), dbms (1)
> **CLI Commands:** mysql (2), python (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Scott Simpson](../../Instructors/Software%20Development/Scott%20Simpson.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learningsql-2875059)

## Skills Covered

- SQL

## Path Context

### In [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)
← [Quick Start Guide to SQL](../Database%20Management/Quick%20Start%20Guide%20to%20SQL.md) | **3 of 5** | [Learning MySQL Development](../Database%20Management/Learning%20MySQL%20Development.md) →

### In [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
**1 of 6** | [Complete Guide to Python for Data Engineering- From Beginner to Advanced](../Data%20Science/Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) →

### In [Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)
← [Learning C-](Learning%20C-.md) | **11 of 12** | [Programming Foundations- Web Security](Programming%20Foundations-%20Web%20Security.md) →

## Part of

- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)

## Appears In

- [Explore a Career in Database Development](../../Paths/Database%20Management/Learning%20Paths/Explore%20a%20Career%20in%20Database%20Development.md)
- [Data Engineering Foundations Professional Certificate by Astronomer](../../Paths/Data%20Science/Professional%20Certificates/Data%20Engineering%20Foundations%20Professional%20Certificate%20by%20Astronomer.md)
- [Become a Software Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Software%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](../Data%20Science/Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](../Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](../Data%20Science/SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](../Data%20Science/Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](../Data%20Science/Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)