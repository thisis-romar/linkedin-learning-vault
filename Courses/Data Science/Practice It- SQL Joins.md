---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practice-it-sql-joins
url: "https://www.linkedin.com/learning/practice-it-sql-joins"
duration_minutes: 55
duration: 55m
level: Intermediate
updated: 6/25/2025
learners: 3845
skills:
  - SQL
exercise_files: false
github: "https://github.com/LinkedInLearning/practice-it-sql-joins-3085459/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE6C_8Je4EAqg/learning-public-crop_675_1200/B4EZdDDjseHcAc-/0/1749176695867?e=2147483647&amp;v=beta&amp;t=ainHQWQXhLW4kmphiQojglbOElUhPLjjNa6m68-lnpE"
linkedin_topic: Data Science
learning_paths:
  - '[SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)'
prev_courses:
  - '[SQL Practice- Window Functions](SQL%20Practice-%20Window%20Functions.md)'
next_courses:
  - '[Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md)'
path_nav: '[{"path":"SQL Hands-On Practice","position":5,"total":9,"prev":"SQL Practice- Window Functions","next":"Hands-On SQL Challenges- Test Your Knowledge"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Practice%20It-%20SQL%20Joins.md)

![Practice It: SQL Joins](https://media.licdn.com/dms/image/v2/D4E0DAQE6C_8Je4EAqg/learning-public-crop_675_1200/B4EZdDDjseHcAc-/0/1749176695867?e=2147483647&amp;v=beta&amp;t=ainHQWQXhLW4kmphiQojglbOElUhPLjjNa6m68-lnpE)

# Practice It: SQL Joins

> In this course, instructor Nikiya Simpson guides you through four main types of SQL joins, with plenty of opportunities to try what you’re learning. Nikiya starts with schema description SQL commands, plus table and column description SQL commands. She goes over inner joins, then dives into left joins, self joins, and multiple complex joins. Nikiya also covers right joins, full outer joins, and cr

> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins) | 55m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Welcome to the course](#welcome-to-the-course)
  - [Prerequisites and preassessment](#prerequisites-and-preassessment)
  - [Getting started with GitHub Codespaces](#getting-started-with-github-codespaces)
  - [Installing the database in GitHub Codespaces](#installing-the-database-in-github-codespaces)
- [**1. SQL JOIN and Descriptions**](#1-sql-join-and-descriptions) (5 videos)
  - [SQL commands for determining relationships](#sql-commands-for-determining-relationships)
  - [Try it: Schema description SQL commands](#try-it-schema-description-sql-commands)
  - [Check it: Schema description SQL commands](#check-it-schema-description-sql-commands)
  - [Try it: Table and column description SQL commands](#try-it-table-and-column-description-sql-commands)
  - [Check it: Table and column description SQL commands](#check-it-table-and-column-description-sql-commands)
- [**2. Inner Join**](#2-inner-join) (6 videos)
  - [Understanding inner joins](#understanding-inner-joins)
  - [Try it: Inner join](#try-it-inner-join)
  - [Check it: Inner join](#check-it-inner-join)
  - [Understanding self joins](#understanding-self-joins)
  - [Try it: Self join](#try-it-self-join)
  - [Check it: Self join](#check-it-self-join)
- [**3. Left Join**](#3-left-join) (5 videos)
  - [Understanding left joins](#understanding-left-joins)
  - [Try it: Left join](#try-it-left-join)
  - [Check it: Left join](#check-it-left-join)
  - [Try it: Multiple complex joins](#try-it-multiple-complex-joins)
  - [Check it: Multiple complex joins](#check-it-multiple-complex-joins)
- [**4. Right Join**](#4-right-join) (5 videos)
  - [Understanding right joins](#understanding-right-joins)
  - [Try it: Right join](#try-it-right-join)
  - [Check it: Right join](#check-it-right-join)
  - [Try it: Full outer join](#try-it-full-outer-join)
  - [Check it: Full outer join](#check-it-full-outer-join)
- [**5. Cross Join**](#5-cross-join) (3 videos)
  - [Understanding cross joins](#understanding-cross-joins)
  - [Try it: Cross joins and Cartesian joins](#try-it-cross-joins-and-cartesian-joins)
  - [Check it: Cross joins and Cartesian joins](#check-it-cross-joins-and-cartesian-joins)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with SQL](#continuing-on-with-sql)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to the course](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=0)** - [Nikiya] [SQL](../../Skills/Data%20Science/SQL.md) is a commonly used programming language used to work with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Whether working in business analysis, [Data Science](../../Topics/Data%20Science.md), or [Software Development](../../Topics/Software%20Development.md), writing good SQL queries is an essential skill. In this course, we'll practice different join types for each relationship with multiple entities. You'll have an opportunity to see an overview and practice these concepts within VS Code using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) while you work with this course. My name is Nikiya Simpson and I work with relational databases from everything from small businesses, large marketing firms, education, and healthcare. Together, we'll practice SQL joins using the SQLite RDBMS, VS Code, and GitHub Codespaces. This course is truly unique, as you have the opportunity to practice the code with me while learning these concepts. By the end of the course, you'll be able to understand the techniques that you can use right away in your work. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Data Science](../../Topics/Data%20Science.md) (1)
> **Env Vars:** sql (3), rdbms (1)
> **Tools:** vs code (2), github (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [nikiya] (1)

#### [Prerequisites and preassessment](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=0)** - [Instructor] Before we begin, let's discuss some skills that you may need to know first. This course will assume you have previous experience writing [SQL](../../Skills/Data%20Science/SQL.md) [Database Queries](../../Skills/Software%20Development/Database%20Queries.md). First, you'll need some familiarity with performing [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) Language statements, specifically SELECT statements, and the different keywords and clauses necessary to write simple queries. You'll also need to know Data Definition Language to understand how to create or drop database objects like tables and views. During this course, we'll use VS Code extensions and the terminal within VS Code to practice writing various queries using different types of join and object relationships. Some of these items should automatically populate for you within the Codespace environment, but I'll walk you through anything we need to set up later. Some experience using an IDE like Visual Studio Code, a [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), or command-line interface, is also helpful in getting through the material in this course. We'll also use SQLite as the [Database Management](../../Topics/Database%20Management.md) system for this course. Now, you won't need to be specifically familiar with SQLite. There will be some commands that we use that are specific to SQLite, but most of the queries used in this course can be performed within any relational database management system. If you are new to SQL, or Sequel, there are lots of courses within the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library to help you get started with understanding the language. I suggest that beginners start with those courses first and come back to this one to practice later. Before starting the practice materials in this course,
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=94)** I'm going to have Ray Villalobos discuss how to use [Codespaces](../../Skills/Software%20Development/Codespaces.md), and then I'll be back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Database Management](../../Topics/Database%20Management.md) (2), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Env Vars:** sql (2), select (1), ide (1), cli (1)
> **Tools:** vs code (2), terminal (1), visual studio (1)
> **Prerequisites:** you'll need (1), set up (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)

#### [Getting started with GitHub Codespaces](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit create fork. I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly
>
> **[4:41](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=281)** like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way, it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)

#### [Installing the database in GitHub Codespaces](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=0)** - [Instructor] Now that we know how to use code spaces, let's make sure that the database that we'll use for this course is loaded for our practice. Start by opening up your code space from [GitHub](../../Skills/Software%20Development/GitHub.md). The link to the repository is shown here on your screen. Next, click on the code button. Go to the Code Spaces tab and click on Create Code Space on Main. Your new code space environment will open up in a new browser window. The Explorer window should show the Adventure Works.DB database file. Double click on that file. Here, you can view the tables and columns and preview data in the tables. Take some time to go through the database to familiarize yourself with the tables and columns. Don't worry about running queries at this time. We'll go through how to run queries later on in the course. Now that we know the database is installed, let's get started with the practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. SQL JOIN and Descriptions

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL commands for determining relationships](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=0)** - [Instructor] Let's start with writing some commands using your terminal. First, let's open a new terminal window in VS Code. If you don't have one open already, you can go to the menu, go to Terminal, and then select New Terminal. Remember, everything is done on a virtual machine in the background, so you need to be sure that you're not using the terminal on your computer. Let's start by typing in sqlite3 in the terminal window, so sqlite3. Let's hit Enter, and this will open a new SQLite session. Other [Database Management](../../Topics/Database%20Management.md) systems like [Postgres](../../Skills/Software%20Development/PostgreSQL.md) have commands to list and describe tables. This course, of course, will use SQLite, which uses Dot commands that can perform similar functions as in other systems. We'll begin by opening the database file using .open command, .open, and we'll specify AdventureWorks, AdventureWorks.db. To verify everything is set up, use the .database command, and this command shows us the database available in our current connection. Another way to examine the database structure is through a GUI interface, and we can view our table structure by opening the .db file and VS Code, and we can see it through the SQLite viewer extension. From here, we can preview the database tables. We can also preview the rows in each table. I can also review the columns and primary keys.
>
> **[1:38](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=98)** So in this instance of the DimCustomer table, we can see the CustomerKey is our primary key, and we can also see a GeographyKey as a foreign key. Let's try to set up some information about our tables using [SQL](../../Skills/Data%20Science/SQL.md). Next, we can type in sqlite new query in the command palette. You can access your command palette here by typing in a symbol and then going to SQLite New Query. Or you can go by your menu, select View Command Palette. Same thing. So now we have a new window open. I'm going to copy query over from our solution file here. That just is select name from sqlite_master table. Now, the sqlite_master table stores SQL text that describes the objects created upon database creation. From here, I'm going to just select my query here, and I'm going to right-click and hit Run Query. While the SQLite extension allows us to run the query in the query editor, we can also run the same query on the command line, so we can just take the same query here and paste it on your command line down here in the terminal. We'll hit Enter and we can see the similar results. Now, we reviewed several methods to see the database structure in SQLite.
>
> **[3:11](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=191)** Let's get ready to get into some more practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Database Management](../../Topics/Database%20Management.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Tools:** terminal (7), vs code (2), command line (2)
> **Env Vars:** sql (2), gui (1)
> **UI Navigation:** go to (2), right-click (1)
> **CLI Commands:** sqlite3 (2)
> **Code Identifiers:** sqlite_master (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Try it: Schema description SQL commands](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=0)** (vibration humming) (computer keys clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=3)** - [Instructor] For the first practice, let's begin by identifying relationships in AdventureWorks. Take a look at the "Entity Relationship Diagram" provided in the repo. To best understand how to query the database, we need to understand how all the entities are related. The "Entity Relationship Diagram" shows us the one-to-one, one-to-many, and many-to-many relationships. So in this exercise, you'll run some analytics on all the entities in our database to get a feel of the relationships and attributes of all the tables. Over the next few exercises, you'll be building scripts to describe the AdventureWorks database. You'll use the output from the scripts in this chapter to help build the scripts related to the different types of [SQL](../../Skills/Data%20Science/SQL.md) joins. In your code editor, you'll write a script that will output a list of all the tables in the database. Use the "chapter1.txt" file to help you get started. You'll also write a script that will give us a count of the numbers of records on each table. This will give us an idea of the size of each table and lastly, you'll create a script that will give us the create scripts for each of the tables within AdventureWorks. We'll save these scripts to a schema report, that we'll include with our ERD. This report will be helpful for us as we get ready to query our data in the next few chapters. To get you started, let's type in ".mode" and "[HTML](../../Skills/Web%20Development/HTML.md)." Then we'll put ".output adventureworks_docs.html."
>
> **[1:47](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=107)** This will allow us to create our output in the HTML format and place it in the "adventureworks.html" file. Feel free to also save your code to a text file and then copy commands in the command line for practice. After you're done, come back to the next video to check your work. You can also review the text files in the solution directory on [GitHub](../../Skills/Software%20Development/GitHub.md), to compare your practice code solution and the HTML document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** html (2), sql (1), erd (1)
> **File Paths:** chapter1.txt (1), adventureworks_docs.html (1), adventureworks.html (1)
> **Cross-References:** in the next (1), next video (1)
> **Tools:** command line (1), github (1)
> **Code Identifiers:** adventureworks_docs (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (computer keys clicking) (1)

#### [Check it: Schema description SQL commands](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=2)** - Review all of the database entities or tables and their relationships. Briefly review the types of relationships whether they be one-to-one, one-to-many or many-to-many relationships. Now, most of the tables within this diagram have one-to-many relationships. You won't see too many many-to-many relationships between keys, but we can infer lots of many-to-many relationships between non-key fields. You'll also see in this model, we have tables that begin with Dim and Fact. These represent your Dimension and Fact tables which are common within a star schema database. Let's start by first taking a look at the AdventureWorks database from Visual Studio Code. Let's start by opening up a new terminal and typing in sqlite3. And then let's open our AdventureWorks database AdventureWorks.db. Let's add some additional parameters for formatting the results on the command line to show the [SQL](../../Skills/Data%20Science/SQL.md) results in a more readable format. So I'll use .headers on to turn the headers on so that we can see headers for our columns. And we'll do .mode [HTML](../../Skills/Web%20Development/HTML.md) and .output AdventureWorks_docs.html.
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=94)** And this will allow us to create our output in the HTML format and place it within the AdventureWorks_docs.html file that you can see it right here. Next from the command line, let's type in .tables and this will return a list of all the tables within the database without any additional details. Next, one thing that's going to be really important as we get ready to join data from different tables is the table size. And we can do that by creating a script that counts the number of rows for each table. For each of the tables listed, we can create a SQL query that will calculate the number of rows. So for example, we can type in select "Number of rows in DimCustomer"
>
> **[2:31](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=151)** and this will just put a label on our output that says number of rows for DimCustomer. Hit Enter here and then we'll put in select count(1), just to count the first column, from DimCustomer.
>
> **[2:54](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=174)** And again, you can repeat this for all of the tables within the database. Now all of the information about the tables in the database is kept in a table called the sqlite_master table. And we can also run queries against this table to get information about the database scheme. So let's grab some information from the sqlite_master table about the DimCustomer table using the following. So we're going to type in select all, select * from sqlite_master where DimCustomer or name='DimCustomer'. Okay, now there we go. And we can see information from the sqlite_master table. The results you should see are all columns in the sqlite_master table including type, name, the table name, the root page, and the SQL which is the create script to use to create this table. To get just the create script for the DimCustomer table we can type in the following. We can do select sql from sqlite_master where name='DimCustomer'
>
> **[4:21](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=261)** Hit Enter We could also do the same thing for all the tables and we could change the DimCustomer equals into an in statement. So I can do select SQL from sqlite_master where name is in and then have a list of all my table names like DimCustomer, let's see, DimCurrency, DimProduct and we can list all of the tables there as needed. You can see in our HTML file we have create table statements from all of those tables there. Now you can sync your work to your forked repo by clicking on the code space sync and then to commit to commit your HTML file to your repo. You can also choose to put these commands within a text file itself and rerun those as needed as well. Now that we reviewed some basics on table descriptions let's look at some more commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (5)
> **Code Identifiers:** sqlite_master (7)
> **Env Vars:** sql (4), html (3)
> **Tools:** command line (2), visual studio (1), terminal (1)
> **File Paths:** adventureworks_docs.html (2)
> **CLI Commands:** sqlite3 (1)
> **Analogies:** for example (1)
> **Speakers:** - review (1)

#### [Try it: Table and column description SQL commands](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=1)** (keys clicking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=2)** - [Instructor] Let's create a few scripts to describe the columns in our tables. We'll first create a script that documents the different attributes for each table and their constraints. We're going to add to the documentation we created earlier so if you haven't already, let's make sure we type in the following, .mode space [HTML](../../Skills/Web%20Development/HTML.md) and .output space adventureworks_docs.html into the SQLite [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) in the terminal. This allows us to create our output in the HTML format and place it in the adventureworks_docs.html file. Next, let's include a list of all our tables into our HTML document. Here's a list of helpful statements that you can use, .print then space and then we're going to put, List of Database Tables. You can also print some hyphens to create some formatting and the .tables to create your list of tables. Next, for each table, let's run the command table_info and include a comment above each table. Here's some help to get you started, .print, the table name, table, some additional formatting and then the PRAGMA statement, table_info, and then the name of the table within quotations. You can also create your custom shell script with all of these commands and save it, so that you can go back and rerun it as many times as you want. You can create this file by creating a new file within your Explorer window and calling it create_documentation.sh.
>
> **[1:39](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=99)** You can use the following structure and save it as the create_documentation.sh file. You can review your solution within the solution directory within [GitHub](../../Skills/Software%20Development/GitHub.md). The HTML documentation that you build can not only be used for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this practice course, but also as a template for any SQLite projects you may work with in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** adventureworks_docs (2), table_info (2), create_documentation (2)
> **Env Vars:** html (3), cli (1), pragma (1)
> **File Paths:** adventureworks_docs.html (2), create_documentation.sh (2)
> **Tools:** terminal (1), github (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)

#### [Check it: Table and column description SQL commands](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=0)** (sfx)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=2)** - In this practice we examined each table's column, and its constraints. We want to especially pay attention to the primary and foreign keys on each table. What are the data types of those columns, and are the data types consistent ,throughout the database, for the same piece of information? To begin, let's explore the .schema command. .schema. Now, when we run this command alone, it will create a "Create Table" statement for every table within our database. When we run with a table name such as .schema DimCustomer.
>
> **[0:45](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=45)** It will output the "Create Table" statement just for that specific table, and we can look at the entire adventure work schema by just typing in the .schema command. This will also include the primary and foreign keys ,defined in the table, along with the references to another table if it does include a foreign key. The dot schema command will also include detailed table constraint information, if there are any other constraints on the table ,such as, on-delete or on-update cascade commands. For each table, we can also run a PRAGMA table info command on it. So let's do PRAGMA table_info on DimCustomer. The results show the index of the column, the column name, the data type, and constraints on the columns. This returns one row for each column if within the table. Now you can find more information about PRAGMA statements in the SQLite documentation at [sqlite.org](https://sqlite.org). These commands give us a little bit more information about the columns within our tables. Now, let's bring it all together with table information ,and joins in the next practice.

> [!info]- Semantic Content
>
> **Env Vars:** pragma (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** table_info (1)
> **URLs:** [sqlite.org](https://sqlite.org) (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 2. Inner Join

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding inner joins](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=0)** - [Instructor] Before we dive right into practicing inner joins, let's review the inner join and how it reacts in different types of relationships. Let's take a look at this diagram of Table A and Table B. Let's say they both share an ID field that can be used to join the two tables together. If we were to write a query with a condition of Table A.ID equals Table B.ID, the resulting dataset would return only the rows where the ID on Table A matches the ID on Table B. So the inner join, as shown in this diagram, will result in a limited dataset that includes only the rows where only the IDs for both tables match. It is important to note that in order for a record to appear in the result, it has to be present on both tables. So for instance, record with the ID 456 would not be returned. Let's take a look at the syntax for the inner join. This says select star from Table A, inner join Table B on Table A.ID equals Table B.ID. The condition to join the two tables, known as the join condition, tells our statement how to join the tables together. The join condition appears after the on keyword. So in this case, the join condition is Table A.ID equals Table B.ID. The result is the same as if we were to write
>
> **[1:36](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=96)** select star from Table A and Table B where Table A.ID equals Table B.ID. Going back to our design documentation, we will normally join tables on keys, such as the primary and foreign keys, but you can also join on non-key columns. But be aware that our columns may not be indexed and it could cause you some performance issues. So back to using keys, for example, if we have a customer and a sales table, say for instance Dem Customer, and your Fact Internet sales table, you have the customer ID as the primary key on the customer table and the customer ID as a foreign key on your sales table. Our results can vary depending on the types of joins we use and the columns we include in our query. So let's start by practicing some inner joins within the AdventureWorks database with different types of relationships to see how that impacts our query results.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), such as (1), for example (1)
> **Warnings:** note that (1), be aware (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Inner join](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=1)** - [Instructor] Now it's your turn to practice some inner joins. Take a look at the AdventureWorks database, and the documentation that you created from Chapter 1. First, identify some possible one-to-one relationships. You may have to create a new table by normalizing or creating two separate tables from one that already exists. You can also do this by creating views. If you do, don't forget to modify your scripts from Chapter 1 to include any new tables that you created. Practice performing an inner join on your one-to-one relationship, and return all the columns from both tables and review the results. Next, go over your documentation to find one-to-many relationships. There's many to choose from by identifying and reviewing the references in foreign keys. Practice performing an inner join on the one-to-many relationship and return all the columns from both tables. Many-to-many relationships are pretty hard to find within this data set using keys so you can practice many-to-many relationships by joining non-key columns such as dates. Practice performing the inner join on many-to-many relationships and return all the columns from both tables. Here's a question, where would many-to-many joins be useful, and why should you be wary of using them, especially on larger tables? Don't forget to come back and check your work in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Check it: Inner join](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=2)** - Let's begin by looking at the different types of relationships between tables in AdventureWorks. First, let's look at some one-to-one relationships. This would be where one record on one table can only match one record on a second table. In AdventureWorks we don't see many examples of one-to-one relationships, but let's say we decide to create a new table that can have a one-to-one relationship with one of our existing tables. If we add another level of normalization to the customer table and remove the customer address information we can create a one-to-one relationship between a view of the subset of the customer table and a view of the customer address information. So, we can take address line one address line two, and geography key, and move those to a customer address view. And take just a few columns of the customer table into a view for customer birthday. A once a many example would be created if we had multiple customers at the same address. But since we are creating from the same table, we'll assume this is a one-to-one relationship. To join these two views, we'll use the customer key. To perform an inner join on these two tables, we will use the following code. Inner joins are also used when combining data from two tables with a one to many relationship. Let's see what happens with an inner join on a one-to-many relationship.
>
> **[1:36](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=96)** The foreign key on a table based on the primary key of another table means that the table with the foreign key can have one or more records related to a single record on the table with the primary key. This can result in a one-to-many relationship. Let's look at the DimCustomer table and the FactInternetSales table. The customer key is the foreign key relationship on the internet sales that we'll use to join to DimCustomer. This is a possible one-to-many relationship. What happens when we do an inner join on customer to internet sales? If we write select a.* and b.* star from DimCustomer give it an alias of a and inner join to FactInternetSales with an alias of b on customer key. And then order by the customer id. Let's run query, run query. We'll get all records from FactInternetSales that match to customer. Note that the customer information is repeated for every row that matches to internet sales.
>
> **[3:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=182)** If we reverse the order of the tables listed and select a.* b.* from FactInternetSales as alias a first, and then enter join to dimCustomer b we get the same number of rows returned and the order of the results just lists the information from the FactInternetSales first and repeated the customer information at the end. Now, what happens when we try to join tables that have a many-to-many relationship? A many-to-many relationship occurs when the key that joins the relationship between the tables is not unique on either table. What happens if we try to join the order date on the FactInternetSales table to the date on FactSurveyResponse? Now, we're not sure why we want to do this but let's look at what happens if you did. So we'll do a select a.* select b.* from FactInternetSales and inner join to FactSurveyResponse. We're joining order date on the FactInternetSales table to the date on FactSurveyResponse. We'll go to view command palette, run the query on AdventureWorks. We'll return every record on internet sales where the order date matches the date on FactSurveyResponse. Now this results in over 19,000 records in the resulting data set. We don't know if that's what we want to do here.
>
> **[4:40](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=280)** So, you will usually see some intermediate table used whenever there's a many-to-many relationship. We'd also want to probably use some additional criteria in the where clause to limit this query. So to review, we've looked at inner joins from a one-to-one, one-to-many, and many-to-many relationship. Always remember to look at your documentation to ensure you're joining compatible data types and the references to related tables.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** dimcustomer (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)

#### [Understanding self joins](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=0)** - [Instructor] A self-join is also known as a recursive relationship when a column in a table is related to the same column in the same table. The self-join is useful for comparing values in a column to other values in the same column. Let's say we need a list of all [products](../../Skills/Software%20Development/Microsoft%20Products.md) in the same product sub-category. We can use a self-join in this case on the dim product table. In the following [SQL](../../Skills/Data%20Science/SQL.md) statement, we perform an inner join on the dim product table to the same dim product table and in the "on" criteria, we choose the product keys that don't match, but are in the same product sub-category. The resulting data set gives us all of the products that are in the same product sub-class as a product in the first column. It also gives us the product subcategory key in the last column. In some RDBMSs, we can add a foreign key referencing that primary key of the same table in an alter statement. However, in SQLite, we aren't able to add the "alter table" statement to add constraints and foreign keys. Those have to be defined when we create the table. Another barrier is that we can't create a foreign key to a column within the same table without that table first being created. We can still have this type of self-join relationship, however, it just won't be defined in the foreign key definition. Now, let's take a look at Venture Works database and the self-join in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Self join](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=2)** - [Narrator] Now it's your turn to practice some self joins. There are some additional self join relationships within AdventureWorks database, where the same concept applies. In this practice, we'll perform a self join on the DIM employee table based on the EmployeeKey and the ParentEmployeeKey. Check your database documentation to find the remaining self join relationship within AdventureWorks. Next, write a sequel query that returns the employee name and the manager's name using the EmployeeKey and the ParentEmployeeKey for your self join in. Also, feel free to save your queries to your form copy of the repository as .[SQL](../../Skills/Data%20Science/SQL.md) files. You can also review your solution with the solution files in the [GitHub](../../Skills/Software%20Development/GitHub.md) repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** dim (1), sql (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [narrator] (1)

#### [Check it: Self join](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=2)** - Here's a common example of self joins demonstrated within the AdventureWorks database. On the DemEmployee's table, we have the EmployeeKey which is the primary key for the table and of course it is a unique identifier for each employee. Instead of creating a separate table for managers this table includes a ParentEmployeeKey to indicate the employee's direct manager. We can use an inner join from the DemEmployee table to itself, joining the ParentEmployeeKey to EmployeeKey. Let's look at how we would perform this join here. We can write this in the IDE and run the query using the command palette I showed you earlier. In this query, we can use aliases to keep up with the columns for the employee and manager and to find how to join the ParentEmployeeKey and the EmployeeKey. Now, this isn't a super difficult concept but needed to point out that a table can have a relationship with itself and how the inner join comes into play here.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - here (1)


### 3. Left Join

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding left joins](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=0)** - [Instructor] Let's get ready to learn more about what we call left joins. You'll sometimes hear them referred to as left outer joins. Some people wonder what we mean when we say left and right in [SQL](../../Skills/Data%20Science/SQL.md). Well, it's pretty simple. If you imagine listing two tables next to each other, the first table is the left table, and the second table is the right table. When writing SQL, the first table listed in the from statement, this is known as the left table, as it is mentioned at the left of the join. So from this logic, can we guess where the right table is? Yep, it's the table listed to the right of the join clause. Now let's talk a little bit about the outer join part. The left outer join will return all of the rows on the left table and the matched rows from the right table. For example, let's say we have a customer table with a customer's ID, name, and address. And a second table, let's call it customer email, with a customer's email address. Let's also mention that every customer does not have an email address. First, let's use an example of a one to one relationship between customer and customer email. If we perform a left outer join, we return all of our customer records and those that have an email address will also have an email address in that column. If the customer does not have an email address, then the column for that row is null. So what happens when there's a possibility of more than one customer email address and the relationship
>
> **[1:35](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=95)** between customer and customer email is one to many. Here's that visual. If a customer has more than one email address, then the customer record is repeated for each row in the customer email table where the customer IDs match. When we perform left and right joins, the outer syntax is implied. So writing outer is optional when writing the syntax, but it's helpful to write it out. Now let's get ready to practice some left joins on the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (2)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Left join](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=0)** - Let's practice some left joints in AdventureWorks. We'll begin by first normalizing the DimCustomer table to create some one-to-one relationships. Here are two provided scripts to create a view of customer key and email address for customers with a letter A and their email address and a view of customers with the CustomerKey, AddressLine1, AddressLine2 and the GeographyKey with those with a geographic region in the United States. Practice left joins between the DimCustomer table and these two views on CustomerKey and DimCustomer as your left or base table. Include the CustomerKey, FirstName and LastName from the DimCustomer table and EmailAddress from the customer_email_a view and the GeographyKey from the customer_address_us view within your select statement. Notice those columns that are return null within your data results. Next, we'll practice a left joint on a one-to-many relationship. In this exercise, we'll look at the AdventureWorks product and sales. We should have some [products](../../Skills/Software%20Development/Microsoft%20Products.md) that have not sold and some products that have sold more than once. Practice left joins between the DimProduct and FactInternetSales on ProductKey. First try a left join that returns the ProductKey from DimProduct and the total sales for each product from FactInternetSales. Next, create another query that returns the ProductKey, the EnglishProductName, from the DimProduct table, and the OrderDate, OrderQuantity and SalesAmount
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=94)** from the FactInternetSales table and include those in your select statement. Notice those columns that are returned null from the views. Try these exercises in your code space and as always you can check your solution against the solution files within [GitHub](../../Skills/Software%20Development/GitHub.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Code Identifiers:** customer_email_a (1), customer_address_us (1)
> **Non-Speech:** (beeping) (1), (typing) (1)
> **Tools:** github (1)
> **Speakers:** - let (1)

#### [Check it: Left join](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=2)** - [Instructor] Let's take a look at the one-to-one relationships we created with the customer data. First, we created the two views from the scripts provided to practice a left join with a one-to-one relationship we created a view of customer email addresses with a letter A and US customer addresses. We can create a one-to-one join from Dim customers to the customer email view. Here's a select statement with the Dim customer table Joined to the customer email A table and the customer address US table. If the customer key is not found on the email view the data result shows a no value for the email address that's returned for that view. Many of the one-to-one relationships within AdventureWorks have been de-normalized to include a lot of columns within one table similar to the Dim customer table. Note, a left join on a one-to-one relationship will still return a data set that is the same amount of rows as the left table. For one to many relationships, we'll look at our product and sales. We should have some [products](../../Skills/Software%20Development/Microsoft%20Products.md) that have not sold and some products that have sold more than once. Let's look at the following sequel: our left table is our DIM product table and our internet sales are on the right. We've selected our product key along with the sum of sales from our internet sales table. In the second query, the sequel includes the product key,
>
> **[1:37](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=97)** the English product name, and the order date, order quantity and sales amount from the fact internet sales table. You see we've done a left join with the Dim product table as our left table and fact internet sales as the table on the right and we join on product key.
>
> **[2:01](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=121)** You'll notice that products that do not include sales have no values for those sales columns.
>
> **[2:13](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=133)** Also notice the length of time it takes to run these kinds of queries. So a couple of things to note here: if we want to join, we should join on columns that are indexed, like our primary keys or make sure that if we're going to make frequent joins on columns other than our primary key that we are indexing those columns as well. The Dim product table here is the left or base table All records from the product table will be returned and the columns that match the product key on fact internet sales on the right are returned. Product to internet sales is a one to many relationship so we'll end up repeating lots of rows and product for each row that shows up on internet sales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3)
> **CLI Commands:** make (2)
> **Env Vars:** dim (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Multiple complex joins](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=0)** (keyboard keys clicking) [Instructor] Let's practice some more complex joins. In AdventureWorks, let's create a reseller query by getting the mailing address of all resellers within a geographic region. In this exercise, you'll practice both inner and left outer joins by combining the DimReseller table with a DimGeographic table, and output the reseller mailing address for customers within a geographic region and the region can be passed through your where clause. To make this even more interesting, we only want to output customers that have made purchases and output their product subcategory. You'll need to understand which tables will be your left table, as well as the relationship between DimReseller, DimGeography, DimProduct, and fact reseller sales. Here's a hint. More than one customer can buy the same product, and a customer can buy more than one product. So think about those relationships. I've included the solution files within [GitHub](../../Skills/Software%20Development/GitHub.md) however, please try this one first before going directly to the solution code. There may be more than one way to create this query so don't be discouraged if it isn't exactly the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Prerequisites:** you'll need (1)
> **Non-Speech:** (keyboard keys clicking) (1)

#### [Check it: Multiple complex joins](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=2)** - [Instructor] Of course there will be many instances where we'll be joining more than one table together in a query, and each table in the query may have a different type of relationship. So let's look at some more complex join examples using the tables within Adventure Works. If we look at the DimReseller table it has a foreign key of the geography key. With a reference to the DimGeography table, here we can get address line one and two from our retailer table. Then join to the geography table to get your city, state, postal code, and the country region code. Using the country region code, we can limit this to just the U.S or any country code that you've chosen. We've also returned the sales amount from our fact reseller sales table and we can include that in our order statement by ordering the sales amount in ascending order. We also joined the DimProduct table to the fact reseller sales table to get the product subcategory for each product sold. We've successfully joined tables using both inner and left outer joins.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 4. Right Join

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding right joins](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=0)** - [Instructor] You may not see right joins commonly in practice, but we'll go over these types of joins quickly for review. Right joins and full outer joins are not allowed in SQLite. However, we can pretty much replicate a right join by changing the order of the tables in the left join. And the right join is pretty much the opposite of a left join, so by switching the order of the tables in the left join, we are essentially performing a right join. The right join in this statement will be equal to the left join here with the tables reversed. Now, when would you want to switch the order of the tables and perform a right join? Since they pretty much perform the same thing, you can choose either a left or right join here, depending on how you want your data presented.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Try it: Right join](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=0)** (computer beeping) (keys ticking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=2)** - [Narrator] In this practice, we'll try some right outer joins. We'll do this by changing up some of the left joints in chapter three. The results should be similar. Also, try changing the order of the columns in your data results to notice how the left and right outer joins affect how the null values of non matched rows appear in your results.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (computer beeping) (1)

#### [Check it: Right join](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=1)** (logo blipping)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=2)** - [Instructor] Let's practice a couple of examples of changing the "LEFT JOIN" to simulate a "RIGHT JOIN" in practice. Let's start with an existing "LEFT JOIN." Here we have the "DimProduct" and "FactInternetSales" tables. If we were to perform a "LEFT JOIN" here, we're taking the "ProductKey" and "EnglishProductName" from the product table and all fields from "FactInternetSales." "DimProduct" is our left table, and "FactInternetSales" is our right and we're joining on the "ProductKey." This will result in all [products](../../Skills/Software%20Development/Microsoft%20Products.md) from the product table and those that did not have a match to internet sales, resulting in null values for those internet sales columns. Let's switch this statement around. Keep the "LEFT JOIN" syntax here and just change the order of the tables, making the internet sales table, your left table. This will result in all "FactInternetSales" with the corresponding product information. This query could be useful in identifying missing product information from products still in the sales table that could have been removed from the "DimProduct" table. As you can see, this query is helpful for identifying null values, as you can order the datasets columns in descending and ascending order and group your null values together. That's really helpful in doing research and analysis on your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Env Vars:** join (5), left (4), right (1)
> **SQL:** left join (4), join (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Full outer join](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=2)** - Let's practice some full outer joins in Adventure Works. The resulting data set will consist of all rows from both tables in the join with matched and unmatched rows. Like the left join, unmatched columns in a row will have no values. In some RDBMSs, you'll be able to use the full outer join between two tables with the syntax similar to this example. In SQLite we don't have a full outer join available for us to use. However, we can union two left joins together to create a similar result. It's also a great visual of how the full outer join works as well. And here's how that works, we take the left and right outer join and union those two statements together. The order of the columns in both statements in the union must match and be in the same order. Your challenge is to perform a full outer join on customers within the United States and the Internet Sales. You can use the customer address US view to help. So you'll perform a full outer join on customer address US view, and the fact internet sales table. You'll need to identify the keys to join as well as remember how to perform the full outer joint in SQLite. Once you have a solution, feel free to check it against the solution query in Get Hub.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - let (1)

#### [Check it: Full outer join](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=2)** - [Instructor] Let's combine the left and right outer join to create a full outer join. In the [SQL](../../Skills/Data%20Science/SQL.md), you have a pretty simple solution of a left and right join statement here, union together. I can run this query by just right-clicking and choose Run Query. The first few values in the results show no values in the customer address information. We can go to some later results here and we can see there's customer keys and addresses that are available to us, because we've done a full outer join of both tables. So in summary, a full outer join is just the left join union together with the same left join with the tables reversed or a right join. You can try this code on other RDBMSs for additional practice using the full outer join syntax also.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. Cross Join

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding cross joins](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=0)** - [Instructor] The last join we're going to review is the cross join. This is also known as a Cartesian product and this is one where you have to be very careful because in this case, relationships don't matter at all. Imagine I have a hundred records in table A and 200 records in table B. If I were to do a cross join on these two tables for record one in table A I would repeat and join to all 200 records in table B. I would repeat this for all 100 records in table A, resulting in a data set with 20,000 rows. You can imagine this is not a very good idea for large tables as it could bring your database to a crawl. Cross joins are helpful for bringing together combinations from two different tables. You'll definitely want to stick to smaller tables when performing cross joins and we'll look at some examples in practice. The syntax looks like this. You can select all from table A, join B or select all from A cross join B.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Try it: Cross joins and Cartesian joins](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=1)** (keyboard clicking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=2)** - [Instructor] For this practice, let's take a look at possible cross joins that are applicable to the AdventureWorks database. You can pretty much choose any tables here, but keep in mind the number of rows in each table. Choose any two tables to perform our Cartesian join, but review your docs to find some smaller tables that could be more suitable. Which tables do you see where implementing a cross join would be helpful in the AdventureWorks database?

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Check it: Cross joins and Cartesian joins](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=0)** (logo chiming)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=2)** - [Instructor] Let's take a look at our ERD again, and find two small tables that we can use to create a cross join. I've identified a couple, I think, that will be good here, the DimDepartmentGroup and DimCurrency. I can check the number of roles for those columns by doing a select count for each table, and this documentation should also be in your chapter one documentation as well. You can do a run query on these two. Let's see here, I have to do this again, and get a count for each of the tables to get an idea of how big those tables are. In cross joins, tables do not have to have a relationship with one another. So, that's important to note here. The resulting data set shows every combination of DimCurrency with DimDepartmentGroup. Keep in mind, that resulting data sets will always be the number of rows in each table, multiplied by each other. Hence the name, Cartesian product. And there you have it. That's the last join we'll cover.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** erd (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with SQL](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=0)** - [Nikiya] Thanks for joining me in this [SQL](../../Skills/Data%20Science/SQL.md) practice. Congratulations on finishing this course, and I hope you've learned a lot of new data skills and enjoyed the material. If you're looking for more SQL-related coursework, there are many courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library from Basic SQL to Advanced SQL for [Data Science](../../Topics/Data%20Science.md), as well as specific courses for different [Database Management](../../Topics/Database%20Management.md) systems like [MySQL](../../Skills/Software%20Development/MySQL.md) and [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). If you're looking to find out different career paths you want to take your data skills, check out my other course on Finding Career Paths with SQL. You can also follow me on LinkedIn for more data and [Software Development](../../Topics/Software%20Development.md) content. Again, my name is Nikiya Simpson. Thanks for practicing SQL with me, and keep on learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Data Science](../../Topics/Data%20Science.md) (1), [Database Management](../../Topics/Database%20Management.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** sql (7)
> **CLI Commands:** mysql (1), find (1)
> **Speakers:** - [nikiya] (1)


## Instructor

- [Nikiya Simpson](../../Instructors/Data%20Science/Nikiya%20Simpson.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/practice-it-sql-joins-3085459/codespaces)

## Skills Covered

- SQL

## Path Context

### In [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)
← [SQL Practice- Window Functions](SQL%20Practice-%20Window%20Functions.md) | **5 of 9** | [Hands-On SQL Challenges- Test Your Knowledge](Hands-On%20SQL%20Challenges-%20Test%20Your%20Knowledge.md) →

## Appears In

- [SQL Hands-On Practice](../../Paths/Data%20Science/Learning%20Paths/SQL%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)